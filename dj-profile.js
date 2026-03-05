const TEST_SOUNDCLOUD_URL = "https://soundcloud.com/viggo-bryden?ref=clipboard&p=i&c=1&si=760B21F6A0A94696BBE6B240527E0184&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";
const DEFAULT_PROFILE_IMAGE = "assets/viggo_test_file.jpeg";

const PROFILE_IMAGES = {
  "defne": "assets/defne_profilepic.jpeg",
  "emssoleil": "assets/emssoleil_profilepic.JPG",
  "isthisanna": "assets/thisisanna_profilepic.jpeg",
  "jaya-latina": "assets/Jaya-Latina_profilepic.JPG",
  "merrie": "assets/MERRIE_profilepic.jpg",
  "mm9": "assets/MM9_profilepic.jpg",
  "taju": "assets/tomtaju_profilepic.JPG"
};

const SET_IMAGES = {
  "defne": ["assets/defne_setgellery.jpeg"]
};

const DJ_DATA = {
  "anto": { name: "Anto", tagline: "MASH Launch Party artist.", events: ["MASH Launch Party"] },
  "nalee": { name: "Nalee", tagline: "MASH Launch Party artist.", events: ["MASH Launch Party"] },
  "dayz": { name: "Dayz", tagline: "MASH Launch Party artist.", events: ["MASH Launch Party"] },
  "lolo": { name: "Lolo", tagline: "MASH Launch Party artist.", events: ["MASH Launch Party"] },
  "zena-rae": { name: "Zena-Rae", tagline: "Played at Launch Party and Boss Ladies.", events: ["MASH Launch Party", "MASH Boss Ladies"] },
  "mm9": { name: "MM9", tagline: "Part of the 160K b3b set.", events: ["MASH at 160K (b3b)"] },
  "merrie": { name: "Merrie", tagline: "Part of the 160K b3b set.", events: ["MASH at 160K (b3b)"] },
  "jaya-latina": { name: "Jaya Latina", tagline: "Part of the 160K b3b set.", events: ["MASH at 160K (b3b)"] },
  "taju": { name: "Taju", tagline: "MASH at 160K artist.", events: ["MASH at 160K"] },
  "isthisanna": { name: "Isthisanna", tagline: "Guest artist from France at 160K.", events: ["MASH at 160K"] },
  "defne": { name: "Defne", tagline: "Played at 160K and Boss Ladies.", events: ["MASH at 160K", "MASH Boss Ladies"] },
  "emssoleil": { name: "Emssoleil", tagline: "MASH Boss Ladies artist.", events: ["MASH Boss Ladies"] },
  "kirakira": { name: "Kirakira", tagline: "MASH Boss Ladies artist.", events: ["MASH Boss Ladies"] }
};

Object.entries(DJ_DATA).forEach(([slug, dj]) => {
  dj.soundcloud = TEST_SOUNDCLOUD_URL;
  dj.profileImage = PROFILE_IMAGES[slug] || DEFAULT_PROFILE_IMAGE;
  dj.setImages = SET_IMAGES[slug] || [];
});

const params = new URLSearchParams(window.location.search);
const slug = params.get("dj");
const fallbackSlug = "zena-rae";
const dj = DJ_DATA[slug] || DJ_DATA[fallbackSlug];

const nameEl = document.getElementById("dj-name");
const taglineEl = document.getElementById("dj-tagline");
const profileImageEl = document.getElementById("dj-profile-image");
const soundcloudEl = document.getElementById("dj-soundcloud");
const eventsEl = document.getElementById("dj-events");
const galleryEl = document.getElementById("dj-set-gallery");

if (nameEl) nameEl.textContent = dj.name;
if (taglineEl) taglineEl.textContent = dj.tagline;
if (profileImageEl) {
  profileImageEl.src = dj.profileImage;
  profileImageEl.alt = `${dj.name} profile picture`;
}
if (soundcloudEl) soundcloudEl.href = dj.soundcloud;

if (eventsEl) {
  eventsEl.innerHTML = "";
  dj.events.forEach((event) => {
    const li = document.createElement("li");
    li.textContent = event;
    eventsEl.appendChild(li);
  });
}

if (galleryEl) {
  galleryEl.innerHTML = "";

  if (dj.setImages.length === 0) {
    const placeholder = document.createElement("article");
    placeholder.className = "dj-set-placeholder";
    placeholder.textContent = "Comming soon no pics";
    galleryEl.appendChild(placeholder);
  } else {
    dj.setImages.forEach((image, index) => {
      const figure = document.createElement("figure");
      figure.className = "dj-set-photo";

      const img = document.createElement("img");
      img.src = image;
      img.alt = `${dj.name} set photo ${index + 1}`;

      figure.appendChild(img);
      galleryEl.appendChild(figure);
    });
  }
}
