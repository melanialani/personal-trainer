export interface Reflection {
  /** Short meditation on the day's readings (Indonesian). */
  renungan: string;
  /** One or two questions for personal reflection. */
  refleksi: string[];
}

/**
 * Short reflections written for this app on the readings of each lectionary day (not official Church texts).
 * Keys: lectionary keys (see `lib/liturgicalCalendar`); Sunday-cycle days are prefixed with the cycle ("A:ot2").
 * Ordinary Time weekdays share one reflection for Years I and II (it follows the Gospel).
 */
export const REFLECTIONS: Record<string, Reflection> = {
  "A:adv1": {
    renungan: "Adven dibuka dengan ajakan untuk berjaga-jaga. Yesus mengingatkan bahwa pada zaman Nuh orang sibuk makan, minum, dan kawin, lalu tidak menyadari apa yang datang. Hal-hal itu sendiri tidak salah; yang berbahaya adalah hidup yang berjalan otomatis tanpa memberi tempat bagi Tuhan. Nabi Yesaya melukiskan bangsa-bangsa yang berjalan menuju gunung Tuhan dan menempa pedang menjadi mata bajak. Berjaga berarti mulai berjalan ke arah itu sekarang juga: berdamai, berdoa, menata hati. Masa Adven ini, kita dapat menyisihkan beberapa menit setiap hari untuk hening dan bertanya, di mana Tuhan sedang datang dalam hidupku hari ini?",
    refleksi: ["Kesibukan apa yang paling sering membuatku lupa bahwa Tuhan sedang datang?", "Pedang apa dalam hatiku yang perlu kutempa menjadi alat damai?"],
  },
  "A:adv2": {
    renungan: "Yohanes Pembaptis muncul di padang gurun dengan pesan yang lugas: bertobatlah, sebab Kerajaan Surga sudah dekat. Ia tidak sibuk menyenangkan orang, bahkan menegur mereka yang merasa aman karena keturunan Abraham. Pertobatan yang ia minta harus tampak dalam buah, bukan hanya dalam kata. Yesaya menubuatkan tunas dari tunggul Isai, Raja yang membawa keadilan sehingga serigala dan domba dapat hidup berdampingan. Damai seperti itu dimulai dari hati yang mau diluruskan. Dalam Adven ini, kita diajak menemukan satu kebiasaan yang perlu dibereskan, entah sikap kasar, gengsi, atau sikap menunda, lalu sungguh menyiapkan jalan bagi Tuhan lewat langkah kecil yang nyata.",
    refleksi: ["Buah pertobatan apa yang dapat kutunjukkan minggu ini?", "Bagian mana dalam hidupku yang masih berliku dan perlu diluruskan bagi Tuhan?"],
  },
  "A:adv3": {
    renungan: "Dari dalam penjara, Yohanes bertanya apakah Yesus sungguh Dia yang akan datang. Yesus tidak menjawab dengan teori, melainkan menunjuk tanda: orang buta melihat, orang lumpuh berjalan, orang miskin mendengar kabar baik. Inilah sukacita Minggu Gaudete. Yesaya pun menggambarkan padang gurun yang berbunga dan tangan lemah yang dikuatkan. Iman kadang diuji oleh keraguan, seperti yang dialami Yohanes, dan itu tidak membuat Tuhan menjauh. Rasul Yakobus mengajak kita bersabar seperti petani menanti hujan. Sukacita Kristiani lahir saat kita melihat karya Allah yang sederhana di sekitar kita dan ikut menjadi tanda bagi orang lain.",
    refleksi: ["Tanda karya Tuhan apa yang kusaksikan minggu ini?", "Kepada siapa aku dapat menjadi kabar baik yang menguatkan hari ini?"],
  },
  "A:adv4": {
    renungan: "Yusuf menghadapi kenyataan yang tidak ia rencanakan. Ia orang benar yang ingin melindungi Maria tanpa mempermalukannya. Lalu dalam mimpi, malaikat menyingkapkan bahwa Anak itu berasal dari Roh Kudus dan akan dinamai Yesus, sebab Ia menyelamatkan umat-Nya. Yusuf bangun dan melakukan apa yang diperintahkan. Tidak ada satu kata pun darinya yang dicatat, hanya ketaatan yang tenang. Nubuat Yesaya tentang Imanuel, Allah beserta kita, terpenuhi lewat kesediaan seorang tukang kayu yang sederhana. Menjelang Natal, kita belajar dari Yusuf: mendengarkan Tuhan di tengah kebingungan, lalu bertindak dengan kasih, meskipun rencana kita sendiri harus dilepaskan.",
    refleksi: ["Rencana pribadi apa yang mungkin perlu kulepaskan agar kehendak Tuhan terjadi?", "Bagaimana aku dapat menjaga martabat orang lain seperti Yusuf menjaga Maria?"],
  },
  "A:christmas": {
    renungan: "Injil Yohanes tidak bercerita tentang palungan atau gembala, tetapi membawa kita ke awal segala sesuatu: Firman yang bersama Allah dan adalah Allah. Firman itu menjadi daging dan tinggal di antara kita. Inilah inti Natal: Allah tidak mengasihi dari kejauhan, Ia datang dan berbagi hidup manusia. Terang-Nya bercahaya dalam kegelapan, dan kegelapan tidak menguasainya. Yesaya bersorak tentang kaki pembawa kabar damai di atas gunung-gunung. Natal mengajak kita menerima terang itu dan membiarkannya menerangi rumah, keluarga, dan relasi yang retak. Siapa pun yang menerima-Nya diberi kuasa menjadi anak-anak Allah.",
    refleksi: ["Sudut gelap mana dalam hidupku yang ingin kuserahkan pada terang Kristus?", "Bagaimana aku dapat membawa kabar damai kepada keluargaku pada hari Natal ini?"],
  },
  "A:holyfamily": {
    renungan: "Keluarga Kudus tidak luput dari bahaya. Herodes mengancam nyawa Sang Anak, dan Yusuf harus membawa Maria serta Yesus mengungsi ke Mesir, lalu kembali dan menetap di Nazaret. Kekudusan keluarga ini bukan berarti hidup tanpa masalah, melainkan kesediaan untuk mendengar Tuhan dan saling melindungi di tengah ketidakpastian. Putra Sirakh mengajak anak menghormati orang tua, juga saat mereka menua dan lemah. Paulus menasihati keluarga untuk saling mengenakan belas kasihan, kesabaran, dan pengampunan. Hari ini kita dapat mendoakan keluarga kita sendiri dan juga keluarga yang terpaksa mengungsi, lalu menunjukkan satu tindakan sabar di rumah.",
    refleksi: ["Anggota keluarga mana yang paling membutuhkan kesabaranku saat ini?", "Bagaimana aku dapat menghormati orang tuaku dengan cara yang nyata?"],
  },
  "A:marymother": {
    renungan: "Para gembala bergegas ke Betlehem dan menceritakan apa yang mereka dengar tentang Anak itu. Semua orang heran, tetapi Maria menyimpan segala perkara itu dan merenungkannya dalam hati. Di awal tahun baru, Gereja merayakan Maria sebagai Bunda Allah dan menawarkan dia sebagai teladan. Ia tidak tergesa menyimpulkan, melainkan membiarkan Allah berbicara perlahan. Berkat dalam Kitab Bilangan, agar Tuhan menyinari kita dengan wajah-Nya dan memberi damai, menjadi doa untuk tahun yang baru. Kita dapat memulai tahun ini dengan kebiasaan sederhana seperti Maria: setiap malam meninjau hari dan menemukan jejak Tuhan di dalamnya.",
    refleksi: ["Peristiwa apa dari tahun lalu yang perlu kurenungkan dalam hati bersama Tuhan?", "Berkat apa yang ingin kumohonkan untuk tahun yang baru ini?"],
  },
  "A:epiphany": {
    renungan: "Orang-orang Majus datang dari Timur, mengikuti bintang untuk mencari Raja yang baru lahir. Mereka orang asing, namun justru mereka yang bersujud, sementara Herodes di Yerusalem gelisah dan merasa terancam. Penampakan Tuhan menunjukkan bahwa Kristus datang bagi semua bangsa, seperti dinubuatkan Yesaya: bangsa-bangsa berjalan menuju terang-Nya. Para Majus mempersembahkan emas, kemenyan, dan mur, lalu pulang melalui jalan lain. Perjumpaan dengan Yesus mengubah arah hidup. Kita pun diajak mencari Tuhan dengan tekun, mempersembahkan yang terbaik dari diri kita, dan berani mengambil jalan baru setelah bertemu dengan-Nya.",
    refleksi: ["Bintang apa yang selama ini Tuhan pakai untuk menuntunku kepada-Nya?", "Persembahan apa yang dapat kuberikan kepada Yesus tahun ini?"],
  },
  "A:baptism": {
    renungan: "Yesus datang kepada Yohanes untuk dibaptis. Yohanes menolak, merasa dirinya yang perlu dibaptis, tetapi Yesus memilih berdiri bersama orang-orang berdosa yang antre di sungai Yordan. Saat Ia keluar dari air, langit terbuka, Roh Allah turun seperti burung merpati, dan suara Bapa menyatakan Dia sebagai Anak yang dikasihi. Yesaya melukiskan Hamba Tuhan yang lembut, yang tidak mematahkan buluh yang patah terkulai. Baptisan kita pun menjadikan kita anak-anak yang dikasihi Allah. Identitas ini mendahului segala prestasi. Dari kesadaran itu, kita dapat memperlakukan orang yang rapuh dengan kelembutan yang sama.",
    refleksi: ["Apakah aku sungguh percaya bahwa aku dikasihi Allah apa adanya?", "Siapa buluh yang patah di sekitarku yang perlu kuperlakukan dengan lembut?"],
  },
  "A:ot-2": {
    renungan: "Yohanes melihat Yesus datang dan berseru bahwa Dialah Anak Domba Allah yang menghapus dosa dunia. Yohanes mengaku awalnya tidak mengenal-Nya, tetapi Roh yang turun atas Yesus menjadi tanda baginya. Kesaksian Yohanes sederhana: ia menunjuk kepada Yesus, bukan kepada dirinya. Dalam Yesaya, Hamba Tuhan diutus menjadi terang bagi bangsa-bangsa. Setiap kali Misa, kita mendengar kata-kata Yohanes ini sebelum komuni. Menjadi saksi berarti membantu orang lain melihat Yesus, lewat kata yang jujur dan hidup yang konsisten. Kita bisa bertanya, apakah sikapku hari ini menunjuk kepada Kristus atau hanya kepada diriku sendiri?",
    refleksi: ["Bagaimana hidupku dapat menunjuk orang lain kepada Yesus?", "Kapan terakhir aku menyadari kehadiran Anak Domba Allah dalam Ekaristi?"],
  },
  "A:ot-3": {
    renungan: "Yesus memulai karya-Nya di Galilea, wilayah yang dianggap pinggiran. Di sana terpenuhilah nubuat Yesaya: bangsa yang berjalan dalam kegelapan melihat terang yang besar. Yesus mewartakan pertobatan, lalu memanggil Petrus, Andreas, Yakobus, dan Yohanes yang sedang bekerja sebagai nelayan. Mereka segera meninggalkan jala dan mengikuti Dia. Tuhan memanggil di tengah pekerjaan sehari-hari, bukan hanya di tempat ibadat. Paulus mengingatkan jemaat Korintus agar tidak terpecah, sebab Kristus tidak terbagi-bagi. Panggilan untuk mengikuti Yesus juga panggilan untuk bersatu. Di tempat kerja dan di rumah, kita dapat menjawab panggilan itu dengan kesetiaan kecil setiap hari.",
    refleksi: ["Jala apa yang masih kupegang erat sehingga sulit mengikuti Yesus?", "Bagaimana aku dapat menjadi pembawa persatuan di komunitasku?"],
  },
  "A:ot-4": {
    renungan: "Di atas bukit, Yesus mengajar tentang kebahagiaan yang lain dari ukuran dunia. Berbahagialah yang miskin di hadapan Allah, yang berdukacita, yang lemah lembut, yang lapar akan kebenaran, yang murah hati, yang suci hatinya, yang membawa damai. Zefanya berbicara tentang umat yang rendah hati dan miskin yang berlindung pada nama Tuhan. Paulus menegaskan bahwa Allah memilih yang lemah dan dianggap bodoh oleh dunia. Sabda Bahagia bukan daftar tuntutan yang berat, melainkan potret hati Yesus sendiri. Kita dapat memilih satu sabda bahagia dan mencoba menghidupinya minggu ini, misalnya menjadi pembawa damai dalam satu perselisihan.",
    refleksi: ["Sabda Bahagia mana yang paling menantang bagiku saat ini?", "Di mana aku dapat menjadi pembawa damai minggu ini?"],
  },
  "A:ot-5": {
    renungan: "Yesus menyebut murid-murid-Nya garam dunia dan terang dunia. Garam bekerja diam-diam, memberi rasa dan mengawetkan. Terang tidak untuk disembunyikan di bawah gantang, melainkan untuk menerangi seisi rumah. Yesaya menjelaskan bagaimana terang itu bersinar: membagi roti kepada yang lapar, memberi tumpangan kepada yang tak berumah, tidak menyembunyikan diri terhadap saudara sendiri. Jadi terang murid Kristus bukan soal tampil hebat, melainkan perbuatan baik yang membuat orang memuliakan Bapa. Paulus pun datang tanpa kata-kata yang memukau, hanya dengan kekuatan Roh. Hari ini, satu tindakan kasih yang tulus dapat menjadi garam dan terang bagi seseorang.",
    refleksi: ["Apakah kehadiranku memberi rasa yang baik bagi orang di sekitarku?", "Perbuatan baik apa yang dapat kulakukan hari ini tanpa mencari pujian?"],
  },
  "A:ot-6": {
    renungan: "Yesus datang bukan untuk meniadakan hukum Taurat, melainkan menggenapinya. Ia membawa hukum itu ke dalam hati: bukan hanya jangan membunuh, tetapi juga jangan menyimpan amarah; bukan hanya jangan berzina, tetapi jaga juga pandangan dan keinginan. Ia meminta kita berdamai dengan saudara sebelum membawa persembahan, dan berkata jujur sehingga ya berarti ya. Putra Sirakh mengingatkan bahwa di hadapan kita terbentang pilihan antara hidup dan mati, dan kita bebas memilih. Iman yang matang tidak berhenti pada aturan minimal. Hari ini kita dapat memulai dari satu hal: menyelesaikan satu konflik atau berbicara lebih jujur.",
    refleksi: ["Dengan siapa aku perlu berdamai sebelum datang ke altar?", "Apakah perkataanku sungguh dapat dipercaya, ya berarti ya?"],
  },
  "A:ot-7": {
    renungan: "Yesus meminta sesuatu yang terasa mustahil: tidak membalas kejahatan, memberi pipi yang lain, berjalan dua mil, mengasihi musuh dan mendoakan yang menganiaya. Alasannya adalah Bapa sendiri, yang menerbitkan matahari bagi orang jahat dan orang baik. Kitab Imamat sudah mengajak umat kudus karena Tuhan kudus, tidak menaruh dendam dan mengasihi sesama seperti diri sendiri. Kasih seperti ini bukan kelemahan, melainkan kebebasan dari lingkaran balas dendam. Kita mungkin belum mampu langsung mengasihi musuh, tetapi kita dapat mulai mendoakan dia dengan jujur. Doa perlahan mengubah hati kita lebih dulu.",
    refleksi: ["Siapa orang yang sulit kukasihi yang dapat kudoakan hari ini?", "Dendam apa yang perlu kulepaskan agar hatiku lebih merdeka?"],
  },
  "A:ot-8": {
    renungan: "Tidak ada yang dapat melayani dua tuan, kata Yesus, Allah dan mamon. Lalu Ia mengajak kita melihat burung di langit dan bunga bakung di ladang. Mereka tidak cemas, namun Bapa memelihara mereka. Kekhawatiran sering lahir saat kita menggantungkan rasa aman pada harta dan rencana sendiri. Yesaya memakai gambaran yang menyentuh: seorang ibu mungkin melupakan anaknya, tetapi Tuhan tidak akan melupakan kita. Yesus tidak meminta kita malas bekerja, melainkan mencari dahulu Kerajaan Allah dan kebenaran-Nya. Hari ini kita dapat menyerahkan satu kekhawatiran secara khusus dalam doa dan menjalani hari ini saja dengan tenang.",
    refleksi: ["Kekhawatiran apa yang paling menguasai pikiranku akhir-akhir ini?", "Apa artinya mencari dahulu Kerajaan Allah dalam keputusanku minggu ini?"],
  },
  "A:ot-9": {
    renungan: "Tidak setiap orang yang berseru Tuhan, Tuhan akan masuk Kerajaan Surga, tetapi dia yang melakukan kehendak Bapa. Yesus menutup khotbah di bukit dengan perumpamaan dua rumah. Keduanya diterpa hujan, banjir, dan angin yang sama. Bedanya ada pada fondasi: satu di atas batu, satu di atas pasir. Musa juga menghadapkan umat pada berkat dan kutuk, tergantung apakah mereka mendengarkan perintah Tuhan. Iman bukan sekadar kata yang saleh, tetapi mendengar sabda lalu melakukannya. Badai pasti datang dalam hidup siapa pun. Yang menentukan adalah apakah kita sudah membangun hidup di atas sabda Tuhan jauh sebelum badai tiba.",
    refleksi: ["Sabda Tuhan mana yang sudah kudengar tetapi belum kulakukan?", "Di atas apa sebenarnya aku membangun rasa amanku?"],
  },
  "A:ot-10": {
    renungan: "Yesus melihat Matius duduk di rumah cukai dan berkata, ikutlah Aku. Matius berdiri dan mengikuti-Nya. Lalu Yesus makan bersama pemungut cukai dan orang berdosa, membuat orang Farisi heran. Jawaban-Nya jelas: yang memerlukan tabib adalah orang sakit, dan Allah menghendaki belas kasihan, bukan persembahan. Kata-kata itu berasal dari nabi Hosea, yang mengeluh bahwa kasih umat seperti embun pagi yang cepat hilang. Yesus tidak menunggu Matius menjadi baik dulu sebelum memanggilnya. Kita yang sudah lama di Gereja diajak tidak menutup meja bagi mereka yang dianggap tidak layak, sebab kita pun dipanggil karena belas kasihan.",
    refleksi: ["Siapa yang selama ini kuanggap tidak layak duduk semeja denganku?", "Bagaimana aku dapat mengutamakan belas kasihan daripada penilaian hari ini?"],
  },
  "A:ot-11": {
    renungan: "Yesus melihat orang banyak yang lelah dan terlantar seperti domba tanpa gembala, dan hati-Nya tergerak oleh belas kasihan. Ia meminta para murid berdoa agar Tuhan mengirim pekerja untuk tuaian, lalu Ia sendiri mengutus kedua belas rasul. Mereka menerima dengan cuma-cuma dan diminta memberi dengan cuma-cuma. Dalam Kitab Keluaran, Allah mengingatkan Israel bahwa Ia telah mendukung mereka seperti di atas sayap rajawali dan menjadikan mereka umat kesayangan-Nya. Belas kasihan yang kita terima adalah dasar perutusan. Setiap orang beriman dapat menjadi pekerja tuaian di tempatnya sendiri, mulai dari memperhatikan orang yang tampak lelah.",
    refleksi: ["Karunia apa yang telah kuterima dengan cuma-cuma dan dapat kubagikan?", "Siapa di sekitarku yang tampak lelah dan butuh perhatian?"],
  },
  "A:ot-12": {
    renungan: "Tiga kali Yesus berkata, jangan takut. Ia mengutus murid ke dunia yang tidak selalu ramah, tetapi mengingatkan bahwa bahkan burung pipit yang murah harganya tidak jatuh tanpa sepengetahuan Bapa, dan rambut kepala kita pun terhitung. Yeremia mengalami bisik-bisik dan ancaman, namun ia berkata Tuhan menyertainya seperti pahlawan yang perkasa. Ketakutan sering membuat kita diam ketika seharusnya bersaksi tentang kebenaran. Iman tidak menghapus rasa takut, tetapi menaruhnya di tangan Bapa yang peduli. Hari ini kita dapat mengingat bahwa kita berharga di mata-Nya, lalu berani berkata benar dengan sikap yang tetap lembut.",
    refleksi: ["Ketakutan apa yang paling sering membuatku diam?", "Bagaimana kesadaran bahwa aku berharga bagi Bapa mengubah caraku menghadapi hari ini?"],
  },
  "A:ot-13": {
    renungan: "Mengikuti Yesus menuntut prioritas yang jelas: Ia harus ditempatkan di atas segala relasi, bahkan di atas hidup sendiri. Namun Yesus juga memuliakan hal yang sangat sederhana, secangkir air sejuk yang diberikan kepada murid-Nya tidak akan kehilangan upah. Kisah perempuan Sunem menggambarkannya: ia menyediakan kamar kecil bagi Elisa, dan keramahannya dibalas dengan karunia seorang anak. Paulus mengingatkan bahwa lewat baptisan kita sudah mati bagi dosa dan hidup bagi Allah. Hidup baru itu terlihat dalam keramahan. Kita dapat membuka rumah dan hati bagi orang lain lewat hal kecil, seperti menyambut tamu atau mendengarkan dengan sabar.",
    refleksi: ["Apakah Yesus sungguh mendapat tempat pertama dalam keputusanku?", "Secangkir air sejuk apa yang dapat kuberikan kepada seseorang hari ini?"],
  },
  "A:ot-14": {
    renungan: "Yesus bersyukur kepada Bapa karena hal-hal Kerajaan disembunyikan dari orang bijak dan cerdik, tetapi dinyatakan kepada orang kecil. Lalu Ia mengundang semua yang letih lesu dan berbeban berat untuk datang kepada-Nya. Kuk-Nya enak dan beban-Nya ringan, sebab Ia lemah lembut dan rendah hati. Zakharia menubuatkan Raja yang datang dengan rendah hati, menunggang keledai, membawa damai. Tuhan tidak menambah beban kita dengan tuntutan yang menekan. Ia mengajak kita berjalan bersama-Nya, belajar dari hati-Nya. Saat merasa lelah, kita dapat berhenti sejenak, datang kepada-Nya dalam doa sederhana, dan menyerahkan beban yang terlalu lama dipikul sendirian.",
    refleksi: ["Beban apa yang selama ini kupikul sendiri tanpa kuserahkan kepada Yesus?", "Bagaimana aku dapat belajar kelemahlembutan dari hati Yesus minggu ini?"],
  },
  "A:ot-15": {
    renungan: "Seorang penabur menaburkan benih, dan benih itu jatuh di pinggir jalan, di tanah berbatu, di antara semak duri, dan di tanah yang baik. Benihnya sama, yang berbeda adalah tanahnya. Yesus menjelaskan bahwa benih itu adalah sabda Kerajaan. Sabda dapat dirampas sebelum berakar, layu karena kesulitan, atau terhimpit oleh kekhawatiran dan tipu daya kekayaan. Yesaya meyakinkan bahwa sabda Tuhan seperti hujan yang tidak kembali dengan sia-sia. Tuhan setia menabur, dan kita diajak menjadi tanah yang mau diolah. Caranya sederhana: membaca sabda dengan tenang, menyimpannya dalam hati, dan membiarkannya berbuah dalam tindakan sehari-hari.",
    refleksi: ["Tanah seperti apa hatiku saat ini ketika mendengar sabda Tuhan?", "Semak duri apa yang paling sering menghimpit sabda dalam hidupku?"],
  },
  "A:ot-16": {
    renungan: "Gandum dan lalang tumbuh bersama di ladang yang sama. Para hamba ingin segera mencabut lalang, tetapi tuan ladang meminta mereka menunggu sampai musim menuai, supaya gandum tidak ikut tercabut. Allah sabar terhadap dunia yang campur aduk, dan juga terhadap hati kita yang tidak selalu bersih. Kitab Kebijaksanaan memuji Allah yang berkuasa namun memerintah dengan kelembutan dan memberi kesempatan untuk bertobat. Perumpamaan biji sesawi dan ragi menambahkan harapan: Kerajaan Allah bertumbuh diam-diam. Kita diajak tidak cepat menghakimi orang lain, sambil tekun merawat gandum yang baik dalam diri kita sendiri.",
    refleksi: ["Apakah aku cenderung cepat mencabut lalang dalam diri orang lain?", "Kebaikan kecil apa yang sedang Tuhan tumbuhkan diam-diam dalam diriku?"],
  },
  "A:ot-17": {
    renungan: "Seseorang menemukan harta terpendam di ladang, dan dengan sukacita ia menjual seluruh miliknya untuk membeli ladang itu. Seorang pedagang menemukan mutiara yang sangat berharga dan melakukan hal yang sama. Kerajaan Surga begitu bernilai sehingga melepaskan hal lain terasa ringan, bukan karena terpaksa tetapi karena gembira. Salomo, saat diberi kesempatan meminta apa saja, memohon hati yang paham membedakan yang baik dan yang jahat. Kebijaksanaan sejati adalah mengenali apa yang paling berharga. Hari ini kita dapat bertanya: apa yang sungguh menjadi mutiara dalam hidupku, dan apakah waktuku mencerminkan hal itu?",
    refleksi: ["Apa yang sungguh menjadi harta paling berharga dalam hidupku?", "Jika Tuhan bertanya apa yang kuminta, apa jawabanku hari ini?"],
  },
  "A:ot-18": {
    renungan: "Yesus ingin menyendiri setelah mendengar kematian Yohanes Pembaptis, tetapi orang banyak mengikuti-Nya. Ia tergerak oleh belas kasihan dan menyembuhkan yang sakit. Ketika hari mulai malam, para murid ingin menyuruh orang pergi. Yesus justru berkata, kamu harus memberi mereka makan. Lima roti dan dua ikan yang tampak tidak berarti, setelah diberkati, cukup untuk ribuan orang dan masih tersisa. Yesaya mengundang semua yang haus untuk datang dan makan tanpa bayar. Tuhan tidak meminta kita memiliki banyak, Ia meminta kita menyerahkan yang sedikit. Apa yang kita bagikan dengan tulus dapat menjadi berkat yang melampaui perhitungan.",
    refleksi: ["Lima roti dan dua ikan apa yang dapat kuserahkan kepada Tuhan hari ini?", "Kapan aku tergoda menyuruh orang yang membutuhkan untuk pergi?"],
  },
  "A:ot-19": {
    renungan: "Di tengah malam dan angin sakal, para murid melihat Yesus berjalan di atas air. Petrus memberanikan diri melangkah keluar perahu, dan selama matanya tertuju pada Yesus ia dapat berjalan. Ketika ia memperhatikan angin, ia mulai tenggelam dan berteriak, Tuhan, tolonglah aku. Yesus segera mengulurkan tangan. Elia pun menemukan Tuhan bukan dalam angin besar, gempa, atau api, melainkan dalam bunyi angin sepoi-sepoi. Tuhan sering hadir dengan tenang di tengah badai. Iman yang kecil tetap dapat berseru meminta tolong, dan seruan itu tidak diabaikan. Hari ini kita dapat mengalihkan pandangan dari angin kepada Yesus.",
    refleksi: ["Angin apa yang membuatku melepaskan pandangan dari Yesus?", "Apakah aku memberi ruang hening untuk mendengar Tuhan yang berbicara dengan lembut?"],
  },
  "A:ot-20": {
    renungan: "Seorang perempuan Kanaan, orang asing, berseru meminta Yesus menyembuhkan anaknya. Awalnya Yesus diam, para murid ingin mengusirnya, dan jawaban Yesus terdengar keras. Namun perempuan itu tidak menyerah. Dengan rendah hati ia berkata bahwa anjing pun makan remah-remah dari meja tuannya. Yesus memuji imannya yang besar, dan anaknya sembuh. Yesaya sudah menubuatkan bahwa rumah Tuhan akan disebut rumah doa bagi segala bangsa. Kisah ini mengajarkan doa yang tekun dan rendah hati, dan juga mengingatkan bahwa kasih Allah melampaui batas suku dan kelompok. Kita diajak tidak mudah menyerah dalam doa dan tidak menutup pintu bagi orang yang berbeda.",
    refleksi: ["Doa apa yang hampir kuhentikan karena terasa tidak dijawab?", "Siapa orang asing yang perlu kusambut dengan lebih terbuka?"],
  },
  "A:ot-21": {
    renungan: "Yesus bertanya kepada murid-murid, apa kata orang tentang Anak Manusia, lalu menajamkan pertanyaan itu: menurut kamu, siapakah Aku? Petrus menjawab bahwa Yesus adalah Mesias, Anak Allah yang hidup. Yesus menyebut pengakuan itu karunia dari Bapa dan menjadikan Petrus batu karang tempat Gereja dibangun, serta memberinya kunci Kerajaan Surga. Yesaya berbicara tentang kunci rumah Daud yang diserahkan kepada seorang pelayan. Pertanyaan Yesus tetap berlaku bagi setiap orang. Bukan cukup mengetahui pendapat orang lain atau rumusan iman, tetapi menjawab secara pribadi. Jawaban itu tampak dalam cara kita hidup dan dalam kesetiaan pada Gereja.",
    refleksi: ["Jika Yesus bertanya kepadaku hari ini, siapakah Dia bagiku?", "Bagaimana aku dapat mendoakan dan mendukung para gembala Gereja?"],
  },
  "A:ot-22": {
    renungan: "Baru saja Petrus dipuji, kini ia ditegur. Ketika Yesus berbicara tentang penderitaan yang akan Ia alami, Petrus menarik-Nya ke samping dan menolak jalan itu. Yesus menyebut pikiran Petrus sebagai pikiran manusia, bukan pikiran Allah. Lalu Ia berkata bahwa siapa yang mau mengikuti-Nya harus menyangkal diri dan memikul salib. Yeremia pun pernah mengeluh karena panggilannya membawa cemooh, tetapi sabda Tuhan menjadi seperti api dalam tulangnya. Paulus mengajak kita mempersembahkan tubuh sebagai persembahan yang hidup. Salib bukan untuk dicari-cari, tetapi untuk diterima dengan kasih ketika ia datang dalam tugas dan relasi sehari-hari.",
    refleksi: ["Salib apa dalam hidupku yang masih ingin kuhindari?", "Dalam hal apa pikiranku lebih mengikuti dunia daripada pikiran Allah?"],
  },
  "A:ot-23": {
    renungan: "Yesus memberi cara yang bijaksana untuk menghadapi saudara yang bersalah: tegurlah dia di bawah empat mata, lalu bila perlu bawa satu dua orang, baru kemudian jemaat. Tujuannya bukan mempermalukan, melainkan mendapatkan kembali saudara itu. Yehezkiel diangkat menjadi penjaga yang wajib memperingatkan, karena diam juga bisa menjadi kelalaian. Paulus merangkum semuanya: kasih adalah kegenapan hukum. Yesus juga menjanjikan bahwa di mana dua atau tiga orang berkumpul dalam nama-Nya, Ia hadir. Kita diajak berani berbicara langsung dengan kasih, bukan membicarakan orang di belakang, dan berdoa bersama agar teguran berbuah rekonsiliasi.",
    refleksi: ["Apakah aku lebih sering menegur langsung atau membicarakan orang di belakangnya?", "Siapa saudara yang perlu kudekati dengan kasih untuk berdamai?"],
  },
  "A:ot-24": {
    renungan: "Petrus bertanya, berapa kali ia harus mengampuni, sampai tujuh kali? Yesus menjawab, sampai tujuh puluh kali tujuh kali. Lalu Ia bercerita tentang hamba yang dihapus utangnya yang sangat besar, tetapi mencekik kawan yang berutang sedikit kepadanya. Kita sudah lebih dahulu diampuni dengan murah hati oleh Allah. Putra Sirakh berkata bahwa amarah dan dendam itu kekejian, dan bagaimana mungkin orang meminta penyembuhan dari Tuhan bila ia menyimpan amarah terhadap sesamanya. Mengampuni tidak berarti melupakan atau membenarkan kesalahan, tetapi melepaskan hak untuk membalas. Hari ini kita dapat mengingat betapa banyak yang sudah Tuhan ampuni dalam hidup kita.",
    refleksi: ["Kesalahan siapa yang masih kuhitung-hitung sampai sekarang?", "Apakah aku sungguh menyadari betapa besar pengampunan yang telah kuterima dari Allah?"],
  },
  "A:ot-25": {
    renungan: "Tuan kebun anggur memanggil pekerja pada pagi hari, siang, hingga sore menjelang akhir hari. Saat upah dibagikan, semua menerima satu dinar. Yang bekerja sejak pagi bersungut-sungut, padahal mereka tidak dirugikan. Tuan itu bertanya, apakah engkau iri hati karena aku murah hati? Melalui Yesaya, Allah berkata bahwa rancangan-Nya bukan rancangan kita dan jalan-Nya bukan jalan kita. Kemurahan Allah tidak diukur dengan hitungan jasa. Perumpamaan ini mengajak kita bersukacita ketika orang lain menerima rahmat, termasuk mereka yang datang terlambat kepada iman. Kita pun dipanggil semata-mata karena kebaikan-Nya.",
    refleksi: ["Apakah aku diam-diam iri ketika orang lain menerima kebaikan yang tidak kuterima?", "Bagaimana aku dapat bersyukur atas panggilan Tuhan tanpa membandingkan diri?"],
  },
  "A:ot-26": {
    renungan: "Seorang ayah meminta dua anaknya bekerja di kebun anggur. Yang satu menolak, tetapi kemudian menyesal dan pergi. Yang lain langsung berkata ya, tetapi tidak pergi. Yesus bertanya, siapa yang melakukan kehendak ayahnya? Ia lalu mengatakan bahwa pemungut cukai dan pelacur yang bertobat mendahului para pemuka agama. Yehezkiel menegaskan bahwa orang yang berbalik dari kejahatannya akan hidup. Pertobatan selalu mungkin, dan kata-kata saleh tidak dapat menggantikan tindakan. Paulus mengajak kita memiliki pikiran Kristus yang merendahkan diri. Kita dapat memeriksa janji-janji kecil yang pernah kita ucapkan kepada Tuhan dan sesama, lalu sungguh menepatinya.",
    refleksi: ["Janji apa yang pernah kukatakan ya tetapi belum kulakukan?", "Di bagian mana hidupku Tuhan mengundangku untuk berubah pikiran dan bertobat?"],
  },
  "A:ot-27": {
    renungan: "Pemilik kebun anggur sudah menyiapkan segalanya: pagar, tempat pemerasan, menara jaga. Ia menyewakannya kepada penggarap, tetapi saat musim panen mereka menolak menyerahkan hasil, menganiaya para utusan, bahkan membunuh anaknya. Yesaya juga bernyanyi tentang kebun anggur yang dirawat dengan kasih tetapi hanya menghasilkan buah masam. Hidup, iman, dan Gereja adalah kebun yang dipercayakan kepada kita, bukan milik kita sendiri. Allah menantikan buah: keadilan, kasih, dan kebenaran. Paulus menambahkan agar kita tidak khawatir, tetapi menyampaikan segala keinginan kepada Allah dalam doa. Kita diajak bertanya, buah apa yang sedang kita persembahkan kepada Pemilik kebun?",
    refleksi: ["Buah apa yang Tuhan harapkan dari hidupku saat ini?", "Apakah aku memperlakukan karunia Tuhan seolah-olah milikku sendiri?"],
  },
  "A:ot-28": {
    renungan: "Seorang raja mengadakan pesta perkawinan untuk anaknya, tetapi para undangan menolak datang, sibuk dengan ladang dan usaha mereka. Raja lalu mengundang siapa saja dari persimpangan jalan, baik maupun jahat, sampai ruangan penuh. Namun ada seorang tamu yang tidak mengenakan pakaian pesta. Undangan Allah terbuka bagi semua, tetapi menjawabnya berarti mau dibentuk menjadi baru. Yesaya melukiskan perjamuan di atas gunung, tempat Tuhan menghapus air mata. Paulus bersaksi bahwa ia dapat menanggung segala sesuatu di dalam Dia yang menguatkannya. Ekaristi setiap Minggu adalah undangan pesta itu; kita diajak datang dengan hati yang siap.",
    refleksi: ["Kesibukan apa yang sering membuatku menolak undangan Tuhan?", "Pakaian pesta apa yang perlu kukenakan, sikap hati apa yang perlu kuperbarui?"],
  },
  "A:ot-29": {
    renungan: "Orang Farisi dan pendukung Herodes mencoba menjebak Yesus dengan pertanyaan tentang membayar pajak kepada Kaisar. Yesus meminta sekeping uang dan bertanya gambar siapa yang ada di situ. Lalu Ia berkata, berikan kepada Kaisar apa yang menjadi hak Kaisar, dan kepada Allah apa yang menjadi hak Allah. Uang bergambar Kaisar, tetapi manusia diciptakan menurut gambar Allah. Yesaya mengingatkan bahwa Tuhan dapat memakai bahkan raja asing seperti Koresy. Kita dipanggil menjadi warga negara yang bertanggung jawab, sekaligus menyadari bahwa seluruh diri kita adalah milik Allah. Iman tidak berhenti di gereja, tetapi juga tampak dalam kejujuran di masyarakat.",
    refleksi: ["Apakah aku sudah memberikan kepada Allah apa yang menjadi hak-Nya, yaitu diriku sendiri?", "Bagaimana imanku tampak dalam tanggung jawabku sebagai warga masyarakat?"],
  },
  "A:ot-30": {
    renungan: "Seorang ahli Taurat bertanya hukum mana yang terutama. Yesus menyatukan dua perintah: mengasihi Tuhan Allah dengan segenap hati, jiwa, dan akal budi, serta mengasihi sesama seperti diri sendiri. Seluruh hukum dan kitab para nabi bergantung pada keduanya. Kitab Keluaran menunjukkan wajah konkret kasih kepada sesama: jangan menindas orang asing, janda, dan anak yatim, jangan memeras orang miskin. Kasih kepada Allah yang tidak berlanjut pada kasih kepada sesama menjadi kosong, dan sebaliknya. Hari ini kita dapat menguji kasih kita dengan cara sederhana: bagaimana kita memperlakukan orang yang paling lemah dan tidak dapat membalas kebaikan kita.",
    refleksi: ["Siapa orang lemah di sekitarku yang perlu kuperhatikan?", "Apakah doaku kepada Allah tercermin dalam caraku memperlakukan sesama?"],
  },
  "A:ot-31": {
    renungan: "Yesus mengkritik para ahli Taurat dan orang Farisi yang mengajarkan hal baik tetapi tidak melakukannya, yang suka dihormati dan disapa dengan gelar. Ia mengingatkan bahwa hanya ada satu Guru dan satu Bapa, dan yang terbesar adalah yang melayani. Maleakhi juga menegur para imam yang menyimpang dan membuat banyak orang tersandung. Sebaliknya, Paulus menggambarkan pelayanannya seperti seorang ibu yang mengasuh anaknya dengan penuh kasih. Kritik Yesus berlaku bagi siapa saja yang memegang peran, di rumah, di tempat kerja, di lingkungan gereja. Kita diajak menyelaraskan kata dan perbuatan serta memandang setiap tugas sebagai pelayanan, bukan panggung.",
    refleksi: ["Di mana kata-kataku belum sejalan dengan perbuatanku?", "Apakah aku melayani karena kasih atau karena ingin dihargai?"],
  },
  "A:ot-32": {
    renungan: "Sepuluh gadis menanti mempelai laki-laki dengan pelita. Lima bijaksana membawa minyak cadangan, lima bodoh tidak. Ketika mempelai datang tengah malam, yang bodoh pergi membeli minyak dan pintu tertutup. Minyak itu tidak dapat dipinjamkan, sebab kesiapan hati adalah tanggung jawab pribadi: doa, kesetiaan, dan kasih yang dipupuk dari hari ke hari. Kitab Kebijaksanaan berkata bahwa kebijaksanaan mudah ditemukan oleh mereka yang mencarinya. Paulus menghibur jemaat agar tidak berdukacita seperti orang tanpa pengharapan. Menjelang akhir tahun liturgi, kita diajak mengisi pelita sedikit demi sedikit, supaya siap kapan pun Tuhan datang.",
    refleksi: ["Kebiasaan rohani apa yang menjadi minyak bagi pelitaku?", "Apakah aku sering menunda persiapan hati karena merasa masih ada waktu?"],
  },
  "A:ot-33": {
    renungan: "Seorang tuan mempercayakan talenta kepada hamba-hambanya, masing-masing menurut kemampuannya. Dua orang mengembangkannya, sementara yang ketiga menyembunyikannya di dalam tanah karena takut. Masalahnya bukan jumlah yang kecil, melainkan rasa takut yang membuatnya tidak berbuat apa-apa. Kitab Amsal memuji perempuan cakap yang tangannya rajin bekerja dan terbuka bagi orang miskin. Paulus mengingatkan agar kita tetap berjaga sebagai anak-anak terang. Setiap orang menerima karunia: waktu, keterampilan, kesehatan, kesempatan berbuat baik. Tuhan tidak menuntut hasil yang sama dari semua orang, tetapi kesetiaan. Kita dapat mulai memakai satu karunia yang selama ini terkubur.",
    refleksi: ["Talenta apa yang selama ini kusembunyikan karena takut gagal?", "Bagaimana aku dapat memakai karuniaku untuk melayani orang lain minggu ini?"],
  },
  "A:christking": {
    renungan: "Pada Hari Raya Kristus Raja, Injil menghadirkan gambaran pengadilan terakhir. Anak Manusia bersemayam sebagai raja, dan ukuran yang dipakai mengejutkan: apakah kita memberi makan yang lapar, memberi minum yang haus, menerima orang asing, mengenakan pakaian pada yang telanjang, mengunjungi yang sakit dan yang dipenjara. Baik yang benar maupun yang tidak sama-sama tidak menyadari bahwa Raja hadir dalam diri saudara yang paling hina. Yehezkiel melukiskan Tuhan sebagai gembala yang mencari domba yang hilang dan membalut yang luka. Raja kita memerintah dengan cara menggembalakan. Hari ini kita dapat mengenali wajah Kristus dalam satu orang yang membutuhkan dan melayaninya.",
    refleksi: ["Di wajah siapa Kristus Raja menantiku minggu ini?", "Karya belas kasihan mana yang paling jarang kulakukan?"],
  },
  "A:lent1": {
    renungan: "Masa Prapaskah dimulai dengan Yesus di padang gurun. Setelah berpuasa empat puluh hari, Ia dicobai: mengubah batu menjadi roti, menjatuhkan diri dari bubungan Bait Allah, menyembah Iblis demi kekuasaan. Setiap kali, Yesus menjawab dengan sabda Allah. Kitab Kejadian menceritakan Adam dan Hawa yang jatuh ketika mendengarkan suara lain daripada suara Allah. Paulus menegaskan bahwa lewat ketaatan satu orang, yaitu Kristus, banyak orang dibenarkan. Pencobaan sering menyentuh kebutuhan kita akan rasa aman, pengakuan, dan kendali. Prapaskah memberi waktu untuk melatih hati agar, seperti Yesus, kita bersandar pada sabda Allah, bukan pada jalan pintas.",
    refleksi: ["Pencobaan apa yang paling sering kuhadapi akhir-akhir ini?", "Sabda Tuhan apa yang dapat kupegang selama Prapaskah ini?"],
  },
  "A:lent2": {
    renungan: "Di atas gunung yang tinggi, Petrus, Yakobus, dan Yohanes melihat wajah Yesus bercahaya seperti matahari. Musa dan Elia tampak bercakap dengan-Nya, dan dari awan terdengar suara Bapa: dengarkanlah Dia. Para murid tersungkur ketakutan, tetapi Yesus menyentuh mereka dan berkata, berdirilah, jangan takut. Abram dipanggil meninggalkan negerinya menuju tanah yang belum ia lihat, hanya bermodal janji Tuhan. Transfigurasi memberi kekuatan sebelum jalan salib. Dalam Prapaskah, kita juga butuh saat-saat terang yang meneguhkan iman. Yang terpenting adalah perintah sederhana dari Bapa itu: mendengarkan Yesus, lalu turun gunung dan melanjutkan perjalanan bersama-Nya.",
    refleksi: ["Kapan aku pernah mengalami terang Tuhan yang menguatkan imanku?", "Bagaimana aku dapat lebih sungguh mendengarkan Yesus minggu ini?"],
  },
  "A:lent3": {
    renungan: "Di sumur Yakub, Yesus yang lelah meminta minum kepada seorang perempuan Samaria. Percakapan itu perlahan bergerak dari air sumur kepada air hidup, dari masa lalu perempuan itu kepada penyembahan dalam roh dan kebenaran. Yesus mengenal hidupnya, tetapi tidak menolaknya. Perempuan itu meninggalkan tempayannya dan mengajak seisi kota datang kepada Yesus. Di padang gurun, Israel bersungut karena haus, dan Allah tetap memberi air dari batu. Paulus berkata kasih Allah dicurahkan ke dalam hati kita oleh Roh Kudus. Prapaskah mengajak kita jujur membawa kehausan kita kepada Yesus, yang lebih dahulu datang mencari kita.",
    refleksi: ["Kehausan apa dalam hatiku yang belum terpuaskan oleh hal-hal dunia?", "Tempayan apa yang perlu kutinggalkan untuk mewartakan Yesus?"],
  },
  "A:lent4": {
    renungan: "Yesus menyembuhkan seorang yang buta sejak lahir dengan mengoleskan tanah di matanya dan menyuruhnya membasuh diri di kolam Siloam. Orang itu perlahan bertumbuh dalam iman, sampai akhirnya bersujud dan percaya. Sebaliknya, orang-orang Farisi yang merasa melihat justru semakin buta. Saat Samuel mencari raja, Tuhan berkata bahwa manusia melihat apa yang di depan mata, tetapi Tuhan melihat hati. Paulus mengajak kita hidup sebagai anak-anak terang. Kebutaan rohani sering berupa rasa yakin bahwa kita sudah tahu segalanya. Minggu Laetare ini, kita dapat meminta Yesus membuka mata kita untuk melihat diri sendiri dan sesama seperti Allah melihat.",
    refleksi: ["Dalam hal apa aku merasa sudah melihat, padahal mungkin masih buta?", "Bagaimana aku dapat melihat hati seseorang, bukan hanya penampilannya?"],
  },
  "A:lent5": {
    renungan: "Lazarus, sahabat Yesus, meninggal. Marta dan Maria berkata, seandainya Engkau ada di sini, saudaraku tidak akan mati. Yesus menyatakan diri sebagai kebangkitan dan hidup, lalu Ia menangis di depan makam. Allah tidak jauh dari duka manusia. Kemudian Ia memanggil Lazarus keluar, dan meminta orang-orang membuka kain kafannya. Yehezkiel menubuatkan bahwa Tuhan akan membuka kubur umat-Nya dan memberi Roh-Nya supaya mereka hidup. Menjelang Pekan Suci, kita dapat membawa kepada Yesus bagian hidup yang terasa mati, entah relasi, harapan, atau semangat, dan percaya bahwa Ia sanggup memanggilnya keluar kepada hidup.",
    refleksi: ["Bagian hidupku mana yang terasa seperti kubur dan butuh suara Yesus?", "Siapa yang dapat kubantu melepaskan kain kafan yang masih mengikatnya?"],
  },
  "A:palm": {
    renungan: "Minggu Palma membawa kita dari sorak hosana ke keheningan makam. Injil Matius mengisahkan pengkhianatan Yudas, perjamuan terakhir, doa yang bergulat di Getsemani, penyangkalan Petrus, pengadilan, dan salib. Di tengah semua itu, Yesus tetap setia. Ia tidak membalas, tidak lari, tetapi menyerahkan diri kepada Bapa. Yesaya menggambarkan Hamba yang memberi punggung kepada yang memukul, dan Paulus bermadah tentang Kristus yang mengosongkan diri sampai mati di kayu salib. Pekan Suci mengundang kita berjalan pelan bersama Yesus, tidak sebagai penonton, tetapi sebagai murid yang ingin belajar mengasihi sampai akhir, juga saat kita sendiri lemah seperti Petrus.",
    refleksi: ["Di bagian mana kisah sengsara ini aku melihat diriku sendiri?", "Bagaimana aku dapat menjalani Pekan Suci ini dengan lebih hening dan sungguh?"],
  },
  "A:holythu": {
    renungan: "Pada Misa Krisma Kamis Putih, Gereja mendengar Yesus di sinagoge Nazaret membaca nubuat Yesaya: Roh Tuhan ada pada-Ku, untuk menyampaikan kabar baik kepada orang miskin, membebaskan yang tertawan, membuka mata yang buta. Lalu Ia berkata bahwa hari ini nas itu telah digenapi. Dalam Misa ini minyak suci diberkati, dan para imam membarui janji imamat mereka. Kitab Wahyu mengingatkan bahwa Kristus telah menjadikan kita kerajaan dan imam-imam bagi Allah. Setiap orang yang dibaptis dan diurapi turut dalam perutusan itu. Hari ini kita dapat mendoakan para imam dan memperbarui kesediaan kita sendiri menjadi pembawa kabar baik.",
    refleksi: ["Kabar baik apa yang dapat kubawa kepada orang miskin di sekitarku?", "Bagaimana aku dapat mendukung para imam dalam pelayanan mereka?"],
  },
  "A:goodfri": {
    renungan: "Jumat Agung mengajak kita berdiri di bawah salib. Yohanes mengisahkan Yesus yang tetap berdaulat dalam penderitaan: Ia menyerahkan diri di taman, berdiri di hadapan Pilatus sebagai Raja yang kerajaan-Nya bukan dari dunia ini, menyerahkan ibu-Nya kepada murid yang dikasihi, lalu berkata, sudah selesai. Yesaya bernubuat tentang Hamba yang menanggung penyakit dan kesengsaraan kita, oleh bilur-bilurnya kita menjadi sembuh. Surat Ibrani menghibur bahwa kita memiliki Imam Agung yang turut merasakan kelemahan kita. Hari ini kita tidak perlu banyak kata. Cukup memandang salib dengan syukur, menyerahkan dosa dan luka kita, dan menyembah kasih yang sampai sehabis-habisnya.",
    refleksi: ["Luka atau dosa apa yang ingin kuletakkan di kaki salib hari ini?", "Apa artinya bagiku bahwa Yesus menyerahkan nyawa-Nya untukku?"],
  },
  "A:eastervigil": {
    renungan: "Malam Paskah dimulai dalam gelap, lalu terang lilin Paskah menyala dan menyebar. Bacaan dari Kitab Kejadian mengingatkan bahwa Allah menciptakan dari kekacauan dan melihat semuanya baik. Kini Ia melakukan ciptaan baru. Pagi-pagi benar, para perempuan pergi ke kubur, dan malaikat berkata, jangan takut, Ia tidak ada di sini, sebab Ia telah bangkit. Dalam perjalanan pulang, Yesus sendiri menjumpai mereka. Paulus menegaskan bahwa dalam baptisan kita dikuburkan bersama Kristus supaya hidup dalam hidup yang baru. Malam ini kita memperbarui janji baptis. Ketakutan dan sukacita bisa bercampur, seperti pada para perempuan itu, tetapi kabar ini terlalu baik untuk disimpan.",
    refleksi: ["Kegelapan apa dalam hidupku yang ingin kuterangi dengan terang Paskah?", "Kepada siapa aku ingin membagikan kabar kebangkitan ini?"],
  },
  "A:easter": {
    renungan: "Pagi-pagi, saat masih gelap, Maria Magdalena mendapati batu kubur telah terguling. Petrus dan murid yang lain berlari ke kubur. Mereka melihat kain kafan terletak dan kain peluh tergulung tersendiri. Murid itu melihat dan percaya, meskipun mereka belum sepenuhnya mengerti Kitab Suci. Iman Paskah sering mulai dari tanda-tanda kecil dan hati yang terbuka. Dalam Kisah Para Rasul, Petrus yang dulu menyangkal kini bersaksi berani tentang Yesus yang dibangkitkan Allah. Paulus mengajak kita mencari perkara yang di atas. Sukacita Paskah dapat kita hidupi dengan memandang hidup sehari-hari dalam terang kebangkitan: tidak ada yang mati tanpa harapan.",
    refleksi: ["Tanda kebangkitan apa yang kulihat dalam hidupku belakangan ini?", "Bagaimana Paskah mengubah caraku memandang kesulitan saat ini?"],
  },
  "A:easter2": {
    renungan: "Para murid berkumpul di balik pintu terkunci karena takut. Yesus datang, berdiri di tengah mereka, dan berkata, damai sejahtera bagimu. Ia menunjukkan luka-luka-Nya, mengembusi mereka dengan Roh Kudus, dan memberi kuasa mengampuni dosa. Tomas yang tidak hadir menolak percaya sebelum menyentuh luka itu. Seminggu kemudian Yesus datang lagi khusus untuknya, dan Tomas berseru, Tuhanku dan Allahku. Pada Minggu Kerahiman Ilahi ini, kita melihat Tuhan yang sabar terhadap keraguan. Kisah Para Rasul menunjukkan buah damai itu: jemaat bertekun dalam pengajaran, persekutuan, pemecahan roti, dan doa. Damai Kristus dapat membuka pintu hati yang terkunci.",
    refleksi: ["Pintu apa dalam hatiku yang masih terkunci karena takut?", "Apakah aku memberi ruang bagi sesama yang sedang ragu seperti Tomas?"],
  },
  "A:easter3": {
    renungan: "Dua murid berjalan ke Emaus dengan wajah muram, membicarakan harapan yang runtuh. Yesus berjalan bersama mereka, tetapi mereka tidak mengenali-Nya. Ia mendengarkan, lalu menjelaskan Kitab Suci sampai hati mereka berkobar. Saat Ia memecahkan roti, mata mereka terbuka. Mereka segera kembali ke Yerusalem membawa kabar itu. Kisah ini adalah pola Ekaristi: sabda dan roti. Dalam Kisah Para Rasul, Petrus bersaksi bahwa Allah membangkitkan Yesus. Petrus juga mengingatkan bahwa kita ditebus dengan darah Kristus yang mahal. Ketika kita kecewa dan bingung, Yesus sering berjalan di samping kita tanpa kita sadari, menanti untuk dikenali dalam sabda dan Ekaristi.",
    refleksi: ["Kekecewaan apa yang sedang kubawa dalam perjalananku?", "Kapan hatiku berkobar saat mendengar sabda Tuhan?"],
  },
  "A:easter4": {
    renungan: "Pada Minggu Gembala Baik, Yesus menyebut diri-Nya pintu bagi domba-domba. Gembala sejati masuk melalui pintu, memanggil domba-dombanya menurut namanya, dan domba-domba mengenal suaranya. Ada pencuri yang datang untuk mencuri dan membinasakan, tetapi Yesus datang agar kita memiliki hidup dalam segala kelimpahan. Dalam Kisah Para Rasul, orang-orang yang mendengar Petrus terharu dan bertanya apa yang harus mereka perbuat. Di tengah banyak suara yang bersaing, iman berarti belajar mengenali suara Gembala. Kita mengenalinya lewat sabda, doa, dan kehidupan Gereja. Hari ini kita juga mendoakan panggilan imam dan biarawan-biarawati.",
    refleksi: ["Suara apa yang paling sering kudengarkan dalam keputusanku?", "Bagaimana aku dapat lebih mengenali suara Yesus dalam hidup sehari-hari?"],
  },
  "A:easter5": {
    renungan: "Menjelang perpisahan, Yesus berkata, janganlah gelisah hatimu. Di rumah Bapa ada banyak tempat, dan Ia pergi menyediakan tempat bagi kita. Tomas bertanya bagaimana mereka tahu jalannya. Yesus menjawab, Akulah jalan dan kebenaran dan hidup. Filipus meminta melihat Bapa, dan Yesus berkata bahwa siapa yang telah melihat Dia telah melihat Bapa. Dalam Kisah Para Rasul, jemaat menghadapi masalah pembagian makanan bagi para janda, lalu memilih tujuh orang untuk melayani. Mengikuti Jalan itu berarti tetap setia di tengah kegelisahan dan tekun melayani kebutuhan nyata sesama. Petrus menyebut kita batu hidup yang dibangun menjadi rumah rohani.",
    refleksi: ["Kegelisahan apa yang ingin kuserahkan kepada Yesus, Sang Jalan?", "Kebutuhan nyata apa di komunitasku yang dapat kubantu layani?"],
  },
  "A:easter6": {
    renungan: "Yesus berkata bahwa orang yang mengasihi-Nya akan menuruti perintah-Nya. Ia berjanji tidak meninggalkan kita sebagai yatim piatu, tetapi meminta kepada Bapa seorang Penolong lain, Roh Kebenaran, yang tinggal bersama kita. Dalam Kisah Para Rasul, Filipus mewartakan Kristus di Samaria dan terjadi sukacita besar; kemudian Petrus dan Yohanes datang dan mereka menerima Roh Kudus. Petrus mengajak kita siap memberi pertanggungjawaban tentang pengharapan kita, dengan lemah lembut dan hormat. Menjelang Pentakosta, kita menyadari bahwa Roh Kudus sudah diam di dalam kita. Kita dapat berdoa singkat setiap pagi, memohon Roh Kudus menuntun kata dan tindakan kita.",
    refleksi: ["Apakah aku menyadari kehadiran Roh Kudus dalam hidup sehari-hari?", "Bagaimana aku menjelaskan pengharapanku kepada orang lain dengan lembut dan hormat?"],
  },
  "A:easter7": {
    renungan: "Yesus menengadah ke langit dan berdoa bagi murid-murid-Nya. Ia berkata bahwa hidup yang kekal adalah mengenal Bapa, satu-satunya Allah yang benar, dan Yesus Kristus yang diutus-Nya. Ia mendoakan mereka yang tetap tinggal di dunia. Kisah Para Rasul memperlihatkan para rasul bersama Maria, ibu Yesus, bertekun dalam doa sambil menanti Roh Kudus. Petrus mengingatkan bahwa penderitaan karena Kristus bukan hal yang memalukan. Minggu ini kita berada di antara Kenaikan dan Pentakosta, waktu untuk menanti dengan doa. Sungguh menghibur mengetahui bahwa Yesus sendiri mendoakan kita. Kita pun diajak berdoa bersama dan bagi sesama.",
    refleksi: ["Bagaimana rasanya menyadari bahwa Yesus mendoakanku?", "Siapa yang dapat kuajak berdoa bersama menanti Roh Kudus?"],
  },
  "A:ascension": {
    renungan: "Kesebelas murid pergi ke Galilea, ke gunung yang ditunjukkan Yesus. Ketika melihat-Nya, mereka menyembah, meskipun beberapa masih ragu. Yesus tidak menunggu keraguan itu hilang. Ia mengutus mereka menjadikan semua bangsa murid-Nya, membaptis, dan mengajar. Lalu Ia berjanji menyertai mereka senantiasa sampai akhir zaman. Kisah Para Rasul menceritakan para murid yang menatap ke langit, lalu malaikat bertanya mengapa mereka berdiri saja. Kenaikan Tuhan bukan perpisahan yang membuat kita pasif, melainkan awal perutusan. Kita diutus ke tempat kita masing-masing, dengan keyakinan bahwa Yesus tetap menyertai, bahkan ketika iman kita belum sempurna.",
    refleksi: ["Di tempat mana Tuhan mengutusku menjadi saksi-Nya saat ini?", "Apakah keraguanku menghalangi aku untuk melangkah?"],
  },
  "A:pentecost": {
    renungan: "Pada hari terakhir perayaan, Yesus berdiri dan berseru: siapa yang haus, datanglah kepada-Ku dan minum. Dari dalam dirinya akan mengalir sungai-sungai air hidup. Yohanes menjelaskan bahwa yang dimaksud adalah Roh yang akan diterima orang yang percaya. Kisah menara Babel menunjukkan manusia yang ingin mencapai langit dengan kekuatan sendiri dan berakhir tercerai-berai. Roh Kudus melakukan sebaliknya, menyatukan yang berbeda. Paulus menambahkan bahwa Roh membantu kita dalam kelemahan, bahkan ketika kita tidak tahu bagaimana berdoa. Pada Pentakosta ini kita dapat datang sebagai orang yang haus, memohon agar Roh Kudus mengalir dan menyegarkan orang di sekitar kita.",
    refleksi: ["Bagian hidupku mana yang kering dan haus akan Roh Kudus?", "Bagaimana aku dapat menjadi sumber kesegaran bagi orang lain?"],
  },
  "A:trinity": {
    renungan: "Begitu besar kasih Allah akan dunia ini, sehingga Ia mengaruniakan Anak-Nya yang tunggal, supaya setiap orang yang percaya tidak binasa tetapi beroleh hidup yang kekal. Allah mengutus Anak bukan untuk menghakimi dunia, melainkan menyelamatkannya. Kepada Musa di gunung Sinai, Tuhan menyatakan diri sebagai Allah penyayang dan pengasih, panjang sabar dan berlimpah kasih setia. Paulus menutup suratnya dengan salam yang kita dengar di awal Misa: kasih karunia Yesus Kristus, kasih Allah, dan persekutuan Roh Kudus. Tritunggal Mahakudus bukan teka-teki untuk dipecahkan, melainkan persekutuan kasih yang mengundang kita masuk. Setiap tanda salib adalah pengakuan kecil akan misteri itu.",
    refleksi: ["Bagaimana aku mengalami kasih Bapa, Putra, dan Roh Kudus dalam hidupku?", "Apakah aku membuat tanda salib dengan sadar dan penuh iman?"],
  },
  "A:corpus": {
    renungan: "Yesus berkata, Akulah roti hidup yang telah turun dari surga. Barangsiapa makan daging-Nya dan minum darah-Nya, ia tinggal di dalam Yesus dan Yesus di dalam dia. Kata-kata itu membuat banyak orang bertengkar, tetapi Yesus tidak melunakkannya. Dalam Kitab Ulangan, Musa mengingatkan bahwa Tuhan memberi manna di padang gurun supaya umat tahu bahwa manusia hidup bukan dari roti saja. Paulus menegaskan bahwa karena roti itu satu, kita yang banyak ini adalah satu tubuh. Hari Raya Tubuh dan Darah Kristus mengajak kita menyambut komuni dengan hormat dan sadar, lalu membiarkan Ekaristi menyatukan kita dengan sesama.",
    refleksi: ["Bagaimana aku mempersiapkan diri sebelum menyambut Tubuh Kristus?", "Apakah Ekaristi mendorongku untuk bersatu dan berbagi dengan sesama?"],
  },
  "A:sacredheart": {
    renungan: "Yesus memuji Bapa yang menyatakan diri kepada orang kecil, lalu mengundang yang letih lesu untuk datang kepada-Nya, sebab Ia lemah lembut dan rendah hati. Pada Hari Raya Hati Yesus yang Mahakudus, kita memandang hati yang penuh belas kasih itu. Musa mengingatkan Israel bahwa Tuhan memilih mereka bukan karena mereka besar, tetapi karena Ia mengasihi mereka. Surat Yohanes merangkum semuanya: Allah adalah kasih, dan kasih itu berasal dari Dia yang lebih dahulu mengasihi kita. Kita tidak perlu membuktikan diri layak dicintai. Hari ini kita dapat beristirahat sejenak dalam kasih itu, lalu membagikannya dengan lemah lembut.",
    refleksi: ["Apakah aku sungguh percaya bahwa Allah lebih dahulu mengasihiku?", "Kepada siapa aku dapat menunjukkan kelemahlembutan hati Yesus hari ini?"],
  },
  "A:san-0806": {
    renungan: "Pada Pesta Yesus Menampakkan Kemuliaan-Nya, kita naik bersama Petrus, Yakobus, dan Yohanes ke gunung. Wajah Yesus bercahaya, pakaian-Nya putih seperti terang, dan suara dari awan berkata, inilah Anak yang Kukasihi, dengarkanlah Dia. Daniel melihat dalam penglihatan Anak Manusia yang menerima kekuasaan dan kemuliaan yang kekal. Petrus kemudian bersaksi dalam suratnya bahwa ia sendiri menyaksikan kebesaran itu, dan sabda nabi seperti pelita yang bercahaya di tempat gelap. Kemuliaan Yesus diperlihatkan untuk meneguhkan para murid menjelang salib. Kita pun membutuhkan terang itu. Saat merasa takut, kita dapat mendengar lagi sentuhan dan kata Yesus: berdirilah, jangan takut.",
    refleksi: ["Apa yang membuatku sulit mendengarkan Yesus di tengah banyak suara?", "Bagaimana pengalaman akan kemuliaan Tuhan menguatkanku menghadapi salib?"],
  },
  "B:adv1": {
    renungan: "Yesus menceritakan seorang tuan yang bepergian dan menyerahkan rumahnya kepada para hamba, masing-masing dengan tugasnya, sementara penjaga pintu diminta berjaga. Tak seorang pun tahu kapan tuan rumah pulang, entah senja, tengah malam, atau pagi. Pesan-Nya untuk semua orang: berjaga-jagalah. Yesaya berdoa agar Allah mengoyakkan langit dan turun, sambil mengakui bahwa umat seperti tanah liat dan Tuhan adalah penjunannya. Berjaga bukan berarti cemas, melainkan setia mengerjakan tugas yang dipercayakan sambil menanti dengan rindu. Adven ini kita dapat menata kembali tugas harian kita, di rumah dan di tempat kerja, sebagai cara menyambut Tuhan yang datang.",
    refleksi: ["Tugas apa yang Tuhan percayakan kepadaku untuk dikerjakan dengan setia?", "Apakah aku rela dibentuk Tuhan seperti tanah liat di tangan penjunan?"],
  },
  "B:adv2": {
    renungan: "Markus membuka Injilnya dengan sederhana: inilah permulaan Injil tentang Yesus Kristus, Anak Allah. Yohanes Pembaptis tampil di padang gurun, berpakaian bulu unta, mewartakan baptisan tobat. Ia sadar bahwa ia bukan pusatnya, membuka tali kasut pun ia tidak layak. Yesaya menyerukan penghiburan bagi umat dan meminta jalan bagi Tuhan disiapkan, lembah ditimbun dan bukit diratakan. Petrus menambahkan bahwa Tuhan sabar, menghendaki semua orang bertobat. Adven adalah waktu meratakan jalan: menimbun lembah keputusasaan, meratakan bukit kesombongan. Seperti Yohanes, kita diajak menunjuk kepada Yesus dengan rendah hati, bukan kepada diri sendiri.",
    refleksi: ["Bukit kesombongan apa dalam diriku yang perlu diratakan?", "Siapa yang membutuhkan penghiburan dariku di masa Adven ini?"],
  },
  "B:adv3": {
    renungan: "Yohanes datang sebagai saksi untuk memberi kesaksian tentang terang. Ketika para imam dan orang Lewi bertanya siapa dia, Yohanes dengan jujur berkata bahwa ia bukan Mesias, bukan Elia, bukan nabi itu. Ia hanyalah suara yang berseru di padang gurun. Ada kebebasan besar dalam mengenal diri dengan jujur, tidak perlu menjadi lebih dari yang Tuhan kehendaki. Yesaya bersukaria karena Tuhan mengenakan pakaian keselamatan kepadanya. Paulus menasihati: bersukacitalah senantiasa, tetaplah berdoa, mengucap syukurlah dalam segala hal. Pada Minggu Gaudete ini, kita dapat bersukacita karena tidak harus menjadi terang itu sendiri, cukup memantulkan-Nya.",
    refleksi: ["Apakah aku mengenal diriku dengan jujur di hadapan Tuhan?", "Hal apa yang dapat kusyukuri hari ini, bahkan di tengah kesulitan?"],
  },
  "B:adv4": {
    renungan: "Malaikat Gabriel datang kepada Maria di Nazaret dan menyampaikan kabar yang mengubah sejarah. Maria terkejut dan bertanya bagaimana hal itu mungkin. Malaikat menjawab bahwa Roh Kudus akan turun atasnya, sebab bagi Allah tidak ada yang mustahil. Maria menjawab, aku ini hamba Tuhan, jadilah padaku menurut perkataanmu. Dalam Kitab Samuel, Daud ingin membangun rumah bagi Tuhan, tetapi justru Tuhan yang berjanji membangun keturunan Daud selamanya. Allah selalu mendahului rencana kita. Menjelang Natal, kita belajar dari Maria: boleh bertanya dan bingung, tetapi akhirnya membuka diri dan berkata ya kepada Allah.",
    refleksi: ["Hal apa dalam hidupku yang terasa mustahil, yang perlu kuserahkan kepada Allah?", "Bagaimana aku dapat berkata ya kepada kehendak Tuhan seperti Maria?"],
  },
  "B:christmas": {
    renungan: "Natal menurut Yohanes adalah kabar bahwa Firman menjadi daging dan diam di antara kita. Allah yang tak terlihat kini dapat dilihat dan disentuh dalam diri Yesus. Ia datang kepada milik kepunyaan-Nya, tetapi tidak semua menerima-Nya. Kepada yang menerima, Ia memberi kuasa menjadi anak-anak Allah. Surat Ibrani berkata bahwa Allah yang dulu berbicara lewat para nabi kini berbicara melalui Anak-Nya. Yesaya bersorak karena Tuhan menghibur umat-Nya. Natal bukan hanya kenangan, melainkan undangan untuk menerima Dia hari ini. Kita dapat memberi ruang bagi Yesus dengan hadir sungguh bagi orang lain, terutama yang merasa sendirian.",
    refleksi: ["Apakah ada ruang dalam hidupku untuk menerima Yesus yang datang?", "Siapa yang merasa sendirian di hari Natal yang dapat kukunjungi atau kuhubungi?"],
  },
  "B:holyfamily": {
    renungan: "Maria dan Yusuf membawa Yesus ke Bait Allah untuk mempersembahkan-Nya kepada Tuhan, sesuai hukum Taurat. Di sana Simeon yang benar dan saleh menyambut Anak itu, memuji Allah karena matanya telah melihat keselamatan. Ia juga berkata bahwa sebilah pedang akan menembus jiwa Maria. Hana, nabiah lanjut usia, ikut bersyukur. Keluarga Kudus menjalani hidup biasa dengan setia, lalu kembali ke Nazaret, tempat Anak itu bertumbuh dalam hikmat dan kasih karunia. Putra Sirakh dan Paulus mengajak keluarga saling menghormati dan mengampuni. Kekudusan keluarga dibangun dalam kesetiaan sehari-hari, termasuk menghargai kebijaksanaan para orang tua dan lansia.",
    refleksi: ["Bagaimana keluargaku dapat mempersembahkan hidup bersama kepada Tuhan?", "Apa yang dapat kupelajari dari orang tua atau lansia di sekitarku?"],
  },
  "B:marymother": {
    renungan: "Di awal tahun, kita berdiri bersama para gembala di Betlehem. Mereka menemukan Maria, Yusuf, dan Bayi yang terbaring di palungan, lalu pulang sambil memuji Allah. Pada hari kedelapan, Anak itu diberi nama Yesus. Di tengah semua itu, Maria menyimpan dan merenungkan segala perkara dalam hatinya. Paulus menulis bahwa Allah mengutus Anak-Nya, lahir dari seorang perempuan, supaya kita diangkat menjadi anak dan dapat menyebut Allah, Abba, Bapa. Berkat Harun dalam Kitab Bilangan dapat menjadi doa kita: Tuhan memberkati dan melindungi. Kita menyerahkan tahun baru ini kepada Allah melalui teladan dan doa Maria, Bunda Allah.",
    refleksi: ["Apa yang ingin kuserahkan kepada Tuhan di awal tahun ini?", "Bagaimana aku dapat meneladan Maria dalam merenungkan karya Allah?"],
  },
  "B:epiphany": {
    renungan: "Bintang menuntun orang-orang Majus dari jauh. Ketika bintang itu berhenti di atas tempat Anak itu berada, mereka sangat bersukacita, masuk, bersujud, dan membuka harta persembahan. Sementara itu, para imam kepala dan ahli Taurat tahu di mana Mesias akan lahir, tetapi tidak berangkat mencari-Nya. Pengetahuan tanpa kerinduan tidak menggerakkan langkah. Paulus menyingkapkan rahasia bahwa bangsa-bangsa lain pun turut menjadi ahli waris janji dalam Kristus. Hari Raya Penampakan Tuhan mengajak kita bukan hanya mengetahui tentang Yesus, tetapi sungguh mencari dan menyembah-Nya. Setelah berjumpa, kita pun pulang melalui jalan lain, hidup yang diperbarui.",
    refleksi: ["Apakah aku hanya tahu tentang Yesus, atau sungguh mencari-Nya?", "Jalan lain apa yang perlu kutempuh setelah berjumpa dengan Tuhan?"],
  },
  "B:baptism": {
    renungan: "Yohanes mewartakan bahwa sesudah dia akan datang seorang yang lebih berkuasa, yang membaptis dengan Roh Kudus. Lalu Yesus datang dari Nazaret dan dibaptis di sungai Yordan. Ketika keluar dari air, Ia melihat langit terkoyak dan Roh turun seperti merpati, dan terdengar suara: Engkaulah Anak-Ku yang Kukasihi, kepada-Mulah Aku berkenan. Langit yang terkoyak berarti Allah membuka jalan bagi manusia. Petrus dalam Kisah Para Rasul berkata bahwa Allah tidak membedakan orang, dan Yesus berkeliling berbuat baik. Pesta ini mengingatkan baptisan kita sendiri. Kita juga dikasihi Bapa, dan dari situ kita diutus berbuat baik seperti Yesus.",
    refleksi: ["Kapan terakhir aku bersyukur atas baptisanku?", "Kebaikan apa yang dapat kulakukan hari ini sebagai anak yang dikasihi Bapa?"],
  },
  "B:ot-2": {
    renungan: "Dua murid Yohanes mengikuti Yesus. Yesus berbalik dan bertanya, apakah yang kamu cari? Mereka balik bertanya di mana Ia tinggal, dan Yesus menjawab, marilah dan kamu akan melihatnya. Mereka tinggal bersama-Nya hari itu. Andreas kemudian membawa saudaranya, Simon, kepada Yesus, dan Simon diberi nama baru. Samuel muda mendengar panggilan Tuhan di malam hari, dan dengan bantuan Eli ia belajar menjawab: berbicaralah, Tuhan, hamba-Mu mendengarkan. Panggilan sering datang lewat perantaraan orang lain. Pertanyaan Yesus tetap relevan bagi kita: apa yang sebenarnya kucari? Kita dapat meluangkan waktu untuk tinggal bersama-Nya dalam doa.",
    refleksi: ["Apa yang sebenarnya kucari dalam hidupku saat ini?", "Siapa yang dapat kubawa kepada Yesus seperti Andreas membawa Simon?"],
  },
  "B:ot-3": {
    renungan: "Setelah Yohanes ditangkap, Yesus datang ke Galilea dan mewartakan: waktunya telah genap, Kerajaan Allah sudah dekat, bertobatlah dan percayalah kepada Injil. Lalu Ia memanggil Simon, Andreas, Yakobus, dan Yohanes, yang segera meninggalkan jala dan perahu. Yunus diutus ke Niniwe, dan secara mengejutkan seluruh kota bertobat, sehingga Allah menyesal atas malapetaka yang dirancang-Nya. Paulus mengingatkan bahwa dunia yang kita kenal ini sedang berlalu. Ada nada mendesak dalam bacaan hari ini. Pertobatan tidak perlu ditunda sampai keadaan ideal. Kita dapat menjawab panggilan Yesus sekarang, dengan satu langkah konkret meninggalkan sesuatu yang menghambat.",
    refleksi: ["Apa yang selama ini kutunda dalam menjawab panggilan Tuhan?", "Jala apa yang perlu kutinggalkan untuk mengikuti Yesus lebih dekat?"],
  },
  "B:ot-4": {
    renungan: "Di sinagoge Kapernaum, orang-orang takjub akan pengajaran Yesus, sebab Ia mengajar sebagai orang yang berkuasa, tidak seperti ahli Taurat. Seorang yang kerasukan roh jahat berteriak, dan Yesus menghardiknya sehingga roh itu keluar. Kuasa sabda-Nya bukan sekadar kata-kata indah, tetapi membebaskan. Musa menubuatkan seorang nabi yang akan dibangkitkan Tuhan, yang menyampaikan sabda Allah. Paulus berharap jemaat dapat melayani Tuhan tanpa gangguan. Kita sering mendengar banyak suara yang tidak membebaskan. Sabda Yesus berbeda: ia berwibawa karena menyembuhkan. Kita dapat membiarkan sabda-Nya menghardik apa pun yang mengikat kita, seperti ketakutan atau kebiasaan buruk.",
    refleksi: ["Apa yang mengikatku dan perlu dibebaskan oleh sabda Yesus?", "Suara siapa yang paling berwibawa dalam hidupku?"],
  },
  "B:ot-5": {
    renungan: "Yesus menyembuhkan ibu mertua Simon yang demam. Ia memegang tangannya dan membangunkannya, lalu perempuan itu melayani mereka. Menjelang malam seluruh kota berkumpul di depan pintu, dan Yesus menyembuhkan banyak orang. Pagi-pagi benar, Ia pergi ke tempat sunyi untuk berdoa, lalu melanjutkan perjalanan ke kota-kota lain. Ayub mengeluh bahwa hidup manusia penuh kerja berat dan malam yang panjang. Yesus tidak menjauh dari penderitaan semacam itu. Ia menjamah dan membangunkan. Kita belajar ritme hidup Yesus: melayani dengan sepenuh hati, tetapi juga menyediakan waktu hening bersama Bapa sebagai sumber kekuatan.",
    refleksi: ["Apakah aku menyediakan waktu hening untuk berdoa di tengah kesibukan?", "Siapa yang sedang sakit atau lelah yang dapat kujamah dengan perhatian?"],
  },
  "B:ot-6": {
    renungan: "Seorang penderita kusta datang kepada Yesus dan berlutut: kalau Engkau mau, Engkau dapat mentahirkan aku. Hati Yesus tergerak oleh belas kasihan. Ia mengulurkan tangan, menjamahnya, dan berkata, Aku mau, jadilah engkau tahir. Menurut Kitab Imamat, penderita kusta harus tinggal terasing di luar perkemahan. Yesus melewati batas itu, menyentuh yang dianggap najis. Ironisnya, karena kabar itu tersebar, kini Yesus yang tidak dapat masuk kota. Ia rela menanggung keterasingan demi memulihkan orang lain. Paulus mengajak melakukan segala sesuatu untuk kemuliaan Allah. Kita dapat bertanya siapa yang terasing di lingkungan kita dan mendekatinya dengan sentuhan kasih.",
    refleksi: ["Siapa yang terasing di lingkunganku dan butuh dijamah dengan kasih?", "Apakah aku berani datang kepada Yesus dengan jujur tentang lukaku?"],
  },
  "B:ot-7": {
    renungan: "Empat orang membawa seorang lumpuh kepada Yesus. Karena orang banyak, mereka membongkar atap dan menurunkannya. Melihat iman mereka, Yesus berkata kepada orang lumpuh itu, dosamu sudah diampuni. Para ahli Taurat menganggap-Nya menghujat, maka Yesus juga menyembuhkan tubuhnya. Lewat Yesaya, Allah berkata jangan mengingat hal-hal yang dahulu, sebab Ia membuat sesuatu yang baru dan menghapus dosa-dosa. Persahabatan yang beriman dapat membawa seseorang kepada Yesus. Ada kalanya kita menjadi orang lumpuh yang perlu digotong, ada kalanya kita yang menggotong. Hari ini kita dapat mendoakan dan membantu seseorang yang tidak mampu datang sendiri kepada Tuhan.",
    refleksi: ["Siapa yang dapat kugotong kepada Yesus lewat doa dan bantuan?", "Apakah aku percaya Tuhan sanggup membuat sesuatu yang baru dalam hidupku?"],
  },
  "B:ot-8": {
    renungan: "Orang bertanya mengapa murid Yesus tidak berpuasa. Yesus menjawab bahwa sahabat pengantin tidak berpuasa selama mempelai laki-laki bersama mereka. Kehadiran-Nya adalah pesta. Lalu Ia berbicara tentang kain baru yang tidak cocok untuk menambal baju tua, dan anggur baru yang harus disimpan dalam kantong baru. Hosea menggambarkan Allah sebagai mempelai yang membujuk umat-Nya ke padang gurun dan berbicara menenangkan hatinya. Iman bukan sekadar kewajiban, melainkan relasi kasih. Anggur baru Injil kadang menuntut cara berpikir yang baru. Kita dapat bertanya, kebiasaan lama mana yang membuat hati kita sulit menampung sukacita yang Tuhan berikan.",
    refleksi: ["Apakah imanku terasa sebagai relasi kasih atau hanya kewajiban?", "Kantong lama apa dalam diriku yang perlu diperbarui?"],
  },
  "B:ot-9": {
    renungan: "Murid-murid memetik bulir gandum pada hari Sabat, dan orang Farisi mempersoalkannya. Yesus menjawab bahwa Sabat diadakan untuk manusia, bukan manusia untuk Sabat. Di sinagoge, Ia menyembuhkan seorang yang tangannya mati, sambil bertanya apakah pada hari Sabat orang boleh berbuat baik atau berbuat jahat. Kitab Ulangan mengingatkan bahwa Sabat adalah hari untuk mengingat pembebasan dari perbudakan, juga bagi hamba dan orang asing. Hari Tuhan adalah karunia untuk istirahat, ibadat, dan berbuat baik. Kita dapat memeriksa cara kita menjalani hari Minggu: apakah memulihkan hidup, memberi ruang bagi Tuhan dan keluarga, serta kebaikan bagi yang membutuhkan.",
    refleksi: ["Bagaimana aku menjalani hari Minggu sebagai hari Tuhan?", "Aturan apa yang kadang kupakai untuk menghindari berbuat baik?"],
  },
  "B:ot-10": {
    renungan: "Keluarga Yesus mengira Ia tidak waras, dan ahli Taurat menuduh-Nya bersekutu dengan Beelzebul. Yesus menjawab dengan tenang bahwa kerajaan yang terpecah tidak dapat bertahan. Ia juga mengingatkan tentang menghujat Roh Kudus, yaitu menutup diri terhadap karya Allah. Lalu Ia memandang orang-orang di sekeliling-Nya dan berkata, siapa pun yang melakukan kehendak Allah, dialah saudara-Ku dan ibu-Ku. Dalam Kitab Kejadian, manusia pertama bersembunyi dan saling menyalahkan setelah berdosa. Yesus membentuk keluarga baru yang tidak dibangun dari darah, tetapi dari ketaatan pada kehendak Allah. Kita diajak menjadi bagian dari keluarga itu dengan hati yang terbuka.",
    refleksi: ["Apakah aku sering menyalahkan orang lain daripada mengakui kesalahanku?", "Bagaimana aku dapat melakukan kehendak Allah hari ini sebagai anggota keluarga Yesus?"],
  },
  "B:ot-11": {
    renungan: "Kerajaan Allah seperti benih yang ditaburkan di tanah. Petani tidur dan bangun, benih itu tumbuh tanpa ia ketahui bagaimana. Kerajaan itu juga seperti biji sesawi, yang paling kecil, tetapi tumbuh menjadi tanaman besar tempat burung bernaung. Yehezkiel melukiskan Tuhan yang mengambil ranting kecil dan menanamnya hingga menjadi pohon aras yang megah. Allah bekerja dengan cara yang tenang dan sering tak terlihat. Kita tidak selalu melihat hasil dari doa, pendidikan anak, atau pelayanan kita. Paulus berkata kita hidup karena percaya, bukan karena melihat. Kita dapat terus menabur kebaikan kecil dengan sabar dan menyerahkan pertumbuhannya kepada Tuhan.",
    refleksi: ["Benih kecil apa yang sedang kutabur dan perlu kupercayakan kepada Tuhan?", "Apakah aku cukup sabar menanti pertumbuhan yang tidak segera terlihat?"],
  },
  "B:ot-12": {
    renungan: "Saat menyeberang danau, angin taufan mengamuk dan ombak masuk ke perahu. Yesus tidur di buritan. Para murid membangunkan-Nya: Guru, tidakkah Engkau peduli kalau kita binasa? Yesus bangun, menghardik angin, dan danau menjadi teduh. Lalu Ia bertanya mengapa mereka begitu takut dan belum percaya. Dalam Kitab Ayub, Tuhan berbicara dari dalam badai sebagai Dia yang menetapkan batas bagi laut. Pertanyaan para murid sering menjadi pertanyaan kita juga. Yesus tidak marah karena mereka berseru, tetapi mengajak mereka percaya bahwa Ia ada di perahu yang sama. Di tengah badai hidup, kita dapat berseru kepada-Nya dengan jujur.",
    refleksi: ["Badai apa yang sedang mengguncang perahuku saat ini?", "Apakah aku percaya Yesus tetap ada bersamaku meski tampak diam?"],
  },
  "B:ot-13": {
    renungan: "Dua kisah terjalin: Yairus memohon kesembuhan bagi putrinya yang hampir mati, dan di tengah jalan seorang perempuan yang sakit pendarahan dua belas tahun menjamah jubah Yesus. Yesus berhenti, mencari dia, dan menyebutnya anak-Ku, imanmu telah menyelamatkan engkau. Lalu kabar datang bahwa anak Yairus sudah mati. Yesus berkata, jangan takut, percaya saja. Ia memegang tangan anak itu dan membangunkannya. Kitab Kebijaksanaan menegaskan bahwa Allah tidak menciptakan maut. Yesus punya waktu bagi yang terlupakan dan bagi yang putus asa. Kita dapat membawa kepada-Nya penantian panjang kita, percaya bahwa Ia tidak terlambat.",
    refleksi: ["Penantian panjang apa yang ingin kubawa kepada Yesus?", "Siapa orang yang terlupakan yang perlu kuperhatikan seperti Yesus berhenti bagi perempuan itu?"],
  },
  "B:ot-14": {
    renungan: "Yesus kembali ke Nazaret dan mengajar di sinagoge. Orang-orang heran, tetapi heran yang menolak: bukankah Ia ini tukang kayu, anak Maria? Mereka terlalu merasa mengenal-Nya sehingga tidak dapat melihat karya Allah. Yesus pun heran atas ketidakpercayaan mereka. Yehezkiel diutus kepada umat yang keras kepala, entah mereka mendengar atau tidak. Paulus bersaksi bahwa justru dalam kelemahan, kuasa Kristus menjadi sempurna. Kadang kita sulit menerima Tuhan yang berbicara lewat orang yang kita anggap biasa, keluarga sendiri, atau pengalaman sederhana. Hari ini kita dapat lebih terbuka mendengar Tuhan dalam hal-hal yang tampak akrab dan biasa.",
    refleksi: ["Lewat siapa yang kuanggap biasa Tuhan mungkin sedang berbicara kepadaku?", "Kelemahan apa yang dapat menjadi tempat kuasa Kristus bekerja?"],
  },
  "B:ot-15": {
    renungan: "Yesus mengutus kedua belas murid berdua-dua. Ia memberi mereka kuasa, tetapi meminta mereka berjalan dengan bekal yang sangat sedikit: tongkat, sandal, tanpa roti, kantong, atau uang. Mereka harus bergantung pada Allah dan pada keramahan orang. Bila ditolak, mereka cukup mengebaskan debu dan pergi. Amos bersaksi bahwa ia hanyalah peternak dan pemungut buah ara ketika Tuhan memanggilnya bernubuat. Paulus memuji Allah yang telah memilih kita dalam Kristus sebelum dunia dijadikan. Perutusan tidak bergantung pada perlengkapan yang hebat, tetapi pada kepercayaan. Kita dapat bersaksi di tempat kita dengan sederhana, tanpa menunggu merasa siap sepenuhnya.",
    refleksi: ["Bekal apa yang terlalu kuandalkan sehingga aku sulit bergantung pada Tuhan?", "Kepada siapa Tuhan mengutusku minggu ini?"],
  },
  "B:ot-16": {
    renungan: "Para rasul kembali dan melaporkan semua yang mereka lakukan. Yesus mengajak mereka pergi ke tempat sunyi untuk beristirahat, sebab begitu banyak orang datang sehingga makan pun mereka tidak sempat. Namun orang banyak mendahului mereka. Melihat mereka seperti domba tanpa gembala, Yesus tergerak oleh belas kasihan dan mengajar mereka. Yeremia mengecam gembala yang membiarkan domba tercerai-berai, dan Tuhan berjanji sendiri mengumpulkan umat-Nya. Paulus berkata Kristus adalah damai kita yang merobohkan tembok pemisah. Yesus menghargai istirahat, tetapi hati-Nya tetap peka terhadap kebutuhan. Kita diajak menjaga keseimbangan itu: beristirahat bersama Tuhan dan tetap berbelas kasih.",
    refleksi: ["Apakah aku memberi diriku istirahat yang cukup bersama Tuhan?", "Bagaimana aku dapat tetap peka pada kebutuhan orang lain meski lelah?"],
  },
  "B:ot-17": {
    renungan: "Orang banyak mengikuti Yesus, dan Ia bertanya kepada Filipus di mana mereka dapat membeli roti. Filipus menghitung biaya yang tidak mungkin dipenuhi. Andreas menemukan seorang anak dengan lima roti jelai dan dua ikan, sambil bertanya apa artinya itu untuk begitu banyak orang. Yesus mengambil roti, mengucap syukur, dan membagikannya, sampai semua kenyang dan sisanya dikumpulkan dua belas bakul. Elisa pun memberi makan seratus orang dengan dua puluh roti. Paulus mengajak hidup rendah hati dan memelihara kesatuan. Pemberian kecil seorang anak menjadi awal mukjizat. Kita tidak perlu menunggu punya banyak untuk mulai berbagi.",
    refleksi: ["Apakah aku lebih sering menghitung kekurangan daripada menyerahkan yang ada?", "Apa yang dapat kubagikan hari ini meski tampak sedikit?"],
  },
  "B:ot-18": {
    renungan: "Orang banyak mencari Yesus setelah makan roti sampai kenyang. Yesus berkata bahwa mereka mencari-Nya karena roti, lalu mengajak mereka bekerja untuk makanan yang bertahan sampai hidup kekal. Ia menyatakan, Akulah roti hidup; siapa yang datang kepada-Ku tidak akan lapar lagi. Di padang gurun, Israel bersungut-sungut, dan Allah memberi manna serta burung puyuh. Allah memperhatikan kebutuhan tubuh, tetapi juga ingin memuaskan kerinduan yang lebih dalam. Paulus mengajak kita menanggalkan manusia lama dan mengenakan manusia baru. Hari ini kita dapat bertanya, apa yang sebenarnya kucari ketika mencari Tuhan, dan apakah Ekaristi sungguh menjadi makanan hidupku.",
    refleksi: ["Apa yang sebenarnya kucari ketika datang kepada Yesus?", "Kerinduan apa dalam diriku yang hanya dapat dipuaskan oleh Tuhan?"],
  },
  "B:ot-19": {
    renungan: "Orang-orang bersungut karena Yesus berkata Ia roti yang turun dari surga. Bukankah Ia anak Yusuf, yang ibu dan bapanya kita kenal? Yesus menjawab bahwa tidak ada yang dapat datang kepada-Nya jika tidak ditarik oleh Bapa, dan roti yang Ia berikan adalah daging-Nya untuk hidup dunia. Elia, yang putus asa di bawah pohon arar dan ingin mati, dibangunkan malaikat dan diberi makan supaya kuat berjalan empat puluh hari. Tuhan memberi kekuatan bagi perjalanan yang terlalu jauh bagi kita. Paulus mengajak kita saling ramah, penuh kasih mesra, dan saling mengampuni. Ekaristi adalah bekal untuk mengasihi seperti itu.",
    refleksi: ["Kapan aku merasa seperti Elia, lelah dan ingin menyerah?", "Bagaimana Ekaristi menguatkanku untuk perjalanan hidup minggu ini?"],
  },
  "B:ot-20": {
    renungan: "Yesus menegaskan lagi bahwa roti yang Ia berikan adalah daging-Nya, dan siapa yang makan daging-Nya serta minum darah-Nya mempunyai hidup yang kekal. Ia tidak menjelaskan secara teori, tetapi menawarkan persekutuan: tinggal di dalam Dia dan Dia di dalam kita. Kitab Amsal melukiskan Hikmat yang menyiapkan hidangan dan mengundang orang yang tak berpengalaman: datanglah, makanlah rotiku. Paulus menasihati agar kita hidup bijaksana, mempergunakan waktu yang ada, dan mengucap syukur senantiasa. Ekaristi adalah undangan Hikmat Allah sendiri. Kita dapat menjadikan setiap Misa sebagai saat sadar untuk tinggal dalam Kristus, lalu membawa kehadiran-Nya ke dalam hari-hari kita.",
    refleksi: ["Apa artinya bagiku tinggal di dalam Kristus setiap hari?", "Bagaimana aku dapat menyambut Ekaristi dengan hati yang lebih bersyukur?"],
  },
  "B:ot-21": {
    renungan: "Setelah mendengar ajaran tentang roti hidup, banyak murid berkata bahwa perkataan itu keras dan mengundurkan diri. Yesus tidak mengejar mereka dengan melunakkan ajaran-Nya. Ia bertanya kepada kedua belas murid, apakah kamu tidak mau pergi juga? Petrus menjawab, Tuhan, kepada siapakah kami akan pergi? Perkataan-Mu adalah perkataan hidup yang kekal. Yosua menantang umat memilih kepada siapa mereka mau beribadah, dan ia berkata, aku dan seisi rumahku akan beribadah kepada Tuhan. Iman bukan hanya untuk saat mudah. Ada saat kita tidak sepenuhnya mengerti, tetapi tetap tinggal karena percaya bahwa hanya pada Yesus ada hidup.",
    refleksi: ["Ajaran mana dalam iman yang terasa keras bagiku?", "Apa alasanku tetap tinggal bersama Yesus ketika iman terasa sulit?"],
  },
  "B:ot-22": {
    renungan: "Orang Farisi mempersoalkan murid-murid yang makan tanpa mencuci tangan menurut adat. Yesus mengutip Yesaya: bangsa ini memuliakan Aku dengan bibirnya, padahal hatinya jauh dari Aku. Ia menegaskan bahwa yang menajiskan bukan apa yang masuk dari luar, melainkan yang keluar dari hati: pikiran jahat, kesombongan, iri hati, dan sebagainya. Musa mengingatkan umat agar memegang perintah Tuhan sebagai kebijaksanaan mereka. Yakobus menambahkan bahwa ibadah yang murni adalah mengunjungi yatim piatu dan janda serta menjaga diri tidak dicemarkan dunia. Tradisi itu baik, tetapi Tuhan melihat hati. Kita dapat memeriksa apakah praktik rohani kita sungguh mengubah cara kita memperlakukan orang lain.",
    refleksi: ["Apakah ibadahku sejalan dengan isi hatiku?", "Apa yang keluar dari hatiku yang perlu dimurnikan?"],
  },
  "B:ot-23": {
    renungan: "Orang membawa kepada Yesus seorang tuli yang gagap. Yesus memisahkannya dari orang banyak, memasukkan jari ke telinganya, menyentuh lidahnya, menengadah, menarik napas, lalu berkata, Efata, terbukalah. Seketika telinganya terbuka dan ia dapat berbicara dengan baik. Yesus memperlakukan orang itu secara pribadi, dengan sentuhan yang lembut. Yesaya menubuatkan saat telinga orang tuli dibuka dan lidah orang bisu bersorak. Yakobus menegur jemaat yang membeda-bedakan orang kaya dan miskin. Kata Efata juga diucapkan dalam ritus baptis. Kita dapat memohon agar telinga kita terbuka mendengar sabda dan suara orang kecil, dan lidah kita dipakai untuk memuji dan membangun.",
    refleksi: ["Suara siapa yang selama ini tidak kudengar dengan sungguh?", "Bagaimana aku dapat memakai lidahku untuk membangun orang lain?"],
  },
  "B:ot-24": {
    renungan: "Di Kaisarea Filipi, Yesus bertanya kepada murid-murid, siapakah Aku ini? Petrus menjawab bahwa Ia Mesias. Namun ketika Yesus berbicara tentang penderitaan, Petrus menegur-Nya, lalu Yesus balik menegur Petrus. Mengakui Yesus sebagai Mesias berarti menerima jalan salib, bukan hanya kemuliaan. Siapa yang mau mengikuti-Nya harus menyangkal diri dan memikul salib. Yesaya melukiskan Hamba yang tidak memberontak meski dipukul, karena yakin Tuhan menolongnya. Yakobus menegaskan bahwa iman tanpa perbuatan adalah mati. Pengakuan iman kita diuji dalam tindakan, terutama ketika mengikuti Yesus terasa mahal. Kita dapat menerima salib kecil hari ini dengan sabar.",
    refleksi: ["Apakah aku mengikuti Yesus hanya selama jalannya mudah?", "Perbuatan apa yang dapat membuktikan imanku minggu ini?"],
  },
  "B:ot-25": {
    renungan: "Yesus berbicara tentang penderitaan-Nya, tetapi para murid tidak mengerti dan takut bertanya. Dalam perjalanan, mereka justru bertengkar tentang siapa yang terbesar. Yesus duduk, memanggil mereka, dan berkata bahwa siapa ingin menjadi yang pertama harus menjadi pelayan semua. Ia lalu memeluk seorang anak kecil, yang pada masa itu tidak dianggap penting, dan berkata bahwa menyambut anak seperti itu berarti menyambut Dia. Kitab Kebijaksanaan menggambarkan orang fasik yang memusuhi orang benar. Yakobus menunjukkan akar pertengkaran: iri hati dan ambisi. Kebesaran menurut Yesus diukur dari kesediaan melayani yang paling kecil dan tidak terlihat.",
    refleksi: ["Di mana aku diam-diam bersaing ingin menjadi yang terbesar?", "Siapa yang kecil dan tak terlihat yang dapat kusambut hari ini?"],
  },
  "B:ot-26": {
    renungan: "Yohanes melaporkan seseorang yang mengusir setan demi nama Yesus, tetapi bukan dari kelompok mereka, dan para murid mencegahnya. Yesus berkata, jangan cegah dia, sebab barangsiapa tidak melawan kita, ia ada di pihak kita. Bahkan secangkir air yang diberikan karena nama Kristus tidak akan kehilangan upahnya. Dalam Kitab Bilangan, Musa pun berharap seluruh umat menjadi nabi. Namun Yesus juga tegas terhadap apa yang menyesatkan orang kecil dan terhadap dosa dalam diri sendiri. Yakobus memperingatkan orang kaya yang menahan upah pekerja. Kita diajak murah hati terhadap kebaikan orang lain, sekaligus keras terhadap dosa kita sendiri.",
    refleksi: ["Apakah aku sulit mengakui kebaikan yang dilakukan orang di luar kelompokku?", "Kebiasaan apa dalam diriku yang dapat menjadi batu sandungan bagi orang lain?"],
  },
  "B:ot-27": {
    renungan: "Orang Farisi bertanya tentang perceraian untuk mencobai Yesus. Yesus membawa mereka kembali ke awal penciptaan: Allah menjadikan laki-laki dan perempuan, dan keduanya menjadi satu daging. Apa yang dipersatukan Allah tidak boleh diceraikan manusia. Kitab Kejadian menceritakan Allah yang melihat manusia tidak baik sendirian dan memberinya penolong yang sepadan. Lalu Yesus menerima anak-anak kecil, memeluk dan memberkati mereka. Perkawinan dan keluarga adalah rencana kasih Allah, meskipun dijalani dengan rapuh. Surat Ibrani mengingatkan bahwa Yesus tidak malu menyebut kita saudara. Kita dapat mendoakan keluarga yang sedang bergumul dan menjaga kesetiaan dalam relasi kita sendiri.",
    refleksi: ["Bagaimana aku dapat merawat kesetiaan dalam relasi terdekatku?", "Keluarga mana yang sedang bergumul dan perlu kudoakan?"],
  },
  "B:ot-28": {
    renungan: "Seorang pemuda berlari kepada Yesus dan bertanya apa yang harus ia perbuat untuk memperoleh hidup kekal. Ia sudah menuruti perintah sejak muda. Yesus memandang dia dan menaruh kasih kepadanya, lalu berkata bahwa ia masih kekurangan satu hal: menjual hartanya, memberikannya kepada orang miskin, dan mengikuti Dia. Orang itu pergi dengan sedih karena hartanya banyak. Kitab Kebijaksanaan memandang hikmat lebih berharga daripada emas dan permata. Surat Ibrani menyebut sabda Allah hidup dan tajam. Yesus memandang kita dengan kasih sebelum menantang kita. Kita dapat bertanya satu hal apa yang masih menahan kita untuk mengikuti-Nya sepenuhnya.",
    refleksi: ["Satu hal apa yang masih menahan aku untuk mengikuti Yesus sepenuhnya?", "Apakah aku menyadari bahwa Yesus memandangku dengan kasih?"],
  },
  "B:ot-29": {
    renungan: "Yakobus dan Yohanes meminta tempat duduk di kanan dan kiri Yesus dalam kemuliaan-Nya. Murid-murid lain marah. Yesus lalu menjelaskan bahwa di dunia, para penguasa memerintah dengan tangan besi, tetapi di antara murid-Nya tidak demikian. Siapa ingin menjadi besar harus menjadi pelayan, sebab Anak Manusia datang bukan untuk dilayani, melainkan untuk melayani dan memberikan nyawa-Nya. Yesaya menubuatkan Hamba yang menanggung kejahatan banyak orang. Surat Ibrani menghibur bahwa Imam Besar kita dapat turut merasakan kelemahan kita. Hari ini kita dapat memilih satu cara melayani tanpa mengharapkan kedudukan atau balasan.",
    refleksi: ["Apakah pelayananku tersembunyi oleh keinginan untuk diakui?", "Siapa yang dapat kulayani hari ini tanpa mengharapkan balasan?"],
  },
  "B:ot-30": {
    renungan: "Bartimeus, pengemis buta di pinggir jalan Yerikho, mendengar bahwa Yesus lewat. Ia berseru, Yesus, Anak Daud, kasihanilah aku. Banyak orang menyuruhnya diam, tetapi ia berteriak semakin keras. Yesus berhenti dan memanggilnya. Bartimeus menanggalkan jubahnya, melompat, dan datang. Yesus bertanya, apa yang kaukehendaki Kuperbuat bagimu? Setelah dapat melihat, ia mengikuti Yesus di jalan. Yeremia menubuatkan Tuhan yang mengumpulkan kembali orang buta dan lumpuh. Bartimeus mengajarkan doa yang jujur dan gigih. Ia juga meninggalkan jubah, satu-satunya miliknya, demi Yesus. Kita dapat berani mengatakan kepada Tuhan dengan jelas apa yang sungguh kita butuhkan.",
    refleksi: ["Jika Yesus bertanya apa yang kukehendaki, apa jawabanku yang paling jujur?", "Jubah apa yang perlu kutanggalkan untuk datang kepada-Nya?"],
  },
  "B:ot-31": {
    renungan: "Seorang ahli Taurat bertanya hukum manakah yang paling utama. Yesus menjawab dengan doa yang dikenal setiap orang Yahudi: dengarlah, hai Israel, Tuhan Allah kita adalah Tuhan yang esa, kasihilah Tuhan dengan segenap hati, jiwa, akal budi, dan kekuatan. Lalu Ia menambahkan, kasihilah sesamamu seperti dirimu sendiri. Ahli Taurat itu setuju, dan Yesus berkata ia tidak jauh dari Kerajaan Allah. Musa mengajak umat menyimpan perintah ini di dalam hati. Iman kita tidak rumit pada intinya: mendengar, lalu mengasihi. Kita dapat mengulang perintah kasih ini dalam doa pagi sebagai arah bagi seluruh hari.",
    refleksi: ["Apakah aku mengasihi Tuhan dengan segenap diriku atau hanya sebagian?", "Bagaimana aku dapat mengasihi sesama seperti diriku sendiri hari ini?"],
  },
  "B:ot-32": {
    renungan: "Yesus memperingatkan agar waspada terhadap ahli Taurat yang suka dihormati namun menelan rumah janda-janda. Lalu Ia duduk menghadap peti persembahan dan melihat banyak orang kaya memberi dalam jumlah besar. Seorang janda miskin memasukkan dua peser. Yesus berkata bahwa ia memberi lebih banyak daripada semua orang, karena ia memberi dari kekurangannya, seluruh nafkahnya. Janda di Sarfat juga memberi Elia sisa terakhir tepung dan minyaknya, dan tepung itu tidak habis. Allah tidak menilai pemberian dari besarnya, tetapi dari hati dan pengorbanannya. Kita dapat memberi dengan murah hati, entah uang, waktu, atau perhatian, bahkan ketika terasa berkekurangan.",
    refleksi: ["Apakah aku memberi dari kelebihan atau dari hati yang rela berkorban?", "Siapa janda miskin di sekitarku yang memberi teladan bagiku?"],
  },
  "B:ot-33": {
    renungan: "Menjelang akhir tahun liturgi, Yesus berbicara tentang matahari menjadi gelap dan bintang berjatuhan, lalu Anak Manusia datang dalam awan dengan kuasa dan kemuliaan. Ia mengajak kita belajar dari pohon ara: bila rantingnya melembut dan bertunas, musim panas sudah dekat. Langit dan bumi akan berlalu, tetapi perkataan-Nya tidak. Tentang hari dan saatnya, tidak seorang pun tahu. Daniel menubuatkan bahwa orang bijaksana akan bercahaya seperti cakrawala. Bacaan ini tidak dimaksudkan menakut-nakuti, melainkan meneguhkan harapan. Di tengah dunia yang berubah, kita dapat berpegang pada sabda Tuhan yang tetap dan hidup dengan bijak setiap hari.",
    refleksi: ["Pada apa aku berpegang ketika dunia di sekitarku terasa goyah?", "Tanda-tanda apa yang Tuhan pakai untuk mengingatkanku agar bersiap?"],
  },
  "B:christking": {
    renungan: "Di hadapan Pilatus, Yesus ditanya apakah Ia raja orang Yahudi. Yesus menjawab bahwa kerajaan-Nya bukan dari dunia ini; kalau tidak, hamba-hamba-Nya akan berperang. Ia datang untuk memberi kesaksian tentang kebenaran, dan setiap orang yang berasal dari kebenaran mendengarkan suara-Nya. Raja yang diadili itu sebenarnya yang paling bebas di ruangan itu. Daniel melihat Anak Manusia yang menerima kekuasaan kekal, dan Kitab Wahyu menyebut Yesus sebagai Dia yang mengasihi kita dan melepaskan kita dari dosa. Kristus Raja memerintah dengan kebenaran dan kasih, bukan kekerasan. Kita diajak menjadikan Dia raja atas keputusan, kata, dan hati kita.",
    refleksi: ["Apakah Kristus sungguh menjadi raja atas keputusanku sehari-hari?", "Di mana aku perlu lebih berani berpihak pada kebenaran?"],
  },
  "B:lent1": {
    renungan: "Markus menceritakan pencobaan Yesus dengan sangat singkat. Roh memimpin-Nya ke padang gurun selama empat puluh hari, Ia dicobai Iblis, tinggal bersama binatang liar, dan malaikat-malaikat melayani-Nya. Setelah itu Ia mewartakan: waktunya telah genap, bertobatlah dan percayalah kepada Injil. Kitab Kejadian mengisahkan perjanjian Allah dengan Nuh dan pelangi sebagai tandanya. Petrus menghubungkan air bah dengan baptisan yang menyelamatkan. Prapaskah adalah padang gurun kita, waktu yang dipimpin Roh untuk kembali kepada perjanjian Allah. Di tengah pencobaan, Allah tidak meninggalkan kita. Kita dapat memilih satu latihan rohani sederhana dan menjalaninya dengan setia.",
    refleksi: ["Padang gurun apa yang sedang kualami saat ini?", "Latihan rohani apa yang ingin kujalani dengan setia selama Prapaskah?"],
  },
  "B:lent2": {
    renungan: "Abraham diminta mempersembahkan Ishak, anak yang dijanjikan. Dengan hati hancur ia taat, dan Allah menahan tangannya serta menyediakan domba jantan. Di gunung yang lain, Yesus berubah rupa di depan Petrus, Yakobus, dan Yohanes. Pakaian-Nya putih berkilat, dan dari awan terdengar suara Bapa: inilah Anak-Ku yang Kukasihi, dengarkanlah Dia. Paulus menulis bahwa Allah tidak menyayangkan Anak-Nya sendiri, tetapi menyerahkan-Nya bagi kita semua. Apa yang tidak dituntut dari Abraham, Allah sendiri berikan. Dalam Prapaskah, kita diajak mendengarkan Yesus, juga ketika jalan-Nya menuju salib. Jika Allah di pihak kita, kita dapat melangkah dengan percaya.",
    refleksi: ["Apa yang sulit kuserahkan kepada Tuhan seperti Abraham menyerahkan Ishak?", "Bagaimana aku dapat lebih sungguh mendengarkan Yesus minggu ini?"],
  },
  "B:lent3": {
    renungan: "Yesus masuk ke Bait Allah dan mendapati pedagang lembu, kambing domba, merpati, dan penukar uang. Ia membuat cambuk, mengusir mereka, dan berkata, jangan menjadikan rumah Bapa-Ku tempat berjualan. Ketika ditanya tanda apa yang Ia tunjukkan, Ia menjawab, rombak Bait Allah ini dan dalam tiga hari Aku akan membangunnya kembali. Yang Ia maksud adalah tubuh-Nya. Kesepuluh Firman dalam Kitab Keluaran menunjukkan jalan hidup sebagai umat yang merdeka. Paulus menyebut salib kebodohan bagi dunia, tetapi kekuatan Allah. Prapaskah adalah saat Yesus membersihkan bait hati kita. Kita dapat bertanya apa yang perlu disingkirkan agar hati kembali menjadi rumah doa.",
    refleksi: ["Apa yang memenuhi hatiku sehingga tidak ada ruang untuk berdoa?", "Perintah Allah mana yang paling perlu kuperhatikan dalam Prapaskah ini?"],
  },
  "B:lent4": {
    renungan: "Begitu besar kasih Allah akan dunia, sehingga Ia mengaruniakan Anak-Nya yang tunggal. Yesus mengingatkan Nikodemus pada ular tembaga yang ditinggikan Musa di padang gurun: siapa yang memandangnya tetap hidup. Demikian pula Anak Manusia harus ditinggikan di salib. Allah tidak mengutus Anak untuk menghakimi, melainkan menyelamatkan. Namun terang itu juga menyingkapkan, dan ada yang memilih kegelapan. Kitab Tawarikh mengisahkan pembuangan umat yang tidak setia, tetapi Allah tetap membuka jalan pulang. Paulus menegaskan bahwa kita diselamatkan karena kasih karunia. Pada Minggu Laetare ini, kita diajak memandang salib dan berani datang ke dalam terang dengan jujur.",
    refleksi: ["Bagian hidupku mana yang masih kusembunyikan dari terang Tuhan?", "Bagaimana aku menanggapi kasih Allah yang begitu besar bagiku?"],
  },
  "B:lent5": {
    renungan: "Menjelang akhir Prapaskah, Yesus berbicara tentang biji gandum yang harus jatuh ke tanah dan mati supaya menghasilkan banyak buah. Ia sendiri merasakan hati-Nya gelisah, tetapi tetap memilih memuliakan nama Bapa. Melalui Yeremia, Allah menjanjikan perjanjian baru yang ditulis di dalam hati, bukan sekadar di atas batu. Hati yang baru itu lahir ketika kita berani melepaskan sesuatu demi kasih: gengsi, kenyamanan, atau keinginan untuk selalu benar. Hari ini, mungkin ada satu hal kecil yang perlu \"mati\" dalam diri kita agar orang lain dapat hidup lebih baik. Yesus yang ditinggikan di salib menarik semua orang kepada-Nya, juga kita yang masih ragu.",
    refleksi: ["Apa yang perlu aku lepaskan agar hidupku berbuah bagi orang lain?", "Bagaimana aku menanggapi kegelisahan dengan tetap percaya kepada Bapa?"],
  },
  "B:palm": {
    renungan: "Minggu Palma membuka Pekan Suci dengan sorak \"Hosana\" yang segera berubah menjadi teriakan \"Salibkan Dia\". Kisah sengsara menurut Markus memperlihatkan Yesus yang semakin ditinggalkan: murid tertidur, Petrus menyangkal, semua lari. Namun Ia tetap setia, seperti Hamba dalam Yesaya yang tidak memalingkan muka dari penghinaan. Ada pula sosok-sosok kecil yang setia: perempuan yang mengurapi-Nya, Simon dari Kirene, para perempuan yang memandang dari jauh. Pekan ini kita diajak berjalan bersama Yesus, bukan hanya menonton. Kesetiaan sering tampak sederhana: tetap hadir, tetap berdoa, tetap mengasihi ketika keadaan tidak lagi menyenangkan.",
    refleksi: ["Di bagian kisah sengsara mana aku paling melihat diriku sendiri?", "Bagaimana aku bisa setia mendampingi Yesus sepanjang Pekan Suci ini?"],
  },
  "B:holythu": {
    renungan: "Pada Misa Krisma, Gereja mendengar Yesus membaca nubuat Yesaya di Nazaret: Roh Tuhan ada pada-Ku untuk menyampaikan kabar baik kepada orang miskin, membebaskan yang tertawan, dan memberi penglihatan kepada yang buta. Lalu Ia berkata, \"Hari ini\" nas itu genap. Kamis Putih mengingatkan bahwa seluruh umat diurapi untuk ambil bagian dalam perutusan Kristus, dan para imam ditahbiskan untuk melayani umat itu. Doakanlah para imam yang hari ini membarui janji imamatnya. Kita pun diutus membawa minyak penghiburan: mengunjungi yang sakit, mendengarkan yang terluka, membela yang lemah.",
    refleksi: ["Kabar baik apa yang dapat aku bawa kepada seseorang hari ini?", "Sudahkah aku mendoakan imam-imam yang melayaniku?"],
  },
  "B:goodfri": {
    renungan: "Jumat Agung mengajak kita hening di depan salib. Dalam kisah sengsara menurut Yohanes, Yesus tampil tenang dan berdaulat: Ia sendiri maju ke depan para prajurit, berbicara tentang kebenaran di hadapan Pilatus, menyerahkan ibu-Nya kepada murid yang dikasihi, lalu berkata, \"Sudah selesai.\" Yesaya melukiskan Hamba yang tertikam karena pemberontakan kita dan oleh bilur-bilurnya kita disembuhkan. Salib bukan kekalahan, melainkan puncak kasih Allah yang menyerahkan diri sampai habis. Hari ini, cukup memandang salib dengan hati yang jujur, membawa dosa dan luka kita, lalu membiarkan kasih itu menyembuhkan.",
    refleksi: ["Luka atau dosa apa yang ingin aku serahkan di kaki salib hari ini?", "Apa artinya bagiku bahwa Yesus berkata \"Sudah selesai\"?"],
  },
  "B:eastervigil": {
    renungan: "Malam Paskah dimulai dengan kisah penciptaan: Allah berfirman dan terang pun jadi, dan semua yang dijadikan-Nya sungguh amat baik. Malam ini terang itu bersinar lagi dari makam yang kosong. Para perempuan datang membawa rempah-rempah dan khawatir siapa yang akan menggulingkan batu, tetapi batu itu sudah terguling. Orang muda berjubah putih berkata, \"Jangan takut,\" Yesus telah bangkit dan mendahului mereka ke Galilea. Kekhawatiran kita sering seperti batu besar itu, padahal Allah sudah bertindak lebih dahulu. Di Galilea, di tengah hidup sehari-hari, Tuhan yang bangkit menanti untuk dijumpai.",
    refleksi: ["\"Batu besar\" apa yang selama ini membuatku cemas?", "Di mana \"Galilea\"-ku, tempat Tuhan yang bangkit menantiku?"],
  },
  "B:easter": {
    renungan: "Pagi Paskah dimulai dengan kebingungan. Maria Magdalena melihat batu sudah diambil dan mengira jenazah Yesus dicuri. Petrus dan murid yang lain berlari ke makam; murid itu masuk, melihat kain kafan terletak rapi, \"dan percaya.\" Iman Paskah sering bertumbuh pelan, dari tanda-tanda kecil menuju keyakinan. Dalam bacaan pertama, Petrus yang dulu menyangkal kini bersaksi berani bahwa Allah membangkitkan Yesus. Kebangkitan mengubah orang yang ketakutan menjadi saksi. Hari ini, sukacita Paskah dapat kita wartakan lewat wajah yang damai, pengampunan yang tulus, dan harapan yang tidak mudah padam.",
    refleksi: ["Tanda kecil apa yang pernah menguatkan imanku akan kebangkitan?", "Bagaimana aku menjadi saksi sukacita Paskah hari ini?"],
  },
  "B:easter2": {
    renungan: "Pada Minggu Kerahiman Ilahi, Yesus yang bangkit datang menembus pintu terkunci dan berkata, \"Damai sejahtera bagimu.\" Ia menunjukkan luka-luka-Nya, menghembuskan Roh Kudus, dan memberi kuasa mengampuni dosa. Tomas yang tidak hadir menuntut bukti, dan Yesus tidak menolaknya; Ia datang lagi dan mengundang Tomas menyentuh luka-Nya. Kerahiman Allah sabar terhadap keraguan kita. Kisah Para Rasul menunjukkan buahnya: jemaat sehati sejiwa dan tidak ada yang berkekurangan karena mereka saling berbagi. Iman yang telah disentuh kerahiman akan terbuka kepada sesama yang membutuhkan.",
    refleksi: ["Pintu hati mana yang masih kukunci karena takut?", "Siapa yang dapat kubantu hari ini sebagai buah kerahiman Allah?"],
  },
  "B:easter3": {
    renungan: "Para murid ketakutan dan menyangka melihat hantu. Yesus yang bangkit tidak memarahi mereka; Ia menunjukkan tangan dan kaki-Nya, bahkan meminta makanan dan makan di depan mereka. Kebangkitan itu nyata, bukan khayalan. Lalu Ia membuka pikiran mereka untuk mengerti Kitab Suci dan mengutus mereka memberitakan pertobatan dan pengampunan dosa. Petrus dalam bacaan pertama melakukan hal itu: ia mengajak orang bertobat supaya dosa-dosa mereka dihapuskan. Tuhan juga hadir di meja kita, dalam Sabda dan Ekaristi. Kehadiran-Nya menenangkan keraguan dan menggerakkan kita menjadi saksi.",
    refleksi: ["Keraguan apa yang ingin kubawa kepada Yesus yang bangkit?", "Bagaimana Sabda Tuhan membuka pikiranku minggu ini?"],
  },
  "B:easter4": {
    renungan: "Yesus menyebut diri-Nya Gembala yang Baik, yang memberikan nyawa-Nya bagi domba-domba. Berbeda dengan orang upahan yang lari saat serigala datang, Ia mengenal domba-domba-Nya dan tetap tinggal. Ia juga berbicara tentang domba-domba lain yang belum masuk kandang ini; kasih-Nya terbuka bagi semua. Petrus dalam Kisah Para Rasul menegaskan bahwa keselamatan hanya ada di dalam nama Yesus. Pada Minggu Panggilan ini, kita mendoakan para gembala Gereja. Kita juga bisa bertanya: kepada siapa aku dipanggil untuk peduli seperti gembala, di rumah, di kantor, atau di lingkungan?",
    refleksi: ["Apakah aku sungguh mendengar suara Gembala dalam hidupku?", "Siapa yang dipercayakan Tuhan kepadaku untuk kujaga dengan setia?"],
  },
  "B:easter5": {
    renungan: "\"Akulah pokok anggur dan kamulah ranting-rantingnya.\" Gambaran sederhana ini menyatakan bahwa hidup kita berbuah hanya bila tetap tinggal di dalam Yesus. Ranting yang terlepas akan kering; ranting yang berbuah pun dibersihkan supaya lebih lebat. Dalam bacaan pertama, Paulus yang baru bertobat diterima jemaat berkat Barnabas, dan Gereja bertumbuh dalam damai. Tinggal di dalam Yesus berarti setia pada doa, Sabda, dan sakramen, juga rela dimurnikan lewat pengalaman sulit. Buahnya tampak dalam kasih yang konkret, seperti Barnabas yang berani membuka pintu bagi orang lain.",
    refleksi: ["Apa yang membuatku tetap terhubung dengan Yesus setiap hari?", "Siapa yang perlu kusambut seperti Barnabas menyambut Paulus?"],
  },
  "B:easter6": {
    renungan: "Yesus berkata, \"Tinggallah di dalam kasih-Ku,\" dan memberi satu perintah: saling mengasihi seperti Ia mengasihi. Ia tidak lagi menyebut murid-murid hamba, tetapi sahabat. Kita tidak memilih Dia; Dialah yang memilih kita. Dalam bacaan pertama, Petrus menyaksikan Roh Kudus turun atas Kornelius dan keluarganya, orang bukan Yahudi, dan sadar bahwa Allah tidak membeda-bedakan orang. Kasih Allah selalu lebih luas dari batas-batas kita. Menjadi sahabat Yesus berarti ikut mengasihi tanpa memilih-milih, bahkan kepada orang yang berbeda dengan kita.",
    refleksi: ["Apa artinya bagiku disebut sahabat oleh Yesus?", "Kepada siapa aku perlu memperluas kasihku tanpa membeda-bedakan?"],
  },
  "B:easter7": {
    renungan: "Sebelum sengsara, Yesus berdoa bagi murid-murid-Nya: \"Bapa yang Kudus, jagalah mereka.\" Ia tidak meminta mereka diambil dari dunia, tetapi dilindungi dari yang jahat dan dikuduskan dalam kebenaran. Ia ingin sukacita-Nya penuh dalam diri mereka. Dalam Kisah Para Rasul, jemaat berdoa bersama lalu memilih Matias untuk melanjutkan kesaksian para rasul. Kita hidup di tengah dunia, dengan segala tantangannya, tetapi tidak sendirian: Yesus sendiri mendoakan kita. Hari ini kita bisa membalas doa itu dengan setia menjalani perutusan kecil kita, di tempat kita berada.",
    refleksi: ["Bagaimana rasanya mengetahui bahwa Yesus mendoakanku?", "Di tengah dunia, di mana aku dipanggil menjadi saksi kebenaran?"],
  },
  "B:ascension": {
    renungan: "Sebelum terangkat ke surga, Yesus mengutus para murid: \"Pergilah ke seluruh dunia, beritakanlah Injil.\" Kenaikan bukan perpisahan yang membuat kita sendirian. Markus mencatat bahwa para murid pergi memberitakan, dan Tuhan turut bekerja dan meneguhkan firman itu. Dalam Kisah Para Rasul, dua orang berpakaian putih bertanya mengapa mereka terus menatap ke langit. Iman tidak membuat kita hanya menengadah, tetapi menggerakkan kita turun ke jalan, ke tempat kerja, ke tengah keluarga. Di sana kita menjadi tangan dan suara Kristus, dengan keyakinan bahwa Ia bekerja bersama kita.",
    refleksi: ["Di mana aku diutus memberitakan Injil lewat hidupku minggu ini?", "Apakah aku percaya Tuhan turut bekerja dalam usahaku yang sederhana?"],
  },
  "B:pentecost": {
    renungan: "Kisah Menara Babel menunjukkan manusia yang ingin mencari nama bagi dirinya sendiri, dan akhirnya tercerai-berai karena tidak lagi saling mengerti. Pentakosta adalah kebalikannya: Roh Kudus mempersatukan orang dari berbagai bangsa. Yesus berseru, \"Siapa yang haus, hendaklah ia datang kepada-Ku dan minum,\" dan dari hati orang percaya akan mengalir aliran air hidup. Roh Kudus bukan hanya untuk peristiwa besar, tetapi untuk hati yang kering dalam hidup sehari-hari. Hari ini kita bisa memohon Roh itu agar kata-kata kita membangun, bukan memecah belah.",
    refleksi: ["Di bagian hidup mana aku paling haus akan Roh Kudus?", "Apakah kata-kataku lebih sering mempersatukan atau memecah belah?"],
  },
  "B:trinity": {
    renungan: "Di sebuah bukit di Galilea, Yesus yang bangkit mengutus para murid untuk menjadikan semua bangsa murid-Nya dan membaptis mereka dalam nama Bapa, Putra, dan Roh Kudus. Beberapa murid masih ragu, tetapi Ia tetap mempercayakan perutusan itu dan berjanji menyertai sampai akhir zaman. Musa dalam Ulangan mengajak umat merenungkan betapa dekatnya Allah yang berbicara dan membebaskan mereka. Allah Tritunggal bukan teka-teki yang jauh, melainkan persekutuan kasih yang merangkul kita sejak pembaptisan. Setiap kali membuat tanda salib, kita mengingat bahwa hidup kita berada di dalam kasih itu.",
    refleksi: ["Apa yang kurasakan saat membuat tanda salib dengan sadar?", "Bagaimana aku bisa berbagi kasih Allah Tritunggal dalam keluargaku?"],
  },
  "B:corpus": {
    renungan: "Pada perjamuan malam terakhir, Yesus mengambil roti dan berkata, \"Inilah tubuh-Ku,\" lalu mengambil cawan: \"Inilah darah-Ku, darah perjanjian.\" Di Sinai, Musa memercikkan darah perjanjian kepada umat yang berjanji melakukan firman Tuhan. Dalam Ekaristi, perjanjian baru itu dimeteraikan dalam diri Yesus sendiri. Menarik juga bahwa para murid diminta menyiapkan ruang perjamuan. Kita pun perlu menyiapkan hati sebelum menyambut Tubuh Kristus: datang lebih awal, hening sejenak, berdamai dengan sesama. Ekaristi yang diterima dengan sungguh mengubah kita menjadi pribadi yang rela dibagi bagi orang lain.",
    refleksi: ["Bagaimana aku menyiapkan hati sebelum menyambut Ekaristi?", "Dengan cara apa hidupku dapat \"dibagi\" bagi sesama minggu ini?"],
  },
  "B:sacredheart": {
    renungan: "Di kayu salib, seorang prajurit menikam lambung Yesus, dan seketika darah serta air mengalir keluar. Gereja melihat di sana Hati yang terbuka, sumber kasih dan sakramen. Hosea melukiskan Allah seperti orang tua yang mengajar anaknya berjalan, mengangkatnya ke pipi, dan berkata hati-Nya bergejolak karena belas kasihan. Hati Kudus Yesus menunjukkan bahwa Allah tidak membalas ketidaksetiaan kita dengan amarah, melainkan dengan kasih yang terluka namun tetap terbuka. Hari ini kita diundang beristirahat di dalam kasih itu dan belajar memiliki hati yang lembut terhadap sesama.",
    refleksi: ["Kapan aku pernah merasakan kelembutan kasih Allah seperti dalam Hosea?", "Kepada siapa aku perlu bersikap lebih lembut hari ini?"],
  },
  "B:san-0806": {
    renungan: "Pada pesta Yesus Menampakkan Kemuliaan-Nya, Petrus, Yakobus, dan Yohanes melihat Yesus berubah rupa di atas gunung, pakaian-Nya putih berkilau. Petrus ingin mendirikan kemah dan tinggal di sana, tetapi suara dari awan berkata, \"Inilah Anak-Ku yang terkasih, dengarkanlah Dia.\" Lalu mereka hanya melihat Yesus seorang diri dan turun kembali. Daniel melihat Anak Manusia menerima kekuasaan yang kekal. Pengalaman rohani yang indah diberikan untuk menguatkan, bukan untuk ditahan. Kemuliaan itu menemani kita turun gunung, menghadapi hidup biasa sambil terus mendengarkan Dia.",
    refleksi: ["Pengalaman \"gunung\" apa yang pernah menguatkan imanku?", "Bagaimana aku mendengarkan Yesus dalam kesibukan hari ini?"],
  },
  "C:adv1": {
    renungan: "Adven dibuka dengan gambaran yang menggetarkan: tanda-tanda di matahari, bulan, dan bintang, bangsa-bangsa yang cemas. Namun Yesus justru berkata, \"Bangkitlah dan angkatlah kepalamu, sebab penyelamatanmu sudah dekat.\" Yeremia menubuatkan Tunas adil dari keturunan Daud yang membawa keselamatan. Menunggu Tuhan bukan berarti hidup dalam ketakutan, melainkan berjaga-jaga. Yesus mengingatkan agar hati tidak dibebani pesta pora, kemabukan, dan kekhawatiran hidup. Adven ini, kita bisa mulai dengan satu kebiasaan sederhana: waktu doa yang tetap, supaya hati tetap terjaga dan siap menyambut-Nya.",
    refleksi: ["Kekhawatiran apa yang paling membebani hatiku saat ini?", "Kebiasaan doa apa yang ingin kujaga sepanjang Adven?"],
  },
  "C:adv2": {
    renungan: "Lukas mencatat nama-nama penguasa besar pada zamannya, tetapi firman Allah justru datang kepada Yohanes di padang gurun. Allah sering berbicara di tempat sunyi, bukan di pusat kekuasaan. Yohanes menyerukan pertobatan: luruskan jalan, timbun lembah, ratakan gunung. Barukh mengajak Yerusalem menanggalkan pakaian dukacita karena Allah sendiri akan meratakan jalan bagi umat-Nya pulang. Adven adalah waktu untuk menyiapkan jalan di hati: meratakan kesombongan, menimbun kekosongan dengan doa, meluruskan relasi yang bengkok. Semua itu kita lakukan dengan harapan bahwa setiap orang akan melihat keselamatan dari Allah.",
    refleksi: ["\"Gunung\" atau \"lembah\" apa di hatiku yang perlu diratakan?", "Kapan terakhir aku memberi ruang sunyi bagi firman Allah?"],
  },
  "C:adv3": {
    renungan: "Minggu Gaudete mengajak bersukacita. Zefanya berseru agar Sion bersorak karena Tuhan ada di tengah-tengahnya dan bergembira atasnya. Lalu dalam Injil, orang banyak bertanya kepada Yohanes, \"Apa yang harus kami lakukan?\" Jawabannya sangat konkret: yang punya dua baju berbagi dengan yang tidak punya, pemungut cukai jangan menagih lebih, prajurit jangan memeras. Sukacita Adven bukan perasaan kosong, tetapi buah hidup yang jujur dan murah hati. Yohanes juga rendah hati: ia menunjuk kepada Dia yang lebih berkuasa. Hari ini kita bisa bertanya dengan jujur apa yang perlu dilakukan dalam pekerjaan kita sendiri.",
    refleksi: ["Jika aku bertanya \"Apa yang harus kulakukan?\", apa jawaban Tuhan untukku?", "Apa yang dapat kubagikan minggu ini kepada yang berkekurangan?"],
  },
  "C:adv4": {
    renungan: "Maria bergegas mengunjungi Elisabet. Saat salamnya terdengar, anak dalam rahim Elisabet melonjak kegirangan, dan Elisabet penuh Roh Kudus berseru, \"Diberkatilah engkau di antara semua perempuan.\" Mikha menubuatkan pemimpin dari Betlehem, kota kecil yang tak dianggap, yang akan menggembalakan umat dalam damai. Allah memilih yang kecil dan sederhana. Maria membawa Yesus bukan dengan kata-kata panjang, tetapi dengan kehadiran dan perhatian. Menjelang Natal, kunjungan sederhana kepada orang tua, saudara, atau tetangga yang kesepian dapat menjadi cara membawa Kristus.",
    refleksi: ["Siapa yang dapat kukunjungi atau kuhubungi menjelang Natal ini?", "Apakah aku percaya Tuhan bekerja melalui hal-hal kecil dalam hidupku?"],
  },
  "C:christmas": {
    renungan: "Pada Hari Raya Natal, Yohanes membawa kita jauh ke awal: \"Pada mulanya adalah Firman.\" Firman yang bersama Allah itu menjadi manusia dan tinggal di antara kita. Terang yang sejati datang ke dunia, dan kegelapan tidak dapat menguasainya. Yesaya memuji kaki pembawa kabar baik yang mewartakan damai. Natal bukan hanya kisah bayi di palungan, tetapi Allah yang memilih hadir dalam daging manusia. Karena itu, hidup kita yang biasa pun dapat menjadi tempat kemuliaan-Nya tinggal. Siapa yang menerima Dia diberi kuasa menjadi anak-anak Allah.",
    refleksi: ["Di sudut gelap mana dalam hidupku aku membutuhkan Terang Natal?", "Bagaimana aku menyambut Firman yang menjadi manusia hari ini?"],
  },
  "C:holyfamily": {
    renungan: "Yesus yang berusia dua belas tahun tertinggal di Yerusalem, dan Maria serta Yusuf mencari-Nya dengan cemas selama tiga hari. Ketika ditemukan di Bait Allah, Ia berkata harus berada di rumah Bapa-Nya. Mereka tidak mengerti, tetapi Maria menyimpan semua perkara itu dalam hatinya. Keluarga Kudus pun mengalami kebingungan dan salah paham. Putra Sirakh mengajak menghormati orang tua, terutama saat mereka lemah di usia tua. Keluarga menjadi kudus bukan karena tanpa masalah, tetapi karena saling mencari, mendengarkan, dan bersabar. Yesus pun pulang ke Nazaret dan tetap taat.",
    refleksi: ["Bagaimana aku menanggapi saat tidak memahami anggota keluargaku?", "Dengan cara apa aku dapat menghormati orang tuaku minggu ini?"],
  },
  "C:marymother": {
    renungan: "Di awal tahun, Gereja merayakan Maria Bunda Allah. Para gembala bergegas ke Betlehem dan menceritakan apa yang mereka dengar, sementara Maria \"menyimpan segala perkara itu di dalam hatinya.\" Pada hari kedelapan, anak itu diberi nama Yesus. Bacaan pertama memuat berkat Harun: Tuhan memberkati dan melindungi, menyinari dengan wajah-Nya, dan memberi damai. Memulai tahun baru dapat kita lakukan seperti Maria: merenungkan karya Tuhan dengan tenang sebelum sibuk merencanakan. Hari ini juga Hari Perdamaian Sedunia; berkat damai itu dapat kita teruskan kepada orang-orang di sekitar kita.",
    refleksi: ["Peristiwa apa tahun lalu yang ingin kusimpan dan renungkan seperti Maria?", "Kepada siapa aku ingin meneruskan berkat damai di tahun baru ini?"],
  },
  "C:epiphany": {
    renungan: "Orang-orang Majus dari Timur mengikuti bintang untuk mencari Raja yang baru lahir. Mereka bukan bagian dari umat Israel, tetapi justru mereka yang datang menyembah. Sementara itu, Herodes gelisah dan para ahli Taurat tahu jawabannya tetapi tidak berangkat. Yesaya melihat bangsa-bangsa berjalan menuju terang Tuhan. Penampakan Tuhan menegaskan bahwa Kristus datang bagi semua orang. Para Majus mempersembahkan emas, kemenyan, dan mur, lalu pulang melalui jalan lain. Perjumpaan dengan Yesus selalu mengubah arah hidup. Pengetahuan iman pun baru berbuah bila kita mau melangkah mencari Dia.",
    refleksi: ["\"Bintang\" apa yang Tuhan pakai untuk menuntunku kepada-Nya?", "Persembahan apa yang dapat kubawa kepada Yesus tahun ini?"],
  },
  "C:baptism": {
    renungan: "Orang banyak bertanya-tanya apakah Yohanes itu Mesias, tetapi ia menunjuk kepada Dia yang akan membaptis dengan Roh Kudus dan api. Lalu Yesus ikut dibaptis bersama rakyat, dan ketika Ia berdoa, langit terbuka. Roh Kudus turun dan suara berkata, \"Engkaulah Anak-Ku yang terkasih.\" Yesaya melukiskan Hamba yang lembut: buluh yang patah terkulai tidak akan dipatahkannya. Pembaptisan kita pun menjadikan kita anak-anak yang dikasihi Allah. Identitas itu tidak bergantung pada prestasi. Dari kesadaran dikasihi, kita belajar bersikap lembut terhadap orang yang rapuh.",
    refleksi: ["Apakah aku sungguh percaya bahwa aku anak yang dikasihi Allah?", "Siapa \"buluh yang patah\" di sekitarku yang perlu kuperlakukan dengan lembut?"],
  },
  "C:ot-2": {
    renungan: "Di pesta pernikahan di Kana, anggur habis. Maria melihat kebutuhan itu dan berkata kepada Yesus, \"Mereka kehabisan anggur.\" Lalu kepada para pelayan ia berpesan, \"Lakukanlah apa yang Ia katakan kepadamu.\" Air dalam tempayan menjadi anggur yang terbaik. Yesaya menggambarkan Allah yang bersukacita atas umat-Nya seperti mempelai atas pengantinnya. Tanda pertama Yesus terjadi di tengah sukacita keluarga, dalam urusan yang tampak biasa. Ada kalanya hidup kita terasa kehabisan anggur: lelah, hambar, kurang sukacita. Nasihat Maria tetap berlaku: taat pada sabda-Nya, meski hanya mengisi tempayan dengan air.",
    refleksi: ["Di bagian hidup mana aku merasa \"kehabisan anggur\"?", "Apa yang Yesus minta kulakukan, sekecil mengisi tempayan dengan air?"],
  },
  "C:ot-3": {
    renungan: "Lukas menulis Injilnya dengan teliti supaya Teofilus mengetahui kepastian ajaran yang diterimanya. Lalu Yesus membuka kitab Yesaya di sinagoge Nazaret dan berkata, \"Pada hari ini genaplah nas ini.\" Dalam bacaan pertama, Ezra membacakan Kitab Taurat dan umat menangis, tetapi Nehemia berkata, \"Sukacita karena Tuhan itulah perlindunganmu.\" Sabda Allah tidak hanya untuk dibaca, tetapi untuk digenapi hari ini dalam hidup nyata. Yesus datang membawa kabar baik bagi orang miskin dan pembebasan bagi yang tertawan. Minggu ini kita bisa memberi waktu khusus untuk membaca Kitab Suci dengan tenang.",
    refleksi: ["Kalimat Kitab Suci mana yang ingin \"digenapi\" dalam hidupku hari ini?", "Apakah membaca Sabda Allah memberiku sukacita atau terasa sebagai beban?"],
  },
  "C:ot-4": {
    renungan: "Orang-orang Nazaret mula-mula kagum pada kata-kata Yesus, lalu bertanya, \"Bukankah Ia anak Yusuf?\" Kekaguman berubah menjadi amarah ketika Yesus mengingatkan bahwa Allah juga berbelas kasih kepada janda di Sarfat dan Naaman orang Siria. Mereka hendak melemparkan-Nya ke jurang, tetapi Ia berjalan lewat di tengah-tengah mereka. Yeremia dipanggil sejak dalam kandungan dan dijanjikan bahwa Tuhan menyertainya meski ditentang. Kadang kita sulit menerima Tuhan yang bekerja melalui orang yang terlalu kita kenal, atau yang menyapa orang di luar kelompok kita. Hati yang terbuka memberi ruang bagi kejutan Allah.",
    refleksi: ["Apakah aku meremehkan seseorang karena merasa sudah \"mengenalnya\"?", "Bagaimana aku menanggapi saat Allah bekerja di luar dugaanku?"],
  },
  "C:ot-5": {
    renungan: "Simon dan kawan-kawannya sepanjang malam bekerja keras tanpa menangkap apa pun. Lalu Yesus menyuruh mereka bertolak ke tempat yang dalam. Simon menjawab, \"Karena Engkau menyuruhnya, aku akan menebarkan jala.\" Jala pun penuh. Simon tersungkur dan berkata bahwa ia orang berdosa, tetapi Yesus menjawab, \"Jangan takut.\" Yesaya pun merasa najis bibirnya, namun disucikan dan menjawab, \"Ini aku, utuslah aku.\" Allah memanggil bukan orang sempurna, melainkan orang yang rendah hati dan mau taat. Kegagalan kemarin tidak menghalangi Tuhan memakai kita hari ini.",
    refleksi: ["Di mana Yesus mengajakku \"bertolak ke tempat yang dalam\"?", "Apakah rasa tidak layak menghalangiku menjawab panggilan Tuhan?"],
  },
  "C:ot-6": {
    renungan: "Versi Lukas tentang Sabda Bahagia terasa tajam: berbahagialah yang miskin, yang lapar, yang menangis; celakalah yang kaya, yang kenyang, yang tertawa sekarang. Yesus tidak memuja penderitaan, tetapi menyatakan bahwa Allah berpihak pada yang kecil dan bahwa rasa cukup diri bisa menutup hati. Yeremia membandingkan orang yang mengandalkan manusia dengan semak di padang gurun, dan orang yang mengandalkan Tuhan dengan pohon di tepi air. Pertanyaannya bukan berapa banyak yang kita punya, tetapi di mana kita menaruh harapan. Hari ini kita bisa memeriksa sandaran hati kita dengan jujur.",
    refleksi: ["Pada apa atau siapa aku paling mengandalkan hidupku?", "Bagaimana aku bisa lebih dekat dengan mereka yang miskin dan berduka?"],
  },
  "C:ot-7": {
    renungan: "\"Kasihilah musuhmu, berbuat baiklah kepada orang yang membenci kamu.\" Perintah Yesus ini menantang naluri membalas. Daud memberi contoh nyata: ia mendapati Saul tertidur dan berkesempatan membunuhnya, tetapi ia tidak mau menjamah orang yang diurapi Tuhan. Yesus mengajak kita murah hati seperti Bapa yang baik kepada orang yang tidak tahu berterima kasih. Ukuran yang kita pakai untuk orang lain akan dipakai pula untuk kita. Mengasihi musuh tidak berarti membiarkan kejahatan, tetapi menolak membalas dengan kebencian. Langkah kecilnya bisa dimulai dengan mendoakan orang yang menyakiti kita.",
    refleksi: ["Siapa orang yang sulit kukasihi dan dapat kudoakan hari ini?", "Ukuran apa yang selama ini kupakai untuk menilai orang lain?"],
  },
  "C:ot-8": {
    renungan: "Yesus bertanya, mungkinkah orang buta menuntun orang buta? Ia lalu mengingatkan kita yang mudah melihat selumbar di mata saudara, tetapi tidak menyadari balok di mata sendiri. Pohon yang baik menghasilkan buah yang baik, dan apa yang diucapkan mulut meluap dari hati. Putra Sirakh juga berkata bahwa tutur kata menyatakan isi hati seseorang. Ucapan kita sehari-hari, entah di rumah atau di media sosial, menunjukkan apa yang tersimpan di dalam. Merawat hati lewat doa dan pemeriksaan batin akan membuat kata-kata kita lebih jernih dan membangun.",
    refleksi: ["\"Balok\" apa di mataku yang perlu kusadari sebelum menilai orang lain?", "Apa yang ditunjukkan kata-kataku minggu ini tentang isi hatiku?"],
  },
  "C:ot-9": {
    renungan: "Seorang perwira Romawi meminta kesembuhan bagi hambanya. Para tua-tua Yahudi berkata ia layak ditolong, tetapi perwira itu, melalui sahabat-sahabatnya, berkata, \"Aku tidak layak menerima Engkau di dalam rumahku.\" Cukup Yesus mengatakan sepatah kata. Yesus heran dan memuji imannya. Dalam bacaan pertama, Salomo berdoa agar Allah mendengarkan juga orang asing yang datang berdoa di Bait-Nya. Kata-kata perwira itu kita ucapkan dalam setiap Misa sebelum komuni. Iman sejati bersatu dengan kerendahan hati dan kepedulian kepada orang lain, seperti perwira yang memohon bukan untuk dirinya sendiri.",
    refleksi: ["Apakah aku sungguh menghayati kata-kata \"aku tidak layak\" sebelum komuni?", "Untuk siapa aku dapat memohon kepada Yesus hari ini?"],
  },
  "C:ot-10": {
    renungan: "Di pintu gerbang kota Nain, Yesus berpapasan dengan arak-arakan jenazah anak tunggal seorang janda. Ketika melihat ibu itu, \"tergeraklah hati-Nya oleh belas kasihan,\" dan Ia berkata, \"Jangan menangis.\" Ia menyentuh usungan, membangkitkan pemuda itu, lalu menyerahkannya kepada ibunya. Elia dalam bacaan pertama juga mengembalikan anak janda di Sarfat. Allah tidak jauh dari duka manusia; Ia melihat, berhenti, dan menyentuh. Kita pun dapat menjadi tanda belas kasih itu dengan berhenti sejenak bagi orang yang berduka, mendengarkan, dan hadir.",
    refleksi: ["Siapa di sekitarku yang sedang berduka dan membutuhkan kehadiranku?", "Bagaimana aku mengalami belas kasih Yesus dalam dukaku sendiri?"],
  },
  "C:ot-11": {
    renungan: "Seorang perempuan yang dikenal berdosa datang ke rumah Simon orang Farisi, membasahi kaki Yesus dengan air mata, menyekanya dengan rambut, dan meminyakinya. Simon menilai dalam hati, tetapi Yesus bercerita tentang dua orang yang dihapus utangnya. \"Dosanya yang banyak telah diampuni, sebab ia telah banyak berbuat kasih.\" Daud dalam bacaan pertama, ketika ditegur Natan, mengaku, \"Aku sudah berdosa kepada Tuhan,\" dan diampuni. Kesadaran akan pengampunan melahirkan kasih yang besar. Orang yang merasa tidak butuh diampuni mudah menghakimi. Sakramen Tobat menjadi tempat kita mengalami kasih yang memulihkan itu.",
    refleksi: ["Apakah aku lebih mirip Simon atau perempuan itu?", "Kapan terakhir aku mengalami pengampunan dalam Sakramen Tobat?"],
  },
  "C:ot-12": {
    renungan: "Setelah berdoa seorang diri, Yesus bertanya kepada murid-murid, \"Menurut kamu, siapakah Aku ini?\" Petrus menjawab, \"Mesias dari Allah.\" Namun Yesus segera menjelaskan bahwa Anak Manusia harus menderita, lalu mengajak setiap orang menyangkal diri dan memikul salibnya setiap hari. Zakharia menubuatkan umat yang memandang dia yang telah mereka tikam, dan dari sana terbuka sumber penyucian. Pertanyaan Yesus tetap pribadi: bukan apa kata orang, melainkan siapa Dia bagiku. Jawaban itu tampak dalam kesediaan memikul salib kecil sehari-hari dengan setia.",
    refleksi: ["Jika Yesus bertanya kepadaku, \"Siapakah Aku ini?\", apa jawabanku?", "Salib harian apa yang perlu kupikul dengan lebih setia?"],
  },
  "C:ot-13": {
    renungan: "Yesus membulatkan hati pergi ke Yerusalem. Ketika desa Samaria menolak-Nya, Yakobus dan Yohanes ingin menurunkan api dari langit, tetapi Yesus menegur mereka. Di perjalanan, beberapa orang ingin mengikuti-Nya, namun selalu ada \"tetapi\": izinkan aku dulu. Yesus menjawab tegas bahwa orang yang membajak sambil menoleh ke belakang tidak layak bagi Kerajaan Allah. Elisa dalam bacaan pertama meninggalkan lembunya, berpamitan, lalu mengikuti Elia. Mengikuti Yesus menuntut keputusan yang utuh, bukan setengah hati. Kita juga diajak menolak cara kekerasan ketika ditolak orang lain.",
    refleksi: ["\"Tetapi\" apa yang sering menunda kesediaanku mengikuti Yesus?", "Bagaimana aku menanggapi penolakan tanpa membalas?"],
  },
  "C:ot-14": {
    renungan: "Yesus mengutus tujuh puluh murid berdua-dua, tanpa kantong uang atau bekal berlebih, seperti anak domba ke tengah serigala. Pesan pertama mereka: \"Damai sejahtera bagi rumah ini.\" Ketika kembali dengan gembira karena roh-roh jahat takluk, Yesus berkata, bersukacitalah karena namamu terdaftar di surga. Yesaya menggambarkan Allah yang menghibur umat-Nya seperti ibu menghibur anaknya. Perutusan bukan hanya untuk imam dan biarawan; setiap orang yang dibaptis diutus membawa damai. Sukacita terdalam bukan pada keberhasilan, tetapi pada kenyataan bahwa kita dikasihi dan dimiliki Allah.",
    refleksi: ["Rumah atau tempat mana yang dapat kubawakan damai minggu ini?", "Apakah sukacitaku lebih bergantung pada keberhasilan atau pada kasih Allah?"],
  },
  "C:ot-15": {
    renungan: "Seorang ahli Taurat bertanya, \"Siapakah sesamaku?\" Yesus menjawab dengan kisah orang Samaria yang murah hati. Imam dan orang Lewi lewat begitu saja, tetapi orang Samaria, yang dianggap asing, berhenti, membalut luka, dan menanggung biaya perawatan. Yesus lalu membalik pertanyaannya: siapakah yang menjadi sesama bagi orang itu? Dalam Ulangan, Musa berkata bahwa firman Tuhan itu tidak jauh, melainkan dekat, di mulut dan di hati. Kasih kepada sesama bukan teori, tetapi tindakan berhenti dan peduli. Hari ini mungkin ada seseorang \"di pinggir jalan\" hidup kita.",
    refleksi: ["Siapa yang selama ini kulewati begitu saja tanpa kusadari?", "Bagaimana aku dapat menjadi sesama bagi seseorang hari ini?"],
  },
  "C:ot-16": {
    renungan: "Marta sibuk melayani, sementara Maria duduk di dekat kaki Yesus mendengarkan perkataan-Nya. Ketika Marta mengeluh, Yesus menjawab lembut, \"Marta, Marta, engkau khawatir dan menyusahkan diri dengan banyak perkara,\" padahal hanya satu yang perlu. Abraham dalam bacaan pertama menyambut tiga tamu dengan murah hati dan menerima janji Allah. Pelayanan itu baik, tetapi mudah berubah menjadi kecemasan jika tidak berakar pada mendengarkan Tuhan. Di tengah kesibukan, beberapa menit duduk diam bersama Yesus dapat mengubah cara kita bekerja dan melayani.",
    refleksi: ["Perkara apa yang paling membuatku khawatir dan sibuk saat ini?", "Kapan aku bisa menyisihkan waktu duduk diam bersama Yesus?"],
  },
  "C:ot-17": {
    renungan: "Para murid meminta, \"Tuhan, ajarlah kami berdoa,\" dan Yesus mengajarkan Doa Bapa Kami. Ia lalu bercerita tentang sahabat yang mengetuk pintu tengah malam dan tetap meminta sampai diberi. \"Mintalah, maka akan diberikan kepadamu.\" Jika ayah di dunia tahu memberi yang baik, terlebih Bapa di surga akan memberikan Roh Kudus. Abraham dalam bacaan pertama tawar-menawar dengan Allah demi orang-orang benar di Sodom. Doa adalah relasi yang akrab dan berani, bukan sekadar hafalan. Allah tidak bosan mendengar; kita diajak tekun, percaya bahwa Ia memberi yang terbaik.",
    refleksi: ["Apakah aku berdoa dengan keakraban seorang anak kepada Bapa?", "Permohonan apa yang ingin kudoakan dengan tekun minggu ini?"],
  },
  "C:ot-18": {
    renungan: "Seseorang meminta Yesus membagi warisan, dan Yesus memperingatkan, \"Berjaga-jagalah terhadap segala ketamakan.\" Ia bercerita tentang orang kaya yang panennya melimpah, lalu sibuk membangun lumbung lebih besar dan berkata kepada dirinya untuk bersenang-senang. Namun Allah berkata, \"Hai orang bodoh, malam ini juga jiwamu akan diambil.\" Pengkhotbah menyebut segala jerih payah tanpa makna sebagai kesia-siaan. Harta bukan dosa, tetapi menjadi berbahaya ketika hidup hanya berpusat pada diri sendiri. Kaya di hadapan Allah berarti berbagi, bersyukur, dan memberi waktu bagi hal yang kekal.",
    refleksi: ["\"Lumbung\" apa yang sedang kubangun dalam hidupku?", "Bagaimana aku dapat menjadi kaya di hadapan Allah minggu ini?"],
  },
  "C:ot-19": {
    renungan: "\"Jangan takut, hai kawanan kecil,\" kata Yesus, sebab Bapa berkenan memberikan Kerajaan. Ia mengajak para murid berjaga dengan pinggang berikat dan pelita menyala, seperti hamba yang menunggu tuannya pulang. Uniknya, tuan yang mendapati hambanya siaga justru akan melayani mereka. Kitab Kebijaksanaan mengenang malam Paskah ketika umat menanti dengan iman akan janji Allah. Berjaga bukan hidup dalam cemas, tetapi setia dalam tanggung jawab sehari-hari, karena di tempat harta kita berada, di situ hati kita berada. Kesetiaan kecil hari ini adalah cara menyambut Tuhan.",
    refleksi: ["Di mana hartaku, dan apakah hatiku juga tertambat di sana?", "Tanggung jawab apa yang perlu kujalani dengan lebih setia?"],
  },
  "C:ot-20": {
    renungan: "Yesus berkata Ia datang melemparkan api ke bumi, dan bukan membawa damai melainkan pertentangan. Kata-kata ini mengejutkan. Kesetiaan kepada-Nya kadang membuat kita berbeda dengan orang di sekitar, bahkan dalam keluarga. Yeremia mengalaminya: karena menyampaikan firman Tuhan, ia dimasukkan ke dalam perigi berlumpur, tetapi Allah menolongnya lewat Ebed-Melekh. Api yang dibawa Yesus adalah semangat kasih dan kebenaran yang memurnikan. Damai sejati bukan menghindari semua konflik, tetapi tetap setia pada kebenaran dengan hati yang lembut. Allah tidak meninggalkan orang yang setia.",
    refleksi: ["Kapan kesetiaanku pada Yesus membuatku berbeda dari orang lain?", "Bagaimana aku menjaga kebenaran tanpa kehilangan kelembutan?"],
  },
  "C:ot-21": {
    renungan: "Seseorang bertanya apakah hanya sedikit orang yang diselamatkan. Yesus tidak memberi angka, tetapi berkata, \"Berusahalah masuk melalui pintu yang sesak itu.\" Mengenal Yesus secara dangkal tidak cukup; makan dan minum di hadapan-Nya tidak otomatis berarti hidup bersama-Nya. Namun Ia juga berkata orang akan datang dari timur, barat, utara, dan selatan untuk duduk dalam Kerajaan Allah. Yesaya menubuatkan Allah mengumpulkan segala bangsa. Keselamatan terbuka bagi semua, tetapi menuntut tanggapan pribadi yang sungguh. Pintu sempit itu adalah jalan kasih dan kerendahan hati setiap hari.",
    refleksi: ["Apakah imanku sudah menjadi hidup, atau masih sebatas kebiasaan?", "Apa \"pintu sempit\" yang perlu kupilih minggu ini?"],
  },
  "C:ot-22": {
    renungan: "Di sebuah perjamuan, Yesus melihat para tamu berebut tempat terhormat. Ia menasihati agar memilih tempat paling rendah, karena siapa yang meninggikan diri akan direndahkan. Kepada tuan rumah, Ia berkata: undanglah orang miskin, cacat, lumpuh, dan buta yang tidak dapat membalas. Putra Sirakh mengajak, semakin besar engkau, semakin rendahkanlah dirimu. Kerendahan hati bukan merasa diri tidak berharga, tetapi berhenti mencari pengakuan. Kebaikan tanpa pamrih mencerminkan kasih Allah sendiri. Minggu ini, kita bisa melakukan kebaikan bagi seseorang yang tidak mungkin membalasnya.",
    refleksi: ["Di mana aku masih mencari \"tempat terhormat\" dan pengakuan?", "Siapa yang dapat kubantu tanpa mengharapkan balasan?"],
  },
  "C:ot-23": {
    renungan: "Banyak orang berbondong-bondong mengikuti Yesus, dan Ia berbalik untuk menegaskan harga menjadi murid: mendahulukan Dia di atas segalanya, memikul salib, dan melepaskan milik. Ia memberi contoh orang yang membangun menara dan raja yang hendak berperang; keduanya perlu menghitung lebih dahulu. Kitab Kebijaksanaan mengakui bahwa manusia sulit memahami kehendak Allah tanpa hikmat dari Roh-Nya. Mengikuti Yesus bukan sekadar ikut-ikutan kerumunan, tetapi keputusan sadar. Bukan berarti tidak mengasihi keluarga, melainkan menempatkan kasih kepada Tuhan sebagai pusat yang menata semua kasih lainnya.",
    refleksi: ["Apa yang paling sulit kulepaskan demi mengikuti Yesus?", "Apakah aku mengikuti Yesus dengan sadar atau sekadar ikut kebiasaan?"],
  },
  "C:ot-24": {
    renungan: "Ketika orang Farisi bersungut karena Yesus makan bersama orang berdosa, Ia menjawab dengan tiga perumpamaan: domba yang hilang, dirham yang hilang, dan anak yang hilang. Dalam ketiganya ada pencarian dan sukacita besar saat yang hilang ditemukan. Bapa berlari menyambut anak bungsu, lalu keluar membujuk anak sulung yang marah. Dalam Keluaran, Musa memohon belas kasihan bagi umat yang membuat anak lembu emas, dan Tuhan menyesali malapetaka yang dirancang-Nya. Allah tidak lelah mencari. Kita diajak bersukacita atas pertobatan orang lain, bukan iri seperti si sulung.",
    refleksi: ["Apakah aku sedang \"hilang\" atau justru bersikap seperti si sulung?", "Bagaimana aku bisa bersukacita atas pertobatan orang lain?"],
  },
  "C:ot-25": {
    renungan: "Yesus memuji bendahara yang tidak jujur, bukan karena kecurangannya, tetapi karena kecerdikannya mempersiapkan masa depan. Anak-anak dunia sering lebih cerdik daripada anak-anak terang. Lalu Ia menegaskan: siapa setia dalam perkara kecil, setia juga dalam perkara besar, dan tak seorang pun dapat mengabdi kepada Allah dan Mamon sekaligus. Amos dengan keras mengecam pedagang yang memeras orang miskin dengan timbangan palsu. Uang adalah alat, bukan tuan. Kejujuran dalam pekerjaan dan kemurahan dalam berbagi adalah cara nyata memilih Allah sebagai Tuan.",
    refleksi: ["Apakah aku jujur dalam hal-hal kecil, termasuk soal uang?", "Bagaimana aku menggunakan hartaku untuk kebaikan sesama?"],
  },
  "C:ot-26": {
    renungan: "Orang kaya itu berpakaian indah dan berpesta setiap hari, sementara Lazarus terbaring di depan pintunya, kelaparan dan penuh borok. Orang kaya itu tidak disebut berbuat jahat secara terang-terangan; dosanya adalah tidak melihat. Setelah mati, keadaan mereka terbalik. Amos mengecam orang yang hidup santai di atas ranjang gading tetapi tidak berduka atas keruntuhan bangsanya. Abraham berkata mereka sudah memiliki Musa dan para nabi. Kita pun sudah memiliki Sabda Tuhan. Pertanyaannya: siapa Lazarus di depan pintu kita yang selama ini tidak kita lihat?",
    refleksi: ["Siapa \"Lazarus\" di sekitarku yang sering tidak kulihat?", "Kenyamanan apa yang membuatku buta terhadap penderitaan orang lain?"],
  },
  "C:ot-27": {
    renungan: "Para rasul meminta, \"Tambahkanlah iman kami.\" Yesus menjawab bahwa iman sebesar biji sesawi pun sanggup menyuruh pohon murbei tercabut dan tertanam di laut. Ia lalu berbicara tentang hamba yang melakukan tugasnya dan berkata, \"Kami hamba-hamba yang tidak berguna; kami hanya melakukan apa yang harus kami lakukan.\" Habakuk mengeluh kepada Tuhan karena kekerasan di sekitarnya, dan Tuhan menjawab bahwa orang benar akan hidup oleh imannya. Iman bukan soal besar-kecilnya perasaan, tetapi kesetiaan melayani tanpa menuntut pujian. Iman bertumbuh ketika kita setia melakukan bagian kita, bahkan saat jawaban Tuhan terasa lambat.",
    refleksi: ["Di mana aku membutuhkan iman meski hanya sebesar biji sesawi?", "Apakah aku melayani dengan rendah hati tanpa menuntut pujian?"],
  },
  "C:ot-28": {
    renungan: "Sepuluh orang kusta berseru meminta belas kasihan, dan Yesus menyuruh mereka memperlihatkan diri kepada imam. Di tengah jalan mereka tahir. Namun hanya satu yang kembali memuliakan Allah dan bersujud, dan ia seorang Samaria. Yesus bertanya, \"Di manakah yang sembilan orang itu?\" Naaman, orang Siria, juga kembali kepada Elisa setelah sembuh dan mengakui Allah Israel. Syukur melengkapi kesembuhan menjadi keselamatan. Kita sering cepat meminta tetapi lambat berterima kasih. Hari ini, kita bisa menyebut satu per satu berkat yang diterima dan kembali bersyukur kepada Tuhan.",
    refleksi: ["Berkat apa yang belum sempat kusyukuri kepada Tuhan?", "Apakah aku termasuk yang kembali atau yang sembilan lainnya?"],
  },
  "C:ot-29": {
    renungan: "Yesus bercerita tentang janda yang terus datang kepada hakim yang tidak takut akan Allah, sampai hakim itu membelanya. Jika hakim lalim saja akhirnya bertindak, terlebih Allah akan membela orang pilihan-Nya yang berseru siang malam. Lalu Ia bertanya, \"Akankah Ia mendapati iman di bumi?\" Dalam Keluaran, Musa berdoa dengan tangan terangkat, dan ketika tangannya lelah, Harun dan Hur menopangnya. Doa yang tekun membutuhkan kesabaran, dan kadang juga dukungan orang lain. Kita bisa saling menopang dalam doa, seperti komunitas yang tidak membiarkan anggotanya menyerah.",
    refleksi: ["Doa apa yang hampir kutinggalkan karena merasa tidak dijawab?", "Siapa yang dapat kutopang dalam doa, seperti Harun dan Hur?"],
  },
  "C:ot-30": {
    renungan: "Dua orang pergi ke Bait Allah untuk berdoa. Orang Farisi berdiri dan bersyukur karena merasa tidak seperti orang lain, lalu menyebut puasa dan persepuluhannya. Pemungut cukai berdiri jauh, tidak berani menengadah, dan berkata, \"Ya Allah, kasihanilah aku orang berdosa ini.\" Yesus berkata, orang inilah yang pulang dibenarkan. Putra Sirakh menegaskan bahwa doa orang yang rendah hati menembus awan. Doa bukan ajang memamerkan prestasi rohani, apalagi membandingkan diri dengan orang lain. Di hadapan Allah, kejujuran tentang kelemahan justru membuka pintu bagi rahmat.",
    refleksi: ["Apakah doaku lebih mirip doa orang Farisi atau pemungut cukai?", "Kepada siapa aku cenderung membandingkan diri dalam hidup rohani?"],
  },
  "C:ot-31": {
    renungan: "Zakheus, kepala pemungut cukai yang kaya, berbadan pendek sehingga memanjat pohon ara untuk melihat Yesus. Yesus berhenti, memanggil namanya, dan berkata, \"Hari ini Aku harus menumpang di rumahmu.\" Orang-orang bersungut, tetapi Zakheus berubah: setengah hartanya untuk orang miskin, dan yang diperasnya dikembalikan empat kali lipat. Kitab Kebijaksanaan berkata Allah mengasihi segala yang ada dan menegur dengan sabar agar orang bertobat. Yesus datang mencari yang hilang. Perjumpaan dengan kasih-Nya, bukan hukuman, yang membuat Zakheus berubah. Pertobatan sejati selalu tampak dalam tindakan nyata.",
    refleksi: ["\"Pohon ara\" apa yang perlu kupanjat untuk melihat Yesus lebih jelas?", "Kesalahan apa yang perlu kupulihkan dengan tindakan nyata?"],
  },
  "C:ot-32": {
    renungan: "Orang Saduki, yang tidak percaya kebangkitan, menyodorkan kisah perempuan yang menikah dengan tujuh bersaudara. Yesus menjawab bahwa hidup di dunia yang akan datang tidak sama dengan hidup sekarang, dan Allah \"bukan Allah orang mati, melainkan Allah orang hidup.\" Dalam Kitab Makabe, tujuh bersaudara dan ibu mereka setia sampai mati karena percaya Allah akan membangkitkan mereka. Harapan akan kebangkitan memberi keberanian untuk setia hari ini. Di bulan November, kita mengenang orang-orang tercinta yang telah meninggal, dengan keyakinan bahwa bagi Allah mereka semua hidup.",
    refleksi: ["Bagaimana harapan akan kebangkitan memengaruhi cara hidupku sekarang?", "Siapa orang tercinta yang telah meninggal yang ingin kudoakan hari ini?"],
  },
  "C:ot-33": {
    renungan: "Ketika orang mengagumi keindahan Bait Allah, Yesus berkata bahwa semuanya akan diruntuhkan. Ia berbicara tentang perang, bencana, dan penganiayaan, tetapi pesan-Nya jelas: jangan disesatkan dan jangan takut. Bahkan sehelai rambut pun tidak akan hilang, dan dengan bertahan kita akan memperoleh hidup. Maleakhi menubuatkan hari Tuhan, ketika bagi yang takut akan nama-Nya akan terbit surya kebenaran. Menjelang akhir tahun liturgi, kita diingatkan bahwa yang tampak megah bisa runtuh, tetapi Allah tetap setia. Ketekunan dalam iman lebih penting daripada menebak-nebak kapan akhir zaman tiba.",
    refleksi: ["Apa yang membuatku cemas tentang masa depan?", "Bagaimana aku dapat bertekun dalam iman di tengah kesulitan?"],
  },
  "C:christking": {
    renungan: "Pada Hari Raya Kristus Raja, kita memandang Raja yang tergantung di salib. Para pemimpin dan prajurit mengejek, \"Selamatkanlah diri-Mu.\" Salah seorang penjahat ikut menghujat, tetapi yang lain menegurnya dan berkata, \"Yesus, ingatlah aku apabila Engkau datang sebagai Raja.\" Yesus menjawab, \"Hari ini juga engkau akan ada bersama-sama dengan Aku di Firdaus.\" Dalam bacaan pertama, suku-suku Israel mengurapi Daud sebagai raja dan gembala. Kerajaan Kristus tidak dibangun dengan kekuasaan, tetapi dengan kasih yang menyelamatkan orang lain. Tak ada kata terlambat untuk berpaling kepada-Nya.",
    refleksi: ["Apakah Kristus sungguh menjadi Raja atas seluruh hidupku?", "Seperti penjahat yang bertobat, apa yang ingin kusampaikan kepada Yesus?"],
  },
  "C:lent1": {
    renungan: "Penuh Roh Kudus, Yesus dibawa ke padang gurun dan dicobai iblis selama empat puluh hari. Tiga godaan itu menyentuh kebutuhan dasar manusia: makanan, kekuasaan, dan pengakuan. Yesus menjawab setiap godaan dengan Sabda Allah, tidak dengan perdebatan panjang. Dalam Ulangan, umat diajak mengingat bahwa Tuhanlah yang membebaskan mereka dari Mesir, lalu mempersembahkan hasil pertama dengan syukur. Prapaskah adalah waktu padang gurun bagi kita: mengenali godaan yang paling sering menjatuhkan dan memperkuat diri dengan doa, puasa, dan Sabda. Ingat juga bahwa iblis hanya pergi \"sampai waktu yang baik\"; kewaspadaan perlu dijaga.",
    refleksi: ["Godaan mana yang paling sering menjatuhkanku?", "Ayat Kitab Suci apa yang dapat menjadi peganganku selama Prapaskah?"],
  },
  "C:lent2": {
    renungan: "Yesus naik ke gunung untuk berdoa, dan ketika Ia berdoa, rupa wajah-Nya berubah. Musa dan Elia berbicara dengan-Nya tentang kepergian-Nya yang akan digenapi di Yerusalem. Para murid hampir tertidur, lalu dari awan terdengar suara, \"Inilah Anak-Ku yang Kupilih, dengarkanlah Dia.\" Abraham dalam bacaan pertama percaya kepada janji Allah ketika diajak memandang bintang-bintang di langit. Transfigurasi memberi gambaran kemuliaan sebelum jalan salib. Di tengah Prapaskah yang mungkin terasa berat, Tuhan memberi saat-saat terang untuk menguatkan. Dalam doa, kita pun perlahan diubah menjadi serupa dengan-Nya.",
    refleksi: ["Kapan terakhir aku merasakan terang Tuhan dalam doa?", "Apakah aku sungguh mendengarkan Yesus, atau tertidur seperti para murid?"],
  },
  "C:lent3": {
    renungan: "Orang-orang menceritakan kepada Yesus tentang korban kekejaman Pilatus dan menara yang runtuh. Yesus menolak anggapan bahwa para korban lebih berdosa, lalu mengajak semua bertobat. Ia bercerita tentang pohon ara yang tidak berbuah; pengurus kebun memohon waktu satu tahun lagi untuk mencangkul dan memupuknya. Di semak duri yang menyala, Allah menyatakan nama-Nya kepada Musa dan berkata, \"Aku telah melihat kesengsaraan umat-Ku.\" Allah peduli dan sabar, tetapi kesabaran-Nya adalah undangan, bukan alasan menunda. Prapaskah ini adalah \"satu tahun lagi\" bagi kita untuk mulai berbuah.",
    refleksi: ["Di bagian hidup mana aku belum berbuah?", "Apa langkah pertobatan konkret yang tidak ingin kutunda lagi?"],
  },
  "C:lent4": {
    renungan: "Perumpamaan anak yang hilang adalah kisah tentang hati Bapa. Anak bungsu menghabiskan warisan, jatuh sampai iri pada makanan babi, lalu \"menyadari keadaannya\" dan pulang. Sebelum ia selesai meminta maaf, bapanya sudah berlari, memeluk, dan mengadakan pesta. Si sulung yang setia justru marah, dan bapa itu keluar membujuknya juga. Dalam Kitab Yosua, umat merayakan Paskah pertama di tanah terjanji dan makan dari hasil negeri itu. Minggu Laetare mengajak bersukacita karena Allah selalu menanti kepulangan kita. Mungkin ini saat yang tepat untuk menerima Sakramen Tobat.",
    refleksi: ["Apakah aku saat ini lebih mirip si bungsu atau si sulung?", "Apa yang menghalangiku pulang kepada Bapa lewat Sakramen Tobat?"],
  },
  "C:lent5": {
    renungan: "Para ahli Taurat dan orang Farisi membawa seorang perempuan yang tertangkap berzina dan menuntut Yesus menghakiminya. Yesus membungkuk menulis di tanah, lalu berkata, \"Barang siapa di antara kamu tidak berdosa, hendaklah ia yang pertama melemparkan batu.\" Satu per satu mereka pergi, mulai dari yang tertua. Kepada perempuan itu Yesus berkata, \"Aku pun tidak menghukum engkau. Pergilah, dan jangan berbuat dosa lagi.\" Yesaya mewartakan Allah yang membuat sesuatu yang baru. Kerahiman tidak menutup mata terhadap dosa, tetapi membuka jalan untuk mulai lagi. Batu apa yang perlu kita letakkan hari ini?",
    refleksi: ["\"Batu\" penghakiman apa yang masih kugenggam terhadap orang lain?", "Hal baru apa yang ingin Allah mulai dalam hidupku?"],
  },
  "C:palm": {
    renungan: "Kisah sengsara menurut Lukas penuh dengan belas kasih Yesus, bahkan di tengah penderitaan. Ia menyembuhkan telinga hamba imam besar yang terpotong, memandang Petrus setelah penyangkalan, menghibur perempuan-perempuan Yerusalem, berdoa \"Ya Bapa, ampunilah mereka,\" dan menjanjikan Firdaus kepada penjahat yang bertobat. Yesaya melukiskan Hamba yang tidak memberontak ketika dipukul. Sorak Hosana hari ini segera diikuti kisah salib, mengingatkan betapa cepat hati manusia berubah. Pekan Suci mengundang kita menemani Yesus dengan setia dan belajar mengampuni seperti Dia.",
    refleksi: ["Momen belas kasih Yesus mana dalam kisah sengsara yang paling menyentuhku?", "Siapa yang perlu kuampuni seperti Yesus mengampuni dari salib?"],
  },
  "C:holythu": {
    renungan: "Dalam Misa Krisma, kita mendengar Yesus di sinagoge Nazaret membaca nubuat Yesaya: Roh Tuhan ada pada-Ku, karena Ia telah mengurapi Aku. Yesus diurapi untuk membawa kabar baik kepada orang miskin dan memberitakan tahun rahmat Tuhan. Hari ini minyak suci diberkati untuk sakramen-sakramen, dan para imam membarui janji pelayanan mereka. Lewat Pembaptisan dan Krisma, kita semua ikut diurapi. Urapan itu bukan untuk disimpan, tetapi untuk dibagikan dalam pelayanan nyata. Mari mendoakan para imam dan bertanya bagaimana urapan Roh mengalir lewat hidup kita.",
    refleksi: ["Bagaimana aku menghayati urapan yang kuterima dalam Pembaptisan dan Krisma?", "Doa apa yang ingin kupanjatkan bagi para imam hari ini?"],
  },
  "C:goodfri": {
    renungan: "Di Getsemani, Yesus bertanya, \"Siapakah yang kamu cari?\" dan menjawab, \"Akulah Dia.\" Sepanjang kisah sengsara menurut Yohanes, Ia tidak tampak sebagai korban yang tak berdaya, melainkan Putra yang menyerahkan hidup-Nya dengan bebas. Di bawah salib, Ia mempercayakan ibu-Nya kepada murid yang dikasihi. Hamba dalam Yesaya menanggung penyakit kita dan dipikul-Nya kesengsaraan kita. Jumat Agung bukan hari untuk banyak kata, melainkan hening, puasa, dan memandang salib. Di sana kita melihat seberapa jauh Allah mau pergi untuk mengasihi dan menyembuhkan kita.",
    refleksi: ["Apa yang kurasakan ketika memandang salib dalam keheningan?", "Seperti murid yang dikasihi, bagaimana aku menerima Maria sebagai ibuku?"],
  },
  "C:eastervigil": {
    renungan: "Malam Paskah membawa kita menelusuri sejarah keselamatan sejak penciptaan, ketika Allah menjadikan segala sesuatu dan melihat semuanya baik. Lalu para perempuan datang ke kubur pagi-pagi dan menemukan batu terguling. Dua orang berpakaian berkilau bertanya, \"Mengapa kamu mencari Dia yang hidup di antara orang mati?\" Mereka diingatkan akan perkataan Yesus, lalu memberitakannya kepada para rasul, yang menganggapnya omong kosong. Petrus berlari ke kubur dan pulang dengan heran. Iman Paskah sering dimulai dari keheranan. Malam ini, terang Kristus mengalahkan kegelapan dan memperbarui ciptaan.",
    refleksi: ["Di mana aku masih \"mencari yang hidup di antara orang mati\"?", "Bagaimana terang Paskah dapat memperbarui hidupku tahun ini?"],
  },
  "C:easter": {
    renungan: "Maria Magdalena datang ke kubur ketika hari masih gelap, dan melihat batu telah diambil. Petrus dan murid yang dikasihi berlari; murid itu lebih dahulu sampai, tetapi menunggu, lalu masuk, melihat kain kafan, dan percaya. Mereka belum mengerti Kitab Suci, namun iman mulai tumbuh. Dalam Kisah Para Rasul, Petrus bersaksi bahwa ia makan dan minum bersama Yesus setelah kebangkitan-Nya, dan siapa pun yang percaya menerima pengampunan dosa. Paskah adalah awal hidup baru. Sukacita itu tidak perlu menunggu semua jelas; cukup mulai dengan percaya dan melangkah.",
    refleksi: ["Apa yang masih \"gelap\" dalam hidupku yang perlu disinari Paskah?", "Bagaimana aku mewartakan kebangkitan lewat sikap hidupku hari ini?"],
  },
  "C:easter2": {
    renungan: "Pada Minggu Kerahiman Ilahi, Yesus datang kepada murid-murid yang bersembunyi dan menyapa, \"Damai sejahtera bagimu.\" Ia menghembuskan Roh Kudus dan memberi kuasa mengampuni dosa. Delapan hari kemudian, Ia datang lagi untuk Tomas yang ragu, dan Tomas berseru, \"Ya Tuhanku dan Allahku!\" Kisah Para Rasul menceritakan banyak orang sakit dibawa ke jalan agar bayangan Petrus menaungi mereka. Kerahiman Allah menjangkau yang ragu, yang takut, dan yang sakit. Berbahagialah mereka yang tidak melihat namun percaya; itulah kita. Kerahiman itu kita terima, lalu kita bagikan.",
    refleksi: ["Apa yang membuatku sulit percaya, seperti Tomas?", "Bagaimana aku dapat membagikan kerahiman Allah kepada orang lain minggu ini?"],
  },
  "C:easter3": {
    renungan: "Setelah semalaman tidak menangkap apa-apa, para murid mendengar suara dari pantai menyuruh menebarkan jala di sebelah kanan. Jala penuh, dan murid yang dikasihi berkata, \"Itu Tuhan.\" Yesus sudah menyiapkan api arang dengan ikan dan roti. Lalu tiga kali Ia bertanya kepada Petrus, \"Apakah engkau mengasihi Aku?\" Tiga penyangkalan dipulihkan dengan tiga pengakuan kasih, disertai perutusan: \"Gembalakanlah domba-domba-Ku.\" Dalam Kisah Para Rasul, Petrus kini berani bersaksi meski dilarang. Yesus tidak membuang kita karena kegagalan; Ia memulihkan dan mempercayakan tugas baru.",
    refleksi: ["Jika Yesus bertanya \"Apakah engkau mengasihi Aku?\", bagaimana jawabanku?", "Kegagalan apa yang ingin kuserahkan untuk dipulihkan Yesus?"],
  },
  "C:easter4": {
    renungan: "Bacaan Injil hari ini singkat tetapi penuh penghiburan. Yesus berkata, \"Domba-domba-Ku mendengarkan suara-Ku dan Aku mengenal mereka.\" Ia memberi mereka hidup kekal, dan tidak seorang pun dapat merebut mereka dari tangan-Nya. Dalam Kisah Para Rasul, Paulus dan Barnabas ditolak sebagian orang, tetapi mereka terus mewartakan, dan bangsa-bangsa lain bersukacita. Di tengah banyak suara yang menarik perhatian kita, suara Gembala tetap dapat dikenali lewat doa dan Sabda. Kita aman di tangan-Nya. Pada Minggu Panggilan ini, kita juga mendoakan mereka yang dipanggil menjadi gembala bagi umat.",
    refleksi: ["Suara apa yang paling sering kudengar dalam keseharianku?", "Apakah aku merasa aman berada di tangan Gembala?"],
  },
  "C:easter5": {
    renungan: "Setelah Yudas keluar, Yesus berbicara tentang kemuliaan dan memberi perintah baru: \"Kasihilah seorang akan yang lain; sama seperti Aku telah mengasihi kamu.\" Dari kasih itulah semua orang akan tahu bahwa kita murid-murid-Nya. Ukurannya bukan kasih biasa, melainkan kasih Yesus yang memberi diri. Paulus dan Barnabas dalam bacaan pertama menguatkan jemaat dan mengingatkan bahwa untuk masuk Kerajaan Allah kita harus mengalami banyak kesusahan. Mengasihi seperti Yesus tidak selalu mudah, terutama di dalam komunitas sendiri. Namun kasih yang nyata adalah tanda pengenal paling jelas seorang Kristen.",
    refleksi: ["Apakah orang mengenali aku sebagai murid Yesus dari cara aku mengasihi?", "Siapa dalam komunitasku yang perlu kukasihi dengan lebih sabar?"],
  },
  "C:easter6": {
    renungan: "Yesus berjanji bahwa siapa yang mengasihi-Nya akan menuruti firman-Nya, dan Bapa serta Ia akan datang dan diam bersamanya. Ia menjanjikan Roh Kudus, Penolong, yang akan mengajarkan dan mengingatkan segala sesuatu. Lalu Ia memberi damai, bukan seperti yang diberikan dunia. Dalam Kisah Para Rasul, jemaat menghadapi perselisihan besar, lalu berkumpul, mendengarkan, dan memutuskan bersama dalam terang Roh Kudus. Damai Kristus tidak berarti tanpa masalah, tetapi hati yang tidak gelisah karena Allah tinggal di dalamnya. Perbedaan pun dapat diselesaikan dengan dialog dan doa.",
    refleksi: ["Apa yang membuat hatiku gelisah, dan bagaimana aku menyerahkannya?", "Bagaimana aku menanggapi perbedaan pendapat dalam keluarga atau komunitas?"],
  },
  "C:easter7": {
    renungan: "Yesus berdoa bukan hanya untuk para murid, tetapi juga untuk semua yang akan percaya melalui pemberitaan mereka, termasuk kita. Doa-Nya: \"supaya mereka semua menjadi satu,\" agar dunia percaya. Kesatuan umat menjadi kesaksian tentang Allah. Stefanus dalam Kisah Para Rasul, saat dirajam, memandang ke surga dan mengampuni para penganiayanya, mengikuti teladan Yesus. Perpecahan sering lahir dari hal kecil: gengsi, prasangka, gosip. Kesatuan dimulai dari kesediaan mengampuni dan menghargai sesama. Kita diundang ambil bagian dalam doa Yesus dengan menjadi pembawa persatuan.",
    refleksi: ["Di mana aku dapat menjadi pembawa persatuan minggu ini?", "Siapa yang perlu kuampuni seperti Stefanus mengampuni?"],
  },
  "C:ascension": {
    renungan: "Sebelum terangkat ke surga, Yesus membuka pikiran para murid tentang Kitab Suci dan berkata bahwa mereka adalah saksi. Ia menjanjikan kuasa dari tempat tinggi, lalu mengangkat tangan dan memberkati mereka. Menariknya, para murid kembali ke Yerusalem \"dengan sangat bersukacita\" dan senantiasa memuji Allah di Bait Allah. Kisah Para Rasul menegaskan janji Roh Kudus dan perutusan sampai ke ujung bumi. Kenaikan bukan kehilangan, tetapi awal kehadiran Yesus yang baru. Kita hidup di bawah berkat-Nya, dan sukacita itu menjadi kekuatan untuk bersaksi di mana pun kita berada.",
    refleksi: ["Apakah aku merasakan diriku hidup di bawah berkat Yesus?", "Di mana aku dipanggil menjadi saksi-Nya hari ini?"],
  },
  "C:pentecost": {
    renungan: "Di Babel, manusia ingin membangun menara sampai ke langit untuk mencari nama, dan akhirnya bahasa mereka dikacaukan. Kesombongan memecah belah. Pada hari raya Pentakosta, Roh Kudus melakukan kebalikannya: orang dari banyak bangsa mendengar karya Allah dalam bahasa mereka sendiri. Yesus berseru, \"Siapa yang haus, baiklah ia datang kepada-Ku dan minum,\" dan dari dalam hatinya akan mengalir air hidup. Roh Kudus memuaskan dahaga terdalam dan menyatukan yang berbeda. Kita dapat memohon agar Roh itu mengalir lewat sikap, kata, dan pelayanan kita.",
    refleksi: ["Dahaga apa dalam hatiku yang hanya bisa dipuaskan oleh Roh Kudus?", "Bagaimana Roh Kudus dapat memakai kata-kataku untuk mempersatukan?"],
  },
  "C:trinity": {
    renungan: "Yesus berkata masih banyak yang ingin Ia katakan, tetapi para murid belum dapat menanggungnya. Roh Kebenaran akan memimpin mereka ke dalam seluruh kebenaran. Apa yang dimiliki Bapa adalah milik Putra, dan Roh mengambil dari Putra untuk diberitakan. Dalam Amsal, Kebijaksanaan sudah ada sebelum dunia dijadikan, bersukacita di hadapan Allah dan bersukaria bersama umat manusia. Allah Tritunggal adalah persekutuan kasih yang saling memberi. Kita tidak perlu memahami semuanya sekaligus; Roh Kudus menuntun langkah demi langkah. Iman bertumbuh perlahan, seperti persahabatan yang semakin dalam.",
    refleksi: ["Kebenaran apa tentang Allah yang sedang Roh Kudus ajarkan kepadaku?", "Bagaimana aku mencerminkan kasih yang saling memberi dalam relasiku?"],
  },
  "C:corpus": {
    renungan: "Hari mulai malam dan para murid ingin menyuruh orang banyak pergi mencari makanan. Yesus berkata, \"Kamu harus memberi mereka makan.\" Mereka hanya punya lima roti dan dua ikan. Yesus menengadah, mengucap berkat, memecah-mecahkan roti, dan memberikannya kepada murid-murid untuk dibagikan; semua makan sampai kenyang. Melkisedek dalam Kitab Kejadian membawa roti dan anggur dan memberkati Abram. Dalam Ekaristi, Yesus memberikan diri-Nya sebagai roti hidup. Ia juga mengajak kita membawa \"lima roti\" kita yang sederhana. Di tangan-Nya, yang sedikit menjadi cukup untuk banyak orang.",
    refleksi: ["\"Lima roti dan dua ikan\" apa yang dapat kuserahkan kepada Yesus?", "Bagaimana Ekaristi menggerakkanku untuk memperhatikan yang lapar?"],
  },
  "C:sacredheart": {
    renungan: "Yesus bercerita tentang gembala yang meninggalkan sembilan puluh sembilan domba untuk mencari satu yang hilang. Setelah menemukannya, ia meletakkannya di atas bahu dengan gembira dan mengundang sahabat untuk bersukacita. Yehezkiel menubuatkan Allah sendiri yang akan mencari domba-domba-Nya, membalut yang luka, dan menguatkan yang sakit. Hati Kudus Yesus adalah hati Gembala yang tidak puas selama masih ada satu yang hilang. Setiap orang berharga di mata-Nya, termasuk kita ketika merasa jauh. Kita juga dapat ikut mencari mereka yang menjauh, dengan sapaan, doa, dan kesabaran.",
    refleksi: ["Pernahkah aku merasa \"dicari\" dan ditemukan oleh Tuhan?", "Siapa yang menjauh dan dapat kusapa dengan kasih minggu ini?"],
  },
  "C:san-0806": {
    renungan: "Yesus membawa Petrus, Yohanes, dan Yakobus naik ke gunung untuk berdoa. Saat berdoa, wajah-Nya berubah dan pakaian-Nya putih berkilau. Musa dan Elia berbicara tentang kepergian-Nya di Yerusalem. Lalu awan menaungi mereka, dan suara berkata, \"Inilah Anak-Ku yang Kupilih, dengarkanlah Dia.\" Daniel melihat Anak Manusia datang dengan awan-awan dan menerima kerajaan yang kekal. Pada pesta Transfigurasi ini, kita diingatkan bahwa kemuliaan Yesus tersingkap dalam doa. Doa yang setia juga perlahan mengubah kita, sehingga terang-Nya tampak dalam sikap kita sehari-hari.",
    refleksi: ["Apakah doaku memberi ruang bagi Tuhan untuk mengubahku?", "Bagaimana aku dapat lebih sungguh mendengarkan Yesus hari ini?"],
  },
  "adv-1-1": {
    renungan: "Seorang perwira Romawi datang memohon bagi hambanya yang lumpuh dan menderita. Ia tidak meminta Yesus datang ke rumahnya, sebab merasa tidak layak; cukup sepatah kata saja. Yesus heran dan berkata belum pernah menemukan iman sebesar itu di Israel. Ia menambahkan bahwa banyak orang akan datang dari timur dan barat untuk duduk dalam Kerajaan Surga. Yesaya melihat bangsa-bangsa berduyun-duyun ke gunung Tuhan dan pedang ditempa menjadi mata bajak. Di awal Adven, kita belajar dari perwira itu: iman yang rendah hati, peduli pada orang lain, dan percaya pada kuasa sabda Yesus.",
    refleksi: ["Untuk siapa aku dapat memohon kepada Yesus seperti perwira itu?", "Apakah aku percaya sepenuhnya pada kuasa sabda Tuhan?"],
  },
  "adv-1-2": {
    renungan: "Yesus bergembira dalam Roh Kudus dan bersyukur kepada Bapa karena hal-hal Kerajaan disingkapkan kepada orang kecil, bukan kepada orang bijak dan pandai. Lalu Ia berkata kepada murid-murid, berbahagialah mata yang melihat apa yang kamu lihat. Yesaya menubuatkan tunas dari tunggul Isai yang dipenuhi Roh Tuhan, dan masa damai ketika serigala tinggal bersama domba. Adven mengajak kita menjadi kecil di hadapan Allah: tidak sok tahu, mau belajar, dan peka melihat karya-Nya dalam hal sederhana. Hari ini, mungkin ada satu berkat kecil yang dapat kita syukuri.",
    refleksi: ["Apakah aku cukup rendah hati untuk menerima apa yang Allah singkapkan?", "Berkat sederhana apa yang dapat kusyukuri hari ini?"],
  },
  "adv-1-3": {
    renungan: "Di tepi danau Galilea, orang banyak membawa yang lumpuh, buta, timpang, dan bisu kepada Yesus, dan Ia menyembuhkan mereka. Lalu Ia berkata, \"Hati-Ku tergerak oleh belas kasihan,\" karena sudah tiga hari mereka bersama-Nya tanpa makanan. Dari tujuh roti dan beberapa ikan, semua makan sampai kenyang. Yesaya melukiskan perjamuan besar di gunung Tuhan, ketika Allah menghapus air mata dari setiap wajah. Masa Adven mengingatkan bahwa Allah peduli pada kebutuhan tubuh dan jiwa. Yang sedikit, bila diserahkan kepada-Nya, cukup untuk banyak orang.",
    refleksi: ["Kebutuhan apa dalam hidupku yang ingin kubawa kepada Yesus?", "Bagaimana aku bisa berbagi sedikit milikku dengan yang membutuhkan?"],
  },
  "adv-1-4": {
    renungan: "Yesus menegaskan bahwa bukan setiap orang yang berseru \"Tuhan, Tuhan\" akan masuk Kerajaan Surga, melainkan yang melakukan kehendak Bapa. Ia membandingkan orang yang mendengar dan melakukan firman-Nya dengan orang bijak yang membangun rumah di atas batu. Ketika hujan dan banjir datang, rumah itu tetap berdiri. Yesaya menyerukan agar kita percaya kepada Tuhan, sebab Dialah gunung batu yang kekal. Iman bukan sekadar kata-kata saleh, tetapi tindakan nyata. Di masa Adven, kita bisa memeriksa fondasi hidup: apakah kita berdiri di atas Sabda atau di atas pasir kebiasaan dan perasaan.",
    refleksi: ["Di atas apa aku sedang membangun hidupku?", "Sabda Tuhan mana yang perlu kulakukan, bukan hanya kudengar?"],
  },
  "adv-1-5": {
    renungan: "Dua orang buta mengikuti Yesus sambil berseru, \"Kasihanilah kami, hai Anak Daud.\" Yesus bertanya, \"Percayakah kamu bahwa Aku dapat melakukannya?\" Mereka menjawab, \"Ya, Tuhan.\" Lalu Ia menjamah mata mereka: \"Jadilah kepadamu menurut imanmu,\" dan mata mereka terbuka. Yesaya menubuatkan hari ketika orang buta melihat dan orang tuli mendengar. Pertanyaan Yesus juga ditujukan kepada kita. Kadang kita berdoa tanpa sungguh percaya bahwa Ia sanggup. Adven adalah kesempatan untuk memohon agar mata hati kita dibuka, sehingga dapat melihat kehadiran Tuhan dalam hidup sehari-hari.",
    refleksi: ["Apakah aku sungguh percaya Yesus sanggup menolongku?", "Di bagian hidup mana mata hatiku perlu dibuka?"],
  },
  "adv-1-6": {
    renungan: "Yesus berkeliling ke semua kota dan desa, mengajar dan menyembuhkan. Melihat orang banyak, hati-Nya tergerak oleh belas kasihan karena mereka lelah dan terlantar seperti domba tanpa gembala. Ia berkata tuaian banyak tetapi pekerja sedikit, lalu mengutus dua belas murid dengan pesan: \"Kamu telah memperolehnya dengan cuma-cuma, berikanlah pula dengan cuma-cuma.\" Yesaya menjanjikan bahwa Tuhan akan mendengar seruan umat-Nya dan membalut luka mereka. Adven bukan hanya menanti, tetapi juga ikut bekerja. Rahmat yang kita terima dengan cuma-cuma dapat kita bagikan kepada mereka yang lelah di sekitar kita.",
    refleksi: ["Siapa di sekitarku yang tampak lelah dan terlantar?", "Rahmat apa yang telah kuterima cuma-cuma dan dapat kubagikan?"],
  },
  "adv-2-1": {
    renungan: "Beberapa orang mengusung seorang lumpuh, tetapi karena kerumunan, mereka membongkar atap dan menurunkannya di depan Yesus. Melihat iman mereka, Yesus berkata, \"Hai saudara, dosamu sudah diampuni,\" lalu menyuruhnya bangun dan pulang. Yesaya melukiskan padang gurun yang berbunga dan orang lumpuh yang melompat seperti rusa. Kisah ini memperlihatkan kekuatan iman bersama: sahabat-sahabat yang tidak menyerah. Ada orang yang mungkin tidak sanggup datang sendiri kepada Tuhan. Lewat doa dan perhatian, kita bisa menjadi pengusung yang membawa mereka kepada Yesus di masa Adven ini.",
    refleksi: ["Siapa yang dapat kubawa kepada Yesus lewat doa dan perhatianku?", "Apakah aku membutuhkan pengampunan sebelum kesembuhan lainnya?"],
  },
  "adv-2-2": {
    renungan: "Yesus bertanya: jika seseorang mempunyai seratus domba dan satu tersesat, bukankah ia akan meninggalkan yang sembilan puluh sembilan untuk mencarinya? Bapa di surga tidak menghendaki seorang pun dari anak-anak kecil ini hilang. Yesaya membuka bagian penghiburan: \"Hiburkanlah umat-Ku,\" dan menggambarkan Allah sebagai gembala yang menghimpun anak domba dan menggendongnya. Adven adalah masa penghiburan. Allah tidak menghitung kita sebagai angka; setiap pribadi berharga. Jika kita merasa tersesat, Ia sedang mencari. Jika kita merasa aman, kita diajak ikut mencari yang hilang.",
    refleksi: ["Kapan aku merasa tersesat dan dicari oleh Tuhan?", "Siapa yang mungkin sedang \"hilang\" dan perlu kudekati?"],
  },
  "adv-2-3": {
    renungan: "\"Marilah kepada-Ku, semua yang letih lesu dan berbeban berat, Aku akan memberi kelegaan kepadamu.\" Undangan Yesus ini singkat tetapi sangat dalam. Ia mengajak kita memikul kuk-Nya dan belajar pada-Nya yang lemah lembut dan rendah hati. Kuk-Nya enak dan beban-Nya ringan, bukan karena tanpa tanggung jawab, tetapi karena dipikul bersama Dia. Yesaya meneguhkan bahwa Tuhan memberi kekuatan kepada yang lelah; orang yang menanti-nantikan Tuhan akan seperti rajawali yang terbang tinggi. Di tengah kesibukan akhir tahun, Adven mengundang kita datang dan beristirahat dalam Tuhan.",
    refleksi: ["Beban apa yang sedang kupikul sendirian?", "Kapan aku dapat datang kepada Yesus untuk beristirahat hari ini?"],
  },
  "adv-2-4": {
    renungan: "Yesus memuji Yohanes Pembaptis: di antara mereka yang dilahirkan perempuan, tidak ada yang lebih besar darinya. Namun yang terkecil dalam Kerajaan Surga lebih besar daripadanya. Kebesaran sejati bukan soal prestasi, melainkan menjadi bagian dari Kerajaan yang dibawa Yesus. Yohanes adalah Elia yang dinantikan, yang menyiapkan jalan. Yesaya menyampaikan sabda Tuhan yang memegang tangan kanan umat-Nya dan berkata, \"Jangan takut, Akulah yang menolong engkau.\" Adven mengingatkan bahwa kita dipanggil ke dalam Kerajaan bukan karena hebat, tetapi karena kasih Allah. Siapa yang bertelinga, hendaklah mendengar.",
    refleksi: ["Apakah aku mengukur diriku dengan prestasi atau dengan kasih Allah?", "Di mana aku perlu mendengar Tuhan berkata \"Jangan takut\"?"],
  },
  "adv-2-5": {
    renungan: "Yesus membandingkan angkatan-Nya dengan anak-anak di pasar yang mengeluh: kami meniup seruling, kamu tidak menari; kami meratap, kamu tidak berdukacita. Yohanes datang berpuasa dan dianggap kerasukan setan; Yesus datang makan dan minum dan disebut pelahap. Selalu ada alasan untuk menolak. Yesaya menyampaikan kerinduan Tuhan: sekiranya engkau memperhatikan perintah-Ku, damaimu akan seperti sungai. Adven mengajak kita jujur: apakah kita sering mencari alasan untuk tidak menanggapi panggilan Tuhan? Hikmat dibenarkan oleh perbuatannya, bukan oleh dalih.",
    refleksi: ["Alasan apa yang sering kupakai untuk menunda menanggapi Tuhan?", "Apakah aku terbuka pada cara Tuhan yang berbeda dari harapanku?"],
  },
  "adv-2-6": {
    renungan: "Saat turun dari gunung, para murid bertanya tentang Elia yang harus datang lebih dahulu. Yesus menjawab bahwa Elia sudah datang, tetapi orang tidak mengenalinya dan memperlakukannya sesuka hati. Para murid mengerti bahwa Ia berbicara tentang Yohanes Pembaptis. Putra Sirakh memuji Elia yang perkataannya bagaikan api dan yang akan datang untuk memulihkan hati bapa kepada anaknya. Utusan Allah sering tidak dikenali karena tampil sederhana. Masa Adven mengajak kita peka terhadap orang-orang yang Tuhan kirim untuk menegur dan menyiapkan hati kita.",
    refleksi: ["Siapa yang mungkin dikirim Tuhan untuk menyiapkan hatiku?", "Apakah aku mudah menolak teguran yang sebenarnya baik bagiku?"],
  },
  "adv-3-1": {
    renungan: "Para imam kepala dan tua-tua menanyakan dengan kuasa apa Yesus bertindak. Yesus balik bertanya tentang baptisan Yohanes: dari surga atau dari manusia? Mereka berunding dan memilih menjawab \"Kami tidak tahu\", karena takut pada akibat jawabannya. Mereka lebih sibuk memperhitungkan posisi daripada mencari kebenaran. Dalam Kitab Bilangan, Bileam bernubuat tentang bintang yang terbit dari Yakub. Bahkan dari mulut orang asing, Allah menyatakan janji-Nya. Adven mengajak kita bertanya dengan hati terbuka, bukan dengan perhitungan. Kebenaran menuntut keberanian untuk menerimanya, meskipun tidak nyaman.",
    refleksi: ["Kapan aku menghindari kebenaran karena takut akan akibatnya?", "Apakah aku bertanya kepada Tuhan dengan hati yang sungguh terbuka?"],
  },
  "adv-3-2": {
    renungan: "Seorang ayah meminta dua anaknya bekerja di kebun anggur. Yang pertama menolak, tetapi kemudian menyesal dan pergi. Yang kedua berkata \"Baik, Bapa,\" tetapi tidak pergi. Yesus bertanya, siapa yang melakukan kehendak ayahnya? Ia menegaskan bahwa pemungut cukai dan pelacur yang percaya kepada Yohanes mendahului para pemimpin agama. Zefanya menubuatkan sisa umat yang rendah hati dan berlindung pada nama Tuhan. Yang dinilai Allah bukan janji yang manis, melainkan pertobatan yang nyata. Tidak ada kata terlambat untuk berubah pikiran dan berangkat ke kebun anggur-Nya.",
    refleksi: ["Janji apa kepada Tuhan yang belum kutepati?", "Apa yang dapat kulakukan hari ini sebagai tanda pertobatan nyata?"],
  },
  "adv-3-3": {
    renungan: "Dari penjara, Yohanes mengutus murid-muridnya bertanya, \"Engkaukah yang akan datang itu?\" Yesus tidak menjawab dengan gelar, tetapi menunjuk pada karya-Nya: orang buta melihat, orang lumpuh berjalan, dan orang miskin mendengar kabar baik. Bahkan Yohanes pun mengalami saat bertanya. Yesaya berseru, \"Hai langit, teteskanlah keadilan,\" dan menyatakan bahwa tidak ada Allah lain selain Tuhan yang menyelamatkan. Keraguan tidak harus disembunyikan; kita dapat membawanya kepada Yesus. Jawaban-Nya sering ditemukan bila kita melihat karya kasih-Nya di sekitar kita.",
    refleksi: ["Pertanyaan atau keraguan apa yang ingin kubawa kepada Yesus?", "Di mana aku melihat tanda-tanda karya Yesus di sekitarku?"],
  },
  "adv-3-4": {
    renungan: "Yesus bertanya kepada orang banyak apa yang mereka cari ketika pergi ke padang gurun: buluh yang digoyang angin, atau orang berpakaian halus? Yohanes lebih dari nabi; ia utusan yang menyiapkan jalan. Orang-orang yang dibaptis Yohanes mengakui kebenaran Allah, sementara yang menolak membuang rencana Allah bagi diri mereka. Yesaya menyampaikan kasih setia Allah yang tidak akan beranjak, walaupun gunung-gunung bergoyang. Adven mengajak kita bertanya: apa sebenarnya yang kucari? Allah menawarkan kasih yang tetap, jauh lebih kokoh dari segala yang mudah digoyang angin.",
    refleksi: ["Apa yang sebenarnya kucari dalam hidupku saat ini?", "Bagaimana aku menanggapi kasih setia Allah yang tidak beranjak?"],
  },
  "adv-3-5": {
    renungan: "Yesus menyebut Yohanes sebagai pelita yang menyala dan bercahaya, dan orang mau menikmati terangnya untuk sesaat. Namun kesaksian yang lebih besar adalah pekerjaan-pekerjaan yang diserahkan Bapa kepada Yesus; itulah yang menunjukkan bahwa Bapa mengutus-Nya. Yesaya mengajak menegakkan keadilan, sebab keselamatan dari Tuhan sudah dekat, dan rumah-Nya akan menjadi rumah doa bagi segala bangsa. Kita pun dipanggil menjadi pelita kecil yang menunjuk kepada Terang sejati. Kesaksian paling meyakinkan bukan kata-kata, melainkan perbuatan baik yang lahir dari iman.",
    refleksi: ["Apakah hidupku menjadi pelita yang menunjuk kepada Yesus?", "Perbuatan baik apa yang dapat menjadi kesaksianku hari ini?"],
  },
  "adv-dec17": {
    renungan: "Injil hari ini memuat silsilah Yesus Kristus, anak Daud, anak Abraham. Daftar nama ini memuat raja-raja besar, tetapi juga orang berdosa dan orang asing, termasuk beberapa perempuan yang kisahnya tidak biasa. Allah bekerja melalui sejarah manusia yang nyata, dengan segala jatuh bangunnya. Dalam Kejadian, Yakub memberkati Yehuda dan menubuatkan bahwa tongkat kerajaan tidak akan beranjak darinya. Memasuki pekan terakhir Adven, kita diingatkan bahwa Allah setia pada janji-Nya dari generasi ke generasi. Kisah keluarga kita pun, dengan segala luka dan berkatnya, dapat menjadi tempat karya Allah.",
    refleksi: ["Bagaimana Allah bekerja dalam sejarah keluargaku?", "Bagian mana dari kisah hidupku yang ingin kuserahkan kepada Tuhan?"],
  },
  "adv-dec18": {
    renungan: "Yusuf mendapati Maria mengandung sebelum mereka hidup bersama. Karena tulus hati, ia berniat menceraikannya diam-diam agar Maria tidak dipermalukan. Lalu malaikat dalam mimpi berkata, \"Jangan takut mengambil Maria sebagai istrimu,\" sebab anak itu dari Roh Kudus. Ia akan dinamai Yesus, dan Ia adalah Imanuel, Allah menyertai kita. Yusuf bangun dan melakukan seperti yang diperintahkan. Yeremia menubuatkan Tunas adil dari Daud yang bernama \"Tuhan keadilan kita\". Yusuf mengajarkan ketaatan yang hening dan berbelas kasih. Ia tidak banyak bicara, tetapi bertindak setia.",
    refleksi: ["Keputusan apa yang perlu kuambil dengan hati tulus seperti Yusuf?", "Apakah aku berani taat ketika rencana Tuhan berbeda dari rencanaku?"],
  },
  "adv-dec19": {
    renungan: "Zakharia dan Elisabet hidup benar di hadapan Allah, tetapi tidak mempunyai anak dan sudah lanjut usia. Saat Zakharia bertugas di Bait Allah, malaikat Gabriel mengabarkan bahwa doanya dikabulkan. Namun Zakharia ragu, sehingga ia menjadi bisu sampai janji itu terpenuhi. Elisabet kemudian berkata Tuhan telah menghapus aibnya. Dalam Kitab Hakim-hakim, istri Manoah yang mandul juga menerima janji kelahiran Simson. Allah dapat membuka jalan di tempat yang tampak tertutup. Penantian panjang tidak berarti doa diabaikan. Keheningan Zakharia pun menjadi masa untuk merenungkan karya Tuhan.",
    refleksi: ["Doa apa yang sudah lama kunantikan jawabannya?", "Apakah aku memberi ruang hening untuk merenungkan karya Tuhan?"],
  },
  "adv-dec20": {
    renungan: "Malaikat Gabriel datang kepada Maria di Nazaret: \"Salam, hai engkau yang dikaruniai, Tuhan menyertai engkau.\" Maria terkejut dan bertanya bagaimana hal itu mungkin. Malaikat menjawab bahwa Roh Kudus akan turun atasnya, sebab bagi Allah tidak ada yang mustahil. Maria berkata, \"Aku ini hamba Tuhan; jadilah padaku menurut perkataanmu.\" Yesaya menubuatkan tanda: seorang perempuan muda akan melahirkan anak bernama Imanuel. Maria tidak memahami semuanya, tetapi percaya. Jawaban \"ya\" yang sederhana itu membuka jalan bagi keselamatan dunia. Kita pun diundang memberi \"ya\" dalam hal kecil hari ini.",
    refleksi: ["Di mana Tuhan sedang menunggu \"ya\" dariku?", "Hal apa yang terasa mustahil dan perlu kuserahkan kepada Allah?"],
  },
  "adv-dec21": {
    renungan: "Maria bergegas ke pegunungan untuk mengunjungi Elisabet. Begitu salam Maria terdengar, anak dalam rahim Elisabet melonjak kegirangan. Elisabet berseru, \"Berbahagialah ia yang telah percaya.\" Kidung Agung melukiskan kekasih yang datang melompat-lompat di atas gunung dan berkata, \"Bangunlah, manisku, marilah!\" Musim dingin telah lewat. Menjelang Natal, sukacita mulai terasa. Kehadiran Maria membawa Yesus, dan sukacita itu menular. Kunjungan, sapaan, atau pesan singkat yang penuh kasih dapat menjadi cara kita membawa sukacita Natal kepada orang lain hari ini.",
    refleksi: ["Siapa yang dapat kukunjungi atau kusapa untuk membawa sukacita?", "Apa yang membuat hatiku \"melonjak\" menanti kedatangan Yesus?"],
  },
  "adv-dec22": {
    renungan: "Maria menanggapi salam Elisabet dengan kidung: \"Jiwaku memuliakan Tuhan.\" Ia memuji Allah yang memperhatikan kerendahan hamba-Nya, menurunkan yang berkuasa dari takhta, meninggikan yang rendah, dan mengenyangkan yang lapar. Dalam bacaan pertama, Hana membawa Samuel ke Bait Allah dan menyerahkannya kepada Tuhan sebagai syukur atas doanya yang dikabulkan. Dua perempuan ini mengajarkan syukur yang mengembalikan segalanya kepada Allah. Magnificat juga mengingatkan bahwa Allah berpihak pada yang kecil. Menjelang Natal, kita dapat menyusun \"magnificat\" sendiri: daftar karya besar Tuhan dalam hidup kita tahun ini.",
    refleksi: ["Karya besar Tuhan apa yang ingin kusyukuri tahun ini?", "Bagaimana aku dapat berpihak pada yang kecil seperti Allah?"],
  },
  "adv-dec23": {
    renungan: "Elisabet melahirkan seorang anak laki-laki, dan tetangga serta kerabat bersukacita. Mereka ingin menamainya Zakharia, tetapi Elisabet berkata, \"Ia harus dinamai Yohanes.\" Zakharia menulis di batu tulis, \"Namanya adalah Yohanes,\" dan seketika mulutnya terbuka dan ia memuji Allah. Orang-orang bertanya, \"Menjadi apakah anak ini nanti?\" Maleakhi menubuatkan utusan yang menyiapkan jalan dan Elia yang akan datang. Ketaatan Zakharia membuka mulutnya untuk memuji. Nama Yohanes berarti Allah berbelas kasih. Menjelang Natal, mari mengakui bahwa hidup kita adalah buah belas kasih Allah.",
    refleksi: ["Di mana aku perlu taat agar hatiku terbuka untuk memuji Allah?", "Bagaimana belas kasih Allah tampak dalam hidupku tahun ini?"],
  },
  "adv-dec24": {
    renungan: "Pagi menjelang Natal, Zakharia yang penuh Roh Kudus menyanyikan kidung: \"Terpujilah Tuhan, Allah Israel, sebab Ia mengunjungi dan membebaskan umat-Nya.\" Ia mengingat janji Allah kepada Daud dan Abraham, lalu berkata bahwa anaknya akan berjalan mendahului Tuhan. Fajar dari tempat tinggi akan datang menyinari mereka yang diam dalam kegelapan. Dalam bacaan pertama, melalui Natan Allah berjanji membangun keturunan Daud dan kerajaannya kokoh selama-lamanya. Malam ini janji itu tergenapi. Sebelum kesibukan perayaan, kita bisa berhenti sejenak dan memuji Allah yang setia.",
    refleksi: ["Kegelapan apa dalam hidupku yang ingin disinari Fajar dari tempat tinggi?", "Bagaimana aku menyiapkan hati di jam-jam terakhir sebelum Natal?"],
  },
  "chr-dec29": {
    renungan: "Maria dan Yusuf membawa Yesus ke Bait Allah. Simeon, orang benar yang menantikan penghiburan Israel, menggendong-Nya dan memuji Allah: kini ia boleh pergi dalam damai, sebab matanya telah melihat keselamatan, terang bagi bangsa-bangsa. Ia juga berkata kepada Maria bahwa sebilah pedang akan menembus jiwanya. Surat Yohanes menegaskan bahwa siapa yang mengasihi saudaranya tinggal di dalam terang. Masa Natal tidak menghapus penderitaan, tetapi memberi terang di dalamnya. Seperti Simeon, kita diajak setia menanti dan mengenali Tuhan dalam hal-hal kecil.",
    refleksi: ["Apakah mataku peka melihat keselamatan Tuhan dalam hidup sehari-hari?", "Kepada siapa aku perlu menunjukkan kasih agar tetap tinggal dalam terang?"],
  },
  "chr-dec30": {
    renungan: "Hana, nabiah yang sudah sangat tua, tidak pernah meninggalkan Bait Allah dan beribadah siang malam dengan berpuasa dan berdoa. Ketika melihat Yesus, ia bersyukur kepada Allah dan berbicara tentang Anak itu kepada semua yang menantikan kelepasan. Lalu Keluarga Kudus kembali ke Nazaret, dan Anak itu bertambah besar, penuh hikmat, dan kasih karunia Allah ada pada-Nya. Surat Yohanes mengingatkan agar tidak mengasihi dunia yang akan lenyap, sebab siapa melakukan kehendak Allah tetap hidup selamanya. Hana menunjukkan bahwa kesetiaan dalam doa membuat mata hati peka dan mulut siap bersaksi.",
    refleksi: ["Bagaimana kesetiaan doaku membuatku lebih peka akan kehadiran Tuhan?", "Kepada siapa aku dapat berbicara tentang Yesus dengan sukacita?"],
  },
  "chr-dec31": {
    renungan: "Di hari terakhir tahun ini, Gereja mengajak kita kembali kepada awal: \"Pada mulanya adalah Firman.\" Segala sesuatu dijadikan oleh Dia, dan di dalam Dia ada hidup yang menjadi terang manusia. Firman itu menjadi manusia dan tinggal di antara kita, penuh kasih karunia dan kebenaran. Surat Yohanes menyebut \"saat terakhir\" dan mengajak umat tetap berpegang pada kebenaran. Menutup tahun, kita dapat menengok ke belakang dengan syukur dan memandang ke depan dengan harapan. Waktu kita berada di tangan Allah, dari awal hingga akhir, dan dari kepenuhan-Nya kita menerima kasih karunia demi kasih karunia.",
    refleksi: ["Kasih karunia apa yang paling kusyukuri sepanjang tahun ini?", "Harapan apa yang ingin kuserahkan kepada Tuhan untuk tahun yang baru?"],
  },
  "chr-jan2": {
    renungan: "Ketika ditanya \"Siapakah engkau?\", Yohanes Pembaptis tidak memanfaatkan kesempatan untuk tampil. Ia menyebut apa yang bukan dirinya: bukan Kristus, bukan Elia, bukan Nabi itu. Ia hanya suara yang menunjuk kepada Dia yang datang sesudahnya, yang tali sandal-Nya pun ia merasa tidak layak membuka. Di masa Natal ini, Yohanes mengajarkan kebebasan orang yang tidak perlu menjadi pusat perhatian. Surat Yohanes mengajak kita tetap tinggal di dalam Kristus, bukan dalam pujian manusia. Hari ini kita bisa mengerjakan sesuatu yang baik tanpa perlu disebut namanya, dan membiarkan orang lain melihat Yesus, bukan kita.",
    refleksi: ["Di bagian hidup mana saya masih ingin menjadi pusat perhatian?", "Bagaimana saya dapat menunjuk kepada Yesus lewat pekerjaan saya hari ini?"],
  },
  "chr-jan3": {
    renungan: "\"Lihatlah, Anak Domba Allah yang menghapuskan dosa dunia!\" Seruan Yohanes ini kita dengar dalam setiap Misa sebelum komuni. Yohanes mengaku bahwa dahulu ia tidak mengenal Yesus; ia baru mengenal-Nya karena melihat Roh turun dan tinggal di atas-Nya. Iman pun tumbuh dari kesediaan melihat dan bersaksi. Bacaan pertama mengingatkan betapa besar kasih Bapa sehingga kita disebut anak-anak Allah. Bayi di palungan itu adalah Anak Domba yang datang untuk menanggung dosa kita. Saat menyambut Komuni di Misa berikutnya, kita dapat sungguh memandang Dia yang menghapus dosa, bukan sekadar mengucapkan rumusan.",
    refleksi: ["Apakah saya sungguh memandang Yesus ketika Hosti diangkat dalam Misa?", "Dosa apa yang ingin saya serahkan kepada Anak Domba Allah hari ini?"],
  },
  "chr-jan4": {
    renungan: "Pertanyaan pertama Yesus dalam Injil Yohanes sederhana sekaligus dalam: \"Apa yang kamu cari?\" Dua murid tidak menjawab dengan teori, tetapi bertanya di mana Ia tinggal. Yesus tidak memberi penjelasan panjang, hanya undangan: \"Mari dan kamu akan melihatnya.\" Mereka tinggal bersama-Nya, dan perjumpaan itu begitu mengubah sehingga Andreas segera mencari Simon, saudaranya, untuk membawanya kepada Yesus. Iman diteruskan lewat pengalaman pribadi yang dibagikan dengan rendah hati. Hari ini kita dapat meluangkan waktu sekadar tinggal bersama Yesus dalam doa yang tenang, lalu membagikan sukacita itu kepada satu orang terdekat.",
    refleksi: ["Apa yang sebenarnya saya cari dalam hidup ini?", "Siapa yang bisa saya ajak untuk mengenal Yesus lebih dekat?"],
  },
  "chr-jan5": {
    renungan: "Natanael meremehkan Yesus karena asal-Nya: \"Mungkinkah sesuatu yang baik datang dari Nazaret?\" Filipus tidak berdebat; ia cukup berkata, \"Datang dan lihatlah.\" Yesus ternyata sudah mengenal Natanael lebih dulu, bahkan ketika ia berada di bawah pohon ara. Prasangka runtuh di hadapan Allah yang mengenal hati kita. Bacaan pertama menegaskan bahwa kasih harus nyata dalam perbuatan dan kebenaran, bukan hanya kata-kata. Kita pun sering menilai orang dari asal, latar belakang, atau penampilan. Hari ini kita bisa memberi kesempatan kepada seseorang yang selama ini kita remehkan, dan membiarkan Tuhan mengejutkan kita lewat dia.",
    refleksi: ["Siapa yang selama ini saya nilai hanya dari latar belakangnya?", "Apakah saya percaya bahwa Tuhan sudah mengenal saya sepenuhnya?"],
  },
  "chr-jan6": {
    renungan: "Pada pembaptisan Yesus di Sungai Yordan, langit terbelah, Roh turun seperti merpati, dan suara Bapa menyatakan kasih-Nya kepada Sang Anak. Allah Tritunggal menyatakan diri dengan jelas. Yohanes Pembaptis sendiri merasa tidak layak membungkuk melepaskan tali sandal-Nya, namun Yesus merendahkan diri masuk ke air bersama orang berdosa. Surat Yohanes menyebut kesaksian Allah tentang Anak-Nya dan hidup kekal yang ada di dalam Dia. Melalui baptisan, kita pun menjadi anak-anak yang dikasihi Bapa. Hari ini, ingatlah baptisan kita, misalnya dengan membuat tanda salib dengan penuh kesadaran, dan hidup sebagai anak Allah yang dikasihi.",
    refleksi: ["Kapan terakhir saya bersyukur atas rahmat baptisan saya?", "Bagaimana saya bisa hidup sebagai anak yang dikasihi Bapa hari ini?"],
  },
  "chr-jan7": {
    renungan: "Di pesta perkawinan di Kana, Maria lebih dulu memperhatikan kebutuhan: \"Mereka kehabisan air anggur.\" Ia tidak memaksa, hanya menyerahkannya kepada Yesus dan berpesan kepada para pelayan, \"Apa pun yang Dia katakan kepadamu, lakukan itu.\" Para pelayan taat mengisi tempayan dengan air, pekerjaan sederhana yang tampak tidak berarti, dan dari situlah lahir anggur terbaik. Surat Yohanes meneguhkan bahwa Allah mendengar kita bila kita meminta sesuai kehendak-Nya. Pesan Maria tetap berlaku: bawa kekurangan kita kepada Yesus, lalu kerjakan dengan setia hal kecil yang Ia minta. Tuhan sanggup mengubah yang biasa menjadi sukacita.",
    refleksi: ["Kekurangan apa dalam keluarga saya yang perlu saya bawa kepada Yesus?", "Hal kecil apa yang Tuhan minta saya lakukan dengan setia hari ini?"],
  },
  "epi-1": {
    renungan: "Yesus memulai karya-Nya di Galilea, wilayah yang dianggap pinggiran, dan nubuat Yesaya pun genap: bangsa yang diam dalam kegelapan melihat Terang yang besar. Pesan-Nya singkat: \"Bertobatlah karena Kerajaan Surga sudah dekat!\" Lalu Ia berkeliling mengajar dan menyembuhkan segala penyakit. Terang Epifani tidak tinggal di pusat kekuasaan, tetapi menjangkau orang-orang yang tersisih dan sakit. Bacaan pertama mengajak kita menguji roh-roh dan berpegang pada Yesus yang datang sebagai manusia. Hari ini kita dapat membawa terang itu ke sudut hidup kita yang paling gelap, dan memperhatikan orang yang sering terlupakan di sekitar kita.",
    refleksi: ["Sudut gelap mana dalam hidup saya yang perlu disinari Terang Kristus?", "Siapa orang di pinggiran yang bisa saya perhatikan minggu ini?"],
  },
  "epi-2": {
    renungan: "Melihat orang banyak yang seperti domba tanpa gembala, Yesus tergerak oleh belas kasihan. Para murid ingin menyuruh orang-orang pergi membeli makanan sendiri, tetapi Yesus berkata, \"Kamulah yang memberi mereka makan.\" Lima roti dan dua ikan, yang tampak tidak cukup, menjadi berkelimpahan setelah diberkati dan dibagikan. Bacaan pertama merumuskannya dengan indah: Allah adalah kasih, dan kasih itu lebih dahulu datang dari-Nya. Kita sering merasa apa yang kita miliki terlalu sedikit untuk menolong. Hari ini, serahkan yang sedikit itu kepada Tuhan, entah waktu, uang, atau perhatian, dan biarkan Ia melipatgandakannya bagi sesama.",
    refleksi: ["Apa \"lima roti dan dua ikan\" yang bisa saya serahkan kepada Tuhan?", "Kebutuhan siapa yang selama ini saya anggap bukan urusan saya?"],
  },
  "epi-3": {
    renungan: "Setelah memberi makan orang banyak, Yesus naik ke bukit untuk berdoa. Dari sana Ia melihat para murid mendayung dengan susah payah melawan angin. Ia datang berjalan di atas air dan berkata, \"Tenanglah. Ini Aku! Jangan takut.\" Angin pun reda. Injil mencatat hati mereka masih tumpul; mereka belum memahami peristiwa roti. Bacaan pertama berkata bahwa di dalam kasih tidak ada ketakutan, sebab kasih yang sempurna melenyapkan ketakutan. Dalam pergumulan hidup, Yesus tidak jauh; Ia melihat dan datang. Hari ini, ketika merasa lelah mendayung sendirian, ucapkan doa singkat dan izinkan Dia naik ke perahu kita.",
    refleksi: ["Angin sakal apa yang sedang saya hadapi saat ini?", "Apakah saya mengundang Yesus masuk ke dalam pergumulan saya?"],
  },
  "epi-4": {
    renungan: "Di sinagoge Nazaret, Yesus membacakan nubuat Yesaya: Roh Tuhan mengurapi-Nya untuk membawa kabar baik bagi orang miskin, pembebasan bagi tawanan, dan penglihatan bagi orang buta. Lalu Ia berkata bahwa nas itu genap pada hari itu juga. Kabar baik Allah bukan janji yang jauh, melainkan hadir sekarang dalam diri Yesus. Bacaan pertama menegaskan bahwa orang yang mengasihi Allah juga mengasihi saudaranya. Kita yang dibaptis dalam Roh yang sama diutus melanjutkan karya itu. Hari ini, satu tindakan nyata bagi orang yang miskin, terikat, atau putus asa dapat menjadi tanda bahwa Sabda Tuhan sungguh digenapi.",
    refleksi: ["Kabar baik apa yang bisa saya bawa kepada orang yang sedang kesulitan?", "Apakah saya membiarkan Roh Kudus menggerakkan tindakan saya?"],
  },
  "epi-5": {
    renungan: "Orang kusta itu bersujud dan memohon dengan iman yang rendah hati: \"Tuan, jika Engkau mau, Engkau dapat menahirkan aku.\" Yesus mengulurkan tangan dan menyentuhnya, sesuatu yang dihindari orang pada zaman itu, lalu berkata, \"Aku mau, jadilah tahir.\" Sentuhan itu memulihkan bukan hanya tubuhnya, tetapi juga martabatnya. Setelah itu Yesus menyingkir ke tempat sunyi untuk berdoa. Surat Yohanes menyatakan bahwa siapa memiliki Anak, ia memiliki hidup. Kehendak Yesus adalah memulihkan kita. Hari ini kita dapat membawa luka yang memalukan kepada-Nya dalam doa, dan berani menyapa seseorang yang dijauhi orang lain.",
    refleksi: ["Luka apa yang ingin saya bawa kepada Yesus dengan rendah hati?", "Siapa yang perlu merasakan sentuhan kepedulian saya?"],
  },
  "epi-6": {
    renungan: "Murid-murid Yohanes cemas karena orang banyak mulai beralih kepada Yesus. Jawaban Yohanes penuh kedewasaan iman: ia hanya sahabat mempelai laki-laki yang bersukacita mendengar suara-Nya. \"Dia harus semakin besar dan aku harus semakin kecil.\" Yohanes tidak merasa tersaingi; sukacitanya penuh justru ketika Yesus semakin dikenal. Iri hati dalam pelayanan sering muncul ketika kita merasa tergeser. Bacaan pertama meyakinkan bahwa Allah mendengarkan doa yang sesuai kehendak-Nya. Hari ini kita bisa ikut bergembira atas keberhasilan orang lain dalam karya baik, dan membiarkan Kristus, bukan nama kita, yang semakin besar.",
    refleksi: ["Apakah saya merasa tersaingi ketika orang lain lebih dihargai?", "Dalam hal apa saya perlu menjadi makin kecil agar Kristus makin besar?"],
  },
  "lent-0-3": {
    renungan: "Rabu Abu membuka masa Prapaskah dengan undangan Nabi Yoel: \"Koyakkanlah hatimu, bukan pakaianmu.\" Dalam Injil, Yesus menunjuk tiga laku tobat, yaitu sedekah, doa, dan puasa, dengan satu peringatan: jangan dilakukan supaya dilihat orang. Bapa yang melihat yang tersembunyi akan membalasnya. Abu di dahi bukan tanda kesalehan untuk dipamerkan, melainkan pengakuan bahwa kita debu yang membutuhkan rahmat. Prapaskah adalah waktu untuk kembali kepada Tuhan dengan segenap hati. Pilihlah satu niat yang konkret dan sederhana untuk empat puluh hari ini, lalu jalankan diam-diam, cukup Tuhan saja yang tahu.",
    refleksi: ["Niat tobat apa yang ingin saya jalani selama Prapaskah ini?", "Apakah ada kebaikan yang saya lakukan hanya supaya dilihat orang?"],
  },
  "lent-0-4": {
    renungan: "Musa menghadapkan umat pada pilihan: kehidupan atau kematian, berkat atau kutuk. \"Pilihlah kehidupan supaya kamu hidup.\" Yesus menunjukkan bahwa jalan kehidupan itu justru melewati salib: menyangkal diri, memikul salib setiap hari, dan mengikuti Dia. Kata \"setiap hari\" penting; salib bukan hanya peristiwa besar, tetapi kesetiaan kecil yang diulang terus, seperti kesabaran di rumah atau kejujuran di tempat kerja. Apa gunanya memperoleh seluruh dunia bila kehilangan diri sendiri? Di awal Prapaskah ini, kita diajak memeriksa pilihan-pilihan kecil kita. Hari ini, pilihlah satu hal yang membawa kehidupan, walau menuntut sedikit pengorbanan.",
    refleksi: ["Salib harian apa yang sering saya hindari?", "Pilihan kecil apa hari ini yang membawa kehidupan bagi saya dan sesama?"],
  },
  "lent-0-5": {
    renungan: "Murid-murid Yohanes bertanya mengapa murid-murid Yesus tidak berpuasa. Yesus menjawab dengan gambaran pesta pernikahan: selama mempelai laki-laki bersama mereka, para sahabat tidak berdukacita. Puasa bukan sekadar aturan, melainkan ungkapan kerinduan akan Tuhan. Yesaya bahkan lebih tajam: puasa yang berkenan adalah membuka belenggu ketidakadilan, membagi roti dengan yang lapar, dan tidak menyembunyikan diri dari sesama. Puasa yang benar membuat hati lebih peka kepada Allah dan kepada orang lain. Hari ini, sisihkan apa yang kita hemat dari puasa atau pantang untuk orang yang membutuhkan.",
    refleksi: ["Apakah puasa saya membuat saya lebih rindu akan Tuhan?", "Kepada siapa saya bisa membagikan hasil puasa saya?"],
  },
  "lent-0-6": {
    renungan: "Yesus melihat Lewi, pemungut cukai yang dianggap berdosa, dan berkata, \"Ikutlah Aku.\" Lewi berdiri, meninggalkan semuanya, lalu mengadakan perjamuan bagi Yesus bersama teman-temannya. Para Farisi menggerutu, tetapi Yesus menjawab bahwa Ia datang bukan untuk orang benar, melainkan untuk memanggil orang berdosa supaya bertobat, seperti tabib bagi orang sakit. Yesaya menjanjikan bahwa siapa yang meninggalkan jari yang menunjuk-nunjuk akan bercahaya dalam gelap. Prapaskah bukan waktu untuk menghakimi orang lain, melainkan mengakui bahwa kita pun membutuhkan Sang Tabib. Hari ini, bersiaplah menerima sakramen tobat dengan jujur.",
    refleksi: ["Apa yang perlu saya tinggalkan agar dapat mengikuti Yesus lebih bebas?", "Apakah saya lebih sering menunjuk dosa orang lain daripada dosa sendiri?"],
  },
  "lent-1-1": {
    renungan: "Pada akhir zaman, Raja akan berkata, \"sebagaimana kamu melakukannya terhadap satu dari saudara-saudara-Ku yang paling kecil ini, kamu melakukannya untuk-Ku.\" Yang mengejutkan, baik yang diberkati maupun yang ditolak sama-sama tidak sadar telah bertemu Kristus. Ukuran penghakiman ternyata sangat konkret: memberi makan, memberi minum, menerima orang asing, mengunjungi yang sakit dan dipenjara. Kitab Imamat sudah meminta umat menjadi kudus dengan tidak menipu dan mengasihi sesama seperti diri sendiri. Kekudusan tampak dalam perhatian sehari-hari. Hari ini, temuilah Kristus dalam satu orang yang membutuhkan di dekatmu.",
    refleksi: ["Di wajah siapa Kristus mungkin sedang menunggu saya hari ini?", "Karya belas kasih mana yang paling jarang saya lakukan?"],
  },
  "lent-1-2": {
    renungan: "Yesus mengajar bahwa doa tidak perlu bertele-tele, sebab Bapa sudah tahu apa yang kita perlukan. Lalu Ia memberi doa Bapa Kami: memuliakan nama Allah, merindukan Kerajaan-Nya, memohon rezeki hari ini, pengampunan, dan perlindungan. Yesus menegaskan satu bagian secara khusus: jika kita mengampuni orang lain, Bapa pun mengampuni kita. Yesaya menggambarkan firman Tuhan seperti hujan yang tidak kembali sia-sia. Doa yang sering kita ucapkan ini adalah firman yang ingin berbuah dalam hidup kita. Hari ini, doakan Bapa Kami perlahan, berhenti pada permohonan pengampunan, dan ingatlah satu nama.",
    refleksi: ["Apakah saya sungguh menghayati Bapa Kami atau sekadar menghafalnya?", "Siapa yang perlu saya ampuni agar doa saya jujur?"],
  },
  "lent-1-3": {
    renungan: "Orang Niniwe bertobat setelah mendengar pewartaan singkat Yunus. Dari raja sampai rakyat, mereka berpuasa dan berbalik dari jalan jahat, dan Allah menyesal atas malapetaka yang hendak didatangkan-Nya. Dalam Injil, Yesus menyebut generasi-Nya jahat karena terus menuntut tanda, padahal di hadapan mereka ada yang lebih besar dari Yunus dan Salomo. Kita pun kadang menunda tobat sambil menunggu tanda luar biasa, padahal Tuhan sudah berbicara lewat Sabda, sakramen, dan peristiwa sehari-hari. Prapaskah mengajak kita mendengar dan segera berbalik. Hari ini, tanggapilah satu ajakan Tuhan yang sudah lama kita tunda.",
    refleksi: ["Tanda apa yang masih saya tunggu sebelum sungguh bertobat?", "Ajakan Tuhan apa yang sudah lama saya tunda?"],
  },
  "lent-1-4": {
    renungan: "\"Mintalah, dan hal itu akan diberikan kepadamu. Carilah, dan kamu akan mendapat. Ketuklah, dan hal itu akan dibukakan bagimu.\" Yesus meyakinkan kita bahwa Bapa jauh lebih baik daripada orang tua mana pun; Ia tidak akan memberi batu kepada anak yang meminta roti. Doa adalah relasi seorang anak dengan Bapa yang memberikan apa yang baik. Lalu Yesus menutup dengan kaidah emas: perlakukan orang lain sebagaimana kita ingin diperlakukan. Doa yang percaya dan kasih kepada sesama berjalan bersama. Hari ini, bawalah satu permohonan yang lama kita simpan kepada Bapa dengan penuh kepercayaan, lalu berbuat baik seperti yang kita harapkan dari orang lain.",
    refleksi: ["Apakah saya berdoa dengan kepercayaan seorang anak kepada Bapanya?", "Bagaimana saya ingin diperlakukan, dan sudahkah saya memperlakukan orang lain begitu?"],
  },
  "lent-1-5": {
    renungan: "Yesus menuntut kebenaran yang lebih dalam daripada sekadar tidak membunuh. Amarah dan kata-kata yang merendahkan pun sudah melukai. Karena itu, sebelum membawa persembahan ke altar, berdamailah dahulu dengan saudaramu. Relasi dengan Allah tidak bisa dipisahkan dari relasi dengan sesama. Yehezkiel menegaskan bahwa Allah tidak berkenan pada kematian orang fasik, melainkan pada pertobatannya; selalu ada jalan pulang. Prapaskah adalah saat yang baik untuk memulihkan hubungan yang retak. Hari ini, ambillah langkah pertama menuju rekonsiliasi: sebuah pesan singkat, permintaan maaf, atau setidaknya doa tulus bagi orang yang bersengketa dengan kita.",
    refleksi: ["Dengan siapa saya perlu berdamai sebelum datang ke altar?", "Kata-kata apa yang perlu saya jaga agar tidak melukai orang lain?"],
  },
  "lent-1-6": {
    renungan: "\"Kasihilah musuh-musuhmu dan berdoalah bagi orang-orang yang menganiaya kamu.\" Yesus menunjuk kepada Bapa yang menerbitkan matahari bagi orang jahat dan orang baik. Kasih yang hanya membalas kasih belum istimewa; para pemungut cukai pun melakukannya. Kita dipanggil menjadi sempurna seperti Bapa, yaitu murah hati tanpa memilih-milih. Kitab Ulangan mengingatkan bahwa umat adalah milik kesayangan Tuhan; identitas itu tampak dari cara kita memperlakukan orang lain. Mengasihi musuh tidak selalu berarti merasa senang, tetapi menghendaki kebaikan baginya. Hari ini, sebutlah dalam doa nama seseorang yang sulit kita kasihi, dan mohonkan berkat baginya.",
    refleksi: ["Siapa orang yang paling sulit saya doakan?", "Apakah kebaikan saya hanya untuk orang yang baik kepada saya?"],
  },
  "lent-2-1": {
    renungan: "\"Hendaklah kamu berbelas kasihan, sama seperti Bapamu yang juga penuh dengan belas kasihan.\" Yesus merinci belas kasihan itu: jangan menghakimi, jangan menghukum, ampunilah, dan berilah. Ukuran yang kita pakai untuk orang lain akan dipakai pula bagi kita, dan Allah membalas dengan takaran yang dipadatkan, diguncangkan, dan berlimpah ke pangkuan. Dalam bacaan pertama, Daniel mengakui dosa umat dengan jujur dan berpegang pada belas kasihan serta pengampunan Allah. Orang yang sadar telah banyak diampuni lebih mudah bermurah hati. Hari ini, cobalah menahan diri dari satu penilaian cepat terhadap orang lain, dan berikan pengertian sebagai gantinya.",
    refleksi: ["Takaran apa yang saya pakai ketika menilai orang lain?", "Pengampunan apa dari Allah yang membuat saya terharu?"],
  },
  "lent-2-2": {
    renungan: "Yesus mengkritik para ahli Taurat dan Farisi yang mengajarkan hal benar tetapi tidak melakukannya, meletakkan beban berat di bahu orang lain, dan suka mencari tempat terhormat. Ukuran kebesaran dalam Kerajaan Allah berbeda: yang terbesar adalah pelayan, dan siapa meninggikan diri akan direndahkan. Yesaya mengajak umat berhenti berbuat jahat dan belajar berbuat baik; dosa semerah kirmizi pun dapat menjadi putih seperti salju. Prapaskah mengajak kita memeriksa jarak antara kata dan perbuatan. Hari ini, lakukan satu pelayanan kecil yang tidak membawa gengsi, dan biarkan tindakan kita berbicara lebih banyak daripada nasihat kita.",
    refleksi: ["Di mana kata-kata saya belum sejalan dengan perbuatan saya?", "Pelayanan sederhana apa yang bisa saya lakukan tanpa mencari penghargaan?"],
  },
  "lent-2-3": {
    renungan: "Yesus baru saja memberitahukan penderitaan-Nya di Yerusalem, tetapi ibu anak-anak Zebedeus justru meminta kursi kehormatan bagi kedua putranya. Yesus bertanya, \"Apakah kamu sanggup minum dari cawan yang harus Kuminum?\" Kemuliaan dalam Kerajaan-Nya bukan soal posisi, melainkan kesediaan melayani dan memberikan diri, sebab Anak Manusia datang untuk melayani dan memberikan nyawa-Nya. Yeremia mengalami fitnah dan rencana jahat karena setia pada firman, namun tetap berdoa bagi orang-orang itu. Kita mudah mencari tempat aman dan terhormat. Hari ini, di rumah atau di tempat kerja, pilihlah posisi pelayan: membantu tanpa diminta dan tanpa menghitung jasa.",
    refleksi: ["Apakah saya mengikuti Yesus untuk mencari kedudukan atau untuk melayani?", "Cawan apa yang sedang Tuhan minta saya terima?"],
  },
  "lent-2-4": {
    renungan: "Orang kaya dalam perumpamaan tidak disebut melakukan kejahatan besar. Dosanya adalah tidak melihat Lazarus yang terbaring di depan pintunya setiap hari. Kemewahan membuatnya buta terhadap penderitaan yang sangat dekat. Setelah mati, jurang di antara mereka tidak dapat diseberangi. Yeremia membandingkan orang yang mengandalkan manusia dengan semak di padang gurun, sedangkan orang yang mengandalkan Tuhan seperti pohon di tepi air. Kekayaan dan kenyamanan dapat membuat hati kering. Prapaskah mengajak kita membuka mata. Hari ini, perhatikan siapa \"Lazarus\" di depan pintu kita, entah tetangga, pekerja, atau anggota keluarga, lalu lakukan sesuatu baginya.",
    refleksi: ["Siapa Lazarus yang sering saya lewati tanpa melihat?", "Apakah kenyamanan hidup membuat hati saya kurang peka?"],
  },
  "lent-2-5": {
    renungan: "Kisah Yusuf yang dijual saudara-saudaranya karena iri hati menjadi bayangan nasib Yesus. Dalam perumpamaan, para penggarap kebun anggur menolak para hamba, lalu membunuh anak pemilik kebun. Namun Allah mengubah penolakan menjadi keselamatan: batu yang dibuang menjadi batu penjuru. Kebun anggur itu dipercayakan kepada kita untuk menghasilkan buah, bukan untuk dikuasai. Kita adalah penggarap, bukan pemilik. Iri hati dan rasa memiliki dapat membuat kita menolak utusan Tuhan. Hari ini, periksalah talenta, waktu, dan tanggung jawab yang dipercayakan kepada kita, dan persembahkan buahnya kepada Tuhan dengan rendah hati.",
    refleksi: ["Apakah saya memperlakukan hidup ini sebagai milik atau titipan Tuhan?", "Buah apa yang Tuhan harapkan dari kebun hidup saya?"],
  },
  "lent-2-6": {
    renungan: "Dalam perumpamaan anak yang hilang, sang ayah tidak menunggu dengan tangan terlipat. Ketika anaknya masih jauh, ia berlari, memeluk, dan menyiapkan pesta. Ia juga keluar membujuk anak sulung yang marah. Kedua anak sama-sama perlu pulang: yang satu dari pelarian, yang lain dari hati yang menghitung-hitung. Mikha bersaksi tentang Allah yang tidak bertahan dalam murka, tetapi berkenan pada kasih setia dan melemparkan dosa ke tubir laut. Prapaskah adalah perjalanan pulang ke rumah Bapa. Hari ini, akui di sisi mana kita berdiri, si bungsu atau si sulung, dan biarkan Bapa memeluk kita.",
    refleksi: ["Apakah saya lebih mirip si bungsu atau si sulung saat ini?", "Apa yang menghalangi saya untuk pulang ke pelukan Bapa?"],
  },
  "lent-3-1": {
    renungan: "Naaman, panglima besar dari Aram, hampir pulang tanpa sembuh karena merasa perintah Elisa terlalu sederhana: mandi tujuh kali di Sungai Yordan. Kesombongannya harus dilepas sebelum ia dipulihkan. Dalam Injil, Yesus mengingatkan orang Nazaret bahwa rahmat Allah justru diterima oleh orang asing seperti janda di Sarfat dan Naaman. Mereka marah dan hendak melemparkan-Nya dari tebing. Kadang kita menolak Tuhan karena Ia datang lewat cara biasa atau orang yang terlalu kita kenal. Hari ini, terimalah teguran atau nasihat sederhana dari orang dekat dengan rendah hati; bisa jadi itulah jalan Tuhan menyembuhkan kita.",
    refleksi: ["Apakah saya menolak rahmat Tuhan karena datang lewat cara yang sederhana?", "Nasihat siapa yang selama ini saya abaikan karena terlalu mengenalnya?"],
  },
  "lent-3-2": {
    renungan: "Petrus mengira mengampuni tujuh kali sudah murah hati. Yesus menjawab: tujuh puluh kali tujuh kali, artinya tanpa batas. Perumpamaan hamba yang dibebaskan dari utang sepuluh ribu talenta, tetapi mencekik temannya karena utang kecil, menunjukkan betapa janggalnya hati yang tidak mengampuni setelah menerima belas kasihan besar. Dalam bacaan pertama, Azarya berdoa di tengah api dengan hati yang remuk dan rendah, memohon belas kasihan Tuhan. Pengampunan bermula dari kesadaran akan utang kita sendiri kepada Allah. Hari ini, ingatlah satu kali Tuhan mengampuni kita, lalu lepaskan satu kesalahan kecil orang lain yang masih kita simpan.",
    refleksi: ["Kesalahan siapa yang masih saya hitung-hitung?", "Seberapa sadar saya akan besarnya pengampunan Allah bagi saya?"],
  },
  "lent-3-3": {
    renungan: "Yesus datang bukan untuk meniadakan Hukum Taurat, melainkan untuk menggenapinya. Tidak satu iota pun akan hilang. Perintah Allah bukan beban, melainkan jalan hidup; Musa dalam Kitab Ulangan menyebut ketetapan itu sebagai kebijaksanaan yang membuat bangsa lain kagum. Yesus juga menyebut pentingnya melakukan dan mengajarkan perintah, bahkan yang terkecil. Iman tidak cukup diwariskan lewat kata-kata; anak-anak dan orang muda belajar paling banyak dari teladan. Musa pun berpesan agar umat memberitahukannya kepada anak cucu. Hari ini, setialah pada satu perintah kecil yang sering kita anggap sepele, seperti kejujuran dalam hal kecil.",
    refleksi: ["Perintah kecil mana yang sering saya anggap tidak penting?", "Iman seperti apa yang sedang saya wariskan kepada generasi berikut?"],
  },
  "lent-3-4": {
    renungan: "Yesus mengusir setan dari orang bisu, tetapi sebagian orang malah menuduh-Nya bekerja dengan kuasa Beelzebul. Mereka melihat kebaikan, namun hati yang tertutup memutarbalikkannya. Yesus menjawab bahwa kerajaan yang terpecah akan runtuh, dan menegaskan, \"Siapa pun yang tidak berada di pihak-Ku, ia melawan Aku.\" Tidak ada sikap netral terhadap Kristus. Yeremia meratapi umat yang tidak mau mendengar dan menegarkan tengkuk. Prapaskah mengajak kita jujur: di bagian mana kita masih setengah hati? Hari ini, beri ruang bagi Yesus pada satu area hidup yang selama ini kita kunci, dan biarkan Dia yang lebih kuat itu membebaskan kita.",
    refleksi: ["Di bagian hidup mana saya masih setengah hati mengikuti Yesus?", "Apakah saya mudah curiga terhadap kebaikan yang dilakukan orang lain?"],
  },
  "lent-3-5": {
    renungan: "Seorang ahli Taurat bertanya tentang perintah yang paling utama. Yesus merangkum seluruh hukum dalam dua kasih: mengasihi Allah dengan segenap hati, jiwa, akal budi, dan kekuatan, serta mengasihi sesama seperti diri sendiri. Ahli Taurat itu memahami bahwa kasih ini lebih utama daripada semua kurban, dan Yesus berkata ia tidak jauh dari Kerajaan Allah. Hosea mengajak umat kembali kepada Tuhan yang menyembuhkan dan mengasihi dengan sukarela. Prapaskah bukan tentang menumpuk praktik saleh, melainkan memperdalam kasih. Hari ini, bertanyalah sederhana: apakah ibadah saya membuat saya lebih sabar dan ramah kepada orang di rumah?",
    refleksi: ["Apakah ibadah saya membuat saya lebih mengasihi sesama?", "Bagian diri saya mana yang belum saya serahkan untuk mengasihi Allah?"],
  },
  "lent-3-6": {
    renungan: "Dua orang berdoa di Bait Allah. Orang Farisi berdoa tentang dirinya sendiri, membanggakan puasa dan persepuluhannya sambil merendahkan pemungut cukai. Pemungut cukai berdiri jauh, tidak berani menengadah, hanya memohon belas kasihan Allah atas dirinya yang berdosa. Yang kedua pulang sebagai orang yang dibenarkan. Hosea mengingatkan bahwa Tuhan menghendaki kasih setia, bukan kurban, dan pengenalan akan Allah lebih dari kurban bakaran. Doa yang benar dimulai dari kejujuran tentang diri sendiri, bukan perbandingan dengan orang lain. Hari ini, berdoalah singkat dengan hati rendah, tanpa membandingkan diri dengan siapa pun, dan percayakan diri pada belas kasih-Nya.",
    refleksi: ["Apakah saya sering membandingkan diri dengan orang lain saat berdoa?", "Bagaimana saya bisa berdoa dengan lebih jujur di hadapan Tuhan?"],
  },
  "lent-4-1": {
    renungan: "Seorang pegawai istana datang dari Kapernaum memohon agar Yesus menyembuhkan anaknya yang hampir mati. Yesus hanya berkata, \"Pulanglah, anakmu hidup!\" Pegawai itu percaya pada perkataan Yesus dan pulang, tanpa melihat tanda apa pun. Di tengah jalan ia mendengar anaknya sembuh pada jam yang sama. Yesaya menubuatkan langit dan bumi baru, tempat tangisan tidak terdengar lagi. Iman sejati percaya pada Sabda sebelum melihat hasilnya. Di pertengahan Prapaskah ini, kita diajak mempercayakan orang-orang yang kita kasihi kepada Tuhan. Hari ini, serahkan satu kekhawatiran tentang keluarga, lalu jalani hari dengan keyakinan bahwa Ia bekerja.",
    refleksi: ["Apakah saya percaya pada Sabda Tuhan meski belum melihat hasilnya?", "Kekhawatiran apa tentang keluarga yang perlu saya serahkan hari ini?"],
  },
  "lent-4-2": {
    renungan: "Selama tiga puluh delapan tahun seorang lumpuh berbaring di dekat kolam Betesda, tanpa seorang pun yang menolongnya masuk ke air. Yesus bertanya, \"Apakah kamu mau disembuhkan?\" lalu menyuruhnya berdiri, mengangkat kasurnya, dan berjalan. Alih-alih bersukacita, sebagian orang malah mempersoalkan hari Sabat. Yehezkiel melihat air yang mengalir dari Bait Suci dan menghidupkan segala yang dilaluinya. Yesus adalah sumber air hidup itu. Kadang kita terlalu lama terbiasa dengan kelumpuhan rohani dan berhenti berharap. Hari ini, jawablah pertanyaan Yesus dengan jujur, dan jadilah orang yang menolong orang lain yang tidak punya siapa-siapa.",
    refleksi: ["Kelumpuhan apa dalam hidup saya yang sudah terlalu lama saya biarkan?", "Siapa yang sedang menunggu seseorang untuk menolongnya?"],
  },
  "lent-4-3": {
    renungan: "\"Bapa-Ku masih bekerja sampai saat ini, maka Aku pun masih bekerja.\" Yesus menyatakan kesatuan-Nya dengan Bapa: Anak melakukan apa yang Ia lihat dikerjakan Bapa, dan Bapa memberi kuasa kepada Anak untuk menghidupkan. Siapa mendengar perkataan-Nya dan percaya kepada Dia yang mengutus-Nya, ia memiliki hidup kekal. Yesaya menyampaikan penghiburan yang lembut: sekalipun seorang ibu melupakan anak yang disusuinya, Allah tidak akan melupakan kita. Allah tidak pernah berhenti bekerja demi keselamatan kita, bahkan saat kita merasa ditinggalkan. Hari ini, ingatlah satu karya Tuhan dalam hidup kita, dan percayakan hal yang belum selesai kepada-Nya.",
    refleksi: ["Kapan saya merasa dilupakan Tuhan, dan bagaimana Ia ternyata tetap bekerja?", "Apakah pekerjaan saya selaras dengan kehendak Bapa?"],
  },
  "lent-4-4": {
    renungan: "Yesus menyebut kesaksian-kesaksian tentang diri-Nya: Yohanes Pembaptis, pekerjaan-pekerjaan yang Ia lakukan, Bapa sendiri, dan Kitab Suci. Namun banyak orang tetap tidak mau datang kepada-Nya karena mereka mencari hormat dari sesama, bukan dari Allah. Dalam Kitab Keluaran, Musa berdiri di hadapan Allah untuk umat yang menyembah anak lembu emas, dan Tuhan menyesali malapetaka yang hendak dijatuhkan. Musa menjadi pengantara yang setia. Mengejar pujian manusia dapat membutakan kita terhadap kebenaran. Hari ini, periksalah motivasi di balik kegiatan kita, dan bacalah Kitab Suci dengan hati yang mencari Yesus, bukan pembenaran diri.",
    refleksi: ["Hormat siapa yang paling saya kejar: manusia atau Allah?", "Apakah saya membaca Kitab Suci untuk berjumpa dengan Yesus?"],
  },
  "lent-4-5": {
    renungan: "Kitab Kebijaksanaan menggambarkan orang fasik yang merasa terganggu oleh orang benar dan berencana mengujinya dengan siksaan. Bacaan ini menjadi gambaran nasib Yesus. Dalam Injil, Yesus pergi ke Yerusalem dengan diam-diam karena ada yang hendak membunuh-Nya, namun tetap berbicara dengan terus terang di Bait Allah. Orang-orang mengira tahu asal-Nya, padahal tidak mengenal Bapa yang mengutus-Nya. Mereka hendak menangkap-Nya, tetapi saat-Nya belum tiba. Hidup Yesus sepenuhnya ada dalam tangan Bapa. Menjelang Pekan Suci, kita belajar setia meski ditolak. Hari ini, tetaplah berbuat benar walau tidak populer.",
    refleksi: ["Apakah saya takut kehilangan penerimaan orang ketika berbuat benar?", "Bagaimana saya menyerahkan waktu dan hidup saya ke tangan Bapa?"],
  },
  "lent-4-6": {
    renungan: "Perkataan Yesus memecah orang banyak: ada yang menyebut-Nya Nabi, ada yang mengakui-Nya Kristus, ada yang meragukan karena Ia dari Galilea. Para penjaga yang diutus menangkap-Nya pulang dengan tangan kosong dan berkata belum pernah ada orang berbicara seperti Dia. Nikodemus dengan hati-hati membela agar Yesus didengar dulu sebelum dihakimi. Yeremia merasa seperti domba jinak yang dibawa ke pembantaian, namun menyerahkan perkaranya kepada Tuhan. Kita mudah ikut arus penilaian orang banyak. Hari ini, beranilah seperti Nikodemus: mendengarkan dulu sebelum menghakimi, dan membela orang yang dihakimi tanpa didengar.",
    refleksi: ["Apakah saya ikut menghakimi seseorang sebelum mendengarnya?", "Apa yang membuat perkataan Yesus menyentuh hati saya?"],
  },
  "lent-5-1": {
    renungan: "Dua kisah perempuan hari ini menunjukkan Allah yang membela. Susana difitnah dua orang tua yang berkuasa, tetapi Daniel membongkar kebohongan mereka. Dalam Injil, perempuan yang kedapatan berzina dibawa ke hadapan Yesus untuk menjebak-Nya. Yesus membungkuk, menulis di tanah, lalu berkata bahwa siapa yang tidak berdosa hendaknya melemparkan batu pertama. Satu per satu mereka pergi. Yesus tidak menghukumnya, tetapi juga tidak membenarkan dosa: \"Pergilah, dan mulai sekarang, jangan berbuat dosa lagi.\" Belas kasih dan panggilan untuk berubah berjalan bersama. Hari ini, letakkan batu yang kita genggam terhadap orang lain.",
    refleksi: ["Batu penghakiman apa yang masih saya genggam terhadap seseorang?", "Dosa apa yang Yesus minta saya tinggalkan mulai sekarang?"],
  },
  "lent-5-2": {
    renungan: "Di padang gurun, umat Israel yang dipagut ular dipulihkan ketika memandang ular tembaga yang ditinggikan Musa. Yesus memakai gambaran yang sama: ketika Anak Manusia ditinggikan, orang akan tahu bahwa \"Akulah Dia.\" Salib, yang tampak sebagai kekalahan, menjadi tempat Allah menyatakan diri dan menyembuhkan. Yesus juga berkata bahwa Bapa tidak membiarkan-Nya sendirian, sebab Ia selalu melakukan yang berkenan kepada-Nya. Menjelang Pekan Suci, kita diajak memandang salib, bukan menghindarinya. Hari ini, luangkan sejenak waktu memandang salib di rumah atau di gereja, dan bawalah luka kita kepada Dia yang ditinggikan.",
    refleksi: ["Apa arti memandang salib bagi saya hari ini?", "Luka apa yang perlu saya bawa kepada Yesus yang tersalib?"],
  },
  "lent-5-3": {
    renungan: "\"Jika kamu tetap dalam firman-Ku, kamu benar-benar murid-Ku, dan kamu akan mengetahui kebenaran, dan kebenaran itu akan membebaskan kamu.\" Para pendengar merasa sudah bebas sebagai keturunan Abraham, tetapi Yesus menunjuk perbudakan yang lebih dalam, yaitu dosa. Sadrakh, Mesakh, dan Abednego memilih setia kepada Allah walau diancam perapian, dan justru di dalam api mereka berjalan bebas. Kebebasan sejati bukan melakukan apa saja yang kita mau, tetapi hidup dalam kebenaran yang dari Allah. Hari ini, tetaplah dalam firman-Nya dengan membaca satu perikop Injil, dan kenali satu kebiasaan yang masih memperbudak kita.",
    refleksi: ["Kebiasaan apa yang masih memperbudak saya?", "Bagaimana saya bisa tetap tinggal dalam firman Yesus setiap hari?"],
  },
  "lent-5-4": {
    renungan: "Allah mengikat perjanjian dengan Abraham dan menjanjikan keturunan yang tak terhitung. Dalam Injil, Yesus menyatakan bahwa Abraham bersukacita melihat hari-Nya, dan \"sebelum Abraham ada, Aku sudah ada.\" Para pendengar mengambil batu untuk melempari-Nya. Yesus adalah Allah yang setia pada perjanjian sejak semula, dan siapa menuruti firman-Nya tidak akan melihat maut selamanya. Pernyataan ini terlalu besar bagi mereka yang ingin Allah sesuai ukuran pikirannya sendiri. Kita pun kadang mengecilkan Yesus menjadi sekadar guru moral. Hari ini, sembahlah Dia sebagai Tuhan yang kekal, dan percayakan masa depan kita kepada kesetiaan-Nya.",
    refleksi: ["Apakah saya mengenal Yesus sebagai Tuhan atau sekadar guru yang baik?", "Janji Tuhan mana yang ingin saya pegang hari ini?"],
  },
  "lent-5-5": {
    renungan: "Orang banyak kembali mengambil batu untuk melempari Yesus. Ia bertanya, karena pekerjaan baik manakah mereka hendak melempari-Nya? Yesus mengajak mereka melihat perbuatan-perbuatan-Nya: bila tidak percaya kepada-Nya, setidaknya percayalah kepada pekerjaan itu. Yeremia, yang dikelilingi bisikan dan ancaman, tetap berseru bahwa Tuhan menyertainya seperti pahlawan yang perkasa. Menjelang Pekan Suci, ketegangan semakin memuncak, namun Yesus tetap tenang dalam kesatuan-Nya dengan Bapa. Banyak orang di seberang Yordan justru percaya. Hari ini, biarlah perbuatan baik kita menjadi kesaksian yang lebih kuat daripada perdebatan.",
    refleksi: ["Apakah perbuatan saya menjadi kesaksian tentang Allah?", "Ketika ditekan, kepada siapa saya menyerahkan perkara saya?"],
  },
  "lent-5-6": {
    renungan: "Setelah Lazarus dibangkitkan, banyak orang percaya, tetapi para pemimpin justru bermufakat untuk membunuh Yesus. Kayafas berkata lebih baik satu orang mati daripada seluruh bangsa binasa. Tanpa sadar ia bernubuat bahwa Yesus akan mati untuk mengumpulkan anak-anak Allah yang tercerai-berai. Yehezkiel menubuatkan Allah yang mengumpulkan umat-Nya dari segala penjuru dan menjadikan mereka satu bangsa. Bahkan rencana jahat manusia dapat dipakai Allah untuk keselamatan. Di ambang Pekan Suci, kita diajak bersiap menyertai Yesus. Hari ini, doakan persatuan keluarga, komunitas, dan Gereja, yang demi itulah Yesus menyerahkan nyawa-Nya.",
    refleksi: ["Perpecahan apa di sekitar saya yang perlu saya doakan?", "Bagaimana saya mempersiapkan hati untuk Pekan Suci?"],
  },
  "holy-1": {
    renungan: "Enam hari sebelum Paskah, di Betania, Maria meminyaki kaki Yesus dengan minyak narwastu yang mahal dan menyekanya dengan rambutnya. Rumah itu penuh harum minyak. Yudas menganggapnya pemborosan, tetapi Yesus membela Maria: ia menyiapkan hari penguburan-Nya. Yesaya melukiskan Hamba Tuhan yang lembut, yang tidak mematahkan buluh yang patah terkukul. Pada awal Pekan Suci, Maria mengajarkan kasih yang tidak menghitung-hitung. Kita sering terlalu perhitungan dalam memberi waktu bagi Tuhan. Hari ini, berikan sesuatu yang berharga bagi Yesus, mungkin waktu doa yang lebih panjang, dengan hati yang murah dan tulus.",
    refleksi: ["Apa \"minyak narwastu\" yang bisa saya persembahkan kepada Yesus pekan ini?", "Apakah saya perhitungan dalam memberi waktu bagi Tuhan?"],
  },
  "holy-2": {
    renungan: "Di meja perjamuan, Yesus gelisah dan berkata salah seorang murid akan mengkhianati-Nya. Yudas menerima roti dari tangan-Nya lalu pergi keluar, \"dan saat itu sudah malam.\" Petrus dengan yakin berjanji menyerahkan nyawanya, tetapi Yesus tahu ia akan menyangkal tiga kali. Dua murid sama-sama jatuh; bedanya, Petrus kemudian kembali kepada belas kasihan Tuhan. Yesaya menggambarkan Hamba yang merasa sia-sia berjerih lelah, namun dijadikan terang bagi bangsa-bangsa. Pekan Suci mengajak kita jujur akan kerapuhan diri tanpa putus asa. Hari ini, jangan andalkan kekuatan sendiri; mohonlah rahmat untuk tetap setia, dan siapkan diri untuk mengaku dosa.",
    refleksi: ["Di mana saya terlalu yakin pada kekuatan sendiri?", "Setelah jatuh, apakah saya kembali kepada Yesus atau menjauh?"],
  },
  "holy-3": {
    renungan: "Rabu dalam Pekan Suci sering disebut hari pengkhianatan. Yudas bertanya, \"Kamu akan memberiku apa?\" lalu menukar Gurunya dengan tiga puluh keping perak. Di perjamuan, para murid bertanya satu per satu, \"Pastinya, bukan aku, Tuhan?\" Pertanyaan itu pantas kita tanyakan juga, sebab kita pun kadang menukar kesetiaan dengan keuntungan kecil. Yesaya menggambarkan Hamba yang tidak memberontak ketika dipukul, karena Tuhan menolong-Nya. Yesus melangkah menuju sengsara dengan sadar dan bebas. Hari ini, periksalah apa yang kita tukar demi kenyamanan atau uang, lalu persiapkan hati untuk Trihari Suci dengan doa dan pengakuan dosa.",
    refleksi: ["Apa yang kadang saya pilih lebih daripada kesetiaan kepada Yesus?", "Bagaimana saya mempersiapkan diri untuk Trihari Suci?"],
  },
  "easter-1-1": {
    renungan: "Para perempuan berlari dari kubur dengan rasa takut bercampur sukacita besar, dan Yesus yang bangkit menemui mereka dengan salam. Mereka memeluk kaki-Nya dan menyembah-Nya. Yesus mengutus mereka memberi kabar kepada saudara-saudara-Nya. Sementara itu, para imam kepala menyuap penjaga untuk menyebarkan cerita bohong. Kebenaran kebangkitan selalu berhadapan dengan upaya menutupinya. Dalam Kisah Para Rasul, Petrus dengan berani bersaksi bahwa Allah membangkitkan Yesus dan maut tidak dapat menguasai-Nya. Sukacita Paskah bukan untuk disimpan. Hari ini, bagikan satu kabar baik tentang karya Tuhan dalam hidupmu kepada orang lain.",
    refleksi: ["Bagaimana saya mengalami sukacita kebangkitan Yesus hari ini?", "Kepada siapa saya bisa membagikan kabar baik Paskah?"],
  },
  "easter-1-2": {
    renungan: "Maria Magdalena menangis di dekat kubur, mengira jenazah Yesus diambil orang. Ia bahkan tidak mengenali Yesus yang berdiri di depannya, sampai Yesus memanggil namanya: \"Maria!\" Saat itulah matanya terbuka. Yesus kemudian mengutusnya kepada para murid, dan ia bersaksi, \"Aku telah melihat Tuhan.\" Dalam bacaan pertama, orang banyak yang mendengar Petrus merasa tertusuk hatinya dan bertanya apa yang harus mereka lakukan. Tuhan yang bangkit mengenal kita secara pribadi, memanggil nama kita di tengah duka. Hari ini, dalam keheningan, dengarkan Yesus memanggil namamu, lalu bawa penghiburan itu kepada orang yang berduka.",
    refleksi: ["Di tengah kesedihan apa saya perlu mendengar Yesus memanggil nama saya?", "Siapa yang sedang berduka dan membutuhkan kesaksian pengharapan?"],
  },
  "easter-1-3": {
    renungan: "Dua murid berjalan ke Emaus dengan wajah muram, kecewa karena harapan mereka seolah terkubur. Yesus berjalan bersama mereka, mendengarkan, lalu menjelaskan Kitab Suci sampai hati mereka berkobar. Mereka mengenali-Nya ketika Ia memecahkan roti. Seketika mereka kembali ke Yerusalem membawa kabar itu. Dalam bacaan pertama, Petrus berkata kepada orang lumpuh bahwa ia tidak punya emas atau perak, tetapi memberikan apa yang ada padanya: nama Yesus. Pola Emaus adalah pola Misa: Sabda yang membakar hati dan roti yang dipecah. Hari ini, ketika merasa kecewa, carilah Yesus dalam Kitab Suci dan Ekaristi.",
    refleksi: ["Kekecewaan apa yang ingin saya ceritakan kepada Yesus di perjalanan?", "Kapan terakhir hati saya berkobar saat mendengar Sabda Tuhan?"],
  },
  "easter-1-4": {
    renungan: "Ketika Yesus berdiri di tengah para murid dan berkata, \"Damai besertamu,\" mereka terkejut dan takut, mengira melihat hantu. Yesus menunjukkan tangan dan kaki-Nya, bahkan makan sepotong ikan di depan mereka. Kebangkitan bukan khayalan; Tuhan sungguh hidup. Lalu Ia membuka pikiran mereka untuk mengerti Kitab Suci dan berkata, \"Kamu adalah saksi-saksi dari semua ini.\" Petrus, dalam bacaan pertama, bersaksi bahwa orang lumpuh disembuhkan karena iman dalam nama Yesus, dan mengajak orang bertobat. Keraguan tidak membuat Yesus menjauh. Hari ini, bawa keraguan kita kepada-Nya, dan jadilah saksi kebangkitan lewat damai yang kita bawa.",
    refleksi: ["Keraguan apa yang ingin saya bawa kepada Yesus yang bangkit?", "Bagaimana saya menjadi saksi kebangkitan di tempat saya berada?"],
  },
  "easter-1-5": {
    renungan: "Semalaman para murid menjala tetapi tidak menangkap apa-apa. Seseorang di pantai menyuruh mereka menebarkan jala di sebelah kanan perahu, dan jala itu penuh. Murid yang dikasihi Yesus langsung mengenali, \"Itu Tuhan!\" Petrus terjun ke air. Di pantai, Yesus sudah menyiapkan api, ikan, dan roti, lalu mengajak mereka sarapan. Tuhan yang bangkit hadir dalam pekerjaan sehari-hari dan peduli pada kebutuhan sederhana. Dalam bacaan pertama, Petrus berani bersaksi bahwa tidak ada keselamatan di dalam nama lain. Hari ini, saat pekerjaan terasa sia-sia, dengarkan arahan Tuhan dan cobalah lagi bersama Dia.",
    refleksi: ["Di mana saya merasa sudah berusaha keras tetapi tidak membuahkan hasil?", "Apakah saya mengenali kehadiran Yesus dalam pekerjaan sehari-hari?"],
  },
  "easter-1-6": {
    renungan: "Markus mencatat betapa sulitnya para murid percaya. Kesaksian Maria Magdalena dan dua murid lain tidak mereka terima, sampai Yesus menampakkan diri dan menegur ketidakpercayaan mereka. Namun justru kepada murid-murid yang lamban percaya itulah Ia berkata, \"Pergilah ke seluruh dunia dan beritakanlah Injil kepada semua ciptaan.\" Dalam bacaan pertama, Petrus dan Yohanes, yang dianggap orang biasa dan tidak terpelajar, berkata bahwa mereka tidak mungkin diam tentang apa yang telah mereka lihat dan dengar. Tuhan memakai orang yang rapuh. Hari ini, jangan menunggu menjadi sempurna untuk bersaksi; ceritakan dengan sederhana apa yang Tuhan lakukan.",
    refleksi: ["Apakah saya lamban percaya pada kesaksian orang lain tentang Tuhan?", "Apa yang tidak dapat saya diamkan tentang kebaikan Tuhan?"],
  },
  "easter-2-1": {
    renungan: "Nikodemus datang pada waktu malam, terpelajar dan terhormat, tetapi masih mencari. Yesus berbicara tentang kelahiran baru dari air dan Roh. Seperti angin yang bertiup ke mana ia mau, Roh bekerja dengan cara yang tidak bisa kita kendalikan. Dalam bacaan pertama, jemaat berdoa bersama di tengah ancaman, lalu tempat mereka berkumpul bergoncang dan mereka dipenuhi Roh Kudus sehingga berani memberitakan firman. Hidup baru Paskah bukan hasil usaha sendiri, melainkan karya Roh yang kita terima dalam baptisan. Hari ini, berdoalah singkat kepada Roh Kudus dan biarkan Dia membawa kita pada langkah yang tak terduga.",
    refleksi: ["Bagian hidup mana yang perlu dilahirkan kembali oleh Roh Kudus?", "Apakah saya memberi ruang bagi Roh Kudus untuk mengejutkan saya?"],
  },
  "easter-2-2": {
    renungan: "Jemaat perdana sehati dan sejiwa; tidak seorang pun menganggap miliknya sebagai milik pribadi, sehingga tidak ada yang berkekurangan. Barnabas menjual ladangnya dan meletakkan hasilnya di kaki para rasul. Hidup seperti ini lahir dari kelahiran baru yang dibicarakan Yesus kepada Nikodemus. Yesus menyebut diri-Nya akan ditinggikan seperti ular tembaga di padang gurun, supaya setiap orang yang percaya memperoleh hidup kekal. Salib dan kebangkitan melahirkan komunitas yang saling berbagi. Hari ini, lihatlah kebutuhan di lingkungan atau paroki kita, dan bagikan sesuatu yang kita miliki dengan murah hati seperti Barnabas.",
    refleksi: ["Apa yang saya anggap milik pribadi yang bisa saya bagikan?", "Bagaimana komunitas saya bisa lebih sehati dan sejiwa?"],
  },
  "easter-2-3": {
    renungan: "\"Karena Allah sangat mengasihi dunia ini, Dia memberikan Anak-Nya yang tunggal.\" Ayat yang sangat dikenal ini merangkum seluruh Injil: Allah mengutus Anak bukan untuk menghakimi, melainkan menyelamatkan. Namun terang itu menuntut tanggapan; orang yang berbuat jahat menghindari terang, sedangkan yang melakukan kebenaran datang kepadanya. Dalam bacaan pertama, malaikat membuka pintu penjara dan menyuruh para rasul kembali memberitakan firman kehidupan. Kasih Allah membebaskan dan mengutus. Hari ini, bawalah ke dalam terang satu hal yang selama ini kita sembunyikan, mungkin lewat pengakuan dosa, dan percayalah bahwa kasih-Nya lebih besar.",
    refleksi: ["Apa yang masih saya sembunyikan dari terang Tuhan?", "Bagaimana saya menanggapi kasih Allah yang begitu besar?"],
  },
  "easter-2-4": {
    renungan: "Yesus yang datang dari atas memberi kesaksian tentang apa yang Ia lihat dan dengar dari Bapa. Allah memberikan Roh tanpa batas, dan Bapa mengasihi Anak serta menyerahkan segala sesuatu kepada-Nya. Siapa percaya kepada Anak memiliki hidup kekal. Dalam bacaan pertama, para rasul yang dilarang mengajar dalam nama Yesus menjawab tegas: kita harus lebih taat kepada Allah daripada kepada manusia. Keberanian mereka lahir dari keyakinan akan kebenaran yang mereka saksikan. Kita pun kadang tergoda diam demi rasa aman. Hari ini, ambil satu keputusan kecil yang setia kepada Allah, walau mungkin tidak menyenangkan orang di sekitar kita.",
    refleksi: ["Dalam hal apa saya lebih takut kepada manusia daripada taat kepada Allah?", "Apakah iman saya cukup berani untuk bersaksi?"],
  },
  "easter-2-5": {
    renungan: "Ribuan orang mengikuti Yesus, dan Ia bertanya kepada Filipus di mana dapat membeli roti. Filipus menghitung biaya; Andreas menemukan seorang anak dengan lima roti jelai dan dua ikan, meski ragu \"apa artinya itu untuk orang sebanyak ini?\" Yesus mengucap syukur, membagikan roti, dan semua kenyang, bahkan tersisa dua belas bakul. Dalam bacaan pertama, Gamaliel menasihati bahwa karya yang berasal dari Allah tidak dapat dibinasakan. Yang kecil di tangan Tuhan menjadi berkelimpahan. Hari ini, jangan meremehkan sumbangan kecil kita, dan belajarlah mengucap syukur sebelum membagi.",
    refleksi: ["Apakah saya lebih sering menghitung kekurangan daripada mempercayakannya kepada Tuhan?", "Hal kecil apa yang bisa saya berikan untuk kebaikan banyak orang?"],
  },
  "easter-2-6": {
    renungan: "Malam sudah gelap, danau bergelora karena angin kencang, dan Yesus belum bersama para murid. Lalu mereka melihat-Nya berjalan di atas air mendekati perahu, dan mereka ketakutan. Yesus berkata, \"Ini Aku, jangan takut!\" Ketika mereka mau menerima-Nya ke dalam perahu, perahu itu segera sampai ke tujuan. Dalam bacaan pertama, jemaat menghadapi masalah pembagian bantuan bagi para janda; para rasul tidak panik, tetapi berdoa dan memilih tujuh orang pelayan. Masalah tetap datang, tetapi Tuhan hadir di tengahnya. Hari ini, sambutlah Yesus ke dalam \"perahu\" persoalan kita, dan hadapi dengan tenang.",
    refleksi: ["Badai apa yang sedang saya hadapi tanpa melibatkan Yesus?", "Bagaimana saya bisa menyelesaikan masalah dengan doa dan musyawarah?"],
  },
  "easter-3-1": {
    renungan: "Orang banyak mencari Yesus sampai ke Kapernaum, tetapi Yesus tahu mereka mencari-Nya karena telah makan roti sampai kenyang. Ia mengajak mereka bekerja bukan untuk makanan yang dapat binasa, melainkan untuk makanan yang bertahan sampai hidup kekal. Pekerjaan yang dikehendaki Allah adalah percaya kepada Dia yang diutus-Nya. Dalam bacaan pertama, Stefanus yang penuh rahmat dan kuasa difitnah, namun wajahnya tampak seperti wajah malaikat. Kita sering mencari Tuhan hanya untuk kebutuhan sesaat. Hari ini, periksalah motivasi doa kita, dan carilah Yesus karena Dia sendiri, bukan hanya karena apa yang dapat Ia berikan.",
    refleksi: ["Mengapa saya mencari Yesus: karena Dia atau karena pemberian-Nya?", "Makanan apa yang saya kejar yang tidak bertahan lama?"],
  },
  "easter-3-2": {
    renungan: "Orang banyak menuntut tanda seperti manna di padang gurun. Yesus menjelaskan bahwa bukan Musa yang memberi roti dari surga, melainkan Bapa, dan roti sejati itu adalah Dia sendiri: \"Akulah roti hidup; orang yang datang kepada-Ku tidak akan lapar lagi.\" Dalam bacaan pertama, Stefanus wafat sebagai martir, menyerahkan rohnya kepada Tuhan dan berdoa agar dosa para pembunuhnya tidak ditanggungkan kepada mereka. Ia sungguh hidup dari Roti itu. Lapar terdalam manusia hanya dipuaskan oleh Yesus. Hari ini, sambutlah Komuni dengan kesadaran baru, atau buatlah komuni batin bila tidak dapat mengikuti Misa.",
    refleksi: ["Lapar apa dalam diri saya yang hanya dapat dipuaskan oleh Yesus?", "Apakah saya sanggup mengampuni seperti Stefanus?"],
  },
  "easter-3-3": {
    renungan: "Yesus berjanji tidak akan membuang siapa pun yang datang kepada-Nya. Kehendak Bapa adalah agar tidak ada yang hilang, melainkan semua dibangkitkan pada akhir zaman. Ini kabar yang sangat menghibur bagi orang yang merasa tidak layak. Dalam bacaan pertama, penganiayaan menyebarkan jemaat ke luar Yerusalem, tetapi justru di sana Filipus memberitakan Kristus di Samaria, dan kota itu penuh sukacita. Allah mampu mengubah kesulitan menjadi jalan pewartaan. Hari ini, datanglah kepada Yesus apa adanya, tanpa takut ditolak, dan percayalah bahwa situasi sulit kita pun bisa menjadi kesempatan bagi Injil.",
    refleksi: ["Apakah saya percaya bahwa Yesus tidak akan membuang saya?", "Kesulitan apa yang bisa Tuhan ubah menjadi kesempatan untuk bersaksi?"],
  },
  "easter-3-4": {
    renungan: "\"Tidak seorang pun dapat datang kepada-Ku, kecuali Bapa yang mengutus Aku menariknya.\" Iman adalah karunia, buah tarikan kasih Bapa. Yesus adalah roti hidup yang turun dari surga, dan roti yang Ia berikan adalah tubuh-Nya untuk hidup dunia. Dalam bacaan pertama, Filipus dituntun Roh untuk mendekati kereta seorang sida-sida Etiopia yang sedang membaca Yesaya. Ia menjelaskan tentang Yesus, dan orang itu dibaptis lalu melanjutkan perjalanan dengan sukacita. Allah sudah bekerja dalam hati orang sebelum kita datang. Hari ini, pekalah terhadap dorongan Roh untuk menyapa seseorang, dan siaplah menjelaskan iman dengan sederhana.",
    refleksi: ["Siapa yang mungkin sedang Tuhan tarik, dan butuh pendampingan saya?", "Apakah saya peka terhadap dorongan Roh Kudus dalam keseharian?"],
  },
  "easter-3-5": {
    renungan: "Orang-orang berdebat: bagaimana mungkin Yesus memberikan tubuh-Nya untuk dimakan? Yesus tidak melunakkan ajaran-Nya; Ia justru menegaskan bahwa siapa makan daging-Nya dan minum darah-Nya tinggal di dalam Dia dan Dia di dalam orang itu. Inilah inti iman Gereja akan Ekaristi. Dalam bacaan pertama, Saulus yang menganiaya jemaat dijatuhkan dalam perjalanan ke Damsyik dan bertemu Yesus yang berkata bahwa Ia sendirilah yang dianiaya. Yesus begitu menyatu dengan Gereja dan dengan orang yang menyambut-Nya. Hari ini, sambutlah Ekaristi dengan hormat, dan perlakukan sesama sebagai bagian dari Tubuh Kristus.",
    refleksi: ["Apakah saya menyambut Ekaristi dengan iman dan hormat?", "Bagaimana saya memperlakukan sesama sebagai anggota Tubuh Kristus?"],
  },
  "easter-3-6": {
    renungan: "Banyak murid berkata ajaran Yesus terlalu keras, lalu mengundurkan diri. Yesus tidak menahan mereka dengan kompromi, tetapi bertanya kepada kedua belas murid, \"Apakah kamu juga ingin pergi?\" Petrus menjawab, \"Tuhan, kepada siapakah kami akan pergi? Engkaulah yang memiliki perkataan kehidupan kekal.\" Iman tidak selalu berarti memahami segalanya, tetapi tetap tinggal bersama Yesus. Dalam bacaan pertama, Petrus membangkitkan Tabita di Yope, dan banyak orang percaya kepada Tuhan. Hari ini, ketika ajaran Gereja terasa berat, ulangi jawaban Petrus dalam doa, dan mohon rahmat untuk tetap setia.",
    refleksi: ["Ajaran Yesus mana yang terasa berat bagi saya?", "Kepada siapa lagi saya akan pergi bila meninggalkan Yesus?"],
  },
  "easter-4-1": {
    renungan: "Yesus menyebut diri-Nya pintu bagi domba-domba dan Gembala yang dikenal suaranya. Domba-domba mengikuti Dia karena mengenal suara-Nya, dan Ia datang supaya mereka mempunyai hidup dalam segala kelimpahan. Pencuri datang untuk mencuri dan membinasakan. Dalam bacaan pertama, Petrus menjelaskan kepada jemaat di Yerusalem bagaimana Roh Kudus turun atas Kornelius dan keluarganya; pintu keselamatan terbuka juga bagi bangsa lain. Banyak suara memanggil kita setiap hari, dari media hingga ambisi pribadi. Hari ini, luangkan waktu hening untuk mendengar suara Sang Gembala, dan bedakan suara mana yang membawa hidup.",
    refleksi: ["Suara apa yang paling sering saya dengarkan setiap hari?", "Bagaimana saya bisa lebih mengenali suara Yesus?"],
  },
  "easter-4-2": {
    renungan: "Pada hari raya Penahbisan, orang-orang mendesak Yesus untuk berterus terang apakah Ia Mesias. Yesus menunjuk pekerjaan-pekerjaan-Nya dan berkata bahwa domba-domba-Nya mendengar suara-Nya, dan tidak seorang pun dapat merebut mereka dari tangan-Nya, sebab Ia dan Bapa adalah satu. Dalam bacaan pertama, Injil sampai ke Antiokhia, Barnabas melihat kasih karunia Allah dan bersukacita, dan di sana pertama kalinya murid-murid disebut Kristen. Nama itu menunjukkan milik siapa kita. Hari ini, ingatlah bahwa kita aman di tangan Bapa, dan hiduplah sedemikian rupa sehingga orang mengenali kita sebagai milik Kristus.",
    refleksi: ["Apakah orang lain mengenali saya sebagai pengikut Kristus?", "Bagaimana keyakinan bahwa saya aman di tangan Bapa mengubah kecemasan saya?"],
  },
  "easter-4-3": {
    renungan: "Yesus berseru bahwa siapa percaya kepada-Nya, percaya kepada Dia yang mengutus-Nya, dan siapa melihat Dia melihat Bapa. Ia datang sebagai terang supaya orang tidak tinggal dalam kegelapan, dan Ia datang bukan untuk menghakimi, tetapi menyelamatkan. Dalam bacaan pertama, jemaat di Antiokhia beribadah dan berpuasa, lalu Roh Kudus meminta Barnabas dan Saulus dikhususkan untuk tugas perutusan. Panggilan itu lahir dari doa bersama. Terang Kristus tidak dimaksudkan untuk disimpan, tetapi dibawa keluar. Hari ini, sertakan doa dalam setiap keputusan penting, dan tanyakan ke mana Roh Kudus mengutus kita.",
    refleksi: ["Kegelapan apa yang perlu diterangi oleh Yesus dalam hidup saya?", "Apakah saya melibatkan doa dalam keputusan-keputusan saya?"],
  },
  "easter-4-4": {
    renungan: "Setelah membasuh kaki para murid, Yesus berkata bahwa hamba tidak lebih tinggi daripada tuannya. Mengetahui saja tidak cukup; berbahagialah kita jika melakukannya. Ia juga tahu akan dikhianati, namun tetap setia mengasihi. Siapa menerima orang yang diutus-Nya, menerima Dia. Dalam bacaan pertama, Paulus di Antiokhia di Pisidia menceritakan sejarah keselamatan dari Musa sampai Daud dan Yohanes Pembaptis, yang semuanya mengarah kepada Yesus. Kehidupan kristiani bukan sekadar pengetahuan iman, tetapi pelayanan nyata. Hari ini, lakukan satu tindakan pelayanan yang rendah hati bagi anggota keluarga atau rekan kerja tanpa menunggu dihargai.",
    refleksi: ["Pengetahuan iman apa yang belum saya wujudkan dalam tindakan?", "Bagaimana saya bisa melayani orang di rumah dengan rendah hati hari ini?"],
  },
  "easter-4-5": {
    renungan: "\"Janganlah hatimu menjadi gelisah; percayalah kepada Allah, percayalah juga kepada-Ku.\" Yesus menenangkan para murid sebelum perpisahan: di rumah Bapa ada banyak tempat tinggal, dan Ia pergi menyediakan tempat bagi mereka. Ketika Tomas bingung tentang jalan, Yesus menjawab, \"Akulah jalan, dan kebenaran, dan kehidupan.\" Dalam bacaan pertama, Paulus mewartakan bahwa janji Allah kepada leluhur telah digenapi dengan membangkitkan Yesus. Kegelisahan hidup sering lahir dari ketidakpastian tentang masa depan. Yesus tidak memberi peta lengkap, tetapi memberi diri-Nya sebagai jalan. Hari ini, serahkan satu kegelisahan kepada-Nya dan ambil satu langkah bersama Dia.",
    refleksi: ["Kegelisahan apa yang ingin saya serahkan kepada Yesus?", "Apakah saya mengikuti Yesus sebagai jalan dalam keputusan sehari-hari?"],
  },
  "easter-4-6": {
    renungan: "Filipus meminta, \"Tuhan, tunjukkanlah Bapa itu kepada kami, dan itu sudah cukup.\" Yesus menjawab bahwa siapa telah melihat Dia telah melihat Bapa. Wajah Allah yang kita rindukan tampak dalam diri Yesus: dalam belas kasih-Nya, pengampunan-Nya, dan kasih-Nya sampai akhir. Yesus juga berjanji akan melakukan apa pun yang diminta dalam nama-Nya, supaya Bapa dimuliakan. Dalam bacaan pertama, ketika sebagian orang menolak, Paulus dan Barnabas berpaling kepada bangsa lain, dan para murid tetap penuh sukacita dan Roh Kudus. Hari ini, renungkan satu kisah Injil untuk mengenal wajah Bapa, lalu tampakkan kebaikan-Nya kepada orang lain.",
    refleksi: ["Seperti apa wajah Allah yang saya kenal melalui Yesus?", "Apakah sukacita saya tetap terjaga ketika menghadapi penolakan?"],
  },
  "easter-5-1": {
    renungan: "Yesus berkata bahwa siapa mengasihi Dia akan menaati firman-Nya, dan Bapa serta Anak akan datang dan tinggal bersamanya. Roh Kudus, Penolong, akan mengajarkan segala sesuatu dan mengingatkan semua yang telah Yesus katakan. Allah tidak jauh; Ia ingin tinggal di dalam diri kita. Dalam bacaan pertama, di Listra orang banyak mengira Paulus dan Barnabas adalah dewa. Mereka merobek pakaian dan menegaskan bahwa mereka hanya manusia biasa yang mewartakan Allah yang hidup. Kerendahan hati menjaga agar kemuliaan tetap bagi Allah. Hari ini, sambutlah Allah yang ingin tinggal di hati kita, dan alihkan pujian kepada-Nya.",
    refleksi: ["Apakah hati saya menjadi tempat tinggal yang layak bagi Allah?", "Bagaimana saya menanggapi pujian atas pelayanan saya?"],
  },
  "easter-5-2": {
    renungan: "Yesus meninggalkan damai sejahtera yang berbeda dari damai yang diberikan dunia. Damai dunia sering bergantung pada keadaan yang tenang; damai Kristus tetap ada di tengah badai karena berakar pada relasi dengan Bapa. Maka Ia berkata, \"Jangan biarkan hatimu gelisah ataupun gentar.\" Dalam bacaan pertama, Paulus dilempari batu di Listra dan dikira sudah mati, tetapi ia bangun, masuk kembali ke kota, lalu menguatkan jemaat bahwa untuk masuk Kerajaan Allah kita harus mengalami banyak kesengsaraan. Damai Kristus tidak meniadakan kesulitan. Hari ini, ketika hati gelisah, berhentilah sejenak dan terimalah damai yang Ia tawarkan.",
    refleksi: ["Damai seperti apa yang sedang saya cari: damai dunia atau damai Kristus?", "Apa yang paling sering membuat hati saya gelisah?"],
  },
  "easter-5-3": {
    renungan: "\"Akulah pokok anggur yang sejati dan Bapa-Kulah pengusahanya.\" Ranting hanya berbuah bila tetap melekat pada pokok; terlepas dari Yesus, kita tidak dapat berbuat apa-apa. Ranting yang berbuah pun dibersihkan supaya berbuah lebih banyak. Pemangkasan terasa sakit, tetapi bertujuan agar kita bertumbuh. Dalam bacaan pertama, jemaat perdana menghadapi perselisihan tentang sunat bagi orang bukan Yahudi, lalu membawanya kepada para rasul di Yerusalem untuk dipertimbangkan bersama. Tinggal dalam Kristus juga berarti tinggal dalam persekutuan Gereja. Hari ini, perkuat keterikatan kita pada Yesus lewat doa singkat di sela kesibukan, dan terimalah pemangkasan dengan percaya.",
    refleksi: ["Apa yang sedang Tuhan pangkas dari hidup saya?", "Bagaimana saya tetap melekat pada Yesus di tengah kesibukan?"],
  },
  "easter-5-4": {
    renungan: "\"Seperti Bapa telah mengasihi Aku, demikianlah Aku telah mengasihimu. Tetaplah tinggal dalam kasih-Ku.\" Yesus mengundang kita masuk ke dalam lingkaran kasih antara Bapa dan Anak. Cara tinggal dalam kasih itu adalah menuruti perintah-Nya, dan tujuannya adalah sukacita yang penuh. Dalam bacaan pertama, Petrus dan Yakobus dalam sidang di Yerusalem memutuskan untuk tidak membebani orang bukan Yahudi yang berbalik kepada Allah. Kasih Allah membebaskan, bukan menambah beban. Ketaatan kristiani bukan rasa takut, melainkan tanggapan atas kasih. Hari ini, lakukan satu perintah Tuhan dengan gembira, sebagai jawaban atas kasih yang sudah kita terima.",
    refleksi: ["Apakah saya menaati Tuhan karena takut atau karena kasih?", "Apa yang menghalangi sukacita saya menjadi penuh?"],
  },
  "easter-5-5": {
    renungan: "\"Inilah perintah-Ku: Kamu harus saling mengasihi, sama seperti Aku telah mengasihi kamu.\" Ukurannya adalah kasih Yesus yang memberikan nyawa bagi sahabat-sahabat-Nya. Ia tidak lagi menyebut kita hamba, tetapi sahabat, karena Ia memberitahukan segala sesuatu dari Bapa. Bukan kita yang memilih Dia, melainkan Dia yang memilih kita untuk berbuah. Dalam bacaan pertama, para rasul mengirim surat yang membawa penghiburan dan sukacita bagi jemaat di Antiokhia. Kasih yang benar juga hadir lewat kata-kata yang meneguhkan. Hari ini, kirimkan pesan peneguhan kepada seseorang yang sedang berjuang, sebagai sahabat yang dipilih Kristus.",
    refleksi: ["Bagaimana saya menghayati diri sebagai sahabat Yesus?", "Siapa yang butuh kata-kata peneguhan dari saya hari ini?"],
  },
  "easter-5-6": {
    renungan: "Yesus berterus terang: jika dunia membenci para murid, ingatlah bahwa dunia lebih dahulu membenci Dia. Seorang hamba tidak lebih tinggi dari tuannya. Mengikuti Yesus berarti siap tidak selalu disukai. Namun kita bukan dari dunia, sebab Ia telah memilih kita. Dalam bacaan pertama, Paulus mengajak Timotius dalam perjalanan misi, dan melalui penglihatan seorang Makedonia yang memohon pertolongan, mereka dituntun Roh ke tempat baru. Penolakan tidak menghentikan perutusan; Roh selalu membuka jalan lain. Hari ini, bila iman kita disalahpahami, tanggapilah dengan tenang dan tetap berbuat baik, tanpa membalas permusuhan.",
    refleksi: ["Bagaimana saya menanggapi ketika iman saya disalahpahami?", "Apakah saya terbuka pada arah baru yang ditunjukkan Roh Kudus?"],
  },
  "easter-6-1": {
    renungan: "Yesus menjanjikan Penolong, Roh Kebenaran yang keluar dari Bapa, yang akan bersaksi tentang Dia. Para murid pun akan bersaksi karena telah bersama Yesus sejak semula. Ia juga memperingatkan bahwa mereka akan dikucilkan, supaya mereka tidak tergoncang ketika saat itu tiba. Dalam bacaan pertama, Lidia, penjual kain ungu di Filipi, mendengarkan Paulus, dan Tuhan membuka hatinya. Ia dibaptis bersama seisi rumahnya, lalu dengan ramah menawarkan rumahnya bagi para rasul. Kesaksian Roh bekerja dalam hati yang terbuka dan murah hati. Hari ini, mohonlah agar Tuhan membuka hati kita, dan bukalah rumah atau waktu kita bagi orang lain.",
    refleksi: ["Apakah hati saya terbuka seperti Lidia untuk mendengarkan Sabda?", "Bagaimana saya bisa menunjukkan keramahan kristiani minggu ini?"],
  },
  "easter-6-2": {
    renungan: "Para murid sedih karena Yesus akan pergi, tetapi Ia berkata bahwa kepergian-Nya berguna bagi mereka, sebab Penolong akan datang. Roh Kudus akan menyadarkan dunia akan dosa, kebenaran, dan penghakiman. Dalam bacaan pertama, Paulus dan Silas dipukuli dan dipasung di penjara, namun tengah malam mereka berdoa dan menyanyikan pujian. Gempa membuka pintu, dan kepala penjara yang hendak bunuh diri malah bertanya bagaimana ia dapat selamat; ia dan keluarganya dibaptis. Pujian di tengah penderitaan menjadi kesaksian yang kuat. Hari ini, cobalah memuji Tuhan justru di saat sulit, dan biarkan Roh mengubah suasana di sekitar kita.",
    refleksi: ["Dapatkah saya memuji Tuhan di tengah kesulitan saya?", "Kesedihan apa yang ternyata bisa membawa kebaikan?"],
  },
  "easter-6-3": {
    renungan: "Yesus masih punya banyak hal untuk dikatakan, tetapi para murid belum sanggup menanggungnya. Karena itu Roh Kebenaran akan membimbing mereka ke dalam seluruh kebenaran, langkah demi langkah. Allah sabar dengan pertumbuhan kita. Dalam bacaan pertama, Paulus di Areopagus Atena memulai dari apa yang dikenal pendengarnya, altar bertuliskan \"KEPADA ALLAH YANG TIDAK DIKENAL\", lalu mewartakan Allah yang di dalam-Nya kita hidup, bergerak, dan ada. Sebagian mengejek, beberapa menjadi percaya. Pewartaan membutuhkan kebijaksanaan dan kesabaran. Hari ini, mohon bimbingan Roh dalam satu persoalan yang belum kita mengerti, dan bersabarlah dengan proses iman orang lain.",
    refleksi: ["Kebenaran apa yang sedang Roh Kudus ajarkan kepada saya perlahan-lahan?", "Bagaimana saya bisa berbicara tentang iman dengan bijaksana?"],
  },
  "easter-6-4": {
    renungan: "\"Tinggal sesaat saja, dan kamu tidak akan melihat Aku lagi; dan sekali lagi, tinggal sesaat saja, dan kamu akan melihat Aku.\" Para murid bingung dengan perkataan ini. Yesus berbicara tentang wafat dan kebangkitan-Nya, juga tentang hidup kita yang mengalami saat-saat Tuhan terasa jauh. Dukacita akan berubah menjadi sukacita. Dalam bacaan pertama, Paulus bekerja sebagai pembuat kemah bersama Akwila dan Priskila di Korintus sambil mewartakan firman setiap Sabat. Iman dihayati di tengah pekerjaan biasa. Hari ini, bila Tuhan terasa jauh, bertahanlah sedikit lagi dalam doa dan kerja yang setia; \"sesaat\" itu tidak akan selamanya.",
    refleksi: ["Kapan saya merasa Tuhan jauh, dan bagaimana saya bertahan?", "Bagaimana pekerjaan sehari-hari saya menjadi tempat bersaksi?"],
  },
  "easter-6-5": {
    renungan: "Yesus memakai gambaran seorang ibu yang melahirkan: ia bersedih karena saatnya tiba, tetapi setelah anaknya lahir, ia tidak ingat lagi penderitaannya karena sukacita. Dukacita para murid akan berubah menjadi sukacita yang tidak dapat dirampas siapa pun. Penderitaan dalam Kristus bukan akhir, melainkan proses melahirkan hidup baru. Dalam bacaan pertama, Tuhan berbicara kepada Paulus dalam penglihatan, \"Jangan takut, tetapi teruslah berbicara,\" sebab Ia menyertainya. Paulus tinggal di Korintus satu setengah tahun mengajar. Hari ini, pandanglah satu penderitaan kita sebagai proses lahirnya sesuatu yang baru, dan mintalah keberanian untuk terus melangkah.",
    refleksi: ["Penderitaan apa yang mungkin sedang melahirkan sesuatu yang baru dalam diri saya?", "Sukacita apa yang tidak dapat dirampas dari saya?"],
  },
  "easter-6-6": {
    renungan: "Yesus mengundang para murid meminta kepada Bapa dalam nama-Nya, supaya sukacita mereka penuh. Ia menegaskan bahwa Bapa sendiri mengasihi mereka, karena mereka mengasihi Yesus dan percaya bahwa Ia datang dari Allah. Kita tidak berdoa kepada Allah yang enggan, tetapi kepada Bapa yang mengasihi. Dalam bacaan pertama, Apolos, seorang yang fasih dan bersemangat, dibimbing dengan rendah hati oleh Priskila dan Akwila agar lebih tepat memahami jalan Allah, lalu ia menjadi berkat besar bagi jemaat. Orang yang berbakat pun tetap perlu belajar. Hari ini, mintalah kepada Bapa dengan yakin, dan terimalah koreksi dengan terbuka.",
    refleksi: ["Apakah saya berdoa dengan keyakinan bahwa Bapa mengasihi saya?", "Apakah saya mau menerima koreksi seperti Apolos?"],
  },
  "easter-7-1": {
    renungan: "Para murid merasa sudah mengerti dan percaya, tetapi Yesus tahu mereka akan tercerai-berai dan meninggalkan-Nya sendirian. Namun Ia tidak sendirian, karena Bapa menyertai-Nya. Ia menutup dengan kata-kata penghiburan: di dunia kita akan mengalami penganiayaan, \"tetapi kuatkanlah hatimu! Aku telah mengalahkan dunia!\" Dalam bacaan pertama, Paulus di Efesus bertemu murid-murid yang belum pernah mendengar tentang Roh Kudus. Setelah dibaptis dalam nama Yesus dan ditumpangi tangan, Roh turun atas mereka. Menjelang Pentakosta, kita diajak memohon Roh yang menguatkan. Hari ini, serahkan satu ketakutan dan pegang kata-kata Yesus.",
    refleksi: ["Ketakutan apa yang perlu saya hadapi dengan keyakinan bahwa Yesus telah menang?", "Seberapa saya mengenal dan mengandalkan Roh Kudus?"],
  },
  "easter-7-2": {
    renungan: "Yesus menengadah ke langit dan berdoa untuk diri-Nya dan para murid. Hidup kekal, kata-Nya, adalah mengenal Bapa, satu-satunya Allah yang benar, dan Yesus Kristus yang diutus-Nya. Mengenal di sini berarti relasi pribadi, bukan sekadar pengetahuan. Dalam bacaan pertama, Paulus berpamitan dengan para penatua Efesus. Ia bersaksi telah melayani dengan rendah hati dan air mata, tidak menyembunyikan apa pun yang berguna, dan tidak menganggap nyawanya berharga asal menyelesaikan tugasnya. Kesetiaan sampai akhir lahir dari relasi yang dalam dengan Tuhan. Hari ini, luangkan waktu mengenal Allah lebih dekat lewat doa yang tenang.",
    refleksi: ["Apakah saya mengenal Allah secara pribadi atau hanya tahu tentang Dia?", "Tugas apa yang ingin saya selesaikan dengan setia?"],
  },
  "easter-7-3": {
    renungan: "Yesus mendoakan murid-murid-Nya yang tetap tinggal di dunia: \"Bapa yang Kudus, jagalah mereka di dalam nama-Mu,\" supaya mereka menjadi satu. Ia tidak meminta agar mereka diambil dari dunia, tetapi dilindungi dari yang jahat dan dikuduskan dalam kebenaran. Kita diutus ke tengah dunia, bukan untuk melarikan diri darinya. Dalam bacaan pertama, Paulus berpesan kepada para penatua Efesus agar menjaga kawanan, lalu berlutut berdoa bersama mereka di tengah tangis perpisahan. Ia mengingatkan bahwa lebih berbahagia memberi daripada menerima. Hari ini, ingatlah bahwa Yesus sendiri mendoakan kita, dan doakanlah orang-orang yang dipercayakan kepada kita.",
    refleksi: ["Bagaimana saya hidup di tengah dunia tanpa menjadi milik dunia?", "Siapa yang dipercayakan Tuhan kepada saya untuk saya doakan?"],
  },
  "easter-7-4": {
    renungan: "Yesus berdoa bukan hanya untuk para murid, tetapi juga untuk kita, yang percaya melalui pewartaan mereka. Doa-Nya: supaya semua menjadi satu, seperti Bapa di dalam Dia dan Dia di dalam Bapa, agar dunia percaya. Persatuan umat menjadi kesaksian yang meyakinkan. Dalam bacaan pertama, Paulus di hadapan Mahkamah Agama menghadapi perpecahan antara orang Farisi dan Saduki. Malamnya Tuhan berdiri di sampingnya dan berkata, \"Kuatkan hatimu,\" sebab ia akan bersaksi juga di Roma. Perpecahan merusak kesaksian, sedangkan kasih menyatukan. Hari ini, ambillah satu langkah kecil untuk memulihkan kesatuan di keluarga atau komunitas.",
    refleksi: ["Apa yang bisa saya lakukan untuk membangun kesatuan di komunitas saya?", "Apakah saya menyadari bahwa Yesus mendoakan saya?"],
  },
  "easter-7-5": {
    renungan: "Di tepi danau, Yesus bertanya tiga kali kepada Petrus, \"Apakah kamu mengasihi Aku?\" Tiga kali Petrus menyangkal, kini tiga kali ia diberi kesempatan menyatakan kasih. Yesus tidak mengungkit kegagalan, tetapi memulihkan dan memberi tugas: \"Gembalakanlah domba-domba-Ku.\" Lalu Ia berkata, \"Ikutlah Aku!\" Dalam bacaan pertama, Festus menjelaskan kepada Raja Agripa perkara Paulus tentang seorang Yesus yang sudah mati tetapi dikatakan Paulus hidup. Kasih kepada Yesus yang hidup diwujudkan dalam merawat sesama. Hari ini, biarkan Yesus memulihkan luka kegagalan kita, dan jawab kasih-Nya dengan melayani seseorang yang dipercayakan kepada kita.",
    refleksi: ["Bagaimana saya menjawab Yesus yang bertanya apakah saya mengasihi-Nya?", "Domba siapa yang Tuhan percayakan untuk saya rawat?"],
  },
  "easter-7-6": {
    renungan: "Petrus melihat murid yang dikasihi Yesus dan bertanya, \"Tuhan, bagaimana dengan dia?\" Yesus menjawab bahwa itu bukan urusannya: \"Kamu, ikutlah Aku!\" Setiap orang memiliki jalan panggilan sendiri; membandingkan diri hanya mengalihkan kita dari mengikuti Yesus. Injil Yohanes ditutup dengan kesaksian bahwa masih banyak hal yang dilakukan Yesus, yang tidak cukup ditulis dalam seluruh kitab dunia. Dalam bacaan pertama, Paulus di Roma, meski sebagai tahanan rumah, tetap mewartakan Kerajaan Allah dengan berani. Menjelang Pentakosta, kita diajak fokus pada panggilan kita sendiri. Hari ini, berhentilah membandingkan jalan hidup dengan orang lain.",
    refleksi: ["Dengan siapa saya sering membandingkan jalan hidup saya?", "Apa langkah nyata mengikuti Yesus yang Ia minta dari saya sekarang?"],
  },
  "marymotherchurch": {
    renungan: "Pada peringatan Santa Perawan Maria Bunda Gereja, kita berdiri bersama Maria di bawah salib. Di saat paling menyakitkan, Yesus mempercayakan ibu-Nya kepada murid yang dikasihi-Nya dan murid itu kepada ibu-Nya. Sejak saat itu murid itu menerima Maria di rumahnya. Dari lambung Yesus yang ditikam mengalir darah dan air, tanda kelahiran Gereja dan sakramen-sakramen. Kitab Kejadian menyebut Hawa sebagai ibu semua yang hidup; Maria menjadi Hawa baru, ibu bagi semua murid. Maria tidak meninggalkan Yesus dalam penderitaan, dan ia tidak meninggalkan kita. Hari ini, terimalah Maria di \"rumah\" hidup kita, misalnya dengan mendoakan satu peristiwa Rosario.",
    refleksi: ["Bagaimana saya menerima Maria sebagai ibu dalam hidup iman saya?", "Siapa yang sedang berdiri di bawah salibnya dan butuh kehadiran saya?"],
  },
  "san-0125": {
    renungan: "Pesta Bertobatnya Santo Paulus mengingatkan bahwa tidak ada orang yang terlalu jauh bagi rahmat Allah. Saulus, yang menganiaya pengikut Jalan Tuhan, dijatuhkan oleh cahaya dari langit dan mendengar Yesus bertanya mengapa ia menganiaya-Nya. Ananias, yang semula ragu, mendatanginya, dan Paulus dibaptis untuk menjadi saksi bagi semua orang. Dalam Injil, Yesus mengutus para murid ke seluruh dunia memberitakan Injil kepada segala makhluk. Pertobatan Paulus langsung berbuah perutusan. Hari ini, doakan seseorang yang kita anggap mustahil berubah, dan bersedialah menjadi \"Ananias\" yang menyambutnya, bukan yang menutup pintu.",
    refleksi: ["Siapa yang saya anggap mustahil bertobat?", "Pertobatan apa yang Tuhan minta dari saya, dan untuk perutusan apa?"],
  },
  "san-0202": {
    renungan: "Pada Pesta Yesus Dipersembahkan di Bait Allah, Maria dan Yusuf membawa Yesus kepada Tuhan sesuai hukum Musa. Simeon, orang benar yang lama menanti, menggendong Anak itu dan memuji Allah karena matanya telah melihat keselamatan, terang bagi bangsa-bangsa. Ia juga bernubuat bahwa suatu pedang akan menembus jiwa Maria. Hana, nabiah yang sudah sangat tua, juga memuji Allah dan berbicara tentang Anak itu. Maleakhi menubuatkan Tuhan yang datang ke Bait-Nya untuk memurnikan. Penantian yang setia tidak sia-sia. Hari ini, persembahkan diri dan keluarga kepada Tuhan, dan doakan para lansia yang setia menanti dalam doa.",
    refleksi: ["Apa yang sedang saya nantikan dengan setia dari Tuhan?", "Bagaimana saya mempersembahkan keluarga saya kepada Tuhan?"],
  },
  "san-0222": {
    renungan: "Pada Pesta Takhta Santo Petrus, Yesus bertanya kepada para murid, \"Menurutmu, siapakah Aku ini?\" Petrus menjawab bahwa Yesus adalah Mesias, Anak Allah yang hidup. Pengakuan itu bukan hasil pikirannya sendiri, melainkan dinyatakan oleh Bapa. Di atas batu karang itu Yesus mendirikan Gereja-Nya dan memberikan kunci Kerajaan Surga. Dalam bacaan pertama, Petrus sendiri berpesan agar para penatua menggembalakan kawanan dengan sukarela dan menjadi teladan, bukan memerintah. Takhta Petrus adalah takhta pelayanan. Hari ini, doakan Paus dan para gembala Gereja, dan jawablah sendiri pertanyaan Yesus dengan hidup kita.",
    refleksi: ["Menurut saya sendiri, siapakah Yesus itu?", "Bagaimana saya mendukung para gembala Gereja dengan doa?"],
  },
  "san-0319": {
    renungan: "Pada Hari Raya Santo Yusuf, Injil memperlihatkan seorang pria benar yang menghadapi situasi sulit. Ketika mengetahui Maria mengandung, ia tidak ingin mempermalukannya dan berniat menceraikannya diam-diam. Lalu malaikat dalam mimpi menyuruhnya tidak takut mengambil Maria sebagai istri. Yusuf bangun dan melakukan apa yang diperintahkan, tanpa satu kata pun tercatat darinya. Dalam bacaan pertama, Allah berjanji kepada Daud bahwa takhtanya akan kokoh selamanya; janji itu digenapi melalui Yusuf, keturunan Daud. Kekudusan Yusuf tampak dalam ketaatan yang tenang dan pelindungan yang setia. Hari ini, lindungilah orang-orang yang dipercayakan kepada kita dengan kesetiaan yang sederhana.",
    refleksi: ["Apakah saya taat kepada Tuhan meski tidak sepenuhnya mengerti rencana-Nya?", "Siapa yang Tuhan percayakan untuk saya lindungi seperti Yusuf?"],
  },
  "san-0325": {
    renungan: "Pada Hari Raya Kabar Sukacita, malaikat Gabriel diutus kepada seorang perawan di Nazaret, kota kecil di Galilea. Maria terkejut dan bertanya bagaimana hal itu mungkin. Gabriel menjelaskan bahwa Roh Kudus akan turun atasnya, sebab bagi Allah tidak ada yang mustahil. Maria menjawab, \"Sesungguhnya, aku ini hamba Tuhan. Terjadilah padaku seperti yang engkau katakan itu.\" Dari jawaban itu Sabda menjadi daging. Yesaya menubuatkan seorang perempuan muda yang mengandung dan melahirkan Imanuel, Allah beserta kita. Iman tidak menghapus pertanyaan, tetapi menyerahkan diri. Hari ini, ucapkan doa Malaikat Tuhan dengan perlahan, dan katakan \"ya\" pada satu kehendak-Nya.",
    refleksi: ["Kehendak Tuhan apa yang sedang menunggu jawaban \"ya\" dari saya?", "Apakah saya percaya bahwa bagi Allah tidak ada yang mustahil?"],
  },
  "san-0425": {
    renungan: "Pada Pesta Santo Markus, Pengarang Injil, kita mendengar perutusan Yesus: \"Pergilah ke seluruh dunia dan beritakanlah Injil kepada semua ciptaan.\" Para murid pergi, dan Tuhan bekerja bersama mereka, meneguhkan firman dengan tanda-tanda. Markus menuliskan kabar baik itu agar generasi demi generasi mengenal Yesus. Dalam bacaan pertama, Petrus menyebut Markus sebagai anaknya dan mengajak semua orang mengenakan kerendahan hati, menyerahkan kekhawatiran kepada Allah, dan waspada terhadap si jahat. Pewartaan bukan hanya tugas para imam, tetapi semua orang yang dibaptis. Hari ini, bacalah satu bab Injil Markus, lalu bagikan satu ayat yang menyentuh kepada orang lain.",
    refleksi: ["Bagaimana saya ikut mewartakan Injil di lingkungan saya?", "Kekhawatiran apa yang perlu saya serahkan kepada Allah?"],
  },
  "san-0503": {
    renungan: "Pada Pesta Santo Filipus dan Santo Yakobus, Rasul, Injil mengisahkan permintaan Filipus, \"Tuhan, tunjukkanlah Bapa itu kepada kami.\" Yesus menjawab dengan lembut bahwa siapa telah melihat Dia telah melihat Bapa. Filipus sudah lama bersama Yesus, tetapi masih perlu belajar mengenal-Nya lebih dalam. Dalam bacaan pertama, Paulus mewariskan inti Injil: Kristus wafat karena dosa kita, dikuburkan, dibangkitkan, dan menampakkan diri, juga kepada Yakobus dan para rasul. Kedua rasul ini adalah saksi yang meneruskan iman itu kepada kita. Hari ini, mohon rahmat untuk mengenal Yesus lebih dalam, sebab melalui Dia kita mengenal Bapa.",
    refleksi: ["Sudah berapa lama saya bersama Yesus, dan seberapa dalam saya mengenal-Nya?", "Bagaimana saya meneruskan iman yang saya terima?"],
  },
  "san-0514": {
    renungan: "Pada Pesta Santo Matias, Rasul, kita mendengar bagaimana para murid berdoa dan membuang undi untuk memilih pengganti Yudas. Syaratnya: seorang yang telah bersama mereka sejak baptisan Yohanes sampai kenaikan Yesus, menjadi saksi kebangkitan-Nya. Matias terpilih, bukan karena terkenal, tetapi karena setia menyertai Yesus secara diam-diam. Dalam Injil, Yesus berkata, \"Bukan kamu yang memilih Aku, melainkan Akulah yang telah memilih,\" dan meminta murid-murid-Nya tinggal dalam kasih-Nya serta saling mengasihi. Panggilan adalah inisiatif Tuhan. Hari ini, bersyukurlah karena dipilih Tuhan, dan teruslah setia dalam peran sederhana kita walau tidak terlihat orang.",
    refleksi: ["Apakah saya setia mengikuti Yesus meski tidak dikenal orang?", "Bagaimana saya menanggapi kenyataan bahwa Yesus memilih saya?"],
  },
  "san-0531": {
    renungan: "Pada Pesta Santa Perawan Maria Mengunjungi Elisabet, Maria bergegas ke pegunungan Yehuda untuk menemui saudarinya yang sedang mengandung di usia tua. Ketika salam Maria terdengar, anak dalam rahim Elisabet melonjak, dan Elisabet penuh Roh Kudus memuji Maria yang percaya. Maria menjawab dengan Magnificat, memuliakan Allah yang memperhatikan kerendahan hamba-Nya, menurunkan orang berkuasa, dan meninggikan orang rendah. Zefanya mengajak Sion bersorak karena Tuhan ada di tengahnya. Maria membawa Yesus melalui kunjungan dan pelayanan. Hari ini, kunjungilah atau hubungi seseorang yang membutuhkan kehadiran kita, dan bawalah sukacita Tuhan bersamamu.",
    refleksi: ["Siapa yang perlu saya kunjungi atau sapa minggu ini?", "Apa yang ingin saya syukuri dalam \"Magnificat\" pribadi saya?"],
  },
  "san-0624": {
    renungan: "Pada Hari Raya Kelahiran Santo Yohanes Pembaptis, para tetangga bersukacita karena Tuhan menunjukkan rahmat-Nya kepada Elisabet. Ketika anak itu hendak dinamai seperti ayahnya, Elisabet berkata namanya Yohanes, dan Zakharia menuliskannya. Seketika lidah Zakharia terlepas dan ia memuji Allah. Orang-orang bertanya, \"Akan menjadi apakah anak ini nanti?\" Yesaya menyuarakan hamba yang dipanggil sejak dalam kandungan untuk menjadi terang bagi bangsa-bangsa. Setiap hidup adalah rencana Allah sejak awal. Ketaatan Zakharia membuka mulutnya untuk memuji. Hari ini, bersyukurlah atas panggilan hidup kita, dan doakan anak-anak agar menemukan rencana Allah bagi mereka.",
    refleksi: ["Apakah saya percaya Tuhan memiliki rencana bagi hidup saya sejak awal?", "Bagaimana saya mendukung anak-anak menemukan panggilan mereka?"],
  },
  "san-0629": {
    renungan: "Pada Hari Raya Santo Petrus dan Santo Paulus, Rasul, dua tiang Gereja ini dirayakan bersama. Petrus, nelayan yang pernah menyangkal, mengakui Yesus sebagai Mesias, Anak Allah yang hidup, dan menjadi batu karang Gereja. Dalam bacaan pertama, Petrus dipenjarakan Herodes, sementara jemaat dengan tekun berdoa baginya, dan malaikat Tuhan membebaskannya. Kekuatan Gereja bukan pada kehebatan para pemimpinnya, tetapi pada karya Allah dan doa umat. Paulus, yang dahulu penganiaya, menjadi rasul bagi bangsa-bangsa. Keduanya rapuh, namun diubah oleh rahmat. Hari ini, doakan Paus dan para uskup sebagaimana jemaat dahulu mendoakan Petrus.",
    refleksi: ["Bagaimana kerapuhan saya bisa diubah oleh rahmat Tuhan?", "Apakah saya setia mendoakan para pemimpin Gereja?"],
  },
  "san-0703": {
    renungan: "Pada Pesta Santo Tomas, Rasul, kita bertemu murid yang tidak hadir ketika Yesus menampakkan diri. Ia ingin melihat dan menyentuh bekas paku sebelum percaya. Delapan hari kemudian Yesus datang lagi, tidak menegur dengan keras, tetapi mengundang Tomas menyentuh luka-Nya. Tomas pun mengakui, \"Tuhanku dan Allahku!\" Yesus lalu berkata, \"Diberkatilah mereka yang tidak melihat, tetapi percaya.\" Itulah kita. Surat Efesus menyebut kita bukan lagi orang asing, tetapi kawan sewarga orang kudus, dibangun di atas dasar para rasul. Keraguan yang jujur bisa menjadi jalan iman yang dalam. Hari ini, bawalah keraguan kita kepada Yesus dalam komunitas iman.",
    refleksi: ["Keraguan apa yang ingin saya bawa kepada Yesus dengan jujur?", "Apakah saya tetap bertahan dalam komunitas meski sedang ragu?"],
  },
  "san-0722": {
    renungan: "Pada Pesta Santa Maria Magdalena, kita menemaninya ke kubur ketika hari masih gelap. Kasihnya kepada Yesus membuatnya tidak mau pergi; ia menangis dan mencari. Kidung Agung melukiskan jiwa yang mencari kekasihnya di jalan-jalan kota sampai menemukannya. Ketika Yesus memanggil namanya, Maria langsung mengenali-Nya. Ia lalu diutus memberi tahu para murid, dan karena itu ia disebut rasul bagi para rasul. Ia mewartakan dengan sederhana, \"Aku telah melihat Tuhan.\" Kasih yang tekun mencari akan dipertemukan. Hari ini, carilah Tuhan dengan kerinduan, lalu ceritakan pengalaman perjumpaan itu kepada seseorang.",
    refleksi: ["Seberapa besar kerinduan saya untuk mencari Tuhan?", "Pengalaman apa tentang Tuhan yang bisa saya ceritakan kepada orang lain?"],
  },
  "san-0725": {
    renungan: "Pada Pesta Santo Yakobus, Rasul, kita mendengar ibu anak-anak Zebedeus meminta tempat terhormat bagi kedua putranya. Yesus bertanya apakah mereka sanggup meminum cawan-Nya, dan mereka menjawab sanggup. Yakobus kelak menjadi rasul pertama yang wafat sebagai martir; ia sungguh meminum cawan itu. Yesus mengajarkan bahwa yang ingin menjadi besar hendaklah menjadi pelayan, sebab Anak Manusia datang untuk melayani. Paulus dalam bacaan pertama menyebut kita bejana tanah liat yang membawa harta: rapuh, tetapi kekuatan berasal dari Allah. Ambisi Yakobus dimurnikan menjadi kesetiaan. Hari ini, ubahlah keinginan untuk diakui menjadi kesediaan melayani.",
    refleksi: ["Ambisi apa dalam diri saya yang perlu dimurnikan oleh Tuhan?", "Bagaimana kerapuhan saya bisa menjadi tempat kekuatan Allah?"],
  },
  "san-0810": {
    renungan: "Pada Pesta Santo Laurensius, diakon dan martir, Yesus berbicara tentang biji gandum yang harus jatuh ke tanah dan mati agar menghasilkan banyak buah. Siapa mencintai nyawanya akan kehilangan, tetapi siapa melayani Yesus akan dihormati Bapa. Laurensius melayani kaum miskin Gereja Roma dan memberikan hidupnya sebagai saksi. Paulus mengingatkan bahwa orang yang menabur banyak akan menuai banyak, dan Allah mengasihi orang yang memberi dengan sukacita. Kemurahan hati dan pengorbanan berjalan bersama. Hari ini, berikan sesuatu bagi orang miskin dengan gembira, bukan dengan berat hati, dan relakan satu kenyamanan kecil demi orang lain.",
    refleksi: ["Apa yang perlu \"mati\" dalam diri saya agar menghasilkan buah?", "Apakah saya memberi dengan sukacita atau dengan terpaksa?"],
  },
  "san-0815": {
    renungan: "Pada Hari Raya Santa Perawan Maria Diangkat ke Surga, Gereja merayakan bahwa Maria, setelah menyelesaikan hidupnya di dunia, diangkat jiwa dan raganya ke dalam kemuliaan surga. Kitab Wahyu menampilkan perempuan berselubungkan matahari yang dilindungi Allah dari naga. Dalam Injil, Maria memuliakan Tuhan yang telah melakukan perbuatan besar baginya dan meninggikan orang yang rendah. Apa yang terjadi pada Maria adalah pengharapan bagi kita: tubuh dan hidup kita pun ditujukan pada kemuliaan bersama Allah. Rendah hati di dunia tidak sia-sia. Hari ini, rawatlah tubuh dan hidup kita dengan hormat, dan nyanyikan syukur seperti Maria.",
    refleksi: ["Apa arti pengharapan akan surga bagi cara saya hidup hari ini?", "Perbuatan besar apa yang telah Tuhan lakukan bagi saya?"],
  },
  "san-0824": {
    renungan: "Pada Pesta Santo Bartolomeus, Rasul, yang oleh tradisi dikenal sebagai Natanael, Injil mengisahkan perjumpaan pertamanya dengan Yesus. Natanael sempat meragukan sesuatu yang baik datang dari Nazaret, tetapi ia mau datang dan melihat. Yesus menyebutnya orang Israel sejati yang tidak ada kepalsuan di dalamnya, dan berkata sudah melihatnya di bawah pohon ara. Natanael pun mengakui Yesus sebagai Anak Allah. Kitab Wahyu melukiskan kota suci dengan dua belas batu dasar bertuliskan nama kedua belas rasul. Ketulusan hati membuka jalan bagi iman. Hari ini, jadilah orang yang tulus tanpa kepalsuan, dan beranilah datang melihat sendiri sebelum menilai.",
    refleksi: ["Apakah ada kepalsuan dalam diri saya yang perlu dilepaskan?", "Prasangka apa yang menghalangi saya untuk datang dan melihat?"],
  },
  "san-0908": {
    renungan: "Pada Pesta Kelahiran Santa Perawan Maria, Injil membuka dengan silsilah panjang Yesus, dari Abraham sampai Yusuf, suami Maria. Di dalamnya ada orang saleh dan orang berdosa, raja dan orang biasa. Allah setia bekerja melalui sejarah manusia yang tidak sempurna untuk menghadirkan Imanuel, Allah beserta kita. Mikha menubuatkan pemimpin yang lahir dari Betlehem yang kecil. Kelahiran Maria adalah fajar yang mendahului terbitnya Sang Surya. Sejarah keluarga kita pun, dengan segala luka dan kebaikannya, dapat dipakai Tuhan. Hari ini, bersyukurlah atas keluarga dan leluhur kita, dan doakan mereka yang membutuhkan rahmat Tuhan.",
    refleksi: ["Bagaimana Tuhan berkarya melalui sejarah keluarga saya?", "Apa yang bisa saya pelajari dari kesediaan Maria untuk Tuhan?"],
  },
  "san-0914": {
    renungan: "Pesta Salib Suci mengajak kita memandang salib bukan sebagai lambang kekalahan, melainkan tanda kasih yang paling besar. Di padang gurun, umat Israel yang digigit ular dan memandang ular tembaga yang ditinggikan Musa menjadi hidup. Yesus memakai gambaran itu untuk diri-Nya: Anak Manusia harus ditinggikan supaya setiap orang yang percaya memperoleh hidup kekal. Allah mengutus Anak-Nya \"bukan untuk menghakimi dunia\", melainkan untuk menyelamatkannya. Ketika luka, keluhan, dan dosa membuat kita lemah, kita diundang memandang Salib dengan iman. Hari ini, sempatkan diri berhenti sejenak di depan salib di rumah atau di gereja, serahkan satu luka hati kepada Tuhan, dan biarkan kasih-Nya menyembuhkan.",
    refleksi: ["Luka atau keluhan apa yang perlu kubawa ke hadapan Salib Kristus hari ini?", "Bagaimana aku memandang salib dalam hidupku sendiri: beban atau jalan kasih?"],
  },
  "san-0921": {
    renungan: "Matius sedang duduk di tempat pengumpulan pajak, pekerjaan yang membuatnya dicap pendosa. Namun Yesus melihatnya dan berkata singkat, \"Ikutlah Aku.\" Matius berdiri dan mengikut. Panggilan itu tidak menunggu ia menjadi sempurna; justru di meja makan bersama para pendosa, Yesus menyatakan diri sebagai Tabib bagi yang sakit. Pada pesta Santo Matius ini, kita diingatkan bahwa Tuhan tidak menyerah pada siapa pun. Ia menghendaki belas kasihan, bukan sekadar persembahan. Bacaan pertama menambahkan: setiap orang menerima karunia untuk membangun Tubuh Kristus. Hari ini, coba tatap seseorang yang sering kita cap buruk dengan mata Yesus, dan beri ia satu tanda penerimaan yang tulus.",
    refleksi: ["Di \"meja pajak\" mana aku masih duduk dan enggan berdiri untuk mengikut Yesus?", "Siapa yang perlu kuterima dengan belas kasihan, bukan dengan penghakiman?"],
  },
  "san-0929": {
    renungan: "Pada pesta Malaikat Agung Mikael, Gabriel, dan Rafael, Injil menampilkan Natanael yang terkejut karena Yesus sudah mengenalnya sejak ia berada di bawah pohon ara. Dikenal sedalam itu membuat Natanael percaya. Lalu Yesus menjanjikan hal yang lebih besar: langit terbuka dan malaikat-malaikat Allah naik turun melayani Anak Manusia. Para malaikat bukan dongeng penghias, tetapi pelayan Allah yang menyertai karya keselamatan-Nya. Kita tidak berjalan sendirian; surga terbuka bagi orang yang tulus mencari Tuhan. Hari ini, tetaplah jujur di hadapan Allah seperti Natanael yang \"tidak ada kepalsuan\" di dalamnya, dan mohonlah perlindungan para malaikat bagi keluarga serta orang yang sedang berjuang.",
    refleksi: ["Apakah aku sungguh percaya bahwa Tuhan mengenalku sampai ke hal-hal tersembunyi?", "Untuk siapa aku ingin memohon perlindungan para malaikat hari ini?"],
  },
  "san-1018": {
    renungan: "Santo Lukas, penulis Injil yang penuh belas kasih, dikenang hari ini. Dalam Injil, Yesus mengutus tujuh puluh murid berdua-dua, tanpa kantong uang, tas, atau sandal. Mereka diutus seperti anak domba di tengah serigala, hanya berbekal damai sejahtera dan kabar bahwa Kerajaan Allah sudah dekat. Dalam bacaan pertama, Paulus yang ditinggalkan banyak orang bersaksi, \"Hanya Lukas yang bersamaku.\" Kesetiaan sederhana seperti itu juga bagian dari pewartaan. Kita pun diutus ke rumah, kantor, dan lingkungan kita sendiri. Hari ini, masuklah ke setiap pertemuan dengan membawa damai, bukan keluhan, dan dampingilah seseorang yang sedang merasa sendirian, seperti Lukas mendampingi Paulus.",
    refleksi: ["Ke rumah atau tempat mana aku diutus membawa damai hari ini?", "Siapa yang membutuhkan kesetiaan dan kehadiranku seperti Lukas bagi Paulus?"],
  },
  "san-1028": {
    renungan: "Sebelum memilih dua belas rasul, Yesus berdoa sepanjang malam. Keputusan besar lahir dari keheningan bersama Bapa. Di antara nama-nama itu tercantum Simon orang Zelot dan Yudas anak Yakobus, yang kita rayakan hari ini. Mereka bukan tokoh yang paling sering disebut, tetapi tetap menjadi dasar Gereja. Bacaan pertama mengatakan bahwa kita dibangun di atas dasar para rasul dan nabi, dengan Kristus sebagai Batu Penjuru, dan bukan lagi orang asing melainkan anggota keluarga Allah. Kesetiaan yang tersembunyi tetap berharga di mata Tuhan. Hari ini, sebelum mengambil keputusan penting, luangkan waktu untuk berdoa lebih dulu, lalu layani dengan setia walau tidak dilihat orang.",
    refleksi: ["Apakah aku berdoa dulu sebelum mengambil keputusan penting?", "Pelayanan tersembunyi apa yang bisa kulakukan dengan setia minggu ini?"],
  },
  "san-1101": {
    renungan: "Hari Raya Semua Orang Kudus memperlihatkan \"sejumlah besar manusia yang tidak dapat dihitung\" dari segala bangsa, berdiri di hadapan Anak Domba dengan jubah putih. Mereka bukan hanya orang kudus yang namanya dikenal, tetapi juga banyak orang sederhana yang setia. Jalan mereka digambarkan Yesus dalam Sabda Bahagia: miskin di hadapan Allah, lemah lembut, berbelas kasihan, murni hati, membawa damai, tetap teguh saat dianiaya. Santo Yohanes menambahkan bahwa kita sudah disebut anak-anak Allah. Kekudusan bukan untuk segelintir orang istimewa, melainkan panggilan setiap orang beriman. Hari ini, pilih satu Sabda Bahagia dan hidupi dengan sungguh, misalnya menjadi pembawa damai di rumah sendiri.",
    refleksi: ["Sabda Bahagia mana yang paling menantangku untuk dihidupi saat ini?", "Orang kudus siapa yang ingin kuteladani dalam hidup sehari-hari?"],
  },
  "san-1102": {
    renungan: "Pada peringatan Arwah Semua Orang Beriman, Gereja mengenang dengan penuh kasih mereka yang telah mendahului kita. Kitab Kebijaksanaan menghibur: jiwa orang benar ada di tangan Allah, dan di mata orang bodoh mereka tampak mati, padahal mereka berada dalam damai. Paulus menegaskan bahwa pengharapan tidak mengecewakan karena kasih Allah telah dicurahkan ke dalam hati kita. Sabda Bahagia pun berkata, \"Diberkatilah mereka yang berdukacita sebab mereka akan dihibur.\" Duka kita tidak dihapus, tetapi diterangi pengharapan akan kebangkitan. Hari ini, doakan dengan nama orang-orang terkasih yang telah meninggal, kunjungi makam bila bisa, dan serahkan mereka pada belas kasih Tuhan.",
    refleksi: ["Siapa saja orang terkasih yang ingin kudoakan secara khusus hari ini?", "Bagaimana pengharapan akan kebangkitan mengubah caraku menghadapi duka?"],
  },
  "san-1109": {
    renungan: "Pesta Pemberkatan Gereja Basilik Lateran mengingatkan kita akan \"gereja induk\" seluruh dunia. Namun Injil membawa kita lebih dalam: Yesus mengusir pedagang dari Bait Allah karena cinta akan rumah Bapa-Nya, lalu menyebut tubuh-Nya sendiri sebagai Bait Allah yang akan dibangun kembali dalam tiga hari. Paulus menambahkan bahwa kita pun adalah bait Allah dan Roh Allah diam di dalam kita. Yehezkiel melihat air mengalir dari Bait Suci dan menghidupkan segala yang dilaluinya. Gereja sejati hidup bila hati umatnya bersih dan menjadi sumber kehidupan bagi sekitar. Hari ini, periksa \"meja dagang\" apa yang perlu dibalikkan dalam hati, supaya Tuhan sungguh tinggal di sana.",
    refleksi: ["Apa yang perlu dibersihkan dari \"bait\" hatiku agar Tuhan sungguh bertakhta?", "Bagaimana aku bisa menjadi aliran air yang menghidupkan bagi komunitasku?"],
  },
  "san-1130": {
    renungan: "Andreas sedang melempar jala ketika Yesus berkata, \"Marilah ikut Aku dan Aku akan menjadikanmu penjala manusia.\" Ia langsung meninggalkan jalanya dan mengikut. Pekerjaan sehari-hari tidak dihapus, tetapi diberi arah baru: kecakapan menjala kini dipakai untuk membawa orang kepada Tuhan. Bacaan pertama bertanya, bagaimana orang dapat percaya bila tidak ada yang memberitakan? Santo Andreas mengingatkan bahwa pewartaan sering dimulai dari langkah sederhana, mengajak saudara dan sahabat untuk mengenal Yesus. Hari ini, beranikan diri mengajak satu orang untuk berdoa, ikut misa, atau sekadar berbagi pengalaman iman dengan rendah hati.",
    refleksi: ["\"Jala\" apa yang perlu kutinggalkan agar lebih bebas mengikut Yesus?", "Siapa yang bisa kuajak mengenal Yesus lebih dekat minggu ini?"],
  },
  "san-1208": {
    renungan: "Hari Raya Santa Perawan Maria Dikandung Tanpa Noda menampilkan dua jawaban yang berbeda. Di taman Eden, manusia bersembunyi karena takut setelah berdosa. Di Nazaret, Maria mendengar salam malaikat, heran dan bertanya, lalu menyerahkan diri: \"Sesungguhnya, aku ini hamba Tuhan.\" Gereja percaya bahwa Allah menyiapkan Maria sejak awal hidupnya, bebas dari noda dosa, agar menjadi bunda Putra-Nya. Rahmat mendahului jawabannya, dan kebebasannya menjawab dengan iman. Di masa Adven ini, kita belajar dari Maria untuk tidak bersembunyi dari Allah, tetapi membuka diri pada rencana-Nya. Hari ini, ucapkan dengan sadar \"terjadilah padaku\" atas satu hal yang sulit diterima.",
    refleksi: ["Di bagian hidup mana aku masih bersembunyi dari Allah seperti Adam?", "Rencana Tuhan apa yang perlu kujawab dengan \"terjadilah padaku\" hari ini?"],
  },
  "san-1226": {
    renungan: "Sehari setelah Natal, Gereja merayakan Santo Stefanus, martir pertama. Suasana sukacita seakan berganti dengan batu-batu yang dilemparkan. Namun justru di situ kelihatan buah Natal: Stefanus, penuh Roh Kudus, menatap langit dan melihat kemuliaan Allah. Yesus sudah mengingatkan bahwa murid-murid-Nya akan dibenci karena nama-Nya, tetapi juga berjanji bahwa Roh Bapa akan berbicara di dalam mereka. Kanak-kanak di palungan datang untuk memberi hidup, dan orang yang menerima-Nya berani memberi hidup pula. Hari ini, ketika iman kita diremehkan atau disalahpahami, tanggapilah dengan tenang dan kasih, percaya bahwa Roh Kudus memberi kata-kata yang tepat.",
    refleksi: ["Bagaimana aku menanggapi saat imanku diremehkan atau disalahpahami?", "Apakah aku mengandalkan Roh Kudus ketika harus bersaksi tentang Yesus?"],
  },
  "san-1227": {
    renungan: "Pada pesta Santo Yohanes Rasul, Injil membawa kita ke kubur kosong. Maria Magdalena berlari memberi kabar, Petrus dan murid yang dikasihi Yesus berlari ke kubur. Murid itu masuk, melihat kain kafan yang tergeletak, \"dan percaya.\" Dalam suratnya, Yohanes bersaksi tentang Firman kehidupan yang sudah didengar, dilihat, dan disentuh. Di tengah masa Natal, kita diingatkan bahwa Bayi di Betlehem adalah Dia yang bangkit dan hidup. Iman Yohanes lahir dari kedekatan dengan Yesus. Hari ini, beri waktu untuk sungguh \"melihat\" tanda-tanda kehadiran Tuhan dalam keseharian, lalu bagikan kesaksian sederhana itu agar sukacita orang lain menjadi penuh.",
    refleksi: ["Tanda kehadiran Tuhan apa yang kulihat minggu ini dan belum kusyukuri?", "Dengan siapa aku bisa berbagi pengalaman imanku supaya sukacitanya penuh?"],
  },
  "san-1228": {
    renungan: "Pesta Kanak-kanak Suci mengingatkan bahwa Natal juga bersentuhan dengan penderitaan. Herodes yang murka membunuh anak-anak di Betlehem, dan terdengarlah ratapan Rahel yang tidak mau dihibur. Di tengah kegelapan itu, Yusuf taat pada pesan malaikat: bangun di malam hari dan membawa Anak itu bersama ibu-Nya ke Mesir. Allah tidak menghapus semua kejahatan dengan seketika, tetapi Ia tetap bekerja melindungi hidup. Santo Yohanes menulis bahwa Allah adalah terang dan tidak ada kegelapan di dalam Dia. Hari ini, doakan anak-anak yang menderita karena kekerasan, perang, atau penelantaran, dan lakukan satu tindakan nyata untuk melindungi atau memperhatikan seorang anak.",
    refleksi: ["Bagaimana aku bisa melindungi atau memperhatikan anak-anak di sekitarku?", "Apakah aku siap taat seperti Yusuf walau perintah Tuhan datang di tengah malam?"],
  },
  "ord-1-1": {
    renungan: "Pewartaan pertama Yesus dalam Injil Markus singkat dan padat: waktunya telah genap, Kerajaan Allah sudah dekat, bertobatlah dan percayalah kepada Injil. Kabar itu langsung menyentuh hidup nyata. Di tepi danau, Simon, Andreas, Yakobus, dan Yohanes sedang bekerja ketika dipanggil, dan mereka segera meninggalkan jala serta perahu. Allah tidak menunggu kita berada di tempat suci untuk menyapa; Ia datang di tengah rutinitas harian. Pertobatan berarti berbalik arah dan membiarkan Yesus menentukan langkah hidup. Hari ini, di tengah pekerjaan yang biasa, dengarkan panggilan-Nya dan tanggapi dengan satu langkah konkret, misalnya meninggalkan kebiasaan yang menjauhkan dari Tuhan.",
    refleksi: ["Di tengah rutinitasku, bagaimana Yesus sedang memanggilku hari ini?", "Apa yang perlu kutinggalkan agar lebih bebas mengikuti-Nya?"],
  },
  "ord-1-2": {
    renungan: "Di sinagoge Kapernaum, orang-orang takjub karena Yesus mengajar \"sebagai seorang yang mempunyai kuasa.\" Kuasa itu bukan sekadar kata-kata indah; roh najis pun tunduk dan keluar atas perintah-Nya. Sabda Yesus membebaskan, bukan hanya menambah pengetahuan. Kita sering mendengar firman setiap minggu, tetapi apakah firman itu sungguh memiliki wibawa atas pikiran, kebiasaan, dan keputusan kita? Yesus tetap berkuasa atas apa pun yang membelenggu hati, entah ketakutan, kemarahan, atau kecanduan. Hari ini, bacalah satu ayat Injil dengan tenang, lalu biarkan sabda itu berbicara dan menegur hal yang selama ini kita biarkan menguasai diri.",
    refleksi: ["Apa yang masih membelenggu hatiku dan perlu kuserahkan pada kuasa Yesus?", "Apakah firman Tuhan sungguh berwibawa atas keputusanku sehari-hari?"],
  },
  "ord-1-3": {
    renungan: "Yesus masuk ke rumah Simon, memegang tangan ibu mertuanya yang demam, dan membantunya berdiri. Setelah sembuh, perempuan itu langsung melayani. Malam harinya seluruh kota berkumpul di depan pintu membawa orang sakit. Namun pagi-pagi benar, ketika masih gelap, Yesus pergi ke tempat sunyi untuk berdoa. Di tengah kesibukan menyembuhkan, Ia tetap menjaga hubungan dengan Bapa, lalu berangkat ke kota-kota lain. Pola ini indah untuk hidup kita: disentuh Tuhan, bangkit untuk melayani, dan kembali berdoa agar tidak kehabisan daya. Hari ini, sisihkan beberapa menit sunyi di awal hari, sebelum ponsel dan pekerjaan menyita perhatian.",
    refleksi: ["Kapan dan di mana \"tempat sunyi\" untuk berdoa dalam hari-hariku?", "Setelah menerima kebaikan Tuhan, bagaimana aku bangkit untuk melayani?"],
  },
  "ord-1-4": {
    renungan: "Orang kusta itu datang berlutut dan berkata, \"Jika Engkau mau, Engkau dapat menahirkan aku.\" Yesus tergerak oleh belas kasihan, mengulurkan tangan, dan menyentuhnya. Sentuhan itu luar biasa, sebab orang kusta biasanya dijauhi. Sebelum tubuhnya tahir, martabatnya sudah dipulihkan. Jawaban Yesus, \"Aku mau,\" menyatakan isi hati Allah terhadap orang yang terluka dan tersingkir. Doa yang jujur dan rendah hati seperti doa orang kusta itu selalu didengar. Hari ini, bawalah kelemahan terdalam kepada Tuhan tanpa malu, dan ulurkan tangan kepada seseorang yang sering dijauhi, entah karena sakit, kemiskinan, atau masa lalunya.",
    refleksi: ["Bagian hidup mana yang ingin kubawa kepada Yesus dengan doa \"jika Engkau mau\"?", "Siapa yang dijauhi orang di sekitarku dan butuh sentuhan kasih?"],
  },
  "ord-1-5": {
    renungan: "Empat orang mengusung sahabat mereka yang lumpuh. Karena rumah penuh sesak, mereka membongkar atap dan menurunkannya tepat di depan Yesus. Melihat iman mereka, Yesus berkata kepada orang lumpuh itu bahwa dosanya diampuni, lalu menyembuhkannya sehingga ia bangkit dan berjalan. Iman para sahabat ikut membuka jalan bagi rahmat. Ada orang yang tidak mampu datang sendiri kepada Tuhan karena luka, putus asa, atau kelemahan; mereka membutuhkan kita yang mau berusaha kreatif membawa mereka. Hari ini, doakan dengan sungguh seseorang yang sedang \"lumpuh\" dalam hidupnya, dan pikirkan satu cara nyata untuk membantunya mendekat kepada Yesus.",
    refleksi: ["Siapa yang perlu kuusung dalam doa dan tindakan agar mendekat kepada Yesus?", "Hambatan apa yang perlu kubongkar agar aku sendiri sampai kepada-Nya?"],
  },
  "ord-1-6": {
    renungan: "Lewi duduk di meja pajak, tempat yang membuatnya dijauhi. Yesus berkata, \"Ikutlah Aku,\" dan Lewi berdiri mengikut-Nya. Lalu Yesus makan bersama banyak pemungut pajak dan orang berdosa, membuat para ahli Taurat heran. Jawaban-Nya jelas: orang sehat tidak memerlukan tabib, tetapi orang sakit; Ia datang memanggil orang berdosa. Kita semua termasuk di meja itu. Mengakui diri butuh penyembuhan bukanlah kelemahan, melainkan pintu masuk menuju rahmat. Hari ini, berhentilah menutupi kelemahan di hadapan Tuhan, dan jangan menutup pintu bagi orang yang dianggap tidak pantas. Mungkin sebuah undangan makan atau sapaan ramah bisa menjadi awal perubahan hidupnya.",
    refleksi: ["Apakah aku berani mengakui di hadapan Tuhan bahwa aku butuh disembuhkan?", "Siapa yang selama ini kuanggap tidak layak duduk semeja denganku?"],
  },
  "ord-2-1": {
    renungan: "Orang bertanya mengapa murid Yesus tidak berpuasa. Yesus menjawab dengan gambaran pesta pernikahan: selama pengantin ada bersama mereka, para pengiring tidak berpuasa. Kehadiran Yesus adalah sukacita baru, dan sukacita itu tidak dapat dimasukkan begitu saja ke dalam pola lama, seperti anggur baru yang membutuhkan kantong baru. Iman bukan sekadar daftar kewajiban, melainkan relasi dengan Pribadi yang hidup. Puasa, doa, dan ibadah tetap berharga bila lahir dari kasih kepada Sang Pengantin. Hari ini, periksa kebiasaan rohani kita: adakah yang sudah menjadi rutinitas kosong? Perbaruilah dengan hati yang sungguh mencari Yesus.",
    refleksi: ["Kebiasaan rohani mana yang perlu kuperbarui agar tidak menjadi rutinitas kosong?", "Apakah imanku lebih terasa sebagai beban atau sukacita bersama Yesus?"],
  },
  "ord-2-2": {
    renungan: "Murid-murid memetik gandum pada hari Sabat, dan orang Farisi segera menuduh mereka melanggar hukum. Yesus mengingatkan kisah Daud yang lapar dan makan roti sajian, lalu menegaskan bahwa Sabat diadakan untuk manusia, bukan manusia untuk Sabat. Aturan Allah selalu bertujuan memberi hidup dan kebebasan, bukan untuk membebani atau menjadi alat menghakimi sesama. Kita bisa jatuh pada sikap mudah menilai orang lain dari kesalahan kecil, sementara lupa akan kasih. Hari ini, pakailah hari Minggu dan waktu istirahat sebagai anugerah untuk bersama Tuhan dan keluarga, dan tahan diri dari menghakimi cara orang lain beribadah.",
    refleksi: ["Apakah aku memakai aturan agama untuk mengasihi atau untuk menghakimi?", "Bagaimana aku menguduskan hari Tuhan sebagai anugerah, bukan sekadar kewajiban?"],
  },
  "ord-2-3": {
    renungan: "Di sinagoge, orang-orang mengamati Yesus, menunggu kesempatan untuk menyalahkan-Nya. Yesus justru meminta orang yang tangannya lumpuh berdiri di tengah, lalu bertanya: pada hari Sabat, berbuat baik atau berbuat jahat, menyelamatkan nyawa atau membunuh? Mereka diam. Yesus berduka atas kekerasan hati mereka, lalu menyembuhkan tangan orang itu. Kebaikan tidak boleh ditunda karena takut dikritik atau terikat kebiasaan. Hati yang keras membuat kita lebih sibuk mencari kesalahan daripada melihat kebutuhan sesama. Hari ini, jangan menunda satu kebaikan yang sebenarnya bisa dilakukan sekarang, meski mungkin ada yang memandang dengan curiga.",
    refleksi: ["Kebaikan apa yang selama ini kutunda karena takut penilaian orang?", "Adakah kekerasan hati yang membuatku lebih mudah mencari kesalahan orang lain?"],
  },
  "ord-2-4": {
    renungan: "Orang berbondong-bondong datang kepada Yesus dari berbagai daerah karena mendengar apa yang dilakukan-Nya. Mereka berdesakan untuk menyentuh-Nya, sebab banyak yang telah disembuhkan. Bahkan roh-roh najis pun mengakui, \"Engkau adalah Anak Allah!\" tetapi Yesus melarang mereka memberitahukan siapa Dia. Mengenal Yesus bukan sekadar tahu gelar-Nya atau mencari mukjizat, melainkan mengikuti-Nya dengan hati. Kerumunan mencari kesembuhan, dan itu baik, namun Yesus mengundang kita masuk ke relasi yang lebih dalam. Hari ini, datanglah kepada Yesus bukan hanya untuk meminta, tetapi juga untuk tinggal bersama-Nya, misalnya dengan doa syukur yang sederhana.",
    refleksi: ["Apakah aku datang kepada Yesus hanya saat butuh sesuatu?", "Bagaimana aku bisa mengenal Yesus lebih dari sekadar tahu tentang Dia?"],
  },
  "ord-2-5": {
    renungan: "Yesus naik ke gunung dan memanggil orang-orang yang Ia kehendaki. Dua belas orang dipilih dengan tujuan jelas: supaya mereka bersama-Nya, lalu diutus untuk mewartakan. Urutannya penting. Sebelum melayani, mereka harus lebih dulu tinggal dekat dengan Yesus. Daftar nama itu pun beragam: nelayan, pemungut cukai, orang Zelot, bahkan Yudas yang kelak mengkhianati. Tuhan memanggil orang-orang biasa dengan segala keterbatasannya. Kita juga dipanggil, bukan karena layak, tetapi karena dikehendaki-Nya. Hari ini, sebelum sibuk dengan pelayanan dan tugas, luangkan waktu untuk sekadar \"bersama Dia\" dalam doa, supaya apa yang kita kerjakan mengalir dari kedekatan itu.",
    refleksi: ["Apakah pelayananku mengalir dari kedekatan dengan Yesus atau hanya dari kesibukan?", "Bagaimana rasanya menyadari bahwa Tuhan memanggilku karena Ia menghendakinya?"],
  },
  "ord-2-6": {
    renungan: "Injil hari ini sangat singkat, tetapi menyentuh. Yesus begitu sibuk melayani orang banyak sampai tidak sempat makan. Keluarga-Nya datang untuk mengambil-Nya, sebab orang-orang berkata, \"Dia sudah tidak waras.\" Kasih yang total sering tampak aneh di mata dunia. Orang terdekat pun kadang tidak memahami pilihan kita untuk melayani Tuhan dan sesama. Yesus tetap setia pada perutusan-Nya, walau disalahpahami. Ini menghibur ketika niat baik kita dianggap berlebihan. Namun kita juga diajak rendah hati: apakah kita pernah menghalangi orang lain yang sedang berkorban demi kebaikan? Hari ini, dukunglah seseorang yang sedang setia melayani.",
    refleksi: ["Pernahkah aku disalahpahami karena memilih melayani Tuhan dan sesama?", "Siapa yang sedang berkorban demi kebaikan dan butuh dukunganku?"],
  },
  "ord-3-1": {
    renungan: "Para ahli Taurat menuduh Yesus mengusir setan dengan kuasa Beelzebul. Yesus menjawab dengan logika sederhana: kerajaan atau rumah yang terpecah tidak dapat bertahan. Ia datang sebagai yang lebih kuat untuk mengikat \"orang kuat\" dan membebaskan manusia. Yesus juga memperingatkan tentang menghujat Roh Kudus, yaitu menutup diri dan menyebut karya Allah sebagai karya jahat. Bahaya terbesar bukan dosa yang diakui, melainkan hati yang menolak dicahayai. Hari ini, perhatikan kecenderungan untuk mencurigai kebaikan orang lain, dan bukalah hati pada pengampunan Allah, sebab rahmat-Nya selalu tersedia bagi yang mau berbalik.",
    refleksi: ["Apakah aku mudah mencurigai kebaikan yang dilakukan orang lain?", "Adakah bagian hatiku yang masih menolak terang dan pengampunan Tuhan?"],
  },
  "ord-3-2": {
    renungan: "Ketika diberitahu bahwa ibu dan saudara-saudara-Nya mencari-Nya di luar, Yesus memandang orang-orang yang duduk di sekeliling-Nya dan berkata bahwa siapa pun yang melakukan kehendak Allah, dialah saudara, saudari, dan ibu-Nya. Yesus tidak meremehkan keluarga-Nya; Maria sendiri adalah teladan utama orang yang melakukan kehendak Allah. Namun Ia membuka lingkaran keluarga itu bagi semua orang. Kita menjadi kerabat Yesus bukan karena darah atau status, tetapi karena kesediaan mendengar dan melaksanakan kehendak Bapa. Hari ini, carilah kehendak Allah dalam satu keputusan kecil, dan perlakukan sesama umat sebagai saudara sendiri.",
    refleksi: ["Dalam keputusan apa hari ini aku bisa sungguh melakukan kehendak Allah?", "Apakah aku memperlakukan sesama umat seperti saudara sendiri?"],
  },
  "ord-3-3": {
    renungan: "Perumpamaan tentang penabur memperlihatkan Allah yang murah hati menabur benih ke mana-mana: di pinggir jalan, tanah berbatu, semak duri, dan tanah yang baik. Yesus menjelaskan bahwa benih itu adalah firman. Ada yang segera direnggut, ada yang layu karena penganiayaan, ada yang terimpit kekhawatiran, kekayaan, dan keinginan lain. Namun di tanah yang baik, firman berbuah berlipat ganda. Keempat jenis tanah itu bisa ada dalam satu hati yang sama. Hari ini, kenali \"semak duri\" yang menghimpit, misalnya kekhawatiran atau layar ponsel, lalu sediakan ruang tenang agar sabda Tuhan dapat berakar dan bertumbuh.",
    refleksi: ["Jenis tanah apa yang paling menggambarkan hatiku akhir-akhir ini?", "\"Semak duri\" apa yang menghimpit firman Tuhan dalam hidupku?"],
  },
  "ord-3-4": {
    renungan: "Pelita tidak dinyalakan untuk diletakkan di bawah gantang atau tempat tidur, tetapi di atas kaki pelita. Iman yang kita terima pun tidak dimaksudkan untuk disimpan sendiri. Yesus menambahkan, \"Perhatikanlah apa yang kamu dengar,\" sebab ukuran yang kita pakai akan dipakai pula untuk kita. Semakin terbuka hati kita mendengar dan membagikan, semakin banyak yang akan diterima. Kemurahan hati menghasilkan kelimpahan, sedangkan sikap menutup diri membuat kita kehilangan. Hari ini, biarkan terang iman tampak lewat hal sederhana: kata yang meneguhkan, kejujuran di tempat kerja, atau kesediaan membantu tanpa diminta.",
    refleksi: ["Di mana aku cenderung menyembunyikan terang imanku?", "Ukuran apa yang kupakai saat menilai dan memberi kepada orang lain?"],
  },
  "ord-3-5": {
    renungan: "Kerajaan Allah seperti benih yang ditabur, lalu bertumbuh siang dan malam, sementara penabur tidur dan bangun tanpa tahu bagaimana terjadinya. Ia juga seperti biji sesawi, yang terkecil, namun tumbuh menjadi tanaman besar tempat burung bernaung. Dua perumpamaan ini mengajarkan kesabaran dan kepercayaan. Allah bekerja diam-diam, sering kali tanpa terlihat, dan karya-Nya bertumbuh pada waktunya. Kita tidak perlu cemas bila hasil belum tampak, baik dalam mendidik anak, melayani, maupun memperbaiki diri. Hari ini, lakukan bagianmu dengan setia, sekecil apa pun, lalu serahkan pertumbuhannya kepada Tuhan.",
    refleksi: ["Di bidang apa aku perlu lebih sabar menunggu karya Tuhan bertumbuh?", "Benih kebaikan kecil apa yang bisa kutabur hari ini?"],
  },
  "ord-3-6": {
    renungan: "Angin topan dahsyat menghantam perahu, sementara Yesus tidur di buritan. Para murid panik dan membangunkan-Nya, bertanya apakah Ia tidak peduli jika mereka binasa. Yesus menghardik angin dan berkata kepada danau, \"Tenang! Diamlah!\" lalu bertanya mengapa mereka takut dan belum percaya. Badai dalam hidup sering membuat kita merasa Tuhan sedang tidur. Namun Ia tetap berada di perahu yang sama. Iman tidak berarti tidak pernah takut, melainkan berseru kepada-Nya di tengah ketakutan dan percaya bahwa Ia berkuasa. Hari ini, sebutkan dalam doa satu badai yang sedang dihadapi, dan biarkan Yesus menenangkan hati.",
    refleksi: ["Badai apa yang sedang mengguncang perahu hidupku saat ini?", "Apakah aku percaya Yesus tetap bersamaku walau Ia tampak diam?"],
  },
  "ord-4-1": {
    renungan: "Di Gerasa, seorang yang kerasukan tinggal di antara kuburan, tidak ada yang sanggup mengikatnya, dan ia terus melukai dirinya. Yesus membebaskannya, sehingga orang-orang mendapati dia duduk, berpakaian, dan waras. Anehnya, penduduk justru meminta Yesus pergi; mereka lebih takut kehilangan babi daripada bersukacita atas seorang yang dipulihkan. Orang yang disembuhkan ingin ikut Yesus, tetapi diutus pulang untuk menceritakan betapa besar perbuatan Tuhan dan belas kasihan-Nya. Kesaksian paling kuat sering dimulai di rumah sendiri. Hari ini, ceritakan kepada orang terdekat satu kebaikan Tuhan yang sudah kita alami.",
    refleksi: ["Apakah aku lebih mementingkan harta daripada pemulihan seseorang?", "Kebaikan Tuhan apa yang bisa kuceritakan kepada keluargaku hari ini?"],
  },
  "ord-4-2": {
    renungan: "Dua kisah saling terjalin. Yairus memohon bagi putrinya yang hampir mati, dan di tengah perjalanan seorang perempuan yang dua belas tahun sakit pendarahan menyentuh jubah Yesus dan sembuh. Yesus berhenti, mencarinya, dan menyapanya \"Anak-Ku\", memulihkan bukan hanya tubuhnya tetapi juga martabatnya. Ketika kabar kematian datang, Yesus berkata kepada Yairus, \"Jangan takut, percaya saja,\" lalu membangkitkan anak itu. Tuhan tidak pernah terlambat, dan tidak ada orang yang terlalu kecil untuk diperhatikan-Nya. Hari ini, bawa dengan iman satu situasi yang tampak tanpa harapan, dan percayalah pada waktu Tuhan.",
    refleksi: ["Situasi apa dalam hidupku yang terasa \"sudah terlambat\"?", "Apakah aku berani menjangkau Yesus dengan iman seperti perempuan itu?"],
  },
  "ord-4-3": {
    renungan: "Di Nazaret, orang-orang takjub mendengar Yesus mengajar, tetapi kemudian bertanya: bukankah Ia hanya tukang kayu, anak Maria? Karena merasa sudah mengenal-Nya, mereka menolak-Nya. Yesus heran atas ketidakpercayaan mereka, dan di sana Ia tidak dapat mengadakan banyak mukjizat. Keakraban bisa membuat kita buta terhadap karya Allah. Kita bisa menganggap biasa Ekaristi, firman, atau orang-orang di rumah yang sebenarnya menjadi saluran rahmat. Hari ini, coba pandang dengan mata baru orang yang paling dekat, dan dengarkan apa yang mungkin ingin Tuhan sampaikan melalui mereka, tanpa terburu-buru menilai berdasarkan latar belakangnya.",
    refleksi: ["Siapa orang dekat yang sering kuremehkan padahal Tuhan berbicara melaluinya?", "Apakah aku menganggap biasa hal-hal kudus yang kuterima setiap minggu?"],
  },
  "ord-4-4": {
    renungan: "Yesus mengutus kedua belas murid berdua-dua dengan bekal sangat sedikit: tongkat dan sandal, tanpa roti, tas, atau uang. Mereka diberi kuasa atas roh-roh jahat, lalu pergi mewartakan pertobatan, mengusir setan, dan mengurapi orang sakit dengan minyak. Perutusan tidak bergantung pada perlengkapan, tetapi pada kepercayaan kepada Dia yang mengutus. Berjalan berdua juga mengingatkan bahwa pewartaan adalah kerja bersama. Kita sering menunda berbuat baik karena merasa kurang siap. Hari ini, lakukan satu tindakan kasih tanpa menunggu semuanya sempurna, dan ajak seorang teman untuk melakukannya bersama.",
    refleksi: ["Apa yang membuatku menunda pelayanan karena merasa belum cukup siap?", "Dengan siapa aku bisa berjalan bersama dalam pelayanan?"],
  },
  "ord-4-5": {
    renungan: "Kisah kematian Yohanes Pembaptis memperlihatkan Herodes yang sebenarnya segan kepada Yohanes dan senang mendengarkannya, tetapi terjebak oleh sumpah gegabah dan rasa malu di depan tamu. Demi menjaga gengsi, ia mengorbankan nyawa seorang nabi. Yohanes tetap setia pada kebenaran walau berakhir di penjara. Kisah ini mengajak kita jujur: berapa kali kita membiarkan tekanan orang lain atau gengsi mengalahkan suara hati? Kesetiaan pada kebenaran kadang mahal, tetapi tidak pernah sia-sia. Hari ini, berhati-hatilah dengan janji yang diucapkan tergesa-gesa, dan beranilah memilih yang benar meski tidak populer.",
    refleksi: ["Kapan gengsi atau tekanan orang lain mengalahkan suara hatiku?", "Kebenaran apa yang perlu kupertahankan walau tidak populer?"],
  },
  "ord-4-6": {
    renungan: "Para rasul kembali dan menceritakan semua yang telah mereka kerjakan. Yesus berkata, \"Marilah mengasingkan diri ke tempat yang sepi dan istirahat sebentar.\" Ia peduli pada kelelahan murid-murid-Nya. Namun orang banyak mendahului mereka, dan ketika melihat mereka, Yesus tergerak oleh belas kasihan karena mereka seperti domba tanpa gembala, lalu Ia mengajar mereka. Istirahat dan pelayanan bukan dua hal yang bertentangan; keduanya lahir dari hati Gembala yang baik. Hari ini, beri diri waktu istirahat yang sehat bersama Tuhan, dan tetap peka bila ada orang yang membutuhkan perhatian kita.",
    refleksi: ["Apakah aku memberi waktu untuk beristirahat bersama Tuhan?", "Siapa di sekitarku yang seperti domba tanpa gembala?"],
  },
  "ord-5-1": {
    renungan: "Begitu Yesus turun dari perahu di Genesaret, orang-orang segera mengenali-Nya dan berlari ke seluruh daerah membawa orang sakit di atas tikar. Di desa, kota, dan pasar, mereka memohon agar boleh menyentuh jumbai jubah-Nya, dan semua yang menyentuh-Nya menjadi sembuh. Ada kerinduan yang besar dan iman yang sederhana. Mereka tidak hanya datang sendiri, tetapi juga membawa orang lain. Yesus hadir di tempat keramaian, bukan hanya di ruang ibadah. Hari ini, bawalah dalam doa orang-orang yang sakit di sekitar kita, dan bila mungkin, kunjungi atau hubungi salah satu dari mereka.",
    refleksi: ["Apakah aku punya kerinduan sebesar itu untuk menjumpai Yesus?", "Siapa orang sakit yang bisa kubawa kepada Yesus lewat doa dan kunjungan?"],
  },
  "ord-5-2": {
    renungan: "Orang Farisi mempersoalkan murid-murid yang makan tanpa membasuh tangan menurut adat. Yesus mengutip Yesaya: bangsa ini memuliakan Allah dengan bibir, tetapi hatinya jauh. Ia menegur mereka yang memegang tradisi manusia sambil mengabaikan perintah Allah, misalnya memakai alasan persembahan untuk lepas dari kewajiban menghormati orang tua. Kebiasaan agama bisa menjadi tempat bersembunyi bila tidak lahir dari hati. Yang dikehendaki Allah adalah kasih yang nyata. Hari ini, cek apakah ada kesalehan lahiriah yang menutupi kewajiban kasih, terutama kepada orang tua dan keluarga, lalu wujudkan satu perhatian nyata bagi mereka.",
    refleksi: ["Apakah ibadahku sungguh keluar dari hati atau hanya dari bibir?", "Bagaimana aku menghormati dan memperhatikan orang tuaku hari ini?"],
  },
  "ord-5-3": {
    renungan: "Yesus menegaskan bahwa yang menajiskan manusia bukanlah apa yang masuk dari luar, melainkan yang keluar dari hatinya. Dari hati muncul pikiran jahat, keserakahan, iri hati, fitnah, kesombongan, dan kebebalan. Pesan ini menggeser perhatian dari kebersihan lahiriah ke kemurnian batin. Kita mudah sibuk menjaga penampilan, tetapi lalai memeriksa sumber kata dan tindakan kita. Tuhan ingin menyembuhkan hati dari dalam. Hari ini, perhatikan apa yang keluar dari mulut dan pikiran, terutama saat lelah atau kesal. Sebelum berkata atau mengetik sesuatu tentang orang lain, berhentilah sejenak dan tanyakan apakah itu membangun.",
    refleksi: ["Apa yang paling sering keluar dari hatiku saat aku lelah atau kesal?", "Kata-kata apa yang perlu kujaga agar membangun, bukan melukai?"],
  },
  "ord-5-4": {
    renungan: "Seorang perempuan Siro-Fenisia, bukan orang Yahudi, sujud di kaki Yesus dan memohon kesembuhan putrinya. Jawaban Yesus tampak keras: roti anak-anak tidak pantas diberikan kepada anjing. Namun perempuan itu tidak mundur. Dengan rendah hati dan cerdas ia menjawab bahwa anjing pun makan remah-remah dari meja. Karena perkataannya, Yesus menyatakan anaknya telah dibebaskan. Iman perempuan ini gigih, tulus, dan penuh kasih seorang ibu. Belas kasih Allah ternyata melampaui batas suku dan bangsa. Hari ini, jangan cepat menyerah dalam doa bagi orang yang dikasihi, dan sambutlah mereka yang berbeda latar belakang dengan hormat.",
    refleksi: ["Apakah aku cepat menyerah ketika doaku tampak belum dijawab?", "Bagaimana aku memandang orang yang berbeda suku atau keyakinan?"],
  },
  "ord-5-5": {
    renungan: "Orang-orang membawa kepada Yesus seorang yang tuli dan sulit berbicara. Yesus membawanya menjauh dari keramaian, menyentuh telinga dan lidahnya, menengadah ke langit, menarik napas, lalu berkata, \"Efata,\" artinya \"terbukalah.\" Seketika ia dapat mendengar dan berbicara dengan baik. Penyembuhan ini personal dan penuh kelembutan. Ada saat kita pun \"tuli\" terhadap suara Tuhan dan sesama, sehingga sulit berkata yang benar dan baik. Kata \"Efata\" juga diucapkan dalam ritus Pembaptisan. Hari ini, mintalah Yesus membuka telinga untuk mendengarkan dengan sungguh, terutama kepada anggota keluarga yang jarang kita dengarkan.",
    refleksi: ["Suara siapa yang selama ini jarang sungguh kudengarkan?", "Bagian diriku mana yang perlu Yesus sentuh dengan kata \"Efata\"?"],
  },
  "ord-5-6": {
    renungan: "Orang banyak sudah tiga hari bersama Yesus tanpa makanan. Yesus berkata, \"Aku berbelaskasihan kepada orang banyak itu.\" Ia tidak mau mereka pulang lapar dan pingsan di jalan. Murid-murid bingung, di tempat sepi seperti itu bagaimana mendapat cukup roti? Namun tujuh roti yang ada diserahkan, Yesus mengucap syukur, memecahkannya, dan semua makan sampai kenyang, bahkan masih tersisa. Belas kasih Yesus memperhatikan kebutuhan nyata, dan Ia memakai apa yang sedikit dari tangan kita. Hari ini, serahkan apa yang kita miliki, waktu, makanan, atau keterampilan, untuk mereka yang sedang kekurangan.",
    refleksi: ["Apa yang sedikit dalam tanganku tetapi bisa diserahkan kepada Yesus?", "Siapa di sekitarku yang sedang \"lapar\" dan butuh perhatian?"],
  },
  "ord-6-1": {
    renungan: "Orang Farisi datang meminta tanda dari surga untuk mencobai Yesus. Padahal mereka sudah melihat banyak orang disembuhkan dan orang banyak diberi makan. Yesus menghela napas panjang dan menolak memberi tanda, lalu pergi meninggalkan mereka. Hati yang tidak mau percaya tidak akan puas oleh bukti apa pun. Kita pun kadang menuntut Tuhan membuktikan diri dengan cara kita, sementara mengabaikan tanda-tanda kasih-Nya dalam hidup sehari-hari. Hari ini, jangan menunggu tanda luar biasa. Catat tiga hal sederhana yang menunjukkan kehadiran Tuhan sejak pagi, dan bersyukurlah atasnya.",
    refleksi: ["Tanda apa yang sedang kutuntut dari Tuhan sebelum aku mau percaya?", "Tanda kasih Tuhan apa yang sudah kuterima hari ini?"],
  },
  "ord-6-2": {
    renungan: "Di perahu, murid-murid sibuk membicarakan roti yang lupa dibawa, padahal Yesus sedang memperingatkan tentang ragi orang Farisi dan Herodes. Yesus bertanya, \"Belum jugakah kamu menangkap atau mengerti?\" Ia mengingatkan mereka pada lima roti untuk lima ribu orang dan tujuh roti untuk empat ribu orang, beserta sisa yang dikumpulkan. Kekhawatiran membuat kita lupa akan pengalaman pemeliharaan Tuhan di masa lalu. Ragi kemunafikan dan kekuasaan pun mudah masuk diam-diam. Hari ini, ingatlah satu peristiwa ketika Tuhan mencukupkan kebutuhan, dan biarkan kenangan itu meredakan kecemasan yang sedang ada.",
    refleksi: ["Kekhawatiran apa yang membuatku lupa akan pemeliharaan Tuhan?", "\"Ragi\" buruk apa yang diam-diam memengaruhi caraku berpikir?"],
  },
  "ord-6-3": {
    renungan: "Di Betsaida, Yesus menggandeng tangan seorang buta dan membawanya ke luar desa. Setelah disentuh pertama kali, orang itu melihat orang-orang seperti pohon yang berjalan. Yesus menyentuh matanya lagi, dan barulah ia melihat segala sesuatu dengan jelas. Penyembuhan bertahap ini menggambarkan perjalanan iman kita. Kita tidak langsung melihat Tuhan dan sesama dengan jernih; sering kita masih kabur, setengah mengerti. Yesus sabar dan tidak berhenti di tengah jalan. Hari ini, bersabarlah dengan proses pertumbuhan diri dan orang lain, dan biarkan Yesus menggandeng kita sedikit demi sedikit menuju pandangan yang lebih jelas.",
    refleksi: ["Dalam hal apa aku masih \"melihat samar-samar\" dan butuh sentuhan Yesus lagi?", "Apakah aku sabar terhadap proses pertumbuhan iman orang lain?"],
  },
  "ord-6-4": {
    renungan: "Di Kaisarea Filipi, Yesus bertanya, \"Menurut kamu, siapakah Aku ini?\" Petrus menjawab, \"Engkau adalah Sang Kristus.\" Namun ketika Yesus mulai berbicara tentang penderitaan, penolakan, kematian, dan kebangkitan-Nya, Petrus menarik-Nya dan menegur-Nya. Yesus balik menegur keras karena Petrus memikirkan apa yang dipikirkan manusia, bukan yang dipikirkan Allah. Mengakui Yesus dengan bibir relatif mudah; menerima jalan salib-Nya jauh lebih sulit. Kita pun ingin Tuhan yang menghapus semua kesulitan. Hari ini, jawablah pertanyaan Yesus secara pribadi, dan terimalah satu kesulitan kecil dengan sabar sebagai bagian dari mengikuti-Nya.",
    refleksi: ["Menurutku sendiri, siapakah Yesus dalam hidupku sekarang?", "Bagian mana dari jalan salib yang paling sulit kuterima?"],
  },
  "ord-6-5": {
    renungan: "Yesus berkata terus terang: siapa yang mau mengikut Dia harus menyangkal diri, memikul salib, dan mengikuti-Nya. Siapa ingin menyelamatkan nyawanya akan kehilangan, tetapi siapa kehilangan nyawa demi Yesus dan Injil akan menyelamatkannya. \"Apa untungnya seorang mendapatkan seluruh dunia, tetapi kehilangan nyawanya?\" Pertanyaan ini menantang ukuran sukses yang biasa kita pakai. Menyangkal diri bukan membenci diri, melainkan membebaskan diri dari ego yang selalu ingin menang. Hari ini, pilih satu kesempatan untuk mendahulukan orang lain, misalnya mengalah dalam hal kecil, sebagai cara nyata memikul salib bersama Yesus.",
    refleksi: ["Apa yang sedang kukejar sampai berisiko kehilangan jiwaku?", "Dalam hal kecil apa aku bisa menyangkal diri hari ini?"],
  },
  "ord-6-6": {
    renungan: "Di gunung yang tinggi, Yesus berubah rupa di depan Petrus, Yakobus, dan Yohanes. Pakaian-Nya bersinar putih, Musa dan Elia berbicara dengan-Nya, dan suara dari awan berkata, \"Inilah Anak-Ku yang Kukasihi. Dengarkanlah Dia!\" Petrus ingin mendirikan kemah supaya saat indah itu tidak berakhir. Namun mereka harus turun gunung, sebab jalan Yesus masih melewati penderitaan sebelum kebangkitan. Pengalaman rohani yang indah diberikan untuk menguatkan kita menghadapi hari-hari biasa. Hari ini, dengarkanlah Yesus dalam keheningan sejenak, lalu bawa terang itu ke dalam tugas-tugas sehari-hari.",
    refleksi: ["Pengalaman rohani apa yang pernah menguatkanku di masa sulit?", "Bagaimana aku sungguh \"mendengarkan Dia\" di tengah kesibukan hari ini?"],
  },
  "ord-7-1": {
    renungan: "Seorang ayah membawa anaknya yang kerasukan roh dan sejak kecil sering dibanting ke api dan air. Murid-murid tidak sanggup menolong. Sang ayah memohon dengan ragu, kalau-kalau Yesus dapat berbuat sesuatu. Yesus menjawab bahwa segala sesuatu mungkin bagi orang yang percaya. Ayah itu berseru jujur, \"Aku percaya! Tolonglah ketidakpercayaanku!\" Doa itu indah karena tulus. Iman kita sering bercampur ragu, dan Tuhan menerimanya. Yesus juga mengingatkan murid-murid bahwa kuasa seperti itu hanya lahir dari doa. Hari ini, ucapkan doa sang ayah untuk pergumulan yang paling berat.",
    refleksi: ["Di bagian mana imanku masih bercampur dengan keraguan?", "Apakah aku sungguh mengandalkan doa dalam menghadapi masalah berat?"],
  },
  "ord-7-2": {
    renungan: "Yesus berbicara tentang penderitaan dan kebangkitan-Nya, tetapi para murid tidak mengerti dan takut bertanya. Di jalan, mereka justru bertengkar tentang siapa yang terbesar. Di rumah, Yesus duduk, memanggil mereka, dan mengajarkan bahwa siapa ingin menjadi yang pertama harus menjadi yang terakhir dan pelayan semua orang. Lalu Ia memeluk seorang anak kecil, mengatakan bahwa siapa menyambut anak seperti itu dalam nama-Nya, menyambut Dia. Kebesaran menurut Allah diukur dari kesediaan melayani yang kecil dan tidak diperhitungkan. Hari ini, perhatikan seseorang yang sering terlewat dalam keluarga atau kantor, dan layanilah tanpa mengharap pengakuan.",
    refleksi: ["Di mana aku masih diam-diam ingin dianggap yang terbesar?", "Siapa \"anak kecil\" di sekitarku yang perlu kusambut hari ini?"],
  },
  "ord-7-3": {
    renungan: "Yohanes melapor bahwa mereka mencoba menghentikan seseorang yang mengusir setan dalam nama Yesus, karena orang itu tidak termasuk kelompok mereka. Yesus menjawab, \"Jangan menghentikan dia,\" sebab siapa yang tidak melawan kita, ia ada di pihak kita. Para murid tergoda memonopoli kebaikan. Kita pun bisa merasa bahwa hanya kelompok, paroki, atau komunitas kita yang benar. Roh Allah bekerja jauh lebih luas daripada batas-batas yang kita buat. Hari ini, akui dan syukuri kebaikan yang dilakukan orang lain di luar lingkaran kita, dan hindari sikap iri terhadap pelayanan yang berhasil di tempat lain.",
    refleksi: ["Apakah aku sulit mengakui kebaikan dari orang di luar kelompokku?", "Bagaimana aku bisa bekerja sama dengan mereka yang berbeda cara pelayanannya?"],
  },
  "ord-7-4": {
    renungan: "Yesus berkata bahwa segelas air yang diberikan kepada pengikut Kristus tidak akan kehilangan upahnya. Perbuatan kecil pun berharga di mata Allah. Namun Ia juga sangat tegas terhadap apa pun yang menyebabkan orang kecil jatuh dalam dosa, dan terhadap anggota tubuh yang membuat kita berdosa. Bahasa-Nya keras supaya kita serius memutus sumber dosa. Lalu Ia mengajak, \"Milikilah garam dalam dirimu dan berdamailah satu dengan yang lain.\" Hari ini, berikan satu \"gelas air\" sederhana bagi seseorang, dan berani memutus satu kebiasaan yang selama ini membuka jalan bagi dosa.",
    refleksi: ["Kebiasaan apa yang perlu kuputus karena sering membuatku jatuh?", "\"Gelas air\" sederhana apa yang bisa kuberikan kepada seseorang hari ini?"],
  },
  "ord-7-5": {
    renungan: "Orang Farisi bertanya tentang perceraian untuk mencobai Yesus. Yesus mengakui bahwa Musa mengizinkan surat cerai karena ketegaran hati manusia, tetapi Ia membawa mereka kembali ke awal penciptaan: Allah menjadikan laki-laki dan perempuan, dan keduanya menjadi satu daging. Apa yang dipersatukan Allah tidak boleh diceraikan manusia. Yesus meneguhkan martabat perkawinan sebagai perjanjian kasih yang setia. Bagi yang sedang menjalaninya, kesetiaan dipupuk lewat hal-hal kecil setiap hari. Hari ini, doakan pasangan-pasangan yang sedang bergumul, dan bila menikah, ungkapkan satu tanda kasih dan penghargaan yang tulus kepada pasangan.",
    refleksi: ["Bagaimana aku bisa menghargai perkawinan, baik milikku maupun orang lain?", "Ketegaran hati apa yang perlu kulunakkan dalam relasi terdekatku?"],
  },
  "ord-7-6": {
    renungan: "Orang membawa anak-anak kepada Yesus, tetapi murid-murid menegur mereka. Yesus marah dan berkata, \"Biarkanlah anak-anak itu datang kepada-Ku dan jangan menghalangi mereka.\" Ia memeluk dan memberkati mereka. Kerajaan Allah diterima seperti seorang anak: dengan percaya, terbuka, dan bergantung penuh pada Bapa. Anak-anak tidak bisa memamerkan prestasi; mereka hanya datang. Kadang kita justru menghalangi anak-anak mengenal Tuhan karena sibuk, tidak sabar, atau memberi teladan buruk. Hari ini, luangkan waktu untuk berdoa bersama anak atau keponakan, atau datanglah kepada Tuhan sendiri dengan hati sederhana seorang anak.",
    refleksi: ["Apakah aku membantu atau justru menghalangi anak-anak mengenal Yesus?", "Bagaimana aku bisa menerima Kerajaan Allah dengan hati seorang anak?"],
  },
  "ord-8-1": {
    renungan: "Seorang laki-laki berlari dan berlutut di depan Yesus, bertanya bagaimana memperoleh hidup kekal. Ia sudah menaati perintah sejak muda. Yesus memandangnya dan mengasihinya, lalu berkata bahwa satu hal masih kurang: jual hartamu, berikan kepada orang miskin, lalu ikutlah Aku. Orang itu pergi dengan sedih karena hartanya banyak. Tatapan kasih Yesus mendahului tuntutan-Nya. Ia tidak sekadar meminta, tetapi menawarkan kebebasan. Yesus juga mengatakan bahwa bagi Allah segala sesuatu mungkin. Hari ini, kenali satu hal yang paling sulit kulepaskan, dan berikan sebagian dari milikmu untuk orang yang membutuhkan.",
    refleksi: ["Apa \"satu hal\" yang masih menghalangiku mengikut Yesus sepenuhnya?", "Bisakah aku merasakan tatapan kasih Yesus sebelum mendengar tuntutan-Nya?"],
  },
  "ord-8-2": {
    renungan: "Petrus berkata, \"Lihat, kami telah meninggalkan segala sesuatu dan mengikut Engkau!\" Mungkin ada nada bertanya: lalu apa yang kami dapat? Yesus menjawab bahwa siapa pun yang meninggalkan rumah, keluarga, atau ladang demi Dia dan Injil akan menerima seratus kali lipat sekarang, juga penganiayaan, dan hidup kekal di masa datang. Tuhan tidak pernah kalah murah hati. Komunitas iman menjadi keluarga baru, meskipun jalan itu tidak bebas dari kesulitan. Yang terdahulu bisa menjadi yang terakhir. Hari ini, syukuri \"keluarga rohani\" yang Tuhan berikan, dan layani tanpa menghitung untung rugi.",
    refleksi: ["Pengorbanan apa yang pernah kuberikan dan bagaimana Tuhan membalasnya?", "Apakah aku melayani sambil diam-diam menghitung imbalan?"],
  },
  "ord-8-3": {
    renungan: "Untuk ketiga kalinya Yesus berbicara tentang penderitaan-Nya di Yerusalem. Namun Yakobus dan Yohanes justru meminta duduk di kanan dan kiri-Nya dalam kemuliaan. Murid-murid lain marah. Yesus mengumpulkan mereka dan menjelaskan bahwa penguasa dunia memerintah dengan tangan besi, tetapi di antara mereka tidak boleh demikian. Siapa ingin menjadi besar harus menjadi pelayan, sebab Anak Manusia datang \"untuk melayani\" dan memberikan nyawa-Nya sebagai tebusan bagi banyak orang. Ambisi diubah menjadi pelayanan. Hari ini, gunakan kedudukan atau pengaruh yang kita miliki, sekecil apa pun, untuk meringankan beban orang lain.",
    refleksi: ["Untuk apa aku menggunakan kedudukan atau pengaruh yang kumiliki?", "Di mana aku bisa melayani tanpa mencari tempat terhormat?"],
  },
  "ord-8-4": {
    renungan: "Bartimeus, pengemis buta di pinggir jalan Yerikho, berseru, \"Yesus, Anak Daud, kasihanilah aku!\" Banyak orang menyuruhnya diam, tetapi ia berteriak semakin keras. Yesus berhenti dan memanggilnya. Bartimeus menanggalkan jubahnya, melompat, dan datang. Yesus bertanya, \"Apa yang kamu ingin Aku lakukan bagimu?\" Ia ingin melihat, dan imannya menyelamatkannya. Ia pun mengikuti Yesus di jalan. Doa yang gigih dan jujur menyentuh hati Tuhan. Hari ini, jangan biarkan suara-suara di sekitar membungkam doa kita. Jawablah pertanyaan Yesus dengan jelas: apa yang sungguh kuinginkan dari-Nya?",
    refleksi: ["Jika Yesus bertanya \"Apa yang kamu ingin Aku lakukan bagimu?\", apa jawabanku?", "\"Jubah\" apa yang perlu kutanggalkan agar bisa datang kepada-Nya?"],
  },
  "ord-8-5": {
    renungan: "Yesus mencari buah pada pohon ara yang berdaun lebat tetapi tidak menemukan apa-apa, lalu mengutuknya. Di antara dua bagian kisah itu, Ia menyucikan Bait Allah dan mengingatkan bahwa rumah-Nya harus menjadi rumah doa bagi semua bangsa. Daun yang lebat tanpa buah menggambarkan ibadah yang tampak ramai tetapi tidak menghasilkan kasih. Keesokan harinya, Yesus mengajar tentang iman yang memindahkan gunung, doa yang percaya, dan pengampunan: ketika berdoa, ampunilah dulu orang lain. Hari ini, periksa apakah ada \"daun tanpa buah\" dalam hidup rohani, dan ampunilah seseorang sebelum berdoa.",
    refleksi: ["Adakah kegiatan rohaniku yang lebat daunnya tetapi tanpa buah kasih?", "Siapa yang perlu kuampuni sebelum aku berdoa hari ini?"],
  },
  "ord-8-6": {
    renungan: "Para pemimpin agama menanyakan kuasa Yesus. Ia balik bertanya tentang baptisan Yohanes: dari surga atau dari manusia? Mereka berhitung, takut pada orang banyak dan takut terjebak, lalu menjawab, \"Kami tidak tahu.\" Mereka tidak mencari kebenaran, tetapi mencari aman. Sikap seperti ini bisa juga ada pada kita: menghindari jawaban jujur karena takut konsekuensinya. Yesus tidak memaksa orang yang hatinya tertutup. Iman membutuhkan keberanian untuk berkata apa adanya di hadapan Allah. Hari ini, beranilah jujur pada diri sendiri dan Tuhan tentang satu hal yang selama ini sengaja dihindari.",
    refleksi: ["Kebenaran apa yang selama ini kuhindari karena takut konsekuensinya?", "Apakah aku mencari kebenaran atau sekadar mencari aman?"],
  },
  "ord-9-1": {
    renungan: "Perumpamaan tentang penggarap kebun anggur menceritakan pemilik yang membangun kebun dengan teliti lalu mempercayakannya kepada penggarap. Para hamba yang diutus untuk mengambil hasil dipukul dan dibunuh, akhirnya anak kesayangan pun dibunuh. Kisah ini menggambarkan kesabaran Allah yang terus mengutus nabi-nabi dan akhirnya Putra-Nya sendiri. Yesus menyebut diri sebagai batu yang dibuang tukang bangunan tetapi menjadi batu penjuru. Hidup, keluarga, dan talenta kita adalah kebun anggur yang dipercayakan, bukan milik mutlak. Hari ini, tanyakan buah apa yang bisa dipersembahkan kepada Tuhan dari \"kebun\" yang dipercayakan-Nya.",
    refleksi: ["Buah apa yang Tuhan harapkan dari \"kebun anggur\" hidupku?", "Apakah aku memperlakukan karunia Tuhan seolah-olah milikku sendiri?"],
  },
  "ord-9-2": {
    renungan: "Orang Farisi dan Herodian datang dengan pujian manis untuk menjebak Yesus: haruskah membayar pajak kepada kaisar? Yesus meminta sekeping dinar dan bertanya gambar siapa di situ. Lalu Ia berkata, \"Berikan kepada Kaisar apa yang menjadi milik kaisar dan kepada Allah apa yang menjadi milik Allah.\" Jawaban ini mengajak kita bertanggung jawab sebagai warga, tetapi juga sadar bahwa kita membawa gambar Allah. Seluruh diri kita adalah milik-Nya. Hari ini, laksanakan kewajiban sebagai warga dengan jujur, dan persembahkan juga yang paling berharga kepada Allah: hati, waktu, dan kesetiaan.",
    refleksi: ["Apakah aku memberikan kepada Allah apa yang menjadi milik-Nya?", "Bagaimana aku menjadi warga yang jujur dan bertanggung jawab?"],
  },
  "ord-9-3": {
    renungan: "Orang Saduki, yang tidak percaya kebangkitan, mengajukan kisah seorang perempuan yang menikah dengan tujuh bersaudara. Mereka ingin membuat iman akan kebangkitan tampak konyol. Yesus menjawab bahwa mereka sesat karena tidak mengerti Kitab Suci maupun kuasa Allah. Hidup sesudah kebangkitan bukan sekadar lanjutan hidup sekarang. Allah adalah Allah Abraham, Ishak, dan Yakub, \"bukan Allah orang mati, tetapi Allah orang yang hidup.\" Pengharapan ini menghibur kita yang kehilangan orang terkasih. Hari ini, serahkan orang-orang yang telah meninggal kepada Allah yang hidup, dan jalani hari dengan pengharapan akan kebangkitan.",
    refleksi: ["Bagaimana iman akan kebangkitan memengaruhi caraku memandang kematian?", "Apakah aku sungguh mengenal kuasa Allah, atau hanya mengira-ngira?"],
  },
  "ord-9-4": {
    renungan: "Seorang ahli Taurat bertanya tentang perintah yang paling utama. Yesus menjawab dengan dua perintah yang menyatu: mengasihi Tuhan Allah dengan segenap hati, jiwa, pikiran, dan kekuatan, serta mengasihi sesama seperti diri sendiri. Ahli Taurat itu setuju dan menambahkan bahwa kasih seperti itu lebih utama daripada semua kurban bakaran. Yesus berkata bahwa ia \"tidak jauh dari Kerajaan Allah.\" Mengerti perintah kasih sudah baik; menghidupinya adalah langkah berikutnya. Kasih kepada Allah teruji dalam kasih kepada sesama. Hari ini, pilih satu orang yang sulit dikasihi, dan lakukan satu kebaikan nyata baginya.",
    refleksi: ["Seberapa jauh aku dari Kerajaan Allah dalam hal mengasihi?", "Siapa sesama yang paling sulit kukasihi saat ini?"],
  },
  "ord-9-5": {
    renungan: "Saat mengajar di Bait Allah, Yesus mengajukan pertanyaan tentang Mazmur: bagaimana Kristus disebut anak Daud, padahal Daud sendiri menyebut-Nya \"Tuhan\"? Yesus mengajak orang banyak melihat lebih dalam. Mesias bukan sekadar keturunan raja yang memulihkan kejayaan politik, tetapi Tuhan yang duduk di sebelah kanan Allah. Orang banyak mendengarkan dengan gembira. Kita pun kadang mengecilkan Yesus menjadi sosok yang hanya memenuhi harapan kita. Hari ini, sediakan waktu untuk menyembah Yesus sebagai Tuhan, bukan hanya meminta kepada-Nya, dan dengarkan sabda-Nya dengan gembira seperti orang banyak itu.",
    refleksi: ["Apakah aku mengecilkan Yesus menjadi sekadar pemenuh keinginanku?", "Bagaimana aku menyembah Yesus sebagai Tuhan dalam doaku hari ini?"],
  },
  "ord-9-6": {
    renungan: "Yesus mengingatkan agar waspada terhadap ahli Taurat yang suka jubah panjang, salam penghormatan, dan tempat terhormat, tetapi merampas rumah para janda. Lalu Ia duduk mengamati orang memberi persembahan. Banyak orang kaya memberi banyak, tetapi seorang janda miskin memberi dua keping uang kecil. Yesus berkata bahwa ia memberi lebih banyak, sebab ia memberi dari kekurangannya, seluruh nafkahnya. Allah melihat hati, bukan jumlah. Kontras ini menegur kesalehan yang mencari pujian. Hari ini, berilah sesuatu, waktu, perhatian, atau uang, dengan tulus dan diam-diam, bukan karena ingin dilihat.",
    refleksi: ["Apakah pemberianku lahir dari kelebihan atau dari hati yang percaya?", "Di mana aku masih mencari pujian dalam kehidupan rohaniku?"],
  },
  "ord-10-1": {
    renungan: "Yesus naik ke bukit, duduk, dan mulai mengajar dengan Sabda Bahagia. Ia menyebut berbahagia mereka yang miskin dalam roh, berdukacita, lembut hati, lapar akan kebenaran, berbelas kasihan, murni hati, membawa damai, dan dianiaya demi kebenaran. Ukuran bahagia ini terbalik dari ukuran dunia, yang mengutamakan kekuasaan, kenyamanan, dan pujian. Sabda Bahagia adalah potret Yesus sendiri, dan undangan untuk menjadi serupa dengan-Nya. Bahagia sejati bukan bebas dari kesulitan, tetapi hidup dekat dengan Allah. Hari ini, pilih satu Sabda Bahagia, misalnya kelembutan hati, dan hidupi secara nyata dalam percakapan dan keputusan.",
    refleksi: ["Ukuran bahagia siapa yang selama ini kupakai, dunia atau Yesus?", "Sabda Bahagia mana yang paling ingin kuhidupi hari ini?"],
  },
  "ord-10-2": {
    renungan: "\"Kamu adalah garam dunia... Kamu adalah terang dunia.\" Yesus tidak berkata \"jadilah\", tetapi \"kamu adalah\". Identitas ini sudah diberikan kepada murid-murid-Nya. Garam memberi rasa dan mengawetkan, sedikit tetapi berpengaruh. Terang tidak untuk disembunyikan di bawah gantang, tetapi untuk menerangi seisi rumah. Tujuan dari semuanya jelas: supaya orang melihat perbuatan baik kita dan memuliakan Bapa di surga, bukan memuji kita. Iman yang hambar dan tersembunyi kehilangan maknanya. Hari ini, biarkan kehadiran kita membawa \"rasa\" yang baik di rumah atau tempat kerja, lewat kejujuran, keramahan, dan perhatian yang tulus.",
    refleksi: ["Apakah kehadiranku memberi \"rasa\" yang baik bagi orang di sekitarku?", "Perbuatan baik apa yang bisa membuat orang memuliakan Bapa hari ini?"],
  },
  "ord-10-3": {
    renungan: "Yesus menegaskan bahwa Ia datang bukan untuk meniadakan Hukum Taurat dan kitab para nabi, melainkan untuk menggenapinya. Tidak satu iota pun akan hilang. Perintah-perintah Allah bukan beban yang dibuang begitu saja, melainkan jalan hidup yang dibawa Yesus ke kepenuhannya dalam kasih. Siapa melakukan dan mengajarkan perintah itu akan disebut besar dalam Kerajaan Surga. Iman Kristiani tidak membenarkan sikap seenaknya terhadap hal-hal kecil, tetapi juga tidak berhenti pada aturan lahiriah. Hari ini, setia dalam satu perintah \"kecil\" yang sering diabaikan, misalnya jujur dalam hal sepele atau menepati janji.",
    refleksi: ["Perintah \"kecil\" apa yang sering kuabaikan dalam hidup sehari-hari?", "Apakah aku mengajarkan iman lewat teladan, bukan hanya kata-kata?"],
  },
  "ord-10-4": {
    renungan: "Yesus menuntut kebenaran yang lebih dalam daripada ahli Taurat dan orang Farisi. Larangan membunuh diperluas sampai ke kemarahan dan kata-kata yang merendahkan saudara. Lalu Ia memberi nasihat yang sangat praktis: bila saat membawa persembahan teringat ada saudara yang sakit hati, tinggalkan persembahan itu, pergi berdamai dulu, baru kembali. Bagi Allah, rekonsiliasi lebih mendesak daripada ritual. Relasi yang retak tidak bisa ditutupi dengan doa yang panjang. Hari ini, sebelum ikut misa atau berdoa, ingat seseorang yang hubungannya sedang renggang, dan ambil satu langkah kecil untuk berdamai, misalnya mengirim pesan sapaan.",
    refleksi: ["Dengan siapa aku perlu berdamai sebelum mempersembahkan doaku?", "Kata-kata apa yang pernah kuucapkan dan merendahkan orang lain?"],
  },
  "ord-10-5": {
    renungan: "Yesus membawa perintah \"jangan berzina\" sampai ke dalam hati: memandang dengan keinginan saja sudah merupakan dosa. Ia memakai gambaran keras, mencungkil mata dan memotong tangan, bukan untuk disakiti secara harfiah, tetapi untuk menunjukkan keseriusan melawan sumber dosa. Ia juga meneguhkan kesetiaan dalam perkawinan. Kemurnian bukan hanya soal perbuatan, tetapi juga cara memandang dan memperlakukan orang lain sebagai pribadi, bukan objek. Di zaman layar dan media sosial, ajaran ini sangat relevan. Hari ini, jaga mata dan hati dari apa yang merendahkan martabat manusia, dan putuskan satu sumber godaan yang nyata.",
    refleksi: ["Apa yang perlu kuputus agar mataku dan hatiku tetap murni?", "Apakah aku memandang orang lain sebagai pribadi yang bermartabat?"],
  },
  "ord-10-6": {
    renungan: "Orang zaman itu bersumpah demi surga, bumi, Yerusalem, atau kepala sendiri untuk meyakinkan orang lain. Yesus berkata, jangan bersumpah sama sekali; cukuplah \"ya\" jika ya dan \"tidak\" jika tidak. Bila kata-kata kita jujur dan dapat dipegang, kita tidak perlu tambahan sumpah. Kebiasaan memperkuat ucapan dengan sumpah justru menunjukkan bahwa kepercayaan sudah lemah. Integritas adalah kesesuaian antara kata dan perbuatan. Hari ini, perhatikan janji-janji kecil: datang tepat waktu, membalas pesan, mengerjakan yang sudah disanggupi. Biarlah \"ya\" kita sungguh berarti ya, sehingga orang dapat mempercayai kita.",
    refleksi: ["Apakah \"ya\"-ku bisa dipercaya oleh keluarga dan rekan kerja?", "Janji kecil apa yang sering kuabaikan?"],
  },
  "ord-11-1": {
    renungan: "Hukum \"mata ganti mata\" dulu membatasi balas dendam agar tidak berlebihan. Yesus melangkah lebih jauh: jangan melawan orang jahat dengan kejahatan. Menyodorkan pipi lain, memberikan jubah, berjalan dua mil, memberi kepada yang meminta. Ini bukan ajakan untuk pasrah terhadap ketidakadilan, melainkan untuk memutus lingkaran kekerasan dengan kemurahan hati yang mengejutkan. Kasih seperti itu hanya mungkin bila hati berakar pada Allah. Hari ini, ketika ada yang menyakiti atau merepotkan, tahan dorongan untuk membalas. Cobalah melakukan sedikit lebih dari yang diminta, dan lihat bagaimana kebaikan dapat meredakan ketegangan.",
    refleksi: ["Kepada siapa aku masih menyimpan keinginan untuk membalas?", "Di mana aku bisa \"berjalan dua mil\" bagi orang lain hari ini?"],
  },
  "ord-11-2": {
    renungan: "\"Kasihilah musuh-musuhmu dan berdoalah bagi orang-orang yang menganiaya kamu.\" Ini salah satu sabda Yesus yang paling sulit. Alasannya: Bapa di surga menerbitkan matahari bagi orang jahat dan orang baik, menurunkan hujan bagi yang benar dan yang tidak benar. Mengasihi hanya orang yang mengasihi kita adalah hal biasa; pemungut cukai pun melakukannya. Murid Yesus dipanggil untuk serupa dengan Bapa yang murah hati. Mengasihi musuh mungkin dimulai dengan langkah paling kecil: mendoakan namanya. Hari ini, sebutlah dalam doa seseorang yang menyakiti kita, mohonkan kebaikan baginya, dan serahkan luka itu kepada Tuhan.",
    refleksi: ["Siapa \"musuh\" yang perlu kudoakan dengan tulus hari ini?", "Apakah kasihku hanya terbatas pada orang yang membalas kasihku?"],
  },
  "ord-11-3": {
    renungan: "Yesus mengingatkan agar tidak melakukan kewajiban agama supaya dilihat orang. Ketika memberi sedekah, jangan membunyikan trompet; biarlah tangan kiri tidak tahu apa yang dilakukan tangan kanan. Ketika berdoa, masuklah ke kamar dan tutup pintu. Ketika berpuasa, jangan memasang wajah muram. Bapa yang melihat yang tersembunyi akan membalasnya. Sedekah, doa, dan puasa adalah relasi dengan Allah, bukan panggung untuk mendapat pujian. Di era media sosial, godaan untuk memamerkan kebaikan semakin besar. Hari ini, lakukan satu kebaikan secara diam-diam, tanpa diceritakan atau diunggah, cukup diketahui oleh Bapa.",
    refleksi: ["Apakah ada kebaikan yang kulakukan terutama agar dilihat orang?", "Kebaikan tersembunyi apa yang bisa kulakukan hari ini?"],
  },
  "ord-11-4": {
    renungan: "Yesus berkata bahwa doa tidak perlu bertele-tele, sebab Bapa sudah tahu apa yang kita perlukan sebelum kita meminta. Lalu Ia mengajarkan Doa Bapa Kami: memuliakan nama Allah, merindukan kerajaan-Nya, meminta makanan secukupnya hari ini, memohon ampun, dan meminta perlindungan dari yang jahat. Yesus menekankan satu hal secara khusus: jika kita mengampuni kesalahan orang lain, Bapa juga akan mengampuni kita. Doa ini begitu akrab sehingga mudah diucapkan tanpa sadar. Hari ini, doakan Bapa Kami perlahan, berhenti di setiap kalimat, dan biarkan kata \"seperti kami juga mengampuni\" menyentuh relasi yang masih terluka.",
    refleksi: ["Kalimat mana dalam Doa Bapa Kami yang paling sulit kuucapkan dengan jujur?", "Siapa yang perlu kuampuni agar doaku menjadi tulus?"],
  },
  "ord-11-5": {
    renungan: "Yesus mengajak kita mengumpulkan harta di surga, bukan di bumi, tempat ngengat, karat, dan pencuri merusak. Alasannya sederhana dan tajam: \"Di tempat hartamu berada, di situ juga hatimu berada.\" Apa yang paling kita jaga dan pikirkan akan membentuk arah hidup kita. Yesus juga berbicara tentang mata sebagai pelita tubuh; cara kita memandang menentukan terang atau gelapnya hidup. Harta surgawi dikumpulkan lewat kasih, kemurahan hati, dan kesetiaan kepada Allah. Hari ini, perhatikan ke mana pikiran paling sering melayang, dan alihkan sebagian waktu dan sumber daya untuk sesuatu yang bernilai kekal.",
    refleksi: ["Di mana sebenarnya \"hartaku\" berada, melihat dari apa yang paling kupikirkan?", "Bagaimana caraku memandang hidup: dengan mata terang atau mata gelap?"],
  },
  "ord-11-6": {
    renungan: "\"Kamu tidak dapat melayani Allah dan mamon.\" Lalu Yesus mengajak kita memandang burung di langit dan bunga bakung di ladang. Mereka tidak menabur dan tidak memintal, tetapi dipelihara Bapa. Kekhawatiran tidak dapat menambah sehasta pun pada jalan hidup kita. Yesus tidak melarang bekerja dan merencanakan, tetapi mengajak kita menata prioritas: carilah dahulu Kerajaan Allah dan kebenaran-Nya, maka semua yang lain akan ditambahkan. Hari esok punya kesusahannya sendiri. Hari ini, ketika rasa cemas muncul, berhentilah sejenak, tarik napas, dan serahkan satu kekhawatiran secara konkret kepada Bapa yang mengenal kebutuhan kita.",
    refleksi: ["Kekhawatiran apa yang paling menyita pikiranku saat ini?", "Apakah aku sungguh mencari Kerajaan Allah lebih dulu dalam jadwal harianku?"],
  },
  "ord-12-1": {
    renungan: "\"Jangan menghakimi supaya kamu tidak dihakimi.\" Yesus memakai gambaran lucu namun menohok: orang sibuk mengeluarkan serpihan kayu dari mata saudaranya, padahal ada balok di matanya sendiri. Kita sering lebih tajam melihat kesalahan orang lain daripada kesalahan diri. Ukuran yang kita pakai untuk menilai akan dipakai juga untuk kita. Yesus tidak melarang menegur dengan kasih, tetapi meminta kita lebih dulu bercermin dan bertobat. Hanya hati yang sudah disembuhkan dapat menolong dengan lembut. Hari ini, setiap kali tergoda mengomentari kekurangan orang lain, tanyakan dulu: \"balok\" apa yang ada di mataku sendiri?",
    refleksi: ["\"Balok\" apa di mataku yang sering kuabaikan?", "Siapa yang sering kuhakimi dengan ukuran yang tidak adil?"],
  },
  "ord-12-2": {
    renungan: "Injil hari ini memuat \"kaidah emas\": segala sesuatu yang kamu ingin orang lakukan kepadamu, lakukan juga kepada mereka. Yesus menyebutnya isi Hukum Taurat dan kitab para nabi. Ukurannya sederhana, tetapi menuntut kepekaan: membayangkan diri berada di posisi orang lain. Yesus juga berbicara tentang gerbang yang sempit dan jalan yang sesak menuju kehidupan, sedangkan jalan lebar menuju kebinasaan banyak dilalui orang. Jalan sempit itu bukan jalan yang muram, melainkan jalan kasih yang tidak selalu populer. Hari ini, sebelum berbicara atau bertindak, tanyakan: apakah aku mau diperlakukan seperti ini? Lalu pilihlah jalan yang lebih mengasihi.",
    refleksi: ["Bagaimana aku ingin diperlakukan, dan apakah aku memperlakukan orang lain begitu?", "Di mana aku tergoda memilih \"jalan lebar\" yang lebih mudah?"],
  },
  "ord-12-3": {
    renungan: "Yesus memperingatkan tentang nabi palsu yang tampil seperti domba, padahal serigala buas. Cara mengenali mereka: dari buahnya. Pohon yang baik menghasilkan buah yang baik; tidak mungkin memetik anggur dari semak duri. Ukuran ini berlaku untuk menilai ajaran, pemimpin, dan juga diri sendiri. Kata-kata indah, penampilan saleh, atau popularitas tidak cukup. Yang menentukan adalah buah: kasih, kejujuran, kerendahan hati, damai. Di zaman banyak suara yang mengaku membawa kebenaran, kita perlu sikap waspada sekaligus rendah hati. Hari ini, periksa buah dari kebiasaan dan sumber informasi yang kita ikuti, dan pupuklah satu buah baik dalam hidup sendiri.",
    refleksi: ["Buah apa yang paling tampak dari hidupku akhir-akhir ini?", "Suara siapa yang kuikuti, dan apakah buahnya baik?"],
  },
  "ord-12-4": {
    renungan: "Tidak semua yang berseru \"Tuhan, Tuhan\" akan masuk Kerajaan Surga, tetapi yang melakukan kehendak Bapa. Bahkan karya rohani yang mengesankan tidak menjamin bila tidak lahir dari relasi yang sejati dengan Tuhan. Yesus lalu membandingkan dua orang yang membangun rumah. Yang bijaksana membangun di atas batu, yaitu mendengar dan melakukan sabda-Nya; yang bodoh membangun di atas pasir. Ketika hujan, banjir, dan angin datang, perbedaannya terlihat. Badai pasti datang dalam hidup siapa pun. Hari ini, pilih satu sabda Tuhan yang pernah didengar dan belum dilakukan, lalu wujudkan dengan sederhana sebagai batu dasar hidup.",
    refleksi: ["Sabda Tuhan apa yang sudah kudengar tetapi belum kulakukan?", "Di atas apa sebenarnya aku membangun rumah hidupku?"],
  },
  "ord-12-5": {
    renungan: "Begitu turun dari bukit setelah mengajar, Yesus disambut seorang yang sakit kusta. Ia sujud dan berkata, \"Tuan, kalau Engkau mau, Engkau dapat menahirkanku.\" Yesus mengulurkan tangan, menjamahnya, dan berkata, \"Aku mau, tahirlah.\" Ajaran Yesus di bukit langsung menjadi tindakan di kaki bukit. Kata-kata-Nya selalu sejalan dengan perbuatan. Ia menyentuh yang dianggap najis dan memulihkannya ke dalam masyarakat dengan menyuruhnya menghadap imam. Doa orang kusta itu penuh iman dan penyerahan pada kehendak Tuhan. Hari ini, bawalah kepada Yesus luka yang membuat kita merasa jauh dari orang lain, dan percayalah pada kehendak baik-Nya.",
    refleksi: ["Apakah aku berdoa dengan penyerahan seperti \"kalau Engkau mau\"?", "Apakah perbuatanku sejalan dengan kata-kata imanku?"],
  },
  "ord-12-6": {
    renungan: "Seorang perwira Romawi memohon kesembuhan bagi hambanya. Ketika Yesus mau datang, ia berkata, \"Tuan, aku tidak layak untuk menerima Engkau masuk ke bawah atapku, tetapi katakanlah sepatah kata saja.\" Yesus kagum akan imannya, iman seorang asing yang melampaui banyak orang Israel. Kata-kata ini kita ucapkan dalam setiap Ekaristi sebelum menyambut Tubuh Kristus. Perwira itu rendah hati, peduli pada bawahannya, dan percaya penuh pada kuasa sabda Yesus. Sesudahnya, Yesus menyembuhkan ibu mertua Petrus dan banyak orang. Hari ini, ucapkan doa itu dengan sadar saat menyambut komuni atau berdoa, dan doakan seseorang yang bergantung pada kita.",
    refleksi: ["Apakah aku sungguh percaya pada kuasa satu sabda Yesus?", "Siapa yang bergantung padaku dan perlu kudoakan hari ini?"],
  },
  "ord-13-1": {
    renungan: "Seorang ahli Taurat dengan semangat berkata akan mengikuti Yesus ke mana saja. Yesus menjawab jujur: rubah punya liang, burung punya sarang, tetapi Anak Manusia tidak punya tempat meletakkan kepala. Seorang murid lain ingin menguburkan ayahnya dulu, dan Yesus berkata, \"Ikutlah Aku.\" Kata-kata Yesus terdengar keras, tetapi intinya jelas: mengikut Dia bukan perkara sampingan yang menunggu semua urusan lain beres. Antusiasme perlu diuji dengan kesediaan melepaskan rasa aman. Hari ini, tanyakan dengan jujur apa yang masih kujadikan syarat sebelum sungguh mengikuti Yesus, dan ambil satu langkah tanpa menunda lagi.",
    refleksi: ["Apa yang masih kujadikan alasan untuk menunda mengikut Yesus?", "Apakah aku siap mengikuti Yesus walau tanpa kenyamanan?"],
  },
  "ord-13-2": {
    renungan: "Badai besar mengguncang perahu sampai tertutup ombak, sementara Yesus tidur. Murid-murid membangunkan-Nya dengan seruan, \"Tuhan, selamatkan kami! Kita sedang binasa!\" Sebelum menenangkan badai, Yesus lebih dulu bertanya, \"Mengapa kamu takut, hai kamu yang kurang beriman?\" Lalu Ia menghardik angin dan danau, dan semuanya menjadi tenang sekali. Orang-orang heran: siapakah Dia sehingga angin dan danau taat kepada-Nya? Seruan para murid itu sendiri adalah doa yang baik, singkat dan jujur. Hari ini, ketika takut atau panik, ucapkan doa sederhana itu, \"Tuhan, selamatkan aku,\" dan biarkan Yesus menenangkan badai di dalam hati.",
    refleksi: ["Badai apa yang membuatku takut dan merasa akan tenggelam?", "Apakah aku berseru kepada Tuhan atau panik sendirian?"],
  },
  "ord-13-3": {
    renungan: "Di daerah Gadara, dua orang kerasukan keluar dari kuburan dengan sangat ganas. Roh-roh jahat itu mengenal Yesus sebagai Anak Allah dan memohon dipindahkan ke kawanan babi. Dengan satu kata, \"Pergilah!\", Yesus membebaskan mereka. Namun seisi kota justru keluar dan meminta Yesus meninggalkan daerah mereka. Mereka lebih terganggu oleh kerugian daripada bersukacita atas dua orang yang dipulihkan. Kehadiran Yesus kadang terasa mengganggu kenyamanan dan kepentingan kita. Hari ini, periksa apakah ada wilayah hidup yang diam-diam kita tutup bagi Yesus karena takut kehilangan sesuatu, dan undang Dia masuk ke situ.",
    refleksi: ["Wilayah hidup mana yang diam-diam kututup bagi Yesus?", "Apakah aku lebih peduli pada kerugian daripada pemulihan sesama?"],
  },
  "ord-13-4": {
    renungan: "Orang-orang membawa seorang lumpuh di atas tempat tidur. Melihat iman mereka, Yesus pertama-tama berkata, \"Teguhkanlah hatimu, anak-Ku, dosamu sudah diampuni.\" Beberapa ahli Taurat menganggap-Nya menghujat. Untuk menunjukkan bahwa Anak Manusia berkuasa mengampuni dosa, Yesus menyuruh orang itu bangun, mengangkat tempat tidurnya, dan pulang. Kesembuhan terdalam yang ditawarkan Yesus adalah pengampunan. Gereja meneruskan karunia ini dalam Sakramen Tobat. Orang banyak takut dan memuliakan Allah yang memberi kuasa seperti itu kepada manusia. Hari ini, pertimbangkan untuk menerima Sakramen Tobat, dan dengarkan sapaan Yesus: \"teguhkanlah hatimu.\"",
    refleksi: ["Kapan terakhir kali aku mengalami pengampunan dalam Sakramen Tobat?", "Beban dosa apa yang membuatku \"lumpuh\" dan perlu kuserahkan?"],
  },
  "ord-13-5": {
    renungan: "Satu kalimat Yesus, \"Ikutlah Aku,\" mengubah arah hidup Matius si pengumpul pajak. Ia berdiri dan pergi, lalu rumahnya penuh dengan pengumpul pajak dan orang berdosa yang makan bersama Yesus. Orang Farisi heran dan mengkritik. Yesus menjawab bahwa Ia datang bagi yang sakit, dan mengutip nabi: \"Aku menghendaki belas kasihan, bukannya persembahan.\" Kesalehan tanpa belas kasihan kehilangan inti. Tuhan lebih senang melihat hati yang menyambut orang yang terluka daripada ibadah yang menjauhkan diri dari mereka. Hari ini, ingatlah saat Yesus memanggil kita walau tidak layak, dan teruskan belas kasihan itu kepada seseorang yang sedang jatuh.",
    refleksi: ["Kapan Yesus memanggilku walau aku merasa tidak layak?", "Apakah ibadahku membuatku lebih berbelas kasihan pada orang lain?"],
  },
  "ord-13-6": {
    renungan: "Murid-murid Yohanes bertanya mengapa murid Yesus tidak berpuasa. Yesus menjawab bahwa selama pengantin masih bersama mereka, para pengiring tidak berdukacita; nanti, ketika pengantin diambil, barulah mereka berpuasa. Lalu Ia memakai gambaran kain baru pada pakaian lama dan anggur baru dalam kantong kulit lama. Kehadiran Yesus membawa hidup baru yang menuntut hati yang baru pula. Kita tidak bisa sekadar menambal hidup lama dengan sedikit kebiasaan rohani. Hari ini, minta Tuhan memperbarui hati, dan biarkan satu kebiasaan lama yang kaku digantikan dengan cara baru yang lebih terbuka pada kasih-Nya.",
    refleksi: ["Bagian hidup mana yang hanya kutambal, padahal perlu diperbarui?", "Apakah aku memberi ruang bagi \"anggur baru\" yang Tuhan tawarkan?"],
  },
  "ord-14-1": {
    renungan: "Seorang pemimpin rumah ibadah datang kepada Yesus dengan permohonan yang sangat berani: anaknya baru saja mati, tetapi jika Yesus meletakkan tangan, ia akan hidup. Di tengah jalan, seorang perempuan yang dua belas tahun menderita pendarahan berkata dalam hati bahwa ia akan sembuh bila menjamah jubah Yesus. Yesus berbalik dan berkata, \"Teguhkanlah hatimu,\" imannya telah menyembuhkannya. Lalu di rumah pemimpin itu, di tengah tawa mengejek orang banyak, Yesus memegang tangan anak itu dan ia bangkit. Dua iman, dua kisah, satu Tuhan yang berkuasa atas penyakit dan maut. Hari ini, ulurkan tangan kepada Yesus dengan iman, sekecil apa pun.",
    refleksi: ["Apa \"ujung jubah\" Yesus yang bisa kujamah hari ini dengan iman?", "Apakah aku tetap percaya meski orang lain menertawakan harapanku?"],
  },
  "ord-14-2": {
    renungan: "Setelah Yesus membebaskan orang bisu, orang banyak terheran-heran, tetapi orang Farisi menuduh-Nya bekerja dengan kuasa roh jahat. Yesus tidak berhenti; Ia berkeliling kota dan desa, mengajar, mewartakan Injil, dan menyembuhkan. Melihat orang banyak, hati-Nya tergerak oleh belas kasihan, sebab mereka lelah dan terlantar seperti domba tanpa gembala. Lalu Ia berkata bahwa tuaian banyak tetapi pekerja sedikit, dan meminta murid-murid berdoa kepada tuan yang empunya tuaian. Doa untuk panggilan adalah tugas setiap orang beriman. Hari ini, doakan imam, biarawan-biarawati, katekis, dan orang muda yang sedang mencari panggilan hidupnya.",
    refleksi: ["Apakah hatiku tergerak oleh belas kasihan melihat orang yang terlantar?", "Untuk panggilan siapa aku bisa berdoa secara khusus hari ini?"],
  },
  "ord-14-3": {
    renungan: "Yesus memanggil dua belas murid dan memberi mereka kuasa untuk mengusir roh najis dan menyembuhkan segala penyakit. Nama-nama mereka disebut satu per satu, dari Simon Petrus sampai Yudas Iskariot. Ada nelayan, pengumpul pajak, orang Zelot; latar belakang mereka berbeda, bahkan bisa saling bertentangan. Lalu Yesus mengutus mereka dengan pesan sederhana: beritakanlah bahwa Kerajaan Surga sudah dekat. Setiap nama penting di mata Tuhan, dan setiap orang diutus membawa kabar baik di tempatnya masing-masing. Hari ini, sadari bahwa nama kita pun dikenal dan dipanggil Tuhan, dan bawa kabar baik lewat sikap ramah dan menolong.",
    refleksi: ["Bagaimana rasanya menyadari bahwa Tuhan memanggilku secara pribadi, dengan namaku?", "Kepada siapa aku diutus membawa kabar baik minggu ini?"],
  },
  "ord-14-4": {
    renungan: "\"Kamu menerima dengan cuma-cuma, berikanlah dengan cuma-cuma.\" Kalimat ini menjadi inti perutusan para murid. Mereka diutus mewartakan bahwa Kerajaan Surga sudah dekat, menyembuhkan yang sakit, dan membawa damai ke setiap rumah, tanpa membawa emas, perak, atau bekal berlebih. Semua yang kita miliki, iman, bakat, waktu, adalah anugerah, bukan hasil usaha semata. Karena itu kita pun dipanggil memberi tanpa menghitung untung. Yesus juga mengajarkan sikap bebas: bila ditolak, kebaskan debu dan lanjutkan perjalanan. Hari ini, bagikan satu anugerah yang kita terima, misalnya keterampilan atau waktu, tanpa mengharap balasan.",
    refleksi: ["Anugerah apa yang kuterima cuma-cuma dan bisa kubagikan hari ini?", "Bagaimana aku menanggapi penolakan saat berbuat baik?"],
  },
  "ord-14-5": {
    renungan: "Yesus berterus terang bahwa Ia mengutus murid-murid seperti domba ke tengah serigala. Karena itu mereka harus \"cerdik seperti ular dan tulus seperti burung-burung merpati.\" Iman bukan kenaifan, tetapi juga tidak boleh menjadi licik. Penganiayaan bisa datang, bahkan dari keluarga sendiri. Namun para murid tidak perlu khawatir tentang apa yang harus dikatakan, sebab Roh Bapa akan berbicara di dalam mereka, dan siapa bertahan sampai akhir akan diselamatkan. Hari ini, ketika menghadapi situasi sulit di kantor atau masyarakat, bersikaplah bijak dan jernih, tetapi tetap jujur dan bersih hati, serta andalkan Roh Kudus.",
    refleksi: ["Bagaimana aku menyeimbangkan kecerdikan dan ketulusan dalam situasi sulit?", "Apakah aku mengandalkan Roh Kudus saat tidak tahu harus berkata apa?"],
  },
  "ord-14-6": {
    renungan: "Tiga kali dalam Injil ini Yesus berkata, \"jangan takut.\" Jangan takut kepada mereka yang dapat membunuh tubuh tetapi tidak dapat membunuh jiwa. Burung pipit yang dijual murah pun tidak jatuh tanpa sepengetahuan Bapa, dan bahkan rambut kepala kita terhitung semuanya. Kita jauh lebih berharga daripada banyak burung pipit. Dari rasa aman dalam kasih Bapa itulah lahir keberanian untuk mengakui Yesus di depan orang. Ketakutan sering membuat kita diam tentang iman atau tidak membela yang benar. Hari ini, ingatlah betapa berharganya kita di mata Allah, dan beranilah menunjukkan iman dengan sederhana, tanpa malu.",
    refleksi: ["Ketakutan apa yang paling sering membuatku diam tentang imanku?", "Apakah aku percaya bahwa aku sungguh berharga di mata Bapa?"],
  },
  "ord-15-1": {
    renungan: "Kata-kata Yesus hari ini mengejutkan: Ia datang bukan membawa damai, melainkan pedang. Maksud-Nya, mengikut Dia bisa menimbulkan perbedaan, bahkan di dalam keluarga. Yesus meminta tempat pertama, di atas kasih kepada ayah, ibu, atau anak. Ini bukan ajakan untuk tidak mengasihi keluarga, melainkan menata kasih dengan benar, sebab kasih kepada keluarga menjadi lebih murni bila berakar pada Allah. Lalu Yesus berbicara tentang kemurahan kecil: siapa memberi secangkir air sejuk kepada orang kecil karena ia murid, tidak akan kehilangan upah. Hari ini, tempatkan Tuhan di urutan pertama, dan berikan \"secangkir air\" bagi orang yang sederhana.",
    refleksi: ["Apakah ada kasih atau keterikatan yang menggeser Tuhan dari tempat pertama?", "Kepada siapa aku bisa memberi \"secangkir air sejuk\" hari ini?"],
  },
  "ord-15-2": {
    renungan: "Yesus mencela kota-kota Khorazim, Betsaida, dan Kapernaum, tempat Ia paling banyak membuat mukjizat, karena mereka tidak bertobat. Seandainya mukjizat itu terjadi di Tirus dan Sidon, kota-kota itu sudah lama bertobat. Ada bahaya halus dalam kehidupan beriman: terbiasa dengan rahmat sampai tidak lagi tergerak. Kita mungkin sering mendengar sabda, menerima sakramen, dan mengalami pertolongan Tuhan, tetapi hidup tetap sama. Teguran Yesus lahir dari kasih yang ingin membangunkan. Hari ini, ingatlah beberapa kebaikan Tuhan yang paling nyata dalam hidup, lalu tanyakan perubahan apa yang seharusnya lahir dari pengalaman itu.",
    refleksi: ["Rahmat apa yang sudah sering kuterima tetapi belum mengubah hidupku?", "Apakah aku sudah terlalu terbiasa dengan hal-hal kudus?"],
  },
  "ord-15-3": {
    renungan: "Yesus bersyukur kepada Bapa karena rahasia Kerajaan disembunyikan dari orang bijak dan pandai, tetapi dinyatakan kepada anak-anak kecil. Pengenalan akan Allah bukan hasil kepintaran semata, melainkan anugerah yang diterima hati sederhana. Hanya Anak yang mengenal Bapa, dan Ia berkenan menyatakannya kepada kita. Pengetahuan tentang iman tetap baik, tetapi tanpa kerendahan hati bisa menjadi tembok. Anak kecil datang tanpa pura-pura, bergantung dan percaya. Hari ini, berdoalah tanpa banyak analisis, seperti seorang anak berbicara kepada ayahnya, dan bersyukurlah atas hal-hal sederhana yang menyatakan kasih Bapa.",
    refleksi: ["Apakah kepintaranku kadang menghalangiku untuk percaya dengan sederhana?", "Hal sederhana apa yang hari ini menyatakan kasih Bapa kepadaku?"],
  },
  "ord-15-4": {
    renungan: "\"Datanglah kepada-Ku, semua yang letih lesu dan berbeban berat, dan Aku akan memberimu kelegaan.\" Undangan Yesus ini begitu lembut. Ia tidak menjanjikan hidup tanpa beban, tetapi menawarkan kuk-Nya sendiri, kuk yang dipikul bersama Dia. Yesus memperkenalkan diri sebagai yang lemah lembut dan rendah hati, dan dari-Nya kita belajar menemukan ketenangan jiwa. Banyak beban menjadi berat karena dipikul sendirian, atau karena kita memikul hal-hal yang sebenarnya bukan tugas kita. Hari ini, sebutkan dalam doa beban yang paling melelahkan, serahkan kepada Yesus, dan belajarlah dari kelemahlembutan-Nya ketika menghadapi orang lain.",
    refleksi: ["Beban apa yang paling melelahkanku saat ini?", "Apa yang bisa kupelajari dari kelemahlembutan dan kerendahan hati Yesus?"],
  },
  "ord-15-5": {
    renungan: "Murid-murid yang lapar memetik gandum pada hari Sabat, dan orang Farisi menganggapnya pelanggaran. Yesus mengingatkan kisah Daud dan para imam yang bekerja di Bait Allah pada hari Sabat. Lalu Ia mengutip nabi: \"Aku menghendaki belas kasihan dan bukan persembahan.\" Seandainya mereka memahami hal itu, mereka tidak akan menghukum orang yang tidak bersalah. Yesus juga menyatakan bahwa Anak Manusia adalah Tuhan atas hari Sabat. Aturan agama penting, tetapi tujuannya adalah kasih dan kehidupan. Hari ini, ketika melihat orang lain berbeda cara dalam beribadah atau bertindak, dahulukan belas kasihan sebelum menghakimi.",
    refleksi: ["Apakah aku lebih cepat menuduh daripada memahami kebutuhan orang lain?", "Bagaimana aku mendahulukan belas kasihan dalam penilaianku hari ini?"],
  },
  "ord-15-6": {
    renungan: "Orang Farisi bersekongkol untuk membinasakan Yesus. Ia menyingkir, tetapi tetap menyembuhkan semua orang yang mengikuti-Nya. Matius melihat di sini penggenapan nubuat Yesaya tentang Hamba yang dipilih Allah: Ia tidak berbantah atau berteriak, buluh yang patah terkulai tidak akan dipatahkan-Nya, dan sumbu yang pudar nyalanya tidak akan dipadamkan-Nya. Yesus begitu lembut terhadap yang rapuh. Ia tidak menghancurkan orang yang sudah lemah, tetapi menjaga sisa nyala iman mereka. Hari ini, perlakukan orang yang sedang rapuh dengan kelembutan yang sama, dan percayalah bahwa Tuhan juga sabar terhadap nyala iman kita yang mungkin redup.",
    refleksi: ["Siapa \"buluh yang patah\" di sekitarku yang butuh kelembutan?", "Apakah aku percaya Tuhan menjaga nyala imanku yang redup?"],
  },
  "ord-16-1": {
    renungan: "Ahli Taurat dan orang Farisi meminta tanda. Yesus berkata hanya tanda Nabi Yunus yang akan diberikan: seperti Yunus tiga hari dalam perut ikan, Anak Manusia akan tiga hari dalam perut bumi. Orang Niniwe bertobat mendengar pewartaan Yunus, dan ratu dari selatan datang jauh untuk mendengar hikmat Salomo; padahal di sini ada yang lebih besar daripada Yunus dan Salomo. Tanda terbesar sudah diberikan: wafat dan kebangkitan Yesus. Yang dibutuhkan bukan tanda tambahan, melainkan hati yang mau bertobat. Hari ini, berhenti menunda pertobatan dengan alasan menunggu kepastian, dan tanggapi sabda yang sudah kita dengar.",
    refleksi: ["Apakah aku menunda pertobatan dengan alasan menunggu tanda?", "Bagaimana wafat dan kebangkitan Yesus mengubah caraku hidup?"],
  },
  "ord-16-2": {
    renungan: "Ketika diberitahu bahwa ibu dan saudara-saudara-Nya menunggu di luar, Yesus merentangkan tangan ke arah murid-murid-Nya dan berkata, \"Inilah ibu-Ku dan saudara-saudara-Ku!\" Siapa pun yang melakukan kehendak Bapa di surga adalah saudara, saudari, dan ibu-Nya. Gerakan tangan Yesus itu seakan merangkul siapa saja yang mau mendengar dan taat. Keluarga Allah terbuka bagi semua. Maria tetap menjadi teladan utama, sebab ia mendengarkan sabda dan melakukannya. Hari ini, bergabunglah dalam keluarga Yesus dengan cara yang paling sederhana: mencari dan melakukan kehendak Bapa dalam pekerjaan dan relasi sehari-hari.",
    refleksi: ["Bagaimana aku bisa melakukan kehendak Bapa dalam tugas-tugasku hari ini?", "Apakah aku merasa sungguh menjadi bagian dari keluarga Yesus?"],
  },
  "ord-16-3": {
    renungan: "Dari atas perahu, Yesus mengajar orang banyak yang berdiri di tepi danau tentang seorang penabur. Benih jatuh di pinggir jalan, di tanah berbatu, di antara semak duri, dan di tanah yang baik. Sebagian hilang, tetapi yang jatuh di tanah baik berbuah seratus, enam puluh, dan tiga puluh kali lipat. Penabur tetap menabur dengan murah hati walau tidak semua benih tumbuh. Allah tidak berhenti menaburkan sabda-Nya dalam hidup kita. Perumpamaan ini ditutup dengan ajakan, siapa bertelinga hendaklah mendengar. Hari ini, sediakan \"tanah\" hati yang siap: matikan gangguan sejenak dan dengarkan satu ayat Kitab Suci dengan sungguh.",
    refleksi: ["Apakah hatiku siap menerima sabda Tuhan hari ini?", "Apakah aku tetap menabur kebaikan meski tidak semua berbuah?"],
  },
  "ord-16-4": {
    renungan: "Murid-murid bertanya mengapa Yesus berbicara dalam perumpamaan. Ia menjawab bahwa kepada mereka telah dikaruniakan untuk mengetahui rahasia Kerajaan Surga, sedangkan banyak orang melihat tetapi tidak melihat, mendengar tetapi tidak mendengar dan tidak mengerti. Hati yang tebal menutup diri dari penyembuhan Allah. Lalu Yesus berkata, \"diberkatilah matamu karena melihat dan telingamu karena mendengar.\" Banyak nabi dan orang benar ingin melihat dan mendengar apa yang dialami para murid. Hari ini, syukuri anugerah iman yang kita terima, dan mintalah hati yang terbuka agar tidak hanya mendengar sabda, tetapi juga memahaminya.",
    refleksi: ["Apakah aku sungguh mendengar, atau hanya sekadar mendengar sabda Tuhan?", "Anugerah iman apa yang perlu kusyukuri hari ini?"],
  },
  "ord-16-5": {
    renungan: "Yesus menjelaskan perumpamaan penabur. Benih di pinggir jalan adalah orang yang mendengar tanpa memahami, lalu si jahat merampasnya. Tanah berbatu adalah orang yang menerima dengan gembira tetapi tidak berakar, sehingga mundur saat kesulitan datang. Semak duri adalah kekhawatiran dunia dan tipu daya kekayaan yang menghimpit firman. Tanah yang baik adalah orang yang mendengar, mengerti, dan berbuah. Penjelasan ini seperti cermin bagi hati. Akar iman tumbuh lewat doa, sakramen, dan kesetiaan dalam hal kecil. Hari ini, kenali satu \"batu\" atau \"duri\" yang menghambat pertumbuhan iman, dan ambil langkah kecil untuk menyingkirkannya.",
    refleksi: ["Apakah imanku sudah berakar, atau mudah layu saat kesulitan datang?", "Kekhawatiran atau kekayaan apa yang menghimpit firman dalam hidupku?"],
  },
  "ord-16-6": {
    renungan: "Seorang menabur benih yang baik, tetapi musuh datang malam hari menabur lalang. Ketika keduanya tumbuh, para hamba ingin segera mencabut lalang. Pemilik ladang melarang, karena takut gandum ikut tercabut; biarlah keduanya tumbuh sampai musim panen. Dalam dunia, Gereja, bahkan dalam diri sendiri, baik dan buruk bercampur. Kita sering tidak sabar dan ingin cepat memisahkan, menghakimi, atau menyingkirkan. Allah lebih sabar dan memberi waktu untuk bertobat; penghakiman adalah hak-Nya. Hari ini, bersabarlah terhadap kelemahan sesama dan diri sendiri, sambil terus memupuk gandum yang baik.",
    refleksi: ["Apakah aku terlalu cepat ingin \"mencabut lalang\" dalam diri orang lain?", "Gandum baik apa yang perlu kupupuk dalam diriku hari ini?"],
  },
  "ord-17-1": {
    renungan: "Kerajaan Surga seperti biji sesawi, benih terkecil, yang tumbuh menjadi pohon sehingga burung-burung bersarang di cabangnya. Ia juga seperti ragi yang dicampurkan seorang perempuan ke dalam tepung sampai seluruhnya beragi. Kedua gambaran ini berbicara tentang awal yang kecil dan tersembunyi, tetapi dampaknya meluas. Karya Allah sering bekerja diam-diam, seperti ragi yang tidak terlihat tetapi mengubah seluruh adonan. Kita tidak perlu menunggu melakukan hal besar untuk ikut membangun Kerajaan Allah. Hari ini, jadilah ragi yang baik lewat tindakan kecil: senyum tulus, kata yang meneguhkan, atau kesetiaan dalam tugas yang tidak dilihat orang.",
    refleksi: ["Tindakan kecil apa yang bisa menjadi \"ragi\" kebaikan hari ini?", "Apakah aku meremehkan awal yang kecil dalam karya Tuhan?"],
  },
  "ord-17-2": {
    renungan: "Para murid tidak malu bertanya ketika belum memahami perumpamaan tentang lalang di ladang. Yesus pun menjelaskannya dengan sabar: Anak Manusia menabur benih yang baik, tetapi di dunia ini benih baik dan lalang tumbuh berdampingan. Pemisahan bukan tugas kita, melainkan urusan Allah pada akhir zaman. Ini membebaskan kita dari godaan menghakimi sesama, sekaligus mengajak kita menjaga hati agar tetap menjadi benih yang baik. Hari ini, daripada sibuk menandai siapa \"lalang\" di sekitar kita, kita bisa bertanya dengan jujur seperti para murid dan membiarkan Yesus menjelaskan hidup kita sendiri.",
    refleksi: ["Apakah aku lebih sibuk menilai orang lain daripada merawat benih baik di hatiku?", "Hal apa dalam hidupku yang perlu kutanyakan dengan jujur kepada Yesus?"],
  },
  "ord-17-3": {
    renungan: "Dua perumpamaan pendek, satu nada yang sama: sukacita. Orang yang menemukan harta di ladang menjual segala miliknya \"karena sukacitanya\", bukan karena terpaksa. Pedagang yang menemukan mutiara berharga pun rela melepaskan semuanya. Kerajaan Surga bukan beban yang merampas hidup, melainkan harta yang membuat segala hal lain tampak kecil. Iman yang hidup lahir dari perjumpaan seperti ini. Mungkin hari ini kita tidak menjual apa pun, tetapi kita bisa memberi waktu terbaik untuk Tuhan: doa yang tenang, perhatian kepada sesama, atau melepaskan satu kebiasaan yang menghalangi kita mencintai-Nya dengan bebas.",
    refleksi: ["Apa \"mutiara\" yang sungguh berharga dalam hidupku, dan apakah Tuhan ada di sana?", "Apa yang perlu kulepaskan dengan gembira agar lebih dekat kepada-Nya?"],
  },
  "ord-17-4": {
    renungan: "Jala yang ditebarkan ke laut mengumpulkan segala jenis ikan. Gereja pun demikian: terbuka bagi semua orang, dengan segala kelemahan dan kebaikannya. Penilaian akhir tetap di tangan Allah. Yesus lalu berbicara tentang ahli Taurat yang menjadi murid Kerajaan Surga, yang seperti tuan rumah mengeluarkan harta yang baru dan yang lama dari perbendaharaannya. Iman tidak membuang warisan masa lalu, tetapi juga tidak takut pada pembaruan. Hari ini kita diajak setia pada tradisi iman yang kita terima, sambil membuka diri pada cara-cara baru untuk menghidupinya dengan kasih yang nyata.",
    refleksi: ["Harta lama apa dalam imanku yang perlu kusyukuri kembali?", "Di mana Tuhan sedang mengajakku membuka diri pada sesuatu yang baru?"],
  },
  "ord-17-5": {
    renungan: "Orang-orang Nazaret takjub mendengar Yesus, tetapi rasa kagum itu cepat berubah menjadi penolakan. \"Bukankah Dia ini anak seorang tukang kayu?\" Mereka merasa sudah terlalu mengenal-Nya, sehingga tidak mampu melihat karya Allah di dalam diri-Nya. Akibatnya, Yesus tidak melakukan banyak mukjizat di sana karena ketidakpercayaan mereka. Godaan yang sama bisa menimpa kita: Tuhan hadir melalui orang-orang yang biasa dan dekat, tetapi kita meremehkannya karena sudah terbiasa. Hari ini, cobalah mendengarkan dengan hati terbuka seseorang di rumah atau di tempat kerja yang selama ini kita anggap biasa saja.",
    refleksi: ["Siapa orang dekat yang sering kuremehkan padahal Tuhan berbicara melaluinya?", "Apakah keakraban dengan hal-hal rohani membuatku kurang percaya?"],
  },
  "ord-17-6": {
    renungan: "Kisah wafatnya Yohanes Pembaptis memperlihatkan dua sikap yang bertolak belakang. Yohanes berani berkata benar kepada penguasa, walau harus dipenjara. Herodes sebenarnya takut dan sedih, tetapi demi sumpah dan rasa malu di hadapan tamu-tamunya, ia membiarkan kejahatan terjadi. Gengsi dan takut kehilangan muka bisa membuat orang mengkhianati suara hatinya sendiri. Yohanes mengajak kita setia pada kebenaran dengan rendah hati dan tanpa kebencian. Hari ini, mungkin kita diminta berani menolak sesuatu yang salah, meski tidak populer, atau berani mengakui bahwa janji yang keliru tidak wajib ditepati.",
    refleksi: ["Kapan gengsi membuatku diam terhadap sesuatu yang salah?", "Di mana aku perlu lebih berani setia pada suara hatiku?"],
  },
  "ord-18-1": {
    renungan: "Yesus sebenarnya sedang mencari tempat sunyi setelah mendengar kabar duka, tetapi ketika melihat orang banyak, Ia tergerak oleh belas kasihan. Para murid ingin menyuruh orang pulang, namun Yesus berkata, \"Kamu, berilah mereka makanan.\" Lima roti dan dua ikan tampak tidak berarti, tetapi di tangan Yesus yang memberkati, semua orang dikenyangkan. Allah tidak menuntut kita memiliki banyak; Ia meminta kita menyerahkan yang sedikit itu. Hari ini, waktu, tenaga, atau perhatian kita yang terbatas dapat menjadi berkat bagi orang lain bila kita membawanya kepada Tuhan lebih dulu.",
    refleksi: ["Apa \"lima roti dan dua ikan\" yang bisa kuserahkan kepada Tuhan hari ini?", "Kepada siapa aku bisa menunjukkan belas kasihan secara nyata?"],
  },
  "ord-18-2": {
    renungan: "Di tengah gelombang dan angin sakal, Yesus datang berjalan di atas air dan berkata, \"Kuatkanlah hatimu.\" Petrus berani melangkah keluar dari perahu, tetapi ketika memandang angin, ia mulai tenggelam. Seruannya sederhana: \"Tuhan, selamatkan aku!\" Seketika Yesus mengulurkan tangan dan memegangnya. Iman tidak berarti kita tak pernah goyah; iman berarti tahu ke mana harus berseru ketika mulai tenggelam. Di akhir kisah, orang-orang membawa yang sakit hanya untuk menjamah jumbai jubah-Nya. Hari ini, apa pun badai kita, arahkan pandangan kepada Yesus, bukan kepada besarnya ombak.",
    refleksi: ["Badai apa yang sedang membuatku lebih memandang ombak daripada Yesus?", "Beranikah aku berseru dengan jujur, \"Tuhan, selamatkan aku\"?"],
  },
  "ord-18-3": {
    renungan: "Seorang ibu Kanaan, orang asing, tak berhenti memohon untuk anaknya. Yesus mula-mula diam, para murid malah ingin mengusirnya, tetapi perempuan itu sujud dan berkata, \"Tuhan, tolonglah aku!\" Dengan rendah hati sekaligus cerdik, ia menerima bahkan remah-remah. Yesus memuji imannya yang besar, dan anaknya sembuh. Doa yang tekun tidak lahir dari rasa berhak, tetapi dari kepercayaan bahwa kebaikan Tuhan cukup, bahkan dalam porsi kecil sekalipun. Hari ini, kita bisa terus mendoakan seseorang yang kita kasihi, tanpa menyerah meski jawaban belum terlihat.",
    refleksi: ["Untuk siapa aku perlu terus berdoa dengan tekun dan rendah hati?", "Apakah aku pernah menganggap seseorang terlalu \"asing\" untuk menerima kebaikan Tuhan?"],
  },
  "ord-18-4": {
    renungan: "\"Menurutmu, siapakah Aku ini?\" Pertanyaan Yesus itu tidak bisa dijawab dengan pendapat orang lain. Petrus menjawab dengan iman, \"Engkau adalah Mesias, Anak Allah yang hidup!\" dan Yesus menyebutnya batu karang tempat gereja dibangun. Namun, tak lama kemudian Petrus yang sama menolak jalan salib dan ditegur keras. Iman tumbuh bertahap: kita bisa benar dalam pengakuan, tetapi masih takut pada penderitaan. Allah tetap memakai Petrus yang belum sempurna. Hari ini, kita diajak menjawab pertanyaan Yesus secara pribadi dan mempercayakan kepada-Nya juga bagian hidup yang belum kita pahami.",
    refleksi: ["Bagaimana aku sendiri menjawab, \"Siapakah Yesus bagiku\"?", "Bagian mana dari jalan Tuhan yang masih sulit kuterima?"],
  },
  "ord-18-5": {
    renungan: "Yesus berbicara terus terang: mengikuti Dia berarti menyangkal diri, memikul salib, dan berjalan di belakang-Nya. Kedengarannya berat, tetapi Ia menambahkan bahwa orang yang kehilangan nyawanya karena Dia justru akan mendapatkannya. \"Apa untungnya jika seseorang memperoleh seluruh dunia, tetapi kehilangan nyawanya?\" Pertanyaan ini menantang ukuran sukses kita. Menyangkal diri bisa sesederhana mendahulukan kebutuhan orang lain, menahan kata-kata yang melukai, atau setia pada tugas kecil tanpa pujian. Salib yang dipikul bersama Yesus tidak menghancurkan, melainkan membuat hidup kita menjadi utuh dan bermakna.",
    refleksi: ["Salib apa yang hari ini dapat kupikul dengan lebih rela?", "Apakah ukuran suksesku sejalan dengan ukuran Yesus?"],
  },
  "ord-18-6": {
    renungan: "Seorang ayah berlutut memohon kesembuhan bagi anaknya, karena para murid tidak mampu menolongnya. Yesus menyembuhkan anak itu, lalu menjelaskan kepada murid-murid bahwa masalahnya adalah iman yang kecil. Iman sebesar biji sesawi pun, kata-Nya, cukup untuk memindahkan gunung. Yang menentukan bukan besarnya kemampuan kita, tetapi kepada siapa kita bersandar. Ayah itu memberi teladan: ketika usahanya gagal, ia tidak menyerah, tetapi datang langsung kepada Yesus. Hari ini, bawalah \"gunung\" yang terasa mustahil dalam hidupmu kepada Tuhan dalam doa, dengan iman sederhana yang terus bertumbuh.",
    refleksi: ["\"Gunung\" apa dalam hidupku yang perlu kuserahkan kepada Tuhan?", "Apakah aku lebih mengandalkan kemampuanku daripada iman?"],
  },
  "ord-19-1": {
    renungan: "Para murid sangat sedih mendengar Yesus berbicara tentang penderitaan dan wafat-Nya, seolah melupakan janji bahwa Ia akan dibangkitkan pada hari ketiga. Lalu muncul urusan pajak Bait Allah. Yesus, Sang Putra, sebenarnya bebas, tetapi Ia memilih membayar agar tidak menjadi batu sandungan, dan Allah menyediakannya secara tak terduga lewat seekor ikan. Kebebasan sejati tidak dipakai untuk menuntut hak, tetapi untuk menjaga kedamaian bersama. Hari ini, kita bisa melepaskan satu hak kecil demi kebaikan orang lain, sambil percaya bahwa Tuhan selalu menyediakan apa yang kita butuhkan.",
    refleksi: ["Hak kecil apa yang bisa kulepaskan demi kedamaian bersama?", "Apakah kesedihan membuatku lupa akan janji kebangkitan?"],
  },
  "ord-19-2": {
    renungan: "Para murid bertanya siapa yang terbesar, dan Yesus menjawab dengan menempatkan seorang anak kecil di tengah mereka. Kebesaran dalam Kerajaan Surga diukur dari kerendahan hati, bukan kedudukan. Yesus juga meminta kita tidak meremehkan \"anak-anak kecil ini\", yakni mereka yang lemah dan mudah terabaikan. Seperti gembala yang meninggalkan sembilan puluh sembilan domba untuk mencari satu yang tersesat, Bapa tidak menghendaki seorang pun hilang. Hari ini, perhatikan satu orang yang sering terlupakan di sekitarmu: sapa dia, dengarkan dia, atau doakan dia secara khusus.",
    refleksi: ["Siapa \"domba yang tersesat\" di sekitarku yang perlu kucari?", "Di mana aku masih mengejar kebesaran, bukan kerendahan hati?"],
  },
  "ord-19-3": {
    renungan: "Yesus memberi langkah yang sangat praktis ketika seorang saudara berbuat salah: bicaralah empat mata lebih dulu, bukan membicarakannya di belakang. Tujuannya bukan mempermalukan, melainkan \"mendapatkan saudaramu\" kembali. Teguran yang lahir dari kasih menjaga persekutuan. Yesus juga berjanji bahwa di mana dua atau tiga orang berkumpul dalam nama-Nya, Ia hadir di tengah mereka. Komunitas, keluarga, atau kelompok doa yang kecil sekalipun menjadi tempat Tuhan bekerja. Hari ini, jika ada masalah dengan seseorang, cobalah berbicara langsung dengan lembut, setelah lebih dulu membawanya dalam doa.",
    refleksi: ["Apakah aku lebih mudah membicarakan kesalahan orang daripada berbicara langsung kepadanya?", "Dengan siapa aku bisa berkumpul dan berdoa dalam nama Yesus?"],
  },
  "ord-19-4": {
    renungan: "Petrus mengira mengampuni tujuh kali sudah sangat murah hati. Yesus menjawab: sampai tujuh puluh kali tujuh kali, artinya tanpa batas. Perumpamaan tentang hamba yang dihapus utangnya sebesar sepuluh ribu talenta menunjukkan alasannya: kita sendiri telah diampuni jauh lebih banyak oleh Allah. Hamba itu menerima belas kasihan, tetapi menolak memberikannya kepada rekannya yang berutang sedikit. Pengampunan bukan berarti melupakan luka atau membenarkan kesalahan, tetapi melepaskan tuntutan balas dendam. Hari ini, ingatlah kerahiman Tuhan bagimu, lalu ambil satu langkah kecil untuk mengampuni seseorang dari hati.",
    refleksi: ["Siapa yang masih sulit kuampuni dari hati?", "Apakah aku sungguh menyadari betapa besar pengampunan Allah bagiku?"],
  },
  "ord-19-5": {
    renungan: "Orang Farisi bertanya tentang perceraian untuk mencobai Yesus. Ia membawa mereka kembali ke rencana Allah \"sejak semula\": laki-laki dan perempuan dipersatukan menjadi satu tubuh, dan apa yang dipersatukan Allah tidak boleh diceraikan manusia. Yesus tidak berhenti pada aturan, tetapi menunjuk pada hati yang keras sebagai akar masalah. Perkawinan adalah panggilan kudus yang dijaga dengan kesetiaan sehari-hari, dan setiap panggilan hidup, termasuk hidup selibat demi Kerajaan Surga, adalah anugerah. Hari ini, kita bisa mendoakan pasangan-pasangan yang sedang bergumul dan merawat kesetiaan dalam relasi kita sendiri.",
    refleksi: ["Bagaimana aku dapat merawat kesetiaan dalam panggilan hidupku hari ini?", "Keluarga mana yang perlu kudoakan secara khusus?"],
  },
  "ord-19-6": {
    renungan: "Murid-murid mengira anak-anak hanya mengganggu, tetapi Yesus berkata, \"Biarkanlah anak-anak kecil itu.\" Ia meletakkan tangan-Nya atas mereka dan memberkati mereka. Kerajaan Surga adalah milik orang yang seperti anak kecil: sederhana, percaya, dan bergantung penuh pada Bapa. Bacaan singkat ini juga mengingatkan tanggung jawab orang dewasa untuk tidak menghalangi anak-anak datang kepada Tuhan. Hari ini, kita bisa memberkati anak-anak di rumah, mengajak mereka berdoa dengan sederhana, atau sekadar memberi waktu dan perhatian penuh, seperti yang dilakukan Yesus.",
    refleksi: ["Apakah aku pernah menghalangi orang kecil datang kepada Tuhan?", "Bagaimana aku bisa lebih sederhana dan percaya seperti anak kecil?"],
  },
  "ord-20-1": {
    renungan: "Orang muda itu sudah menaati perintah-perintah, tetapi masih merasa ada yang kurang. Yesus menunjukkan langkah berikutnya: menjual miliknya, memberikannya kepada orang miskin, lalu mengikuti Dia. Orang itu pergi dengan sedih karena hartanya banyak. Kisah ini tidak berkata bahwa memiliki itu jahat, tetapi bahwa harta dapat mengikat hati sehingga kita tak bebas mengikut Yesus. Kesempurnaan bukan sekadar menghindari yang salah, melainkan memberi diri secara utuh. Hari ini, kenali satu hal yang terlalu kita genggam, lalu belajar melepaskannya sedikit demi sedikit dengan berbagi kepada yang membutuhkan.",
    refleksi: ["Apa yang terlalu kugenggam sehingga aku tidak bebas mengikut Yesus?", "Apa yang \"masih kurang\" dalam hidup imanku?"],
  },
  "ord-20-2": {
    renungan: "Unta melewati lubang jarum: gambaran yang membuat para murid terheran-heran. Kalau begitu, siapa yang bisa diselamatkan? Jawaban Yesus menenangkan: bagi manusia mustahil, tetapi bagi Allah semua hal mungkin. Keselamatan bukan hasil kekayaan atau usaha kita sendiri, melainkan anugerah. Petrus lalu bertanya apa yang akan diterima mereka yang meninggalkan segalanya, dan Yesus menjanjikan balasan berlipat ganda serta hidup kekal. Namun, Ia mengingatkan bahwa yang terdahulu bisa menjadi yang terakhir. Hari ini, kita belajar bersandar pada rahmat Allah, bukan pada apa yang kita miliki atau telah kita korbankan.",
    refleksi: ["Apakah aku diam-diam menghitung jasa dan pengorbananku di hadapan Tuhan?", "Di mana aku perlu lebih percaya bahwa bagi Allah semuanya mungkin?"],
  },
  "ord-20-3": {
    renungan: "Pemilik kebun anggur keluar berkali-kali, bahkan pada jam kesebelas, untuk memanggil pekerja. Saat upah dibagikan, semua menerima sedinar. Yang bekerja sejak pagi menggerutu, padahal mereka tidak dirugikan sedikit pun. Perumpamaan ini memperlihatkan kemurahan Allah yang melampaui hitungan kita. Ia tidak memperlakukan kita berdasarkan untung-rugi, tetapi berdasarkan kebaikan-Nya. Iri hati muncul ketika kita membandingkan diri dengan orang lain dan lupa bersyukur atas apa yang kita terima. Hari ini, cobalah bersukacita atas berkat yang diterima orang lain, termasuk mereka yang \"datang terlambat\" kepada Tuhan.",
    refleksi: ["Apakah aku iri ketika Tuhan bermurah hati kepada orang lain?", "Berkat apa yang kuterima hari ini yang layak kusyukuri?"],
  },
  "ord-20-4": {
    renungan: "Raja menyiapkan pesta perkawinan, tetapi para undangan menolak datang: ada yang sibuk dengan ladangnya, ada yang dengan usahanya. Undangan pun diperluas kepada semua orang di persimpangan jalan, baik maupun jahat. Allah mengundang setiap orang tanpa kecuali. Namun, ada seorang tamu yang tidak berpakaian pesta. Undangan itu cuma-cuma, tetapi menuntut tanggapan: hati yang mau diubah. Kesibukan sehari-hari bisa membuat kita mengabaikan undangan Tuhan, termasuk undangan ke Perjamuan Ekaristi. Hari ini, kita diajak menyambut undangan itu dan mengenakan \"pakaian pesta\" berupa kasih dan pertobatan.",
    refleksi: ["Kesibukan apa yang sering membuatku menolak undangan Tuhan?", "\"Pakaian pesta\" apa yang perlu kukenakan dalam hidupku sekarang?"],
  },
  "ord-20-5": {
    renungan: "Seorang ahli Taurat menguji Yesus dengan pertanyaan tentang perintah yang terpenting. Jawaban Yesus menyatukan dua hal yang tak terpisahkan: mengasihi Allah dengan segenap hati, jiwa, dan pikiran, dan mengasihi sesama seperti diri sendiri. Seluruh hukum dan para nabi bergantung pada keduanya. Kasih kepada Allah yang sejati selalu mengalir menjadi kasih kepada sesama, dan kasih kepada sesama menemukan sumbernya dalam Allah. Hari ini, kita bisa memulai dengan doa singkat yang tulus, lalu mewujudkannya dalam satu tindakan kasih kepada orang di dekat kita.",
    refleksi: ["Apakah kasihku kepada Allah tampak dalam caraku memperlakukan sesama?", "Siapa yang hari ini dapat kukasihi dengan cara yang nyata?"],
  },
  "ord-20-6": {
    renungan: "Yesus mengkritik para ahli Taurat dan orang Farisi yang mengajar dengan benar tetapi tidak melakukannya, yang meletakkan beban berat di pundak orang lain dan senang dilihat serta dihormati. Peringatan ini juga untuk kita. Mudah sekali menuntut orang lain tanpa mau menolong, atau melakukan kebaikan demi pujian. Yesus mengingatkan bahwa kita semua bersaudara, dan yang terbesar adalah yang melayani. Siapa yang meninggikan diri akan direndahkan, dan siapa yang merendahkan diri akan ditinggikan. Hari ini, lakukan satu kebaikan secara diam-diam, tanpa perlu diketahui siapa pun.",
    refleksi: ["Apakah aku melakukan apa yang kuajarkan kepada orang lain?", "Kebaikan apa yang bisa kulakukan hari ini tanpa mencari pujian?"],
  },
  "ord-21-1": {
    renungan: "Kata \"celakalah\" yang diulang Yesus terdengar keras, tetapi lahir dari keprihatinan. Para pemimpin agama itu menutup pintu Kerajaan Surga bagi orang lain, dan memakai doa panjang sebagai kepura-puraan. Mereka juga sibuk membuat aturan sumpah yang rumit, seolah emas lebih penting daripada Bait Allah yang menguduskannya. Kemunafikan terjadi ketika agama dipakai untuk kepentingan diri, bukan untuk membawa orang kepada Allah. Peringatan ini mengajak kita memeriksa diri: apakah cara kita beriman membuka pintu bagi orang lain, atau justru membuat mereka menjauh? Hari ini, biarlah kata dan sikap kita mempermudah orang mengenal Tuhan.",
    refleksi: ["Apakah cara hidup imanku membuka pintu atau menutupnya bagi orang lain?", "Di mana aku memakai hal rohani untuk kepentinganku sendiri?"],
  },
  "ord-21-2": {
    renungan: "Orang Farisi teliti memberi persepuluhan dari selasih dan jintan, tetapi mengabaikan yang lebih berat: keadilan, belas kasihan, dan iman. Yesus tidak meremehkan hal-hal kecil, namun menegaskan apa yang utama. Ia juga memakai gambaran cangkir yang bersih di luar tetapi kotor di dalam. Hidup rohani bukan soal penampilan rapi, melainkan hati yang dibersihkan Tuhan. Bila bagian dalam dibenahi, bagian luar akan ikut bersih. Hari ini, kita bisa memeriksa batin dengan jujur: apakah ada keserakahan, iri, atau dendam yang perlu dibawa ke dalam Sakramen Tobat?",
    refleksi: ["Apakah aku lebih peduli pada penampilan rohani daripada hati yang bersih?", "Bagaimana aku bisa mewujudkan keadilan dan belas kasihan hari ini?"],
  },
  "ord-21-3": {
    renungan: "Kuburan yang dicat putih tampak indah dari luar, tetapi di dalamnya penuh tulang dan kenajisan. Gambaran ini tajam: orang bisa tampak benar di mata manusia, sementara hatinya penuh kemunafikan. Yesus juga menyingkap sikap yang menghormati para nabi yang sudah wafat, tetapi menolak suara kenabian di masa kini. Bacaan ini mengajak kita jujur terhadap diri sendiri di hadapan Allah, yang melihat sampai ke dalam hati. Tidak perlu takut, sebab Tuhan melihat untuk menyembuhkan. Hari ini, beranilah mengakui satu kelemahan dalam doa, dan biarkan rahmat-Nya memulihkan bagian dalam hidupmu.",
    refleksi: ["Apa yang kusembunyikan di balik penampilan yang baik?", "Apakah aku terbuka pada teguran yang benar, meski tidak nyaman?"],
  },
  "ord-21-4": {
    renungan: "\"Berjaga-jagalah\" adalah pesan Yesus hari ini. Kita tidak tahu kapan Tuhan datang, dan karena itu yang penting bukan menghitung waktu, melainkan setia setiap hari. Yesus menggambarkan hamba yang setia dan bijaksana: ia tetap bekerja, memberi makan seisi rumah pada waktunya, meski tuannya belum kembali. Sebaliknya, hamba yang jahat berpikir tuannya masih lama, lalu bertindak semena-mena. Berjaga berarti melakukan tugas sehari-hari dengan kasih dan tanggung jawab, di rumah, di tempat kerja, di lingkungan. Hari ini, kerjakan tugasmu seakan Tuhan sendiri sedang datang menjumpaimu.",
    refleksi: ["Tugas sehari-hari apa yang perlu kujalankan dengan lebih setia?", "Apakah aku sering menunda pertobatan karena merasa masih ada waktu?"],
  },
  "ord-21-5": {
    renungan: "Sepuluh gadis menunggu mempelai, semuanya tertidur, tetapi hanya lima yang membawa minyak cadangan. Ketika mempelai datang di tengah malam, yang bodoh tidak siap, dan minyak itu tidak bisa dipinjam. Ada hal yang tidak dapat diwakilkan: relasi pribadi kita dengan Tuhan. Minyak itu dapat dimaknai sebagai iman, doa, dan kasih yang dirawat sedikit demi sedikit, bukan disiapkan mendadak. Hari ini, isilah \"pelita\" hidupmu dengan kebiasaan kecil yang setia: doa pagi, membaca Sabda, atau satu perbuatan kasih, agar kita siap menyambut Tuhan kapan pun Ia datang.",
    refleksi: ["Bagaimana aku merawat \"minyak\" imanku setiap hari?", "Apa yang membuatku lalai bersiap menyambut Tuhan?"],
  },
  "ord-21-6": {
    renungan: "Tuan itu mempercayakan talenta kepada hamba-hambanya, masing-masing sesuai kemampuannya. Dua hamba mengembangkannya, sedangkan yang ketiga menguburnya karena takut. Masalahnya bukan sedikitnya talenta, tetapi rasa takut yang membuatnya tidak berbuat apa-apa. Allah mempercayakan karunia kepada setiap orang: kemampuan, waktu, relasi, iman. Ia tidak menuntut hasil yang sama, tetapi kesetiaan dalam mengembangkan apa yang diberikan. Hari ini, kenali satu karunia yang mungkin selama ini kita sembunyikan karena takut gagal atau malu, lalu gunakan untuk melayani sesama dan memuliakan Tuhan.",
    refleksi: ["Talenta apa yang selama ini kukubur karena takut?", "Bagaimana aku dapat mengembangkan karuniaku untuk melayani sesama?"],
  },
  "ord-22-1": {
    renungan: "Di sinagoge Nazaret, Yesus membaca nubuat Yesaya: Roh Tuhan mengurapi-Nya untuk membawa kabar baik bagi orang miskin, pembebasan bagi tawanan, dan penglihatan bagi yang buta. Ia menyatakan bahwa nubuat itu genap hari itu. Namun, orang sekampung-Nya yang mula-mula kagum akhirnya marah dan hendak melemparkan-Nya dari tebing. Ketika Yesus mengingatkan bahwa rahmat Allah juga menjangkau orang asing, mereka menolak. Kabar Baik sering menantang batas-batas yang kita buat sendiri. Hari ini, kita diajak menerima Yesus sebagai pembebas dan ikut membawa kabar baik bagi mereka yang miskin dan tersisih.",
    refleksi: ["Batas apa yang kubuat sehingga rahmat Tuhan terasa hanya untuk kelompokku?", "Kepada siapa aku bisa membawa kabar baik hari ini?"],
  },
  "ord-22-2": {
    renungan: "Di Kapernaum, orang banyak kagum karena perkataan Yesus penuh kuasa. Bahkan roh jahat mengenali-Nya sebagai Yang Kudus dari Allah, dan cukup dengan satu perintah, roh itu keluar tanpa menyakiti orang yang dirasukinya. Sabda Yesus bukan sekadar nasihat, tetapi daya yang membebaskan. Kita pun mungkin terikat oleh rasa takut, kebiasaan buruk, atau kecemasan yang sulit dilepaskan. Yesus berkuasa atas semua itu. Hari ini, luangkan waktu mendengarkan Sabda-Nya dengan sungguh, dan serahkan kepada-Nya satu hal yang mengikat hatimu agar Ia membebaskannya.",
    refleksi: ["Hal apa yang masih mengikat hatiku dan perlu kuserahkan kepada Yesus?", "Apakah aku sungguh percaya bahwa Sabda Tuhan berkuasa mengubah hidupku?"],
  },
  "ord-22-3": {
    renungan: "Ibu mertua Simon disembuhkan dari demam, lalu segera bangun dan melayani. Kesembuhan dari Tuhan membuat kita mampu melayani. Sampai matahari terbenam, Yesus menyembuhkan banyak orang, meletakkan tangan-Nya atas mereka satu per satu. Keesokan paginya, Ia pergi ke tempat sunyi, lalu menolak ditahan di satu kota karena harus memberitakan Kerajaan Allah di tempat lain. Yesus seimbang: dekat dengan orang yang menderita, tetapi berakar dalam keheningan bersama Bapa dan setia pada perutusan-Nya. Hari ini, carilah waktu hening sejenak, lalu jadikan berkat yang kita terima sebagai tenaga untuk melayani.",
    refleksi: ["Bagaimana aku membalas kebaikan Tuhan dengan melayani sesama?", "Kapan aku menyediakan waktu hening bersama Tuhan di tengah kesibukan?"],
  },
  "ord-22-4": {
    renungan: "Simon sudah bekerja keras semalaman tanpa hasil, tetapi ia tetap berkata, \"karena Engkau yang menyuruh, aku akan menebarkan jala ini.\" Hasilnya, ikan begitu banyak hingga jala hampir koyak. Simon tersungkur dan mengakui dirinya orang berdosa, tetapi Yesus berkata, \"Jangan takut,\" dan memanggilnya menjadi penjala manusia. Tuhan sering bekerja justru saat kita lelah dan merasa gagal. Ketaatan sederhana membuka ruang bagi rahmat-Nya. Kelemahan kita tidak menghalangi panggilan-Nya. Hari ini, cobalah sekali lagi melakukan hal baik yang sempat kita tinggalkan, kali ini karena percaya pada sabda-Nya.",
    refleksi: ["Di mana aku perlu \"menebarkan jala\" sekali lagi atas sabda Tuhan?", "Apakah rasa tidak layak membuatku ragu menjawab panggilan-Nya?"],
  },
  "ord-22-5": {
    renungan: "Orang-orang heran mengapa murid-murid Yesus tidak berpuasa seperti yang lain. Yesus menjawab bahwa selama mempelai ada bersama mereka, inilah saat sukacita. Ia lalu berbicara tentang anggur baru yang membutuhkan kantong baru. Kehadiran Yesus membawa sesuatu yang segar, yang tidak cukup ditambalkan pada cara lama yang kaku. Puasa dan doa tetap penting, tetapi semuanya berpusat pada relasi dengan Sang Mempelai. Kita sering betah dengan \"anggur lama\" dan takut berubah. Hari ini, biarkan Tuhan memperbarui hati kita, agar kita mampu menampung kasih-Nya yang selalu baru.",
    refleksi: ["Kebiasaan lama apa yang membuatku sulit menerima pembaruan dari Tuhan?", "Apakah imanku dijalani dengan sukacita karena Yesus hadir?"],
  },
  "ord-22-6": {
    renungan: "Murid-murid yang lapar memetik gandum pada hari Sabat, dan orang Farisi segera mempersoalkannya. Yesus mengingatkan kisah Daud yang makan roti persembahan ketika lapar, lalu menegaskan bahwa Anak Manusia adalah Tuhan atas hari Sabat. Hukum Allah diberikan untuk kehidupan, bukan untuk membebani atau menghakimi. Kita mudah terjebak pada aturan sampai lupa kebutuhan nyata orang di depan kita. Namun, Yesus tidak menghapus hari Tuhan; Ia mengembalikan maknanya. Hari ini, kita dapat menjadikan hari Tuhan sebagai waktu untuk beribadah dengan sukacita dan memperhatikan mereka yang membutuhkan.",
    refleksi: ["Apakah aku lebih cepat menghakimi daripada memahami kebutuhan orang lain?", "Bagaimana aku menjadikan hari Minggu sungguh hari Tuhan?"],
  },
  "ord-23-1": {
    renungan: "Pada hari Sabat, ada seorang yang tangan kanannya lumpuh, dan orang-orang mengawasi Yesus untuk mencari alasan menuduh-Nya. Yesus menyuruh orang itu berdiri di tengah, lalu bertanya: mana yang boleh pada hari Sabat, berbuat baik atau berbuat jahat? Ia menyembuhkan orang itu, sementara lawan-lawan-Nya justru dipenuhi amarah. Kebaikan tidak perlu menunggu situasi aman atau persetujuan semua orang. Yesus memilih menempatkan orang yang menderita di pusat perhatian. Hari ini, kita bisa berani melakukan kebaikan yang dibutuhkan seseorang, walaupun mungkin disalahpahami orang lain.",
    refleksi: ["Kebaikan apa yang kutunda karena takut dinilai orang?", "Siapa yang perlu kutempatkan \"di tengah\" perhatianku hari ini?"],
  },
  "ord-23-2": {
    renungan: "Sebelum memilih dua belas rasul, Yesus berdoa sepanjang malam. Keputusan penting lahir dari keheningan bersama Bapa. Yang dipilih-Nya pun orang-orang biasa dengan latar belakang berbeda, termasuk Yudas Iskariot yang kelak berkhianat. Setelah itu, Yesus turun dan melayani orang banyak yang datang untuk mendengar dan disembuhkan; ada kuasa yang keluar dari-Nya. Doa dan pelayanan saling menghidupi. Kita juga menghadapi keputusan, besar maupun kecil, setiap hari. Hari ini, sebelum menentukan sesuatu yang penting, luangkan waktu berdoa dan mohon terang Roh Kudus.",
    refleksi: ["Keputusan apa yang perlu kubawa dalam doa sebelum kuambil?", "Apakah pelayananku berakar pada doa?"],
  },
  "ord-23-3": {
    renungan: "Yesus menyebut berbahagia orang miskin, yang lapar, yang menangis, dan yang dibenci karena Anak Manusia. Sebaliknya, Ia memperingatkan mereka yang kaya, kenyang, tertawa, dan dipuji semua orang. Ukuran-Nya terbalik dari ukuran dunia. Allah dekat dengan yang kekurangan dan terluka, sedangkan rasa puas diri dapat membuat kita tidak lagi membutuhkan Dia. Ini tidak berarti penderitaan itu baik, tetapi bahwa Tuhan tidak meninggalkan yang menderita. Hari ini, kita bisa memeriksa di mana rasa nyaman membuat kita tertutup, dan membuka hati bagi mereka yang sedang lapar atau berduka.",
    refleksi: ["Apakah kenyamanan hidup membuatku merasa tidak membutuhkan Tuhan?", "Siapa yang sedang berduka atau kekurangan yang bisa kudampingi?"],
  },
  "ord-23-4": {
    renungan: "\"Kasihilah musuhmu dan berbuat baiklah kepada orang yang membencimu.\" Perintah Yesus ini terdengar mustahil, tetapi Ia menunjukkan dasarnya: Bapa sendiri baik terhadap orang yang tidak tahu berterima kasih dan yang jahat. Kita diminta murah hati seperti Bapa murah hati, tidak menghakimi, mengampuni, dan memberi. Takaran yang kita pakai akan dipakai pula bagi kita. Kasih seperti ini tidak mengandalkan perasaan, tetapi keputusan, sering dimulai dengan mendoakan orang yang menyakiti kita. Hari ini, sebutlah dalam doa nama seseorang yang sulit kita kasihi, dan mohon berkat baginya.",
    refleksi: ["Siapa \"musuh\" yang perlu kudoakan dengan tulus hari ini?", "Takaran apa yang kupakai ketika menilai orang lain?"],
  },
  "ord-23-5": {
    renungan: "Yesus bertanya, dapatkah orang buta menuntun orang buta? Keduanya akan jatuh ke dalam lubang. Lalu Ia memakai gambaran yang hampir lucu: melihat serbuk kayu di mata saudara, tetapi tidak menyadari balok di mata sendiri. Kita cenderung tajam melihat kesalahan orang lain dan buta terhadap kesalahan sendiri. Yesus tidak melarang kita menolong sesama memperbaiki diri, tetapi meminta kita mulai dari pertobatan pribadi. Murid yang mau belajar dari Gurunya akan semakin jernih memandang. Hari ini, sebelum mengkritik seseorang, berhentilah sejenak dan tanyakan dengan jujur apa \"balok\" yang perlu kita bereskan lebih dahulu.",
    refleksi: ["Kesalahan apa pada orang lain yang sebenarnya juga ada pada diriku?", "Apakah aku mau terus belajar dari Yesus sebagai Guruku?"],
  },
  "ord-23-6": {
    renungan: "Pohon dikenal dari buahnya, dan apa yang keluar dari mulut berasal dari apa yang memenuhi hati. Yesus mengajak kita memperhatikan sumber, bukan hanya hasil. Ia lalu bertanya mengapa kita memanggil-Nya \"Tuhan, Tuhan\", tetapi tidak melakukan apa yang Ia katakan. Orang yang mendengar dan melakukan sabda-Nya seperti membangun rumah di atas batu: tetap berdiri ketika banjir datang. Iman yang hanya diucapkan mudah runtuh oleh badai hidup. Hari ini, pilih satu sabda Yesus yang sudah lama kita ketahui, lalu lakukan dengan sungguh, sehingga dasar hidup kita semakin kokoh.",
    refleksi: ["Buah apa yang tampak dari hatiku melalui kata-kataku akhir-akhir ini?", "Sabda Yesus mana yang sudah kudengar tetapi belum kulakukan?"],
  },
  "ord-24-1": {
    renungan: "Seorang perwira Romawi peduli pada budaknya yang sakit dan memohon pertolongan Yesus. Para tua-tua Yahudi menyebutnya layak, tetapi ia sendiri merasa tidak layak menerima Yesus di rumahnya. Ia hanya meminta sepatah kata, karena percaya pada kuasa sabda Yesus. Yesus kagum dan memuji imannya. Kerendahan hati dan iman perwira ini kita gemakan dalam setiap Misa sebelum menyambut Komuni. Hari ini, ketika merasa tidak layak, kita tidak perlu menjauh dari Tuhan; justru di situlah kita bisa datang dengan rendah hati dan percaya bahwa satu sabda-Nya cukup untuk menyembuhkan.",
    refleksi: ["Apakah rasa tidak layak membuatku menjauh atau justru mendekat kepada Tuhan?", "Siapa yang sedang sakit dan perlu kubawa kepada Yesus dalam doa?"],
  },
  "ord-24-2": {
    renungan: "Di gerbang kota Nain, Yesus berjumpa dengan seorang janda yang mengantar jenazah anak tunggalnya. Tanpa diminta, Ia tergerak oleh belas kasihan dan berkata, \"Jangan menangis.\" Ia menyentuh usungan dan membangkitkan pemuda itu, lalu menyerahkannya kepada ibunya. Allah tidak jauh dari air mata kita; Ia melihat, mendekat, dan bertindak. Orang banyak pun memuliakan Allah karena Ia telah melawat umat-Nya. Hari ini, kita bisa menjadi tanda belas kasihan Tuhan bagi seseorang yang sedang berduka, dengan kunjungan, pesan singkat, atau kehadiran yang sederhana.",
    refleksi: ["Siapa yang sedang berduka dan membutuhkan kehadiranku?", "Apakah aku percaya Tuhan melihat air mataku?"],
  },
  "ord-24-3": {
    renungan: "Yesus membandingkan angkatan-Nya dengan anak-anak di pasar yang tidak pernah puas: diajak menari tidak mau, diajak meratap pun tidak mau. Yohanes Pembaptis yang berpuasa dikatakan kerasukan setan, sedangkan Anak Manusia yang makan dan minum disebut pelahap. Hati yang tertutup selalu menemukan alasan untuk menolak. Kita pun kadang mencari-cari kekurangan pembawa pesan supaya tidak perlu berubah. Namun, hikmat Allah dibenarkan oleh mereka yang menerimanya. Hari ini, mari mendengarkan Tuhan yang berbicara lewat berbagai cara, tanpa menuntut agar Ia selalu sesuai dengan selera kita.",
    refleksi: ["Alasan apa yang sering kupakai untuk menolak ajakan Tuhan?", "Apakah aku lebih sibuk mengkritik pembawa pesan daripada mendengar pesannya?"],
  },
  "ord-24-4": {
    renungan: "Seorang perempuan berdosa membasuh kaki Yesus dengan air mata, menyekanya dengan rambut, dan meminyakinya. Simon, tuan rumah, diam-diam menghakimi. Yesus lalu bercerita tentang dua orang yang utangnya dihapuskan, dan bertanya siapa yang lebih mengasihi. Perempuan itu banyak mengasihi karena menyadari betapa besar pengampunan yang diterimanya. Yesus berkata kepadanya bahwa imannya telah menyelamatkannya, dan menyuruhnya pergi dengan damai. Orang yang merasa tidak banyak membutuhkan ampun sering sedikit mengasihi. Hari ini, ingatlah kerahiman Tuhan dalam hidupmu, lalu biarkan rasa syukur itu menjadi kasih yang nyata.",
    refleksi: ["Apakah aku seperti Simon yang menghakimi, atau seperti perempuan itu yang bersyukur?", "Bagaimana pengampunan Tuhan dapat kuungkapkan dalam kasih hari ini?"],
  },
  "ord-24-5": {
    renungan: "Dalam beberapa kalimat singkat, Lukas mencatat bahwa bersama Yesus dan kedua belas rasul ada sejumlah perempuan yang telah disembuhkan-Nya: Maria Magdalena, Yohana, Susana, dan banyak lagi. Mereka melayani rombongan itu dengan kekayaan mereka sendiri. Pengalaman disembuhkan berubah menjadi kesetiaan dan kemurahan hati. Pelayanan mereka mungkin tidak tercatat panjang, tetapi menopang pewartaan Kerajaan Allah. Banyak karya Gereja hari ini juga hidup dari pelayanan sederhana yang tidak terlihat. Hari ini, kita bisa bersyukur atas mereka yang diam-diam melayani, dan ikut menyumbangkan waktu atau harta untuk karya Tuhan.",
    refleksi: ["Penyembuhan apa yang pernah kualami dari Tuhan, dan bagaimana aku membalasnya?", "Pelayanan tersembunyi apa yang bisa kuberikan bagi Gereja?"],
  },
  "ord-24-6": {
    renungan: "Benih yang sama jatuh di tanah yang berbeda: di pinggir jalan, di tanah berbatu, di antara semak duri, dan di tanah yang baik. Yesus menjelaskan bahwa benih itu adalah firman Allah. Ada hati yang mudah lupa, ada yang cepat bersemangat tetapi tidak berakar, ada yang tercekik oleh kekhawatiran, kekayaan, dan kenikmatan hidup. Tanah yang baik adalah hati yang mendengar, menyimpan firman, dan berbuah dalam ketekunan. Setiap kita mungkin memiliki keempat jenis tanah itu. Hari ini, sediakan waktu tenang untuk mendengar Sabda, lalu bersihkan satu \"semak duri\" yang menghimpit hatimu.",
    refleksi: ["Jenis tanah manakah hatiku akhir-akhir ini?", "Kekhawatiran apa yang sedang mencekik benih firman dalam diriku?"],
  },
  "ord-25-1": {
    renungan: "Tak ada orang yang menyalakan pelita lalu menutupinya. Pelita ditaruh di tempat tinggi supaya semua orang yang masuk dapat melihat terang. Iman yang kita terima juga bukan untuk disembunyikan, melainkan untuk menerangi orang lain melalui cara hidup kita. Yesus lalu menambahkan, \"perhatikanlah bagaimana kamu mendengar\". Semakin sungguh kita mendengar dan menghidupi Sabda, semakin kaya kita dalam rahmat. Terang itu tidak perlu mencolok; bisa berupa kejujuran, kesabaran, atau keramahan di tengah keluarga dan tempat kerja. Hari ini, biarkan satu perbuatan kecil menjadi terang yang menunjukkan kebaikan Tuhan.",
    refleksi: ["Di mana aku cenderung menyembunyikan terang imanku?", "Bagaimana caraku mendengarkan Sabda Tuhan akhir-akhir ini?"],
  },
  "ord-25-2": {
    renungan: "Ketika diberitahu bahwa ibu dan saudara-saudara-Nya menunggu di luar, Yesus berkata bahwa ibu dan saudara-saudara-Nya adalah mereka yang mendengarkan firman Allah dan melakukannya. Ini bukan penolakan terhadap keluarga-Nya. Maria sendiri adalah teladan utama orang yang mendengar dan melakukan firman. Yesus membuka lingkaran keluarga-Nya selebar-lebarnya: siapa pun bisa menjadi bagian keluarga Allah. Hubungan itu tidak ditentukan oleh darah, tetapi oleh ketaatan yang penuh kasih. Hari ini, kita diajak tidak berhenti pada mendengar, tetapi melangkah melakukan satu kehendak Tuhan yang jelas bagi kita.",
    refleksi: ["Firman Tuhan mana yang sudah kudengar dan perlu kulakukan hari ini?", "Bagaimana aku bisa meneladan Maria dalam mendengar dan melakukan firman?"],
  },
  "ord-25-3": {
    renungan: "Yesus mengutus kedua belas murid dengan kuasa untuk mewartakan Kerajaan Allah dan menyembuhkan, tetapi dengan bekal yang sangat sedikit: tanpa tongkat, tas, roti, uang, atau baju dua helai. Mereka belajar bergantung pada Allah dan pada keramahan orang yang menerima mereka. Perutusan tidak bergantung pada kelengkapan sarana, tetapi pada kepercayaan kepada Dia yang mengutus. Bila ditolak, mereka cukup mengebaskan debu dan melanjutkan perjalanan, tanpa dendam. Hari ini, kita bisa mewartakan kasih Tuhan dengan apa adanya, tanpa menunggu merasa siap sepenuhnya.",
    refleksi: ["Apa yang membuatku menunda melayani karena merasa belum cukup siap?", "Bagaimana aku menanggapi penolakan dengan hati yang tetap damai?"],
  },
  "ord-25-4": {
    renungan: "Herodes bingung mendengar tentang Yesus. Ia sudah memenggal Yohanes, tetapi kini muncul Seseorang yang membuatnya bertanya, \"siapakah Orang ini?\" Ia pun sangat ingin bertemu dengan Yesus. Namun, keinginan Herodes lebih didorong oleh rasa penasaran dan kegelisahan daripada kerinduan untuk bertobat. Banyak orang juga ingin tahu tentang Yesus, sekadar sebagai bahan perbincangan. Yesus tidak cukup dikenal dari kabar orang; Ia perlu dijumpai dengan hati yang terbuka. Hari ini, bawalah rasa ingin tahumu tentang Tuhan ke dalam doa, dan biarkan pertemuan itu mengubahmu.",
    refleksi: ["Apakah aku mengenal Yesus hanya dari kata orang, atau dari perjumpaan pribadi?", "Kegelisahan apa dalam hatiku yang sebenarnya merindukan Tuhan?"],
  },
  "ord-25-5": {
    renungan: "Saat berdoa seorang diri, Yesus bertanya kepada para murid siapa Dia menurut orang banyak, lalu menurut mereka sendiri. Petrus menjawab, \"Engkau adalah Kristus dari Allah.\" Namun, Yesus segera menjelaskan bahwa Mesias itu harus menanggung banyak penderitaan, ditolak, dibunuh, dan dibangkitkan pada hari ketiga. Mengenal Yesus berarti juga menerima jalan salib-Nya, bukan hanya kuasa dan mukjizat-Nya. Pertanyaan ini muncul dalam suasana doa, seolah mengingatkan bahwa jawaban iman lahir dari kedekatan dengan-Nya. Hari ini, mari menjawab secara pribadi dalam doa: siapakah Yesus bagiku di tengah suka dan duka hidupku?",
    refleksi: ["Siapakah Yesus bagiku hari ini?", "Apakah aku mau mengikuti Yesus juga di jalan penderitaan?"],
  },
  "ord-25-6": {
    renungan: "Ketika semua orang kagum akan kuasa Allah, Yesus justru mengingatkan murid-murid bahwa Anak Manusia akan diserahkan ke tangan manusia. Mereka tidak memahami, dan mereka takut bertanya. Betapa manusiawinya: ketika sesuatu terasa berat atau membingungkan, kita lebih memilih diam dan menghindar. Padahal Yesus selalu terbuka untuk ditanya. Iman tidak berarti memahami segala sesuatu, tetapi berani membawa kebingungan kita kepada-Nya. Hari ini, jika ada hal dalam hidup atau dalam iman yang sulit kita mengerti, jangan takut menyampaikannya dengan jujur dalam doa.",
    refleksi: ["Pertanyaan apa yang selama ini takut kubawa kepada Tuhan?", "Apakah aku hanya mencari Tuhan saat semuanya mengagumkan?"],
  },
  "ord-26-1": {
    renungan: "Para murid bertengkar tentang siapa yang terbesar. Yesus tahu isi hati mereka dan menempatkan seorang anak kecil di samping-Nya: siapa yang menerima anak ini dalam nama-Nya, menerima Dia. Yang paling hina, kata-Nya, dialah yang terutama. Lalu Yohanes melaporkan orang lain yang mengusir setan dalam nama Yesus, dan Yesus menjawab agar tidak dicegah, sebab siapa pun yang tidak melawan mereka, ia memihak mereka. Ambisi dan rasa memiliki sering membuat kita bersaing, bahkan dalam pelayanan. Hari ini, kita bisa bersukacita atas kebaikan yang dilakukan orang lain, walaupun bukan dari kelompok kita.",
    refleksi: ["Apakah aku sulit bersukacita atas kebaikan yang dilakukan orang di luar kelompokku?", "Siapa yang \"paling kecil\" yang perlu kusambut dengan hormat?"],
  },
  "ord-26-2": {
    renungan: "Yesus meneguhkan hati untuk pergi ke Yerusalem, tempat Ia akan menyerahkan diri. Ketika sebuah desa Samaria menolak-Nya, Yakobus dan Yohanes ingin menurunkan api dari langit. Yesus menegur mereka, lalu pergi ke desa lain. Penolakan sering memancing keinginan membalas, bahkan dengan alasan membela Tuhan. Namun, Yesus tidak memaksa dan tidak membalas; Ia tetap setia pada jalan-Nya. Keteguhan sejati bukan kekerasan, melainkan kesetiaan yang tenang. Hari ini, ketika ditolak atau disalahpahami, kita bisa memilih untuk tidak membalas, dan tetap melangkah dengan damai.",
    refleksi: ["Bagaimana reaksiku ketika ditolak atau tidak dihargai?", "Jalan apa yang perlu kujalani dengan hati yang teguh?"],
  },
  "ord-26-3": {
    renungan: "Tiga orang ingin mengikut Yesus, tetapi masing-masing menghadapi kenyataan yang menantang. Yesus mengingatkan bahwa Anak Manusia tidak punya tempat untuk beristirahat, dan bahwa orang yang meletakkan tangan pada bajak tetapi masih menoleh ke belakang tidak layak bagi Kerajaan Allah. Kata-kata ini tegas, bukan karena Yesus meremehkan keluarga atau kewajiban, melainkan karena mengikuti Dia menuntut hati yang tidak terbagi. Sering kita berkata \"nanti dulu\" kepada Tuhan, menunggu semua urusan beres. Hari ini, kenali satu hal yang selalu kita jadikan alasan menunda, lalu ambil langkah kecil untuk menjawab panggilan-Nya sekarang.",
    refleksi: ["Alasan apa yang sering kupakai untuk menunda mengikut Yesus?", "Apa yang membuatku terus menoleh ke belakang?"],
  },
  "ord-26-4": {
    renungan: "Yesus mengutus tujuh puluh murid berdua-dua, seperti anak domba di tengah serigala. Ia mengawali dengan ajakan berdoa, sebab panenan banyak tetapi pekerja sedikit. Mereka diminta berjalan ringan, membawa salam damai ke setiap rumah, dan mewartakan bahwa Kerajaan Allah sudah dekat. Perutusan bukan hanya tugas imam atau biarawan; setiap orang yang dibaptis diutus ke tengah keluarga, tempat kerja, dan lingkungannya. Kita tidak diutus sendirian, tetapi bersama saudara seiman. Hari ini, bawalah damai Tuhan ke tempat yang kita datangi, dan doakan agar Tuhan memanggil lebih banyak pekerja bagi panenan-Nya.",
    refleksi: ["Ke mana Tuhan mengutusku membawa damai hari ini?", "Sudahkah aku mendoakan panggilan para pekerja di ladang Tuhan?"],
  },
  "ord-26-5": {
    renungan: "Yesus menyesali kota-kota seperti Khorazim, Betsaida, dan Kapernaum. Mereka telah menyaksikan banyak mukjizat, tetapi tidak bertobat. Semakin banyak rahmat yang diterima, semakin besar pula tanggung jawab untuk menanggapinya. Kita pun telah menerima banyak: Sabda, sakramen, komunitas iman. Namun, rahmat bisa menjadi hal biasa yang tidak lagi menggerakkan hati. Yesus juga menegaskan bahwa siapa mendengarkan utusan-Nya, mendengarkan Dia. Hari ini, ingatlah satu karya Tuhan dalam hidupmu, lalu tanggapi dengan pertobatan nyata, sekecil apa pun.",
    refleksi: ["Rahmat apa yang sudah kuterima tetapi belum kutanggapi dengan sungguh?", "Apakah aku mendengarkan Tuhan yang berbicara melalui Gereja dan sesama?"],
  },
  "ord-26-6": {
    renungan: "Para murid kembali dengan sukacita karena setan-setan tunduk kepada mereka. Yesus mengarahkan sukacita itu: bersukacitalah karena namamu tertulis di surga. Keberhasilan pelayanan memang menggembirakan, tetapi dasar sukacita sejati adalah kita dikasihi dan dikenal oleh Allah. Yesus sendiri bersukacita dalam Roh Kudus dan memuji Bapa yang menyatakan rahasia Kerajaan kepada orang kecil. Hari ini, ketika pekerjaan berhasil atau gagal, ingatlah bahwa nilai diri kita tidak ditentukan oleh hasil, melainkan oleh kasih Bapa. Ucapkan syukur atas hal-hal sederhana yang Tuhan nyatakan kepadamu.",
    refleksi: ["Pada apa sukacitaku paling banyak bergantung?", "Apakah aku cukup rendah hati untuk menerima hal-hal yang Tuhan nyatakan?"],
  },
  "ord-27-1": {
    renungan: "Ahli Taurat itu tahu jawabannya: kasihi Allah dan sesama. Tetapi ia bertanya, \"Siapakah sesamaku?\" Yesus menjawab dengan kisah orang Samaria yang menolong korban perampokan, sementara imam dan orang Lewi lewat begitu saja. Pertanyaan pun dibalik: bukan siapa yang layak kutolong, tetapi bagaimana aku menjadi sesama bagi yang membutuhkan. Orang Samaria itu melihat, tergerak, mendekat, merawat, dan membayar. Kasih yang nyata membutuhkan waktu, tenaga, dan biaya. Hari ini, perhatikan seseorang yang \"terluka di pinggir jalan\" hidup kita, dan lakukan satu langkah untuk menolongnya.",
    refleksi: ["Siapa yang sering kulewati begitu saja padahal membutuhkan pertolongan?", "Apa yang menghalangiku untuk tergerak dan mendekat?"],
  },
  "ord-27-2": {
    renungan: "Marta sibuk melayani, Maria duduk di dekat kaki Yesus mendengarkan. Ketika Marta mengeluh, Yesus menjawab dengan lembut bahwa ia khawatir dan memusingkan diri dengan banyak hal, padahal hanya satu hal yang penting, dan Maria telah memilih bagian yang terbaik. Yesus tidak meremehkan pelayanan Marta, tetapi mengingatkan bahwa pelayanan tanpa mendengarkan bisa berubah menjadi beban dan keluhan. Kita membutuhkan keduanya, dengan urutan yang benar. Hari ini, sebelum tenggelam dalam kesibukan, duduklah sejenak di hadapan Tuhan dan dengarkan Dia; biarlah pekerjaan kita mengalir dari perjumpaan itu.",
    refleksi: ["Apakah kesibukanku membuatku khawatir dan lupa mendengarkan Tuhan?", "Kapan aku dapat \"duduk di dekat kaki Yesus\" hari ini?"],
  },
  "ord-27-3": {
    renungan: "\"Tuhan, ajarilah kami berdoa.\" Permintaan para murid ini lahir setelah melihat Yesus berdoa. Yesus mengajarkan doa yang sederhana namun dalam: memanggil Allah sebagai Bapa, menguduskan nama-Nya, merindukan kerajaan-Nya, memohon makanan secukupnya, pengampunan, dan perlindungan dari pencobaan. Doa ini mengajak kita percaya seperti anak, sekaligus terlibat: kita mohon diampuni sebagaimana kita mengampuni. Bapa Kami bisa diucapkan begitu cepat sampai kita lupa maknanya. Hari ini, cobalah berdoa Bapa Kami perlahan, berhenti pada satu permohonan yang paling menyentuh hidupmu saat ini.",
    refleksi: ["Permohonan mana dalam doa Bapa Kami yang paling kubutuhkan sekarang?", "Apakah aku sungguh mengampuni seperti yang kuucapkan dalam doa?"],
  },
  "ord-27-4": {
    renungan: "Seorang sahabat datang tengah malam meminta roti, dan karena kegigihannya ia akhirnya diberi. Yesus lalu berkata: mintalah, carilah, ketoklah. Jika ayah duniawi tahu memberi yang baik kepada anaknya, terlebih lagi Bapa di surga akan memberikan Roh Kudus kepada mereka yang meminta. Doa yang tekun bukan untuk memaksa Allah, melainkan membentuk hati kita agar percaya dan terbuka. Pemberian terbaik yang Allah janjikan bukan selalu apa yang kita minta, tetapi Roh Kudus sendiri. Hari ini, teruslah mengetuk dalam doa, dan mohonlah secara khusus Roh Kudus untuk membimbing hidupmu.",
    refleksi: ["Doa apa yang membuatku hampir menyerah?", "Sudahkah aku memohon Roh Kudus dalam doaku?"],
  },
  "ord-27-5": {
    renungan: "Ada yang menuduh Yesus mengusir setan dengan kuasa Beelzebul. Yesus menjawab bahwa kerajaan yang terpecah akan runtuh, dan bahwa jika Ia mengusir setan dengan kuasa Allah, maka Kerajaan Allah sudah datang. Ia juga mengingatkan tentang roh jahat yang kembali ke rumah yang bersih tetapi kosong, membawa roh lain yang lebih jahat. Membuang kebiasaan buruk saja tidak cukup; hati perlu diisi dengan kehadiran Allah, doa, dan perbuatan baik. Hari ini, ketika kita berusaha meninggalkan satu dosa, isilah ruang itu dengan kebiasaan baru yang mendekatkan kita kepada Tuhan.",
    refleksi: ["Apa yang mengisi hatiku setelah aku meninggalkan sesuatu yang buruk?", "Di mana aku perlu memilih dengan tegas berada di pihak Yesus?"],
  },
  "ord-27-6": {
    renungan: "Seorang perempuan memuji ibu yang melahirkan dan menyusui Yesus. Yesus menjawab, \"Berbahagialah orang-orang yang mendengarkan firman Allah dan menaatinya.\" Ini bukan meremehkan Maria; justru Maria berbahagia terutama karena ia mendengar dan menaati firman Allah. Kebahagiaan yang Yesus tawarkan terbuka bagi siapa saja, tidak tergantung pada hubungan darah atau kedudukan istimewa. Yang dibutuhkan adalah telinga yang mendengar dan hati yang taat. Hari ini, kita dapat meneladan Maria: menyimpan satu sabda Tuhan dalam hati dan menghidupinya dalam tindakan sederhana.",
    refleksi: ["Firman Allah mana yang ingin kutaati hari ini?", "Bagaimana Maria dapat menjadi teladanku dalam mendengarkan Tuhan?"],
  },
  "ord-28-1": {
    renungan: "Orang banyak menuntut tanda, tetapi Yesus berkata bahwa tidak akan diberikan tanda selain tanda Yunus. Orang Niniwe bertobat karena pewartaan Yunus, dan Ratu dari Selatan datang dari jauh untuk mendengar hikmat Salomo. Sekarang, di hadapan mereka ada yang lebih besar daripada Yunus dan Salomo. Kita pun kadang menunggu tanda luar biasa sebelum bertobat, padahal Tuhan sudah hadir dalam Sabda, Ekaristi, dan sesama. Hari ini, jangan menunggu tanda yang spektakuler; tanggapilah kehadiran Yesus yang sederhana dengan pertobatan yang nyata.",
    refleksi: ["Tanda apa yang selama ini kutunggu sebelum aku mau berubah?", "Di mana Yesus sudah hadir dalam hidupku tetapi kurang kusadari?"],
  },
  "ord-28-2": {
    renungan: "Orang Farisi heran karena Yesus tidak mencuci tangan sebelum makan. Yesus menjawab bahwa membersihkan bagian luar cangkir tidak ada artinya bila bagian dalam penuh keserakahan. Allah yang menciptakan bagian luar juga menciptakan bagian dalam. Yesus lalu memberikan jalan keluar yang mengejutkan: berikanlah sedekah dari apa yang ada di dalam, maka semuanya akan menjadi bersih. Kemurahan hati menyucikan hati. Hari ini, daripada sibuk menjaga citra, kita bisa membersihkan hati dengan memberi kepada orang lain, entah waktu, perhatian, maupun harta.",
    refleksi: ["Apakah aku lebih memperhatikan penampilan daripada isi hatiku?", "Kepada siapa aku bisa bermurah hati hari ini?"],
  },
  "ord-28-3": {
    renungan: "Yesus menegur orang Farisi yang teliti memberi persepuluhan dari tanaman kebun tetapi mengabaikan keadilan dan kasih Allah. Mereka juga suka tempat terhormat dan pujian. Ahli Taurat pun ditegur karena meletakkan beban berat pada orang lain tanpa menyentuhnya sedikit pun. Agama bisa berubah menjadi daftar aturan yang menekan orang lain, sementara kita sendiri tidak tergerak menolong. Yesus mengembalikan iman pada intinya: keadilan dan kasih Allah. Hari ini, periksalah apakah kita menuntut orang lain lebih dari diri sendiri, dan ringankan beban satu orang dengan tindakan nyata.",
    refleksi: ["Beban siapa yang dapat kuringankan hari ini?", "Apakah aku mengutamakan keadilan dan kasih dalam hidup imanku?"],
  },
  "ord-28-4": {
    renungan: "Yesus menegur mereka yang membangun makam para nabi tetapi tetap menolak suara para nabi. Menghormati masa lalu bisa menjadi cara halus untuk menghindari pertobatan di masa kini. Ahli Taurat juga dikecam karena mengambil kunci pengetahuan: mereka sendiri tidak masuk dan menghalangi orang lain. Teguran ini membuat mereka makin memusuhi Yesus. Kebenaran sering tidak nyaman, dan reaksi pertama kita bisa jadi bertahan atau menyerang. Hari ini, ketika ada kata-kata yang menegur hati kita, berhentilah sejenak, tanyakan apakah Tuhan sedang berbicara, dan jangan menutup pintu bagi orang lain untuk mengenal-Nya.",
    refleksi: ["Bagaimana aku menanggapi teguran yang benar tetapi tidak enak didengar?", "Apakah aku pernah menghalangi orang lain mendekat kepada Tuhan?"],
  },
  "ord-28-5": {
    renungan: "Yesus memperingatkan tentang ragi orang Farisi, yaitu kemunafikan. Apa yang tersembunyi akan dinyatakan. Lalu Ia berkata kepada murid-murid-Nya sebagai sahabat: jangan takut kepada mereka yang hanya dapat membunuh tubuh. Allah tidak melupakan seekor burung pipit pun, dan bahkan rambut kepala kita terhitung semuanya. Kita lebih berharga daripada banyak burung pipit. Ketakutan sering membuat orang hidup bermuka dua, menyesuaikan diri demi aman. Namun, orang yang yakin dikasihi Allah dapat hidup jujur dan berani. Hari ini, biarlah kesadaran bahwa Tuhan memperhatikan hal terkecil dalam hidup kita mengusir rasa takut.",
    refleksi: ["Ketakutan apa yang membuatku tidak jujur menjadi diriku sendiri?", "Apakah aku percaya bahwa Tuhan memperhatikan hal-hal kecil dalam hidupku?"],
  },
  "ord-28-6": {
    renungan: "Yesus mengajak murid-murid-Nya untuk berani mengakui Dia di hadapan orang lain. Ketika mereka dihadapkan kepada para pemimpin dan penguasa, mereka tidak perlu cemas memikirkan pembelaan diri, sebab Roh Kudus akan mengajarkan apa yang harus dikatakan pada saat itu. Bersaksi tentang iman tidak bergantung pada kepandaian berbicara, tetapi pada keterbukaan kepada Roh Kudus. Kita mungkin tidak dihadapkan ke pengadilan, tetapi bisa merasa malu menunjukkan iman di kantor, sekolah, atau media sosial. Hari ini, beranilah menunjukkan iman dengan sederhana, misalnya berdoa sebelum makan atau membela yang lemah.",
    refleksi: ["Di mana aku masih malu mengakui imanku?", "Apakah aku mengandalkan Roh Kudus saat harus bersaksi?"],
  },
  "ord-29-1": {
    renungan: "Seseorang meminta Yesus menengahi soal warisan, tetapi Yesus menunjuk akar masalahnya: keserakahan. Hidup seseorang tidak bergantung pada banyaknya harta. Orang kaya dalam perumpamaan sibuk membangun lumbung yang lebih besar dan berkata kepada jiwanya untuk bersenang-senang, padahal malam itu juga nyawanya diambil. Ia tidak salah karena panennya berlimpah, tetapi karena hanya memikirkan dirinya sendiri dan tidak kaya di hadapan Allah. Hari ini, kita bisa bertanya untuk siapa kita bekerja dan menabung, lalu menyisihkan sebagian berkat kita bagi mereka yang membutuhkan.",
    refleksi: ["Apakah aku sedang membangun \"lumbung\" bagi diriku sendiri saja?", "Bagaimana aku bisa menjadi kaya di hadapan Allah?"],
  },
  "ord-29-2": {
    renungan: "Yesus meminta kita siap seperti hamba yang pinggangnya berikat dan pelitanya tetap menyala, menunggu tuannya pulang dari pesta. Lalu muncul kejutan yang indah: tuan itu sendiri akan mengikat pinggangnya, mempersilakan hamba-hambanya duduk, dan melayani mereka. Allah yang kita tunggu bukanlah tuan yang menakutkan, melainkan Tuhan yang datang untuk melayani. Berjaga bukan berarti hidup dalam kecemasan, tetapi dalam kesiapsiagaan yang penuh kasih. Hari ini, jagalah \"pelita\" hati tetap menyala lewat doa singkat dan kesetiaan pada tugas, sambil menantikan perjumpaan dengan Tuhan.",
    refleksi: ["Apa yang membuat pelita hatiku mulai redup?", "Bagaimana aku menantikan Tuhan: dengan cemas atau dengan penuh harap?"],
  },
  "ord-29-3": {
    renungan: "Pencuri datang pada saat yang tidak diduga, demikian juga Anak Manusia. Petrus bertanya apakah perumpamaan itu untuk para murid saja, dan Yesus menjawab dengan gambaran pengurus yang setia dan bijaksana, yang memberi makan seisi rumah pada waktunya. Ia menegaskan: siapa yang diberi banyak, akan dituntut banyak. Setiap karunia, jabatan, dan kesempatan adalah titipan yang suatu hari dipertanggungjawabkan. Kesetiaan terlihat dalam hal sehari-hari ketika tidak ada yang mengawasi. Hari ini, periksalah tanggung jawab yang dipercayakan kepada kita, dan jalankan dengan jujur seakan Tuhan datang saat ini juga.",
    refleksi: ["Apa yang telah banyak dipercayakan Tuhan kepadaku?", "Apakah aku tetap setia ketika tidak ada yang mengawasi?"],
  },
  "ord-29-4": {
    renungan: "Yesus berkata bahwa Ia datang melemparkan api ke bumi dan merindukan api itu menyala. Ia juga berbicara tentang baptisan yang harus Ia jalani, yaitu penderitaan-Nya. Lalu kata-kata yang mengejutkan: Ia membawa pertentangan, bahkan dalam keluarga. Yesus tidak menghendaki permusuhan, tetapi mengikut Dia menuntut pilihan yang kadang tidak dipahami orang terdekat. Api kasih-Nya memurnikan, membakar sikap suam-suam kuku. Hari ini, mohonlah agar api Roh Kudus menyala dalam hati kita, dan tetaplah setia pada kebenaran dengan lembut, juga ketika pilihan iman kita disalahpahami.",
    refleksi: ["Apakah imanku menyala atau suam-suam kuku?", "Bagaimana aku tetap setia dengan lembut ketika orang terdekat tidak memahami pilihanku?"],
  },
  "ord-29-5": {
    renungan: "Orang pandai membaca tanda-tanda cuaca: awan di barat berarti hujan, angin selatan berarti panas. Namun, Yesus heran mengapa mereka tidak mampu menafsirkan zaman ini, yaitu saat Allah hadir di tengah mereka. Ia juga menasihati agar segera berdamai dengan lawan selagi masih di jalan, sebelum terlambat. Kita sering cermat membaca tren, harga, dan peluang, tetapi kurang peka membaca panggilan Tuhan dalam peristiwa hidup. Hari ini, luangkan waktu untuk merenungkan apa yang Tuhan katakan melalui kejadian-kejadian di sekitar kita, dan jika ada perselisihan, ambillah langkah pertama untuk berdamai.",
    refleksi: ["Apa yang sedang Tuhan katakan melalui peristiwa hidupku akhir-akhir ini?", "Dengan siapa aku perlu segera berdamai?"],
  },
  "ord-29-6": {
    renungan: "Orang-orang menceritakan tragedi kepada Yesus, mungkin dengan anggapan bahwa para korban lebih berdosa. Yesus menolak cara berpikir itu dan justru mengajak semua orang bertobat. Lalu Ia bercerita tentang pohon ara yang tiga tahun tidak berbuah. Pemilik kebun ingin menebangnya, tetapi pengurus kebun memohon waktu satu tahun lagi untuk mencangkul dan memberi pupuk. Inilah kesabaran Allah: Ia memberi kesempatan dan merawat kita agar berbuah. Namun, kesempatan itu bukan untuk disia-siakan. Hari ini, jangan menghakimi penderitaan orang lain, melainkan gunakan waktu yang diberikan Tuhan untuk bertobat dan berbuah.",
    refleksi: ["Apakah aku cepat menghakimi penderitaan orang lain?", "Buah apa yang Tuhan harapkan dari hidupku tahun ini?"],
  },
  "ord-30-1": {
    renungan: "Selama delapan belas tahun seorang perempuan hidup bungkuk dan tidak dapat berdiri tegak. Yesus melihatnya, memanggilnya, dan menumpangkan tangan atasnya; seketika ia berdiri tegak dan memuliakan Allah. Kepala rumah ibadat marah karena penyembuhan itu terjadi pada hari Sabat, tetapi Yesus menegaskan bahwa perempuan itu, keturunan Abraham, layak dibebaskan justru pada hari itu. Banyak orang di sekitar kita mungkin \"bungkuk\" oleh beban, malu, atau luka lama. Yesus melihat mereka. Hari ini, kita bisa membantu seseorang berdiri tegak kembali dengan perhatian, penghargaan, atau pertolongan yang tulus.",
    refleksi: ["Beban apa yang membuatku sulit berdiri tegak di hadapan Tuhan?", "Siapa yang dapat kubantu untuk bangkit kembali?"],
  },
  "ord-30-2": {
    renungan: "Kerajaan Allah seperti biji sesawi yang tumbuh menjadi pohon tempat burung bersarang, dan seperti ragi yang mengkhamirkan seluruh adonan. Kedua gambaran ini berbicara tentang awal yang kecil dan karya yang diam-diam. Allah bekerja sering kali tanpa sorotan: dalam doa yang setia, kebaikan sederhana, dan kesabaran sehari-hari. Kita mungkin merasa usaha kita terlalu kecil untuk mengubah keadaan. Namun, di tangan Allah, yang kecil dapat menjadi tempat berteduh bagi banyak orang. Hari ini, lakukan satu kebaikan kecil dengan setia, dan percayakan pertumbuhannya kepada Tuhan.",
    refleksi: ["Kebaikan kecil apa yang bisa kutaburkan hari ini?", "Apakah aku sabar menunggu Tuhan menumbuhkan karya-Nya?"],
  },
  "ord-30-3": {
    renungan: "Seseorang bertanya apakah sedikit saja orang yang diselamatkan. Yesus tidak menjawab dengan angka, tetapi dengan ajakan: berjuanglah masuk melalui pintu yang sempit. Sekadar pernah makan dan minum bersama Dia atau mendengar Dia mengajar tidak cukup, bila hidup tidak berubah. Namun, Yesus juga menyatakan bahwa orang akan datang dari timur dan barat, utara dan selatan, untuk duduk dalam Kerajaan Allah. Pintu itu sempit, tetapi terbuka bagi semua. Hari ini, daripada menebak siapa yang selamat, mari kita sungguh-sungguh menapaki jalan iman dengan kesetiaan dan kerendahan hati.",
    refleksi: ["Apakah aku merasa aman hanya karena dekat dengan hal-hal rohani?", "Apa \"pintu sempit\" yang perlu kulewati dalam hidupku sekarang?"],
  },
  "ord-30-4": {
    renungan: "Beberapa orang Farisi memperingatkan Yesus bahwa Herodes ingin membunuh-Nya. Yesus tidak gentar; Ia akan terus mengusir setan dan menyembuhkan, lalu melanjutkan perjalanan ke Yerusalem. Kemudian Ia meratapi kota itu dengan gambaran yang lembut: seperti induk ayam yang ingin mengumpulkan anak-anaknya di bawah sayapnya, tetapi mereka tidak mau. Di sini kita melihat keteguhan sekaligus kelembutan Yesus. Ancaman tidak menghentikan kasih-Nya, dan penolakan tidak memadamkan kerinduan-Nya. Hari ini, biarkan diri kita dikumpulkan di bawah sayap-Nya, dan setialah pada tugas baik kita meski ada tantangan.",
    refleksi: ["Apakah aku membiarkan Tuhan merangkul dan melindungiku?", "Ancaman atau ketakutan apa yang membuatku ingin berhenti berbuat baik?"],
  },
  "ord-30-5": {
    renungan: "Pada hari Sabat, di rumah seorang pemimpin Farisi, semua mata mengawasi Yesus. Di hadapan-Nya ada seorang yang sakit busung air. Yesus bertanya apakah boleh menyembuhkan pada hari Sabat, tetapi mereka diam. Ia pun menyembuhkan orang itu, lalu bertanya siapa yang tidak segera menarik anak atau sapi jantannya yang jatuh ke sumur pada hari Sabat. Kasih tidak menunggu situasi ideal atau aturan yang longgar. Kita sering lebih cepat menolong urusan kita sendiri daripada kebutuhan orang lain. Hari ini, jangan diam saat ada yang membutuhkan; ulurkan tangan dengan berani.",
    refleksi: ["Kapan aku memilih diam padahal seharusnya menolong?", "Apakah aku memperlakukan kebutuhan orang lain sepenting kebutuhanku sendiri?"],
  },
  "ord-30-6": {
    renungan: "Yesus memperhatikan para tamu yang berebut tempat terhormat. Ia menasihati agar mereka memilih tempat paling rendah, sehingga tuan rumah sendiri yang akan mempersilakan naik. Ini bukan sekadar sopan santun, melainkan cara Allah: siapa yang meninggikan diri akan direndahkan, dan siapa yang merendahkan diri akan ditinggikan. Kerendahan hati berarti tahu siapa diri kita di hadapan Allah dan tidak perlu berebut pengakuan. Dalam keluarga, kantor, atau pelayanan Gereja, godaan mencari tempat utama selalu ada. Hari ini, pilihlah dengan rela tempat yang sederhana, dan biarkan Tuhan yang memberi penghargaan.",
    refleksi: ["Di mana aku masih berebut tempat atau pengakuan?", "Bagaimana aku bisa melayani dari \"tempat yang rendah\" hari ini?"],
  },
  "ord-31-1": {
    renungan: "Yesus memberi nasihat yang tidak biasa kepada tuan rumah: bila mengadakan perjamuan, undanglah orang miskin, cacat, lumpuh, dan buta, yang tidak dapat membalas. Kebaikan yang sejati tidak dihitung sebagai investasi untuk dibalas. Kita sering berbuat baik kepada mereka yang bisa membalas, dan itu wajar, tetapi Yesus mengajak melangkah lebih jauh: memberi dengan cuma-cuma seperti Allah memberi kepada kita. Balasannya akan diterima pada kebangkitan orang-orang benar. Hari ini, lakukan satu kebaikan bagi seseorang yang tidak mungkin membalasnya, tanpa mengharapkan ucapan terima kasih.",
    refleksi: ["Kepada siapa aku bisa berbuat baik tanpa mengharapkan balasan?", "Apakah kebaikanku masih sering penuh perhitungan?"],
  },
  "ord-31-2": {
    renungan: "Seseorang mengadakan perjamuan besar, tetapi para undangan memberi berbagai alasan: membeli ladang, membeli lembu, baru menikah. Semua alasan itu terdengar wajar, namun intinya mereka menganggap undangan itu kurang penting. Tuan rumah lalu mengundang orang miskin, cacat, buta, dan lumpuh dari jalan-jalan, bahkan dari pinggir kota, agar rumahnya penuh. Allah tidak berhenti mengundang; kasih-Nya justru melebar kepada yang tersisih. Kita pun bisa menolak undangan Tuhan bukan karena benci, tetapi karena sibuk. Hari ini, jangan biarkan urusan yang baik menggeser yang terpenting: perjumpaan dengan Tuhan.",
    refleksi: ["Alasan apa yang sering kupakai untuk menolak undangan Tuhan?", "Apakah aku ikut mengundang yang tersisih ke perjamuan kasih Tuhan?"],
  },
  "ord-31-3": {
    renungan: "Yesus menoleh kepada orang banyak yang mengikuti-Nya dan berbicara tegas: menjadi murid berarti mengutamakan Dia di atas segalanya, bahkan keluarga dan nyawa sendiri, serta memikul salib. Kata \"membenci\" di sini menunjukkan prioritas, bukan permusuhan. Yesus lalu memberi contoh orang yang membangun menara dan raja yang hendak berperang: keduanya harus menghitung lebih dulu. Mengikut Yesus bukan keputusan sesaat karena ikut-ikutan, tetapi pilihan sadar yang dipikirkan dan diperbarui setiap hari. Hari ini, periksalah apa yang sebenarnya menduduki tempat pertama dalam hidup kita.",
    refleksi: ["Apa yang sebenarnya menduduki tempat pertama dalam hidupku?", "Sudahkah aku sungguh menghitung harga mengikut Yesus?"],
  },
  "ord-31-4": {
    renungan: "Orang Farisi menggerutu karena Yesus menerima orang berdosa dan makan bersama mereka. Yesus menjawab dengan dua perumpamaan: gembala yang mencari seekor domba yang hilang, dan perempuan yang mencari dirham yang hilang sampai ketemu. Keduanya bersukacita dan mengajak tetangga bergembira. Demikianlah sukacita di surga atas satu orang berdosa yang bertobat. Allah tidak menunggu kita kembali sendiri; Ia mencari dengan tekun. Hari ini, bersyukurlah karena kita dicari dan ditemukan oleh-Nya, lalu bersikaplah ramah kepada mereka yang sedang berusaha kembali kepada Tuhan.",
    refleksi: ["Apakah aku ikut bersukacita ketika orang lain bertobat?", "Bagaimana aku pernah merasakan dicari dan ditemukan Tuhan?"],
  },
  "ord-31-5": {
    renungan: "Perumpamaan tentang bendahara yang tidak jujur sering membingungkan. Ia memboroskan harta tuannya, lalu cepat bertindak memotong utang para debitur agar punya teman setelah dipecat. Yesus tentu tidak memuji ketidakjujurannya, tetapi kecerdikannya dalam mempersiapkan masa depan. Anak-anak dunia sering lebih cerdik dalam urusan mereka daripada anak-anak terang. Kita diajak sama tekunnya mempersiapkan hidup kekal, dengan memakai apa yang ada pada kita untuk kebaikan. Hari ini, pikirkan bagaimana waktu, kemampuan, dan harta kita dapat digunakan dengan bijak untuk membangun persahabatan dan kebaikan yang bertahan.",
    refleksi: ["Apakah aku setekun orang dunia dalam mengusahakan hal-hal rohani?", "Bagaimana aku dapat memakai milikku dengan bijak untuk kebaikan?"],
  },
  "ord-31-6": {
    renungan: "Siapa setia dalam perkara kecil, setia juga dalam perkara besar. Yesus mengingatkan bahwa harta duniawi adalah ujian kesetiaan, dan bahwa tak seorang pun dapat mengabdi kepada dua tuan: Allah dan mamon. Orang Farisi yang mencintai uang menertawakan-Nya, tetapi Yesus berkata bahwa Allah mengenal hati. Uang bukan masalah, tetapi bisa menjadi tuan yang diam-diam menguasai keputusan kita. Hari ini, perhatikan hal kecil yang menunjukkan kesetiaan: kejujuran dalam laporan, ketepatan janji, cara kita memakai uang. Di sanalah kita memilih siapa yang kita layani.",
    refleksi: ["Dalam hal kecil apa aku perlu lebih jujur dan setia?", "Apakah uang diam-diam menjadi tuan dalam keputusanku?"],
  },
  "ord-32-1": {
    renungan: "Yesus menyampaikan tiga pesan singkat: jangan menjadi batu sandungan bagi orang kecil, tegurlah saudara yang berdosa dan ampunilah bila ia menyesal, bahkan tujuh kali sehari. Para rasul merasa tidak sanggup dan berkata, \"Tambahkanlah iman kami!\" Yesus menjawab bahwa iman sebesar biji sesawi pun cukup untuk hal yang tampak mustahil. Mengampuni berulang kali memang berat, tetapi itu bukan hasil kekuatan kita sendiri; itu buah iman kepada Allah yang lebih dulu mengampuni. Hari ini, mohonlah iman yang sederhana untuk mengampuni seseorang yang terus menguji kesabaran kita.",
    refleksi: ["Siapa yang perlu kuampuni lagi dan lagi?", "Apakah hidupku menjadi batu sandungan bagi orang lain?"],
  },
  "ord-32-2": {
    renungan: "Yesus berbicara tentang hamba yang pulang dari ladang dan tetap melayani tuannya. Setelah melakukan semua yang diperintahkan, hamba itu hanya berkata bahwa ia hamba yang tidak berguna, yang sekadar melakukan apa yang wajib. Perumpamaan ini membebaskan kita dari sikap menghitung jasa di hadapan Allah. Pelayanan bukan cara untuk menuntut balasan, tetapi tanggapan atas kasih yang sudah lebih dulu kita terima. Orang yang melayani dengan rendah hati tidak mudah kecewa ketika tidak dipuji. Hari ini, lakukan tugas kita dengan setia dan gembira, tanpa merasa Tuhan atau orang lain berutang kepada kita.",
    refleksi: ["Apakah aku melayani dengan diam-diam menuntut pujian atau balasan?", "Tugas apa yang bisa kulakukan hari ini dengan rendah hati?"],
  },
  "ord-32-3": {
    renungan: "Sepuluh orang kusta berseru kepada Yesus, dan dalam perjalanan menuju para imam, mereka semua menjadi tahir. Namun, hanya satu yang kembali, memuliakan Allah dengan suara nyaring dan bersujud di kaki Yesus, dan ia seorang Samaria. Yesus bertanya di mana yang sembilan lainnya. Syukur menyempurnakan penyembuhan; kepada orang itu Yesus berkata bahwa imannya telah menyelamatkannya. Kita sering cepat memohon tetapi lambat bersyukur. Hari ini, sebelum menutup hari, sebutkan dalam doa beberapa berkat yang kita terima, dan sampaikan terima kasih kepada orang yang telah menolong kita.",
    refleksi: ["Berkat apa yang kuterima tetapi belum kusyukuri?", "Kepada siapa aku perlu mengucapkan terima kasih hari ini?"],
  },
  "ord-32-4": {
    renungan: "Orang Farisi bertanya kapan Kerajaan Allah datang. Yesus menjawab bahwa Kerajaan itu tidak datang dengan tanda-tanda yang dapat diamati, sebab Kerajaan Allah ada di tengah-tengah mereka. Ia memperingatkan agar murid-murid tidak terburu-buru mengikuti seruan bahwa Kerajaan itu ada di sini atau di sana. Sebelum kemuliaan-Nya, Anak Manusia harus banyak menderita dan ditolak. Kerajaan Allah hadir dalam diri Yesus dan dalam kasih yang nyata, bukan dalam sensasi. Hari ini, carilah tanda-tanda Kerajaan Allah dalam hal sederhana: perdamaian di rumah, kejujuran di tempat kerja, dan kepedulian kepada yang lemah.",
    refleksi: ["Di mana aku melihat Kerajaan Allah hadir di sekitarku?", "Apakah aku mudah terbawa sensasi rohani dan melupakan kasih yang sederhana?"],
  },
  "ord-32-5": {
    renungan: "Yesus mengingatkan zaman Nuh dan Lot: orang-orang makan, minum, menikah, berdagang, dan membangun, sampai bencana datang tiba-tiba. Kegiatan itu tidak salah, tetapi mereka hidup seolah-olah Allah tidak ada. Yesus juga meminta kita mengingat istri Lot, yang menoleh ke belakang karena masih terikat pada apa yang ditinggalkan. Kedatangan Anak Manusia akan memisahkan orang yang berada di tempat yang sama. Hari ini, kita diajak menjalani rutinitas biasa dengan hati yang tetap terarah kepada Tuhan, tidak terikat pada harta, dan siap kapan saja dipanggil-Nya.",
    refleksi: ["Apakah rutinitasku membuatku lupa bahwa Tuhan akan datang?", "Apa yang masih membuatku ingin menoleh ke belakang?"],
  },
  "ord-32-6": {
    renungan: "Yesus menceritakan perumpamaan ini agar murid-murid selalu berdoa dan tidak berkecil hati. Seorang janda terus-menerus datang kepada hakim yang tidak takut kepada Allah, sampai akhirnya hakim itu membela haknya. Jika hakim yang lalim saja akhirnya menolong, terlebih lagi Allah akan membela orang-orang pilihan-Nya yang berseru siang dan malam. Yesus mengakhiri dengan pertanyaan: apakah Anak Manusia akan mendapati iman di bumi? Ketekunan dalam doa adalah tanda iman yang hidup. Hari ini, jangan berhenti mendoakan hal yang belum terjawab; Tuhan mendengar, walau jawaban-Nya datang dengan cara dan waktu-Nya.",
    refleksi: ["Doa apa yang membuatku hampir berkecil hati?", "Apakah Tuhan akan mendapati iman yang tekun dalam diriku?"],
  },
  "ord-33-1": {
    renungan: "Seorang buta di dekat Yerikho mendengar bahwa Yesus lewat dan berseru, \"Yesus, Anak Daud, kasihanilah aku!\" Orang-orang menyuruhnya diam, tetapi ia berseru semakin keras. Yesus berhenti, memanggilnya, dan bertanya apa yang ia inginkan. Ia menjawab bahwa ia ingin melihat, dan Yesus menyembuhkannya karena imannya. Orang itu lalu mengikuti Yesus sambil memuliakan Allah. Kadang suara di sekitar, bahkan suara dalam diri sendiri, menyuruh kita berhenti berdoa. Hari ini, sampaikan kepada Yesus dengan jujur apa yang sungguh kita butuhkan, terutama terang untuk melihat jalan-Nya.",
    refleksi: ["Jika Yesus bertanya apa yang kuinginkan, apa jawabanku?", "Suara apa yang sering membuatku berhenti berseru kepada Tuhan?"],
  },
  "ord-33-2": {
    renungan: "Zakheus, kepala pemungut cukai yang kaya, berlari dan memanjat pohon ara karena ingin melihat Yesus. Ia tidak menyangka Yesus berhenti, memanggil namanya, dan ingin menumpang di rumahnya. Orang-orang menggerutu, tetapi perjumpaan itu mengubah Zakheus: ia memberikan separuh hartanya kepada orang miskin dan mengembalikan berlipat ganda kepada yang pernah ia peras. Yesus menyatakan bahwa keselamatan telah datang ke rumah itu, sebab Anak Manusia datang untuk mencari dan menyelamatkan yang hilang. Hari ini, beranilah mencari Yesus, walau harus melewati rasa malu, dan biarkan perjumpaan itu membuahkan pertobatan nyata.",
    refleksi: ["Apa \"pohon ara\" yang perlu kupanjat untuk berjumpa dengan Yesus?", "Pertobatan nyata apa yang ingin kulakukan setelah berjumpa dengan-Nya?"],
  },
  "ord-33-3": {
    renungan: "Seorang bangsawan memberikan uang mina kepada pelayan-pelayannya sebelum pergi untuk diangkat menjadi raja. Ada yang mengembangkannya berlipat, tetapi ada yang menyimpannya dalam sapu tangan karena takut kepada tuannya. Ketakutan dan gambaran keliru tentang tuan membuat pelayan itu tidak berbuat apa-apa. Allah mempercayakan banyak hal kepada kita, dan Ia ingin kita berani mengembangkannya dengan setia. Perumpamaan ini juga mengingatkan bahwa Kerajaan Allah tidak datang dalam sekejap; ada masa untuk bekerja. Hari ini, gunakan satu karunia yang dipercayakan kepada kita, sekecil apa pun, untuk kebaikan sesama.",
    refleksi: ["Gambaran apa tentang Allah yang membuatku takut melangkah?", "Karunia apa yang masih kusimpan dan belum kukembangkan?"],
  },
  "ord-33-4": {
    renungan: "Ketika mendekati Yerusalem dan melihat kota itu, Yesus menangis. Ia berduka karena kota itu tidak mengenali apa yang mendatangkan damai sejahtera dan tidak menyadari saat Allah melawatnya. Air mata Yesus menunjukkan hati Allah yang tidak acuh terhadap penolakan manusia, tetapi tetap mengasihi dan bersedih. Kita pun bisa melewatkan saat-saat Tuhan datang menawarkan damai: dalam rekonsiliasi, nasihat, atau kesempatan untuk bertobat. Hari ini, mari peka terhadap kunjungan Tuhan, dan memilih jalan damai dalam keluarga dan komunitas kita.",
    refleksi: ["Kapan Tuhan menawarkan damai kepadaku, tetapi aku tidak menyadarinya?", "Di mana aku perlu memilih jalan damai hari ini?"],
  },
  "ord-33-5": {
    renungan: "Yesus masuk ke Bait Allah dan mengusir para pedagang, sambil mengingatkan bahwa rumah-Nya adalah rumah doa, bukan sarang perampok. Setelah itu, Ia mengajar di sana setiap hari, dan rakyat terpikat mendengarkan-Nya, walaupun para pemimpin mencari cara untuk membinasakan-Nya. Gereja, dan juga hati kita sebagai bait Roh Kudus, dapat dipenuhi kesibukan dan kepentingan diri sampai doa tersingkir. Yesus ingin membersihkan ruang itu agar Sabda-Nya kembali didengar. Hari ini, sediakan ruang hening untuk Tuhan, dan jagalah sikap hormat saat berada di gereja.",
    refleksi: ["Apa yang memenuhi hatiku sehingga tidak ada lagi ruang untuk doa?", "Bagaimana aku dapat menjaga gereja dan hatiku sebagai rumah doa?"],
  },
  "ord-33-6": {
    renungan: "Orang Saduki, yang tidak percaya akan kebangkitan, mengajukan kisah tujuh bersaudara yang menikahi perempuan yang sama. Yesus menjawab bahwa hidup di zaman yang akan datang tidak sama dengan hidup sekarang; mereka yang layak akan menjadi seperti malaikat dan menjadi anak-anak Allah. Ia juga menegaskan bahwa Allah bukan Allah orang mati, melainkan Allah orang hidup, sebab di hadapan-Nya semua orang hidup. Harapan akan kebangkitan menghibur kita yang kehilangan orang terkasih. Hari ini, doakan mereka yang telah meninggal, dan jalani hidup dengan pengharapan akan hidup kekal bersama Allah.",
    refleksi: ["Bagaimana iman akan kebangkitan mengubah caraku memandang kematian?", "Siapa orang terkasih yang telah meninggal yang ingin kudoakan hari ini?"],
  },
  "ord-34-1": {
    renungan: "Yesus memperhatikan orang-orang kaya memasukkan persembahan, lalu seorang janda miskin memasukkan dua keping uang tembaga. Menurut Yesus, janda itu memberi lebih banyak daripada semua orang, sebab mereka memberi dari kelebihan, sedangkan ia memberi dari kekurangannya, seluruh nafkahnya. Allah tidak menilai jumlah, tetapi hati yang memberi. Memberi dengan percaya penuh kepada Allah adalah tanda iman yang mendalam. Menjelang akhir tahun liturgi, kisah ini mengajak kita memeriksa cara kita memberi. Hari ini, berikan sesuatu dengan tulus, entah waktu, perhatian, atau harta, bukan hanya dari sisa.",
    refleksi: ["Apakah aku memberi kepada Tuhan dari sisa atau dari yang terbaik?", "Apa yang bisa kuberikan dengan tulus hari ini?"],
  },
  "ord-34-2": {
    renungan: "Para murid mengagumi Bait Allah yang megah dengan batu-batu indah, tetapi Yesus berkata bahwa semuanya akan diruntuhkan. Ia juga memperingatkan tentang orang-orang yang datang memakai nama-Nya, perang, gempa, dan kelaparan. Pesan-Nya jelas: jangan disesatkan dan jangan takut. Di akhir tahun liturgi, Gereja mengajak kita merenungkan bahwa segala yang tampak kokoh di dunia ini akan berlalu. Yang tetap adalah Allah dan kasih-Nya. Hari ini, letakkan rasa aman kita bukan pada bangunan, harta, atau kabar yang menakutkan, tetapi pada Tuhan yang setia.",
    refleksi: ["Pada apa aku menaruh rasa amanku?", "Kabar apa yang membuatku takut, dan bagaimana aku menyerahkannya kepada Tuhan?"],
  },
  "ord-34-3": {
    renungan: "Yesus tidak menyembunyikan kenyataan: para murid akan dianiaya, dibawa ke pengadilan, bahkan dikhianati oleh orang terdekat. Namun, semua itu akan menjadi kesempatan untuk bersaksi. Mereka tidak perlu menyiapkan pembelaan, sebab Yesus sendiri akan memberikan kata-kata dan hikmat. Ia menjanjikan bahwa tidak sehelai pun rambut kepala mereka akan hilang, dan dengan bertahan mereka akan memperoleh hidup. Kesulitan karena iman bukan tanda Tuhan meninggalkan kita. Hari ini, ketika menghadapi tantangan karena memilih yang benar, bertahanlah dengan tenang dan percaya bahwa Tuhan menyertai.",
    refleksi: ["Tantangan apa yang kuhadapi karena setia pada imanku?", "Bagaimana aku dapat bertahan dengan tenang hari ini?"],
  },
  "ord-34-4": {
    renungan: "Yesus berbicara tentang kehancuran Yerusalem dan tanda-tanda pada matahari, bulan, dan bintang yang membuat bangsa-bangsa cemas. Namun, di tengah gambaran yang menakutkan itu, pesan terakhirnya justru penuh harapan: ketika semua itu mulai terjadi, berdirilah dan angkatlah kepalamu karena pembebasanmu sudah dekat. Bagi murid Kristus, akhir zaman bukan alasan untuk panik, melainkan untuk berharap, sebab Anak Manusia datang dengan kuasa dan kemuliaan. Hari ini, ketika kita mendengar kabar buruk atau mengalami masa sulit, angkatlah kepala dalam doa, dan percayalah bahwa Tuhan sedang datang membebaskan.",
    refleksi: ["Apa yang membuatku tertunduk dalam ketakutan saat ini?", "Bagaimana aku dapat \"mengangkat kepala\" dalam pengharapan hari ini?"],
  },
  "ord-34-5": {
    renungan: "Yesus mengajak kita belajar dari pohon ara: ketika daunnya bertunas, kita tahu musim panas sudah dekat. Demikian pula tanda-tanda zaman menunjukkan bahwa Kerajaan Allah sudah dekat. Lalu Ia menegaskan sesuatu yang menenangkan: langit dan bumi akan berlalu, tetapi perkataan-Nya tidak akan berlalu. Di dunia yang serba cepat berubah, Sabda Tuhan adalah pegangan yang tetap. Pada hari-hari terakhir tahun liturgi ini, kita diajak memperhatikan tanda-tanda kehadiran Allah dan berpegang pada Sabda-Nya. Hari ini, pilih satu ayat Kitab Suci dan jadikan pegangan sepanjang hari.",
    refleksi: ["Tanda apa yang menunjukkan bahwa Tuhan sedang bekerja dalam hidupku?", "Sabda mana yang menjadi peganganku ketika semuanya berubah?"],
  },
  "ord-34-6": {
    renungan: "Pada hari terakhir tahun liturgi, Yesus berpesan agar hati kita tidak dibebani oleh pesta pora, kemabukan, dan kekhawatiran hidup. Hari Tuhan akan datang seperti perangkap bagi yang lengah. Karena itu, berjaga-jagalah setiap waktu dan selalu berdoa, supaya kita mendapat kekuatan untuk berdiri di hadapan Anak Manusia. Berjaga tidak berarti hidup dalam ketakutan, tetapi hidup dengan hati yang sadar dan bebas. Kekhawatiran pun dapat membuat hati berat, sama seperti kesenangan yang berlebihan. Hari ini, sambil menyongsong Masa Adven, serahkan kekhawatiran kepada Tuhan dan sediakan waktu khusus untuk berdoa.",
    refleksi: ["Apa yang sedang membebani hatiku sehingga sulit berjaga?", "Bagaimana aku ingin mempersiapkan diri menyongsong Masa Adven?"],
  },
};
