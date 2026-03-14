const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

const isHomePage =
  window.location.pathname.endsWith("/index.html") ||
  window.location.pathname.endsWith("/") ||
  window.location.pathname === "";

if (isHomePage && navMenu) {
  const sectionLinks = Array.from(navMenu.querySelectorAll("a[href^='#']"));
  const sections = sectionLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const setActiveLink = (id) => {
    sectionLinks.forEach((link) => {
      const targetId = link.getAttribute("href").slice(1);
      link.classList.toggle("active", targetId === id);
    });
  };

  const updateActiveByScroll = () => {
    const marker = window.scrollY + 180;
    let activeId = sections.length > 0 ? sections[0].id : null;

    sections.forEach((section) => {
      if (section.offsetTop <= marker) {
        activeId = section.id;
      }
    });

    if (activeId) setActiveLink(activeId);
  };

  sectionLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const id = link.getAttribute("href").slice(1);
      setActiveLink(id);
    });
  });

  window.addEventListener("scroll", updateActiveByScroll, { passive: true });
  window.addEventListener("hashchange", () => {
    const hashId = window.location.hash.replace("#", "");
    if (hashId) setActiveLink(hashId);
  });

  updateActiveByScroll();
}

const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");

if (contactForm && contactStatus) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    contactStatus.textContent = "Sending...";

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@mashcollective.eu", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      contactStatus.textContent = "Message sent. We will get back to you soon.";
      contactForm.reset();
    } catch (error) {
      contactStatus.textContent = "Could not send message right now. Please email info@mashcollective.eu directly.";
    }
  });
}

const revealItems = document.querySelectorAll(".reveal");
if (revealItems.length > 0 && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

const djCarouselTrack = document.getElementById("dj-carousel-track");
const djPrev = document.getElementById("dj-prev");
const djNext = document.getElementById("dj-next");

if (djCarouselTrack && djPrev && djNext) {
  const scrollAmount = () => Math.min(djCarouselTrack.clientWidth * 0.9, 900);

  djPrev.addEventListener("click", () => {
    djCarouselTrack.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
  });

  djNext.addEventListener("click", () => {
    djCarouselTrack.scrollBy({ left: scrollAmount(), behavior: "smooth" });
  });
}
