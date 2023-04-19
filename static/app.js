const year = document.getElementById("year");
const currentYear = new Date();

year.innerHTML = `© HackGenius ${currentYear.getFullYear()}`;

// const popup-videos
const videos = document.querySelectorAll(".about-right video");

videos.forEach((vid) => {
  vid.onclick = () => {
    document.querySelector(".popup-video").style.display = "block";
    document.querySelector(".popup-video video").src = vid.getAttribute("src");
  };
});

const closeBtn = document.querySelector(".popup-video span");
if (closeBtn) {
  closeBtn.onclick = () => {
    document.querySelector(".popup-video").style.display = "none";
  };
}

// Typing Animations
const type = document.querySelector(".typing");

if (type) {
  var typed = new Typed(".typing", {
    strings: ["Hacking", "Cybersecurity", "Technology"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
}

// Card animations
const cards = document.querySelectorAll(".review-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 100;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 100;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
});

//Animate In
cards.forEach((card) => {
  card.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    card.style.backgroundColor = "#242424";
  });
});

//Animate Out
cards.forEach((card) => {
  card.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.backgroundColor = "#2E2E2E";
  });
});

// Counter
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// navigation-pane
const pane = document.querySelector(".navigation-pane");
const burger = document.querySelector(".burger");
const links = pane.querySelectorAll("a");
const span = pane.querySelector("span");

burger.addEventListener("click", () => {
  pane.style.display = "block";
  console.log("oki");
});

span.addEventListener("click", () => {
  pane.style.display = "none";
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    pane.style.display = "none";
  });
});
