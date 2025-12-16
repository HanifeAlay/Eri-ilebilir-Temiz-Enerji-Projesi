/* Baloncukları oluşturuyoruz */

document.addEventListener("DOMContentLoaded", () => {
  // Kartlar scroll ile gelsin
  const cards = document.querySelectorAll(".reveal");

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.2 });

  cards.forEach(card => io.observe(card));
});
