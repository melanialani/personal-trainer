// Child development milestones (Indonesian translation).
// 0–5 years: CDC "Learn the Signs. Act Early." milestone checklists (revised 2022, pages updated 2026).
// 6–17 years: archived CDC "Positive Parenting Tips" (Emotional/Social → social, Thinking and Learning → cognitive).

export type MilestoneDomain = 'social' | 'language' | 'cognitive' | 'motor';

export const MILESTONE_DOMAIN_LABELS: Record<MilestoneDomain, string> = {
  social: 'Sosial & emosi',
  language: 'Bahasa & komunikasi',
  cognitive: 'Kognitif (belajar, berpikir, memecahkan masalah)',
  motor: 'Gerak & fisik',
};

export interface Milestone {
  /** Stable id saved in user data – never rename: `m{ageMonths}-{domain}-{n}` (n from 1 per domain). */
  id: string;
  domain: MilestoneDomain;
  text: string;
}

export interface MilestoneCheckpoint {
  /** Age the list applies to, in months (2, 4, 6, 9, 12, 15, 18, 24, 30, 36, 48, 60, 72, 108, 144, 180). */
  ageMonths: number;
  /** e.g. '2 bulan', '2 tahun', '30 bulan', '6–8 tahun' */
  label: string;
  /**
   * true for 0–5 years: CDC milestones that most children (≥75%) reach by this age.
   * false for 6–17: typical development ("anak mungkin…").
   */
  isChecklist: boolean;
  source: { name: string; url: string };
  items: Milestone[];
}

const ACT_EARLY_NAME = 'CDC Learn the Signs. Act Early. (2022, diperbarui 2026)';
const ACT_EARLY_URL = 'https://www.cdc.gov/act-early/milestones/';
const PARENTING_NAME = 'CDC Positive Parenting Tips (arsip)';

type DomainTexts = Partial<Record<MilestoneDomain, string[]>>;

const DOMAIN_ORDER: MilestoneDomain[] = ['social', 'language', 'cognitive', 'motor'];

/** Builds items with stable ids `m{ageMonths}-{domain}-{n}`; n is the 1-based position within the domain. */
function buildItems(ageMonths: number, texts: DomainTexts): Milestone[] {
  const items: Milestone[] = [];
  for (const domain of DOMAIN_ORDER) {
    const list = texts[domain] ?? [];
    list.forEach((text, i) => {
      items.push({ id: `m${ageMonths}-${domain}-${i + 1}`, domain, text });
    });
  }
  return items;
}

function actEarly(ageMonths: number, label: string, page: string, texts: DomainTexts): MilestoneCheckpoint {
  return {
    ageMonths,
    label,
    isChecklist: true,
    source: { name: ACT_EARLY_NAME, url: `${ACT_EARLY_URL}${page}.html` },
    items: buildItems(ageMonths, texts),
  };
}

function parenting(ageMonths: number, label: string, stacksId: number, texts: DomainTexts): MilestoneCheckpoint {
  return {
    ageMonths,
    label,
    isChecklist: false,
    source: { name: PARENTING_NAME, url: `https://stacks.cdc.gov/view/cdc/${stacksId}` },
    items: buildItems(ageMonths, texts),
  };
}

