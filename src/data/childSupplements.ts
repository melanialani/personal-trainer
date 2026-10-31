// Routine medicines / supplements and health checks for Indonesian children (content in Indonesian).
// Sources are listed per item; only official Kemenkes / IDAI guidance is used.

export type SupplementSchedule =
  /** Given once (e.g. at birth). */
  | { kind: 'once' }
  /** Program rounds in fixed calendar months (1–12), e.g. vitamin A in February and August. */
  | { kind: 'rounds'; months: number[] }
  /** Repeated every N months after the last dose. */
  | { kind: 'interval'; everyMonths: number }
  /** Daily or weekly — guidance only, not logged per dose. */
  | { kind: 'ongoing' };

export interface DoseByAge {
  fromMonths: number;
  /** Inclusive, in completed months. */
  untilMonths: number;
  text: string;
  /** Elemental iron in mg per kg body weight (lets the app show a mg amount from the child's last weight). */
  mgPerKg?: number;
  maxMg?: number;
}

export interface ChildSupplement {
  /** Stable id saved in user data — never rename. */
  id: string;
  name: string;
  fromMonths: number;
  untilMonths: number;
  schedule: SupplementSchedule;
  /** Free government program (Posyandu / Puskesmas / school). */
  isProgram: boolean;
  doses: DoseByAge[];
  why: string;
  notes: string[];
  source: { name: string; url?: string };
}

export const CHILD_SUPPLEMENTS: ChildSupplement[] = [
  {
    id: 'vitamin-k1',
    name: 'Vitamin K1 (suntik saat lahir)',
    fromMonths: 0,
    untilMonths: 0,
    schedule: { kind: 'once' },
    isProgram: true,
    doses: [{ fromMonths: 0, untilMonths: 0, text: 'Satu kali suntikan di paha (bayi cukup bulan: 1 mg), dalam 6 jam pertama setelah lahir, setelah IMD.' }],
    why: 'Bayi baru lahir punya sedikit vitamin K, dan ASI rendah vitamin K. Tanpa suntikan ini bayi berisiko perdarahan, termasuk perdarahan otak (PDVK).',
    notes: [
      'Diberikan sebelum imunisasi HB-0 (minimal 30 menit sebelumnya).',
      'Dosis bayi prematur ditentukan dokter/bidan. Lahir di rumah? Pastikan bayi tetap mendapat suntikan ini.',
    ],
    source: { name: 'Permenkes 6/2024 (pelayanan neonatal esensial); IDAI 2024' },
  },
  {
    id: 'vitamin-a',
    name: 'Kapsul vitamin A',
    fromMonths: 6,
    untilMonths: 59,
    schedule: { kind: 'rounds', months: [2, 8] },
    isProgram: true,
    doses: [
      { fromMonths: 6, untilMonths: 11, text: 'Kapsul BIRU (100.000 IU), 1 kapsul.' },
      { fromMonths: 12, untilMonths: 59, text: 'Kapsul MERAH (200.000 IU), 1 kapsul.' },
    ],
    why: 'Vitamin A menjaga kesehatan mata (mencegah rabun senja dan kebutaan) dan daya tahan tubuh, serta menurunkan risiko sakit berat akibat campak dan diare.',
    notes: [
      'Gratis di Posyandu / Puskesmas setiap bulan Februari dan Agustus.',
      'Kena campak: dokter/Puskesmas memberi dosis tambahan sesuai usia. Jangan memberi kapsul tambahan sendiri.',
    ],
    source: { name: 'Kemenkes RI — Kapsul biru dan merah untuk balita (2024)', url: 'https://sehatnegeriku.kemkes.go.id/baca/blog/20240328/5345193/kapsul-biru-dan-merah-untuk-balita/' },
  },
  {
    id: 'deworming',
    name: 'Obat cacing',
    fromMonths: 12,
    untilMonths: 143,
    schedule: { kind: 'interval', everyMonths: 6 },
    isProgram: true,
    doses: [
      { fromMonths: 12, untilMonths: 23, text: 'Albendazol 200 mg (sirup), dosis tunggal.' },
      { fromMonths: 24, untilMonths: 143, text: 'Albendazol 400 mg, dosis tunggal (tablet kunyah).' },
    ],
    why: 'Cacingan bisa menyebabkan anemia, kurang gizi, stunting, dan anak sulit konsentrasi belajar.',
    notes: [
      'Program pemerintah untuk balita, anak prasekolah, dan anak usia sekolah: 1–2 kali setahun tergantung tingkat cacingan di daerah (sering bersamaan dengan pembagian vitamin A atau di sekolah).',
      'Pencegahan utama tetap: cuci tangan pakai sabun, pakai alas kaki, potong kuku, makanan dimasak matang.',
    ],
    source: { name: 'Permenkes 15/2017 tentang Penanggulangan Cacingan' },
  },
  {
    id: 'iron',
    name: 'Suplemen zat besi',
    fromMonths: 1,
    untilMonths: 216,
    schedule: { kind: 'ongoing' },
    isProgram: false,
    doses: [
      { fromMonths: 1, untilMonths: 24, text: 'Bayi berat lahir rendah (< 2.500 g): 3 mg/kgBB/hari, mulai usia 1 bulan sampai 2 tahun.', mgPerKg: 3, maxMg: 15 },
      { fromMonths: 4, untilMonths: 24, text: 'Bayi cukup bulan: 2 mg/kgBB/hari, mulai usia 4 bulan sampai 2 tahun.', mgPerKg: 2, maxMg: 15 },
      { fromMonths: 25, untilMonths: 144, text: '1 mg/kgBB/hari, 2× seminggu selama 3 bulan berturut-turut, setiap tahun.', mgPerKg: 1 },
      { fromMonths: 145, untilMonths: 216, text: 'Remaja: 60 mg/hari, 2× seminggu selama 3 bulan berturut-turut, setiap tahun. Remaja putri ditambah 400 µg asam folat.' },
    ],
    why: 'Kekurangan zat besi sangat sering pada anak Indonesia dan bisa mengganggu perkembangan otak, konsentrasi, dan daya tahan tubuh — bahkan sebelum muncul anemia.',
    notes: [
      'Dosis bayi maksimal 15 mg/hari, diberikan sekali sehari. Dosis dalam besi elemental.',
      'Remaja putri juga mendapat Tablet Tambah Darah (TTD) 1 tablet seminggu dari sekolah (program Kemenkes).',
      'Tanyakan dokter/bidan sebelum mulai, terutama bila anak punya penyakit darah (mis. talasemia).',
    ],
    source: { name: 'Rekomendasi IDAI: Suplementasi Besi untuk Anak (2011)', url: 'https://www.idai.or.id/wp-content/uploads/2013/02/Rekomendasi-IDAI_Suplemen-Zat-Besi.pdf' },
  },
  {
    id: 'vitamin-d',
    name: 'Vitamin D',
    fromMonths: 0,
    untilMonths: 216,
    schedule: { kind: 'ongoing' },
    isProgram: false,
    doses: [
      { fromMonths: 0, untilMonths: 12, text: '400 IU per hari, ASI eksklusif maupun tidak.' },
      { fromMonths: 13, untilMonths: 216, text: '600 IU per hari.' },
    ],
    why: 'ASI rendah vitamin D, dan banyak anak Indonesia kekurangan vitamin D. Vitamin D penting untuk tulang (mencegah riketsia) dan daya tahan tubuh.',
    notes: [
      'Anjuran IDAI, bukan program pemerintah. Diskusikan dengan dokter anak.',
      'Bantu juga dengan bermain di luar ruangan dan makanan kaya vitamin D (ikan seperti tuna, sarden, makerel; telur; keju).',
    ],
    source: { name: 'IDAI — Perlukah Suplemen Vitamin D? (2016)', url: 'https://www.idai.or.id/artikel/klinik/pengasuhan-anak/perlukah-suplemen-vitamin-d' },
  },
];

