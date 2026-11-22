#!/usr/bin/env python3
"""Build src/data/lectionary.ts from Felix Just S.J.'s lectionary tables (catholic-resources.org).

Usage: python3 scripts/build-lectionary.py [CACHE_DIR] [--checks OUT.json]

Downloads the source pages into CACHE_DIR (default: <tmp>/lectionary-cache; pages already there are reused,
with a polite 1 s delay between downloads), parses the reading citations (US Lectionary for Mass 1998/2002
numbering, citations only, no Bible text) and writes src/data/lectionary.ts. With --checks it also writes the
(date, key) pairs found in the source's date columns, to cross-check the app calendar. Stdlib only, deterministic.

Ref format written: "<BOOKID> <chapter>:<verses>[; <chapter>:<verses>]" with eBible book ids (data/bibleBooks.ts),
verses comma-separated, cross-chapter ranges as "9:35-10:1", "+" joins turned into ", ".
"""

import html
import json
import os
import re
import sys
import tempfile
import time
import urllib.request

BASE_URL = 'https://catholic-resources.org/Lectionary/'
PAGES = [
    '1998USL-Advent', '1998USL-Christmas', '1998USL-Lent', '1998USL-Easter',
    '1998USL-OrdinaryA', '1998USL-OrdinaryB', '1998USL-OrdinaryC', '1998USL-Solemnities',
    '2002USL-Weekdays-AdventChristmas', '2002USL-Weekdays-Lent', '2002USL-Weekdays-Easter',
    '2002USL-Weekdays-OT-I', '2002USL-Weekdays-OT-II', '2002USL-Sanctoral',
]
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'src', 'data', 'lectionary.ts')

BOOKS = {
    'Gen': 'GEN', 'Exod': 'EXO', 'Lev': 'LEV', 'Num': 'NUM', 'Deut': 'DEU', 'Josh': 'JOS', 'Judg': 'JDG',
    'Ruth': 'RUT', '1 Sam': '1SA', '2 Sam': '2SA', '1 Kgs': '1KI', '2 Kgs': '2KI', '1 Chr': '1CH', '2 Chr': '2CH',
    'Ezra': 'EZR', 'Neh': 'NEH', 'Tob': 'TOB', 'Jdt': 'JDT', 'Esth': 'EST', '1 Macc': '1MA', '2 Macc': '2MA',
    'Job': 'JOB', 'Ps': 'PSA', 'Psalm': 'PSA', 'Prov': 'PRO', 'Eccl': 'ECC', 'Cant': 'SOL', 'Song': 'SOL',
    'Wis': 'WIS', 'Sir': 'SIR', 'Isa': 'ISA', 'Jer': 'JER', 'Lam': 'LAM', 'Bar': 'BAR', 'Ezek': 'EZE',
    'Dan': 'DAN', 'Daniel': 'DAN', 'Hos': 'HOS', 'Joel': 'JOE', 'Amos': 'AMO', 'Obad': 'OBA', 'Jonah': 'JON',
    'Mic': 'MIC', 'Nah': 'NAH', 'Hab': 'HAB', 'Zeph': 'ZEP', 'Hag': 'HAG', 'Zech': 'ZEC', 'Mal': 'MAL',
    'Matt': 'MAT', 'Mark': 'MAR', 'Luke': 'LUK', 'John': 'JOH', 'Acts': 'ACT', 'Rom': 'ROM', '1 Cor': '1CO',
    '2 Cor': '2CO', 'Gal': 'GAL', 'Eph': 'EPH', 'Phil': 'PHI', 'Col': 'COL', '1 Thess': '1TH', '2 Thess': '2TH',
    '1 Tim': '1TI', '2 Tim': '2TI', 'Titus': 'TIT', 'Phlm': 'PHM', 'Heb': 'HEB', 'Jas': 'JAM', '1 Pet': '1PE',
    '2 Pet': '2PE', '1 John': '1JO', '2 John': '2JO', '3 John': '3JO', 'Jude': 'JUD', 'Rev': 'REV',
}
SINGLE_CHAPTER = {'OBA', 'PHM', '2JO', '3JO', 'JUD'}
DAYS = {'Mon': 1, 'Tues': 2, 'Wed': 3, 'Thurs': 4, 'Fri': 5, 'Sat': 6}
DAY_WORDS = {'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6}
MONTHS = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'June': 6, 'July': 7, 'Aug': 8, 'Sept': 9, 'Oct': 10,
          'Nov': 11, 'Dec': 12}

