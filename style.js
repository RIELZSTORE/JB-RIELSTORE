// Efek Mengetik
const textEl = document.getElementById("typing-text");
const textToType = "Jasa Rekber & JB Akun Terpercaya di Jawa Tengah.";
let index = 0;

function typeText() {
  if (index < textToType.length) {
    textEl.innerHTML += textToType.charAt(index);
    index++;
    setTimeout(typeText, 60);
  }
}
setTimeout(typeText, 800);

// Animasi Scroll Muncul
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));

// Menutup menu jika link diklik (Opsional jika pakai hamburger nanti)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    console.log("Navigating to section...");
  });
});
