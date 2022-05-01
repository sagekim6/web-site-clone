const silder = document.querySelector("#slider");
const bullets = document.querySelectorAll(".bullet");
const swiper = document.querySelector(".swiper");

const backgroundImages = [
  "url('https://www.neoforet.co.kr/resources/static/common/images/main/bg1.jpg')",
  "url('https://www.neoforet.co.kr/resources/static/common/images/main/bg2.jpg')",
  "url('https://www.neoforet.co.kr/resources/static/common/images/main/bg3.jpg')",
];
let imgIndex = 0;

// 배경이미지 자동 변경
function automaticImageSlide() {
  silder.style.backgroundImage = backgroundImages[imgIndex];
  if (imgIndex === 0) {
    bullets[2].style.backgroundColor = "transparent";
    bullets[0].style.backgroundColor = "rgb(255 255 255 / 50%)";
  } else if (imgIndex === 1) {
    bullets[0].style.backgroundColor = "transparent";
    bullets[1].style.backgroundColor = "rgb(255 255 255 / 50%)";
  } else if (imgIndex === 2) {
    bullets[1].style.backgroundColor = "transparent";
    bullets[2].style.backgroundColor = "rgb(255 255 255 / 50%)";
  }
  imgIndex++;
  if (imgIndex > backgroundImages.length) {
    imgIndex = 0;
  }
}
setInterval(automaticImageSlide, 5000);

// 클릭 시 배경이미지 변경
function moveToClickedImg(event) {
  if (event.target.classList.contains("dot-one")) {
    silder.style.backgroundImage = backgroundImages[0];
    bullets[0].style.backgroundColor = "rgb(255 255 255 / 50%)";
  } else if (event.target.classList.contains("dot-two")) {
    silder.style.backgroundImage = backgroundImages[1];
    bullets[1].style.backgroundColor = "rgb(255 255 255 / 50%)";
  } else if (event.target.classList.contains("dot-three")) {
    silder.style.backgroundImage = backgroundImages[2];
    bullets[2].style.backgroundColor = "rgb(255 255 255 / 50%)";
  }
}

swiper.addEventListener("click", moveToClickedImg);

// 페이지 상단으로 이동
function moveToTop() {
  document.body.scrollIntoView({ behavior: "smooth" });
}
