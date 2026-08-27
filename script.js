/* HokaLélé — interactions légères, sans dépendance */
(function () {
  "use strict";

  /* ---- Menu mobile ---- */
  var toggle = document.getElementById("navToggle");
  var mobile = document.getElementById("navMobile");
  if (toggle && mobile) {
    toggle.addEventListener("click", function () {
      var open = mobile.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    });
    mobile.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobile.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Onglets Running / Surf ---- */
  var hero = document.querySelector(".hero");
  var heroTabs = document.querySelectorAll(".hero__tab");
  if (hero && heroTabs.length) {
    heroTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var mode = tab.getAttribute("data-mode");
        hero.setAttribute("data-mode", mode);
        heroTabs.forEach(function (t) {
          var on = t === tab;
          t.classList.toggle("is-active", on);
          t.setAttribute("aria-selected", on ? "true" : "false");
        });
      });
    });
  }

  /* ---- Nav collée : ombre au scroll ---- */
  var nav = document.querySelector(".nav");
  var onScroll = function () {
    if (!nav) return;
    nav.classList.toggle("is-stuck", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Apparition au scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el, i) {
      // léger décalage pour les éléments d'une même grille
      var sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.transitionDelay = Math.min(sib, 4) * 80 + "ms";
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---- Newsletter ---- */
  var form = document.getElementById("newsletter");
  var note = document.getElementById("formNote");
  var input = document.getElementById("email");
  if (form && note && input) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var val = input.value.trim();
      form.classList.remove("is-ok", "is-error");
      if (!re.test(val)) {
        form.classList.add("is-error");
        note.textContent = "Merci d'entrer une adresse e-mail valide.";
        input.focus();
        return;
      }
      form.classList.add("is-ok");
      note.textContent = "Bienvenue dans le mouvement ! Vérifiez votre boîte mail. ✦";
      input.value = "";
    });
  }

  /* ---- Année dynamique (si un footer l'attend) ---- */
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