ITEM = r'\d+[a-z]*(?:-(?:\d+:)?\d+[a-z]*)?'
VLIST = ITEM + r'(?:, ' + ITEM + r')*'
REF_RE = re.compile(r'^[0-9A-Z]{3} (?:\d+|[A-F]):' + VLIST + r'(?:; \d+:' + VLIST + r')*$')

errors = []


# ---------------------------------------------------------------- download & table extraction

def fetch(cache_dir):
    os.makedirs(cache_dir, exist_ok=True)
    first = True
    for name in PAGES:
        path = os.path.join(cache_dir, name + '.htm')
        if os.path.exists(path) and os.path.getsize(path) > 0:
            continue
        if not first:
            time.sleep(1)
        first = False
        req = urllib.request.Request(BASE_URL + name + '.htm', headers={'User-Agent': 'lectionary-builder'})
        with urllib.request.urlopen(req, timeout=60) as res:
            data = res.read()
        with open(path, 'wb') as f:
            f.write(data)


def rows(cache_dir, name):
    with open(os.path.join(cache_dir, name + '.htm'), encoding='utf-8', errors='replace') as f:
        text = f.read()
    out = []
    for tr in re.findall(r'<tr[^>]*>(.*?)</tr>', text, re.S | re.I):
        cells = []
        for cell in re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', tr, re.S | re.I):
            cell = re.sub(r'<br\s*/?>', ' ', cell, flags=re.I)
            cell = re.sub(r'<[^>]+>', '', cell)
            cell = html.unescape(cell).replace('\xa0', ' ')
            cells.append(re.sub(r'\s+', ' ', cell).strip())
        out.append(cells)
    return out


# ---------------------------------------------------------------- citation parsing

def clean(s):
    s = re.sub(r'\(#[\d.]+\)', '', s)
    s = s.replace('Eccl/Qoh', 'Eccl')
    s = re.sub(r'\((?:diff|new|note)\)', '', s)
    # Sirach: "Sir 3:3-7 - Vg = Sir 3:2-6 - Gk" → the Greek (NABRE) numbering.
    m = re.search(r'- Vg\s*=\s*(.+?)\s*- Gk', s)
    if m:
        s = m.group(1)
    s = re.sub(r'\(or, in (?:Year|Yr) [ABC], (.*?)\)', r' or \1', s)
    s = re.sub(r'or, in (?:Year|Yr) [ABC], ', 'or ', s)
    s = re.sub(r'[;,]?\s*or (?:the )?(?:reading|Psalm) from Year A', '', s)
    s = re.sub(r'\([^)]*[A-Za-z]{3,}[^)]*\)', '', s)          # "(for afternoon Masses)", "(Jesus appears ...)"
    s = re.sub(r'\[[^\]]*[A-Za-z]{2,}[^\]]*\]', '', s)        # "[text prints vv. 6-7; see note]", "[Vulg.]"
    s = re.sub(r'\[([^\]]*)\]', r'\1', s)                     # "[6-7,]" optional verses: keep
    s = re.sub(r'(?:\bopt\.?:|\boptional:|\b[Cc]f\.|\bSee\b)\s*', '', s)
    s = s.replace('†', '').replace('*', '')
    s = re.sub(r'\s+–\s+[A-Za-z&\' ]+?(?=\s+or\s|$)', '', s)   # " – Temptation" gospel titles
    s = re.sub(r'\s+', ' ', s).strip()
    return s


def norm_verses(rest):
    rest = rest.replace('—', '-').replace('+', ', ')
    rest = re.sub(r'\s*-\s*', '-', rest)
    rest = re.sub(r'\s*;\s*', '; ', rest)
    rest = re.sub(r'\s*,\s*', ', ', rest)
    rest = re.sub(r'(, )+', ', ', rest)
    rest = rest.replace(', ;', ';')
    return rest.strip(' ,;.')


