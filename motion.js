// Movimiento de la página: revelado al hacer scroll, sección activa en la navegación,
// header al desplazarse, orbes que siguen el cursor y fundido al cambiar de idioma.
// Las animaciones solo corren si <html> tiene la clase "motion" (se omite con prefers-reduced-motion).
document.addEventListener("alpine:initialized", () => {
  const root = document.documentElement;
  const motion = root.classList.contains("motion");

  // Sección activa: funciona aunque no haya animaciones.
  const navLinks = document.querySelectorAll(".nav a");
  const spy = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) navLinks.forEach((a) => a.classList.toggle("is-active", a.hash === "#" + e.target.id));
      }
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

  const header = document.querySelector(".header");
  const onScroll = () => header.classList.toggle("is-scrolled", scrollY > 24);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (!motion) return;

  const reveal = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add("is-in");
        reveal.unobserve(e.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll("[data-reveal]").forEach((el) => reveal.observe(el));

  if (matchMedia("(pointer: fine)").matches) {
    let frame = 0;
    addEventListener(
      "pointermove",
      (e) => {
        if (frame) return;
        frame = requestAnimationFrame(() => {
          root.style.setProperty("--mx", (e.clientX / innerWidth - 0.5).toFixed(3));
          root.style.setProperty("--my", (e.clientY / innerHeight - 0.5).toFixed(3));
          frame = 0;
        });
      },
      { passive: true }
    );
  }

  const main = document.querySelector("main");
  document.querySelectorAll(".lang-switch button").forEach((b) =>
    b.addEventListener("click", () =>
      main.animate([{ opacity: 0.35, filter: "blur(2px)" }, { opacity: 1, filter: "blur(0)" }], {
        duration: 450,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      })
    )
  );
});