export interface HealthCheck {
  name: string;
  when: string;
  why: string;
}

/** Routine checks (not medicines) every child should get. */
export const ROUTINE_CHECKS: HealthCheck[] = [
  {
    name: 'Salep / tetes mata antibiotik',
    when: 'Saat lahir (dalam 6 jam pertama)',
    why: 'Mencegah infeksi mata pada bayi baru lahir yang bisa merusak penglihatan.',
  },
  {
    name: 'Skrining Hipotiroid Kongenital (SHK)',
    when: 'Usia 48–72 jam (ambil darah dari tumit)',
    why: 'Kekurangan hormon tiroid sejak lahir tidak tampak di awal, tapi bila tidak diobati sebelum usia 1 bulan bisa menyebabkan disabilitas intelektual permanen.',
  },
  {
    name: 'Skrining pendengaran (OAE)',
    when: 'Sebelum usia 1 bulan; bila tidak lolos, periksa ulang paling lambat usia 3 bulan',
    why: 'Gangguan dengar yang ditangani sebelum usia 6 bulan membuat kemampuan bicara anak bisa berkembang hampir normal.',
  },
  {
    name: 'Timbang & ukur di Posyandu',
    when: 'Setiap bulan sampai usia 5 tahun',
    why: 'Berat yang tidak naik adalah tanda paling awal masalah gizi atau penyakit, jauh sebelum anak tampak kurus atau pendek.',
  },
  {
    name: 'Cek perkembangan (SDIDTK / KPSP)',
    when: 'Tiap 3 bulan sampai usia 2 tahun, lalu tiap 6 bulan sampai 6 tahun',
    why: 'Keterlambatan bicara, gerak, atau autisme yang ditemukan dini hasil terapinya jauh lebih baik.',
  },
  {
    name: 'Periksa gigi',
    when: 'Pertama saat gigi pertama tumbuh / sebelum usia 1 tahun, lalu tiap 6 bulan',
    why: 'Gigi berlubang pada balita sangat sering, menimbulkan nyeri dan infeksi, dan bisa dicegah sejak dini.',
  },
];
