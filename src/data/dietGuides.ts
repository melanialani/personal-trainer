import type { CareGuide } from './careGuides';

/*
 * Diet & nutrition guides (Diet Guide page). Content in Indonesian (by request), same shape as the care guides.
 * General information, not medical advice. Main sources:
 * - Energy: ~7,700 kcal per kg body fat (same constant as lib/calc); glycogen binds ~3 g water per g.
 * - IF / meal timing: Stote et al. 2007 & Carlson et al. 2007 (one vs three meals, same calories, 8 weeks);
 *   Liu et al. NEJM 2022 (time-restricted eating + calorie restriction vs calorie restriction alone);
 *   Sutton et al. Cell Metab 2018 (early time-restricted feeding).
 * - Adaptation & diet breaks: Rosenbaum & Leibel 2010 (adaptive thermogenesis); Byrne et al. 2018 (MATADOR study).
 * - Water before meals: Dennis et al. 2010; Davy et al. 2008; Parretti et al. 2015 (500 ml ~30 min before meals).
 * - Psyllium: FDA health claim 21 CFR 101.81 (7 g soluble fiber from psyllium husk/day); Metamucil label;
 *   Brum et al. 2016 (psyllium before meals and satiety).
 * - Meal replacement: EU Commission Directive 96/8/EC (200–400 kcal, protein 25–50% of energy, fat ≤ 30%).
 * - Protein needs: AKG, Permenkes 28/2019. Caffeine: EFSA 2015 (≤ 400 mg/day adults, ≤ 200 mg/day pregnancy).
 * - Green tea extract: EFSA 2018 (EGCG ≥ 800 mg/day linked to liver injury). Bitter orange: Health Canada
 *   (synephrine limits, with caffeine). BPOM: TR registration = traditional medicine; repeated warnings about slimming
 *   jamu adulterated with sibutramine.
 * - Menstrual cycle: ACOG Committee Opinion 651; FIGO 2018 (see data/cycle.ts).
 */

