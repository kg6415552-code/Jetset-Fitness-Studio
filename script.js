// 🔘 JOIN BUTTON ACTION
function joinNow() {
  window.open("https://www.facebook.com/jetsetfitnessstudio", "_blank");
}


// 🌐 SMOOTH SCROLL (for navbar links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});


// ✨ SCROLL ANIMATION (fade-in effect)
const elements = document.querySelectorAll(".card, .section h2");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";
  el.style.transition = "all 0.6s ease";
  observer.observe(el);
});


// 📞 OPTIONAL: CLICK TO CALL (if you add button later)
function callGym() {
  window.location.href = "tel:09173092025";
}
