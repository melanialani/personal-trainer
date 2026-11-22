import {
  ACNE_RED_FLAGS,
  ALLERGY_RED_FLAGS,
  BOWEL_RED_FLAGS,
  COLD_SORE_RED_FLAGS,
  COUGH_RED_FLAGS,
  CRAMP_RED_FLAGS,
  DIARRHEA_RED_FLAGS,
  EYE_RED_FLAGS,
  FEVER_RED_FLAGS,
  FUNGAL_RED_FLAGS,
  MOUTH_RED_FLAGS,
  NOSE_RED_FLAGS,
  PAIN_RED_FLAGS,
  RASH_RED_FLAGS,
  SCABIES_RED_FLAGS,
  SKIN_INFECTION_RED_FLAGS,
  STOMACH_RED_FLAGS,
  THROAT_RED_FLAGS,
  VOMITING_RED_FLAGS,
  WORM_RED_FLAGS,
  WOUND_RED_FLAGS,
  type Symptom,
} from './medicines';

/**
 * "By symptom" tab on the Medicine page: which active ingredient to look for on the label for a complaint, what to avoid,
 * and what helps without medicine. Content in Indonesian (by request); ingredient facts mirror the entries in
 * `medicines.ts` (FDA OTC labels, BNF, WHO, IDAI). Every `medicineIds` entry must exist in MEDICINES.
 */
export interface IngredientPick {
  /** Ingredient name as printed on Indonesian labels. */
  ingredient: string;
  note: string;
  /** Medicine entries that open from this pick (may be empty when the app has no entry). */
  medicineIds: string[];
}

export interface SymptomGuide {
  id: string;
  title: string;
  summary: string;
  /** Drives the symptom chips; may be empty for complaints with no matching medicine symptom. */
  symptoms: Symptom[];
  lookFor: IngredientPick[];
  avoid: string[];
  withoutMedicine: string[];
  seeDoctor: string[];
}

const NO_OTC_COLD_UNDER_6 = 'Anak < 6 tahun: obat batuk-pilek bebas tidak dianjurkan tanpa dokter (manfaat tidak terbukti, risiko efek samping).';

