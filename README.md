# Aplikasi Manajemen Buku CRUD dengan Docker

Ini adalah sistem manajemen buku sederhana yang dibangun menggunakan Node.js, Express, dan EJS, serta dikontainerisasi menggunakan Docker. Aplikasi ini memungkinkan pengguna untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada data buku.

## Fitur

1. **Tambah Buku**: Tambahkan buku baru dengan judul, penulis, dan tahun terbit.
2. **Lihat Buku**: Tampilkan daftar semua buku dalam format tabel yang rapi.
3. **Edit Buku**: Perbarui informasi buku yang ada.
4. **Hapus Buku**: Hapus buku dari sistem.

## Prasyarat

- Docker Desktop (Windows/Mac) atau Docker Engine (Linux)
- Node.js 18.x atau lebih baru (hanya untuk pengembangan lokal)
- Peramban web

## Instalasi & Menjalankan dengan Docker

1. Clone repositori ini:
   ```bash
   git clone (https://github.com/RizkaFitrina/TUGAS-CRUD-DOCKER.git)
   cd docker-crud-books
   ```

2. Bangun dan jalankan menggunakan Docker Compose:
   ```bash
   docker-compose up --build
   ```

3. Akses aplikasi:
   - Buka peramban web Anda.
   - Arahkan ke `http://localhost:3000`.

## Penjelasan Konfigurasi Docker

### Dockerfile
```dockerfile
# Gunakan image Node.js resmi sebagai basis
FROM node:14

# Tetapkan direktori kerja di dalam container
WORKDIR /usr/src/app

# Salin package.json dan instal dependensi
COPY package*.json ./
RUN npm install

# Salin seluruh file aplikasi ke dalam container
COPY . .

# Buka port 3000 untuk aplikasi
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]
```

Komponen utama:
- `FROM node:14`: Menggunakan Node.js versi 14 sebagai image dasar.
- `WORKDIR /usr/src/app`: Menetapkan direktori kerja di dalam container.
- `COPY package*.json ./`: Menyalin file `package.json` untuk caching yang lebih baik.
- `RUN npm install`: Menginstal dependensi.
- `COPY . .`: Menyalin seluruh kode aplikasi.
- `EXPOSE 3000`: Mencatat port yang digunakan aplikasi.
- `CMD ["npm", "start"]`: Menentukan perintah untuk menjalankan aplikasi.

### Docker Compose
```yaml
version: '3'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    environment:
      NODE_ENV: development
```

Komponen utama:
- `version: '3'`: Menentukan versi file Docker Compose.
- `services`: Mendefinisikan layanan yang akan dijalankan.
- `app`: Layanan utama aplikasi.
- `ports`: Memetakan port container ke port host.
- `volumes`: Memasangkan direktori lokal untuk pengembangan.
- `environment`: Mengatur variabel lingkungan.

## Struktur Aplikasi

```
docker-crud-books/
├── src/
│   ├── models/
│   │   └── book.js
│   ├── routes/
│   │   └── bookRoutes.js
│   ├── views/
│   │   ├── books/
│   │   │   ├── add.ejs
│   │   │   ├── edit.ejs
│   │   │   └── index.ejs
│   │   ├── layout/
│   │   │   ├── header.ejs
│   │   │   └── footer.ejs
│   │   └── error.ejs
│   └── app.js
├── public/
│   └── styles.css
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

## Implementasi Fitur

1. **Tambah Buku**
   - Klik tombol "Tambah Buku Baru".
   - Isi detail buku (judul, penulis, tahun).
   - Klik simpan untuk menambahkan buku.

2. **Lihat Buku**
   - Halaman utama menampilkan semua buku dalam tabel.
   - Tabel mencantumkan ID, judul, penulis, dan tahun terbit.
   - Desain responsif untuk berbagai ukuran layar.

3. **Edit Buku**
   - Klik tombol "Edit" di samping buku.
   - Ubah detail buku di formulir.
   - Simpan perubahan untuk memperbarui data buku.

4. **Hapus Buku**
   - Klik tombol "Hapus" di samping buku.
   - Konfirmasi penghapusan melalui popup.
   - Buku akan dihapus dari sistem.

## Pengembangan

Untuk pengembangan lokal tanpa Docker:

1. Instal dependensi:
   ```bash
   npm install
   ```

2. Jalankan aplikasi:
   ```bash
   npm start
   ```

3. Akses di `http://localhost:3000`.

## Pertimbangan Keamanan

- Validasi input diterapkan untuk semua formulir.
- Perlindungan injeksi SQL melalui query parameterized.
- Perlindungan XSS menggunakan escape template EJS.

## Kontribusi

1. Fork repositori ini.
2. Buat branch fitur Anda.
3. Commit perubahan Anda.
4. Push ke branch Anda.
5. Buat Pull Request baru.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi ISC.
