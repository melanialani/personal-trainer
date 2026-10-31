/**
 * Age-stage guidance for the parenting module. Content in Indonesian (plain lay language).
 * Based on CDC milestone checklists (2022) and CDC Positive Parenting Tips, plus WHO, AAP,
 * AASM, IDAI and Kemenkes (Buku KIA) recommendations. Not a substitute for a doctor visit.
 */

export interface DoDont {
  text: string;
  /** Why – one or two short sentences with the reason / risk. */
  why: string;
}

export interface ParentingStage {
  /** Stable id: 'stage-{fromMonths}' */
  id: string;
  /** Start of the stage in completed months; the stage lasts until the next stage's fromMonths (last one until 216 = 18 tahun). */
  fromMonths: number;
  /** e.g. 'Bayi baru lahir (0–2 bulan)', '6–9 bulan', '1–1¼ tahun (12–15 bulan)', '6–8 tahun', '15–18 tahun' */
  label: string;
  /** "Sedang aktif apa": 1–2 sentences on what this age is busy discovering / the main developmental drive. */
  focus: string;
  /** "Biasanya ngapain": 3–5 bullets of typical everyday behaviour at this age. */
  dailyLife: string[];
  /** "Sebaiknya orang tua…": 4–6 concrete actions. */
  parentTips: string[];
  dos: DoDont[]; // 3–5
  donts: DoDont[]; // 3–5
  /** Age-specific warning signs worth a doctor visit (only well-established ones; may be empty). */
  redFlags: string[];
  /** Short guideline lines (one string each), with the body that recommends it in brackets, e.g. '12–16 jam per 24 jam termasuk tidur siang (AASM)'. */
  sleep: string;
  screen: string;
  feeding: string;
  /** Short source names used for this stage, e.g. ['CDC 2022', 'AAP', 'WHO']. */
  sources: string[];
}

const LOST_SKILLS = 'Kehilangan kemampuan yang sebelumnya sudah bisa (di usia berapa pun).';

const NO_SCREEN_INFANT = 'Tanpa layar; video call dengan keluarga boleh (WHO 2019, AAP)';

