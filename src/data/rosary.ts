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
  image?: { artist: string; title: string; year: string; sourceUrl: string };
}

/** Mystery titles and references as in Puji Syukur no. 213. */
export const ROSARY_MYSTERIES: RosaryMystery[] = [
  { id: "joyful-1", set: "joyful", number: 1, title: "Maria menerima kabar gembira dari Malaikat Gabriel", ref: { label: "Luk 1:26–38", param: "LUK.1.26" }, image: { artist: "Fra Angelico", title: "The Annunciation", year: "c. 1430–1432", sourceUrl: "https://commons.wikimedia.org/wiki/File:Fra_Angelico_-_The_Annunciation_-_WGA0455.jpg" } },
  { id: "joyful-2", set: "joyful", number: 2, title: "Maria mengunjungi Elisabet, saudarinya", ref: { label: "Luk 1:39–45", param: "LUK.1.39" }, image: { artist: "Domenico Ghirlandaio", title: "The Visitation", year: "1491", sourceUrl: "https://commons.wikimedia.org/wiki/File:Domenico_ghirlandaio,_visitazione,_louvre_01.jpg" } },
  { id: "joyful-3", set: "joyful", number: 3, title: "Yesus dilahirkan di Betlehem", ref: { label: "Luk 2:1–7", param: "LUK.2.1" }, image: { artist: "Gerard van Honthorst", title: "The Adoration of the Shepherds", year: "1622", sourceUrl: "https://commons.wikimedia.org/wiki/File:Gerard_van_Honthorst_-_Adoration_of_the_Shepherds_-_WGA11657.jpg" } },
  { id: "joyful-4", set: "joyful", number: 4, title: "Yesus dipersembahkan dalam Bait Allah", ref: { label: "Luk 2:22–40", param: "LUK.2.22" }, image: { artist: "Fra Angelico", title: "The Presentation in the Temple", year: "c. 1440–1442", sourceUrl: "https://commons.wikimedia.org/wiki/File:Fra_Angelico_-_Presentation_of_Jesus_in_the_Temple_(Cell_10)_-_WGA00544.jpg" } },
  { id: "joyful-5", set: "joyful", number: 5, title: "Yesus diketemukan dalam Bait Allah", ref: { label: "Luk 2:41–52", param: "LUK.2.41" }, image: { artist: "Heinrich Hofmann", title: "Christ in the Temple", year: "1884", sourceUrl: "https://commons.wikimedia.org/wiki/File:ChristInTheTemple.jpg" } },
  { id: "sorrowful-1", set: "sorrowful", number: 1, title: "Yesus berdoa kepada Bapa-Nya di surga dalam sakratul maut", ref: { label: "Luk 22:39–46", param: "LUK.22.39" }, image: { artist: "Heinrich Hofmann", title: "Christ in Gethsemane", year: "1886", sourceUrl: "https://commons.wikimedia.org/wiki/File:Christ_in_Gethsemane.jpg" } },
  { id: "sorrowful-2", set: "sorrowful", number: 2, title: "Yesus didera", ref: { label: "Yoh 19:1", param: "JOH.19.1" }, image: { artist: "Piero della Francesca", title: "The Flagellation of Christ", year: "c. 1459–1460", sourceUrl: "https://commons.wikimedia.org/wiki/File:Piero_della_Francesca_-_The_Flagellation_-_WGA17600.jpg" } },
  { id: "sorrowful-3", set: "sorrowful", number: 3, title: "Yesus dimahkotai duri", ref: { label: "Yoh 19:2–3", param: "JOH.19.2" }, image: { artist: "Hieronymus Bosch", title: "Christ Mocked (The Crowning with Thorns)", year: "c. 1510", sourceUrl: "https://www.wga.hu/html/b/bosch/5panels/index.html" } },
  { id: "sorrowful-4", set: "sorrowful", number: 4, title: "Yesus memanggul salib-Nya ke Gunung Kalvari", ref: { label: "Luk 23:26–32", param: "LUK.23.26" }, image: { artist: "El Greco", title: "Christ Carrying the Cross", year: "c. 1602", sourceUrl: "https://www.wga.hu/html/g/greco_el/15/index.html" } },
  { id: "sorrowful-5", set: "sorrowful", number: 5, title: "Yesus wafat di salib", ref: { label: "Luk 23:44–49", param: "LUK.23.44" }, image: { artist: "Diego Velázquez", title: "Christ Crucified", year: "c. 1632", sourceUrl: "https://commons.wikimedia.org/wiki/File:Diego_Vel%C3%A1zquez_-_Christ_on_the_Cross_-_WGA24389.jpg" } },
  { id: "glorious-1", set: "glorious", number: 1, title: "Yesus bangkit dari kematian", ref: { label: "Luk 24:1–12", param: "LUK.24.1" }, image: { artist: "Carl Bloch", title: "The Resurrection", year: "1881", sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Resurrection_by_Carl_Heinrich_Bloch,_1881.jpg" } },
  { id: "glorious-2", set: "glorious", number: 2, title: "Yesus naik ke surga", ref: { label: "Luk 24:50–53", param: "LUK.24.50" }, image: { artist: "Garofalo", title: "The Ascension of Christ", year: "c. 1510–1520", sourceUrl: "https://commons.wikimedia.org/wiki/File:Wga_Garofalo_Ascension_of_Christ.jpg" } },
  { id: "glorious-3", set: "glorious", number: 3, title: "Roh Kudus turun atas para rasul", ref: { label: "Kis 2:1–13", param: "ACT.2.1" }, image: { artist: "El Greco", title: "Pentecost", year: "c. 1600", sourceUrl: "https://commons.wikimedia.org/wiki/File:El_Greco_-_The_Pentecost_-_WGA10533.jpg" } },
  { id: "glorious-4", set: "glorious", number: 4, title: "Maria diangkat ke surga", ref: { label: "1Kor 15:23", param: "1CO.15.23" }, image: { artist: "Titian", title: "Assumption of the Virgin (Assunta)", year: "1516–1518", sourceUrl: "https://www.wga.hu/html/t/tiziano/01a/index.html" } },
  { id: "glorious-5", set: "glorious", number: 5, title: "Maria dimahkotai di surga", ref: { label: "Why 12:1", param: "REV.12.1" }, image: { artist: "Fra Angelico", title: "Coronation of the Virgin", year: "c. 1434–1435", sourceUrl: "https://www.wga.hu/html/a/angelico/12/index.html" } },
  { id: "luminous-1", set: "luminous", number: 1, title: "Yesus dibaptis di Sungai Yordan", ref: { label: "Mat 3:16–17", param: "MAT.3.16" }, image: { artist: "Andrea del Verrocchio & Leonardo da Vinci", title: "The Baptism of Christ", year: "c. 1470–1475", sourceUrl: "https://commons.wikimedia.org/wiki/File:Baptism_of_Christ_by_Andrea_del_Verrocchio.jpg" } },
  { id: "luminous-2", set: "luminous", number: 2, title: "Yesus menyatakan diri-Nya dalam pesta pernikahan di Kana", ref: { label: "Yoh 2:1–11", param: "JOH.2.1" }, image: { artist: "Gerard David", title: "The Marriage at Cana", year: "c. 1500", sourceUrl: "https://commons.wikimedia.org/wiki/File:Gerard_David_-_The_Marriage_at_Cana_-_WGA6020.jpg" } },
  { id: "luminous-3", set: "luminous", number: 3, title: "Yesus memberitakan Kerajaan Allah dan menyerukan pertobatan", ref: { label: "Mat 4:17–23", param: "MAT.4.17" }, image: { artist: "Carl Bloch", title: "The Sermon on the Mount", year: "1877", sourceUrl: "https://commons.wikimedia.org/wiki/File:Bloch-SermonOnTheMount.jpg" } },
  { id: "luminous-4", set: "luminous", number: 4, title: "Yesus menampakkan kemuliaan-Nya", ref: { label: "Mat 17:2–5", param: "MAT.17.2" }, image: { artist: "Raphael", title: "The Transfiguration", year: "1516–1520", sourceUrl: "https://commons.wikimedia.org/wiki/File:Transfiguration_Raphael.jpg" } },
  { id: "luminous-5", set: "luminous", number: 5, title: "Yesus menetapkan Ekaristi", ref: { label: "Mrk 14:22–24", param: "MAR.14.22" }, image: { artist: "Juan de Juanes", title: "The Last Supper", year: "c. 1562", sourceUrl: "https://commons.wikimedia.org/wiki/File:Joan_de_Joanes_-_The_Last_Supper_-_WGA12058.jpg" } },
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
