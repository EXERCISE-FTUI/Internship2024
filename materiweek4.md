# Working in a project together with git

## Why do we use git

Git sendiri merupakan version control, dimana dengan git kita dapat menjalan projek dengan berbagai versi secara bersamaan. Selain itu versi-versi yang berbeda ini dapat digabungkna secara otomatis oleh git

## How we do use git to work together

- Setiap orang memegang branch yang berbeda
- Tidak ada satu orang pun yang langsung push ke branch main
- Jika seseorang telah selesai mengerjakan tugas nya dan ingin meggabungkannya dengan main, gunakan pull request dan merge
- Pada saat ada hal baru di main, semua orang di team melakukan git pull origin main untuk menghindari git conflict
- Setiap orang memegang file yang berbeda untuk menghindari terjadi nya git conflict

## Common issue that happen

### Git conflict

Terjadi saat kita ingin menggabungkan dua versi, lalu kedua versi tersebut ingin melakukan hal yang berbeda pada line atau bagian yang sama. Contoh :

### Different visions

Ketika team yang bekerja dalam team memiliki sebutan yang berbeda untuk hal yang sama contoh :

- Frontend
  Terdapat page home, apakah page home ini berada di route / atau /home ?
- Backend
  Seorang user memiliki first name, apakah first name ini disebut user.first_name, user.firstName, atau user.firstname ?

## How to encounter these common issues

### Git conflict

- Setiap orang memegang file yang berbeda
- Selalu melakukan pull origin main ketika ada perubahan di main
- Ketua mengerjakan file yang akan menggabungkan pekerjaan teman-temannya (index.js, root.js, atau main.js)

### Different visions

- Ketua mendefinisikan atau membuat peraturan terlebih dahulu mengenai bagaimana cara mendifinisikan projek nya
- Backend memberikan terlebih dahulu bentukan response yang akan didapatkan frontend, agar frontend dapat memulai mengujicoba tanpa perlu menunggu backend menyelesaikan tugasnya

# Ways to define the project

Memiliki untuk mendifinisikan siapa mengerjakan apa, dan apa namnya

## Frontend

Memiliki tempat untuk mendifinisikan routes dan nama file

## Backend

Memiliki tempat untuk dokumentasi endpoint/request yang dapat dilakukan