export const DIET_GUIDES: CareGuide[] = [
  {
    id: 'weight-loss-phases',
    title: 'Fase turun berat badan: air vs lemak',
    summary: 'Kenapa minggu awal turun cepat, lalu melambat — dan cara membaca timbangan dengan benar.',
    symptoms: [],
    sections: [
      {
        heading: 'Hitungan dasar',
        points: [
          '1 kg lemak ≈ 7.700 kkal. Turun 0,5 kg lemak per hari butuh defisit ± 3.850 kkal/hari — mustahil bagi kebanyakan orang (kebutuhan harian perempuan umumnya ± 1.800–2.200 kkal).',
          'Jadi turun ± 0,5 kg/hari di awal diet sebagian besar adalah air, glikogen, dan isi usus — bukan lemak.',
          'Glikogen (cadangan karbohidrat di otot & hati) mengikat ± 3 g air per gram. Saat glikogen terpakai, air ikut keluar.',
        ],
      },
      {
        heading: 'Fase-fasenya',
        table: {
          columns: ['Periode', 'Yang terjadi', 'Turun (perkiraan)'],
          rows: [
            ['Minggu 1–2', 'Air + glikogen + isi usus terbuang. Paling "dramatis".', '± 1–3 kg total, sebagian besar air'],
            ['Minggu 3 – bulan 3', 'Fase lemak. Laju mengikuti defisit kalori.', '± 0,5–1 kg/minggu (defisit ± 500–750 kkal/hari)'],
            ['Bulan 3–6 dst', 'Melambat / plateau: tubuh lebih ringan, kebutuhan kalori turun, gerak harian berkurang, lapar naik.', 'Lebih lambat, kadang diam beberapa minggu'],
            ['Berhenti mendadak', 'Air & glikogen kembali dalam beberapa hari — bukan lemak.', '+ 1–2 kg, lalu stabil bila kalori tidak berlebih'],
          ],
        },
      },
      {
        heading: 'Yang hilang saat turun cepat',
        table: {
          columns: ['Yang hilang', 'Penjelasan'],
          rows: [
            ['Air + glikogen', 'Terbanyak di 1–2 minggu pertama, apalagi bila makan sekali sehari (OMAD) atau rendah karbo.'],
            ['Isi usus', 'Makanan yang masuk lebih sedikit → berat isi usus berkurang.'],
            ['Lemak', 'Sebagian kecil (± 0,1–0,2 kg/hari), tergantung defisit.'],
            ['Otot', 'Ikut berkurang bila protein kurang dan defisit terlalu besar.'],
          ],
        },
        points: ['Analogi: seperti spons yang diperas — beratnya turun cepat, ukuran spons tidak berubah.'],
      },
      {
        heading: 'Cara membaca timbangan',
        points: [
          'Berat harian wajar naik-turun ± 0,5–2 kg (garam, karbo, isi usus, siklus haid).',
          'Timbang 3–7x seminggu di kondisi yang sama (pagi, setelah buang air, sebelum makan), lalu lihat rata-rata mingguan — tersedia di Weight Log.',
          'Menjelang haid tubuh menahan air. Bandingkan berat di fase siklus yang sama dari bulan ke bulan.',
          'Ukur juga lingkar pinggang dan foto bulanan: dengan latihan beban, berat bisa diam tapi pinggang mengecil.',
        ],
      },
    ],
    relatedMedicineIds: [],
  },
  {
    id: 'weight-loss-plateau',
    title: 'Berat mentok setelah beberapa bulan (plateau)',
    summary: 'Metabolisme memang melambat, tapi bukan rusak permanen. Penyebab dan cara mengakalinya.',
    symptoms: [],
    sections: [
      {
        heading: 'Kenapa makin susah turun',
        table: {
          columns: ['Penyebab', 'Penjelasan', 'Seberapa besar'],
          rows: [
            ['Tubuh makin ringan', 'Badan lebih kecil butuh energi lebih sedikit.', '± 20–30 kkal/hari per kg yang hilang (turun 10 kg ≈ 200–300 kkal)'],
            ['Gerak harian berkurang tanpa sadar', 'Lebih jarang jalan, lebih banyak duduk, lebih sedikit "gerak kecil".', 'Sering yang terbesar, bisa ± 100–300 kkal'],
            ['Adaptasi metabolisme', 'Tubuh "berhemat" di luar hitungan berat badan.', 'Biasanya kecil, ± 50–100 kkal'],
            ['Hormon lapar', 'Leptin (sinyal kenyang) turun, ghrelin (sinyal lapar) naik.', 'Lebih lapar → tanpa sadar makan lebih banyak'],
            ['Pencatatan makin longgar', 'Porsi "kira-kira" membesar, camilan tidak dicatat.', 'Rata-rata orang mencatat 20–40% lebih sedikit dari yang dimakan'],
            ['Otot berkurang', 'Protein kurang dan tanpa latihan beban.', 'Pembakaran saat istirahat ikut turun'],
          ],
        },
        points: [
          'Contoh: dulu defisit 500 kkal. Setelah turun 10 kg, kebutuhan turun ± 300 kkal dan gerak harian berkurang ± 150 kkal → defisit tinggal ± 50 kkal walau makan sama.',
          '"Metabolisme rusak permanen" itu mitos: adaptasi sebagian besar pulih saat makan kembali ke kebutuhan normal.',
        ],
      },
      {
        heading: 'Cara mengakali',
        points: [
          'Hitung ulang target kalori tiap turun 4–5 kg: perbarui berat — target di Dashboard ikut menyesuaikan.',
          'Jaga gerak harian: 7.000–10.000 langkah/hari.',
          'Latihan beban 2–3x/minggu + protein 1,2–1,6 g/kg berat badan/hari supaya otot terjaga.',
          'Catat lebih jujur 1–2 minggu: timbang makanan, catat minyak, saus, dan minuman.',
          'Diet break: tiap 8–12 minggu, makan sesuai kebutuhan (tanpa defisit) 1–2 minggu, lalu lanjut. Studi MATADOR: pola "2 minggu diet, 2 minggu jeda" → lemak turun lebih banyak dan lebih bertahan.',
          'Tidur 7–9 jam: kurang tidur menaikkan lapar dan menurunkan kemauan bergerak.',
          'Jangan memangkas kalori makin ekstrem (mis. OMAD): adaptasi makin besar, otot hilang, haid bisa terganggu.',
        ],
      },
    ],
    relatedMedicineIds: [],
  },
  {
    id: 'intermittent-fasting',
    title: 'Intermittent fasting (IF): pilih jendela makan',
    summary: 'Yang menurunkan lemak tetap defisit kalori; IF hanya cara mengatur jadwalnya. Bandingkan pola 12:12 sampai OMAD.',
    symptoms: [],
    sections: [
      {
        heading: 'Prinsip',
        points: [
          'Studi dengan kalori yang sama: IF dan diet biasa hasilnya hampir sama. IF membantu karena lebih mudah membatasi makan bagi sebagian orang.',
          'Contoh "16:8" = puasa 16 jam, makan dalam jendela 8 jam.',
          'Catat puasa di halaman Fasting — ada timer, riwayat, dan ringkasan mingguan.',
        ],
      },
      {
        heading: 'Perbandingan jendela',
        table: {
          columns: ['Pola', 'Kelebihan', 'Kekurangan'],
          rows: [
            ['12:12', 'Paling ringan, mudah dijaga.', 'Defisit tetap harus diatur sendiri.'],
            ['14:10 / 16:8', 'Paling seimbang untuk jangka panjang; masih 2–3x makan, protein mudah tercukupi.', 'Awal-awal lapar pagi.'],
            ['18:6 / 20:4', 'Defisit lebih mudah tercapai.', 'Protein sulit tercukupi, lebih mudah kalap saat buka.'],
            ['OMAD (23:1)', 'Praktis.', 'Paling berisiko: otot hilang, haid terganggu, lapar tinggi, kalap. Tidak disarankan jangka panjang.'],
          ],
        },
      },
      {
        heading: 'Jam jendela makan',
        points: [
          'Jendela lebih awal (mis. 08.00–16.00) sedikit lebih baik untuk kepekaan insulin dibanding makan larut (studi kecil); untuk berat badan bedanya kecil.',
          'Konsisten lebih penting dari jam yang "sempurna". Jendela yang berganti-ganti tiap hari tidak berbahaya, tapi lapar biasanya lebih sulit dikendalikan.',
          'Perempuan: puasa terlalu panjang atau defisit terlalu besar lebih sering mengganggu haid. Mulai dari jendela ringan.',
        ],
      },
      {
        heading: 'Pola jangka panjang yang disarankan',
        points: [
          '16:8 atau 14:10, 2–3x makan, jam yang sama setiap hari.',
          'Defisit ± 300–500 kkal/hari (target ± 0,5 kg/minggu).',
          'Protein ± 1,2–1,6 g/kg berat badan/hari, dibagi rata tiap makan, plus latihan beban 2–3x/minggu.',
          'Serat cukup: sayur, buah, opsional psyllium sebelum makan.',
          'Timbang 3–7x seminggu, lihat rata-rata mingguan; evaluasi tiap 4 minggu.',
          'Kendurkan diet bila: haid telat/berhenti, lemas terus, susah tidur, rambut rontok, sering kalap.',
        ],
      },
    ],
    relatedMedicineIds: ['psyllium-husk'],
  },
  {
    id: 'omad',
    title: 'OMAD (makan sekali sehari): mitos dan risiko',
    summary: 'Klaim "antioksidan" dan "menahan emosi" belum terbukti pada manusia; risikonya sudah ada datanya.',
    symptoms: [],
    sections: [
      {
        heading: 'Cek klaim',
        table: {
          columns: ['Klaim', 'Faktanya'],
          rows: [
            [
              '"Antioksidan / detoks sel"',
              'Yang dimaksud biasanya autofagi (sel "bersih-bersih" dan mendaur ulang komponen rusak). Kuat di hewan; pada manusia belum terbukti OMAD memberi manfaat berarti, dan sulit diukur. Manfaat yang terlihat kebanyakan karena berat badan turun.',
            ],
            [
              '"Menahan emosi"',
              'Sebagian merasa lebih fokus (hormon stres naik saat puasa). Tapi studi puasa juga sering menemukan lebih mudah marah, sulit konsentrasi, dan lapar berlebihan ("hangry"), terutama di awal. Tidak ada bukti emosi lebih stabil jangka panjang.',
            ],
          ],
        },
      },
      {
        heading: 'Kenapa tidak untuk jangka panjang',
        text: 'Studi OMAD vs 3x makan dengan kalori sama (8 minggu): lapar lebih tinggi, tekanan darah dan kolesterol LDL naik, kontrol gula darah pagi lebih buruk.',
        table: {
          columns: ['Masalah', 'Penjelasan'],
          rows: [
            ['Otot', 'Tubuh hanya bisa memakai protein dalam jumlah terbatas per kali makan; 1x makan sulit memenuhi kebutuhan harian.'],
            ['Kalap makan', 'Lapar seharian lalu makan besar sekaligus.'],
            ['Gizi', 'Satu kali makan sulit memenuhi serat, vitamin, dan mineral harian.'],
            ['Haid & hormon', 'Defisit energi besar → risiko haid telat atau berhenti.'],
            ['Pencernaan', 'Porsi besar sekaligus → begah, asam lambung naik, ngantuk berat.'],
            ['Sulit dipertahankan', 'Banyak yang berhenti, lalu berat naik lagi.'],
          ],
        },
        points: [
          'OMAD bukan racun — sebagian orang bisa menjalaninya sementara. Masalahnya: tidak ada manfaat tambahan dibanding 16:8 / 14:10, sementara risikonya lebih banyak.',
          'Tanda tubuh kekurangan energi: berat turun ± 0,5 kg/hari terus-menerus, haid mundur, lemas. Pindah ke 16:8 atau 14:10.',
        ],
      },
    ],
    relatedMedicineIds: [],
  },
  {
    id: 'water-before-meals',
    title: 'Minum air sebelum makan & saat ingin kalap',
    summary: 'Cukup ± 500 ml, 15–30 menit sebelum makan — bukan berliter-liter.',
    symptoms: [],
    sections: [
      {
        heading: 'Buktinya',
        points: [
          'Studi: 500 ml air ± 30 menit sebelum makan, 3x sehari selama 12 minggu → turun ± 1,3–2 kg lebih banyak dibanding tanpa air dulu.',
          'Pada paruh baya/lansia porsi makan berikutnya turun ± 10%; pada orang muda efeknya lebih kecil.',
          'Air cepat keluar dari lambung (± 20–30 menit), jadi kenyangnya singkat. Air = pengganjal sementara; protein dan serat = pengganjal tahan lama.',
        ],
      },
      {
        heading: 'Takaran',
        table: {
          columns: ['Situasi', 'Takaran'],
          rows: [
            ['Sebelum makan biasa', '500 ml (2 gelas), 15–30 menit sebelum makan'],
            ['Saat ingin kalap', '300–500 ml, lalu tunggu 10–15 menit sebelum mulai makan'],
            ['Total harian (perempuan)', '± 2–2,5 liter minuman, lebih bila berkeringat'],
          ],
        },
      },
      {
        heading: 'Jangan minum berliter-liter sekaligus',
        points: [
          'Ginjal hanya bisa membuang ± 0,8–1 liter air per jam.',
          '≥ 2–3 liter dalam waktu singkat bisa menurunkan natrium darah (hiponatremia): pusing, mual, bingung, kejang — bisa fatal. Risiko lebih tinggi saat perut kosong lama (OMAD) dan asupan garam rendah.',
          'Efek lain: begah, asam lambung naik, sering buang air kecil.',
        ],
      },
      {
        heading: 'Urutan anti-kalap',
        points: [
          'Minum 300–500 ml air, tunggu 10–15 menit.',
          'Makan protein dan sayur dulu (telur, ayam, tahu-tempe, sayur berkuah).',
          'Opsional psyllium 1 sdt dengan 250 ml air 15–30 menit sebelum makan (air ini termasuk takaran di atas).',
          'Makan pelan 15–20 menit — sinyal kenyang butuh waktu sampai ke otak.',
          'Ambil porsi di piring, jangan makan langsung dari wadah besar.',
          'Sering kalap = tanda jendela puasa terlalu panjang. Solusi yang lebih kuat: 16:8 / 14:10 dengan 2–3x makan.',
        ],
      },
    ],
    relatedMedicineIds: ['psyllium-husk'],
  },
  {
    id: 'drinks-fat-loss',
    title: 'Minuman untuk menurunkan lemak',
    summary: 'Tidak ada minuman pembakar lemak. Yang membantu: mengganti minuman berkalori dan membantu kenyang.',
    symptoms: [],
    sections: [
      {
        heading: 'Yang membantu (urut dampak)',
        table: {
          columns: ['Minuman', 'Cara membantu', 'Seberapa besar'],
          rows: [
            ['Air putih (ganti minuman manis)', 'Memotong kalori: es kopi susu gula aren ± 220 kkal → 0.', 'Paling besar bila sebelumnya sering minum manis'],
            ['Susu protein / whey tanpa gula', 'Kenyang lebih lama, otot terjaga saat diet.', 'Sedang, bila protein harian kurang'],
            ['Psyllium + air sebelum makan', 'Lebih cepat kenyang, ngemil berkurang.', 'Kecil–sedang'],
            ['Kopi hitam (tanpa gula/krimer)', 'Kafein sedikit menaikkan pembakaran dan menekan lapar sementara.', 'Kecil'],
            ['Teh hijau seduhan tanpa gula', 'Katekin + kafein.', 'Kecil (± 1 kg dalam beberapa bulan)'],
          ],
        },
      },
      {
        heading: 'Tidak berguna atau berisiko',
        points: [
          'Air lemon / detox water / infused water: tidak membakar lemak (boleh bila membantu minum lebih banyak air).',
          'Teh pelangsing / teh detoks: biasanya berisi pencahar (mis. daun senna). Yang hilang air dan isi usus; jangka panjang usus "malas" dan elektrolit terganggu.',
          'Cuka apel: studi kecil, efek ± 1–2 kg. Bisa merusak enamel gigi dan mengiritasi lambung. Bila mencoba: maks 1–2 sdm dalam segelas air, pakai sedotan.',
          'Jus buah (termasuk jus "sehat"): kalori dan gula tinggi, serat hilang.',
          'Minuman "diet"/zero sugar: lebih baik dari minuman manis, tapi tidak membakar lemak.',
        ],
      },
      {
        heading: 'Cara pakai realistis',
        points: [
          'Ganti semua minuman manis dengan air putih, kopi hitam, atau teh tawar — dampak terbesar.',
          '500 ml air 15–30 menit sebelum makan.',
          'Kopi/teh maks ± 3–4 cangkir/hari (kafein dewasa ≤ 400 mg/hari, hamil ≤ 200 mg/hari) dan tidak setelah jam 14.00.',
          'Protein kurang → susu protein tanpa gula.',
        ],
      },
    ],
    relatedMedicineIds: ['psyllium-husk', 'green-tea-extract'],
  },
  {
    id: 'psyllium-satiety',
    title: 'Psyllium: takaran sendok, gizi, dan rasa kenyang',
    summary: '1 sdm untuk serpihan utuh, 1 sdt untuk bubuk — dengan 250 ml air, langsung diminum.',
    symptoms: [],
    sections: [
      {
        heading: 'Takaran per sendok',
        table: {
          columns: ['Bentuk', '1 sdm ≈', 'Takaran awal'],
          rows: [
            ['Serpihan utuh (ringan)', '± 5 g', '1 sdm + 250 ml air'],
            ['Bubuk (lebih padat)', '± 10–15 g', '1 sdt (± 3–5 g) + 250 ml air — 1 sdm terlalu banyak untuk awal'],
          ],
        },
        points: [
          'Berat per sendok beda tiap merek: ikuti label. Patokan label Metamucil: ± 3,4 g psyllium dengan 240 ml cairan, maks 3x sehari.',
          'Aduk lalu langsung diminum (1–2 menit sudah mengental), susul 1 gelas air lagi.',
          'Mulai 1x sehari ± 1 minggu, naikkan bila perut aman. Total 5–10 g/hari. Kolesterol (patokan FDA): ± 10 g husk/hari dibagi 2–3x bersama makan.',
          'Beri jarak 2 jam dari obat lain.',
        ],
      },
      {
        heading: 'Gizi per ± 5 g',
        table: {
          columns: ['Zat gizi', 'Perkiraan'],
          rows: [
            ['Kalori', '± 10–20 kkal (label AS ± 15–20; label Eropa, serat 2 kkal/g, ± 10)'],
            ['Protein', '± 0–0,1 g (praktis nol)'],
            ['Karbohidrat', '± 4 g, hampir semuanya serat'],
            ['Serat', '± 3,5–4 g, sebagian besar serat larut'],
            ['Lemak, gula', '± 0'],
          ],
        },
        points: ['Bukan sumber protein; kalori bisa diabaikan untuk target harian. Catat sesuai label di Food Diary.'],
      },
      {
        heading: 'Rasa kenyang dan waktu minum',
        points: [
          'Di lambung psyllium jadi gel → pengosongan lambung melambat, gula darah naik lebih pelan, keinginan ngemil berkurang.',
          'Studi: ± 7 g sebelum sarapan dan makan siang menurunkan lapar sampai waktu makan berikutnya (± 3–4 jam). Efeknya ringan — bukan penekan nafsu makan kuat.',
          'Paling berguna 15–30 menit sebelum makan siang (mengurangi ngemil sore) atau makan malam (lapar malam).',
          'Pagi bagus untuk BAB teratur, tapi bila pagi minum obat rutin (mis. tiroid), pindah ke siang.',
          'Hindari tepat sebelum tidur (gel butuh air dan posisi tegak; risiko tersedak/asam lambung). Bila malam: minimal 1–2 jam sebelum tidur.',
        ],
      },
    ],
    relatedMedicineIds: ['psyllium-husk'],
  },
  {
    id: 'protein-milk-meal-replacement',
    title: 'Susu tinggi protein & meal replacement',
    summary: 'Beda susu biasa, susu protein, dan meal replacement — plus resep rakitan sendiri.',
    symptoms: [],
    sections: [
      {
        heading: 'Patokan protein',
        points: [
          'Susu UHT biasa ± 8 g protein per 250 ml (mis. Ultra Milk Full Cream 8 g).',
          'Susu bubuk berbasis whey (protein susu yang dipisahkan) ± 20–27 g per saji.',
          'Kebutuhan protein dewasa (AKG Kemenkes): ± 60 g/hari perempuan, ± 65 g/hari laki-laki; lebih tinggi bila rutin latihan beban.',
          'Contoh merek: L-Men, Evolene, WRP (bubuk protein dewasa); Ensure, Boost (nutrisi lengkap); HiLo Teen, Morinaga, Dancow (anak/remaja). Gram protein per merek: cek label Informasi Nilai Gizi.',
        ],
      },
      {
        heading: 'Cara memilih',
        points: [
          'Lihat protein per kalori, bukan hanya gram: bagus bila ≥ 10 g protein per 100 kkal.',
          'Cek gula — banyak susu "protein" berperisa yang gulanya tinggi.',
          'Alternatif alami: greek yogurt (± 10 g protein/100 g), susu skim (protein sama, kalori lebih rendah), telur (± 6 g/butir).',
        ],
      },
      {
        heading: 'Apa itu meal replacement',
        table: {
          columns: ['Patokan Uni Eropa (per 1x makan)', 'Nilai'],
          rows: [
            ['Kalori', '200–400 kkal'],
            ['Protein', '25–50% dari kalori (± 15–25 g)'],
            ['Lemak', 'Maks 30% dari kalori'],
            ['Vitamin & mineral', '≥ 30% kebutuhan harian'],
            ['Serat & karbohidrat', 'Idealnya ada, secukupnya'],
          ],
        },
        points: ['Analogi: susu protein = 1 bahan bangunan; meal replacement = paket lengkap 1 rumah.'],
      },
      {
        heading: 'Kenapa susu saja belum cukup',
        table: {
          columns: ['Minuman', 'Kurangnya'],
          rows: [
            ['Susu UHT biasa (± 150 kkal)', 'Kalori kurang, protein cuma ± 8 g, tanpa serat, zat besi & vitamin C rendah'],
            ['Susu whey / protein', 'Hampir protein saja; karbo, serat, vitamin kurang'],
            ['Ensure dan sejenisnya', 'Paling mendekati (gizi lengkap) — cek gulanya'],
          ],
        },
      },
      {
        heading: 'Rakit sendiri (1 gelas, ± 430 kkal)',
        points: [
          'Susu skim 240 ml + oat 40 g + 1 pisang + 1 sdm selai kacang, diblender.',
          'Hasil ± 19 g protein, ± 69 g karbohidrat, ± 11 g lemak. Ganti susu skim dengan susu whey untuk ± 30+ g protein.',
          'Opsional psyllium 1 sdt untuk serat — tambah air dan langsung diminum.',
          'Tersedia di database makanan: "Smoothie meal replacement".',
        ],
      },
      {
        heading: 'Batasan',
        points: [
          'Untuk turun berat badan, meal replacement terbukti membantu karena kalori terukur dan praktis.',
          'Kelemahan: cepat bosan, tidak melatih kebiasaan makan, berat sering naik lagi setelah berhenti.',
          'Paling realistis ganti 1 kali makan per hari (mis. sarapan), bukan semua.',
          'Diabetes, penyakit ginjal, atau hamil: tanya dokter dulu.',
        ],
      },
    ],
    relatedMedicineIds: ['psyllium-husk'],
  },
  {
    id: 'slimming-capsules',
    title: 'Kapsul pelangsing herbal (contoh: Flamora, SULEM)',
    summary: 'Arti izin BPOM "TR", komposisi per bahan, klaim yang salah, dan mana yang aman jangka panjang.',
    symptoms: [],
    sections: [
      {
        heading: 'Arti "terdaftar BPOM TR"',
        points: [
          'TR = obat tradisional (jamu) produksi dalam negeri. Izin terutama menilai keamanan dan mutu; khasiat cukup berdasarkan pemakaian turun-temurun, bukan uji klinis.',
          '"Terdaftar BPOM" artinya boleh dijual — bukan terbukti melangsingkan.',
        ],
      },
      {
        heading: 'Komposisi yang dibahas',
        table: {
          columns: ['Produk', 'Komposisi (label)', 'Aturan pakai (label)'],
          rows: [
            ['Flamora Slimming Capsule (TR203365991)', 'Buah jeruk pahit, daun murbei, daun jati belanda, teh hijau, rimpang jahe', '3x sehari 2 kapsul, minum 2 gelas air; penderita maag 5 menit setelah makan'],
            ['SULEM Susut Lemak (TR253051221)', 'Ekstrak daun kemuning, daun jati belanda, meniran, rimpang bangle', '60 kapsul/botol'],
          ],
        },
        points: ['Dosis per bahan tidak dicantumkan, jadi keamanannya tidak bisa dinilai pasti. Detail tiap bahan: buka chip bahan di bawah.'],
      },
      {
        heading: 'Fungsi, bukti, dan risiko tiap bahan',
        table: {
          columns: ['Bahan', 'Klaim', 'Bukti ilmiah', 'Efek samping / risiko'],
          rows: [
            ['Jeruk pahit (sinefrin)', 'Bakar lemak, tekan nafsu makan', 'Lemah, efek sangat kecil', 'Stimulan mirip efedrin: berdebar, tekanan darah naik; laporan kasus gangguan jantung, terutama bila digabung kafein'],
            ['Daun murbei', 'Tahan penyerapan karbo, gula darah stabil', 'Sedang, lonjakan gula setelah makan sedikit turun', 'Kembung, diare ringan; gula darah terlalu rendah bila minum obat diabetes'],
            ['Daun jati belanda', 'Pelangsing tradisional, hambat penyerapan lemak', 'Sangat lemah (lab/hewan)', 'Perut tidak nyaman, BAB berubah; data jangka panjang minim'],
            ['Teh hijau (ekstrak)', 'Naikkan pembakaran kalori', 'Lemah–sedang (± 1 kg dalam beberapa bulan)', 'Kafein: susah tidur, berdebar. Ekstrak pekat bisa merusak hati (EFSA: risiko mulai EGCG ≥ 800 mg/hari)'],
            ['Jahe', 'Pencernaan, mual', 'Kuat untuk mual; untuk berat badan sangat kecil', 'Umumnya aman; dosis tinggi → heartburn, risiko perdarahan dengan obat pengencer darah'],
            ['Daun kemuning', 'Pelangsing tradisional', 'Sangat lemah (hewan)', 'Data keamanan jangka panjang pada manusia hampir tidak ada'],
            ['Meniran', 'Daya tahan tubuh, peluruh kencing', 'Sedang untuk daya tahan tubuh (bahan Stimuno), bukan untuk berat badan', 'Bisa menurunkan gula darah & tekanan darah; hindari saat hamil'],
            ['Rimpang bangle', 'Pelangsing tradisional (pasca melahirkan), anti-radang', 'Lemah (lab/hewan)', 'Iritasi lambung; data jangka panjang minim'],
          ],
        },
        points: ['Jeruk pahit + teh hijau (Flamora) = dua stimulan sekaligus — kombinasi yang paling perlu diwaspadai.'],
      },
      {
        heading: 'Klaim iklan yang salah',
        points: [
          '"Mengurangi lemak di paha, perut, lengan": lemak tidak bisa dibakar di bagian tertentu saja (mitos spot reduction).',
          '"Detoksifikasi": racun dibuang oleh hati dan ginjal; tidak ada bukti kapsul herbal mempercepatnya.',
          '"Aman untuk remaja hingga manula": tidak ada data pendukung.',
          'Turun berat karena "BAB lancar / peluruh kencing" = air dan isi usus, bukan lemak — kembali begitu berhenti.',
        ],
      },
      {
        heading: 'Penahan lapar: dari bahan mana?',
        table: {
          columns: ['Produk', 'Bahan yang mungkin berperan', 'Seberapa kuat'],
          rows: [
            ['Flamora', 'Jeruk pahit (stimulan)', 'Lemah'],
            ['Flamora', 'Teh hijau (kafein)', 'Lemah dan sementara (beberapa jam)'],
            ['Flamora', 'Daun murbei', 'Tidak langsung: gula darah lebih stabil, "lapar mendadak" berkurang'],
            ['SULEM', 'Tidak ada yang terbukti menekan lapar', '—'],
          ],
        },
        points: [
          'Nafsu makan turun drastis justru mencurigakan: bahan alaminya tidak sekuat itu. Rasa "kenyang" bisa juga dari perut tidak nyaman atau BAB lebih sering.',
          'Penekan lapar kuat pada jamu pelangsing sering ternyata campuran ilegal sibutramin.',
        ],
      },
      {
        heading: 'Jangka panjang: boleh atau tidak',
        table: {
          columns: ['Status', 'Bahan', 'Alasan'],
          rows: [
            ['Relatif aman (sebagai makanan/minuman biasa)', 'Jahe, daun murbei, teh hijau seduhan 2–3 cangkir', 'Lama dipakai sebagai bumbu/minuman; dosis jauh di bawah ekstrak pekat'],
            ['Tidak dianjurkan', 'Jeruk pahit', 'Stimulan: risiko jantung & tekanan darah menumpuk'],
            ['Tidak dianjurkan', 'Ekstrak teh hijau pekat', 'Risiko kerusakan hati'],
            ['Tidak dianjurkan', 'Jati belanda, kemuning, bangle', 'Bukan terbukti berbahaya, tapi data keamanan jangka panjang tidak ada'],
            ['Tidak dianjurkan', 'Meniran', 'Tujuannya daya tahan tubuh, bukan diminum rutin bertahun-tahun'],
            ['Tidak dianjurkan', 'Produk campuran itu sendiri', 'Dosis tidak jelas, efek gabungan tidak bisa diprediksi'],
          ],
        },
        points: [
          'Bila tetap mencoba: maksimal beberapa minggu, cek BPOM dulu, berhenti bila ada efek samping.',
          'Alternatif dengan bukti lebih kuat dan lebih murah: psyllium sebelum makan, protein cukup tiap makan, defisit kalori yang dicatat di Food Diary.',
        ],
      },
      {
        heading: 'Jangan diminum bila',
        points: [
          'Hamil atau menyusui.',
          'Hipertensi, penyakit jantung, gangguan tiroid, mudah cemas/susah tidur (terutama Flamora).',
          'Penyakit hati atau ginjal.',
          'Minum obat diabetes, darah tinggi, atau pengencer darah.',
        ],
      },
      {
        heading: 'Risiko tersembunyi: campuran obat keras',
        points: [
          'BPOM berulang kali menemukan jamu pelangsing dicampur obat keras ilegal, terutama sibutramin (obat pelangsing yang ditarik karena berbahaya untuk jantung). Ada juga produk palsu yang memakai nomor izin produk lain.',
          'Cek nomor izin di cekbpom.pom.go.id: nama produk dan produsen harus sama persis dengan kemasan.',
          'Jantung berdebar kencang, susah tidur, atau efek "terlalu cepat" → curigai campuran, hentikan segera.',
        ],
      },
    ],
    relatedMedicineIds: ['bitter-orange', 'mulberry-leaf', 'jati-belanda', 'green-tea-extract', 'ginger', 'kemuning', 'meniran', 'bangle'],
  },
  {
    id: 'slimming-hormones',
    title: 'Pelangsing herbal: hormon, haid, libido, emosi',
    summary: 'Tidak ada bahan yang terbukti langsung mengubah hormon — yang lebih sering mengganggu haid adalah defisit energi.',
    symptoms: [],
    sections: [
      {
        heading: 'Per bahan',
        table: {
          columns: ['Bahan', 'Hormon / haid', 'Libido', 'Emosi / mood'],
          rows: [
            ['Jeruk pahit', 'Tidak ada efek langsung yang terbukti', 'Tidak ada data', '⚠️ Cemas, gelisah, mudah marah, susah tidur (stimulan)'],
            ['Teh hijau (ekstrak)', '⚠️ Menghambat penyerapan zat besi — risiko lemas/anemia bila haid banyak', 'Tidak ada data', '⚠️ Kafein: cemas, susah tidur, berdebar'],
            ['Jahe', '✅ Mengurangi nyeri haid (bukti cukup baik)', 'Tidak ada data', 'Netral'],
            ['Daun murbei', 'Tidak ada data', 'Tidak ada data', 'Netral'],
            ['Jati belanda', 'Tidak ada data pada manusia', 'Tidak ada data', 'Tidak ada data'],
            ['Kemuning', 'Tidak ada data yang bisa diandalkan', 'Tidak ada data', 'Tidak ada data'],
            ['Meniran', '⚠️ Hindari saat hamil (kehati-hatian)', 'Tidak ada data', 'Tidak ada data'],
            ['Bangle', 'Dipakai tradisional pasca melahirkan; efek hormon belum terbukti', 'Tidak ada data', 'Tidak ada data'],
          ],
        },
        points: ['"Tidak ada data" bukan berarti aman — artinya belum diteliti dengan baik.'],
      },
      {
        heading: 'Yang lebih sering mengganggu haid dan mood',
        points: [
          'Turun berat terlalu cepat / makan terlalu sedikit: otak membaca "kelaparan" lalu mengurangi hormon reproduksi → haid telat atau berhenti. Bisa terjadi dengan atau tanpa jamu.',
          'Kurang tidur karena stimulan → mood turun, mudah stres, siklus ikut kacau.',
          'Sibutramin (bila ada campuran ilegal): cemas, susah tidur, berdebar, perubahan suasana hati.',
          'Hentikan dan periksa ke dokter bila: haid telat > 1 siklus atau berhenti, jantung berdebar, susah tidur berhari-hari, perubahan mood yang jelas.',
        ],
      },
    ],
    relatedMedicineIds: ['bitter-orange', 'green-tea-extract', 'ginger', 'meniran'],
  },
  {
    id: 'late-period-diet',
    title: 'Haid telat saat diet atau IF',
    summary: 'Karena berat turun, IF, atau jamunya? Cara mempersempit penyebab dan kapan ke dokter.',
    symptoms: [],
    sections: [
      {
        heading: 'Langkah pertama',
        points: ['Bila aktif berhubungan seksual: test pack dulu. Positif → hentikan semua jamu pelangsing.'],
      },
      {
        heading: 'Kemungkinan penyebab',
        table: {
          columns: ['Penyebab', 'Lebih mungkin bila…'],
          rows: [
            ['Berat turun / makan terlalu sedikit', 'Berat turun cepat (> 1 kg/minggu), makan jauh di bawah kebutuhan, OMAD, olahraga berat'],
            ['Stres dan kurang tidur', 'Ada stres besar; stimulan (jeruk pahit + kafein) memperburuk tidur'],
            ['Komposisi jamu', 'Tidak ada bahan yang terbukti langsung menggeser haid, tapi tidak bisa disingkirkan (data minim, risiko campuran ilegal)'],
            ['Variasi normal', 'Siklus kadang bergeser beberapa hari sampai ± 1 minggu; telat 2 minggu sekali saja masih mungkin'],
            ['Kondisi medis', 'PCOS atau tiroid: siklus memang sering tidak teratur, jerawat/bulu berlebih, mudah lelah'],
          ],
        },
        points: [
          'IF/OMAD + berat turun cepat = defisit energi besar — penyebab yang paling masuk akal, lebih dari komposisi jamunya.',
          'Bila mulai jamu dan diet bersamaan, penyebab tidak bisa dipisahkan hanya dari "haid mundur".',
        ],
      },
      {
        heading: 'Yang bisa dilakukan',
        points: [
          'Hentikan jamu dulu; bila siklus berikutnya kembali normal, itu petunjuk penting.',
          'Kurangi defisit: target ± 0,5 kg/minggu, protein cukup, pindah dari OMAD ke 16:8 / 14:10.',
          'Catat haid di halaman Cycle: prediksi, rata-rata siklus, dan tanda bahaya dihitung otomatis.',
          'Ke dokter kandungan bila: tidak haid ≥ 3 bulan, siklus terus tidak teratur, perdarahan sangat banyak, atau nyeri hebat.',
        ],
      },
    ],
    relatedMedicineIds: [],
  },
];

/** Topic chips on the Diet Guide page (labels are UI, so English). */
export const DIET_TOPICS: { id: string; label: string; guideIds: string[] }[] = [
  { id: 'weight', label: 'Weight loss', guideIds: ['weight-loss-phases', 'weight-loss-plateau'] },
  { id: 'fasting', label: 'Fasting (IF)', guideIds: ['intermittent-fasting', 'omad', 'water-before-meals'] },
  { id: 'food', label: 'Drinks, fiber & protein', guideIds: ['drinks-fat-loss', 'psyllium-satiety', 'protein-milk-meal-replacement'] },
  { id: 'herbal', label: 'Slimming herbs', guideIds: ['slimming-capsules', 'slimming-hormones'] },
  { id: 'cycle', label: 'Period', guideIds: ['late-period-diet', 'slimming-hormones'] },
];
