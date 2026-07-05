export const hotel = {
  id: "plat-house-nishishinjuku5",
  name: {
    ja: "ぷらっとハウス西新宿5丁目",
    en: "Plat House Nishi-Shinjuku 5-chome",
  },
  catchcopy: {
    ja: "西新宿5丁目駅3分。4つの客室で最大8名。新宿へのアクセス抜群の快適な民泊",
    en: "3 min from Nishi-Shinjuku 5-chome Station. 4 rooms for up to 8 guests. Perfect base for Shinjuku.",
  },
  address: {
    postalCode: "151-0071",
    ja: "東京都渋谷区本町３－２２－９",
    en: "3-22-9 Honmachi, Shibuya-ku, Tokyo 151-0071",
  },
  area: "新宿・西新宿5丁目",
  phone: "08070583086",
  category: "民泊",
  website: "https://nishishinjuku5.plat-house.jp",
  checkIn: "16:00",
  checkOut: "11:00",
  price: {
    min: 15000,
    max: 40000,
    currency: "JPY",
  },
  cancelPolicy: "7日前まで無料キャンセル可能",
  languages: ["ja", "en"],
  googleMapUrl: "",
  bookingUrl: "https://beds24.com/booking.php?propid=248690&referer=BookingLink",
  rating: {
    google: 0,
    bookingCom: 0,
  },
  access: [
    { station: "西新宿5丁目駅", line: "都営大江戸線", walk: 3 },
    { station: "西新宿駅", line: "東京メトロ丸ノ内線", walk: 10 },
  ],
  floors: "戸建て",
  parking: 0,
  capacity: 8,
  size: "30㎡×2室 / 35㎡×2室",
};

export const amenities = [
  { name: "Netflix", nameEn: "Netflix", icon: "🎬", highlight: true },
  { name: "Nintendo Switch", nameEn: "Nintendo Switch", icon: "🎮", highlight: true },
  { name: "ポケットWi-Fi", nameEn: "Pocket Wi-Fi", icon: "📶", highlight: true },
  { name: "インターネット（Wi-Fi）", nameEn: "Wi-Fi Internet", icon: "🌐", highlight: true },
  { name: "キッチン", nameEn: "Kitchen", icon: "🍳", highlight: true },
  { name: "ソファー・リビング", nameEn: "Sofa & Living Space", icon: "🛋️", highlight: true },
  { name: "ボタニスト（アメニティ）", nameEn: "Botanist Amenities", icon: "🌿", highlight: true },
  { name: "翻訳機", nameEn: "Translation Device", icon: "🌍", highlight: true },
  { name: "空気清浄機", nameEn: "Air Purifier", icon: "💨", highlight: false },
  { name: "洗濯機", nameEn: "Washing Machine", icon: "🫧", highlight: false },
  { name: "冷蔵庫", nameEn: "Refrigerator", icon: "🧊", highlight: false },
  { name: "電子レンジ", nameEn: "Microwave", icon: "♨️", highlight: false },
  { name: "電気ケトル", nameEn: "Electric Kettle", icon: "☕", highlight: false },
  { name: "調理器具・食器", nameEn: "Cookware & Tableware", icon: "🍽️", highlight: false },
  { name: "エアコン", nameEn: "Air Conditioning", icon: "❄️", highlight: false },
  { name: "大型TV", nameEn: "Large TV", icon: "📺", highlight: false },
  { name: "3点ユニットバス", nameEn: "Unit Bath", icon: "🚿", highlight: false },
  { name: "ヘアドライヤー", nameEn: "Hair Dryer", icon: "💨", highlight: false },
  { name: "コテ＆カールアイロン", nameEn: "Curling Iron", icon: "💅", highlight: false },
  { name: "アイロン", nameEn: "Iron", icon: "👔", highlight: false },
];

