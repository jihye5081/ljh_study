// 1. Background

const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// HTML element 생성
// js에서 html을 만든 것
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// appendChild() == body에 html 추가
// append는 가장 뒤에, prepend는 가장 위에 오도록 해줌
// .body == body의 가장 뒤에 bgImage가 오도록 설정
document.body.appendChild(bgImage);
