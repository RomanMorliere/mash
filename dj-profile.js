const TEST_SOUNDCLOUD_URL = "https://soundcloud.com/viggo-bryden?ref=clipboard&p=i&c=1&si=760B21F6A0A94696BBE6B240527E0184&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";
const TEST_PROFILE_IMAGE = "assets/viggo_test_file.jpeg";

const DJ_DATA = {
  "anto": {
    name: "Anto",
    tagline: "MASH Launch Party artist.",
    soundcloud: "https://soundcloud.com",
    events: ["MASH Launch Party"],
    profileImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    setImages: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "nalee": {
    name: "Nalee",
    tagline: "MASH Launch Party artist.",
    soundcloud: "https://soundcloud.com",
    events: ["MASH Launch Party"],
    profileImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    setImages: [
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dayz": {
    name: "Dayz",
    tagline: "MASH Launch Party artist.",
    soundcloud: "https://soundcloud.com",
    events: ["MASH Launch Party"],
    profileImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80",
    setImages: [
      "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "lolo": {
    name: "Lolo",
    tagline: "MASH Launch Party artist.",
    soundcloud: "https://soundcloud.com",
    events: ["MASH Launch Party"],
    profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=900&q=80",
    setImages: [
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "zena-rae": {
    name: "Zena-Rae",
    tagline: "Played at Launch Party and Boss Ladies.",
    soundcloud: "https://soundcloud.com",
    events: ["MASH Launch Party", "MASH Boss Ladies"],
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    setImages: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "mm9": {
    name: "MM9",
    tagline: "Part of the 160K b3b set.",
    soundcloud: "https://soundcloud.com",
    events: ["MASH at 160K (b3b)"],
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    setImages: [
      "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "merrie": {
    name: "Merrie",
    tagline: "Part of the 160K b3b set.",
    soundcloud: "https://soundcloud.com",
    events: ["MASH at 160K (b3b)"],
    profileImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    setImages: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "jaya-latina": {
    name: "Jaya Latina",
    tagline: "Part of the 160K b3b set.",
    soundcloud: "https://soundcloud.com",
    events: ["MASH at 160K (b3b)"],
    profileImage: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&w=900&q=80",
    setImages: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "taju": {
    name: "Taju",
    tagline: "MASH at 160K artist.",
    soundcloud: "https://soundcloud.com",
    events: ["MASH at 160K"],
    profileImage: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
    setImages: [
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "isthisanna": {
    name: "Isthisanna",
    tagline: "Guest artist from France at 160K.",
    soundcloud: "https://soundcloud.com",
    events: ["MASH at 160K"],
    profileImage: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=900&q=80",
    setImages: [
      "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "defne": {
    name: "Defne",
    tagline: "Played at 160K and Boss Ladies.",
    soundcloud: "https://soundcloud.com",
    events: ["MASH at 160K", "MASH Boss Ladies"],
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    setImages: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "emssoleil": {
    name: "Emssoleil",
    tagline: "MASH Boss Ladies artist.",
    soundcloud: "https://soundcloud.com",
    events: ["MASH Boss Ladies"],
    profileImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80",
    setImages: [
      "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "kirakira": {
    name: "Kirakira",
    tagline: "MASH Boss Ladies artist.",
    soundcloud: "https://soundcloud.com",
    events: ["MASH Boss Ladies"],
    profileImage: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
    setImages: [
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=1200&q=80"
    ]
  }
};

Object.values(DJ_DATA).forEach((dj) => {
  dj.soundcloud = TEST_SOUNDCLOUD_URL;
  dj.profileImage = TEST_PROFILE_IMAGE;
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