export const PARENTING_STAGES: ParentingStage[] = [
  {
    id: 'stage-0',
    fromMonths: 0,
    label: 'Bayi baru lahir (0–2 bulan)',
    focus:
      'Menyesuaikan diri dengan dunia luar: belajar menyusu dan tidur, serta merasa aman lewat pelukan, suara, dan wajah orang tua.',
    dailyLife: [
      'Tidur sebagian besar hari, bangun tiap beberapa jam untuk menyusu, siang dan malam.',
      'Menangis untuk menyampaikan semua kebutuhan: lapar, popok basah, lelah, atau ingin dipeluk.',
      'Suka menatap wajah dan tenang saat diajak bicara atau digendong.',
      'Menunjukkan tanda lapar: tangan ke mulut, menoleh mencari puting, mengecap bibir.',
      'Menggerakkan kedua tangan dan kaki; menjelang 2 bulan mulai mengangkat kepala sebentar saat tengkurap.',
    ],
    parentTips: [
      'Susui sesuai tanda lapar, bukan jadwal kaku. Berhenti saat bayi menutup mulut atau memalingkan kepala (tanda kenyang).',
      'Peluk dan gendong sesering mungkin. Merespons tangisan tidak membuat bayi manja.',
      'Ajak bicara, bernyanyi, dan bacakan buku sejak awal, termasuk saat menyusui, mengganti popok, dan memandikan.',
      'Tengkurapkan bayi beberapa kali sehari saat ia bangun dan Anda awasi (tummy time), mulai dari beberapa menit.',
      'Jaga diri Anda juga: istirahat saat bayi tidur, terima bantuan, dan cerita ke tenaga kesehatan bila terus-menerus sedih.',
      'Bawa Buku KIA setiap kontrol; ikuti jadwal kunjungan bayi baru lahir dan imunisasi dari Kemenkes/IDAI.',
    ],
    dos: [
      {
        text: 'Tidurkan bayi telentang di kasur datar dan keras, tanpa bantal, guling, selimut tebal, atau boneka.',
        why: 'Cara ini paling menurunkan risiko SIDS (kematian mendadak bayi saat tidur) dan bayi tercekik atau tertutup jalan napasnya.',
      },
      {
        text: 'Tidur sekamar dengan bayi, tetapi bayi di boks atau alas tidurnya sendiri.',
        why: 'Sekamar memudahkan menyusui dan memantau bayi. Tidur satu kasur dengan orang dewasa menaikkan risiko bayi tertindih atau tertutup selimut.',
      },
      {
        text: 'Beri ASI saja (ASI eksklusif).',
        why: 'ASI mencukupi semua kebutuhan cairan dan gizi bayi sampai 6 bulan, dan melindunginya dari infeksi seperti diare.',
      },
      {
        text: 'Tenangkan bayi dengan cara lembut: digendong, diayun pelan, diajak bicara lirih.',
        why: 'Bayi belajar tenang dari orang dewasa yang tenang. Rasa aman ini adalah dasar perkembangan emosinya.',
      },
    ],
    donts: [
      {
        text: 'Jangan pernah mengguncang bayi, sekesal apa pun Anda.',
        why: 'Guncangan bisa merusak otak bayi secara permanen atau menyebabkan kematian (shaken baby syndrome). Bila emosi memuncak, taruh bayi di tempat aman dan menjauh sebentar.',
      },
      {
        text: 'Jangan beri air putih, air gula, madu, atau makanan apa pun selain ASI atau susu formula.',
        why: 'Tubuh bayi belum siap dan ASI/formula sudah mencukupi. Madu sebelum 12 bulan bisa menyebabkan botulisme bayi (keracunan bakteri yang melumpuhkan otot).',
      },
      {
        text: 'Jangan biarkan bayi tidur di sofa, kursi mobil, stroller, atau ayunan.',
        why: 'Posisi duduk bisa menekuk leher dan menyempitkan jalan napas; di sofa yang empuk bayi bisa terjepit (AAP 2022).',
      },
      {
        text: 'Jangan merokok di dekat bayi atau di dalam rumah.',
        why: 'Asap rokok, termasuk sisa asap di ruangan dan pakaian, meningkatkan risiko SIDS dan infeksi saluran napas pada bayi.',
      },
      {
        text: 'Jangan tinggalkan bayi sendirian di kasur, meja ganti popok, atau bak mandi, walau sebentar.',
        why: 'Bayi bisa tiba-tiba bergerak dan jatuh. Tenggelam bisa terjadi di air beberapa cm saja, dan tanpa suara.',
      },
    ],
    redFlags: [
      'Demam 38 °C atau lebih (diukur dengan termometer) pada bayi di bawah 3 bulan: segera ke dokter/IGD.',
      'Tidak mau menyusu, atau memuntahkan semua yang diminum.',
      'Kejang, sangat lemas, atau sulit dibangunkan.',
      'Napas cepat, sesak, atau dinding dada tertarik ke dalam saat bernapas.',
      'Badan teraba dingin.',
      'Kulit kuning sudah muncul di 24 jam pertama, atau kuning sampai ke telapak tangan dan kaki.',
      'Pusar kemerahan sampai ke kulit perut, bernanah, atau berbau.',
    ],
    sleep:
      '14–17 jam per 24 jam, terbagi dalam banyak tidur pendek (National Sleep Foundation 2015); selalu telentang di alas sendiri (AAP 2022)',
    screen: NO_SCREEN_INFANT,
    feeding:
      'ASI eksklusif sesuai tanda lapar, umumnya 8–12 kali per 24 jam; mulai menyusu dalam 1 jam setelah lahir (WHO, AAP, IDAI)',
    sources: ['CDC 2022', 'AAP 2022', 'WHO', 'IDAI', 'Kemenkes (Buku KIA)', 'National Sleep Foundation 2015'],
  },
  {
    id: 'stage-2',
    fromMonths: 2,
    label: '2–4 bulan',
    focus:
      'Mulai bersosialisasi: tersenyum, mengoceh, dan menikmati interaksi bolak-balik dengan orang tua, sambil menguatkan otot leher.',
    dailyLife: [
      'Tersenyum saat diajak bicara dan tampak senang melihat orang tuanya.',
      'Mengeluarkan suara selain menangis (“aaa”, “ooo”) dan menoleh ke arah suara Anda.',
      'Mengikuti gerakan wajah atau benda dengan matanya.',
      'Mengangkat kepala saat tengkurap dan memasukkan tangan ke mulut.',
      'Tangisan sering terasa paling banyak di bulan-bulan awal, lalu berangsur berkurang.',
    ],
    parentTips: [
      'Tanggapi ocehannya: tirukan suaranya, tersenyum, lalu beri jeda agar ia “membalas”. Ini latihan awal bercakap.',
      'Tengkurapkan bayi saat bangun dengan mainan di depan matanya; totalnya minimal 30 menit sehari, dicicil (WHO).',
      'Kenali sinyalnya: menatap dan bersuara berarti ingin bermain; memalingkan muka, menguap, atau rewel berarti butuh jeda.',
      'Buat rutinitas tidur dan menyusu yang kurang lebih sama setiap hari, agar bayi belajar apa yang akan terjadi.',
      'Batasi waktu di ayunan, stroller, atau kursi bayi; beri waktu bergerak bebas di alas yang aman.',
      'Timbang berat badan tiap bulan di Posyandu dan lanjutkan imunisasi sesuai jadwal (Buku KIA).',
    ],
    dos: [
      {
        text: 'Ajak bicara, bernyanyi, dan lihat buku bergambar bersama setiap hari.',
        why: 'Interaksi langsung adalah cara utama otak bayi belajar bahasa; layar tidak bisa menggantikannya.',
      },
      {
        text: 'Tetap tidurkan telentang, walau bayi sudah kuat mengangkat kepala.',
        why: 'Risiko SIDS paling tinggi di usia 1–4 bulan. Posisi telentang di alas datar dan keras adalah perlindungan utamanya (AAP 2022).',
      },
      {
        text: 'Boleh biarkan bayi mengisap jari atau empeng untuk menenangkan diri.',
        why: 'Mengisap adalah cara alami bayi menenangkan diri. Empeng saat tidur juga dikaitkan dengan risiko SIDS lebih rendah, bila menyusu sudah lancar (AAP).',
      },
      {
        text: 'Di mobil, pakai kursi bayi (car seat) menghadap ke belakang.',
        why: 'Saat rem mendadak atau tabrakan, pelukan orang dewasa tidak cukup kuat menahan bayi. Car seat menghadap belakang melindungi kepala dan leher.',
      },
    ],
    donts: [
      {
        text: 'Jangan mengguncang bayi walau ia menangis terus.',
        why: 'Guncangan bisa menyebabkan cedera otak berat atau kematian. Bila kewalahan, taruh bayi telentang di boks, menjauh sebentar, dan tengok tiap 5–10 menit (CDC).',
      },
      {
        text: 'Jangan beri air putih, teh, madu, atau makanan pendamping sebelum 6 bulan.',
        why: 'ASI/formula sudah mencukupi. Makanan dan minuman lain mengurangi asupan ASI dan menambah risiko infeksi; madu berisiko botulisme bayi.',
      },
      {
        text: 'Jangan tinggalkan bayi di kasur atau meja tanpa dipegang.',
        why: 'Di usia ini bayi bisa tiba-tiba berguling untuk pertama kalinya dan jatuh.',
      },
      {
        text: 'Jangan beri obat batuk-pilek bebas atau aspirin.',
        why: 'Obat batuk-pilek bebas tidak dianjurkan di bawah 2 tahun karena risiko efek samping serius (FDA). Aspirin berisiko sindrom Reye (kerusakan hati dan otak).',
      },
    ],
    redFlags: [
      'Demam 38 °C atau lebih pada bayi di bawah 3 bulan: segera ke dokter/IGD.',
      'Tidak bereaksi pada suara keras.',
      'Tidak memperhatikan wajah atau tidak mengikuti benda yang bergerak dengan mata.',
      'Belum tersenyum saat diajak bicara atau saat melihat orang tuanya.',
      LOST_SKILLS,
    ],
    sleep:
      '14–17 jam per 24 jam sampai usia 3 bulan (National Sleep Foundation 2015), lalu 12–16 jam mulai 4 bulan (AASM)',
    screen: NO_SCREEN_INFANT,
    feeding: 'ASI eksklusif sesuai tanda lapar; belum perlu air putih, madu, atau makanan lain (WHO, IDAI, Kemenkes)',
    sources: ['CDC 2022', 'AAP 2022', 'WHO 2019', 'AASM 2016', 'Kemenkes (Buku KIA)', 'National Sleep Foundation 2015'],
  },
  {
    id: 'stage-4',
    fromMonths: 4,
    label: '4–6 bulan',
    focus: 'Menjelajah dengan tangan dan mulut: meraih, menggenggam, memasukkan benda ke mulut, dan mulai berguling.',
    dailyLife: [
      'Tertawa dan memekik senang; tersenyum untuk menarik perhatian Anda.',
      'Meraih dan menggenggam mainan, lalu memasukkannya ke mulut.',
      'Kepala tegak stabil saat digendong; bertumpu pada lengan saat tengkurap.',
      'Mulai berguling dari tengkurap ke telentang.',
      'Mengenali orang-orang terdekat dan suka melihat dirinya di cermin.',
    ],
    parentTips: [
      'Sediakan mainan yang mudah digenggam, tidak tajam, dan tidak cukup kecil untuk tertelan.',
      'Main cilukba dan tirukan ocehannya secara bergantian.',
      'Taruh mainan sedikit di luar jangkauan agar ia terdorong berguling dan meraih.',
      'Tunjuk dan sebutkan nama benda yang sedang ia lihat.',
      'Saat gigi pertama muncul (sering sekitar 6 bulan), sikat 2 kali sehari dengan pasta gigi berfluoride seukuran butir beras.',
      'Menjelang 6 bulan, bicarakan rencana MPASI dengan dokter/bidan, termasuk makanan yang berisiko membuat tersedak.',
    ],
    dos: [
      {
        text: 'Beri banyak waktu bermain di lantai atau alas yang aman setiap hari.',
        why: 'Bergerak bebas melatih otot untuk berguling, duduk, dan merangkak. Terlalu lama di kursi atau ayunan membatasi latihan ini.',
      },
      {
        text: 'Lihat dan bacakan buku bergambar setiap hari.',
        why: 'Mendengar banyak kata sejak bayi membantu kemampuan bicara dan memahami kata di kemudian hari.',
      },
      {
        text: 'Simpan benda kecil, koin, baterai kancing (baterai jam), dan kantong plastik di luar jangkauan.',
        why: 'Bayi memasukkan semua benda ke mulut. Benda kecil bisa menyumbat napas; baterai kancing yang tertelan bisa melukai saluran cerna dengan cepat.',
      },
      {
        text: 'Beri obat demam hanya sesuai berat badan dan petunjuk dokter.',
        why: 'Dosis anak dihitung dari berat badan. Ibuprofen tidak untuk bayi di bawah 6 bulan kecuali atas saran dokter.',
      },
    ],
    donts: [
      {
        text: 'Jangan mulai MPASI sebelum 6 bulan tanpa saran dokter.',
        why: 'ASI/formula masih mencukupi kebutuhan. MPASI terlalu dini bisa mengurangi asupan ASI dan menambah risiko infeksi (WHO).',
      },
      {
        text: 'Jangan pakai baby walker.',
        why: 'AAP tidak menganjurkan baby walker: alat ini sering menyebabkan cedera, misalnya terguling di tangga, dan tidak membuat bayi lebih cepat berjalan.',
      },
      {
        text: 'Jangan oleskan gel tumbuh gigi yang mengandung benzokain.',
        why: 'FDA memperingatkan benzokain bisa menyebabkan methemoglobinemia (kadar oksigen dalam darah turun berbahaya) pada bayi.',
      },
      {
        text: 'Jangan tinggalkan bayi sendirian di kasur, sofa, atau bak mandi.',
        why: 'Bayi yang mulai berguling bisa jatuh dalam sekejap. Tenggelam bisa terjadi di air dangkal dan tanpa suara.',
      },
    ],
    redFlags: [
      'Kepala belum tegak stabil saat digendong di usia 4 bulan.',
      'Tidak mengikuti benda bergerak dengan mata, atau tidak menoleh ke arah suara.',
      'Menjelang 6 bulan tidak berusaha meraih benda di dekatnya, atau sulit membawa benda ke mulut.',
      'Tubuh terasa sangat kaku atau sangat lemas (lunglai).',
      LOST_SKILLS,
    ],
    sleep: '12–16 jam per 24 jam termasuk tidur siang (AASM); tetap telentang di alas datar dan keras (AAP 2022)',
    screen: NO_SCREEN_INFANT,
    feeding: 'ASI eksklusif sampai genap 6 bulan; air putih, madu, dan makanan lain belum diberikan (WHO, IDAI, Kemenkes)',
    sources: ['CDC 2022', 'AAP', 'WHO', 'AASM 2016', 'IDAI', 'FDA'],
  },
  {
    id: 'stage-6',
    fromMonths: 6,
    label: '6–9 bulan',
    focus: 'Belajar duduk dan mulai merangkak, serta mengenal rasa dan tekstur makanan baru lewat MPASI.',
    dailyLife: [
      'Mengoceh dan memekik, bergantian bersuara dengan Anda.',
      'Duduk dengan bertumpu tangan, lalu makin stabil duduk sendiri.',
      'Memindahkan mainan dari satu tangan ke tangan lain dan memukul-mukulkan benda.',
      'Mulai malu atau takut pada orang asing, dan menangis saat ditinggal.',
      'Menutup mulut atau memalingkan muka bila sudah tidak mau makan.',
    ],
    parentTips: [
      'Mulai MPASI saat genap 6 bulan sambil tetap menyusui; utamakan protein hewani seperti telur, hati, ikan, atau daging.',
      'Kenali tanda lapar (membuka mulut, antusias melihat makanan) dan tanda kenyang (mendorong sendok, menutup mulut).',
      'Tawarkan makanan baru berulang kali; penolakan di percobaan pertama itu wajar.',
      'Sebutkan nama benda yang ia lihat dan bacakan buku setiap hari.',
      'Amankan rumah: tutup stopkontak, kunci obat dan bahan kimia, singkirkan benda tajam atau mudah pecah.',
      'Datang ke Posyandu/Puskesmas untuk kapsul vitamin A biru (usia 6–11 bulan) di bulan Februari atau Agustus (Kemenkes).',
    ],
    dos: [
      {
        text: 'Beri MPASI kaya zat besi dengan tekstur bertahap: lumat halus, lalu lumat kasar.',
        why: 'Cadangan zat besi bawaan lahir menipis sekitar usia 6 bulan, padahal zat besi penting untuk otak. Tekstur bertahap melatih kemampuan mengunyah.',
      },
      {
        text: 'Suapi bayi dalam posisi duduk tegak dan selalu didampingi.',
        why: 'Makan sambil duduk dan diawasi mengurangi risiko tersedak; bayi juga belajar dari melihat Anda makan.',
      },
      {
        text: 'Beri beberapa teguk air putih dari cangkir saat makan.',
        why: 'Mulai 6 bulan bayi boleh minum sedikit air, dan cangkir melatih keterampilan minum. ASI tetap minuman utamanya.',
      },
      {
        text: 'Pamit dengan jelas saat pergi, jangan diam-diam menyelinap.',
        why: 'Bayi belajar bahwa Anda pergi lalu kembali. Rasa percaya ini membantu cemas berpisah mereda (CDC).',
      },
    ],
    donts: [
      {
        text: 'Jangan beri madu sebelum usia 12 bulan.',
        why: 'Madu bisa mengandung spora bakteri penyebab botulisme bayi, keracunan yang melumpuhkan otot.',
      },
      {
        text: 'Jangan tambahkan garam, gula, atau kecap ke MPASI.',
        why: 'Ginjal bayi belum siap menghadapi garam berlebih, dan rasa manis sejak dini membentuk kebiasaan suka manis.',
      },
      {
        text: 'Jangan beri susu sapi sebagai minuman utama sebelum 12 bulan.',
        why: 'Susu sapi rendah zat besi dan bisa menggeser ASI, sehingga meningkatkan risiko anemia (kurang darah).',
      },
      {
        text: 'Jangan beri makanan bulat dan keras: kacang utuh, anggur utuh, popcorn, permen keras.',
        why: 'Ukuran dan bentuknya pas menyumbat saluran napas anak kecil. Potong anggur memanjang dan haluskan kacang.',
      },
      {
        text: 'Jangan beri jus buah.',
        why: 'AAP tidak menganjurkan jus untuk bayi di bawah 1 tahun: tinggi gula dan tidak lebih bergizi dibanding buah utuh.',
      },
    ],
    redFlags: [
      'Tidak berguling sama sekali, ke arah mana pun.',
      'Tidak tertawa atau memekik, atau tidak bereaksi pada suara.',
      'Tidak menunjukkan rasa sayang atau tidak tertarik pada orang terdekatnya.',
      'Belum bisa duduk tanpa ditopang di usia 9 bulan.',
      LOST_SKILLS,
    ],
    sleep: '12–16 jam per 24 jam termasuk tidur siang (AASM)',
    screen: NO_SCREEN_INFANT,
    feeding:
      'MPASI mulai 6 bulan, 2–3 kali makan per hari sambil tetap menyusui; kaya protein hewani & zat besi; tanpa garam/gula tambahan dan madu (WHO, IDAI)',
    sources: ['CDC 2022', 'WHO', 'IDAI', 'AAP', 'AASM 2016', 'Kemenkes'],
  },
  {
    id: 'stage-9',
    fromMonths: 9,
    label: '9–12 bulan',
    focus:
      'Bergerak ke mana-mana (merangkak, merambat) dan paham bahwa benda tetap ada walau tidak terlihat; mulai memakai isyarat untuk berkomunikasi.',
    dailyLife: [
      'Merangkak, menarik badan untuk berdiri, lalu berjalan berpegangan pada perabot.',
      'Mengoceh “mamama”, “bababa”, dan mengangkat tangan minta digendong.',
      'Mencari mainan yang Anda sembunyikan dan senang menjatuhkan benda berulang kali.',
      'Menjumput makanan kecil dengan ibu jari dan telunjuk.',
      'Lengket pada orang tua dan cemas bila ditinggal (cemas berpisah).',
    ],
    parentTips: [
      'Ulangi ocehannya lalu sambungkan ke kata, misalnya “ba-ba” menjadi “bola”. Ajarkan melambai “dadah”.',
      'Katakan perilaku yang Anda mau, bukan larangannya: “Ayo duduk” lebih efektif daripada “Jangan berdiri”.',
      'Biarkan ia makan sendiri dengan jari dan minum dari cangkir; berantakan adalah bagian dari belajar.',
      'Pasang pagar tangga dan penutup stopkontak; kunci lemari obat dan bahan kimia.',
      'Kosongkan ember dan tutup bak mandi; jangan biarkan air tergenang di dekat anak.',
      'Tetap ke Posyandu tiap bulan untuk timbang, ukur, dan imunisasi (Buku KIA).',
    ],
    dos: [
      {
        text: 'Naikkan tekstur MPASI ke cincang kasar dan makanan jari (finger food) yang lunak.',
        why: 'Tekstur bertahap melatih otot mulut untuk mengunyah, sehingga menjelang 12 bulan ia siap makan makanan keluarga.',
      },
      {
        text: 'Bacakan buku sambil menunjuk dan menyebut gambarnya.',
        why: 'Menamai benda membantu bayi menghubungkan kata dengan artinya, dasar kosakata pertamanya.',
      },
      {
        text: 'Alihkan perhatian bila ia mendekati hal berbahaya, dan simpan kata “tidak” untuk hal yang benar-benar berbahaya.',
        why: 'Bayi belum paham penjelasan panjang. Pengalihan lebih efektif, dan kata “tidak” jadi lebih bermakna (CDC).',
      },
      {
        text: 'Pakai kursi mobil (car seat) yang sesuai; jangan memangku bayi di motor atau mobil.',
        why: 'Saat tabrakan atau rem mendadak, pelukan orang dewasa tidak cukup kuat menahan bayi.',
      },
    ],
    donts: [
      {
        text: 'Jangan memukul, mencubit, atau membentak.',
        why: 'Hukuman fisik tidak mengajarkan perilaku yang benar dan justru meningkatkan agresi serta rasa takut (AAP 2018).',
      },
      {
        text: 'Jangan pakai baby walker.',
        why: 'Baby walker bisa terguling di tangga dan membuat bayi menjangkau benda panas atau berbahaya; AAP tidak menganjurkannya.',
      },
      {
        text: 'Jangan beri madu, susu sapi sebagai minuman utama, atau minuman manis.',
        why: 'Madu berisiko botulisme bayi, susu sapi sebelum 12 bulan menambah risiko anemia, dan minuman manis merusak gigi.',
      },
      {
        text: 'Jangan tinggalkan bayi sendirian di dekat air, termasuk ember dan bak mandi.',
        why: 'Bayi bisa tenggelam di air beberapa cm saja, sering tanpa suara atau teriakan.',
      },
    ],
    redFlags: [
      'Belum bisa duduk tanpa ditopang di usia 9 bulan.',
      'Tidak bisa berdiri walaupun dipegangi.',
      'Tidak menoleh saat dipanggil namanya di usia 12 bulan.',
      'Belum mengoceh (“mama”, “baba”) di usia 12 bulan.',
      'Tidak memakai isyarat seperti menunjuk atau melambai di usia 12 bulan.',
      LOST_SKILLS,
    ],
    sleep: '12–16 jam per 24 jam termasuk tidur siang (AASM)',
    screen: NO_SCREEN_INFANT,
    feeding:
      '3–4 kali makan + 1–2 selingan, tekstur cincang sampai makanan jari; tetap menyusui; tanpa garam/gula tambahan dan madu (WHO, IDAI)',
    sources: ['CDC 2022', 'WHO', 'IDAI', 'AAP 2018', 'AASM 2016', 'Kemenkes (Buku KIA)'],
  },
  {
    id: 'stage-12',
    fromMonths: 12,
    label: '1–1¼ tahun (12–15 bulan)',
    focus: 'Langkah pertama dan kata pertama: anak ingin bergerak sendiri dan meniru apa yang dilakukan orang dewasa.',
    dailyLife: [
      'Berdiri, berjalan berpegangan, lalu mencoba beberapa langkah sendiri.',
      'Memanggil “mama”/“papa” dan mulai mencoba satu-dua kata lain.',
      'Mengerti kata “jangan” dan perintah sederhana yang disertai isyarat.',
      'Menunjuk untuk meminta sesuatu dan menunjukkan benda kesukaannya.',
      'Makan sendiri dengan jari dan mencoba memakai sendok atau cangkir.',
    ],
    parentTips: [
      'Kembangkan kata-katanya: jika ia bilang “bo”, jawab “Iya, bola. Bolanya merah.”',
      'Ajarkan perilaku yang diinginkan: tunjukkan caranya, lalu puji atau peluk saat ia melakukannya.',
      'Libatkan dalam kegiatan harian: mengambil sepatu, menaruh kaus kaki di keranjang.',
      'Ajak bergerak aktif sepanjang hari; usia 1–4 tahun dianjurkan aktif minimal 180 menit sehari (WHO).',
      'Buat rutinitas tidur yang tenang: ganti baju, sikat gigi, bacakan 1–2 buku.',
      'Ambil kapsul vitamin A merah (usia 12–59 bulan) di Posyandu setiap Februari dan Agustus (Kemenkes).',
    ],
    dos: [
      {
        text: 'Beri air putih dan ASI; susu sapi tawar boleh mulai usia 12 bulan.',
        why: 'Air putih dan susu tawar adalah minuman terbaik untuk anak. ASI tetap bermanfaat sampai 2 tahun atau lebih (WHO).',
      },
      {
        text: 'Biarkan anak berlatih berjalan sambil memegang tangan Anda atau perabot yang kokoh.',
        why: 'Latihan alami ini menguatkan otot dan keseimbangan, dan lebih aman daripada baby walker.',
      },
      {
        text: 'Sajikan makanan keluarga yang dipotong kecil dan lunak.',
        why: 'Anak sudah siap makan menu keluarga, tetapi belum bisa mengunyah potongan besar atau keras dengan baik sehingga mudah tersedak.',
      },
      {
        text: 'Sikat gigi 2 kali sehari dengan pasta gigi berfluoride seukuran butir beras, dan kenalkan ke dokter gigi.',
        why: 'Fluoride melindungi gigi dari karies (gigi berlubang); jumlah sebesar butir beras aman bila tertelan. Kunjungan dokter gigi dianjurkan paling lambat 12 bulan.',
      },
    ],
    donts: [
      {
        text: 'Jangan beri minuman manis: teh manis, sirup, minuman kemasan, atau susu berperisa.',
        why: 'Gula tambahan merusak gigi dan membentuk selera manis. AAP menganjurkan tanpa gula tambahan sebelum usia 2 tahun.',
      },
      {
        text: 'Jangan memukul atau berteriak saat anak berbuat yang tidak Anda inginkan.',
        why: 'Pukulan mengajarkan bahwa menyakiti boleh dilakukan saat marah. Pengalihan dan arahan yang tenang lebih efektif (AAP 2018).',
      },
      {
        text: 'Jangan pakai layar untuk menenangkan anak atau menemaninya makan.',
        why: 'Di usia ini anak belajar bahasa dan emosi dari interaksi langsung; layar menggantikan waktu bicara dan bermain bersama Anda.',
      },
      {
        text: 'Jangan simpan obat, deterjen, atau cairan pembersih di tempat terjangkau.',
        why: 'Anak yang mulai berjalan suka membuka dan mencicipi apa saja, sehingga mudah keracunan bahan rumah tangga.',
      },
    ],
    redFlags: [
      'Tidak menoleh saat dipanggil namanya.',
      'Belum mengoceh sama sekali.',
      'Tidak menunjuk atau melambai.',
      'Tidak bisa berdiri walaupun dipegangi.',
      LOST_SKILLS,
    ],
    sleep: '11–14 jam per 24 jam termasuk tidur siang (AASM)',
    screen: 'Tanpa waktu layar sambil duduk diam (WHO 2019); hindari layar kecuali video call sampai 18 bulan (AAP)',
    feeding:
      'Makanan keluarga yang lunak, 3–4 kali makan + 1–2 selingan; ASI lanjut sampai 2 tahun atau lebih; tanpa gula tambahan & minuman manis (WHO, AAP)',
    sources: ['CDC 2022', 'WHO 2019', 'AAP', 'AAPD', 'AASM 2016', 'Kemenkes'],
  },
  {
    id: 'stage-15',
    fromMonths: 15,
    label: '1¼–1½ tahun (15–18 bulan)',
    focus:
      'Makin mandiri: berjalan sendiri, menunjuk untuk “bercerita”, dan meniru pekerjaan rumah orang dewasa.',
    dailyLife: [
      'Berjalan beberapa langkah sendiri, lalu makin lancar.',
      'Menunjuk untuk minta tolong atau menunjukkan hal yang menarik.',
      'Mengucapkan beberapa kata selain “mama” dan “papa”.',
      'Meniru: menyapu, “menelepon”, menyuapi boneka.',
      'Tantrum (mengamuk) mulai muncul, terutama saat lelah atau lapar.',
    ],
    parentTips: [
      'Sebutkan nama benda yang ia tunjuk, lalu tunggu beberapa detik agar ia mencoba bersuara.',
      'Ungkapkan perasaannya dengan kata: “Kamu kesal ya, karena belum boleh keluar.”',
      'Hadapi tantrum dengan tenang: boleh dialihkan, atau biarkan reda sambil Anda tetap di dekatnya.',
      'Nyanyikan lagu dengan gerakan dan main petak umpet sederhana.',
      'Biarkan ia minum dari cangkir tanpa tutup dan berlatih makan dengan sendok.',
      'Catat perkembangannya di Buku KIA dan bawa saat ke Posyandu atau dokter.',
    ],
    dos: [
      {
        text: 'Beri lebih banyak perhatian pada perilaku baik daripada perilaku buruk.',
        why: 'Anak cenderung mengulang perilaku yang mendapat perhatian. Pujian yang spesifik lebih efektif daripada larangan berulang (CDC).',
      },
      {
        text: 'Tetap tenang dan konsisten saat anak tantrum.',
        why: 'Tantrum normal di usia ini karena anak belum bisa mengungkapkan frustrasi dengan kata. Sikap tenang membantunya belajar meredakan diri.',
      },
      {
        text: 'Beri pilihan sederhana: “Mau baju merah atau biru?”',
        why: 'Pilihan kecil memenuhi keinginannya untuk mandiri dan sering mencegah adu kemauan.',
      },
      {
        text: 'Ajak bermain aktif, terutama di luar rumah, setiap hari.',
        why: 'WHO menganjurkan anak 1–4 tahun aktif bergerak minimal 180 menit sehari untuk tumbuh kembang yang sehat.',
      },
    ],
    donts: [
      {
        text: 'Jangan memukul atau mempermalukan anak saat tantrum.',
        why: 'Hukuman keras tidak mengajarkan cara mengelola emosi dan bisa membuat anak lebih agresif (AAP 2018).',
      },
      {
        text: 'Jangan memaksa makan atau membujuk dengan permen.',
        why: 'Nafsu makan balita naik-turun. Tugas orang tua menyediakan makanan sehat; anak yang menentukan seberapa banyak ia makan (CDC).',
      },
      {
        text: 'Jangan beri sosis potong bulat, anggur utuh, kacang utuh, atau permen keras.',
        why: 'Bentuk bulat seukuran saluran napas anak mudah menyumbat. Potong memanjang, lalu kecil-kecil.',
      },
      {
        text: 'Jangan beri obat batuk-pilek bebas.',
        why: 'Tidak terbukti bermanfaat pada anak kecil dan berisiko efek samping serius. FDA tidak menganjurkannya di bawah 2 tahun, AAP di bawah 4 tahun.',
      },
    ],
    redFlags: [
      'Belum mengucapkan satu kata pun di usia 16 bulan.',
      'Belum berjalan sendiri di usia 18 bulan.',
      'Tidak menunjuk untuk memperlihatkan sesuatu kepada Anda.',
      'Tidak tahu fungsi benda sehari-hari, seperti sendok, sisir, atau telepon.',
      LOST_SKILLS,
    ],
    sleep: '11–14 jam per 24 jam termasuk tidur siang (AASM)',
    screen: 'Hindari layar kecuali video call sampai 18 bulan (AAP); di bawah 2 tahun tanpa waktu layar sambil duduk diam (WHO 2019)',
    feeding:
      'Makanan keluarga bergizi seimbang + 1–2 selingan sehat; ASI lanjut sampai 2 tahun atau lebih; air putih/susu tawar, tanpa minuman manis (WHO, AAP)',
    sources: ['CDC 2022', 'WHO 2019', 'AAP 2018', 'AASM 2016', 'FDA', 'Kemenkes (Buku KIA)'],
  },
  {
    id: 'stage-18',
    fromMonths: 18,
    label: '1½–2 tahun (18–24 bulan)',
    focus:
      'Kosakata bertambah cepat dan mulai bermain “pura-pura”; anak ingin melakukan semuanya sendiri tetapi tetap butuh Anda di dekatnya.',
    dailyLife: [
      'Berjalan tanpa pegangan, naik-turun kursi atau sofa sendiri.',
      'Mengucapkan beberapa kata, lalu mulai merangkai dua kata (“mau susu”).',
      'Mengikuti perintah satu langkah tanpa isyarat (“ambil bolanya”).',
      'Main pura-pura sederhana, misalnya menyuapi boneka.',
      'Menjelajah menjauh dari Anda, tetapi sering menoleh memastikan Anda masih ada.',
    ],
    parentTips: [
      'Bicara sambil berjongkok setinggi matanya, dan tambahkan kata pada ucapannya: “Anjing. Iya, anjingnya menggonggong.”',
      'Ajarkan nama bagian tubuh: “Ini hidungmu, ini hidung Ibu.”',
      'Sediakan sudut tenang di rumah untuk anak saat kesal, dan tetaplah di dekatnya.',
      'Duduk bersama saat anak makan; buat jadwal makan dan camilan yang teratur.',
      'Perhatikan tanda siap toilet training: popok kering lebih lama, tertarik ke toilet, memberi tahu saat pipis. Umumnya muncul di usia 18–30 bulan (AAP).',
    ],
    dos: [
      {
        text: 'Puji usaha dan perilaku yang Anda inginkan secara spesifik.',
        why: '“Wah, kamu menaruh mainan di kotaknya” memberi tahu anak persis apa yang benar, sehingga ia cenderung mengulanginya.',
      },
      {
        text: 'Mulai toilet training hanya saat anak menunjukkan tanda siap.',
        why: 'Memulai terlalu dini bisa menimbulkan stres dan kemunduran, sehingga prosesnya justru lebih lama (CDC).',
      },
      {
        text: 'Bila memberi tontonan, pilih yang berkualitas dan tonton bersama.',
        why: 'Di usia ini anak hanya bisa belajar dari layar bila orang dewasa ikut menonton dan menjelaskan (AAP).',
      },
      {
        text: 'Lanjutkan menyusui bila masih, dan jadikan air putih atau susu tawar minuman sehari-hari.',
        why: 'ASI tetap memberi gizi dan perlindungan sampai 2 tahun atau lebih (WHO); minuman manis merusak gigi.',
      },
    ],
    donts: [
      {
        text: 'Jangan memukul, mengancam, atau mempermalukan.',
        why: 'Hukuman fisik dan kata-kata kasar berkaitan dengan lebih banyak masalah perilaku dan emosi di kemudian hari (AAP 2018).',
      },
      {
        text: 'Jangan memarahi atau menghukum anak saat ia mengompol.',
        why: 'Hukuman membuat anak takut dan menahan pipis atau BAB, sehingga toilet training justru lebih sulit.',
      },
      {
        text: 'Jangan biarkan anak dekat air tanpa pengawasan, termasuk ember, bak mandi, dan kolam.',
        why: 'Tenggelam bisa terjadi sangat cepat dan tanpa suara; anak usia ini belum memahami bahaya air.',
      },
      {
        text: 'Jangan jadikan permen atau makanan manis sebagai hadiah.',
        why: 'AAP menganjurkan tidak memakai makanan sebagai hadiah karena membuat anak makin menginginkannya. Pelukan atau pujian lebih baik.',
      },
    ],
    redFlags: [
      'Belum berjalan sendiri di usia 18 bulan.',
      'Kosakata tidak bertambah, atau belum bisa merangkai 2 kata di usia 24 bulan.',
      'Tidak meniru tindakan atau kata-kata orang lain.',
      'Tidak bisa mengikuti perintah sederhana.',
      LOST_SKILLS,
    ],
    sleep: '11–14 jam per 24 jam termasuk tidur siang (AASM)',
    screen:
      'Bila ada, hanya tontonan berkualitas dan ditonton bersama (AAP); di bawah 2 tahun sebaiknya tanpa waktu layar sambil duduk diam (WHO 2019)',
    feeding:
      'Makanan keluarga bergizi seimbang + 1–2 selingan sehat; ASI lanjut sampai 2 tahun atau lebih; tanpa gula tambahan & minuman manis (WHO, AAP)',
    sources: ['CDC 2022', 'AAP 2018', 'WHO 2019', 'AASM 2016'],
  },
  {
    id: 'stage-24',
    fromMonths: 24,
    label: '2–2½ tahun (24–30 bulan)',
    focus:
      '“Aku bisa sendiri!”: ingin mandiri, belajar bermain di samping anak lain, dan mulai merangkai kata menjadi kalimat pendek.',
    dailyLife: [
      'Berlari, menendang bola, dan naik beberapa anak tangga.',
      'Merangkai dua kata atau lebih dan menunjuk gambar di buku saat ditanya.',
      'Bermain di samping anak lain, tetapi belum pandai berbagi.',
      'Melihat wajah Anda untuk tahu cara bereaksi di situasi baru.',
      'Makan dengan sendok; nafsu makannya bisa berubah-ubah dari hari ke hari.',
    ],
    parentTips: [
      'Ulangi ucapannya dengan kata yang benar: anak bilang “agi nana”, Anda jawab “Mau pisang lagi.”',
      'Dampingi saat bermain dengan anak lain dan contohkan cara bergiliran dan berbagi.',
      'Libatkan dalam tugas kecil: membawa gelas plastik ke meja, menaruh baju di keranjang.',
      'Sediakan makanan sehat dan biarkan anak menentukan seberapa banyak ia makan.',
      'Ajak bermain di luar: taman, jalan kaki, main bola. Usahakan aktif minimal 180 menit sehari (WHO).',
      'Sikat gigi anak 2 kali sehari dengan pasta berfluoride seukuran butir beras, tetap dibantu orang tua.',
    ],
    dos: [
      {
        text: 'Buat sedikit aturan yang sederhana, dan terapkan secara konsisten.',
        why: 'Aturan yang sama setiap hari membuat anak tahu apa yang diharapkan dan mengurangi adu kemauan.',
      },
      {
        text: 'Gunakan time-in (ditemani) atau time-out singkat saat anak lepas kendali.',
        why: 'Jeda yang tenang membantu anak meredakan emosi tanpa disakiti (AAP).',
      },
      {
        text: 'Makan bersama keluarga tanpa layar.',
        why: 'Anak meniru kebiasaan makan orang tua, dan makan bersama memberi waktu untuk mengobrol.',
      },
      {
        text: 'Latih ke toilet bila anak sudah siap, dengan pujian dan tanpa paksaan.',
        why: 'Pendekatan yang positif dan sesuai kesiapan anak membuat prosesnya lebih lancar dan minim stres (AAP).',
      },
    ],
    donts: [
      {
        text: 'Jangan beri layar lebih dari 1 jam sehari.',
        why: 'WHO menganjurkan maksimal 1 jam untuk usia 2–4 tahun. Waktu layar mengurangi waktu bicara, bermain aktif, dan tidur.',
      },
      {
        text: 'Jangan memukul atau membentak.',
        why: 'Hukuman fisik dan verbal yang keras tidak mengajarkan perilaku yang benar dan berkaitan dengan masalah perilaku di kemudian hari (AAP 2018).',
      },
      {
        text: 'Jangan beri obat batuk-pilek bebas atau aspirin.',
        why: 'AAP tidak menganjurkan obat batuk-pilek bebas di bawah 4 tahun karena risiko efek samping. Aspirin berisiko sindrom Reye pada anak.',
      },
      {
        text: 'Jangan lengah saat anak berada di dekat jalan, air, atau tangga.',
        why: 'Anak usia ini cepat berlari tetapi belum mengerti bahaya; cedera bisa terjadi dalam hitungan detik.',
      },
    ],
    redFlags: [
      'Belum bisa merangkai 2 kata (misalnya “mau susu”) di usia 24 bulan.',
      'Tidak meniru tindakan atau kata, atau tidak mengikuti perintah sederhana.',
      'Belum berjalan dengan mantap.',
      'Tidak tahu fungsi benda sehari-hari.',
      LOST_SKILLS,
    ],
    sleep: '11–14 jam per 24 jam termasuk tidur siang (AASM)',
    screen: 'Maksimal 1 jam per hari, makin sedikit makin baik; tontonan berkualitas dan ditemani (WHO 2019, AAP)',
    feeding: 'Menu keluarga bergizi seimbang; air putih dan susu tawar sebagai minuman; hindari minuman manis (WHO, AAP)',
    sources: ['CDC 2022', 'WHO 2019', 'AAP 2018', 'AAPD', 'AASM 2016'],
  },
  {
    id: 'stage-30',
    fromMonths: 30,
    label: '2½–3 tahun (30–36 bulan)',
    focus:
      'Bermain pura-pura dan memecahkan masalah sederhana; mulai bermain bersama anak lain dan banyak bertanya.',
    dailyLife: [
      'Mengucapkan sekitar 50 kata dan kalimat 2–3 kata dengan kata kerja (“adik lari”).',
      'Memakai kata “aku”, “saya”, atau “kita”.',
      'Bermain pura-pura, misalnya menyuapi boneka dengan balok.',
      'Mengikuti perintah dua langkah: “Taruh mainannya, lalu tutup pintu.”',
      'Melompat dengan dua kaki dan melepas baju yang longgar sendiri.',
    ],
    parentTips: [
      'Beri waktu “bermain bebas” agar anak mengikuti minatnya dan mencoba hal baru.',
      'Tanyakan “siapa?”, “apa?”, dan “di mana?” saat membacakan buku.',
      'Beri 2–3 pilihan yang sehat, misalnya camilan atau baju, bukan pilihan tanpa batas.',
      'Ajak bermain dengan anak lain di taman atau PAUD; contohkan cara bergiliran.',
      'Kenalkan kata berlawanan: besar/kecil, cepat/lambat, di dalam/di luar.',
    ],
    dos: [
      {
        text: 'Puji perilaku baik secara spesifik: “Terima kasih sudah memberi mainan ke adik.”',
        why: 'Pujian spesifik mengajarkan apa yang benar dan membuat perilaku itu lebih sering muncul.',
      },
      {
        text: 'Jaga rutinitas tidur yang sama setiap malam.',
        why: 'Jam tidur teratur memudahkan anak tertidur dan mendapat cukup tidur.',
      },
      {
        text: 'Jadikan air putih minuman utama.',
        why: 'Air putih tanpa gula menjaga gigi; minuman manis berkaitan dengan gigi berlubang dan kelebihan berat badan.',
      },
      {
        text: 'Ajarkan nama yang benar untuk semua bagian tubuh, termasuk alat kelamin.',
        why: 'Anak yang tahu nama yang benar lebih mudah bercerita bila ada keluhan kesehatan atau sentuhan yang tidak pantas (AAP).',
      },
    ],
    donts: [
      {
        text: 'Jangan memaksa anak menghabiskan makanan.',
        why: 'Paksaan membuat anak kurang peka pada rasa lapar dan kenyangnya sendiri, dan waktu makan jadi penuh pertengkaran.',
      },
      {
        text: 'Jangan gunakan pukulan atau kata-kata yang merendahkan.',
        why: 'Hal ini tidak mengajarkan perilaku yang benar dan berkaitan dengan masalah perilaku dan emosi di kemudian hari (AAP 2018).',
      },
      {
        text: 'Jangan taruh TV atau gawai di kamar tidur anak.',
        why: 'Layar di kamar membuat anak tidur lebih larut dan lebih sedikit (CDC, AAP).',
      },
      {
        text: 'Jangan beri makanan berisiko tersedak tanpa dipotong: anggur, sosis, kacang utuh.',
        why: 'Saluran napas anak masih kecil; risiko tersedak makanan bulat dan keras tetap tinggi sampai sekitar usia 4–5 tahun.',
      },
    ],
    redFlags: [
      'Bicara sangat sedikit, belum memakai kalimat pendek.',
      'Tidak mengerti perintah sederhana.',
      'Tidak bermain pura-pura atau tidak tertarik pada anak lain.',
      'Sering jatuh atau kesulitan naik tangga.',
      LOST_SKILLS,
    ],
    sleep: '11–14 jam per 24 jam termasuk tidur siang (AASM)',
    screen: 'Maksimal 1 jam per hari, makin sedikit makin baik; tontonan berkualitas dan ditemani (WHO 2019, AAP)',
    feeding:
      'Menu keluarga bergizi seimbang; air putih/susu tawar sebagai minuman; hindari minuman manis; potong makanan berisiko tersedak (WHO, AAP)',
    sources: ['CDC 2022', 'WHO 2019', 'AAP 2018', 'AASM 2016'],
  },
  {
    id: 'stage-36',
    fromMonths: 36,
    label: '3–4 tahun',
    focus:
      'Masa “kenapa?”: rasa ingin tahu besar, imajinasi kaya, dan mulai belajar berteman serta mengelola emosi.',
    dailyLife: [
      'Bercakap bolak-balik dan banyak bertanya “siapa, apa, di mana, kenapa”.',
      'Bicaranya sebagian besar bisa dimengerti orang lain.',
      'Ikut bergabung bermain dengan anak lain.',
      'Tenang kembali dalam sekitar 10 menit setelah ditinggal, misalnya di PAUD.',
      'Menggambar lingkaran bila dicontohkan dan makan dengan garpu.',
    ],
    parentTips: [
      'Bantu anak menyelesaikan masalahnya: tanyakan apa masalahnya, pikirkan solusi bersama, lalu coba.',
      'Beri kata untuk perasaannya dan ajarkan cara tenang: tarik napas dalam, peluk boneka, pergi ke tempat tenang.',
      'Buat sedikit aturan yang jelas, misalnya “tangan untuk bermain lembut”. Bila dilanggar, tunjukkan yang benar.',
      'Libatkan saat memasak: mencuci sayur atau mengaduk adonan.',
      'Main menghitung: anak tangga, jari, buah.',
      'Ajarkan bahwa bagian tubuh yang tertutup pakaian dalam adalah pribadi; ia boleh bilang “tidak” dan harus cerita ke orang tua.',
    ],
    dos: [
      {
        text: 'Jawab pertanyaan “kenapa” dengan sabar; bila tidak tahu, cari jawabannya bersama.',
        why: 'Menanggapi rasa ingin tahu melatih bahasa dan cara berpikir, serta membuat anak merasa didengar.',
      },
      {
        text: 'Gunakan konsekuensi yang wajar dan langsung terkait perilakunya.',
        why: 'Contoh: mainan yang dilempar disimpan sebentar. Anak belajar sebab-akibat tanpa disakiti (AAP).',
      },
      {
        text: 'Sikat gigi 2 kali sehari dengan pasta berfluoride sebesar biji kacang polong, tetap dibantu.',
        why: 'Mulai 3 tahun jumlah ini dianjurkan untuk mencegah gigi berlubang; anak belum bisa menyikat bersih sendiri (AAP).',
      },
      {
        text: 'Ajak bergerak aktif setiap hari, termasuk permainan yang membuat napas lebih cepat.',
        why: 'WHO menganjurkan anak 3–4 tahun aktif 180 menit sehari, dengan minimal 60 menit aktivitas sedang sampai berat.',
      },
    ],
    donts: [
      {
        text: 'Jangan memukul atau mempermalukan anak di depan orang lain.',
        why: 'Hukuman fisik dan mempermalukan tidak mengajarkan perilaku yang benar dan bisa merusak rasa percaya diri anak (AAP 2018).',
      },
      {
        text: 'Jangan taruh layar di kamar tidur anak.',
        why: 'CDC menganjurkan tidak ada layar di kamar anak karena mengganggu tidur.',
      },
      {
        text: 'Jangan tinggalkan anak sendirian di dekat air, walau ia sudah bisa sedikit berenang.',
        why: 'Tenggelam bisa terjadi tanpa suara dalam waktu singkat; les renang tidak menggantikan pengawasan orang dewasa (AAP).',
      },
      {
        text: 'Jangan bonceng anak di motor tanpa helm anak yang pas.',
        why: 'Helm yang pas melindungi kepala anak dari cedera berat saat terjatuh.',
      },
    ],
    redFlags: [
      'Bicara sangat tidak jelas atau belum memakai kalimat.',
      'Tidak mengerti perintah sederhana.',
      'Tidak bermain pura-pura dan tidak mau bermain dengan anak lain.',
      'Tidak mau menatap mata saat diajak berinteraksi.',
      'Sering jatuh atau kesulitan naik-turun tangga.',
      'Mendengkur keras hampir setiap malam, atau napas seperti berhenti sejenak saat tidur.',
      LOST_SKILLS,
    ],
    sleep: '10–13 jam per 24 jam termasuk tidur siang (AASM)',
    screen:
      'Maksimal 1 jam per hari, makin sedikit makin baik, ditemani; tidak ada layar di kamar tidur (WHO 2019, AAP, CDC)',
    feeding:
      'Menu keluarga bergizi seimbang dengan sayur, buah, dan lauk berprotein; air putih sebagai minuman utama; batasi gula dan garam (WHO, AAP)',
    sources: ['CDC 2022', 'WHO 2019', 'AAP 2018', 'AAPD', 'AASM 2016'],
  },
  {
    id: 'stage-48',
    fromMonths: 48,
    label: '4–5 tahun',
    focus:
      'Imajinasi dan pertemanan: senang bermain peran, ingin jadi “penolong”, dan belajar mengikuti aturan bersama.',
    dailyLife: [
      'Bermain peran (guru, pahlawan super, hewan) dan mengajak anak lain bermain.',
      'Menghibur teman yang sedih dan senang membantu.',
      'Berbicara dengan kalimat 4 kata atau lebih dan menceritakan kejadian hari itu.',
      'Menangkap bola besar dan memegang krayon dengan jari, bukan digenggam.',
      'Menyesuaikan perilaku dengan tempat, misalnya di rumah ibadah atau taman.',
    ],
    parentTips: [
      'Ajarkan anak memakai kata untuk meminta: “Boleh aku gantian?”, bukan merebut.',
      'Jelaskan singkat mengapa sesuatu tidak boleh, lalu beri pilihan lain: “Jangan lompat di kasur. Mau main di luar atau menari?”',
      'Beri waktu anak menyelesaikan selisih paham dengan teman; bantu dengan pertanyaan bila buntu.',
      'Libatkan dalam tugas rumah sederhana: memberi makan hewan, mengelap meja.',
      'Bacakan cerita dan tanyakan “Menurutmu, apa yang terjadi selanjutnya?”',
      'Hindari layar 1–2 jam sebelum tidur dan buat rutinitas tidur yang tenang (CDC).',
    ],
    dos: [
      {
        text: 'Akui rasa takutnya dan ajarkan cara mengatasinya.',
        why: 'Takut gelap atau monster wajar di usia ini. Bila diakui dan ditemani, anak belajar mengelola emosinya (CDC).',
      },
      {
        text: 'Ajarkan sentuhan aman dan tidak aman, dan bahwa rahasia tentang sentuhan harus diceritakan.',
        why: 'Pengetahuan ini membantu anak mengenali sentuhan yang tidak pantas dan berani bercerita ke orang dewasa yang ia percaya.',
      },
      {
        text: 'Ajarkan nama lengkapnya dan nama lengkap orang tuanya.',
        why: 'Bila tersesat, anak bisa memberi tahu petugas atau orang dewasa yang menolongnya siapa dirinya (CDC).',
      },
      {
        text: 'Ajak aktif bergerak setiap hari dengan permainan yang ia pilih.',
        why: 'Anak lebih senang bergerak bila boleh memilih. WHO menganjurkan 180 menit aktivitas sehari, termasuk 60 menit sedang sampai berat.',
      },
    ],
    donts: [
      {
        text: 'Jangan memukul atau memberi hukuman yang mempermalukan.',
        why: 'Hukuman fisik dan verbal yang keras tidak efektif jangka panjang dan berkaitan dengan perilaku agresif (AAP 2018).',
      },
      {
        text: 'Jangan biarkan anak bermain di dekat air atau jalan raya tanpa pengawasan.',
        why: 'Anak usia ini belum bisa menilai bahaya lalu lintas dan kedalaman air dengan baik.',
      },
      {
        text: 'Jangan beri layar lebih dari 1 jam sehari.',
        why: 'Waktu layar menggeser waktu bermain aktif, bicara, dan tidur yang penting untuk perkembangan (WHO 2019).',
      },
      {
        text: 'Jangan beri aspirin, atau obat batuk-pilek bebas tanpa saran dokter.',
        why: 'Aspirin pada anak berisiko sindrom Reye (kerusakan hati dan otak). Obat batuk-pilek bebas tidak terbukti bermanfaat pada anak kecil.',
      },
    ],
    redFlags: [
      'Tidak tertarik bermain bersama dan mengabaikan anak lain.',
      'Tidak bisa menceritakan kembali cerita favoritnya.',
      'Tidak bisa mengikuti perintah 3 langkah.',
      'Bicara tidak jelas, atau tidak memakai kata “aku” dan “kamu” dengan benar.',
      'Kesulitan mencoret-coret dengan krayon.',
      'Mendengkur keras hampir setiap malam, atau napas seperti berhenti sejenak saat tidur.',
      LOST_SKILLS,
    ],
    sleep: '10–13 jam per 24 jam termasuk tidur siang (AASM)',
    screen:
      'Maksimal 1 jam per hari dan ditemani (WHO 2019, AAP); tanpa layar 1–2 jam sebelum tidur dan tidak ada layar di kamar (CDC)',
    feeding:
      'Menu keluarga bergizi seimbang; makan bersama; air putih sebagai minuman utama; batasi gula, garam, dan minuman manis (WHO, AAP, CDC)',
    sources: ['CDC 2022', 'WHO 2019', 'AAP 2018', 'AASM 2016'],
  },
  {
    id: 'stage-60',
    fromMonths: 60,
    label: '5–6 tahun',
    focus: 'Siap sekolah: belajar aturan, huruf, dan angka, serta ingin melakukan banyak hal sendiri.',
    dailyLife: [
      'Mengikuti aturan dan bergiliran saat bermain dengan anak lain.',
      'Menceritakan kisah dengan minimal dua kejadian dan bisa bercakap lebih dari tiga kali bolak-balik.',
      'Berhitung sampai 10 dan menulis beberapa huruf namanya.',
      'Fokus 5–10 menit pada kegiatan seperti mendengar cerita atau prakarya.',
      'Kadang membantah untuk merasakan kemandirian.',
    ],
    parentTips: [
      'Biarkan anak melakukan sendiri, misalnya merapikan kasur atau mengancingkan baju, walau belum rapi.',
      'Saat anak membantah, kurangi perhatian pada kata-kata negatifnya dan puji saat ia meminta dengan sopan.',
      'Ajarkan mencari “penolong” bila tersesat: petugas berseragam, kasir, atau ibu yang membawa anak.',
      'Buat rencana penggunaan media untuk seluruh keluarga.',
      'Main permainan dengan aturan: ular tangga, kartu, tebak-tebakan.',
      'Lengkapi imunisasi sesuai jadwal IDAI/Kemenkes sebelum masuk sekolah.',
    ],
    dos: [
      {
        text: 'Ajarkan bahwa anak berkuasa atas tubuhnya dan boleh menolak sentuhan yang tidak aman.',
        why: 'Latih anak berkata “tidak” dan tahu orang dewasa mana yang bisa dimintai tolong (CDC).',
      },
      {
        text: 'Bicarakan perasaan, termasuk perasaan tokoh dalam buku.',
        why: 'Memberi nama pada perasaan membantu anak memahami dan mengendalikan emosinya.',
      },
      {
        text: 'Makan bersama keluarga dengan menu yang sama dan tanpa layar.',
        why: 'Anak meniru pola makan orang tua, dan waktu makan menjadi kesempatan mengobrol (CDC).',
      },
      {
        text: 'Pastikan anak aktif bergerak rata-rata minimal 60 menit sehari.',
        why: 'WHO menganjurkan anak 5–17 tahun beraktivitas sedang sampai berat rata-rata 60 menit sehari untuk jantung, otot, dan tulang.',
      },
    ],
    donts: [
      {
        text: 'Jangan memukul atau mempermalukan saat anak membantah atau berkata kasar.',
        why: 'Hukuman keras memperburuk perilaku. Time-out singkat dan pujian saat ia bersikap sopan lebih efektif (AAP 2018, CDC).',
      },
      {
        text: 'Jangan taruh TV atau gawai di kamar, dan hindari layar 1–2 jam sebelum tidur.',
        why: 'Layar menjelang tidur dan di kamar membuat anak sulit tidur dan kurang tidur (CDC).',
      },
      {
        text: 'Jangan biarkan anak menyeberang jalan atau berenang tanpa pendamping.',
        why: 'Anak usia ini belum bisa menilai kecepatan kendaraan dan kedalaman air dengan baik.',
      },
      {
        text: 'Jangan biasakan minuman manis.',
        why: 'Gula tambahan meningkatkan risiko gigi berlubang dan kelebihan berat badan (WHO).',
      },
    ],
    redFlags: [
      'Sangat penakut, agresif, pemalu, atau sedih secara tidak biasa.',
      'Sangat menarik diri dan jarang aktif.',
      'Mudah teralih dan sulit fokus pada satu kegiatan lebih dari 5 menit.',
      'Tidak bisa menyebutkan nama depan dan nama belakangnya.',
      'Tidak bisa sikat gigi, cuci tangan, atau melepas baju tanpa bantuan.',
      LOST_SKILLS,
    ],
    sleep: '10–13 jam per 24 jam termasuk tidur siang (AASM)',
    screen:
      'Maksimal 1 jam per hari; rencana media keluarga; tanpa layar 1 jam sebelum tidur dan tidak ada layar di kamar (AAP, CDC)',
    feeding:
      'Menu keluarga bergizi seimbang, bekal dan camilan sehat; air putih sebagai minuman utama; batasi gula, garam, dan lemak (WHO, CDC)',
    sources: ['CDC 2022', 'WHO 2020', 'AAP 2018', 'AASM 2016', 'IDAI', 'Kemenkes'],
  },
  {
    id: 'stage-72',
    fromMonths: 72,
    label: '6–8 tahun',
    focus:
      'Masuk dunia sekolah: kemandirian dan pertemanan makin penting. Ini masa penting membangun rasa percaya diri lewat teman, pelajaran, dan olahraga.',
    dailyLife: [
      'Berpakaian sendiri, menangkap bola dengan tangan, dan mengikat tali sepatu.',
      'Ingin lebih mandiri dari orang tua dan mulai memikirkan masa depan.',
      'Makin peduli pada teman dan kerja sama; ingin disukai dan diterima teman.',
      'Kemampuan berpikir berkembang pesat; lebih pandai menceritakan pengalaman dan perasaan.',
      'Mulai lebih peduli pada orang lain, tidak hanya pada diri sendiri.',
    ],
    parentTips: [
      'Tunjukkan kasih sayang dan akui pencapaiannya.',
      'Beri tanggung jawab di rumah, misalnya menata meja makan.',
      'Ngobrol tentang sekolah, teman, dan hal yang ia nantikan.',
      'Kenali guru dan program sekolah agar rumah dan sekolah bisa bekerja sama.',
      'Tetap membaca bersama; saat ia mulai lancar membaca, bergantian membacakan.',
      'Dukung anak menyelesaikan masalahnya sendiri, misalnya selisih paham dengan teman.',
    ],
    dos: [
      {
        text: 'Buat aturan yang jelas dan konsisten, misalnya jam tidur dan lama menonton.',
        why: 'Anak tahu batasnya dengan pasti; aturan yang berubah-ubah memancing tawar-menawar dan konflik (CDC).',
      },
      {
        text: 'Puji usaha, bukan bakat: “Kamu bekerja keras memecahkannya”, bukan “Kamu pintar”.',
        why: 'Pujian pada hal yang dilakukan anak, bukan sifat yang tidak bisa ia ubah, mendorongnya terus mencoba saat sulit (CDC).',
      },
      {
        text: 'Setelah membahas apa yang tidak boleh, bahas juga apa yang sebaiknya dilakukan.',
        why: 'Disiplin bertujuan membimbing dan melindungi, bukan membuat anak merasa buruk tentang dirinya (CDC).',
      },
      {
        text: 'Pastikan anak aktif minimal 60 menit sehari, dengan aktivitas penguat otot dan tulang 3 hari seminggu.',
        why: 'Ini anjuran WHO untuk usia 5–17 tahun demi kesehatan jantung, otot, tulang, dan suasana hati.',
      },
      {
        text: 'Ajarkan keselamatan di jalan dan di air.',
        why: 'Kecelakaan lalu lintas adalah penyebab kematian utama pada anak dan anak muda usia 5–29 tahun (WHO).',
      },
    ],
    donts: [
      {
        text: 'Jangan memukul atau memakai hukuman yang membuat anak malu.',
        why: 'Hukuman semacam itu membuat anak merasa buruk tentang dirinya tanpa mengajarkan perilaku yang benar (AAP 2018, CDC).',
      },
      {
        text: 'Jangan biarkan layar hiburan lebih dari 1–2 jam sehari.',
        why: 'Waktu layar menggeser waktu bergerak, membaca, bermain dengan teman, dan tidur (CDC).',
      },
      {
        text: 'Jangan biarkan anak bersepeda atau dibonceng motor tanpa helm.',
        why: 'Helm yang pas melindungi kepala dari cedera berat saat terjatuh.',
      },
      {
        text: 'Jangan beri aspirin saat anak demam atau flu.',
        why: 'Aspirin pada anak dan remaja berisiko sindrom Reye, kerusakan hati dan otak yang bisa berakibat fatal.',
      },
    ],
    redFlags: [
      'Anak perempuan: payudara mulai tumbuh sebelum usia 8 tahun (kemungkinan pubertas dini).',
      'Anak laki-laki: testis atau penis membesar sebelum usia 9 tahun (kemungkinan pubertas dini).',
      'Sedih, cemas, atau marah berlebihan yang terus-menerus dan mengganggu sekolah atau pertemanan.',
      'Mendengkur keras hampir setiap malam, atau napas seperti berhenti sejenak saat tidur.',
    ],
    sleep: '9–12 jam per 24 jam (AASM)',
    screen:
      'Layar hiburan maks. 1–2 jam/hari (CDC); aturan konsisten, rencana media keluarga, tanpa layar 1 jam sebelum tidur, gawai di luar kamar (AAP)',
    feeding:
      'Perbanyak sayur dan buah; batasi makanan dan jajanan tinggi gula, garam, dan lemak; makan bersama keluarga (CDC, WHO)',
    sources: ['CDC', 'WHO 2020', 'AAP 2018', 'AASM 2016'],
  },
  {
    id: 'stage-108',
    fromMonths: 108,
    label: '9–11 tahun',
    focus:
      'Pertemanan dan tekanan teman sebaya makin kuat. Anak belajar bertanggung jawab seiring makin mandiri, dan tanda pubertas mulai muncul, terutama pada anak perempuan.',
    dailyLife: [
      'Membentuk persahabatan yang lebih dalam, sering dengan teman sesama jenis.',
      'Lebih merasakan tekanan teman sebaya (ikut-ikutan).',
      'Makin sadar akan tubuhnya; masalah citra tubuh dan pola makan kadang mulai muncul.',
      'Menghadapi pelajaran yang lebih sulit; daya fokusnya makin panjang.',
      'Mulai bisa melihat sesuatu dari sudut pandang orang lain.',
    ],
    parentTips: [
      'Luangkan waktu bersama; tanyakan tentang teman, pencapaian, dan tantangan yang ia hadapi.',
      'Kenali teman-temannya dan keluarga mereka.',
      'Bicarakan tekanan teman untuk hal berisiko, seperti merokok, vape, atau tantangan berbahaya.',
      'Libatkan dalam tugas rumah seperti bersih-bersih dan memasak, dan ajarkan mengelola uang saku.',
      'Jelaskan perubahan fisik dan emosi masa pubertas sebelum terjadi. Pubertas umumnya mulai di usia 8–13 tahun (perempuan) dan 9–14 tahun (laki-laki).',
      'Dorong membaca setiap hari dan tanyakan tentang PR-nya.',
    ],
    dos: [
      {
        text: 'Jelaskan alasan di balik aturan, termasuk sikap yang diharapkan saat tidak ada orang dewasa.',
        why: 'Anak yang paham alasannya lebih mampu memutuskan dengan benar saat Anda tidak ada (CDC).',
      },
      {
        text: 'Bantu anak menghargai pencapaiannya sendiri: “Kamu pasti bangga pada dirimu.”',
        why: 'Ini mendorong anak membuat pilihan baik walau tidak ada yang memuji (CDC).',
      },
      {
        text: 'Buat kesepakatan: kapan ia menelepon, di mana bisa ditemui, dan jam berapa pulang.',
        why: 'Kemandirian bertambah sementara pengawasan berkurang; rencana yang jelas menjaga keamanannya (CDC).',
      },
      {
        text: 'Dorong 60 menit aktivitas sehari, termasuk penguat otot (memanjat) dan tulang (lompat tali) 3 hari seminggu.',
        why: 'Kombinasi ini dianjurkan WHO dan CDC untuk jantung, otot, dan tulang yang sehat.',
      },
      {
        text: 'Ajarkan aturan aman di internet: jangan bagikan data pribadi, dan cerita bila ada yang membuat tidak nyaman.',
        why: 'Anak mulai aktif daring (online) dan bisa bertemu orang asing, perundungan, atau konten yang tidak pantas.',
      },
    ],
    donts: [
      {
        text: 'Jangan taruh TV atau gawai di kamar tidur anak.',
        why: 'CDC menganjurkan TV di luar kamar dan layar dibatasi 1–2 jam sehari agar tidur dan aktivitas tidak terganggu.',
      },
      {
        text: 'Jangan menghukum dengan cara yang membuat anak merasa rendah diri.',
        why: 'Anak yang merasa baik tentang dirinya lebih mampu menolak tekanan teman yang negatif (CDC).',
      },
      {
        text: 'Jangan mengomentari berat atau bentuk tubuh anak secara negatif.',
        why: 'Masalah citra tubuh dan pola makan bisa mulai di usia ini; komentar soal berat badan dapat memperburuknya (AAP).',
      },
      {
        text: 'Jangan biarkan anak bersepeda atau dibonceng motor tanpa helm.',
        why: 'Helm melindungi kepala dari cedera berat saat jatuh atau kecelakaan (CDC).',
      },
    ],
    redFlags: [
      'Sangat takut gemuk, diet ketat, sengaja memuntahkan makanan, atau berat badan turun tanpa sebab.',
      'Sedih, cemas, atau mudah marah terus-menerus hingga mengganggu sekolah, tidur, atau pertemanan.',
      'Tiba-tiba menolak sekolah, kehilangan teman, atau barangnya sering hilang/rusak tanpa penjelasan (bisa tanda perundungan).',
      'Bicara tentang ingin mati atau menyakiti diri: segera cari bantuan tenaga kesehatan jiwa.',
    ],
    sleep: '9–12 jam per 24 jam (AASM)',
    screen:
      'Layar hiburan maks. 1–2 jam/hari dan TV di luar kamar (CDC); rencana media keluarga, tanpa layar 1 jam sebelum tidur (AAP)',
    feeding:
      'Banyak sayur dan buah; batasi makanan tinggi gula, garam, dan lemak; siapkan menu sehat untuk makan bersama keluarga (CDC)',
    sources: ['CDC', 'WHO 2020', 'AAP', 'AASM 2016'],
  },
  {
    id: 'stage-144',
    fromMonths: 144,
    label: '12–14 tahun',
    focus:
      'Pubertas: banyak perubahan fisik, emosi, dan sosial. Remaja membangun jati dirinya sendiri, tetapi orang tua tetap sangat penting.',
    dailyLife: [
      'Lebih peduli pada penampilan, bentuk tubuh, dan pakaian.',
      'Suasana hati naik-turun; kadang tampak ketus atau kurang menunjukkan sayang ke orang tua.',
      'Makin dipengaruhi teman sebaya.',
      'Merasa tertekan oleh tugas sekolah yang makin berat.',
      'Mampu berpikir lebih rumit dan punya rasa benar-salah yang lebih kuat.',
    ],
    parentTips: [
      'Bicarakan topik sensitif (rokok, vape, alkohol, narkoba, seks) dengan jujur dan langsung.',
      'Kenali teman-temannya dan tunjukkan minat pada kehidupan sekolahnya.',
      'Hargai pendapatnya dan dengarkan perasaannya, supaya ia tahu Anda benar-benar mendengarkan.',
      'Saat ada konflik, tegaskan tujuannya (nilai, kebersihan, sopan santun), tetapi biarkan remaja ikut menentukan caranya.',
      'Buat aturan jelas saat ia sendirian di rumah: soal tamu, keadaan darurat, PR, dan tugas rumah.',
      'Usahakan makan bersama keluarga secara rutin.',
    ],
    dos: [
      {
        text: 'Tanyakan langsung tentang pikiran bunuh diri bila ia tampak sangat sedih atau murung.',
        why: 'Bertanya tidak menimbulkan pikiran itu, justru menunjukkan Anda peduli. Cari bantuan profesional bila perlu (CDC).',
      },
      {
        text: 'Ketahui di mana ia berada, dengan siapa, dan jam berapa pulang.',
        why: 'Pengawasan yang jelas melindungi remaja dari situasi berbahaya, sambil tetap memberi ruang untuk mandiri (CDC).',
      },
      {
        text: 'Pastikan ia selalu memakai sabuk pengaman dan helm.',
        why: 'Kecelakaan lalu lintas adalah penyebab kematian utama pada usia 5–29 tahun (WHO); cedera saat olahraga dan berkendara juga sering terjadi.',
      },
      {
        text: 'Dorong tidur cukup 8–10 jam dan aktif bergerak 60 menit sehari.',
        why: 'Kurang tidur pada remaja berkaitan dengan masalah konsentrasi, suasana hati, dan kecelakaan (AASM).',
      },
    ],
    donts: [
      {
        text: 'Jangan meremehkan perasaannya (“Ah, begitu saja kok sedih”).',
        why: 'Remaja yang merasa didengar lebih mau bercerita saat menghadapi masalah serius (CDC).',
      },
      {
        text: 'Jangan merokok atau vape di depan anak.',
        why: 'Anak dari orang tua perokok lebih mungkin ikut merokok. Nikotin juga mengganggu perkembangan otak remaja (CDC).',
      },
      {
        text: 'Jangan izinkan remaja mengendarai motor atau mobil sebelum punya SIM (minimal 17 tahun).',
        why: 'Selain melanggar aturan, remaja yang belum siap berkendara berisiko tinggi mengalami kecelakaan.',
      },
      {
        text: 'Jangan biarkan gawai ada di kamar saat jam tidur.',
        why: 'Layar dan notifikasi malam hari memundurkan jam tidur dan mengurangi lama tidur (AAP).',
      },
    ],
    redFlags: [
      'Anak perempuan: payudara belum tumbuh di usia 13 tahun (pubertas terlambat).',
      'Anak laki-laki: testis belum membesar di usia 14 tahun (pubertas terlambat).',
      'Sedih, murung, atau kehilangan minat hampir setiap hari selama lebih dari 2 minggu.',
      'Bicara tentang ingin mati, menyakiti diri, atau ada luka sayatan: segera cari bantuan profesional.',
      'Diet ekstrem, sangat takut gemuk, sengaja muntah, atau berat badan turun drastis.',
      'Tanda pemakaian rokok/vape, alkohol, atau narkoba.',
    ],
    sleep: '9–12 jam per 24 jam sampai usia 12 tahun, lalu 8–10 jam di usia 13–18 tahun (AASM)',
    screen:
      'Layar hiburan maks. 1–2 jam/hari (CDC); tanpa layar 1 jam sebelum tidur dan gawai di luar kamar saat tidur (AAP)',
    feeding:
      'Makan bersama keluarga secara rutin; perbanyak sayur dan buah; batasi minuman manis dan makanan tinggi gula, garam, dan lemak (CDC, WHO)',
    sources: ['CDC', 'WHO', 'AAP', 'AASM 2016'],
  },
  {
    id: 'stage-180',
    fromMonths: 180,
    label: '15–18 tahun',
    focus:
      'Membentuk jati diri dan bersiap dewasa: lebih mandiri, lebih banyak waktu dengan teman, dan mulai memikirkan sekolah lanjutan atau pekerjaan.',
    dailyLife: [
      'Lebih banyak waktu dengan teman, lebih sedikit dengan orang tua.',
      'Lebih tertarik pada hubungan romantis dan seksualitas.',
      'Konflik dengan orang tua biasanya berkurang dibanding awal remaja.',
      'Lebih memikirkan rencana sekolah dan pekerjaan; kebiasaan belajar dan bekerja makin terbentuk.',
      'Bisa mengalami kesedihan atau depresi yang memengaruhi nilai, pergaulan, dan perilaku berisiko.',
    ],
    parentTips: [
      'Dengarkan kekhawatirannya tanpa meremehkan, dan perhatikan perubahan perilakunya.',
      'Dukung kegiatan positif: olahraga, musik, seni, organisasi, atau kegiatan sosial.',
      'Bantu ia merencanakan cara keluar dari situasi sulit, misalnya ada teman memakai narkoba atau ditawari tumpangan oleh pengemudi yang mabuk.',
      'Beri kesempatan mengambil keputusan sendiri, dan tetap siap memberi saran.',
      'Hargai kebutuhannya akan privasi.',
      'Tetap makan bersama keluarga sesering mungkin.',
    ],
    dos: [
      {
        text: 'Tanyakan langsung bila khawatir ia punya pikiran bunuh diri.',
        why: 'Bertanya tidak memicu pikiran bunuh diri dan menunjukkan Anda peduli. Cari bantuan profesional bila perlu (CDC).',
      },
      {
        text: 'Puji usahanya dan rayakan pencapaiannya.',
        why: 'Pengakuan dari orang tua tetap penting bagi rasa percaya diri remaja (CDC).',
      },
      {
        text: 'Ajarkan keselamatan berkendara, dan pastikan ia punya SIM sebelum mengemudi (minimal 17 tahun).',
        why: 'Kecelakaan lalu lintas adalah penyebab kematian utama pada usia 5–29 tahun (WHO). Contohkan tidak memakai ponsel saat menyetir.',
      },
      {
        text: 'Bicarakan dengan jujur tentang narkoba, alkohol, rokok/vape, dan seks berisiko; tanyakan pendapatnya.',
        why: 'Remaja lebih terbuka bila didengarkan dan pertanyaannya dijawab dengan jujur dan langsung (CDC).',
      },
    ],
    donts: [
      {
        text: 'Jangan membaca pesan pribadinya tanpa alasan kuat.',
        why: 'Privasi yang dihargai menjaga kepercayaan (CDC). Tetap ketahui di mana ia berada, dengan siapa, dan kapan pulang.',
      },
      {
        text: 'Jangan abaikan sedih berkepanjangan, menarik diri, atau nilai yang turun drastis.',
        why: 'Bisa jadi tanda depresi, yang dapat mendorong pemakaian alkohol/narkoba dan perilaku berisiko (CDC). Bantuan sejak dini lebih efektif.',
      },
      {
        text: 'Jangan izinkan ia ikut dengan pengemudi yang mabuk atau mengantuk.',
        why: 'Alkohol dan kantuk memperlambat reaksi dan menaikkan risiko kecelakaan. Sepakati bahwa ia selalu boleh menelepon untuk dijemput.',
      },
      {
        text: 'Jangan biarkan gawai menemani tidur.',
        why: 'Remaja butuh 8–10 jam tidur (AASM); gawai di kamar memundurkan jam tidur (AAP).',
      },
    ],
    redFlags: [
      'Anak perempuan belum menstruasi di usia 15 tahun.',
      'Sedih atau murung hampir setiap hari lebih dari 2 minggu, atau kehilangan minat pada hal yang biasa disukai.',
      'Bicara tentang ingin mati, menyakiti diri, atau membagikan barang berharganya: segera cari bantuan profesional.',
      'Diet ekstrem, sengaja muntah, olahraga berlebihan, atau berat badan turun drastis.',
      'Tanda pemakaian alkohol, rokok/vape, atau narkoba.',
    ],
    sleep: '8–10 jam per 24 jam (AASM)',
    screen:
      'Aturan yang konsisten; tanpa layar 1 jam sebelum tidur dan gawai di luar kamar (AAP); bijak memilih apa yang diunggah dan lama waktu daring (CDC)',
    feeding:
      'Makan teratur bersama keluarga; banyak sayur dan buah; batasi minuman manis dan makanan tinggi gula, garam, dan lemak (CDC, WHO)',
    sources: ['CDC', 'WHO', 'AAP', 'AASM 2016'],
  },
];
