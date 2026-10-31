// Child immunization schedule, ages 0–18 years.
// Source: "Jadwal Imunisasi Anak Usia 0–18 Tahun, Rekomendasi IDAI 2024" (Satgas Imunisasi IDAI),
// Sari Pediatri 2025;26(5):328-36 — https://saripediatri.org/index.php/sari-pediatri/article/view/2843
// Program (free) schedule notes come from the same paper, which quotes the Kemenkes national program.
// Content is Indonesian (shown to parents as-is).

export const VACCINE_SCHEDULE_SOURCE = {
  name: 'Jadwal Imunisasi Anak 0–18 Tahun, Rekomendasi IDAI 2024 (Sari Pediatri 2025)',
  url: 'https://saripediatri.org/index.php/sari-pediatri/article/view/2843',
};

export interface VaccineDose {
  /** Stable id saved in user data — never rename. */
  id: string;
  label: string;
  /** Start of the recommended window, in completed months. */
  fromMonths: number;
  /** Last month (inclusive) of the recommended window; after it the dose is late ("kejar"). */
  untilMonths: number;
  /** After this age (months) the dose must not be given any more (e.g. rotavirus). */
  hardLimitMonths?: number;
  /** Free in the government program (Posyandu / Puskesmas). */
  isProgram: boolean;
  note?: string;
}

export interface Vaccine {
  id: string;
  name: string;
  protectsAgainst: string;
  /** Only for some children (endemic area, risk group); never shown as "late". */
  condition?: string;
  /** Repeated after the listed doses, e.g. influenza every 12 months. */
  repeat?: { everyMonths: number; afterDoseId: string; untilMonths: number; label: string };
  doses: VaccineDose[];
  notes: string[];
}