def parse_alt(text, prev):
    """One citation; `prev` = (book, chapter) of the previous alternative for short forms like "1:1-5"."""
    m = re.match(r'^((?:[123] )?[A-Z][a-z]+)\.?\s+(.*)$', text)
    if m and m.group(1) in BOOKS:
        book, rest = BOOKS[m.group(1)], m.group(2)
    elif prev and re.match(r'^[\dA-F]', text):
        book, rest = prev[0], text
        if ':' not in re.split(r'[;,]', rest)[0]:
            rest = prev[1] + ':' + rest
    else:
        errors.append('unparsed citation: %r' % text)
        return None
    if book in SINGLE_CHAPTER and ':' not in rest:
        rest = '1:' + rest
    ref = '%s %s' % (book, norm_verses(rest))
    if not REF_RE.match(ref):
        errors.append('bad ref %r (from %r)' % (ref, text))
    return ref


def refs(cell, prev=None):
    """All alternatives of a cell, main (first) form first."""
    s = clean(cell or '')
    if s in ('', 'x', '.') or not re.search(r'\d', s):
        return []
    out = []
    for alt in re.split(r'(?<![A-Za-z])or[\s,]+', s):
        alt = alt.strip(' ,;')
        if not alt:
            continue
        ref = parse_alt(alt, prev)
        if ref:
            out.append(ref)
            chapter = re.match(r'^\S+ ([\dA-F]+):', ref)
            prev = (ref.split(' ')[0], chapter.group(1) if chapter else '1')
    return out


def rd(kind, cell, prev=None):
    r = refs(cell, prev) if isinstance(cell, str) else cell
    return {'kind': kind, 'refs': r} if r else None


def mass(*readings, label=None):
    m = {'readings': [r for r in readings if r]}
    if label:
        m['label'] = label
    return m


def entry(*masses):
    return {'masses': list(masses)}


def by_cycle(cell):
    """ "A: Matt 21:1-11 B: Mark 11:1-10 or John 12:12-16 C: Luke 19:28-40" → {A: refs, B: refs, C: refs}."""
    parts = re.split(r'\b([ABC])[:)]\s+', cell)
    return {parts[i]: refs(parts[i + 1]) for i in range(1, len(parts) - 1, 2)}


# ---------------------------------------------------------------- dates (for the calendar cross-check)

checks = []


def add_check(date_cell, key, year=None):
    for token in re.findall(r'\[?\d{1,2}/\d{1,2}(?:/\d{2})?\]?\*?', date_cell or ''):
        if token.startswith('['):
            continue  # bracketed date = the day is supplanted by another celebration
        parts = token.rstrip('*').split('/')
        y = 2000 + int(parts[2]) if len(parts) == 3 else year
        checks.append(('%04d-%02d-%02d' % (y, int(parts[0]), int(parts[1])), key))
        if ' or ' in date_cell:
            break  # "5/14/26 or 5/17/26": Ascension Thursday (the app's date)


def add_check_dmy(cell, key):
    m = re.match(r'^(\d{1,2})-([A-Za-z]+)-(\d{2})$', cell or '')
    if m:
        checks.append(('20%s-%02d-%02d' % (m.group(3), MONTHS[m.group(2)], int(m.group(1))), key))


# ---------------------------------------------------------------- tables

CYCLE = {'A': {}, 'B': {}, 'C': {}}
WEEKDAY = {}
ORDINARY = {'I': {}, 'II': {}}


def cycle_of(name):
    m = re.search(r'[-–]\s*(ABC|A|B|C)\b', name)
    return m.group(1) if m else None


def sunday_page(cache, page, keyfn):
    """Pages with columns date, #, name, first, psalm, second, alleluia, gospel."""
    for r in rows(cache, page):
        if len(r) < 8:
            continue
        key = keyfn(r[2])
        if not key:
            continue
        cyc = cycle_of(r[2])
        e = entry(mass(rd('first', r[3]), rd('psalm', r[4]), rd('second', r[5]), rd('gospel', r[7])))
        for c in (['A', 'B', 'C'] if cyc == 'ABC' else [cyc]):
            CYCLE[c][key] = e
        add_check(r[0], key)


def ordinal_key(prefix, pattern):
    def fn(name):
        m = re.match(pattern, name)
        return '%s%s' % (prefix, m.group(1)) if m else None
    return fn