export const MILESTONE_CHECKPOINTS: MilestoneCheckpoint[] = [
  actEarly(2, '2 bulan', '2-months', {
    social: [
      'Tenang saat diajak bicara atau digendong',
      'Melihat wajah Anda',
      'Tampak senang melihat Anda saat Anda mendekat',
      'Tersenyum saat Anda ajak bicara atau saat Anda tersenyum padanya',
    ],
    language: [
      'Mengeluarkan suara selain menangis',
      'Bereaksi terhadap suara keras',
    ],
    cognitive: [
      'Memperhatikan Anda saat Anda bergerak',
      'Melihat mainan selama beberapa detik',
    ],
    motor: [
      'Mengangkat kepala saat tengkurap',
      'Menggerakkan kedua lengan dan kedua kaki',
      'Membuka tangan sebentar',
    ],
  }),
  actEarly(4, '4 bulan', '4-months', {
    social: [
      'Tersenyum sendiri untuk menarik perhatian Anda',
      'Terkekeh (belum tertawa penuh) saat Anda mencoba membuatnya tertawa',
      'Melihat Anda, bergerak, atau mengeluarkan suara untuk mendapatkan atau mempertahankan perhatian Anda',
    ],
    language: [
      'Mengeluarkan suara seperti "oooo", "aahh" (mendekut)',
      'Membalas dengan suara saat Anda mengajaknya bicara',
      'Menoleh ke arah suara Anda',
    ],
    cognitive: [
      'Kalau lapar, membuka mulut saat melihat payudara atau botol susu',
      'Memperhatikan tangannya sendiri dengan tertarik',
    ],
    motor: [
      'Menahan kepala tetap tegak tanpa disangga saat Anda menggendongnya',
      'Menggenggam mainan saat Anda menaruhnya di tangannya',
      'Mengayunkan lengan untuk memukul-mukul mainan',
      'Memasukkan tangan ke mulut',
      'Bertumpu pada siku/lengan bawah untuk mendorong badan ke atas saat tengkurap',
    ],
  }),
  actEarly(6, '6 bulan', '6-months', {
    social: [
      'Mengenali orang-orang yang sudah dikenalnya',
      'Senang melihat dirinya di cermin',
      'Tertawa',
    ],
    language: [
      'Bergantian mengeluarkan suara dengan Anda',
      'Meniup "raspberry" (menjulurkan lidah lalu meniup)',
      'Memekik atau menjerit kecil',
    ],
    cognitive: [
      'Memasukkan benda ke mulut untuk mengenalinya',
      'Meraih untuk mengambil mainan yang diinginkan',
      'Menutup bibir untuk menunjukkan tidak mau makan lagi',
    ],
    motor: [
      'Berguling dari tengkurap ke telentang',
      'Mendorong badan ke atas dengan lengan lurus saat tengkurap',
      'Bertumpu pada tangan untuk menyangga badan saat duduk',
    ],
  }),
  actEarly(9, '9 bulan', '9-months', {
    social: [
      'Malu, menempel terus, atau takut pada orang asing',
      'Menunjukkan beberapa ekspresi wajah, seperti senang, sedih, marah, dan terkejut',
      'Menoleh saat namanya dipanggil',
      'Bereaksi saat Anda pergi (melihat, meraih ke arah Anda, atau menangis)',
      'Tersenyum atau tertawa saat diajak main cilukba',
    ],
    language: [
      'Mengeluarkan banyak suara berbeda, seperti "mamamama" dan "babababa"',
      'Mengangkat kedua lengan minta digendong',
    ],
    cognitive: [
      'Mencari benda yang jatuh dan hilang dari pandangan (seperti sendok atau mainannya)',
      'Membenturkan dua benda',
    ],
    motor: [
      'Bisa mengambil posisi duduk sendiri',
      'Memindahkan benda dari satu tangan ke tangan lainnya',
      'Menggunakan jari untuk "menyapu" makanan ke arah dirinya',
      'Duduk tanpa disangga',
    ],
  }),
  actEarly(12, '1 tahun', '1-year', {
    social: [
      'Bermain permainan bersama Anda, seperti tepuk tangan "pok ame-ame"',
    ],
    language: [
      'Melambaikan tangan "dadah"',
      'Memanggil orang tua "mama" atau "papa" atau panggilan khusus lainnya',
      'Mengerti kata "jangan" (berhenti sebentar atau berhenti saat Anda mengatakannya)',
    ],
    cognitive: [
      'Memasukkan sesuatu ke dalam wadah, seperti balok ke dalam gelas',
      'Mencari benda yang dilihatnya Anda sembunyikan, seperti mainan di bawah selimut',
    ],
    motor: [
      'Berpegangan untuk menarik badan sampai berdiri',
      'Berjalan sambil berpegangan pada perabot',
      'Minum dari gelas tanpa tutup yang Anda pegangi',
      'Mengambil benda dengan ibu jari dan telunjuk, seperti potongan kecil makanan',
    ],
  }),
  actEarly(15, '15 bulan', '15-months', {
    social: [
      'Meniru anak lain saat bermain, seperti mengeluarkan mainan dari wadah saat anak lain melakukannya',
      'Menunjukkan kepada Anda benda yang disukainya',
      'Bertepuk tangan saat senang',
      'Memeluk boneka atau mainan lain',
      'Menunjukkan kasih sayang kepada Anda (memeluk, bermanja, atau mencium Anda)',
    ],
    language: [
      'Mencoba mengucapkan satu atau dua kata selain "mama" atau "papa", seperti "bo" untuk bola atau "guk" untuk anjing',
      'Melihat benda yang sudah dikenalnya saat Anda menyebut namanya',
      'Mengikuti perintah yang diberikan dengan gerakan sekaligus kata-kata. '
        + 'Misalnya, memberikan mainan saat Anda menadahkan tangan dan berkata, "Sini mainannya."',
      'Menunjuk untuk meminta sesuatu atau minta tolong',
    ],
    cognitive: [
      'Mencoba memakai benda dengan cara yang benar, seperti telepon, gelas, atau buku',
      'Menumpuk setidaknya dua benda kecil, seperti balok',
    ],
    motor: [
      'Berjalan beberapa langkah sendiri',
      'Makan sebagian makanan sendiri dengan jari',
    ],
  }),
  actEarly(18, '18 bulan', '18-months', {
    social: [
      'Menjauh dari Anda, tapi menoleh untuk memastikan Anda masih ada di dekatnya',
      'Menunjuk untuk memperlihatkan sesuatu yang menarik kepada Anda',
      'Menyodorkan tangan agar Anda mencucinya',
      'Melihat beberapa halaman buku bersama Anda',
      'Membantu Anda memakaikan baju dengan memasukkan lengan ke lengan baju atau mengangkat kaki',
    ],
    language: [
      'Mencoba mengucapkan tiga kata atau lebih selain "mama" atau "papa"',
      'Mengikuti perintah satu langkah tanpa gerakan tangan, seperti memberikan mainan saat Anda berkata, "Berikan padaku."',
    ],
    cognitive: [
      'Meniru Anda mengerjakan pekerjaan rumah, seperti menyapu dengan sapu',
      'Bermain dengan mainan secara sederhana, seperti mendorong mobil-mobilan',
    ],
    motor: [
      'Berjalan tanpa berpegangan pada siapa pun atau apa pun',
      'Mencoret-coret',
      'Minum dari gelas tanpa tutup, kadang masih tumpah',
      'Makan sendiri dengan jari',
      'Mencoba memakai sendok',
      'Naik dan turun dari sofa atau kursi tanpa bantuan',
    ],
  }),
  actEarly(24, '2 tahun', '2-years', {
    social: [
      'Menyadari saat orang lain terluka atau sedih, seperti terdiam atau tampak sedih saat ada yang menangis',
      'Melihat wajah Anda untuk tahu harus bereaksi bagaimana dalam situasi baru',
    ],
    language: [
      'Menunjuk gambar di buku saat Anda bertanya, seperti "Mana beruangnya?"',
      'Mengucapkan setidaknya dua kata bersambung, seperti "Mau susu."',
      'Menunjuk setidaknya dua bagian tubuh saat Anda memintanya',
      'Memakai lebih banyak gerakan selain melambai dan menunjuk, seperti memberi kecupan jarak jauh atau mengangguk "ya"',
    ],
    cognitive: [
      'Memegang sesuatu dengan satu tangan sambil memakai tangan lainnya, misalnya memegang wadah sambil membuka tutupnya',
      'Mencoba memakai sakelar, kenop, atau tombol pada mainan',
      'Bermain dengan lebih dari satu mainan sekaligus, seperti menaruh makanan mainan di atas piring mainan',
    ],
    motor: [
      'Menendang bola',
      'Berlari',
      'Berjalan (bukan merangkak) naik beberapa anak tangga, dengan atau tanpa bantuan',
      'Makan dengan sendok',
    ],
  }),
  actEarly(30, '30 bulan', '30-months', {
    social: [
      'Bermain di samping anak lain dan kadang bermain bersama mereka',
      'Menunjukkan apa yang bisa dilakukannya sambil berkata, "Lihat aku!"',
      'Mengikuti rutinitas sederhana saat diminta, seperti membantu membereskan mainan saat Anda berkata, "Ayo beres-beres."',
    ],
    language: [
      'Mengucapkan sekitar 50 kata',
      'Mengucapkan dua kata atau lebih bersambung, dengan satu kata kerja, seperti "Anjing lari"',
      'Menyebut nama benda di buku saat Anda menunjuk dan bertanya, "Ini apa?"',
      'Mengucapkan kata seperti "aku", "saya", atau "kita"',
    ],
    cognitive: [
      'Memakai benda untuk bermain pura-pura, seperti menyuapi boneka dengan balok seolah-olah makanan',
      'Menunjukkan kemampuan memecahkan masalah sederhana, seperti naik ke bangku kecil untuk meraih sesuatu',
      'Mengikuti perintah dua langkah, seperti "Taruh mainannya, lalu tutup pintunya."',
      'Menunjukkan bahwa ia tahu setidaknya satu warna, seperti menunjuk krayon merah saat Anda bertanya, "Yang merah mana?"',
    ],
    motor: [
      'Memakai tangan untuk memutar sesuatu, seperti memutar gagang pintu atau membuka tutup botol',
      'Melepas sebagian pakaian sendiri, seperti celana longgar atau jaket yang terbuka',
      'Melompat dengan kedua kaki terangkat dari lantai',
      'Membalik halaman buku satu per satu saat Anda membacakannya',
    ],
  }),
  actEarly(36, '3 tahun', '3-years', {
    social: [
      'Tenang dalam 10 menit setelah Anda pergi, seperti saat diantar ke penitipan anak',
      'Memperhatikan anak lain dan ikut bermain bersama mereka',
    ],
    language: [
      'Bercakap-cakap dengan Anda setidaknya dua kali berbalasan',
      'Mengajukan pertanyaan "siapa", "apa", "di mana", atau "kenapa", seperti "Mama/Papa di mana?"',
      'Menyebutkan kegiatan yang terjadi di gambar atau buku saat ditanya, seperti "lari", "makan", atau "main"',
      'Menyebutkan nama depannya saat ditanya',
      'Bicaranya cukup jelas sehingga sebagian besar waktu bisa dimengerti orang lain',
    ],
    cognitive: [
      'Menggambar lingkaran setelah Anda mencontohkannya',
      'Tidak menyentuh benda panas, seperti kompor, saat Anda memperingatkannya',
    ],
    motor: [
      'Merangkai benda, seperti manik-manik besar atau makaroni',
      'Memakai sebagian pakaian sendiri, seperti celana longgar atau jaket',
      'Memakai garpu',
    ],
  }),
  actEarly(48, '4 tahun', '4-years', {
    social: [
      'Berpura-pura menjadi sesuatu yang lain saat bermain (guru, superhero, anjing)',
      'Minta bermain dengan anak lain kalau tidak ada teman di sekitarnya, seperti "Boleh aku main sama Dina?"',
      'Menghibur orang lain yang terluka atau sedih, seperti memeluk teman yang menangis',
      'Menghindari bahaya, seperti tidak melompat dari tempat tinggi di taman bermain',
      'Senang menjadi "penolong" (suka membantu)',
      'Mengubah perilaku sesuai tempatnya berada (tempat ibadah, perpustakaan, taman bermain)',
    ],
    language: [
      'Mengucapkan kalimat dengan empat kata atau lebih',
      'Mengucapkan beberapa kata dari lagu, cerita, atau sajak anak-anak',
      'Menceritakan setidaknya satu hal yang terjadi hari itu, seperti "Aku tadi main bola."',
      'Menjawab pertanyaan sederhana, seperti "Jaket itu buat apa?" atau "Krayon itu buat apa?"',
    ],
    cognitive: [
      'Menyebutkan beberapa warna benda',
      'Mengatakan apa yang terjadi berikutnya dalam cerita yang sudah dikenalnya',
      'Menggambar orang dengan tiga bagian tubuh atau lebih',
    ],
    motor: [
      'Menangkap bola besar hampir setiap kali',
      'Mengambil makanan sendiri atau menuang air, dengan pengawasan orang dewasa',
      'Membuka beberapa kancing baju',
      'Memegang krayon atau pensil dengan jari-jari dan ibu jari (bukan digenggam)',
    ],
  }),
  actEarly(60, '5 tahun', '5-years', {
    social: [
      'Mengikuti aturan atau bergiliran saat bermain dengan anak lain',
      'Bernyanyi, menari, atau berakting untuk Anda',
      'Mengerjakan tugas rumah sederhana, seperti memasangkan kaus kaki atau membereskan meja setelah makan',
    ],
    language: [
      'Menceritakan cerita yang didengar atau dikarangnya sendiri, dengan setidaknya dua kejadian. '
        + 'Misalnya, kucing tersangkut di pohon lalu ditolong petugas pemadam kebakaran',
      'Menjawab pertanyaan sederhana tentang buku atau cerita setelah Anda membacakan atau menceritakannya',
      'Mempertahankan percakapan dengan lebih dari tiga kali berbalasan',
      'Memakai atau mengenali rima sederhana (misalnya "batu–satu", "bola–pola")',
    ],
    cognitive: [
      'Berhitung sampai 10',
      'Menyebutkan beberapa angka antara 1 dan 5 saat Anda menunjuknya',
      'Memakai kata-kata tentang waktu, seperti "kemarin", "besok", "pagi", atau "malam"',
      'Memusatkan perhatian selama 5–10 menit saat berkegiatan. '
        + 'Misalnya, saat mendengarkan cerita atau membuat prakarya (waktu layar tidak dihitung)',
      'Menulis beberapa huruf dari namanya',
      'Menyebutkan beberapa huruf saat Anda menunjuknya',
    ],
    motor: [
      'Mengancingkan beberapa kancing baju',
      'Melompat dengan satu kaki',
    ],
  }),
  parenting(72, '6–8 tahun', 155268, {
    social: [
      'Lebih mandiri dari orang tua dan keluarga',
      'Mulai memikirkan masa depan',
      'Lebih memahami tempatnya di dunia',
      'Lebih memperhatikan pertemanan dan kerja sama tim',
      'Ingin disukai dan diterima oleh teman-temannya',
    ],
    cognitive: [
      'Menunjukkan perkembangan kemampuan berpikir yang pesat',
      'Belajar cara yang lebih baik untuk menceritakan pengalaman serta membicarakan pikiran dan perasaannya',
      'Kurang berfokus pada diri sendiri dan lebih peduli pada orang lain',
    ],
  }),
  parenting(108, '9–11 tahun', 155269, {
    social: [
      'Mulai menjalin pertemanan yang lebih erat dan lebih kompleks. '
        + 'Punya teman, terutama yang sesama jenis kelamin, menjadi lebih penting secara emosional',
      'Mengalami tekanan teman sebaya yang lebih besar',
      'Lebih sadar akan tubuhnya menjelang pubertas. Masalah citra tubuh dan pola makan kadang mulai muncul di usia ini',
    ],
    cognitive: [
      'Menghadapi tantangan belajar yang lebih berat di sekolah',
      'Menjadi lebih mandiri dari keluarga',
      'Mulai lebih jelas memahami sudut pandang orang lain',
      'Mampu memusatkan perhatian lebih lama',
    ],
  }),
  parenting(144, '12–14 tahun', 155274, {
    social: [
      'Lebih memperhatikan citra tubuh, penampilan, dan pakaian',
      'Berfokus pada diri sendiri; berganti-ganti antara harapan yang tinggi dan kurang percaya diri',
      'Lebih sering murung atau suasana hatinya mudah berubah',
      'Lebih tertarik pada dan lebih dipengaruhi oleh kelompok teman sebaya',
      'Kurang menunjukkan kasih sayang kepada orang tua; kadang tampak tidak sopan atau mudah marah',
      'Merasa tertekan karena tugas sekolah yang lebih berat',
      'Mengalami masalah pola makan',
      'Sering merasa sangat sedih atau depresi, yang bisa menyebabkan nilai sekolah turun, '
        + 'minum alkohol atau memakai narkoba, seks yang tidak aman, dan masalah lainnya',
    ],
    cognitive: [
      'Lebih mampu berpikir secara kompleks',
      'Lebih mampu mengungkapkan perasaan lewat kata-kata',
      'Mengembangkan rasa benar dan salah yang lebih kuat',
    ],
  }),
  parenting(180, '15–17 tahun', 155271, {
    social: [
      'Lebih tertarik pada hubungan romantis dan seksualitas',
      'Lebih jarang berkonflik dengan orang tua',
      'Lebih mandiri dari orang tua',
      'Punya kemampuan yang lebih dalam untuk peduli dan berbagi serta menjalin hubungan yang lebih dekat',
      'Menghabiskan lebih sedikit waktu dengan orang tua dan lebih banyak waktu dengan teman',
      'Sering merasa sangat sedih atau depresi, yang bisa menyebabkan nilai sekolah turun, '
        + 'minum alkohol atau memakai narkoba, seks yang tidak aman, dan masalah lainnya',
    ],
    cognitive: [
      'Punya kebiasaan kerja atau belajar yang lebih teratur',
      'Lebih memikirkan rencana sekolah dan pekerjaan di masa depan',
      'Lebih mampu menjelaskan alasan atas pilihannya sendiri, termasuk soal mana yang benar atau salah',
    ],
  }),
];

/** Red flags for any age (CDC + AAP / Filipek et al. 1999 absolute indications for evaluation). */
export const GENERAL_RED_FLAGS: string[] = [
  'Kehilangan kemampuan yang sudah pernah dikuasai, di usia berapa pun',
  'Belum mencapai satu atau lebih tahap perkembangan untuk usianya',
  'Belum mengoceh (babbling, misalnya "bababa") di usia 12 bulan',
  'Belum memakai isyarat (menunjuk, melambaikan tangan) di usia 12 bulan',
  'Belum mengucapkan satu kata pun di usia 16 bulan',
  'Belum mengucapkan frasa dua kata secara spontan (bukan sekadar meniru) di usia 24 bulan',
  'Orang tua merasa khawatir. Kalau ragu, jangan menunggu: konsultasikan ke dokter/bidan dan minta skrining perkembangan (KPSP)',
];