export const SYMPTOM_GUIDES: SymptomGuide[] = [
  // ---------- Respiratory ----------
  {
    id: 'wet-cough',
    title: 'Batuk berdahak',
    summary: 'Batuk dengan dahak/riak. Di sini batuk itu berguna: membersihkan saluran napas. Tujuannya mengencerkan dahak, bukan menekan batuk.',
    symptoms: ['cough-wet'],
    lookFor: [
      { ingredient: 'Guaifenesin (GG / gliseril guaiakolat)', note: 'Pengencer dahak; minum dengan banyak air.', medicineIds: ['guaifenesin'] },
      { ingredient: 'Ambroxol', note: 'Pemecah dahak; ada sediaan anak.', medicineIds: ['ambroxol'] },
      { ingredient: 'Bromhexine', note: 'Mirip ambroxol — pilih salah satu, jangan keduanya.', medicineIds: ['bromhexine'] },
      { ingredient: 'Acetylcysteine (NAC)', note: 'Untuk dahak sangat kental; dengan resep.', medicineIds: ['acetylcysteine'] },
    ],
    avoid: [
      'Penekan batuk (dekstrometorfan / DMP) — dahak bisa tertahan.',
      'Menggabungkan dua pengencer dahak (mis. ambroxol + bromheksin).',
      'Obat flu "lengkap" bila tidak demam atau pilek — kandungan tambahannya tidak perlu.',
      NO_OTC_COLD_UNDER_6,
    ],
    withoutMedicine: [
      'Banyak minum air hangat — dahak lebih encer.',
      'Madu 1–2 sendok teh (usia > 1 tahun; jangan untuk bayi < 1 tahun karena risiko botulisme).',
      'Hirup uap air hangat, mis. saat mandi air hangat.',
      'Jauhi asap rokok.',
    ],
    seeDoctor: COUGH_RED_FLAGS,
  },
  {
    id: 'dry-cough',
    title: 'Batuk kering / tenggorokan gatal',
    summary: 'Batuk tanpa dahak, sering setelah flu. Batuk sisa flu bisa bertahan 2–3 minggu walau infeksinya sudah sembuh.',
    symptoms: ['cough-dry'],
    lookFor: [
      { ingredient: 'Dextromethorphan (DMP)', note: 'Penekan batuk, terutama untuk malam hari. Hanya ada dalam obat kombinasi.', medicineIds: ['dextromethorphan'] },
      {
        ingredient: 'Diphenhydramine / CTM',
        note: 'Antihistamin yang bikin ngantuk; membantu bila batuk karena ingus menetes ke tenggorokan, terutama malam.',
        medicineIds: ['diphenhydramine', 'chlorpheniramine'],
      },
      { ingredient: 'Tablet hisap', note: 'Melegakan tenggorokan gatal.', medicineIds: ['antiseptic-lozenge'] },
    ],
    avoid: [
      'Pengencer dahak — tidak ada dahak yang perlu diencerkan.',
      'DMP bila sedang minum antidepresan (SSRI/MAOI) atau tramadol.',
      'Batuk kering karena asma atau asam lambung tidak sembuh dengan obat batuk — obati penyebabnya.',
      'Obat darah tinggi golongan ACE inhibitor (captopril, lisinopril, ramipril) bisa memicu batuk kering — tanya dokter, jangan berhenti sendiri.',
      NO_OTC_COLD_UNDER_6,
    ],
    withoutMedicine: ['Madu (usia > 1 tahun).', 'Minum hangat dan tablet hisap/permen.', 'Udara tidak terlalu kering; jauhi asap rokok.'],
    seeDoctor: COUGH_RED_FLAGS,
  },
  {
    id: 'cold-blocked-nose',
    title: 'Pilek & hidung tersumbat',
    summary: 'Pilek karena virus (selesma) sembuh sendiri dalam 7–10 hari. Obat hanya meringankan gejala; antibiotik tidak berguna.',
    symptoms: ['cold'],
    lookFor: [
      { ingredient: 'NaCl / air laut (semprot atau tetes)', note: 'Pilihan pertama dan teraman, untuk semua usia.', medicineIds: ['saline-nasal'] },
      { ingredient: 'Oxymetazoline (semprot hidung)', note: 'Untuk hidung tersumbat berat; maksimal 3 hari.', medicineIds: ['oxymetazoline'] },
      { ingredient: 'Pseudoephedrine (diminum)', note: 'Dekongestan minum yang efektif; hati-hati bila darah tinggi.', medicineIds: ['pseudoephedrine'] },
      { ingredient: 'Chlorpheniramine (CTM)', note: 'Mengeringkan ingus meler; bikin ngantuk.', medicineIds: ['chlorpheniramine'] },
      { ingredient: 'Phenylephrine', note: 'Ada di banyak obat flu, tapi versi minum hampir tidak efektif.', medicineIds: ['phenylephrine'] },
    ],
    avoid: [
      'Antibiotik — pilek disebabkan virus.',
      'Semprot dekongestan > 3 hari (hidung tersumbat balik).',
      'Dekongestan minum bila darah tinggi, sakit jantung, atau hamil trimester 1.',
      'Minum dua obat flu sekaligus (dobel parasetamol atau antihistamin).',
      NO_OTC_COLD_UNDER_6,
    ],
    withoutMedicine: [
      'Bilas/semprot hidung dengan NaCl.',
      'Istirahat dan banyak minum.',
      'Tidur dengan kepala sedikit lebih tinggi.',
      'Bayi: tetesi NaCl, lalu sedot ingus sebelum menyusu.',
    ],
    seeDoctor: NOSE_RED_FLAGS,
  },
  {
    id: 'allergic-sneezing',
    title: 'Bersin & pilek alergi',
    summary: 'Bersin beruntun, hidung/mata gatal, ingus bening — dipicu debu, tungau, bulu hewan, atau udara dingin.',
    symptoms: ['allergy'],
    lookFor: [
      { ingredient: 'Loratadine', note: '1x sehari, hampir tidak bikin ngantuk.', medicineIds: ['loratadine'] },
      { ingredient: 'Cetirizine', note: '1x sehari, sedikit ngantuk pada sebagian orang.', medicineIds: ['cetirizine'] },
      { ingredient: 'Chlorpheniramine (CTM)', note: 'Murah tapi bikin ngantuk; cocok untuk malam.', medicineIds: ['chlorpheniramine'] },
      { ingredient: 'NaCl semprot hidung', note: 'Membilas alergen dari hidung.', medicineIds: ['saline-nasal'] },
    ],
    avoid: [
      'Minum dua antihistamin bersamaan (cek obat flu yang sudah berisi CTM).',
      'Antihistamin yang bikin ngantuk sebelum menyetir.',
    ],
    withoutMedicine: [
      'Kenali dan hindari pemicunya (debu, tungau kasur, bulu hewan, asap).',
      'Cuci sprei dengan air panas tiap minggu; kurangi boneka dan karpet di kamar.',
    ],
    seeDoctor: [
      'Bersin/pilek alergi hampir sepanjang tahun atau mengganggu tidur — dokter bisa memberi semprot hidung steroid.',
      'Disertai mengi atau sesak (asma).',
      ...ALLERGY_RED_FLAGS,
    ],
  },
  {
    id: 'sore-throat',
    title: 'Sakit tenggorokan',
    summary: 'Kebanyakan karena virus dan membaik dalam 1 minggu. Pereda nyeri yang diminum biasanya paling membantu.',
    symptoms: ['sore-throat'],
    lookFor: [
      { ingredient: 'Paracetamol / Ibuprofen', note: 'Pereda nyeri paling efektif, sekaligus menurunkan demam.', medicineIds: ['paracetamol', 'ibuprofen'] },
      { ingredient: 'Amylmetacresol + dichlorobenzyl alcohol (tablet hisap)', note: 'Melegakan sementara.', medicineIds: ['antiseptic-lozenge'] },
      { ingredient: 'Benzydamine (kumur/semprot)', note: 'Antiradang dan pereda nyeri lokal.', medicineIds: ['benzydamine'] },
      { ingredient: 'Povidone-iodine (obat kumur)', note: 'Antiseptik kumur.', medicineIds: ['povidone-iodine-gargle'] },
    ],
    avoid: [
      'Antibiotik tanpa resep — hanya untuk radang bakteri, dan dokter yang menilai.',
      'Tablet hisap untuk anak < 6 tahun (risiko tersedak).',
      'Bila tenggorokan panas/asam saat bangun tidur, curigai refluks asam — lihat panduan refluks di Care guides.',
    ],
    withoutMedicine: ['Kumur air garam hangat (½ sendok teh garam dalam 1 gelas air).', 'Minum hangat; madu untuk usia > 1 tahun.', 'Istirahatkan suara.'],
    seeDoctor: THROAT_RED_FLAGS,
  },
  {
    id: 'flu-combination',
    title: 'Flu lengkap (demam + pilek + batuk)',
    summary: 'Obat flu kombinasi praktis, tapi sering berisi zat yang tidak dibutuhkan. Baca label, lalu cocokkan tiap kandungan dengan gejala yang memang ada.',
    symptoms: ['cold', 'fever', 'cough-dry', 'cough-wet'],
    lookFor: [
      { ingredient: 'Paracetamol', note: 'Untuk demam dan pegal. Hitung total parasetamol dari semua obat.', medicineIds: ['paracetamol'] },
      { ingredient: 'Chlorpheniramine (CTM) / diphenhydramine', note: 'Untuk ingus meler dan bersin; bikin ngantuk.', medicineIds: ['chlorpheniramine', 'diphenhydramine'] },
      { ingredient: 'Pseudoephedrine / phenylephrine', note: 'Untuk hidung tersumbat (fenilefrin minum hampir tidak efektif).', medicineIds: ['pseudoephedrine', 'phenylephrine'] },
      { ingredient: 'Dextromethorphan (DMP)', note: 'Hanya bila batuknya kering.', medicineIds: ['dextromethorphan'] },
      { ingredient: 'Guaifenesin (GG)', note: 'Hanya bila batuknya berdahak.', medicineIds: ['guaifenesin'] },
    ],
    avoid: [
      'Dua merek obat flu bersamaan, atau obat flu + parasetamol tunggal — dobel parasetamol bisa merusak hati.',
      'Obat flu berisi DMP saat batuk berdahak.',
      'Obat flu "siang" yang berisi dekongestan bila darah tinggi atau sakit jantung.',
      NO_OTC_COLD_UNDER_6,
    ],
    withoutMedicine: ['Istirahat, banyak minum, makan bergizi — flu biasa sembuh dalam 7–10 hari.', 'Cuci tangan dan pakai masker supaya tidak menular.'],
    seeDoctor: [...FEVER_RED_FLAGS, ...COUGH_RED_FLAGS.slice(0, 2)],
  },

  // ---------- Fever & pain ----------
  {
    id: 'fever',
    title: 'Demam',
    summary: 'Demam adalah cara tubuh melawan infeksi. Tujuan obat: membuat nyaman, bukan memaksa suhu kembali normal.',
    symptoms: ['fever'],
    lookFor: [
      { ingredient: 'Paracetamol', note: 'Pilihan pertama, termasuk untuk anak dan ibu hamil.', medicineIds: ['paracetamol'] },
      { ingredient: 'Ibuprofen', note: 'Alternatif untuk usia ≥ 6 bulan, sesudah makan. Jangan bila curiga DBD atau dehidrasi.', medicineIds: ['ibuprofen'] },
    ],
    avoid: [
      'Aspirin untuk anak < 16 tahun (sindrom Reye) dan untuk siapa pun yang curiga demam berdarah.',
      'Ibuprofen atau asam mefenamat bila curiga demam berdarah (DBD).',
      'Dobel parasetamol dari obat flu + parasetamol tunggal.',
      'Kompres air es atau alkohol — memicu menggigil.',
    ],
    withoutMedicine: ['Banyak minum (ASI, air, oralit).', 'Pakaian tipis; kompres air hangat bila perlu.', 'Istirahat.'],
    seeDoctor: [
      ...FEVER_RED_FLAGS,
      'Hari ke-3–5 demam turun tapi badan makin lemas, muntah, nyeri perut, mimisan, atau gusi berdarah (fase kritis DBD) — segera ke dokter.',
    ],
  },
  {
    id: 'headache',
    title: 'Sakit kepala',
    summary: 'Paling sering sakit kepala tegang (seperti diikat). Pemicu umum: kurang tidur, telat makan, kurang minum, stres, terlalu lama menatap layar.',
    symptoms: ['pain'],
    lookFor: [
      { ingredient: 'Paracetamol', note: 'Pilihan pertama.', medicineIds: ['paracetamol'] },
      { ingredient: 'Ibuprofen', note: 'Juga bagus untuk migrain ringan; sesudah makan.', medicineIds: ['ibuprofen'] },
      { ingredient: 'Paracetamol + kafein', note: 'Sedikit lebih kuat; hindari sore-malam.', medicineIds: ['caffeine'] },
      { ingredient: 'Aspirin', note: 'Dewasa saja; hindari bila maag.', medicineIds: ['aspirin'] },
    ],
    avoid: ['Obat sakit kepala > 10 hari per bulan — justru memicu sakit kepala karena obat.', 'Kafein berlebihan (kopi + obat berkafein).'],
    withoutMedicine: ['Minum air, makan, istirahat dari layar.', 'Tidur cukup dan teratur.', 'Pijat leher/bahu atau kompres hangat.'],
    seeDoctor: PAIN_RED_FLAGS,
  },
  {
    id: 'period-pain',
    title: 'Nyeri haid',
    summary: 'Kram perut bawah di hari-hari awal haid, karena prostaglandin membuat rahim berkontraksi. Obat antiprostaglandin (NSAID) paling efektif.',
    symptoms: ['pain', 'cramps'],
    lookFor: [
      { ingredient: 'Ibuprofen', note: 'Pilihan utama; mulai saat nyeri atau haid pertama muncul.', medicineIds: ['ibuprofen'] },
      { ingredient: 'Asam mefenamat', note: 'Sering diresepkan; sesudah makan.', medicineIds: ['mefenamic-acid'] },
      { ingredient: 'Paracetamol', note: 'Bila tidak bisa NSAID; kurang kuat untuk kram.', medicineIds: ['paracetamol'] },
      { ingredient: 'Hyoscine butylbromide', note: 'Tambahan untuk kram.', medicineIds: ['hyoscine-butylbromide'] },
    ],
    avoid: ['Menggabungkan dua NSAID (mis. ibuprofen + asam mefenamat).', 'NSAID bila maag aktif atau asma yang kambuh karena NSAID.'],
    withoutMedicine: ['Kompres hangat di perut bawah.', 'Olahraga ringan dan peregangan.'],
    seeDoctor: [
      'Nyeri makin berat dari tahun ke tahun, nyeri saat berhubungan, atau tidak membaik dengan obat (perlu cek endometriosis).',
      'Haid sangat banyak (ganti pembalut tiap 1–2 jam) atau perdarahan di luar jadwal.',
      'Nyeri hebat mendadak disertai telat haid (curiga hamil di luar kandungan) — segera ke IGD.',
    ],
  },
  {
    id: 'toothache',
    title: 'Sakit gigi',
    summary: 'Obat hanya meredakan sementara — gigi berlubang atau gusi bengkak tetap perlu ke dokter gigi.',
    symptoms: ['pain'],
    lookFor: [
      { ingredient: 'Ibuprofen', note: 'Paling efektif untuk nyeri gigi karena ada radang.', medicineIds: ['ibuprofen'] },
      { ingredient: 'Paracetamol', note: 'Bila tidak bisa NSAID.', medicineIds: ['paracetamol'] },
      { ingredient: 'Asam mefenamat / diklofenak', note: 'NSAID yang sering diresepkan dokter gigi.', medicineIds: ['mefenamic-acid', 'diclofenac'] },
    ],
    avoid: ['Menempelkan aspirin atau tablet obat langsung di gusi — membakar gusi.', 'Antibiotik sisa tanpa resep.'],
    withoutMedicine: ['Kumur air garam hangat.', 'Kompres dingin di pipi bila bengkak.'],
    seeDoctor: [
      'Pipi atau gusi bengkak, demam, atau sulit membuka mulut (abses) — segera ke dokter gigi.',
      'Bengkak menjalar ke bawah rahang/leher atau sulit menelan — segera ke IGD.',
      'Nyeri lebih dari 2 hari.',
    ],
  },
  {
    id: 'muscle-pain-sprain',
    title: 'Nyeri otot, keseleo & pegal',
    summary: 'Keseleo dan pegal setelah aktivitas umumnya membaik dalam 1–2 minggu.',
    symptoms: ['pain'],
    lookFor: [
      { ingredient: 'Diclofenac gel', note: 'Untuk nyeri lokal; jauh lebih aman untuk lambung dibanding tablet.', medicineIds: ['diclofenac'] },
      { ingredient: 'Ibuprofen', note: 'Untuk nyeri disertai bengkak; sesudah makan.', medicineIds: ['ibuprofen'] },
      { ingredient: 'Paracetamol', note: 'Bila lambung sensitif.', medicineIds: ['paracetamol'] },
    ],
    avoid: ['Gel NSAID dan tablet NSAID bersamaan dalam waktu lama tanpa saran dokter.', 'Memijat keras area keseleo yang baru dan masih bengkak.'],
    withoutMedicine: [
      '48 jam pertama keseleo: istirahatkan, kompres dingin (dibungkus kain) 15–20 menit beberapa kali sehari, balut elastis, tinggikan.',
      'Setelah bengkak reda: gerakkan perlahan.',
      'Pegal setelah olahraga: peregangan dan kompres hangat.',
    ],
    seeDoctor: [
      'Tidak bisa menumpu atau menggerakkan, bentuk sendi berubah, atau terdengar bunyi "krek" saat cedera (curiga patah/robek).',
      'Sendi merah, bengkak, dan panas tanpa cedera, apalagi dengan demam.',
      'Nyeri tidak membaik dalam 1–2 minggu.',
    ],
  },

  // ---------- Stomach & bowel ----------
  {
    id: 'heartburn-gastritis',
    title: 'Maag & asam lambung',
    summary: 'Perih ulu hati, panas di dada, atau asam naik ke tenggorokan. Pilih obat sesuai kecepatan dan kekuatan yang dibutuhkan.',
    symptoms: ['heartburn', 'stomach-pain'],
    lookFor: [
      { ingredient: 'Antasida / alginat', note: 'Bekerja dalam menit; untuk serangan mendadak.', medicineIds: ['antacid', 'alginate'] },
      { ingredient: 'Famotidine', note: 'Penurun asam sedang, efek ± 12 jam.', medicineIds: ['famotidine'] },
      { ingredient: 'Omeprazole / lansoprazole (PPI)', note: 'Paling kuat; diminum sebelum sarapan, 2–4 minggu.', medicineIds: ['omeprazole', 'lansoprazole'] },
      { ingredient: 'Sucralfate', note: 'Pelapis lambung; dengan resep.', medicineIds: ['sucralfate'] },
    ],
    avoid: [
      'NSAID (ibuprofen, asam mefenamat, aspirin, diklofenak) — pakai parasetamol untuk nyeri.',
      'Ranitidin — sudah ditarik karena cemaran NDMA.',
      'Makan besar menjelang tidur; kopi, alkohol, dan rokok bila memicu.',
    ],
    withoutMedicine: ['Makan porsi kecil; jangan langsung berbaring sampai 3 jam setelah makan.', 'Tinggikan kepala tempat tidur.', 'Lihat juga panduan refluks tanpa obat di Care guides.'],
    seeDoctor: STOMACH_RED_FLAGS,
  },
  {
    id: 'bloating',
    title: 'Kembung & begah',
    summary: 'Perut penuh gas, sering sendawa atau kentut. Biasanya karena makan terburu-buru, minuman bersoda, atau makanan pembentuk gas.',
    symptoms: ['bloating'],
    lookFor: [
      { ingredient: 'Simethicone (dimetikon)', note: 'Pemecah gelembung gas; sangat aman.', medicineIds: ['simethicone'] },
      { ingredient: 'Antasida', note: 'Bila disertai perih ulu hati.', medicineIds: ['antacid'] },
      { ingredient: 'Hyoscine butylbromide', note: 'Bila disertai kram/melilit.', medicineIds: ['hyoscine-butylbromide'] },
    ],
    avoid: ['Minuman bersoda, permen karet, makan sambil bicara.', 'Pencahar bila kembungnya bukan karena sembelit.'],
    withoutMedicine: ['Makan pelan dan kunyah sampai halus.', 'Kurangi makanan pembentuk gas (kol, kacang-kacangan, bawang) bila memicu.', 'Jalan kaki santai setelah makan.'],
    seeDoctor: STOMACH_RED_FLAGS,
  },
  {
    id: 'diarrhea',
    title: 'Diare',
    summary: 'Bahaya utama diare adalah kehilangan cairan. Yang paling penting: oralit, bukan obat pemampat.',
    symptoms: ['diarrhea'],
    lookFor: [
      { ingredient: 'Oralit', note: 'Paling penting — mengganti cairan dan garam tubuh.', medicineIds: ['oral-rehydration-salts'] },
      { ingredient: 'Zinc', note: 'Anak: 10–14 hari (WHO/IDAI), mempercepat sembuh.', medicineIds: ['zinc'] },
      { ingredient: 'Loperamide', note: 'Dewasa saja, untuk diare tanpa darah dan tanpa demam.', medicineIds: ['loperamide'] },
      { ingredient: 'Probiotik', note: 'Opsional; buktinya campuran.', medicineIds: ['probiotics'] },
      { ingredient: 'Attapulgite', note: 'Memadatkan tinja, tapi tidak mengurangi cairan yang hilang.', medicineIds: ['attapulgite'] },
    ],
    avoid: [
      'Loperamide untuk anak, atau bila diare berdarah/disertai demam.',
      'Obat "pemampat" untuk anak — WHO dan IDAI: cukup oralit + zinc.',
      'Antibiotik tanpa resep.',
      'Minuman manis atau bersoda sebagai pengganti oralit.',
    ],
    withoutMedicine: ['Tetap makan; bayi tetap diberi ASI.', 'Minum oralit sedikit-sedikit tapi sering.', 'Cuci tangan pakai sabun.'],
    seeDoctor: DIARRHEA_RED_FLAGS,
  },
  {
    id: 'constipation',
    title: 'Sembelit',
    summary: 'BAB < 3x seminggu, keras, atau harus mengejan kuat. Mulai dari serat dan air; obat bila perlu.',
    symptoms: ['constipation'],
    lookFor: [
      { ingredient: 'Psyllium husk', note: 'Serat; perlu banyak air.', medicineIds: ['psyllium-husk'] },
      { ingredient: 'Lactulose', note: 'Lembut, aman untuk anak dan ibu hamil; bekerja 1–2 hari.', medicineIds: ['lactulose'] },
      { ingredient: 'Bisacodyl', note: 'Cepat (semalam); untuk sesekali.', medicineIds: ['bisacodyl'] },
    ],
    avoid: ['Pencahar perangsang setiap hari dalam jangka panjang tanpa evaluasi dokter.', 'Pencahar bila nyeri perut hebat, muntah, atau tidak bisa kentut.'],
    withoutMedicine: [
      'Serat 25–30 g/hari (sayur, buah, kacang, gandum utuh).',
      'Minum cukup dan bergerak aktif.',
      'Jangan menahan BAB; duduk di kloset dengan kaki diganjal bangku kecil.',
    ],
    seeDoctor: BOWEL_RED_FLAGS,
  },
  {
    id: 'stomach-cramps',
    title: 'Kram perut / melilit',
    summary: 'Perut melilit karena otot usus berkontraksi berlebihan, mis. saat diare, salah makan, atau stres.',
    symptoms: ['cramps'],
    lookFor: [
      { ingredient: 'Hyoscine butylbromide', note: 'Pereda kram (antispasmodik).', medicineIds: ['hyoscine-butylbromide'] },
      { ingredient: 'Paracetamol', note: 'Pereda nyeri yang aman untuk lambung.', medicineIds: ['paracetamol'] },
      { ingredient: 'Simethicone', note: 'Bila disertai kembung.', medicineIds: ['simethicone'] },
    ],
    avoid: [
      'Menutupi nyeri perut kanan bawah yang makin hebat dengan obat.',
      'NSAID untuk nyeri perut yang belum jelas penyebabnya (bisa memperparah maag).',
    ],
    withoutMedicine: ['Kompres hangat, istirahat, makan porsi kecil.'],
    seeDoctor: CRAMP_RED_FLAGS,
  },
  {
    id: 'nausea-motion-sickness',
    title: 'Mual & mabuk perjalanan',
    summary: 'Mabuk perjalanan lebih mudah dicegah daripada diobati. Mual-muntah karena sakit fokusnya pada cairan.',
    symptoms: ['nausea-vomiting'],
    lookFor: [
      { ingredient: 'Dimenhydrinate', note: 'Mencegah mabuk perjalanan; minum 30–60 menit sebelum berangkat.', medicineIds: ['dimenhydrinate'] },
      { ingredient: 'Jahe', note: 'Membantu mual ringan, termasuk saat hamil.', medicineIds: ['ginger'] },
      { ingredient: 'Domperidone / ondansetron', note: 'Mual-muntah karena sakit; dengan resep.', medicineIds: ['domperidone', 'ondansetron'] },
    ],
    avoid: ['Obat antimabuk yang bikin ngantuk untuk pengemudi.', 'Obat antimual untuk anak yang muntah tanpa saran dokter — fokus pada oralit.'],
    withoutMedicine: [
      'Duduk di kursi depan (mobil) atau dekat sayap (pesawat), pandang ke kejauhan.',
      'Jangan membaca atau main ponsel di kendaraan.',
      'Udara segar; makan ringan sebelum berangkat.',
    ],
    seeDoctor: VOMITING_RED_FLAGS,
  },

  // ---------- Skin ----------
  {
    id: 'itch-hives',
    title: 'Gatal, biduran & gigitan serangga',
    summary: 'Gatal karena alergi atau gigitan serangga biasanya membaik dalam beberapa hari.',
    symptoms: ['itch-rash', 'allergy'],
    lookFor: [
      { ingredient: 'Cetirizine / loratadine', note: 'Untuk biduran dan gatal; tidak/sedikit bikin ngantuk.', medicineIds: ['cetirizine', 'loratadine'] },
      { ingredient: 'Chlorpheniramine (CTM)', note: 'Untuk gatal malam hari (bikin ngantuk).', medicineIds: ['chlorpheniramine'] },
      { ingredient: 'Calamine', note: 'Gatal ringan, biang keringat, gigitan serangga.', medicineIds: ['calamine-lotion'] },
      { ingredient: 'Hydrocortisone krim', note: 'Ruam meradang atau eksim kecil; maks 7 hari.', medicineIds: ['hydrocortisone-cream'] },
    ],
    avoid: [
      'Krim steroid di ruam yang mungkin jamur (pinggir merah meninggi, tengah lebih bersih).',
      'Menggaruk — memicu infeksi.',
      'Krim atau bedak racikan tanpa izin BPOM.',
    ],
    withoutMedicine: ['Kompres dingin; mandi air suam-suam kuku.', 'Pelembap untuk kulit kering atau eksim.', 'Kuku dipotong pendek.'],
    seeDoctor: RASH_RED_FLAGS,
  },
  {
    id: 'fungal-skin',
    title: 'Jamur kulit (panu, kurap, kutu air)',
    summary: 'Panu: bercak putih/cokelat bersisik halus. Kurap: cincin merah gatal dengan tengah lebih bersih. Kutu air: sela jari kaki lecet dan gatal.',
    symptoms: ['fungal'],
    lookFor: [
      { ingredient: 'Miconazole / clotrimazole', note: 'Krim azol; 2–4 minggu, lanjutkan 1–2 minggu setelah tampak sembuh.', medicineIds: ['miconazole', 'clotrimazole'] },
      { ingredient: 'Terbinafine', note: 'Pengobatan lebih singkat (1–2 minggu).', medicineIds: ['terbinafine'] },
      { ingredient: 'Ketoconazole sampo', note: 'Untuk panu yang luas dan ketombe.', medicineIds: ['ketoconazole'] },
    ],
    avoid: [
      'Krim steroid atau krim kombinasi steroid tanpa resep — jamur bisa makin luas.',
      'Berhenti begitu gatal hilang — sering kambuh.',
      'Ketokonazol tablet untuk jamur kulit.',
    ],
    withoutMedicine: [
      'Keringkan lipatan kulit dan sela jari setelah mandi.',
      'Pakai pakaian dan kaus kaki katun; ganti bila berkeringat.',
      'Handuk dan alas kaki jangan dipakai bersama.',
    ],
    seeDoctor: FUNGAL_RED_FLAGS,
  },
  {
    id: 'skin-infection',
    title: 'Impetigo, bisul & luka bernanah',
    summary: 'Infeksi bakteri di kulit: koreng bernanah dengan kerak kuning madu (impetigo), atau benjolan merah nyeri berisi nanah (bisul).',
    symptoms: ['skin-infection'],
    lookFor: [
      { ingredient: 'Asam fusidat', note: 'Antibiotik oles untuk area kecil; dengan resep.', medicineIds: ['fusidic-acid'] },
      { ingredient: 'Mupirocin', note: 'Alternatif antibiotik oles; dengan resep.', medicineIds: ['mupirocin'] },
      { ingredient: 'Povidone-iodine', note: 'Antiseptik untuk membersihkan.', medicineIds: ['povidone-iodine'] },
    ],
    avoid: [
      'Memencet bisul.',
      'Berbagi handuk. Anak dengan impetigo libur sekolah sampai kerak mengering atau 48 jam setelah mulai antibiotik.',
    ],
    withoutMedicine: ['Kompres hangat bisul 3–4x sehari supaya matang dan pecah sendiri.', 'Kuku pendek dan cuci tangan.'],
    seeDoctor: SKIN_INFECTION_RED_FLAGS,
  },
  {
    id: 'minor-wounds',
    title: 'Luka & lecet kecil',
    summary: 'Luka kecil sembuh paling cepat bila bersih, lembap, dan tertutup. Untuk luka bakar, lihat Care guides.',
    symptoms: ['open-wound'],
    lookFor: [
      { ingredient: 'Octenidine', note: 'Antiseptik luka yang tidak perih.', medicineIds: ['octenidine-wound-gel'] },
      { ingredient: 'Povidone-iodine', note: 'Antiseptik untuk luka kotor; jangan dipakai terus-menerus.', medicineIds: ['povidone-iodine'] },
      { ingredient: 'Petroleum jelly', note: 'Menjaga luka kecil tetap lembap.', medicineIds: ['petroleum-jelly'] },
      { ingredient: 'Asam fusidat / mupirocin', note: 'Hanya bila luka terinfeksi; dengan resep.', medicineIds: ['fusidic-acid', 'mupirocin'] },
    ],
    avoid: ['Alkohol atau bahan dapur (pasta gigi, kopi, kecap) di luka.', 'Antibiotik oles "jaga-jaga" di setiap luka.'],
    withoutMedicine: [
      'Bilas dengan air mengalir atau NaCl sampai bersih.',
      'Tutup dengan plester/kasa; ganti bila basah atau kotor.',
      'Luka kotor atau tusukan: cek status vaksin tetanus.',
    ],
    seeDoctor: WOUND_RED_FLAGS,
  },
  {
    id: 'acne',
    title: 'Jerawat',
    summary: 'Jerawat ringan–sedang bisa dimulai dengan obat oles. Hasil butuh 6–8 minggu — jangan ganti-ganti produk tiap minggu.',
    symptoms: ['acne'],
    lookFor: [
      { ingredient: 'Benzoyl peroxide', note: 'Lini pertama; mulai kadar 2,5%.', medicineIds: ['benzoyl-peroxide'] },
      { ingredient: 'Adapalene / tretinoin', note: 'Retinoid oles untuk komedo; dengan resep, jangan saat hamil.', medicineIds: [] },
    ],
    avoid: [
      'Memencet jerawat.',
      'Antibiotik oles saja tanpa benzoil peroksida (kuman jadi kebal).',
      'Krim racikan atau pemutih tanpa izin BPOM (sering berisi steroid atau merkuri).',
    ],
    withoutMedicine: ['Cuci muka 2x sehari dengan sabun lembut.', 'Pelembap dan tabir surya berlabel "non-comedogenic".'],
    seeDoctor: ACNE_RED_FLAGS,
  },
  {
    id: 'cold-sore',
    title: 'Herpes bibir (lepuh di bibir)',
    summary: 'Lepuh kecil berkelompok di tepi bibir yang didahului kesemutan. Sembuh sendiri 7–10 hari, tapi bisa kambuh saat lelah, demam, atau kena matahari.',
    symptoms: ['cold-sore'],
    lookFor: [
      { ingredient: 'Acyclovir krim', note: 'Oles sejak terasa kesemutan, 5x sehari.', medicineIds: ['acyclovir-cream'] },
      { ingredient: 'Paracetamol', note: 'Bila nyeri.', medicineIds: ['paracetamol'] },
    ],
    avoid: ['Memencet lepuh atau mencium bayi selama ada lepuh.', 'Krim steroid di lepuh herpes.'],
    withoutMedicine: ['Pelembap bibir dengan tabir surya — sinar matahari memicu kambuh.', 'Kompres dingin.'],
    seeDoctor: COLD_SORE_RED_FLAGS,
  },
  {
    id: 'scabies-lice',
    title: 'Kudis & kutu rambut',
    summary: 'Kudis: gatal hebat malam hari di sela jari, pergelangan, pinggang, kelamin; sering menular serumah. Kutu rambut: gatal kulit kepala, telur (lisa) menempel di rambut.',
    symptoms: ['scabies-lice'],
    lookFor: [
      { ingredient: 'Permethrin 5% krim', note: 'Kudis: semua orang serumah bersamaan, ulangi 7 hari kemudian.', medicineIds: ['permethrin'] },
      { ingredient: 'Permethrin 1% (sampo/losion kutu)', note: 'Kutu rambut: ikuti label, ulangi 7–10 hari. Sisir serit tetap penting.', medicineIds: [] },
      { ingredient: 'Antihistamin', note: 'Untuk gatal malam hari.', medicineIds: ['cetirizine', 'chlorpheniramine'] },
    ],
    avoid: [
      'Hanya mengobati yang gatal — tungau berpindah lagi.',
      'Krim steroid untuk kudis — gatal tertutupi, tungau makin banyak.',
      'Minyak tanah atau obat serangga untuk kutu rambut.',
    ],
    withoutMedicine: [
      'Cuci sprei, handuk, dan baju dengan air panas, atau simpan dalam plastik tertutup ≥ 3 hari.',
      'Kutu rambut: sisir serit (sisir rapat) rambut basah yang diberi kondisioner tiap 3–4 hari selama 2 minggu.',
    ],
    seeDoctor: SCABIES_RED_FLAGS,
  },

  // ---------- Mouth, eyes, worms ----------
  {
    id: 'mouth-ulcer',
    title: 'Sariawan',
    summary: 'Luka bulat putih dengan pinggir merah di dalam mulut. Biasanya sembuh sendiri dalam 1–2 minggu.',
    symptoms: ['mouth-ulcer'],
    lookFor: [
      { ingredient: 'Benzydamine (kumur/semprot)', note: 'Mengurangi nyeri, mis. sebelum makan.', medicineIds: ['benzydamine'] },
      { ingredient: 'Povidone-iodine (obat kumur)', note: 'Antiseptik kumur.', medicineIds: ['povidone-iodine-gargle'] },
      { ingredient: 'Paracetamol / ibuprofen', note: 'Bila nyeri mengganggu makan.', medicineIds: ['paracetamol', 'ibuprofen'] },
    ],
    avoid: [
      'Policresulen (Albothyl) untuk sariawan — BPOM membekukan izin edarnya (2018) setelah laporan efek samping serius pada pemakaian untuk sariawan.',
      'Makanan pedas, asam, atau keras selama sariawan.',
    ],
    withoutMedicine: ['Kumur air garam hangat.', 'Sikat gigi berbulu lembut; pasta gigi tanpa SLS bila sering kambuh.'],
    seeDoctor: MOUTH_RED_FLAGS,
  },
  {
    id: 'red-dry-eyes',
    title: 'Mata merah, kering & kelilipan',
    summary: 'Mata kering dan iritasi ringan (debu, asap, layar) bisa dirawat sendiri. Mata merah yang nyeri atau kabur tidak.',
    symptoms: ['eye'],
    lookFor: [
      { ingredient: 'Air mata buatan', note: 'Mata kering atau lelah; boleh sering.', medicineIds: ['artificial-tears'] },
      { ingredient: 'Tetrahydrozoline', note: 'Hanya untuk merah karena iritasi ringan; maks 3 hari.', medicineIds: ['tetrahydrozoline'] },
      { ingredient: 'Antihistamin minum', note: 'Bila mata gatal karena alergi.', medicineIds: ['loratadine', 'cetirizine'] },
    ],
    avoid: [
      'Tetes "penghilang merah" setiap hari.',
      'Tetes mata antibiotik atau steroid tanpa resep — steroid bisa memperparah infeksi dan memicu glaukoma.',
      'Mengucek mata.',
    ],
    withoutMedicine: [
      'Kelilipan: bilas dengan air bersih mengalir.',
      'Aturan 20-20-20 di depan layar: tiap 20 menit, lihat sejauh 6 meter selama 20 detik.',
      'Kompres hangat untuk mata kering.',
    ],
    seeDoctor: EYE_RED_FLAGS,
  },
  {
    id: 'worms',
    title: 'Cacingan',
    summary: 'Cacing kremi: gatal anus malam hari. Cacing gelang/tambang: sering tanpa gejala, bisa membuat anak kurus dan pucat.',
    symptoms: ['worms'],
    lookFor: [
      { ingredient: 'Albendazole', note: 'Dosis tunggal, spektrum luas.', medicineIds: ['albendazole'] },
      { ingredient: 'Pyrantel pamoate', note: 'Dosis tunggal; cacing kremi diulang 2 minggu kemudian.', medicineIds: ['pyrantel'] },
    ],
    avoid: ['Hanya mengobati satu anak bila cacing kremi — seluruh rumah diobati.', 'Albendazol saat hamil trimester 1.'],
    withoutMedicine: [
      'Cuci tangan pakai sabun sebelum makan dan setelah BAB.',
      'Kuku pendek; pakai alas kaki di tanah.',
      'Masak makanan sampai matang; cuci sayur dan buah.',
    ],
    seeDoctor: WORM_RED_FLAGS,
  },
  {
    id: 'sleeplessness',
    title: 'Susah tidur',
    summary: 'Tidak ada obat bebas yang dianjurkan untuk dipakai rutin sebagai obat tidur. Kebiasaan tidur jauh lebih efektif.',
    symptoms: [],
    lookFor: [],
    avoid: [
      'Antihistamin yang bikin ngantuk (difenhidramin, CTM, obat flu "malam") sebagai obat tidur rutin — esoknya badan lemas, cepat tidak mempan, dan berisiko pada lansia.',
      'Obat tidur resep milik orang lain.',
      'Alkohol sebagai pengantar tidur — tidur jadi dangkal.',
    ],
    withoutMedicine: [
      'Jam tidur dan bangun tetap, termasuk akhir pekan.',
      'Tanpa kafein setelah jam 2 siang; layar dimatikan 1 jam sebelum tidur.',
      'Kamar gelap, sejuk, dan tenang. Bila 20 menit belum tertidur, bangun dan lakukan hal tenang sampai mengantuk.',
    ],
    seeDoctor: [
      'Susah tidur ≥ 3 malam per minggu selama ≥ 3 bulan — terapi perilaku (CBT-I) lebih efektif jangka panjang dibanding obat.',
      'Mendengkur keras dengan henti napas, atau sangat mengantuk di siang hari (curiga sleep apnea).',
      'Disertai sedih berkepanjangan atau cemas berat.',
    ],
  },
];