def ordinary_key(name):
    m = re.match(r'^(\d+)(?:st|nd|rd|th) (?:or Last )?Sunday in Ord', name)
    if not m:
        return None
    return 'christking' if m.group(1) == '34' else 'ot-%s' % m.group(1)


def build_christmas(cache):
    r = {row[1]: row for row in rows(cache, '1998USL-Christmas') if len(row) >= 8 and row[1].isdigit()}
    labels = {'13': 'Misa Vigili', '14': 'Misa Malam', '15': 'Misa Fajar', '16': 'Misa Siang'}
    masses = [mass(rd('first', r[n][3]), rd('psalm', r[n][4]), rd('second', r[n][5]), rd('gospel', r[n][7]),
                   label=labels[n]) for n in ('13', '14', '15', '16')]
    for c in 'ABC':
        CYCLE[c]['christmas'] = entry(*masses)
    for n, key in (('18', 'marymother'), ('20', 'epiphany')):
        row = r[n]
        for c in 'ABC':
            CYCLE[c][key] = entry(mass(rd('first', row[3]), rd('psalm', row[4]), rd('second', row[5]),
                                       rd('gospel', row[7])))
        add_check(row[0], key)
    # Holy Family (17) and Baptism (21): the ABC readings are the main ones; the optional B / C readings follow
    # as alternatives; the gospel is proper to each year.
    for n, key in (('17', 'holyfamily'), ('21', 'baptism')):
        all_rows = [row for row in rows(cache, '1998USL-Christmas') if len(row) >= 8 and row[1] == n]
        base = next(row for row in all_rows if cycle_of(row[2]) == 'ABC')
        for c in 'ABC':
            own = next((row for row in all_rows if cycle_of(row[2]) == c), None)
            parts = []
            for kind, col in (('first', 3), ('psalm', 4), ('second', 5)):
                parts.append(rd(kind, refs(base[col]) + (refs(own[col]) if own else [])))
            parts.append(rd('gospel', own[7] if own else base[7]))
            CYCLE[c][key] = entry(mass(*parts))
            add_check((own or base)[0], key)


def build_lent_sundays(cache):
    sunday_page(cache, '1998USL-Lent', ordinal_key('lent', r'^(\d)(?:st|nd|rd|th) Sunday of Lent'))
    rs = {row[1]: row for row in rows(cache, '1998USL-Lent') if len(row) >= 8}
    proc, passion = by_cycle(rs['37'][7]), by_cycle(rs['38'][7])
    m = rs['38']
    for c in 'ABC':
        CYCLE[c]['palm'] = entry(mass(rd('procession', proc[c]), rd('first', m[3]), rd('psalm', m[4]),
                                      rd('second', m[5]), rd('gospel', passion[c])))
    for i, d in enumerate(m[0].split()):
        add_check(d, 'palm')


def vigil_list(cell):
    parts = re.split(r'(?:^|\s)(\d)\)\s+', cell)
    return {int(parts[i]): parts[i + 1] for i in range(1, len(parts) - 1, 2)}


