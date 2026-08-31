/*
 * ============================================================
 *  📋 منوی کافه
 * ============================================================
 *
 *  ➕ برای افزودن دسته‌بندی جدید:
 *     یک آبجکت جدید به آرایه categories اضافه کنید
 *     { id: 'unique-id', name: 'نام فارسی', icon: '🍰' }
 *
 *  ➕ برای افزودن محصول جدید:
 *     یک آبجکت جدید به آرایه products اضافه کنید
 *     - categoryId باید برابر id دسته‌بندی مورد نظر باشد
 *     - عکس محصول را در پوشه public/products/ قرار دهید
 * ============================================================
 */

// ─── اطلاعات کافه ───
export const restaurantInfo = {
  name: "کافه",
  logo: "/logo/logo.png",
};

// ─── دسته‌بندی‌ها ───
export const categories = [
  { id: "tea", name: "چای", icon: "🫖" },
  { id: "hot-bar", name: "بار گرم", icon: "☕" },
  { id: "cold-coffee", name: "بار سرد بر پایه قهوه", icon: "🧊" },
  { id: "cold-bar", name: "بار سرد", icon: "🍹" },
  { id: "shakes", name: "انواع شیک", icon: "🥤" },
  { id: "smoothies", name: "انواع اسموتی", icon: "🍓" },
  { id: "dessert", name: "دسر", icon: "🍰" },
  { id: "fast-food", name: "فست فود", icon: "🍔" },
  { id: "hookah", name: "قلیان", icon: "💨" },
];

