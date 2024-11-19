// Slide show
    let currentIndex = 0;
const slides = document.querySelectorAll('.mySlides');
const totalSlides = slides.length;

function showSlide() {
    // Hapus kelas 'active' dari gambar sebelumnya
    slides[currentIndex].classList.remove('active');
    
    // Tentukan slide berikutnya
    currentIndex = (currentIndex + 1) % totalSlides; // Loop kembali ke gambar pertama
    
    // Tambahkan kelas 'active' ke slide berikutnya
    slides[currentIndex].classList.add('active');
}

// Tampilkan slide pertama
slides[currentIndex].classList.add('active');

// Set interval untuk berganti gambar setiap 5 detik
setInterval(showSlide, 5000);  // Ganti gambar setiap 5 detik