def build_easter_sundays(cache):
    page = rows(cache, '1998USL-Easter')
    by_num = {}
    for row in page:
        if len(row) >= 8:
            by_num.setdefault(row[1], []).append(row)
    sunday_page(cache, '1998USL-Easter', ordinal_key('easter', r'^(\d)(?:st|nd|rd|th) Sunday of Easter'))

    # Holy Thursday (Chrism Mass from the weekday page) and Good Friday.
    thu = by_num['39'][0]
    supper = mass(rd('first', thu[3]), rd('psalm', thu[4]), rd('second', thu[5]), rd('gospel', thu[7]),
                  label='Misa Perjamuan Tuhan')
    chrism_row = next(row for row in rows(cache, '2002USL-Weekdays-Lent') if len(row) >= 7 and 'Chrism' in row[2])
    first, second = chrism_row[3].split(' and ')
    chrism = mass(rd('first', first), rd('psalm', chrism_row[4]), rd('second', second), rd('gospel', chrism_row[6]),
                  label='Misa Krisma')
    fri = by_num['40'][0]
    for c in 'ABC':
        CYCLE[c]['holythu'] = entry(chrism, supper)
        CYCLE[c]['goodfri'] = entry(mass(rd('first', fri[3]), rd('psalm', fri[4]), rd('second', fri[5]),
                                         rd('gospel', fri[7])))
    for d in thu[0].split():
        add_check(d, 'holythu')
    for d in fri[0].split():
        add_check(d, 'goodfri')

    # Easter Vigil: 7 OT readings each with its psalm, epistle, psalm 118, gospel of the year.
    v = by_num['41'][0]
    ot, ps = vigil_list(v[3]), vigil_list(v[4])
    m = re.search(r'NT Reading:\s*(.+?)\s*Response after the Epistle:\s*(.+)$', v[5])
    gospels = by_cycle(v[7])
    if len(ot) != 7 or len(ps) != 7 or not m or set(gospels) != {'A', 'B', 'C'}:
        errors.append('Easter Vigil not parsed')
    vig = []
    for i in range(1, 8):
        vig += [rd('first', ot[i]), rd('psalm', ps[i])]
    vig += [rd('second', m.group(1)), rd('psalm', m.group(2))]
    for c in 'ABC':
        CYCLE[c]['eastervigil'] = entry(mass(*vig, rd('gospel', gospels[c])))
    for d in v[0].split():
        add_check(d, 'eastervigil')

    # Easter Sunday: day Mass, and the afternoon Mass with the Emmaus gospel.
    d = by_num['42'][0]
    gospel = refs(d[7])
    for c in 'ABC':
        CYCLE[c]['easter'] = entry(
            mass(rd('first', d[3]), rd('psalm', d[4]), rd('second', d[5]), rd('gospel', gospel[:1]),
                 label='Misa Pagi/Siang'),
            mass(rd('first', d[3]), rd('psalm', d[4]), rd('second', d[5]), rd('gospel', gospel[1:]),
                 label='Misa Sore'))
    for x in d[0].split():
        add_check(x, 'easter')

    # Ascension (58): A readings, with the optional B / C second readings as alternatives.
    asc = {cycle_of(row[2]): row for row in by_num['58']}
    for c in 'ABC':
        row = asc[c]
        second = refs(asc['A'][5]) + (refs(row[5]) if c != 'A' else [])
        CYCLE[c]['ascension'] = entry(mass(rd('first', row[3]), rd('psalm', row[4]), rd('second', second),
                                           rd('gospel', row[7])))
        add_check(row[0], 'ascension')

    # Pentecost: vigil (simple form) and day.
    vg = next(row for row in by_num['62'] if 'Extended' not in row[2])
    day = {cycle_of(row[2]): row for row in by_num['63']}
    for c in 'ABC':
        row = day[c]
        extra = (lambda col: refs(row[col]) if c != 'A' else [])
        CYCLE[c]['pentecost'] = entry(
            mass(rd('first', vg[3]), rd('psalm', vg[4]), rd('second', vg[5]), rd('gospel', vg[7]),
                 label='Misa Vigili'),
            mass(rd('first', row[3]), rd('psalm', row[4]), rd('second', refs(day['A'][5]) + extra(5)),
                 rd('gospel', refs(day['A'][7]) + extra(7)), label='Misa Siang'))
        add_check(row[0], 'pentecost')


def build_solemnities(cache):
    keyfn = {'Body': 'corpus', 'Corpus': 'corpus', 'Sacred Heart': 'sacredheart', 'Trinity': 'trinity'}

    def fn(name):
        for word, key in keyfn.items():
            if word in name:
                return key
        return None

    sunday_page(cache, '1998USL-Solemnities', fn)
    page = rows(cache, '1998USL-Solemnities')
    tr = next(row for row in page if row[0] == '614')
    gospels = by_cycle(tr[6])
    for c in 'ABC':
        CYCLE[c]['san-0806'] = entry(mass(rd('first', tr[3]), rd('psalm', tr[4]), rd('second', tr[5]),
                                          rd('gospel', gospels[c])))
    # All Souls: the first option of each reading (US Lectionary #668).
    souls = next(row for row in page if row[0] == '668')
    WEEKDAY['san-1102'] = entry(mass(*(rd(kind, refs(souls[col])[:1]) for kind, col in
                                      (('first', 3), ('psalm', 4), ('second', 5), ('gospel', 6)))))


