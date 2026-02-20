// Custom cursor
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;
document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
});
function animCursor() {
  cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
  requestAnimationFrame(animCursor);
}
animCursor();

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 80);
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);
reveals.forEach((el) => io.observe(el));

// Nav active on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.style.boxShadow =
    window.scrollY > 50 ? "0 4px 24px rgba(0,0,0,0.08)" : "none";
});

// Hamburger menu (mobile)
document.getElementById("hamburger").addEventListener("click", () => {
  const links = document.querySelector(".nav-links");
  const cta = document.querySelector(".nav-cta");
  if (links) {
    const isOpen = links.style.display === "flex";
    links.style.cssText = isOpen
      ? ""
      : "display:flex;flex-direction:column;position:fixed;top:70px;left:0;right:0;background:var(--paper);padding:2rem 5%;gap:1.5rem;border-bottom:1px solid var(--border);z-index:99";
    if (cta) cta.style.display = isOpen ? "none" : "block";
  }
});
