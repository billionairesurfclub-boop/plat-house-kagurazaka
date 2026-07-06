export const hotel = {
  id: "plat-house-kagurazaka",
  name: {
    ja: "ぷらっとハウス神楽坂",
    en: "Plat House Kagurazaka",
  },
  catchcopy: {
    ja: "神楽坂駅1分。80㎡の1LDKで最大10名。下町情緒あふれる神楽坂を、贅沢な空間で楽しむ",
    en: "1 min from Kagurazaka Station. Spacious 80㎡ 1LDK for up to 10 guests in charming Kagurazaka.",
  },
  address: {
    postalCode: "162-0065",
    ja: "東京都新宿区矢来町１０８",
    en: "108 Yaraicho, Shinjuku-ku, Tokyo 162-0065",
  },
  area: "神楽坂",
  phone: "08070583086",
  category: "民泊",
  website: "https://kagurazaka.plat-house.jp",
  checkIn: "16:00",
  checkOut: "11:00",
  price: {
    min: 35000,
    max: 70000,
    currency: "JPY",
  },
  cancelPolicy: "7日前まで無料キャンセル可能",
  languages: ["ja", "en"],
  googleMapUrl: "",
  bookingUrl: "https://beds24.com/booking.php?propid=240670&referer=BookingLink",
  rating: {
    google: 0,
    bookingCom: 0,
  },
  access: [
    { station: "神楽坂駅", line: "東京メトロ東西線", walk: 1 },
  ],
  floors: "戸建て",
  parking: 0,
  capacity: 10,
  size: "80㎡（1LDK）",
};

export const amenities = [
  { name: "Netflix", nameEn: "Netflix", icon: "🎬", highlight: true },
  { name: "Nintendo Switch", nameEn: "Nintendo Switch", icon: "🎮", highlight: true },
  { name: "カードゲーム", nameEn: "Card Games", icon: "🃏", highlight: true },
  { name: "ポケットWi-Fi", nameEn: "Pocket Wi-Fi", icon: "📶", highlight: true },
  { name: "インターネット（Wi-Fi）", nameEn: "Wi-Fi Internet", icon: "🌐", highlight: true },
  { name: "浴槽", nameEn: "Bathtub", icon: "🛁", highlight: true },
  { name: "キッチン", nameEn: "Kitchen", icon: "🍳", highlight: true },
  { name: "ソファー・リビング", nameEn: "Sofa & Living Space", icon: "🛋️", highlight: true },
  { name: "ボタニスト（アメニティ）", nameEn: "Botanist Amenities", icon: "🌿", highlight: false },
  { name: "空気清浄機・加湿器", nameEn: "Air Purifier & Humidifier", icon: "💨", highlight: false },
  { name: "洗濯機", nameEn: "Washing Machine", icon: "🫧", highlight: false },
  { name: "冷蔵庫", nameEn: "Refrigerator", icon: "🧊", highlight: false },
  { name: "電子レンジ", nameEn: "Microwave", icon: "♨️", highlight: false },
  { name: "電気ケトル", nameEn: "Electric Kettle", icon: "☕", highlight: false },
  { name: "調理器具・食器", nameEn: "Cookware & Tableware", icon: "🍽️", highlight: false },
  { name: "エアコン", nameEn: "Air Conditioning", icon: "❄️", highlight: false },
  { name: "大型TV", nameEn: "Large TV", icon: "📺", highlight: false },
  { name: "独立トイレ", nameEn: "Separate Toilet", icon: "🚽", highlight: false },
  { name: "ウォシュレット", nameEn: "Washlet", icon: "✨", highlight: false },
  { name: "ヘアドライヤー", nameEn: "Hair Dryer", icon: "💨", highlight: false },
  { name: "コテ＆カールアイロン", nameEn: "Curling Iron", icon: "💅", highlight: false },
  { name: "アイロン", nameEn: "Iron", icon: "👔", highlight: false },
];

export const rooms = [
  {
    id: "room-a",
    floor: "",
    name: { ja: "ぷらっとハウス神楽坂（1LDK・80㎡）", en: "Plat House Kagurazaka (1LDK · 80㎡)" },
    bedType: { ja: "ダブルベッド×2・ダブル布団セット×2・ダブルソファーベッド×2", en: "2 Double Beds + 2 Double Futon Sets + 2 Double Sofa Beds" },
    maxGuests: 10,
    description: {
      ja: "80㎡の広々とした1LDK。ダブルベッド2台・ダブル布団セット2組・ダブルソファーベッド2台で最大10名様が快適にお過ごしいただけます。リビング・キッチン・浴槽完備。",
      en: "A spacious 80㎡ 1LDK with 2 double beds, 2 double futon sets, and 2 double sofa beds. Living room, kitchen, and bathtub included. Up to 10 guests.",
    },
    images: [
    "/images/photo-01.jpg",
    "/images/photo-02.jpg",
    "/images/photo-03.jpg",
    "/images/photo-04.jpg",
    "/images/photo-05.jpg",
    "/images/photo-06.jpg",
    "/images/photo-07.jpg",
    "/images/photo-08.jpg",
    "/images/photo-09.jpg",
    "/images/photo-10.jpg"
  ],
  },
];

export const faqs = [
  {
    q: { ja: "チェックインは何時ですか？", en: "What time is check-in?" },
    a: { ja: "チェックインは16時、チェックアウトは11時です。セルフチェックイン対応のため、深夜・早朝でも安心です。", en: "Check-in is at 16:00, check-out is at 11:00. Self check-in is available anytime." },
  },
  {
    q: { ja: "何名まで宿泊できますか？", en: "How many guests can stay?" },
    a: { ja: "最大10名様までご宿泊いただけます。ダブルベッド2台・布団2組・ソファーベッド2台をご用意しています。大人数のグループ・ファミリー旅行に最適です。", en: "Up to 10 guests. We provide 2 double beds, 2 futon sets, and 2 sofa beds. Perfect for large groups and family trips." },
  },
  {
    q: { ja: "神楽坂駅からどのくらいですか？", en: "How far from Kagurazaka Station?" },
    a: { ja: "神楽坂駅（東京メトロ東西線）から徒歩1分です。神楽坂の飲食店・観光スポットへすぐアクセスできます。", en: "Just 1 minute walk from Kagurazaka Station (Tokyo Metro Tozai Line). Immediate access to Kagurazaka's restaurants and sightseeing spots." },
  },
  {
    q: { ja: "キッチンは使えますか？", en: "Is the kitchen available?" },
    a: { ja: "はい、調理器具・食器完備のキッチンをご利用いただけます。大人数での自炊も楽しんでいただけます。", en: "Yes, a fully equipped kitchen with cookware and tableware is available. Great for group cooking." },
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
