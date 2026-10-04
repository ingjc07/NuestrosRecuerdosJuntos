const questionEl = document.getElementById("question");
const stickerEl = document.getElementById("sticker");
const finalEl = document.getElementById("final");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", showStep);

const slides = [
  { text: "¡Esta es la primera sorpresa! 🥰 🌸", img: "imgs/001.gif" },
  { text: "¡Queria regalarte este portal con nuestras fotos 🎁", img: "imgs/01.gif" },
  { text: "¡Nuestras primeras fotos juntos! 🧸", img: "imgs/6.jpeg" },
  { text: "Me encanta tu sonrisa y lo hermosa que estas 🥰   ✨", img: "imgs/8.jpeg" },
  { text: "¡Me haces tan Feliz espero que te guste, Te Amo no lo olvides nunca! 🖤", img: "imgs/10.jpeg" },
];

let currentStep = 0;

function showStep() {
  if (currentStep < slides.length) {
    const slide = slides[currentStep];
    questionEl.textContent = slide.text;
    stickerEl.src = slide.img;
    stickerEl.classList.remove("hidden");
    currentStep++;
  } else {
    questionEl.classList.add("hidden");
    stickerEl.classList.add("hidden");
    finalEl.classList.remove("hidden");
    nextBtn.style.display = "none";
  }
}


showStep();

function createHearts(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 5 + Math.random() * 5 + "s";
    heart.style.animationDelay = Math.random() * 5 + "s";
    fragment.appendChild(heart);
  }
  document.body.appendChild(fragment)
}

createHearts(40)