def week_day(name):
    m = re.search(r'(\d)(?:st|nd|rd|th) Week of (?:Advent|Lent|Easter) [–-] (Mon|Tues|Wed|Thurs|Fri|Sat)\b', name)
    return (int(m.group(1)), DAYS[m.group(2)]) if m else None


def weekday_row(first, psalm, gospel, second=None):
    return entry(mass(rd('first', first), rd('psalm', psalm), rd('second', second) if second else None,
                      rd('gospel', gospel)))


def build_weekdays(cache):
    # Advent and Christmas weekdays.
    year = None
    for r in rows(cache, '2002USL-Weekdays-AdventChristmas'):
        if r and re.match(r'^\d{4}$', r[0]):
            year = int(r[0])
            continue
        if len(r) == 7:
            key = None
            wd = week_day(r[2])
            if wd:
                key = 'adv-%d-%d' % wd
            m = re.match(r'^December (\d+)', r[2])
            if m:
                key = 'adv-dec%s' % m.group(1)
            if key:
                WEEKDAY[key] = weekday_row(r[3], r[4], r[6])
                add_check(r[0], key, year)
        elif len(r) == 6:
            key = None
            m = re.match(r'^Dec\. (29|30|31) ', r[1])
            if m:
                key = 'chr-dec%s' % m.group(1)
            m = re.match(r'^\[?Jan\. ([2-7])\]? ', r[1])
            if m:
                key = 'chr-jan%s' % m.group(1)
            m = re.match(r'^(\w+day) after Epiphany', r[1])
            if m and m.group(1) in DAY_WORDS:
                key = 'epi-%d' % DAY_WORDS[m.group(1)]
            if key:
                WEEKDAY[key] = weekday_row(r[2], r[3], r[5])

    # Lent and Holy Week.
    ash = {'Ash Wednesday': 3, 'Thursday after Ash Wed.': 4, 'Friday after Ash Wed.': 5, 'Saturday after Ash Wed.': 6}
    holy = {'Holy Week – Mon': 1, 'Holy Week – Tues': 2, 'Holy Week – Wed': 3}
    for r in rows(cache, '2002USL-Weekdays-Lent'):
        if len(r) != 7:
            continue
        key = None
        if r[2] in ash:
            key = 'lent-0-%d' % ash[r[2]]
        elif r[2] in holy:
            key = 'holy-%d' % holy[r[2]]
        elif 'optional' not in r[2] and week_day(r[2]):
            key = 'lent-%d-%d' % week_day(r[2])
        if not key:
            continue
        first, second = (r[3].split(' and ') + [None])[:2]
        WEEKDAY[key] = weekday_row(first, r[4], r[6], second)
        add_check(r[0], key)

    # Easter weekdays.
    for r in rows(cache, '2002USL-Weekdays-Easter'):
        if len(r) != 7:
            continue
        m = re.match(r'^Octave of Easter - (Mon|Tues|Wed|Thurs|Fri|Sat)', r[2])
        key = 'easter-1-%d' % DAYS[m.group(1)] if m else None
        if not key and week_day(r[2]):
            key = 'easter-%d-%d' % week_day(r[2])
        if key:
            WEEKDAY[key] = weekday_row(r[3], r[4], r[6])
            add_check(r[0], key)

    # Ordinary Time weekdays: first reading and psalm per year, gospel shared.
    for cyc, page in (('I', '2002USL-Weekdays-OT-I'), ('II', '2002USL-Weekdays-OT-II')):
        for r in rows(cache, page):
            if len(r) != 7:
                continue
            m = re.match(r'^Week (\d+) - (Mon|Tues|Wed|Thurs|Fri|Sat)$', r[1])
            if not m:
                continue
            key = 'ord-%s-%d' % (m.group(1), DAYS[m.group(2)])
            ORDINARY[cyc][key] = weekday_row(r[2], r[3], r[5])
            add_check_dmy(r[6], key)


SANCTORAL = ['01-25', '02-02', '02-22', '03-19', '03-25', '04-25', '05-03', '05-14', '05-31', '06-24', '06-29',
             '07-03', '07-22', '07-25', '08-10', '08-15', '08-24', '09-08', '09-14', '09-21', '09-29', '10-18',
             '10-28', '11-01', '11-09', '11-30', '12-08', '12-26', '12-27', '12-28']
