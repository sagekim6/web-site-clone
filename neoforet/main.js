const silder = document.querySelector("#slider");
const swiper = document.querySelector(".swiper");
const bullets = swiper.querySelectorAll(".bullet");

let imgIndex = 0;

// 클릭 시 배경이미지 변경 함수
function clickToMoveImg(event) {}
// 1. 불렛을 클릭하면 배경 이미지가 바껴야한다
// 2. setInterval에 맞춰서 불렛도 같이 순서대로 변경되어야한다

// 배경이미지 자동 변경 함수
function automaticImageSlide() {
  silder.style.backgroundImage = bgImages[imgIndex];
  imgIndex++;
  if (imgIndex > bgImages.length) {
    imgIndex = 0;
  }
}
setInterval(automaticImageSlide, 5000);

swiper.addEventListener("click", clickToMoveImg);
