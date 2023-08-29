function animateSections() {
    const sections = document.querySelectorAll("section");
  
    sections.forEach((section, index) => {
      const delay = index * 0.2;
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay,
        ease: "power4.out",
      });
    });
  }
  
  animateSections();
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
  });

  // Fungsi untuk mengatur animasi saat scroll
function animateSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.80 && rect.bottom >= window.innerHeight * 0.2;
        if (isVisible) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Inisialisasi AOS dan panggil fungsi animateSections saat scroll
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
});

window.addEventListener('scroll', () => {
    animateSections();
});