MONTH_NAMES = {'Jan': 1, 'Feb': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6, 'July': 7, 'Aug': 8, 'Sept': 9,
               'Oct': 10, 'Nov': 11, 'Dec': 12}


def build_sanctoral(cache):
    found = {}
    for r in rows(cache, '2002USL-Sanctoral'):
        if len(r) != 10:
            continue
        if 'Mother of the Church' in r[2] and 'Pentecost' in r[1]:
            WEEKDAY['marymotherchurch'] = entry(mass(rd('first', r[5]), rd('psalm', r[6]), rd('gospel', r[9])))
            continue
        m = re.match(r'^([A-Z][a-z]+)\.? (\d+)\*?(?: |$)', r[1])
        if not m or m.group(1) not in MONTH_NAMES or not re.match(r'^(Feast|Solemnity)', r[3]):
            continue
        md = '%02d-%02d' % (MONTH_NAMES[m.group(1)], int(m.group(2)))
        if md not in SANCTORAL or 'Vigil' in r[2]:
            continue
        found[md] = r
    for md in SANCTORAL:
        r = found.get(md)
        if not r:
            errors.append('sanctoral %s not found' % md)
            continue
        WEEKDAY['san-' + md.replace('-', '')] = entry(mass(rd('first', r[5]), rd('psalm', r[6]),
                                                           rd('second', r[7]), rd('gospel', r[9])))


# ---------------------------------------------------------------- output

def ts_str(s):
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"


def ts_entry(e, indent):
    """Entry body; the first line has no indentation (it follows the key)."""
    pad = ' ' * indent
    lines = ['{', pad + '  masses: [']
    for m in e['masses']:
        lines.append(pad + '    {')
        if 'label' in m:
            lines.append(pad + '      label: %s,' % ts_str(m['label']))
        lines.append(pad + '      readings: [')
        for r in m['readings']:
            lines.append(pad + "        { kind: '%s', refs: [%s] }," % (r['kind'], ', '.join(ts_str(x) for x in r['refs'])))
        lines.append(pad + '      ],')
        lines.append(pad + '    },')
    lines.append(pad + '  ],')
    lines.append(pad + '}')
    return '\n'.join(lines)


def ts_table(table, indent):
    pad = ' ' * indent
    return '\n'.join('%s%s: %s,' % (pad, ts_str(key), ts_entry(e, indent)) for key, e in table.items())


def sorted_table(table, order):
    return {k: table[k] for k in sorted(table, key=order)}


def key_order(key):
    m = re.match(r'^([a-z]+)-?(\d+)?(?:-(\d+))?$', key)
    groups = ['adv', 'chr', 'epi', 'lent', 'holy', 'easter', 'ord', 'ot', 'marymotherchurch', 'san']
    if key.startswith('adv-dec') or key.startswith('chr-'):
        prefix = key.split('-')[0]
        rest = key.split('-', 1)[1]
        return (groups.index(prefix), 1 if rest.startswith('jan') else 0, 99, int(re.sub(r'\D', '', rest)), key)
    if m and m.group(1) in groups:
        return (groups.index(m.group(1)), 0, int(m.group(2) or 0), int(m.group(3) or 0), key)
    return (99, 0, 0, 0, key)


CYCLE_ORDER = (['adv1', 'adv2', 'adv3', 'adv4', 'christmas', 'holyfamily', 'marymother', 'epiphany', 'baptism']
               + ['ot-%d' % n for n in range(2, 34)] + ['christking']
               + ['lent1', 'lent2', 'lent3', 'lent4', 'lent5', 'palm', 'holythu', 'goodfri', 'eastervigil', 'easter']
               + ['easter%d' % n for n in range(2, 8)]
               + ['ascension', 'pentecost', 'trinity', 'corpus', 'sacredheart', 'san-0806'])


