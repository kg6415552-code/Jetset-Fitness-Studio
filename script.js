// 🔘 JOIN BUTTON (used if you call it anywhere)
function joinNow() {
  window.open("https://www.facebook.com/jetsetfitnessstudio", "_blank");
}


// 🌐 SMOOTH SCROLL (navigation links)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// ✨ FADE-IN ANIMATION (sections + cards)
const elements = document.querySelectorAll(".section, .card, .highlight-box");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});


// 📱 HEADER SHADOW ON SCROLL (premium feel)
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.6)";
  } else {
    header.style.boxShadow = "none";
  }
});


// 🔝 SCROLL TO TOP BUTTON
const topBtn = document.createElement("button");
topBtn.innerText = "↑";
topBtn.classList.add("top-btn");
document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});
