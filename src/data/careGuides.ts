import type { Symptom } from './medicines';

export interface CareGuideSection {
  heading: string;
  points: string[];
}

/** Step-by-step home-care guides on the Medicine page. Content in Indonesian, like the medicine data. */
export interface CareGuide {
  id: string;
  title: string;
  summary: string;
  symptoms: Symptom[];
  sections: CareGuideSection[];
  relatedMedicineIds: string[];
}

export const CARE_GUIDES: CareGuide[] = [
  {
    id: 'burn-first-aid',
    title: 'Luka bakar: pertolongan pertama',
    summary: 'Langkah di menit-menit pertama setelah kena knalpot, air panas, atau setrika.',
    symptoms: ['burn'],
    sections: [
      {
        heading: 'Segera',
        points: [
          'Jauhkan dari sumber panas. Lepas pakaian/perhiasan di sekitar luka (kecuali yang menempel ke kulit).',
          'Alirkan air keran biasa (bukan air es) selama 20 menit. Masih bermanfaat sampai 3 jam setelah kejadian.',
          'Tutup longgar dengan plastik wrap bersih atau kasa non-lengket.',
          'Nyeri: parasetamol atau ibuprofen sesuai dosis berat badan.',
        ],
      },
      {
        heading: 'Jangan',
        points: [
          'Jangan pakai es, pasta gigi, mentega, minyak, kecap, atau tepung.',
          'Jangan memecahkan lepuh.',
          'Jangan menempelkan kapas langsung ke luka (seratnya menempel).',
        ],
      },
      {
        heading: 'Ke dokter / IGD bila',
        points: [
          'Luka lebih besar dari telapak tangan korban, atau tampak dalam (putih, kering seperti kulit, atau justru tidak nyeri).',
          'Di wajah, tangan, kaki, kelamin, sendi, atau melingkari lengan/tungkai.',
          'Korban bayi/balita atau lansia.',
          'Luka bakar listrik atau bahan kimia.',
        ],
      },
      {
        heading: 'Khusus knalpot',
        points: [
          'Luka knalpot sering lebih dalam dari kelihatannya karena kulit menempel lama di logam panas. Bila setelah 2–3 minggu belum menutup, periksa ke dokter.',
        ],
      },
    ],
    relatedMedicineIds: ['paracetamol', 'ibuprofen', 'octenidine-wound-gel', 'paraffin-tulle'],
  },
  {
    id: 'burn-wound-care',
    title: 'Luka bakar ringan: perawatan saat masih basah',
    summary: 'Cara ganti balutan sampai luka tertutup kulit baru.',
    symptoms: ['burn', 'open-wound'],
    sections: [
      {
        heading: 'Langkah ganti balutan (1x sehari atau tiap 1–2 hari)',
        points: [
          'Cuci tangan. Lepas balutan lama pelan-pelan; bila lengket, basahi dulu dengan NaCl 0,9% atau air matang.',
          'Bilas luka (cairan Octenilin atau NaCl 0,9%), keringkan kulit sekitarnya.',
          'Oles gel luka tipis (mis. octenidine) menutupi luka.',
          'Tutup 1 lapis tulle parafin (mis. Dermafix Tulle), lalu kasa kering, lalu plester/perban.',
        ],
      },
      {
        heading: 'Tanda luka membaik',
        points: [
          'Cairan makin sedikit, dasar luka merah muda segar.',
          'Kulit baru tumbuh dari tepi luka dan dari titik-titik di tengah (akar rambut).',
        ],
      },
      {
        heading: 'Kapan berhenti',
        points: [
          'Saat seluruh luka tertutup kulit baru: kering, mengilap, tidak ada titik basah, tidak berdarah saat disentuh.',
          'Saat itu antiseptik dan tulle tidak diperlukan lagi — lanjut ke perawatan bekas luka.',
        ],
      },
    ],
    relatedMedicineIds: ['octenidine-wound-gel', 'paraffin-tulle', 'silver-sulfadiazine'],
  },
  {
    id: 'scar-care',
    title: 'Setelah luka menutup: mencegah bekas luka',
    summary: 'Silikon, pelembap, dan perlindungan matahari selama 3–12 bulan.',
    symptoms: ['scar', 'burn'],
    sections: [
      {
        heading: 'Urutan perawatan',
        points: [
          'Stop antiseptik (mis. Octenilin) dan tulle — kulit yang sudah tertutup tidak membutuhkannya.',
          'Pilihan utama: lembaran silikon (mis. Newgel+). Mulai 2–4 jam di hari pertama, naikkan bertahap sampai 12–24 jam sehari.',
          'Alternatif atau kombinasi: gel silikon di siang hari, lembaran di malam hari.',
          'Kalau tidak memakai silikon: petroleum jelly 2–3x sehari agar kulit baru tidak kering dan gatal.',
          'Setelah ± 2 minggu kulit kuat: pijat lembut bekas luka 5 menit, 2–3x sehari (setelah lembaran dilepas).',
        ],
      },
      {
        heading: 'Kulit basah di bawah silikon — normal atau tidak?',
        points: [
          'Normal: lembap, sedikit berembun, kembali normal 10–30 menit setelah dibuka.',
          'Kurangi jam pakai bila: kulit putih keriput dan lembek (maserasi), bintik merah kecil seperti biang keringat, ruam, atau sangat gatal.',
          'Buka 2x sehari, cuci dan keringkan kulit serta lembaran, beri kulit udara 15–30 menit.',
        ],
      },
      {
        heading: 'Warna bekas luka',
        points: [
          'Merah muda/merah di awal itu normal (banyak pembuluh darah baru), memudar dalam 6–18 bulan.',
          'Titik-titik coklat yang muncul (sering dari tepi luka) adalah pigmen kulit yang kembali dari akar rambut dan tepi luka — tanda baik, bukan efek obat. Lama-lama titiknya menyatu.',
          'Lindungi dari matahari 6–12 bulan: pakaian penutup atau sunscreen mineral SPF 30+. Kulit baru yang kena UV mudah menggelap permanen.',
        ],
      },
      {
        heading: 'Ke dokter bila',
        points: [
          'Bekas luka menebal, menonjol, keras, atau melebar keluar batas luka dalam beberapa minggu.',
          'Luka butuh > 3 minggu untuk menutup (risiko bekas luka tebal lebih tinggi) — kontrol ke dokter kulit/bedah plastik.',
          'Bekas luka di sendi membuat gerakan kaku.',
        ],
      },
    ],
    relatedMedicineIds: ['silicone-gel-sheet', 'silicone-gel', 'petroleum-jelly', 'mineral-sunscreen'],
  },
  {
    id: 'reading-dosing-instructions',
    title: 'Cara membaca aturan minum obat',
    summary: 'Arti "sebelum makan", "3x sehari", "beri jarak 2 jam", dan lainnya.',
    symptoms: [],
    sections: [
      {
        heading: 'Waktu terhadap makan',
        points: [
          'Sebelum makan / perut kosong: 30–60 menit sebelum makan, atau 2 jam setelah makan.',
          'Sesudah makan: dalam 0–30 menit setelah makan, saat lambung masih berisi.',
          'Bersama makan: di tengah atau segera setelah suapan pertama.',
          'Kapan saja: makanan tidak memengaruhi obat — pilih jam yang paling mudah diingat.',
        ],
      },
      {
        heading: 'Frekuensi',
        points: [
          '1x sehari: jam yang sama setiap hari.',
          '2x sehari: tiap ± 12 jam (mis. 07.00 dan 19.00).',
          '3x sehari: tiap ± 8 jam (mis. 06.00, 14.00, 22.00); untuk obat ringan boleh pagi–siang–malam.',
          '"Bila perlu": hanya saat ada gejala, perhatikan jarak minimal antar dosis.',
        ],
      },
      {
        heading: 'Mencampur obat',
        points: [
          '"Beri jarak 2 jam": obat A diminum, obat B baru 2 jam kemudian (contoh: antasida dengan antibiotik atau zat besi).',
          'Cek kandungan obat kombinasi (obat flu) agar tidak dobel parasetamol atau CTM.',
          'Bawa daftar semua obat dan suplemen saat ke dokter/apoteker.',
        ],
      },
      {
        heading: 'Takaran cair',
        points: [
          'Pakai sendok/spuit takar dari kemasan. Sendok makan dan sendok teh di rumah ukurannya tidak sama.',
          '1 sendok takar = 5 ml. Perhatikan kadar (mg per ml) — sirup dan drops berbeda.',
        ],
      },
    ],
    relatedMedicineIds: ['antacid', 'lansoprazole', 'paracetamol'],
  },
  {
    id: 'acid-reflux-without-medicine',
    title: 'Asam lambung / GERD tanpa obat',
    summary: 'Kebiasaan yang sering sama pentingnya dengan obat.',
    symptoms: ['heartburn', 'stomach-pain', 'bloating'],
    sections: [
      {
        heading: 'Kebiasaan',
        points: [
          'Jangan berbaring dalam 2–3 jam setelah makan.',
          'Tinggikan bagian kepala tempat tidur 15–20 cm (ganjal kaki ranjang, bukan tumpuk bantal).',
          'Makan porsi kecil tapi sering; makan malam lebih awal.',
          'Kurangi pemicu: kopi, gorengan/berlemak, cokelat, mint, pedas, asam, alkohol, rokok, minuman bersoda.',
          'Turunkan berat badan bila berlebih; hindari celana/ikat pinggang terlalu ketat.',
        ],
      },
      {
        heading: 'Segera ke dokter bila',
        points: [
          'Muntah darah atau BAB hitam.',
          'Sulit atau sakit menelan, berat badan turun tanpa sebab.',
          'Gejala baru di usia > 50 tahun.',
          'Nyeri dada menjalar ke lengan/rahang (bisa jantung).',
        ],
      },
    ],
    relatedMedicineIds: ['antacid', 'alginate', 'lansoprazole'],
  },
  {
    id: 'choosing-acid-medicine',
    title: 'Memilih obat asam lambung',
    summary: 'Golongan mana untuk keluhan apa, dan cara menggabungkannya.',
    symptoms: ['heartburn', 'stomach-pain', 'ulcer', 'h-pylori'],
    sections: [
      {
        heading: 'Berdasarkan keluhan',
        points: [
          'Kadang-kadang (≤ 1–2x seminggu): antasida atau alginat saat perlu.',
          'Panas di dada/sendawa asam setelah makan atau saat berbaring: alginat setelah makan dan sebelum tidur.',
          'Sering (hampir tiap hari) atau GERD: PPI 30–60 menit sebelum sarapan, 4–8 minggu, + antasida/alginat untuk gejala yang masih muncul.',
          'Gejala terutama malam: dokter bisa menambah H2 blocker sebelum tidur.',
          'Tukak/luka lambung: PPI ± sukralfat, sesuai dokter.',
          'Bakteri H. pylori: PPI 2x sehari + 2 antibiotik, 10–14 hari (resep dokter).',
          'Mual/muntah: itu golongan berbeda (antimual seperti ondansetron), bukan penurun asam.',
        ],
      },
      {
        heading: 'Urutan minum dalam sehari (contoh)',
        points: [
          '06.00 — PPI, perut kosong.',
          '06.45 — sarapan.',
          '(Bila diresepkan) sukralfat 1 jam sebelum makan siang, makan malam, dan sebelum tidur — minimal 30 menit setelah PPI dan 2 jam dari obat lain.',
          'Antasida/alginat — setelah makan atau saat gejala; jauhkan 2 jam dari obat lain.',
        ],
      },
      {
        heading: 'Berhenti minum PPI',
        points: [
          'Pemakaian < 2–4 minggu: umumnya boleh langsung berhenti.',
          'Pemakaian lebih lama: turunkan bertahap (mis. dosis setengah, lalu selang sehari) agar asam tidak melonjak balik.',
        ],
      },
    ],
    relatedMedicineIds: ['antacid', 'alginate', 'famotidine', 'lansoprazole', 'omeprazole', 'sucralfate', 'ondansetron'],
  },
  {
    id: 'child-diarrhea',
    title: 'Diare pada anak: oralit + zinc',
    summary: 'Lima langkah tuntaskan diare (LINTAS Diare, Kemenkes).',
    symptoms: ['diarrhea', 'nausea-vomiting'],
    sections: [
      {
        heading: 'Lima langkah',
        points: [
          'Oralit setiap kali BAB cair, sesuai usia.',
          'Zinc 10 hari berturut-turut, walau diare sudah berhenti.',
          'ASI dan makanan tetap diberikan seperti biasa, porsi kecil tapi sering.',
          'Antibiotik hanya atas resep dokter (mis. diare berdarah atau kolera).',
          'Pahami tanda bahaya dan kapan harus kembali ke dokter.',
        ],
      },
      {
        heading: 'Hindari',
        points: [
          'Obat penghenti diare (loperamide) untuk balita.',
          'Minuman manis/bersoda dan jus kemasan — gulanya bisa memperberat diare.',
        ],
      },
      {
        heading: 'Segera ke dokter bila',
        points: [
          'Anak sangat lemas, mata cekung, tidak mau minum, atau jarang pipis.',
          'Ada darah di tinja, demam tinggi, atau muntah terus.',
          'Bayi < 6 bulan, atau diare > 3 hari.',
        ],
      },
    ],
    relatedMedicineIds: ['oral-rehydration-salts', 'zinc', 'ondansetron', 'paracetamol'],
  },
  {
    id: 'child-fever',
    title: 'Demam pada anak',
    summary: 'Kapan diberi obat, dosis berdasarkan berat badan, dan tanda bahaya.',
    symptoms: ['fever', 'pain'],
    sections: [
      {
        heading: 'Prinsip',
        points: [
          'Tujuan obat demam adalah membuat anak nyaman, bukan mengejar suhu normal.',
          'Dosis dihitung dari berat badan, bukan usia. Timbang anak bila ragu.',
          'Pilihan pertama parasetamol (10–15 mg/kg tiap 4–6 jam). Ibuprofen (5–10 mg/kg tiap 6–8 jam, sesudah makan) untuk usia ≥ 6 bulan yang tidak dehidrasi.',
          'Banyak minum, pakaian tipis. Kompres air hangat boleh untuk kenyamanan; jangan kompres alkohol atau air es.',
        ],
      },
      {
        heading: 'Segera ke dokter bila',
        points: [
          'Bayi < 3 bulan dengan suhu ≥ 38 °C.',
          'Kejang, sesak, kaku leher, ruam yang tidak memudar saat ditekan gelas.',
          'Sangat lemas atau sulit dibangunkan, tanda dehidrasi, atau demam > 3 hari.',
        ],
      },
    ],
    relatedMedicineIds: ['paracetamol', 'ibuprofen'],
  },
];
