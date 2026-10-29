/*
 * Medicine reference shown on the Medicine page. General information only — content (Indonesian, by request)
 * follows common package inserts and pediatric references (WHO, Kemenkes, BNF for Children, FDA labels).
 * Doses are typical starting points; the page tells users to follow their prescription.
 */

export type MedicineGroup =
  | 'wound-care'
  | 'scar-care'
  | 'skin-care'
  | 'antacid'
  | 'acid-reducer'
  | 'stomach-protector'
  | 'anti-nausea'
  | 'pain-fever'
  | 'diarrhea'
  | 'allergy';

export type Symptom =
  | 'burn'
  | 'open-wound'
  | 'scar'
  | 'dry-skin'
  | 'sun-protection'
  | 'itch-rash'
  | 'heartburn'
  | 'stomach-pain'
  | 'bloating'
  | 'ulcer'
  | 'h-pylori'
  | 'nausea-vomiting'
  | 'fever'
  | 'pain'
  | 'diarrhea'
  | 'allergy';

export type MedicineForm =
  | 'tablet'
  | 'chewable-tablet'
  | 'dispersible-tablet'
  | 'capsule'
  | 'syrup'
  | 'suspension'
  | 'drops'
  | 'sachet'
  | 'gel'
  | 'cream'
  | 'ointment'
  | 'lotion'
  | 'solution'
  | 'dressing'
  | 'sheet'
  | 'injection';

/** When to take it relative to meals. `external` = applied on the skin, not swallowed. */
export type MealTiming = 'before-meal' | 'after-meal' | 'any-time' | 'external';

export type Availability = 'otc' | 'prescription' | 'medical-device' | 'cosmetic' | 'withdrawn';

export type ChildUse = 'yes' | 'doctor' | 'not-recommended';

export type PregnancyUse = 'generally-ok' | 'ask-doctor' | 'avoid';

export interface Medicine {
  id: string;
  name: string;
  /** Brand names sold in Indonesia (examples, not endorsements). */
  brands: string[];
  /** Active ingredients; drives the composition filter. */
  ingredients: string[];
  group: MedicineGroup;
  symptoms: Symptom[];
  forms: MedicineForm[];
  timing: MealTiming;
  availability: Availability;
  childUse: ChildUse;
  pregnancy: PregnancyUse;
  summary: string;
  howItWorks: string;
  analogy?: string;
  /** When it is best used / taken. */
  bestTime: string[];
  howToUse: string[];
  dose: { adult: string[]; child: string[] };
  duration: string;
  /** Combining with other medicines. */
  interactions: string[];
  sideEffects: string[];
  warnings: string[];
  seeDoctor: string[];
  relatedIds?: string[];
}

export const GROUP_LABELS: Record<MedicineGroup, string> = {
  'wound-care': 'Wound care',
  'scar-care': 'Scar care',
  'skin-care': 'Skin care',
  antacid: 'Antacid / alginate',
  'acid-reducer': 'Acid reducer (H2, PPI, P-CAB)',
  'stomach-protector': 'Stomach lining protector',
  'anti-nausea': 'Anti-nausea',
  'pain-fever': 'Pain & fever',
  diarrhea: 'Diarrhea',
  allergy: 'Allergy & itch',
};

export const SYMPTOM_LABELS: Record<Symptom, string> = {
  burn: 'Burn',
  'open-wound': 'Open wound',
  scar: 'Scar',
  'dry-skin': 'Dry skin',
  'sun-protection': 'Sun protection',
  'itch-rash': 'Itch / rash',
  heartburn: 'Heartburn / reflux',
  'stomach-pain': 'Stomach pain (maag)',
  bloating: 'Bloating',
  ulcer: 'Stomach ulcer',
  'h-pylori': 'H. pylori',
  'nausea-vomiting': 'Nausea / vomiting',
  fever: 'Fever',
  pain: 'Pain',
  diarrhea: 'Diarrhea',
  allergy: 'Allergy',
};

/** Indonesian everyday words so searches like "maag" or "mual" find the right symptom. */
export const SYMPTOM_KEYWORDS: Record<Symptom, string[]> = {
  burn: ['luka bakar', 'knalpot', 'melepuh', 'terbakar', 'air panas'],
  'open-wound': ['luka', 'lecet', 'luka basah', 'luka terbuka', 'sayat'],
  scar: ['bekas luka', 'keloid', 'parut', 'koreng'],
  'dry-skin': ['kulit kering', 'pecah-pecah', 'pelembap'],
  'sun-protection': ['matahari', 'sinar uv', 'tabir surya', 'sunblock', 'menghitam'],
  'itch-rash': ['gatal', 'ruam', 'biang keringat', 'gigitan serangga', 'cacar'],
  heartburn: ['asam lambung', 'gerd', 'refluks', 'panas di dada', 'sendawa asam', 'heartburn'],
  'stomach-pain': ['maag', 'perih', 'ulu hati', 'sakit perut', 'dispepsia', 'lambung'],
  bloating: ['kembung', 'begah', 'gas', 'penuh'],
  ulcer: ['tukak', 'luka lambung', 'ulkus', 'usus 12 jari'],
  'h-pylori': ['helicobacter', 'bakteri lambung'],
  'nausea-vomiting': ['mual', 'muntah', 'eneg', 'mabuk'],
  fever: ['demam', 'panas', 'meriang'],
  pain: ['nyeri', 'sakit', 'pusing', 'sakit kepala', 'sakit gigi', 'nyeri haid'],
  diarrhea: ['diare', 'mencret', 'bab cair', 'dehidrasi'],
  allergy: ['alergi', 'bersin', 'pilek alergi', 'biduran', 'kaligata', 'bentol'],
};

export const FORM_LABELS: Record<MedicineForm, string> = {
  tablet: 'Tablet',
  'chewable-tablet': 'Chewable tablet',
  'dispersible-tablet': 'Dissolving tablet',
  capsule: 'Capsule',
  syrup: 'Syrup',
  suspension: 'Suspension',
  drops: 'Drops',
  sachet: 'Sachet / powder',
  gel: 'Gel',
  cream: 'Cream',
  ointment: 'Ointment',
  lotion: 'Lotion',
  solution: 'Liquid / solution',
  dressing: 'Dressing',
  sheet: 'Sheet / patch',
  injection: 'Injection',
};

export const TIMING_LABELS: Record<MealTiming, string> = {
  'before-meal': 'Before meals',
  'after-meal': 'After meals',
  'any-time': 'With or without food',
  external: 'On the skin (not swallowed)',
};

export const AVAILABILITY_LABELS: Record<Availability, string> = {
  otc: 'Over the counter',
  prescription: 'Prescription',
  'medical-device': 'Medical device',
  cosmetic: 'Skincare',
  withdrawn: 'Withdrawn — do not use',
};

export const CHILD_USE_LABELS: Record<ChildUse, string> = {
  yes: 'OK for children',
  doctor: 'Children: doctor only',
  'not-recommended': 'Not for children',
};

export const PREGNANCY_LABELS: Record<PregnancyUse, string> = {
  'generally-ok': 'Pregnancy: generally OK',
  'ask-doctor': 'Pregnancy: ask a doctor',
  avoid: 'Pregnancy: avoid',
};

// Shared warning lists, reused across entries.
const WOUND_RED_FLAGS = [
  'Luka bakar melepuh lebih besar dari telapak tangan korban, atau di wajah, tangan, kaki, kelamin, atau sendi.',
  'Tanda infeksi: kemerahan makin melebar, bengkak, bernanah, berbau, atau demam.',
  'Luka belum tertutup setelah 2–3 minggu (risiko bekas luka tebal lebih tinggi).',
];

const SCAR_RED_FLAGS = [
  'Bekas luka makin tebal, menonjol, keras, atau melebar keluar batas luka awal (tanda keloid / bekas luka hipertrofik).',
  'Bekas luka di sendi membuat gerakan terasa kaku atau terbatas.',
  'Gatal hebat yang mengganggu tidur.',
];

const STOMACH_RED_FLAGS = [
  'Muntah darah atau muntahan seperti kopi, BAB hitam seperti aspal.',
  'Sulit atau sakit saat menelan, makanan terasa tersangkut.',
  'Berat badan turun tanpa sebab, cepat kenyang terus-menerus.',
  'Gejala baru muncul di usia > 50 tahun, atau tidak membaik setelah 2 minggu pengobatan sendiri.',
  'Nyeri dada menjalar ke lengan/rahang, keringat dingin, sesak — bisa serangan jantung, segera ke IGD.',
];

const VOMITING_RED_FLAGS = [
  'Tanda dehidrasi: jarang pipis, sangat lemas, mulut kering, menangis tanpa air mata, mata cekung.',
  'Muntah darah atau muntah hijau.',
  'Perut sangat sakit atau keras, atau muntah setelah kepala terbentur.',
  'Muntah > 24 jam (anak) atau > 48 jam (dewasa), atau tidak bisa minum sama sekali.',
];

const DIARRHEA_RED_FLAGS = [
  'Tanda dehidrasi: sangat lemas/rewel, mata cekung, tidak mau minum atau minum rakus sekali, jarang pipis (> 6–8 jam pada anak), menangis tanpa air mata.',
  'Ada darah di tinja, demam tinggi, atau muntah terus sehingga tidak bisa minum.',
  'Diare > 3 hari (anak) atau > 1 minggu (dewasa); bayi < 6 bulan dengan diare.',
];

const FEVER_RED_FLAGS = [
  'Bayi < 3 bulan dengan suhu ≥ 38 °C.',
  'Demam > 3 hari, kejang, sesak, kaku leher, atau ruam yang tidak memudar saat ditekan gelas.',
  'Sangat lemas, sulit dibangunkan, atau tanda dehidrasi.',
];

const ALLERGY_RED_FLAGS = [
  'Bengkak bibir/mata/lidah, sesak, suara serak, atau pusing mau pingsan = reaksi alergi berat (anafilaksis), segera ke IGD.',
  'Ruam melepuh, mengelupas, atau mengenai mulut/mata.',
];

// ---------- Proton pump inhibitors share most of their text ----------

const PPI_HOW =
  'Mematikan "pompa proton" (pompa H⁺/K⁺-ATPase), mesin terakhir pembuat asam di sel dinding lambung. Ini golongan penurun asam yang paling kuat. Obat bekerja pada pompa yang sedang aktif, dan pompa paling aktif saat kita makan.';

const PPI_BEST_TIME = [
  '30–60 menit sebelum sarapan, saat perut kosong. Diminum setelah makan, efeknya bisa turun sampai sekitar setengah.',
  'Bila dosis 2x sehari: sebelum sarapan dan sebelum makan malam.',
  'Efek penuh baru terasa setelah 2–5 hari. Untuk gejala mendadak, tambahkan antasida/alginat.',
];

