export type Testament = 'ot' | 'dc' | 'nt';

export interface BibleBook {
  /** Stable id (eBible / Paratext code). Greek Esther and Daniel use EST / DAN too, so a position survives a version switch. */
  id: string;
  testament: Testament;
  nameId: string;
  abbrId: string;
  nameEn: string;
  abbrEn: string;
  /** Book code on imankatolik.or.id, which hosts the official Indonesian Catholic text (TB + Deuterokanonika). */
  tbCode: string;
}

const book = (id: string, testament: Testament, nameId: string, abbrId: string, nameEn: string, abbrEn: string): BibleBook => ({
  id,
  testament,
  nameId,
  abbrId,
  nameEn,
  abbrEn,
  tbCode: abbrId.toLowerCase(),
});

/** The 73 books in Catholic canon order (as in the Indonesian "Alkitab Deuterokanonika"). */
export const BIBLE_BOOKS: BibleBook[] = [
  book('GEN', 'ot', 'Kejadian', 'Kej', 'Genesis', 'Gen'),
  book('EXO', 'ot', 'Keluaran', 'Kel', 'Exodus', 'Exod'),
  book('LEV', 'ot', 'Imamat', 'Im', 'Leviticus', 'Lev'),
  book('NUM', 'ot', 'Bilangan', 'Bil', 'Numbers', 'Num'),
  book('DEU', 'ot', 'Ulangan', 'Ul', 'Deuteronomy', 'Deut'),
  book('JOS', 'ot', 'Yosua', 'Yos', 'Joshua', 'Josh'),
  book('JDG', 'ot', 'Hakim-hakim', 'Hak', 'Judges', 'Judg'),
  book('RUT', 'ot', 'Rut', 'Rut', 'Ruth', 'Ruth'),
  book('1SA', 'ot', '1 Samuel', '1Sam', '1 Samuel', '1 Sam'),
  book('2SA', 'ot', '2 Samuel', '2Sam', '2 Samuel', '2 Sam'),
  book('1KI', 'ot', '1 Raja-raja', '1Raj', '1 Kings', '1 Kgs'),
  book('2KI', 'ot', '2 Raja-raja', '2Raj', '2 Kings', '2 Kgs'),
  book('1CH', 'ot', '1 Tawarikh', '1Taw', '1 Chronicles', '1 Chr'),
  book('2CH', 'ot', '2 Tawarikh', '2Taw', '2 Chronicles', '2 Chr'),
  book('EZR', 'ot', 'Ezra', 'Ezr', 'Ezra', 'Ezra'),
  book('NEH', 'ot', 'Nehemia', 'Neh', 'Nehemiah', 'Neh'),
  book('TOB', 'dc', 'Tobit', 'Tob', 'Tobit', 'Tob'),
  book('JDT', 'dc', 'Yudit', 'Ydt', 'Judith', 'Jdt'),
  book('EST', 'ot', 'Ester', 'Est', 'Esther', 'Esth'),
  book('1MA', 'dc', '1 Makabe', '1Mak', '1 Maccabees', '1 Macc'),
  book('2MA', 'dc', '2 Makabe', '2Mak', '2 Maccabees', '2 Macc'),
  book('JOB', 'ot', 'Ayub', 'Ayb', 'Job', 'Job'),
  book('PSA', 'ot', 'Mazmur', 'Mzm', 'Psalms', 'Ps'),
  book('PRO', 'ot', 'Amsal', 'Ams', 'Proverbs', 'Prov'),
  book('ECC', 'ot', 'Pengkhotbah', 'Pkh', 'Ecclesiastes', 'Eccl'),
  book('SOL', 'ot', 'Kidung Agung', 'Kid', 'Song of Songs', 'Song'),
  book('WIS', 'dc', 'Kebijaksanaan Salomo', 'Keb', 'Wisdom', 'Wis'),
  book('SIR', 'dc', 'Sirakh', 'Sir', 'Sirach', 'Sir'),
  book('ISA', 'ot', 'Yesaya', 'Yes', 'Isaiah', 'Isa'),
  book('JER', 'ot', 'Yeremia', 'Yer', 'Jeremiah', 'Jer'),
  book('LAM', 'ot', 'Ratapan', 'Rat', 'Lamentations', 'Lam'),
  book('BAR', 'dc', 'Barukh', 'Bar', 'Baruch', 'Bar'),
  book('EZE', 'ot', 'Yehezkiel', 'Yeh', 'Ezekiel', 'Ezek'),
  book('DAN', 'ot', 'Daniel', 'Dan', 'Daniel', 'Dan'),
  book('HOS', 'ot', 'Hosea', 'Hos', 'Hosea', 'Hos'),
  book('JOE', 'ot', 'Yoel', 'Yl', 'Joel', 'Joel'),
  book('AMO', 'ot', 'Amos', 'Am', 'Amos', 'Amos'),
  book('OBA', 'ot', 'Obaja', 'Ob', 'Obadiah', 'Obad'),
  book('JON', 'ot', 'Yunus', 'Yun', 'Jonah', 'Jonah'),
  book('MIC', 'ot', 'Mikha', 'Mi', 'Micah', 'Mic'),
  book('NAH', 'ot', 'Nahum', 'Nah', 'Nahum', 'Nah'),
  book('HAB', 'ot', 'Habakuk', 'Hab', 'Habakkuk', 'Hab'),
  book('ZEP', 'ot', 'Zefanya', 'Zef', 'Zephaniah', 'Zeph'),
  book('HAG', 'ot', 'Hagai', 'Hag', 'Haggai', 'Hag'),
  book('ZEC', 'ot', 'Zakharia', 'Za', 'Zechariah', 'Zech'),
  book('MAL', 'ot', 'Maleakhi', 'Mal', 'Malachi', 'Mal'),
  book('MAT', 'nt', 'Matius', 'Mat', 'Matthew', 'Matt'),
  book('MAR', 'nt', 'Markus', 'Mrk', 'Mark', 'Mark'),
  book('LUK', 'nt', 'Lukas', 'Luk', 'Luke', 'Luke'),
  book('JOH', 'nt', 'Yohanes', 'Yoh', 'John', 'John'),
  book('ACT', 'nt', 'Kisah Para Rasul', 'Kis', 'Acts', 'Acts'),
  book('ROM', 'nt', 'Roma', 'Rm', 'Romans', 'Rom'),
  book('1CO', 'nt', '1 Korintus', '1Kor', '1 Corinthians', '1 Cor'),
  book('2CO', 'nt', '2 Korintus', '2Kor', '2 Corinthians', '2 Cor'),
  book('GAL', 'nt', 'Galatia', 'Gal', 'Galatians', 'Gal'),
  book('EPH', 'nt', 'Efesus', 'Ef', 'Ephesians', 'Eph'),
  book('PHI', 'nt', 'Filipi', 'Flp', 'Philippians', 'Phil'),
  book('COL', 'nt', 'Kolose', 'Kol', 'Colossians', 'Col'),
  book('1TH', 'nt', '1 Tesalonika', '1Tes', '1 Thessalonians', '1 Thess'),
  book('2TH', 'nt', '2 Tesalonika', '2Tes', '2 Thessalonians', '2 Thess'),
  book('1TI', 'nt', '1 Timotius', '1Tim', '1 Timothy', '1 Tim'),
  book('2TI', 'nt', '2 Timotius', '2Tim', '2 Timothy', '2 Tim'),
  book('TIT', 'nt', 'Titus', 'Tit', 'Titus', 'Titus'),
  book('PHM', 'nt', 'Filemon', 'Flm', 'Philemon', 'Phlm'),
  book('HEB', 'nt', 'Ibrani', 'Ibr', 'Hebrews', 'Heb'),
  book('JAM', 'nt', 'Yakobus', 'Yak', 'James', 'Jas'),
  book('1PE', 'nt', '1 Petrus', '1Ptr', '1 Peter', '1 Pet'),
  book('2PE', 'nt', '2 Petrus', '2Ptr', '2 Peter', '2 Pet'),
  book('1JO', 'nt', '1 Yohanes', '1Yoh', '1 John', '1 John'),
  book('2JO', 'nt', '2 Yohanes', '2Yoh', '2 John', '2 John'),
  book('3JO', 'nt', '3 Yohanes', '3Yoh', '3 John', '3 John'),
  book('JUD', 'nt', 'Yudas', 'Yud', 'Jude', 'Jude'),
  book('REV', 'nt', 'Wahyu', 'Why', 'Revelation', 'Rev'),
];