export const rooms = [
  {
    id: "room-a",
    floor: "",
    name: { ja: "客室A（30㎡・クイーン）", en: "Room A (30㎡ · Queen)" },
    bedType: { ja: "クイーンベッド", en: "Queen Bed" },
    maxGuests: 2,
    description: {
      ja: "30㎡のゆとりある客室。クイーンベッドでカップルや2名様に最適です。",
      en: "A spacious 30㎡ room with a queen bed. Perfect for couples.",
    },
    images: [],
  },
  {
    id: "room-b",
    floor: "",
    name: { ja: "客室B（30㎡・クイーン）", en: "Room B (30㎡ · Queen)" },
    bedType: { ja: "クイーンベッド", en: "Queen Bed" },
    maxGuests: 2,
    description: {
      ja: "30㎡のゆとりある客室。クイーンベッドでカップルや2名様に最適です。",
      en: "A spacious 30㎡ room with a queen bed. Perfect for couples.",
    },
    images: [],
  },
  {
    id: "room-c",
    floor: "",
    name: { ja: "客室C（35㎡・ダブル＋セミダブル）", en: "Room C (35㎡ · Double + Semi-Double)" },
    bedType: { ja: "ダブルベッド＋セミダブルベッド", en: "Double Bed + Semi-Double Bed" },
    maxGuests: 2,
    description: {
      ja: "35㎡の広々とした客室。ダブルベッドとセミダブルベッドで2名様がゆったりとお過ごしいただけます。",
      en: "A generous 35㎡ room with a double and semi-double bed for 2 guests.",
    },
    images: [],
  },
  {
    id: "room-d",
    floor: "",
    name: { ja: "客室D（35㎡・セミダブル×2）", en: "Room D (35㎡ · Semi-Double x2)" },
    bedType: { ja: "セミダブルベッド×2", en: "2 Semi-Double Beds" },
    maxGuests: 2,
    description: {
      ja: "35㎡の広々とした客室。セミダブルベッド2台で2名様がゆったりとお過ごしいただけます。",
      en: "A generous 35㎡ room with 2 semi-double beds for 2 guests.",
    },
    images: [],
  },
];

export const faqs = [
  {
    q: { ja: "チェックインは何時ですか？", en: "What time is check-in?" },
    a: { ja: "チェックインは16時、チェックアウトは11時です。セルフチェックイン対応のため、深夜・早朝でも安心です。", en: "Check-in is at 16:00, check-out is at 11:00. Self check-in is available anytime." },
  },
  {
    q: { ja: "何名まで宿泊できますか？", en: "How many guests can stay?" },
    a: { ja: "4つの客室で最大8名様までご宿泊いただけます。グループ旅行にも対応しています。", en: "Up to 8 guests across 4 rooms. Suitable for group travel." },
  },
  {
    q: { ja: "西新宿5丁目駅からどのくらいですか？", en: "How far from Nishi-Shinjuku 5-chome Station?" },
    a: { ja: "西新宿5丁目駅（都営大江戸線）から徒歩3分です。新宿駅へも電車で数分でアクセスできます。", en: "3 minutes walk from Nishi-Shinjuku 5-chome Station (Toei Oedo Line). Easy access to Shinjuku Station." },
  },
  {
    q: { ja: "翻訳機はありますか？", en: "Is there a translation device?" },
    a: { ja: "はい、翻訳機をご用意しています。外国語でのコミュニケーションにお役立てください。", en: "Yes, a translation device is available. Useful for communicating in foreign languages." },
  },
  {
    q: { ja: "駐車場はありますか？", en: "Is there parking?" },
    a: { ja: "専用駐車場はございません。近隣のコインパーキングをご利用ください。", en: "There is no on-site parking. Please use nearby coin parking facilities." },
  },
  {
    q: { ja: "キャンセルポリシーを教えてください。", en: "What is the cancellation policy?" },
    a: { ja: "ご予約日の7日前まで無料でキャンセルいただけます。", en: "Free cancellation is available up to 7 days before check-in." },
  },
];
