const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

/* TOGGLE MENU (open + close on button click) */
toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* CLOSE MENU WHEN CLICKING ANY LINK */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});

const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 70);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => io.observe(el));