export const TESTAMENT_LABELS: Record<Testament, { id: string; en: string }> = {
  ot: { id: 'Perjanjian Lama', en: 'Old Testament' },
  dc: { id: 'Deuterokanonika', en: 'Deuterocanonical' },
  nt: { id: 'Perjanjian Baru', en: 'New Testament' },
};

export type BibleLanguage = 'id' | 'en';

export interface BibleVersion {
  id: string;
  language: BibleLanguage;
  shortName: string;
  name: string;
  license: string;
  sourceUrl: string;
  note?: string;
}

/** Texts are bundled under public/bible/<id>/<BOOK>.json (built by scripts/build-bible.mjs). */
export const BIBLE_VERSIONS: BibleVersion[] = [
  {
    id: 'ayt',
    language: 'id',
    shortName: 'AYT',
    name: 'Alkitab Yang Terbuka',
    license: '© 2011–2024 YLSA-AYT · CC BY-NC-SA',
    sourceUrl: 'https://ebible.org/indayt/',
    note: 'Protestant canon: no Deuterocanonical books. Read those in the official Catholic text (TB) via the link.',
  },
  {
    id: 'webc',
    language: 'en',
    shortName: 'WEB-C',
    name: 'World English Bible (Catholic)',
    license: 'Public domain',
    sourceUrl: 'https://ebible.org/eng-web-c/',
    note: 'Catholic book order with all Deuterocanonical books. Esther and Daniel include the Greek parts, so some verse numbers differ.',
  },
  {
    id: 'bsb',
    language: 'en',
    shortName: 'BSB',
    name: 'Berean Standard Bible',
    license: 'Public domain',
    sourceUrl: 'https://ebible.org/engbsb/',
    note: 'Protestant canon: no Deuterocanonical books.',
  },
];

export const TB_SOURCE_NAME = 'TB (imankatolik.or.id)';
