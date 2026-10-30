export type MysterySetId = 'joyful' | 'sorrowful' | 'glorious' | 'luminous';

export interface MysterySet {
  id: MysterySetId;
  title: string;
  shortTitle: string;
  /** Weekdays it is prayed (Mon = 0 … Sun = 6). */
  days: number[];
}

export const MYSTERY_SETS: MysterySet[] = [
  { id: 'joyful', title: 'Peristiwa Gembira', shortTitle: 'Gembira', days: [0, 5] },
  { id: 'luminous', title: 'Peristiwa Terang', shortTitle: 'Terang', days: [3] },
  { id: 'sorrowful', title: 'Peristiwa Sedih', shortTitle: 'Sedih', days: [1, 4] },
  { id: 'glorious', title: 'Peristiwa Mulia', shortTitle: 'Mulia', days: [2, 6] },
];

export interface RosaryMystery {
  /** Also the image file name: public/rosary/<id>.webp. */
  id: string;
  set: MysterySetId;
  number: number;
  title: string;
  /** `param` is a Bible link "BOOK.chapter.verse" (see lib/bible.ts). */
  ref: { label: string; param: string };
  /** Public-domain painting at public/rosary/<id>.webp; set once an image is bundled. */
  image?: { artist: string; title: string; year: string; commonsUrl: string };
}

/** Mystery titles and references as in Puji Syukur no. 213. */
export const ROSARY_MYSTERIES: RosaryMystery[] = [
  { id: "joyful-1", set: "joyful", number: 1, title: "Maria menerima kabar gembira dari Malaikat Gabriel", ref: { label: "Luk 1:26–38", param: "LUK.1.26" } },
  { id: "joyful-2", set: "joyful", number: 2, title: "Maria mengunjungi Elisabet, saudarinya", ref: { label: "Luk 1:39–45", param: "LUK.1.39" } },
  { id: "joyful-3", set: "joyful", number: 3, title: "Yesus dilahirkan di Betlehem", ref: { label: "Luk 2:1–7", param: "LUK.2.1" } },
  { id: "joyful-4", set: "joyful", number: 4, title: "Yesus dipersembahkan dalam Bait Allah", ref: { label: "Luk 2:22–40", param: "LUK.2.22" } },
  { id: "joyful-5", set: "joyful", number: 5, title: "Yesus diketemukan dalam Bait Allah", ref: { label: "Luk 2:41–52", param: "LUK.2.41" } },
  { id: "sorrowful-1", set: "sorrowful", number: 1, title: "Yesus berdoa kepada Bapa-Nya di surga dalam sakratul maut", ref: { label: "Luk 22:39–46", param: "LUK.22.39" } },
  { id: "sorrowful-2", set: "sorrowful", number: 2, title: "Yesus didera", ref: { label: "Yoh 19:1", param: "JOH.19.1" } },
  { id: "sorrowful-3", set: "sorrowful", number: 3, title: "Yesus dimahkotai duri", ref: { label: "Yoh 19:2–3", param: "JOH.19.2" } },
  { id: "sorrowful-4", set: "sorrowful", number: 4, title: "Yesus memanggul salib-Nya ke Gunung Kalvari", ref: { label: "Luk 23:26–32", param: "LUK.23.26" } },
  { id: "sorrowful-5", set: "sorrowful", number: 5, title: "Yesus wafat di salib", ref: { label: "Luk 23:44–49", param: "LUK.23.44" } },
  { id: "glorious-1", set: "glorious", number: 1, title: "Yesus bangkit dari kematian", ref: { label: "Luk 24:1–12", param: "LUK.24.1" } },
  { id: "glorious-2", set: "glorious", number: 2, title: "Yesus naik ke surga", ref: { label: "Luk 24:50–53", param: "LUK.24.50" } },
  { id: "glorious-3", set: "glorious", number: 3, title: "Roh Kudus turun atas para rasul", ref: { label: "Kis 2:1–13", param: "ACT.2.1" } },
  { id: "glorious-4", set: "glorious", number: 4, title: "Maria diangkat ke surga", ref: { label: "1Kor 15:23", param: "1CO.15.23" } },
  { id: "glorious-5", set: "glorious", number: 5, title: "Maria dimahkotai di surga", ref: { label: "Why 12:1", param: "REV.12.1" } },
  { id: "luminous-1", set: "luminous", number: 1, title: "Yesus dibaptis di Sungai Yordan", ref: { label: "Mat 3:16–17", param: "MAT.3.16" } },
  { id: "luminous-2", set: "luminous", number: 2, title: "Yesus menyatakan diri-Nya dalam pesta pernikahan di Kana", ref: { label: "Yoh 2:1–11", param: "JOH.2.1" } },
  { id: "luminous-3", set: "luminous", number: 3, title: "Yesus memberitakan Kerajaan Allah dan menyerukan pertobatan", ref: { label: "Mat 4:17–23", param: "MAT.4.17" } },
  { id: "luminous-4", set: "luminous", number: 4, title: "Yesus menampakkan kemuliaan-Nya", ref: { label: "Mat 17:2–5", param: "MAT.17.2" } },
  { id: "luminous-5", set: "luminous", number: 5, title: "Yesus menetapkan Ekaristi", ref: { label: "Mrk 14:22–24", param: "MAR.14.22" } },
];

export interface RosaryStep {
  title: string;
  prayerIds: string[];
  detail?: string;
}

/** Order of the rosary per Puji Syukur no. 213 and parish practice (the Fatima prayer is customary, not in PS 213). */
export const ROSARY_STEPS: RosaryStep[] = [
  { title: "Tanda Salib", prayerIds: ["tanda-salib"] },
  { title: "Aku Percaya", prayerIds: ["aku-percaya"] },
  { title: "Kemuliaan dan Terpujilah", prayerIds: ["kemuliaan", "terpujilah-nama-yesus"], detail: "Some parishes say only the Kemuliaan here." },
  { title: "Bapa Kami", prayerIds: ["bapa-kami"] },
  { title: "Tiga Salam Maria", prayerIds: ["salam-maria"], detail: "Salam, Putri Allah Bapa. – Salam Maria ...\nSalam, Bunda Allah Putra. – Salam Maria ...\nSalam, Mempelai Allah Roh Kudus. – Salam Maria ..." },
  { title: "Kemuliaan dan Terpujilah", prayerIds: ["kemuliaan", "terpujilah-nama-yesus"] },
  { title: "Lima peristiwa (diulang 5 kali)", prayerIds: ["bapa-kami", "salam-maria", "kemuliaan", "terpujilah-nama-yesus", "doa-fatima"], detail: "Pemimpin menyebutkan peristiwa (boleh disertai bacaan Kitab Suci singkat), lalu: Bapa Kami, 10 x Salam Maria, Kemuliaan, Terpujilah, Doa Fatima." },
  { title: "Salam, ya Ratu", prayerIds: ["salam-ya-ratu"], detail: "Said after the Doa Fatima of the fifth decade." },
  { title: "Doa Penutup", prayerIds: ["doa-penutup-rosario"] },
  { title: "Litani Santa Perawan Maria (pilihan)", prayerIds: ["litani-santa-perawan-maria"], detail: "Customary especially in May and October." },
  { title: "Tanda Salib", prayerIds: ["tanda-salib"] },
];