export const VACCINES: Vaccine[] = [
  {
    id: 'hepb',
    name: 'Hepatitis B (HB-0)',
    protectsAgainst: 'Hepatitis B (infeksi hati yang bisa menjadi kronis, sirosis, dan kanker hati)',
    doses: [
      {
        id: 'hepb-0',
        label: 'HB-0',
        fromMonths: 0,
        untilMonths: 0,
        isProgram: true,
        note: 'Sebelum bayi berumur 24 jam, setelah suntikan vitamin K1.',
      },
    ],
    notes: [
      'Dosis HB berikutnya (usia 2, 3, 4, dan 18 bulan) ikut dalam vaksin kombinasi DTP-HB-Hib.',
      'Bayi dengan berat lahir < 2000 g dan ibu HBsAg negatif: HB-0 diberikan usia 1 bulan atau saat pulang dari fasilitas kesehatan.',
      'Ibu HBsAg positif: bayi mendapat vaksin HB + HBIg (imunoglobulin) di paha berbeda dalam 24 jam, lalu dicek HBsAg dan anti-HBs usia 9–12 bulan.',
    ],
  },
  {
    id: 'bcg',
    name: 'BCG',
    protectsAgainst: 'Tuberkulosis (TBC) berat pada anak, misalnya TBC otak dan TBC menyebar',
    doses: [
      {
        id: 'bcg-1',
        label: 'BCG',
        fromMonths: 0,
        untilMonths: 0,
        isProgram: true,
        note: 'Sesegera mungkin setelah lahir, sebelum usia 1 bulan.',
      },
    ],
    notes: [
      'Usia 3 bulan atau lebih: BCG diberikan bila uji tuberkulin (Mantoux) negatif. Bila tes tidak tersedia, BCG tetap boleh diberikan dan reaksi lokal cepat di minggu pertama perlu diperiksa ke arah TBC.',
      'Ibu sakit TBC aktif: BCG ditunda sampai bayi terbukti tidak sakit TBC; bayi diberi terapi pencegahan TBC.',
    ],
  },
  {
    id: 'polio',
    name: 'Polio (bOPV tetes & IPV suntik)',
    protectsAgainst: 'Polio (kelumpuhan permanen)',
    doses: [
      { id: 'polio-0', label: 'bOPV-0', fromMonths: 0, untilMonths: 1, isProgram: true, note: 'Tetes, saat bayi akan pulang dari fasilitas kesehatan.' },
      { id: 'polio-1', label: 'bOPV-1', fromMonths: 2, untilMonths: 2, isProgram: true },
      { id: 'polio-2', label: 'bOPV-2', fromMonths: 3, untilMonths: 3, isProgram: true },
      { id: 'polio-3', label: 'bOPV-3', fromMonths: 4, untilMonths: 4, isProgram: true },
      { id: 'ipv-1', label: 'IPV-1 (suntik)', fromMonths: 4, untilMonths: 4, isProgram: true },
      { id: 'ipv-2', label: 'IPV-2 (suntik)', fromMonths: 9, untilMonths: 9, isProgram: true },
    ],
    notes: ['Polio lengkap = bOPV saat lahir + 3× bOPV + minimal 2× IPV. IPV melindungi dari virus polio tipe 2 yang tidak ada di bOPV.'],
  },
  {
    id: 'dtp',
    name: 'DTP-HB-Hib (pentavalen / heksavalen)',
    protectsAgainst: 'Difteri, tetanus, pertusis (batuk rejan), hepatitis B, dan Haemophilus influenzae tipe b (radang otak, radang paru)',
    doses: [
      { id: 'dtp-1', label: 'DTP-HB-Hib 1', fromMonths: 2, untilMonths: 2, isProgram: true, note: 'Paling cepat usia 6 minggu.' },
      { id: 'dtp-2', label: 'DTP-HB-Hib 2', fromMonths: 3, untilMonths: 4, isProgram: true, note: 'Jadwal 2-3-4 bulan (program) atau 2-4-6 bulan; jarak 4–8 minggu.' },
      { id: 'dtp-3', label: 'DTP-HB-Hib 3', fromMonths: 4, untilMonths: 6, isProgram: true },
      { id: 'dtp-4', label: 'DTP-HB-Hib booster', fromMonths: 18, untilMonths: 18, isProgram: true },
      { id: 'dtp-5', label: 'DT / DTaP (BIAS kelas 1)', fromMonths: 60, untilMonths: 84, isProgram: true, note: 'Usia 5–7 tahun, atau lewat BIAS SD kelas 1.' },
      { id: 'td-1', label: 'Td / Tdap (BIAS kelas 2)', fromMonths: 84, untilMonths: 96, isProgram: true, note: 'Program BIAS SD kelas 2.' },
      { id: 'td-2', label: 'Td / Tdap (BIAS kelas 5)', fromMonths: 120, untilMonths: 216, isProgram: true, note: 'Usia 10–18 tahun, atau lewat BIAS SD kelas 5.' },
    ],
    notes: [
      'Anak di atas 7 tahun tidak diberi DTP lagi, melainkan Td/Tdap.',
      'Setelah itu booster Td diulang setiap 10 tahun.',
    ],
  },
  {
    id: 'pcv',
    name: 'PCV (pneumokokus)',
    protectsAgainst: 'Infeksi pneumokokus: radang paru (pneumonia), radang selaput otak, infeksi darah, infeksi telinga',
    doses: [
      { id: 'pcv-1', label: 'PCV 1', fromMonths: 2, untilMonths: 2, isProgram: true },
      { id: 'pcv-2', label: 'PCV 2', fromMonths: 3, untilMonths: 4, isProgram: true, note: 'Program: usia 3 bulan. IDAI: usia 4 bulan.' },
      { id: 'pcv-3', label: 'PCV 3', fromMonths: 6, untilMonths: 6, isProgram: false, note: 'Hanya di jadwal IDAI (3 dosis primer); tidak ada di program.' },
      { id: 'pcv-4', label: 'PCV booster', fromMonths: 12, untilMonths: 15, isProgram: true, note: 'Program: usia 12 bulan.' },
    ],
    notes: [
      'Program pemerintah: 2, 3, dan 12 bulan (2 dosis + booster). IDAI: 2, 4, 6 bulan + booster 12–15 bulan.',
      'Terlambat? Usia 7–12 bulan: 2 dosis (jarak ≥ 1 bulan) + booster; 1–2 tahun: 2 dosis jarak 2 bulan; 2–5 tahun: PCV13/PCV15 1 kali.',
    ],
  },
  {
    id: 'rotavirus',
    name: 'Rotavirus (tetes)',
    protectsAgainst: 'Diare berat akibat rotavirus (penyebab utama diare berat dan dehidrasi pada bayi)',
    doses: [
      { id: 'rv-1', label: 'Rotavirus 1', fromMonths: 2, untilMonths: 2, hardLimitMonths: 3, isProgram: true, note: 'Dosis pertama usia 6–12 minggu.' },
      { id: 'rv-2', label: 'Rotavirus 2', fromMonths: 3, untilMonths: 4, hardLimitMonths: 6, isProgram: true },
      {
        id: 'rv-3',
        label: 'Rotavirus 3',
        fromMonths: 4,
        untilMonths: 6,
        hardLimitMonths: 7,
        isProgram: true,
        note: 'Tidak perlu bila memakai vaksin monovalen 2 dosis (RV1).',
      },
    ],
    notes: [
      'Program (sejak 2023): vaksin monovalen 3 dosis usia 2, 3, 4 bulan; dosis terakhir paling lambat usia 6 bulan 29 hari.',
      'Vaksin RV1 (2 dosis): selesai paling lambat usia 24 minggu. RV5 (3 dosis): dosis ketiga paling lambat usia 32 minggu.',
      'Ada batas usia karena risiko usus terlipat (intususepsi) naik bila diberikan terlalu tua. Lewat batas = tidak diberikan lagi.',
    ],
  },
  {
    id: 'influenza',
    name: 'Influenza',
    protectsAgainst: 'Flu (influenza) dan komplikasinya seperti radang paru',
    repeat: { everyMonths: 12, afterDoseId: 'flu-2', untilMonths: 216, label: 'Influenza tahunan' },
    doses: [
      { id: 'flu-1', label: 'Influenza 1', fromMonths: 6, untilMonths: 6, isProgram: false },
      { id: 'flu-2', label: 'Influenza 2', fromMonths: 7, untilMonths: 7, isProgram: false, note: '4 minggu setelah dosis 1 (anak < 9 tahun yang baru pertama kali).' },
    ],
    notes: [
      'Mulai usia 6 bulan. Anak < 9 tahun yang pertama kali divaksin: 2 dosis jarak 4 minggu. Usia ≥ 9 tahun: cukup 1 dosis.',
      'Setelah itu diulang 1 kali setiap tahun.',
    ],
  },
  {
    id: 'mr',
    name: 'MR / MMR (campak, rubela, gondongan)',
    protectsAgainst: 'Campak (measles), rubela (campak Jerman), dan pada MMR juga gondongan (mumps)',
    doses: [
      { id: 'mr-1', label: 'MR 1', fromMonths: 9, untilMonths: 11, isProgram: true, note: 'Belum dapat MR sampai 12 bulan? Berikan MMR usia 12 bulan.' },
      { id: 'mr-2', label: 'MR / MMR 2', fromMonths: 15, untilMonths: 18, isProgram: true, note: 'Program: usia 18 bulan.' },
      { id: 'mr-3', label: 'MR / MMR 3', fromMonths: 60, untilMonths: 84, isProgram: true, note: 'Usia 5–7 tahun atau BIAS SD kelas 1.' },
    ],
    notes: ['MMRV (plus cacar air) bisa diberikan pada anak > 2 tahun yang belum mendapat MR/MMR dan varisela.'],
  },
  {
    id: 'je',
    name: 'Japanese encephalitis (JE)',
    protectsAgainst: 'Radang otak akibat virus JE yang ditularkan nyamuk',
    condition: 'Untuk anak di daerah endemis (mis. Bali, Kalimantan Barat, DIY) atau yang akan tinggal ≥ 1 bulan di daerah endemis.',
    doses: [
      { id: 'je-1', label: 'JE 1', fromMonths: 9, untilMonths: 10, isProgram: true, note: 'Program di Bali (usia 10 bulan), Kalbar, dan DIY.' },
      { id: 'je-2', label: 'JE booster', fromMonths: 21, untilMonths: 33, isProgram: false, note: '1–2 tahun setelah dosis pertama, untuk yang tinggal di daerah endemis.' },
    ],
    notes: [],
  },
  {
    id: 'varicella',
    name: 'Varisela (cacar air)',
    protectsAgainst: 'Cacar air (varisela)',
    doses: [
      { id: 'var-1', label: 'Varisela 1', fromMonths: 12, untilMonths: 18, isProgram: false },
      { id: 'var-2', label: 'Varisela 2', fromMonths: 14, untilMonths: 21, isProgram: false, note: '6 minggu – 3 bulan setelah dosis 1.' },
    ],
    notes: ['Usia ≥ 13 tahun yang belum pernah: 2 dosis jarak 4–6 minggu.'],
  },
  {
    id: 'hepa',
    name: 'Hepatitis A',
    protectsAgainst: 'Hepatitis A (radang hati yang menular lewat makanan/minuman tercemar)',
    doses: [
      { id: 'hepa-1', label: 'Hepatitis A 1', fromMonths: 12, untilMonths: 24, isProgram: false },
      { id: 'hepa-2', label: 'Hepatitis A 2', fromMonths: 18, untilMonths: 42, isProgram: false, note: '6–18 bulan setelah dosis 1.' },
    ],
    notes: [],
  },
  {
    id: 'typhoid',
    name: 'Tifoid',
    protectsAgainst: 'Demam tifoid (tipes)',
    repeat: { everyMonths: 36, afterDoseId: 'typhoid-1', untilMonths: 216, label: 'Tifoid ulangan' },
    doses: [{ id: 'typhoid-1', label: 'Tifoid', fromMonths: 24, untilMonths: 24, isProgram: false }],
    notes: ['Vaksin polisakarida mulai usia 2 tahun, diulang setiap 3 tahun.'],
  },
  {
    id: 'hpv',
    name: 'HPV',
    protectsAgainst: 'Infeksi human papillomavirus — penyebab utama kanker serviks (leher rahim)',
    doses: [
      { id: 'hpv-1', label: 'HPV 1', fromMonths: 108, untilMonths: 179, isProgram: true, note: 'Usia 9–14 tahun. Program: BIAS SD kelas 5.' },
      { id: 'hpv-2', label: 'HPV 2', fromMonths: 114, untilMonths: 191, isProgram: false, note: '6–12 bulan setelah dosis 1.' },
    ],
    notes: [
      'IDAI: anak perempuan usia 9–14 tahun 2 dosis (jarak 6–12 bulan). Mulai usia 15 tahun: 3 dosis.',
      'Program BIAS nasional sejak 2023 untuk siswi SD kelas 5. Jumlah dosis dan sasaran (termasuk anak laki-laki) mengikuti kebijakan Kemenkes terbaru — tanyakan ke sekolah/Puskesmas.',
    ],
  },
  {
    id: 'dengue',
    name: 'Dengue (DBD)',
    protectsAgainst: 'Demam berdarah dengue',
    doses: [
      { id: 'dengue-1', label: 'Dengue 1', fromMonths: 72, untilMonths: 216, isProgram: false, note: 'Vaksin TAK-003, mulai usia 6 tahun.' },
      { id: 'dengue-2', label: 'Dengue 2', fromMonths: 75, untilMonths: 216, isProgram: false, note: '3 bulan setelah dosis 1.' },
    ],
    notes: ['TAK-003 untuk usia 6–45 tahun, 2 dosis jarak 3 bulan, tanpa perlu tes darah atau riwayat DBD sebelumnya.'],
  },
];

export const ALL_VACCINE_DOSES = VACCINES.flatMap((vaccine) => vaccine.doses.map((dose) => ({ ...dose, vaccineId: vaccine.id })));
