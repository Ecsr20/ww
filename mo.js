/*let images = [
  "king.jpg",
  "monkey.jpg",
  "f.jpg",
  "a.jpg",
  "ass.jpg",
  "s.jpg",
  "v.mp4",
];
let index = 0;
let slideshowInterval;

const text = document.getElementById("text");
const audio = document.getElementById("audio");
const bgVideo = document.getElementById("bgVideo");
const bgVideoContainer = document.getElementById("bgVideoContainer");
const mediaContainer = document.getElementById("mediaContainer");

function preloadNext() {
  const nextIndex = (index + 1) % images.length;
  const nextMedia = images[nextIndex];

  if (nextMedia.endsWith(".mp4")) {
    const video = document.createElement("video");
    video.src = nextMedia;
  } else {
    const img = new Image();
    img.src = nextMedia;
  }
}

function showNext() {
  mediaContainer.innerHTML = "";

  const currentMedia = images[index];
  let mediaElement;

  if (currentMedia.endsWith(".mp4")) {
    mediaElement = document.createElement("video");
    mediaElement.src = currentMedia;
    mediaElement.autoplay = true;
    mediaElement.muted = true;
    mediaElement.loop = true;
    mediaElement.playsInline = true;
  } else {
    mediaElement = document.createElement("img");
    mediaElement.src = currentMedia;
  }

  mediaContainer.appendChild(mediaElement);

  // إعادة تشغيل الأنيميشن
  void mediaContainer.offsetWidth;

  index = (index + 1) % images.length;
  preloadNext();
}

function hideText() {
  // إخفاء النص
  text.style.display = "none";

  // تشغيل الفيديو الخلفية
  bgVideoContainer.style.display = "block";
  bgVideo
    .play()
    .catch((e) => console.log("Error playing background video:", e));

  // تشغيل الصوت
  audio.play().catch((e) => console.log("Error playing audio:", e));

  // بدء عرض الصور
  showNext();
  clearInterval(slideshowInterval);
  slideshowInterval = setInterval(showNext, 2000);
}

// تحميل أول وسائط مسبقاً
preloadNext();*/
let images = [
  "king.jpg",
  "monkey.jpg",
  "f.jpg",
  "a.jpg",
  "ass.jpg",
  "s.jpg",
  "v.mp4",
];
let index = 0;
let slideshowInterval;

const text = document.getElementById("text");
const audio = document.getElementById("audio");
const bgVideo = document.getElementById("bgVideo");
const bgVideoContainer = document.getElementById("bgVideoContainer");
const mediaContainer = document.getElementById("mediaContainer");

// مؤثرات عشوائية
const effects = [
  "rotate",
  "shake",
  "float",
  "pulse",
  "glow",
  "spin",
  "dance",
  "flicker",
  "zoom",
];

function getRandomEffect() {
  return effects[Math.floor(Math.random() * effects.length)];
}

function preloadNext() {
  const nextIndex = (index + 1) % images.length;
  const nextMedia = images[nextIndex];

  if (nextMedia.endsWith(".mp4")) {
    const video = document.createElement("video");
    video.src = nextMedia;
  } else {
    const img = new Image();
    img.src = nextMedia;
  }
}

function showNext() {
  mediaContainer.innerHTML = "";

  const currentMedia = images[index];
  let mediaElement;

  if (currentMedia.endsWith(".mp4")) {
    mediaElement = document.createElement("video");
    mediaElement.src = currentMedia;
    mediaElement.autoplay = true;
    mediaElement.muted = true;
    mediaElement.loop = true;
    mediaElement.playsInline = true;
  } else {
    mediaElement = document.createElement("img");
    mediaElement.src = currentMedia;
  }

  // إضافة كل المؤثرات
  mediaElement.style.animation = `
    enterBoom 1s ease-in-out forwards,
    danceMove 1.2s infinite ease-in-out alternate,
    shakeX 0.6s infinite ease-in-out alternate,
    shakeY 0.5s infinite ease-in-out alternate,
    pulseScale 2s infinite ease-in-out,
    spinWiggle 3s infinite ease-in-out,
    glow 1.5s infinite alternate,
    flicker 0.4s infinite alternate,
    ${getRandomEffect()} 2s infinite ease-in-out
  `;

  mediaContainer.appendChild(mediaElement);

  // إعادة تشغيل الأنيميشن
  void mediaContainer.offsetWidth;

  index = (index + 1) % images.length;
  preloadNext();
}

function hideText() {
  text.style.display = "none";

  // تشغيل الفيديو الخلفية مع المؤثرات
  bgVideoContainer.style.display = "block";
  bgVideo.play().catch((e) => console.log("Error playing bg video:", e));

  // تشغيل الصوت
  audio.play().catch((e) => console.log("Error playing audio:", e));

  // بدء عرض الصور
  showNext();
  clearInterval(slideshowInterval);
  slideshowInterval = setInterval(showNext, 2000);
}

// تحميل أول وسائط مسبقاً
preloadNext();