const PPI_HOW_TO = [
  'Telan utuh dengan segelas air. Jangan dikunyah, dibelah, atau digerus — lapisan pelindungnya mencegah obat rusak oleh asam lambung.',
  'Minum di jam yang sama setiap hari.',
  'Lupa minum: minum saat ingat. Kalau sudah dekat jadwal berikutnya, lewati. Jangan minum dobel.',
];

const PPI_DURATION =
  'Dispepsia/maag: 2–4 minggu. GERD, tukak lambung, esofagitis: 4–8 minggu. H. pylori: 10–14 hari bersama antibiotik. Lebih dari 8 minggu harus dievaluasi dokter. Pemakaian < 2–4 minggu umumnya boleh langsung berhenti.';

const PPI_INTERACTIONS = [
  'Antasida/alginat: boleh kapan saja untuk meredakan gejala, tidak mengganggu.',
  'Sukralfat: minum PPI dulu, sukralfat minimal 30 menit kemudian.',
  'Mengurangi penyerapan obat yang butuh asam: ketokonazol/itrakonazol, zat besi tablet, vitamin B12, beberapa obat HIV (atazanavir, rilpivirin — jangan digabung).',
  'Metotreksat dosis tinggi, warfarin, fenitoin, takrolimus: perlu pemantauan dokter.',
];

const PPI_SIDE_EFFECTS = [
  'Sakit kepala, mual, diare atau sembelit, kembung.',
  'Pemakaian jangka panjang (bulanan–tahunan): kadar magnesium dan vitamin B12 turun, tulang lebih rapuh, risiko infeksi usus (C. difficile) sedikit naik.',
];

const PPI_WARNINGS = [
  'Jangan berhenti mendadak setelah pemakaian > 4–8 minggu: asam bisa melonjak balik (rebound). Turunkan bertahap sesuai saran dokter.',
  'Gangguan hati berat: dosis disesuaikan dokter.',
  'Bisa menyamarkan gejala penyakit lambung yang serius — usia > 50 tahun dengan keluhan baru perlu diperiksa dulu.',
];

const ppi = (entry: Pick<Medicine, 'id' | 'name' | 'brands' | 'ingredients' | 'forms' | 'dose' | 'summary'> & Partial<Medicine>): Medicine => ({
  group: 'acid-reducer',
  symptoms: ['heartburn', 'stomach-pain', 'ulcer', 'h-pylori'],
  timing: 'before-meal',
  availability: 'prescription',
  childUse: 'doctor',
  pregnancy: 'ask-doctor',
  howItWorks: PPI_HOW,
  analogy: 'Kalau lambung adalah pabrik asam, PPI mematikan sebagian besar mesinnya.',
  bestTime: PPI_BEST_TIME,
  howToUse: PPI_HOW_TO,
  duration: PPI_DURATION,
  interactions: PPI_INTERACTIONS,
  sideEffects: PPI_SIDE_EFFECTS,
  warnings: PPI_WARNINGS,
  seeDoctor: STOMACH_RED_FLAGS,
  relatedIds: ['antacid', 'alginate', 'sucralfate'],
  ...entry,
});

const H2_HOW =
  'Menghambat reseptor histamin-2 di sel lambung — salah satu "tombol" yang menyuruh lambung membuat asam. Produksi asam turun sedang (lebih lemah dari PPI), mulai bekerja ± 1 jam, efek 10–12 jam.';

