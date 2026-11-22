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
  | 'fiber-supplement'
  | 'herbal'
  | 'allergy'
  | 'cough'
  | 'nasal'
  | 'mouth-throat'
  | 'laxative'
  | 'gas-cramps'
  | 'antifungal'
  | 'skin-treatment'
  | 'acne'
  | 'eye-care'
  | 'antiparasitic';

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
  | 'constipation'
  | 'high-cholesterol'
  | 'weight-loss'
  | 'allergy'
  | 'cough-wet'
  | 'cough-dry'
  | 'cold'
  | 'sore-throat'
  | 'mouth-ulcer'
  | 'cramps'
  | 'fungal'
  | 'skin-infection'
  | 'cold-sore'
  | 'acne'
  | 'eye'
  | 'worms'
  | 'scabies-lice';

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
  | 'injection'
  | 'spray'
  | 'lozenge'
  | 'shampoo'
  | 'suppository';

/** When to take it relative to meals. `external` = applied (skin, nose, eye, mouth rinse), not swallowed. */
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
  'fiber-supplement': 'Fiber supplement',
  herbal: 'Herbal ingredient (jamu)',
  allergy: 'Allergy & itch',
  cough: 'Cough (phlegm & dry)',
  nasal: 'Nose & cold',
  'mouth-throat': 'Mouth & throat',
  laxative: 'Laxative',
  'gas-cramps': 'Gas & cramps',
  antifungal: 'Antifungal',
  'skin-treatment': 'Skin inflammation & infection',
  acne: 'Acne',
  'eye-care': 'Eye care',
  antiparasitic: 'Worms, lice & scabies',
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
  constipation: 'Constipation',
  'high-cholesterol': 'High cholesterol',
  'weight-loss': 'Weight loss / slimming',
  allergy: 'Allergy',
  'cough-wet': 'Wet cough (phlegm)',
  'cough-dry': 'Dry cough',
  cold: 'Cold / blocked nose',
  'sore-throat': 'Sore throat',
  'mouth-ulcer': 'Mouth ulcer',
  cramps: 'Stomach cramps',
  fungal: 'Fungal skin infection',
  'skin-infection': 'Infected skin (impetigo)',
  'cold-sore': 'Cold sore (herpes)',
  acne: 'Acne',
  eye: 'Red / dry eyes',
  worms: 'Worms',
  'scabies-lice': 'Scabies / lice',
};

/** Indonesian everyday words so searches like "maag" or "mual" find the right symptom. */
export const SYMPTOM_KEYWORDS: Record<Symptom, string[]> = {
  burn: ['luka bakar', 'knalpot', 'melepuh', 'terbakar', 'air panas'],
  'open-wound': ['luka', 'lecet', 'luka basah', 'luka terbuka', 'sayat'],
  scar: ['bekas luka', 'keloid', 'parut', 'koreng'],
  'dry-skin': ['kulit kering', 'pecah-pecah', 'pelembap'],
  'sun-protection': ['matahari', 'sinar uv', 'tabir surya', 'sunblock', 'menghitam'],
  'itch-rash': ['gatal', 'ruam', 'biang keringat', 'gigitan serangga', 'cacar'],
  heartburn: ['asam lambung', 'gerd', 'refluks', 'panas di dada', 'sendawa asam', 'heartburn', 'lpr', 'tenggorokan asam'],
  'stomach-pain': ['maag', 'perih', 'ulu hati', 'sakit perut', 'dispepsia', 'lambung'],
  bloating: ['kembung', 'begah', 'gas', 'penuh'],
  ulcer: ['tukak', 'luka lambung', 'ulkus', 'usus 12 jari'],
  'h-pylori': ['helicobacter', 'bakteri lambung'],
  'nausea-vomiting': ['mual', 'muntah', 'eneg', 'mabuk', 'mabuk perjalanan', 'mabuk laut', 'mabuk darat'],
  fever: ['demam', 'panas', 'meriang'],
  pain: ['nyeri', 'sakit', 'pusing', 'sakit kepala', 'sakit gigi', 'nyeri haid', 'nyeri otot', 'pegal', 'keseleo', 'nyeri sendi'],
  diarrhea: ['diare', 'mencret', 'bab cair', 'dehidrasi'],
  constipation: ['sembelit', 'konstipasi', 'susah bab', 'sulit bab', 'bab keras', 'serat'],
  'high-cholesterol': ['kolesterol', 'ldl', 'lemak darah'],
  'weight-loss': ['pelangsing', 'langsing', 'diet', 'turun berat badan', 'berat badan', 'gemuk', 'obesitas', 'lemak', 'nafsu makan', 'jamu'],
  allergy: ['alergi', 'bersin', 'pilek alergi', 'biduran', 'kaligata', 'bentol'],
  'cough-wet': ['batuk berdahak', 'dahak', 'riak', 'lendir', 'pengencer dahak', 'ekspektoran', 'mukolitik'],
  'cough-dry': ['batuk kering', 'batuk gatal', 'tenggorokan gatal', 'penekan batuk', 'antitusif'],
  cold: ['pilek', 'flu', 'hidung tersumbat', 'hidung mampet', 'ingus', 'meler', 'selesma', 'dekongestan', 'sinus'],
  'sore-throat': ['sakit tenggorokan', 'radang tenggorokan', 'nyeri menelan', 'amandel', 'tonsil', 'faringitis'],
  'mouth-ulcer': ['sariawan', 'luka mulut', 'stomatitis', 'gusi'],
  cramps: ['kram perut', 'mulas', 'melilit', 'kolik', 'kejang perut'],
  fungal: ['jamur', 'panu', 'kurap', 'kadas', 'kutu air', 'tinea', 'ketombe', 'gatal selangkangan'],
  'skin-infection': ['impetigo', 'koreng', 'bisul', 'nanah', 'infeksi kulit', 'luka bernanah'],
  'cold-sore': ['herpes', 'herpes bibir', 'lepuh bibir', 'lepuh di bibir'],
  acne: ['jerawat', 'komedo', 'beruntusan'],
  eye: ['mata merah', 'mata kering', 'mata lelah', 'kelilipan', 'tetes mata', 'mata perih'],
  worms: ['cacing', 'cacingan', 'kremi', 'gatal anus', 'obat cacing'],
  'scabies-lice': ['kudis', 'skabies', 'gudik', 'kutu rambut', 'tungau'],
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
  spray: 'Spray',
  lozenge: 'Lozenge',
  shampoo: 'Shampoo',
  suppository: 'Suppository',
};