// ─── محصولات ───
export const products = [
  // ═══════════════════════════════════════════════
  //  🫖 چای
  // ═══════════════════════════════════════════════
  {
    id: "tea-classic",
    categoryId: "tea",
    name: "چای کلاسیک",
    price: "۸۰",
    image: "/products/tea-classic.jpg",
    recipe: "چای سیاه اصیل، دم‌کرده تازه با عطر و طعمی دلنشین",
  },
  {
    id: "tea-rose",
    categoryId: "tea",
    name: "چای گلاب",
    price: "۹۰",
    image: "/products/tea-rose.jpg",
    recipe: "چای سیاه با عطر گلاب طبیعی و گلبرگ گل محمدی",
  },
  {
    id: "tea-cardamom",
    categoryId: "tea",
    name: "چای هل",
    price: "۹۰",
    image: "/products/tea-cardamom.jpg",
    recipe: "چای سیاه معطر با هل سبز تازه و ادویه‌های شرقی",
  },
  {
    id: "tea-green",
    categoryId: "tea",
    name: "چای سبز",
    price: "۱۲۰",
    image: "/products/tea-green.jpg",
    recipe: "چای سبز درجه یک، دم‌کرده در دمای مناسب، سرشار از آنتی‌اکسیدان",
  },
  {
    id: "tea-specialty",
    categoryId: "tea",
    name: "چای اسپیشیالیتی",
    price: "۱۱۰",
    image: "/products/tea-specialty.jpg",
    recipe: "چای اسپیشیالیتی سرو شده به همراه کوکی خانگی و سوهان عسلی",
  },

  // ═══════════════════════════════════════════════
  //  ☕ بار گرم
  // ═══════════════════════════════════════════════
  {
    id: "ristretto",
    categoryId: "hot-bar",
    name: "ریسترتو",
    price: "۱۲۰",
    image: "/products/ristretto.jpg",
    recipe: "شات کوتاه و غلیظ اسپرسو با طعمی قوی و بی‌نظیر",
  },
  {
    id: "espresso",
    categoryId: "hot-bar",
    name: "اسپرسو",
    price: "۱۲۰",
    image: "/products/espresso.jpg",
    recipe: "شات کلاسیک اسپرسو با کرمای طلایی از دانه‌های اصیل عربیکا",
  },
  {
    id: "lungo",
    categoryId: "hot-bar",
    name: "لانگو",
    price: "۱۲۰",
    image: "/products/lungo.jpg",
    recipe: "اسپرسو با حجم بیشتر و طعمی ملایم‌تر، سرو شده در فنجان مخصوص",
  },
  {
    id: "americano",
    categoryId: "hot-bar",
    name: "آمریکانو",
    price: "۱۲۰",
    image: "/products/americano.jpg",
    recipe: "شات اسپرسو با آب داغ، سبک و روان با طعمی متعادل",
  },
  {
    id: "cappuccino",
    categoryId: "hot-bar",
    name: "کاپوچینو",
    price: "۲۰۰",
    image: "/products/cappuccino.jpg",
    recipe: "اسپرسو با شیر بخارداده و فوم مخملی، پوشیده از پودر کاکائو",
  },
  {
    id: "mocha",
    categoryId: "hot-bar",
    name: "موکا",
    price: "۲۵۰",
    image: "/products/mocha.jpg",
    recipe: "ترکیب دلپذیر اسپرسو، شکلات بلژیکی، شیر بخار و خامه",
  },
  {
    id: "chocolate",
    categoryId: "hot-bar",
    name: "چاکلت",
    price: "۲۰۰",
    image: "/products/chocolate.jpg",
    recipe: "شکلات داغ غلیظ با شیر گرم و تاپینگ خامه و پودر شکلات",
  },
  {
    id: "nescafe",
    categoryId: "hot-bar",
    name: "نسکافه",
    price: "۲۰۰",
    image: "/products/nescafe.jpg",
    recipe: "قهوه فوری با شیر گرم و فوم لطیف، ایده‌آل برای صبح‌های گرم",
  },
  {
    id: "latte",
    categoryId: "hot-bar",
    name: "لته",
    price: "۲۵۰",
    image: "/products/latte.jpg",
    recipe: "اسپرسو با شیر بخار زیاد و فوم نازک، همراه با طرح لته‌آرت",
  },
  {
    id: "turkish-coffee",
    categoryId: "hot-bar",
    name: "ترک",
    price: "۱۸۰",
    image: "/products/turkish.jpg",
    recipe: "قهوه سنتی ترک دم‌شده در جذوه مسی، سرو شده با شکلات",
  },
  {
    id: "french-coffee",
    categoryId: "hot-bar",
    name: "فرانسه",
    price: "۱۸۰",
    image: "/products/french.jpg",
    recipe: "قهوه دم‌آور شده به سبک فرانسوی با عطر و طعم منحصربه‌فرد",
  },
  {
    id: "caramel-macchiato",
    categoryId: "hot-bar",
    name: "کارامل ماکیاتو",
    price: "۲۵۰",
    image: "/products/caramel-macchiato.jpg",
    recipe: "لایه‌های شیر بخار، وانیل، اسپرسو و سس کارامل با طعمی بی‌نظیر",
  },
  {
    id: "espresso-macchiato",
    categoryId: "hot-bar",
    name: "اسپرسو ماکیاتو",
    price: "۱۵۰",
    image: "/products/espresso-macchiato.jpg",
    recipe: "شات اسپرسو با یک قاشق فوم شیر، غلیظ و متعادل",
  },
  {
    id: "kemex",
    categoryId: "hot-bar",
    name: "کمکس",
    price: "۳۸۰",
    image: "/products/kemex.jpg",
    recipe:
      "دم‌آوری اسپیشیالیتی با روش کمکس، دانه قهوه عربیکا به همراه کمی آجیل",
  },

  // ═══════════════════════════════════════════════
  //  🧊 بار سرد بر پایه قهوه
  // ═══════════════════════════════════════════════
  {
    id: "iced-americano",
    categoryId: "cold-coffee",
    name: "آیس آمریکانو",
    price: "۱۵۰",
    image: "/products/iced-americano.jpg",
    recipe: "شات اسپرسو با آب سرد و یخ فراوان، خنک و باطراوت",
  },
  {
    id: "iced-latte",
    categoryId: "cold-coffee",
    name: "آیس لته",
    price: "۲۵۰",
    image: "/products/iced-latte.jpg",
    recipe: "اسپرسو با شیر سرد و یخ، لطیف و ملایم برای روزهای گرم",
  },
  {
    id: "iced-caramel-macchiato",
    categoryId: "cold-coffee",
    name: "آیس کارامل ماکیاتو",
    price: "۲۵۰",
    image: "/products/iced-caramel-macchiato.jpg",
    recipe: "لایه‌های شیر سرد، وانیل، اسپرسو و سس کارامل با یخ",
  },
  {
    id: "iced-mocha",
    categoryId: "cold-coffee",
    name: "آیس موکا",
    price: "۲۵۰",
    image: "/products/iced-mocha.jpg",
    recipe: "اسپرسو، شکلات، شیر سرد و یخ، پوشیده از خامه و سس شکلات",
  },

  // ═══════════════════════════════════════════════
  //  🍹 بار سرد
  // ═══════════════════════════════════════════════
  {
    id: "mojito-classic",
    categoryId: "cold-bar",
    name: "موهیتو کلاسیک",
    price: "۲۵۰",
    image: "/products/mojito-classic.jpg",
    recipe: "لیمو تازه، نعناع، شربت مخصوص، سودا و یخ خرد شده",
  },
  {
    id: "mojito-brazilian",
    categoryId: "cold-bar",
    name: "موهیتو برزیلی",
    price: "۲۸۰",
    image: "/products/mojito-brazilian.jpg",
    recipe: "موهیتو با طعم پرتقال و لیمو ترش، سرحال‌کننده و پرانرژی",
  },
  {
    id: "mojito-strawberry",
    categoryId: "cold-bar",
    name: "موهیتو توت فرنگی",
    price: "۳۰۰",
    image: "/products/mojito-strawberry.jpg",
    recipe: "موهیتو با پوره توت فرنگی تازه، نعناع و طعم بهاری دلچسب",
  },
  {
    id: "black-mojito",
    categoryId: "cold-bar",
    name: "بلک موهیتو",
    price: "۲۸۰",
    image: "/products/black-mojito.jpg",
    recipe: "موهیتو با شربت زغال فعال، ظاهری مشکی خاص و طعمی بی‌نظیر",
  },
  {
    id: "victoria",
    categoryId: "cold-bar",
    name: "ویکتوریا",
    price: "۳۰۰",
    image: "/products/victoria.jpg",
    recipe: "نوشیدنی مخصوص با ترکیب میوه‌های تازه و شربت خانگی",
  },
  {
    id: "blue-mojito",
    categoryId: "cold-bar",
    name: "بلو موهیتو",
    price: "۲۸۰",
    image: "/products/blue-mojito.jpg",
    recipe: "موهیتو با شربت بلو کوراسائو، آبی روشن و خنک‌کننده",
  },
  {
    id: "lemonade",
    categoryId: "cold-bar",
    name: "لیموناد",
    price: "۲۵۰",
    image: "/products/lemonade.jpg",
    recipe: "آب لیمو تازه، شربت، نعناع و یخ خرد شده، خنک و باطراوت",
  },

  // ═══════════════════════════════════════════════
  //  🥤 انواع شیک
  // ═══════════════════════════════════════════════
  {
    id: "shake-banana",
    categoryId: "shakes",
    name: "شیک موز",
    price: "۳۸۰",
    image: "/products/shake-banana.jpg",
    recipe: "شیک غلیظ موز با بستنی وانیلی، شیر پرچرب و تاپینگ خامه",
  },
  {
    id: "shake-nutella",
    categoryId: "shakes",
    name: "شیک نوتلا",
    price: "۳۸۰",
    image: "/products/shake-nutella.jpg",
    recipe: "شیک نوتلا با بستنی شکلاتی، شیر و تاپینگ فندق و سس شکلات",
  },
  {
    id: "shake-strawberry",
    categoryId: "shakes",
    name: "شیک توت فرنگی",
    price: "۳۸۰",
    image: "/products/shake-strawberry.jpg",
    recipe: "شیک توت فرنگی تازه با بستنی وانیلی و تاپینگ خامه فرم گرفته",
  },
  {
    id: "shake-marshmallow",
    categoryId: "shakes",
    name: "شیک مارشمالو",
    price: "۲۸۰",
    image: "/products/shake-marshmallow.jpg",
    recipe: "شیک وانیلی با مارشمالوی برشته و سس کارامل، دسری خیال‌انگیز",
  },
  {
    id: "shake-coffee",
    categoryId: "shakes",
    name: "شیک قهوه",
    price: "۳۵۰",
    image: "/products/shake-coffee.jpg",
    recipe: "شیک قهوه اسپرسو با بستنی، شیر سرد و تاپینگ خامه",
  },

  // ═══════════════════════════════════════════════
  //  🍓 انواع اسموتی
  // ═══════════════════════════════════════════════
  {
    id: "smoothie-strawberry",
    categoryId: "smoothies",
    name: "اسموتی توت فرنگی",
    price: "۳۰۰",
    image: "/products/smoothie-strawberry.jpg",
    recipe: "توت فرنگی تازه با ماست یونانی و عسل، سرحال‌کننده و مقوی",
  },
  {
    id: "smoothie-banana",
    categoryId: "smoothies",
    name: "اسموتی موز",
    price: "۲۸۰",
    image: "/products/smoothie-banana.jpg",
    recipe: "موز رسیده با شیر و عسل، صبحانه‌ای انرژی‌بخش و لذیذ",
  },
  {
    id: "smoothie-pineapple",
    categoryId: "smoothies",
    name: "اسموتی آناناس",
    price: "۳۲۰",
    image: "/products/smoothie-pineapple.jpg",
    recipe: "آناناس گرمسیری با نارگیل، طعمی استوایی و منحصربه‌فرد",
  },
  {
    id: "smoothie-mango",
    categoryId: "smoothies",
    name: "اسموتی انبه",
    price: "۳۵۰",
    image: "/products/smoothie-mango.jpg",
    recipe: "انبه رسیده هندی با ماست و کمی زعفران، طعمی افسانه‌ای",
  },

  // ═══════════════════════════════════════════════
  //  🍰 دسر
  // ═══════════════════════════════════════════════
  {
    id: "wet-cake",
    categoryId: "dessert",
    name: "کیک خیس",
    price: "۱۹۰",
    image: "/products/wet-cake.jpg",
    recipe: "کیک شکلاتی خیس با سس شکلات غنی و بستنی وانیلی، دسری بی‌رقیب",
  },

  // ═══════════════════════════════════════════════
  //  🍔 فست فود
  // ═══════════════════════════════════════════════
  {
    id: "food-mixed",
    categoryId: "fast-food",
    name: "پیتزا مخلوط",
    price: "۵۸۰",
    image: "/products/food-mixed.jpg",
    recipe: "پیتزا با ترکیب گوشت، مرغ، قارچ، فلفل دلمه‌ای و پنیر موزارلا",
  },
  {
    id: "food-pepperoni",
    categoryId: "fast-food",
    name: "پیتزا پپرونی",
    price: "۶۵۰",
    image: "/products/food-pepperoni.jpg",
    recipe: "پیتزا کلاسیک با پپرونی تند، پنیر موزارلا و سس گوجه فرنگی",
  },
  {
    id: "food-pasta",
    categoryId: "fast-food",
    name: "پاستا آلفردو",
    price: "۴۸۰",
    image: "/products/food-pasta.jpg",
    recipe: "پاستا با سس آلفردو خامه‌ای، پنیر پارمزان و مرغ گریل شده",
  },
  {
    id: "food-chicken-strips",
    categoryId: "fast-food",
    name: " چیکن استیک",
    price: "۸۵۰",
    image: "/products/food-strips.jpg",
    recipe: "نوارهای مرغ سوخاری کریسپی با سس مخصوص و سیب زمینی سرخ شده",
  },

  {
    id: "food-burger",
    categoryId: "fast-food",
    name: "برگر رویال",
    price: "۶۸۰",
    image: "/products/food-burger.jpg",
    recipe: "برگر گوشت گاو تازه گریل ذغالی، پنیر چدار، کاهو، گوجه و سس ویژه",
  },
  {
    id: "food-tom",
    categoryId: "fast-food",
    name: " استیک تام و جری",
    price: "۱۹۰۰",
    image: "/products/food-tom.jpg",
    recipe:
      " استیک گوشت گوساله با سس قارچ و سبزیچات تازه، سرو شده با سیب زمینی سرخ کرده",
  },
  {
    id: "french-frise",
    categoryId: "fast-food",
    name: " سیب زمینی سرخ کرده",
    price: "۳۵۰",
    image: "/products/french-frise.png",
    recipe: " سیب زمینی سرخ کرده با نمک و ادویه مخصوص، سرو شده با سس کچاپ  ",
  },
  {
    id: "sib-tanori",
    categoryId: "fast-food",
    name: "سیب زمینی تنوری",
    price: "۴۵۰",
    image: "/products/sib-tnori.png",
    recipe:
      " سیب زمینی تنوری با ادویه‌های مخصوص و پنیر پیتزا، سرو شده با روش مخصوص",
  },

  // ═══════════════════════════════════════════════
  //  💨 قلیان
  // ═══════════════════════════════════════════════
  // ⚠️ توجه: قیمت پایه ۴۵۰ هزار تومان برای همه طعم‌ها
  // اگر طعم یا قیمتی متفاوته، اینجا ویرایش کنید
  {
    id: "hookah-double-apple",
    categoryId: "hookah",
    name: "قلیان دو سیب",
    price: "۶۰۰",
    image: "/products/hookah.jpg",
    recipe: "تنباکوی دو سیب اصیل، طعم کلاسیک و محبوب با عطری گرم و دلنشین",
  },
  {
    id: "hookah-peach",
    categoryId: "hookah",
    name: "قلیان هندوانه یخ",
    price: "۶۰۰",
    image: "/products/hookah.jpg",
    recipe: "تنباکوی هلو با عطر شیرین و ملایم، انتخابی دلپذیر برای تازه‌کارها",
  },
  {
    id: "hookah-orange",
    categoryId: "hookah",
    name: "قلیان شب های مسکو",
    price: "۶۰۰",
    image: "/products/hookah.jpg",
    recipe: "تنباکوی پرتقال با عطر تازه مرکبات، سرحال‌کننده و پرطراوت",
  },
  {
    id: "hookah-lemon",
    categoryId: "hookah",
    name: "قلیان آدامس دارچین",
    price: "۶۰۰",
    image: "/products/hookah.jpg",
    recipe: "تنباکوی لیمو با طعم ترش و خنک، انتخابی متفاوت برای کام لطیف",
  },
  {
    id: "hookah-grape",
    categoryId: "hookah",
    name: "قلیان تمشک بستنی",
    price: "۶۰۰",
    image: "/products/hookah.jpg",
    recipe: "تنباکوی انگور با عطر شیرین و اصیل، طعمی کلاسیک و همیشگی",
  },
  {
    id: "hookah-mint",
    categoryId: "hookah",
    name: "قلیان لاو",
    price: "۶۰۰",
    image: "/products/hookah.jpg",
    recipe: "تنباکوی نعناع خنک و باطراوت، ایده‌آل برای عاشقان طعم‌های سبک",
  },
];

// ─── توابع کمکی ───
export const getProductsByCategory = (categoryId) =>
  products.filter((product) => product.categoryId === categoryId);

export const getCategoryById = (categoryId) =>
  categories.find((cat) => cat.id === categoryId);