def main():
    args = sys.argv[1:]
    checks_out = None
    if '--checks' in args:
        i = args.index('--checks')
        checks_out = args[i + 1]
        del args[i:i + 2]
    cache = args[0] if args else os.path.join(tempfile.gettempdir(), 'lectionary-cache')
    fetch(cache)

    sunday_page(cache, '1998USL-Advent', ordinal_key('adv', r'^(\d)(?:st|nd|rd|th) Sunday of Advent'))
    build_christmas(cache)
    for page in ('1998USL-OrdinaryA', '1998USL-OrdinaryB', '1998USL-OrdinaryC'):
        sunday_page(cache, page, ordinary_key)
    build_lent_sundays(cache)
    build_easter_sundays(cache)
    build_solemnities(cache)
    build_weekdays(cache)
    build_sanctoral(cache)

    for c in 'ABC':
        extra = [k for k in CYCLE[c] if k not in CYCLE_ORDER]
        if extra:
            errors.append('cycle %s: unexpected keys %s' % (c, extra))
        CYCLE[c] = {k: CYCLE[c][k] for k in CYCLE_ORDER if k in CYCLE[c]}

    if errors:
        for e in errors:
            print('ERROR:', e, file=sys.stderr)
        sys.exit(1)

    weekday = sorted_table(WEEKDAY, key_order)
    out = [
        '// GENERATED by scripts/build-lectionary.py — never hand-edit; re-run the script instead.',
        '// Source: Felix Just, S.J., Lectionary tables (https://catholic-resources.org/Lectionary/), following the',
        '// Lectionary for Mass for use in the Dioceses of the USA (1998 Sundays/solemnities, 2002 weekdays/saints),',
        '// with its reading numbers and NABRE versification. Citations only (no Bible text).',
        '// Ref format: "<BOOKID> <chapter>:<verses>[; <chapter>:<verses>]" with eBible book ids (data/bibleBooks.ts);',
        '// a cross-chapter range is "9:35-10:1"; "EST C:..." is a Greek Esther addition.',
        '// Mary, Mother of the Church (Monday after Pentecost) follows the Roman decree of 11 February 2018.',
        '',
        "export type ReadingKind = 'procession' | 'first' | 'psalm' | 'second' | 'gospel';",
        '',
        'export interface LectionaryReading {',
        '  kind: ReadingKind;',
        '  /** Alternatives; the first is the main (longer) form. */',
        '  refs: string[];',
        '}',
        '',
        'export interface LectionaryMass {',
        '  /** Indonesian label when a day has several Masses, e.g. "Misa Malam". */',
        '  label?: string;',
        '  readings: LectionaryReading[];',
        '}',
        '',
        'export interface LectionaryEntry {',
        '  masses: LectionaryMass[];',
        '}',
        '',
        '/** Sundays, solemnities and feasts of the Lord, per Sunday cycle (keys from lib/liturgicalCalendar). */',
        "export const LECTIONARY_CYCLE: Record<'A' | 'B' | 'C', Record<string, LectionaryEntry>> = {",
    ]
    for c in 'ABC':
        out += ['  %s: {' % c, ts_table(CYCLE[c], 4), '  },']
    out += [
        '};',
        '',
        '/** Weekdays of Advent, Christmas, Lent and Easter, Mary Mother of the Church, and fixed-date feasts. */',
        'export const LECTIONARY_WEEKDAY: Record<string, LectionaryEntry> = {',
        ts_table(weekday, 2),
        '};',
        '',
        '/** Weekdays in Ordinary Time per weekday cycle (first reading and psalm per year, gospel shared). */',
        "export const LECTIONARY_ORDINARY: Record<'I' | 'II', Record<string, LectionaryEntry>> = {",
    ]
    for c in ('I', 'II'):
        out += ['  %s: {' % c, ts_table(sorted_table(ORDINARY[c], key_order), 4), '  },']
    out += ['};', '']
    with open(OUT, 'w', encoding='utf-8') as f:
        f.write('\n'.join(out))
    print('wrote %s: cycle A/B/C %d/%d/%d, weekday %d, ordinary I/II %d/%d' % (
        os.path.relpath(OUT, ROOT), len(CYCLE['A']), len(CYCLE['B']), len(CYCLE['C']), len(weekday),
        len(ORDINARY['I']), len(ORDINARY['II'])))
    if checks_out:
        with open(checks_out, 'w', encoding='utf-8') as f:
            json.dump(sorted(set(checks)), f, indent=0)


if __name__ == '__main__':
    main()