export const TIMING_LABELS: Record<MealTiming, string> = {
  'before-meal': 'Before meals',
  'after-meal': 'After meals',
  'any-time': 'With or without food',
  external: 'Applied, not swallowed',
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
export const WOUND_RED_FLAGS = [
  'Luka bakar melepuh lebih besar dari telapak tangan korban, atau di wajah, tangan, kaki, kelamin, atau sendi.',
  'Tanda infeksi: kemerahan makin melebar, bengkak, bernanah, berbau, atau demam.',
  'Luka belum tertutup setelah 2–3 minggu (risiko bekas luka tebal lebih tinggi).',
];

export const SCAR_RED_FLAGS = [
  'Bekas luka makin tebal, menonjol, keras, atau melebar keluar batas luka awal (tanda keloid / bekas luka hipertrofik).',
  'Bekas luka di sendi membuat gerakan terasa kaku atau terbatas.',
  'Gatal hebat yang mengganggu tidur.',
];

export const STOMACH_RED_FLAGS = [
  'Muntah darah atau muntahan seperti kopi, BAB hitam seperti aspal.',
  'Sulit atau sakit saat menelan, makanan terasa tersangkut.',
  'Berat badan turun tanpa sebab, cepat kenyang terus-menerus.',
  'Gejala baru muncul di usia > 50 tahun, atau tidak membaik setelah 2 minggu pengobatan sendiri.',
  'Nyeri dada menjalar ke lengan/rahang, keringat dingin, sesak — bisa serangan jantung, segera ke IGD.',
];

export const VOMITING_RED_FLAGS = [
  'Tanda dehidrasi: jarang pipis, sangat lemas, mulut kering, menangis tanpa air mata, mata cekung.',
  'Muntah darah atau muntah hijau.',
  'Perut sangat sakit atau keras, atau muntah setelah kepala terbentur.',
  'Muntah > 24 jam (anak) atau > 48 jam (dewasa), atau tidak bisa minum sama sekali.',
];

export const DIARRHEA_RED_FLAGS = [
  'Tanda dehidrasi: sangat lemas/rewel, mata cekung, tidak mau minum atau minum rakus sekali, jarang pipis (> 6–8 jam pada anak), menangis tanpa air mata.',
  'Ada darah di tinja, demam tinggi, atau muntah terus sehingga tidak bisa minum.',
  'Diare > 3 hari (anak) atau > 1 minggu (dewasa); bayi < 6 bulan dengan diare.',
];

export const FEVER_RED_FLAGS = [
  'Bayi < 3 bulan dengan suhu ≥ 38 °C.',
  'Demam > 3 hari, kejang, sesak, kaku leher, atau ruam yang tidak memudar saat ditekan gelas.',
  'Sangat lemas, sulit dibangunkan, atau tanda dehidrasi.',
];

export const BOWEL_RED_FLAGS = [
  'Sembelit > 7 hari walau sudah minum serat, atau BAB berdarah.',
  'Perubahan pola BAB yang menetap > 2 minggu, terutama di usia > 50 tahun.',
  'Perut sangat sakit, kembung keras, muntah, dan tidak bisa kentut (curiga sumbatan usus) — segera ke IGD.',
  'Nyeri dada, tersedak, atau sulit menelan setelah minum psyllium — segera ke IGD.',
];

const SLIMMING_RED_FLAGS = [
  'Jantung berdebar kencang, nyeri dada, sesak, atau tekanan darah naik — hentikan dan segera ke dokter/IGD.',
  'Kulit atau mata kuning, urin gelap seperti teh, mual hebat, nyeri perut kanan atas (tanda gangguan hati).',
  'Susah tidur berhari-hari, cemas atau gelisah berlebihan, perubahan suasana hati yang jelas.',
  'Haid telat lebih dari 1 siklus atau berhenti.',
  'Efek "terlalu cepat" (nafsu makan hilang total, berat turun drastis) — curigai campuran obat ilegal (sibutramin).',
];

/** Jamu slimming ingredients share most of their safety text. Doses are not on mixed-product labels. */
const herbal = (entry: Pick<Medicine, 'id' | 'name' | 'ingredients' | 'summary' | 'howItWorks' | 'sideEffects'> & Partial<Medicine>): Medicine => ({
  brands: ['Kapsul pelangsing herbal campuran (mis. Flamora, SULEM)'],
  group: 'herbal',
  symptoms: ['weight-loss'],
  forms: ['capsule'],
  timing: 'any-time',
  availability: 'otc',
  childUse: 'not-recommended',
  pregnancy: 'avoid',
  bestTime: ['Ikuti label produk. Bila lambung sensitif (maag), minum setelah makan.'],
  howToUse: ['Telan dengan air sesuai label. Jangan melebihi dosis atau menggabungkan beberapa produk pelangsing.'],
  dose: {
    adult: ['Tidak ada dosis baku; produk campuran tidak mencantumkan dosis per bahan. Ikuti label, jangan melebihi.'],
    child: ['Tidak untuk anak dan remaja sebagai pelangsing.'],
  },
  duration: 'Bila tetap dipakai: maksimal beberapa minggu, lalu evaluasi. Tidak dianjurkan jangka panjang (data keamanan minim).',
  interactions: [
    'Beri jarak 2 jam dengan obat lain.',
    'Obat diabetes, darah tinggi, jantung, pengencer darah, obat tiroid: tanya dokter dulu.',
  ],
  warnings: [
    'BPOM "TR" = obat tradisional: izin menilai keamanan dan mutu, khasiat berdasarkan pemakaian turun-temurun — bukan uji klinis.',
    'Cek nomor izin di cekbpom.pom.go.id. Jamu pelangsing berulang kali ditemukan dicampur sibutramin (ilegal, berbahaya untuk jantung).',
    'Turun berat dari efek peluruh kencing atau BAB lancar = air dan isi usus, bukan lemak.',
  ],
  seeDoctor: SLIMMING_RED_FLAGS,
  relatedIds: ['psyllium-husk'],
  ...entry,
});

export const ALLERGY_RED_FLAGS = [
  'Bengkak bibir/mata/lidah, sesak, suara serak, atau pusing mau pingsan = reaksi alergi berat (anafilaksis), segera ke IGD.',
  'Ruam melepuh, mengelupas, atau mengenai mulut/mata.',
];

export const COUGH_RED_FLAGS = [
  'Sesak, napas cepat atau berbunyi (mengi), atau dada anak tertarik ke dalam saat bernapas — segera ke dokter/IGD.',
  'Batuk > 3 minggu, batuk darah, berat badan turun, atau keringat malam (perlu dicek TBC).',
  'Demam tinggi > 3 hari, atau nyeri dada saat bernapas/batuk.',
  'Bayi < 3 bulan yang batuk, atau batuk beruntun diakhiri tarikan napas berbunyi "whoop" (batuk rejan).',
];

export const NOSE_RED_FLAGS = [
  'Pilek > 10 hari tanpa membaik, atau sempat membaik lalu memburuk lagi (curiga sinusitis bakteri).',
  'Nyeri wajah/dahi hebat, bengkak di sekitar mata, atau demam tinggi.',
  'Ingus hanya dari satu lubang hidung, berbau, atau berdarah (pada anak: curiga benda asing).',
];

export const THROAT_RED_FLAGS = [
  'Sulit menelan ludah, ngiler, sulit membuka mulut, atau suara seperti ada kentang panas di mulut — segera ke IGD.',
  'Sesak napas atau napas berbunyi.',
  'Demam tinggi tanpa batuk, amandel bernanah, kelenjar leher bengkak nyeri (curiga radang bakteri — perlu dokter).',
  'Tidak membaik setelah 1 minggu, atau suara serak > 3 minggu.',
];

export const PAIN_RED_FLAGS = [
  'Sakit kepala mendadak yang paling hebat seumur hidup, disertai kaku leher, lemah separuh badan, bicara pelo, atau setelah benturan kepala — segera ke IGD.',
  'Nyeri dada, nyeri perut hebat, atau nyeri disertai demam tinggi.',
  'Butuh obat nyeri > 10 hari dalam sebulan (risiko sakit kepala karena obat).',
  'Nyeri haid makin berat dari tahun ke tahun atau tetap mengganggu aktivitas walau sudah minum obat.',
];

export const CRAMP_RED_FLAGS = [
  'Nyeri perut kanan bawah yang makin hebat, nyeri saat berjalan atau batuk (curiga usus buntu) — jangan diobati sendiri, segera ke dokter.',
  'Perut keras, demam, muntah terus, atau BAB berdarah/hitam.',
  'Nyeri perut saat hamil.',
];

export const SKIN_INFECTION_RED_FLAGS = [
  'Kemerahan menyebar cepat, bengkak terasa hangat, nanah banyak, atau demam.',
  'Infeksi di wajah dekat mata, atau pada bayi baru lahir.',
  'Tidak membaik setelah 5–7 hari pengobatan.',
];

export const FUNGAL_RED_FLAGS = [
  'Tidak membaik setelah 2–4 minggu pemakaian yang benar.',
  'Mengenai kulit kepala, kuku, atau area luas — biasanya perlu obat minum dari dokter.',
  'Diabetes atau daya tahan tubuh lemah dengan luka di kaki.',
  'Ruam makin merah/melebar setelah memakai krim steroid (jamur memburuk dengan steroid).',
];

export const RASH_RED_FLAGS = ['Ruam tidak membaik setelah 7 hari, meluas, atau bernanah.', ...ALLERGY_RED_FLAGS];

export const EYE_RED_FLAGS = [
  'Mata nyeri, penglihatan kabur, silau, atau pupil tidak sama besar — segera ke dokter mata.',
  'Kena bahan kimia: bilas air mengalir 15 menit, lalu ke IGD.',
  'Belekan kental kuning/hijau yang banyak, atau bayi baru lahir dengan mata merah.',
  'Pengguna lensa kontak dengan mata merah (risiko infeksi kornea).',
];

export const MOUTH_RED_FLAGS = [
  'Sariawan > 2–3 minggu tidak sembuh, sangat besar, atau justru tidak nyeri (perlu dicek dokter/dokter gigi).',
  'Sariawan sering kambuh disertai diare, berat badan turun, atau luka di kelamin.',
  'Sulit makan/minum sampai lemas atau dehidrasi (terutama anak).',
];

export const WORM_RED_FLAGS = [
  'Anak kurus, pucat, lemas, atau perut buncit — periksa ke dokter/Puskesmas (cacingan berat, anemia).',
  'Cacing keluar dari mulut/hidung, nyeri perut hebat, atau muntah terus (curiga sumbatan usus) — segera ke IGD.',
  'Gatal anus menetap setelah 2 dosis yang berjarak 2 minggu.',
];

export const SCABIES_RED_FLAGS = [
  'Gatal tidak membaik 4 minggu setelah pengobatan lengkap.',
  'Kulit bernanah atau bengkak (infeksi bakteri tambahan).',
  'Bayi < 2 bulan, ibu hamil/menyusui: obat dipilih dokter.',
];

export const COLD_SORE_RED_FLAGS = [
  'Lepuh dekat mata, sangat luas, atau belum sembuh dalam 10 hari.',
  'Bayi baru lahir, eksim luas, atau daya tahan tubuh lemah.',
  'Kambuh sangat sering (> 6x setahun) — dokter bisa memberi obat minum.',
];

export const ACNE_RED_FLAGS = [
  'Jerawat batu (benjolan besar nyeri), meninggalkan bekas, atau tidak membaik setelah 2–3 bulan.',
  'Jerawat muncul bersama haid tidak teratur dan rambut berlebihan (perlu cek hormon, mis. PCOS).',
];

/** Shared text for NSAIDs taken by mouth (ibuprofen has its own entry). */
const NSAID_INTERACTIONS = [
  'Jangan digabung dengan NSAID lain (ibuprofen, asam mefenamat, diklofenak, aspirin dosis nyeri).',
  'Pengencer darah (warfarin, klopidogrel), kortikosteroid, antidepresan SSRI: risiko perdarahan lambung naik.',
  'Obat darah tinggi (ACE inhibitor/ARB) dan diuretik: efeknya berkurang dan ginjal terbebani.',
];

const ANTIFUNGAL_WARNINGS = [
  'Jangan dicampur dengan krim steroid kecuali diresepkan — steroid membuat jamur makin luas.',
  'Jaga area tetap kering; jamur tumbuh di kulit lembap. Handuk dan alas kaki jangan dipakai bersama.',
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
      'Boleh untuk kelopak/bawah mata yang kering: oles sangat tipis di malam hari, tepuk-tepuk, jangan sampai masuk ke mata.',
    ],
    dose: { adult: ['Oles tipis 2–3x sehari atau saat terasa kering.'], child: ['Sama seperti dewasa.'] },
    duration: 'Selama diperlukan.',
    interactions: ['Jangan dioles di bawah lembaran silikon.', 'Bila keluar rumah, lanjutkan dengan sunscreen.'],
    sideEffects: [
      'Terasa lengket. Kadang memicu bintik kecil di area yang berminyak.',
      'Di bawah mata kadang memicu milia (bintil putih kecil). Hentikan bila muncul.',
    ],
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
    howToUse: [
      'Tablet: kunyah sampai halus, baru ditelan. Boleh diikuti air.',
      'Suspensi: kocok dulu, ukur dengan sendok takar.',
      'Pilihan paling hemat: Antasida DOEN generik.',
    ],
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
    brands: ['Gaviscon', 'Gaviscon Double Action'],
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
    bestTime: ['Setelah makan dan sebelum tidur — saat paling sering terjadi refluks. Dosis sebelum tidur paling penting karena asam paling mudah naik saat berbaring.'],
    howToUse: [
      'Kocok dulu, ukur dengan sendok takar. Tablet kunyah dikunyah sampai halus.',
      'Setelah minum, jangan makan atau minum ± 30 menit agar "rakit" tidak rusak.',
      'Radang tenggorokan karena asam (LPR): pilih bentuk cair/sachet — sekalian melapisi tenggorokan saat ditelan.',
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
    warnings: [
      'Bukan pilihan utama untuk radang tenggorokan karena asam (LPR) — pilih alginat.',
      'Mengandung aluminium: hati-hati pada gangguan ginjal atau cuci darah.',
      'Diabetes: beberapa suspensi mengandung gula — cek label.',
    ],
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
      'Hindari saat cacar air (risiko infeksi kulit berat) dan bila curiga demam berdarah/DBD (risiko perdarahan).',
      'Maag/tukak aktif, gagal ginjal/jantung, atau asma yang kambuh karena NSAID: hindari.',
      'Hamil ≥ 20 minggu: hindari.',
    ],
    seeDoctor: FEVER_RED_FLAGS,
    relatedIds: ['paracetamol', 'mefenamic-acid', 'diclofenac', 'lansoprazole'],
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

  // ---------- Fiber supplement ----------
  {
    id: 'psyllium-husk',
    name: 'Psyllium husk',
    brands: ['Metamucil (impor)', 'Psyllium husk bubuk / serpihan (generik, curah)'],
    ingredients: ['Psyllium husk (Plantago ovata)'],
    group: 'fiber-supplement',
    symptoms: ['constipation', 'diarrhea', 'high-cholesterol'],
    forms: ['sachet', 'capsule'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'doctor',
    pregnancy: 'generally-ok',
    summary:
      'Serat larut dari kulit biji Plantago ovata. Melancarkan BAB, membantu diare ringan, menurunkan kolesterol LDL, dan meredam lonjakan gula darah. Kalori sangat kecil, protein praktis nol.',
    howItWorks:
      'Psyllium = tanamannya; psyllium husk = kulit bijinya, bagian yang dijual sebagai suplemen. Isinya hampir semua serat larut yang menyerap air dan menjadi gel. Gel ini melunakkan dan menambah volume feses (sembelit), menyerap kelebihan air (diare ringan), mengikat asam empedu sehingga hati memakai kolesterol untuk membuat yang baru (LDL turun ± 5–10%; klaim kesehatan diakui FDA), dan memperlambat penyerapan gula. Juga dianjurkan untuk IBS. Efek ke berat badan kecil — bantu kenyang, bukan alat utama diet.',
    analogy: 'Seperti chia seed yang direndam, tapi daya serap airnya jauh lebih kuat.',
    bestTime: [
      'Sembelit / BAB: kapan saja, 1–3x sehari. Efek BAB biasanya 12–72 jam.',
      'Kolesterol / gula darah: sebelum atau bersama makan.',
      'Minimal 2 jam sebelum atau sesudah obat lain.',
    ],
    howToUse: [
      'Cek bentuknya: serpihan utuh ringan (1 sdm ≈ 5 g); bubuk lebih padat (1 sdt ≈ 3–5 g, 1 sdm ≈ 10–15 g — terlalu banyak untuk awal). Berat per sendok beda tiap merek: ikuti label.',
      'Aduk ke ± 250 ml air atau minuman, lalu langsung diminum sebelum mengental jadi gel.',
      'Susul dengan 1 gelas air lagi, dan cukupi minum sepanjang hari.',
      'Mulai 1x sehari ± 1 minggu, naikkan bertahap bila perut aman (mengurangi kembung).',
    ],
    dose: {
      adult: [
        'Awal ± 3–5 g (1 sdm serpihan atau 1 sdt bubuk) + 250 ml air, 1x sehari.',
        'Umum 5–10 g/hari, dibagi 1–3x (label Metamucil: ± 3,4 g dengan 240 ml cairan, maks 3x sehari).',
        'Untuk kolesterol (patokan FDA): ± 10 g husk/hari (= 7 g serat larut), dibagi 2–3x bersama makan.',
      ],
      child: ['6–11 tahun: setengah dosis dewasa dengan 240 ml cairan.', '< 6 tahun: hanya dengan anjuran dokter.'],
    },
    duration: 'Boleh rutin jangka panjang. Untuk sembelit, bila > 7 hari tidak membaik, periksa ke dokter.',
    interactions: [
      'Beri jarak minimal 2 jam dengan semua obat minum lain — psyllium bisa menghambat penyerapannya (mis. obat tiroid, diabetes, jantung, litium, karbamazepin).',
      'Obat diabetes: gula darah bisa turun lebih banyak; pantau dan konsultasikan dosis.',
    ],
    sideEffects: ['Kembung, banyak gas, kram perut ringan di awal (berkurang bila dosis dinaikkan pelan).', 'Jarang: reaksi alergi (gatal, sesak).'],
    warnings: [
      'Wajib dengan cukup air. Kurang air → gel bisa menggumpal dan menyumbat kerongkongan atau usus, bisa tersedak.',
      'Jangan dipakai bila sulit menelan, pernah sumbatan/penyempitan usus, atau alergi psyllium.',
      'Bukan pengganti serat dari sayur, buah, dan biji-bijian.',
    ],
    seeDoctor: BOWEL_RED_FLAGS,
  },

  // ---------- Herbal (jamu) slimming ingredients ----------
  herbal({
    id: 'bitter-orange',
    name: 'Bitter orange (jeruk pahit)',
    ingredients: ['Bitter orange (Citrus aurantium, synephrine)'],
    summary: 'Stimulan pelangsing (sinefrin, mirip efedrin). Bukti penurunan berat lemah; risiko jantung dan tekanan darah, terutama bila digabung kafein.',
    howItWorks:
      'Sinefrin merangsang sistem saraf seperti efedrin (versi lebih lemah): sedikit menaikkan pembakaran kalori dan menekan lapar. Pada studi efeknya ke berat badan sangat kecil.',
    analogy: 'Menginjak gas mesin tubuh — sedikit lebih boros bensin, tapi mesin (jantung) ikut dipacu.',
    sideEffects: ['Jantung berdebar, tekanan darah naik, gelisah, cemas, mudah marah, susah tidur, sakit kepala.', 'Laporan kasus gangguan irama jantung dan stroke, terutama bila digabung kafein.'],
    dose: {
      adult: [
        'Produk campuran tidak mencantumkan kadar sinefrin.',
        'Patokan Health Canada: sinefrin maks 50 mg/hari; bila digabung kafein maks 40 mg sinefrin + 320 mg kafein per hari.',
      ],
      child: ['Jangan.'],
    },
    interactions: [
      'Kafein, kopi, teh hijau, minuman energi: efek stimulan bertambah (kombinasi paling berisiko).',
      'Obat darah tinggi, obat jantung, antidepresan MAOI, obat flu dengan pseudoefedrin/fenilefrin: hindari.',
      'Beri jarak 2 jam dengan obat lain.',
    ],
    warnings: [
      'Hindari bila hipertensi, penyakit jantung, gangguan irama jantung, tiroid berlebih, glaukoma, cemas.',
      'Tidak dianjurkan jangka panjang: risiko jantung menumpuk.',
      'BPOM "TR" = obat tradisional: izin menilai keamanan dan mutu, bukan uji klinis. Cek izin di cekbpom.pom.go.id.',
    ],
    relatedIds: ['green-tea-extract', 'psyllium-husk'],
  }),
  herbal({
    id: 'mulberry-leaf',
    name: 'Mulberry leaf (daun murbei)',
    ingredients: ['Mulberry leaf (Morus alba)'],
    symptoms: ['weight-loss', 'high-cholesterol'],
    pregnancy: 'ask-doctor',
    summary: 'Menahan penyerapan karbohidrat sehingga lonjakan gula darah setelah makan sedikit turun. Efek ke berat badan kecil; relatif aman sebagai teh.',
    howItWorks:
      'Zat DNJ di daun murbei menghambat enzim pemecah karbohidrat di usus, sehingga gula diserap lebih lambat. Gula darah lebih stabil → "lapar mendadak" bisa berkurang (efek tidak langsung).',
    sideEffects: ['Kembung, banyak gas, diare ringan (karbo yang tidak tercerna difermentasi bakteri usus).'],
    bestTime: ['Bersama atau sebelum makan yang mengandung karbohidrat.'],
    duration: 'Sebagai teh relatif aman dipakai rutin. Dalam kapsul pelangsing campuran: tidak dianjurkan jangka panjang.',
    interactions: ['Obat diabetes/insulin: gula darah bisa terlalu rendah — pantau dan tanya dokter.', 'Beri jarak 2 jam dengan obat lain.'],
  }),
  herbal({
    id: 'jati-belanda',
    name: 'Jati belanda leaf (daun jati belanda)',
    ingredients: ['Jati belanda leaf (Guazuma ulmifolia)'],
    summary: 'Pelangsing tradisional Indonesia. Bukti sangat lemah (hanya lab/hewan); data keamanan jangka panjang pada manusia minim.',
    howItWorks:
      'Diklaim menghambat penyerapan lemak di usus (lendir dan taninnya). Baru diuji di tabung lab atau hewan — belum terbukti menurunkan lemak pada manusia.',
    sideEffects: ['Perut tidak nyaman, mual, BAB berubah (lebih sering atau malah sembelit karena tanin).'],
  }),
  herbal({
    id: 'green-tea-extract',
    name: 'Green tea extract (ekstrak teh hijau)',
    ingredients: ['Green tea (Camellia sinensis, catechins/EGCG, caffeine)'],
    summary: 'Katekin + kafein, efek turun berat kecil (± 1 kg dalam beberapa bulan). Ekstrak pekat berisiko merusak hati; teh seduhan jauh lebih aman.',
    howItWorks:
      'Katekin (terutama EGCG) dan kafein sedikit menaikkan pembakaran kalori. Dalam ekstrak/kapsul dosisnya jauh lebih pekat daripada teh seduhan.',
    sideEffects: [
      'Kafein: susah tidur, berdebar, cemas, perut perih.',
      'Ekstrak pekat: kerusakan hati (jarang tapi serius), terutama saat perut kosong.',
      'Menghambat penyerapan zat besi — berisiko lemas/anemia bila haid banyak.',
    ],
    dose: {
      adult: [
        'EFSA: EGCG ≥ 800 mg/hari dari suplemen berkaitan dengan kerusakan hati.',
        'Kafein total dewasa ≤ 400 mg/hari (hamil ≤ 200 mg/hari), termasuk kopi dan teh.',
        'Lebih aman: teh hijau seduhan 2–3 cangkir/hari.',
      ],
      child: ['Jangan (ekstrak).'],
    },
    duration: 'Teh seduhan boleh rutin. Ekstrak pekat: tidak dianjurkan jangka panjang (risiko hati).',
    interactions: [
      'Jeruk pahit, kopi, minuman energi: efek stimulan bertambah.',
      'Zat besi tablet: beri jarak 2 jam.',
      'Warfarin, obat jantung (nadolol), obat lain: beri jarak 2 jam dan tanya dokter.',
    ],
    relatedIds: ['bitter-orange', 'psyllium-husk'],
  }),
  herbal({
    id: 'ginger',
    name: 'Ginger (jahe)',
    ingredients: ['Ginger (Zingiber officinale)'],
    symptoms: ['weight-loss', 'nausea-vomiting'],
    pregnancy: 'ask-doctor',
    childUse: 'doctor',
    summary: 'Bukti kuat untuk mual dan cukup baik untuk nyeri haid; untuk berat badan efeknya sangat kecil. Paling aman di antara bahan pelangsing.',
    howItWorks: 'Zat gingerol dan shogaol membantu pengosongan lambung dan meredakan mual. Efek "membakar lemak" pada manusia sangat kecil.',
    sideEffects: ['Umumnya aman. Dosis tinggi: heartburn, perut perih, diare.'],
    dose: {
      adult: ['Sebagai bumbu atau minuman: aman dalam jumlah makanan.', 'Suplemen: ikuti label.'],
      child: ['Sebagai makanan boleh; suplemen dengan anjuran dokter.'],
    },
    duration: 'Sebagai bumbu/minuman aman jangka panjang. Dalam kapsul pelangsing campuran: ikuti batasan produknya.',
    interactions: ['Obat pengencer darah (warfarin, aspirin dosis harian): dosis tinggi menambah risiko perdarahan.', 'Obat diabetes: gula darah bisa sedikit turun.'],
    warnings: ['Batu empedu: tanya dokter dulu untuk dosis suplemen.', 'Akan operasi: hentikan suplemen jahe ± 2 minggu sebelumnya (risiko perdarahan).'],
  }),
  herbal({
    id: 'kemuning',
    name: 'Kemuning leaf (daun kemuning)',
    ingredients: ['Kemuning leaf (Murraya paniculata)'],
    summary: 'Pelangsing tradisional. Bukti sangat lemah (hanya hewan); data keamanan jangka panjang pada manusia hampir tidak ada.',
    howItWorks: 'Diklaim menurunkan lemak dan kolesterol berdasarkan pemakaian tradisional dan studi hewan. Belum ada uji klinis yang memadai pada manusia.',
    sideEffects: ['Data efek samping pada manusia minim; laporan umumnya keluhan pencernaan.'],
  }),
  herbal({
    id: 'meniran',
    name: 'Meniran',
    ingredients: ['Meniran (Phyllanthus niruri)'],
    summary: 'Terbukti sedang untuk daya tahan tubuh (bahan Stimuno), bukan untuk berat badan. Bisa menurunkan gula dan tekanan darah; hindari saat hamil.',
    howItWorks:
      'Imunomodulator: membantu mengatur respons daya tahan tubuh. Secara tradisional juga peluruh kencing — berat yang turun dari efek ini adalah air, bukan lemak.',
    sideEffects: ['Sering buang air kecil, gangguan pencernaan ringan.', 'Gula darah dan tekanan darah bisa turun.'],
    duration: 'Untuk daya tahan tubuh biasanya jangka pendek. Tidak dianjurkan diminum rutin bertahun-tahun, apalagi pada penyakit autoimun.',
    interactions: ['Obat diabetes dan darah tinggi: efek penurunan bisa bertambah.', 'Obat penekan imun (mis. setelah transplantasi, autoimun): tanya dokter.', 'Beri jarak 2 jam dengan obat lain.'],
  }),
  herbal({
    id: 'bangle',
    name: 'Bangle rhizome (rimpang bangle)',
    ingredients: ['Bangle (Zingiber montanum / cassumunar)'],
    summary: 'Pelangsing tradisional, sering dipakai setelah melahirkan; anti-radang. Bukti lemah (lab/hewan); data jangka panjang minim.',
    howItWorks: 'Kerabat jahe; zatnya bersifat anti-radang. Efek pelangsing berdasarkan pemakaian tradisional, belum terbukti pada manusia.',
    sideEffects: ['Iritasi lambung, perut perih.'],
    bestTime: ['Setelah makan bila lambung sensitif.'],
  }),

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
    relatedIds: ['chlorpheniramine', 'loratadine', 'calamine-lotion'],
  },
  {
    id: 'chlorpheniramine',
    name: 'Chlorpheniramine (CTM)',
    brands: ['CTM (generik)', 'Banyak obat flu & batuk kombinasi — cek label "klorfeniramin maleat"'],
    ingredients: ['Chlorpheniramine'],
    group: 'allergy',
    symptoms: ['allergy', 'itch-rash', 'cold'],
    forms: ['tablet', 'syrup'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'doctor',
    pregnancy: 'ask-doctor',
    summary:
      'Antihistamin generasi lama yang murah. CTM = chlorpheniramine maleate (zat yang sama). Efektif untuk gatal, alergi, dan mengeringkan pilek, tapi sering bikin ngantuk. Banyak terdapat di obat flu.',
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
    relatedIds: ['cetirizine', 'loratadine', 'diphenhydramine'],
  },
  {
    id: 'loratadine',
    name: 'Loratadine',
    brands: ['Claritin', 'Loratadine (generik)'],
    ingredients: ['Loratadine'],
    group: 'allergy',
    symptoms: ['allergy', 'itch-rash'],
    forms: ['tablet', 'syrup'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'ask-doctor',
    summary: 'Antihistamin generasi kedua, 1x sehari, hampir tidak bikin ngantuk. Untuk bersin, pilek alergi, gatal, dan biduran.',
    howItWorks:
      'Menghambat histamin seperti cetirizine, dengan efek kantuk paling kecil di antara keduanya. Tidak membantu pilek karena virus (flu) — hanya pilek karena alergi.',
    bestTime: ['1x sehari di jam yang sama.', 'Boleh sebelum atau sesudah makan.'],
    howToUse: ['Telan dengan air. Sirup diukur dengan sendok takar dari kemasan.'],
    dose: {
      adult: ['≥ 12 tahun: 10 mg 1x sehari.'],
      child: ['2–12 tahun, berat > 30 kg: 10 mg 1x sehari.', '2–12 tahun, berat ≤ 30 kg: 5 mg 1x sehari.', '< 2 tahun: dengan anjuran dokter.'],
    },
    duration: 'Saat gejala. Alergi musiman bisa rutin beberapa minggu.',
    interactions: ['Jangan digabung dengan antihistamin lain (CTM, cetirizine, difenhidramin di obat flu/batuk).', 'Alkohol: sebagian orang tetap merasa ngantuk.'],
    sideEffects: ['Sakit kepala, lelah, mulut kering — jarang.'],
    warnings: ['Gangguan hati berat: dosis dijarangkan (dokter).'],
    seeDoctor: ALLERGY_RED_FLAGS,
    relatedIds: ['cetirizine', 'chlorpheniramine', 'pseudoephedrine'],
  },
  {
    id: 'diphenhydramine',
    name: 'Diphenhydramine (difenhidramin)',
    brands: ['Benadryl', 'Banyak sirup batuk & obat flu "malam" — cek label'],
    ingredients: ['Diphenhydramine'],
    group: 'allergy',
    symptoms: ['allergy', 'itch-rash', 'cold', 'cough-dry'],
    forms: ['tablet', 'capsule', 'syrup'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'doctor',
    pregnancy: 'ask-doctor',
    summary:
      'Antihistamin generasi lama yang sangat bikin ngantuk. Ada di banyak obat batuk/flu malam: mengeringkan ingus, meredakan bersin dan gatal, sedikit menekan batuk.',
    howItWorks: 'Menghambat histamin dan juga sinyal saraf yang membuat lendir (efek antikolinergik). Mudah masuk ke otak, sehingga kantuknya kuat.',
    bestTime: ['Malam hari, karena kantuknya.'],
    howToUse: ['Telan dengan air. Sirup diukur dengan sendok takar dari kemasan.'],
    dose: {
      adult: ['≥ 12 tahun: 25–50 mg tiap 4–6 jam, maks 300 mg/hari.'],
      child: ['6–11 tahun: 12,5–25 mg tiap 4–6 jam, maks 150 mg/hari.', '2–5 tahun: hanya dengan anjuran dokter.', '< 2 tahun: jangan (bisa fatal).'],
    },
    duration: 'Beberapa hari, saat gejala.',
    interactions: [
      'Jangan digabung dengan antihistamin lain (CTM, cetirizine, loratadin, dimenhidrinat).',
      'Alkohol, obat tidur, penenang, dekstrometorfan: kantuk berlipat.',
    ],
    sideEffects: ['Sangat mengantuk, mulut kering, pandangan kabur, sembelit, sulit buang air kecil.', 'Pada anak kadang malah gelisah.'],
    warnings: [
      'Lansia: risiko bingung, jatuh, dan sulit pipis — pilih antihistamin generasi kedua.',
      'Glaukoma, prostat membesar, asma berat: hindari.',
      'Jangan dipakai untuk "menidurkan" anak.',
      'Jangan menyetir atau mengoperasikan mesin.',
    ],
    seeDoctor: ALLERGY_RED_FLAGS,
    relatedIds: ['chlorpheniramine', 'loratadine', 'dextromethorphan'],
  },

  // ---------- Cough ----------
  {
    id: 'guaifenesin',
    name: 'Guaifenesin (gliseril guaiakolat / GG)',
    brands: ['Gliseril guaiakolat / GG (generik)', 'Banyak sirup batuk berdahak & obat flu kombinasi — cek label'],
    ingredients: ['Guaifenesin'],
    group: 'cough',
    symptoms: ['cough-wet'],
    forms: ['tablet', 'syrup'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'doctor',
    pregnancy: 'ask-doctor',
    summary: 'Pengencer dahak (ekspektoran) untuk batuk berdahak yang dahaknya kental dan sulit keluar. Di label Indonesia sering tertulis "gliseril guaiakolat".',
    howItWorks:
      'Menambah cairan di saluran napas sehingga dahak lebih encer dan mudah dibatukkan keluar. Bukti manfaatnya pada batuk pilek biasa terbatas — minum air yang cukup sama pentingnya.',
    analogy: 'Seperti menambahkan air ke lem yang mengental supaya mudah dibersihkan.',
    bestTime: ['Saat batuk berdahak, tiap 4 jam bila perlu.', 'Minum segelas air setiap kali minum obat.'],
    howToUse: ['Tablet ditelan dengan air. Sirup diukur dengan sendok takar dari kemasan.', 'Banyak minum air hangat sepanjang hari.'],
    dose: {
      adult: ['≥ 12 tahun: 200–400 mg tiap 4 jam bila perlu, maks 2.400 mg/hari.'],
      child: ['6–11 tahun: 100–200 mg tiap 4 jam, maks 1.200 mg/hari.', '2–5 tahun: 50–100 mg tiap 4 jam (maks 600 mg/hari), hanya dengan anjuran dokter.', '< 2 tahun: jangan.'],
    },
    duration: 'Maks 7 hari tanpa dokter.',
    interactions: [
      'Banyak obat flu kombinasi sudah berisi GG — jangan dobel.',
      'Kombinasi dengan penekan batuk (dekstrometorfan) kurang logis untuk batuk berdahak: dahak diencerkan, tapi batuk untuk mengeluarkannya ditekan.',
    ],
    sideEffects: ['Jarang: mual, muntah, pusing, sakit kepala, ruam.'],
    warnings: ['Batuk kronis (perokok, asma, PPOK) atau dahak sangat banyak: tanya dokter dulu.'],
    seeDoctor: COUGH_RED_FLAGS,
    relatedIds: ['ambroxol', 'bromhexine', 'acetylcysteine', 'dextromethorphan'],
  },
  {
    id: 'ambroxol',
    name: 'Ambroxol',
    brands: ['Mucopect', 'Ambroxol (generik)'],
    ingredients: ['Ambroxol'],
    group: 'cough',
    symptoms: ['cough-wet'],
    forms: ['tablet', 'syrup', 'drops'],
    timing: 'after-meal',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'ask-doctor',
    summary: 'Pengencer dahak (mukolitik) yang memecah dahak kental supaya mudah dikeluarkan. Banyak dipakai untuk anak.',
    howItWorks:
      'Mengubah struktur dahak menjadi lebih encer dan membantu rambut getar saluran napas (silia) menyapu dahak keluar. Ambroxol adalah hasil olahan tubuh dari bromheksin, jadi kerjanya mirip.',
    analogy: 'Seperti sabun cuci piring untuk lemak: gumpalan kental dipecah jadi mudah dibilas.',
    bestTime: ['Sesudah makan.'],
    howToUse: ['Telan dengan air. Sirup/drops diukur dengan takaran dari kemasan.', 'Banyak minum air.'],
    dose: {
      adult: ['≥ 12 tahun: 30 mg 3x sehari selama 2–3 hari pertama, lalu 30 mg 2x sehari.'],
      child: ['6–12 tahun: 15 mg 2–3x sehari.', '2–5 tahun: 7,5 mg 3x sehari.', '< 2 tahun: 7,5 mg 2x sehari, dengan anjuran dokter.'],
    },
    duration: 'Bila tidak membaik dalam 4–5 hari, periksa ke dokter.',
    interactions: [
      'Jangan digabung dengan bromheksin atau pengencer dahak lain (zat yang mirip — dobel).',
      'Jangan bersamaan dengan penekan batuk (dekstrometorfan): dahak yang sudah encer bisa menumpuk.',
    ],
    sideEffects: ['Mual, gangguan rasa, mulut/tenggorokan sedikit kebas.', 'Sangat jarang: reaksi alergi berat atau ruam kulit melepuh — hentikan dan ke dokter.'],
    warnings: ['Hamil trimester 1: hindari; setelahnya tanya dokter.', 'Gangguan ginjal atau hati berat: tanya dokter.'],
    seeDoctor: COUGH_RED_FLAGS,
    relatedIds: ['bromhexine', 'guaifenesin', 'acetylcysteine'],
  },
  {
    id: 'bromhexine',
    name: 'Bromhexine',
    brands: ['Bisolvon', 'Bromhexine (generik)'],
    ingredients: ['Bromhexine'],
    group: 'cough',
    symptoms: ['cough-wet'],
    forms: ['tablet', 'syrup'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'ask-doctor',
    summary: 'Pengencer dahak (mukolitik), "induk" dari ambroxol. Untuk batuk berdahak kental.',
    howItWorks: 'Di dalam tubuh diubah menjadi ambroxol. Memecah serat dahak supaya lebih encer dan mudah dibatukkan.',
    bestTime: ['Boleh sebelum atau sesudah makan; sesudah makan bila lambung sensitif.'],
    howToUse: ['Telan dengan air. Sirup diukur dengan sendok takar dari kemasan.', 'Banyak minum air.'],
    dose: {
      adult: ['≥ 12 tahun: 8–16 mg 3x sehari.'],
      child: ['6–12 tahun: 4 mg 3x sehari.', '2–5 tahun: 4 mg 2x sehari, dengan anjuran dokter.', '< 2 tahun: dengan anjuran dokter.'],
    },
    duration: 'Bila tidak membaik dalam 5–7 hari, periksa ke dokter.',
    interactions: ['Jangan digabung dengan ambroxol atau pengencer dahak lain.', 'Jangan bersamaan dengan penekan batuk (dekstrometorfan).'],
    sideEffects: ['Mual, perut tidak nyaman, diare ringan.', 'Sangat jarang: reaksi alergi berat atau ruam kulit melepuh — hentikan.'],
    warnings: ['Riwayat tukak lambung: tanya dokter (bisa mengiritasi lambung).'],
    seeDoctor: COUGH_RED_FLAGS,
    relatedIds: ['ambroxol', 'guaifenesin', 'acetylcysteine'],
  },
  {
    id: 'acetylcysteine',
    name: 'Acetylcysteine (N-asetilsistein / NAC)',
    brands: ['Fluimucil', 'Acetylcysteine (generik)'],
    ingredients: ['Acetylcysteine'],
    group: 'cough',
    symptoms: ['cough-wet'],
    forms: ['capsule', 'sachet', 'dispersible-tablet'],
    timing: 'any-time',
    availability: 'prescription',
    childUse: 'doctor',
    pregnancy: 'ask-doctor',
    summary: 'Pengencer dahak kuat (mukolitik) untuk dahak yang sangat kental. Lewat infus, NAC juga penawar keracunan parasetamol (di rumah sakit).',
    howItWorks: 'Memutus "jembatan" kimia (ikatan disulfida) yang membuat dahak kental dan lengket.',
    analogy: 'Seperti menggunting jaring-jaring sehingga gumpalan lendir terurai.',
    bestTime: ['Sachet/tablet larut dilarutkan dalam segelas air dan langsung diminum.'],
    howToUse: ['Bau belerang ringan itu normal.', 'Banyak minum air.'],
    dose: {
      adult: ['200 mg 2–3x sehari, atau 600 mg 1x sehari.'],
      child: ['6–14 tahun: 100 mg 3x sehari atau 200 mg 2x sehari.', '2–5 tahun: 100 mg 2–3x sehari, dengan anjuran dokter.', '< 2 tahun: jangan (dahak bisa menumpuk dan menyumbat napas bayi).'],
    },
    duration: 'Batuk akut: 5–10 hari.',
    interactions: [
      'Jangan bersamaan dengan penekan batuk (dekstrometorfan): dahak bisa menumpuk.',
      'Antibiotik yang diminum: beri jarak 2 jam.',
      'Nitrogliserin (obat jantung): sakit kepala dan tekanan darah turun bisa bertambah.',
    ],
    sideEffects: ['Mual, muntah, diare.', 'Jarang: sesak (bronkospasme) pada penderita asma, reaksi alergi.'],
    warnings: ['Asma: hati-hati, hentikan bila sesak.', 'Riwayat tukak lambung: hati-hati.'],
    seeDoctor: COUGH_RED_FLAGS,
    relatedIds: ['ambroxol', 'bromhexine', 'guaifenesin'],
  },
  {
    id: 'dextromethorphan',
    name: 'Dextromethorphan (DMP / DXM)',
    brands: ['Hanya dalam obat batuk/flu kombinasi — cek label "dekstrometorfan HBr"'],
    ingredients: ['Dextromethorphan'],
    group: 'cough',
    symptoms: ['cough-dry'],
    forms: ['tablet', 'syrup'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'doctor',
    pregnancy: 'ask-doctor',
    summary:
      'Penekan batuk (antitusif) untuk batuk kering yang mengganggu, terutama malam hari. Bukan untuk batuk berdahak. Sering disalahgunakan, sehingga sediaan tunggalnya sudah ditarik BPOM.',
    howItWorks:
      'Menaikkan ambang "pusat batuk" di otak sehingga refleks batuk berkurang. Pada dosis sangat tinggi bekerja seperti obat bius disosiatif — itu sebabnya disalahgunakan.',
    analogy: 'Seperti mengecilkan volume alarm: penyebab batuknya tetap ada, hanya batuknya diredam.',
    bestTime: ['Saat batuk kering mengganggu tidur atau aktivitas.'],
    howToUse: ['Ikuti takaran pada label obat kombinasi. Cek kandungan lain di dalamnya (parasetamol, antihistamin).'],
    dose: {
      adult: ['≥ 12 tahun: 10–20 mg tiap 4 jam atau 30 mg tiap 6–8 jam, maks 120 mg/hari.'],
      child: ['6–11 tahun: 5–10 mg tiap 4 jam atau 15 mg tiap 6–8 jam, maks 60 mg/hari.', '2–5 tahun: hanya dengan anjuran dokter.', '< 2 tahun: jangan.'],
    },
    duration: 'Maks 7 hari tanpa dokter.',
    interactions: [
      'Antidepresan MAOI (termasuk 14 hari setelah berhenti), SSRI/SNRI (fluoksetin, paroksetin, sertralin), tramadol: risiko sindrom serotonin — jangan digabung tanpa dokter.',
      'Alkohol, obat tidur, antihistamin (CTM, difenhidramin): kantuk bertambah.',
      'Jangan dobel dengan obat flu lain yang juga berisi DMP.',
    ],
    sideEffects: ['Mengantuk, pusing, mual.', 'Dosis berlebih: bingung, halusinasi, jantung berdebar, kejang.'],
    warnings: [
      'Bukan untuk batuk berdahak, asma, atau batuk perokok — di sini batuk justru membersihkan saluran napas.',
      'BPOM membatalkan izin edar sediaan tunggal dekstrometorfan (2013) karena penyalahgunaan; kini hanya ada dalam kombinasi.',
      'Jangan menyetir bila mengantuk.',
    ],
    seeDoctor: COUGH_RED_FLAGS,
    relatedIds: ['diphenhydramine', 'guaifenesin'],
  },

  // ---------- Nose & cold ----------
  {
    id: 'pseudoephedrine',
    name: 'Pseudoephedrine',
    brands: ['Rhinos SR (+ loratadin)', 'Tremenza (+ triprolidin)'],
    ingredients: ['Pseudoephedrine'],
    group: 'nasal',
    symptoms: ['cold'],
    forms: ['tablet', 'capsule', 'syrup'],
    timing: 'any-time',
    availability: 'prescription',
    childUse: 'doctor',
    pregnancy: 'ask-doctor',
    summary: 'Pelega hidung tersumbat (dekongestan) yang diminum. Efektif, tapi bisa menaikkan tekanan darah dan detak jantung.',
    howItWorks:
      'Menyempitkan pembuluh darah yang bengkak di dalam hidung sehingga saluran napas lebih lega. Efek ini juga terjadi di pembuluh darah lain, makanya tekanan darah bisa naik.',
    analogy: 'Seperti mengempiskan ban dalam yang terlalu menggembung di lorong sempit.',
    bestTime: ['Pagi/siang. Hindari menjelang tidur — bisa bikin susah tidur dan berdebar.'],
    howToUse: ['Tablet/kapsul lepas lambat (SR) ditelan utuh, jangan dibelah atau dikunyah.'],
    dose: {
      adult: ['Lepas cepat: 60 mg tiap 4–6 jam, maks 240 mg/hari.', 'Lepas lambat: 120 mg tiap 12 jam.'],
      child: ['6–11 tahun: 30 mg tiap 4–6 jam (maks 120 mg/hari), dengan anjuran dokter.', '< 6 tahun: jangan tanpa dokter.'],
    },
    duration: 'Maks 7 hari.',
    interactions: [
      'Antidepresan MAOI (termasuk 14 hari setelah berhenti): lonjakan tekanan darah — jangan.',
      'Jangan digabung dengan dekongestan minum lain (fenilefrin) atau obat flu lain yang berisi pseudoefedrin.',
      'Kafein, minuman energi, pil pelangsing: berdebar dan gelisah bertambah.',
      'Obat darah tinggi: efeknya bisa berkurang.',
    ],
    sideEffects: ['Susah tidur, gelisah, jantung berdebar, mulut kering.', 'Tekanan darah naik. Sulit buang air kecil pada pria dengan prostat membesar.'],
    warnings: [
      'Hindari bila: darah tinggi tidak terkontrol, penyakit jantung, hipertiroid, glaukoma, prostat membesar. Diabetes: tanya dokter.',
      'Hamil trimester 1: hindari.',
      'Diawasi ketat sebagai bahan baku (prekursor) narkotika; umumnya perlu resep.',
    ],
    seeDoctor: NOSE_RED_FLAGS,
    relatedIds: ['phenylephrine', 'oxymetazoline', 'saline-nasal', 'loratadine'],
  },
  {
    id: 'phenylephrine',
    name: 'Phenylephrine (fenilefrin)',
    brands: ['Banyak obat flu tablet & sirup kombinasi — cek label "fenilefrin HCl"'],
    ingredients: ['Phenylephrine'],
    group: 'nasal',
    symptoms: ['cold'],
    forms: ['tablet', 'syrup'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'doctor',
    pregnancy: 'ask-doctor',
    summary:
      'Dekongestan paling umum di obat flu. Versi yang diminum hampir tidak melegakan hidung: panel ahli FDA (2023) menyimpulkan tidak efektif, dan FDA mengusulkan menghapusnya (2024).',
    howItWorks:
      'Menyempitkan pembuluh darah hidung seperti pseudoefedrin. Bila diminum, sebagian besar sudah dihancurkan usus dan hati sebelum sampai ke darah, sehingga efek ke hidung sangat kecil. Sebagai tetes/semprot hidung tetap bekerja.',
    bestTime: ['Ikuti label obat kombinasi; hindari menjelang tidur.'],
    howToUse: ['Cek kandungan lain di obat kombinasi (parasetamol, antihistamin) supaya tidak dobel.'],
    dose: {
      adult: ['≥ 12 tahun: 10 mg tiap 4 jam, maks 60 mg/hari.'],
      child: ['6–11 tahun: 5 mg tiap 4 jam, maks 30 mg/hari.', '< 6 tahun: jangan tanpa dokter.'],
    },
    duration: 'Maks 7 hari.',
    interactions: [
      'Antidepresan MAOI: jangan.',
      'Jangan dobel dengan obat flu lain yang berisi fenilefrin atau pseudoefedrin.',
      'Obat darah tinggi: tanya apoteker.',
    ],
    sideEffects: ['Gelisah, sakit kepala, berdebar, tekanan darah naik.'],
    warnings: [
      'Darah tinggi, penyakit jantung, hipertiroid, diabetes, prostat membesar: tanya dokter.',
      'Bila hidung tersumbat jadi keluhan utama, cuci hidung NaCl atau semprot oksimetazolin (maks 3 hari) lebih berguna daripada fenilefrin minum.',
    ],
    seeDoctor: NOSE_RED_FLAGS,
    relatedIds: ['pseudoephedrine', 'oxymetazoline', 'saline-nasal'],
  },
  {
    id: 'oxymetazoline',
    name: 'Oxymetazoline (semprot/tetes hidung)',
    brands: ['Afrin', 'Iliadin'],
    ingredients: ['Oxymetazoline'],
    group: 'nasal',
    symptoms: ['cold'],
    forms: ['spray', 'drops'],
    timing: 'external',
    availability: 'otc',
    childUse: 'doctor',
    pregnancy: 'ask-doctor',
    summary: 'Semprot/tetes pelega hidung tersumbat. Bekerja dalam beberapa menit dan tahan ± 12 jam, tapi maksimal 3 hari berturut-turut.',
    howItWorks:
      'Menyempitkan pembuluh darah di lapisan hidung langsung di tempat. Bila dipakai > 3 hari, hidung "ketagihan": begitu efek habis, hidung justru makin tersumbat (rhinitis medikamentosa).',
    analogy: 'Seperti pinjaman berbunga tinggi: lega sekarang, tapi kalau diperpanjang terus, utangnya (hidung tersumbat) makin besar.',
    bestTime: ['Saat hidung tersumbat berat, mis. sebelum tidur atau sebelum naik pesawat.'],
    howToUse: [
      'Buang ingus dulu. Kepala sedikit menunduk, arahkan semprotan ke sisi luar lubang hidung (menjauhi sekat tengah).',
      'Satu botol untuk satu orang.',
    ],
    dose: {
      adult: ['≥ 6 tahun (kadar 0,05%): 2–3 semprot tiap lubang hidung tiap 10–12 jam, maks 2x dalam 24 jam.'],
      child: ['1–5 tahun: hanya kadar anak (0,025%), dengan anjuran dokter.', 'Bayi: hanya kadar bayi (0,01%), dengan anjuran dokter.'],
    },
    duration: 'Maks 3 hari berturut-turut.',
    interactions: ['Antidepresan MAOI: tanya dokter.', 'Jangan bersamaan dengan semprot dekongestan lain.'],
    sideEffects: ['Perih atau kering di hidung, bersin.', 'Lebih dari 3 hari: hidung tersumbat balik (rebound).'],
    warnings: [
      'Darah tinggi, penyakit jantung, glaukoma sudut sempit, hipertiroid: tanya dokter.',
      'Sudah tergantung semprot hidung: konsultasikan — dokter bisa memberi semprot steroid sambil menghentikannya.',
    ],
    seeDoctor: NOSE_RED_FLAGS,
    relatedIds: ['saline-nasal', 'pseudoephedrine'],
  },
  {
    id: 'saline-nasal',
    name: 'Cairan garam hidung (NaCl / air laut)',
    brands: ['Sterimar', 'NaCl 0,9% (generik)'],
    ingredients: ['Sodium chloride'],
    group: 'nasal',
    symptoms: ['cold', 'allergy'],
    forms: ['spray', 'drops', 'solution'],
    timing: 'external',
    availability: 'medical-device',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary: 'Membilas ingus, kuman, dan alergen dari hidung. Aman untuk segala usia, termasuk bayi dan ibu hamil, dan boleh dipakai sesering perlu.',
    howItWorks: 'Mengencerkan dan membilas ingus serta debu/serbuk sari, sekaligus melembapkan hidung. Tidak ada zat obat, jadi tidak ada efek ketergantungan.',
    analogy: 'Seperti membilas piring sebelum dicuci: kotoran yang lepas ikut terbuang.',
    bestTime: ['Bayi: sebelum menyusu dan sebelum tidur.', 'Sebelum memakai semprot hidung lain.'],
    howToUse: [
      'Bayi: teteskan 2–3 tetes tiap lubang hidung, tunggu sebentar, lalu sedot dengan penyedot ingus.',
      'Cuci hidung (irigasi) dewasa: pakai cairan siap pakai atau air matang/steril yang sudah dingin.',
    ],
    dose: {
      adult: ['1–2 semprot tiap lubang hidung, sesering perlu.'],
      child: ['2–3 tetes atau 1 semprot (sediaan anak) tiap lubang hidung, sesering perlu.'],
    },
    duration: 'Selama pilek; boleh rutin.',
    interactions: [],
    sideEffects: ['Perih ringan sementara.'],
    warnings: ['Jangan pakai air keran mentah untuk cuci hidung — ada risiko amuba yang langka tapi fatal.'],
    seeDoctor: NOSE_RED_FLAGS,
    relatedIds: ['oxymetazoline'],
  },

  // ---------- Mouth & throat ----------
  {
    id: 'antiseptic-lozenge',
    name: 'Tablet hisap antiseptik (amylmetacresol + DCBA)',
    brands: ['Strepsils'],
    ingredients: ['Amylmetacresol', 'Dichlorobenzyl alcohol'],
    group: 'mouth-throat',
    symptoms: ['sore-throat'],
    forms: ['lozenge'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'ask-doctor',
    summary: 'Tablet hisap untuk meredakan sakit tenggorokan ringan. Melegakan sementara; tidak mengobati penyebabnya.',
    howItWorks: 'Dua antiseptik ringan membunuh sebagian kuman di permukaan tenggorokan. Menghisapnya merangsang ludah yang melembapkan tenggorokan.',
    bestTime: ['Saat tenggorokan terasa sakit.'],
    howToUse: ['Hisap perlahan sampai habis di mulut; jangan dikunyah atau ditelan utuh.'],
    dose: {
      adult: ['1 tablet hisap tiap 2–3 jam, maks 12 tablet/24 jam.'],
      child: ['≥ 6 tahun: sama dengan dewasa.', '< 6 tahun: jangan (risiko tersedak).'],
    },
    duration: 'Maks 3 hari; bila belum membaik, periksa.',
    interactions: [],
    sideEffects: ['Rasa tidak nyaman di lidah/mulut; jarang alergi.'],
    warnings: ['Varian dengan gula: perhatikan bila diabetes.'],
    seeDoctor: THROAT_RED_FLAGS,
    relatedIds: ['benzydamine', 'povidone-iodine-gargle', 'paracetamol'],
  },
  {
    id: 'benzydamine',
    name: 'Benzydamine (obat kumur/semprot tenggorokan)',
    brands: ['Tantum Verde'],
    ingredients: ['Benzydamine'],
    group: 'mouth-throat',
    symptoms: ['sore-throat', 'mouth-ulcer'],
    forms: ['solution', 'spray', 'lozenge'],
    timing: 'external',
    availability: 'otc',
    childUse: 'doctor',
    pregnancy: 'ask-doctor',
    summary: 'Antiradang dan pereda nyeri lokal untuk sakit tenggorokan, sariawan, dan setelah cabut gigi.',
    howItWorks: 'NSAID yang bekerja di permukaan: mengurangi radang dan sedikit membius lapisan mulut-tenggorokan.',
    bestTime: ['Saat nyeri, mis. sebelum makan supaya menelan lebih nyaman.'],
    howToUse: ['Obat kumur: kumur-kumur atau berkumur di tenggorokan ± 30 detik, lalu buang. Jangan ditelan.'],
    dose: {
      adult: ['Obat kumur 0,15%: 15 ml tiap 1,5–3 jam bila perlu.', 'Semprot: 4–8 semprot, 2–6x sehari.'],
      child: ['6–12 tahun: semprot 4 semprot, 2–6x sehari.', 'Obat kumur: hanya untuk yang bisa berkumur tanpa menelan (umumnya ≥ 12 tahun).', '< 6 tahun: dengan anjuran dokter.'],
    },
    duration: 'Maks 7 hari.',
    interactions: [],
    sideEffects: ['Mulut kebas atau perih sementara.'],
    warnings: ['Alergi aspirin/NSAID, atau asma yang kambuh karena NSAID: hindari.'],
    seeDoctor: THROAT_RED_FLAGS,
    relatedIds: ['antiseptic-lozenge', 'povidone-iodine-gargle'],
  },
  {
    id: 'povidone-iodine-gargle',
    name: 'Povidone-iodine obat kumur',
    brands: ['Betadine Obat Kumur'],
    ingredients: ['Povidone-iodine'],
    group: 'mouth-throat',
    symptoms: ['sore-throat', 'mouth-ulcer'],
    forms: ['solution'],
    timing: 'external',
    availability: 'otc',
    childUse: 'doctor',
    pregnancy: 'ask-doctor',
    summary: 'Obat kumur antiseptik untuk sakit tenggorokan dan sariawan. Membunuh kuman di permukaan mulut — tidak menyembuhkan radang yang lebih dalam.',
    howItWorks: 'Yodium dilepas perlahan dan membunuh bakteri, jamur, dan virus yang menempel di permukaan mulut-tenggorokan.',
    bestTime: ['Setelah sikat gigi atau makan, hingga 4x sehari.'],
    howToUse: ['Kumur 10 ml selama 30 detik, lalu buang. Jangan ditelan.', 'Jangan makan/minum 30 menit setelahnya.'],
    dose: {
      adult: ['10 ml, kumur 30 detik, hingga 4x sehari.'],
      child: ['≥ 6 tahun yang sudah bisa berkumur tanpa menelan: sama dengan dewasa.', '< 6 tahun: jangan.'],
    },
    duration: 'Maks 14 hari.',
    interactions: ['Obat kumur lain (mis. klorheksidin): beri jarak, jangan bersamaan.'],
    sideEffects: ['Rasa tidak enak, iritasi ringan, noda kecokelatan sementara.'],
    warnings: ['Gangguan tiroid atau alergi yodium: hindari.', 'Hamil & menyusui: hindari pemakaian rutin (yodium bisa memengaruhi tiroid bayi).'],
    seeDoctor: THROAT_RED_FLAGS,
    relatedIds: ['benzydamine', 'antiseptic-lozenge', 'povidone-iodine'],
  },

  // ---------- Pain (more) ----------
  {
    id: 'mefenamic-acid',
    name: 'Asam mefenamat (mefenamic acid)',
    brands: ['Ponstan', 'Asam mefenamat (generik)'],
    ingredients: ['Mefenamic acid'],
    group: 'pain-fever',
    symptoms: ['pain'],
    forms: ['tablet', 'capsule'],
    timing: 'after-meal',
    availability: 'prescription',
    childUse: 'doctor',
    pregnancy: 'avoid',
    summary: 'NSAID yang sering diresepkan untuk nyeri haid dan sakit gigi. Efek samping lambung dan diare lebih sering dibanding ibuprofen.',
    howItWorks: 'Menghambat enzim COX pembuat prostaglandin, termasuk prostaglandin di rahim yang memicu kram haid.',
    bestTime: ['Sesudah makan.', 'Nyeri haid: mulai saat nyeri atau haid pertama muncul, hanya selama hari-hari nyeri.'],
    howToUse: ['Telan dengan segelas air.'],
    dose: {
      adult: ['500 mg 3x sehari sesudah makan.'],
      child: ['≥ 12 tahun: 500 mg 3x sehari.', '< 12 tahun: hanya dengan resep dokter.'],
    },
    duration: 'Maks 7 hari.',
    interactions: NSAID_INTERACTIONS,
    sideEffects: ['Nyeri lambung, mual, diare (hentikan bila diare).', 'Jarang: perdarahan lambung, gangguan ginjal, anemia, ruam.'],
    warnings: [
      'Maag/tukak aktif, penyakit ginjal, radang usus, atau asma yang kambuh karena NSAID: hindari.',
      'Curiga demam berdarah (DBD) atau sedang dehidrasi: jangan.',
      'Hamil ≥ 20 minggu: hindari.',
    ],
    seeDoctor: PAIN_RED_FLAGS,
    relatedIds: ['ibuprofen', 'paracetamol', 'hyoscine-butylbromide'],
  },
  {
    id: 'diclofenac',
    name: 'Diclofenac (natrium / kalium, tablet & gel)',
    brands: ['Voltaren (natrium)', 'Cataflam (kalium)', 'Voltaren Emulgel (gel)'],
    ingredients: ['Diclofenac'],
    group: 'pain-fever',
    symptoms: ['pain'],
    forms: ['tablet', 'gel'],
    timing: 'after-meal',
    availability: 'prescription',
    childUse: 'doctor',
    pregnancy: 'avoid',
    summary: 'NSAID kuat untuk nyeri otot, sendi, keseleo, sakit gigi, dan asam urat. Versi gel dioles untuk nyeri lokal dan jauh lebih ramah lambung.',
    howItWorks: 'Menghambat enzim COX sehingga nyeri, bengkak, dan radang berkurang. Gel bekerja di jaringan bawah kulit dengan kadar di darah yang jauh lebih kecil.',
    bestTime: ['Tablet: sesudah makan.', 'Gel: 3–4x sehari di area nyeri.'],
    howToUse: [
      'Tablet salut: telan utuh.',
      'Gel: oles dan pijat ringan, cuci tangan setelahnya. Jangan di kulit luka, jangan dibalut rapat, hindari sinar matahari langsung di area oles.',
    ],
    dose: {
      adult: ['Tablet: 50 mg 2–3x sehari, maks 150 mg/hari.', 'Gel 1%: oles 3–4x sehari.'],
      child: ['Tablet: hanya dengan resep dokter.', 'Gel: ≥ 14 tahun.'],
    },
    duration: 'Tablet: sependek mungkin. Gel: bila belum membaik dalam 7 hari, periksa.',
    interactions: NSAID_INTERACTIONS,
    sideEffects: ['Tablet: nyeri lambung, mual, pusing.', 'Gel: kemerahan atau gatal di kulit.'],
    warnings: [
      'Risiko serangan jantung/stroke sedikit lebih tinggi dibanding NSAID lain — hindari bila ada penyakit jantung, stroke, atau sumbatan pembuluh darah.',
      'Maag/tukak, gangguan ginjal, asma yang kambuh karena NSAID, curiga DBD: hindari tablet.',
      'Hamil ≥ 20 minggu: hindari (termasuk gel).',
    ],
    seeDoctor: PAIN_RED_FLAGS,
    relatedIds: ['ibuprofen', 'paracetamol'],
  },
  {
    id: 'aspirin',
    name: 'Aspirin (asam asetilsalisilat)',
    brands: ['Aspilets (80 mg, untuk jantung)', 'Aspirin (generik)'],
    ingredients: ['Aspirin'],
    group: 'pain-fever',
    symptoms: ['pain', 'fever'],
    forms: ['tablet', 'chewable-tablet'],
    timing: 'after-meal',
    availability: 'otc',
    childUse: 'not-recommended',
    pregnancy: 'avoid',
    summary:
      'NSAID tertua. Dosis rendah (80–100 mg) dipakai untuk jantung atas resep. Untuk nyeri/demam jarang jadi pilihan karena risiko lambung dan perdarahan. Jangan untuk anak dan demam berdarah.',
    howItWorks:
      'Menghambat COX secara permanen: meredakan nyeri, demam, dan radang, serta membuat keping darah kurang lengket (manfaat untuk jantung, sekaligus risiko perdarahan).',
    bestTime: ['Sesudah makan.'],
    howToUse: ['Telan dengan segelas air.'],
    dose: {
      adult: ['Nyeri/demam: 300–1.000 mg tiap 4–6 jam, maks 4.000 mg/hari.', 'Dosis jantung (80–100 mg 1x sehari) hanya atas resep — jangan berhenti mendadak tanpa dokter.'],
      child: ['< 16 tahun: jangan (risiko sindrom Reye — kerusakan otak dan hati yang bisa fatal), kecuali diresepkan dokter untuk penyakit tertentu.'],
    },
    duration: 'Nyeri/demam: maks 3 hari tanpa dokter.',
    interactions: [
      'Ibuprofen: minum aspirin dosis jantung ≥ 30 menit sebelum ibuprofen.',
      'Pengencer darah, NSAID lain, SSRI, kortikosteroid: risiko perdarahan naik.',
      'Metotreksat: kadarnya naik — berbahaya.',
    ],
    sideEffects: ['Nyeri lambung, perdarahan lambung, mudah memar.', 'Dosis tinggi: telinga berdenging.'],
    warnings: [
      'Curiga demam berdarah (DBD): jangan — risiko perdarahan.',
      'Maag/tukak, gangguan perdarahan, asma yang kambuh karena NSAID, asam urat: hindari dosis nyeri.',
      'Sebelum operasi/cabut gigi, tanya dokter apakah perlu dihentikan.',
    ],
    seeDoctor: PAIN_RED_FLAGS,
    relatedIds: ['paracetamol', 'ibuprofen'],
  },
  {
    id: 'caffeine',
    name: 'Kafein (dalam obat sakit kepala)',
    brands: ['Panadol Extra (+ parasetamol)', 'Banyak obat sakit kepala kombinasi — cek label'],
    ingredients: ['Caffeine'],
    group: 'pain-fever',
    symptoms: ['pain'],
    forms: ['tablet'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'not-recommended',
    pregnancy: 'ask-doctor',
    summary: 'Penambah efek pereda nyeri pada obat sakit kepala (sedikit lebih kuat dibanding pereda nyeri saja). Bukan pereda nyeri bila diminum sendiri.',
    howItWorks: 'Cara pastinya belum jelas: diduga mempercepat penyerapan dan memperkuat efek pereda nyeri, serta menyempitkan pembuluh darah di kepala.',
    bestTime: ['Pagi/siang; hindari sore-malam karena bisa mengganggu tidur.'],
    howToUse: ['Hitung juga kafein dari kopi, teh, dan minuman energi hari itu.'],
    dose: {
      adult: ['Umumnya 50–65 mg per tablet kombinasi. Total kafein dari semua sumber maks ± 400 mg/hari (± 4 cangkir kopi).'],
      child: ['Tidak untuk anak < 12 tahun.'],
    },
    duration: 'Bila perlu, jangan rutin.',
    interactions: [
      'Kopi, teh, minuman energi, pil pelangsing, pseudoefedrin: berdebar dan gelisah bertambah.',
      'Antibiotik siprofloksasin dan obat asma teofilin: efek kafein naik.',
    ],
    sideEffects: ['Susah tidur, berdebar, gelisah, perut perih.'],
    warnings: [
      'Minum obat sakit kepala > 10 hari per bulan bisa memicu sakit kepala karena obat (medication overuse headache).',
      'Hamil: total kafein maks 200 mg/hari.',
      'Darah tinggi, gangguan irama jantung, mudah cemas: batasi.',
    ],
    seeDoctor: PAIN_RED_FLAGS,
    relatedIds: ['paracetamol'],
  },

  // ---------- Laxatives ----------
  {
    id: 'bisacodyl',
    name: 'Bisacodyl',
    brands: ['Dulcolax', 'Bisacodyl (generik)'],
    ingredients: ['Bisacodyl'],
    group: 'laxative',
    symptoms: ['constipation'],
    forms: ['tablet', 'suppository'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'doctor',
    pregnancy: 'ask-doctor',
    summary: 'Pencahar perangsang (stimulan). Tablet bekerja 6–12 jam (diminum malam, BAB pagi); supositoria 15–60 menit.',
    howItWorks: 'Merangsang saraf dinding usus besar supaya bergerak mendorong tinja, dan menarik air ke dalam usus.',
    analogy: 'Seperti mendorong antrean dari belakang supaya cepat bergerak.',
    bestTime: ['Tablet: malam sebelum tidur.', 'Supositoria: saat ingin BAB dalam waktu dekat.'],
    howToUse: [
      'Tablet salut: telan utuh, jangan dikunyah atau dibelah.',
      'Jangan minum dalam 1 jam bersama susu, antasida, atau obat maag (PPI/H2) — lapisannya larut terlalu cepat dan perut bisa kram.',
      'Supositoria: masukkan ke anus, bagian runcing lebih dulu.',
    ],
    dose: {
      adult: ['≥ 10 tahun: tablet 5–10 mg malam hari; supositoria 10 mg 1x sehari.'],
      child: ['4–9 tahun: tablet 5 mg malam hari, dengan anjuran dokter.', '< 4 tahun: dengan anjuran dokter.'],
    },
    duration: 'Maks 5 hari tanpa dokter. Jangan jadi kebiasaan rutin.',
    interactions: ['Susu, antasida, PPI/H2: beri jarak 1 jam.', 'Diuretik dan kortikosteroid: risiko kalium rendah bila dipakai lama.'],
    sideEffects: ['Kram atau mulas, diare.', 'Supositoria: perih di anus.'],
    warnings: ['Jangan bila nyeri perut hebat yang belum jelas penyebabnya, mual-muntah, atau curiga sumbatan usus.', 'Sedang dehidrasi: hindari.'],
    seeDoctor: BOWEL_RED_FLAGS,
    relatedIds: ['lactulose', 'psyllium-husk'],
  },
  {
    id: 'lactulose',
    name: 'Lactulose (laktulosa)',
    brands: ['Duphalac', 'Laktulosa (generik)'],
    ingredients: ['Lactulose'],
    group: 'laxative',
    symptoms: ['constipation'],
    forms: ['syrup'],
    timing: 'any-time',
    availability: 'prescription',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary: 'Pencahar osmotik (gula yang tidak dicerna). Lembut, aman untuk anak, ibu hamil, dan pemakaian lebih lama. Butuh 1–2 hari sampai bekerja.',
    howItWorks: 'Laktulosa tidak diserap usus halus. Di usus besar ia menarik air ke dalam tinja sehingga tinja lunak dan lebih mudah keluar.',
    analogy: 'Seperti spons yang membawa air ke tinja yang kering.',
    bestTime: ['Waktu yang sama tiap hari, mis. pagi bersama sarapan.'],
    howToUse: ['Boleh dicampur air atau jus.', 'Minum air yang cukup sepanjang hari.'],
    dose: {
      adult: ['Mulai 15–45 ml/hari (1x atau dibagi 2), lalu sesuaikan menjadi 15–30 ml/hari.'],
      child: ['7–14 tahun: mulai 15 ml/hari, lanjut 10–15 ml/hari.', '1–6 tahun: 5–10 ml/hari.', '< 1 tahun: sampai 5 ml/hari, dengan anjuran dokter.'],
    },
    duration: 'Sampai pola BAB normal. Lebih dari beberapa minggu sebaiknya dievaluasi dokter.',
    interactions: [],
    sideEffects: ['Kembung, kentut, kram di hari-hari awal — biasanya berkurang.', 'Dosis berlebih: diare.'],
    warnings: ['Galaktosemia: jangan.', 'Diabetes: dosis besar mengandung sedikit gula — tanya dokter.'],
    seeDoctor: BOWEL_RED_FLAGS,
    relatedIds: ['bisacodyl', 'psyllium-husk'],
  },

  // ---------- Gas & cramps ----------
  {
    id: 'simethicone',
    name: 'Simethicone (dimetikon)',
    brands: ['Disflatyl', 'Ada di beberapa antasida (mis. Polysilane)'],
    ingredients: ['Simethicone'],
    group: 'gas-cramps',
    symptoms: ['bloating'],
    forms: ['chewable-tablet', 'drops'],
    timing: 'after-meal',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary: 'Pemecah gelembung gas untuk kembung dan begah. Tidak diserap tubuh, sangat aman.',
    howItWorks: 'Menurunkan tegangan permukaan gelembung gas kecil sehingga bergabung menjadi gelembung besar yang lebih mudah keluar lewat sendawa atau kentut.',
    analogy: 'Seperti meneteskan sabun ke busa: busa kecil-kecil pecah menjadi satu.',
    bestTime: ['Sesudah makan dan sebelum tidur, bila perlu.'],
    howToUse: ['Tablet kunyah dikunyah sampai halus. Tetes bayi dicampur sedikit ASI/air atau diteteskan ke mulut.'],
    dose: {
      adult: ['40–125 mg sesudah makan dan sebelum tidur bila perlu, maks 500 mg/hari.'],
      child: ['Sesuai label sediaan anak.', 'Bayi (kolik): tetes 20 mg hingga 4x sehari — bukti manfaatnya untuk kolik lemah.'],
    },
    duration: 'Bila perlu.',
    interactions: ['Levotiroksin (obat tiroid): beri jarak 4 jam.'],
    sideEffects: ['Sangat jarang.'],
    warnings: ['Kembung yang disertai berat badan turun, BAB berdarah, atau nyeri hebat bukan kembung biasa — periksa.'],
    seeDoctor: STOMACH_RED_FLAGS,
    relatedIds: ['antacid', 'hyoscine-butylbromide'],
  },
  {
    id: 'hyoscine-butylbromide',
    name: 'Hyoscine butylbromide (butilskopolamin)',
    brands: ['Buscopan', 'Buscopan Plus (+ parasetamol)'],
    ingredients: ['Hyoscine butylbromide'],
    group: 'gas-cramps',
    symptoms: ['cramps', 'pain'],
    forms: ['tablet'],
    timing: 'any-time',
    availability: 'prescription',
    childUse: 'doctor',
    pregnancy: 'ask-doctor',
    summary: 'Pereda kram/mulas perut (antispasmodik), juga kram saat haid. Tidak bikin ngantuk karena tidak masuk otak.',
    howItWorks:
      'Melemaskan otot polos saluran cerna yang sedang kejang dengan memblok sinyal saraf (antikolinergik). Sangat sedikit diserap ke darah, sehingga efek samping umumnya ringan.',
    analogy: 'Seperti melepas genggaman tangan yang mengepal terlalu kuat.',
    bestTime: ['Saat kram.'],
    howToUse: ['Telan utuh dengan air.'],
    dose: {
      adult: ['10–20 mg 3–4x sehari, maks 80 mg/hari.'],
      child: ['6–11 tahun: 10 mg 3x sehari, dengan anjuran dokter.', '< 6 tahun: dengan anjuran dokter.'],
    },
    duration: 'Bila perlu. Kram menetap > 2 minggu atau sering kambuh: periksa ke dokter.',
    interactions: [
      'Antihistamin generasi lama, antidepresan trisiklik, obat antikolinergik lain: mulut kering dan sembelit bertambah.',
      'Metoklopramid dan domperidon: saling melemahkan.',
    ],
    sideEffects: ['Mulut kering, jantung berdebar, sulit buang air kecil, pandangan kabur.'],
    warnings: [
      'Glaukoma sudut sempit, prostat membesar dengan sulit pipis, miastenia gravis, detak jantung cepat, sumbatan usus: jangan.',
      'Nyeri perut yang makin hebat, disertai demam, atau di kanan bawah: jangan ditutupi obat — periksa (usus buntu).',
    ],
    seeDoctor: CRAMP_RED_FLAGS,
    relatedIds: ['simethicone', 'mefenamic-acid', 'paracetamol'],
  },

  // ---------- Diarrhea (more) ----------
  {
    id: 'attapulgite',
    name: 'Attapulgite (+ pektin)',
    brands: ['Neo Entrostop', 'New Diatabs'],
    ingredients: ['Attapulgite'],
    group: 'diarrhea',
    symptoms: ['diarrhea'],
    forms: ['tablet'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'not-recommended',
    pregnancy: 'ask-doctor',
    summary: 'Tanah liat penyerap untuk diare. Membuat tinja lebih padat, tapi tidak terbukti memperpendek diare atau mengurangi kehilangan cairan. Oralit tetap yang utama.',
    howItWorks:
      'Menyerap air dan sebagian racun di usus sehingga tinja tampak lebih padat. Cairan tubuh yang hilang tidak berkurang — dehidrasi tetap bisa terjadi walau tinja tampak membaik.',
    analogy: 'Seperti menaburkan serbuk gergaji ke tumpahan air: lantai tampak kering, tapi airnya tetap sudah tumpah.',
    bestTime: ['Setelah BAB cair.'],
    howToUse: ['Telan dengan air; tetap minum oralit.'],
    dose: {
      adult: ['Ikuti label; umumnya 2 tablet setiap habis BAB cair, maks 12 tablet/hari.'],
      child: ['Tidak dianjurkan. Panduan WHO dan IDAI: diare anak cukup oralit + zinc.'],
    },
    duration: 'Maks 2 hari.',
    interactions: ['Menyerap obat lain: beri jarak 2–3 jam.'],
    sideEffects: ['Sembelit, kembung.'],
    warnings: [
      'FDA (AS) menghapus attapulgite dari daftar obat diare bebas (2003) karena manfaatnya tidak terbukti.',
      'Diare berdarah atau disertai demam tinggi: jangan, periksa ke dokter.',
    ],
    seeDoctor: DIARRHEA_RED_FLAGS,
    relatedIds: ['oral-rehydration-salts', 'zinc', 'loperamide'],
  },
  {
    id: 'probiotics',
    name: 'Probiotik',
    brands: ['Lacto-B', 'Interlac', 'L-Bio'],
    ingredients: ['Lactobacillus', 'Bifidobacterium'],
    group: 'diarrhea',
    symptoms: ['diarrhea'],
    forms: ['sachet', 'drops', 'capsule'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary:
      'Bakteri baik. Strain tertentu bisa memperpendek diare akut sekitar 1 hari dan mencegah diare karena antibiotik — tapi buktinya campuran dan sangat tergantung strain.',
    howItWorks: 'Menempati usus sementara, bersaing dengan kuman jahat, dan membantu memulihkan keseimbangan bakteri usus.',
    bestTime: ['Bersama antibiotik: beri jarak ± 2 jam.'],
    howToUse: ['Sachet dicampur ke air, susu, atau makanan dingin/suhu ruang — air panas mematikan bakterinya.'],
    dose: {
      adult: ['Sesuai label produk.'],
      child: ['Sesuai label produk; bayi < 6 bulan dengan anjuran dokter.'],
    },
    duration: 'Diare: 5–7 hari. Bersama antibiotik: selama antibiotik dan beberapa hari setelahnya.',
    interactions: ['Antibiotik: beri jarak 2 jam.'],
    sideEffects: ['Kembung ringan di hari-hari awal.'],
    warnings: [
      'Daya tahan tubuh sangat lemah (kemoterapi, bayi prematur, pasien ICU): jangan tanpa dokter — risiko infeksi.',
      'Panduan ahli tidak sepakat: ESPGHAN (Eropa) menyarankan strain tertentu (L. rhamnosus GG, S. boulardii, L. reuteri) untuk diare anak; AGA (AS) tidak menyarankan. Oralit + zinc tetap yang utama.',
    ],
    seeDoctor: DIARRHEA_RED_FLAGS,
    relatedIds: ['oral-rehydration-salts', 'zinc'],
  },

  // ---------- Skin: inflammation, infection, fungus, acne ----------
  {
    id: 'hydrocortisone-cream',
    name: 'Hydrocortisone krim',
    brands: ['Hydrocortisone 1% / 2,5% (generik)'],
    ingredients: ['Hydrocortisone'],
    group: 'skin-treatment',
    symptoms: ['itch-rash'],
    forms: ['cream', 'ointment'],
    timing: 'external',
    availability: 'prescription',
    childUse: 'doctor',
    pregnancy: 'generally-ok',
    summary: 'Krim kortikosteroid paling ringan untuk eksim, ruam gatal, dan gigitan serangga yang meradang. Bukan untuk jamur, jerawat, atau infeksi.',
    howItWorks: 'Meredam reaksi radang di kulit sehingga kemerahan, bengkak, dan gatal berkurang.',
    analogy: 'Seperti pemadam api untuk "kebakaran" radang — tapi kalau penyebabnya jamur atau kuman, apinya justru bisa menyebar.',
    bestTime: ['1–2x sehari, setelah mandi.'],
    howToUse: [
      'Oles tipis hanya di area yang meradang. Takaran: 1 ruas ujung jari (± 0,5 g) cukup untuk area seluas 2 telapak tangan dewasa.',
      'Cuci tangan setelahnya. Jangan dibalut rapat.',
    ],
    dose: {
      adult: ['Oles tipis 1–2x sehari.'],
      child: ['Oles tipis 1–2x sehari, maks 7 hari.', '< 2 tahun dan area popok: dengan anjuran dokter.'],
    },
    duration: 'Maks 7 hari tanpa dokter. Wajah: sesingkat mungkin.',
    interactions: ['Krim kombinasi steroid + antijamur/antibiotik hanya bila diresepkan.'],
    sideEffects: ['Pemakaian lama atau berlebihan: kulit menipis, guratan (striae), jerawat, pembuluh darah halus melebar.'],
    warnings: [
      'Jangan untuk jamur kulit (panu, kurap, kutu air), jerawat, atau luka terbuka/bernanah.',
      'Waspadai krim racikan atau pemutih tanpa izin BPOM yang diam-diam berisi steroid kuat.',
    ],
    seeDoctor: RASH_RED_FLAGS,
    relatedIds: ['calamine-lotion', 'cetirizine', 'miconazole'],
  },
  {
    id: 'miconazole',
    name: 'Miconazole krim',
    brands: ['Daktarin', 'Mikonazol (generik)'],
    ingredients: ['Miconazole'],
    group: 'antifungal',
    symptoms: ['fungal'],
    forms: ['cream', 'gel'],
    timing: 'external',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary:
      'Antijamur untuk kurap, kutu air, panu, ruam jamur di lipatan kulit, dan ruam popok berjamur. Ada juga gel oral untuk sariawan jamur di mulut bayi — atas saran dokter.',
    howItWorks: 'Merusak dinding sel jamur (golongan azol) sehingga jamur berhenti tumbuh dan mati.',
    bestTime: ['2x sehari (pagi dan malam) setelah mandi dan kulit dikeringkan.'],
    howToUse: [
      'Oles tipis sampai 1–2 cm melewati batas ruam.',
      'Lanjutkan 1–2 minggu setelah kulit tampak sembuh, supaya tidak kambuh.',
      'Cuci tangan setelahnya.',
    ],
    dose: {
      adult: ['Krim 2%: oles 2x sehari.'],
      child: ['Krim: sama dengan dewasa.', 'Gel oral: bayi ≥ 4 bulan, dengan anjuran dokter (risiko tersedak).'],
    },
    duration: 'Umumnya 2–6 minggu, termasuk 1–2 minggu setelah tampak sembuh.',
    interactions: [
      'Gel oral (yang ditelan) dengan warfarin: risiko perdarahan serius — jangan tanpa dokter. Krim di kulit umumnya aman.',
      'Gel oral juga berinteraksi dengan beberapa obat kolesterol (simvastatin) — beri tahu dokter obat yang sedang diminum.',
    ],
    sideEffects: ['Perih/panas ringan, kemerahan.'],
    warnings: ANTIFUNGAL_WARNINGS,
    seeDoctor: FUNGAL_RED_FLAGS,
    relatedIds: ['clotrimazole', 'ketoconazole', 'terbinafine'],
  },
  {
    id: 'clotrimazole',
    name: 'Clotrimazole krim',
    brands: ['Canesten', 'Klotrimazol (generik)'],
    ingredients: ['Clotrimazole'],
    group: 'antifungal',
    symptoms: ['fungal'],
    forms: ['cream'],
    timing: 'external',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary: 'Antijamur golongan azol untuk kurap, kutu air, panu, dan jamur di lipatan kulit. Mirip miconazole.',
    howItWorks: 'Merusak dinding sel jamur sehingga jamur berhenti tumbuh dan mati.',
    bestTime: ['2–3x sehari setelah kulit dibersihkan dan dikeringkan.'],
    howToUse: ['Oles tipis sampai sedikit melewati batas ruam.', 'Lanjutkan ± 2 minggu setelah kulit tampak sembuh.'],
    dose: {
      adult: ['Krim 1%: oles 2–3x sehari.'],
      child: ['Sama dengan dewasa.'],
    },
    duration: 'Umumnya 2–4 minggu, lalu ± 2 minggu lagi setelah tampak sembuh.',
    interactions: [],
    sideEffects: ['Perih ringan, kemerahan.'],
    warnings: [...ANTIFUNGAL_WARNINGS, 'Ada juga tablet vagina untuk keputihan karena jamur — saat hamil, gunakan atas saran dokter/bidan.'],
    seeDoctor: FUNGAL_RED_FLAGS,
    relatedIds: ['miconazole', 'ketoconazole', 'terbinafine'],
  },
  {
    id: 'ketoconazole',
    name: 'Ketoconazole krim & sampo',
    brands: ['Nizoral (krim & sampo)', 'Ketokonazol krim (generik)'],
    ingredients: ['Ketoconazole'],
    group: 'antifungal',
    symptoms: ['fungal'],
    forms: ['cream', 'shampoo'],
    timing: 'external',
    availability: 'otc',
    childUse: 'doctor',
    pregnancy: 'generally-ok',
    summary: 'Antijamur krim dan sampo. Sampo sangat praktis untuk panu yang luas, serta ketombe/dermatitis seboroik.',
    howItWorks: 'Merusak dinding sel jamur, termasuk jamur Malassezia penyebab panu dan ketombe.',
    bestTime: ['Krim: 1–2x sehari. Sampo: saat mandi.'],
    howToUse: [
      'Sampo untuk panu: oles ke kulit yang terkena (dan kulit kepala), diamkan 3–5 menit, lalu bilas.',
      'Sampo untuk ketombe: pijat di kulit kepala, diamkan 3–5 menit, lalu bilas.',
    ],
    dose: {
      adult: ['Krim 2%: oles 1–2x sehari.', 'Sampo untuk panu: 1x sehari selama 5 hari.', 'Sampo untuk ketombe: 2x seminggu selama 2–4 minggu.'],
      child: ['Dengan anjuran dokter.'],
    },
    duration: 'Krim: 2–4 minggu. Sampo: sesuai di atas.',
    interactions: [],
    sideEffects: ['Gatal atau perih ringan; rambut bisa terasa kering.'],
    warnings: [
      ...ANTIFUNGAL_WARNINGS,
      'Ketokonazol tablet (diminum) bukan untuk jamur kulit: izinnya dibatasi karena risiko kerusakan hati (EMA 2013).',
      'Panu sering kambuh di iklim lembap; bercak putih bisa butuh berbulan-bulan sampai warna kulit kembali walau jamurnya sudah mati.',
    ],
    seeDoctor: FUNGAL_RED_FLAGS,
    relatedIds: ['miconazole', 'clotrimazole'],
  },
  {
    id: 'terbinafine',
    name: 'Terbinafine krim',
    brands: ['Lamisil', 'Terbinafin krim (generik)'],
    ingredients: ['Terbinafine'],
    group: 'antifungal',
    symptoms: ['fungal'],
    forms: ['cream'],
    timing: 'external',
    availability: 'otc',
    childUse: 'doctor',
    pregnancy: 'ask-doctor',
    summary: 'Antijamur yang membunuh jamur kulit (bukan hanya menghentikan pertumbuhan), sehingga pengobatan kutu air dan kurap lebih singkat dibanding azol.',
    howItWorks: 'Menghambat pembentukan dinding sel jamur sehingga zat beracun menumpuk dan jamur mati.',
    bestTime: ['1–2x sehari setelah kulit dibersihkan dan dikeringkan.'],
    howToUse: ['Oles tipis sampai sedikit melewati batas ruam.'],
    dose: {
      adult: ['Krim 1%: oles 1–2x sehari. Kutu air: 1 minggu. Kurap badan/selangkangan: 1–2 minggu.'],
      child: ['< 12 tahun: dengan anjuran dokter.'],
    },
    duration: '1–2 minggu (lebih singkat dari azol).',
    interactions: [],
    sideEffects: ['Kemerahan, gatal, atau perih ringan.'],
    warnings: ANTIFUNGAL_WARNINGS,
    seeDoctor: FUNGAL_RED_FLAGS,
    relatedIds: ['miconazole', 'clotrimazole'],
  },
  {
    id: 'fusidic-acid',
    name: 'Asam fusidat krim',
    brands: ['Fucidin', 'Asam fusidat (generik)'],
    ingredients: ['Fusidic acid'],
    group: 'skin-treatment',
    symptoms: ['skin-infection'],
    forms: ['cream', 'ointment'],
    timing: 'external',
    availability: 'prescription',
    childUse: 'yes',
    pregnancy: 'ask-doctor',
    summary: 'Antibiotik oles untuk infeksi kulit bakteri yang kecil dan terbatas, mis. impetigo (koreng bernanah dengan kerak kuning madu) atau luka kecil terinfeksi.',
    howItWorks: 'Menghentikan pembuatan protein bakteri (terutama Staphylococcus) sehingga bakteri berhenti berkembang.',
    bestTime: ['3x sehari.'],
    howToUse: ['Bersihkan kerak dengan air sabun hangat, keringkan, lalu oles tipis.', 'Cuci tangan; jangan berbagi handuk.'],
    dose: {
      adult: ['Oles tipis 3x sehari.'],
      child: ['Sama dengan dewasa.'],
    },
    duration: '5–7 hari. Jangan > 10 hari dan jangan dipakai berulang-ulang — bakteri cepat kebal.',
    interactions: [],
    sideEffects: ['Iritasi ringan; jarang alergi.'],
    warnings: [
      'Bukan untuk jerawat jangka panjang atau oles "jaga-jaga" di setiap luka — memicu kuman kebal.',
      'Infeksi luas atau disertai demam butuh antibiotik minum dari dokter.',
    ],
    seeDoctor: SKIN_INFECTION_RED_FLAGS,
    relatedIds: ['mupirocin', 'povidone-iodine'],
  },
  {
    id: 'mupirocin',
    name: 'Mupirocin salep',
    brands: ['Bactroban', 'Mupirocin (generik)'],
    ingredients: ['Mupirocin'],
    group: 'skin-treatment',
    symptoms: ['skin-infection'],
    forms: ['ointment', 'cream'],
    timing: 'external',
    availability: 'prescription',
    childUse: 'yes',
    pregnancy: 'ask-doctor',
    summary: 'Antibiotik oles untuk impetigo dan infeksi kulit kecil, termasuk yang tidak mempan asam fusidat.',
    howItWorks: 'Menghambat enzim yang dipakai bakteri untuk membuat protein, sehingga bakteri berhenti berkembang.',
    bestTime: ['3x sehari.'],
    howToUse: ['Bersihkan kerak dengan air sabun hangat, keringkan, lalu oles tipis. Boleh ditutup kasa.', 'Cuci tangan; jangan berbagi handuk.'],
    dose: {
      adult: ['Oles tipis 3x sehari.'],
      child: ['Sama dengan dewasa.'],
    },
    duration: 'Maks 10 hari.',
    interactions: [],
    sideEffects: ['Perih, gatal, atau kemerahan ringan.'],
    warnings: ['Jangan dipakai berulang tanpa dokter — kuman bisa kebal.', 'Salep berbahan dasar PEG: hindari di luka bakar luas atau bila ada gangguan ginjal.'],
    seeDoctor: SKIN_INFECTION_RED_FLAGS,
    relatedIds: ['fusidic-acid'],
  },
  {
    id: 'acyclovir-cream',
    name: 'Acyclovir krim',
    brands: ['Zovirax', 'Asiklovir krim (generik)'],
    ingredients: ['Acyclovir'],
    group: 'skin-treatment',
    symptoms: ['cold-sore'],
    forms: ['cream'],
    timing: 'external',
    availability: 'prescription',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary: 'Krim antivirus untuk herpes bibir (lepuh kecil berkelompok di bibir). Paling berguna bila dioles sejak awal terasa kesemutan.',
    howItWorks: 'Menghambat virus herpes memperbanyak diri. Tidak membunuh virus yang "tidur" di saraf, sehingga bisa kambuh lagi.',
    bestTime: ['Mulai sedini mungkin — saat terasa kesemutan/gatal sebelum lepuh muncul.'],
    howToUse: [
      'Oles tipis 5x sehari (± tiap 4 jam saat bangun).',
      'Cuci tangan sebelum dan sesudah; jangan memencet lepuh; jangan berbagi gelas/handuk dan jangan mencium (terutama bayi) selama ada lepuh.',
    ],
    dose: {
      adult: ['Oles 5x sehari selama 5 hari; bila belum sembuh, lanjut sampai 10 hari.'],
      child: ['Sama dengan dewasa.'],
    },
    duration: '5–10 hari.',
    interactions: [],
    sideEffects: ['Perih atau kering sementara.'],
    warnings: ['Bukan untuk mata, herpes kelamin, atau cacar ular (herpes zoster) — itu perlu obat minum dari dokter.'],
    seeDoctor: COLD_SORE_RED_FLAGS,
    relatedIds: [],
  },
  {
    id: 'benzoyl-peroxide',
    name: 'Benzoyl peroxide (gel jerawat)',
    brands: ['Benzolac', 'Benzoil peroksida (generik)'],
    ingredients: ['Benzoyl peroxide'],
    group: 'acne',
    symptoms: ['acne'],
    forms: ['gel', 'cream'],
    timing: 'external',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary: 'Obat jerawat oles lini pertama: membunuh bakteri jerawat tanpa membuatnya kebal, dan membantu membuka pori.',
    howItWorks: 'Melepas oksigen yang membunuh bakteri jerawat (C. acnes) dan mengelupaskan sel kulit mati penyumbat pori.',
    bestTime: ['Mulai 1x sehari (malam), naik jadi 2x sehari bila kulit sudah terbiasa.'],
    howToUse: [
      'Cuci muka, keringkan, oles tipis ke seluruh area yang berjerawat (bukan hanya titik jerawat).',
      'Mulai dari kadar 2,5% — hampir sama efektif dengan 5–10% tapi lebih jarang iritasi.',
      'Bisa memudarkan warna handuk, sarung bantal, dan rambut.',
    ],
    dose: {
      adult: ['Oles tipis 1–2x sehari.'],
      child: ['Remaja: sama dengan dewasa.', '< 12 tahun: dengan anjuran dokter.'],
    },
    duration: 'Hasil mulai terlihat setelah 6–8 minggu; lanjutkan selama masih berjerawat.',
    interactions: [
      'Tretinoin: jangan dioles bersamaan — pakai di waktu berbeda.',
      'Antibiotik oles (klindamisin) sebaiknya selalu dipakai bersama benzoil peroksida untuk mencegah kuman kebal — atas saran dokter.',
    ],
    sideEffects: ['Kering, mengelupas, kemerahan, perih di minggu-minggu awal.'],
    warnings: ['Hindari mata, bibir, dan kulit luka.', 'Pakai tabir surya di siang hari.'],
    seeDoctor: ACNE_RED_FLAGS,
    relatedIds: ['mineral-sunscreen'],
  },
  {
    id: 'permethrin',
    name: 'Permethrin 5% krim (kudis)',
    brands: ['Scabimite', 'Permethrin 5% (generik)'],
    ingredients: ['Permethrin'],
    group: 'antiparasitic',
    symptoms: ['scabies-lice'],
    forms: ['cream'],
    timing: 'external',
    availability: 'prescription',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary:
      'Krim untuk kudis (skabies): gatal hebat terutama malam hari di sela jari, pergelangan tangan, pinggang, ketiak, dan kelamin. Semua orang serumah diobati bersamaan.',
    howItWorks: 'Melumpuhkan saraf tungau kudis sehingga tungau mati.',
    bestTime: ['Malam hari sebelum tidur.'],
    howToUse: [
      'Oles ke seluruh tubuh dari leher sampai telapak kaki, termasuk sela jari, bawah kuku, lipatan, dan kelamin. Bayi/lansia: juga kulit kepala dan wajah (hindari mata dan mulut).',
      'Biarkan 8–14 jam, lalu mandi. Oles ulang tangan bila dicuci sebelum waktunya.',
      'Ulangi 7 hari kemudian.',
      'Cuci sprei, handuk, dan baju dengan air panas, atau simpan dalam kantong plastik tertutup ≥ 3 hari.',
    ],
    dose: {
      adult: ['± 30 g krim per pengolesan untuk satu orang dewasa.'],
      child: ['≥ 2 bulan: dioles seperti dewasa dengan jumlah lebih sedikit.', '< 2 bulan: dengan anjuran dokter.'],
    },
    duration: '2 kali oles, berjarak 7 hari. Gatal bisa bertahan 2–4 minggu setelah tungau mati — bukan berarti gagal.',
    interactions: [],
    sideEffects: ['Rasa panas, perih, atau gatal sementara.'],
    warnings: ['Semua orang serumah dan pasangan diobati di hari yang sama, walau belum gatal.'],
    seeDoctor: SCABIES_RED_FLAGS,
    relatedIds: ['cetirizine'],
  },

  // ---------- Eyes ----------
  {
    id: 'artificial-tears',
    name: 'Air mata buatan (tetes mata pelumas)',
    brands: ['Cendo Lyteers', 'Insto Dry Eyes'],
    ingredients: ['Artificial tears'],
    group: 'eye-care',
    symptoms: ['eye'],
    forms: ['drops'],
    timing: 'external',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'generally-ok',
    summary: 'Tetes pelumas untuk mata kering, mata lelah karena layar, atau kelilipan ringan. Boleh dipakai sesering perlu.',
    howItWorks: 'Menambah lapisan air mata sehingga permukaan mata lembap dan licin kembali. Tidak berisi zat penyempit pembuluh darah.',
    bestTime: ['Saat mata terasa kering atau perih, dan selama lama di depan layar.'],
    howToUse: [
      'Cuci tangan, tarik kelopak bawah, teteskan 1 tetes tanpa ujung botol menyentuh mata.',
      'Kemasan sekali pakai (minidose) bebas pengawet — lebih baik bila dipakai > 4–6x sehari atau memakai lensa kontak.',
      'Botol yang sudah dibuka umumnya dibuang setelah 1 bulan (lihat label).',
    ],
    dose: {
      adult: ['1–2 tetes tiap mata, sesering perlu.'],
      child: ['Sama dengan dewasa.'],
    },
    duration: 'Boleh rutin.',
    interactions: ['Tetes mata lain: beri jarak 5 menit.'],
    sideEffects: ['Pandangan buram sesaat.'],
    warnings: ['Mata merah disertai nyeri atau pandangan kabur bukan mata kering biasa — periksa.'],
    seeDoctor: EYE_RED_FLAGS,
    relatedIds: ['tetrahydrozoline'],
  },
  {
    id: 'tetrahydrozoline',
    name: 'Tetrahydrozoline (tetes mata merah)',
    brands: ['Insto Regular', 'Visine'],
    ingredients: ['Tetrahydrozoline'],
    group: 'eye-care',
    symptoms: ['eye'],
    forms: ['drops'],
    timing: 'external',
    availability: 'otc',
    childUse: 'doctor',
    pregnancy: 'ask-doctor',
    summary: 'Tetes mata "penghilang merah". Mata putih lagi dalam beberapa menit, tapi itu hanya kosmetik sementara dan tidak mengobati penyebab. Maks 3 hari.',
    howItWorks: 'Menyempitkan pembuluh darah kecil di bagian putih mata. Bila dipakai terus-menerus, mata justru makin merah begitu efeknya habis (rebound).',
    analogy: 'Seperti bedak untuk menutupi jerawat: tampilan membaik, masalahnya tetap ada.',
    bestTime: ['Bila perlu, mis. mata merah karena debu atau asap.'],
    howToUse: ['Lepas lensa kontak dulu; pasang lagi setelah 15 menit.', 'Jangan sampai ujung botol menyentuh mata.'],
    dose: {
      adult: ['1–2 tetes tiap mata, maks 4x sehari.'],
      child: ['6–12 tahun: dengan anjuran dokter.', '< 6 tahun: jangan.'],
    },
    duration: 'Maks 3 hari.',
    interactions: ['Antidepresan MAOI: tanya dokter.'],
    sideEffects: ['Perih sementara, pupil sedikit melebar, mata merah balik bila dipakai lama.'],
    warnings: [
      'Glaukoma sudut sempit: jangan.',
      'Simpan jauh dari anak — bila tertelan bisa berbahaya (lemas, napas lambat, penurunan kesadaran).',
      'Mata kering: pilih air mata buatan, bukan tetes ini.',
    ],
    seeDoctor: EYE_RED_FLAGS,
    relatedIds: ['artificial-tears'],
  },

  // ---------- Motion sickness ----------
  {
    id: 'dimenhydrinate',
    name: 'Dimenhydrinate (antimabuk)',
    brands: ['Antimo', 'Antimo Anak'],
    ingredients: ['Dimenhydrinate'],
    group: 'anti-nausea',
    symptoms: ['nausea-vomiting'],
    forms: ['tablet', 'syrup'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'ask-doctor',
    summary: 'Antihistamin untuk mencegah mabuk perjalanan (darat, laut, udara). Bikin ngantuk.',
    howItWorks: 'Menghambat sinyal dari organ keseimbangan di telinga dalam ke pusat muntah di otak.',
    analogy: 'Seperti memutus kabel antara sensor guncangan dan alarm muntah.',
    bestTime: ['30–60 menit sebelum berangkat.'],
    howToUse: ['Telan dengan air. Selama perjalanan, duduk di depan dan lihat ke kejauhan, jangan membaca/main ponsel.'],
    dose: {
      adult: ['50–100 mg tiap 4–6 jam, maks 400 mg/hari.'],
      child: ['6–12 tahun: 25–50 mg tiap 6–8 jam, maks 150 mg/hari.', '2–5 tahun: 12,5–25 mg tiap 6–8 jam (maks 75 mg/hari), dengan anjuran dokter.', '< 2 tahun: jangan tanpa dokter.'],
    },
    duration: 'Selama perjalanan.',
    interactions: ['Antihistamin lain (CTM, difenhidramin di obat flu), alkohol, obat tidur: kantuk berlipat.'],
    sideEffects: ['Mengantuk, mulut kering, pandangan kabur.'],
    warnings: ['Jangan menyetir.', 'Glaukoma, prostat membesar, asma: tanya dokter.', 'Bukan untuk muntah karena sakit (mis. muntaber pada anak).'],
    seeDoctor: VOMITING_RED_FLAGS,
    relatedIds: ['ginger', 'domperidone'],
  },

  // ---------- Worms ----------
  {
    id: 'pyrantel',
    name: 'Pyrantel pamoate (obat cacing)',
    brands: ['Combantrin', 'Pirantel pamoat (generik)'],
    ingredients: ['Pyrantel'],
    group: 'antiparasitic',
    symptoms: ['worms'],
    forms: ['tablet', 'suspension'],
    timing: 'any-time',
    availability: 'otc',
    childUse: 'yes',
    pregnancy: 'ask-doctor',
    summary: 'Obat cacing dosis tunggal untuk cacing kremi (gatal anus terutama malam), cacing gelang, dan cacing tambang.',
    howItWorks: 'Melumpuhkan cacing sehingga terlepas dari dinding usus dan keluar bersama tinja.',
    bestTime: ['Kapan saja; tidak perlu puasa atau pencahar.'],
    howToUse: ['Tablet bisa dikunyah atau ditelan. Suspensi dikocok dulu.'],
    dose: {
      adult: ['10 mg/kg dosis tunggal, maks 1.000 mg.'],
      child: ['≥ 2 tahun: 10 mg/kg dosis tunggal (maks 1.000 mg). Contoh anak 16 kg: 160 mg.', '< 2 tahun: dengan anjuran dokter.'],
    },
    duration: 'Sekali minum. Cacing kremi: ulangi 2 minggu kemudian dan obati seluruh anggota rumah.',
    interactions: ['Piperazin: jangan bersamaan (saling melemahkan).'],
    sideEffects: ['Mual, sakit perut, diare, pusing — ringan.'],
    warnings: ['Cacing kremi mudah menular ulang: potong kuku pendek, cuci tangan setelah BAB dan sebelum makan, cuci sprei dan celana dalam.'],
    seeDoctor: WORM_RED_FLAGS,
    relatedIds: ['albendazole'],
  },
  {
    id: 'albendazole',
    name: 'Albendazole (obat cacing)',
    brands: ['Albendazol (generik; juga dibagikan di program Puskesmas/sekolah)'],
    ingredients: ['Albendazole'],
    group: 'antiparasitic',
    symptoms: ['worms'],
    forms: ['tablet', 'chewable-tablet', 'suspension'],
    timing: 'any-time',
    availability: 'prescription',
    childUse: 'yes',
    pregnancy: 'avoid',
    summary: 'Obat cacing spektrum luas dosis tunggal. Dipakai di program pemberian obat cacing massal untuk anak.',
    howItWorks: 'Menghalangi cacing menyerap gula sehingga cacing kehabisan energi dan mati.',
    bestTime: ['Kapan saja; tidak perlu puasa.'],
    howToUse: ['Tablet kunyah boleh dikunyah, atau digerus dan dicampur sedikit air untuk anak kecil.'],
    dose: {
      adult: ['400 mg dosis tunggal.'],
      child: ['≥ 2 tahun: 400 mg dosis tunggal.', '1–2 tahun: 200 mg dosis tunggal.', '< 1 tahun: jangan.'],
    },
    duration: 'Sekali minum. Pencegahan: 1–2x setahun sesuai program Puskesmas.',
    interactions: ['Dosis tunggal umumnya tanpa masalah. Pemakaian lama (resep dokter) perlu pemantauan fungsi hati.'],
    sideEffects: ['Sakit perut, mual, pusing ringan.'],
    warnings: ['Hamil trimester 1: jangan (trimester 2–3 hanya bila dianjurkan petugas kesehatan).'],
    seeDoctor: WORM_RED_FLAGS,
    relatedIds: ['pyrantel'],
  },
];