export const MEDICINES: Medicine[] = [
  // ---------- Wound care ----------
  {
    id: 'octenidine-wound-gel',
    name: 'Octenidine wound gel / rinse',
    brands: ['Octenilin Wound Gel', 'Octenilin Wound Irrigation Solution (cairan bilas)'],
    ingredients: ['Octenidine'],
    group: 'wound-care',
    symptoms: ['burn', 'open-wound'],
    forms: ['gel', 'solution'],
    timing: 'external',
    availability: 'medical-device',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary: 'Gel dan cairan bilas untuk luka terbuka, termasuk luka bakar ringan. Menjaga luka tetap lembap dan bebas kuman.',
    howItWorks:
      'Gel berbasis air (hidrogel) menjaga permukaan luka tetap lembap sehingga sel kulit baru lebih mudah merayap menutup luka. Octenidine adalah antiseptik yang merusak dinding sel kuman, sehingga gel dan permukaan luka tetap bersih.',
    analogy: 'Seperti satpam yang menjaga luka sambil menyiram "kebun" sel kulit baru supaya tidak kering.',
    bestTime: ['Selama luka masih terbuka/basah: setiap kali ganti balutan.', 'Hentikan setelah luka tertutup kulit baru (kering, tidak ada titik basah atau berdarah).'],
    howToUse: [
      'Cuci tangan dengan sabun.',
      'Bilas luka dengan cairan Octenilin atau NaCl 0,9% (atau air matang), keringkan kulit di sekitarnya dengan kasa.',
      'Oleskan gel tipis merata menutupi seluruh luka.',
      'Tutup dengan kasa non-lengket (mis. tulle), lalu kasa kering dan plester/perban bila perlu.',
      'Gel boleh dibiarkan di luka sampai ganti balutan berikutnya.',
    ],
    dose: {
      adult: ['Oles tipis menutupi luka setiap ganti balutan (umumnya 1x sehari atau sesuai anjuran perawat/dokter).'],
      child: ['Sama seperti dewasa: oles tipis setiap ganti balutan.', 'Bayi baru lahir/prematur atau luka luas: tanya dokter dulu.'],
    },
    duration: 'Selama luka masih terbuka. Bila tidak ada kemajuan dalam 2 minggu, periksa ke dokter.',
    interactions: [
      'Jangan dipakai bersamaan dengan povidone-iodine (Betadine) di area yang sama: kulit bisa berubah coklat-ungu dan efeknya saling mengganggu.',
      'Hindari menumpuk salep/antiseptik lain di luka yang sama tanpa saran tenaga kesehatan.',
    ],
    sideEffects: ['Jarang: perih ringan sesaat, kemerahan, atau alergi.'],
    warnings: [
      'Hanya untuk pemakaian luar, jangan ditelan.',
      'Jangan untuk mata, telinga bagian dalam, hidung, kandung kemih, rongga perut, atau tulang rawan.',
      'Jangan ditekan/disemprot dengan tekanan ke dalam luka yang dalam atau tertutup.',
      'Jangan dipakai bila alergi pada salah satu bahannya.',
    ],
    seeDoctor: WOUND_RED_FLAGS,
    relatedIds: ['paraffin-tulle', 'silicone-gel-sheet'],
  },
  {
    id: 'paraffin-tulle',
    name: 'Paraffin tulle dressing',
    brands: ['Dermafix Tulle (Onemed)', 'Jelonet'],
    ingredients: ['Soft paraffin'],
    group: 'wound-care',
    symptoms: ['burn', 'open-wound'],
    forms: ['dressing'],
    timing: 'external',
    availability: 'medical-device',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary: 'Kasa berjaring berlapis parafin yang tidak lengket ke luka. Untuk luka bakar ringan, lecet, dan luka basah lainnya.',
    howItWorks:
      'Lapisan parafin (mirip vaselin) membuat kasa tidak menempel ke luka, jadi saat diganti tidak merobek kulit baru dan tidak sakit. Lubang jaringnya membiarkan cairan luka keluar ke kasa penyerap di atasnya, sementara luka tetap lembap. Tulle parafin biasa tidak mengandung obat.',
    analogy: 'Seperti kertas roti berminyak di loyang: kue tidak lengket saat diangkat.',
    bestTime: ['Luka terbuka/basah: luka bakar ringan, lecet, luka jahitan.', 'Tidak diperlukan lagi setelah luka tertutup kulit baru.'],
    howToUse: [
      'Cuci tangan, bersihkan luka (boleh ditambah gel luka di bawahnya).',
      'Potong tulle sedikit lebih besar dari luka dengan gunting bersih, lepas kertas pelindungnya.',
      'Tempel 1 lapis langsung di atas luka.',
      'Tutup dengan kasa kering yang cukup tebal untuk menyerap cairan, lalu plester atau perban.',
      'Ganti tiap 1–2 hari, atau lebih cepat bila kasa luar sudah basah tembus.',
      'Kalau terasa lengket saat diangkat, basahi dulu dengan NaCl 0,9% atau air matang.',
    ],
    dose: {
      adult: ['1 lapis per luka, diganti tiap 1–2 hari (ikuti anjuran perawat).'],
      child: ['Sama seperti dewasa. Pakai perban gulung yang longgar agar tidak bergeser saat anak aktif.'],
    },
    duration: 'Sampai luka tertutup kulit baru.',
    interactions: [
      'Boleh di atas gel luka (mis. octenidine) atau salep yang diresepkan dokter.',
      'Jangan dipakai bersamaan dengan lembaran silikon: parafin membuat silikon tidak menempel.',
    ],
    sideEffects: ['Jarang. Bila diganti terlalu jarang pada luka yang banyak cairan, kulit sekitarnya bisa putih dan lembek (maserasi).'],
    warnings: [
      'Cek kemasan: sebagian tulle mengandung antiseptik atau antibiotik (mis. klorheksidin pada Bactigras, framisetin pada Sofra-tulle) — berbeda dari tulle parafin biasa.',
      'Steril dan sekali pakai: jangan dipakai ulang.',
    ],
    seeDoctor: WOUND_RED_FLAGS,
    relatedIds: ['octenidine-wound-gel', 'silicone-gel-sheet'],
  },
  {
    id: 'silver-sulfadiazine',
    name: 'Silver sulfadiazine 1% cream',
    brands: ['Burnazin'],
    ingredients: ['Silver sulfadiazine'],
    group: 'wound-care',
    symptoms: ['burn', 'open-wound'],
    forms: ['cream'],
    timing: 'external',
    availability: 'prescription',
    childUse: 'doctor',
    pregnancy: 'avoid',
    summary: 'Krim antikuman untuk luka bakar derajat 2 (melepuh) yang lebih luas atau dalam, sesuai resep dokter.',
    howItWorks: 'Perak dan sulfadiazin bersama-sama membunuh berbagai bakteri dan jamur di permukaan luka bakar sehingga mencegah infeksi.',
    bestTime: ['Luka bakar melepuh yang lebih luas/dalam, sesuai resep.', 'Untuk luka bakar ringan, kecil, dan bersih biasanya cukup gel luka + tulle.'],
    howToUse: [
      'Bersihkan luka dan buang sisa krim lama.',
      'Oleskan setebal ± 2–3 mm (kira-kira setebal koin) dengan sarung tangan atau spatula steril.',
      'Tutup kasa steril bila perlu.',
    ],
    dose: {
      adult: ['Oles ± 2–3 mm, 1–2x sehari.'],
      child: ['Usia ≥ 2 bulan: sama seperti dewasa, sesuai resep.', 'Bayi < 2 bulan: jangan (risiko kuning berat/kernikterus).'],
    },
    duration: 'Sampai luka menutup atau sesuai anjuran dokter.',
    interactions: [
      'Jangan bersamaan dengan salep enzim pembersih luka (mis. kolagenase): perak menonaktifkan enzimnya.',
      'Jangan dicampur dengan antiseptik lain (mis. povidone-iodine) di luka yang sama tanpa saran dokter.',
    ],
    sideEffects: ['Perih/terbakar ringan, gatal.', 'Kulit keabuan (perak).', 'Pada luka luas: sel darah putih turun sementara.'],
    warnings: [
      'Jangan bila alergi obat sulfa (mis. kotrimoksazol).',
      'Hamil mendekati persalinan dan bayi < 2 bulan: jangan.',
      'Defisiensi G6PD: hati-hati (risiko sel darah merah pecah).',
      'Krim membentuk lapisan putih-keabuan yang bisa disangka nanah — perhatikan bau, kemerahan, dan demam.',
    ],
    seeDoctor: WOUND_RED_FLAGS,
  },
  {
    id: 'placenta-neomycin-gel',
    name: 'Placenta extract + neomycin gel',
    brands: ['Bioplacenton'],
    ingredients: ['Placenta extract', 'Neomycin'],
    group: 'wound-care',
    symptoms: ['burn', 'open-wound'],
    forms: ['gel'],
    timing: 'external',
    availability: 'prescription',
    childUse: 'doctor',
    pregnancy: 'ask-doctor',
    summary: 'Gel untuk luka bakar ringan dan luka lecet kecil. Mengandung antibiotik neomisin 0,5% dan ekstrak plasenta 10%.',
    howItWorks:
      'Neomisin adalah antibiotik golongan aminoglikosida yang menekan bakteri di permukaan luka. Ekstrak plasenta (sapi) diklaim membantu pembentukan jaringan baru, tetapi bukti ilmiahnya terbatas.',
    bestTime: ['Luka bakar ringan atau luka lecet kecil, sesuai anjuran dokter/apoteker.'],
    howToUse: ['Bersihkan luka.', 'Oles tipis merata.', 'Tutup kasa bila perlu.'],
    dose: {
      adult: ['Oles tipis 3x sehari.'],
      child: ['Sesuai anjuran dokter: oles tipis, hanya area kecil.'],
    },
    duration: 'Jangka pendek. Jangan lebih dari 1–2 minggu tanpa evaluasi (antibiotik oles yang terlalu lama memicu kuman kebal dan alergi).',
    interactions: ['Jangan menumpuk dengan antiseptik lain di luka yang sama tanpa saran.'],
    sideEffects: ['Alergi kulit karena neomisin: makin merah, gatal, berair.'],
    warnings: [
      'Jangan bila alergi neomisin atau aminoglikosida lain (mis. gentamisin).',
      'Jangan di luka yang sangat luas: neomisin bisa terserap dan mengganggu ginjal/pendengaran.',
    ],
    seeDoctor: WOUND_RED_FLAGS,
  },
  {
    id: 'povidone-iodine',
    name: 'Povidone-iodine antiseptic',
    brands: ['Betadine Antiseptic Solution'],
    ingredients: ['Povidone-iodine'],
    group: 'wound-care',
    symptoms: ['open-wound'],
    forms: ['solution', 'ointment'],
    timing: 'external',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'ask-doctor',
    summary: 'Antiseptik untuk luka kecil yang kotor (lecet, tergores), setelah dicuci air mengalir.',
    howItWorks: 'Melepaskan iodin sedikit demi sedikit yang membunuh bakteri, jamur, dan virus di permukaan kulit/luka.',
    bestTime: ['Luka kecil dan kotor, setelah dicuci dengan air mengalir dan sabun.'],
    howToUse: ['Cuci luka dengan air mengalir.', 'Oles atau teteskan tipis di luka dan sekitarnya.', 'Biarkan kering, tutup plester bila perlu.'],
    dose: {
      adult: ['Oles tipis 1–3x sehari.'],
      child: [
        'Anak: boleh untuk luka kecil, area sempit, beberapa hari saja.',
        'Bayi < 1 bulan/prematur: hindari kecuali anjuran dokter (iodin bisa terserap dan mengganggu tiroid).',
      ],
    },
    duration: 'Beberapa hari. Jangan dipakai terus-menerus pada luka besar atau luka lama.',
    interactions: [
      'Jangan bersamaan dengan octenidine di area yang sama (perubahan warna coklat-ungu).',
      'Jangan bersamaan dengan produk perak (silver sulfadiazine) atau hidrogen peroksida.',
    ],
    sideEffects: ['Perih, noda kuning-coklat (bisa dicuci), alergi.'],
    warnings: [
      'Hindari pada gangguan tiroid atau alergi iodin.',
      'Hamil/menyusui: jangan dipakai di area luas atau lama.',
      'Tidak dianjurkan untuk luka bakar luas.',
    ],
    seeDoctor: WOUND_RED_FLAGS,
  },

  // ---------- Scar care ----------
  {
    id: 'silicone-gel-sheet',
    name: 'Silicone gel sheet (scar sheet)',
    brands: ['Newgel+', 'Cica-Care', 'Mepiform'],
    ingredients: ['Silicone'],
    group: 'scar-care',
    symptoms: ['scar', 'burn'],
    forms: ['sheet'],
    timing: 'external',
    availability: 'medical-device',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary: 'Lembaran silikon untuk mencegah dan meratakan bekas luka setelah luka tertutup. Perawatan bekas luka dengan bukti paling kuat.',
    howItWorks:
      'Lembaran menutup rapat bekas luka sehingga kelembapan kulit tertahan. Kulit luar yang lembap mengirim sinyal "tenang" ke sel pembuat kolagen, sehingga kolagen tidak diproduksi berlebihan. Hasilnya bekas luka lebih datar, lembut, dan pucat, serta tidak terlalu gatal.',
    analogy: 'Seperti menutup tanah dengan plastik supaya tidak retak-retak kering.',
    bestTime: [
      'Mulai setelah luka benar-benar tertutup dan kering: tidak ada titik basah, tidak berdarah, tidak ada keropeng.',
      'Paling bermanfaat untuk luka yang lama sembuh (> 2–3 minggu), luka bakar, atau riwayat keloid.',
    ],
    howToUse: [
      'Cuci dan keringkan kulit. Jangan ada krim/vaselin di bawahnya (lembaran jadi tidak menempel).',
      'Potong lembaran agar menutupi bekas luka + sekitar 1 cm di tepinya.',
      'Tempel dan tekan halus. Kalau mudah lepas, tahan dengan perban atau celana/kaos yang agak ketat.',
      'Hari pertama 2–4 jam, lalu tambah ± 2 jam per hari sampai 12–24 jam sehari.',
      'Lepas 2x sehari: cuci kulit dan lembaran dengan sabun lembut tanpa pewangi, bilas, angin-anginkan lembaran (sisi lengket ke atas) dan biarkan kulit kena udara 15–30 menit, lalu tempel lagi.',
      'Kulit di bawahnya lembap atau seperti berkeringat itu normal — memang begitu cara kerjanya.',
      'Ganti lembaran baru bila tidak lengket lagi atau kotor (beberapa hari sampai ± 2 minggu, tergantung merek).',
    ],
    dose: {
      adult: ['Target 12–24 jam per hari.'],
      child: ['Sama seperti dewasa. Mulai lebih pelan (2–4 jam) dan cek kulit lebih sering, karena kulit anak lebih sensitif.'],
    },
    duration: 'Minimal 2–3 bulan, sering sampai 6–12 bulan, sampai bekas luka rata dan warnanya memudar.',
    interactions: [
      'Jangan di atas salep, krim, atau vaselin.',
      'Boleh bergantian: lembaran saat malam, gel silikon + sunscreen saat siang.',
    ],
    sideEffects: [
      'Biang keringat (bintik merah kecil), gatal, ruam.',
      'Kulit putih keriput dan lembek (maserasi) bila terlalu lama tanpa dikeringkan.',
    ],
    warnings: [
      'Jangan dipakai pada luka terbuka, keropeng, atau yang masih basah.',
      'Muncul ruam atau maserasi: kurangi jam pakai atau stop 1–2 hari sampai kulit pulih, lalu mulai lagi pelan-pelan.',
      'Cuaca panas: pakai di ruangan sejuk atau malam hari dulu.',
    ],
    seeDoctor: SCAR_RED_FLAGS,
    relatedIds: ['silicone-gel', 'petroleum-jelly', 'mineral-sunscreen'],
  },
  {
    id: 'silicone-gel',
    name: 'Silicone scar gel',
    brands: ['Dermatix Ultra', 'Kelo-cote', 'Strataderm'],
    ingredients: ['Silicone'],
    group: 'scar-care',
    symptoms: ['scar'],
    forms: ['gel'],
    timing: 'external',
    availability: 'medical-device',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary: 'Gel silikon yang mengering jadi lapisan tipis. Cara kerjanya sama dengan lembaran silikon, tapi lebih praktis untuk siang hari.',
    howItWorks: 'Setelah kering, gel membentuk "lembaran tak terlihat" yang menahan kelembapan kulit — prinsipnya sama dengan scar sheet.',
    bestTime: [
      'Setelah luka tertutup dan kering.',
      'Pilihan praktis untuk siang hari, wajah/sendi yang sulit ditempel lembaran, atau anak yang tidak betah lembaran.',
    ],
    howToUse: [
      'Kulit bersih dan kering.',
      'Oles sangat tipis lalu ratakan. Kalau belum kering dalam 4–5 menit, artinya terlalu tebal — seka kelebihannya.',
      'Tunggu kering sebelum pakai baju, sunscreen, atau make-up.',
    ],
    dose: { adult: ['Lapisan tipis 2x sehari (pagi dan malam).'], child: ['Sama seperti dewasa.'] },
    duration: 'Minimal 2–3 bulan, terus selama bekas luka masih merah atau menonjol.',
    interactions: ['Sunscreen boleh dioles setelah gel kering.', 'Jangan dicampur bersamaan dengan krim lain.'],
    sideEffects: ['Jarang: kemerahan, perih, atau gatal ringan.'],
    warnings: ['Hanya untuk kulit utuh, jangan di luka terbuka.', 'Hindari mata dan selaput lendir.'],
    seeDoctor: SCAR_RED_FLAGS,
    relatedIds: ['silicone-gel-sheet', 'mineral-sunscreen'],
  },

  // ---------- Skin care ----------
  {
    id: 'petroleum-jelly',
    name: 'Petroleum jelly',
    brands: ['Vaseline'],
    ingredients: ['Petrolatum'],
    group: 'skin-care',
    symptoms: ['dry-skin', 'scar'],
    forms: ['ointment'],
    timing: 'external',
    availability: 'cosmetic',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary: 'Pelembap penutup untuk kulit baru setelah luka menutup, kulit kering, dan bibir pecah.',
    howItWorks:
      'Membentuk lapisan minyak di atas kulit sehingga air dari kulit tidak menguap (oklusif). Kulit baru jadi tetap lentur, tidak pecah, dan tidak terlalu gatal. Tidak menciptakan pigmen dan tidak mengandung obat.',
    bestTime: ['Kulit baru setelah luka menutup, bila tidak memakai silikon.', 'Setelah mandi, saat kulit masih sedikit lembap.', 'Malam hari.'],
    howToUse: [
      'Oles tipis 2–3x sehari.',
      'Agar tidak cepat hilang kena baju: tutup kasa tipis atau plester kertas, atau pakai celana panjang tipis.',
    ],
    dose: { adult: ['Oles tipis 2–3x sehari atau saat terasa kering.'], child: ['Sama seperti dewasa.'] },
    duration: 'Selama diperlukan.',
    interactions: ['Jangan dioles di bawah lembaran silikon.', 'Bila keluar rumah, lanjutkan dengan sunscreen.'],
    sideEffects: ['Terasa lengket. Kadang memicu bintik kecil di area yang berminyak.'],
    warnings: [
      'Untuk mencegah bekas luka menebal, efeknya lebih lemah dibanding silikon.',
      'Jangan dioles pada luka bakar yang baru terjadi: dinginkan dulu dengan air mengalir 20 menit.',
    ],
    seeDoctor: SCAR_RED_FLAGS,
    relatedIds: ['silicone-gel-sheet', 'silicone-gel'],
  },
  {
    id: 'mineral-sunscreen',
    name: 'Mineral sunscreen (SPF 30+)',
    brands: ['Berbagai merek berlabel "mineral", "physical", atau "kids"'],
    ingredients: ['Zinc oxide', 'Titanium dioxide'],
    group: 'skin-care',
    symptoms: ['sun-protection', 'scar'],
    forms: ['cream', 'lotion'],
    timing: 'external',
    availability: 'cosmetic',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary: 'Tabir surya mineral untuk melindungi bekas luka dan kulit baru dari menggelap permanen.',
    howItWorks:
      'Partikel zinc oxide/titanium dioxide memantulkan dan menghamburkan sinar UV di permukaan kulit. Kulit baru dan bekas luka sangat mudah menggelap (hiperpigmentasi) bila kena UV, dan bisa menetap bertahun-tahun.',
    analogy: 'Seperti payung kecil di atas kulit.',
    bestTime: ['15 menit sebelum keluar rumah.', 'Untuk bekas luka: setiap hari selama 6–12 bulan, juga saat mendung.'],
    howToUse: [
      'Oles cukup banyak: ± ½ sendok teh untuk satu lengan atau satu tungkai bawah.',
      'Ulangi tiap 2 jam, dan setelah berenang atau banyak berkeringat.',
      'Bila memakai gel silikon: tunggu gel kering dulu, baru sunscreen.',
      'Perlindungan terbaik tetap pakaian yang menutupi bekas luka.',
    ],
    dose: {
      adult: ['SPF 30 atau lebih, "broad spectrum", diulang tiap 2 jam saat di luar ruangan.'],
      child: [
        'Usia ≥ 6 bulan: sunscreen mineral SPF 30+ untuk anak.',
        'Bayi < 6 bulan: hindari matahari langsung dan tutup dengan pakaian; sunscreen hanya di area kecil bila terpaksa.',
      ],
    },
    duration: '6–12 bulan pada bekas luka baru.',
    interactions: ['Pakai paling akhir, setelah pelembap atau gel silikon kering.'],
    sideEffects: ['Lapisan putih tipis, kadang iritasi atau jerawat kecil.'],
    warnings: ['Jangan dioles di luka terbuka.', 'Kulit sensitif: coba dulu di area kecil.'],
    seeDoctor: ['Ruam atau alergi setelah pemakaian.'],
    relatedIds: ['silicone-gel-sheet', 'silicone-gel'],
  },
  {
    id: 'calamine-lotion',
    name: 'Calamine lotion',
    brands: ['Caladine Lotion', 'Calamine lotion (generik)'],
    ingredients: ['Calamine', 'Zinc oxide'],
    group: 'skin-care',
    symptoms: ['itch-rash'],
    forms: ['lotion'],
    timing: 'external',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary: 'Losion pendingin untuk gatal ringan: gigitan serangga, biang keringat, cacar air, ruam ringan.',
    howItWorks: 'Seng oksida/kalamin memberi efek dingin dan sedikit mengeringkan, sehingga rasa gatal berkurang. Tidak mengobati penyebab alergi.',
    bestTime: ['Saat terasa gatal, setelah mandi.'],
    howToUse: ['Kocok dulu.', 'Oles tipis dengan kapas di area yang gatal, biarkan kering.'],
    dose: { adult: ['Oles tipis 2–3x sehari atau saat gatal.'], child: ['Sama seperti dewasa.'] },
    duration: 'Selama gejala, umumnya beberapa hari.',
    interactions: ['Boleh bersama antihistamin minum (cetirizine/CTM) untuk gatal yang lebih berat.'],
    sideEffects: ['Kulit terasa kering.'],
    warnings: ['Jangan di luka terbuka, mata, atau selaput lendir.'],
    seeDoctor: ALLERGY_RED_FLAGS,
    relatedIds: ['cetirizine', 'chlorpheniramine'],
  },

  // ---------- Antacids & alginates ----------
  {
    id: 'antacid',
    name: 'Antacid',
    brands: ['Promag', 'Mylanta', 'Polysilane', 'Antasida DOEN', 'Rennie'],
    ingredients: ['Aluminium hydroxide', 'Magnesium hydroxide', 'Hydrotalcite', 'Calcium carbonate', 'Simethicone'],
    group: 'antacid',
    symptoms: ['heartburn', 'stomach-pain', 'bloating'],
    forms: ['chewable-tablet', 'suspension'],
    timing: 'after-meal',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary: 'Penetral asam yang bekerja dalam hitungan menit. Untuk perih ulu hati dan panas di dada yang sesekali.',
    howItWorks:
      'Basa lemah (aluminium/magnesium hidroksida, hidrotalsit, atau kalsium karbonat) langsung menetralkan asam yang sudah ada di lambung. Simetikon (di beberapa merek) memecah gelembung gas sehingga kembung berkurang. Efek cepat (menit) tapi pendek (1–3 jam). Komposisi tiap merek berbeda — cek kemasan.',
    analogy: 'Seperti menyiram air ke asam: cepat, tapi hanya untuk asam yang sudah ada, bukan menghentikan pabriknya.',
    bestTime: ['Saat gejala muncul.', 'Atau 1–3 jam setelah makan dan sebelum tidur, saat asam paling banyak.'],
    howToUse: ['Tablet: kunyah sampai halus, baru ditelan. Boleh diikuti air.', 'Suspensi: kocok dulu, ukur dengan sendok takar.'],
    dose: {
      adult: ['1–2 tablet kunyah atau 5–10 ml, 3–4x sehari.', 'Ikuti batas maksimal di kemasan.'],
      child: ['6–12 tahun: ½–1 tablet atau 5 ml, 3–4x sehari.', '< 6 tahun: hanya dengan anjuran dokter.'],
    },
    duration: 'Saat perlu. Kalau butuh setiap hari lebih dari 2 minggu, periksa ke dokter.',
    interactions: [
      'Beri jarak minimal 2 jam dengan obat lain — antasida menghambat penyerapan antibiotik (tetrasiklin; siprofloksasin/levofloksasin: jarak 4 jam), zat besi, obat tiroid (levotiroksin), dan digoksin.',
      'Boleh dipakai bersama PPI/H2 blocker sebagai "obat penyelamat" saat gejala.',
      'Sukralfat: jangan dalam 30 menit sebelum/sesudahnya.',
    ],
    sideEffects: ['Magnesium: diare. Aluminium dan kalsium: sembelit.'],
    warnings: [
      'Gangguan ginjal: hindari tanpa saran dokter (magnesium/aluminium bisa menumpuk).',
      'Kalsium karbonat dosis besar dan lama + banyak susu: kadar kalsium darah bisa terlalu tinggi.',
    ],
    seeDoctor: STOMACH_RED_FLAGS,
    relatedIds: ['alginate', 'lansoprazole', 'famotidine'],
  },
  {
    id: 'alginate',
    name: 'Alginate (raft-forming)',
    brands: ['Gaviscon'],
    ingredients: ['Sodium alginate', 'Sodium bicarbonate', 'Calcium carbonate'],
    group: 'antacid',
    symptoms: ['heartburn'],
    forms: ['suspension', 'chewable-tablet'],
    timing: 'after-meal',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary: 'Membentuk "rakit" gel di atas isi lambung agar asam tidak naik. Paling cocok untuk refluks/GERD dan aman untuk ibu hamil.',
    howItWorks:
      'Saat bertemu asam, alginat membentuk lapisan gel yang mengapung di atas isi lambung, seperti tutup. Asam dan makanan jadi tidak mudah naik ke kerongkongan. Sedikit antasida di dalamnya ikut menetralkan asam.',
    analogy: 'Seperti rakit yang mengapung menutup permukaan air dalam ember.',
    bestTime: ['Setelah makan dan sebelum tidur — saat paling sering terjadi refluks.'],
    howToUse: [
      'Kocok dulu, ukur dengan sendok takar. Tablet kunyah dikunyah sampai halus.',
      'Setelah minum, jangan langsung minum air banyak agar "rakit" tidak rusak.',
    ],
    dose: {
      adult: ['Dewasa dan anak > 12 tahun: 10–20 ml (atau 2–4 tablet kunyah) setelah makan dan sebelum tidur, hingga 4x sehari.'],
      child: ['6–12 tahun: 5–10 ml setelah makan dan sebelum tidur, hingga 4x sehari.', '< 6 tahun: hanya dengan anjuran dokter (ada sediaan khusus bayi).'],
    },
    duration: 'Saat perlu. Lebih dari 7 hari setiap hari tanpa perbaikan: periksa ke dokter.',
    interactions: ['Beri jarak 2 jam dengan obat lain (sama seperti antasida).', 'Boleh bersama PPI.'],
    sideEffects: ['Jarang: kembung, mual.'],
    warnings: ['Mengandung natrium: hati-hati pada darah tinggi, gagal jantung, atau gangguan ginjal.'],
    seeDoctor: STOMACH_RED_FLAGS,
    relatedIds: ['antacid', 'lansoprazole'],
  },

  // ---------- H2 blockers ----------
  {
    id: 'famotidine',
    name: 'Famotidine',
    brands: ['Famotidin (generik)'],
    ingredients: ['Famotidine'],
    group: 'acid-reducer',
    symptoms: ['heartburn', 'stomach-pain', 'ulcer'],
    forms: ['tablet', 'injection'],
    timing: 'any-time',
    availability: 'prescription',
    childUse: 'doctor',
    pregnancy: 'ask-doctor',
    summary: 'Penurun asam golongan H2 blocker. Lebih lemah dari PPI tapi bekerja lebih cepat, cocok untuk gejala malam.',
    howItWorks: H2_HOW,
    analogy: 'Mematikan salah satu saklar pabrik asam (PPI mematikan mesinnya langsung).',
    bestTime: [
      'Pencegahan: 15–60 menit sebelum makan yang biasanya memicu gejala.',
      'Gejala malam: sebelum tidur.',
      'Dosis rutin 2x sehari: pagi dan malam, boleh sebelum atau sesudah makan.',
    ],
    howToUse: ['Telan dengan air.'],
    dose: {
      adult: [
        'GERD: 20 mg 2x sehari, hingga 6 minggu (esofagitis: 20–40 mg 2x sehari, hingga 12 minggu).',
        'Tukak lambung/usus 12 jari: 40 mg 1x sebelum tidur (atau 20 mg 2x sehari), 4–8 minggu.',
        'Gejala ringan sesekali: 10–20 mg, maks 2x sehari.',
      ],
      child: [
        '1–16 tahun, GERD: 1 mg/kg/hari dibagi 2 dosis (maks 40 mg per dosis).',
        'Tukak: 0,5 mg/kg/hari sebelum tidur atau dibagi 2 dosis (maks 40 mg/hari).',
        'Dosis dihitung dokter dari berat badan.',
      ],
    },
    duration: 'Gejala sesekali: saat perlu (maks 2 minggu tanpa dokter). GERD/tukak: 4–8 minggu sesuai dokter.',
    interactions: [
      'Antasida: boleh, tapi beri jarak 1–2 jam.',
      'Mengurangi penyerapan obat yang butuh asam: ketokonazol/itrakonazol, zat besi tablet, atazanavir.',
      'Tidak perlu digabung dengan PPI kecuali disarankan dokter (mis. untuk gejala malam).',
    ],
    sideEffects: ['Sakit kepala, pusing, sembelit atau diare.', 'Jarang: bingung/gelisah pada lansia atau gangguan ginjal.'],
    warnings: ['Gangguan ginjal: dosis dikurangi.', 'Efeknya melemah bila diminum terus-menerus beberapa minggu (toleransi).'],
    seeDoctor: STOMACH_RED_FLAGS,
    relatedIds: ['lansoprazole', 'antacid'],
  },
  {
    id: 'cimetidine',
    name: 'Cimetidine',
    brands: ['Simetidin (generik)'],
    ingredients: ['Cimetidine'],
    group: 'acid-reducer',
    symptoms: ['heartburn', 'stomach-pain', 'ulcer'],
    forms: ['tablet'],
    timing: 'any-time',
    availability: 'prescription',
    childUse: 'doctor',
    pregnancy: 'ask-doctor',
    summary: 'H2 blocker generasi lama. Banyak berinteraksi dengan obat lain, jadi famotidin umumnya lebih dipilih.',
    howItWorks: H2_HOW,
    bestTime: ['Bersama makan atau sebelum tidur, sesuai jadwal dari dokter.'],
    howToUse: ['Telan dengan air.'],
    dose: {
      adult: ['400 mg 2x sehari atau 800 mg sebelum tidur, 4–8 minggu.'],
      child: ['Jarang dipakai untuk anak. Bila perlu, dokter menghitung dari berat badan (± 5–10 mg/kg, 4x sehari).'],
    },
    duration: '4–8 minggu sesuai dokter.',
    interactions: [
      'Menaikkan kadar banyak obat: warfarin, fenitoin, teofilin, lidokain, beberapa antidepresan, metformin — sering perlu pengganti.',
      'Antasida: beri jarak 1–2 jam.',
    ],
    sideEffects: ['Sakit kepala, diare, pusing.', 'Jangka panjang: payudara membesar pada pria.'],
    warnings: ['Gangguan ginjal/hati dan lansia: dosis dikurangi.'],
    seeDoctor: STOMACH_RED_FLAGS,
    relatedIds: ['famotidine'],
  },
  {
    id: 'ranitidine',
    name: 'Ranitidine',
    brands: ['Ranitidin (semua merek)'],
    ingredients: ['Ranitidine'],
    group: 'acid-reducer',
    symptoms: ['heartburn', 'stomach-pain', 'ulcer'],
    forms: ['tablet', 'injection'],
    timing: 'any-time',
    availability: 'withdrawn',
    childUse: 'not-recommended',
    pregnancy: 'avoid',
    summary: 'Ditarik dari peredaran oleh BPOM (Oktober 2019) karena cemaran NDMA, zat yang berpotensi memicu kanker. Jangan dipakai lagi.',
    howItWorks: H2_HOW,
    bestTime: ['Tidak dipakai lagi. Masih punya stok lama: buang, lalu tanyakan pengganti (famotidin atau PPI) ke dokter/apoteker.'],
    howToUse: ['Jangan diminum.'],
    dose: { adult: ['Tidak digunakan.'], child: ['Tidak digunakan.'] },
    duration: '—',
    interactions: [],
    sideEffects: [],
    warnings: ['Cemaran NDMA dapat bertambah selama penyimpanan, terutama pada suhu panas.'],
    seeDoctor: STOMACH_RED_FLAGS,
    relatedIds: ['famotidine', 'lansoprazole'],
  },

  // ---------- PPIs ----------
  ppi({
    id: 'omeprazole',
    name: 'Omeprazole',
    brands: ['Omeprazol (generik)', 'Losec'],
    ingredients: ['Omeprazole'],
    forms: ['capsule', 'injection'],
    summary: 'PPI yang paling sering dipakai. Untuk maag, GERD, tukak lambung, dan terapi H. pylori.',
    howToUse: [
      ...PPI_HOW_TO,
      'Sulit menelan: kapsul boleh dibuka, butirannya ditaburkan ke 1 sendok makan bubur/pisang lumat/yoghurt, langsung ditelan tanpa dikunyah.',
    ],
    dose: {
      adult: [
        'GERD/dispepsia: 20 mg 1x sehari, 4–8 minggu (berat: 40 mg).',
        'Tukak usus 12 jari: 20 mg 1x sehari, 2–4 minggu. Tukak lambung: 4–8 minggu.',
        'H. pylori: 20 mg 2x sehari + 2 antibiotik, 10–14 hari.',
        'Pelindung lambung saat rutin minum obat antinyeri (NSAID): 20 mg 1x sehari.',
      ],
      child: ['≥ 1 tahun, berdasarkan berat badan, 1x sehari:', '5–< 10 kg: 5 mg', '10–< 20 kg: 10 mg', '≥ 20 kg: 20 mg'],
    },
    interactions: [...PPI_INTERACTIONS, 'Klopidogrel: omeprazol mengurangi efeknya — dokter biasanya memilih pantoprazol.'],
  }),
  ppi({
    id: 'lansoprazole',
    name: 'Lansoprazole',
    brands: ['Lansoprazol (generik)', 'Prosogan', 'Prosogan FD'],
    ingredients: ['Lansoprazole'],
    forms: ['capsule', 'dispersible-tablet', 'injection'],
    summary: 'PPI untuk maag, GERD, tukak, dan H. pylori. Ada tablet larut di mulut (FD) yang tidak perlu air.',
    howToUse: [
      ...PPI_HOW_TO,
      'Tablet FD/ODT: taruh di lidah, biarkan larut, lalu telan — tanpa air. Untuk anak, bisa dilarutkan dalam sedikit air lalu langsung diminum.',
      'Kapsul boleh dibuka dan butirannya ditaburkan ke 1 sendok makanan lunak, ditelan tanpa dikunyah.',
      'Tunggu 30–60 menit setelah minum, baru makan.',
    ],
    dose: {
      adult: [
        'GERD/esofagitis: 30 mg 1x sehari, 4–8 minggu.',
        'Dispepsia/refluks ringan: 15–30 mg 1x sehari, 2–4 minggu.',
        'Tukak usus 12 jari: 30 mg 1x sehari, 4 minggu. Tukak lambung: 30 mg, 8 minggu.',
        'H. pylori: 30 mg 2x sehari + 2 antibiotik, 10–14 hari.',
        'Pemeliharaan: 15 mg 1x sehari.',
      ],
      child: [
        '1–11 tahun: ≤ 30 kg: 15 mg 1x sehari; > 30 kg: 30 mg 1x sehari (hingga 12 minggu).',
        '12–17 tahun: 15 mg (refluks tanpa luka) atau 30 mg (esofagitis) 1x sehari.',
      ],
    },
    duration: `${PPI_DURATION} Contoh: 10 hari cukup untuk H. pylori (bersama antibiotik) atau maag ringan yang sudah membaik, tapi biasanya kurang untuk GERD/luka lambung.`,
  }),
  ppi({
    id: 'pantoprazole',
    name: 'Pantoprazole',
    brands: ['Pantoprazol (generik)', 'Pantozol'],
    ingredients: ['Pantoprazole'],
    forms: ['tablet', 'injection'],
    summary: 'PPI dengan interaksi obat paling sedikit. Sering dipilih untuk pengguna banyak obat atau klopidogrel.',
    dose: {
      adult: [
        'GERD/esofagitis: 40 mg 1x sehari, 4–8 minggu.',
        'Refluks ringan / pelindung lambung (NSAID): 20 mg 1x sehari.',
        'H. pylori: 40 mg 2x sehari + 2 antibiotik, 10–14 hari.',
      ],
      child: ['≥ 5 tahun, 1x sehari (hingga 8 minggu): 15–< 40 kg: 20 mg; ≥ 40 kg: 40 mg.', 'Tablet tidak boleh dibelah atau digerus.'],
    },
    interactions: [...PPI_INTERACTIONS, 'Klopidogrel: pilihan PPI yang lebih aman dibanding omeprazol/esomeprazol.'],
  }),
  ppi({
    id: 'esomeprazole',
    name: 'Esomeprazole',
    brands: ['Esomeprazol (generik)', 'Nexium'],
    ingredients: ['Esomeprazole'],
    forms: ['tablet', 'capsule', 'sachet', 'injection'],
    summary: 'PPI turunan omeprazol. Ada sediaan sachet granul untuk anak.',
    howToUse: [...PPI_HOW_TO, 'Sachet granul: campur dengan ± 15 ml air, aduk, diamkan beberapa menit, lalu minum dalam 30 menit.'],
    dose: {
      adult: [
        'GERD dengan esofagitis: 40 mg 1x sehari, 4–8 minggu; pemeliharaan 20 mg.',
        'GERD tanpa luka: 20 mg 1x sehari, 4 minggu.',
        'H. pylori: 20 mg 2x sehari + 2 antibiotik.',
        'Pelindung lambung (NSAID): 20 mg 1x sehari.',
      ],
      child: ['1–11 tahun: < 20 kg: 10 mg; ≥ 20 kg: 10–20 mg, 1x sehari (hingga 8 minggu).', '12–17 tahun: 20–40 mg 1x sehari.'],
    },
    interactions: [...PPI_INTERACTIONS, 'Klopidogrel: esomeprazol mengurangi efeknya — dokter biasanya memilih pantoprazol.'],
  }),
  ppi({
    id: 'rabeprazole',
    name: 'Rabeprazole',
    brands: ['Rabeprazol (generik)', 'Pariet'],
    ingredients: ['Rabeprazole'],
    forms: ['tablet', 'injection'],
    summary: 'PPI dengan mula kerja sedikit lebih cepat dan sedikit interaksi.',
    dose: {
      adult: [
        'GERD/esofagitis: 20 mg 1x sehari, 4–8 minggu.',
        'Tukak usus 12 jari: 20 mg 1x sehari, 4 minggu. Tukak lambung: 6 minggu.',
        'H. pylori: 20 mg 2x sehari + 2 antibiotik.',
      ],
      child: ['12–17 tahun: 20 mg 1x sehari, hingga 8 minggu.', '1–11 tahun: < 15 kg: 5 mg; ≥ 15 kg: 10 mg (sediaan khusus anak, jarang tersedia; ikuti dokter).'],
    },
  }),
  {
    id: 'vonoprazan',
    name: 'Vonoprazan (P-CAB)',
    brands: ['Vonoprazan (mis. Vocinti)'],
    ingredients: ['Vonoprazan'],
    group: 'acid-reducer',
    symptoms: ['heartburn', 'ulcer', 'h-pylori'],
    forms: ['tablet'],
    timing: 'any-time',
    availability: 'prescription',
    childUse: 'not-recommended',
    pregnancy: 'avoid',
    summary: 'Penurun asam generasi baru. Lebih cepat dan stabil daripada PPI, tidak tergantung waktu makan.',
    howItWorks:
      'Menghambat pompa proton dengan cara bersaing dengan kalium (potassium-competitive acid blocker). Tidak perlu "diaktifkan" oleh asam, jadi efek sudah terasa di hari pertama dan bisa diminum kapan saja.',
    bestTime: ['1x sehari di jam yang sama, boleh sebelum atau sesudah makan.'],
    howToUse: ['Telan dengan air.'],
    dose: {
      adult: [
        'Esofagitis erosif: 20 mg 1x sehari, 4–8 minggu; pemeliharaan 10 mg.',
        'Tukak lambung: 20 mg 1x sehari, 8 minggu. Tukak usus 12 jari: 6 minggu.',
        'H. pylori: 20 mg 2x sehari + amoksisilin (± klaritromisin), 7–14 hari.',
      ],
      child: ['Belum ada data keamanan untuk anak — tidak digunakan.'],
    },
    duration: 'Sesuai indikasi, 4–8 minggu.',
    interactions: [
      'Klaritromisin, ketokonazol: kadar vonoprazan naik.',
      'Obat yang butuh asam untuk diserap (sama seperti PPI). Atazanavir, rilpivirin: jangan digabung.',
    ],
    sideEffects: ['Diare, sembelit, mual, ruam.'],
    warnings: ['Data jangka panjang lebih sedikit dibanding PPI.', 'Gangguan hati/ginjal berat: tanya dokter.'],
    seeDoctor: STOMACH_RED_FLAGS,
    relatedIds: ['lansoprazole'],
  },

  // ---------- Stomach lining protector ----------
  {
    id: 'sucralfate',
    name: 'Sucralfate',
    brands: ['Inpepsa', 'Ulsafate'],
    ingredients: ['Sucralfate'],
    group: 'stomach-protector',
    symptoms: ['ulcer', 'stomach-pain'],
    forms: ['suspension', 'tablet'],
    timing: 'before-meal',
    availability: 'prescription',
    childUse: 'doctor',
    pregnancy: 'generally-ok',
    summary: '"Plester" pelindung luka di dinding lambung dan usus 12 jari. Tidak menurunkan asam.',
    howItWorks:
      'Dalam suasana asam, sukralfat berubah menjadi pasta lengket yang menempel di luka dinding lambung/usus, melindunginya dari asam, enzim pencerna, dan empedu sampai luka sembuh. Hampir tidak terserap ke darah.',
    analogy: 'Seperti plester yang ditempel di bagian dalam lambung.',
    bestTime: ['1 jam sebelum makan dan sebelum tidur, saat perut kosong — butuh asam untuk "aktif".'],
    howToUse: [
      'Suspensi: kocok kuat dulu (endapannya berat), ukur dengan sendok takar.',
      'Tablet: boleh dilarutkan dalam ± 15 ml air.',
      'Cek kekuatan sediaan: suspensi 500 mg/5 ml berarti 1 gram = 10 ml.',
    ],
    dose: {
      adult: ['1 g, 4x sehari (1 jam sebelum makan dan sebelum tidur), atau 2 g 2x sehari.'],
      child: ['Dihitung dokter dari berat badan, umumnya 40–80 mg/kg/hari dibagi 4 dosis.'],
    },
    duration: '4–8 minggu.',
    interactions: [
      'Beri jarak 2 jam dengan obat lain: antibiotik kuinolon/tetrasiklin, digoksin, fenitoin, levotiroksin, warfarin, ketokonazol — sukralfat mengikatnya.',
      'Antasida: jangan dalam 30 menit sebelum/sesudah sukralfat.',
      'PPI/H2 blocker: minum PPI dulu, sukralfat minimal 30 menit kemudian.',
    ],
    sideEffects: ['Sembelit (paling sering), mulut kering, mual.'],
    warnings: ['Mengandung aluminium: hati-hati pada gangguan ginjal atau cuci darah.', 'Diabetes: beberapa suspensi mengandung gula — cek label.'],
    seeDoctor: STOMACH_RED_FLAGS,
    relatedIds: ['lansoprazole', 'antacid'],
  },

  // ---------- Anti-nausea ----------
  {
    id: 'ondansetron',
    name: 'Ondansetron',
    brands: ['Narfoz (tablet 4 mg, 8 mg; sirup 4 mg/5 ml)', 'Ondansetron (generik)', 'Zofran'],
    ingredients: ['Ondansetron'],
    group: 'anti-nausea',
    symptoms: ['nausea-vomiting'],
    forms: ['tablet', 'syrup', 'injection'],
    timing: 'any-time',
    availability: 'prescription',
    childUse: 'doctor',
    pregnancy: 'ask-doctor',
    summary: 'Obat antimual dan antimuntah (bukan obat asam lambung). Untuk mual karena kemoterapi, operasi, dan muntah karena infeksi perut.',
    howItWorks:
      'Menghambat reseptor serotonin 5-HT3 di saluran cerna dan di pusat muntah di otak, sehingga sinyal "ayo muntah" terputus. Tidak menurunkan asam dan tidak mengobati penyebab muntah.',
    analogy: 'Memutus kabel alarm yang menyuruh otak untuk muntah.',
    bestTime: [
      'Mencegah mual kemoterapi: 30 menit–1 jam sebelum kemo.',
      'Mencegah mual setelah operasi: ± 1 jam sebelum bius, sesuai dokter.',
      'Muntah karena infeksi perut (anak): biasanya 1 dosis, lalu 15–30 menit kemudian mulai oralit sedikit-sedikit.',
    ],
    howToUse: [
      'Telan dengan air; boleh sebelum atau sesudah makan.',
      'Sirup: ukur dengan sendok/spuit takar, bukan sendok makan.',
      'Muntah dalam 15 menit setelah minum: tanya dokter/apoteker apakah perlu diulang.',
    ],
    dose: {
      adult: [
        'Mual kemoterapi/radioterapi: 8 mg, diulang tiap 8–12 jam sesuai protokol.',
        'Mencegah mual setelah operasi: 8 mg 1 jam sebelum bius, lalu 8 mg tiap 8 jam (2 dosis), sesuai dokter.',
        'Umumnya maks 24 mg/hari per oral.',
      ],
      child: [
        'Muntah karena infeksi perut (≥ 6 bulan), dosis tunggal ± 0,15 mg/kg:',
        '8–15 kg: 2 mg (2,5 ml sirup 4 mg/5 ml)',
        '15–30 kg: 4 mg (5 ml sirup atau 1 tablet 4 mg)',
        '> 30 kg: 8 mg',
        'Kemoterapi: dihitung dokter dari luas permukaan tubuh (± 5 mg/m²).',
      ],
    },
    duration: 'Biasanya 1–3 hari atau sesuai siklus kemoterapi.',
    interactions: [
      'Apomorfin (obat Parkinson): jangan digabung (tekanan darah bisa turun drastis).',
      'Obat lain yang memengaruhi irama jantung (domperidon, eritromisin, beberapa antipsikotik): hati-hati.',
      'Antidepresan SSRI/SNRI, tramadol: risiko sindrom serotonin (gelisah, demam, otot kaku/kedutan).',
      'Boleh bersama antasida, PPI, dan oralit.',
    ],
    sideEffects: ['Sakit kepala, sembelit, rasa hangat/kemerahan.', 'Jarang: gangguan irama jantung (QT memanjang), sindrom serotonin, alergi.'],
    warnings: [
      'Hamil trimester pertama: ada laporan sedikit peningkatan risiko bibir/langit-langit sumbing — hanya bila dokter memutuskan.',
      'Gangguan hati berat: maks 8 mg/hari.',
      'Hanya menekan muntah — tetap pantau tanda dehidrasi.',
    ],
    seeDoctor: VOMITING_RED_FLAGS,
    relatedIds: ['oral-rehydration-salts', 'domperidone'],
  },
  {
    id: 'domperidone',
    name: 'Domperidone',
    brands: ['Motilium', 'Vometa'],
    ingredients: ['Domperidone'],
    group: 'anti-nausea',
    symptoms: ['nausea-vomiting', 'bloating'],
    forms: ['tablet', 'suspension'],
    timing: 'before-meal',
    availability: 'prescription',
    childUse: 'doctor',
    pregnancy: 'avoid',
    summary: 'Antimual yang juga mempercepat pengosongan lambung. Untuk mual, begah, dan cepat kenyang. Hanya jangka pendek.',
    howItWorks:
      'Menghambat dopamin di lambung dan di pusat muntah. Lambung jadi mengosongkan isinya lebih cepat, sehingga mual dan begah berkurang.',
    analogy: 'Mempercepat ban berjalan supaya makanan tidak menumpuk di lambung.',
    bestTime: ['15–30 menit sebelum makan.'],
    howToUse: ['Telan dengan air. Suspensi: kocok dan ukur dengan sendok takar.'],
    dose: {
      adult: ['Dewasa dan anak ≥ 12 tahun dengan berat ≥ 35 kg: 10 mg, hingga 3x sehari. Maks 30 mg/hari.'],
      child: [
        '< 12 tahun atau < 35 kg: 0,25 mg/kg per dosis, hingga 3x sehari (maks 0,75 mg/kg/hari), sediaan sirup, hanya dengan resep.',
        'Banyak pedoman anak tidak menganjurkan domperidon untuk muntah karena infeksi perut — utamakan oralit.',
      ],
    },
    duration: 'Maksimal 7 hari.',
    interactions: [
      'Jangan bersama ketokonazol, itrakonazol, eritromisin, klaritromisin, atau obat lain yang memperpanjang QT (risiko gangguan irama jantung).',
      'Jangan digabung dengan metoklopramid.',
      'Antasida: beri jarak ± 2 jam (domperidon butuh asam agar terserap baik).',
    ],
    sideEffects: [
      'Mulut kering, sakit kepala, mengantuk.',
      'Jarang: gangguan irama jantung (lebih berisiko di usia > 60 tahun atau dosis > 30 mg/hari).',
      'Payudara membesar atau keluar ASI (hormon prolaktin naik).',
    ],
    warnings: ['Penyakit jantung/irama jantung atau gangguan hati sedang–berat: jangan.', 'Perdarahan atau sumbatan saluran cerna: jangan.'],
    seeDoctor: VOMITING_RED_FLAGS,
    relatedIds: ['ondansetron', 'metoclopramide'],
  },
  {
    id: 'metoclopramide',
    name: 'Metoclopramide',
    brands: ['Primperan', 'Metoklopramid (generik)'],
    ingredients: ['Metoclopramide'],
    group: 'anti-nausea',
    symptoms: ['nausea-vomiting', 'bloating'],
    forms: ['tablet', 'syrup', 'injection'],
    timing: 'before-meal',
    availability: 'prescription',
    childUse: 'doctor',
    pregnancy: 'ask-doctor',
    summary: 'Antimual dan pemercepat pengosongan lambung. Hanya untuk jangka pendek karena efek samping pada saraf.',
    howItWorks: 'Menghambat dopamin di pusat muntah dan meningkatkan gerakan lambung–usus sehingga isi lambung cepat turun.',
    bestTime: ['± 30 menit sebelum makan.'],
    howToUse: ['Telan dengan air. Sirup: ukur dengan sendok takar.'],
    dose: {
      adult: ['10 mg, hingga 3x sehari. Maks 30 mg/hari (0,5 mg/kg/hari).'],
      child: [
        '1–18 tahun: 0,1–0,15 mg/kg per dosis, hingga 3x sehari (maks 0,5 mg/kg/hari) — hanya pilihan kedua, dengan resep.',
        '< 1 tahun: jangan.',
      ],
    },
    duration: 'Maksimal 5 hari.',
    interactions: [
      'Jangan bersama levodopa/obat Parkinson atau obat antipsikotik.',
      'Jangan digabung dengan domperidon.',
      'Alkohol dan obat tidur: kantuk bertambah.',
    ],
    sideEffects: [
      'Mengantuk, lemas, diare.',
      'Gerakan otot tak terkendali (leher kaku, mata mendelik ke atas, lidah menjulur) — lebih sering pada anak dan remaja. Hentikan dan segera ke dokter.',
    ],
    warnings: ['Epilepsi, sumbatan/perdarahan usus: jangan.', 'Riwayat depresi: hati-hati.'],
    seeDoctor: VOMITING_RED_FLAGS,
    relatedIds: ['ondansetron', 'domperidone'],
  },

  // ---------- Pain & fever ----------
  {
    id: 'paracetamol',
    name: 'Paracetamol (acetaminophen)',
    brands: ['Panadol', 'Sanmol', 'Tempra', 'Paracetamol (generik)'],
    ingredients: ['Paracetamol'],
    group: 'pain-fever',
    symptoms: ['fever', 'pain'],
    forms: ['tablet', 'syrup', 'drops'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary: 'Penurun demam dan pereda nyeri pilihan pertama, termasuk untuk anak dan ibu hamil. Aman untuk lambung.',
    howItWorks:
      'Menghambat pembentukan prostaglandin (zat pemicu nyeri dan demam) terutama di otak, sehingga "termostat" tubuh turun. Tidak meredakan peradangan/bengkak dan tidak mengiritasi lambung.',
    bestTime: ['Saat demam yang membuat tidak nyaman (umumnya ≥ 38,5 °C) atau saat nyeri.', 'Boleh sebelum atau sesudah makan.'],
    howToUse: [
      'Tablet ditelan dengan air.',
      'Sirup dan drops: pakai sendok/pipet takar dari kemasan. Kadar sirup (mis. 120 mg/5 ml) dan drops (mis. 100 mg/ml) sangat berbeda — jangan tertukar!',
      'Catat jam minum agar tidak terlalu rapat.',
    ],
    dose: {
      adult: ['500–1.000 mg tiap 4–6 jam bila perlu.', 'Maks 4.000 mg/hari (3.000 mg bila sering minum alkohol, berat < 50 kg, atau ada gangguan hati).'],
      child: [
        '10–15 mg/kg per dosis, tiap 4–6 jam, maks 4–5 dosis per 24 jam (maks 60 mg/kg/hari).',
        'Contoh anak 16 kg: 160–240 mg = 6,5–10 ml sirup 120 mg/5 ml.',
        'Bayi < 3 bulan dengan demam: langsung ke dokter.',
      ],
    },
    duration: 'Tanpa dokter: demam maks 3 hari, nyeri maks 5 hari (dewasa).',
    interactions: [
      'Cek obat flu/batuk kombinasi — banyak yang sudah berisi parasetamol (risiko dobel dosis → kerusakan hati).',
      'Warfarin: pemakaian rutin > 2 g/hari selama beberapa hari bisa menaikkan INR.',
      'Gantian dengan ibuprofen hanya bila disarankan dokter, bukan kebiasaan rutin.',
      'Aman bersama antasida, PPI, dan oralit.',
    ],
    sideEffects: ['Jarang bila dosis benar.', 'Overdosis: kerusakan hati (gejala awal bisa tidak terasa).'],
    warnings: ['Penyakit hati atau sering minum alkohol: dosis lebih rendah.', 'Overdosis (termasuk tidak sengaja) adalah darurat medis — ke IGD walau belum ada gejala.'],
    seeDoctor: FEVER_RED_FLAGS,
    relatedIds: ['ibuprofen'],
  },
  {
    id: 'ibuprofen',
    name: 'Ibuprofen',
    brands: ['Proris', 'Ibuprofen (generik)'],
    ingredients: ['Ibuprofen'],
    group: 'pain-fever',
    symptoms: ['fever', 'pain'],
    forms: ['tablet', 'suspension'],
    timing: 'after-meal',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'avoid',
    summary: 'Pereda nyeri, demam, dan peradangan (NSAID). Bagus untuk sakit gigi, nyeri haid, keseleo, dan nyeri luka bakar.',
    howItWorks:
      'Menghambat enzim COX yang membuat prostaglandin di seluruh tubuh, sehingga demam, nyeri, dan peradangan/bengkak berkurang. Karena prostaglandin juga melindungi lambung dan ginjal, ibuprofen bisa mengiritasi lambung.',
    bestTime: ['Sesudah makan atau bersama susu/makanan, untuk melindungi lambung.'],
    howToUse: ['Tablet ditelan dengan air. Suspensi dikocok dan diukur dengan sendok takar.'],
    dose: {
      adult: ['200–400 mg tiap 6–8 jam bila perlu.', 'Maks 1.200 mg/hari tanpa resep (dokter bisa memberi lebih).'],
      child: [
        '≥ 6 bulan: 5–10 mg/kg per dosis tiap 6–8 jam, maks 30–40 mg/kg/hari (maks 3–4 dosis).',
        'Contoh anak 16 kg: 80–160 mg = 4–8 ml sirup 100 mg/5 ml.',
        '< 6 bulan: hanya dengan anjuran dokter.',
      ],
    },
    duration: 'Tanpa dokter: demam maks 3 hari, nyeri maks 5 hari.',
    interactions: [
      'Jangan digabung dengan NSAID lain (aspirin dosis nyeri, asam mefenamat, natrium diklofenak, meloksikam).',
      'Pengencer darah (warfarin, klopidogrel), kortikosteroid, antidepresan SSRI: risiko perdarahan lambung naik.',
      'Obat darah tinggi (ACE inhibitor/ARB, diuretik): efeknya berkurang dan bisa mengganggu ginjal.',
      'Aspirin dosis rendah untuk jantung: minum aspirin minimal 30 menit sebelum ibuprofen.',
      'Pemakaian rutin + riwayat maag: dokter biasanya menambahkan PPI.',
    ],
    sideEffects: ['Perih atau nyeri lambung, mual.', 'Jarang: perdarahan lambung (BAB hitam), gangguan ginjal, sesak pada penderita asma tertentu.'],
    warnings: [
      'Jangan saat dehidrasi (diare/muntah berat, kurang minum) — risiko gangguan ginjal.',
      'Hindari saat cacar air (risiko infeksi kulit berat).',
      'Maag/tukak aktif, gagal ginjal/jantung, atau asma yang kambuh karena NSAID: hindari.',
      'Hamil ≥ 20 minggu: hindari.',
    ],
    seeDoctor: FEVER_RED_FLAGS,
    relatedIds: ['paracetamol', 'lansoprazole'],
  },

  // ---------- Diarrhea ----------
  {
    id: 'oral-rehydration-salts',
    name: 'Oral rehydration salts (Oralit)',
    brands: ['Oralit 200 (generik)', 'Pharolit'],
    ingredients: ['Glucose', 'Sodium chloride', 'Potassium chloride', 'Trisodium citrate'],
    group: 'diarrhea',
    symptoms: ['diarrhea', 'nausea-vomiting'],
    forms: ['sachet'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary: 'Pengganti cairan dan garam tubuh saat diare atau muntah. Obat terpenting untuk diare, terutama pada anak.',
    howItWorks:
      'Campuran garam dan gula dengan perbandingan yang pas. Gula membantu usus menyerap garam, dan air ikut terserap bersama garam — mengganti cairan yang hilang. Oralit tidak menghentikan diare, tapi mencegah dehidrasi yang berbahaya.',
    analogy: 'Gula adalah "tiket masuk" yang membawa garam dan air kembali ke dalam tubuh.',
    bestTime: ['Sejak diare dimulai, setiap kali BAB cair atau muntah.'],
    howToUse: [
      'Cuci tangan. Larutkan 1 sachet dalam 200 ml (1 gelas) air matang yang sudah dingin. Jangan kurangi atau tambah airnya.',
      'Minum sedikit-sedikit tapi sering, pakai sendok atau gelas.',
      'Bila muntah, tunggu 10 menit, lalu lanjutkan lebih pelan (1 sendok tiap 1–2 menit).',
      'Larutan yang sudah dibuat dibuang setelah 24 jam.',
      'Tetap beri ASI dan makan seperti biasa.',
    ],
    dose: {
      adult: ['Minimal 1½–2 gelas setiap kali BAB cair, ditambah minum sesuai rasa haus.'],
      child: ['Setiap kali BAB cair (Kemenkes):', '< 1 tahun: 50–100 ml (¼–½ gelas)', '1–4 tahun: 100–200 ml (½–1 gelas)', '≥ 5 tahun: 200–300 ml (1–1½ gelas)'],
    },
    duration: 'Sampai diare berhenti.',
    interactions: ['Boleh bersama zinc, parasetamol, dan obat lain.', 'Jangan dicampur ke susu, jus, teh, atau minuman bersoda.'],
    sideEffects: ['Muntah bila diminum terlalu cepat.'],
    warnings: [
      'Jangan dibuat lebih pekat (air kurang) — bisa memperburuk diare.',
      'Minuman olahraga/isotonik bukan pengganti oralit (kadar gula dan garamnya berbeda).',
    ],
    seeDoctor: DIARRHEA_RED_FLAGS,
    relatedIds: ['zinc', 'ondansetron'],
  },
  {
    id: 'zinc',
    name: 'Zinc (for diarrhea in children)',
    brands: ['Zinkid', 'L-Zinc', 'Zinc sulfate (generik)'],
    ingredients: ['Zinc'],
    group: 'diarrhea',
    symptoms: ['diarrhea'],
    forms: ['dispersible-tablet', 'syrup'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary: 'Suplemen zinc 10 hari untuk anak diare (anjuran WHO dan Kemenkes). Diare jadi lebih singkat dan lebih jarang kambuh.',
    howItWorks:
      'Zinc membantu memperbaiki dinding usus yang rusak dan menguatkan daya tahan tubuh. Pada anak, diare jadi lebih singkat dan ringan, dan risiko diare berulang 2–3 bulan ke depan berkurang.',
    bestTime: ['Sejak diare dimulai, 1x sehari.'],
    howToUse: ['Larutkan tablet dalam 1 sendok makan air matang atau ASI, lalu minumkan.', 'Muntah dalam 30 menit: ulangi dosisnya.'],
    dose: {
      adult: ['Bukan terapi rutin untuk diare dewasa. Suplemen zinc dewasa: ikuti label.'],
      child: ['< 6 bulan: 10 mg (½ tablet 20 mg) 1x sehari, 10 hari.', '≥ 6 bulan: 20 mg (1 tablet) 1x sehari, 10 hari.'],
    },
    duration: '10 hari penuh — tetap dihabiskan walau diare sudah berhenti.',
    interactions: ['Beri jarak minimal 2 jam dengan zat besi, kalsium, dan antibiotik tetrasiklin/kuinolon.', 'Diberikan bersama oralit, bukan pengganti oralit.'],
    sideEffects: ['Mual atau muntah, rasa logam di mulut.'],
    warnings: ['Zinc tidak menggantikan oralit.'],
    seeDoctor: DIARRHEA_RED_FLAGS,
    relatedIds: ['oral-rehydration-salts'],
  },
  {
    id: 'loperamide',
    name: 'Loperamide',
    brands: ['Imodium', 'Loperamide (generik)'],
    ingredients: ['Loperamide'],
    group: 'diarrhea',
    symptoms: ['diarrhea'],
    forms: ['tablet'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'not-recommended',
    pregnancy: 'ask-doctor',
    summary: 'Penghenti diare untuk dewasa (mis. saat perjalanan). Tidak untuk anak kecil dan tidak untuk diare berdarah.',
    howItWorks: 'Memperlambat gerakan usus sehingga air lebih banyak diserap dan BAB berkurang. Tidak membunuh kuman.',
    analogy: 'Menginjak rem pada usus.',
    bestTime: ['Diare cair pada dewasa, tanpa demam dan tanpa darah, saat perlu.'],
    howToUse: ['Telan dengan air. Tetap minum oralit.'],
    dose: {
      adult: ['Awal 4 mg (2 tablet), lalu 2 mg setiap kali BAB cair.', 'Maks 8 mg/hari tanpa resep (dokter: maks 16 mg/hari).'],
      child: ['< 2 tahun: jangan.', '2–12 tahun: tidak dianjurkan untuk diare akut; utamakan oralit + zinc. Hanya bila diresepkan dokter.'],
    },
    duration: 'Maksimal 2 hari tanpa dokter.',
    interactions: ['Itrakonazol, ketokonazol, klaritromisin, kuinidin: kadar loperamide naik (risiko gangguan jantung).', 'Tetap minum oralit.'],
    sideEffects: ['Sembelit, kembung, kram perut, pusing.', 'Dosis berlebih: gangguan irama jantung.'],
    warnings: ['Jangan bila diare berdarah, demam tinggi, atau diare setelah minum antibiotik — kuman jadi tertahan di usus.'],
    seeDoctor: DIARRHEA_RED_FLAGS,
    relatedIds: ['oral-rehydration-salts'],
  },

  // ---------- Allergy ----------
  {
    id: 'cetirizine',
    name: 'Cetirizine',
    brands: ['Incidal-OD', 'Cetirizine (generik)'],
    ingredients: ['Cetirizine'],
    group: 'allergy',
    symptoms: ['allergy', 'itch-rash'],
    forms: ['tablet', 'syrup', 'drops'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'ask-doctor',
    summary: 'Antihistamin yang jarang bikin ngantuk. Untuk gatal, biduran, bersin, dan pilek alergi.',
    howItWorks:
      'Menghambat histamin — zat yang membuat gatal, bentol, bersin, dan hidung meler saat alergi. Generasi kedua: lebih sedikit masuk ke otak, jadi lebih jarang bikin ngantuk dibanding CTM.',
    bestTime: ['1x sehari di jam yang sama. Kalau terasa ngantuk, minum malam hari.', 'Boleh sebelum atau sesudah makan.'],
    howToUse: ['Telan dengan air. Sirup/drops diukur dengan takaran dari kemasan.'],
    dose: {
      adult: ['≥ 12 tahun: 10 mg 1x sehari (atau 5 mg 2x sehari).'],
      child: [
        '6–11 tahun: 5–10 mg per hari (5 mg 1–2x sehari).',
        '2–5 tahun: 2,5 mg 1–2x sehari (maks 5 mg/hari).',
        '6 bulan–< 2 tahun: 2,5 mg 1x sehari, dengan anjuran dokter.',
      ],
    },
    duration: 'Saat gejala. Alergi musiman bisa rutin beberapa minggu.',
    interactions: ['Alkohol, obat tidur/penenang: kantuk bertambah.', 'Jangan digabung dengan antihistamin lain (mis. CTM, juga yang ada di obat flu).'],
    sideEffects: ['Mengantuk ringan, mulut kering, sakit kepala, lelah.'],
    warnings: ['Gangguan ginjal: dosis dikurangi setengah.', 'Jangan menyetir bila terasa ngantuk.'],
    seeDoctor: ALLERGY_RED_FLAGS,
    relatedIds: ['chlorpheniramine', 'calamine-lotion'],
  },
  {
    id: 'chlorpheniramine',
    name: 'Chlorpheniramine (CTM)',
    brands: ['CTM (generik)'],
    ingredients: ['Chlorpheniramine'],
    group: 'allergy',
    symptoms: ['allergy', 'itch-rash'],
    forms: ['tablet', 'syrup'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'doctor',
    pregnancy: 'ask-doctor',
    summary: 'Antihistamin generasi lama yang murah. Efektif untuk gatal dan alergi, tapi sering bikin ngantuk. Banyak terdapat di obat flu.',
    howItWorks: 'Menghambat histamin seperti cetirizine, tapi lebih banyak masuk ke otak sehingga lebih sering menimbulkan kantuk.',
    bestTime: ['Saat gejala, atau malam hari bila gatal mengganggu tidur.'],
    howToUse: ['Telan dengan air.'],
    dose: {
      adult: ['4 mg tiap 4–6 jam, maks 24 mg/hari.'],
      child: ['6–11 tahun: 2 mg tiap 4–6 jam, maks 12 mg/hari.', '2–5 tahun: 1 mg tiap 4–6 jam (maks 6 mg/hari), dengan anjuran dokter.', '< 2 tahun: jangan.'],
    },
    duration: 'Beberapa hari, saat gejala.',
    interactions: [
      'Alkohol, obat tidur/penenang, obat batuk dekstrometorfan: kantuk bertambah.',
      'Cek obat flu — banyak yang sudah berisi CTM (dobel dosis).',
      'Jangan digabung dengan antihistamin lain.',
    ],
    sideEffects: ['Mengantuk, mulut kering, sembelit, sulit buang air kecil.', 'Pada anak kadang malah gelisah/hiperaktif.'],
    warnings: ['Glaukoma, pembesaran prostat: hindari.', 'Jangan menyetir atau mengoperasikan mesin.'],
    seeDoctor: ALLERGY_RED_FLAGS,
    relatedIds: ['cetirizine'],
  },
];
