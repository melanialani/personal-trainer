import type { LiturgicalColor } from '../lib/liturgicalCalendar';

export type SaintRank = 'solemnity' | 'feast' | 'memorial' | 'optional';

export interface Saint {
  id: string;
  /** "MM-DD", or "immaculate-heart" (Saturday after the Sacred Heart). */
  date: string;
  name: string;
  role: string;
  years: string;
  rank: SaintRank;
  color: LiturgicalColor;
  story: string;
  example: string[];
  patron: string[];
  keywords: string[];
  sources: string[];
}

/**
 * Saints and Marian memorials of the General Roman Calendar (Missale Romanum 1970/2002/2008 plus decrees up to 2026:
 * St. Faustina, St. Teresa of Calcutta, St. John Henry Newman, …), as listed by the Liturgical Calendar API project.
 * Stories are short Indonesian summaries written for this app from the sources in each entry (not official texts).
 */
/**
 * Saints and Marian memorials of the General Roman Calendar (Missale Romanum 1970/2002/2008 plus decrees up to 2026:
 * St. Faustina, St. Teresa of Calcutta, St. John Henry Newman, …), as listed by the Liturgical Calendar API project.
 * Stories are short Indonesian summaries written for this app from the sources in each entry (not official texts).
 */
export const SAINTS: Saint[] = [
  {
    "id": "sts-basil-greg",
    "date": "01-02",
    "name": "St. Basilius Agung dan St. Gregorius dari Nazianze",
    "role": "Uskup dan Pujangga Gereja",
    "years": "abad ke-4",
    "rank": "memorial",
    "color": "white",
    "story": "Basilius lahir di Kaisarea, Kapadokia (kini Turki), sekitar tahun 329 dalam keluarga yang melahirkan beberapa orang kudus. Ia belajar di Konstantinopel dan Athena, dan di Athena ia bersahabat erat dengan Gregorius dari Nazianze. Basilius meninggalkan karier sebagai ahli retorika untuk hidup doa dan keheningan; ia mendirikan komunitas biara dan menyusun aturan hidup yang sampai kini memengaruhi monastisisme Timur. Gregorius, yang dibaptis pada usia 30 tahun, sempat bergabung dengannya. Basilius kemudian menjadi Uskup Agung Kaisarea dan dengan teguh melawan ajaran Arianisme yang menyangkal keilahian Kristus, meski ditekan Kaisar Valens. Ia berkhotbah setiap hari dan membangun kompleks amal berisi rumah sakit dan penampungan orang miskin. Gregorius, seorang penyendiri yang peka, dipanggil ke Konstantinopel yang lama dikuasai kaum Arian. Di sebuah rumah sederhana yang menjadi satu-satunya gereja ortodoks di kota itu, ia menyampaikan khotbah-khotbah termasyhur tentang Tritunggal dan memulihkan iman kota itu, walau harus menanggung fitnah dan kekerasan. Ia menghabiskan akhir hidupnya dalam kesunyian sambil menulis puisi rohani, dan dijuluki “Sang Teolog”. Gereja merayakan kedua sahabat ini bersama-sama.",
    "example": [
      "Pilihlah sahabat yang mendorong kita makin dekat kepada Tuhan dan saling meneguhkan dalam iman.",
      "Bagikan apa yang berlebih kepada yang membutuhkan.",
      "Pelajari iman kita dengan sungguh supaya mampu menjelaskannya dengan rendah hati."
    ],
    "patron": [
      "Rusia"
    ],
    "keywords": [
      "basil",
      "gregory nazianzen",
      "basilius",
      "gregorius",
      "kapadokia",
      "arianisme",
      "bapa gereja",
      "persahabatan"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/01/02.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-basil-the-great/",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-gregory-nazianzen/"
    ]
  },
  {
    "id": "name-jesus",
    "date": "01-03",
    "name": "Nama Yesus yang Tersuci",
    "role": "Peringatan Nama Tersuci Yesus",
    "years": "",
    "rank": "optional",
    "color": "white",
    "story": "Pada 3 Januari Gereja menghormati Nama Yesus yang Tersuci, nama “yang di atas segala nama”, sehingga dalam nama Yesus bertekuk lutut segala yang ada di langit, di bumi, dan di bawah bumi (Flp 2:9-11). Menurut Injil Matius, nama itu diberikan kepada putra Maria oleh Yosef, sesuai pesan malaikat dalam mimpi; nama Yesus berarti “Allah menyelamatkan”. Dalam Kisah Para Rasul, Petrus menyembuhkan orang lumpuh di Gerbang Indah Bait Allah “dalam nama Yesus Kristus, orang Nazaret”. Devosi kepada Nama Yesus berkembang di kalangan rahib dan rubiah Sistersian pada abad ke-12, tetapi terutama dipopulerkan oleh St. Bernardinus dari Siena, seorang Fransiskan abad ke-15. Ia memakai monogram IHS, tiga huruf pertama nama Yesus dalam bahasa Yunani, dikelilingi matahari bersinar, dan mewartakan devosi ini untuk meredakan permusuhan dan dendam antarkeluarga di kota-kota Italia. Devosi ini kemudian disebarkan para pengkhotbah Fransiskan, Dominikan, dan Yesuit. Pada tahun 1721 Paus Innosensius XIII memperluas pesta ini ke seluruh Gereja.",
    "example": [
      "Ucapkan nama Yesus dengan hormat dan hindari memakainya dengan sembarangan.",
      "Biasakan doa pendek seperti “Yesus, aku percaya kepada-Mu” di sela kesibukan.",
      "Jadikan nama Yesus alasan untuk berdamai, bukan untuk merendahkan orang lain."
    ],
    "patron": [],
    "keywords": [
      "holy name of jesus",
      "nama yesus",
      "ihs",
      "bernardinus",
      "siena",
      "devosi"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/01/03/nome-di-gesu.html",
      "https://www.franciscanmedia.org/saint-of-the-day/most-holy-name-of-jesus/"
    ]
  },
  {
    "id": "st-ray-penyafort",
    "date": "01-07",
    "name": "St. Raimundus dari Penyafort",
    "role": "Imam",
    "years": "1175–1275",
    "rank": "optional",
    "color": "white",
    "story": "Raimundus lahir tahun 1175 di Penyafort, Katalonia, dari keluarga bangsawan kaya. Ia belajar di Barcelona lalu di Bologna, tempat ia meraih gelar doktor hukum dan menjadi profesor hukum Gereja. Tahun 1222 ia masuk Ordo Pewarta (Dominikan). Ia menulis buku pegangan bagi para bapa pengakuan, Summa de casibus, dan bersama St. Petrus Nolaskus terlibat dalam pendirian Ordo Mercedarian untuk menebus orang Kristen yang ditawan sebagai budak. Paus Gregorius IX memanggilnya ke Roma dan menugasinya menghimpun keputusan-keputusan para paus; kumpulan Dekretal yang disusunnya menjadi rujukan hukum Gereja hingga kodifikasi tahun 1917. Ia menolak jabatan uskup agung dan memilih tetap menjadi biarawan sederhana. Tahun 1238 ia dipilih menjadi Magister Jenderal Dominikan; ia mengunjungi biara-biara dengan berjalan kaki, lalu mengundurkan diri setelah konstitusi ordo diperbarui. Di sisa hidupnya ia mendampingi pembinaan para misionaris, mendirikan sekolah bahasa Ibrani dan Arab, dan wafat di Barcelona pada 6 Januari 1275, dalam usia hampir seratus tahun. Ia dikanonisasi tahun 1601.",
    "example": [
      "Pakai keahlian profesional untuk melayani keadilan dan kebaikan bersama.",
      "Taati aturan dengan memahami tujuan baiknya, bukan sekadar hurufnya.",
      "Belajarlah memahami budaya orang lain sebelum berbicara kepada mereka tentang iman."
    ],
    "patron": [
      "ahli hukum",
      "ahli hukum Gereja"
    ],
    "keywords": [
      "raymond of penyafort",
      "penafort",
      "raimundus",
      "dominikan",
      "hukum gereja",
      "kanonik",
      "barcelona"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/01/07.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-raymond-of-penafort/"
    ]
  },
  {
    "id": "st-hilary-poitiers",
    "date": "01-13",
    "name": "St. Hilarius dari Poitiers",
    "role": "Uskup dan Pujangga Gereja",
    "years": "† ± 367",
    "rank": "optional",
    "color": "white",
    "story": "Hilarius lahir di Galia (kini Prancis) dalam keluarga kaya yang belum Kristen dan mendapat pendidikan sastra serta filsafat yang baik. Ia menemukan makna hidup lewat Kitab Suci, khususnya prolog Injil Yohanes, lalu dibaptis ketika sudah dewasa, beristri, dan memiliki seorang putri. Sekitar tahun 353–354 ia dipilih menjadi Uskup Poitiers. Masa itu Gereja diguncang Arianisme, ajaran yang menyangkal keilahian Kristus. Ketika Kaisar Konstansius memerintahkan para uskup Barat mengutuk St. Atanasius, Hilarius menolak, sehingga ia dibuang ke Frigia (kini Turki) selama sekitar empat tahun. Di pembuangan ia terus menulis, antara lain karya besar tentang Tritunggal, dan dengan tegas membela iman Konsili Nicea. Kaum Arian yang segan berdebat dengannya akhirnya meminta kaisar memulangkannya ke Poitiers, tempat umat menyambutnya dengan gembira. Ia juga membimbing St. Martinus, yang kemudian mendirikan biara tertua di Galia di Ligugé. Hilarius wafat sekitar tahun 367. Karena keteguhannya ia dijuluki “Atanasius dari Barat”, dan Gereja menghormatinya sebagai Pujangga Gereja.",
    "example": [
      "Bacalah Kitab Suci secara teratur, terutama Injil, untuk mengenal Kristus lebih dalam.",
      "Tetaplah setia pada kebenaran dengan sikap santun walaupun tidak populer.",
      "Hadapi kesulitan dengan terus berkarya, seperti Hilarius yang tetap menulis di pembuangan."
    ],
    "patron": [],
    "keywords": [
      "hilary of poitiers",
      "hilarius",
      "poitiers",
      "prancis",
      "arianisme",
      "tritunggal"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/01/13/sant-ilario--vescovo-di-poitiers-e-dottore-della-chiesa.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-hilary-of-poitiers/",
      "https://www.newadvent.org/cathen/07349b.htm"
    ]
  },
  {
    "id": "st-anthony-egypt",
    "date": "01-17",
    "name": "St. Antonius, Abas",
    "role": "Abas dan Pertapa",
    "years": "± 250–356",
    "rank": "memorial",
    "color": "white",
    "story": "Antonius lahir di Koma, Mesir, sekitar tahun 250. Ia menjadi yatim piatu pada usia sekitar 20 tahun. Tersentuh oleh sabda Injil, “Pergilah, juallah apa yang kaumiliki dan berikanlah kepada orang miskin”, ia sungguh membagikan seluruh warisannya yang besar lalu mengundurkan diri ke padang gurun. Di sana ia menjalani hidup doa, puasa, dan kerja, serta bergulat melawan godaan iblis. Banyak orang datang meminta bimbingan rohani, sehingga ia akhirnya membentuk kelompok para rahib yang hidup dalam sel-sel terpisah di bawah tuntunan seorang bapa rohani; karena itu ia dihormati sebagai Bapa Monastisisme. Saat penganiayaan tahun 311 ia pergi menguatkan orang Kristen di penjara, dan di usia lanjut ia membela keilahian Kristus melawan Arianisme. St. Atanasius menulis riwayat hidupnya, Vita Antonii, yang membuat namanya dikenal hingga Spanyol, Galia, Roma, dan Afrika. Antonius wafat dalam kesunyian dalam usia lanjut sekali; menurut tradisi ia mencapai 105 tahun. Pada pestanya, di banyak tempat diadakan pemberkatan hewan.",
    "example": [
      "Sediakan waktu hening setiap hari untuk berdoa, jauh dari keramaian dan gawai.",
      "Lepaskan keterikatan pada harta yang berlebihan dan bagikan kepada yang miskin.",
      "Lawanlah godaan dengan doa dan tanda salib, bukan dengan kekuatan sendiri."
    ],
    "patron": [
      "hewan",
      "peternak",
      "penggali kubur",
      "penderita penyakit kulit"
    ],
    "keywords": [
      "anthony the great",
      "antonius abas",
      "anthony of egypt",
      "mesir",
      "pertapa",
      "monastisisme",
      "padang gurun"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/01/17/st--antony--abbot.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-anthony-of-egypt/"
    ]
  },
  {
    "id": "st-fabian-pope",
    "date": "01-20",
    "name": "St. Fabianus, Paus dan Martir",
    "role": "Paus dan Martir",
    "years": "† 250",
    "rank": "optional",
    "color": "white",
    "story": "Fabianus adalah seorang awam Romawi. Sejarawan Eusebius dari Kaisarea mencatat bahwa ketika jemaat Roma berkumpul untuk memilih pengganti Paus Anterus pada tahun 236, Fabianus yang datang dari pedesaan ikut hadir. Tiba-tiba seekor merpati turun dan hinggap di kepalanya; melihat tanda itu, klerus dan umat sepakat memilihnya menjadi paus. Ia memimpin Gereja selama empat belas tahun. Memanfaatkan masa damai, ia membagi kota Roma menjadi tujuh wilayah gerejawi, masing-masing dipercayakan kepada seorang diakon untuk melayani orang miskin. Ia juga menahbiskan uskup, mengutus misionaris ke Galia, dan menjalin hubungan dengan umat Kristen di Timur. Ketika Kaisar Desius memulai penganiayaan, Fabianus termasuk korban pertama: ia wafat sebagai martir pada 20 Januari 250. St. Siprianus dari Kartago menyebutnya pribadi “tiada bandingnya”, yang kemuliaan wafatnya setara dengan kesucian hidupnya. Ia dimakamkan di kripta para paus di Katakomba St. Kalistus, dan batu nisannya yang pecah dengan tulisan Yunani “Fabianus, uskup, martir” masih dapat dilihat.",
    "example": [
      "Terimalah tugas pelayanan di Gereja atau masyarakat dengan rendah hati, walau merasa tidak layak.",
      "Atur karya amal dengan rapi agar bantuan sungguh sampai kepada yang miskin.",
      "Ulurkan tangan kepada mereka yang pernah jatuh supaya bisa bangkit kembali."
    ],
    "patron": [],
    "keywords": [
      "fabian",
      "fabianus",
      "paus",
      "martir",
      "roma",
      "katakomba kalistus",
      "desius"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/01/20.html",
      "https://www.vaticannews.va/it/santo-del-giorno/01/20/san-fabiano--papa-e-martire.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-fabian/"
    ]
  },
  {
    "id": "st-sebastian",
    "date": "01-20",
    "name": "St. Sebastianus, Martir",
    "role": "Martir",
    "years": "± abad ke-3/4",
    "rank": "optional",
    "color": "red",
    "story": "Hanya sedikit yang pasti secara sejarah tentang Sebastianus: ia seorang martir di Roma, sudah dihormati di Milan pada zaman St. Ambrosius, dan dimakamkan di Via Appia, di katakomba yang kini menyandang namanya. Dokumen tertua, Depositio martyrum tahun 354, mencatat nama, kemartiran, dan makamnya. St. Ambrosius menyebut bahwa ia berasal dari Milan lalu wafat sebagai martir di Roma. Kisah selanjutnya berasal dari Passio yang ditulis sekitar abad ke-5. Menurut tradisi, Sebastianus menjadi perwira pengawal kaisar dan memanfaatkan kedudukannya untuk diam-diam menolong orang Kristen di penjara. Ketika ketahuan, Kaisar Diokletianus menghukumnya mati dengan dipanah. Ia ditinggalkan karena disangka sudah mati, tetapi seorang janda Kristen bernama Irene merawatnya hingga pulih. Alih-alih melarikan diri, ia kembali menghadap kaisar dan menegur kekejamannya terhadap orang Kristen; kali ini ia dipukuli sampai mati. Kisah ini menunjukkan keberanian dan solidaritas umat Kristen perdana. Sebastianus dihormati sebagai pelindung ketiga kota Roma sesudah St. Petrus dan St. Paulus.",
    "example": [
      "Gunakan posisi atau pengaruh yang kita miliki untuk diam-diam menolong orang yang tertindas.",
      "Beranilah tetap setia pada iman di lingkungan kerja yang tidak mendukung.",
      "Jaga kesehatan dan disiplin tubuh sebagai bagian dari pelayanan kepada Tuhan."
    ],
    "patron": [
      "atlet",
      "prajurit"
    ],
    "keywords": [
      "sebastian",
      "sebastianus",
      "martir",
      "panah",
      "roma",
      "via appia",
      "prajurit"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/01/20/san-sebastiano--martire.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-sebastian/"
    ]
  },
  {
    "id": "st-agnes",
    "date": "01-21",
    "name": "St. Agnes, Perawan dan Martir",
    "role": "Perawan dan Martir",
    "years": "† ± 304",
    "rank": "memorial",
    "color": "white",
    "story": "Agnes adalah salah satu martir yang paling dihormati Gereja, tetapi hampir tidak ada yang diketahui tentang hidupnya selain kemartirannya. Ia masih sangat muda, sekitar 12 atau 13 tahun, ketika wafat di Roma. Banyak sumber menempatkan kemartirannya pada tahun 304 di masa penganiayaan Kaisar Diokletianus, walaupun sebagian ahli menyebut masa yang lebih awal. Menurut tradisi, Agnes telah berjanji mempersembahkan keperawanannya kepada Kristus dan menolak lamaran putra seorang pejabat Roma. Karena itu ia dilaporkan sebagai orang Kristen, lalu dipermalukan dengan ditempatkan di rumah pelacuran, tetapi kesuciannya tetap terlindungi. Ia akhirnya dihukum mati; kisah-kisah kuno menyebut berbagai cara, dan tradisi yang paling dikenal mengatakan ia dibunuh dengan pedang. Ia dimakamkan di katakomba di Via Nomentana, dan putri Kaisar Konstantinus membangun basilika di atasnya. Namanya mirip kata Latin agnus (anak domba), sehingga ia digambarkan bersama anak domba. Setiap 21 Januari dua anak domba diberkati; bulunya dipakai untuk membuat pallium yang dikenakan Paus kepada para uskup agung metropolit.",
    "example": [
      "Hormati dan jaga kemurnian diri dalam pikiran, perkataan, dan pergaulan.",
      "Beranilah berkata tidak terhadap tekanan teman atau lingkungan yang menjauhkan dari Tuhan.",
      "Ingatlah bahwa kekudusan tidak bergantung pada usia, sehingga anak muda pun dapat menjadi teladan iman."
    ],
    "patron": [
      "anak perempuan",
      "pramuka putri"
    ],
    "keywords": [
      "agnes",
      "agnes of rome",
      "perawan",
      "martir",
      "anak domba",
      "roma",
      "pallium"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/01/21/sant-agnese--vergine-e-martire.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-agnes/"
    ]
  },
  {
    "id": "st-vincent-deacon",
    "date": "01-22",
    "name": "St. Vinsensius, Diakon dan Martir",
    "role": "Diakon dan Martir",
    "years": "† 304",
    "rank": "optional",
    "color": "red",
    "story": "Vinsensius adalah seorang diakon dari Saragosa, Spanyol, ditahbiskan oleh sahabatnya, Uskup St. Valerius. Ia dikenal sebagai pengkhotbah ulung dan pribadi yang berani. Sebagian besar kisahnya berasal dari penyair Prudensius, dan St. Agustinus dalam salah satu khotbahnya menyebut bahwa ia memegang Kisah kemartiran Vinsensius. Yang pasti diketahui adalah namanya, jabatannya sebagai diakon, serta tempat wafat dan makamnya. Ketika kaisar-kaisar Romawi mengeluarkan dekret melawan klerus dan umat Kristen, Vinsensius dan uskupnya ditangkap dan dipenjarakan di Valencia. Lapar dan siksaan tidak mematahkan mereka. Valerius dibuang, sedangkan Gubernur Dasianus melampiaskan amarahnya kepada Vinsensius. Ia ditawari jalan keluar asalkan mau menyerahkan kitab-kitab suci untuk dibakar, tetapi ia menolak. Ia disiksa di atas pemanggang besi lalu dilempar ke sel yang kotor, dan menurut kisahnya ia bahkan mempertobatkan sipir penjara. Akhirnya ia wafat di Valencia pada tahun 304, segera setelah sahabat-sahabatnya membaringkannya di tempat tidur. Ia langsung dihormati sebagai orang kudus, dan devosi kepadanya menyebar luas.",
    "example": [
      "Hargai Kitab Suci sebagai harta yang berharga, bacalah dan rawatlah dengan hormat.",
      "Tetaplah teguh dan tenang ketika menghadapi tekanan karena iman.",
      "Layani komunitas dengan setia seperti seorang diakon yang melayani tanpa pamrih."
    ],
    "patron": [],
    "keywords": [
      "vincent of saragossa",
      "vinsensius",
      "diakon",
      "martir",
      "spanyol",
      "valencia",
      "saragosa"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/01/22.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-vincent-of-zaragossa/"
    ]
  },
  {
    "id": "st-francis-de-sales",
    "date": "01-24",
    "name": "St. Fransiskus de Sales",
    "role": "Uskup dan Pujangga Gereja",
    "years": "1567–1622",
    "rank": "memorial",
    "color": "white",
    "story": "Fransiskus lahir pada 21 Agustus 1567 di Thorens, Savoia, dari keluarga bangsawan. Ayahnya ingin ia menjadi ahli hukum, sehingga ia belajar hukum di Universitas Padua, tetapi di sana ia justru tertarik pada teologi. Setelah membujuk ayahnya dengan sabar, ia ditahbiskan imam pada Desember 1593. Ia menawarkan diri mewartakan kembali iman Katolik di wilayah Chablais yang menganut Calvinisme. Banyak pintu tertutup baginya, dan ia menghadapi salju, lapar, serta ancaman; maka ia menulis selebaran yang menjelaskan ajaran iman secara sederhana lalu menyebarkannya dari rumah ke rumah. Karena itu ia diangkat menjadi pelindung pers Katolik. Tahun 1602 ia menjadi Uskup Jenewa yang berkedudukan di Annecy. Ia mengunjungi paroki, membina para imam, berkhotbah, dan mengajar katekismus. Bersama St. Yohana Fransiska de Chantal ia mendirikan Kongregasi Visitasi pada tahun 1610. Bukunya Filotea (Pengantar Hidup Saleh) mengajarkan bahwa setiap orang, apa pun panggilan hidupnya, dipanggil menjadi kudus. Ia dikenal dengan kelemahlembutannya, padahal menurut pengakuannya sendiri ia butuh dua puluh tahun untuk menaklukkan wataknya yang mudah marah. Ia wafat di Lyon pada 28 Desember 1622.",
    "example": [
      "Hayati kesalehan di tengah pekerjaan dan keluarga sehari-hari, bukan hanya di gereja.",
      "Latihlah kesabaran dan kelembutan dalam berbicara, terutama ketika sedang kesal.",
      "Bagikan iman lewat tulisan atau media sosial dengan bahasa yang sederhana dan santun."
    ],
    "patron": [
      "penulis",
      "wartawan",
      "pers Katolik",
      "tunarungu"
    ],
    "keywords": [
      "francis de sales",
      "fransiskus de sales",
      "filotea",
      "jenewa",
      "annecy",
      "visitasi",
      "salesian",
      "kelembutan"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/01/24/saint-francis-de-sales--bishop-of-geneva-and-doctor-of--the-chur.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-francis-de-sales/"
    ]
  },
  {
    "id": "conversion-st-paul",
    "date": "01-25",
    "name": "Pertobatan St. Paulus, Rasul",
    "role": "Pesta Pertobatan Rasul Paulus",
    "years": "",
    "rank": "feast",
    "color": "white",
    "story": "Pesta ini mengenang peristiwa yang mengubah seluruh hidup Saulus dari Tarsus. Ia seorang Yahudi dari kalangan Farisi yang paling ketat, murid Gamaliel, dan dengan semangat besar menganiaya jemaat Kristen perdana: masuk dari rumah ke rumah, menyeret laki-laki dan perempuan ke penjara. Dengan wewenang dari Imam Besar ia berangkat ke Damsyik untuk menangkap orang-orang Kristen yang mengungsi ke sana. Dalam perjalanan, tiba-tiba cahaya dari langit meliputinya; ia rebah ke tanah dan mendengar suara: “Saulus, Saulus, mengapa engkau menganiaya Aku?” Ketika ia bertanya siapa yang berbicara, ia mendapat jawaban: “Akulah Yesus yang kauaniaya itu” (Kis 9). Dalam keadaan buta ia dituntun ke Damsyik, berpuasa dan berdoa tiga hari, sampai Ananias datang menumpangkan tangan dan membaptisnya, sehingga ia dapat melihat kembali. Sejak itu Paulus mewartakan Kristus di Damsyik, Yerusalem, Tarsus, dan Antiokhia, lalu menjadi misionaris besar bagi bangsa-bangsa lain. Seluruh teologinya berakar pada pengalaman itu: Yesus menyatu dengan jemaat-Nya, dan keselamatan adalah anugerah Allah yang diterima dengan iman.",
    "example": [
      "Percayalah bahwa tidak ada orang yang terlalu jauh untuk disentuh rahmat Tuhan, termasuk diri kita sendiri.",
      "Terimalah koreksi dan bantuan sesama, seperti Paulus yang menerima Ananias.",
      "Arahkan semangat dan bakat kita untuk mewartakan kasih Kristus, bukan untuk menghakimi orang lain."
    ],
    "patron": [],
    "keywords": [
      "conversion of saint paul",
      "paulus",
      "saulus",
      "damsyik",
      "damaskus",
      "pertobatan",
      "rasul bangsa-bangsa"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/01/25/conversione-di-san-paolo-apostolo.html",
      "https://www.franciscanmedia.org/saint-of-the-day/conversion-of-saint-paul/"
    ]
  },
  {
    "id": "sts-timothy-titus",
    "date": "01-26",
    "name": "St. Timotius dan St. Titus",
    "role": "Uskup",
    "years": "abad ke-1",
    "rank": "memorial",
    "color": "white",
    "story": "Timotius dan Titus adalah rekan kerja terdekat Rasul Paulus. Timotius lahir di Listra, Asia Kecil, dari ibu Yahudi bernama Eunike dan ayah Yunani; neneknya, Lois, lebih dahulu menjadi Kristen. Paulus memilihnya sebagai teman seperjalanan pada awal perjalanan misinya yang kedua karena ia dipuji oleh saudara-saudara di Listra dan Ikonium (Kis 16:2). Ia menyertai Paulus ke Makedonia, Athena, Tesalonika, dan Korintus, dan bekerja bersamanya sekitar lima belas tahun. Menurut sejarawan Eusebius, Timotius adalah uskup pertama Efesus. Titus berasal dari keluarga Yunani yang belum Kristen dan dipertobatkan oleh Paulus. Paulus membawanya ke Yerusalem dan tidak membiarkannya disunat, sehingga Titus menjadi tanda bahwa Injil terbuka bagi semua bangsa. Ketika jemaat Korintus bergolak, Tituslah yang berhasil memulihkan damai antara jemaat itu dan Paulus. Surat kepada Titus menyebutnya sebagai pemimpin jemaat di Pulau Kreta, yang bertugas menata jemaat dan mengangkat para penatua. Dua surat kepada Timotius dan satu kepada Titus adalah surat Perjanjian Baru yang ditujukan kepada pribadi, bukan kepada jemaat.",
    "example": [
      "Jadilah rekan kerja yang setia dan dapat diandalkan dalam pelayanan Gereja.",
      "Wariskan iman kepada anak dan cucu, seperti Lois dan Eunike kepada Timotius.",
      "Bawalah damai ketika ada perselisihan dalam komunitas."
    ],
    "patron": [],
    "keywords": [
      "timothy",
      "titus",
      "timotius",
      "efesus",
      "kreta",
      "paulus",
      "surat pastoral"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/01/26/sts--timothy-and-titus--bishops--disciples-of-st--paul.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saints-timothy-and-titus/"
    ]
  },
  {
    "id": "st-angela-merici",
    "date": "01-27",
    "name": "St. Angela Merici, Perawan",
    "role": "Perawan, Pendiri Ursulin",
    "years": "1474–1540",
    "rank": "optional",
    "color": "white",
    "story": "Angela lahir pada 21 Maret 1474 di Desenzano, di tepi Danau Garda, Italia. Sejak kecil ia mendengarkan ayahnya membacakan riwayat para kudus, dan ia sangat menghormati St. Ursula. Pada usia remaja ia kehilangan kakak perempuan dan kedua orang tuanya, lalu tinggal bersama pamannya di Salò. Ia menjadi anggota Ordo Ketiga St. Fransiskus dan hidup sederhana, sambil melakukan karya belas kasih. Dalam doa ia merasa dipanggil untuk mendirikan suatu “kompani” perempuan. Tahun 1516 ia diutus ke Brescia untuk mendampingi seorang janda, dan di sana ia menjadi pembimbing rohani bagi banyak orang. Dalam ziarah ke Tanah Suci tahun 1524 ia tiba-tiba menjadi buta, tetapi tetap mengunjungi tempat-tempat suci “dengan mata batin”; penglihatannya pulih dalam perjalanan pulang ketika berdoa di depan salib. Pada 25 November 1535 ia bersama dua belas perempuan mendirikan Kompani St. Ursula: perempuan yang membaktikan diri kepada Kristus tetapi tetap hidup di tengah dunia untuk mendidik kaum muda perempuan. Angela wafat di Brescia pada 27 Januari 1540 dan dikanonisasi tahun 1807. Para Suster Ursulin meneruskan karyanya di bidang pendidikan di seluruh dunia.",
    "example": [
      "Perhatikan pendidikan anak-anak, terutama anak perempuan dan mereka yang kurang mampu.",
      "Terimalah kesulitan seperti sakit sebagai kesempatan untuk memandang dengan mata iman.",
      "Beranilah memulai bentuk pelayanan baru ketika melihat kebutuhan nyata di sekitar kita."
    ],
    "patron": [
      "pendidik",
      "guru"
    ],
    "keywords": [
      "angela merici",
      "ursulin",
      "ursula",
      "brescia",
      "desenzano",
      "pendidikan",
      "perempuan"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/01/27/sant-angela-merici--vergine--fondatrice-delle-orsoline.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-angela-merici/"
    ]
  },
  {
    "id": "st-thomas-aquinas",
    "date": "01-28",
    "name": "St. Thomas Aquinas",
    "role": "Imam dan Pujangga Gereja",
    "years": "± 1225–1274",
    "rank": "memorial",
    "color": "white",
    "story": "Thomas lahir di kastel Roccasecca, Italia, dari keluarga bangsawan Aquino. Pada usia lima tahun ia diserahkan ke Biara Benediktin Monte Cassino dengan harapan kelak menjadi abas. Ketika belajar di Napoli ia tertarik pada filsafat Aristoteles dan, sekitar tahun 1243, memilih masuk Ordo Dominikan, ordo pengemis yang baru. Keluarganya menentang keras; atas perintah ibunya ia ditangkap saudaranya dan dikurung di rumah lebih dari setahun. Setelah bebas ia belajar pada St. Albertus Agung di Koln. Karena pendiam, teman-temannya menjulukinya “lembu bisu”, tetapi Albertus membelanya. Thomas mengajar di Universitas Paris, memimpin sekolah-sekolah Dominikan di Italia, dan menulis karya yang sangat luas, termasuk Summa Theologiae dan himne Ekaristi Pange Lingua. Ia menunjukkan bahwa iman dan akal budi tidak bertentangan, sebab keduanya berasal dari Allah. Pada 6 Desember 1273, setelah merayakan Misa, ia berhenti menulis dan berkata bahwa semua yang telah ditulisnya bagaikan jerami dibandingkan dengan apa yang telah dinyatakan kepadanya. Ia wafat pada 7 Maret 1274 di Biara Fossanova dalam perjalanan ke Konsili Lyon, pada usia sekitar 49 tahun. Ia digelari Doktor Malaikat.",
    "example": [
      "Gunakan akal budi untuk belajar dan memahami iman, karena keduanya anugerah Tuhan.",
      "Belajarlah dengan tekun dan rendah hati, tanpa mencari pujian.",
      "Jadikan Ekaristi pusat hidup dan sumber kebijaksanaan."
    ],
    "patron": [
      "sekolah Katolik",
      "universitas Katolik",
      "pelajar",
      "guru",
      "filsuf",
      "teolog"
    ],
    "keywords": [
      "thomas aquinas",
      "tomas aquino",
      "summa theologiae",
      "dominikan",
      "doktor malaikat",
      "filsafat",
      "iman dan akal"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/01/28/san-tommaso-d_aquino--sacerdote-domenicano--dottore-della-chiesa.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-thomas-aquinas/"
    ]
  },
  {
    "id": "st-john-bosco",
    "date": "01-31",
    "name": "St. Yohanes Bosco",
    "role": "Imam, Pendiri Salesian",
    "years": "1815–1888",
    "rank": "memorial",
    "color": "white",
    "story": "Yohanes Bosco lahir pada 16 Agustus 1815 di Becchi, dekat Castelnuovo d'Asti, Italia, dari keluarga petani. Ayahnya meninggal ketika ia baru dua tahun, dan ibunya, Mama Margherita, membesarkannya dalam kemiskinan. Pada usia sembilan tahun ia bermimpi dikelilingi anak-anak nakal, dan dalam mimpi itu ia diminta memenangkan mereka bukan dengan pukulan, melainkan dengan kelembutan dan kasih. Untuk membiayai sekolahnya ia bekerja sebagai penjahit, pelayan, tukang kayu, tukang sepatu, dan pandai besi. Ia ditahbiskan imam di Turin pada 5 Juni 1841 dan mulai melayani anak-anak muda miskin yang datang dari desa ke kota industri, ditemuinya di jalan, tempat kerja, dan penjara. Tahun 1844 ia mendirikan Oratorium yang dinamai St. Fransiskus de Sales, lengkap dengan bengkel kerja dan percetakan. Ia mendirikan Serikat Salesian dan, bersama St. Maria Domenika Mazzarello, para Suster Putri Maria Penolong Umat Kristiani. Metode pendidikannya bersifat preventif: akal sehat, iman, dan kasih sayang, tanpa hukuman fisik. Tujuannya membentuk “warga negara yang jujur dan orang Kristen yang baik”. Ia wafat di Turin pada 31 Januari 1888.",
    "example": [
      "Dampingi anak-anak dan remaja dengan kesabaran dan sukacita, bukan dengan bentakan.",
      "Ajarkan keterampilan kerja dan nilai iman secara bersamaan.",
      "Sapalah kaum muda yang terpinggirkan dan berikan mereka tempat untuk bertumbuh."
    ],
    "patron": [
      "kaum muda",
      "pelajar",
      "pendidik",
      "editor",
      "penerbit"
    ],
    "keywords": [
      "john bosco",
      "don bosco",
      "yohanes bosco",
      "salesian",
      "turin",
      "kaum muda",
      "pendidikan",
      "oratorium"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/01/31/san-giovanni-bosco--sacerdote--fondatore-dei-salesiani--padre-e-.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-john-bosco/"
    ]
  },
  {
    "id": "st-ansgar",
    "date": "02-03",
    "name": "St. Ansgarius, Uskup",
    "role": "Uskup, Rasul Skandinavia",
    "years": "† 865",
    "rank": "optional",
    "color": "white",
    "story": "Ansgarius, yang juga dikenal sebagai Oskar, sejak kecil dididik para rahib Benediktin di Biara Corbie, Prancis utara, lalu menjadi rahib di sana dan kemudian di Corvey (Corbie Baru) di Saksonia. Tahun 826 ia berangkat ke Denmark bersama Raja Harald yang baru dibaptis, tetapi raja itu segera kehilangan takhtanya dan misi itu nyaris tanpa hasil. Ketika Swedia meminta misionaris, Ansgarius pergi ke sana dan dalam perjalanan sempat ditawan perompak. Karena karya misinya dinilai berhasil, Kaisar Ludovikus yang Saleh mendukung pembentukan keuskupan baru di Hamburg, dan Ansgarius diangkat menjadi uskupnya; Paus mengangkatnya menjadi utusan untuk misi Skandinavia. Setelah kaisar wafat, bantuan dana terhenti, dan setelah tiga belas tahun berkarya ia menyaksikan Hamburg dibakar habis oleh kaum Normandia (Viking). Ansgarius pindah ke Bremen dan terus mengarahkan misi ke utara; ia berperan dalam pertobatan seorang raja Denmark. Para penulis riwayatnya mencatat bahwa ia pengkhotbah ulung, rendah hati, dan sangat peduli kepada orang miskin dan sakit, bahkan membasuh kaki mereka. Ia wafat dengan damai di Bremen pada tahun 865. Setelah kematiannya Swedia kembali kafir sampai datang misionaris dua abad kemudian.",
    "example": [
      "Tetaplah setia berkarya walaupun hasilnya belum terlihat.",
      "Jangan berkecil hati saat rencana baik gagal, mulailah lagi bersama Tuhan.",
      "Layani orang sakit dan miskin dengan tangan sendiri, bukan hanya dengan sumbangan."
    ],
    "patron": [
      "Denmark",
      "Skandinavia"
    ],
    "keywords": [
      "ansgar",
      "ansgarius",
      "oskar",
      "hamburg",
      "bremen",
      "skandinavia",
      "rasul utara",
      "misi"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/02/03/sant--ansgario--oscar---vescovo-di-amburgo-e-brema--apostolo-del.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-ansgar/"
    ]
  },
  {
    "id": "st-blase",
    "date": "02-03",
    "name": "St. Blasius, Uskup dan Martir",
    "role": "Uskup dan Martir",
    "years": "† 316",
    "rank": "optional",
    "color": "white",
    "story": "Tidak banyak yang pasti tentang Blasius selain bahwa ia uskup di Sebaste, Armenia, dan wafat sebagai martir di kota itu sekitar tahun 316. Kisah-kisah tentang hidupnya ditulis kira-kira empat abad kemudian, sehingga banyak unsurnya bersifat legenda. Menurut tradisi, ia semula belajar ilmu kedokteran dan, setelah menjadi uskup, merawat umatnya baik jasmani maupun rohani. Ketika penganiayaan terhadap orang Kristen kembali terjadi di wilayah Timur, ia mengungsi ke sebuah gua dan hidup dalam doa, sambil tetap membimbing gerejanya secara diam-diam; menurut kisahnya, binatang-binatang liar menjadi sahabatnya. Para pemburu menemukannya dan ia ditangkap. Dalam perjalanan ke penjara, seorang ibu membawa anaknya yang tersedak tulang ikan; Blasius memberkatinya dan anak itu sembuh. Gubernur Agricolaus berusaha memaksanya mempersembahkan korban kepada berhala, tetapi ia menolak; ia disiksa lalu dipenggal. Karena kisah penyembuhan itu, setiap 3 Februari di banyak gereja diadakan pemberkatan leher dengan dua lilin bersilang. Sebagian reliknya dibawa ke Maratea, Italia, yang hingga kini sangat menghormatinya.",
    "example": [
      "Doakan dan perhatikan orang sakit di sekitar kita, sekaligus mengusahakan pengobatan yang baik.",
      "Terimalah berkat Gereja, misalnya pemberkatan leher, dengan iman yang sederhana.",
      "Gunakan kata-kata kita untuk membangun, bukan untuk melukai."
    ],
    "patron": [
      "penderita sakit tenggorokan",
      "dokter THT",
      "peternak"
    ],
    "keywords": [
      "blaise",
      "blase",
      "blasius",
      "sebaste",
      "armenia",
      "tenggorokan",
      "pemberkatan leher"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/02/03.html",
      "https://www.vaticannews.va/it/santo-del-giorno/02/03/san-biagio--vescovo-di-sebaste-e-martire.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-blaise/"
    ]
  },
  {
    "id": "st-agatha",
    "date": "02-05",
    "name": "St. Agata, Perawan dan Martir",
    "role": "Perawan dan Martir",
    "years": "† 251",
    "rank": "memorial",
    "color": "white",
    "story": "Agata adalah perawan martir dari Sisilia. Hampir tidak ada fakta sejarah yang pasti tentangnya selain bahwa ia wafat sebagai martir di Sisilia pada masa penganiayaan Kaisar Desius, sekitar tahun 251. Kota Catania dan Palermo sama-sama mengaku sebagai tempat kelahirannya. Menurut kisah kemartirannya (Passio), ia lahir dari keluarga bangsawan kaya dan sejak remaja mempersembahkan diri kepada Allah sebagai perawan. Ketika dekret Desius dijalankan, Prokonsul Quintianus yang tergila-gila kepadanya berusaha memaksanya menyangkal iman. Agata melarikan diri ke Palermo tetapi ditangkap dan dibawa kembali ke Catania. Ia diserahkan ke rumah pelacuran agar tergoda, namun tetap setia dan suci. Di hadapan pengadilan ia menyatakan bahwa kebebasan dan kebangsawanan sejati adalah menjadi hamba Kristus. Menurut tradisi, ia disiksa dengan kejam, termasuk dipotong payudaranya, lalu wafat di penjara pada 5 Februari. Setahun kemudian, ketika Gunung Etna meletus, warga Catania memohon perlindungannya dan aliran lava berhenti; sejak itu ia dihormati sebagai pelindung Catania dan dimohon perlindungannya terhadap api.",
    "example": [
      "Tetaplah setia pada nilai-nilai iman walaupun ditekan oleh orang yang berkuasa.",
      "Hargai tubuh sebagai bait Allah dan jagalah martabatnya.",
      "Berdoalah dengan percaya bagi mereka yang menderita sakit, terutama penyakit payudara."
    ],
    "patron": [
      "Catania",
      "perawat",
      "penderita penyakit payudara",
      "perlindungan dari api"
    ],
    "keywords": [
      "agatha",
      "agata",
      "sisilia",
      "catania",
      "etna",
      "perawan",
      "martir"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/02/05/st--agata--virgin-and-martyr.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-agatha/"
    ]
  },
  {
    "id": "sts-paul-miki",
    "date": "02-06",
    "name": "St. Paulus Miki dan Kawan-kawan, Martir",
    "role": "Martir Jepang",
    "years": "± 1556–1597",
    "rank": "memorial",
    "color": "red",
    "story": "Paulus Miki lahir sekitar tahun 1556 di Jepang, kemungkinan dalam keluarga yang dipertobatkan melalui karya St. Fransiskus Xaverius. Ia dibaptis pada usia lima tahun dan dididik para Yesuit, lalu menjadi religius Yesuit pertama yang berasal dari Jepang. Ia sulit belajar bahasa Latin, tetapi sangat memahami agama dan budaya setempat sehingga menjadi pengkhotbah ulung yang mampu berdialog dengan para biksu Buddha. Situasi berubah ketika penguasa Toyotomi Hideyoshi melancarkan penganiayaan terhadap orang Kristen pada tahun 1596. Paulus ditangkap bersama para misionaris Fransiskan, dua Yesuit lain, dan sejumlah awam, termasuk katekis, tukang, dan anak-anak. Pada 5 Februari 1597, dua puluh enam martir disalibkan dan ditikam tombak di sebuah bukit di Nagasaki. Dari atas salib Paulus berkhotbah kepada orang banyak: ia dibunuh semata-mata karena mengajarkan Kristus, dan mengikuti teladan Kristus ia mengampuni para algojonya. Para martir ini dikanonisasi tahun 1862. Ketika misionaris kembali ke Jepang pada tahun 1860-an, mereka menemukan ribuan orang Kristen di sekitar Nagasaki yang diam-diam tetap memelihara iman.",
    "example": [
      "Ampunilah orang yang menyakiti kita dan doakan mereka.",
      "Wartakan iman dengan bahasa dan budaya kita sendiri secara wajar dan bangga.",
      "Jagalah iman dalam keluarga dengan setia walaupun lingkungan tidak mendukung."
    ],
    "patron": [
      "Jepang"
    ],
    "keywords": [
      "paul miki",
      "paulus miki",
      "martir jepang",
      "nagasaki",
      "yesuit",
      "26 martir",
      "salib"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/02/06/santi-paolo-miki--sacerdote--e-compagni--martiri-giapponesi.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-paul-miki-and-companions/"
    ]
  },
  {
    "id": "st-jerome-emiliani",
    "date": "02-08",
    "name": "St. Hieronimus Emiliani",
    "role": "Pendiri Somaskan",
    "years": "† 1537",
    "rank": "optional",
    "color": "white",
    "story": "Hieronimus berasal dari keluarga bangsawan Emiliani di Venesia. Seperti banyak pemuda Venesia pada zamannya ia memilih karier militer dan menjadi prajurit yang lalai dalam hidup beriman. Pada tahun 1511, saat mempertahankan benteng Castelnuovo di Quero, ia tertangkap dan dirantai di penjara. Dalam penderitaan itu ia belajar berdoa dan berjanji kepada Bunda Maria untuk bertobat bila dibebaskan. Setelah lolos, ia menepati janjinya: ia mendalami Kitab Suci, mengurus pendidikan keponakan-keponakannya, dan kemudian ditahbiskan imam. Ketika wabah dan kelaparan melanda Italia utara pada sekitar tahun 1528, ia merawat orang sakit dan memberi makan orang lapar dengan hartanya sendiri, lalu memutuskan membaktikan diri sepenuhnya kepada anak-anak yatim. Ia mendirikan rumah yatim piatu, tempat penampungan bagi perempuan yang ingin keluar dari pelacuran, dan sebuah rumah sakit. Bersama beberapa rekan ia membentuk kelompok yang kemudian menjadi Klerus Reguler Somaska, yang mendidik anak yatim dengan doa, pelajaran agama, dan keterampilan kerja. Ia wafat tahun 1537 karena penyakit yang tertular saat merawat orang sakit, dikanonisasi tahun 1767, dan pada tahun 1928 dinyatakan pelindung anak yatim dan kaum muda terlantar.",
    "example": [
      "Jadikan pengalaman pahit sebagai titik balik untuk bertobat dan berdoa.",
      "Perhatikan anak yatim dan anak terlantar, misalnya dengan menjadi orang tua asuh atau relawan.",
      "Gabungkan pendidikan iman dengan pembekalan keterampilan hidup."
    ],
    "patron": [
      "anak yatim",
      "anak terlantar"
    ],
    "keywords": [
      "jerome emiliani",
      "hieronimus emiliani",
      "girolamo",
      "somaska",
      "somaskan",
      "yatim piatu",
      "venesia"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/02/08/san-girolamo-emiliani--fondatore-dei-somaschi--patrono-degli-orf.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-jerome-emiliani/"
    ]
  },
  {
    "id": "st-josephine-bakhita",
    "date": "02-08",
    "name": "St. Yosefina Bakhita, Perawan",
    "role": "Biarawati Kanosian",
    "years": "± 1869–1947",
    "rank": "optional",
    "color": "white",
    "story": "Bakhita lahir sekitar tahun 1869 di sebuah desa di Darfur, Sudan. Ketika masih anak-anak ia diculik oleh pedagang budak, begitu terguncang sampai melupakan nama aslinya. Para penculik memberinya nama Bakhita, yang dalam bahasa Arab berarti “beruntung”. Ia dijual berkali-kali di pasar El Obeid dan Khartoum dan mengalami siksaan berat, termasuk tubuhnya digores dengan pisau berulang kali hingga meninggalkan bekas luka. Pada tahun 1883 ia dibeli oleh Callisto Legnani, konsul Italia di Khartoum, yang memperlakukannya dengan baik dan kemudian membawanya ke Italia. Ia menjadi pengasuh anak keluarga Michieli. Ketika dititipkan bersama anak itu pada para Suster Kanosian di Venesia, ia mengenal Yesus. Pada 9 Januari 1890 ia dibaptis, menerima Krisma dan Komuni Pertama dengan nama Yosefina. Ketika keluarga Michieli hendak membawanya kembali ke Afrika, ia menolak; pengadilan memutuskan bahwa ia orang merdeka karena perbudakan tidak sah di Italia. Tahun 1893 ia masuk biara Kanosian dan selama puluhan tahun melayani sebagai juru masak, sakristan, dan penjaga pintu di Schio, dikenal karena senyum dan kebaikannya. Ia wafat pada 8 Februari 1947 dan dikanonisasi tahun 2000.",
    "example": [
      "Ampunilah luka masa lalu dan biarkan Tuhan mengubahnya menjadi rahmat.",
      "Layani orang lain dengan senyum dalam tugas sederhana sehari-hari.",
      "Bersuaralah dan berdoalah bagi korban perdagangan manusia."
    ],
    "patron": [
      "Sudan",
      "korban perdagangan manusia"
    ],
    "keywords": [
      "josephine bakhita",
      "yosefina bakhita",
      "sudan",
      "darfur",
      "kanosian",
      "perbudakan",
      "perdagangan manusia"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/02/08/st--josephine-bakhita--virgin.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-josephine-bakhita/"
    ]
  },
  {
    "id": "st-scholastica",
    "date": "02-10",
    "name": "St. Skolastika, Perawan",
    "role": "Perawan dan Biarawati",
    "years": "± 480–543",
    "rank": "memorial",
    "color": "white",
    "story": "Skolastika lahir sekitar tahun 480 di Nursia, Italia, dan menurut tradisi adalah saudari kembar St. Benediktus. Hampir semua yang kita ketahui tentangnya berasal dari kitab Dialog karya St. Gregorius Agung. Sejak muda ia membaktikan hidupnya kepada Allah dan kemudian mendirikan komunitas biarawati di Plombariola, tidak jauh dari Biara Monte Cassino yang dipimpin saudaranya; karena itu ia dihormati sebagai biarawati Benediktin pertama. Kakak beradik itu bertemu setahun sekali di sebuah rumah di antara kedua biara untuk berbincang tentang hal-hal rohani. Menurut Gregorius, pada pertemuan terakhir mereka Skolastika memohon agar Benediktus tinggal sampai pagi, tetapi Benediktus menolak karena tidak mau melanggar Peraturan. Skolastika lalu berdoa sambil menangis, dan seketika turun badai hebat sehingga Benediktus tidak dapat pulang; mereka pun bercakap-cakap tentang Allah sepanjang malam. Tiga hari kemudian Benediktus melihat jiwa saudarinya naik ke surga dalam rupa seekor merpati putih. Ia memakamkannya di makam yang telah disiapkannya bagi dirinya sendiri di Monte Cassino, tempat mereka berdua kini dimakamkan bersama.",
    "example": [
      "Peliharalah hubungan keluarga yang saling mendukung dalam iman.",
      "Berdoalah dengan penuh kepercayaan, karena kasih dapat lebih kuat daripada aturan yang kaku.",
      "Sediakan waktu untuk percakapan rohani bersama orang-orang terdekat."
    ],
    "patron": [
      "biarawati klausura"
    ],
    "keywords": [
      "scholastica",
      "skolastika",
      "benediktus",
      "benediktin",
      "monte cassino",
      "nursia",
      "biarawati"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/02/10/st--scolastica--virgin--sister-di-s--benedetto.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-scholastica/"
    ]
  },
  {
    "id": "our-lady-of-lourdes",
    "date": "02-11",
    "name": "SP Maria dari Lourdes",
    "role": "Peringatan Penampakan Bunda Maria",
    "years": "",
    "rank": "optional",
    "color": "white",
    "story": "Pada 11 Februari 1858, Bernadette Soubirous, gadis berusia 14 tahun dari keluarga miskin di Lourdes, Prancis selatan, pergi mencari kayu bakar bersama saudarinya dan seorang teman di dekat gua Massabielle di tepi Sungai Gave. Di sana ia melihat sosok seorang perempuan muda berpakaian putih, berikat pinggang biru, dengan rosario di lengan dan mawar kuning di kakinya. Bernadette menyebutnya “aquero”, kata dialek setempat yang berarti “itu”. Mereka berdoa rosario bersama, lalu penampakan menghilang. Secara keseluruhan Bernadette mengalami delapan belas kali penampakan. Perempuan itu meminta agar para imam datang berprosesi dan membangun sebuah kapel di tempat itu, serta mengajak orang untuk berdoa dan bertobat. Pada 25 Februari Bernadette diminta menggali tanah, dan muncullah mata air yang hingga kini didatangi orang sakit. Pada 25 Maret, hari raya Kabar Sukacita, perempuan itu memperkenalkan diri: “Akulah Yang Dikandung Tanpa Noda”, padahal dogma itu baru dimaklumkan Paus Pius IX empat tahun sebelumnya. Bernadette diperiksa berkali-kali oleh dokter dan otoritas Gereja. Tahun 1862 Uskup Tarbes mengakui keaslian penampakan itu, dan pada tahun 1907 pesta ini diperluas ke seluruh Gereja. Lourdes kini menjadi tempat ziarah, doa, dan penyembuhan; Gereja mengakui puluhan kesembuhan ajaib di sana.",
    "example": [
      "Doakan rosario dengan setia, terutama bagi orang sakit.",
      "Perlakukan orang kecil dan sederhana dengan hormat, sebagaimana Bunda Maria menyapa Bernadette dengan sopan.",
      "Kunjungi dan hibur orang sakit di sekitar kita."
    ],
    "patron": [
      "orang sakit"
    ],
    "keywords": [
      "our lady of lourdes",
      "lourdes",
      "bernadette",
      "massabielle",
      "dikandung tanpa noda",
      "penampakan",
      "hari orang sakit sedunia"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/02/11/beata-maria-vergine-di-lourdes.html",
      "https://www.franciscanmedia.org/saint-of-the-day/our-lady-of-lourdes/"
    ]
  },
  {
    "id": "sts-cyril-methodius",
    "date": "02-14",
    "name": "St. Sirilus, Biarawan, dan St. Metodius, Uskup",
    "role": "Biarawan dan Uskup, Rasul Bangsa Slavia",
    "years": "abad ke-9",
    "rank": "memorial",
    "color": "white",
    "story": "Metodius (lahir sekitar 825) dan Sirilus (lahir sekitar 827, bernama asli Konstantinus) adalah dua bersaudara dari Tesalonika, Yunani. Metodius sempat menjadi pejabat pemerintahan Bizantium, sedangkan Sirilus menempuh pendidikan tinggi di Konstantinopel tetapi menolak jabatan tinggi. Pada tahun 863 mereka diutus ke Moravia Raya karena penguasa wilayah itu meminta misionaris yang dapat mengajar dalam bahasa Slavia. Untuk menerjemahkan Kitab Suci, Sirilus menciptakan sebuah abjad baru, abjad Glagolitik, yang menjadi dasar abjad yang kemudian dikenal sebagai Kiril. Mereka menerjemahkan Injil, Mazmur, surat-surat Paulus, dan buku-buku liturgi ke bahasa Slavonik, lalu merayakan liturgi dalam bahasa itu. Karena ditentang sebagian klerus Jerman, mereka pergi ke Roma, dan Paus Adrianus II menyetujui liturgi mereka. Sirilus menjadi biarawan dan wafat di Roma pada 14 Februari 869. Metodius ditahbiskan uskup dan meneruskan misi selama enam belas tahun, meski difitnah dan bahkan dipenjara sekitar tiga tahun, sampai dibebaskan atas campur tangan Paus Yohanes VIII. Ia wafat tahun 885. Pada 31 Desember 1980, Paus Yohanes Paulus II menetapkan keduanya sebagai pelindung Eropa.",
    "example": [
      "Wartakan iman dengan bahasa dan cara yang dimengerti orang di sekitar kita.",
      "Hargai kekayaan budaya dan bahasa setempat dalam hidup menggereja.",
      "Tetaplah sabar dan setia ketika karya baik kita disalahpahami."
    ],
    "patron": [
      "Eropa",
      "bangsa Slavia",
      "persatuan Gereja"
    ],
    "keywords": [
      "cyril and methodius",
      "sirilus",
      "metodius",
      "slavia",
      "glagolitik",
      "kiril",
      "moravia",
      "eropa"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/02/14/sts--cyril--monk-and-methodius--bishop-patrons-of-europe.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saints-cyril-and-methodius/"
    ]
  },
  {
    "id": "seven-holy-founders",
    "date": "02-17",
    "name": "Tujuh Pendiri Suci Ordo Hamba-hamba Maria (Servit)",
    "role": "Pendiri Ordo Servit",
    "years": "abad ke-13",
    "rank": "optional",
    "color": "white",
    "story": "Pada abad ke-13, kota Florence, Italia, makmur tetapi terkoyak oleh pertikaian politik dan saudara melawan saudara. Tujuh orang pedagang kaya, anggota sebuah perkumpulan awam yang berbakti kepada Santa Perawan Maria, memutuskan meninggalkan usaha dan rumah mereka, membagikan harta kepada orang miskin, dan hidup dalam doa serta tobat. Mereka adalah Bonfilius Monaldi, Bonajunta Manetti, Manettus dell’Antella, Amideus Amidei, Sostenes Sostegni, Hugo Uguccioni, dan Aleksius Falconieri. Sumber-sumber berbeda mengenai tahun tepatnya, sekitar 1233 hingga 1240. Karena banyak orang datang meminta nasihat dan ingin bergabung, mereka pindah ke lereng sunyi Monte Senario, dekat Florence, dan membangun gereja kecil bagi Maria. Mereka mengikuti Peraturan St. Agustinus dan memakai nama Hamba-hamba Maria (Servit), sebuah ordo yang memadukan hidup doa dengan pelayanan pastoral seperti ordo-ordo pengemis. Ordo ini sempat terancam dibubarkan, tetapi akhirnya mendapat pengesahan definitif dari Paus Benediktus XI pada tahun 1304. Aleksius Falconieri, satu-satunya pendiri yang masih hidup saat itu, wafat pada 17 Februari 1310. Ketujuhnya dikanonisasi bersama oleh Paus Leo XIII pada tahun 1888.",
    "example": [
      "Carilah teman seiman untuk saling menguatkan dalam doa dan pelayanan.",
      "Lepaskan kesibukan berlebihan agar ada ruang bagi Tuhan dan sesama.",
      "Teladani Bunda Maria dalam kesetiaan mendampingi orang yang menderita."
    ],
    "patron": [],
    "keywords": [
      "seven holy founders",
      "servit",
      "servite",
      "hamba-hamba maria",
      "florence",
      "monte senario",
      "falconieri"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/02/17/sts--seven-fonders-of-the-order-of-the-servants-of-mary-among-wh.html",
      "https://www.franciscanmedia.org/saint-of-the-day/seven-founders-of-the-servite-order/"
    ]
  },
  {
    "id": "st-peter-damian",
    "date": "02-21",
    "name": "St. Petrus Damianus",
    "role": "Uskup dan Pujangga Gereja",
    "years": "1007–1072",
    "rank": "optional",
    "color": "white",
    "story": "Petrus lahir di Ravenna, Italia, pada tahun 1007 sebagai anak bungsu dari tujuh bersaudara. Ia yatim piatu sejak kecil dan sempat diperlakukan buruk oleh salah satu kakaknya, sampai kakaknya yang lain, Damianus, seorang imam agung di dekat Ravenna, merawat dan menyekolahkannya. Sebagai tanda terima kasih Petrus menambahkan nama Damianus pada namanya. Ia menjadi pengajar yang cakap, tetapi kemudian meninggalkan karier itu dan masuk pertapaan Kamaldoli di Fonte Avellana sekitar tahun 1035. Di sana ia hidup keras dalam doa, puasa, dan studi Kitab Suci, kemudian dipilih menjadi prior dan mendirikan beberapa pertapaan baru. Gereja pada masanya dilanda simoni, jual-beli jabatan gerejawi, serta pelanggaran selibat klerus. Paus Stefanus IX memanggilnya ke Roma tahun 1057 dan mengangkatnya menjadi kardinal dan Uskup Ostia. Ia diutus ke berbagai tempat sebagai pendamai dan pembaru, dan menulis banyak surat, khotbah, dan riwayat orang kudus. Sejak muda ia biasa mengajak orang miskin makan semeja dengannya. Setelah diizinkan kembali menjadi biarawan, ia wafat di Faenza pada 22 Februari 1072 sepulang dari misi perdamaian di Ravenna. Tahun 1828 ia dinyatakan Pujangga Gereja.",
    "example": [
      "Bersyukurlah kepada orang yang telah menolong dan membesarkan kita.",
      "Ajaklah orang miskin makan bersama dan layani mereka secara pribadi.",
      "Dukunglah pembaruan dan kejujuran dalam Gereja, dimulai dari hidup kita sendiri."
    ],
    "patron": [],
    "keywords": [
      "peter damian",
      "petrus damianus",
      "ravenna",
      "fonte avellana",
      "kamaldoli",
      "simoni",
      "pembaruan gereja"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/02/21/st-peter-damian--bishop-of-ostia-and-cardinal--doctor-of-the-chu.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-peter-damian/"
    ]
  },
  {
    "id": "chair-st-peter",
    "date": "02-22",
    "name": "Takhta St. Petrus, Rasul",
    "role": "Pesta Takhta Rasul Petrus",
    "years": "",
    "rank": "feast",
    "color": "white",
    "story": "Pesta ini mengenang bahwa Kristus memilih Petrus untuk memimpin dan melayani seluruh Gereja. Kata “takhta” (cathedra) di sini tidak menunjuk pada kursi sebagai perabot, melainkan pada tugas dan wewenang orang yang mendudukinya. Injil mencatat bahwa Yesus meminta Petrus, setelah bertobat dari penyangkalannya, untuk menguatkan saudara-saudaranya (Luk 22:32). Setelah kebangkitan dan Pentakosta, Petrus menjadi juru bicara para rasul: ia berkhotbah dengan berani di hadapan para penguasa, berperan dalam Konsili Yerusalem, dan menjadi yang pertama mewartakan Kabar Gembira kepada bangsa-bangsa lain. Kuasa penyembuhan Yesus bekerja melaluinya, seperti dalam penyembuhan orang lumpuh di Bait Allah dan dibangkitkannya Tabita. Petrus juga manusia biasa: Paulus pernah menegurnya secara terbuka karena menjauhi orang-orang bukan Yahudi demi menyenangkan orang Kristen Yahudi (Gal 2:11-14). Pada masa Kaisar Nero, Petrus wafat sebagai martir di Bukit Vatikan, Roma. Umat Kristen abad ke-2 membangun tugu peringatan kecil di atas makamnya, dan Kaisar Konstantinus membangun basilika di sana pada abad ke-4. Pesta ini mengajak umat berdoa bagi Paus, pengganti Petrus, sebagai tanda kesatuan Gereja universal.",
    "example": [
      "Doakan Paus dan para uskup secara teratur dalam doa pribadi maupun keluarga.",
      "Belajarlah bangkit lagi setelah jatuh, seperti Petrus yang bertobat dan dipercaya kembali.",
      "Jagalah kesatuan dalam komunitas Gereja dan hindari perpecahan."
    ],
    "patron": [],
    "keywords": [
      "chair of saint peter",
      "takhta petrus",
      "cathedra petri",
      "paus",
      "petrus",
      "vatikan",
      "kesatuan gereja"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/chair-of-saint-peter/"
    ]
  },
  {
    "id": "st-polycarp",
    "date": "02-23",
    "name": "St. Polikarpus, Uskup dan Martir",
    "role": "Uskup dan Martir",
    "years": "± 69–155",
    "rank": "memorial",
    "color": "white",
    "story": "Polikarpus lahir sekitar tahun 69–70 dari orang tua Kristen. Ia belajar langsung dari para rasul dan menjadi murid Rasul Yohanes. St. Ireneus, muridnya, mencatat bahwa para rasul sendiri mengangkatnya menjadi Uskup Smirna di Asia Kecil (kini Izmir, Turki). Sebagai uskup ia setia menjaga ajaran para rasul, mewartakan Injil kepada orang-orang bukan Kristen, melawan ajaran sesat, dan menurut Ireneus sangat peduli kepada para janda dan budak. Sekitar tahun 107 ia menyambut St. Ignasius dari Antiokhia yang sedang dibawa ke Roma untuk dihukum mati; Ignasius kemudian menulis surat kepadanya. Surat Polikarpus kepada jemaat di Filipi masih tersimpan hingga kini. Menjelang tahun 155 ia pergi ke Roma mewakili Gereja-gereja Asia untuk membicarakan tanggal Paskah dengan Paus Anisetus; mereka tidak sepakat, tetapi tetap bersahabat. Ketika ditangkap pada masa penganiayaan, ia didesak mengutuk Kristus dan menjawab bahwa ia telah melayani-Nya selama 86 tahun dan Kristus tidak pernah berbuat jahat kepadanya, maka bagaimana ia dapat menghujat Rajanya. Ia dihukum dibakar, tetapi menurut kesaksian Kisah Kemartirannya api tidak melukainya, sehingga ia dibunuh dengan pedang. Kisah itu adalah catatan kemartiran tertua yang paling dapat dipercaya.",
    "example": [
      "Setialah kepada Kristus sampai usia lanjut, dan wariskan iman yang kita terima kepada generasi berikutnya.",
      "Jagalah persahabatan walaupun berbeda pendapat dengan saudara seiman.",
      "Pedulilah kepada janda, orang lemah, dan mereka yang tidak berdaya."
    ],
    "patron": [
      "penderita sakit telinga"
    ],
    "keywords": [
      "polycarp",
      "polikarpus",
      "smirna",
      "smyrna",
      "rasul yohanes",
      "bapa apostolik",
      "martir"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/02/23/st--polycarp--bishop-of--smirne-and-martiyr.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-polycarp/"
    ]
  },
  {
    "id": "st-gregory-narek",
    "date": "02-27",
    "name": "St. Gregorius dari Narek",
    "role": "Abas dan Pujangga Gereja",
    "years": "± 950–1010",
    "rank": "optional",
    "color": "white",
    "story": "Gregorius lahir antara tahun 945 dan 951 di Vaspurakan, Armenia historis, di tepi Danau Van (kini wilayah Turki), dalam keluarga terpelajar. Setelah ibunya meninggal, ayahnya, Khosrov, menjadi uskup agung dan menitipkan pendidikan Gregorius kepada pamannya, Ananias, abas Biara Narek yang terkenal sebagai pusat studi Kitab Suci dan para Bapa Gereja. Di sana Gregorius belajar Kitab Suci serta para penyair dan filsuf Yunani, menjadi rahib, ditahbiskan imam pada tahun 977, lalu mengajar teologi. Ia menulis tafsiran mistik atas Kidung Agung, khotbah, himne, dan pujian bagi Santa Perawan Maria. Karya terbesarnya adalah Kitab Ratapan (Kitab Doa), sebuah puisi doa panjang yang ia sebut “ensiklopedia doa bagi segala bangsa”; karya ini begitu dicintai di Armenia sehingga dahulu anak-anak sekolah membacanya setelah belajar abjad. Gregorius wafat sekitar tahun 1010 dan dimakamkan di Biara Narek, yang menjadi tempat ziarah selama berabad-abad sampai dihancurkan pada masa genosida 1915. Pada tahun 2015, peringatan seratus tahun genosida Armenia, Paus Fransiskus menyatakannya sebagai Pujangga Gereja.",
    "example": [
      "Berdoalah dengan jujur di hadapan Tuhan, termasuk mengungkapkan kelemahan dan dosa kita.",
      "Gunakan bakat menulis atau seni untuk memuliakan Tuhan.",
      "Doakan persatuan umat Kristen dan bangsa-bangsa yang menderita."
    ],
    "patron": [],
    "keywords": [
      "gregory of narek",
      "gregorius narek",
      "armenia",
      "narek",
      "kitab ratapan",
      "doa",
      "pujangga gereja"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/02/27/san-gregorio-di-narek.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-gregory-of-narek/"
    ]
  },
  {
    "id": "st-casimir",
    "date": "03-04",
    "name": "St. Kasimirus",
    "role": "Pangeran",
    "years": "1458–1484",
    "rank": "optional",
    "color": "white",
    "story": "Kasimirus lahir pada 3 Oktober 1458 di Kastel Krakow, putra Raja Polandia dan Adipati Agung Lituania, Kasimirus IV. Ia dididik oleh Jan Długosz, seorang kanon dan sejarawan terkenal, yang mengagumi kecerdasan dan kehalusan budinya. Sejak remaja ia hidup sangat disiplin: tidur di lantai, berdoa hingga larut malam, dan memutuskan hidup selibat seumur hidup. Pada usia sekitar tiga belas tahun ayahnya mengutusnya merebut takhta Hungaria, tetapi pasukannya kalah jumlah dan banyak yang desersi karena tidak dibayar; atas nasihat para perwira ia pulang. Ayahnya kecewa dan mengurungnya beberapa bulan. Sejak itu Kasimirus menolak terlibat dalam perang dan tetap menolak dinikahkan dengan putri kaisar. Ia membantu ayahnya memerintah dan dengan rendah hati mendorongnya bertindak adil. Ia sangat peduli kepada orang miskin, yatim piatu, dan janda, serta berdevosi kepada Ekaristi dan Bunda Maria. Ia jatuh sakit paru-paru dan wafat pada 4 Maret 1484 di Grodno dalam usia 25 tahun, lalu dimakamkan di Vilnius. Ia dihormati sebagai pelindung Lituania.",
    "example": [
      "Gunakan kedudukan atau pengaruh untuk mendorong keadilan, bukan untuk kepentingan diri.",
      "Jagalah kemurnian dan disiplin diri di tengah godaan kemewahan.",
      "Sediakan waktu untuk adorasi Ekaristi dan doa kepada Bunda Maria."
    ],
    "patron": [
      "Lituania",
      "Polandia",
      "kaum muda"
    ],
    "keywords": [
      "casimir",
      "kasimirus",
      "lituania",
      "polandia",
      "vilnius",
      "pangeran",
      "kemurnian"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/03/04/san-casimiro--patrono-della-lituania.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-casimir/"
    ]
  },
  {
    "id": "sts-perpetua-felicity",
    "date": "03-07",
    "name": "St. Perpetua dan St. Felisitas, Martir",
    "role": "Martir",
    "years": "† 203",
    "rank": "memorial",
    "color": "red",
    "story": "Perpetua adalah seorang perempuan bangsawan muda di Kartago, Afrika Utara, terpelajar, menikah, dan memiliki bayi laki-laki yang masih menyusu. Ibunya Kristen, sedangkan ayahnya kafir dan berkali-kali memohon agar ia menyangkal imannya. Perpetua menjawab bahwa seperti sebuah tempayan tidak dapat disebut dengan nama lain, demikian pula ia tidak dapat menyebut dirinya selain orang Kristen. Felisitas adalah budaknya yang sedang hamil. Bersama Revokatus, Saturninus, dan Sekundulus, mereka ditangkap ketika masih katekumen pada masa Kaisar Septimius Severus. Katekis mereka, Saturus, menyerahkan diri secara sukarela agar dapat menemani mereka di penjara, dan mereka pun dibaptis. Perpetua menulis catatan harian di penjara tentang penderitaan, kecemasannya akan bayinya, dan penglihatan-penglihatannya; catatan ini kemudian dilengkapi oleh seorang saksi mata dan menjadi salah satu kisah kemartiran tertua. Felisitas melahirkan seorang bayi perempuan beberapa hari sebelum hukuman, karena hukum Romawi tidak mengizinkan perempuan hamil dihukum mati. Pada 7 Maret 203 mereka dibawa ke arena di Kartago; sebagian dibunuh oleh binatang buas, sedangkan Perpetua dan Felisitas akhirnya dipenggal.",
    "example": [
      "Akuilah identitas sebagai orang Kristen dengan tenang dan berani.",
      "Hargai persahabatan rohani yang melampaui perbedaan status sosial.",
      "Doakan para ibu yang menghadapi kesulitan dan bergantunglah pada Tuhan dalam kecemasan."
    ],
    "patron": [
      "ibu",
      "janda"
    ],
    "keywords": [
      "perpetua",
      "felicity",
      "felisitas",
      "felicitas",
      "kartago",
      "afrika",
      "martir",
      "ibu"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/03/07/sante-perpetua-e-felicita--martiri.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saints-perpetua-and-felicity/",
      "https://sourcebooks.web.fordham.edu/source/perpetua.asp"
    ]
  },
  {
    "id": "st-john-god",
    "date": "03-08",
    "name": "St. Yohanes dari Allah",
    "role": "Biarawan, Pendiri Bruder Hospitaler",
    "years": "1495–1550",
    "rank": "optional",
    "color": "white",
    "story": "Yohanes, bernama asli Juan Ciudad, lahir di sebuah desa kecil di Portugal. Pada usia delapan tahun ia meninggalkan rumah dan dibesarkan sebagai gembala di Oropesa, Spanyol. Kemudian ia menjadi prajurit dan bertempur di Pavia dan Wina, dan selama itu meninggalkan praktik imannya. Pada usia sekitar empat puluh tahun ia mulai menyadari dosa-dosanya dan ingin mengabdikan sisa hidupnya kepada Tuhan. Setelah berkelana sampai ke Afrika, ia menetap di Granada dan membuka toko buku rohani. Tersentuh oleh khotbah St. Yohanes dari Avila, ia bertobat secara begitu mencolok sampai dianggap gila dan dimasukkan ke rumah sakit jiwa. Di sana ia menyaksikan betapa kejamnya perlakuan terhadap orang sakit jiwa. Atas nasihat Yohanes dari Avila, ia mengarahkan tobatnya menjadi pelayanan nyata. Ia membuka rumah bagi orang sakit miskin di Granada, mula-mula dengan mengemis sendiri sambil berseru “Berbuat baiklah, saudara-saudara”. Banyak orang lalu mendukungnya. Ia merawat pasien dengan mendengarkan dan memenuhi kebutuhan mereka secara utuh. Ia wafat pada tahun 1550 dalam usia 55 tahun, berlutut sambil memegang salib. Para pengikutnya kemudian membentuk Ordo Bruder Hospitaler St. Yohanes dari Allah.",
    "example": [
      "Layani orang sakit, terutama yang miskin dan terabaikan, dengan sabar dan penuh hormat.",
      "Pedulilah pada martabat orang dengan gangguan jiwa.",
      "Jangan putus asa atas masa lalu, karena pertobatan selalu mungkin."
    ],
    "patron": [
      "orang sakit",
      "rumah sakit",
      "perawat",
      "petugas pemadam kebakaran",
      "penjual buku"
    ],
    "keywords": [
      "john of god",
      "yohanes dari allah",
      "juan ciudad",
      "granada",
      "hospitaler",
      "fatebenefratelli",
      "rumah sakit"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/03/08/san-giovanni-di-dio--fondatore-dei-fatebenefratelli--patrono-deg.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-john-of-god/"
    ]
  },
  {
    "id": "st-frances-rome",
    "date": "03-09",
    "name": "St. Fransiska dari Roma",
    "role": "Biarawati, Istri dan Ibu",
    "years": "1384–1440",
    "rank": "optional",
    "color": "white",
    "story": "Fransiska lahir dari keluarga kaya di Roma. Sejak muda ia tertarik pada hidup membiara, tetapi orang tuanya menjodohkannya dengan seorang bangsawan muda, Lorenzo Ponziani. Ia menjadi istri yang setia dan penuh kasih. Bersama iparnya, Vannozza, yang juga rindu hidup doa dan pelayanan, ia mulai menolong orang miskin dengan restu suami mereka. Fransiska mengubah rumah keluarganya di Trastevere menjadi pusat bantuan: orang miskin tahu bahwa di sana mereka akan mendapat roti, pakaian, dan sedikit uang. Ketika wabah melanda Roma, salah satu putranya meninggal; ia menjual harta miliknya untuk menolong orang sakit, dan ketika semuanya habis, ia bersama Vannozza mengemis dari pintu ke pintu. Kemudian putrinya juga meninggal, dan Fransiska membuka sebagian rumahnya sebagai rumah sakit. Ia lalu mendirikan perkumpulan perempuan yang mempersembahkan diri kepada Allah dan melayani orang miskin tanpa kaul, yang kemudian dikenal sebagai Oblat Tor de’ Specchi. Ia tetap tinggal bersama suaminya sampai suaminya wafat, lalu pada tahun 1436 bergabung dengan komunitas itu. Ia wafat pada 9 Maret 1440, dan warga Roma menyebutnya “Santa dari Roma”.",
    "example": [
      "Hayati panggilan sebagai suami atau istri dengan setia sambil tetap peka pada kebutuhan orang miskin.",
      "Jadikan rumah kita tempat yang ramah bagi orang yang membutuhkan.",
      "Tetaplah percaya kepada Tuhan di tengah duka kehilangan anggota keluarga."
    ],
    "patron": [
      "pengemudi kendaraan",
      "janda"
    ],
    "keywords": [
      "frances of rome",
      "fransiska romana",
      "francesca romana",
      "roma",
      "oblat",
      "ibu rumah tangga",
      "pelayanan orang miskin"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/03/09/santa-francesca-romana--fondatrice-delle-oblate-di-tor-de-specch.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-frances-of-rome/",
      "https://www.newadvent.org/cathen/06205c.htm"
    ]
  },
  {
    "id": "st-patrick",
    "date": "03-17",
    "name": "St. Patrick, Uskup",
    "role": "Uskup, Rasul Irlandia",
    "years": "abad ke-5",
    "rank": "optional",
    "color": "white",
    "story": "Patrick lahir di Britania Romawi dalam keluarga Kristen, sekitar akhir abad ke-4; tanggal pasti hidupnya tidak diketahui. Pada usia sekitar enam belas tahun ia diculik perompak Irlandia dan dijual sebagai budak di Irlandia, tempat ia dipaksa menggembalakan ternak dalam kelaparan dan kedinginan. Dalam bukunya, Confessio, salah satu dari sedikit tulisannya yang pasti asli, ia bercerita bahwa selama masa itu kasih dan takutnya akan Allah bertumbuh, dan ia berdoa ratusan kali siang dan malam. Setelah enam tahun ia berhasil melarikan diri dan pulang ke keluarganya. Kemudian dalam sebuah mimpi ia seakan mendengar suara orang Irlandia memohon agar ia datang dan berjalan bersama mereka. Ia belajar dan ditahbiskan; meskipun ada yang meragukan pendidikannya, ia akhirnya diutus sebagai uskup ke Irlandia. Ia berkarya hampir empat puluh tahun di tengah tantangan para druid, bahkan pernah dipenjara. Ia memperoleh perlindungan raja-raja setempat, membaptis banyak orang, menahbiskan imam, mendirikan biara, dan menata Gereja di sana; tahta keuskupannya berada di Armagh. Menurut tradisi, ia menjelaskan misteri Tritunggal dengan daun semanggi berhelai tiga. Ia wafat pada 17 Maret, menurut tradisi tahun 461, dan dimakamkan di Downpatrick.",
    "example": [
      "Ubahlah pengalaman pahit menjadi kesempatan untuk mendekat kepada Tuhan dalam doa.",
      "Beranilah kembali melayani orang yang pernah menyakiti kita.",
      "Tetaplah setia pada panggilan walaupun diremehkan karena kekurangan pendidikan atau kemampuan."
    ],
    "patron": [
      "Irlandia",
      "Nigeria",
      "insinyur"
    ],
    "keywords": [
      "patrick",
      "patrik",
      "irlandia",
      "ireland",
      "semanggi",
      "confessio",
      "armagh",
      "misi"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/03/17/st--patrick--bishop--disciple-of-ireland-.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-patrick/"
    ]
  },
  {
    "id": "st-cyril-jerusalem",
    "date": "03-18",
    "name": "St. Sirilus dari Yerusalem",
    "role": "Uskup dan Pujangga Gereja",
    "years": "± 315–386",
    "rank": "optional",
    "color": "white",
    "story": "Sirilus lahir sekitar tahun 315, kemungkinan di Yerusalem, pada masa ketika agama Kristen baru keluar dari persembunyian di bawah Kaisar Konstantinus. Ia menerima iman dari orang tuanya dan sejak muda hidup sederhana serta selibat. Setelah ditahbiskan imam, ia ditugasi mempersiapkan para katekumen menerima Baptis selama masa Prapaskah dan membina mereka yang baru dibaptis pada masa Paskah. Dari masa ini berasal Katekese-katekesenya yang terkenal, yang hingga kini menjadi saksi berharga tentang liturgi dan ajaran Gereja abad ke-4. Sekitar tahun 348 ia menjadi Uskup Yerusalem. Ia dikenal sebagai pendamai, tetapi tegas melawan perpecahan, bidaah, dan kebobrokan moral. Konflik dengan Akakius, Uskup Kaisarea yang condong pada Arianisme, membuatnya beberapa kali dicopot dan dibuang; ia pernah dituduh menjual harta Gereja untuk menolong orang miskin. Separuh masa jabatannya ia lewatkan di pembuangan, termasuk masa panjang di bawah Kaisar Valens. Setelah kembali, pada tahun 381 ia mengikuti Konsili Konstantinopel dan menerima rumusan syahadat Nicea-Konstantinopel. Ia wafat sekitar tahun 386. Pada abad ke-19 ia dinyatakan sebagai Pujangga Gereja.",
    "example": [
      "Pelajari dan jelaskan iman dengan bahasa sederhana, misalnya saat mendampingi katekumen atau anak-anak.",
      "Dukung saudara-saudari yang sedang mempersiapkan diri untuk dibaptis.",
      "Tetaplah sabar dan jujur saat difitnah atau disalahpahami."
    ],
    "patron": [],
    "keywords": [
      "cyril of jerusalem",
      "sirilus",
      "yerusalem",
      "katekese",
      "katekumen",
      "arianisme",
      "syahadat"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/03/18/san-cirillo--vescovo-di-gerusalemme-e-dottore-della-chiesa.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-cyril-of-jerusalem/",
      "https://www.newadvent.org/cathen/04595b.htm"
    ]
  },
  {
    "id": "st-joseph",
    "date": "03-19",
    "name": "St. Yusuf, Suami SP Maria",
    "role": "Suami Santa Perawan Maria, Pelindung Gereja Semesta",
    "years": "abad ke-1",
    "rank": "solemnity",
    "color": "white",
    "story": "Yusuf adalah tunangan dan kemudian suami Maria, keturunan Daud, dan seorang tukang di Nazaret. Injil Matius menyebutnya “orang yang tulus hati” atau benar. Ketika mengetahui Maria mengandung, ia tidak ingin mempermalukannya di depan umum dan bermaksud menceraikannya diam-diam. Lalu malaikat Tuhan menampakkan diri dalam mimpi dan berkata agar ia tidak takut mengambil Maria sebagai istrinya, karena anak yang dikandungnya berasal dari Roh Kudus, dan ia harus menamai-Nya Yesus. Yusuf taat. Setelah Yesus lahir, malaikat memperingatkannya bahwa Herodes hendak membunuh Anak itu; Yusuf segera membawa keluarganya mengungsi ke Mesir, lalu kembali dan menetap di Nazaret. Ia membesarkan dan melindungi Yesus serta mengajarinya pekerjaan tukang, sehingga orang menyebut Yesus “anak tukang kayu”. Injil mencatat bagaimana ia dan Maria dengan cemas mencari Yesus yang berusia dua belas tahun dan menemukan-Nya di Bait Allah. Tidak ada satu pun perkataan Yusuf yang tercatat dalam Injil, dan ia tidak muncul lagi pada masa karya publik Yesus; kemungkinan ia sudah wafat. Menurut tradisi, ia wafat didampingi Yesus dan Maria, sehingga ia dihormati sebagai pelindung orang yang menghadapi ajal. Pada tahun 1870 Paus Pius IX menyatakannya Pelindung Gereja Semesta.",
    "example": [
      "Jadilah ayah dan pelindung keluarga yang setia, rendah hati, dan bertanggung jawab.",
      "Taatilah kehendak Tuhan walaupun belum sepenuhnya memahami jalannya.",
      "Kerjakan tugas sehari-hari dengan tekun dan diam-diam, tanpa mencari pujian."
    ],
    "patron": [
      "Gereja Semesta",
      "keluarga",
      "ayah",
      "pekerja",
      "tukang kayu",
      "orang yang menjelang ajal"
    ],
    "keywords": [
      "joseph",
      "yusuf",
      "yosef",
      "suami maria",
      "nazaret",
      "tukang kayu",
      "keluarga kudus",
      "ayah"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/03/19/st--joseph--groom-of-b--mary--patron-of-the-univeral-church.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-joseph-husband-of-mary/",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-joseph-the-worker/"
    ]
  },
  {
    "id": "st-turibius",
    "date": "03-23",
    "name": "St. Turibius dari Mogrovejo, Uskup",
    "role": "Uskup",
    "years": "1538–1606",
    "rank": "optional",
    "color": "white",
    "story": "Turibius lahir pada tahun 1538 di Mayorga, Spanyol, dari keluarga bangsawan Mogrovejo. Ia ahli hukum Gereja, mengajar di Universitas Salamanca, dan menjadi hakim di Granada. Pada tahun 1580, ketika ia masih awam, Raja Filipus II mengusulkannya menjadi Uskup Agung Lima, Peru. Ia keberatan, tetapi akhirnya ditahbiskan imam lalu uskup, dan berangkat ke Peru. Di sana ia menemukan penindasan kolonial yang parah terhadap penduduk asli serta penyimpangan di kalangan klerus. Ia memulai pembaruan dari para imam dan dari teladan hidupnya sendiri, dengan banyak berdoa. Ia belajar bahasa Quechua dan Aymara, mewajibkan para imam mempelajarinya, dan menerbitkan katekismus dalam bahasa-bahasa itu. Selama bertahun-tahun ia mengunjungi seluruh keuskupannya yang sangat luas, sering tanpa tempat tidur dan makanan. Ia mendirikan sekitar seratus paroki, menyelenggarakan konsili dan sinode, dan menerimakan Sakramen Krisma kepada St. Rosa dari Lima. Kepada orang miskin yang malu menerima derma ia memberi bantuan secara diam-diam. Ia wafat dalam sebuah perjalanan pastoral di Saña pada tahun 1606, dikanonisasi tahun 1726, dan dinyatakan pelindung para uskup Amerika Latin.",
    "example": [
      "Pelajari bahasa dan budaya orang yang kita layani agar dapat sungguh mendekati mereka.",
      "Bela martabat orang yang tertindas, terutama masyarakat adat.",
      "Berilah bantuan secara diam-diam supaya tidak mempermalukan penerimanya."
    ],
    "patron": [
      "Peru",
      "para uskup Amerika Latin"
    ],
    "keywords": [
      "turibius of mogrovejo",
      "toribio",
      "turibius",
      "lima",
      "peru",
      "misi",
      "masyarakat adat"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/03/23/san-turibio-de-mogrovejo--vescovo-di-lima.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-turibius-of-mogrovejo/"
    ]
  },
  {
    "id": "st-francis-paola",
    "date": "04-02",
    "name": "St. Fransiskus dari Paola, Pertapa",
    "role": "Pertapa, Pendiri Ordo Minimi",
    "years": "1416–1507",
    "rank": "optional",
    "color": "white",
    "story": "Fransiskus lahir di Paola, Calabria, Italia selatan, pada 27 Maret 1416. Ketika kecil ia menderita infeksi mata yang parah; orang tuanya berjanji kepada St. Fransiskus dari Assisi bahwa jika ia sembuh, ia akan mengenakan jubah Fransiskan selama setahun. Setelah sembuh, pada usia lima belas tahun ia tinggal di biara Fransiskan untuk memenuhi janji itu. Sesudah berziarah ke Assisi dan Roma bersama orang tuanya, ia hidup sebagai pertapa di tempat terpencil dekat Paola. Para pengikut mulai berdatangan, dan pada tahun 1474 Paus Sixtus IV mengakui komunitas mereka. Fransiskus kemudian menamai mereka “Minimi”, yang terkecil dalam rumah Allah, dan selain tiga kaul biasa mereka menjalani puasa Prapaskah sepanjang tahun. Ia dikenal sebagai pembuat mukjizat dan pembela orang miskin, dan berani menegur Raja Napoli. Menurut tradisi, ia menyeberangi selat ke Sisilia dengan membentangkan jubahnya di atas air. Atas permintaan Paus, ia pergi ke Prancis untuk mendampingi Raja Louis XI yang sakit menjelang ajal, dan tinggal di sana sekitar 25 tahun sambil berperan bagi perdamaian. Ia wafat di Tours pada 2 April 1507 dan dikanonisasi tahun 1519.",
    "example": [
      "Jadikan kerendahan hati ciri hidup kita dan rela menjadi yang terkecil.",
      "Imbangi kesibukan dengan waktu doa dan puasa yang teratur.",
      "Beranilah membela orang miskin di hadapan mereka yang berkuasa."
    ],
    "patron": [
      "pelaut",
      "Calabria"
    ],
    "keywords": [
      "francis of paola",
      "fransiskus paola",
      "minimi",
      "calabria",
      "pertapa",
      "mukjizat",
      "kerendahan hati"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/04/02/st---francis-of-paola---hermit--founder-of-the-order-of-minims.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-francis-of-paola/"
    ]
  },
  {
    "id": "st-isidore",
    "date": "04-04",
    "name": "St. Isidorus dari Sevilla",
    "role": "Uskup dan Pujangga Gereja",
    "years": "± 560–636",
    "rank": "optional",
    "color": "white",
    "story": "Isidorus lahir sekitar tahun 560 di Kartagena, Spanyol, dalam keluarga yang memberi Gereja empat orang kudus: kakaknya Leander, saudaranya Fulgensius, dan saudarinya Florentina. Ayahnya meninggal ketika ia masih kecil, dan ia dibesarkan serta dididik oleh Leander. Pada masa itu Spanyol terbelah antara penduduk Katolik Romawi dan bangsa Visigoth yang menganut Arianisme. Ketika Leander wafat, Isidorus menggantikannya sebagai Uskup Sevilla dan memimpin selama sekitar 36 tahun. Ia berjuang menyebarkan ajaran iman, melawan bidaah, dan membantu pertobatan bangsa Visigoth; ia memimpin Konsili Toledo tahun 633. Ia mewajibkan pendirian seminari di setiap keuskupan, menulis peraturan bagi kaum religius, dan menyempurnakan liturgi Mozarab yang masih dipakai di Toledo. Ia sangat terpelajar dan menulis banyak buku, termasuk Etymologiae, ensiklopedia dua puluh jilid yang dipakai sebagai buku pelajaran selama berabad-abad; karena itu ia dijuluki “Guru Abad Pertengahan”. Menjelang akhir hidupnya ia memperbanyak amal sampai rumahnya penuh orang miskin dari pagi hingga malam. Ia wafat pada 4 April 636. Karena karya ensiklopedisnya, ia sering diusulkan sebagai pelindung internet.",
    "example": [
      "Tekunlah belajar dan gunakan ilmu untuk melayani sesama dan Gereja.",
      "Gunakan internet dan teknologi secara bijak untuk menyebarkan kebenaran.",
      "Padukan kecerdasan dengan kemurahan hati kepada orang miskin."
    ],
    "patron": [
      "pengguna internet",
      "pengguna komputer",
      "pelajar"
    ],
    "keywords": [
      "isidore of seville",
      "isidorus",
      "sevilla",
      "spanyol",
      "etymologiae",
      "ensiklopedia",
      "internet"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/04/04/sant-isidoro--vescovo-di-siviglia-e-dottore-della-chiesa.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-isidore-of-seville/",
      "https://www.newadvent.org/cathen/08186a.htm"
    ]
  },
  {
    "id": "st-vincent-ferrer",
    "date": "04-05",
    "name": "St. Vinsensius Ferrer, Imam",
    "role": "Imam Dominikan, Pengkhotbah",
    "years": "1350–1419",
    "rank": "optional",
    "color": "white",
    "story": "Vinsensius lahir di Valencia, Spanyol, pada 23 Januari 1350, anak seorang notaris. Meskipun ditentang orang tuanya, ia masuk Ordo Dominikan pada usia muda, belajar dengan cemerlang, dan mengajar logika, filsafat, serta teologi. Ia hidup pada masa Skisma Barat, ketika Gereja terpecah antara dua, lalu tiga, paus yang saling bersaing. Vinsensius semula yakin akan keabsahan paus di Avignon dan bekerja bagi Kardinal Pedro de Luna, yang kemudian menjadi “paus” Avignon dengan nama Benediktus XIII dan menjadikan Vinsensius bapa pengakuannya. Namun Benediktus menolak mundur demi persatuan Gereja. Vinsensius jatuh sakit dan kecewa, lalu sekitar tahun 1398 merasa diutus Tuhan untuk berkeliling mewartakan Kristus. Selama kira-kira dua puluh tahun ia berkhotbah di Spanyol, Prancis, Swiss, dan Italia utara, sering berjalan kaki atau menunggang keledai, menyerukan pertobatan dan mengingatkan akan pengadilan terakhir; karena itu ia dijuluki “Malaikat Pengadilan”. Ribuan orang mengikutinya. Akhirnya ia sendiri menyatakan bahwa Benediktus bukan paus yang sah, yang membantu mengakhiri skisma. Ia wafat dalam perjalanan misi di Vannes, Prancis, pada 5 April 1419.",
    "example": [
      "Doakan dan usahakan persatuan dalam Gereja dan keluarga.",
      "Beranilah mengakui kesalahan penilaian dan berubah sikap demi kebenaran.",
      "Wartakan pertobatan terutama lewat teladan hidup, doa, dan puasa."
    ],
    "patron": [
      "pembangun",
      "pengusaha",
      "rekonsiliasi"
    ],
    "keywords": [
      "vincent ferrer",
      "vinsensius ferrer",
      "dominikan",
      "valencia",
      "skisma barat",
      "pengkhotbah",
      "pertobatan"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/04/05/san-vincenzo-ferrer--sacerdote-domenicano.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-vincent-ferrer/",
      "https://www.newadvent.org/cathen/15437a.htm"
    ]
  },
  {
    "id": "st-john-baptist-de-la-salle",
    "date": "04-07",
    "name": "St. Yohanes Baptista de La Salle, Imam",
    "role": "Imam, Pendiri Bruder Sekolah Kristen",
    "years": "± 1651–1719",
    "rank": "memorial",
    "color": "white",
    "story": "Yohanes Baptista lahir di Reims, Prancis, pada abad ke-17, sulung dari sepuluh bersaudara dalam keluarga bangsawan yang berada. Ia menerima tonsur pada usia sebelas tahun dan dipersiapkan menjadi imam. Ketika kedua orang tuanya meninggal, ia harus mengurus adik-adiknya, namun tetap menyelesaikan studi dan ditahbiskan imam pada usia 27 tahun, lalu meraih gelar doktor teologi. Hidup terhormat sebagai kanonik katedral sudah menantinya, tetapi perjumpaan dengan Adrien Nyel, seorang awam yang membuka sekolah bagi anak laki-laki miskin, mengubah arah hidupnya. Ia melihat bahwa para guru kurang terdidik dan kurang termotivasi, maka ia mengajak mereka tinggal bersamanya dan membina mereka sendiri. Ia melepaskan jabatan kanonik, membagikan kekayaannya, dan hidup miskin bersama mereka. Dari situ lahir Kongregasi Bruder Sekolah Kristen, para guru awam yang membaktikan hidup untuk pendidikan. Ia memperkenalkan pengajaran dalam kelas, mengutamakan bahasa Prancis daripada Latin untuk belajar membaca, membuka sekolah gratis, sekolah malam dan sekolah Minggu bagi pekerja muda, serta lembaga pendidikan guru. Ia menghadapi banyak pertentangan. Ia wafat pada hari Jumat Agung tahun 1719, dikanonisasi tahun 1900, dan pada tahun 1950 dinyatakan pelindung para guru.",
    "example": [
      "Hargai dan dukung para guru, serta bekali diri jika kita sendiri mengajar.",
      "Perjuangkan pendidikan yang terjangkau bagi anak-anak miskin.",
      "Lakukan pekerjaan sehari-hari dengan sepenuh hati sebagai pelayanan kepada Tuhan."
    ],
    "patron": [
      "guru",
      "pendidik"
    ],
    "keywords": [
      "john baptist de la salle",
      "de la salle",
      "lasalian",
      "bruder",
      "reims",
      "pendidikan",
      "guru"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/04/07/san-giovanni-battista-de-la-salle--sacerdote--fondatore-dei-frat.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-john-baptist-de-la-salle/"
    ]
  },
  {
    "id": "st-stanislaus",
    "date": "04-11",
    "name": "St. Stanislaus, Uskup dan Martir",
    "role": "Uskup dan Martir",
    "years": "1030–1079",
    "rank": "memorial",
    "color": "white",
    "story": "Stanislaus lahir di Szczepanów, dekat Krakow, Polandia, pada tahun 1030. Ia belajar di sekolah katedral Gniezno dan kemudian di Paris. Setelah ditahbiskan imam ia menjadi pengkhotbah dan pembantu utama Uskup Krakow; khotbah dan teladannya membawa banyak orang, baik klerus maupun awam, kepada pertobatan. Pada tahun 1072 ia diangkat menjadi Uskup Krakow. Ia sungguh menjadi gembala: mencatat nama orang sakit dan miskin agar tidak ada yang terlupakan, membuka rumahnya bagi siapa saja yang membutuhkan nasihat, dan mengunjungi paroki-paroki. Ia berani menegur Raja Boleslaus II atas perang yang tidak adil dan perbuatan-perbuatannya yang tidak bermoral. Raja sempat berpura-pura bertobat tetapi kembali ke kebiasaan lamanya. Stanislaus akhirnya mengekskomunikasi raja. Pada tahun 1079, ketika sedang merayakan Misa di gereja St. Mikael di luar kota, ia dibunuh; banyak sumber mengatakan bahwa raja sendiri membunuhnya setelah para prajurit menolak. Boleslaus kemudian harus melarikan diri dari Polandia. Stanislaus dikanonisasi oleh Paus Innosensius IV pada tahun 1253 dan dihormati sebagai pelindung Polandia.",
    "example": [
      "Beranilah menyuarakan kebenaran dan menegur ketidakadilan dengan hormat, walaupun berisiko.",
      "Catat dan ingatlah kebutuhan orang sakit dan miskin di lingkungan kita.",
      "Pimpinlah dengan teladan hidup yang jujur dan sederhana."
    ],
    "patron": [
      "Polandia",
      "Krakow"
    ],
    "keywords": [
      "stanislaus",
      "stanislaus of krakow",
      "stanislaw",
      "krakow",
      "polandia",
      "boleslaus",
      "martir"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/04/11/santo-stanislao--vescovo-di-cracovia-e-martire.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-stanislaus/",
      "https://www.newadvent.org/cathen/14246a.htm"
    ]
  },
  {
    "id": "st-martin-pope",
    "date": "04-13",
    "name": "St. Martinus I, Paus dan Martir",
    "role": "Paus dan Martir",
    "years": "† 655",
    "rank": "optional",
    "color": "white",
    "story": "Martinus lahir di Todi, Umbria, Italia, pada awal abad ke-7. Ia pernah berkarya sebagai imam di Konstantinopel, sehingga mengenal baik pertikaian teologis di Timur. Pada tahun 649 ia dipilih menjadi paus dan menerima jabatan itu tanpa menunggu persetujuan kaisar. Saat itu ajaran Monotelitisme, yang menyatakan bahwa Kristus hanya memiliki satu kehendak, didukung para kaisar Bizantium. Kaisar Konstans II bahkan melarang orang membicarakan apakah Kristus memiliki satu atau dua kehendak. Martinus menyelenggarakan sinode di Lateran yang menegaskan bahwa Kristus memiliki kehendak ilahi dan kehendak manusiawi, serta mengecam dekret-dekret kaisar. Kaisar yang murka memerintahkan agar Paus ditangkap. Martinus, yang sudah sakit, tidak melawan dan dibawa ke Konstantinopel. Di sana ia dipenjara, dipermalukan di depan umum, dilucuti tanda jabatannya, dan dijatuhi hukuman mati, tetapi hukuman itu diubah menjadi pembuangan ke Kherson di Krimea. Dalam surat-suratnya dari pembuangan ia tetap mendoakan Gereja dan penerusnya. Ia wafat dalam keadaan menderita pada 16 September 655. Ia adalah paus terakhir yang dihormati sebagai martir.",
    "example": [
      "Pertahankan kebenaran iman walaupun harus menanggung kerugian.",
      "Jangan mengambil jalan pintas yang mengorbankan hati nurani demi kenyamanan.",
      "Doakan para pemimpin Gereja agar teguh dalam iman."
    ],
    "patron": [],
    "keywords": [
      "martin i",
      "martinus",
      "paus",
      "martir",
      "monotelitisme",
      "konstantinopel",
      "krimea"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/04/13/san-martino-i--papa-e-martire.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-martin-i/"
    ]
  },
  {
    "id": "st-anselm",
    "date": "04-21",
    "name": "St. Anselmus, Uskup dan Pujangga Gereja",
    "role": "Uskup dan Pujangga Gereja",
    "years": "1033–1109",
    "rank": "optional",
    "color": "white",
    "story": "Anselmus lahir pada tahun 1033 di Aosta, Italia utara, dari keluarga bangsawan. Pada usia lima belas tahun ia ingin masuk biara, tetapi ayahnya menentang. Selama beberapa tahun ia hidup acuh tak acuh terhadap agama, sampai akhirnya, sekitar dua belas tahun kemudian, ia masuk Biara Benediktin Bec di Normandia. Di sana ia menjadi prior dan kemudian abas. Ia dikenal sabar, lemah lembut, dan pandai mengajar, sehingga Bec menjadi pusat studi filsafat dan teologi yang berpengaruh. Atas permintaan para rahib, ia menulis karya-karya teologis, antara lain Cur Deus Homo (Mengapa Allah Menjadi Manusia). Ia berusaha memahami kebenaran iman dengan bantuan akal budi, sehingga dijuluki “Bapa Skolastik”. Pada tahun 1093, dalam usia sekitar enam puluh tahun dan sebenarnya tidak menghendakinya, ia menjadi Uskup Agung Canterbury, Inggris. Ia berkonflik dengan Raja William Rufus dan kemudian Raja Henry I karena membela kebebasan Gereja dalam pengangkatan uskup, sehingga dua kali harus hidup di pengasingan. Ia juga peduli kepada orang termiskin dan berhasil mendorong dewan nasional di Westminster melarang perdagangan manusia. Ia wafat pada 21 April 1109 dan dimakamkan di Katedral Canterbury.",
    "example": [
      "Gunakan akal budi untuk memahami iman lebih dalam, dengan iman yang mencari pengertian.",
      "Tetaplah lembut dalam sikap tetapi teguh dalam prinsip.",
      "Tolaklah segala bentuk perdagangan dan perbudakan manusia."
    ],
    "patron": [],
    "keywords": [
      "anselm",
      "anselmus",
      "canterbury",
      "bec",
      "skolastik",
      "cur deus homo",
      "teologi"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/04/21/sant-anselmo--arcivescovo-di-canterbury-e-dottore-della-chiesa.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-anselm/",
      "https://www.newadvent.org/cathen/01546a.htm"
    ]
  },
  {
    "id": "st-adalbert",
    "date": "04-23",
    "name": "St. Adalbertus, Uskup dan Martir",
    "role": "Uskup dan Martir",
    "years": "† 997",
    "rank": "optional",
    "color": "white",
    "story": "Adalbertus lahir dalam keluarga bangsawan di Bohemia (kini Republik Ceko). Ia belajar di Magdeburg di bawah bimbingan St. Adalbertus dari Magdeburg, yang namanya kemudian ia pakai. Pada usia 27 tahun ia dipilih menjadi Uskup Praha, uskup Slavia pertama di kota itu. Ia berusaha membarui kehidupan klerus dan umat, tetapi mendapat banyak perlawanan, sehingga setelah beberapa tahun ia terpaksa meninggalkan Praha. Ia pergi ke Roma dan menjadi rahib Benediktin. Umat Praha kemudian memintanya kembali, namun tak lama kemudian ia diusir lagi setelah mengekskomunikasi orang-orang yang melanggar hak suaka gereja: mereka menyeret seorang perempuan yang dituduh berzina keluar dari gereja lalu membunuhnya. Setelah berkarya sebentar di Hungaria, Adalbertus berangkat sebagai misionaris untuk mewartakan Injil kepada penduduk di pesisir Laut Baltik. Di sana, pada tahun 997, ia dan dua rekannya dibunuh oleh para imam kafir. Jenazahnya segera ditebus dan dimakamkan di Katedral Gniezno, Polandia; pada abad ke-11 reliknya dipindahkan ke Katedral St. Vitus di Praha. Ia dihormati di Ceko, Polandia, Hungaria, dan Jerman.",
    "example": [
      "Jangan mudah menyerah ketika usaha baik kita ditolak.",
      "Belalah orang lemah yang diperlakukan tidak adil, walaupun harus menanggung risiko.",
      "Doakan para misionaris yang mewartakan Injil di tempat sulit."
    ],
    "patron": [
      "Bohemia",
      "Polandia"
    ],
    "keywords": [
      "adalbert of prague",
      "adalbertus",
      "vojtech",
      "wojciech",
      "praha",
      "baltik",
      "martir"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/04/23.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-adalbert-of-prague/"
    ]
  },
  {
    "id": "st-george",
    "date": "04-23",
    "name": "St. Georgius, Martir",
    "role": "Martir",
    "years": "± abad ke-3/4",
    "rank": "optional",
    "color": "red",
    "story": "Georgius termasuk orang kudus yang paling luas dihormati, tetapi kisah hidupnya diselimuti banyak legenda. Gereja meyakini bahwa ia sungguh seorang martir yang wafat di Lida (kini Lod, Israel), kemungkinan pada masa penganiayaan Kaisar Diokletianus di awal abad ke-4. Tak lama setelah kematiannya, sebuah basilika dibangun di atas makamnya, dan sebuah prasasti Yunani dari tahun 368 sudah menyebut gereja para martir “Georgius dan kawan-kawan”. Menurut tradisi, ia lahir dalam keluarga Kristen di Kapadokia sekitar tahun 280, lalu menjadi prajurit dalam pasukan Diokletianus. Ketika kaisar mengeluarkan dekret penganiayaan pada tahun 303, Georgius membagikan hartanya kepada orang miskin, merobek dekret itu di depan kaisar, dan mengakui imannya kepada Kristus; karena itu ia disiksa dan dipenggal. Kisah terkenal tentang Georgius membunuh naga untuk menyelamatkan seorang putri raja adalah legenda abad pertengahan, yang melambangkan kemenangan iman atas kejahatan. Para tentara salib menjadikannya pelindung para ksatria. Karena kurangnya data sejarah yang pasti, pada tahun 1969 pestanya dijadikan peringatan fakultatif, tetapi devosi kepadanya tetap hidup.",
    "example": [
      "Beranilah mengakui iman secara terbuka ketika diuji.",
      "Hadapi kejahatan dalam diri dan sekitar kita dengan mengandalkan kekuatan Tuhan.",
      "Gunakan kekuatan dan kedudukan untuk melindungi yang lemah."
    ],
    "patron": [
      "prajurit",
      "pramuka",
      "Inggris",
      "Portugal",
      "Jerman",
      "ksatria"
    ],
    "keywords": [
      "george",
      "georgius",
      "yoris",
      "naga",
      "lida",
      "prajurit",
      "pramuka",
      "martir"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/04/23/st--george--martyr.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-george/"
    ]
  },
  {
    "id": "st-fidelis-sigmaringen",
    "date": "04-24",
    "name": "St. Fidelis dari Sigmaringen, Imam dan Martir",
    "role": "Imam dan Martir",
    "years": "1577–1622",
    "rank": "optional",
    "color": "white",
    "story": "Fidelis lahir pada tahun 1577 di Sigmaringen, Jerman, dengan nama Markus Rey. Ia belajar di Universitas Freiburg dan menjadi ahli hukum. Karena selalu membela perkara orang miskin dan tertindas, ia dijuluki “pengacara orang miskin”. Muak melihat korupsi dan ketidakadilan di kalangan rekan-rekannya, ia meninggalkan profesi hukum untuk menjadi imam dan bergabung dengan Ordo Kapusin, menyusul saudaranya, Georg. Ia menerima nama Fidelis, yang berarti “setia”, dan membagikan hartanya kepada seminaris yang membutuhkan dan orang miskin. Ia dikenal sangat murah hati, bahkan sering memberikan pakaian yang sedang dipakainya kepada orang miskin. Ketika wabah melanda kota tempat ia menjadi pemimpin biara, ia merawat banyak prajurit yang sakit. Kemudian ia diangkat memimpin misi para Kapusin untuk berkhotbah di wilayah Swiss yang menganut ajaran Calvin dan Zwingli. Ia dituduh menentang aspirasi para petani yang ingin merdeka dari Austria. Saat berkhotbah di Seewis, ia ditembak tetapi selamat. Ia menolak tawaran perlindungan dengan berkata bahwa hidupnya ada di tangan Tuhan. Dalam perjalanan pulang pada 24 April 1622 ia dihadang sekelompok orang bersenjata dan dibunuh. Ia dikanonisasi pada tahun 1746.",
    "example": [
      "Gunakan keahlian kita untuk membela orang kecil yang tidak mampu membela diri.",
      "Lawanlah sikap suam-suam kuku dalam iman dengan doa yang setia.",
      "Bermurah hatilah kepada orang miskin, bahkan dari apa yang kita perlukan sendiri."
    ],
    "patron": [
      "ahli hukum"
    ],
    "keywords": [
      "fidelis of sigmaringen",
      "fidelis",
      "kapusin",
      "markus rey",
      "swiss",
      "pengacara orang miskin",
      "martir"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-fidelis-of-sigmaringen/",
      "https://www.newadvent.org/cathen/06069a.htm"
    ]
  },
  {
    "id": "st-mark-evangelist",
    "date": "04-25",
    "name": "St. Markus, Pengarang Injil",
    "role": "Penginjil",
    "years": "abad ke-1",
    "rank": "feast",
    "color": "red",
    "story": "Hampir semua yang kita ketahui tentang Markus berasal dari Perjanjian Baru. Ia biasanya disamakan dengan “Yohanes yang disebut juga Markus”, putra Maria di Yerusalem, ke rumah siapa Petrus pergi setelah dibebaskan secara ajaib dari penjara (Kis 12:12). Markus bukan salah seorang dari dua belas rasul, dan tidak pasti apakah ia mengenal Yesus secara pribadi; sebagian ahli menduga dialah pemuda berkain lenan yang melarikan diri ketika Yesus ditangkap (Mrk 14:51-52). Ia ikut dalam perjalanan misi pertama Paulus dan Barnabas, tetapi kembali ke Yerusalem di tengah jalan, sehingga Paulus menolak membawanya pada perjalanan berikutnya. Kemudian hubungan mereka pulih: dari penjara Paulus meminta Timotius membawa Markus karena ia berguna bagi pelayanan. Petrus menyebutnya “anakku” (1Ptr 5:13), dan tradisi memandang Markus sebagai juru tulis pewartaan Petrus. Injilnya adalah yang terpendek dan dianggap yang tertua, menampilkan Yesus sebagai Mesias yang disalibkan. Menurut tradisi kuno, ia mewartakan Injil di Mesir, mendirikan Gereja Aleksandria, dan wafat sebagai martir di sana. Relikuinya diyakini disimpan di Basilika St. Markus, Venesia. Lambangnya adalah singa bersayap.",
    "example": [
      "Jangan putus asa setelah gagal; Tuhan dan sesama dapat memberi kesempatan kedua.",
      "Bacalah Injil Markus secara teratur untuk mengenal Yesus lebih dekat.",
      "Wartakan Kabar Gembira lewat bakat kita, entah menulis, mengajar, atau melayani."
    ],
    "patron": [
      "Venesia",
      "notaris"
    ],
    "keywords": [
      "mark the evangelist",
      "markus",
      "injil markus",
      "aleksandria",
      "venesia",
      "singa bersayap",
      "penginjil"
    ],
    "sources": [
      "https://www.vaticannews.va/it/santo-del-giorno/04/25/san-marco-evangelista.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-mark/"
    ]
  },
  {
    "id": "st-louis-grignion-montfort",
    "date": "04-28",
    "name": "St. Louis Maria Grignion de Montfort, Imam",
    "role": "Imam, Misionaris",
    "years": "1673–1716",
    "rank": "optional",
    "color": "white",
    "story": "Louis Maria lahir pada 31 Januari 1673 di Montfort, dekat Rennes, Prancis. Kelak ia lebih suka dikenal dengan nama tempat baptisnya daripada nama keluarganya, Grignion. Sejak kecil ia tekun berdoa di hadapan Sakramen Mahakudus. Ia dididik oleh para Yesuit di Rennes dan kemudian oleh para imam Sulpisian di Paris, lalu ditahbiskan imam diosesan pada tahun 1700. Ia segera mulai memberikan misi umat di paroki-paroki di Prancis barat, terutama Bretagne dan Vendée. Ia hidup sangat sederhana dan dekat dengan orang miskin, yang kadang membuatnya berselisih dengan otoritas Gereja. Khotbahnya membawa ribuan orang kembali kepada iman. Ia menganjurkan penerimaan Komuni sesering mungkin, bahkan setiap hari, yang tidak lazim pada zamannya, serta mengajak umat meneladani Maria yang selalu menerima kehendak Allah. Ia mendirikan Serikat Misionaris Maria (Montfortan) bagi imam dan bruder, serta Puteri-puteri Kebijaksanaan yang terutama merawat orang sakit. Bukunya, Bakti Sejati kepada Santa Perawan Maria, menjadi karya klasik devosi Maria. Semboyannya, Totus tuus (“seluruhnya milikmu”), kemudian dipakai oleh Paus Yohanes Paulus II. Ia wafat di Saint-Laurent-sur-Sèvre pada 28 April 1716 dan dikanonisasi tahun 1947.",
    "example": [
      "Serahkan diri kepada Yesus melalui Maria dalam doa harian.",
      "Terimalah Komuni dengan sering dan dengan persiapan yang baik.",
      "Hiduplah sederhana dan dekat dengan orang miskin."
    ],
    "patron": [],
    "keywords": [
      "louis de montfort",
      "montfort",
      "grignion",
      "totus tuus",
      "bakti sejati",
      "maria",
      "montfortan"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-louis-mary-grignion-de-montfort/",
      "https://www.newadvent.org/cathen/09384a.htm"
    ]
  },
  {
    "id": "st-peter-chanel",
    "date": "04-28",
    "name": "St. Petrus Chanel, Imam dan Martir",
    "role": "Imam dan Martir",
    "years": "± 1802–1841",
    "rank": "optional",
    "color": "white",
    "story": "Petrus Chanel lahir di Cuet, Prancis, pada awal abad ke-19. Minatnya pada misi tumbuh sejak sekolah ketika ia membaca surat-surat para misionaris. Ia ditahbiskan imam pada tahun 1827 dan, sebagai pastor muda, menghidupkan kembali sebuah paroki yang dianggap sulit dengan cara sederhana: menunjukkan perhatian besar kepada orang sakit. Karena ingin menjadi misionaris, pada usia 28 tahun ia bergabung dengan Serikat Maria (Maris). Dengan taat ia mengajar di seminari selama lima tahun, kemudian diutus sebagai pemimpin tujuh misionaris Maris ke Oseania Barat. Uskup yang menyertai mereka meninggalkan Petrus dan seorang bruder di Pulau Futuna, timur laut Fiji, dengan janji kembali dalam enam bulan, tetapi baru datang lima tahun kemudian. Petrus belajar bahasa setempat dan menyesuaikan diri dengan kehidupan yang keras di antara para pemburu paus, pedagang, dan suku-suku yang berperang. Dengan sabar, lembut, dan berani ia melayani walau hasilnya tampak kecil. Ketika putra kepala suku minta dibaptis, sang kepala suku marah, dan Petrus dibunuh dengan pentungan pada 28 April 1841. Dalam dua tahun seluruh pulau menjadi Katolik. Ia dikanonisasi tahun 1954 dan dihormati sebagai martir pertama dan pelindung Oseania.",
    "example": [
      "Tetaplah setia dalam tugas meskipun merasa sendirian dan hasilnya belum tampak.",
      "Pelajari bahasa dan cara hidup orang lain supaya dapat melayani mereka dengan baik.",
      "Tunjukkan perhatian kepada orang sakit sebagai jalan sederhana untuk mewartakan kasih Tuhan."
    ],
    "patron": [
      "Oseania"
    ],
    "keywords": [
      "peter chanel",
      "petrus chanel",
      "futuna",
      "oseania",
      "maris",
      "misionaris",
      "martir"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-peter-chanel/",
      "https://www.newadvent.org/cathen/11769a.htm"
    ]
  },
  {
    "id": "st-catherine-siena",
    "date": "04-29",
    "name": "St. Katarina dari Siena, Perawan dan Pujangga Gereja",
    "role": "Perawan dan Pujangga Gereja",
    "years": "1347–1380",
    "rank": "memorial",
    "color": "white",
    "story": "Katarina lahir di Siena, Italia, pada 25 Maret 1347, salah satu anak bungsu dari keluarga besar Giacomo Benincasa, seorang pewarna kain. Ia tumbuh sebagai gadis yang cerdas, ceria, dan sangat saleh. Ketika ibunya mendorongnya berdandan agar menarik calon suami, ia memotong rambutnya sebagai protes; ayahnya lalu membiarkannya memiliki kamar sendiri untuk berdoa. Pada usia sekitar delapan belas tahun ia masuk Ordo Ketiga Dominikan dan menjalani tiga tahun dalam kesendirian, doa, dan matiraga. Lambat laun berkumpullah di sekitarnya kelompok pengikut, laki-laki dan perempuan, imam dan religius. Dari hidup kontemplatifnya tumbuh kerasulan aktif: ia merawat orang sakit dan miskin, serta menulis banyak surat bimbingan rohani yang semakin menyentuh urusan publik. Ia bekerja tanpa lelah bagi perdamaian antara Firenze dan Paus. Ketika Skisma Besar Barat dimulai pada tahun 1378, ia menghabiskan dua tahun terakhir hidupnya di Roma, berdoa dan berjuang bagi persatuan Gereja di bawah Paus Urbanus VI. Ia wafat di Roma pada 29 April 1380. Karyanya yang utama adalah Dialog. Ia dikanonisasi tahun 1461, dinyatakan pelindung Italia (1939), Pujangga Gereja (1970), dan pelindung Eropa.",
    "example": [
      "Jadikan doa sumber keberanian untuk berbicara dan bertindak bagi kebaikan bersama.",
      "Cintailah Gereja dan doakan persatuannya, terutama di masa krisis.",
      "Rawat orang sakit dan miskin sebagai wujud kasih kepada Kristus."
    ],
    "patron": [
      "Italia",
      "Eropa",
      "perawat",
      "pencegahan kebakaran"
    ],
    "keywords": [
      "catherine of siena",
      "katarina siena",
      "siena",
      "dominikan",
      "dialog",
      "pujangga gereja",
      "persatuan gereja"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-catherine-of-siena/",
      "https://www.newadvent.org/cathen/03447a.htm"
    ]
  },
  {
    "id": "st-pius-v",
    "date": "04-30",
    "name": "St. Pius V, Paus",
    "role": "Paus",
    "years": "1504–1572",
    "rank": "optional",
    "color": "white",
    "story": "Pius V, bernama asli Michele Ghislieri, lahir pada 17 Januari 1504 di Bosco, dekat Alessandria, Italia utara, dari keluarga bangsawan miskin. Ia dididik oleh para Dominikan di Voghera, masuk ordo itu, ditahbiskan imam tahun 1528, dan mengajar teologi serta filsafat. Ia dipilih menjadi paus pada 7 Januari 1566, ketika Gereja masih terguncang oleh korupsi, Reformasi, ancaman invasi Turki, dan pertikaian negara-negara Eropa. Tugas utamanya adalah melaksanakan pembaruan Konsili Trente yang baru saja berakhir. Ia memerintahkan pendirian seminari untuk pembinaan imam yang baik, menerbitkan Misale, Brevir, dan Katekismus Roma yang baru, serta mendorong pelajaran agama bagi kaum muda. Ia menindak penyalahgunaan dalam Gereja dengan tegas. Ia membangun rumah sakit, memberi makan orang lapar, dan mengalihkan dana pesta kepausan kepada orang miskin. Kebiasaannya tetap mengenakan jubah Dominikan menjadi asal tradisi jubah putih Paus. Ia berhasil menyatukan armada Kristen yang memenangkan Pertempuran Lepanto pada 7 Oktober 1571. Sebagai paus ia tetap hidup sebagai biarawan: banyak berdoa, berpuasa, dan menjauhi kemewahan. Ia wafat pada 1 Mei 1572.",
    "example": [
      "Terimalah pembaruan Gereja dengan hati terbuka dan mulailah dari pertobatan pribadi.",
      "Hiduplah sederhana dan alihkan pengeluaran yang tidak perlu untuk membantu orang miskin.",
      "Berdoalah rosario, terutama untuk perdamaian."
    ],
    "patron": [],
    "keywords": [
      "pius v",
      "pius kelima",
      "ghislieri",
      "trente",
      "lepanto",
      "dominikan",
      "paus"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-pius-v/",
      "https://www.newadvent.org/cathen/12130a.htm"
    ]
  },
  {
    "id": "st-joseph-worker",
    "date": "05-01",
    "name": "St. Yusuf Pekerja",
    "role": "Pelindung Para Pekerja",
    "years": "",
    "rank": "optional",
    "color": "white",
    "story": "Selain sebagai suami Santa Perawan Maria dan bapa pengasuh Yesus, St. Yusuf adalah seorang tukang. Dengan kerja tangannya ia menghidupi Keluarga Kudus di Nazaret dan mengambil bagian dalam rencana keselamatan Allah. Injil menyebut Yesus sebagai “anak tukang kayu”, dan Yesus sendiri belajar keterampilan itu dari Yusuf serta bekerja bersamanya sebelum memulai karya publik-Nya. Ciri khas Yusuf adalah ketersembunyian: tidak ada satu pun perkataannya yang tercatat dalam Injil. Ia bekerja bukan untuk menumpuk kekayaan, melainkan untuk menafkahi keluarganya, dan ia juga memelihara hari istirahat serta ikut dalam ibadat. Pesta St. Yusuf Pekerja ditetapkan oleh Paus Pius XII pada 1 Mei 1955, bertepatan dengan Hari Buruh, agar para pekerja tidak kehilangan pemahaman Kristiani tentang kerja. Sebelumnya, pada tahun 1870 Paus Pius IX telah menyatakan St. Yusuf sebagai Pelindung Gereja Semesta. Kemudian St. Yohanes Paulus II dalam ensiklik Laborem Exercens berbicara tentang “Injil kerja” dan menegaskan bahwa Gereja wajib membela martabat dan hak para pekerja. Pesta ini mengingatkan bahwa kerja manusia, sekecil apa pun, adalah partisipasi dalam karya Sang Pencipta.",
    "example": [
      "Kerjakan pekerjaan sehari-hari dengan jujur, tekun, dan tanpa mengeluh.",
      "Hormati martabat dan hak para pekerja, termasuk asisten rumah tangga dan pekerja kecil.",
      "Sediakan waktu istirahat dan ibadat, jangan sampai kerja menguasai seluruh hidup."
    ],
    "patron": [
      "pekerja",
      "buruh",
      "tukang kayu"
    ],
    "keywords": [
      "joseph the worker",
      "yusuf pekerja",
      "hari buruh",
      "1 mei",
      "kerja",
      "laborem exercens",
      "tukang kayu"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/05/01/st-joseph--the-worker--spouse-of-the-blessede-virigin-mary---pat.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-joseph-the-worker/"
    ]
  },
  {
    "id": "st-athanasius",
    "date": "05-02",
    "name": "St. Atanasius, Uskup dan Pujangga Gereja",
    "role": "Uskup dan Pujangga Gereja",
    "years": "± 296–373",
    "rank": "memorial",
    "color": "white",
    "story": "Atanasius lahir dalam keluarga Kristen di Aleksandria, Mesir, dan mendapat pendidikan klasik. Ia menjadi sekretaris Uskup Aleksander dari Aleksandria, ditahbiskan menjadi imam, lalu menggantikan Aleksander sebagai uskup. Seperti pendahulunya, ia gigih melawan Arianisme, ajaran Arius yang menyangkal bahwa Yesus sungguh Allah. Perjuangan itu tidak mudah. Setelah Konsili Tirus, Kaisar Konstantinus membuangnya ke Galia utara. Ia dipulihkan sebagai uskup setelah Konstantinus wafat, tetapi segera digulingkan lagi oleh para uskup Arian, sehingga ia membawa perkaranya ke Roma, dan Paus Yulius I mengadakan sinode untuk meninjaunya. Secara keseluruhan Atanasius lima kali dibuang karena membela keallahan Kristus. Pada masa tenang ia membaca, menulis, dan memajukan cita-cita hidup monastik yang sangat ia cintai. Tulisannya hampir semuanya membela iman melawan Arianisme, dan bukunya tentang riwayat St. Antonius Pertapa sangat populer serta ikut menyebarkan hidup membiara di Barat. Karena kekuatan tulisannya ia digelari Pujangga Gereja. Ia wafat pada 2 Mei 373 setelah tetap setia menggembalakan umatnya, apa pun harga yang harus dibayar.",
    "example": [
      "Belajarlah sungguh-sungguh tentang iman, terutama tentang siapa Yesus Kristus, supaya kita bisa menjelaskannya dengan benar.",
      "Tetaplah setia pada kebenaran walaupun tidak populer atau merugikan diri sendiri.",
      "Jangan putus asa saat menghadapi kesulitan berulang kali."
    ],
    "patron": [],
    "keywords": [
      "athanasius",
      "atanasius",
      "aleksandria",
      "mesir",
      "arianisme",
      "pujangga gereja",
      "credo"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-athanasius/"
    ]
  },
  {
    "id": "sts-philip-james",
    "date": "05-03",
    "name": "St. Filipus dan St. Yakobus, Rasul",
    "role": "Rasul",
    "years": "abad ke-1",
    "rank": "feast",
    "color": "red",
    "story": "Filipus berasal dari Betsaida di Galilea, kota yang sama dengan Petrus dan Andreas. Yesus memanggilnya secara langsung, lalu Filipus segera mencari Natanael dan memberitahunya tentang Dia \"yang disebut oleh Musa\" (Yoh 1:45). Seperti para rasul lain, Filipus butuh waktu untuk memahami siapa Yesus. Ketika orang banyak perlu diberi makan, Yesus menguji dia dengan bertanya di mana mereka dapat membeli roti. Pada Perjamuan Terakhir Filipus meminta, \"Tuhan, tunjukkanlah Bapa kepada kami,\" dan Yesus menjawab bahwa siapa yang telah melihat Dia telah melihat Bapa. Beberapa orang Yunani juga datang kepada Filipus untuk minta diperkenalkan kepada Yesus. Tentang Yakobus anak Alfeus hampir tidak ada yang kita ketahui selain namanya dan bahwa Yesus memilihnya sebagai salah satu dari Dua Belas. Ia disebut Yakobus Muda untuk membedakannya dari Yakobus anak Zebedeus. Kedua rasul ini dirayakan bersama sebagai orang biasa yang, berkat karunia Allah, menjadi batu dasar Gereja. Kisah mereka mengingatkan bahwa kekudusan dan karya kerasulan adalah anugerah Allah, bukan hasil usaha manusia semata.",
    "example": [
      "Seperti Filipus, ajaklah orang lain mengenal Yesus dengan sederhana: \"Mari dan lihatlah.\" Jangan malu bertanya kepada Tuhan dalam doa ketika iman kita belum paham.",
      "Setialah melayani walau tidak dikenal banyak orang, seperti Yakobus."
    ],
    "patron": [
      "Uruguay"
    ],
    "keywords": [
      "philip",
      "james",
      "filipus",
      "yakobus",
      "rasul",
      "betsaida",
      "yakobus muda"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saints-philip-and-james/"
    ]
  },
  {
    "id": "st-john-avila",
    "date": "05-10",
    "name": "St. Yohanes dari Avila, Imam dan Pujangga Gereja",
    "role": "Imam dan Pujangga Gereja",
    "years": "± 1500–1569",
    "rank": "optional",
    "color": "white",
    "story": "Yohanes lahir di wilayah Kastilia, Spanyol. Pada usia 14 tahun ia dikirim ke Universitas Salamanca untuk belajar hukum, lalu belajar filsafat dan teologi di Alcalá sebelum ditahbiskan menjadi imam diosesan. Setelah orang tuanya wafat dan mewariskan harta besar, ia membagikannya kepada orang miskin. Pada 1527 ia pergi ke Sevilla dengan harapan menjadi misionaris di Meksiko, tetapi uskup agung setempat memintanya mewartakan iman di Andalusia. Di sana ia dikenal sebagai pengkhotbah yang memikat, pembimbing rohani yang tajam, dan bapa pengakuan yang bijak. Karena berani mengecam kejahatan di kalangan atas, ia diselidiki oleh Inkuisisi, tetapi dinyatakan bersih pada 1533. Ia kemudian berkarya di Córdoba dan Granada serta mendirikan Universitas Baeza, yang pertama dari beberapa kolese yang dikelola imam diosesan untuk mendidik dan membimbing kaum muda. Ia bersahabat dengan banyak orang kudus, antara lain Ignasius dari Loyola, Teresa dari Avila, dan Yohanes dari Salib. Ia wafat pada 10 Mei 1569, dikanonisasi pada 1970, dan dinyatakan Pujangga Gereja pada 7 Oktober 2012.",
    "example": [
      "Gunakan harta dan kemampuan untuk menolong yang miskin.",
      "Carilah pembimbing rohani dan jadilah teman yang menuntun orang lain kepada Tuhan.",
      "Beranilah mengatakan kebenaran dengan rendah hati, bahkan bila disalahpahami."
    ],
    "patron": [
      "Andalusia (Spanyol)"
    ],
    "keywords": [
      "john of avila",
      "yohanes avila",
      "spanyol",
      "andalusia",
      "pengkhotbah",
      "imam diosesan",
      "pujangga gereja"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-john-of-avila/"
    ]
  },
  {
    "id": "st-pancras",
    "date": "05-12",
    "name": "St. Pankrasius, Martir",
    "role": "Martir",
    "years": "± abad ke-3/ke-4",
    "rank": "optional",
    "color": "red",
    "story": "Pankrasius adalah martir Roma yang sangat tua. Namanya sudah tercatat dalam daftar martir Roma abad kelima dengan peringatan pada 12 Mei, dan jenazahnya dimakamkan di sebuah katakombe di Via Aurelia, pada batu mil kedua dari kota Roma. Pada abad keempat sebuah gereja dibangun di atas makamnya; basilika San Pancrazio yang berdiri di sana sampai sekarang kemudian dibangun ulang oleh Paus Simakus (498–514). Kisah kemartirannya yang beredar berasal dari masa kemudian dan tidak dapat dipegang secara historis. Menurut tradisi, ia berasal dari Frigia (kini Turki), datang ke Roma setelah menjadi yatim piatu, dibaptis, lalu dipenggal di Via Aurelia pada usia sekitar 14 tahun karena menolak menyangkal imannya. Para ahli memperkirakan ia wafat dalam penganiayaan Kaisar Valerianus (257–258) atau Diokletianus (304–306). Relikui kepalanya disimpan di Basilika San Pancrazio. Walaupun detail hidupnya tidak diketahui pasti, Gereja terus mengenang kesaksian imannya sebagai martir muda.",
    "example": [
      "Belajarlah dari kesaksian iman orang muda: kesetiaan kepada Kristus tidak menunggu usia dewasa.",
      "Dukung dan doakan anak-anak serta remaja agar teguh dalam iman.",
      "Hargai sejarah Gereja yang dibangun di atas kesaksian para martir."
    ],
    "patron": [],
    "keywords": [
      "pancras",
      "pankrasius",
      "pancratius",
      "roma",
      "via aurelia",
      "martir muda"
    ],
    "sources": [
      "https://www.newadvent.org/cathen/10751a.htm",
      "https://en.wikipedia.org/wiki/Pancras_of_Rome"
    ]
  },
  {
    "id": "sts-nereus-achilleus",
    "date": "05-12",
    "name": "St. Nereus dan St. Akhilleus, Martir",
    "role": "Martir",
    "years": "± abad ke-1/ke-2",
    "rank": "optional",
    "color": "red",
    "story": "Nereus dan Akhilleus adalah dua martir Roma yang makamnya berada di Katakombe Domitila di Via Ardeatina. Nama mereka sudah tercantum dalam daftar martir Roma abad kelima dengan peringatan pada 12 Mei. Pada akhir abad keempat sebuah basilika berlorong tiga dibangun di atas makam mereka, dan reruntuhannya ditemukan kembali oleh arkeolog de Rossi. Di sana ditemukan tiang berukir yang menggambarkan pemenggalan mereka, dengan nama Akhilleus terpahat padanya. Kesaksian tertua tentang mereka adalah sebuah syair karya Paus Damasus: Nereus dan Akhilleus semula prajurit yang taat kepada penguasa lalim, tetapi setelah bertobat menjadi Kristen, mereka dengan gembira meletakkan jabatan dan menyerahkan nyawa sebagai martir. Kisah lain yang kemudian beredar menyebut mereka pelayan Flavia Domitila, kerabat Kaisar Domitianus, yang dibuang bersamanya ke Pulau Pontia lalu dipenggal di Terracina; namun kisah itu legenda tanpa nilai sejarah. Karena makam mereka terletak di bagian katakombe yang sangat tua, para ahli menduga mereka termasuk martir paling awal Gereja Roma. Tanggal pasti kemartiran mereka tidak diketahui.",
    "example": [
      "Pertobatan sejati berani mengubah arah hidup, termasuk pekerjaan dan kesetiaan kita.",
      "Jangan takut meninggalkan hal yang bertentangan dengan iman.",
      "Hormati para pendahulu dalam iman yang setia sampai akhir."
    ],
    "patron": [],
    "keywords": [
      "nereus",
      "achilleus",
      "akhilleus",
      "domitila",
      "katakombe",
      "roma",
      "prajurit"
    ],
    "sources": [
      "https://www.newadvent.org/cathen/10751a.htm"
    ]
  },
  {
    "id": "our-lady-of-fatima",
    "date": "05-13",
    "name": "SP Maria dari Fatima",
    "role": "Peringatan Santa Perawan Maria",
    "years": "",
    "rank": "optional",
    "color": "white",
    "story": "Antara 13 Mei dan 13 Oktober 1917, tiga anak Portugal, yakni Fransisko dan Yasinta Marto serta sepupu mereka Lusia dos Santos, menerima penampakan Bunda Maria di Cova da Iria dekat Fatima, sekitar 180 km di utara Lisboa. Maria meminta anak-anak itu mendoakan Rosario untuk perdamaian dunia dan berakhirnya Perang Dunia I, untuk para pendosa, dan untuk pertobatan Rusia. Ia memberikan tiga rahasia kepada mereka. Fransisko wafat pada 1919 dan Yasinta pada 1920. Lusia, yang kemudian menjadi biarawati Karmelit dan wafat pada 2005 dalam usia 97 tahun, mengungkapkan rahasia pertama dan kedua, yaitu tentang devosi kepada Hati Maria yang Tak Bernoda dan penglihatan tentang neraka. Rahasia ketiga diumumkan Takhta Suci pada tahun 2000 atas arahan Paus Yohanes Paulus II. Isinya tentang seorang \"uskup berpakaian putih\" yang ditembak, dan banyak orang mengaitkannya dengan percobaan pembunuhan Paus di Lapangan Santo Petrus pada 13 Mei 1981. Pesta SP Maria dari Fatima disetujui uskup setempat pada 1930 dan dimasukkan dalam kalender Gereja universal pada 2002. Inti pesan Fatima sederhana: berdoalah dan bertobatlah.",
    "example": [
      "Doakan Rosario, misalnya satu peristiwa setiap hari, untuk perdamaian dan pertobatan orang berdosa.",
      "Persembahkan kurban kecil sehari-hari dengan kasih.",
      "Tanggapilah kehendak Allah seperti Maria: \"Terjadilah padaku menurut perkataan-Mu.\""
    ],
    "patron": [],
    "keywords": [
      "fatima",
      "portugal",
      "rosario",
      "lusia",
      "fransisko",
      "yasinta",
      "penampakan",
      "maria"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/our-lady-of-fatima/"
    ]
  },
  {
    "id": "st-matthias-ap",
    "date": "05-14",
    "name": "St. Matias, Rasul",
    "role": "Rasul",
    "years": "abad ke-1",
    "rank": "feast",
    "color": "red",
    "story": "Kisah Para Rasul 1:15-26 menceritakan bagaimana Matias menjadi rasul. Pada hari-hari setelah Kenaikan Tuhan, Petrus berdiri di tengah sekitar 120 murid Yesus dan menyatakan bahwa, karena Yudas telah berkhianat, sesuai Kitab Suci harus ada orang lain yang mengambil alih jabatannya. Penggantinya harus seseorang yang selalu menyertai mereka selama Tuhan Yesus hidup bersama mereka, mulai dari pembaptisan oleh Yohanes sampai hari Ia terangkat ke surga, sehingga dapat menjadi saksi kebangkitan-Nya. Jemaat mengajukan dua orang, yaitu Yusuf yang disebut Barsabas dan Matias. Mereka berdoa memohon petunjuk Tuhan lalu membuang undi, dan undian jatuh kepada Matias, sehingga ia ditambahkan kepada kesebelas rasul. Selain dalam kisah ini, nama Matias tidak disebut di bagian lain Perjanjian Baru, dan riwayat hidupnya kemudian tidak diketahui dengan pasti. Kekudusannya terletak pada kesetiaannya mengikuti Yesus sejak awal sampai akhir, juga ketika ia belum memiliki jabatan apa pun, serta kesediaannya menerima panggilan menjadi saksi kebangkitan. Ia mengingatkan bahwa kekudusan adalah karunia Allah yang ditawarkan kepada semua orang dalam keadaan hidup sehari-hari.",
    "example": [
      "Setialah mengikuti Yesus dalam hal-hal kecil, walaupun tidak dilihat orang.",
      "Ketika diberi tugas atau tanggung jawab baru di Gereja, terimalah dengan rendah hati.",
      "Libatkan doa dalam setiap keputusan penting."
    ],
    "patron": [],
    "keywords": [
      "matthias",
      "matias",
      "rasul",
      "yudas",
      "kisah para rasul",
      "undi"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-matthias/"
    ]
  },
  {
    "id": "st-john-i-pope",
    "date": "05-18",
    "name": "St. Yohanes I, Paus dan Martir",
    "role": "Paus dan Martir",
    "years": "± 470–526",
    "rank": "optional",
    "color": "white",
    "story": "Yohanes I menjadi paus pada masa Italia dikuasai oleh raja yang menganut bidaah Arianisme, yang menyangkal keallahan Kristus. Selama sekitar tiga puluh tahun penguasa itu bersikap toleran terhadap umat Katolik, tetapi kebijakannya berubah sekitar masa Yohanes terpilih menjadi paus. Ketika kaisar di wilayah Timur mulai menerapkan tindakan keras terhadap kaum Arian di wilayahnya, penguasa Barat memaksa Paus Yohanes memimpin sebuah delegasi ke wilayah Timur untuk meminta agar tindakan itu diperlunak. Tujuannya ialah menjamin agar umat Katolik di Barat tetap ditoleransi. Tidak banyak yang diketahui tentang jalannya ataupun hasil perundingan itu. Dalam perjalanan pulang, Yohanes dipenjarakan di Ravenna karena sang penguasa curiga bahwa persahabatan Paus dengan kaisar Timur dapat berujung pada persekongkolan melawan takhtanya. Tak lama setelah dipenjara, Yohanes wafat pada tahun 526, tampaknya akibat perlakuan buruk yang ia terima di penjara. Karena itu ia dihormati sebagai martir. Jenazahnya dibawa ke Roma dan dimakamkan di Basilika Santo Petrus. Ia menderita bukan karena pilihannya sendiri, melainkan karena kecurigaan seorang penguasa yang haus kuasa.",
    "example": [
      "Terimalah tugas yang sulit demi kebaikan sesama, walau berisiko.",
      "Tetaplah tenang dan setia ketika disalahpahami atau dicurigai.",
      "Doakan para pemimpin Gereja yang menghadapi tekanan politik."
    ],
    "patron": [],
    "keywords": [
      "john i",
      "yohanes i",
      "paus",
      "martir",
      "ravenna",
      "arianisme",
      "john the first"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-john-i/"
    ]
  },
  {
    "id": "st-bernardine-siena",
    "date": "05-20",
    "name": "St. Bernardinus dari Siena, Imam",
    "role": "Imam Fransiskan, Pengkhotbah",
    "years": "1380–1444",
    "rank": "optional",
    "color": "white",
    "story": "Bernardinus lahir di Siena, Italia, pada 8 September 1380. Ketika berusia 20 tahun, wabah sampar melanda kotanya; kadang dua puluh orang meninggal dalam sehari di rumah sakit. Ia menawarkan diri mengelola rumah sakit itu dan bersama beberapa pemuda merawat para penderita selama empat bulan. Ia luput dari wabah, tetapi kelelahan hingga jatuh sakit berbulan-bulan. Pada usia 22 tahun ia masuk Ordo Fransiskan dan dua tahun kemudian ditahbiskan imam. Hampir dua belas tahun ia hidup dalam keheningan dan doa, lalu diutus berkhotbah. Ia berjalan kaki keliling Italia, mendamaikan kota-kota yang bertikai, melawan takhayul, dan menarik hingga 30.000 pendengar, walaupun suaranya lemah dan serak. Ia dikenal karena devosinya kepada Nama Yesus yang Kudus dan memperkenalkan lambang IHS di atas matahari bersinar. Devosi ini sempat dicurigai sebagai pembaruan berbahaya, tetapi kesetiaan dan ajarannya yang benar terbukti. Sebagai pemimpin Fransiskan Observan ia mendorong studi teologi dan hukum Gereja; jumlah saudara bertambah dari 300 menjadi 4.000. Ia wafat dalam perjalanan pada 20 Mei 1444.",
    "example": [
      "Hormatilah Nama Yesus dalam tutur kata sehari-hari dan jangan menggunakannya sembarangan.",
      "Bersedialah merawat orang sakit, terutama di saat krisis.",
      "Gunakan kemampuan berbicara untuk mendamaikan, bukan memecah belah."
    ],
    "patron": [
      "periklanan",
      "hubungan masyarakat",
      "penjudi",
      "Italia"
    ],
    "keywords": [
      "bernardine",
      "bernardinus",
      "siena",
      "nama yesus",
      "ihs",
      "fransiskan",
      "pengkhotbah"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-bernardine-of-siena/"
    ]
  },
  {
    "id": "st-christopher-magallanes",
    "date": "05-21",
    "name": "St. Kristoforus Magallanes, Imam, dan Kawan-kawan, Martir",
    "role": "Imam dan Martir",
    "years": "1869–1927",
    "rank": "optional",
    "color": "red",
    "story": "Kristoforus (Cristóbal) Magallanes lahir pada 30 Juli 1869 dan menjadi imam di Meksiko. Ia dan 24 martir yang dikenang bersamanya hidup di bawah pemerintahan yang sangat anti-Katolik dan bertekad melemahkan iman rakyat. Gereja, sekolah, dan seminari ditutup, sedangkan para imam asing diusir. Kristoforus mendirikan seminari secara diam-diam di Totatiche, Jalisco. Ia dan para imam lain terpaksa melayani umat secara sembunyi-sembunyi selama masa pemerintahan Presiden Plutarco Calles (1924–1928), ketika menerima baptisan atau merayakan Misa dianggap kejahatan. Semua martir dalam kelompok ini adalah imam diosesan, kecuali tiga awam, yaitu David, Manuel, dan Salvador, yang wafat bersama pastor paroki mereka, Luis Batis. Mereka tergabung dalam gerakan Cristero dan menyatakan kesetiaan kepada Kristus dan Gereja-Nya. Mereka tidak dibunuh sekaligus, tetapi dalam rentang sekitar 22 tahun (1915–1937) di delapan negara bagian Meksiko, terutama Jalisco dan Zacatecas. Kristoforus sendiri wafat sebagai martir pada 25 Mei 1927. Mereka dibeatifikasi pada 1992 dan dikanonisasi delapan tahun kemudian. Mereka memilih hati nurani yang bersih daripada hidup panjang.",
    "example": [
      "Tetap setia pada Misa dan sakramen, apa pun tantangannya.",
      "Dukung panggilan imam dan pendidikan calon imam.",
      "Jangan berkompromi dengan iman hanya demi rasa aman atau kenyamanan."
    ],
    "patron": [],
    "keywords": [
      "cristobal magallanes",
      "christopher",
      "kristoforus",
      "meksiko",
      "cristero",
      "martir",
      "jalisco"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-cristobal-magallanes-and-companions/"
    ]
  },
  {
    "id": "st-rita-cascia",
    "date": "05-22",
    "name": "St. Rita dari Cascia, Biarawati",
    "role": "Istri, Ibu, Janda, dan Biarawati Agustinian",
    "years": "1381–1457",
    "rank": "optional",
    "color": "white",
    "story": "Rita lahir di Roccaporena, Italia tengah. Ia ingin menjadi biarawati, tetapi sejak muda ia didesak menikah dengan seorang pria yang keras dan kejam. Selama 18 tahun pernikahan ia melahirkan dan membesarkan dua anak laki-laki. Suaminya kemudian terbunuh dalam sebuah perkelahian, dan kedua putranya juga meninggal. Setelah itu Rita mencoba masuk biara suster Agustinian di Cascia. Awalnya ia ditolak karena seorang janda, tetapi akhirnya ia diterima. Selama bertahun-tahun, hidup matiraganya, doanya, dan kasihnya menjadi terkenal. Ia sering merenungkan sengsara Kristus, dan ketika muncul luka di dahinya, orang mengaitkannya dengan luka mahkota duri Kristus. Ia merawat para suster yang sakit dengan penuh kasih dan memberi nasihat kepada kaum awam yang datang ke biaranya. Rita wafat pada 22 Mei 1457. Ia dibeatifikasi pada 1626 tetapi baru dikanonisasi pada 1900. Bersama St. Yudas Tadeus, ia dikenal sebagai santa pelindung perkara-perkara yang mustahil, dan makamnya di Cascia dikunjungi banyak peziarah setiap tahun. Kekudusannya tumbuh dalam setiap tahap hidup: sebagai istri, ibu, janda, dan biarawati.",
    "example": [
      "Bertahanlah dalam doa dan kesabaran ketika menghadapi masalah keluarga yang berat.",
      "Ampunilah orang yang menyakiti kita.",
      "Jangan menunggu keadaan ideal untuk hidup kudus; mulailah dari situasi kita sekarang."
    ],
    "patron": [
      "perkara mustahil",
      "pernikahan yang sulit",
      "orang tua",
      "kemandulan"
    ],
    "keywords": [
      "rita",
      "cascia",
      "agustinian",
      "perkara mustahil",
      "janda",
      "pengampunan",
      "roccaporena"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-rita-of-cascia/"
    ]
  },
  {
    "id": "st-bede-venerable",
    "date": "05-25",
    "name": "St. Beda Venerabilis, Imam dan Pujangga Gereja",
    "role": "Imam, Biarawan, dan Pujangga Gereja",
    "years": "± 672–735",
    "rank": "optional",
    "color": "white",
    "story": "Beda sudah dihormati sebagai orang kudus bahkan selama hidupnya; sebuah konsili Gereja memerintahkan agar tulisannya dibacakan di gereja-gereja. Sejak kecil ia dititipkan kepada abas Biara Santo Paulus di Jarrow, Inggris. Di bawah bimbingan para rahib yang saleh dan terpelajar, ia tumbuh menjadi orang kudus sekaligus sarjana terbesar pada zamannya. Ia menguasai filsafat alam, astronomi, aritmetika, tata bahasa, sejarah Gereja, riwayat orang kudus, dan terutama Kitab Suci. Ia ditahbiskan diakon pada usia 19 tahun dan imam pada usia 30 tahun, lalu seluruh hidupnya diisi dengan belajar, menulis, dan mengajar. Selain menyalin banyak buku, ia menyusun 45 karya sendiri, termasuk 30 tafsir Kitab Suci. Karyanya Sejarah Gerejawi Bangsa Inggris dipandang sangat penting bagi ilmu penulisan sejarah. Meskipun dicari raja-raja dan bahkan Paus Sergius, Beda tetap tinggal di biaranya; hanya sekali ia pergi beberapa bulan untuk mengajar di York. Pada masa Prapaskah terakhirnya ia menerjemahkan Injil Yohanes ke bahasa Inggris dan menyelesaikannya pada hari wafatnya. Ia wafat pada 25 Mei 735 sambil mendoakan Kemuliaan.",
    "example": [
      "Gunakan waktu dengan tekun untuk belajar dan bekerja dengan baik sebagai pelayanan kepada Tuhan.",
      "Bacalah Kitab Suci setiap hari.",
      "Setialah pada tempat dan tugas yang Tuhan berikan, tanpa mengejar ketenaran."
    ],
    "patron": [
      "sarjana",
      "cendekiawan"
    ],
    "keywords": [
      "bede",
      "beda",
      "venerable",
      "jarrow",
      "inggris",
      "sejarah",
      "kitab suci",
      "biarawan"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-bede-the-venerable/"
    ]
  },
  {
    "id": "st-gregory-v-i-i",
    "date": "05-25",
    "name": "St. Gregorius VII, Paus",
    "role": "Paus",
    "years": "± 1025–1085",
    "rank": "optional",
    "color": "white",
    "story": "Abad ke-10 dan paruh pertama abad ke-11 adalah masa gelap bagi Gereja, antara lain karena kepausan menjadi alat permainan keluarga-keluarga bangsawan Roma. Keadaan mulai berubah pada 1049 ketika Paus Leo IX, seorang pembaru, terpilih. Ia membawa seorang rahib muda bernama Hildebrand ke Roma sebagai penasihat dan utusan khusus dalam berbagai misi penting. Hildebrand inilah yang kelak menjadi Paus Gregorius VII. Pada masa itu Gereja dirundung tiga kejahatan: simoni (jual beli jabatan dan barang suci), perkawinan klerus yang tidak sah, dan investitur awam, yaitu raja dan bangsawan yang menguasai pengangkatan pejabat Gereja. Hildebrand berjuang melawan ketiganya, mula-mula sebagai penasihat para paus dan kemudian sebagai paus sendiri. Surat-surat kepausannya menegaskan peran Uskup Roma sebagai wakil Kristus dan pusat kesatuan Gereja yang kelihatan. Ia terkenal karena pertikaiannya yang panjang dengan Kaisar Henrikus IV tentang siapa yang berhak memilih uskup dan abas. Karena gigih membela kebebasan Gereja, ia menderita dan akhirnya wafat di pengasingan pada 25 Mei 1085. Tiga puluh tahun kemudian Gereja memenangkan perjuangan melawan investitur awam. Pembaruan ini dikenal sebagai Reformasi Gregorian.",
    "example": [
      "Tolak segala bentuk suap dan korupsi, termasuk dalam pelayanan Gereja.",
      "Beranilah membela keadilan meski harus menanggung kerugian.",
      "Doakan kesatuan Gereja dan para pemimpinnya."
    ],
    "patron": [],
    "keywords": [
      "gregory vii",
      "gregorius",
      "hildebrand",
      "paus",
      "reformasi gregorian",
      "investitur",
      "simoni"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-gregory-vii/"
    ]
  },
  {
    "id": "st-mary-magdalene-pazzi",
    "date": "05-25",
    "name": "St. Maria Magdalena de Pazzi, Perawan",
    "role": "Biarawati Karmelit, Mistikus",
    "years": "1566–1607",
    "rank": "optional",
    "color": "white",
    "story": "Katarina de Pazzi lahir pada 1566 dalam keluarga bangsawan di Firenze, Italia. Ia bisa saja menikah dengan orang kaya dan hidup nyaman, tetapi memilih jalan lain. Pada usia sembilan tahun ia belajar bermeditasi dari bapa pengakuan keluarganya, menerima Komuni Pertama pada usia sepuluh tahun, dan sebulan kemudian mengucapkan kaul keperawanan. Pada usia 16 tahun ia masuk biara Karmelit di Firenze karena di sana ia dapat menerima Komuni setiap hari, dan mengambil nama Maria Magdalena. Setelah setahun menjadi novis ia jatuh sakit parah, sehingga diizinkan mengucapkan kaul secara pribadi di atas tandu di kapel. Segera sesudahnya ia mengalami ekstase selama sekitar dua jam, dan hal itu terulang setelah Komuni selama 40 pagi berikutnya. Atas permintaan bapa pengakuannya, pengalaman rohaninya didiktekan kepada para suster dan dibukukan dalam lima jilid. Sesudah masa penghiburan itu, ia mengalami lima tahun kekeringan rohani, godaan berat, dan penderitaan fisik. Ia wafat pada 1607 dalam usia 41 tahun dan dikanonisasi pada 1669. Ia dikenal sebagai \"santa ekstase\".",
    "example": [
      "Hargai Ekaristi dan, bila mungkin, ikutilah Misa harian.",
      "Tetaplah setia berdoa juga ketika doa terasa kering dan Tuhan seakan jauh.",
      "Carilah bimbingan rohani untuk menguji pengalaman iman kita."
    ],
    "patron": [],
    "keywords": [
      "mary magdalene de pazzi",
      "maria magdalena de pazzi",
      "karmelit",
      "firenze",
      "florence",
      "mistikus",
      "ekstase"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-mary-magdalene-de-pazzi/"
    ]
  },
  {
    "id": "st-philip-neri",
    "date": "05-26",
    "name": "St. Filipus Neri, Imam",
    "role": "Imam, Pendiri Kongregasi Oratorium",
    "years": "1515–1595",
    "rank": "memorial",
    "color": "white",
    "story": "Filipus Neri lahir di Firenze pada 21 Juli 1515. Sejak muda ia melepaskan kesempatan menjadi pedagang, pindah ke Roma, dan mempersembahkan hidupnya kepada Allah. Setelah tiga tahun belajar filsafat dan teologi, ia tidak langsung menjadi imam, melainkan selama 13 tahun hidup sebagai awam yang aktif berdoa dan merasul, hal yang tidak lazim pada masa itu. Di tengah Roma yang merosot moralnya, kepribadiannya yang menarik memikat orang dari segala lapisan, dari pengemis sampai kardinal. Ia mengumpulkan kelompok awam untuk berdoa, berdiskusi, dan melayani orang miskin. Atas desakan bapa pengakuannya ia ditahbiskan imam dan menjadi bapa pengakuan yang ulung, mampu menembus kepura-puraan orang dengan penuh kasih dan sering dengan canda. Ia mengadakan ceramah, doa, dan ziarah ke gereja-gereja Roma, sering dengan musik dan piknik. Para pengikutnya yang menjadi imam hidup bersama, dan dari situ lahirlah Kongregasi Oratorium; komponis Palestrina termasuk pengikutnya. Kerendahan hati dan kegembiraan adalah keutamaannya yang khas. Ia wafat pada 26 Mei 1595, hari raya Tubuh Kristus, dan dikanonisasi pada 1622.",
    "example": [
      "Jadikan sukacita dan humor sehat sebagai bagian dari hidup beriman.",
      "Ajak teman berdoa, membaca Kitab Suci, atau berziarah bersama.",
      "Sering mengaku dosa dan bersikap rendah hati, tanpa menganggap diri lebih suci dari orang lain."
    ],
    "patron": [],
    "keywords": [
      "philip neri",
      "filipus neri",
      "oratorium",
      "roma",
      "sukacita",
      "humor",
      "pengakuan dosa"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-philip-neri/"
    ]
  },
  {
    "id": "st-augustine-canterbury",
    "date": "05-27",
    "name": "St. Agustinus dari Canterbury, Uskup",
    "role": "Uskup, Misionaris",
    "years": "? – 605",
    "rank": "optional",
    "color": "white",
    "story": "Agustinus adalah prior sebuah biara di Roma. Pada 596 Paus Gregorius Agung mengutus dia memimpin sekitar 40 rahib untuk mewartakan Injil kepada bangsa Anglo-Saxon di Inggris. Baru sampai di Galia, rombongan itu mendengar cerita tentang kebengisan orang Anglo-Saxon dan ganasnya Selat Inggris, sehingga Agustinus kembali ke Roma. Paus Gregorius meyakinkan bahwa ketakutan mereka tidak beralasan, dan Agustinus berangkat lagi. Mereka mendarat di Kent, wilayah Raja Ethelbert, seorang kafir yang beristrikan seorang Kristen bernama Bertha. Raja menerima mereka dengan ramah, memberi tempat tinggal di Canterbury, dan dalam setahun, pada hari Pentakosta 597, ia sendiri dibaptis. Setelah ditahbiskan uskup di Prancis, Agustinus mendirikan takhta keuskupannya di Canterbury, membangun gereja dan biara, dan kemudian keuskupan baru didirikan di London dan Rochester. Usahanya mendamaikan umat Anglo-Saxon dengan orang Kristen Briton tidak berhasil. Ia mengikuti petunjuk Paus Gregorius untuk memurnikan, bukan menghancurkan, adat setempat. Ia wafat pada 605, hanya delapan tahun setelah tiba, dan dikenang sebagai \"Rasul Inggris\".",
    "example": [
      "Jangan menyerah ketika rasa takut atau kegagalan menghampiri; kembalilah meminta kekuatan dan nasihat.",
      "Hargai budaya setempat sambil mewartakan Injil.",
      "Bersabarlah dengan hasil kecil dan bertahap."
    ],
    "patron": [
      "Inggris"
    ],
    "keywords": [
      "augustine of canterbury",
      "agustinus",
      "canterbury",
      "inggris",
      "misionaris",
      "anglo-saxon",
      "kent"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-augustine-of-canterbury/"
    ]
  },
  {
    "id": "st-paul-v-i",
    "date": "05-29",
    "name": "St. Paulus VI, Paus",
    "role": "Paus",
    "years": "1897–1978",
    "rank": "optional",
    "color": "white",
    "story": "Giovanni Battista Montini lahir pada 26 September 1897 dekat Brescia, Italia utara. Ayahnya seorang pengacara, editor, dan anggota parlemen, sedangkan ibunya aktif dalam Aksi Katolik. Setelah ditahbiskan imam pada 1920, ia belajar di Roma lalu bekerja di Sekretariat Negara Vatikan selama 30 tahun, sekaligus menjadi pendamping federasi mahasiswa Katolik Italia. Pada 1954 ia diangkat menjadi Uskup Agung Milano dan menyebut dirinya \"uskup agung para buruh\", sering mengunjungi pabrik. Pada 1958 Paus Yohanes XXIII mengangkatnya menjadi kardinal. Setelah terpilih menjadi paus pada Juni 1963 dengan nama Paulus VI, ia segera melanjutkan Konsili Vatikan II sampai selesai pada 8 Desember 1965. Ia bersama Patriark Athenagoras mencabut ekskomunikasi timbal balik tahun 1054. Ia mengejutkan dunia dengan berziarah ke Tanah Suci pada Januari 1964, lalu mengunjungi antara lain India, PBB di New York, Kolombia, Uganda, dan negara-negara Asia. Ia mendirikan Sinode Para Uskup dan menulis tujuh ensiklik, termasuk Humanae Vitae (1968). Ia wafat di Castel Gandolfo pada 6 Agustus 1978 dan dikanonisasi pada 14 Oktober 2018.",
    "example": [
      "Dukung pembaruan Gereja dengan setia dan sabar.",
      "Perhatikan para pekerja dan kaum kecil di sekitar kita.",
      "Bangun dialog dan persahabatan dengan saudara-saudari dari Gereja dan agama lain."
    ],
    "patron": [],
    "keywords": [
      "paul vi",
      "paulus vi",
      "montini",
      "vatikan ii",
      "konsili",
      "humanae vitae",
      "paus"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-paul-vi/"
    ]
  },
  {
    "id": "visitation",
    "date": "05-31",
    "name": "Pesta SP Maria Mengunjungi Elisabet",
    "role": "Pesta Santa Perawan Maria",
    "years": "",
    "rank": "feast",
    "color": "white",
    "story": "Pesta ini mengenang kisah dalam Injil Lukas 1:39-56. Setelah menerima kabar dari malaikat Gabriel bahwa ia akan mengandung Putra Allah, Maria bergegas pergi ke sebuah kota di pegunungan Yehuda untuk mengunjungi sanaknya, Elisabet, yang pada usia tua sedang mengandung Yohanes Pembaptis. Ketika Elisabet mendengar salam Maria, anak dalam kandungannya melonjak kegirangan, dan Elisabet, yang penuh Roh Kudus, memuji Maria sebagai \"ibu Tuhanku\" dan berbahagia karena telah percaya. Maria lalu menanggapi dengan kidung Magnificat, \"Jiwaku memuliakan Tuhan\", yang memuliakan Allah atas karya agung-Nya bagi orang kecil. Pujian Elisabet dapat dipandang sebagai bentuk devosi Gereja yang paling awal kepada Maria. Pesta ini relatif muda, berasal dari abad ke-13 atau ke-14, dan disebarluaskan di seluruh Gereja untuk mendoakan kesatuan. Sejak 1969 pesta ini dirayakan pada 31 Mei, sesudah Hari Raya Kabar Sukacita dan sebelum Hari Raya Kelahiran St. Yohanes Pembaptis. Seperti Tabut Perjanjian, Maria membawa kehadiran Allah kepada sesama, dan devosi yang sejati kepadanya menuntun orang kepada Kristus.",
    "example": [
      "Kunjungi dan bantulah kerabat atau tetangga yang membutuhkan, terutama yang sedang hamil, sakit, atau lanjut usia.",
      "Doakan Magnificat sebagai ungkapan syukur.",
      "Bawalah Yesus kepada orang lain lewat kehadiran yang penuh kasih."
    ],
    "patron": [],
    "keywords": [
      "visitation",
      "maria mengunjungi elisabet",
      "elisabet",
      "magnificat",
      "maria",
      "yohanes pembaptis",
      "kunjungan"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/visitation-of-the-blessed-virgin-mary/"
    ]
  },
  {
    "id": "st-justin-martyr",
    "date": "06-01",
    "name": "St. Yustinus, Martir",
    "role": "Martir, Filsuf dan Apologet",
    "years": "± 100–165",
    "rank": "memorial",
    "color": "red",
    "story": "Yustinus adalah seorang pencari kebenaran. Sebagai orang muda ia mempelajari berbagai aliran filsafat kafir dan terutama tertarik pada ajaran Plato. Namun akhirnya ia mendapati bahwa agama Kristen menjawab pertanyaan-pertanyaan besar tentang hidup dan keberadaan dengan lebih baik daripada para filsuf, sehingga ia menjadi Kristen. Setelah bertobat ia tetap memakai jubah filsuf dan dikenal sebagai filsuf Kristen pertama. Ia memadukan iman Kristen dengan unsur-unsur terbaik filsafat Yunani; baginya filsafat adalah pendidik yang menuntun orang kepada Kristus. Yustinus dikenal sebagai apologet, yaitu orang yang membela iman Kristen secara tertulis terhadap serangan dan salah paham dari kaum kafir. Dua karya apologinya masih ada sampai sekarang, ditujukan kepada kaisar Romawi dan Senat. Dalam tulisan-tulisan itu ia menjelaskan secara terbuka ajaran dan cara hidup umat Kristen. Karena teguh berpegang pada iman Kristen, Yustinus dipenggal di Roma sekitar tahun 165. Ia dihormati sebagai pelindung para filsuf dan mengajak kita memakai akal budi untuk melayani Kristus.",
    "example": [
      "Teruslah belajar dan mencari kebenaran, termasuk lewat ilmu dan filsafat.",
      "Bersiaplah menjelaskan iman dengan sopan dan masuk akal kepada orang yang bertanya.",
      "Tetap teguh dalam iman walau ditantang."
    ],
    "patron": [
      "filsuf"
    ],
    "keywords": [
      "justin",
      "yustinus",
      "martir",
      "filsuf",
      "apologet",
      "roma",
      "plato"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-justin/"
    ]
  },
  {
    "id": "sts-marcellinus-peter",
    "date": "06-02",
    "name": "St. Marselinus dan St. Petrus, Martir",
    "role": "Martir",
    "years": "wafat ± 304",
    "rank": "optional",
    "color": "red",
    "story": "Marselinus dan Petrus adalah martir Roma yang begitu dikenang oleh Gereja sehingga nama mereka dicantumkan dalam Kanon Romawi, yaitu Doa Syukur Agung I. Marselinus adalah seorang imam, sedangkan Petrus seorang eksorsis, yaitu orang yang diberi wewenang oleh Gereja untuk menangani kasus kerasukan setan. Keduanya dipenggal dalam penganiayaan di bawah Kaisar Diokletianus, sekitar tahun 304. Paus Damasus kemudian menulis sebuah prasasti untuk mereka, yang tampaknya didasarkan pada kesaksian algojo yang mengeksekusi mereka. Kaisar Konstantinus mendirikan sebuah basilika di atas makam tempat mereka dimakamkan di Roma. Dari kisah awal tentang kematian mereka kemudian muncul banyak legenda, sehingga detail hidup mereka hampir tidak diketahui dengan pasti. Meski demikian, Gereja tetap menghormati mereka dengan peringatan sendiri karena menghargai ingatan bersama umat: kesaksian mereka pernah meneguhkan seluruh Gereja, dan mereka telah mengambil langkah iman yang paling akhir, yaitu menyerahkan nyawa demi Kristus. Nama mereka masih disebut setiap kali Doa Syukur Agung I didoakan dalam Misa.",
    "example": [
      "Perhatikan nama-nama orang kudus yang disebut dalam doa Misa dan kenalilah mereka.",
      "Layanilah Gereja sesuai tugas masing-masing dengan setia.",
      "Teguhkan sesama yang sedang berjuang mempertahankan iman."
    ],
    "patron": [],
    "keywords": [
      "marcellinus",
      "peter",
      "marselinus",
      "petrus",
      "martir",
      "diokletianus",
      "kanon romawi"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saints-marcellinus-and-peter/"
    ]
  },
  {
    "id": "sts-charles-lwanga",
    "date": "06-03",
    "name": "St. Karolus Lwanga dan Kawan-kawan, Martir",
    "role": "Martir",
    "years": "wafat 1886",
    "rank": "memorial",
    "color": "red",
    "story": "Karolus Lwanga adalah salah satu dari 22 martir Uganda yang dikanonisasi. Ia pertama kali mengenal ajaran Kristus dari dua abdi di istana seorang kepala suku. Ketika masih katekumen, ia masuk ke istana Raja Mwanga dari Buganda sebagai pembantu Yosef Mukasa, kepala para pelayan istana. Raja Mwanga menuntut para pelayan muda istana, yang berusia 13 sampai 30 tahun, untuk memenuhi nafsu seksualnya. Yosef Mukasa dibunuh karena mendorong para pemuda menolak tuntutan itu. Pada malam kemartiran Mukasa, Karolus meminta dan menerima baptisan. Ia kemudian melindungi para pelayan muda itu, meneguhkan, dan mengajar mereka tentang iman Katolik. Ketika mereka dipenjara karena menolak kehendak raja, keberanian dan iman Karolus menguatkan teman-temannya untuk tetap murni dan setia. Karena menolak tindakan amoral dan karena membela iman sahabat-sahabatnya, Karolus dibakar hidup-hidup di Namugongo pada 3 Juni 1886 atas perintah Mwanga. Para martir lain wafat antara November 1885 dan Januari 1887. Paus Paulus VI mengkanonisasi ke-22 martir ini pada 18 Oktober 1964, sambil juga menyebut para pelayan Anglikan yang dibunuh karena alasan yang sama.",
    "example": [
      "Lindungi anak-anak dan orang muda dari pelecehan dan eksploitasi.",
      "Beranilah berkata tidak terhadap tekanan untuk berbuat dosa, juga dari atasan.",
      "Teguhkan teman-teman agar setia pada iman dan kemurnian."
    ],
    "patron": [
      "kaum muda Afrika",
      "Aksi Katolik di Afrika"
    ],
    "keywords": [
      "charles lwanga",
      "karolus",
      "uganda",
      "martir uganda",
      "namugongo",
      "kemurnian",
      "afrika"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-charles-lwanga-and-companions/"
    ]
  },
  {
    "id": "st-boniface",
    "date": "06-05",
    "name": "St. Bonifasius, Uskup dan Martir",
    "role": "Uskup dan Martir, Rasul Jerman",
    "years": "± 675–754",
    "rank": "memorial",
    "color": "white",
    "story": "Bonifasius adalah seorang rahib Benediktin dari Inggris yang menolak dipilih menjadi abas agar dapat mengabdikan hidupnya bagi pertobatan suku-suku Jermanik. Pada 719, atas permintaan Paus Gregorius II, ia memulai perjalanan misinya yang pertama. Ia mendapati kekafiran masih menjadi cara hidup, sedangkan kekristenan yang ada sudah bercampur dengan kekeliruan, antara lain karena banyak klerus tidak terdidik, lalai, dan kurang taat kepada uskup. Ketika kembali ke Roma pada 722, Paus menugaskannya membarui Gereja di Jerman dan membekalinya dengan surat rekomendasi. Ia juga mendapat surat jaminan perlindungan dari Karel Martel, penguasa Frank, dan kemudian diangkat menjadi uskup yang berwenang menata seluruh Gereja Jerman. Dua prinsip membimbing karyanya: memulihkan ketaatan klerus kepada uskup dalam persatuan dengan Paus, dan mendirikan banyak rumah doa berupa biara Benediktin. Banyak rahib dan rubiah Anglo-Saxon mengikutinya ke daratan Eropa, dan ia melibatkan para rubiah dalam karya pendidikan. Dalam misi terakhirnya ke suku Frisia, Bonifasius dan 53 rekannya dibantai saat ia mempersiapkan para baptisan baru untuk menerima Sakramen Krisma. Ia wafat pada 5 Juni 754.",
    "example": [
      "Setialah pada ajaran Gereja dan kesatuan dengan Paus dan uskup.",
      "Dukung karya misi dan pembaruan Gereja, walaupun melelahkan dan tidak dihargai.",
      "Teruslah mewartakan iman sampai akhir hidup."
    ],
    "patron": [
      "Jerman"
    ],
    "keywords": [
      "boniface",
      "bonifasius",
      "jerman",
      "rasul jerman",
      "benediktin",
      "frisia",
      "misionaris"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-boniface/"
    ]
  },
  {
    "id": "st-norbert",
    "date": "06-06",
    "name": "St. Norbertus, Uskup",
    "role": "Uskup, Pendiri Ordo Premonstratensian",
    "years": "± 1080–1134",
    "rank": "optional",
    "color": "white",
    "story": "Norbertus hidup pada abad ke-12. Di wilayah Prémontré, Prancis, ia mendirikan sebuah ordo religius yang dikenal sebagai Premonstratensian atau Norbertin. Pendirian ordo itu merupakan tugas yang sangat berat: melawan bidaah yang merajalela, khususnya mengenai Sakramen Mahakudus, menghidupkan kembali iman banyak umat yang sudah acuh tak acuh dan hidup bebas, serta mengusahakan perdamaian dan rekonsiliasi di antara orang-orang yang bermusuhan. Norbertus tidak membanggakan kemampuannya sendiri. Bahkan dengan bantuan banyak pria yang bergabung dengan ordonya, ia sadar bahwa tidak ada yang dapat dilakukan secara efektif tanpa kuasa Allah. Ia menemukan pertolongan itu terutama dalam devosi kepada Sakramen Mahakudus. Ia dan para Norbertin bersyukur kepada Allah karena berhasil mempertobatkan penganut bidaah, mendamaikan banyak orang yang bermusuhan, dan membangun kembali iman umat yang suam. Banyak dari mereka tinggal di rumah-rumah pusat selama sepekan dan melayani paroki pada akhir pekan. Dengan berat hati Norbertus menerima pengangkatan sebagai Uskup Agung Magdeburg di Jerman tengah, wilayah yang setengah kafir dan setengah Kristen. Ia berkarya dengan tekun dan berani di sana sampai wafat pada 6 Juni 1134.",
    "example": [
      "Luangkan waktu untuk adorasi Sakramen Mahakudus.",
      "Jadilah pembawa damai di antara orang-orang yang berselisih.",
      "Lawan sikap acuh tak acuh terhadap iman dengan setia ikut serta dalam hidup paroki."
    ],
    "patron": [],
    "keywords": [
      "norbert",
      "norbertus",
      "premonstratensian",
      "norbertin",
      "magdeburg",
      "ekaristi",
      "premontre"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-norbert/"
    ]
  },
  {
    "id": "st-ephrem",
    "date": "06-09",
    "name": "St. Efrem, Diakon dan Pujangga Gereja",
    "role": "Diakon dan Pujangga Gereja",
    "years": "± 306–373",
    "rank": "optional",
    "color": "white",
    "story": "Efrem adalah penyair, guru, orator, dan pembela iman, serta satu-satunya orang Kristen Siria yang diakui sebagai Pujangga Gereja. Ia lahir di Nisibis, Mesopotamia, dibaptis ketika masih muda, dan menjadi guru terkenal di kotanya. Ketika kaisar Kristen terpaksa menyerahkan Nisibis kepada bangsa Persia, Efrem mengungsi ke Edessa bersama banyak orang Kristen lain, dan di sana ia ikut mengharumkan sekolah Kitab Suci. Ia ditahbiskan diakon tetapi menolak menjadi imam. Tulisan-tulisannya menunjukkan pemahaman Kitab Suci yang mendalam dan devosi besar kepada kemanusiaan Yesus. Ia menulis himne-himne untuk melawan ajaran sesat pada zamannya: ia mengambil lagu-lagu populer kelompok bidaah dan, dengan melodi yang sama, menggubah himne indah berisi ajaran yang benar. Dengan demikian ia termasuk yang pertama memakai nyanyian dalam ibadat umum sebagai sarana pengajaran iman. Karena banyaknya himne itu ia dijuluki \"Kecapi Roh Kudus\". Efrem memilih hidup sederhana dan keras, tinggal di sebuah gua kecil yang menghadap kota Edessa. Di sanalah ia wafat sekitar tahun 373.",
    "example": [
      "Bernyanyilah dengan sepenuh hati dalam Misa dan doa bersama.",
      "Gunakan bakat seni untuk mewartakan iman dengan indah.",
      "Hiduplah sederhana dan dalami Kitab Suci."
    ],
    "patron": [],
    "keywords": [
      "ephrem",
      "efrem",
      "siria",
      "edessa",
      "nisibis",
      "himne",
      "kecapi roh kudus",
      "pujangga gereja"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-ephrem/"
    ]
  },
  {
    "id": "st-barnabas-ap",
    "date": "06-11",
    "name": "St. Barnabas, Rasul",
    "role": "Rasul",
    "years": "abad ke-1",
    "rank": "memorial",
    "color": "red",
    "story": "Barnabas adalah seorang Yahudi dari Siprus. Walaupun tidak termasuk Dua Belas, Kitab Suci menyebutnya rasul. Ia dekat dengan Paulus: dialah yang memperkenalkan Paulus kepada Petrus dan para rasul lain, dan menjadi penengah antara bekas penganiaya itu dan umat Kristen Yahudi yang masih curiga. Ketika jemaat Kristen tumbuh di Antiokhia, Barnabas diutus oleh Gereja Yerusalem untuk merangkul mereka. Bersama Paulus ia mengajar di Antiokhia selama setahun, lalu mereka membawa bantuan ke Yerusalem. Kemudian keduanya diutus untuk mewartakan Injil kepada bangsa-bangsa lain dengan hasil besar. Di Listra, setelah sebuah mukjizat, orang banyak ingin mempersembahkan kurban kepada mereka sebagai dewa, tetapi mereka menolak dan mewartakan Allah yang hidup (Kis 14:8-18). Barnabas juga ikut dalam pembahasan di Yerusalem tentang soal sunat. Ketika Paulus menolak membawa Markus, sepupu Barnabas, keduanya berselisih tajam dan berpisah: Barnabas membawa Markus ke Siprus. Kemudian mereka berdamai kembali. Kisah Para Rasul melukiskan Barnabas sebagai orang baik, penuh Roh Kudus dan iman, sehingga banyak orang dibawa kepada Tuhan.",
    "example": [
      "Jadilah pendorong semangat bagi orang lain, seperti arti nama Barnabas.",
      "Berilah kesempatan kedua kepada orang yang pernah gagal.",
      "Berdamailah kembali setelah berselisih dengan sesama pelayan Tuhan."
    ],
    "patron": [
      "Siprus"
    ],
    "keywords": [
      "barnabas",
      "rasul",
      "siprus",
      "antiokhia",
      "paulus",
      "markus",
      "misionaris"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-barnabas/"
    ]
  },
  {
    "id": "st-anthony-padua",
    "date": "06-13",
    "name": "St. Antonius dari Padua, Imam dan Pujangga Gereja",
    "role": "Imam Fransiskan dan Pujangga Gereja",
    "years": "1195–1231",
    "rank": "memorial",
    "color": "white",
    "story": "Antonius berasal dari Portugal dan lahir pada 1195. Sebagai pemuda ia meninggalkan masa depan yang kaya dan berkuasa untuk bergabung dengan para kanon Agustinian di Lisboa. Ketika jenazah para martir Fransiskan pertama dibawa melewati kota tempat ia tinggal, ia terdorong untuk juga menyerahkan hidup demi Injil. Ia pun masuk Ordo Fransiskan dan berangkat untuk mewartakan Injil kepada orang Moor, tetapi sakit menggagalkan rencananya. Ia lalu tinggal di sebuah pertapaan kecil di Italia, berdoa, membaca Kitab Suci, dan melakukan pekerjaan sederhana. Pada suatu tahbisan, ketika tak seorang pun siap berkhotbah, Antonius diminta berbicara, dan khotbahnya mengagumkan semua orang. Ia menjadi saudara Fransiskan pertama yang mengajar teologi kepada para saudara, lalu diutus berkhotbah kepada kaum Albigensian di Prancis. Setelah memimpin para saudara di Italia utara, ia menetap di Padua, berkhotbah dan menulis bahan khotbah. Pada musim semi 1231 ia mundur ke Camposampiero untuk berdoa. Ia jatuh sakit dan wafat di Padua pada 13 Juni 1231. Ia dikanonisasi kurang dari setahun kemudian dan dinyatakan Pujangga Gereja pada 1946.",
    "example": [
      "Terbukalah pada rencana Tuhan ketika hidup berubah arah tanpa diduga.",
      "Siapkan diri dengan doa dan membaca Kitab Suci, supaya siap ketika diminta bersaksi.",
      "Ingatlah orang miskin dalam doa dan derma kita."
    ],
    "patron": [
      "barang hilang",
      "orang miskin",
      "pelancong"
    ],
    "keywords": [
      "anthony",
      "antonius",
      "padua",
      "lisboa",
      "fransiskan",
      "barang hilang",
      "pengkhotbah"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-anthony-of-padua/"
    ]
  },
  {
    "id": "st-romuald",
    "date": "06-19",
    "name": "St. Romualdus, Abas",
    "role": "Abas, Pendiri Kamaldoli",
    "years": "± 950–1027",
    "rank": "optional",
    "color": "white",
    "story": "Romualdus menjalani masa muda yang sia-sia, sampai suatu hari ia menyaksikan ayahnya membunuh seorang kerabat dalam duel memperebutkan harta. Karena ngeri, ia melarikan diri ke sebuah biara dekat Ravenna. Setelah tiga tahun, beberapa rahib merasa terganggu oleh kesuciannya dan menyingkirkannya. Selama tiga puluh tahun berikutnya Romualdus berkeliling Italia mendirikan biara dan pertapaan. Ia ingin menyerahkan hidupnya sebagai martir dan mendapat izin Paus untuk mewartakan Injil di Hungaria, tetapi setiap kali tiba ia jatuh sakit, sehingga tidak dapat melanjutkan. Ia juga pernah mengalami masa kekeringan rohani yang berat, sampai suatu hari, ketika mendoakan Mazmur, ia menerima terang rohani yang tidak pernah meninggalkannya lagi. Di sebuah biara lain ia difitnah melakukan kejahatan memalukan oleh seorang bangsawan muda yang pernah ia tegur. Para rahib mempercayai tuduhan itu; ia dihukum berat dan dilarang merayakan Misa, dan selama enam bulan ia menanggungnya dalam diam. Biara paling terkenal yang ia dirikan adalah Camaldoli di Toskana, awal Ordo Benediktin Kamaldoli yang memadukan hidup biara dan pertapaan. Ayahnya sendiri kemudian menjadi rahib dan diteguhkan oleh putranya. Romualdus wafat pada 19 Juni 1027.",
    "example": [
      "Biarkan peristiwa buruk menjadi titik balik untuk bertobat.",
      "Tetaplah berdoa saat doa terasa kering.",
      "Tanggunglah fitnah dengan sabar dan serahkan pembelaan kepada Tuhan."
    ],
    "patron": [],
    "keywords": [
      "romuald",
      "romualdus",
      "kamaldoli",
      "camaldoli",
      "ravenna",
      "pertapa",
      "benediktin"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-romuald/"
    ]
  },
  {
    "id": "st-aloysius-gonzaga",
    "date": "06-21",
    "name": "St. Aloysius Gonzaga, Biarawan",
    "role": "Biarawan Yesuit",
    "years": "1568–1591",
    "rank": "memorial",
    "color": "white",
    "story": "Aloysius lahir pada 9 Maret 1568 dalam keluarga bangsawan Gonzaga di Castiglione, Italia. Ia dibesarkan di istana dan perkemahan militer, dan ayahnya ingin ia menjadi pahlawan perang. Pada usia tujuh tahun ia mengalami kebangkitan rohani yang mendalam. Pada usia sembilan tahun ia dikirim ke Firenze untuk belajar, dan pada usia sebelas tahun ia sudah mengajar katekismus kepada anak-anak miskin. Ketika berusia 13 tahun ia ikut orang tuanya ke Spanyol dan menjadi pelayan muda di istana Raja Filipus II. Semakin ia melihat kehidupan istana, semakin ia kecewa. Sebuah buku tentang para misionaris Yesuit di India menumbuhkan keinginannya masuk Serikat Yesus. Ayahnya menentang selama empat tahun, tetapi akhirnya Aloysius diizinkan melepaskan hak warisnya dan masuk novisiat Yesuit. Ia belajar filsafat di bawah bimbingan rohani St. Robertus Bellarminus. Pada 1591 wabah melanda Roma, dan para Yesuit membuka rumah sakit sendiri. Aloysius merawat para pasien, memandikan mereka dan merapikan tempat tidur, hingga ia sendiri tertular. Ia wafat pada 21 Juni 1591 dalam usia 23 tahun.",
    "example": [
      "Beranilah memilih panggilan hidup sesuai kehendak Tuhan, walau ditentang.",
      "Latihlah pengendalian diri dalam makan, gawai, dan hiburan.",
      "Layani orang sakit dengan tangan sendiri, bukan hanya dengan kata-kata."
    ],
    "patron": [
      "kaum muda Katolik",
      "remaja",
      "seminaris"
    ],
    "keywords": [
      "aloysius",
      "gonzaga",
      "yesuit",
      "kaum muda",
      "wabah",
      "kemurnian",
      "castiglione"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-aloysius-gonzaga/"
    ]
  },
  {
    "id": "st-paulinus-nola",
    "date": "06-22",
    "name": "St. Paulinus dari Nola, Uskup",
    "role": "Uskup",
    "years": "354–431",
    "rank": "optional",
    "color": "white",
    "story": "Paulinus lahir dekat Bordeaux, Galia (kini Prancis), sebagai putra prefek Romawi yang memiliki tanah luas di Galia dan Italia. Ia menjadi ahli hukum terkemuka dan memegang beberapa jabatan publik di Kekaisaran Romawi. Bersama istrinya, Therasia, seorang perempuan Spanyol, ia pensiun pada usia muda untuk menikmati hidup yang tenang dan berbudaya. Keduanya dibaptis oleh uskup Bordeaux yang saleh dan pindah ke tanah milik Therasia di Spanyol. Setelah bertahun-tahun tanpa anak, mereka dikaruniai seorang putra yang meninggal seminggu setelah lahir. Peristiwa itu mendorong mereka memulai hidup yang sangat sederhana dan penuh amal, dengan membagikan sebagian besar harta mereka. Paulinus kemudian ditahbiskan imam oleh uskup Barcelona pada hari Natal. Mereka pindah ke Nola, dekat Napoli, karena Paulinus sangat menghormati St. Feliks dari Nola. Ia memberikan sisa hartanya untuk menolong orang yang berutang, tunawisma, dan orang miskin, sementara ia sendiri hidup seperti rahib. Atas permintaan umat ia diangkat menjadi Uskup Nola dan memimpin keuskupan itu selama 21 tahun. Ia bersahabat dan berkirim surat dengan Agustinus, Hieronimus, Martinus, dan Ambrosius. Ia wafat pada 22 Juni 431.",
    "example": [
      "Gunakan harta untuk menolong yang miskin, tunawisma, dan terlilit utang.",
      "Jadikan kedukaan sebagai jalan untuk mendekat kepada Tuhan.",
      "Peliharalah persahabatan rohani yang saling meneguhkan."
    ],
    "patron": [],
    "keywords": [
      "paulinus",
      "nola",
      "bordeaux",
      "therasia",
      "uskup",
      "amal",
      "persahabatan"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-paulinus-of-nola/"
    ]
  },
  {
    "id": "sts-john-fisher-thomas-more",
    "date": "06-22",
    "name": "St. Yohanes Fisher, Uskup, dan St. Thomas More, Martir",
    "role": "Martir (Uskup dan Awam)",
    "years": "Fisher 1469–1535; More 1478–1535",
    "rank": "optional",
    "color": "red",
    "story": "Yohanes Fisher adalah seorang cendekiawan yang diangkat menjadi uskup pada usia 35 tahun dan kemudian menjadi kanselir Universitas Cambridge. Ia pengkhotbah dan penulis ulung yang ingin meningkatkan mutu khotbah di Inggris. Thomas More, sahabat sezamannya, adalah sastrawan, ahli hukum terkemuka, ayah empat anak, dan Kanselir Inggris. Keduanya menolak mendukung perceraian Raja Henry VIII dari Katarina dari Aragon dan menolak mengakui raja sebagai kepala tertinggi Gereja di Inggris. Thomas More mengundurkan diri dari jabatan kanselir. Keduanya menolak mengangkat sumpah Undang-Undang Suksesi dan dipenjara di Menara London. Fisher, yang sudah lemah kesehatannya, dijebak sehingga kembali menyatakan bahwa raja bukan kepala Gereja; kemarahan raja bertambah ketika Paus mengangkat Fisher menjadi kardinal. Fisher diadili atas tuduhan pengkhianatan dan dipenggal pada 22 Juni 1535. Thomas More menyatakan bahwa hati nuraninya didukung oleh seluruh konsili Kristen, bukan hanya oleh satu kerajaan. Ia dipenggal di Tower Hill pada 6 Juli 1535. Keduanya dikanonisasi pada 1935, dan pada tahun 2000 Paus Yohanes Paulus II menetapkan Thomas More sebagai pelindung para politisi.",
    "example": [
      "Ikutilah hati nurani yang terbentuk baik, walaupun harus kehilangan jabatan atau keuntungan.",
      "Jalankan tugas publik dengan jujur dan berintegritas.",
      "Bangun keluarga yang beriman di tengah kesibukan kerja."
    ],
    "patron": [
      "politisi",
      "pengacara",
      "pegawai negeri",
      "pejabat publik"
    ],
    "keywords": [
      "john fisher",
      "thomas more",
      "yohanes fisher",
      "inggris",
      "henry viii",
      "martir",
      "hati nurani",
      "politisi"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-john-fisher/",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-thomas-more/"
    ]
  },
  {
    "id": "nativity-john-baptist",
    "date": "06-24",
    "name": "Hari Raya Kelahiran St. Yohanes Pembaptis",
    "role": "Nabi, Perintis Jalan Tuhan",
    "years": "abad ke-1",
    "rank": "solemnity",
    "color": "white",
    "story": "Hari raya ini merayakan kelahiran Yohanes Pembaptis, salah satu dari sedikit orang kudus yang kelahirannya dirayakan Gereja. Injil Lukas menceritakan pemberitahuan dan kelahirannya secara sejajar dengan pemberitahuan dan kelahiran Yesus, yang menunjukkan perannya yang sangat penting dalam sejarah keselamatan. Menurut Lukas, ia lahir dari Zakharia dan Elisabet yang sudah lanjut usia, dan namanya Yohanes ditetapkan oleh malaikat. Setelah dewasa, Yohanes hidup bermatiraga di padang gurun. Ia mewartakan bahwa Kerajaan Allah sudah dekat dan mengajak semua orang bertobat serta dibaptis sebagai tanda pertobatan. Ia menegaskan bahwa akan datang Dia yang membaptis dengan Roh Kudus dan api, dan bahwa ia tidak layak membuka tali kasut-Nya. Ketika Yesus datang untuk dibaptis, Yohanes merasa dirinya yang perlu dibaptis oleh Yesus. Banyak orang datang kepadanya di tepi Sungai Yordan, tetapi ia selalu menunjuk kepada Yesus, bahkan mengutus sebagian muridnya untuk mengikuti Yesus. Sikapnya terangkum dalam kata-katanya, \"Ia harus makin besar, tetapi aku harus makin kecil\" (Yoh 3:30). Yesus menyebutnya yang terbesar di antara yang lahir dari perempuan. Ia kemudian wafat karena dendam Herodias.",
    "example": [
      "Arahkan orang lain kepada Yesus, bukan kepada diri sendiri.",
      "Beranilah menyebut yang salah sebagai salah, dengan rendah hati.",
      "Bertobatlah setiap hari dan sederhanakan gaya hidup."
    ],
    "patron": [
      "pembaptisan"
    ],
    "keywords": [
      "john the baptist",
      "yohanes pembaptis",
      "kelahiran",
      "zakharia",
      "elisabet",
      "nabi",
      "yordan"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/nativity-of-saint-john-the-baptist/"
    ]
  },
  {
    "id": "st-cyril-alexandria",
    "date": "06-27",
    "name": "St. Sirilus dari Aleksandria, Uskup dan Pujangga Gereja",
    "role": "Uskup dan Pujangga Gereja",
    "years": "378–444",
    "rank": "optional",
    "color": "white",
    "story": "Sirilus menjadi Uskup Agung Aleksandria, Mesir. Ia memulai masa jabatannya dengan tindakan-tindakan yang tergesa-gesa dan sering keras: ia menutup gereja-gereja kaum Novasian, ikut dalam penggulingan St. Yohanes Krisostomus, dan mengusir orang Yahudi dari Aleksandria sebagai balasan atas serangan terhadap orang Kristen. Kisahnya menunjukkan bahwa orang kudus pun bertumbuh. Arti pentingnya bagi teologi dan sejarah Gereja terletak pada pembelaannya terhadap iman yang benar melawan bidaah Nestorius. Nestorius mengajarkan bahwa dalam Kristus ada dua pribadi, ilahi dan manusiawi, yang hanya bersatu secara moral, sehingga ia menolak gelar \"Bunda Allah\" (Theotokos) bagi Maria dan hanya mau menyebutnya \"Bunda Kristus\". Sebagai wakil Paus, Sirilus memimpin Konsili Efesus pada 431, yang mengutuk Nestorianisme dan menyatakan Maria sungguh Bunda Allah, ibu dari satu Pribadi yang sungguh Allah dan sungguh manusia. Dalam kekacauan sesudahnya ia sempat digulingkan dan dipenjara tiga bulan, lalu disambut kembali di Aleksandria. Selanjutnya ia menjalankan kebijakan moderat dan meredam para pendukungnya yang ekstrem. Ia wafat pada 27 Juni 444.",
    "example": [
      "Pelajari dan hormati Maria sebagai Bunda Allah, seperti dalam doa Salam Maria.",
      "Belajarlah dari kesalahan dan bertumbuhlah menjadi lebih sabar dan bijaksana.",
      "Bela kebenaran dengan kasih, bukan dengan kekerasan."
    ],
    "patron": [],
    "keywords": [
      "cyril of alexandria",
      "sirilus",
      "aleksandria",
      "efesus",
      "theotokos",
      "bunda allah",
      "nestorius"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-cyril-of-alexandria/"
    ]
  },
  {
    "id": "st-irenaeus",
    "date": "06-28",
    "name": "St. Ireneus, Uskup dan Martir",
    "role": "Uskup, Martir, dan Pujangga Gereja",
    "years": "± 130–202",
    "rank": "memorial",
    "color": "white",
    "story": "Ireneus lahir di Asia Kecil pada abad kedua, tetapi detail masa kecilnya tidak banyak diketahui. Ia menjadi Uskup Lyon di Galia (kini Prancis) dan terlibat dalam banyak perdebatan Gereja pada zamannya. Ia seorang terpelajar yang sabar dalam meneliti, sangat menjaga ajaran para rasul, dan lebih ingin memenangkan hati lawan-lawannya daripada sekadar membuktikan mereka salah. Sebagai uskup ia sangat prihatin terhadap kaum Gnostik, yang namanya berasal dari kata Yunani untuk \"pengetahuan\". Mereka mengaku memiliki pengetahuan rahasia yang diberikan Yesus hanya kepada segelintir murid, dan ajaran mereka menarik serta membingungkan banyak orang Kristen. Ireneus menyelidiki berbagai aliran Gnostik dengan saksama dan menunjukkan ke mana ajaran mereka bermuara. Ia membandingkannya dengan ajaran para rasul dan teks Kitab Suci, dan menghasilkan lima buku yang menjadi sistem teologi sangat penting bagi masa sesudahnya. Karyanya dipakai luas dan diterjemahkan ke bahasa Latin dan Armenia, sehingga pengaruh Gnostik perlahan berakhir. Keadaan wafatnya tidak jelas; Gereja menghormatinya sebagai martir. Pada 2022 Paus Fransiskus menyatakannya Pujangga Gereja.",
    "example": [
      "Pegang teguh ajaran para rasul dan waspadai ajaran yang mengaku punya rahasia khusus.",
      "Pelajari iman dengan tekun agar dapat menjelaskannya.",
      "Berdiskusilah dengan tujuan mencari kebenaran bersama, bukan untuk menang sendiri."
    ],
    "patron": [],
    "keywords": [
      "irenaeus",
      "ireneus",
      "lyon",
      "gnostik",
      "uskup",
      "pujangga gereja",
      "tradisi apostolik"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-irenaeus/"
    ]
  },
  {
    "id": "sts-peter-paul-ap",
    "date": "06-29",
    "name": "Hari Raya St. Petrus dan St. Paulus, Rasul",
    "role": "Rasul",
    "years": "wafat ± 64",
    "rank": "solemnity",
    "color": "red",
    "story": "Petrus, nelayan dari Galilea, dipanggil Yesus dari jalanya untuk menjadi penjala manusia. Perjanjian Baru menampilkannya sebagai pemimpin para rasul: namanya selalu disebut pertama, ia menyaksikan Transfigurasi dan doa Yesus di Getsemani, dan kepadanya Yesus berkata, \"Engkau adalah Petrus, dan di atas batu karang ini Aku akan mendirikan jemaat-Ku\" serta memberikan kunci Kerajaan Surga (Mat 16:18-19). Injil juga jujur mencatat kelemahannya: ia tenggelam karena ragu dan menyangkal Yesus tiga kali, tetapi ia menangis dengan pedih dan diampuni, lalu Yesus yang bangkit memintanya menggembalakan domba-domba-Nya. Paulus semula seorang Farisi yang sangat taat hukum Taurat dan menganiaya jemaat. Perjumpaannya dengan Yesus yang bangkit di jalan menuju Damsyik mengubahnya menjadi utusan Kristus yang paling bersemangat. Ia mewartakan bahwa hanya Allah yang dapat menyelamatkan manusia, melalui Yesus, dan membawa Injil kepada bangsa-bangsa lain di tengah penganiayaan dan kelemahan. Menurut tradisi, kedua rasul ini wafat sebagai martir di Roma; banyak ahli menduga mereka termasuk korban penganiayaan Kaisar Nero setelah kebakaran besar tahun 64. Mereka dihormati sebagai tiang-tiang Gereja.",
    "example": [
      "Bangkitlah lagi setelah jatuh, percaya pada pengampunan Yesus seperti Petrus.",
      "Biarkan perjumpaan dengan Kristus mengubah arah hidup kita, seperti Paulus.",
      "Doakan Paus, pengganti Petrus, dan kesatuan Gereja."
    ],
    "patron": [],
    "keywords": [
      "peter",
      "paul",
      "petrus",
      "paulus",
      "rasul",
      "roma",
      "batu karang",
      "damsyik"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saints-peter-and-paul/",
      "https://www.franciscanmedia.org/saint-of-the-day/first-martyrs-of-the-church-of-rome/"
    ]
  },
  {
    "id": "first-martyrs-rome",
    "date": "06-30",
    "name": "Para Martir Pertama Gereja Roma",
    "role": "Martir",
    "years": "wafat 64",
    "rank": "optional",
    "color": "red",
    "story": "Sudah ada orang Kristen di Roma sekitar belasan tahun setelah wafat Yesus, sebelum Rasul Paulus mengunjungi mereka; ia menulis suratnya kepada jemaat Roma sekitar tahun 57–58. Di Roma terdapat banyak orang Yahudi. Kemungkinan karena pertikaian antara orang Yahudi dan orang Yahudi-Kristen, Kaisar Klaudius mengusir semua orang Yahudi dari Roma sekitar tahun 49–50. Sejarawan Suetonius mencatat bahwa pengusiran itu terjadi karena kerusuhan yang \"disebabkan oleh seorang Chrestus\", yaitu Kristus. Banyak dari mereka mungkin kembali setelah Klaudius wafat pada tahun 54. Pada bulan Juli tahun 64, lebih dari separuh kota Roma hancur dilalap api. Desas-desus menuduh Kaisar Nero, yang ingin memperluas istananya, sebagai biang keladinya. Nero mengalihkan tuduhan itu kepada orang Kristen. Menurut sejarawan Tacitus, banyak orang Kristen dihukum mati dengan tuduhan \"membenci umat manusia\". Petrus dan Paulus kemungkinan termasuk di antara korban. Nama-nama sebagian besar martir ini tidak kita ketahui, tetapi Gereja menghormati mereka bersama sehari sesudah Hari Raya St. Petrus dan Paulus. Darah para martir adalah benih bagi lahirnya orang-orang Kristen baru.",
    "example": [
      "Bersyukurlah atas iman yang kita terima berkat kesetiaan orang-orang tak dikenal.",
      "Tetaplah setia walau dituduh atau disalahkan secara tidak adil.",
      "Doakan umat Kristen yang dianiaya di berbagai belahan dunia."
    ],
    "patron": [],
    "keywords": [
      "first martyrs",
      "martir pertama",
      "roma",
      "nero",
      "kebakaran roma",
      "tacitus",
      "penganiayaan"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/first-martyrs-of-the-church-of-rome/"
    ]
  },
  {
    "id": "immaculate-heart",
    "date": "immaculate-heart",
    "name": "Hati Tersuci SP Maria",
    "role": "Peringatan Santa Perawan Maria",
    "years": "",
    "rank": "memorial",
    "color": "white",
    "story": "Peringatan Hati Tersuci Santa Perawan Maria dirayakan pada hari Sabtu sesudah Hari Raya Hati Yesus yang Mahakudus. Devosi ini berakar dalam Injil: Lukas mencatat bahwa Maria menyimpan segala perkara tentang Yesus dan merenungkannya dalam hatinya (Luk 2:19.51). Nubuat Simeon tentang pedang yang akan menembus jiwa Maria melahirkan gambaran hati yang tertembus pedang, dan Santo Agustinus mengajarkan bahwa Maria ikut serta dalam karya penebusan melalui cinta kasih. Devosi yang lebih teratur tampak sejak abad ke-11 dan ke-12, dan dihayati oleh para kudus seperti Mechtildis, Gertrudis, dan Bernardinus dari Siena. Pada abad ke-17, Santo Yohanes Eudes menyebarluaskan devosi kepada Hati Yesus dan Hati Maria; ia pertama kali merayakan pesta Hati Maria di Autun pada tahun 1648. Paus Pius VI dan Pius VII kemudian mengizinkan pesta ini di sejumlah tempat. Pada 13 Juli 1917 di Fatima, Bunda Maria menyampaikan bahwa Tuhan ingin menegakkan devosi kepada Hati Maria yang Tak Bernoda di dunia. Di tengah Perang Dunia II, pada tahun 1942, Paus Pius XII mempersembahkan Gereja dan seluruh umat manusia kepada Hati Maria yang Tak Bernoda, dan pada tahun 1944 ia memperluas perayaan ini bagi seluruh Gereja, untuk memohon perdamaian dan pertobatan.",
    "example": [
      "Seperti Maria, merenungkan peristiwa hidup dalam hati dalam terang iman.",
      "Mempersembahkan diri dan keluarga kepada Hati Maria yang Tak Bernoda.",
      "Berdoa rosario untuk perdamaian dunia dan pertobatan."
    ],
    "patron": [],
    "keywords": [
      "immaculate heart",
      "hati maria",
      "hati tersuci",
      "fatima",
      "yohanes eudes",
      "pius xii",
      "konsekrasi"
    ],
    "sources": [
      "https://www.newadvent.org/cathen/07168a.htm",
      "https://catholicculture.org/culture/liturgicalyear/calendar/day.cfm?id=390",
      "https://www.vaticannews.va/it/chiesa/news/2020-06/memoria-liturgica-cuore-immacolato-maria.html"
    ]
  },
  {
    "id": "st-thomas-ap",
    "date": "07-03",
    "name": "St. Tomas, Rasul",
    "role": "Rasul",
    "years": "abad ke-1",
    "rank": "feast",
    "color": "red",
    "story": "Tomas, yang disebut Didimus (artinya \"kembar\"), adalah salah satu dari Dua Belas Rasul. Namanya ada dalam semua daftar rasul, tetapi Injil Yohanes memberi gambaran paling jelas tentang dirinya. Ketika Yesus hendak kembali ke Yudea untuk mengunjungi Lazarus yang telah meninggal, padahal di sana Ia terancam dibunuh, Tomas berkata kepada murid-murid lain, \"Marilah kita pergi juga untuk mati bersama-sama dengan Dia\" (Yoh 11:16). Dalam perjamuan terakhir ia bertanya, \"Tuhan, kami tidak tahu ke mana Engkau pergi; jadi bagaimana kami tahu jalan ke situ?\" (Yoh 14:5). Ia terutama dikenang karena tidak percaya ketika rasul-rasul lain mengabarkan kebangkitan Yesus. Namun delapan hari kemudian, ketika melihat Yesus, ia mengucapkan pengakuan iman yang paling jelas dalam Perjanjian Baru: \"Ya Tuhanku dan Allahku!\" (Yoh 20:28). Yesus lalu berkata, \"Berbahagialah mereka yang tidak melihat, namun percaya.\" Hanya inilah yang diketahui pasti tentang Tomas. Menurut tradisi yang tersebar luas sejak awal di Timur dan Barat, ia mewartakan Injil sampai ke India; umat Kristen di pantai Malabar mengaitkan asal-usul Gereja mereka dengan dia.",
    "example": [
      "Bawalah keraguan iman kepada Tuhan dan ke dalam persekutuan, bukan menjauh.",
      "Ucapkan \"Ya Tuhanku dan Allahku\" saat hosti diangkat dalam Misa.",
      "Beranilah setia kepada Yesus walau berisiko."
    ],
    "patron": [
      "arsitek dan tukang bangunan",
      "India",
      "Sri Lanka",
      "Pakistan",
      "teolog"
    ],
    "keywords": [
      "thomas",
      "tomas",
      "didimus",
      "rasul",
      "india",
      "keraguan",
      "ya tuhanku dan allahku"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-thomas/",
      "https://www.newadvent.org/cathen/14658b.htm"
    ]
  },
  {
    "id": "st-elizabeth-portugal",
    "date": "07-04",
    "name": "St. Elisabet dari Portugal",
    "role": "Ratu, Fransiskan Sekular",
    "years": "1271–1336",
    "rank": "optional",
    "color": "white",
    "story": "Elisabet lahir pada 1271 sebagai putri Pedro III, calon raja Aragon. Ia dididik dengan saleh dan sejak kecil terbiasa berdoa dan bermatiraga. Pada usia sekitar 12 tahun ia dinikahkan dengan Diniz (Denis), Raja Portugal. Walaupun istana penuh kebobrokan dan suaminya tidak setia, Elisabet tetap setia mengikuti Misa harian, berdoa, serta menolong para peziarah, orang asing, orang sakit, dan orang miskin. Ia tetap mengasihi suaminya dan dengan doa serta kelembutannya akhirnya membawa sang raja bertobat. Ia dikenal sebagai pembawa damai. Ia berulang kali mendamaikan raja dengan putra mereka, Afonso, yang memberontak karena merasa dianaktirikan, dan ketika perang pecah pada 1323 ia sendiri berkuda di antara kedua pasukan untuk mendamaikan mereka. Setelah suaminya wafat pada 1325, ia tinggal dekat biara Klaris yang ia dirikan di Coimbra dan menjadi anggota Ordo Ketiga Fransiskan. Pada 1336, walau sudah tua dan lemah, ia bergegas ke Estremoz untuk mencegah perang antara putranya, Raja Afonso IV, dan Raja Kastilia. Ia berhasil mewujudkan perdamaian, tetapi kelelahan membuatnya jatuh sakit, dan ia wafat di Estremoz pada 1336.",
    "example": [
      "Jadilah pembawa damai dalam keluarga dan lingkungan kerja.",
      "Tetaplah setia dan sabar dalam pernikahan yang sulit, sambil terus berdoa.",
      "Gunakan kedudukan dan harta untuk menolong orang miskin dan sakit."
    ],
    "patron": [],
    "keywords": [
      "elizabeth of portugal",
      "elisabet",
      "isabel",
      "portugal",
      "ratu",
      "pembawa damai",
      "fransiskan sekular",
      "coimbra"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-elizabeth-of-portugal/",
      "https://www.newadvent.org/cathen/05391a.htm"
    ]
  },
  {
    "id": "st-anthony-zaccaria",
    "date": "07-05",
    "name": "St. Antonius Maria Zakaria, Imam",
    "role": "Imam, Pendiri Barnabit",
    "years": "1502–1539",
    "rank": "optional",
    "color": "white",
    "story": "Antonius Zakaria lahir di Cremona, Italia, pada 1502. Ibunya menjadi janda pada usia 18 tahun dan mengabdikan diri untuk pendidikan rohani putranya. Antonius meraih gelar doktor kedokteran pada usia 22 tahun. Sambil merawat orang miskin di kota asalnya, ia tertarik pada karya kerasulan. Ia melepaskan hak atas warisan, bekerja sebagai katekis, dan ditahbiskan imam pada usia 26 tahun. Pada masa ketika Martin Luther menyerang penyalahgunaan dalam Gereja, Antonius sudah termasuk pelopor pembaruan dari dalam Gereja. Beberapa tahun kemudian, di Milano, ia meletakkan dasar tiga kelompok religius: satu untuk pria, satu untuk wanita, dan satu perkumpulan pasangan suami istri. Tujuannya membarui masyarakat yang merosot, dimulai dari klerus, kaum religius, dan awam. Karena sangat terinspirasi oleh St. Paulus, kongregasinya dinamai Barnabit, menurut nama rekan Paulus, Barnabas. Ia berkhotbah dengan semangat di gereja dan di jalan, mengadakan misi umat, dan mendorong keterlibatan awam dalam kerasulan, Komuni yang sering, devosi Empat Puluh Jam, serta bunyi lonceng gereja pukul tiga sore setiap Jumat. Komunitasnya dua kali diselidiki dan dua kali dinyatakan tidak bersalah. Ia wafat di Cremona pada 5 Juli 1539 dalam usia 36 tahun.",
    "example": [
      "Mulailah pembaruan Gereja dari pertobatan diri sendiri.",
      "Libatkan diri sebagai awam dalam karya kerasulan paroki.",
      "Sambut Komuni dengan sering dan layak, dan hormati Ekaristi lewat adorasi."
    ],
    "patron": [],
    "keywords": [
      "anthony zaccaria",
      "antonius zakaria",
      "barnabit",
      "cremona",
      "milano",
      "ekaristi",
      "pembaruan"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-anthony-zaccaria/"
    ]
  },
  {
    "id": "st-maria-goretti",
    "date": "07-06",
    "name": "St. Maria Goretti, Perawan dan Martir",
    "role": "Perawan dan Martir",
    "years": "1890–1902",
    "rank": "optional",
    "color": "white",
    "story": "Maria Goretti lahir pada 16 Oktober 1890 sebagai putri seorang petani penggarap miskin di Italia. Ia tidak pernah bersekolah dan tidak bisa membaca atau menulis. Tidak lama sebelum wafatnya ia menerima Komuni Pertama. Pada suatu siang yang panas di bulan Juli, ketika Maria, yang belum genap 12 tahun, sedang menjahit baju di ujung tangga rumahnya, seorang tetangga berusia 18 tahun bernama Alessandro Serenelli menyeretnya ke dalam kamar dan berusaha memerkosanya. Maria melawan, berteriak minta tolong, dan menolak karena perbuatan itu dosa. Alessandro lalu menikamnya berkali-kali dengan pisau. Di rumah sakit, saat-saat terakhirnya ditandai kepedulian terhadap ibunya, pengampunan bagi pembunuhnya, dan penerimaan Komuni terakhir dengan penuh hormat. Ia wafat sekitar 24 jam setelah serangan itu, pada 6 Juli 1902. Alessandro dihukum 30 tahun penjara dan lama tidak menyesal, sampai suatu malam ia bermimpi melihat Maria memberinya bunga, dan hidupnya berubah. Setelah bebas, ia pertama-tama memohon ampun kepada ibu Maria. Pada kanonisasi Maria tahun 1950, Alessandro ikut berlutut di antara sekitar 250.000 orang yang hadir.",
    "example": [
      "Jagalah kemurnian dan hormati tubuh sendiri maupun orang lain.",
      "Ampunilah orang yang menyakiti kita, bahkan dengan luka yang dalam.",
      "Doakan pertobatan mereka yang berbuat jahat."
    ],
    "patron": [
      "kaum muda Katolik",
      "remaja"
    ],
    "keywords": [
      "maria goretti",
      "martir",
      "kemurnian",
      "pengampunan",
      "italia",
      "remaja",
      "alessandro"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-maria-goretti/"
    ]
  },
  {
    "id": "st-augustine-zhao-rong",
    "date": "07-09",
    "name": "St. Agustinus Zhao Rong, Imam, dan Kawan-kawan, Martir",
    "role": "Imam dan Martir",
    "years": "wafat 1648–1930",
    "rank": "optional",
    "color": "red",
    "story": "Kekristenan masuk ke Tiongkok dari Siria pada abad ketujuh. Tergantung pada hubungan Tiongkok dengan dunia luar, iman Kristen kadang bebas berkembang dan kadang terpaksa hidup secara diam-diam. Kelompok 120 martir yang diperingati hari ini wafat antara tahun 1648 dan 1930. Delapan puluh tujuh di antaranya lahir di Tiongkok: anak-anak, orang tua, katekis, dan buruh, berusia antara 9 dan 72 tahun, termasuk empat imam diosesan Tionghoa. Tiga puluh tiga lainnya adalah misionaris asing, kebanyakan imam atau biarawati, antara lain dari Ordo Dominikan, Serikat Misi Asing Paris, Fransiskan, Yesuit, Salesian, dan Suster Fransiskan Misionaris Maria. Agustinus Zhao Rong adalah seorang prajurit Tionghoa yang mengawal Uskup Yohanes Gabriel Taurin Dufresse dari Serikat Misi Asing Paris menuju kemartirannya di Beijing. Tak lama setelah dibaptis, Agustinus ditahbiskan menjadi imam diosesan. Ia sendiri wafat sebagai martir pada 1815. Para penganiaya sering memandang umat Katolik sebagai sekutu negara-negara asing. Setelah dibeatifikasi dalam beberapa kelompok, ke-120 martir ini dikanonisasi bersama di Roma pada 1 Oktober 2000 oleh Paus Yohanes Paulus II.",
    "example": [
      "Doakan umat Katolik di Tiongkok dan di tempat-tempat yang membatasi kebebasan beragama.",
      "Biarkan teladan orang lain yang setia menggerakkan pertobatan kita, seperti Agustinus Zhao.",
      "Tunjukkan bahwa iman Katolik membawa kebaikan bagi bangsa sendiri."
    ],
    "patron": [],
    "keywords": [
      "augustine zhao rong",
      "agustinus zhao",
      "tiongkok",
      "china",
      "martir tiongkok",
      "beijing",
      "misionaris"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-augustine-zhao-rong-and-companions/",
      "https://en.wikipedia.org/wiki/Augustine_Zhao_Rong"
    ]
  },
  {
    "id": "st-benedict",
    "date": "07-11",
    "name": "St. Benediktus, Abas",
    "role": "Abas, Bapa Hidup Monastik Barat",
    "years": "± 480–547",
    "rank": "memorial",
    "color": "white",
    "story": "Tidak ada riwayat hidup Benediktus yang ditulis oleh orang sezamannya; yang kita miliki terutama berasal dari Dialog karya St. Gregorius Agung, yang lebih menonjolkan unsur-unsur mukjizat. Benediktus lahir dari keluarga terpandang di Italia tengah dan belajar di Roma. Sejak muda ia tertarik pada hidup membiara. Mula-mula ia menjadi pertapa, meninggalkan dunia yang suram karena perang, perpecahan Gereja, dan kemerosotan moral. Ia lalu tinggal di sebuah gua di pegunungan selama tiga tahun. Sekelompok rahib sempat memilihnya sebagai pemimpin, tetapi mereka tidak tahan dengan ketegasannya. Meski demikian, peralihan dari hidup bertapa ke hidup berkomunitas sudah dimulai. Akhirnya ia mendirikan biara Monte Cassino, di utara Napoli, yang kemudian menjadi salah satu biara paling terkenal di dunia. Peraturan yang ia susun menetapkan hidup doa liturgis, studi, kerja tangan, dan hidup bersama di bawah seorang abas. Askese Benediktin dikenal karena sikapnya yang seimbang dan tidak berlebihan, serta kepeduliannya pada warga sekitar. Pada Abad Pertengahan, seluruh hidup monastik di Barat perlahan-lahan mengikuti Regula Santo Benediktus. Ia wafat sekitar tahun 547.",
    "example": [
      "Atur hari dengan seimbang antara doa, kerja, dan istirahat (ora et labora).",
      "Sambutlah tamu dengan ramah seperti menyambut Kristus.",
      "Kerjakan pekerjaan sehari-hari dengan tekun sebagai bagian dari doa."
    ],
    "patron": [
      "Eropa",
      "kaum biarawan",
      "anak sekolah",
      "penderita penyakit ginjal",
      "korban keracunan"
    ],
    "keywords": [
      "benedict",
      "benediktus",
      "monte cassino",
      "regula",
      "benediktin",
      "ora et labora",
      "eropa"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-benedict/"
    ]
  },
  {
    "id": "st-henry",
    "date": "07-13",
    "name": "St. Henrikus",
    "role": "Kaisar",
    "years": "972–1024",
    "rank": "optional",
    "color": "white",
    "story": "Henrikus lahir pada 6 Mei 972. Sebagai raja Jerman dan Kaisar Romawi Suci, ia adalah orang yang praktis dan tekun dalam urusan pemerintahan. Ia bekerja keras memperkuat kekuasaannya, memadamkan pemberontakan dan perseteruan, serta menyelesaikan berbagai sengketa panjang untuk melindungi perbatasan kerajaannya. Hal ini membuatnya terlibat dalam sejumlah pertempuran, terutama di Italia selatan. Ia juga membantu Paus Benediktus VIII meredakan kerusuhan di Roma. Tujuan akhirnya selalu sama: menciptakan perdamaian yang stabil di Eropa. Sesuai kebiasaan abad ke-11, Henrikus memakai kedudukannya untuk mengangkat orang-orang yang setia kepadanya menjadi uskup. Namun, berbeda dengan banyak penguasa lain, ia menghindari penyalahgunaan praktik itu dan justru mendukung pembaruan hidup gerejawi dan hidup membiara. Ia wafat pada 13 Juli 1024 dan dikanonisasi pada 1146. Dari sudut pandang kita, ia mungkin terlalu cepat berperang dan terlalu mudah memakai kekuasaan untuk mencapai pembaruan. Namun dengan segala keterbatasannya sebagai manusia pada zamannya, Henrikus menunjukkan bahwa kekudusan mungkin dicapai di tengah kesibukan hidup sekuler: justru dengan menjalankan tugas kita dengan baik, kita menjadi orang kudus.",
    "example": [
      "Jalankan pekerjaan dan jabatan sebagai jalan kekudusan.",
      "Gunakan pengaruh untuk mendukung kebaikan Gereja dan masyarakat, bukan kepentingan pribadi.",
      "Usahakan perdamaian dalam lingkup tanggung jawab kita."
    ],
    "patron": [],
    "keywords": [
      "henry",
      "henrikus",
      "heinrich",
      "kaisar",
      "jerman",
      "kekaisaran romawi suci",
      "pemimpin"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-henry/"
    ]
  },
  {
    "id": "st-camillus-de-lellis",
    "date": "07-14",
    "name": "St. Kamilus de Lellis, Imam",
    "role": "Imam, Pendiri Kamilian",
    "years": "1550–1614",
    "rank": "optional",
    "color": "white",
    "story": "Kamilus tampaknya bukan calon orang kudus. Ibunya meninggal ketika ia masih kecil, ayahnya menelantarkannya, dan ia tumbuh dengan kecanduan judi. Pada usia 17 tahun ia menderita penyakit kaki yang tidak pernah sembuh seumur hidupnya. Di Roma ia masuk Rumah Sakit San Giacomo sebagai pasien sekaligus pelayan, tetapi dikeluarkan setelah sembilan bulan karena suka bertengkar. Ia lalu menjadi tentara Venesia selama tiga tahun. Pada musim dingin 1574, dalam usia 24 tahun, ia kehilangan segalanya karena berjudi. Ia bekerja di biara Kapusin di Manfredonia, dan sebuah khotbah pemimpin biara menggerakkan pertobatannya. Ia dua kali masuk novisiat Kapusin, tetapi dua kali dikeluarkan karena luka di kakinya. Ia kembali ke San Giacomo dan, karena pengabdiannya, diangkat menjadi pengawas. Atas nasihat sahabatnya, St. Filipus Neri, ia belajar dan ditahbiskan imam pada usia 34 tahun. Ia kemudian mendirikan kongregasi sendiri untuk melayani orang sakit, termasuk tahanan dan penderita wabah. Ia menekankan kebersihan dan keterampilan perawat; anggotanya bahkan membentuk ambulans lapangan militer pertama yang tercatat pada 1595. Ia wafat pada 14 Juli 1614.",
    "example": [
      "Jangan putus asa atas masa lalu; Tuhan sanggup mengubah hidup siapa pun.",
      "Rawat orang sakit dengan kasih sekaligus keahlian dan kebersihan.",
      "Lepaskan kebiasaan buruk seperti judi yang merusak diri dan keluarga."
    ],
    "patron": [
      "rumah sakit",
      "perawat",
      "tenaga kesehatan",
      "orang sakit"
    ],
    "keywords": [
      "camillus",
      "kamilus",
      "de lellis",
      "kamilian",
      "perawat",
      "rumah sakit",
      "orang sakit",
      "judi"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-camillus-de-lellis/"
    ]
  },
  {
    "id": "st-bonaventure",
    "date": "07-15",
    "name": "St. Bonaventura, Uskup dan Pujangga Gereja",
    "role": "Uskup, Kardinal, dan Pujangga Gereja",
    "years": "1221–1274",
    "rank": "memorial",
    "color": "white",
    "story": "Bonaventura lahir di Bagnoregio, Italia, pada 1221 dan dibaptis dengan nama Yohanes. Orang tuanya bernama Giovanni di Fidanza dan Maria Ritella; ayahnya tampaknya seorang tabib yang berada. Tradisi menyebut bahwa semasa kecil ia sembuh dari penyakit berat berkat St. Fransiskus dari Assisi. Pada usia 22 tahun ia masuk Ordo Fransiskan dan menerima nama Bonaventura. Ia menjadi pengajar senior di Universitas Paris dan memikat hati para mahasiswa, bukan hanya karena kecerdasannya, tetapi juga karena cintanya kepada Yesus dan Gereja. Karier mengajarnya berhenti ketika para saudara memilihnya menjadi Minister Jenderal. Selama 17 tahun ia memimpin ordo yang sedang dilanda pertikaian tentang cara menghayati kemiskinan. Sebagai pendoa dan pemimpin yang cakap, ia menata ordo melalui peraturan yang baik dan memberikan spiritualitas yang tersusun berdasarkan visi St. Fransiskus. Tulisan-tulisannya memadukan ajaran Gereja dengan kehangatan mistik, sehingga ia dijuluki \"Pujangga Serafik\". Paus Gregorius X mengangkatnya menjadi kardinal dan Uskup Albano. Ia wafat mendadak pada 15 Juli 1274 saat mengikuti Konsili Lyon II.",
    "example": [
      "Satukan belajar dan berdoa: ilmu sebaiknya membawa kita lebih mencintai Yesus.",
      "Pimpinlah dengan sabar di tengah perbedaan pendapat.",
      "Jadikan Kristus pusat pekerjaan dan hidup kita."
    ],
    "patron": [],
    "keywords": [
      "bonaventure",
      "bonaventura",
      "fransiskan",
      "pujangga serafik",
      "paris",
      "bagnoregio",
      "teologi"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-bonaventure/"
    ]
  },
  {
    "id": "our-lady-of-mount-carmel",
    "date": "07-16",
    "name": "SP Maria dari Gunung Karmel",
    "role": "Peringatan Santa Perawan Maria",
    "years": "",
    "rank": "optional",
    "color": "white",
    "story": "Pada abad ke-12 para pertapa tinggal di Gunung Karmel, dekat Mata Air Elia di Israel utara. Mereka memiliki sebuah kapel yang dipersembahkan kepada Bunda Maria. Pada abad ke-13 mereka dikenal sebagai \"Saudara-saudara Santa Perawan Maria dari Gunung Karmel\", dan segera mereka merayakan Misa dan Ibadat khusus untuk menghormati Maria. Pada 1726 perayaan ini menjadi perayaan Gereja universal dengan gelar SP Maria dari Gunung Karmel. Selama berabad-abad para Karmelit memandang diri mereka memiliki hubungan khusus dengan Maria. St. Teresa dari Avila menyebut Karmel \"Ordo Sang Perawan\"; St. Yohanes dari Salib mengaku bahwa Maria menyelamatkannya dari tenggelam semasa kecil, menuntunnya ke Karmel, dan membantunya lolos dari penjara; St. Teresia dari Kanak-kanak Yesus percaya Maria menyembuhkannya dari sakit. Menurut tradisi, yang mungkin tidak historis, Maria menampakkan diri kepada St. Simon Stock, seorang pemimpin Karmelit, dan memberinya skapulir. Skapulir melambangkan perlindungan khusus Maria dan mengajak pemakainya membaktikan diri kepadanya, sekaligus mengingatkan panggilan Injil untuk berdoa dan bertobat. Gelar Karmelit juga mengingatkan bahwa Maria bukan hanya ibu, tetapi juga saudari yang dekat dengan kita.",
    "example": [
      "Kenakan skapulir dengan sadar sebagai tanda bakti kepada Maria, disertai doa dan pertobatan.",
      "Luangkan waktu hening setiap hari untuk berdoa.",
      "Teladani Maria dalam mendengarkan dan melaksanakan sabda Allah."
    ],
    "patron": [
      "Chili"
    ],
    "keywords": [
      "mount carmel",
      "gunung karmel",
      "karmelit",
      "skapulir",
      "simon stock",
      "elia",
      "maria"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/our-lady-of-mount-carmel/"
    ]
  },
  {
    "id": "st-apollinaris",
    "date": "07-20",
    "name": "St. Apolinaris, Uskup dan Martir",
    "role": "Uskup dan Martir",
    "years": "abad ke-1/ke-2",
    "rank": "optional",
    "color": "white",
    "story": "Apolinaris dihormati sebagai uskup pertama Ravenna, Italia. Menurut tradisi, St. Petrus sendiri mengutusnya ke Ravenna. Pewartaannya begitu berhasil sehingga orang-orang kafir di sana memukulinya dan mengusirnya dari kota. Namun ia kembali, lalu diusir untuk kedua kalinya. Setelah berkhotbah di daerah sekitar Ravenna, ia masuk lagi ke kota itu. Ia disiksa dengan kejam lalu dinaikkan ke kapal yang berlayar menuju Yunani. Di sana pun orang-orang kafir membuatnya diusir kembali ke Italia, dan ia pergi ke Ravenna untuk keempat kalinya. Menurut tradisi, ia akhirnya wafat akibat luka-luka setelah dipukuli secara brutal di Classe, pinggiran kota Ravenna. Detail kisahnya berasal dari tradisi, dan masa hidupnya tidak dapat dipastikan. Penghormatan kepadanya sudah tua dan kuat: pada abad keenam dibangun sebuah basilika yang indah untuk menghormatinya di Classe, tempat ia wafat. Kisahnya mengingatkan bahwa mengikuti Yesus mengandung risiko, kadang sampai risiko kehilangan nyawa, dan bahwa para martir lebih memilih menghadapi kematian daripada menyangkal iman kepada Yesus Kristus.",
    "example": [
      "Jangan berhenti berbuat baik dan bersaksi walaupun ditolak berkali-kali.",
      "Tetaplah setia pada tugas yang dipercayakan kepada kita.",
      "Terimalah pengorbanan kecil yang dituntut iman setiap hari."
    ],
    "patron": [],
    "keywords": [
      "apollinaris",
      "apolinaris",
      "ravenna",
      "classe",
      "uskup",
      "martir",
      "italia"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-apollinaris/"
    ]
  },
  {
    "id": "st-lawrence-brindisi",
    "date": "07-21",
    "name": "St. Laurensius dari Brindisi, Imam dan Pujangga Gereja",
    "role": "Imam Kapusin dan Pujangga Gereja",
    "years": "1559–1619",
    "rank": "optional",
    "color": "white",
    "story": "Laurensius lahir di Brindisi, Italia, pada 22 Juli 1559 dan diberi nama Giulio Cesare (Yulius Kaisar) oleh orang tuanya, William dan Elizabeth Russo. Setelah orang tuanya meninggal, ia dididik oleh pamannya di Kolese Santo Markus di Venesia. Pada usia 16 tahun ia masuk Ordo Kapusin di Venesia dan menerima nama Laurensius. Ia menyelesaikan studi filsafat dan teologi di Universitas Padua dan ditahbiskan imam pada usia 23 tahun. Ia sangat berbakat dalam bahasa: selain bahasa Italia, ia menguasai bahasa Latin, Ibrani, Yunani, Jerman, Bohemia, Spanyol, dan Prancis. Karena itu ia dapat mempelajari Kitab Suci dalam bahasa aslinya. Atas permintaan Paus Klemens VIII ia banyak berkhotbah kepada orang Yahudi di Italia. Selain cerdas, ia peka terhadap kebutuhan sesama dan cakap memimpin. Pada usia 31 tahun ia menjadi pemimpin provinsi Kapusin Toskana, dan pada 1602 ia terpilih menjadi Minister Jenderal Kapusin; di bawah kepemimpinannya ordo berkembang pesat. Ia juga menjadi utusan Paus dan juru damai di berbagai negara. Dalam perjalanan ke Lisboa untuk mengusahakan perdamaian bagi Napoli, ia jatuh sakit dan wafat tepat pada hari ulang tahunnya, 22 Juli 1619.",
    "example": [
      "Pelajari Kitab Suci dengan tekun dan jadikan dasar dalam berbicara tentang iman.",
      "Gunakan bakat dan kecerdasan untuk melayani sesama.",
      "Jadilah juru damai di tengah konflik."
    ],
    "patron": [],
    "keywords": [
      "lawrence of brindisi",
      "laurensius",
      "brindisi",
      "kapusin",
      "fransiskan",
      "bahasa",
      "kitab suci"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-lawrence-of-brindisi/"
    ]
  },
  {
    "id": "st-mary-magdalene",
    "date": "07-22",
    "name": "St. Maria Magdalena",
    "role": "Murid Yesus, Rasul bagi Para Rasul",
    "years": "abad ke-1",
    "rank": "feast",
    "color": "white",
    "story": "Selain Bunda Yesus, hanya sedikit perempuan yang begitu dihormati dalam Kitab Suci seperti Maria Magdalena. Namanya berarti \"dari Magdala\". Injil mencatat bahwa Yesus mengusir \"tujuh roh jahat\" darinya (Luk 8:2), yang menunjukkan kerasukan berat atau mungkin penyakit parah. Ia termasuk di antara para perempuan yang mengikuti Yesus dan melayani Dia serta para murid dengan harta mereka. Ia juga berdiri di dekat salib Yesus bersama Bunda Maria. Yang terpenting, dari semua saksi yang mungkin dipilih, dialah yang pertama kali diberi kesempatan bertemu dengan Yesus yang bangkit dan diutus memberitakannya kepada para murid. Karena itu ia digelari \"Rasul bagi Para Rasul\". Dalam tradisi Barat, Maria Magdalena lama disamakan dengan perempuan berdosa tanpa nama yang meminyaki kaki Yesus dalam Lukas 7:36-50, tetapi sebagian besar ahli Kitab Suci sekarang menegaskan bahwa tidak ada dasar Kitab Suci untuk menyamakan keduanya. Ia mengingatkan bahwa kita semua adalah pendosa yang membutuhkan kuasa penyelamatan Allah dan dipanggil menjadi saksi kebangkitan.",
    "example": [
      "Setialah kepada Yesus juga di saat-saat sulit, seperti Maria Magdalena di kaki salib.",
      "Wartakan kabar gembira kebangkitan lewat hidup yang penuh harapan.",
      "Jangan cepat menghakimi atau melabeli orang lain."
    ],
    "patron": [
      "peniten",
      "pembuat parfum"
    ],
    "keywords": [
      "mary magdalene",
      "maria magdalena",
      "magdala",
      "kebangkitan",
      "rasul para rasul",
      "murid",
      "paskah"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-mary-magdalene/"
    ]
  },
  {
    "id": "st-bridget",
    "date": "07-23",
    "name": "St. Brigitta dari Swedia, Biarawati",
    "role": "Ibu, Janda, Pendiri Ordo, Mistikus",
    "years": "± 1303–1373",
    "rank": "optional",
    "color": "white",
    "story": "Brigitta lahir di Swedia sekitar tahun 1303. Sejak usia tujuh tahun ia mendapat penglihatan tentang Kristus yang tersalib. Penglihatan-penglihatan itu menjadi dasar seluruh kegiatannya, dengan penekanan pada kasih kepada sesama, bukan pada karunia rohani yang luar biasa. Ia menikah dan menjalani hidup berkeluarga di lingkungan istana Raja Magnus II dari Swedia. Ia menjadi ibu dari delapan anak; yang kedua tertua adalah St. Katarina dari Swedia. Setelah suaminya wafat, Brigitta menjalani hidup tobat yang keras. Ia terus berusaha memengaruhi Raja Magnus agar hidup lebih baik; walaupun sang raja tidak sepenuhnya berubah, ia memberikan tanah dan bangunan untuk mendirikan biara bagi pria dan wanita, yang kemudian berkembang menjadi Ordo Brigittin. Pada Tahun Yubileum 1350, Brigitta berziarah ke Roma meskipun Eropa sedang dilanda wabah. Ia tidak pernah kembali ke Swedia; tahun-tahunnya di Roma diwarnai utang dan penolakan atas usahanya melawan penyalahgunaan dalam Gereja. Ziarah terakhirnya ke Tanah Suci diwarnai kapal karam dan kematian putranya, Karl. Ia wafat pada 23 Juli 1373. Pada 1999 ia dinyatakan sebagai salah satu pelindung Eropa.",
    "example": [
      "Renungkan sengsara Kristus, lalu wujudkan dalam kasih nyata kepada sesama.",
      "Gunakan pengaruh untuk mendorong orang lain berbuat baik.",
      "Hayati hidup kudus di tengah keluarga, pekerjaan, dan masyarakat."
    ],
    "patron": [
      "Eropa"
    ],
    "keywords": [
      "bridget",
      "brigitta",
      "birgitta",
      "swedia",
      "brigittin",
      "mistikus",
      "pelindung eropa"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-bridget/"
    ]
  },
  {
    "id": "st-sharbel-makhluf",
    "date": "07-24",
    "name": "St. Charbel Makhluf, Imam dan Pertapa",
    "role": "Imam dan Pertapa Maronit",
    "years": "1828–1898",
    "rank": "optional",
    "color": "white",
    "story": "Charbel (Syarbel) lahir dengan nama Yusuf Zaroun Makhluf pada 8 Mei 1828 di desa Beka-Kafra, Libanon. Ayahnya, seorang pengendara bagal, meninggal ketika Yusuf baru berusia tiga tahun, sehingga ia dibesarkan oleh seorang pamannya. Pada usia 23 tahun ia masuk Biara Santo Maron di Annaya, Libanon, dan mengambil nama Charbel untuk menghormati seorang martir abad kedua. Ia mengucapkan kaul kekal pada 1853 dan ditahbiskan imam enam tahun kemudian. Mengikuti teladan St. Maron dari abad kelima, Charbel hidup sebagai pertapa sejak 1875 sampai wafatnya. Ia menjalani puasa yang ketat dan sangat berbakti kepada Sakramen Mahakudus. Reputasi kekudusannya membuat banyak orang datang kepadanya untuk menerima berkat dan memohon didoakan. Bila sewaktu-waktu pemimpinnya memintanya melayani sakramen di desa-desa sekitar, ia melakukannya dengan senang hati. Walaupun tidak pernah bepergian jauh dari desa kelahirannya, pengaruhnya menyebar luas. Ia wafat pada sore hari Malam Natal, 24 Desember 1898. Orang Kristen dan bukan Kristen segera menjadikan makamnya tempat ziarah dan penyembuhan. Paus Paulus VI membeatifikasinya pada 1965 dan mengkanonisasinya dua belas tahun kemudian, pada 1977.",
    "example": [
      "Sediakan waktu hening dan doa di tengah hidup yang sibuk.",
      "Hormati Ekaristi dengan adorasi dan persiapan yang baik sebelum Misa.",
      "Layani dengan gembira ketika diminta membantu, tanpa mencari pujian."
    ],
    "patron": [],
    "keywords": [
      "sharbel",
      "charbel",
      "makhlouf",
      "libanon",
      "maronit",
      "pertapa",
      "annaya"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-sharbel-makhlouf/"
    ]
  },
  {
    "id": "st-james-ap",
    "date": "07-25",
    "name": "St. Yakobus, Rasul",
    "role": "Rasul",
    "years": "wafat ± 44",
    "rank": "feast",
    "color": "red",
    "story": "Yakobus adalah anak Zebedeus dan saudara Yohanes Penginjil. Yesus memanggil kedua bersaudara itu ketika mereka sedang membereskan jala di perahu bersama ayah mereka di Danau Galilea, dan mereka segera meninggalkan ayah mereka untuk mengikuti Dia (Mrk 1:19-20). Bersama Petrus dan Yohanes, Yakobus termasuk tiga murid yang menyaksikan Transfigurasi, kebangkitan putri Yairus, dan sakratul maut Yesus di Getsemani. Injil juga menggambarkan wataknya yang berapi-api. Ia dan Yohanes, atau ibu mereka, meminta tempat terhormat di Kerajaan Yesus, dan ketika ditanya apakah sanggup meminum cawan yang akan diminum Yesus, mereka menjawab, \"Kami sanggup.\" Yesus lalu mengajarkan bahwa kuasa adalah untuk melayani. Ketika orang Samaria menolak Yesus, Yakobus dan Yohanes ingin menurunkan api dari langit, dan Yesus menegur mereka; Yesus menjuluki mereka \"anak-anak guruh\". Yakobus tampaknya menjadi rasul pertama yang wafat sebagai martir: Raja Herodes membunuhnya dengan pedang (Kis 12:1-2), sekitar tahun 44. Ia disebut Yakobus Tua untuk membedakannya dari Yakobus Muda. Ia dihormati sebagai pelindung Spanyol.",
    "example": [
      "Tinggalkan apa yang menghalangi untuk mengikuti Yesus dengan sepenuh hati.",
      "Ubahlah ambisi pribadi menjadi semangat melayani.",
      "Kendalikan amarah dan belajarlah dari teguran Tuhan."
    ],
    "patron": [
      "Spanyol",
      "Chili",
      "Nikaragua",
      "buruh",
      "penderita rematik"
    ],
    "keywords": [
      "james",
      "yakobus",
      "yakobus tua",
      "santiago",
      "zebedeus",
      "rasul",
      "spanyol",
      "anak guruh"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-james/"
    ]
  },
  {
    "id": "sts-joachim-anne",
    "date": "07-26",
    "name": "St. Yoakim dan St. Anna, Orang Tua SP Maria",
    "role": "Orang Tua Santa Perawan Maria",
    "years": "abad ke-1 SM",
    "rank": "memorial",
    "color": "white",
    "story": "Injil Matius dan Lukas mencatat silsilah Yesus untuk menunjukkan bahwa Ia adalah pemenuhan janji-janji Allah, tetapi tidak menyebut apa pun tentang keluarga ibu-Nya. Secara faktual kita tidak tahu apa-apa tentang orang tua Maria selain bahwa mereka ada. Bahkan nama Yoakim dan Anna berasal dari sumber legenda yang ditulis lebih dari seabad setelah wafat Yesus. Meski demikian, kekudusan mereka dapat disimpulkan dari suasana keluarga di sekitar Maria dalam Kitab Suci. Watak Maria yang kuat dalam mengambil keputusan, kebiasaannya berdoa, ketaatannya pada hukum agamanya, ketabahannya di saat krisis, dan perhatiannya kepada sanak saudaranya menunjukkan sebuah keluarga yang erat dan penuh kasih. Keluarga ini setia pada tradisi terbaik masa lalu sambil menantikan generasi berikutnya. Yoakim dan Anna mewakili generasi-generasi orang beriman yang setia menjalankan tugas, menghayati iman, dan menyiapkan kedatangan Mesias, walaupun tetap tidak dikenal. Peringatan ini juga dirayakan sebagai \"pesta para kakek dan nenek\". Para kakek-nenek diingatkan untuk meneruskan iman kepada anak-cucu, dan kaum muda diajak menghargai kebijaksanaan orang tua.",
    "example": [
      "Sebagai kakek-nenek atau orang tua, wariskan iman lewat doa dan teladan di rumah.",
      "Kunjungi, dengarkan, dan hormati para lansia dalam keluarga.",
      "Bangun suasana keluarga yang hangat, rajin berdoa, dan setia pada Gereja."
    ],
    "patron": [
      "ibu",
      "ibu yang melahirkan",
      "kakek dan nenek"
    ],
    "keywords": [
      "joachim",
      "anne",
      "yoakim",
      "anna",
      "kakek nenek",
      "orang tua maria",
      "keluarga"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saints-joachim-and-anne/"
    ]
  },
  {
    "id": "st-martha",
    "date": "07-29",
    "name": "St. Marta, Maria, dan Lazarus",
    "role": "Sahabat Yesus",
    "years": "abad ke-1",
    "rank": "memorial",
    "color": "white",
    "story": "Marta, Maria, dan saudara mereka Lazarus tinggal di Betania dan merupakan sahabat dekat Yesus. Yesus datang ke rumah mereka sebagai tamu yang disambut dengan hangat, dan Injil Yohanes mencatat bahwa Yesus mengasihi mereka. Ketika Lazarus sakit dan meninggal, kedua saudari itu memanggil Yesus. Di hadapan Yesus, Marta mengucapkan pengakuan iman yang sederhana tetapi kuat: \"Ya, Tuhan, aku percaya bahwa Engkaulah Mesias, Anak Allah, Dia yang akan datang ke dalam dunia\" (Yoh 11:27). Yesus lalu membangkitkan Lazarus dari kubur, sehingga banyak orang percaya kepada-Nya. Pada kesempatan lain Marta sibuk menyiapkan hidangan, sedangkan Maria duduk di kaki Yesus mendengarkan sabda-Nya; Yesus berkata bahwa Maria telah memilih bagian yang terbaik. Maria juga meminyaki kaki Yesus di Betania, tindakan yang sangat dipuji-Nya (Yoh 12:1-8). Banyak legenda tentang hidup Lazarus kemudian, tetapi tidak dapat dipastikan. Penghormatan kepada mereka sudah tua: sekitar tahun 390 peziarah Egeria mencatat prosesi di makam Lazarus. Pada 2021 Kongregasi Ibadat menetapkan agar Maria dan Lazarus dirayakan bersama Marta pada 29 Juli.",
    "example": [
      "Sambutlah tamu dengan ramah, seperti Marta menyambut Yesus.",
      "Seimbangkan kesibukan melayani dengan waktu mendengarkan sabda Tuhan, seperti Maria.",
      "Percayalah kepada Yesus, kebangkitan dan hidup, juga saat berduka."
    ],
    "patron": [
      "saudara kandung"
    ],
    "keywords": [
      "martha",
      "marta",
      "maria",
      "lazarus",
      "betania",
      "keramahtamahan",
      "sahabat yesus"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saints-martha-mary-and-lazarus/"
    ]
  },
  {
    "id": "st-peter-chrysologus",
    "date": "07-30",
    "name": "St. Petrus Krisologus",
    "role": "Uskup dan Pujangga Gereja",
    "years": "± 406–450",
    "rank": "optional",
    "color": "white",
    "story": "Petrus lahir di Imola, Italia utara, sekitar tahun 406. Ia dibaptis, dididik, dan ditahbiskan menjadi diakon oleh Kornelius, Uskup Imola. Sekitar tahun 433 ia diangkat menjadi Uskup Ravenna, kota yang saat itu menjadi ibu kota Kekaisaran Romawi Barat. Kesalehan dan semangat pastoralnya dikagumi banyak orang, dan kefasihannya berkhotbah membuatnya dijuluki \"Krisologus\", artinya \"yang berkata-kata emas\". Ia dipercaya oleh Paus Leo Agung dan didukung oleh Permaisuri Galla Placidia. Ketika Eutikhes, penganut ajaran sesat Monofisit, berusaha meminta dukungannya, Petrus menolak dan tetap setia pada ajaran Gereja dan Uskup Roma. Sekitar 176 homilinya dikumpulkan oleh Uskup Feliks dari Ravenna pada abad ke-8. Khotbah-khotbahnya singkat dan padat, menjelaskan teks Kitab Suci, misteri Inkarnasi, Syahadat Para Rasul, serta menghormati Santa Perawan Maria dan Yohanes Pembaptis. Ia wafat di kota kelahirannya, Imola, sekitar tahun 450. Pada tahun 1729 Paus Benediktus XIII menyatakannya sebagai Pujangga Gereja.",
    "example": [
      "Mewartakan iman dengan kata-kata yang singkat, jelas, dan mudah dipahami.",
      "Tetap setia pada ajaran Gereja walaupun ada tekanan dari pihak yang berpengaruh.",
      "Membaca dan merenungkan Kitab Suci secara teratur."
    ],
    "patron": [],
    "keywords": [
      "peter chrysologus",
      "krisologus",
      "chrysologus",
      "ravenna",
      "imola",
      "homili",
      "khotbah"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/07/30.html",
      "https://www.newadvent.org/cathen/11762c.htm"
    ]
  },
  {
    "id": "st-ignatius-loyola",
    "date": "07-31",
    "name": "St. Ignatius dari Loyola",
    "role": "Imam, Pendiri Serikat Yesus",
    "years": "1491–1556",
    "rank": "memorial",
    "color": "white",
    "story": "Iñigo lahir tahun 1491 di puri Loyola, wilayah Basque, Spanyol. Masa mudanya dihabiskan di lingkungan istana; ia haus akan kemuliaan dan kehormatan. Pada 20 Mei 1521, saat mempertahankan benteng Pamplona dari pasukan Prancis, kakinya hancur terkena peluru meriam. Selama masa pemulihan yang panjang di Loyola, ia membaca riwayat hidup Kristus dan para kudus, lalu bertobat. Ia kemudian bertapa dan berdoa di sebuah gua dekat Manresa; dari pengalaman rohani inilah lahir buku Latihan Rohani. Ia kemudian belajar di Alcalá, Salamanca, dan Paris. Pada 15 Agustus 1534 di Montmartre, Paris, Ignatius bersama beberapa sahabat, antara lain Fransiskus Xaverius dan Petrus Faber, mengikrarkan kaul. Pada 27 September 1540 Paus Paulus III mengesahkan Serikat Yesus (Yesuit), dan Ignatius menjadi pemimpin umumnya yang pertama. Para Yesuit kemudian berkarya di bidang pendidikan, misi, dan pembaruan Gereja di seluruh dunia. Ignatius wafat di Roma pada 31 Juli 1556 dan dikanonisasi oleh Paus Gregorius XV pada 22 Mei 1622.",
    "example": [
      "Meluangkan waktu setiap hari untuk memeriksa batin dan bersyukur atas kehadiran Tuhan.",
      "Belajar membedakan roh sebelum mengambil keputusan penting.",
      "Melakukan segala sesuatu demi kemuliaan Allah yang lebih besar."
    ],
    "patron": [],
    "keywords": [
      "ignatius",
      "loyola",
      "yesuit",
      "jesuit",
      "serikat yesus",
      "latihan rohani",
      "amdg"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/07/31.html",
      "https://www.newadvent.org/cathen/07639c.htm"
    ]
  },
  {
    "id": "st-alphonsus-maria-de-liguori",
    "date": "08-01",
    "name": "St. Alfonsus Maria de Liguori",
    "role": "Uskup dan Pujangga Gereja, Pendiri Redemptoris",
    "years": "1696–1787",
    "rank": "memorial",
    "color": "white",
    "story": "Alfonsus lahir pada 27 September 1696 di Marianella, dekat Napoli, Italia, dari keluarga bangsawan. Ia sangat cerdas; pada usia 16 tahun ia sudah meraih gelar doktor hukum dan menjadi pengacara yang sukses. Setelah kalah dalam sebuah perkara besar pada tahun 1723, ia meninggalkan dunia hukum dan memilih menjadi imam. Ia berkhotbah dengan sederhana sehingga dapat dimengerti rakyat kecil, termasuk para gembala di pegunungan. Pada 9 November 1732 di Scala ia mendirikan Kongregasi Sang Penebus Mahakudus (Redemptoris) untuk melayani orang-orang miskin dan terlantar di pedesaan. Ia menulis banyak buku, antara lain tentang teologi moral, doa, Ekaristi, dan devosi kepada Maria. Pada tahun 1762 ia diangkat menjadi Uskup Sant'Agata dei Goti. Di masa tuanya ia menderita sakit berat dan banyak cobaan dalam kongregasinya sendiri. Ia wafat di Nocera de' Pagani pada 1 Agustus 1787, dikanonisasi pada tahun 1839, dan dinyatakan sebagai Pujangga Gereja pada tahun 1871.",
    "example": [
      "Berbicara tentang iman dengan bahasa sederhana yang dapat dipahami semua orang.",
      "Memperlakukan orang berdosa dengan belas kasih, bukan kekerasan.",
      "Memelihara kebiasaan berdoa dan mengunjungi Sakramen Mahakudus."
    ],
    "patron": [],
    "keywords": [
      "alphonsus liguori",
      "alfonsus",
      "liguori",
      "redemptoris",
      "redemptorist",
      "cssr",
      "teologi moral",
      "napoli"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/01.html",
      "https://www.newadvent.org/cathen/01334a.htm"
    ]
  },
  {
    "id": "st-eusebius",
    "date": "08-02",
    "name": "St. Eusebius dari Vercelli",
    "role": "Uskup",
    "years": "± 283–371",
    "rank": "optional",
    "color": "white",
    "story": "Eusebius lahir di Sardinia, menurut Ensiklopedia Katolik sekitar tahun 283. Ia menjadi lektor di Roma, lalu pindah ke Vercelli di Italia utara. Pada tahun 340 ia dipilih secara bulat oleh para klerus dan umat menjadi uskup kota itu, dan ditahbiskan oleh Paus Yulius I. Menurut kesaksian St. Ambrosius, ia adalah uskup pertama di Barat yang memadukan hidup membiara dengan hidup imamat: ia hidup bersama para imamnya dalam satu komunitas. Pada masa krisis Arianisme, yang menyangkal keilahian Kristus, Eusebius membela iman Konsili Nicea dan menolak mengutuk St. Atanasius dalam sinode di Milano tahun 355. Karena itu Kaisar Konstansius membuangnya ke Skitopolis, lalu ke Kapadokia dan Thebaid di Mesir, di mana ia mengalami banyak penderitaan. Setelah Kaisar Yulianus mengizinkan para uskup buangan kembali pada tahun 362, ia ikut dalam sinode di Aleksandria bersama Atanasius dan berusaha memulihkan perdamaian Gereja. Ia kemudian kembali ke Vercelli dan wafat di sana pada tahun 371.",
    "example": [
      "Setia pada kebenaran iman meskipun harus menanggung kerugian.",
      "Membangun persaudaraan dan hidup doa bersama dalam komunitas atau keluarga.",
      "Berusaha menjadi pendamai ketika terjadi perpecahan."
    ],
    "patron": [],
    "keywords": [
      "eusebius",
      "vercelli",
      "sardinia",
      "arianisme",
      "nicea",
      "uskup"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/02.html",
      "https://www.newadvent.org/cathen/05614b.htm"
    ]
  },
  {
    "id": "st-peter-julian-eymard",
    "date": "08-02",
    "name": "St. Petrus Yulianus Eymard",
    "role": "Imam, Pendiri Kongregasi Sakramen Mahakudus",
    "years": "1811–1868",
    "rank": "optional",
    "color": "white",
    "story": "Petrus Yulianus Eymard lahir pada 4 Februari 1811 di La Mure d'Isère, Prancis tenggara. Ia ditahbiskan menjadi imam Keuskupan Grenoble dan berkarya sebagai imam paroki. Pada tahun 1839 ia bergabung dengan Serikat Maria (Maris) dan menjalankan berbagai tugas dalam tarekat itu. Kasihnya yang mendalam kepada Ekaristi mendorongnya memulai karya baru: pada tahun 1856 ia mendirikan Kongregasi Sakramen Mahakudus untuk para imam dan bruder, yang membaktikan diri pada adorasi Ekaristi dan pewartaan tentang Ekaristi. Bersama Marguerite Guillot ia juga mendirikan kongregasi suster Hamba-hamba Sakramen Mahakudus. Ia mengajak umat awam untuk lebih sering menerima komuni dan berdoa di hadapan Sakramen Mahakudus, dan ia dikenang sebagai salah satu pendorong gerakan Kongres Ekaristi. Karena itu ia dijuluki \"Rasul Ekaristi\". Ia wafat pada 1 Agustus 1868, dibeatifikasi pada tahun 1925, dan dikanonisasi pada tahun 1962, sehari setelah sesi pertama Konsili Vatikan II berakhir.",
    "example": [
      "Menyediakan waktu untuk adorasi atau doa singkat di depan Sakramen Mahakudus.",
      "Mempersiapkan diri dengan sungguh sebelum menerima komuni.",
      "Menjadikan Ekaristi pusat hidup sehari-hari."
    ],
    "patron": [],
    "keywords": [
      "peter julian eymard",
      "eymard",
      "ekaristi",
      "adorasi",
      "sakramen mahakudus",
      "sss"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/02.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-peter-julian-eymard/"
    ]
  },
  {
    "id": "st-jean-vianney",
    "date": "08-04",
    "name": "St. Yohanes Maria Vianney",
    "role": "Imam, Pastor dari Ars",
    "years": "1786–1859",
    "rank": "memorial",
    "color": "white",
    "story": "Yohanes Maria Vianney lahir pada 8 Mei 1786 di Dardilly, dekat Lyon, Prancis, dari keluarga petani. Ia mulai belajar untuk menjadi imam di sekolah yang dibuka oleh Pastor Balley di Écully, tetapi pelajaran, terutama bahasa Latin, terasa sangat sulit baginya. Ia sempat terkena wajib militer di masa Napoleon sehingga studinya terhambat. Dengan ketekunan dan bantuan Pastor Balley, ia akhirnya ditahbiskan menjadi imam pada 13 Agustus 1815. Pada tahun 1818 ia diutus menjadi pastor di Ars, sebuah desa kecil dan terpencil. Melalui doa, mati raga, khotbah yang sederhana, dan pelayanan yang tekun, ia membarui kehidupan iman umatnya. Ia juga mendirikan rumah \"La Providence\" bagi anak-anak perempuan yang miskin. Tidak lama kemudian orang dari seluruh Prancis dan negara lain datang ke Ars untuk mengaku dosa kepadanya; pada sepuluh tahun terakhir hidupnya ia duduk di kamar pengakuan 16 sampai 18 jam sehari. Ia wafat di Ars pada 4 Agustus 1859 dan dikanonisasi oleh Paus Pius XI pada tahun 1925.",
    "example": [
      "Tekun dan tidak putus asa walaupun mengalami kesulitan belajar atau bekerja.",
      "Rajin menerima Sakramen Tobat.",
      "Mendoakan dan mendukung para imam, terutama pastor paroki sendiri."
    ],
    "patron": [
      "pastor paroki"
    ],
    "keywords": [
      "john vianney",
      "jean vianney",
      "vianney",
      "ars",
      "cure d'ars",
      "pastor paroki",
      "pengakuan dosa"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/04.html",
      "https://www.newadvent.org/cathen/08326c.htm"
    ]
  },
  {
    "id": "dedication-st-mary-major",
    "date": "08-05",
    "name": "Pemberkatan Basilika SP Maria Maggiore",
    "role": "Peringatan Santa Perawan Maria",
    "years": "",
    "rank": "optional",
    "color": "white",
    "story": "Basilika Santa Maria Maggiore berdiri di Bukit Esquilinus, Roma, dan merupakan gereja Maria terbesar di kota itu. Gereja pertama di tempat ini dibangun oleh Paus Liberius (352–366), sehingga disebut Basilika Liberiana. Setelah Konsili Efesus pada tahun 431 menegaskan bahwa Maria adalah Bunda Allah (Theotokos), Paus Sixtus III (432–440) membangun kembali basilika itu dan mempersembahkannya kepada Bunda Maria. Sejak itu gereja ini dikenal sebagai Basilika Santa Maria atau Maria Maior, dan sejak abad ke-7 juga disebut Maria ad Praesepe, \"Maria di Palungan\". Sebutan \"Maria Bunda Salju\" (ad Nives) muncul beberapa abad kemudian bersama sebuah legenda. Menurut legenda itu, pada masa Paus Liberius sepasang suami-istri bangsawan Romawi yang tidak memiliki anak berjanji menyerahkan harta mereka kepada Bunda Maria. Pada malam 5 Agustus salju turun di puncak Bukit Esquilinus, dan sesuai penglihatan yang mereka terima, mereka membangun gereja di tempat itu. Ensiklopedia Katolik mencatat bahwa mukjizat ini tidak disebut dalam sumber-sumber sezaman, termasuk inskripsi Sixtus III, sehingga tampaknya tidak berdasar sejarah. Pesta ini mula-mula dirayakan hanya di basilika itu, lalu di seluruh Roma, dan akhirnya dijadikan pesta universal oleh Paus Pius V.",
    "example": [
      "Menghormati Maria sebagai Bunda Allah dan Bunda kita.",
      "Merawat gereja sebagai rumah Tuhan dan tempat umat berkumpul.",
      "Mempersembahkan harta dan bakat kita untuk kemuliaan Tuhan."
    ],
    "patron": [],
    "keywords": [
      "santa maria maggiore",
      "mary major",
      "maria salju",
      "our lady of the snows",
      "basilika",
      "roma",
      "efesus",
      "theotokos"
    ],
    "sources": [
      "https://www.newadvent.org/cathen/11361c.htm"
    ]
  },
  {
    "id": "st-cajetan",
    "date": "08-07",
    "name": "St. Kayetanus",
    "role": "Imam, Pendiri Teatin",
    "years": "1480–1547",
    "rank": "optional",
    "color": "white",
    "story": "Kayetanus (Gaetano) lahir pada bulan Oktober 1480 di Vicenza, Italia, dan dibesarkan oleh ibunya yang saleh. Pada usia sekitar 24 tahun ia meraih gelar doktor hukum sipil dan hukum Gereja di Padua. Tahun 1506 ia bekerja di istana Paus Yulius II di Roma sebagai protonotarius apostolik. Ia ikut dalam Oratorium Cinta Ilahi, sebuah perkumpulan imam dan awam yang mengutamakan doa dan karya amal. Ia baru ditahbiskan menjadi imam pada tahun 1516. Di Vicenza ia mendirikan rumah sakit bagi orang-orang yang sakit tak tersembuhkan. Prihatin melihat kemerosotan hidup para klerus pada masanya, ia ingin membarui Gereja melalui teladan hidup para imam. Pada tahun 1524 ia mendirikan tarekat klerus reguler yang disahkan Paus Klemens VII; salah satu pendirinya, Giovanni Pietro Carafa, Uskup Chieti (Theate), kelak menjadi Paus Paulus IV, sehingga tarekat itu dikenal sebagai Teatin. Kayetanus sangat percaya pada penyelenggaraan ilahi. Ia wafat di Napoli pada tahun 1547 dan dikanonisasi pada tahun 1671.",
    "example": [
      "Percaya penuh pada penyelenggaraan Tuhan dalam urusan sehari-hari.",
      "Membarui Gereja dimulai dari pembaruan hidup sendiri.",
      "Peduli pada orang sakit yang tidak lagi mendapat perhatian."
    ],
    "patron": [],
    "keywords": [
      "cajetan",
      "gaetano",
      "kayetanus",
      "teatin",
      "theatines",
      "vicenza",
      "penyelenggaraan ilahi"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/07.html",
      "https://www.newadvent.org/cathen/03145a.htm"
    ]
  },
  {
    "id": "st-sixtus-i-i-pope",
    "date": "08-07",
    "name": "St. Sixtus II, Paus, dan Kawan-kawan, Martir",
    "role": "Paus dan Martir",
    "years": "† 258",
    "rank": "optional",
    "color": "red",
    "story": "Sixtus II terpilih menjadi Uskup Roma pada 31 Agustus 257. Asal-usulnya tidak diketahui dengan pasti. Ia dikenal sebagai \"imam yang baik dan cinta damai\". Pada masa pendahulunya, St. Stefanus I, terjadi perselisihan tajam antara Roma dan Gereja-gereja di Afrika dan Asia Kecil tentang pembaptisan ulang para bidat. Sixtus II memulihkan hubungan baik dengan Gereja-gereja itu, sambil tetap mempertahankan kebiasaan Roma. Pada bulan Agustus 258 Kaisar Valerianus mengeluarkan dekret yang memerintahkan agar para uskup, imam, dan diakon segera dihukum mati. Ketika Sixtus sedang duduk di kursinya dan berbicara kepada umat di pemakaman Kallistus, ia tiba-tiba ditangkap oleh serombongan prajurit. Ia dipenggal pada 6 Agustus 258 bersama empat diakon: Yanuarius, Vinsensius, Magnus, dan Stefanus. Pada hari yang sama dua diakon lain, Felisisimus dan Agapitus, juga mati sebagai martir. Paus Damasus kemudian menulis sebuah inskripsi untuk makamnya di Katakombe St. Kallistus. Menurut tradisi, dalam perjalanan menuju kematian ia bertemu dengan diakonnya, Laurensius, yang beberapa hari kemudian juga menjadi martir.",
    "example": [
      "Menjadi pembawa damai ketika ada perselisihan dalam komunitas.",
      "Tetap setia berkumpul dan beribadat bersama walaupun ada tantangan.",
      "Mendukung para pelayan Gereja dalam tugas mereka."
    ],
    "patron": [],
    "keywords": [
      "sixtus",
      "xystus",
      "paus",
      "martir",
      "katakombe",
      "kallistus",
      "valerianus",
      "diakon"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/07.html",
      "https://www.newadvent.org/cathen/14031c.htm"
    ]
  },
  {
    "id": "st-dominic",
    "date": "08-08",
    "name": "St. Dominikus",
    "role": "Imam, Pendiri Ordo Pewarta (Dominikan)",
    "years": "± 1170–1221",
    "rank": "memorial",
    "color": "white",
    "story": "Dominikus Guzman lahir sekitar tahun 1170 di Caleruega, Kastilia, Spanyol, dari keluarga bangsawan yang saleh. Sejak 1184 ia belajar di Palencia. Di sana ia dikenal tekun dan murah hati; ketika kelaparan melanda, ia menjual buku-bukunya yang berharga untuk menolong orang miskin. Ia kemudian menjadi kanonik di Katedral Osma. Sekitar tahun 1203, dalam perjalanan bersama Uskup Diego dari Osma melewati Toulouse, Prancis selatan, ia melihat betapa ajaran sesat Albigensis telah menjauhkan banyak orang dari iman. Ia lalu berkhotbah keliling dengan hidup miskin dan sederhana, dan pada tahun 1206 mendirikan biara suster di Prouille. Pada 22 Desember 1216 Paus Honorius III mengukuhkan Ordo Pewarta (Dominikan), sebuah ordo yang membaktikan diri pada studi, doa, dan pewartaan. Dominikus mengutus para saudaranya ke kota-kota universitas seperti Paris dan Bologna. Menurut tradisi, devosi Rosario dinyatakan kepadanya. Ia wafat di Bologna pada 6 Agustus 1221 dan dikanonisasi oleh Paus Gregorius IX pada tahun 1234.",
    "example": [
      "Belajar iman dengan sungguh-sungguh agar dapat menjelaskannya kepada orang lain.",
      "Berbagi harta milik dengan mereka yang kekurangan.",
      "Menyatukan doa, studi, dan pelayanan dalam hidup sehari-hari."
    ],
    "patron": [],
    "keywords": [
      "dominic",
      "dominikus",
      "guzman",
      "dominikan",
      "ordo pewarta",
      "op",
      "rosario",
      "bologna"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/08.html",
      "https://www.newadvent.org/cathen/05106a.htm"
    ]
  },
  {
    "id": "st-edith-stein",
    "date": "08-09",
    "name": "St. Teresa Benedikta dari Salib (Edith Stein), Perawan dan Martir",
    "role": "Biarawati Karmel dan Martir, Pelindung Eropa",
    "years": "1891–1942",
    "rank": "optional",
    "color": "white",
    "story": "Edith Stein lahir pada 12 Oktober 1891 di Breslau (kini Wrocław) sebagai anak bungsu dari sebelas bersaudara dalam keluarga Yahudi yang taat. Ia belajar di Universitas Breslau, lalu di Göttingen di bawah filsuf Edmund Husserl. Pada tahun 1917 ia meraih gelar doktor filsafat di Freiburg dengan predikat summa cum laude, dengan disertasi tentang empati. Setelah lama mencari kebenaran, ia dibaptis dalam Gereja Katolik pada 1 Januari 1922. Ia kemudian mengajar dan menjadi pembicara yang dikenal di Jerman. Pada 14 Oktober 1933 ia masuk biara Karmel di Köln dan menerima nama Suster Teresa Benedikta dari Salib. Karena ancaman Nazi terhadap orang Yahudi, pada malam tahun baru 1938 ia dipindahkan ke biara Karmel di Echt, Belanda. Pada 2 Agustus 1942 ia ditangkap Gestapo bersama saudarinya, Rosa, lalu dibawa ke kamp Auschwitz. Di sana ia dibunuh di kamar gas, kemungkinan besar pada 9 Agustus 1942. Paus Yohanes Paulus II membeatifikasinya pada tahun 1987, mengkanonisasinya pada tahun 1998, dan menjadikannya salah satu pelindung Eropa.",
    "example": [
      "Mencari kebenaran dengan jujur dan rendah hati.",
      "Menerima salib hidup dengan iman dan mempersatukannya dengan penderitaan Kristus.",
      "Berdoa bagi perdamaian dan bagi mereka yang dianiaya."
    ],
    "patron": [
      "Eropa"
    ],
    "keywords": [
      "edith stein",
      "teresa benedicta",
      "karmel",
      "auschwitz",
      "filsuf",
      "yahudi",
      "eropa"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/09.html",
      "https://www.vatican.va/news_services/liturgy/saints/ns_lit_doc_19981011_edith_stein_en.html"
    ]
  },
  {
    "id": "st-lawrence-deacon",
    "date": "08-10",
    "name": "St. Laurensius, Diakon dan Martir",
    "role": "Diakon dan Martir",
    "years": "† 258",
    "rank": "feast",
    "color": "white",
    "story": "Laurensius adalah salah satu dari tujuh diakon Gereja Roma pada masa Paus Sixtus II. Sebagai diakon ia bertugas mengurus harta Gereja dan bantuan bagi orang miskin. Pada awal Agustus 258 Kaisar Valerianus mengeluarkan dekret agar semua uskup, imam, dan diakon segera dihukum mati. Pada 6 Agustus Paus Sixtus II dan beberapa diakon ditangkap dan dibunuh di katakombe. Empat hari kemudian, pada 10 Agustus 258, Laurensius juga mati sebagai martir. Ia dimakamkan di Via Tiburtina, di tempat yang kini menjadi Basilika San Lorenzo fuori le Mura. Sejak abad ke-4 ia termasuk martir yang paling dihormati di Roma. Menurut tradisi yang dicatat oleh St. Ambrosius dan penyair Prudentius, ketika diminta menyerahkan harta Gereja, Laurensius membawa orang-orang miskin dan menunjukkan mereka sebagai harta Gereja. Tradisi yang sama mengisahkan bahwa ia dibakar di atas panggangan besi; para ahli sejarah menganggap rincian ini belum dapat dipastikan, tetapi kemartirannya, tempat, dan tanggal pemakamannya tidak diragukan.",
    "example": [
      "Memandang orang miskin sebagai harta yang paling berharga.",
      "Melayani dengan setia dalam tugas yang dipercayakan, sekecil apa pun.",
      "Tetap teguh dan tenang menghadapi ancaman demi iman."
    ],
    "patron": [
      "diakon",
      "juru masak",
      "pemadam kebakaran"
    ],
    "keywords": [
      "lawrence",
      "laurentius",
      "lorenzo",
      "laurensius",
      "diakon",
      "martir",
      "roma",
      "valerianus"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/10.html",
      "https://www.newadvent.org/cathen/09089a.htm"
    ]
  },
  {
    "id": "st-clare",
    "date": "08-11",
    "name": "St. Klara dari Assisi, Perawan",
    "role": "Perawan, Pendiri Ordo Klaris",
    "years": "1194–1253",
    "rank": "memorial",
    "color": "white",
    "story": "Klara lahir di Assisi, Italia, pada 16 Juli 1194, dari keluarga bangsawan kaya. Sejak kecil ia tekun berdoa dan bermati raga. Ketika berusia delapan belas tahun, ia mendengar khotbah St. Fransiskus di Gereja San Giorgio dan ingin hidup menurut Injil. Pada malam Minggu Palma tahun 1212 ia diam-diam meninggalkan rumah dan pergi ke kapel Porziuncola. Di sana Fransiskus memotong rambutnya dan memberinya jubah kasar sebagai tanda penyerahan diri kepada Kristus. Ayahnya berusaha memaksanya pulang, tetapi Klara tetap teguh. Tak lama kemudian adiknya, Agnes, menyusul. Fransiskus lalu menempatkan mereka di dekat Gereja San Damiano; di sinilah berdiri komunitas pertama Ordo Wanita Miskin, yang kemudian dikenal sebagai Ordo Klaris. Klara memimpin biara itu sebagai abdis selama sekitar empat puluh tahun dan dengan gigih mempertahankan kemiskinan total; pada tahun 1228 Paus Gregorius IX memberinya \"Hak Istimewa Kemiskinan\". Ia wafat di Assisi pada 11 Agustus 1253 dan dikanonisasi oleh Paus Aleksander IV pada tahun 1255.",
    "example": [
      "Hidup sederhana dan tidak terikat pada harta.",
      "Setia berdoa dan memandang Kristus setiap hari.",
      "Berani mengikuti panggilan Tuhan walaupun tidak dimengerti keluarga atau lingkungan."
    ],
    "patron": [
      "televisi"
    ],
    "keywords": [
      "clare",
      "chiara",
      "klara",
      "assisi",
      "klaris",
      "poor clares",
      "san damiano",
      "kemiskinan"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/11.html",
      "https://www.newadvent.org/cathen/04004a.htm"
    ]
  },
  {
    "id": "sts-pontian-hippolytus",
    "date": "08-13",
    "name": "St. Pontianus, Paus, dan St. Hipolitus, Imam, Martir",
    "role": "Paus dan Imam, Martir",
    "years": "† ± 235",
    "rank": "optional",
    "color": "white",
    "story": "Pontianus, menurut Liber Pontificalis berasal dari Roma, menjadi paus pada 21 Juli 230. Hipolitus adalah seorang imam dan penulis teologi terkemuka di Roma. Ia mengkritik keras Paus Kalistus dan, setelah Kalistus terpilih menjadi paus, Hipolitus memisahkan diri dan dipilih oleh kelompok kecil pengikutnya sebagai paus tandingan. Perpecahan ini masih berlangsung pada masa Pontianus. Pada tahun 235 Kaisar Maksiminus Thrax memulai penganiayaan yang terutama ditujukan kepada para pemimpin Gereja. Pontianus dan Hipolitus sama-sama dibuang ke pulau Sardinia untuk bekerja di tambang. Agar Gereja Roma dapat memilih pemimpin baru, Pontianus mengundurkan diri pada 28 September 235. Di tempat pembuangan itu Hipolitus berdamai dengan Gereja Roma dan mengajak para pengikutnya untuk kembali bersatu, sehingga perpecahan berakhir. Keduanya meninggal akibat penderitaan dan perlakuan kejam di pembuangan. Paus Fabianus kemudian memindahkan jenazah mereka ke Roma; Pontianus dimakamkan di Katakombe Kallistus dan Hipolitus di Via Tiburtina. Keduanya dikenang sebagai martir pada 13 Agustus.",
    "example": [
      "Berani berdamai dan memulihkan persatuan setelah berselisih.",
      "Mengutamakan kebaikan bersama di atas kedudukan pribadi.",
      "Tetap setia kepada Kristus dalam penderitaan."
    ],
    "patron": [],
    "keywords": [
      "pontian",
      "pontianus",
      "hippolytus",
      "hipolitus",
      "sardinia",
      "paus",
      "martir",
      "perdamaian"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/13.html",
      "https://www.newadvent.org/cathen/12229b.htm",
      "https://www.newadvent.org/cathen/07360c.htm"
    ]
  },
  {
    "id": "st-maximilian-kolbe",
    "date": "08-14",
    "name": "St. Maximilianus Maria Kolbe, Imam dan Martir",
    "role": "Imam Fransiskan dan Martir",
    "years": "1894–1941",
    "rank": "memorial",
    "color": "white",
    "story": "Maximilianus Kolbe lahir pada 8 Januari 1894 di Polandia. Ia masuk seminari menengah Fransiskan Konventual di Lviv dan menjadi novis pada usia 16 tahun. Ia meraih gelar doktor filsafat dan teologi, lalu ditahbiskan menjadi imam pada usia 24 tahun. Ia mendirikan Laskar Maria Imakulata (Militia Immaculatae) untuk melawan kejahatan dengan hidup yang baik, doa, kerja, dan penderitaan, serta menerbitkan majalah \"Ksatria Imakulata\" yang beroplah sangat besar. Ia membangun Niepokalanów, \"Kota Imakulata\", yang dihuni ratusan biarawan Fransiskan, dan kemudian mendirikan komunitas serupa di Nagasaki, Jepang. Ketika Nazi menyerbu Polandia pada tahun 1939, ia sempat ditahan lalu dibebaskan. Pada tahun 1941 ia ditangkap lagi dan dikirim ke kamp Auschwitz. Ketika seorang tahanan melarikan diri, komandan memilih sepuluh orang untuk dihukum mati kelaparan. Pastor Kolbe, tahanan nomor 16670, menawarkan diri menggantikan Fransiskus Gajowniczek, seorang ayah berkeluarga. Di bunker kelaparan itu ia akhirnya dibunuh dengan suntikan asam karbol pada 14 Agustus 1941. Ia dibeatifikasi pada tahun 1971 dan dikanonisasi pada tahun 1982; Paus Yohanes Paulus II menyebutnya \"martir cinta kasih\".",
    "example": [
      "Rela berkorban demi orang lain, terutama yang paling membutuhkan.",
      "Memakai media dan teknologi untuk mewartakan iman.",
      "Mempercayakan hidup kepada Bunda Maria."
    ],
    "patron": [
      "pecandu narkoba",
      "pemulihan dari kecanduan"
    ],
    "keywords": [
      "maximilian kolbe",
      "maksimilianus",
      "kolbe",
      "auschwitz",
      "niepokalanow",
      "fransiskan",
      "polandia",
      "martir cinta kasih"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/14.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-maximilian-mary-kolbe/"
    ]
  },
  {
    "id": "st-stephen-hungary",
    "date": "08-16",
    "name": "St. Stefanus dari Hungaria",
    "role": "Raja",
    "years": "975–1038",
    "rank": "optional",
    "color": "white",
    "story": "Stefanus lahir sekitar tahun 975 di Esztergom (Gran), Hungaria, sebagai putra Géza, kepala suku bangsa Magyar. Menurut Ensiklopedia Katolik, ia dibaptis bersama ayahnya oleh St. Adalbertus dari Praha; pada saat itu nama kafirnya, Vajk, diganti menjadi Stefanus. Pada tahun 995 ia menikah dengan Gisela, saudari Adipati Henry dari Bavaria yang kelak menjadi Kaisar St. Henry II. Pada tahun 997 ia menggantikan ayahnya sebagai penguasa Hungaria. Untuk menjadikan bangsanya bangsa Kristen, ia mengutus Abas Astrikus ke Roma memohon kepada Paus Silvester II gelar raja dan wewenang mendirikan keuskupan-keuskupan. Paus mengabulkannya dan mengirimkan mahkota; Stefanus dimahkotai pada 17 Agustus 1001. Ia mendirikan keuskupan, biara, serta rumah singgah bagi para peziarah di Yerusalem, Roma, Ravenna, dan Konstantinopel. Tahun-tahun terakhir hidupnya diwarnai sakit dan duka: putra tunggalnya, St. Emerikus, tewas dalam perburuan pada tahun 1031, dan beberapa kerabatnya bersekongkol melawannya. Ia wafat pada 15 Agustus 1038 dan dikanonisasi bersama putranya pada tahun 1083.",
    "example": [
      "Menggunakan kedudukan dan wewenang untuk melayani kebaikan bersama.",
      "Menanamkan iman dalam keluarga dan masyarakat.",
      "Tetap percaya kepada Tuhan di tengah duka dan pengkhianatan."
    ],
    "patron": [],
    "keywords": [
      "stephen of hungary",
      "istvan",
      "stefanus",
      "hungaria",
      "raja",
      "magyar"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/16.html",
      "https://www.newadvent.org/cathen/14287a.htm"
    ]
  },
  {
    "id": "st-john-eudes",
    "date": "08-19",
    "name": "St. Yohanes Eudes",
    "role": "Imam, Pendiri Kongregasi Yesus dan Maria (Eudis)",
    "years": "1601–1680",
    "rank": "optional",
    "color": "white",
    "story": "Yohanes Eudes lahir pada 14 November 1601 di Ri, Normandia, Prancis. Setelah belajar pada para Yesuit di Caen, ia masuk Kongregasi Oratorium pada tahun 1623 dan ditahbiskan menjadi imam pada 20 Desember 1625. Ia memulai karya imamatnya dengan melayani para korban wabah sampar yang sedang melanda negerinya. Ia menjadi misionaris yang sangat terkenal dan memberikan sekitar 110 misi umat, terutama di Normandia. Pada tahun 1641 ia mendirikan Kongregasi Bunda Kasih (Our Lady of Charity of the Refuge) untuk menampung para perempuan yang ingin bertobat dan memulai hidup baru. Pada 25 Maret 1643 di Caen ia mendirikan Kongregasi Yesus dan Maria (Eudis) untuk pendidikan para calon imam dan karya misi. Ia sangat giat menyebarkan devosi kepada Hati Kudus Yesus dan Hati Maria yang Tersuci; ia menyusun teks Misa dan ibadat untuk kedua pesta itu, sehingga Paus Leo XIII menyebutnya perintis ibadat liturgis bagi Hati Yesus dan Hati Maria. Ia wafat di Caen pada 19 Agustus 1680, dibeatifikasi pada tahun 1909, dan dikanonisasi pada tahun 1925.",
    "example": [
      "Melayani orang sakit dan menderita dengan berani.",
      "Membantu mereka yang ingin bertobat untuk memulai hidup baru.",
      "Mengembangkan devosi kepada Hati Kudus Yesus dan Hati Maria dalam keluarga."
    ],
    "patron": [],
    "keywords": [
      "john eudes",
      "jean eudes",
      "eudes",
      "eudis",
      "hati kudus",
      "normandia",
      "caen"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/19.html",
      "https://www.newadvent.org/cathen/05596a.htm"
    ]
  },
  {
    "id": "st-bernard-clairvaux",
    "date": "08-20",
    "name": "St. Bernardus dari Clairvaux",
    "role": "Abas dan Pujangga Gereja",
    "years": "1090–1153",
    "rank": "memorial",
    "color": "white",
    "story": "Bernardus lahir pada tahun 1090 di Fontaines, dekat Dijon, Prancis, dari keluarga bangsawan Burgundia. Ia mendapat pendidikan yang baik dan sejak muda memiliki devosi khusus kepada Santa Perawan Maria. Sekitar tahun 1113 ia masuk biara Cîteaux yang menghayati Regula St. Benediktus secara ketat, bersama sekitar tiga puluh pemuda bangsawan, termasuk saudara-saudaranya. Pada tahun 1115 ia diutus memimpin sekelompok rahib untuk mendirikan biara baru di Clairvaux dan menjadi abasnya. Biara itu berkembang pesat dan mendirikan banyak biara lain, sehingga Bernardus menjadi tokoh utama Ordo Sistersien. Ia dikenal sebagai pengkhotbah dan penulis rohani yang ulung, penasihat para paus dan raja, serta pembela ajaran Gereja. Salah seorang muridnya menjadi Paus Eugenius III. Pada tahun 1146, atas permintaan paus, ia mengkhotbahkan Perang Salib Kedua di Vézelay. Ia wafat di Clairvaux pada bulan Agustus 1153, dikanonisasi oleh Paus Aleksander III pada tahun 1174, dan diberi gelar Pujangga Gereja oleh Paus Pius VIII.",
    "example": [
      "Membaca Kitab Suci sampai firman Tuhan menjadi bahasa hati sendiri.",
      "Menghormati dan berdoa kepada Bunda Maria.",
      "Mengajak orang-orang terdekat untuk bersama-sama bertumbuh dalam iman."
    ],
    "patron": [
      "peternak lebah"
    ],
    "keywords": [
      "bernard",
      "bernardus",
      "clairvaux",
      "sistersien",
      "cistercian",
      "citeaux",
      "doctor mellifluus"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/20.html",
      "https://www.newadvent.org/cathen/02498d.htm"
    ]
  },
  {
    "id": "st-pius-x",
    "date": "08-21",
    "name": "St. Pius X",
    "role": "Paus",
    "years": "1835–1914",
    "rank": "memorial",
    "color": "white",
    "story": "Giuseppe Melchiorre Sarto lahir pada 2 Juni 1835 di Riese, Provinsi Treviso, Italia, sebagai anak kedua dari sepuluh bersaudara dalam keluarga sederhana; ayahnya seorang tukang pos. Ia ditahbiskan menjadi imam pada tahun 1858 dan melayani sebagai pastor pembantu di Tombolo, lalu pastor kepala di Salzano, di mana ia menonjol dalam pengajaran agama dan pelayanan saat wabah kolera. Ia kemudian menjadi Uskup Mantova pada tahun 1884 dan Patriark Venesia pada tahun 1893. Pada bulan Agustus 1903 ia terpilih menjadi paus dan memilih semboyan \"Instaurare omnia in Christo\" (membarui segala sesuatu dalam Kristus). Ia mendorong umat untuk sering menerima komuni, termasuk anak-anak sejak usia dapat menggunakan akal budi, menekankan pentingnya katekese, membarui musik liturgi dengan nyanyian Gregorian, dan melawan paham Modernisme melalui ensiklik Pascendi (1907). Ia juga peduli pada korban bencana dan pada perlakuan buruk terhadap penduduk asli di Peru. Ia wafat pada 20 Agustus 1914, beberapa minggu setelah Perang Dunia I pecah, dan dikanonisasi pada tahun 1954.",
    "example": [
      "Sering menerima komuni dengan persiapan yang baik.",
      "Mengajarkan iman kepada anak-anak sejak dini.",
      "Tetap sederhana dan dekat dengan orang kecil walaupun mendapat jabatan tinggi."
    ],
    "patron": [],
    "keywords": [
      "pius x",
      "pius 10",
      "sarto",
      "paus",
      "komuni pertama",
      "riese",
      "venesia"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/21.html",
      "https://www.newadvent.org/cathen/12137a.htm",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-pius-x/"
    ]
  },
  {
    "id": "queenship-mary",
    "date": "08-22",
    "name": "SP Maria, Ratu",
    "role": "Peringatan Santa Perawan Maria",
    "years": "",
    "rank": "memorial",
    "color": "white",
    "story": "Sejak abad-abad awal, umat Kristen menyapa Maria sebagai Ratu dan Bunda. Bapa-bapa Gereja seperti St. Efrem pada abad ke-4, St. Gregorius dari Nazianze, dan St. Yohanes dari Damsyik menyebutnya \"Ratu\" atau \"Puan\". Gelar ini kemudian bergema dalam doa-doa Gereja, seperti Salam ya Ratu (Salve Regina), Litani Santa Perawan Maria, dan peristiwa kelima Rosario Mulia. Dasar alkitabiahnya tampak dalam kabar malaikat Gabriel bahwa Putra Maria akan menerima takhta Daud dan berkuasa selama-lamanya, serta dalam sapaan Elisabet kepada Maria sebagai \"ibu Tuhanku\". Pada 11 Oktober 1954, untuk menutup Tahun Maria, Paus Pius XII menerbitkan ensiklik Ad Caeli Reginam dan menetapkan pesta Santa Perawan Maria Ratu. Menurut ensiklik itu, dasar utama martabat Maria sebagai ratu adalah keibuan ilahinya, karena ia melahirkan Kristus, Raja segala raja; selain itu ia juga dipersatukan secara erat dengan karya penebusan Kristus sebagai \"Hawa baru\". Kerajaan Maria adalah partisipasi yang terbatas dalam kerajaan Kristus. Kini peringatan ini dirayakan pada 22 Agustus, hari kedelapan sesudah Hari Raya Maria Diangkat ke Surga.",
    "example": [
      "Mendoakan Salam ya Ratu atau Rosario dengan penuh kepercayaan.",
      "Meneladan Maria yang menjadi ratu melalui kerendahan hati dan pelayanan.",
      "Mempercayakan keluarga dan dunia pada doa perantaraan Bunda Maria."
    ],
    "patron": [],
    "keywords": [
      "queenship of mary",
      "maria ratu",
      "ratu surga",
      "ad caeli reginam",
      "salve regina",
      "pius xii"
    ],
    "sources": [
      "https://www.vatican.va/content/pius-xii/en/encyclicals/documents/hf_p-xii_enc_11101954_ad-caeli-reginam.html",
      "https://www.franciscanmedia.org/saint-of-the-day/queenship-of-the-blessed-virgin-mary/"
    ]
  },
  {
    "id": "st-rose-lima",
    "date": "08-23",
    "name": "St. Rosa dari Lima, Perawan",
    "role": "Perawan, Anggota Ordo Ketiga Dominikan",
    "years": "1586–1617",
    "rank": "optional",
    "color": "white",
    "story": "Rosa lahir di Lima, Peru, pada 20 April 1586. Menurut kisah hidupnya, ketika masih bayi wajahnya tampak seperti mawar, sehingga saat menerima Sakramen Krisma pada tahun 1597 ia memakai nama Rosa. Sejak kecil ia tekun berdoa dan memiliki devosi mendalam kepada Kanak-kanak Yesus dan Bunda Maria. Ia menjadikan St. Katarina dari Siena sebagai teladan: ia berpuasa, bermati raga keras, dan mengenakan pakaian sederhana. Orang tuanya ingin ia menikah, tetapi setelah bertahun-tahun bergumul dengan sabar dan dalam doa, ia mendapat izin untuk mempersembahkan hidupnya bagi Tuhan dengan kaul keperawanan. Ia membantu menghidupi keluarganya dengan membuat renda dan sulaman, serta melakukan banyak karya kasih. Di kebun rumah orang tuanya ia membangun sebuah pondok kecil untuk berdoa. Pada usia sekitar dua puluh tahun ia menerima jubah Ordo Ketiga St. Dominikus. Ia mempersembahkan doa dan tobatnya bagi pertobatan orang berdosa dan jiwa-jiwa di api penyucian. Ia wafat di Lima pada bulan Agustus 1617, dibeatifikasi tahun 1667, dan dikanonisasi tahun 1671 sebagai orang kudus pertama dari benua Amerika.",
    "example": [
      "Bekerja dengan tekun untuk membantu keluarga.",
      "Menyediakan tempat dan waktu khusus untuk berdoa di rumah.",
      "Mempersembahkan pengorbanan kecil sehari-hari bagi pertobatan orang lain."
    ],
    "patron": [
      "benua Amerika"
    ],
    "keywords": [
      "rose of lima",
      "rosa",
      "lima",
      "peru",
      "dominikan",
      "amerika latin"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/23.html",
      "https://www.newadvent.org/cathen/13192c.htm"
    ]
  },
  {
    "id": "st-bartholomew-ap",
    "date": "08-24",
    "name": "St. Bartolomeus, Rasul",
    "role": "Rasul",
    "years": "abad ke-1",
    "rank": "feast",
    "color": "red",
    "story": "Bartolomeus adalah salah satu dari dua belas rasul Yesus. Namanya disebut dalam daftar para rasul di Injil Matius, Markus, Lukas, dan Kisah Para Rasul, dan selalu berdekatan dengan nama Filipus. Nama Bartolomeus berarti \"anak Talmai\". Selain dalam daftar itu, Perjanjian Baru tidak mencatat hal lain tentang dirinya. Banyak ahli menyamakannya dengan Natanael dari Kana di Galilea, yang dibawa Filipus kepada Yesus (Yoh 1:45-51). Yesus memuji Natanael sebagai \"seorang Israel sejati, tidak ada kepalsuan di dalamnya\", dan Natanael pun mengakui Yesus sebagai Anak Allah dan Raja Israel. Natanael juga hadir ketika Yesus yang bangkit menampakkan diri di tepi Danau Tiberias. Menurut kesaksian Eusebius, Pantaenus mendengar bahwa Bartolomeus pernah mewartakan Injil di \"India\", sebuah sebutan untuk wilayah yang sangat luas. Tradisi lain menyebut ia berkarya di Mesopotamia, Persia, dan Armenia. Menurut tradisi, ia mati sebagai martir di Armenia; ada yang mengatakan ia dipenggal, ada pula yang mengatakan ia dikuliti hidup-hidup. Karena itu dalam seni ia sering digambarkan memegang pisau atau kulitnya sendiri.",
    "example": [
      "Bersikap jujur dan tulus, tanpa kepalsuan.",
      "Mau datang dan melihat sendiri ketika diajak mengenal Yesus.",
      "Membawa teman dan sahabat untuk mengenal Kristus."
    ],
    "patron": [
      "tukang plester"
    ],
    "keywords": [
      "bartholomew",
      "bartolomeus",
      "natanael",
      "nathanael",
      "rasul",
      "armenia"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/24.html",
      "https://www.newadvent.org/cathen/02313c.htm",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-bartholomew/"
    ]
  },
  {
    "id": "st-joseph-calasanz",
    "date": "08-25",
    "name": "St. Yosef Kalasansius",
    "role": "Imam, Pendiri Ordo Piaris",
    "years": "1556–1648",
    "rank": "optional",
    "color": "white",
    "story": "Yosef lahir pada 11 September 1556 di puri Calasanz dekat Peralta de la Sal, Aragon, Spanyol, sebagai anak bungsu dari lima bersaudara. Ia belajar filsafat dan hukum di Lérida hingga meraih gelar doktor hukum, lalu menyelesaikan studi teologi di Valencia dan Alcalá. Ayahnya ingin ia menikah, tetapi setelah sembuh dari sakit berat pada tahun 1582, ia ditahbiskan menjadi imam pada 17 Desember 1583. Ia melayani beberapa uskup di Spanyol sebagai teolog dan vikaris jenderal. Pada tahun 1592 ia pergi ke Roma. Di sana ia prihatin melihat banyak anak miskin dan yatim piatu yang terlantar di jalan tanpa pendidikan. Ia bergabung dengan Persaudaraan Ajaran Kristen dan mengumpulkan anak-anak itu. Pada bulan November 1597 ia membuka sekolah umum gratis yang pertama di Eropa, di dekat Gereja Santa Dorotea; tak lama kemudian sekitar seribu anak belajar di sana. Pada tahun 1602 ia memulai hidup berkomunitas bersama para rekan gurunya, yang menjadi awal Ordo Piaris (Sekolah-sekolah Saleh). Ia menghadapi banyak iri hati dan perlawanan, tetapi tetap setia. Ia wafat di Roma pada 25 Agustus 1648 dan dikanonisasi pada tahun 1767.",
    "example": [
      "Peduli pada pendidikan anak-anak miskin, misalnya dengan membantu biaya sekolah atau mengajar.",
      "Sabar dan tetap setia ketika karya baik disalahpahami.",
      "Melihat pendidikan sebagai jalan untuk membentuk iman dan masa depan."
    ],
    "patron": [],
    "keywords": [
      "joseph calasanz",
      "calasanctius",
      "kalasansius",
      "piaris",
      "piarist",
      "sekolah",
      "pendidikan"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/25.html",
      "https://www.newadvent.org/cathen/08518d.htm"
    ]
  },
  {
    "id": "st-louis",
    "date": "08-25",
    "name": "St. Ludovikus (Louis IX), Raja Prancis",
    "role": "Raja",
    "years": "± 1214–1270",
    "rank": "optional",
    "color": "white",
    "story": "Louis lahir di Poissy, Prancis, sebagai putra Raja Louis VIII dan Blanche dari Kastilia; Ensiklopedia Katolik mencatat tanggal 25 April 1215, sementara banyak sumber lain menyebut tahun 1214. Ia menjadi raja ketika masih anak-anak setelah ayahnya wafat pada tahun 1226, dan ibunya memerintah sebagai wali. Ibunya mendidiknya dalam iman yang kuat. Sebagai raja, Louis dikenal karena rasa keadilan, kesalehan, dan cinta kasihnya. Menurut ingatan rakyat, ia biasa mengadili perkara rakyatnya di bawah sebatang pohon ek dekat istananya di Vincennes. Orang miskin diberi makan dari mejanya; ia membasuh kaki mereka, merawat penderita kusta, dan setiap hari memberi makan lebih dari seratus orang miskin. Pada masa pemerintahannya dibangun Sainte-Chapelle di Paris, dan di bawah perlindungannya Robert de Sorbon mendirikan Kolese Sorbonne. Ia berusaha menjaga perdamaian dengan Inggris. Ia memimpin dua perang salib, pada tahun 1248 dan 1270. Dalam perang salib kedua ia jatuh sakit dan wafat dekat Tunis pada 25 Agustus 1270. Paus Bonifasius VIII mengkanonisasinya pada tahun 1297.",
    "example": [
      "Bersikap adil dan jujur dalam mengambil keputusan.",
      "Melayani orang miskin dan sakit secara langsung.",
      "Menjadikan iman dasar dalam memimpin keluarga, pekerjaan, atau masyarakat."
    ],
    "patron": [],
    "keywords": [
      "louis ix",
      "saint louis",
      "ludovikus",
      "prancis",
      "raja",
      "sainte-chapelle",
      "keadilan"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/25.html",
      "https://www.newadvent.org/cathen/09368a.htm"
    ]
  },
  {
    "id": "st-monica",
    "date": "08-27",
    "name": "St. Monika",
    "role": "Ibu dan Janda",
    "years": "333–387",
    "rank": "memorial",
    "color": "white",
    "story": "Monika lahir dari keluarga Kristen di Tagaste, Afrika Utara (kini Souk Ahras, Aljazair), pada tahun 333. Ia menikah dengan Patrisius, seorang pejabat kota yang belum dibaptis dan berwatak keras. Hidup perkawinannya tidak mudah, tetapi dengan kelembutan dan kesabarannya ia menjadi teladan bagi para istri dan ibu di kotanya. Mereka dikaruniai tiga anak: Agustinus, Navigius, dan Perpetua. Berkat doa dan teladannya, Patrisius akhirnya menjadi Kristen tidak lama sebelum wafat. Kecemasan terbesar Monika adalah putra sulungnya, Agustinus, yang hidup jauh dari Tuhan dan bergabung dengan aliran Manikheisme di Kartago. Monika tidak berhenti berdoa dan menangis baginya. Seorang uskup menghiburnya dengan kata-kata yang terkenal bahwa anak dari air mata sebanyak itu tidak mungkin binasa. Ketika Agustinus diam-diam pergi ke Roma, Monika menyusulnya sampai ke Milano. Di sana, melalui St. Ambrosius, Agustinus akhirnya bertobat dan dibaptis pada Paskah tahun 387. Dalam perjalanan pulang ke Afrika, Monika jatuh sakit dan wafat di Ostia, dekat Roma, pada tahun yang sama. Kisahnya kita kenal terutama dari buku Pengakuan-pengakuan karya Agustinus.",
    "example": [
      "Tekun mendoakan anggota keluarga yang jauh dari Tuhan tanpa putus asa.",
      "Menghadapi pasangan atau keluarga yang sulit dengan kesabaran dan kelembutan.",
      "Mempercayakan anak-anak kepada Tuhan dalam doa setiap hari."
    ],
    "patron": [
      "ibu"
    ],
    "keywords": [
      "monica",
      "monika",
      "tagaste",
      "agustinus",
      "ibu",
      "doa ibu",
      "ostia"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/27.html",
      "https://www.newadvent.org/cathen/10482a.htm"
    ]
  },
  {
    "id": "st-augustine-hippo",
    "date": "08-28",
    "name": "St. Agustinus dari Hippo",
    "role": "Uskup dan Pujangga Gereja",
    "years": "354–430",
    "rank": "memorial",
    "color": "white",
    "story": "Agustinus lahir di Tagaste, Afrika Utara, pada 13 November 354. Ayahnya, Patrisius, belum dibaptis, sedangkan ibunya, St. Monika, seorang Kristen yang saleh. Ia belajar di Madaura dan Kartago dan menjadi guru retorika yang cemerlang. Di masa mudanya ia hidup jauh dari iman, memiliki seorang putra bernama Adeodatus dari seorang perempuan yang tidak dinikahinya, dan selama bertahun-tahun mengikuti aliran Manikheisme. Pencariannya akan kebenaran membawanya ke Roma lalu ke Milano. Di sana, melalui khotbah St. Ambrosius, bacaan Kitab Suci, dan doa ibunya, ia bertobat. Ia dibaptis oleh Ambrosius pada Paskah tahun 387 bersama putranya dan sahabatnya, Alipius. Setelah kembali ke Afrika ia hidup bersama sahabat-sahabatnya dalam komunitas doa. Pada tahun 391 umat di Hippo mendesak agar ia ditahbiskan menjadi imam, dan sekitar tahun 396 ia menjadi Uskup Hippo. Selama sekitar 34 tahun ia menggembalakan umat, berkhotbah, membela iman melawan berbagai ajaran sesat, dan menulis karya-karya besar seperti Pengakuan-pengakuan dan Kota Allah. Ia wafat di Hippo pada 28 Agustus 430, ketika kota itu dikepung oleh bangsa Vandal.",
    "example": [
      "Mencari kebenaran dengan jujur dan tidak takut mengakui kesalahan masa lalu.",
      "Membaca Kitab Suci sebagai jalan pertobatan.",
      "Hidup dalam persahabatan rohani yang saling menguatkan dalam iman."
    ],
    "patron": [],
    "keywords": [
      "augustine",
      "agustinus",
      "hippo",
      "pengakuan",
      "confessions",
      "kota allah",
      "pertobatan",
      "pujangga gereja"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/08/28.html",
      "https://www.newadvent.org/cathen/02084a.htm"
    ]
  },
  {
    "id": "beheading-john-baptist",
    "date": "08-29",
    "name": "Wafatnya St. Yohanes Pembaptis, Martir",
    "role": "Nabi dan Martir, Perintis Jalan Tuhan",
    "years": "abad ke-1",
    "rank": "memorial",
    "color": "red",
    "story": "Yohanes Pembaptis adalah putra imam Zakharia dan Elisabet. Ia tampil di padang gurun Yudea, menyerukan pertobatan, dan membaptis orang-orang di Sungai Yordan sebagai persiapan bagi kedatangan Mesias. Ia sendiri membaptis Yesus dan menunjuk-Nya kepada murid-muridnya sebagai Anak Domba Allah. Herodes Antipas, raja wilayah Galilea dan Perea, mengambil Herodias, istri saudaranya sendiri, menjadi istrinya. Yohanes dengan berani menegurnya: \"Tidak halal engkau mengambil istri saudaramu!\" Karena itu Herodes memenjarakannya; menurut sejarawan Yahudi Yosefus, Yohanes ditahan di benteng Makherus. Herodias menyimpan dendam dan ingin membunuhnya, tetapi Herodes segan kepada Yohanes karena tahu ia orang benar dan suci. Kesempatan itu datang pada pesta ulang tahun Herodes. Putri Herodias menari dan menyenangkan hati raja, sehingga Herodes bersumpah akan memberi apa saja yang dimintanya. Atas hasutan ibunya, gadis itu meminta kepala Yohanes Pembaptis di sebuah talam. Raja menyesal, tetapi karena sumpahnya ia menyuruh memenggal Yohanes di penjara (Mrk 6:17-29). Murid-murid Yohanes mengambil jenazahnya dan menguburkannya. Menurut tradisi kuno, makamnya berada di Sebaste, Samaria.",
    "example": [
      "Berani menyatakan kebenaran walaupun kepada orang yang berkuasa.",
      "Setia pada hati nurani meskipun harus menanggung risiko.",
      "Menunjuk kepada Kristus, bukan kepada diri sendiri."
    ],
    "patron": [],
    "keywords": [
      "john the baptist",
      "yohanes pembaptis",
      "beheading",
      "kemartiran",
      "herodes",
      "herodias",
      "nabi"
    ],
    "sources": [
      "https://www.newadvent.org/cathen/08486b.htm"
    ]
  },
  {
    "id": "st-gregory-great",
    "date": "09-03",
    "name": "St. Gregorius Agung",
    "role": "Paus dan Pujangga Gereja",
    "years": "± 540–604",
    "rank": "memorial",
    "color": "white",
    "story": "Gregorius lahir di Roma sekitar tahun 540 dari keluarga bangsawan kaya; ayahnya bernama Gordianus dan ibunya Silvia. Sekitar tahun 573, ketika baru berusia sekitar tiga puluh tahun, ia menjabat sebagai prefek kota Roma. Tak lama kemudian ia meninggalkan jabatan itu untuk menjadi rahib. Tanah warisannya di Sisilia ia gunakan untuk mendirikan enam biara, dan rumahnya di Bukit Caelius dijadikan Biara St. Andreas. Pada tahun 578 paus menahbiskannya menjadi diakon, lalu mengutusnya sebagai wakil paus di Konstantinopel selama sekitar enam tahun. Ketika Roma dilanda wabah dan Paus Pelagius II wafat, Gregorius dipilih menjadi paus dan ditahbiskan pada 3 September 590. Ia mengurus para pengungsi dan orang miskin, berunding dengan bangsa Lombardia demi perdamaian, membarui liturgi, dan mengutus Agustinus beserta para rahib untuk mewartakan Injil kepada bangsa Anglo-Saxon di Inggris. Ia banyak menulis, antara lain buku tentang tugas para gembala, Dialog-dialog, dan homili-homili. Ia wafat pada 12 Maret 604. Ia termasuk salah satu dari empat Pujangga Gereja Latin yang besar dan dijuluki \"Agung\" oleh umat.",
    "example": [
      "Menggunakan kedudukan untuk melayani, bukan untuk dilayani.",
      "Peduli pada pengungsi dan orang miskin di sekitar kita.",
      "Menyediakan waktu hening untuk berdoa di tengah kesibukan."
    ],
    "patron": [],
    "keywords": [
      "gregory the great",
      "gregorius agung",
      "paus",
      "gregorian",
      "roma",
      "pujangga gereja",
      "biara"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/09/03.html",
      "https://www.newadvent.org/cathen/06780a.htm"
    ]
  },
  {
    "id": "st-mother-teresa",
    "date": "09-05",
    "name": "St. Teresa dari Kalkuta, Perawan",
    "role": "Biarawati, Pendiri Misionaris Cinta Kasih",
    "years": "1910–1997",
    "rank": "optional",
    "color": "white",
    "story": "Gonxha Agnes Bojaxhiu lahir pada 26 Agustus 1910 di Skopje sebagai anak bungsu dari keluarga Albania. Ayahnya meninggal mendadak ketika ia berusia sekitar delapan tahun. Pada bulan September 1928 ia bergabung dengan Suster-suster Loreto di Irlandia dan menerima nama Suster Maria Teresa. Pada 6 Januari 1929 ia tiba di Kalkuta, India, dan bertahun-tahun mengajar di sekolah putri St. Mary, kemudian menjadi kepala sekolahnya. Pada 10 September 1946, dalam perjalanan kereta api ke Darjeeling untuk retret, ia mengalami \"panggilan dalam panggilan\" untuk melayani orang yang paling miskin. Pada 17 Agustus 1948 ia meninggalkan biara Loreto dan mulai bekerja di perkampungan kumuh dengan sari putih bergaris biru. Pada 7 Oktober 1950 Kongregasi Misionaris Cinta Kasih resmi didirikan di Keuskupan Agung Kalkuta. Karya ini menyebar ke seluruh dunia; pada tahun 1997 sudah ada 610 rumah di 123 negara. Ia menerima Hadiah Nobel Perdamaian pada tahun 1979. Setelah wafatnya diketahui bahwa ia lama mengalami \"kegelapan\" batin, namun tetap setia melayani. Ia wafat di Kalkuta pada 5 September 1997, dibeatifikasi pada tahun 2003, dan dikanonisasi oleh Paus Fransiskus pada tahun 2016.",
    "example": [
      "Melakukan hal-hal kecil dengan cinta yang besar, terutama bagi orang yang terlupakan.",
      "Melihat wajah Yesus dalam diri orang miskin, sakit, dan kesepian.",
      "Tetap setia berdoa dan melayani walaupun merasa kering secara rohani."
    ],
    "patron": [],
    "keywords": [
      "mother teresa",
      "bunda teresa",
      "teresa kalkuta",
      "calcutta",
      "kolkata",
      "misionaris cinta kasih",
      "orang miskin"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/09/05.html",
      "https://www.vatican.va/news_services/liturgy/saints/ns_lit_doc_20031019_madre-teresa_en.html"
    ]
  },
  {
    "id": "nativity-virgin-mary",
    "date": "09-08",
    "name": "Pesta Kelahiran SP Maria",
    "role": "Pesta Santa Perawan Maria",
    "years": "",
    "rank": "feast",
    "color": "white",
    "story": "Kitab Suci tidak menceritakan kelahiran Maria. Kisahnya dikenal dari tulisan-tulisan apokrif, terutama Protoevangelium Yakobus; menurut tradisi, orang tua Maria bernama Yoakim dan Ana. Pesta Kelahiran Santa Perawan Maria berasal dari Gereja Timur. Dokumen tertua yang memperingatinya berasal dari abad ke-6: St. Romanus Melodos, penyair gerejawi Yunani, menggubah sebuah madah untuk pesta ini. Pesta ini mungkin mulai dirayakan di Siria atau Palestina pada awal abad ke-6, ketika penghormatan kepada Bunda Allah semakin berkembang sesudah Konsili Efesus. Pada awal abad ke-8 St. Andreas dari Kreta menyampaikan beberapa khotbah pada pesta ini. Tidak diketahui dengan pasti mengapa tanggal 8 September yang dipilih. Gereja Roma menerima pesta ini dari Timur pada abad ke-7, dan Paus Sergius I (687–701) menetapkan litani dan perarakan untuk merayakannya. Karena kisah kelahiran Maria hanya diketahui dari sumber apokrif, Gereja Latin agak lambat menerimanya, tetapi lambat laun pesta ini dirayakan di seluruh Gereja. Kelahiran Maria dirayakan sebagai fajar keselamatan, karena dari dialah akan lahir Kristus, Sang Penebus.",
    "example": [
      "Mensyukuri setiap kehidupan baru sebagai anugerah Tuhan.",
      "Menghormati peran orang tua dan kakek-nenek dalam meneruskan iman.",
      "Merayakan hari ulang tahun dengan bersyukur kepada Tuhan."
    ],
    "patron": [],
    "keywords": [
      "nativity of mary",
      "kelahiran maria",
      "maria",
      "yoakim",
      "ana",
      "8 september",
      "bunda maria"
    ],
    "sources": [
      "https://www.newadvent.org/cathen/10712b.htm"
    ]
  },
  {
    "id": "st-peter-claver",
    "date": "09-09",
    "name": "St. Petrus Klaver",
    "role": "Imam Yesuit, Rasul Para Budak",
    "years": "1581–1654",
    "rank": "optional",
    "color": "white",
    "story": "Petrus Klaver lahir pada tahun 1581 di Verdú, Katalonia, Spanyol, sebagai anak seorang petani. Ia belajar di Universitas Barcelona, lalu pada usia dua puluh tahun masuk novisiat Serikat Yesus di Tarragona. Ketika belajar filsafat di Mallorca, ia bersahabat dengan St. Alfonsus Rodriguez, penjaga pintu kolese yang saleh, yang terus mendorongnya untuk menjadi misionaris di Amerika. Pada tahun 1610 ia tiba di Cartagena, Kolombia, pelabuhan utama perdagangan budak di Dunia Baru, tempat sekitar seribu orang Afrika diturunkan setiap bulan. Ia menyatakan diri sebagai \"budak orang-orang Negro untuk selamanya\". Setiap kali kapal budak tiba, ia naik ke kapal membawa makanan, merawat yang sakit, dan menghibur mereka. Dengan bantuan para penerjemah ia mengajar agama dan membaptis mereka, serta membela mereka terhadap penindasan. Karyanya mendapat banyak kritik, bahkan dari kalangan terhormat di kota itu, tetapi ia tetap setia selama sekitar empat puluh tahun dan membaptis sekitar 300.000 orang. Ia wafat pada 8 September 1654 dan dikanonisasi oleh Paus Leo XIII pada tahun 1888.",
    "example": [
      "Membela martabat orang yang direndahkan dan ditindas.",
      "Melayani yang menderita dengan tindakan nyata, bukan hanya kata-kata.",
      "Tetap setia berbuat baik walaupun dikritik."
    ],
    "patron": [
      "misi di antara orang Afrika"
    ],
    "keywords": [
      "peter claver",
      "petrus klaver",
      "cartagena",
      "kolombia",
      "budak",
      "yesuit",
      "perbudakan"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/09/09.html",
      "https://www.newadvent.org/cathen/11763a.htm"
    ]
  },
  {
    "id": "holy-name-mary",
    "date": "09-12",
    "name": "Nama SP Maria yang Tersuci",
    "role": "Peringatan Santa Perawan Maria",
    "years": "",
    "rank": "optional",
    "color": "white",
    "story": "Dalam Perjanjian Baru, nama Bunda Yesus ditulis Mariam atau Maria, yang berasal dari nama Ibrani Miryam, nama saudari Musa dan Harun. Arti nama ini sulit dipastikan; para ahli mengusulkan puluhan kemungkinan arti. Para Bapa Gereja sering mengartikannya sebagai \"Puan\" atau \"Nyonya\", yang tercermin dalam sebutan \"Bunda kita\". Sejak awal, nama Maria menjadi salah satu nama baptis yang paling banyak dipakai umat Katolik, dan banyak biarawan-biarawati menambahkannya pada nama biara mereka. Pesta untuk menghormati Nama Maria mulai dirayakan di Spanyol pada tahun 1513. Pada tahun 1671 pesta ini diperluas ke seluruh Spanyol dan Kerajaan Napoli. Pada tahun 1683 Raja Polandia Yohanes Sobieski, yang mempercayakan diri kepada Bunda Maria, mengalahkan pasukan Turki Usmani di dekat Wina; untuk mensyukurinya, Paus Inosensius XI memperluas pesta ini ke seluruh Gereja. Dalam pembaruan kalender liturgi tahun 1969 pesta ini dihapus dari kalender umum karena dianggap serupa dengan Pesta Kelahiran Maria pada 8 September, tetapi kemudian dipulihkan sebagai peringatan fakultatif dalam Misale Romawi edisi tahun 2002.",
    "example": [
      "Menyebut nama Yesus dan Maria dengan hormat dan penuh kasih.",
      "Berdoa Salam Maria dengan sadar dan perlahan.",
      "Mengandalkan pertolongan Bunda Maria ketika menghadapi ancaman atau kesulitan."
    ],
    "patron": [],
    "keywords": [
      "holy name of mary",
      "nama maria",
      "maria",
      "wina",
      "vienna",
      "sobieski",
      "salam maria"
    ],
    "sources": [
      "https://www.newadvent.org/cathen/09753a.htm",
      "https://www.franciscanmedia.org/saint-of-the-day/most-holy-name-of-the-blessed-virgin-mary/"
    ]
  },
  {
    "id": "st-john-chrysostom",
    "date": "09-13",
    "name": "St. Yohanes Krisostomus",
    "role": "Uskup dan Pujangga Gereja",
    "years": "± 347–407",
    "rank": "memorial",
    "color": "white",
    "story": "Yohanes lahir di Antiokhia, Siria, sekitar tahun 347. Ia belajar retorika pada Libanius, orator paling terkenal pada masanya. Sekitar tahun 367 ia bertemu Uskup Meletius, yang sangat memengaruhinya sehingga ia meninggalkan ambisi duniawi dan menempuh hidup askese. Kira-kira tiga tahun kemudian ia dibaptis dan diangkat menjadi lektor. Ia sempat hidup sebagai pertapa di gua-gua dekat Antiokhia. Pada tahun 386 ia ditahbiskan menjadi imam oleh Uskup Flavianus, dan selama dua belas tahun ia berkhotbah di Antiokhia. Khotbahnya begitu memikat sehingga ia kemudian dijuluki \"Krisostomus\", artinya \"mulut emas\". Pada 26 Februari 398 ia ditahbiskan menjadi Uskup Konstantinopel. Ia membarui kehidupan klerus, menolong orang miskin, dan dengan tegas mengecam kemewahan dan ketidakadilan, termasuk di kalangan istana. Karena itu ia mendapat banyak musuh, terutama Permaisuri Eudoksia dan Patriark Teofilus dari Aleksandria. Ia diturunkan dan dibuang ke pengasingan. Dalam perjalanan ke tempat pembuangan yang lebih jauh, ia wafat di Komana, Pontus, pada 14 September 407. Ia adalah salah satu Bapa Gereja yang paling banyak menulis.",
    "example": [
      "Mewartakan Injil dengan jelas dan berani, termasuk menegur ketidakadilan.",
      "Menolong orang miskin sebagai bagian dari ibadah kita.",
      "Menerima penderitaan dan ketidakadilan dengan sabar."
    ],
    "patron": [],
    "keywords": [
      "john chrysostom",
      "krisostomus",
      "chrysostom",
      "mulut emas",
      "konstantinopel",
      "antiokhia",
      "khotbah"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/09/13.html",
      "https://www.newadvent.org/cathen/08452b.htm"
    ]
  },
  {
    "id": "our-lady-of-sorrows",
    "date": "09-15",
    "name": "SP Maria Berdukacita",
    "role": "Peringatan Santa Perawan Maria",
    "years": "",
    "rank": "memorial",
    "color": "white",
    "story": "Peringatan ini merenungkan penderitaan rohani Bunda Allah dan belarasanya dengan sengsara Putranya. Pada tahun 1239, Tujuh Pendiri Ordo Hamba-hamba Maria (Servit) menjadikan dukacita Maria di bawah salib sebagai devosi utama ordo mereka. Pesta pertama untuk mengenang dukacita Maria ditetapkan oleh sinode provinsi di Köln pada tahun 1413. Kemudian pesta ini menyebar ke berbagai keuskupan dengan nama dan tanggal yang berbeda-beda. Pada tahun 1727 Paus Benediktus XIII memperluas pesta Tujuh Dukacita Maria pada hari Jumat sebelum Minggu Palma ke seluruh Gereja Latin. Pada tahun 1668 Ordo Servit mendapat izin merayakan pesta kedua pada bulan September, yang kemudian diperluas ke seluruh Gereja oleh Paus Pius VII pada tahun 1814 setelah ia kembali dari pembuangan di Prancis. Tujuh dukacita yang direnungkan adalah: nubuat Simeon, pengungsian ke Mesir, Yesus hilang di Yerusalem, perjumpaan dengan Yesus di jalan salib, Maria berdiri di bawah salib, Yesus diturunkan dari salib, dan pemakaman Yesus. Dalam liturgi dinyanyikan madah Stabat Mater. Kini peringatan ini dirayakan pada 15 September, sehari setelah Pesta Salib Suci.",
    "example": [
      "Setia mendampingi orang yang menderita, seperti Maria di bawah salib.",
      "Mempersembahkan duka dan kehilangan kepada Tuhan dengan iman.",
      "Berdoa Rosario Tujuh Dukacita untuk menghibur mereka yang sedang bersedih."
    ],
    "patron": [],
    "keywords": [
      "our lady of sorrows",
      "maria berdukacita",
      "mater dolorosa",
      "tujuh dukacita",
      "servit",
      "stabat mater"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/09/15.html",
      "https://www.newadvent.org/cathen/14151b.htm"
    ]
  },
  {
    "id": "sts-cornelius-cyprian",
    "date": "09-16",
    "name": "St. Kornelius, Paus, dan St. Siprianus, Uskup, Martir",
    "role": "Paus dan Uskup, Martir",
    "years": "† 253 dan † 258",
    "rank": "memorial",
    "color": "white",
    "story": "Kornelius menjadi Uskup Roma pada tahun 251, setelah penganiayaan Kaisar Decius agak mereda. Saat itu Gereja bergumul dengan persoalan orang-orang yang murtad selama penganiayaan (lapsi) dan ingin kembali. Kornelius mengizinkan mereka diterima kembali setelah menjalani tobat. Beberapa minggu setelah ia terpilih, imam Novasianus, yang menolak pengampunan bagi mereka, mengangkat diri menjadi paus tandingan sehingga terjadi perpecahan. Uskup Siprianus dari Kartago mendukung Kornelius dengan teguh. Kornelius kemudian dibuang ke Centumcellae (Civitavecchia) dan wafat di sana pada bulan Juni 253 sebagai martir. Siprianus adalah seorang orator terkemuka di Kartago, Afrika Utara, yang bertobat dan dibaptis sekitar tahun 246. Tak lama kemudian ia dipilih menjadi uskup Kartago. Selama penganiayaan Decius ia bersembunyi agar dapat terus menggembalakan umat melalui surat. Ketika wabah melanda Kartago pada tahun 252, ia mengorganisasi umat untuk merawat orang sakit dan menguburkan yang mati. Ia menulis tentang kesatuan Gereja dan tentang Doa Bapa Kami. Pada masa penganiayaan Kaisar Valerianus ia dibuang ke Curubis, lalu dipenggal di Kartago pada 14 September 258.",
    "example": [
      "Menjaga kesatuan Gereja dan menghindari perpecahan.",
      "Memberi kesempatan kedua kepada orang yang ingin bertobat.",
      "Bergotong royong menolong sesama saat terjadi wabah atau bencana."
    ],
    "patron": [],
    "keywords": [
      "cornelius",
      "kornelius",
      "cyprian",
      "siprianus",
      "kartago",
      "carthage",
      "lapsi",
      "novasianus"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/09/16.html",
      "https://www.newadvent.org/cathen/04375c.htm",
      "https://www.newadvent.org/cathen/04583b.htm"
    ]
  },
  {
    "id": "st-hildegard-bingen",
    "date": "09-17",
    "name": "St. Hildegardis dari Bingen, Perawan dan Pujangga Gereja",
    "role": "Abdis dan Pujangga Gereja",
    "years": "1098–1179",
    "rank": "optional",
    "color": "white",
    "story": "Hildegardis lahir pada tahun 1098 di Böckelheim, di tepi Sungai Nahe, Jerman, dari keluarga bangsawan. Ia anak yang lemah dan sering sakit. Pada usia delapan tahun ia diserahkan kepada Jutta, seorang pertapa di Disibodenberg, untuk dididik. Ia belajar membaca dan menyanyikan mazmur dalam bahasa Latin, lalu mengikrarkan kaul sebagai biarawati Benediktin. Setelah Jutta wafat pada tahun 1136, Hildegardis dipilih menjadi pemimpin komunitas. Sejak kecil ia mengalami penglihatan-penglihatan rohani. Ketika berusia sekitar empat puluh tahun ia merasa diperintahkan untuk menuliskannya; hasilnya antara lain buku Scivias (\"Ketahuilah Jalan-jalan Tuhan\"). Paus Eugenius III, yang berada di Trier pada tahun 1147, mengetahui tulisan-tulisannya. Sekitar tahun 1147–1150 ia mendirikan biara di Rupertsberg dekat Bingen, dan kemudian biara kedua di Eibingen. Ia juga menggubah musik liturgi, menulis tentang alam dan pengobatan, serta mengirim ratusan surat kepada paus, uskup, penguasa, dan orang biasa. Ia berkhotbah di banyak kota, seperti Köln, Trier, dan Mainz. Ia wafat di Rupertsberg pada 17 September 1179. Pada 7 Oktober 2012 Paus Benediktus XVI menyatakannya sebagai Pujangga Gereja.",
    "example": [
      "Memuji Tuhan melalui musik dan keindahan ciptaan.",
      "Merawat kesehatan tubuh dan jiwa sebagai anugerah Tuhan.",
      "Berani menyampaikan kebenaran dengan kasih kepada siapa pun."
    ],
    "patron": [],
    "keywords": [
      "hildegard",
      "hildegardis",
      "bingen",
      "benediktin",
      "scivias",
      "musik",
      "pujangga gereja"
    ],
    "sources": [
      "https://www.newadvent.org/cathen/07351a.htm",
      "https://www.vatican.va/content/benedict-xvi/en/apost_letters/documents/hf_ben-xvi_apl_20121007_ildegarda-bingen.html"
    ]
  },
  {
    "id": "st-robert-bellarmine",
    "date": "09-17",
    "name": "St. Robertus Bellarminus",
    "role": "Uskup, Kardinal, dan Pujangga Gereja",
    "years": "1542–1621",
    "rank": "optional",
    "color": "white",
    "story": "Robertus Bellarminus lahir pada 4 Oktober 1542 di Montepulciano, Italia. Ibunya adalah saudari Kardinal Marcello Cervini, yang kemudian menjadi Paus Marselus II. Pada tahun 1560 ia masuk Serikat Yesus. Ia belajar filsafat di Kolese Roma dan teologi di Padua dan Leuven, lalu ditahbiskan menjadi imam di Leuven. Di sana ia terkenal sebagai dosen dan pengkhotbah yang menarik baik umat Katolik maupun Protestan. Pada tahun 1576 ia dipanggil ke Roma untuk mengajar teologi kontroversi; kuliah-kuliahnya kemudian dibukukan menjadi karya besar De Controversiis yang menjelaskan ajaran Katolik dalam perdebatan dengan para Reformator. Ia menjadi pembimbing rohani di Kolese Roma dan mendampingi St. Aloysius Gonzaga pada tahun-tahun terakhir hidupnya. Ia ikut dalam komisi revisi Kitab Suci Vulgata. Pada tahun 1599 ia diangkat menjadi kardinal, dan kemudian sebentar menjadi Uskup Agung Capua. Walaupun berkedudukan tinggi, ia hidup sederhana, rendah hati, dan sangat murah hati kepada orang miskin. Ia wafat pada 17 September 1621, dikanonisasi oleh Paus Pius XI pada tahun 1930, dan dinyatakan sebagai Pujangga Gereja pada tahun 1931.",
    "example": [
      "Belajar iman Katolik secara mendalam agar dapat menjelaskannya dengan tenang dan hormat.",
      "Hidup sederhana walaupun memiliki jabatan atau kemampuan lebih.",
      "Murah hati kepada orang miskin."
    ],
    "patron": [],
    "keywords": [
      "robert bellarmine",
      "bellarminus",
      "bellarmino",
      "yesuit",
      "kardinal",
      "pujangga gereja",
      "de controversiis"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/09/17.html",
      "https://www.newadvent.org/cathen/02411d.htm"
    ]
  },
  {
    "id": "st-januarius",
    "date": "09-19",
    "name": "St. Yanuarius, Uskup dan Martir",
    "role": "Uskup dan Martir",
    "years": "† ± 305",
    "rank": "optional",
    "color": "white",
    "story": "Yanuarius adalah Uskup Benevento, Italia selatan. Ia diyakini wafat sebagai martir dalam penganiayaan Kaisar Diokletianus sekitar tahun 305. Menurut Ensiklopedia Katolik, hampir tidak ada yang diketahui dengan pasti tentang riwayat hidupnya, karena kisah-kisah kemartirannya ditulis jauh kemudian. Martirologi Romawi mencatat bahwa di Pozzuoli, Campania, Uskup Yanuarius bersama diakonnya Festus, lektor Desiderius, dan beberapa orang lain dipenggal setelah dirantai dan dipenjara. Menurut tradisi, ia sebelumnya dilemparkan ke dalam tungku api dan kepada binatang buas, tetapi tidak terluka. Jenazahnya akhirnya dibawa ke Napoli dan dimakamkan di gereja katedral. Ia sangat dihormati di Napoli; umat percaya bahwa doa perantaraannya melindungi kota itu dari letusan Gunung Vesuvius. Ia terutama terkenal karena darahnya yang disimpan dalam ampul kaca di Katedral Napoli. Selama lebih dari empat ratus tahun, darah yang kering itu berulang kali mencair ketika didekatkan pada relikui kepalanya. Peristiwa ini masih dirayakan oleh umat Napoli setiap tahun, terutama pada pestanya tanggal 19 September.",
    "example": [
      "Tetap setia kepada Kristus sampai akhir, bersama rekan-rekan sepelayanan.",
      "Menghormati relikui dan para martir sebagai saksi iman.",
      "Mempercayakan kota dan lingkungan kita kepada perlindungan Tuhan."
    ],
    "patron": [
      "Napoli"
    ],
    "keywords": [
      "januarius",
      "yanuarius",
      "gennaro",
      "san gennaro",
      "napoli",
      "naples",
      "benevento",
      "martir"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/09/19.html",
      "https://www.newadvent.org/cathen/08295a.htm"
    ]
  },
  {
    "id": "st-andrew-kim-taegon",
    "date": "09-20",
    "name": "St. Andreas Kim Tae-gon, Imam, St. Paulus Chong Ha-sang, dan Kawan-kawan, Martir Korea",
    "role": "Martir",
    "years": "† 1839–1867",
    "rank": "memorial",
    "color": "white",
    "story": "Gereja Katolik di Korea lahir dengan cara yang unik: iman Kristen dibawa dan disebarkan oleh kaum awam. Selama bertahun-tahun Gereja di sana hidup tanpa imam dan dipimpin oleh umat awam. Pada abad ke-19 umat Katolik Korea mengalami penganiayaan berat, terutama antara tahun 1839 dan 1867. Paulus Chong Ha-sang adalah seorang awam yang telah berkeluarga dan menjadi rasul awam. Ia wafat sebagai martir pada tahun 1839 dalam usia 45 tahun. Andreas Kim Tae-gon adalah imam pertama yang lahir di Korea. Ayahnya, Ignatius Kim, juga mati sebagai martir pada tahun 1839. Andreas belajar di Makau dan ditahbiskan menjadi imam di Shanghai. Setelah kembali ke tanah airnya untuk melayani umat, ia ditangkap dan dipenggal di tepi Sungai Han dekat Seoul pada 16 September 1846. Pada tahun 1984, dalam kunjungannya ke Korea, Paus Yohanes Paulus II mengkanonisasi 103 martir Korea, termasuk Andreas, Paulus, dan tiga misionaris Prancis. Kesaksian mereka yang berani menjadi dasar Gereja di Korea.",
    "example": [
      "Menyadari tanggung jawab kaum awam untuk mewartakan dan menjaga iman.",
      "Mendoakan dan mendukung panggilan imam.",
      "Tetap setia pada iman walaupun menghadapi tekanan atau diskriminasi."
    ],
    "patron": [],
    "keywords": [
      "andrew kim",
      "kim taegon",
      "andreas kim",
      "paul chong hasang",
      "martir korea",
      "korea",
      "seoul"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/09/20.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saints-andrew-kim-taegon-paul-chong-hasang-and-companions/"
    ]
  },
  {
    "id": "st-matthew-evangelist",
    "date": "09-21",
    "name": "St. Matius, Rasul dan Penginjil",
    "role": "Rasul dan Penginjil",
    "years": "abad ke-1",
    "rank": "feast",
    "color": "red",
    "story": "Matius, yang juga disebut Lewi, adalah seorang pemungut cukai. Ia orang Yahudi yang memungut pajak dari sesama bangsanya untuk kepentingan penguasa Romawi, sehingga para pemungut cukai umumnya dibenci dan dianggap pengkhianat serta orang berdosa. Suatu hari Yesus melihatnya duduk di rumah cukai dan berkata, \"Ikutlah Aku.\" Matius segera berdiri dan mengikuti Dia (Mat 9:9). Ia lalu mengadakan perjamuan di rumahnya, yang dihadiri banyak pemungut cukai dan orang berdosa. Ketika orang Farisi mengecam hal itu, Yesus menjawab bahwa Ia datang bukan untuk memanggil orang benar, melainkan orang berdosa (Mat 9:13). Matius kemudian menjadi salah satu dari dua belas rasul. Selain kisah panggilannya, Perjanjian Baru tidak mencatat peristiwa khusus lain tentang dirinya. Menurut tradisi Gereja, ia adalah penulis Injil Matius, yang menekankan bahwa Yesus adalah Mesias yang dinubuatkan dalam Perjanjian Lama. Tradisi-tradisi kuno tentang tempat pewartaannya dan cara wafatnya berbeda-beda, tetapi Gereja menghormatinya sebagai rasul dan martir.",
    "example": [
      "Segera menanggapi panggilan Tuhan tanpa menunda-nunda.",
      "Jujur dalam urusan uang dan pekerjaan.",
      "Menyambut orang yang dianggap berdosa atau tersisih dengan ramah."
    ],
    "patron": [
      "akuntan",
      "bankir",
      "pemungut pajak"
    ],
    "keywords": [
      "matthew",
      "matius",
      "lewi",
      "levi",
      "pemungut cukai",
      "injil",
      "penginjil",
      "rasul"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/09/21.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-matthew/"
    ]
  },
  {
    "id": "st-pio-pietrelcina",
    "date": "09-23",
    "name": "St. Pius dari Pietrelcina (Padre Pio)",
    "role": "Imam Kapusin",
    "years": "1887–1968",
    "rank": "memorial",
    "color": "white",
    "story": "Francesco Forgione lahir pada 25 Mei 1887 di desa Pietrelcina, Italia selatan, dari keluarga petani. Pada usia 15 tahun ia masuk Ordo Fransiskan Kapusin dan menerima nama Pio. Ia ditahbiskan menjadi imam pada tahun 1910. Kesehatannya sering terganggu. Pada tahun 1917 ia ditugaskan di biara San Giovanni Rotondo, dan di sanalah ia tinggal sampai akhir hayatnya. Pada 20 September 1918, ketika berdoa setelah Misa, ia menerima stigmata, luka-luka Kristus pada tubuhnya. Hal ini menarik ribuan orang datang kepadanya. Ia dikenal sebagai bapa pengakuan yang luar biasa: setiap hari ia mendengarkan pengakuan dosa berjam-jam, sampai sepuluh jam sehari. Keaslian stigmatanya sempat diselidiki, dan pada tahun 1924 dan 1931 ia dilarang merayakan Misa secara publik dan mendengarkan pengakuan dosa; keputusan itu kemudian dicabut. Ia menerima semua itu dengan taat. Ia juga memprakarsai pembangunan rumah sakit \"Rumah untuk Meringankan Penderitaan\" di San Giovanni Rotondo, yang mulai dibangun pada tahun 1946. Ia wafat pada 23 September 1968, dibeatifikasi pada tahun 1999, dan dikanonisasi oleh Paus Yohanes Paulus II pada 16 Juni 2002.",
    "example": [
      "Rajin menerima Sakramen Tobat dan merayakan Ekaristi dengan khidmat.",
      "Taat dan sabar ketika disalahpahami.",
      "Menolong orang sakit dan menderita, termasuk melalui doa."
    ],
    "patron": [],
    "keywords": [
      "padre pio",
      "pio",
      "pietrelcina",
      "san giovanni rotondo",
      "kapusin",
      "stigmata",
      "pengakuan dosa"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/09/23.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-pio-of-pietrelcina/"
    ]
  },
  {
    "id": "sts-cosmas-damian",
    "date": "09-26",
    "name": "St. Kosmas dan Damianus, Martir",
    "role": "Dokter dan Martir",
    "years": "† ± 287",
    "rank": "optional",
    "color": "red",
    "story": "Kosmas dan Damianus adalah dokter Kristen pada Gereja perdana. Menurut tradisi, mereka saudara kembar yang lahir di Arab dan berpraktik di kota pelabuhan Aegeae di Kilikia, Asia Kecil (kini wilayah Turki). Mereka terkenal karena keahliannya, tetapi tidak pernah meminta bayaran dari pasien. Karena itu mereka disebut anargyroi, \"yang tidak menerima uang\". Melalui pelayanan yang tulus itu banyak orang menjadi Kristen. Ketika penganiayaan Diokletianus dimulai, Prefek Lisias menangkap mereka dan memerintahkan mereka menyangkal iman. Mereka tetap teguh di bawah siksaan dan akhirnya dipenggal dengan pedang, kemungkinan pada tahun 287. Menurut tradisi, tiga saudara mereka juga mati sebagai martir bersama mereka. Kemudian banyak kisah legendaris berkembang seputar mereka. Jenazah mereka dimakamkan di kota Kirus, Siria. Kaisar Yustinianus I, yang sembuh dari sakit berat berkat doa perantaraan mereka, membangun kembali gereja mereka di Konstantinopel. Di Roma, Paus Feliks IV mendirikan gereja untuk menghormati mereka. Nama mereka disebut dalam Doa Syukur Agung I (Kanon Romawi) dan Litani Para Kudus.",
    "example": [
      "Melayani orang sakit dengan tulus, bukan semata-mata demi keuntungan.",
      "Menggunakan keahlian profesional sebagai sarana kesaksian iman.",
      "Membantu pengobatan orang yang tidak mampu."
    ],
    "patron": [
      "dokter",
      "ahli bedah"
    ],
    "keywords": [
      "cosmas",
      "damian",
      "kosmas",
      "damianus",
      "dokter",
      "anargyroi",
      "martir",
      "kembar"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/09/26.html",
      "https://www.newadvent.org/cathen/04403e.htm"
    ]
  },
  {
    "id": "st-vincent-de-paul",
    "date": "09-27",
    "name": "St. Vinsensius a Paulo",
    "role": "Imam, Pendiri Kongregasi Misi dan Puteri Kasih",
    "years": "1580–1660",
    "rank": "memorial",
    "color": "white",
    "story": "Vinsensius lahir di Pouy, Gascogne, Prancis, pada tahun 1580 (ada sumber yang menyebut 1576) dari keluarga petani. Setelah ditahbiskan menjadi imam, pada tahun 1605 ia ditangkap bajak laut dalam pelayaran dan dijual sebagai budak di Tunis. Pada tahun 1607 ia berhasil melarikan diri bersama tuannya, yang berhasil ia bawa kembali kepada iman. Ia kemudian menjadi pastor paroki di Clichy dekat Paris, lalu menjadi pendidik di keluarga bangsawan de Gondi. Bersama Nyonya de Gondi ia mulai memberikan misi umat kepada para petani miskin. Ia juga melayani para narapidana yang dipaksa bekerja di kapal-kapal dayung dalam keadaan yang sangat menyedihkan. Untuk mewartakan Injil kepada orang miskin di pedesaan, ia mendirikan Kongregasi Misi (para Lazaris) pada tahun 1625. Ia juga mendirikan Puteri-puteri Kasih bersama St. Louise de Marillac, serta perkumpulan Ibu-ibu Kasih. Karya-karyanya meliputi perawatan bayi terlantar, orang sakit, dan pembinaan para calon imam. Ia wafat di Paris pada 27 September 1660 dan dihormati sebagai pelindung semua perkumpulan karya kasih.",
    "example": [
      "Melihat Kristus dalam diri orang miskin dan melayani mereka secara nyata.",
      "Mengorganisasi karya kasih bersama orang lain agar lebih berdaya guna.",
      "Peduli kepada narapidana dan anak-anak terlantar."
    ],
    "patron": [
      "perkumpulan karya kasih"
    ],
    "keywords": [
      "vincent de paul",
      "vinsensius",
      "vincentius",
      "lazaris",
      "puteri kasih",
      "kongregasi misi",
      "cm",
      "orang miskin"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/09/27.html",
      "https://www.newadvent.org/cathen/15434c.htm"
    ]
  },
  {
    "id": "st-wenceslaus",
    "date": "09-28",
    "name": "St. Wenseslaus, Martir",
    "role": "Adipati dan Martir",
    "years": "± 903/907–935",
    "rank": "optional",
    "color": "red",
    "story": "Wenseslaus (Václav) lahir di Bohemia pada awal abad ke-10; Ensiklopedia Katolik menyebut sekitar tahun 903, sedangkan Vatican News menyebut tahun 907 di Praha. Ayahnya, Adipati Vratislav, adalah seorang Kristen, sedangkan ibunya, Drahomíra, belum dibaptis. Ia mendapat pendidikan Kristen yang baik dari neneknya, St. Ludmila. Setelah ayahnya wafat, ibunya yang memerintah sebagai wali menentang agama Kristen. Rakyat pun mendesak Wenseslaus yang masih muda untuk mengambil alih pemerintahan. Sebagai adipati Bohemia, ia mendukung penyebaran iman Kristen, mendatangkan para imam, dan dikenal karena kesalehan dan kebajikannya. Menurut Vatican News, ia pernah lebih memilih berdamai dengan musuhnya dengan menawarkan duel pribadi daripada mengorbankan rakyat dalam perang. Karena alasan agama dan politik, dan atas hasutan ibunya, ia dibunuh oleh adiknya sendiri, Boleslav, di Stará Boleslav pada 28 September 935. Beberapa tahun kemudian Boleslav menyesali perbuatannya dan memindahkan jenazah Wenseslaus ke Gereja St. Vitus di Praha. Ia dihormati sebagai martir dan pelindung bangsa Ceko.",
    "example": [
      "Menjadikan iman sebagai dasar dalam memimpin.",
      "Mengutamakan jalan damai daripada kekerasan.",
      "Mengampuni dan tetap mengasihi anggota keluarga yang memusuhi kita."
    ],
    "patron": [
      "Bohemia"
    ],
    "keywords": [
      "wenceslaus",
      "wenseslaus",
      "vaclav",
      "bohemia",
      "praha",
      "ceko",
      "martir",
      "adipati"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/09/28.html",
      "https://www.newadvent.org/cathen/15587b.htm"
    ]
  },
  {
    "id": "sts-lawrence-ruiz",
    "date": "09-28",
    "name": "St. Laurensius Ruiz dan Kawan-kawan, Martir",
    "role": "Awam dan Martir",
    "years": "± 1600–1637",
    "rank": "optional",
    "color": "red",
    "story": "Lorenzo Ruiz lahir di Manila, Filipina, sekitar tahun 1600, dari ayah Tionghoa dan ibu Filipina yang keduanya beragama Katolik. Ia belajar bahasa Tionghoa dan Tagalog dari orang tuanya, serta bahasa Spanyol dari para imam Dominikan, tempat ia melayani sebagai putra altar dan koster. Ia bekerja sebagai juru tulis kaligrafi dan menjadi anggota Persaudaraan Rosario Suci. Ia menikah dan dikaruniai dua putra dan seorang putri. Suatu ketika ia dituduh terlibat dalam sebuah pembunuhan dan dicari oleh penguasa. Ia lalu ikut berlayar bersama tiga imam Dominikan yang menuju Jepang, padahal di sana orang Kristen sedang dianiaya. Mereka mendarat di Okinawa, lalu ditangkap dan dibawa ke Nagasaki. Mereka disiksa dengan kejam agar menyangkal iman. Lorenzo tetap teguh dan tidak mau menyangkal imannya. Mereka digantung terbalik di dalam lubang; Lorenzo wafat setelah tiga hari, sekitar 29 atau 30 September 1637. Pada tahun 1987 Paus Yohanes Paulus II mengkanonisasinya bersama para martir lain dari berbagai bangsa yang wafat di Jepang pada abad ke-17. Ia adalah martir Filipina pertama yang dinyatakan kudus.",
    "example": [
      "Tetap setia kepada Kristus di tengah ketakutan dan penderitaan.",
      "Berdoa Rosario bersama keluarga.",
      "Menguatkan saudara seiman yang sedang lemah imannya."
    ],
    "patron": [
      "Filipina"
    ],
    "keywords": [
      "lorenzo ruiz",
      "laurensius ruiz",
      "filipina",
      "manila",
      "nagasaki",
      "jepang",
      "martir",
      "dominikan"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/09/28.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-lorenzo-ruiz-and-companions/"
    ]
  },
  {
    "id": "sts-archangels",
    "date": "09-29",
    "name": "St. Mikael, St. Gabriel, dan St. Rafael, Malaikat Agung",
    "role": "Malaikat Agung",
    "years": "",
    "rank": "feast",
    "color": "white",
    "story": "Pada hari ini Gereja menghormati tiga malaikat agung yang namanya disebut dalam Kitab Suci. Mikael berarti \"Siapakah seperti Allah?\". Namanya muncul dalam Kitab Daniel sebagai pemimpin besar yang melindungi umat Allah, dalam Surat Yudas yang menyebutnya berselisih dengan Iblis, dan dalam Kitab Wahyu, di mana Mikael dan para malaikatnya berperang melawan naga. Karena itu ia dihormati sebagai pembela umat Allah dan pelindung Gereja. Gabriel berarti \"Kekuatan Allah\". Dalam Kitab Daniel ia menjelaskan penglihatan-penglihatan sang nabi; dalam Perjanjian Baru ia memberitahukan kelahiran Yohanes Pembaptis kepada Zakharia dan kelahiran Yesus kepada Maria. Karena itu ia disebut malaikat Inkarnasi. Rafael berarti \"Allah menyembuhkan\". Ia tampil dalam Kitab Tobit sebagai teman seperjalanan Tobia yang menyamar dengan nama Azarya; ia melindungi Tobia, membebaskan Sara dari kuasa setan, dan menyembuhkan kebutaan Tobit, lalu menyatakan diri sebagai salah satu dari tujuh malaikat yang berdiri di hadapan Tuhan. Pesta Mikael termasuk pesta tertua di Roma, berasal dari peringatan pemberkatan basilika malaikat di Via Salaria. Sejak pembaruan kalender liturgi, ketiga malaikat agung ini dirayakan bersama pada 29 September.",
    "example": [
      "Berdoa memohon perlindungan St.",
      "Mikael dalam menghadapi godaan dan kejahatan.",
      "Terbuka mendengarkan pesan Tuhan seperti Maria menerima kabar dari Gabriel.",
      "Menemani dan menolong orang yang sakit atau sedang dalam perjalanan, seperti Rafael."
    ],
    "patron": [
      "Gereja"
    ],
    "keywords": [
      "michael",
      "mikael",
      "gabriel",
      "raphael",
      "rafael",
      "malaikat agung",
      "archangel",
      "tobit"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/09/29.html",
      "https://www.newadvent.org/cathen/10275b.htm",
      "https://www.newadvent.org/cathen/12640b.htm"
    ]
  },
  {
    "id": "st-jerome",
    "date": "09-30",
    "name": "St. Hieronimus",
    "role": "Imam dan Pujangga Gereja",
    "years": "± 340–420",
    "rank": "memorial",
    "color": "white",
    "story": "Hieronimus lahir sekitar tahun 340–342 di Stridon, di perbatasan Dalmatia dan Pannonia (kawasan Balkan sekarang). Sekitar tahun 360 ia pergi ke Roma untuk belajar dan di sana ia dibaptis. Kemudian ia pergi ke Timur. Di Antiokhia ia mendengarkan kuliah para ahli Kitab Suci, lalu antara tahun 374 dan 379 ia hidup sebagai pertapa di padang gurun Khalkis, tempat ia juga belajar bahasa Ibrani. Ia ditahbiskan menjadi imam di Antiokhia dan kemudian tinggal di Konstantinopel. Dari tahun 382 sampai 385 ia berada di Roma, dekat Paus Damasus, yang memintanya merevisi terjemahan Latin Kitab Suci. Karena mendapat perlawanan dari sebagian klerus Roma, ia meninggalkan kota itu dan pada tahun 386 menetap di Betlehem. Di sana ia tinggal di sebuah biara dekat biara perempuan yang didirikan oleh dua perempuan Romawi, Paula dan Eustokium. Selama bertahun-tahun ia menerjemahkan Perjanjian Lama langsung dari bahasa Ibrani dan menulis banyak tafsir Kitab Suci. Terjemahannya menjadi dasar Vulgata, Kitab Suci Latin yang dipakai Gereja selama berabad-abad. Ia dikenal berwatak keras dan tajam dalam berdebat, tetapi sangat mencintai Sabda Allah. Ia wafat di Betlehem pada 30 September 420.",
    "example": [
      "Membaca dan mempelajari Kitab Suci setiap hari.",
      "Menggunakan kemampuan dan pendidikan untuk melayani Gereja.",
      "Belajar mengendalikan watak yang keras dengan kerendahan hati."
    ],
    "patron": [],
    "keywords": [
      "jerome",
      "hieronimus",
      "hieronymus",
      "vulgata",
      "vulgate",
      "kitab suci",
      "betlehem",
      "penerjemah"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/09/30.html",
      "https://www.newadvent.org/cathen/08341a.htm"
    ]
  },
  {
    "id": "st-therese-child-jesus",
    "date": "10-01",
    "name": "St. Teresia dari Kanak-kanak Yesus, Perawan dan Pujangga Gereja",
    "role": "Biarawati Karmel dan Pujangga Gereja",
    "years": "1873–1897",
    "rank": "memorial",
    "color": "white",
    "story": "Thérèse Martin lahir di Prancis pada 2 Januari 1873, putri bungsu Louis dan Zélie Martin, pasangan suami-istri yang kemudian juga dinyatakan kudus pada tahun 2015. Sejak kecil ia sangat mencintai Tuhan. Pada usia lima belas tahun ia masuk biara Karmel di Lisieux dan menerima nama Teresia dari Kanak-kanak Yesus. Hidupnya di biara tampak biasa saja dan tersembunyi. Ia memilih jalan pengorbanan-pengorbanan kecil yang tidak dilihat orang, dilakukan dengan cinta yang besar dan kepercayaan penuh seperti seorang anak kepada Allah Bapa. Jalan inilah yang kemudian dikenal sebagai \"jalan kecil\". Atas permintaan para pemimpinnya ia menuliskan riwayat hidupnya, yang kemudian diterbitkan sebagai \"Kisah Suatu Jiwa\" dan dibaca di seluruh dunia. Walaupun tidak pernah meninggalkan biaranya, ia berdoa dan mempersembahkan hidupnya bagi para misionaris dan para imam. Ia jatuh sakit parah dan wafat pada 30 September 1897 dalam usia 24 tahun. Ia dikanonisasi pada tahun 1925, dinyatakan sebagai pelindung misi, dan pada 19 Oktober 1997 Paus Yohanes Paulus II menyatakannya sebagai Pujangga Gereja, perempuan ketiga yang menerima gelar itu.",
    "example": [
      "Melakukan pekerjaan dan pengorbanan kecil sehari-hari dengan cinta.",
      "Percaya kepada Allah seperti seorang anak kepada ayahnya.",
      "Mendoakan para misionaris dan imam."
    ],
    "patron": [
      "misi",
      "misionaris",
      "Prancis",
      "penjual bunga"
    ],
    "keywords": [
      "therese of lisieux",
      "teresia lisieux",
      "theresia",
      "little flower",
      "jalan kecil",
      "karmel",
      "lisieux",
      "misi"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/10/01.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-therese-of-lisieux/"
    ]
  },
  {
    "id": "guardian-angels",
    "date": "10-02",
    "name": "Para Malaikat Pelindung",
    "role": "Peringatan Para Malaikat Pelindung",
    "years": "",
    "rank": "memorial",
    "color": "white",
    "story": "Gereja sejak awal percaya bahwa Allah memberikan para malaikat untuk melindungi dan membimbing manusia. Keyakinan ini didasarkan pada Kitab Suci, misalnya sabda Yesus tentang anak-anak kecil yang malaikat-malaikatnya senantiasa memandang wajah Bapa di surga (Mat 18:10). Doa-doa liturgi kuno, seperti dalam Sakramentarium Leonianum, sudah memohon perlindungan dan doa perantaraan para malaikat. Namun, pesta khusus untuk para Malaikat Pelindung baru muncul kemudian dan semula bersifat lokal, terutama di Spanyol. Pada tahun 1579 Gereja di Córdoba memohon izin untuk merayakan pesta Malaikat Pelindung, dan pada tahun 1582 Valencia juga mendapat izin serupa. Pada 27 September 1608 Paus Paulus V memasukkan pesta ini ke dalam kalender umum sebagai pesta pilihan, untuk dirayakan pada hari pertama yang kosong sesudah Pesta St. Mikael. Paus Klemens X kemudian menjadikannya pesta wajib bagi seluruh Gereja dan menetapkannya pada 2 Oktober. Pesta ini meneguhkan keyakinan lama umat beriman bahwa setiap orang didampingi malaikat yang menjaga dan menuntunnya menuju Allah.",
    "example": [
      "Mengajarkan anak-anak berdoa kepada malaikat pelindung setiap hari.",
      "Bersyukur atas perlindungan Tuhan dalam perjalanan dan pekerjaan.",
      "Mendengarkan bisikan hati nurani yang menuntun kepada kebaikan."
    ],
    "patron": [],
    "keywords": [
      "guardian angels",
      "malaikat pelindung",
      "malaikat",
      "angel",
      "2 oktober",
      "perlindungan"
    ],
    "sources": [
      "https://www.newadvent.org/cathen/07050a.htm"
    ]
  },
  {
    "id": "st-francis-assisi",
    "date": "10-04",
    "name": "St. Fransiskus dari Assisi",
    "role": "Pendiri Ordo Fransiskan",
    "years": "1181/1182–1226",
    "rank": "memorial",
    "color": "white",
    "story": "Fransiskus lahir di Assisi, Umbria, Italia, pada tahun 1181 atau 1182. Ayahnya, Pietro Bernardone, seorang pedagang kain yang kaya. Masa mudanya penuh pesta dan cita-cita menjadi ksatria. Ketika berusia sekitar dua puluh tahun ia ikut berperang melawan Perugia, ditawan lebih dari setahun, lalu jatuh sakit. Perlahan ia bertobat. Suatu hari ia berjumpa dengan seorang penderita kusta dan merangkulnya; sejak itu ia giat merawat para penderita kusta. Ketika berdoa di depan salib di kapel San Damiano yang rusak, ia mendengar suara: \"Fransiskus, pergilah dan perbaikilah rumah-Ku.\" Ketika ayahnya membawanya ke hadapan uskup, Fransiskus menanggalkan pakaiannya dan menyerahkan semuanya kepada ayahnya, memilih hidup miskin sepenuhnya. Banyak orang kemudian bergabung dengannya, dan lahirlah Ordo Saudara-saudara Dina, yang anggaran dasarnya disahkan Paus Honorius III pada tahun 1223. Ia juga mengunjungi Sultan di Mesir saat Perang Salib. Pada Natal 1223 di Greccio ia memperagakan kandang Natal. Pada tahun 1224 di La Verna ia menerima stigmata. Ia menggubah Kidung Saudara Matahari. Ia wafat di Assisi pada 3 Oktober 1226 dan dikanonisasi oleh Paus Gregorius IX pada 16 Juli 1228.",
    "example": [
      "Hidup sederhana dan tidak terikat pada barang.",
      "Merawat alam ciptaan sebagai saudara.",
      "Mendekati dan melayani orang yang dijauhi masyarakat."
    ],
    "patron": [
      "Italia"
    ],
    "keywords": [
      "francis of assisi",
      "fransiskus",
      "assisi",
      "fransiskan",
      "kemiskinan",
      "alam",
      "stigmata",
      "kandang natal"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/10/04.html",
      "https://www.newadvent.org/cathen/06221a.htm"
    ]
  },
  {
    "id": "st-faustina-kowalska",
    "date": "10-05",
    "name": "St. Faustina Kowalska, Perawan",
    "role": "Biarawati, Rasul Kerahiman Ilahi",
    "years": "1905–1938",
    "rank": "optional",
    "color": "white",
    "story": "Helena Kowalska lahir pada 25 Agustus 1905 di Głogowiec, Polandia, sebagai anak ketiga dari sepuluh bersaudara dalam keluarga petani yang miskin dan saleh. Untuk menghidupi diri dan membantu orang tuanya, ia bekerja sebagai pembantu rumah tangga di beberapa kota. Setelah mengalami penglihatan akan Kristus yang menderita, ia mencari biara. Pada 1 Agustus 1925 ia masuk Kongregasi Suster-suster Bunda Belas Kasih dan menerima nama Suster Maria Faustina. Di biara ia menjalankan tugas-tugas sederhana sebagai juru masak, tukang kebun, dan penjaga pintu di Kraków, Płock, dan Vilnius. Di balik kehidupan yang sederhana itu ia menerima pengalaman mistik yang mendalam. Yesus mempercayakan kepadanya pesan Kerahiman Ilahi dan tugas untuk menyebarkan devosi ini ke seluruh dunia. Atas permintaan Yesus dan para bapa pengakuannya, ia menuliskan pengalaman-pengalaman itu dalam Buku Harian yang kini diterjemahkan ke banyak bahasa. Ia menderita tuberkulosis dan wafat di Kraków pada 5 Oktober 1938 dalam usia 33 tahun. Paus Yohanes Paulus II membeatifikasinya pada tahun 1993 dan mengkanonisasinya pada 30 April 2000. Kini Minggu Kerahiman Ilahi dirayakan pada hari Minggu pertama sesudah Paskah.",
    "example": [
      "Percaya pada kerahiman Allah dan tidak putus asa karena dosa.",
      "Berbelas kasih kepada sesama melalui perbuatan, kata, dan doa.",
      "Melakukan tugas sederhana dengan setia dan penuh cinta."
    ],
    "patron": [],
    "keywords": [
      "faustina",
      "kowalska",
      "kerahiman ilahi",
      "divine mercy",
      "krakow",
      "polandia",
      "buku harian"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/10/05.html",
      "https://www.vatican.va/news_services/liturgy/saints/ns_lit_doc_20000430_faustina_en.html"
    ]
  },
  {
    "id": "st-bruno",
    "date": "10-06",
    "name": "St. Bruno",
    "role": "Imam, Pendiri Ordo Kartusian",
    "years": "± 1030–1101",
    "rank": "optional",
    "color": "white",
    "story": "Bruno lahir di Köln, Jerman, sekitar tahun 1030. Ia belajar di sekolah katedral Reims, Prancis, yang terkenal, dan menjadi ahli Kitab Suci dan teologi. Setelah kembali ke Köln dan kemungkinan ditahbiskan menjadi imam, ia dipanggil lagi ke Reims. Dari tahun 1057 sampai sekitar 1075 ia memimpin sekolah katedral di sana; salah satu muridnya kelak menjadi Paus Urbanus II. Pada tahun 1075 ia menjadi kanselir Keuskupan Reims. Ia ikut menentang uskup agung Manasses yang hidupnya tidak layak, sehingga harta bendanya dirampas. Ketika uskup itu akhirnya disingkirkan, banyak orang ingin memilih Bruno sebagai uskup, tetapi ia justru memutuskan meninggalkan dunia. Bersama enam sahabat ia menghadap Uskup Hugo dari Grenoble, yang pada tahun 1084 menempatkan mereka di daerah pegunungan terpencil bernama Chartreuse di Pegunungan Alpen. Di sanalah lahir Ordo Kartusian, yang memadukan hidup pertapa dalam kesunyian dengan hidup berkomunitas. Sekitar tahun 1090 Paus Urbanus II memanggilnya ke Roma sebagai penasihat. Bruno menolak diangkat menjadi uskup agung Reggio, lalu mendirikan pertapaan baru di Calabria, Italia selatan. Di sanalah ia wafat pada 6 Oktober 1101.",
    "example": [
      "Menyediakan waktu hening untuk berdoa di tengah kesibukan.",
      "Berani melepaskan jabatan atau kehormatan demi panggilan Tuhan.",
      "Setia pada kebenaran meskipun harus menanggung kerugian."
    ],
    "patron": [],
    "keywords": [
      "bruno",
      "kartusian",
      "carthusian",
      "chartreuse",
      "koln",
      "reims",
      "calabria",
      "keheningan"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/10/06.html",
      "https://www.newadvent.org/cathen/03014b.htm"
    ]
  },
  {
    "id": "our-lady-of-the-rosary",
    "date": "10-07",
    "name": "SP Maria Ratu Rosario",
    "role": "Peringatan Santa Perawan Maria",
    "years": "",
    "rank": "memorial",
    "color": "white",
    "story": "Doa Rosario adalah devosi kepada Bunda Maria dengan merenungkan peristiwa-peristiwa hidup Yesus sambil mendaraskan Salam Maria. Menurut tradisi, devosi ini dinyatakan kepada St. Dominikus, dan legenda menghubungkan kemenangan atas kaum Albigensis dalam pertempuran Muret tahun 1213 dengan doa Rosario. Sejarah pesta ini berkaitan dengan pertempuran laut di Lepanto. Pada hari Minggu pertama bulan Oktober tahun 1571, armada Kristen di bawah pimpinan Don Juan dari Austria mengalahkan armada Turki Usmani. Pada hari yang sama, anggota Persaudaraan Rosario di Roma mengadakan perarakan sambil berdoa Rosario. Paus St. Pius V lalu menetapkan peringatan Rosario pada hari itu. Pada tahun 1573, atas permintaan Ordo Dominikan, Paus Gregorius XIII mengizinkan pesta ini dirayakan di gereja-gereja yang memiliki altar Rosario Suci. Paus Klemens X memperluasnya ke seluruh Spanyol pada tahun 1671, dan setelah kemenangan atas pasukan Turki di Peterwardein, Hungaria, pada tahun 1716, Paus Klemens XI memerintahkan agar pesta ini dirayakan oleh seluruh Gereja. Paus Leo XIII kemudian menambahkan seruan \"Ratu Rosario yang amat suci\" dalam Litani Santa Perawan Maria. Kini peringatan ini dirayakan setiap 7 Oktober.",
    "example": [
      "Berdoa Rosario setiap hari, sendiri atau bersama keluarga.",
      "Merenungkan hidup Yesus bersama Maria dalam setiap peristiwa Rosario.",
      "Mendoakan perdamaian dunia melalui Rosario."
    ],
    "patron": [],
    "keywords": [
      "our lady of the rosary",
      "ratu rosario",
      "rosario",
      "rosary",
      "lepanto",
      "dominikus",
      "oktober"
    ],
    "sources": [
      "https://www.newadvent.org/cathen/13189a.htm"
    ]
  },
  {
    "id": "st-denis",
    "date": "10-09",
    "name": "St. Dionisius, Uskup, dan Kawan-kawan, Martir",
    "role": "Uskup dan Martir",
    "years": "± abad ke-3 (wafat ± 258)",
    "rank": "optional",
    "color": "red",
    "story": "Santo Dionisius (Denis) dihormati sebagai uskup pertama Paris dan pelindung Prancis. Hanya sedikit hal yang diketahui secara pasti tentang hidupnya. Pendapat yang paling kuat menyatakan bahwa ia diutus dari Roma ke Galia (Prancis kuno) pada abad ketiga untuk mewartakan Injil, lalu dipenggal kepalanya dalam penganiayaan di bawah Kaisar Valerianus sekitar tahun 258, bersama kawan-kawannya. Selama beberapa waktu ia keliru disamakan dengan penulis mistik yang kini disebut Pseudo-Dionisius. Kemasyhurannya banyak bersumber dari legenda. Menurut tradisi, setelah dibunuh di bukit Montmartre, yang namanya berarti 'bukit para martir', ia membawa kepalanya sendiri ke sebuah desa di sebelah timur laut kota. Pada awal abad keenam, Santa Genoveva membangun sebuah basilika di atas makamnya; di tempat itu kelak berdiri biara besar Saint-Denis yang terkenal. Meskipun data sejarahnya sangat terbatas, Gereja tidak pernah melupakan dia. Penghormatan yang hidup selama berabad-abad menunjukkan bahwa kesaksian imannya meninggalkan kesan mendalam bagi umat pada zamannya: seorang gembala yang menyerahkan nyawanya demi Kristus dan demi Gereja yang ia layani.",
    "example": [
      "Berani tetap setia pada iman ketika menjadi minoritas atau ditekan lingkungan.",
      "Mendukung para pewarta dan misionaris yang membawa Injil ke tempat baru.",
      "Menghargai kesaksian para pendahulu iman yang telah membangun Gereja lokal kita."
    ],
    "patron": [
      "Prancis",
      "Paris"
    ],
    "keywords": [
      "denis",
      "dionysius",
      "paris",
      "prancis",
      "montmartre",
      "martir"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-denis-and-companions/",
      "https://www.vaticannews.va/en/saints/10/09.html"
    ]
  },
  {
    "id": "st-john-leonardi",
    "date": "10-09",
    "name": "St. Yohanes Leonardi, Imam",
    "role": "Imam dan Pendiri Tarekat",
    "years": "1541–1609",
    "rank": "optional",
    "color": "white",
    "story": "Yohanes Leonardi hidup di Italia pada masa sesudah Reformasi Protestan dan Konsili Trente. Setelah ditahbiskan menjadi imam, ia sangat giat melayani di rumah sakit dan penjara. Teladan dan pengabdiannya menarik sejumlah pemuda awam untuk membantunya; kelak mereka pun menjadi imam. Bersama para pengikutnya ia merancang sebuah kongregasi baru imam-imam, yang kini dikenal sebagai Klerus Reguler Bunda Allah. Rencana itu akhirnya disetujui, tetapi menimbulkan perlawanan politik yang keras, sehingga Yohanes diasingkan dari kota asalnya, Lucca, hampir sepanjang sisa hidupnya. Dalam kesulitan itu ia mendapat dukungan dari Santo Filipus Neri, yang bahkan memberinya tempat tinggal. Pada tahun 1579 ia membentuk Persaudaraan Ajaran Kristiani dan menerbitkan ringkasan ajaran iman yang terus dipakai sampai abad ke-19. Kongregasinya dikukuhkan oleh Paus Klemens VIII pada tahun 1595 dan menjadi kekuatan besar bagi pembaruan Gereja di Italia. Atas kehendak pendirinya sendiri, kongregasi ini tetap kecil. Yohanes wafat pada usia 68 tahun karena penyakit yang tertular ketika ia merawat para korban wabah.",
    "example": [
      "Percaya bahwa satu orang yang setia pada kehendak Allah dapat membawa banyak kebaikan.",
      "Meluangkan waktu mengunjungi orang sakit atau mereka yang dipenjara.",
      "Ikut mengajar katekese dan membantu orang lain memahami iman dengan sederhana."
    ],
    "patron": [
      "apoteker"
    ],
    "keywords": [
      "john leonardi",
      "giovanni leonardi",
      "lucca",
      "katekese",
      "klerus reguler bunda allah",
      "wabah"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-john-leonardi/",
      "https://www.vaticannews.va/en/saints/10/09.html"
    ]
  },
  {
    "id": "st-john-newman",
    "date": "10-09",
    "name": "St. Yohanes Henry Newman, Imam dan Pujangga Gereja",
    "role": "Imam, Kardinal, dan Pujangga Gereja",
    "years": "1801–1890",
    "rank": "optional",
    "color": "white",
    "story": "John Henry Newman lahir di London, Inggris. Ia belajar di Trinity College, Oxford, menjadi tutor di Oriel College, dan selama 17 tahun menjadi pastor gereja universitas St. Mary the Virgin. Separuh pertama hidupnya ia jalani sebagai rohaniwan Anglikan yang terkenal sebagai pengkhotbah dan penulis. Sesudah tahun 1833 ia menjadi tokoh utama Gerakan Oxford, yang menekankan warisan para Bapa Gereja. Penelitian sejarahnya membuatnya yakin bahwa Gereja Katolik adalah yang paling bersambung dengan Gereja yang didirikan Yesus. Pada tahun 1845 ia diterima dalam persekutuan penuh Gereja Katolik, dan dua tahun kemudian ditahbiskan imam di Roma serta bergabung dengan Kongregasi Oratorium Santo Filipus Neri. Ia mendirikan rumah Oratorium di Birmingham dan London serta memimpin Universitas Katolik Irlandia. Newman menulis sekitar 40 buku dan 21.000 surat, antara lain Apologia Pro Vita Sua dan esai tentang perkembangan ajaran Kristiani. Pada tahun 1879 ia diangkat menjadi kardinal dengan semboyan 'Cor ad cor loquitur' (Hati berbicara kepada hati). Ia wafat tahun 1890, dibeatifikasi oleh Paus Benediktus XVI (2010), dikanonisasi oleh Paus Fransiskus (2019), dan dinyatakan Pujangga Gereja oleh Paus Leo XIV pada 1 November 2025.",
    "example": [
      "Mencari kebenaran dengan jujur dan rendah hati, walaupun harus membayar harga.",
      "Belajar iman dengan tekun dan menghubungkannya dengan kehidupan nyata.",
      "Menjaga hati nurani yang terbentuk baik dan berbicara 'dari hati ke hati' dengan sesama."
    ],
    "patron": [
      "pendidikan Katolik"
    ],
    "keywords": [
      "john henry newman",
      "oxford",
      "inggris",
      "konversi",
      "oratorium",
      "kardinal",
      "hati nurani"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-john-henry-newman/",
      "https://www.vaticannews.va/en/pope/news/2025-07/st-john-henry-newman-set-to-become-newest-doctor-of-the-church.html"
    ]
  },
  {
    "id": "st-john-x-x-i-i-i",
    "date": "10-11",
    "name": "St. Yohanes XXIII, Paus",
    "role": "Paus",
    "years": "1881–1963",
    "rank": "optional",
    "color": "white",
    "story": "Angelo Giuseppe Roncalli lahir sebagai anak sulung keluarga petani di Sotto il Monte, dekat Bergamo, Italia utara. Saat di seminari ia bergabung dengan Ordo Fransiskan Sekular. Setelah ditahbiskan imam pada tahun 1904, ia menjadi sekretaris uskupnya, mengajar sejarah Gereja, dan selama Perang Dunia I melayani sebagai pengangkut tandu dalam tentara Italia. Sejak 1925 ia menjadi diplomat Takhta Suci di Bulgaria, Turki, dan Prancis. Selama Perang Dunia II ia ikut menyelamatkan banyak orang Yahudi. Pada tahun 1953 ia diangkat menjadi kardinal dan Patriark Venesia. Tahun 1958, ketika hampir berusia 77 tahun, ia terpilih menjadi paus dan memilih nama Yohanes. Paus yang rendah hati dan penuh humor ini menerbitkan ensiklik Mater et Magistra (1961) dan Pacem in Terris (1963), turut berupaya meredakan krisis rudal Kuba, serta membuka Konsili Vatikan II. Ia ingin Gereja lebih memakai 'obat belas kasih' daripada kekerasan, serta membuka dialog dengan umat Kristen lain, Yahudi, dan Muslim. 'Paus Yohanes yang Baik' wafat pada 3 Juni 1963, dibeatifikasi tahun 2000 dan dikanonisasi oleh Paus Fransiskus tahun 2014.",
    "example": [
      "Menjalani tugas sehari-hari dengan sungguh-sungguh tanpa menganggap diri terlalu penting.",
      "Menggunakan humor dan keramahan untuk membangun persaudaraan.",
      "Mengutamakan belas kasih dan dialog ketika menghadapi perbedaan."
    ],
    "patron": [],
    "keywords": [
      "john xxiii",
      "roncalli",
      "paus yohanes",
      "vatikan ii",
      "pacem in terris",
      "bergamo",
      "dialog"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-john-xxiii/",
      "https://www.vaticannews.va/en/saints/10/11.html"
    ]
  },
  {
    "id": "st-callistus-i-pope",
    "date": "10-14",
    "name": "St. Kalistus I, Paus dan Martir",
    "role": "Paus dan Martir",
    "years": "wafat ± 222",
    "rank": "optional",
    "color": "white",
    "story": "Sebagian besar kisah awal hidup Kalistus berasal dari Hipolitus, seorang lawannya, sehingga harus dibaca dengan hati-hati. Menurut kisah itu, Kalistus semula seorang budak milik Karpoforus, seorang Kristen di lingkungan istana kaisar. Ia dipercaya mengelola uang tuannya, tetapi kehilangan semuanya dan melarikan diri. Ia lalu dihukum dan kemudian dibuang ke tambang-tambang di Sardinia. Ia dibebaskan bersama tahanan Kristen lainnya berkat permintaan Marsia kepada Paus Viktor. Di bawah Paus Zefirinus, Kalistus dipercaya mengurus pemakaman Gereja di Jalan Apia, yang sampai sekarang dikenal sebagai Katakomba Santo Kalistus. Sekitar tahun 217 atau 218 ia terpilih menjadi paus. Ia dikecam Hipolitus dan Tertulianus karena mengizinkan orang berdosa berat, setelah menjalani tobat, diterima kembali dalam persekutuan; Kalistus mendasarkan sikap itu pada kuasa mengikat dan melepaskan yang diberikan kepada Petrus. Ia juga menolak ajaran sesat Sabellius. Kalistus wafat sekitar tahun 222 dan dihormati sebagai martir; daftar martir abad keempat sudah mencantumkan namanya. Ia dimakamkan di pemakaman Kalepodius di Jalan Aurelia, dan reliknya kemudian dipindahkan ke Gereja Santa Maria di Trastevere.",
    "example": [
      "Percaya bahwa masa lalu yang kelam tidak menghalangi Allah memakai hidup kita.",
      "Bersikap murah hati kepada orang berdosa yang sungguh mau bertobat.",
      "Merawat makam dan mendoakan orang yang telah meninggal."
    ],
    "patron": [],
    "keywords": [
      "callistus",
      "calixtus",
      "kalistus",
      "katakomba",
      "paus",
      "martir",
      "roma"
    ],
    "sources": [
      "https://www.newadvent.org/cathen/03183d.htm",
      "https://www.vaticannews.va/en/saints/10/14.html"
    ]
  },
  {
    "id": "st-teresa-jesus",
    "date": "10-15",
    "name": "St. Teresa dari Yesus (Avila), Perawan dan Pujangga Gereja",
    "role": "Biarawati Karmel dan Pujangga Gereja",
    "years": "1515–1582",
    "rank": "memorial",
    "color": "white",
    "story": "Teresa dari Avila hidup di Spanyol abad ke-16, masa penjelajahan dan gejolak besar dalam Gereja. Ia lahir sebelum Reformasi Protestan dan wafat hampir dua puluh tahun setelah Konsili Trente ditutup. Teresa adalah perempuan cerdas, ramah, dan berani. Ia masuk biara Karmel walaupun ayahnya sangat menentang. Pertobatannya berlangsung sepanjang hidup, melalui pergulatan dengan kesuaman, penyakit, dan berbagai pertentangan. Ia menjadi seorang pendoa besar yang mengajarkan doa batin berdasarkan pengalamannya sendiri. Meskipun seorang kontemplatif, ia mencurahkan banyak tenaga untuk membarui Ordo Karmel agar kembali menghayati Regula asli dengan setia. Ia bepergian, menulis, dan mendirikan sejumlah biara baru, walaupun sering disalahpahami dan ditentang. Dalam usaha pembaruan itu ia juga bekerja sama dengan Santo Yohanes dari Salib. Tulisannya, terutama Jalan Kesempurnaan dan Puri Batin, telah menolong banyak generasi orang beriman untuk berdoa. Pada tahun 1970 Paus Paulus VI menyatakannya Pujangga Gereja; bersama Santa Katarina dari Siena, ia menjadi perempuan pertama yang menerima gelar itu.",
    "example": [
      "Menyediakan waktu setiap hari untuk doa batin, berbicara dengan Tuhan sebagai sahabat.",
      "Tetap tekun berjuang memperbaiki diri walaupun sering jatuh.",
      "Berani memperjuangkan pembaruan yang baik dengan sukacita dan humor."
    ],
    "patron": [
      "Spanyol"
    ],
    "keywords": [
      "teresa avila",
      "teresa of jesus",
      "karmel",
      "puri batin",
      "doa batin",
      "mistik",
      "spanyol"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-teresa-of-avila/",
      "https://www.vaticannews.va/en/saints/10/15.html"
    ]
  },
  {
    "id": "st-hedwig",
    "date": "10-16",
    "name": "St. Hedwig, Biarawati",
    "role": "Bangsawati dan Biarawati",
    "years": "± 1174–1243",
    "rank": "optional",
    "color": "white",
    "story": "Hedwig adalah seorang bangsawati Jerman yang pada akhir abad ke-12 menikah dengan Henrik si Janggut, Adipati Silesia Bawah. Mereka dikaruniai enam anak. Sejak awal, rakyat memandangnya sebagai ratu yang mulia bukan karena pakaiannya yang mewah, melainkan karena kemurahan hatinya yang selalu siap menolong orang paling miskin. Walaupun berasal dari Jerman, ia dekat dengan rakyatnya dan mempelajari bahasa Polandia. Ia hidup sederhana, rela memakai pakaian dan sepatu bekas agar tidak tampak berbeda dari kaum miskin, dan ia dikenal dengan ungkapan bahwa orang miskin adalah 'tuan-tuan kita'. Hidupnya sebagai istri dan ibu penuh duka: ia menyaksikan kematian tiga putra dan dua dari tiga putrinya. Ia menanggung kesedihan itu dengan tenang berkat iman yang kuat serta hidup doa setiap hari. Pada tahun 1202 ia mendirikan biara Sistersien di Trebnitz. Setelah suaminya wafat, ia masuk biara itu dan mengenakan jubah sebagai suster awam. Hedwig wafat pada 15 Oktober 1243 dan dikanonisasi oleh Paus Klemens IV pada tahun 1267.",
    "example": [
      "Menggunakan kedudukan dan harta untuk melayani orang miskin.",
      "Hidup sederhana dan tidak mengikuti gengsi atau mode yang berlebihan.",
      "Menanggung duka keluarga dengan iman dan doa."
    ],
    "patron": [
      "Silesia"
    ],
    "keywords": [
      "hedwig",
      "jadwiga",
      "silesia",
      "polandia",
      "trebnitz",
      "sistersien",
      "orang miskin"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/10/16/st-hedwig--duchesse-of-polonia--religious.html"
    ]
  },
  {
    "id": "st-margaret-alacoque",
    "date": "10-16",
    "name": "St. Margareta Maria Alacoque, Perawan",
    "role": "Biarawati Visitasi",
    "years": "1647–1690",
    "rank": "optional",
    "color": "white",
    "story": "Margareta Maria Alacoque lahir di Prancis. Masa kecilnya ditandai penyakit dan keadaan keluarga yang sulit; salib terberatnya adalah tidak mampu meringankan penderitaan ibunya. Setelah lama menimbang pernikahan, pada usia 24 tahun ia masuk Ordo Visitasi. Rekan-rekannya mengenalnya sebagai pribadi yang rendah hati, sederhana, jujur, dan terutama baik hati serta sabar menghadapi kritik tajam. Kira-kira tiga tahun setelah menjadi biarawati, ia mulai menerima serangkaian penampakan Yesus. Melalui dia, Kristus meminta agar kasih-Nya bagi umat manusia, yang dilambangkan dengan Hati-Nya, dinyatakan kepada dunia: dengan sering menyambut Komuni kudus, terutama pada Jumat pertama setiap bulan, dengan berjaga dalam doa satu jam setiap Kamis malam untuk mengenang sengsara-Nya di Getsemani, dan dengan menetapkan pesta pemulihan. Ia mengalami banyak penolakan: sebagian sesama suster memusuhinya dan para teolog menganggap penglihatannya khayalan. Imam Yesuit Klaudius de la Colombière mengakui keaslian pengalamannya dan mendukungnya. Setelah melayani sebagai pembimbing novis dan asisten pemimpin biara, ia wafat pada usia 43 tahun. Ia dikenal dengan ungkapan bahwa ia tidak membutuhkan apa pun selain Allah dan ingin melebur dalam Hati Yesus.",
    "example": [
      "Menghidupi devosi Hati Kudus Yesus, misalnya dengan Misa dan Komuni Jumat Pertama.",
      "Meluangkan satu jam untuk berdoa atau adorasi.",
      "Tetap sabar dan lembut ketika disalahpahami atau dikritik."
    ],
    "patron": [],
    "keywords": [
      "margaret mary alacoque",
      "hati kudus",
      "sacred heart",
      "jumat pertama",
      "visitasi",
      "paray-le-monial"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-margaret-mary-alacoque/",
      "https://www.vaticannews.va/en/saints/10/16.html"
    ]
  },
  {
    "id": "st-ignatius-antioch",
    "date": "10-17",
    "name": "St. Ignasius dari Antiokhia, Uskup dan Martir",
    "role": "Uskup dan Martir",
    "years": "wafat ± 107",
    "rank": "memorial",
    "color": "white",
    "story": "Ignasius lahir di Siria, menjadi Kristen, dan kemudian menjadi uskup Antiokhia, salah satu jemaat Kristen tertua. Ia termasuk para Bapa Apostolik, generasi yang dekat dengan zaman para rasul. Menurut sumber-sumber kuno, sekitar tahun 107, pada masa Kaisar Trajanus, umat Kristen di Antiokhia dipaksa memilih antara mati atau menyangkal iman. Ignasius tidak mau menyangkal Kristus, sehingga ia dihukum mati dan dibawa dengan pengawalan ke Roma untuk dijadikan mangsa binatang buas. Dalam perjalanan panjang itu ia menulis tujuh surat yang sangat berharga. Lima surat ditujukan kepada jemaat-jemaat di Asia Kecil; ia mendorong mereka tetap setia, bersatu dengan uskup dan para pemimpinnya, serta waspada terhadap ajaran sesat. Surat keenam ditujukan kepada Polikarpus, uskup Smirna, yang kelak juga menjadi martir. Surat terakhir ia kirimkan kepada umat di Roma, memohon agar mereka tidak menghalangi kemartirannya. Ia dikenal dengan ungkapan: 'Aku gandum Allah, biarlah aku digiling oleh gigi binatang buas, supaya menjadi roti murni bagi Kristus.' Perhatian utamanya adalah kesatuan Gereja; kesediaannya mati demi Kristus menjadi kesaksian iman yang tetap menguatkan.",
    "example": [
      "Menjaga kesatuan dalam keluarga, paroki, dan komunitas.",
      "Menguatkan iman sesama melalui pesan, surat, atau kata-kata yang meneguhkan.",
      "Tetap setia kepada Kristus walaupun harus menanggung kerugian."
    ],
    "patron": [],
    "keywords": [
      "ignatius of antioch",
      "antiokhia",
      "bapa apostolik",
      "surat",
      "martir",
      "kesatuan gereja"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-ignatius-of-antioch/",
      "https://www.vaticannews.va/en/saints/10/17.html"
    ]
  },
  {
    "id": "st-luke-evangelist",
    "date": "10-18",
    "name": "St. Lukas, Penginjil",
    "role": "Penginjil",
    "years": "abad ke-1",
    "rank": "feast",
    "color": "red",
    "story": "Santo Lukas menulis bagian besar Perjanjian Baru: Injil ketiga dan Kisah Para Rasul. Dalam kedua kitab itu ia memperlihatkan kesejajaran antara hidup Kristus dan kehidupan Gereja. Ia satu-satunya penulis Injil yang berasal dari bangsa bukan Yahudi. Menurut tradisi, ia berasal dari Antiokhia, dan Paulus menyebutnya 'tabib yang kekasih' (Kol 4:14). Injilnya kemungkinan ditulis antara tahun 70 dan 85. Lukas muncul dalam Kisah Para Rasul pada perjalanan misi kedua Paulus, tinggal beberapa tahun di Filipi, kemudian menemani Paulus ke Yerusalem dan tetap dekat dengannya ketika Paulus dipenjara di Kaisarea. Selama dua tahun itu ia berkesempatan mengumpulkan keterangan dan menemui orang-orang yang pernah mengenal Yesus. Ia juga menyertai Paulus dalam pelayaran berbahaya ke Roma sebagai sahabat yang setia. Tulisannya memperlihatkan kemahiran bahasa Yunani serta pengetahuan tentang sumber-sumber Yahudi. Injil Lukas terkenal karena kehangatannya: perhatian kepada orang miskin, kaum perempuan, orang berdosa, belas kasih Allah, doa, dan sukacita. Dari Injilnya pula kita mengenal kisah kanak-kanak Yesus serta perumpamaan Anak yang Hilang dan Orang Samaria yang Baik Hati.",
    "example": [
      "Membaca Injil Lukas dan merenungkan belas kasih Allah bagi orang kecil.",
      "Menjadi sahabat setia bagi rekan pelayanan di saat sulit.",
      "Melayani orang sakit dengan keahlian dan kasih."
    ],
    "patron": [
      "dokter",
      "tenaga medis",
      "pelukis"
    ],
    "keywords": [
      "luke",
      "lukas",
      "penginjil",
      "kisah para rasul",
      "tabib",
      "antiokhia",
      "injil"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-luke/",
      "https://www.vaticannews.va/en/saints/10/18.html"
    ]
  },
  {
    "id": "st-paul-cross",
    "date": "10-19",
    "name": "St. Paulus dari Salib, Imam",
    "role": "Imam dan Pendiri Kongregasi Pasionis",
    "years": "1694–1775",
    "rank": "optional",
    "color": "white",
    "story": "Paulus Daneo lahir di Italia utara pada tahun 1694, pada masa ketika banyak orang memandang Yesus hanya sebagai guru moral yang agung. Setelah sempat menjadi tentara untuk waktu singkat, ia beralih kepada hidup doa dalam kesunyian dan mengembangkan devosi yang mendalam kepada sengsara Kristus. Bagi Paulus, sengsara Tuhan adalah bukti paling nyata kasih Allah kepada semua orang. Devosi itu menumbuhkan belas kasih dalam dirinya dan menopang pelayanannya sebagai pengkhotbah yang menyentuh hati banyak pendengar. Ia dikenal sebagai salah satu pengkhotbah paling populer di zamannya, baik karena kata-katanya maupun karena perbuatan belas kasihnya yang murah hati. Pada tahun 1720 ia mendirikan Kongregasi Sengsara Yesus, yang dikenal sebagai para Pasionis. Anggotanya memadukan devosi kepada sengsara Kristus dengan pewartaan kepada kaum miskin dan laku tapa yang keras. Selain tiga kaul kemiskinan, kemurnian, dan ketaatan, mereka mengikrarkan kaul keempat: menyebarkan kenangan akan sengsara Kristus di antara umat. Pada tahun 1747 Paulus terpilih menjadi pemimpin umum kongregasinya dan menghabiskan sisa hidupnya di Roma. Ia wafat pada tahun 1775 dan dikanonisasi pada tahun 1867. Lebih dari 2.000 suratnya masih tersimpan sampai sekarang.",
    "example": [
      "Merenungkan sengsara Yesus, misalnya melalui Jalan Salib, sebagai tanda kasih Allah.",
      "Membiarkan doa melahirkan belas kasih yang nyata kepada sesama.",
      "Menyapa orang yang menderita dengan kata-kata pengharapan."
    ],
    "patron": [],
    "keywords": [
      "paul of the cross",
      "pasionis",
      "passionist",
      "sengsara kristus",
      "salib",
      "italia"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-paul-of-the-cross/",
      "https://www.vaticannews.va/en/saints/10/19.html"
    ]
  },
  {
    "id": "sts-jean-brebeuf",
    "date": "10-19",
    "name": "St. Yohanes de Brébeuf dan St. Ishak Jogues, Imam, dan Kawan-kawan, Martir",
    "role": "Imam Misionaris dan Martir",
    "years": "abad ke-17 (wafat 1642–1649)",
    "rank": "optional",
    "color": "red",
    "story": "Ishak Jogues, Yohanes de Brébeuf, dan kawan-kawannya adalah martir pertama di benua Amerika Utara yang diakui resmi oleh Gereja. Mereka adalah para Yesuit Prancis dan rekan awam yang bermisi di antara suku Huron di Kanada. Ishak Jogues meninggalkan karier sebagai pengajar sastra di Prancis dan tiba di Quebec pada tahun 1636 bersama rekan-rekannya di bawah pimpinan Yohanes de Brébeuf. Suku Huron terus diserang suku Iroquois. Jogues ditawan selama 13 bulan, disiksa, dan beberapa jarinya dipotong atau dibakar. Ia berhasil lolos dengan bantuan orang Belanda dan kembali ke Prancis, namun beberapa bulan kemudian ia kembali ke tanah misi. Pada 18 Oktober 1646 ia dibunuh oleh kelompok perang Mohawk; Yohanes de Lalande dibunuh keesokan harinya. René Goupil telah lebih dulu dibunuh pada tahun 1642 karena membuat tanda salib pada dahi anak-anak. Brébeuf berkarya sekitar 24 tahun di Kanada, menyusun katekismus dan kamus bahasa Huron, dan melihat sekitar 7.000 orang menjadi Kristen. Pada tahun 1649 ia wafat setelah disiksa berjam-jam bersama Gabriel Lalemant. Antonius Daniel, Karolus Garnier, dan Noel Chabanel juga dibunuh. Kedelapan martir ini dikanonisasi pada tahun 1930.",
    "example": [
      "Belajar bahasa dan budaya orang lain agar dapat melayani mereka dengan hormat.",
      "Tetap setia pada tugas pelayanan walaupun berat dan tidak nyaman.",
      "Mendoakan dan mendukung para misionaris yang bekerja di tempat sulit."
    ],
    "patron": [
      "Kanada"
    ],
    "keywords": [
      "jean de brebeuf",
      "isaac jogues",
      "martir amerika utara",
      "kanada",
      "huron",
      "yesuit",
      "misionaris"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saints-isaac-jogues-jean-de-brebeuf-and-companions/",
      "https://www.vaticannews.va/en/saints/10/19.html"
    ]
  },
  {
    "id": "st-john-paul-i-i",
    "date": "10-22",
    "name": "St. Yohanes Paulus II, Paus",
    "role": "Paus",
    "years": "1920–2005",
    "rank": "optional",
    "color": "white",
    "story": "Karol Józef Wojtyła lahir di Wadowice, Polandia. Sebelum berusia 21 tahun ia telah kehilangan ibu, ayah, dan kakak laki-lakinya. Studinya di Universitas Jagiellonia, Kraków, terputus oleh Perang Dunia II. Sambil bekerja di tambang batu dan pabrik kimia, ia belajar di seminari bawah tanah. Ia ditahbiskan imam pada tahun 1946, meraih doktor teologi di Roma, lalu menjadi pendamping mahasiswa dan dosen filsafat di Lublin. Ia diangkat menjadi uskup auksilier Kraków pada tahun 1958, mengikuti keempat sidang Konsili Vatikan II, menjadi Uskup Agung Kraków (1964) dan kardinal (1967). Pada Oktober 1978 ia terpilih menjadi paus, paus pertama yang bukan orang Italia dalam 455 tahun. Dalam homili pelantikannya ia berseru agar orang 'membuka pintu lebar-lebar bagi Kristus'. Ia mengunjungi 124 negara, memulai Hari Orang Muda Sedunia, memajukan dialog ekumenis dan antaragama, dan kunjungannya ke Polandia tahun 1979 ikut mendorong gerakan Solidaritas. Ia mengampuni Mehmet Ali Ağca yang mencoba membunuhnya pada tahun 1981. Pada akhir hidupnya ia menderita penyakit Parkinson. Ia wafat pada tahun 2005, dibeatifikasi tahun 2011, dan dikanonisasi oleh Paus Fransiskus tahun 2014.",
    "example": [
      "Membuka hati bagi Kristus tanpa takut.",
      "Mengampuni orang yang telah menyakiti kita.",
      "Menanggung sakit dan usia lanjut dengan iman sebagai kesaksian bagi orang lain."
    ],
    "patron": [
      "Hari Orang Muda Sedunia",
      "keluarga"
    ],
    "keywords": [
      "john paul ii",
      "karol wojtyla",
      "polandia",
      "paus",
      "orang muda",
      "wyd",
      "kerahiman ilahi"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-john-paul-ii/",
      "https://www.vaticannews.va/en/saints/10/22.html"
    ]
  },
  {
    "id": "st-john-capistrano",
    "date": "10-23",
    "name": "St. Yohanes dari Capestrano, Imam",
    "role": "Imam Fransiskan dan Pengkhotbah",
    "years": "1386–1456",
    "rank": "optional",
    "color": "white",
    "story": "Yohanes dari Capestrano lahir di Italia pada tahun 1386, pada abad yang suram: wabah pes telah merenggut sepertiga penduduk, Skisma Barat memecah Gereja, dan perang terus berkecamuk. Ia mendapat pendidikan yang baik, khususnya di bidang hukum, dan pada usia 26 tahun diangkat menjadi gubernur Perugia. Ketika dipenjara setelah sebuah pertempuran, ia memutuskan untuk mengubah hidupnya sepenuhnya. Pada usia 30 tahun ia masuk novisiat Fransiskan dan empat tahun kemudian ditahbiskan imam. Khotbah-khotbahnya menarik massa yang sangat besar pada masa ketika banyak orang acuh tak acuh terhadap iman. Bersama dua belas saudara Fransiskan, ia berkeliling negeri-negeri Eropa Tengah dan membangkitkan kembali iman yang hampir padam. Dengan keahlian hukumnya ia juga ikut menata Ordo Fransiskan yang sedang bergolak dan turut mengupayakan persatuan singkat dengan Gereja Yunani dan Armenia. Setelah Konstantinopel jatuh ke tangan Turki pada tahun 1453, ia ditugasi menggalang pertahanan Eropa. Ia memusatkan usahanya di Hungaria dan menyertai pasukan ke Beograd; di bawah Jenderal Yohanes Hunyadi, pengepungan Beograd berhasil dipatahkan. Kelelahan, ia jatuh sakit karena infeksi dan wafat pada 23 Oktober 1456.",
    "example": [
      "Mengubah arah hidup dengan berani ketika menyadari kekeliruan.",
      "Memakai keahlian profesional untuk melayani Gereja dan sesama.",
      "Tetap optimis karena iman, sekalipun zaman tampak gelap."
    ],
    "patron": [
      "ahli hukum",
      "pastor tentara"
    ],
    "keywords": [
      "john of capistrano",
      "capestrano",
      "fransiskan",
      "pengkhotbah",
      "beograd",
      "hungaria"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-john-of-capistrano/",
      "https://www.vaticannews.va/en/saints/10/23.html"
    ]
  },
  {
    "id": "st-anthony-mary-claret",
    "date": "10-24",
    "name": "St. Antonius Maria Claret, Uskup",
    "role": "Uskup dan Pendiri Kongregasi Klaretian",
    "years": "1807–1870",
    "rank": "optional",
    "color": "white",
    "story": "Antonius Maria Claret adalah orang Spanyol yang dijuluki 'bapa rohani Kuba'. Semasa muda ia bekerja sebagai penenun dan perancang di pabrik tekstil Barcelona, sambil belajar bahasa Latin dan percetakan. Ia ditahbiskan imam pada usia 28 tahun. Karena kesehatannya, ia batal masuk Kartusian maupun Yesuit, tetapi kemudian menjadi salah satu pengkhotbah paling populer di Spanyol. Selama sepuluh tahun ia memberikan misi umat dan retret, dengan menekankan Ekaristi dan devosi kepada Hati Maria yang Tak Bernoda; rosario hampir tidak pernah lepas dari tangannya. Pada usia 42 tahun ia mendirikan kongregasi misionaris yang kini dikenal sebagai Klaretian. Kemudian ia diangkat menjadi Uskup Agung Santiago de Cuba. Ia tak henti berkhotbah dan mendengarkan pengakuan dosa, menentang pergundikan, dan mengajar para budak kulit hitam, sehingga menghadapi perlawanan keras; seorang pembunuh bayaran bahkan melukai wajahnya. Ia lalu dipanggil kembali ke Spanyol sebagai bapa pengakuan Ratu, dan pada revolusi 1868 ikut mengungsi ke Paris. Ia mendirikan penerbitan Katolik besar dan menulis atau menerbitkan sekitar 200 buku. Setelah menghadiri Konsili Vatikan I, ia wafat dalam pengasingan di dekat perbatasan Spanyol pada usia 63 tahun.",
    "example": [
      "Memanfaatkan media dan bacaan rohani untuk menyebarkan iman.",
      "Mengampuni orang yang berbuat jahat kepada kita.",
      "Membela martabat orang kecil walaupun harus menghadapi fitnah."
    ],
    "patron": [],
    "keywords": [
      "anthony mary claret",
      "antonio claret",
      "klaretian",
      "cmf",
      "kuba",
      "spanyol",
      "hati maria"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-anthony-mary-claret/",
      "https://www.vaticannews.va/en/saints/10/24.html"
    ]
  },
  {
    "id": "st-simon-st-jude-ap",
    "date": "10-28",
    "name": "St. Simon dan St. Yudas, Rasul",
    "role": "Rasul",
    "years": "abad ke-1",
    "rank": "feast",
    "color": "red",
    "story": "Simon dan Yudas termasuk dalam kelompok Dua Belas Rasul yang dipilih Yesus sendiri. Simon disebut dalam keempat daftar para rasul, dan dua di antaranya menyebutnya 'orang Zelot'. Kaum Zelot adalah kelompok Yahudi yang sangat nasionalis; bagi mereka, hanya Allah yang menjadi raja Israel, dan penjajahan Romawi dianggap penghujatan. Yudas dinamai demikian dalam Injil Lukas dan Kisah Para Rasul, sedangkan Matius dan Markus menyebutnya Tadeus. Ia memiliki nama yang sama dengan Yudas Iskariot, sehingga sering dibedakan sebagai Yudas Tadeus. Selain dalam daftar para rasul, Injil hampir tidak menceritakan apa-apa tentang keduanya; para ahli Kitab Suci juga umumnya berpendapat bahwa Surat Yudas tidak ditulis olehnya. Menurut tradisi, keduanya mewartakan Injil di wilayah timur dan wafat sebagai martir, sehingga Gereja Barat merayakan mereka bersama. Kisah mereka mengingatkan bahwa kekudusan bukan hasil jasa, kebudayaan, kepribadian, atau prestasi manusia, melainkan anugerah Allah. Yesus memilih orang-orang yang tak terduga: seorang mantan Zelot, seorang pemungut cukai, dan para nelayan sederhana. Santo Yudas Tadeus sangat populer sebagai pendoa bagi perkara-perkara yang tampaknya mustahil.",
    "example": [
      "Percaya bahwa Allah dapat memakai siapa saja, termasuk kita yang biasa-biasa saja.",
      "Tidak putus asa dan tetap berdoa dalam keadaan yang tampak mustahil.",
      "Melepaskan cara-cara kekerasan dan mengikuti jalan Kristus."
    ],
    "patron": [
      "perkara yang tampaknya mustahil"
    ],
    "keywords": [
      "simon",
      "jude",
      "yudas tadeus",
      "thaddeus",
      "rasul",
      "zelot",
      "perkara mustahil"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saints-simon-and-jude/",
      "https://www.vaticannews.va/en/saints/10/28.html"
    ]
  },
  {
    "id": "st-martin-porres",
    "date": "11-03",
    "name": "St. Martinus de Porres, Biarawan",
    "role": "Biarawan Dominikan",
    "years": "1579–1639",
    "rank": "optional",
    "color": "white",
    "story": "Martinus de Porres lahir di Lima, Peru. Ayahnya seorang bangsawan Spanyol dan ibunya seorang perempuan merdeka dari Panama, keturunan Afrika atau mungkin pribumi. Orang tuanya tidak pernah menikah. Martinus mewarisi kulit gelap ibunya, sehingga ayahnya baru mengakuinya setelah delapan tahun dan kemudian meninggalkan keluarga itu. Ia tumbuh dalam kemiskinan dan diremehkan karena asal-usulnya. Pada usia 12 tahun ia magang pada seorang tukang cukur yang juga merawat orang sakit, dan belajar merawat luka serta meracik obat. Ia kemudian melamar ke biara Dominikan sebagai pembantu awam karena merasa tidak layak menjadi bruder. Sembilan tahun kemudian, karena teladan doa, tapa, cinta kasih, dan kerendahan hatinya, komunitas memintanya mengikrarkan kaul penuh. Siang hari ia merawat orang sakit dan miskin tanpa membedakan warna kulit, ras, atau status. Ia ikut mendirikan panti asuhan, merawat budak yang dibawa dari Afrika, mengelola derma biara, dan mengumpulkan dana untuk mas kawin gadis-gadis miskin. Ia juga dikenal sangat menyayangi binatang. Ia bersahabat dengan Santa Rosa dari Lima. Martinus wafat di Lima pada tahun 1639.",
    "example": [
      "Melayani semua orang tanpa membedakan ras, suku, atau status sosial.",
      "Mengerjakan tugas rumah tangga yang sederhana dengan kasih.",
      "Menolak sikap rasis dan mengampuni ketika diremehkan."
    ],
    "patron": [
      "keadilan sosial",
      "kerukunan antarras",
      "tukang cukur"
    ],
    "keywords": [
      "martin de porres",
      "lima",
      "peru",
      "dominikan",
      "rasisme",
      "orang miskin",
      "bruder"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-martin-de-porres/",
      "https://www.vaticannews.va/en/saints/11/03.html"
    ]
  },
  {
    "id": "st-charles-borromeo",
    "date": "11-04",
    "name": "St. Karolus Borromeus, Uskup",
    "role": "Uskup Agung dan Kardinal",
    "years": "1538–1584",
    "rank": "memorial",
    "color": "white",
    "story": "Karolus Borromeus berasal dari keluarga bangsawan Milan dan masih kerabat keluarga Medici yang berkuasa. Pada tahun 1559 pamannya terpilih menjadi Paus Pius IV, lalu mengangkat Karolus, yang saat itu masih seorang awam dan mahasiswa muda, menjadi kardinal-diakon dan administrator Keuskupan Agung Milan. Ia juga dipercaya memegang jabatan penting di Vatikan, termasuk sebagai sekretaris negara. Setelah kakaknya meninggal mendadak, ia memutuskan menjadi imam walaupun keluarganya mendesaknya menikah. Ia ditahbiskan imam pada usia 25 tahun, lalu menjadi Uskup Milan. Di balik layar, Karolus berjasa besar menjaga agar Konsili Trente tetap berlangsung sampai selesai. Setelah konsili ditutup, ia mencurahkan seluruh tenaganya untuk membarui Keuskupan Milan, baik para klerus maupun umat. Ia sendiri memberi teladan: sebagian besar penghasilannya diberikan untuk amal, ia menolak segala kemewahan dan menjalani tapa yang keras. Ketika wabah dan kelaparan melanda pada tahun 1576, ia berusaha memberi makan 60.000 sampai 70.000 orang setiap hari dan tetap tinggal di kota untuk melayani orang sakit dan sekarat, sementara para pejabat sipil melarikan diri. Beban tugas menggerogoti kesehatannya, dan ia wafat pada usia 46 tahun.",
    "example": [
      "Memulai pembaruan dari diri sendiri sebelum menuntut orang lain.",
      "Hidup sederhana dan menyisihkan penghasilan untuk orang yang membutuhkan.",
      "Tetap hadir dan menolong sesama ketika terjadi bencana atau wabah."
    ],
    "patron": [
      "seminaris",
      "katekis"
    ],
    "keywords": [
      "charles borromeo",
      "carlo borromeo",
      "milan",
      "konsili trente",
      "pembaruan",
      "wabah",
      "kardinal"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-charles-borromeo/",
      "https://www.vaticannews.va/en/saints/11/04.html"
    ]
  },
  {
    "id": "st-leo-great",
    "date": "11-10",
    "name": "St. Leo Agung, Paus dan Pujangga Gereja",
    "role": "Paus dan Pujangga Gereja",
    "years": "wafat 461",
    "rank": "memorial",
    "color": "white",
    "story": "Leo terpilih menjadi Uskup Roma pada tahun 440 dan memimpin Gereja sampai wafatnya pada tahun 461. Ia sangat sadar akan tugasnya sebagai pengganti Petrus, namun memperlakukan para uskup lain sebagai rekan sejawat. Leo dikenal sebagai salah satu paus yang paling cakap dalam memimpin Gereja kuno. Karyanya mencakup empat bidang besar. Pertama, ia berjuang melawan ajaran-ajaran sesat seperti Pelagianisme, yang terlalu menekankan kemampuan manusia, dan Manikeisme, yang menganggap segala yang jasmani itu jahat. Kedua, ia menanggapi pertikaian ajaran di Gereja Timur dengan sebuah surat terkenal yang menjelaskan ajaran Gereja tentang dua kodrat Kristus, ilahi dan manusiawi, dalam satu pribadi. Ketiga, dengan iman yang teguh ia tampil sebagai juru damai dan pembela kota Roma ketika bangsa-bangsa asing menyerbu. Keempat, dan menjadi dasar kekudusannya, ia adalah gembala yang memperhatikan umatnya. Khotbah-khotbahnya mendalam secara rohani, berakar pada Kitab Suci, dan menyentuh kebutuhan sehari-hari umat; salah satunya dibacakan dalam Ibadat Bacaan pada Hari Natal. Karena ajaran dan kepemimpinannya, ia digelari 'Agung' dan Pujangga Gereja.",
    "example": [
      "Menjadi pembawa damai dalam konflik di sekitar kita.",
      "Mendalami iman agar dapat menjelaskannya dengan jelas.",
      "Menjalankan tugas kepemimpinan dan administrasi sebagai bentuk pelayanan."
    ],
    "patron": [],
    "keywords": [
      "leo the great",
      "leo i",
      "paus",
      "dua kodrat kristus",
      "kalsedon",
      "roma",
      "khotbah"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-leo-the-great/",
      "https://www.vaticannews.va/en/saints/11/10.html"
    ]
  },
  {
    "id": "st-martin-tours",
    "date": "11-11",
    "name": "St. Martinus dari Tours, Uskup",
    "role": "Uskup",
    "years": "± 316–397",
    "rank": "memorial",
    "color": "white",
    "story": "Martinus lahir dari orang tua kafir di wilayah yang kini menjadi Hungaria dan dibesarkan di Italia. Sebagai anak seorang veteran, ia dipaksa masuk tentara pada usia 15 tahun. Ia menjadi katekumen dan dibaptis pada usia 18 tahun; konon ia hidup lebih seperti rahib daripada prajurit. Kisah yang paling terkenal tentangnya, menurut tradisi, adalah ketika ia membelah mantelnya untuk diberikan kepada seorang pengemis yang kedinginan. Pada usia 23 tahun ia menolak bonus perang dan memohon agar diizinkan melayani Kristus saja. Setelah keluar dari tentara, ia menjadi murid Santo Hilarius dari Poitiers dan giat menentang ajaran Arianisme. Ia lalu hidup sebagai rahib dan mendirikan biara di dekat Poitiers, yang mungkin merupakan biara pertama di Prancis. Rakyat Tours kemudian menuntut agar ia menjadi uskup mereka; dengan berat hati ia menerimanya. Sebagai uskup, ia memberantas penyembahan berhala tetapi juga memohon belas kasihan bagi para bidaah: bersama Santo Ambrosius ia menentang hukuman mati atas Priscilianus. Menjelang wafatnya, ia berdoa agar kehendak Tuhan yang terjadi. Martinus adalah salah satu orang kudus pertama yang dihormati tanpa menjadi martir.",
    "example": [
      "Berbagi pakaian dan barang dengan orang yang kedinginan atau kekurangan.",
      "Menolak kekerasan dan memohon belas kasihan, bahkan bagi lawan.",
      "Menerima tugas pelayanan dengan rendah hati walaupun tidak mencarinya."
    ],
    "patron": [
      "tentara",
      "Prancis",
      "pengemis"
    ],
    "keywords": [
      "martin of tours",
      "tours",
      "prancis",
      "mantel",
      "tentara",
      "rahib",
      "pengemis"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-martin-of-tours/",
      "https://www.vaticannews.va/en/saints/11/11.html"
    ]
  },
  {
    "id": "st-josaphat",
    "date": "11-12",
    "name": "St. Yosafat, Uskup dan Martir",
    "role": "Uskup Agung dan Martir",
    "years": "± 1580–1623",
    "rank": "memorial",
    "color": "white",
    "story": "Yosafat, yang bernama asli Yohanes Kunsevych, lahir di wilayah yang kini menjadi Ukraina. Pada tahun 1595–1596, sejumlah uskup Ortodoks Rutenia yang mewakili jutaan umat mengupayakan persatuan kembali dengan Roma melalui Uni Brest. Yohanes, yang bekerja di Wilno (Vilnius), dipengaruhi oleh para klerus pendukung uni itu. Ia menjadi rahib Basilian dengan nama Yosafat, kemudian ditahbiskan imam dan dikenal sebagai pengkhotbah serta pertapa. Dalam usia relatif muda ia menjadi Uskup Agung Polotsk. Banyak rahib menolak persatuan dengan Roma karena takut liturgi dan adat mereka dicampuri. Melalui sinode, katekese, pembaruan klerus, dan teladan pribadi, Yosafat berhasil membawa sebagian besar umat di wilayahnya ke dalam persatuan. Namun kemudian dibentuk hierarki tandingan, dan ia dituduh telah 'menjadi Latin'. Meskipun telah diperingatkan, ia tetap pergi ke Vitebsk, kota yang penuh ketegangan. Pada 12 November 1623 segerombolan massa menyerbu rumahnya; ia dipukul dengan kapak tombak, ditembak, dan jenazahnya dibuang ke sungai. Jenazahnya kemudian ditemukan dan kini dimakamkan di Basilika Santo Petrus, Roma. Ia adalah orang kudus pertama dari Gereja Timur yang dikanonisasi oleh Roma.",
    "example": [
      "Berdoa dan berusaha bagi persatuan umat Kristiani.",
      "Menghormati tradisi dan ritus Gereja yang berbeda dari kebiasaan kita.",
      "Tetap setia melayani walaupun ditentang dan difitnah."
    ],
    "patron": [
      "Ukraina"
    ],
    "keywords": [
      "josaphat",
      "kuntsevych",
      "ukraina",
      "belarus",
      "gereja timur",
      "persatuan",
      "basilian"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-josaphat/",
      "https://www.vaticannews.va/en/saints/11/12.html"
    ]
  },
  {
    "id": "st-albert-great",
    "date": "11-15",
    "name": "St. Albertus Agung, Uskup dan Pujangga Gereja",
    "role": "Uskup, Biarawan Dominikan, dan Pujangga Gereja",
    "years": "± 1200–1280",
    "rank": "optional",
    "color": "white",
    "story": "Albertus Agung adalah seorang biarawan Dominikan Jerman dari abad ke-13. Ia putra sulung seorang bangsawan Jerman yang kaya dan berpangkat militer, dan mendapat pendidikan dalam ilmu-ilmu humaniora. Walaupun keluarganya menentang keras, ia masuk novisiat Ordo Dominikan. Rasa ingin tahunya tak terbatas: ia bertekad menyusun ringkasan seluruh pengetahuan, mulai dari ilmu alam, logika, retorika, matematika, astronomi, etika, ekonomi, politik, sampai metafisika, agar semua itu dapat dipahami oleh dunia Latin. Pekerjaan itu memakan waktu dua puluh tahun. Ia mengajar di Paris dan Köln, menjadi provinsial Dominikan, dan untuk waktu singkat menjabat Uskup Regensburg. Ia juga membela ordo-ordo pengemis dan berkhotbah di Jerman serta Bohemia. Albertus sangat berpengaruh dalam menentukan sikap Gereja terhadap filsafat Aristoteles yang masuk ke Eropa melalui dunia Islam. Ia dikenal terutama sebagai guru Santo Tomas Aquinas; usahanya memahami Aristoteles membuka jalan bagi Tomas untuk memadukan kebijaksanaan Yunani dengan teologi Kristiani. Gereja menghormatinya karena keterbukaannya terhadap kebenaran di mana pun kebenaran itu ditemukan. Ia wafat di Köln pada tahun 1280 dan dihormati sebagai Pujangga Gereja serta pelindung para ilmuwan.",
    "example": [
      "Belajar dengan tekun dan jujur, karena iman dan ilmu tidak saling bertentangan.",
      "Terbuka terhadap kebenaran dari mana pun asalnya.",
      "Membagikan ilmu dengan murah hati dan membimbing generasi berikutnya."
    ],
    "patron": [
      "ilmuwan",
      "filsuf"
    ],
    "keywords": [
      "albert the great",
      "albertus magnus",
      "dominikan",
      "koln",
      "ilmuwan",
      "tomas aquinas",
      "filsafat"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-albert-the-great/",
      "https://www.vaticannews.va/en/saints/11/15.html"
    ]
  },
  {
    "id": "st-gertrude-great",
    "date": "11-16",
    "name": "St. Gertrudis Agung, Perawan",
    "role": "Biarawati dan Mistikus",
    "years": "1256–± 1302",
    "rank": "optional",
    "color": "white",
    "story": "Gertrudis lahir di Jerman pada 6 Januari 1256. Pada usia sekitar lima tahun ia dititipkan di sekolah biara Helfta di Saksonia, dan sejak itu seluruh hidupnya dijalani di sana. Ia belajar dengan sangat tekun; menurut penulis riwayat hidupnya, ia beralih dari ilmu tata bahasa dan sastra kepada teologi, Kitab Suci, dan tulisan para Bapa Gereja. Pada usia sekitar 25 tahun ia mengalami penglihatan pertama yang mengubah arah hidup rohaninya. Bersama sahabat sekaligus gurunya, Santa Mechtildis, ia menjadi salah satu mistikus besar abad ke-13. Ia memandang dirinya sebagai mempelai Kristus, dan hidup rohaninya merupakan persatuan pribadi yang mesra dengan Yesus dan Hati Kudus-Nya, yang menghantarnya ke dalam kehidupan Allah Tritunggal. Devosi kepada Hati Kudus menjadi ciri khas kesalehannya. Namun kesalehannya bukan kesalehan pribadi yang menyendiri: Gertrudis menghayati irama liturgi Gereja dan menimba gambaran doanya dari liturgi dan Kitab Suci. Pengalaman rohaninya dicatat dalam karya Legatus Divinae Pietatis (Utusan Kasih Ilahi), yang buku keduanya ditulis sendiri olehnya, serta dalam Latihan-latihan Rohani. Ia wafat di Helfta pada 17 November 1301 atau 1302.",
    "example": [
      "Menjadikan Misa dan liturgi sebagai sumber doa pribadi.",
      "Membangun relasi yang akrab dan pribadi dengan Yesus.",
      "Tekun belajar Kitab Suci dan ajaran iman."
    ],
    "patron": [],
    "keywords": [
      "gertrude the great",
      "gertrud",
      "helfta",
      "mistik",
      "hati kudus",
      "benediktin",
      "jerman"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-gertrude-the-great/",
      "https://www.newadvent.org/cathen/06534a.htm"
    ]
  },
  {
    "id": "st-margaret-scotland",
    "date": "11-16",
    "name": "St. Margareta dari Skotlandia",
    "role": "Ratu",
    "years": "± 1045–1093",
    "rank": "optional",
    "color": "white",
    "story": "Margareta bukan orang Skotlandia sejak lahir. Ia putri Putri Agata dari Hungaria dan Pangeran Anglo-Saxon Edward Atheling, dan sebagian masa mudanya dihabiskan di istana paman buyutnya, Raja Inggris Edward Sang Pengaku Iman. Keluarganya melarikan diri dari William Sang Penakluk dan kapal mereka karam di pantai Skotlandia. Raja Malcolm menyambut mereka dan terpikat pada Margareta; mereka menikah di Dunfermline pada tahun 1070. Malcolm berhati baik tetapi kasar, dan berkat kasihnya kepada Margareta, sang ratu mampu melembutkan wataknya dan membantunya menjadi raja yang berbudi. Margareta memajukan seni dan pendidikan, mendorong sinode untuk memperbaiki penyalahgunaan dalam Gereja, dan bersama suaminya mendirikan beberapa gereja. Mereka dikaruniai enam putra dan dua putri, dan Margareta sendiri mengawasi pendidikan iman anak-anaknya. Hidup pribadinya sederhana dan penuh doa serta pembacaan Kitab Suci. Ia tidak pernah menolak pengemis; tercatat bahwa ia tidak duduk makan sebelum memberi makan sembilan anak yatim dan 24 orang dewasa. Pada tahun 1093 Raja Malcolm dan putra sulungnya tewas dalam serangan di Alnwick. Margareta, yang sudah terbaring sakit, wafat empat hari kemudian.",
    "example": [
      "Mendidik anak-anak dalam iman dengan perhatian pribadi.",
      "Menyediakan waktu tetap untuk doa dan membaca Kitab Suci di tengah kesibukan keluarga dan pekerjaan.",
      "Melayani orang miskin secara langsung, bukan hanya memberi dari jauh."
    ],
    "patron": [
      "Skotlandia"
    ],
    "keywords": [
      "margaret of scotland",
      "skotlandia",
      "ratu",
      "malcolm",
      "dunfermline",
      "ibu",
      "orang miskin"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-margaret-of-scotland/",
      "https://www.vaticannews.va/en/saints/11/16.html"
    ]
  },
  {
    "id": "st-elizabeth-hungary",
    "date": "11-17",
    "name": "St. Elisabet dari Hungaria, Biarawati",
    "role": "Putri Raja dan Anggota Ordo Fransiskan Sekular",
    "years": "1207–1231",
    "rank": "memorial",
    "color": "white",
    "story": "Elisabet adalah putri Raja Hungaria. Hidup santai dan mewah sebenarnya mudah ia dapatkan, tetapi ia memilih jalan tobat dan kesederhanaan. Pada usia 14 tahun ia menikah dengan Ludwig dari Thüringen, yang sangat ia cintai, dan dikaruniai tiga anak. Di bawah bimbingan rohani seorang biarawan Fransiskan, ia menjalani hidup doa, pengorbanan, dan pelayanan kepada orang miskin dan sakit. Ia mengenakan pakaian sederhana dan setiap hari membagikan roti kepada ratusan orang termiskin yang datang ke gerbang istana. Setelah enam tahun menikah, suaminya wafat dalam perjalanan Perang Salib, dan Elisabet sangat berduka. Keluarga suaminya menganggapnya memboroskan harta kerajaan, memperlakukannya dengan buruk, dan akhirnya mengusirnya dari istana. Ketika sekutu suaminya kembali, kedudukannya dipulihkan karena putranya adalah pewaris sah. Pada tahun 1228 ia bergabung dengan Ordo Fransiskan Sekular dan menghabiskan sisa hidupnya merawat orang miskin di sebuah rumah sakit yang ia dirikan untuk menghormati Santo Fransiskus dari Assisi. Kesehatannya merosot, dan ia wafat pada tahun 1231, sebelum berusia 24 tahun. Karena sangat dicintai umat, ia dikanonisasi hanya empat tahun kemudian.",
    "example": [
      "Melayani kebutuhan paling sederhana sesama, seperti memberi makan orang lapar.",
      "Hidup sederhana walaupun mampu bermewah-mewah.",
      "Mencari pembimbing rohani untuk bertumbuh dalam iman."
    ],
    "patron": [
      "karya karitatif Katolik",
      "Ordo Fransiskan Sekular"
    ],
    "keywords": [
      "elizabeth of hungary",
      "elisabet",
      "thuringia",
      "fransiskan sekular",
      "roti",
      "orang miskin",
      "rumah sakit"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-elizabeth-of-hungary/",
      "https://www.vaticannews.va/en/saints/11/17.html"
    ]
  },
  {
    "id": "dedication-sts-peter-paul",
    "date": "11-18",
    "name": "Pemberkatan Basilika St. Petrus dan St. Paulus, Rasul",
    "role": "Peringatan pemberkatan gereja",
    "years": "",
    "rank": "optional",
    "color": "white",
    "story": "Pada hari ini Gereja mengenang pemberkatan dua basilika besar di Roma yang dibangun di atas makam para rasul Petrus dan Paulus. Basilika Santo Petrus adalah gereja paling terkenal dalam dunia Kristiani, tetapi awalnya sangat sederhana. Bukit Vatikan dahulu hanyalah sebuah pemakaman tempat umat berkumpul untuk berdoa di makam Santo Petrus. Pada tahun 319 Kaisar Konstantinus membangun basilika di tempat itu, yang berdiri lebih dari seribu tahun sampai hampir runtuh. Pada tahun 1506 Paus Yulius II memerintahkan pembongkaran dan pembangunan kembali; basilika baru itu baru selesai dan diberkati lebih dari satu abad kemudian. Basilika Santo Paulus di Luar Tembok juga dibangun pertama kali oleh Konstantinus, di atas tempat yang secara tradisional diyakini sebagai makam Paulus, dekat tempat ia dipenggal. Sampai Basilika Santo Petrus dibangun ulang, inilah gereja terbesar di Roma. Bangunan yang sekarang didirikan kembali setelah kebakaran tahun 1823. Pada masa awal, kedua basilika yang berjauhan itu bahkan dihubungkan oleh serambi beratap bertiang marmer. Menurut tradisi, Petrus wafat disalib dan Paulus dipenggal di Roma. Sejak awal, umat beriman berziarah dan berdoa di makam kedua rasul ini.",
    "example": [
      "Menghargai gereja sebagai rumah doa dan tanda persekutuan umat.",
      "Mendoakan Paus dan persatuan Gereja universal.",
      "Meneladani keberanian Petrus dan Paulus dalam mewartakan iman."
    ],
    "patron": [],
    "keywords": [
      "basilika santo petrus",
      "santo paulus di luar tembok",
      "roma",
      "vatikan",
      "konstantinus",
      "pemberkatan gereja"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/dedication-of-churches-of-saints-peter-and-paul/",
      "https://www.vaticannews.va/en/saints/11/18.html"
    ]
  },
  {
    "id": "presentation-mary",
    "date": "11-21",
    "name": "SP Maria Dipersembahkan kepada Allah",
    "role": "Peringatan Santa Perawan Maria",
    "years": "",
    "rank": "memorial",
    "color": "white",
    "story": "Peringatan ini mengenang persembahan Maria kepada Allah di Bait Suci ketika ia masih kanak-kanak. Kisah ini tidak terdapat dalam Kitab Suci, tetapi dalam tulisan apokrif, terutama Protoevangelium Yakobus, yang tidak dianggap sebagai catatan sejarah. Menurut tradisi itu, Yoakim dan Anna mempersembahkan Maria kepada Allah di Bait Suci ketika ia berusia tiga tahun, untuk memenuhi janji yang dibuat Anna ketika ia belum mempunyai anak. Pesta ini sudah dirayakan di Yerusalem pada abad keenam, dan di sana dibangun sebuah gereja untuk menghormati misteri ini. Gereja Timur sangat menghargai pesta ini, sedangkan di Barat pesta ini muncul pada abad ke-11. Walaupun kadang-kadang hilang dari kalender, pada abad ke-16 pesta ini ditetapkan bagi seluruh Gereja. Meskipun peristiwanya tidak dapat dibuktikan secara historis, peringatan ini memiliki makna teologis yang penting. Ia melanjutkan pesan Hari Raya Maria Dikandung Tanpa Noda dan Pesta Kelahiran Maria: kekudusan yang dianugerahkan kepada Maria sejak awal hidupnya terus berlangsung sepanjang masa kanak-kanaknya. Sejak awal, Maria dipersembahkan seutuhnya kepada Allah, dan ia sendiri menjadi bait yang lebih agung daripada bangunan buatan tangan manusia.",
    "example": [
      "Mempersembahkan hidup dan hari-hari kita kepada Allah sejak pagi.",
      "Mendampingi anak-anak untuk mengenal dan mencintai Tuhan sejak kecil.",
      "Menjaga tubuh dan hati sebagai bait Allah."
    ],
    "patron": [],
    "keywords": [
      "presentation of mary",
      "maria dipersembahkan",
      "bait allah",
      "yoakim",
      "anna",
      "kanak-kanak maria"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/presentation-of-the-blessed-virgin-mary/",
      "https://www.vaticannews.va/en/saints/11/21.html"
    ]
  },
  {
    "id": "st-cecilia",
    "date": "11-22",
    "name": "St. Sesilia, Perawan dan Martir",
    "role": "Perawan dan Martir",
    "years": "± abad ke-3",
    "rank": "memorial",
    "color": "white",
    "story": "Sesilia adalah salah satu martir Roma yang paling terkenal, tetapi kisah-kisah populer tentang dirinya lebih bersifat legenda daripada sejarah. Menurut tradisi, ia seorang gadis bangsawan Roma yang wafat sebagai martir sekitar tahun 230, pada masa Kaisar Aleksander Severus. Penghormatan kepadanya sudah sangat tua: basilika yang dinamai menurut namanya di Trastevere, Roma, didirikan sejak awal, dan pestanya sudah dirayakan pada tahun 545. Menurut kisah sengsaranya (Passio), Sesilia dijodohkan dengan seorang bangsawan bernama Valerianus. Pada hari pernikahan ia mengungkapkan bahwa ia telah menjadi Kristen dan berkaul perawan. Valerianus kemudian dibaptis, demikian pula saudaranya Tiburtius, dan keduanya wafat sebagai martir. Sesilia lalu dihukum mati. Menurut legenda, algojo memukul lehernya tiga kali dengan pedang tetapi tidak berhasil memenggalnya, dan ia masih hidup tiga hari. Selama itu ia membagikan hartanya kepada orang miskin dan menyerahkan rumahnya untuk dijadikan gereja. Sejak masa Renaisans ia sering dilukiskan sambil memainkan alat musik, dan ia dihormati sebagai pelindung musik gereja. Namanya juga disebut dalam Doa Syukur Agung I.",
    "example": [
      "Memuji Tuhan dengan bernyanyi, terutama dalam liturgi.",
      "Melayani dalam paduan suara atau pelayanan musik gereja dengan sepenuh hati.",
      "Setia pada janji kepada Tuhan dan berani mengakui iman."
    ],
    "patron": [
      "musik gereja",
      "musisi"
    ],
    "keywords": [
      "cecilia",
      "sesilia",
      "musik",
      "paduan suara",
      "martir",
      "roma",
      "trastevere"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-cecilia/",
      "https://www.vaticannews.va/en/saints/11/22/st--cecilia--virgin-and-martyr-in-the-cemitery-of--callistus.html"
    ]
  },
  {
    "id": "st-clement-i-pope",
    "date": "11-23",
    "name": "St. Klemens I, Paus dan Martir",
    "role": "Paus dan Martir",
    "years": "wafat ± 99–101",
    "rank": "optional",
    "color": "white",
    "story": "Klemens dari Roma adalah pengganti ketiga Santo Petrus sebagai Uskup Roma dan memimpin Gereja pada dasawarsa terakhir abad pertama. Ia termasuk dalam kelompok Bapa Apostolik, yaitu para pemimpin Gereja yang menjadi mata rantai langsung antara para rasul dan generasi Bapa Gereja sesudahnya. Klemens dikenal terutama karena Surat Pertama kepada Jemaat di Korintus, yang disimpan dan dibaca luas dalam Gereja perdana. Surat itu ditulisnya untuk menanggapi perpecahan di Korintus, di mana banyak umat awam memberontak terhadap para pemimpin jemaat. Klemens menyesalkan perpecahan yang tidak sah dan tidak dapat dibenarkan itu, lalu mendesak mereka menyembuhkan luka itu dengan cinta kasih. Surat ini juga menjadi salah satu kesaksian paling awal tentang kepedulian Gereja Roma terhadap Gereja-gereja lain. Basilika Santo Klemens di Roma, salah satu gereja paroki tertua di kota itu, kemungkinan dibangun di atas lokasi rumahnya. Menurut tradisi, Klemens wafat sebagai martir sekitar tahun 99 atau 101. Kesetiaannya menjaga kesatuan dan kasih dalam jemaat menjadikannya teladan yang tetap relevan bagi Gereja yang sering terpecah oleh perbedaan pendapat.",
    "example": [
      "Menjadi juru damai ketika terjadi perpecahan di paroki atau keluarga.",
      "Menyampaikan teguran dengan kasih, bukan dengan amarah.",
      "Menghormati para pemimpin jemaat dan mendoakan mereka."
    ],
    "patron": [],
    "keywords": [
      "clement of rome",
      "klemens",
      "paus",
      "bapa apostolik",
      "korintus",
      "kesatuan",
      "martir"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-clement/",
      "https://www.vaticannews.va/en/saints/11/23.html"
    ]
  },
  {
    "id": "st-columban",
    "date": "11-23",
    "name": "St. Kolumbanus, Abas",
    "role": "Abas dan Misionaris",
    "years": "± 543–615",
    "rank": "optional",
    "color": "white",
    "story": "Kolumbanus adalah misionaris Irlandia terbesar yang berkarya di daratan Eropa. Ketika masih muda, ia sangat tersiksa oleh godaan daging, lalu meminta nasihat seorang perempuan saleh yang telah bertahun-tahun hidup sebagai pertapa. Dalam jawabannya ia mendengar panggilan untuk meninggalkan dunia. Ia mula-mula berguru kepada seorang rahib di sebuah pulau di Lough Erne, kemudian masuk biara besar Bangor yang terkenal sebagai pusat ilmu. Setelah bertahun-tahun hidup dalam kesunyian dan doa, ia berangkat ke Galia bersama dua belas rekan misionaris. Mereka dihormati karena disiplin hidup yang keras, khotbah mereka, serta cinta kasih di tengah masa kemerosotan klerus dan kekacauan sipil. Kolumbanus mendirikan beberapa biara yang menjadi pusat iman dan kebudayaan, dan menulis regula biara, sebuah risalah tentang tobat, khotbah, dan puisi. Ia menghadapi tentangan para uskup Frank dan menegur raja karena hidupnya yang tidak bermoral, sehingga ia diusir untuk dipulangkan ke Irlandia. Namun kapalnya kandas dalam badai, dan ia melanjutkan karyanya di Eropa sampai tiba di Italia, di mana raja Lombardia menerimanya. Pada tahun-tahun terakhirnya ia mendirikan biara Bobbio yang termasyhur dan wafat di sana.",
    "example": [
      "Berani meminta nasihat rohani ketika bergulat dengan godaan.",
      "Hidup disiplin dan sederhana di tengah budaya yang serba nyaman.",
      "Berani menegur kesalahan dengan jujur, bahkan kepada orang berkuasa."
    ],
    "patron": [],
    "keywords": [
      "columban",
      "columbanus",
      "kolumbanus",
      "irlandia",
      "bobbio",
      "misionaris",
      "biara"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-columban/",
      "https://www.vaticannews.va/en/saints/11/23.html"
    ]
  },
  {
    "id": "st-andrew-dung-lac",
    "date": "11-24",
    "name": "St. Andreas Dung-Lac, Imam, dan Kawan-kawan, Martir",
    "role": "Imam dan Martir",
    "years": "± 1795–1839",
    "rank": "memorial",
    "color": "red",
    "story": "Peringatan ini menghormati 117 martir Vietnam yang dikanonisasi bersama oleh Paus Yohanes Paulus II pada tahun 1988. Mereka adalah uskup, imam, dan banyak awam, termasuk seorang ibu dari enam anak dan seorang anak berusia sembilan tahun, yang wafat demi Kristus antara abad ke-17 dan ke-19. Sebanyak 96 orang adalah warga Vietnam, dan 21 lainnya misionaris dari Spanyol dan Prancis. Mereka mewakili 100.000 sampai 300.000 umat yang menjadi martir atau menderita berat. Andreas Dung-Lac lahir sekitar tahun 1795 dengan nama Dung An-Tran dalam keluarga miskin di Vietnam utara yang menganut agama tradisional. Pada usia dua belas tahun ia pindah ke Hanoi, tinggal bersama seorang katekis yang mengajarinya tentang Kristus, lalu dibaptis dengan nama Andreas. Ia ditahbiskan imam pada tahun 1823, dan khotbah serta kesederhanaan hidupnya membawa banyak orang kepada baptisan. Pada tahun 1832 Kaisar Minh Mang melarang misionaris asing dan memaksa umat Kristen menginjak salib. Andreas ditangkap pada tahun 1835 tetapi ditebus oleh umatnya; ia mengganti namanya menjadi Lac dan berpindah tempat. Pada tahun 1839 ia ditangkap lagi bersama imam Petrus Thi, disiksa, dan dipenggal di Hanoi.",
    "example": [
      "Mendukung umat Kristen yang dianiaya melalui doa dan bantuan nyata.",
      "Melindungi dan menolong para pelayan Gereja yang menghadapi bahaya.",
      "Tetap setia mengaku iman walaupun menjadi minoritas."
    ],
    "patron": [
      "Vietnam"
    ],
    "keywords": [
      "andrew dung-lac",
      "martir vietnam",
      "vietnam",
      "hanoi",
      "minh mang",
      "penganiayaan",
      "katekis"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/11/24/sts--andrew-d_ng-lc--and-his-companions--martyrs.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-andrew-dung-lac-and-companions/"
    ]
  },
  {
    "id": "st-catherine-alexandria",
    "date": "11-25",
    "name": "St. Katarina dari Aleksandria, Perawan dan Martir",
    "role": "Perawan dan Martir",
    "years": "± awal abad ke-4",
    "rank": "optional",
    "color": "white",
    "story": "Hampir semua yang diketahui tentang Katarina dari Aleksandria berasal dari legenda, sehingga data sejarahnya sangat terbatas. Menurut legenda, ia seorang perempuan muda di Aleksandria, Mesir, yang menjadi Kristen setelah menerima sebuah penglihatan. Pada usia 18 tahun ia berdebat dengan 50 filsuf kafir. Karena kagum akan kebijaksanaan dan kecakapannya berdebat, para filsuf itu menjadi Kristen, demikian pula sekitar 200 prajurit dan anggota keluarga kaisar; semuanya kemudian dihukum mati. Katarina dijatuhi hukuman mati di atas roda berduri, tetapi, menurut kisah itu, roda tersebut hancur ketika disentuhnya. Akhirnya ia dipenggal. Berabad-abad kemudian, menurut tradisi, para malaikat membawa jenazahnya ke sebuah biara di kaki Gunung Sinai, yang kini dikenal sebagai Biara Santa Katarina. Devosi kepadanya menyebar luas di Eropa, terutama sejak masa Perang Salib. Ia diserukan sebagai pelindung para pelajar, guru, pustakawan, dan ahli hukum, dan termasuk dalam Empat Belas Penolong Kudus yang dihormati khususnya di Jerman dan Hungaria. Bagi Katarina, kebijaksanaan Allah lebih berharga daripada segala hadiah dan kehormatan yang ditawarkan para penyiksanya.",
    "example": [
      "Mempergunakan akal budi dan pendidikan untuk memahami dan mempertanggungjawabkan iman.",
      "Berani berbicara jujur tentang iman dengan sopan.",
      "Memilih integritas daripada keuntungan duniawi."
    ],
    "patron": [
      "pelajar",
      "guru",
      "pustakawan",
      "ahli hukum"
    ],
    "keywords": [
      "catherine of alexandria",
      "katarina",
      "aleksandria",
      "sinai",
      "roda",
      "filsuf",
      "pelajar"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-catherine-of-alexandria/",
      "https://www.vaticannews.va/en/saints/11/25.html"
    ]
  },
  {
    "id": "st-andrew-ap",
    "date": "11-30",
    "name": "St. Andreas, Rasul",
    "role": "Rasul",
    "years": "abad ke-1",
    "rank": "feast",
    "color": "red",
    "story": "Andreas adalah saudara Simon Petrus, seorang nelayan dari Galilea. Injil Matius mengisahkan bagaimana Yesus, ketika berjalan di tepi Danau Galilea, melihat kedua bersaudara itu sedang menebarkan jala, lalu berkata kepada mereka, 'Mari, ikutlah Aku, dan kamu akan Kujadikan penjala manusia'; seketika itu juga mereka meninggalkan jala dan mengikuti Dia. Injil Yohanes menampilkan Andreas sebagai murid Yohanes Pembaptis. Ketika Yohanes menunjuk Yesus sebagai 'Anak Domba Allah', Andreas dan seorang murid lain mengikuti Yesus dan tinggal bersama-Nya hari itu. Andreas kemudian membawa saudaranya, Simon, kepada Yesus. Selebihnya, Injil hanya sedikit bercerita tentang dia. Sebelum mukjizat penggandaan roti, Andreaslah yang menyebut adanya seorang anak yang membawa lima roti jelai dan dua ikan. Ketika beberapa orang Yunani ingin bertemu Yesus, mereka datang kepada Filipus, dan Filipus meminta bantuan Andreas. Menurut tradisi, Andreas mewartakan Injil di wilayah yang kini menjadi Yunani dan Turki, lalu wafat disalib di Patras pada salib berbentuk huruf X. Ia dipanggil secara pribadi oleh Yesus untuk mewartakan Kabar Gembira dan ikut ambil bagian dalam hidup serta wafat-Nya.",
    "example": [
      "Membawa orang lain kepada Yesus, seperti Andreas membawa saudaranya.",
      "Menyerahkan yang sedikit kita miliki agar dipakai Tuhan.",
      "Menanggapi panggilan Tuhan dengan segera dan murah hati."
    ],
    "patron": [
      "Skotlandia",
      "nelayan"
    ],
    "keywords": [
      "andrew",
      "andreas",
      "rasul",
      "nelayan",
      "patras",
      "salib x",
      "skotlandia"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-andrew/",
      "https://www.vaticannews.va/en/saints/11/30/st--andrew--apostle.html"
    ]
  },
  {
    "id": "st-francis-xavier",
    "date": "12-03",
    "name": "St. Fransiskus Xaverius, Imam",
    "role": "Imam Yesuit dan Misionaris",
    "years": "1506–1552",
    "rank": "memorial",
    "color": "white",
    "story": "Fransiskus Xaverius lahir pada tahun 1506 di puri Javier (Xavier), di Navarra, dalam keluarga bangsawan. Ketika belajar dan mengajar di Paris, ia sekamar dengan Ignasius dari Loyola, yang berulang-ulang mengingatkannya akan sabda Yesus: 'Apa gunanya seorang memperoleh seluruh dunia, tetapi kehilangan nyawanya?' Setelah menjalani Latihan Rohani, Fransiskus bergabung dengan kelompok kecil yang menjadi cikal bakal Serikat Yesus dan pada tahun 1534 mengikrarkan kaul di Montmartre. Ia ditahbiskan imam di Venesia pada tahun 1537. Ketika Raja Portugal meminta misionaris dan calon yang dipilih jatuh sakit, Fransiskus langsung bersedia berangkat. Ia tiba di Goa, India, pada tahun 1542, melayani orang sakit dan anak-anak, lalu berkarya di antara para nelayan mutiara dan membaptis banyak orang. Ia juga berlayar ke wilayah yang kini menjadi Indonesia, termasuk Maluku, kemudian ke Jepang pada tahun 1549. Di mana pun ia tinggal bersama orang paling miskin, merawat orang sakit, termasuk penderita kusta, dan surat-suratnya menunjukkan sukacita yang besar. Ia bercita-cita mewartakan Injil di Tiongkok, tetapi jatuh sakit dan wafat di Pulau Shangchuan pada tahun 1552, dalam usia 46 tahun. Bersama Santa Theresia dari Lisieux, ia dinyatakan pelindung misi pada tahun 1925.",
    "example": [
      "Mewartakan Injil lewat teladan hidup di keluarga, kantor, dan lingkungan.",
      "Bersedia diutus dan berkata 'ya' kepada tugas yang tidak terduga.",
      "Mendukung karya misi melalui doa dan derma."
    ],
    "patron": [
      "misi",
      "misionaris"
    ],
    "keywords": [
      "francis xavier",
      "fransiskus xaverius",
      "yesuit",
      "misionaris",
      "goa",
      "maluku",
      "jepang"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-francis-xavier/",
      "https://www.vaticannews.va/en/saints/12/03/st--francis--saverio--jesuit---apostle-of-the-indies--patron-of-.html"
    ]
  },
  {
    "id": "st-john-damascene",
    "date": "12-04",
    "name": "St. Yohanes dari Damsyik, Imam dan Pujangga Gereja",
    "role": "Imam, Rahib, dan Pujangga Gereja",
    "years": "± 675–749",
    "rank": "optional",
    "color": "white",
    "story": "Yohanes lahir di Damsyik (Damaskus) dan seluruh hidupnya dijalani di bawah pemerintahan Muslim. Ia memperoleh pendidikan klasik dan teologi, lalu mengikuti jejak ayahnya bekerja di pemerintahan khalifah Arab. Beberapa tahun kemudian ia mengundurkan diri dan masuk biara Santo Sabas di dekat Yerusalem, tempat ia menghabiskan sebagian besar hidupnya sebagai rahib dan imam. Ia dikenal karena tiga hal. Pertama, tulisan-tulisannya membela penghormatan terhadap ikon atau gambar kudus melawan kaum ikonoklas. Ironisnya, larangan terhadap ikon justru datang dari Kaisar Kristen Leo di Konstantinopel, dan karena Yohanes tinggal di wilayah Muslim, lawan-lawannya tidak dapat membungkamnya. Kedua, ia menulis Uraian tentang Iman Ortodoks, sebuah ringkasan ajaran para Bapa Gereja Yunani; ia sendiri dianggap sebagai Bapa Gereja Yunani terakhir. Karya ini bagi sekolah-sekolah di Timur sepenting Summa karya Tomas Aquinas bagi Barat. Ketiga, ia seorang penyair besar Gereja Timur yang menggubah banyak madah, dan khotbah-khotbahnya tentang pesta-pesta Maria sangat terkenal. Selama lebih dari 30 tahun ia memadukan hidup doa dengan karya pembelaan iman. Menurut tradisi, ia wafat di biaranya sekitar tahun 749.",
    "example": [
      "Menghormati gambar kudus sebagai sarana yang mengarahkan hati kepada Allah.",
      "Mempelajari ajaran iman agar dapat menjelaskannya dengan baik.",
      "Memakai bakat menulis, bernyanyi, atau berbicara untuk memuliakan Tuhan."
    ],
    "patron": [],
    "keywords": [
      "john damascene",
      "john of damascus",
      "damaskus",
      "ikon",
      "ikonoklasme",
      "mar saba",
      "madah"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-john-damascene/",
      "https://www.vaticannews.va/en/saints/12/04/st--john--damasceno--priest-and-doctor-of-the-church.html"
    ]
  },
  {
    "id": "st-nicholas",
    "date": "12-06",
    "name": "St. Nikolaus, Uskup",
    "role": "Uskup",
    "years": "abad ke-4",
    "rank": "optional",
    "color": "white",
    "story": "Santo Nikolaus dihormati oleh Gereja Timur maupun Barat, dan konon, setelah Santa Perawan Maria, dialah orang kudus yang paling sering dilukis oleh para seniman Kristen. Namun secara historis, yang dapat dipastikan hanyalah bahwa ia uskup Myra, sebuah kota di Lycia, Asia Kecil (kini Turki), pada abad keempat. Gambaran tentang dirinya sebagian besar datang dari kisah-kisah yang diceritakan turun-temurun. Kisah yang paling terkenal, menurut tradisi, adalah tentang seorang ayah miskin yang tidak mampu menyediakan mas kawin bagi ketiga putrinya. Agar mereka tidak terjerumus ke dalam pelacuran, Nikolaus diam-diam melemparkan sekantong emas melalui jendela rumahnya pada tiga kesempatan, sehingga ketiga gadis itu dapat menikah. Kisah ini kemudian berkembang menjadi kebiasaan memberi hadiah pada hari pestanya. Kisah-kisah lain tentang pertolongannya kepada anak-anak membuatnya dihormati sebagai pelindung anak-anak, dan kisah tentang badai yang reda karena doanya membuatnya menjadi pelindung para pelaut. Setelah wafatnya, makamnya di Myra menjadi tempat ziarah. Pada tahun 1087 para pelaut dari Bari membawa reliknya ke kota mereka di Italia, sehingga ia juga dikenal sebagai Nikolaus dari Bari. Di negeri berbahasa Inggris, namanya berubah menjadi Santa Claus.",
    "example": [
      "Berbagi dengan orang yang membutuhkan secara diam-diam, tanpa mencari pujian.",
      "Memperhatikan anak-anak dan melindungi mereka dari bahaya.",
      "Menjadikan masa Adven dan Natal sebagai kesempatan untuk berbagi, bukan sekadar berbelanja."
    ],
    "patron": [
      "anak-anak",
      "pelaut"
    ],
    "keywords": [
      "nicholas",
      "nikolaus",
      "sinterklas",
      "santa claus",
      "myra",
      "bari",
      "anak-anak"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-nicholas/",
      "https://www.vaticannews.va/en/saints/12/06/saint-nicholas-of-bari--bishop-of-myra.html"
    ]
  },
  {
    "id": "st-ambrose",
    "date": "12-07",
    "name": "St. Ambrosius, Uskup dan Pujangga Gereja",
    "role": "Uskup dan Pujangga Gereja",
    "years": "± 340–397",
    "rank": "memorial",
    "color": "white",
    "story": "Ambrosius berasal dari keluarga bangsawan Romawi dan mendapat pendidikan yang tinggi. Ia diutus ke Milan sebagai gubernur Romawi. Ketika jabatan uskup Milan kosong, umat memilihnya menjadi uskup padahal ia masih seorang katekumen. Ia menerima panggilan itu pada usia 34 tahun, membagikan hartanya kepada orang miskin, dan mendalami Kitab Suci serta tulisan para Bapa Gereja. Ambrosius menjadi pengkhotbah ulung; khotbah-khotbahnya memikat Agustinus muda dan ikut menghantar Agustinus kepada pertobatan. Ia pernah melebur perlengkapan liturgi untuk menebus orang-orang beriman yang ditawan tentara Goth. Ia berjuang gigih melawan Arianisme. Ketika Permaisuri Yustina berusaha merebut gereja untuk kaum Arian, Ambrosius dan umatnya bertahan, dan ia menggubah madah-madah baru yang dinyanyikan umat. Ia menegaskan bahwa kaisar berada di dalam Gereja, bukan di atas Gereja, dan berhasil membuat Kaisar Theodosius bertobat secara terbuka setelah pembantaian sekitar 7.000 orang di Tesalonika. Ia juga mengakui keutamaan Uskup Roma. Bersama Hieronimus, Agustinus, dan Gregorius Agung, ia termasuk empat Pujangga Agung Gereja Barat. Ambrosius wafat pada Sabtu Suci tahun 397.",
    "example": [
      "Membaca Kitab Suci setiap hari sebagai perjumpaan dengan Tuhan.",
      "Berani menegur ketidakadilan, bahkan kepada pihak yang berkuasa.",
      "Menggunakan harta untuk menolong orang yang membutuhkan."
    ],
    "patron": [
      "Milan"
    ],
    "keywords": [
      "ambrose",
      "ambrosius",
      "milan",
      "agustinus",
      "theodosius",
      "madah",
      "pujangga gereja"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-ambrose/",
      "https://www.vaticannews.va/en/saints/12/07/st--ambrose--bishop-of-milan-and-doctor-of-the-church.html"
    ]
  },
  {
    "id": "juan-diego",
    "date": "12-09",
    "name": "St. Juan Diego Cuauhtlatoatzin",
    "role": "Awam dan Katekis",
    "years": "1474–1548",
    "rank": "optional",
    "color": "white",
    "story": "Juan Diego adalah seorang petani pribumi Meksiko yang sederhana. Nama aslinya Cuauhtlatoatzin, yang berarti 'rajawali yang berbicara'. Ia dibaptis dan menerima nama Juan Diego. Namanya selamanya terkait dengan Santa Perawan Maria dari Guadalupe, karena kepadanyalah Bunda Maria pertama kali menampakkan diri di bukit Tepeyac pada 9 Desember 1531. Bunda Maria mengutusnya kepada Uskup Meksiko, Juan de Zumárraga, untuk meminta dibangunnya sebuah kapel di tempat itu. Juan Diego harus mengatasi rasa takutnya sendiri dan keraguan sang uskup. Ketika uskup meminta tanda, Bunda Maria menyuruh Juan Diego memetik bunga mawar dan membawanya dalam jubahnya (tilma). Saat ia membuka tilma di hadapan uskup, bunga-bunga berjatuhan dan pada kain itu tampak gambar Bunda Maria. Sesudah peristiwa itu, Juan Diego tinggal di dekat kapel yang dibangun di Tepeyac. Ia dihormati sebagai katekis yang kudus, tidak mementingkan diri, dan penuh belas kasih, yang mengajar terutama dengan teladan hidupnya. Paus Yohanes Paulus II membeatifikasinya pada tahun 1990 dan mengkanonisasinya di Basilika Guadalupe pada 31 Juli 2002. Ia menjadi orang kudus pertama yang berasal dari penduduk asli benua Amerika.",
    "example": [
      "Taat dan rendah hati ketika Tuhan meminta sesuatu yang di luar kemampuan kita.",
      "Tidak minder dengan latar belakang sederhana, karena Allah memakai orang kecil.",
      "Mengajar iman terutama melalui teladan hidup."
    ],
    "patron": [],
    "keywords": [
      "juan diego",
      "cuauhtlatoatzin",
      "guadalupe",
      "tepeyac",
      "meksiko",
      "tilma",
      "katekis"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-juan-diego/",
      "https://www.vaticannews.va/en/saints/12/09/st--juan-diego-cuauhtlatoatzin.html"
    ]
  },
  {
    "id": "our-lady-of-loreto",
    "date": "12-10",
    "name": "SP Maria dari Loreto",
    "role": "Peringatan Santa Perawan Maria",
    "years": "",
    "rank": "optional",
    "color": "white",
    "story": "Loreto adalah sebuah kota kecil di dekat Ancona, di pantai timur Italia. Di dalam basilikanya yang megah terdapat sebuah rumah kecil yang disebut Rumah Suci (Santa Casa), yang dihormati sebagai rumah Keluarga Kudus di Nazaret. Menurut tradisi, pada tahun 1291 rumah itu dipindahkan oleh para malaikat dari Palestina ke Tersatto di Illyria, lalu sekitar tiga tahun kemudian dipindahkan lagi ke dekat Recanati dan akhirnya ke Loreto. Gereja menyikapi kisah ini dengan hati-hati: bulla paus pertama yang menyebut pemindahan itu, oleh Paus Yulius II pada tahun 1507, memakai ungkapan 'sebagaimana dipercaya dengan saleh'. Para sejarawan juga mencatat berbagai kesulitan historis dalam kisah itu. Bagaimanapun, sejak Abad Pertengahan Rumah Suci menjadi tujuan ziarah besar. Banyak paus menghormatinya, dan para kudus seperti Karolus Borromeus, Fransiskus dari Sales, dan Ignasius dari Loyola berziarah ke sana. Di tempat inilah Litani Santa Perawan Maria, yang dikenal sebagai Litani Loreto, mulai didoakan. Para penumpang pesawat udara juga menghormati Maria dari Loreto sebagai pelindung mereka. Pada tahun 2019 Paus Fransiskus memasukkan peringatan fakultatif Santa Perawan Maria dari Loreto ke dalam Kalender Romawi Umum pada tanggal 10 Desember.",
    "example": [
      "Menjadikan rumah kita tempat doa seperti rumah Nazaret.",
      "Mendoakan Litani Santa Perawan Maria bersama keluarga.",
      "Mendoakan keselamatan orang yang sedang bepergian."
    ],
    "patron": [
      "penerbangan",
      "penumpang pesawat"
    ],
    "keywords": [
      "loreto",
      "rumah suci",
      "santa casa",
      "nazaret",
      "litani loreto",
      "penerbangan",
      "italia"
    ],
    "sources": [
      "https://www.newadvent.org/cathen/13454b.htm",
      "https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20191007_decreto-celebrazione-verginediloreto_en.html",
      "https://www.vaticannews.va/en/church/news/2019-10/feast-of-our-lady-of-loreto-added-to-general-calendar.html"
    ]
  },
  {
    "id": "st-damasus-i-pope",
    "date": "12-11",
    "name": "St. Damasus I, Paus",
    "role": "Paus",
    "years": "± 305–384",
    "rank": "optional",
    "color": "white",
    "story": "Damasus adalah putra seorang imam Roma, mungkin berdarah Spanyol. Ia memulai pelayanan sebagai diakon di gereja ayahnya, lalu menjadi imam di gereja yang kelak menjadi Basilika Santo Laurensius di Roma. Ia melayani Paus Liberius dan mengikutinya ke pengasingan. Ketika Liberius wafat pada tahun 366, Damasus terpilih menjadi Uskup Roma, tetapi sekelompok kecil memilih dan menahbiskan diakon lain, Ursinus, sebagai paus tandingan. Pertikaian itu menimbulkan bentrokan berdarah dan menjadi batu sandungan. Pendukung Ursinus bahkan pernah menuduh Damasus melakukan kejahatan berat, sehingga ia harus membersihkan namanya di hadapan pengadilan sipil dan sinode Gereja. Sebagai paus, Damasus hidup sederhana dibandingkan rohaniwan Roma lainnya dan dengan tegas menentang Arianisme serta ajaran sesat lainnya. Pada masa kepemimpinannya, Kekristenan dinyatakan sebagai agama resmi negara Romawi, dan bahasa Latin menjadi bahasa liturgi utama. Ia mendorong sekretarisnya, Santo Hieronimus, untuk mendalami Kitab Suci; dorongan itu melahirkan Vulgata, terjemahan Kitab Suci dalam bahasa Latin yang berabad-abad kemudian dinyatakan otentik oleh Konsili Trente. Hieronimus memujinya sebagai pribadi yang luar biasa dan ahli Kitab Suci. Damasus wafat pada tahun 384.",
    "example": [
      "Tetap tenang dan setia ketika difitnah.",
      "Mendukung orang lain mengembangkan bakat bagi Gereja.",
      "Mencintai dan mempelajari Kitab Suci."
    ],
    "patron": [],
    "keywords": [
      "damasus",
      "paus",
      "vulgata",
      "hieronimus",
      "kitab suci",
      "roma",
      "latin"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-damasus-i/",
      "https://www.vaticannews.va/en/saints/12/11.html"
    ]
  },
  {
    "id": "our-lady-of-guadalupe",
    "date": "12-12",
    "name": "SP Maria dari Guadalupe",
    "role": "Peringatan Santa Perawan Maria",
    "years": "",
    "rank": "optional",
    "color": "white",
    "story": "Pesta Santa Perawan Maria dari Guadalupe berakar pada peristiwa abad ke-16 di Meksiko. Seorang pribumi miskin bernama Cuauhtlatoatzin telah dibaptis dengan nama Juan Diego. Pada pagi hari Sabtu, 9 Desember 1531, ketika berjalan melewati bukit Tepeyac untuk mengikuti Misa, ia mendengar musik indah seperti kicauan burung. Dalam awan bercahaya tampak seorang perempuan muda berpakaian seperti putri bangsa Aztek. Ia berbicara kepada Juan Diego dalam bahasanya sendiri dan mengutusnya kepada uskup Meksiko, Fransiskan Juan de Zumárraga, agar dibangun sebuah kapel di tempat itu. Uskup meminta tanda. Sementara itu paman Juan Diego jatuh sakit keras, sehingga Juan Diego berusaha menghindari sang Perempuan. Namun Bunda Maria menemuinya, meyakinkannya bahwa pamannya akan sembuh, dan memberinya bunga-bunga mawar untuk dibawa dalam jubahnya (tilma). Pada 12 Desember, ketika Juan Diego membuka tilma di hadapan uskup, bunga-bunga berjatuhan dan pada kain itu tampak gambar Maria seperti yang dilihatnya di Tepeyac. Penampakan kepada seorang pribumi ini menjadi tanda bahwa Allah menerima semua bangsa, terutama mereka yang tertindas. Sejak itu sangat banyak penduduk asli menjadi Katolik. Tilma itu kini disimpan di Basilika Guadalupe, Kota Meksiko, yang dikunjungi jutaan peziarah setiap tahun.",
    "example": [
      "Menghargai martabat setiap orang dan setiap budaya.",
      "Mengandalkan pertolongan Bunda Maria dalam kesulitan keluarga.",
      "Membela dan berpihak kepada orang kecil dan tertindas."
    ],
    "patron": [
      "Meksiko",
      "benua Amerika"
    ],
    "keywords": [
      "guadalupe",
      "juan diego",
      "meksiko",
      "tepeyac",
      "tilma",
      "penampakan",
      "amerika"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/our-lady-of-guadalupe/",
      "https://www.vaticannews.va/en/saints/12/12/b--mary-virgin-of--guadalupe.html"
    ]
  },
  {
    "id": "st-jane-frances-de-chantal",
    "date": "12-12",
    "name": "St. Yohana Fransiska de Chantal, Biarawati",
    "role": "Biarawati dan Pendiri Tarekat Visitasi",
    "years": "1572–1641",
    "rank": "optional",
    "color": "white",
    "story": "Yohana Fransiska adalah seorang istri, ibu, biarawati, dan pendiri tarekat. Ibunya meninggal ketika ia berusia 18 bulan, dan ayahnya, ketua parlemen di Dijon, Prancis, sangat berpengaruh dalam pendidikannya. Ia tumbuh menjadi perempuan yang cantik, halus budi, ceria, dan bersemangat. Pada usia 21 tahun ia menikah dengan Baron de Chantal dan melahirkan enam anak, tiga di antaranya meninggal ketika masih bayi. Di purinya ia menghidupkan kembali kebiasaan Misa harian dan giat dalam karya amal. Setelah tujuh tahun menikah, suaminya tewas, dan ia jatuh dalam duka yang mendalam. Ia kemudian harus tinggal bersama ayah mertuanya yang keras, namun tetap berusaha ceria. Pada usia 32 tahun ia bertemu Santo Fransiskus dari Sales, yang menjadi pembimbing rohaninya. Beberapa tahun kemudian, bersama Fransiskus ia mendirikan Tarekat Visitasi, terbuka bagi perempuan yang ditolak tarekat lain karena kesehatan atau usia, dan meneladan kerendahan hati serta kelembutan Maria saat mengunjungi Elisabet. Ia menanggung banyak penderitaan: wafatnya Fransiskus dari Sales, kematian putranya, wabah yang melanda Prancis, dan kehilangan menantu-menantunya. Saat wabah, ia mendorong para pejabat membantu para korban. Ia wafat pada tahun 1641.",
    "example": [
      "Tetap setia pada iman dan sukacita di tengah duka dan kehilangan.",
      "Menerima bimbingan rohani dengan rendah hati.",
      "Menjadikan Misa dan karya amal bagian dari kehidupan keluarga."
    ],
    "patron": [],
    "keywords": [
      "jane frances de chantal",
      "chantal",
      "visitasi",
      "fransiskus dari sales",
      "janda",
      "prancis"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-jane-frances-de-chantal/",
      "https://www.vaticannews.va/en/saints/12/12.html"
    ]
  },
  {
    "id": "st-lucy-syracuse",
    "date": "12-13",
    "name": "St. Lusia, Perawan dan Martir",
    "role": "Perawan dan Martir",
    "years": "wafat 304",
    "rank": "memorial",
    "color": "white",
    "story": "Tentang Santa Lusia, buku-buku lama memuat banyak kisah tradisi, sedangkan buku-buku baru menunjukkan bahwa sebagian besar kisah itu kurang berdasar sejarah. Satu fakta yang bertahan adalah bahwa seorang pelamar yang kecewa menuduh Lusia sebagai orang Kristen, dan ia dihukum mati di Sirakusa, Sisilia, pada tahun 304, dalam penganiayaan Kaisar Diokletianus. Sebagai seorang perempuan muda Kristen di Sisilia yang masih kafir, Lusia menghadapi lingkungan yang tidak mendukung iman dan kemurnian. Ia percaya sepenuh hati bahwa Yesus, tukang kayu dari Nazaret yang disalibkan, telah bangkit dari mati dan adalah Putra Allah. Sebagai kesaksian imannya, ia berkaul untuk tetap perawan. Bagi teman-temannya yang kafir, hal ini sungguh aneh: kemurnian sebelum pernikahan memang dihargai, tetapi menolak pernikahan sama sekali dianggap berlebihan. Lusia tetap setia mengikuti teladan para martir perawan sebelumnya. Penghormatan kepadanya menyebar luas sejak awal. Namanya disebut dalam Doa Syukur Agung I, banyak tempat dinamai menurut namanya, dan nama 'Lusia', yang berkaitan dengan kata 'cahaya', dipakai oleh banyak orang. Ia dihormati sebagai pelindung penglihatan atau mata.",
    "example": [
      "Menjaga kemurnian hati dan tubuh di tengah budaya yang serba bebas.",
      "Tetap setia pada iman walaupun dianggap aneh oleh teman.",
      "Mendoakan dan menolong orang yang mengalami gangguan penglihatan."
    ],
    "patron": [
      "penglihatan",
      "penderita sakit mata"
    ],
    "keywords": [
      "lucy",
      "lusia",
      "santa lucia",
      "sirakusa",
      "sisilia",
      "mata",
      "cahaya"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-lucy/",
      "https://www.vaticannews.va/en/saints/12/13/st--lucy--virgin-and-martyr-of--syracuse.html"
    ]
  },
  {
    "id": "st-john-cross",
    "date": "12-14",
    "name": "St. Yohanes dari Salib, Imam dan Pujangga Gereja",
    "role": "Imam Karmel, Mistikus, dan Pujangga Gereja",
    "years": "1542–1591",
    "rank": "memorial",
    "color": "white",
    "story": "Yohanes dari Salib lahir dengan nama Juan de Yepes Álvarez dari keluarga miskin di Kastilia, dekat Avila, Spanyol. Ia belajar humaniora, retorika, dan bahasa klasik di kolese Yesuit di Medina del Campo, kemudian masuk Ordo Karmel dan ditahbiskan imam pada tahun 1567. Tak lama kemudian ia bertemu Santa Teresa dari Yesus, dan perjumpaan itu mengubah hidup mereka berdua. Ia terpikat oleh rencana Teresa untuk membarui Ordo Karmel, termasuk cabang pria, agar kembali menghayati Regula asli. Pada tahun 1568 mereka membuka rumah pertama Karmel Tak Berkasut untuk biarawan pria di Duruelo, dan saat itulah ia memakai nama 'dari Salib'. Kesetiaannya pada pembaruan membawa banyak pertentangan: karena tuduhan yang tidak adil ia dipenjara selama beberapa bulan di sebuah sel yang gelap dan sempit, sampai akhirnya berhasil melarikan diri. Justru dalam kegelapan penjara itu ia menggubah puisi-puisi mistik terindah, seperti Kidung Rohani. Karya prosanya, antara lain Pendakian Gunung Karmel, menguraikan jalan pemurnian menuju persatuan dengan Allah. Setelah sakit lama yang menyakitkan, ia wafat pada malam 13–14 Desember 1591 dalam usia 49 tahun. Ia dikanonisasi pada tahun 1726 dan dihormati sebagai Pujangga Gereja.",
    "example": [
      "Menerima salib dan kesulitan hidup dengan iman bahwa salib menghantar kepada kebangkitan.",
      "Belajar melepaskan keterikatan pada hal-hal yang menjauhkan dari Allah.",
      "Tetap berdoa ketika iman terasa gelap dan kering."
    ],
    "patron": [],
    "keywords": [
      "john of the cross",
      "juan de la cruz",
      "karmel",
      "malam gelap",
      "mistik",
      "teresa avila",
      "puisi"
    ],
    "sources": [
      "https://www.vaticannews.va/en/saints/12/14/st---john-of-the-cross--priest-ad-doctor-of-the-church--discalce.html",
      "https://www.franciscanmedia.org/saint-of-the-day/saint-john-of-the-cross/"
    ]
  },
  {
    "id": "st-peter-canisius",
    "date": "12-21",
    "name": "St. Petrus Kanisius, Imam dan Pujangga Gereja",
    "role": "Imam Yesuit dan Pujangga Gereja",
    "years": "1521–1597",
    "rank": "optional",
    "color": "white",
    "story": "Petrus Kanisius adalah salah satu tokoh terpenting pembaruan Katolik di Jerman, sehingga sering dijuluki 'rasul kedua Jerman' setelah Santo Bonifasius. Pada usia 19 tahun ia sudah meraih gelar magister dari universitas di Köln. Tak lama kemudian ia bertemu Petrus Faber, murid pertama Ignasius dari Loyola, dan bergabung dengan Serikat Yesus yang baru berdiri. Sepanjang hidup ia memadukan studi, refleksi, doa, dan menulis. Setelah ditahbiskan imam pada tahun 1546, ia dikenal karena edisi tulisan Santo Sirilus dari Aleksandria dan Santo Leo Agung. Ia juga bersemangat dalam pelayanan, sering mengunjungi orang sakit dan tahanan. Pada tahun 1547 ia menghadiri beberapa sidang Konsili Trente, yang kemudian ia bantu laksanakan. Sejak itu misi ke Jerman menjadi karya hidupnya: ia mengajar di beberapa universitas, mendirikan banyak kolese dan seminari, dan menulis katekismus yang menjelaskan iman Katolik dengan cara yang dapat dipahami orang sederhana. Ia pengkhotbah populer dan pandai mendamaikan pihak-pihak yang bertikai, selalu dengan sikap penuh kasih. Pada usia 70 tahun ia terserang kelumpuhan, tetapi tetap berkhotbah dan menulis dengan bantuan sekretaris sampai wafat di Nijmegen, Belanda, pada 21 Desember 1597. Ia dihormati sebagai Pujangga Gereja.",
    "example": [
      "Belajar dan menjelaskan iman dengan bahasa yang sederhana, misalnya kepada anak-anak.",
      "Menanggapi perbedaan pendapat dengan sikap penuh kasih, bukan permusuhan.",
      "Memakai media dan tulisan untuk menyebarkan kebaikan."
    ],
    "patron": [],
    "keywords": [
      "peter canisius",
      "kanisius",
      "yesuit",
      "jerman",
      "katekismus",
      "nijmegen",
      "konsili trente"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-peter-canisius/",
      "https://www.vaticannews.va/en/saints/12/21/st--peter-canisius--jesuit--and-doctor-of-the-church.html"
    ]
  },
  {
    "id": "st-john-kanty",
    "date": "12-23",
    "name": "St. Yohanes dari Kęty (Kanty), Imam",
    "role": "Imam dan Profesor",
    "years": "1390–1473",
    "rank": "optional",
    "color": "white",
    "story": "Yohanes berasal dari Kęty, sebuah kota kecil di Polandia, dan menempuh studi dengan cemerlang di universitas besar Kraków. Setelah ditahbiskan imam, ia menjadi profesor teologi. Namun, seperti banyak orang kudus, ia menghadapi tentangan: para pesaingnya berhasil menyingkirkannya, dan ia diutus menjadi pastor paroki di Olkusz. Sebagai orang yang sangat rendah hati, ia berusaha sebaik-baiknya, walaupun awalnya umat kurang menyukainya dan ia sendiri takut akan beratnya tanggung jawab itu. Akhirnya ia berhasil memenangkan hati umatnya. Beberapa waktu kemudian ia kembali ke Kraków dan mengajar Kitab Suci sampai akhir hidupnya. Yohanes dikenal sebagai orang yang serius dan rendah hati, tetapi juga sangat baik hati kepada semua orang miskin di Kraków. Barang dan uangnya selalu tersedia bagi mereka, walaupun berkali-kali ia dimanfaatkan. Ia hanya menyimpan uang dan pakaian yang benar-benar perlu untuk dirinya. Ia tidur sedikit, makan secukupnya, dan tidak makan daging. Ia berziarah ke Yerusalem, bahkan berharap boleh menjadi martir di sana, dan kemudian empat kali berziarah ke Roma sambil memanggul sendiri bawaannya. Ia wafat di Kraków pada tahun 1473.",
    "example": [
      "Bermurah hati kepada orang miskin, meskipun kadang dimanfaatkan.",
      "Menerima tugas yang tidak diinginkan dengan rendah hati dan sepenuh hati.",
      "Hidup sederhana dan berani berpantang, terutama di masa Adven dan Natal."
    ],
    "patron": [],
    "keywords": [
      "john cantius",
      "john of kanty",
      "jan kanty",
      "krakow",
      "polandia",
      "profesor",
      "orang miskin"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-john-of-kanty/",
      "https://www.vaticannews.va/en/saints/12/23.html"
    ]
  },
  {
    "id": "st-stephen-protomartyr",
    "date": "12-26",
    "name": "St. Stefanus, Martir Pertama",
    "role": "Diakon dan Martir Pertama",
    "years": "abad ke-1",
    "rank": "feast",
    "color": "red",
    "story": "Kisah Santo Stefanus terdapat dalam Kisah Para Rasul. Ketika jumlah murid bertambah, orang-orang Kristen berbahasa Yunani mengeluh bahwa janda-janda mereka diabaikan dalam pembagian makanan sehari-hari. Kedua belas rasul lalu meminta jemaat memilih tujuh orang yang terkenal baik, penuh Roh dan hikmat, untuk tugas pelayanan itu, sementara para rasul memusatkan diri pada doa dan pelayanan sabda. Jemaat memilih Stefanus, 'seorang yang penuh iman dan Roh Kudus', bersama enam orang lainnya; mereka inilah yang dikenal sebagai diakon pertama. Stefanus penuh rahmat dan kuasa serta mengadakan mukjizat dan tanda-tanda besar di antara orang banyak. Beberapa anggota sinagoga berdebat dengannya, tetapi tidak sanggup melawan hikmat dan Roh yang mendorongnya berbicara. Mereka lalu menghasut orang untuk menuduhnya menghujat Allah, dan ia dihadapkan ke Mahkamah Agama. Dalam pembelaannya, Stefanus menguraikan bimbingan Allah sepanjang sejarah Israel serta ketidaktaatan bangsa itu. Orang-orang menjadi geram. Stefanus, penuh Roh Kudus, menatap ke langit dan melihat kemuliaan Allah serta Yesus berdiri di sebelah kanan Allah. Mereka menyeretnya ke luar kota dan melemparinya dengan batu. Sambil dirajam ia berdoa, 'Ya Tuhan Yesus, terimalah rohku,' dan 'Tuhan, janganlah tanggungkan dosa ini kepada mereka!' Seperti Yesus, ia wafat sambil mengampuni.",
    "example": [
      "Melayani kebutuhan nyata sesama, terutama janda dan orang miskin.",
      "Berani berbicara benar dengan tenang dan penuh Roh.",
      "Mengampuni dan mendoakan orang yang menyakiti kita."
    ],
    "patron": [
      "diakon"
    ],
    "keywords": [
      "stephen",
      "stefanus",
      "martir pertama",
      "diakon",
      "kisah para rasul",
      "pengampunan",
      "protomartir"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-stephen/",
      "https://www.vaticannews.va/en/saints/12/26/st--stephen--first-martyr.html"
    ]
  },
  {
    "id": "st-john-evangelist",
    "date": "12-27",
    "name": "St. Yohanes, Rasul dan Penginjil",
    "role": "Rasul dan Penginjil",
    "years": "abad ke-1",
    "rank": "feast",
    "color": "white",
    "story": "Yohanes dan kakaknya, Yakobus, adalah anak-anak Zebedeus, nelayan di Danau Galilea. Ketika Yesus memanggil mereka, mereka segera meninggalkan perahu dan ayah mereka lalu mengikuti Dia. Bersama Petrus dan Yakobus, Yohanes mendapat persahabatan khusus dengan Yesus: hanya mereka bertiga yang hadir pada peristiwa Transfigurasi, saat anak perempuan Yairus dibangkitkan, dan saat Yesus berdoa dalam sakratul maut di Getsemani. Tradisi mengenalinya sebagai 'murid yang dikasihi Yesus', yang bersandar dekat Yesus pada Perjamuan Terakhir dan berdiri di bawah salib bersama Maria. Dari salib Yesus menyerahkan ibu-Nya kepadanya: 'Inilah ibumu.' Injil juga memperlihatkan sisi manusiawinya. Yesus menjuluki Yohanes dan Yakobus 'anak-anak guruh', dan mereka pernah ditegur karena ingin menurunkan api dari langit atas orang Samaria serta karena mengejar kedudukan terhormat. Pada pagi Paskah, Yohanes berlari bersama Petrus ke makam; ia melihat dan percaya. Kemudian ia bersama Petrus memberi kesaksian dengan berani dan bahkan dipenjara. Tradisi menganggapnya penulis Injil keempat, tiga surat, dan Kitab Wahyu, walaupun banyak ahli modern meragukan bahwa rasul dan penginjil itu orang yang sama. Injilnya sering dilambangkan dengan rajawali karena kedalaman teologinya tentang kasih Allah.",
    "example": [
      "Membangun persahabatan pribadi dengan Yesus dalam doa.",
      "Merawat orang tua dan menerima Maria sebagai ibu rohani.",
      "Belajar mengubah ambisi dan amarah menjadi kasih dan pelayanan."
    ],
    "patron": [],
    "keywords": [
      "john the apostle",
      "yohanes",
      "murid yang dikasihi",
      "injil yohanes",
      "wahyu",
      "rajawali",
      "zebedeus"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-john-the-evangelist/",
      "https://www.vaticannews.va/en/saints/12/27/st--john--apostle-and-evangelist.html"
    ]
  },
  {
    "id": "holy-innocents",
    "date": "12-28",
    "name": "Kanak-kanak Suci, Martir",
    "role": "Martir",
    "years": "",
    "rank": "feast",
    "color": "red",
    "story": "Pesta Kanak-kanak Suci mengenang anak-anak Betlehem yang dibunuh atas perintah Raja Herodes, sebagaimana diceritakan dalam Injil Matius bab 2. Herodes 'Agung', raja Yudea, tidak disukai rakyatnya karena kedekatannya dengan bangsa Romawi dan sikapnya yang acuh terhadap agama. Ia selalu merasa terancam akan kehilangan takhta. Ia seorang politikus ulung sekaligus tiran yang sangat kejam; ia bahkan membunuh istrinya dan beberapa anggota keluarganya sendiri. Ketika orang-orang Majus dari Timur datang menanyakan di mana 'Raja orang Yahudi yang baru lahir' itu, Herodes sangat terkejut. Ia mendengar dari Kitab Suci bahwa Mesias akan lahir di Betlehem, lalu dengan licik meminta para Majus melapor kepadanya agar ia juga dapat 'menyembah' Anak itu. Para Majus menemukan Yesus, mempersembahkan hadiah, dan setelah diperingatkan dalam mimpi, pulang melalui jalan lain. Yosef membawa Yesus dan Maria mengungsi ke Mesir. Herodes menjadi sangat marah dan memerintahkan pembunuhan semua anak laki-laki di Betlehem dan sekitarnya yang berumur dua tahun ke bawah. Matius mengutip nubuat Yeremia: 'Terdengarlah suara di Rama, tangis dan ratap yang amat sedih; Rahel menangisi anak-anaknya.' Gereja menghormati anak-anak ini sebagai martir yang wafat menggantikan Kristus.",
    "example": [
      "Melindungi kehidupan dan martabat setiap anak, sejak dalam kandungan.",
      "Mendoakan dan menolong anak-anak korban kekerasan, perang, dan pengungsian.",
      "Menghibur orang tua yang kehilangan anak."
    ],
    "patron": [
      "bayi"
    ],
    "keywords": [
      "holy innocents",
      "kanak-kanak suci",
      "herodes",
      "betlehem",
      "martir",
      "anak-anak",
      "kehidupan"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/holy-innocents/",
      "https://www.vaticannews.va/en/saints/12/28.html"
    ]
  },
  {
    "id": "st-thomas-becket",
    "date": "12-29",
    "name": "St. Tomas Becket, Uskup dan Martir",
    "role": "Uskup Agung dan Martir",
    "years": "± 1120–1170",
    "rank": "optional",
    "color": "white",
    "story": "Tomas Becket adalah seorang pria tegas yang sempat goyah, tetapi kemudian belajar bahwa orang tidak dapat berkompromi dengan kejahatan. Kariernya penuh gejolak. Ketika menjabat diakon agung Canterbury, ia diangkat menjadi kanselir Inggris pada usia 36 tahun oleh sahabatnya, Raja Henry II. Ketika Henry ingin menjadikan kanselirnya Uskup Agung Canterbury, Tomas memperingatkan bahwa ia mungkin tidak akan menerima campur tangan raja dalam urusan Gereja. Meskipun demikian, pada tahun 1162 ia diangkat menjadi uskup agung; ia melepaskan jabatan kanselir dan mengubah seluruh cara hidupnya. Masalah pun dimulai, karena Henry bersikeras merampas hak-hak Gereja. Tomas sempat hampir berkompromi dengan menyetujui Konstitusi Clarendon, yang akan mencabut hak klerus untuk diadili oleh pengadilan Gereja dan untuk naik banding langsung ke Roma. Namun kemudian ia menolaknya, melarikan diri ke Prancis, dan hidup dalam pengasingan selama tujuh tahun. Ia kembali ke Inggris walaupun menduga hal itu berarti kematian. Karena ia menolak mencabut hukuman Gereja atas para uskup yang didukung raja, Henry berteriak marah. Empat ksatria menganggap kata-kata raja sebagai perintah, lalu membunuh Tomas di Katedral Canterbury pada 29 Desember 1170.",
    "example": [
      "Berani membela kebenaran walaupun kehilangan jabatan atau kenyamanan.",
      "Bangkit kembali setelah sempat goyah atau berkompromi.",
      "Menolak ketidakjujuran dan tekanan di tempat kerja."
    ],
    "patron": [],
    "keywords": [
      "thomas becket",
      "tomas becket",
      "canterbury",
      "inggris",
      "henry ii",
      "martir",
      "kebebasan gereja"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-thomas-becket/",
      "https://www.vaticannews.va/en/saints/12/29/st--thomas--becket--bishop-of--canterbury--martyr.html"
    ]
  },
  {
    "id": "st-sylvester-i-pope",
    "date": "12-31",
    "name": "St. Silvester I, Paus",
    "role": "Paus",
    "years": "wafat 335",
    "rank": "optional",
    "color": "white",
    "story": "Silvester adalah paus pertama yang memimpin Gereja sepenuhnya dalam masa kebebasan, yang dijamin oleh Edik Milan tahun 313. Menurut Liber Pontificalis, ia seorang imam Roma, putra seorang bernama Rufinus, dan terpilih menjadi Uskup Roma pada tahun 314. Ia memimpin Gereja sampai wafat pada tahun 335. Pada masa itu Roma mulai beralih menjadi kota Kristen, ditandai dengan pembangunan basilika-basilika besar oleh Kaisar Konstantinus: Basilika Santo Petrus di bukit Vatikan di atas makam Petrus, Basilika dan Baptisterium Lateran, Basilika Salib Suci di Yerusalem di Roma, dan Basilika Santo Paulus di Luar Tembok. Banyak legenda tumbuh di sekitar sosoknya, tetapi hanya sedikit yang dapat dipastikan secara historis. Tidak jelas pula apa perannya dalam penyelesaian persoalan kaum Donatis maupun dalam Konsili Nicea tahun 325 yang menentang Arianisme. Namun dapat dipastikan bahwa iman Silvester begitu menyentuh orang-orang sezamannya sehingga mereka menghormatinya sebagai 'pengaku iman', yaitu orang yang tanpa menjadi martir menyerahkan hidupnya seutuhnya kepada Kristus. Hanya orang yang kuat dan bijaksana yang dapat menjaga kemandirian Gereja di hadapan sosok kaisar yang begitu berkuasa. Ia juga turut mengembangkan liturgi Gereja.",
    "example": [
      "Rendah hati membiarkan orang lain berperan tanpa harus selalu menonjolkan diri.",
      "Bijaksana menjaga nilai-nilai iman di tengah tekanan kekuasaan.",
      "Bersyukur atas kebebasan beragama dan menggunakannya untuk membangun Gereja."
    ],
    "patron": [],
    "keywords": [
      "sylvester",
      "silvester",
      "paus",
      "konstantinus",
      "edik milan",
      "lateran",
      "malam tahun baru"
    ],
    "sources": [
      "https://www.franciscanmedia.org/saint-of-the-day/saint-sylvester-i/",
      "https://www.vaticannews.va/en/saints/12/31/st--sylvester-i--pope.html"
    ]
  }
];
