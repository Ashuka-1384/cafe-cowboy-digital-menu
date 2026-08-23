# 🤠 منوی دیجیتال کافه

منوی دیجیتال با استایل نئوکلاسیک وسترنی، ساخته شده با React + Vite.

## 🚀 نصب و اجرا

```bash
# نصب وابستگی‌ها
npm install

# اجرای محلی
npm run dev

# ساخت نسخه نهایی
npm run build

# پیش‌نمایش نسخه build
npm run preview



# 📝 مدیریت منو
# تمام تنظیمات منو در فایل src/data/menuData.js قرار دارد.

# افزودن دسته‌بندی جدید:
# JavaScript

# { id: 'unique-id', name: 'نام فارسی', icon: '🍰' }
# افزودن محصول جدید:
# JavaScript

# {
#   id: 'unique-product-id',
#   categoryId: 'category-id',
#   name: 'نام محصول',
#   price: '۲۰۰',
#   image: '/products/image-name.jpg',
#   recipe: 'توضیحات محصول'
# }
# 📁 پوشه‌های مهم
# public/logo/ — لوگو کافه
# public/products/ — تصاویر محصولات
# src/data/menuData.js — داده‌های منو