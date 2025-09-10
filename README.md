# 📦 My-Inventory

Project **My-Inventory** adalah aplikasi manajemen produk sederhana yang saya kembangkan sebagai bagian dari pembelajaran di **MySkill**.  
Aplikasi ini dibangun menggunakan **Laravel** sebagai backend (API) dan **React.js** sebagai frontend.  

---

## 🚀 Fitur Utama
- ✅ Tambah produk baru  
- ✅ Lihat daftar produk  
- ✅ Edit/update produk  
- ✅ Hapus produk  
- ✅ Validasi form (frontend + backend)  
- ✅ REST API dengan Laravel  

---

## 🛠️ Tech Stack
- **Frontend:** React.js (Create React App), Axios, Bootstrap, SweetAlert2  
- **Backend:** Laravel 10 (REST API, Eloquent ORM, Validation)  
- **Database:** MySQL  
- **Tools:** Git, GitHub, Postman  

---

## 📂 Struktur Project
my-inventory/
├── backend/ # Laravel API
│ ├── app/
│ ├── routes/api.php
│ └── ...
└── frontend/ # React.js App
├── src/
│ ├── components/
│ └── pages/
└── package.json


---

## ⚙️ Instalasi & Menjalankan Project

### 1. Clone Repository
```bash
git clone https://github.com/username/my-inventory.git
cd my-inventory 
```

### 2. Backend (Laravel)
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate

Buat database di MySQL lalu atur koneksi di file .env

Jalankan migrasi: php artisan migrate

Jalankan server Laravel: php artisan serve
```

### 3. Frontend (React.js)
```bash
cd frontend
npm install
npm start
```
---

## 🔗 API Endpoint Utama
| Method | Endpoint                     | Deskripsi         |
| ------ | ---------------------------- | ----------------- |
| GET    | `/api/products`              | List semua produk |
| GET    | `/api/products/{id}`         | Detail produk     |
| POST   | `/api/products`              | Tambah produk     |
| POST   | `/api/products/update/{id}`  | Update produk     |
| DELETE | `/api/products/{id}`         | Hapus produk      |

