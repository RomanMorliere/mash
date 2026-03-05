const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

function ensureOrganicIsland() {
  if (!document.body) return;

  if (!document.getElementById("octave1")) {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "0");
    svg.setAttribute("height", "0");
    svg.setAttribute("aria-hidden", "true");
    svg.style.position = "absolute";

    const filter = document.createElementNS(svgNS, "filter");
    filter.setAttribute("id", "octave1");

    const turbulenceA = document.createElementNS(svgNS, "feTurbulence");
    turbulenceA.setAttribute("type", "fractalNoise");
    turbulenceA.setAttribute("baseFrequency", "0.006");
    turbulenceA.setAttribute("numOctaves", "3");
    turbulenceA.setAttribute("seed", "4");
    turbulenceA.setAttribute("result", "o1");

    const turbulenceB = document.createElementNS(svgNS, "feTurbulence");
    turbulenceB.setAttribute("type", "fractalNoise");
    turbulenceB.setAttribute("baseFrequency", "0.012");
    turbulenceB.setAttribute("numOctaves", "2");
    turbulenceB.setAttribute("seed", "7");
    turbulenceB.setAttribute("result", "o2");

    const merge = document.createElementNS(svgNS, "feMerge");
    merge.setAttribute("result", "noiseo");
    const mergeNodeA = document.createElementNS(svgNS, "feMergeNode");
    mergeNodeA.setAttribute("in", "o1");
    const mergeNodeB = document.createElementNS(svgNS, "feMergeNode");
    mergeNodeB.setAttribute("in", "o2");
    merge.append(mergeNodeA, mergeNodeB);

    const blur = document.createElementNS(svgNS, "feGaussianBlur");
    blur.setAttribute("in", "noiseo");
    blur.setAttribute("stdDeviation", "1.8");
    blur.setAttribute("result", "soft");

    const diffuse = document.createElementNS(svgNS, "feDiffuseLighting");
    diffuse.setAttribute("in", "soft");
    diffuse.setAttribute("surfaceScale", "7");
    diffuse.setAttribute("diffuseConstant", "1");
    diffuse.setAttribute("lighting-color", "#88b4db");
    diffuse.setAttribute("result", "lit");

    const light = document.createElementNS(svgNS, "feDistantLight");
    light.setAttribute("azimuth", "0");
    light.setAttribute("elevation", "22");
    diffuse.appendChild(light);

    const blend = document.createElementNS(svgNS, "feBlend");
    blend.setAttribute("in", "SourceGraphic");
    blend.setAttribute("in2", "lit");
    blend.setAttribute("mode", "soft-light");

    filter.append(turbulenceA, turbulenceB, merge, blur, diffuse, blend);
    svg.appendChild(filter);
    document.body.prepend(svg);
  }

  if (!document.querySelector(".organic-island")) {
    const island = document.createElement("div");
    island.className = "organic-island";
    document.body.appendChild(island);
  }
}

ensureOrganicIsland();

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
