// #5 CLOCK

// 0. Intervals
// interval == '매번' 일어나야 하는 무언가 ex) 매 2초마다
// const clock = document.querySelector("h2#clock");

// function sayHello() {
//   console.log("hello");
// }

// 일정 시간 간격을 두고 함수를 실행(매 5초마다 실행)
// // 두 개의 인자를 받음
// // 첫 번째 인자는 실행하고자 하는 함수
// // 두 번째는 호출되는 함수 간격을 몇 ms로 할지 작성
// // 5000 == 5초
// setInterval(sayHello, 5000);

// 1. Timeouts and Dates
// const clock = document.querySelector("h2#clock");

// function getClock() {
//   const date = new Date();
//   clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// }

// // website가 load 되자마자 getClock()을 실행하고 매초 실행되도록 코드 작성
// getClock();
// // 일정 시간이 지난 후에 함수 실행(5초 후 실행)
// // setTimeout(sayHello, 5000);
// setInterval(getClock, 1000);

// 2. PadStart
// padStart() == string 에서 사용할 수 있는 함수
// "1".padStart(2, "0") == 만약 문자의 길이가 2가 아니라면 "1"이라는 문자 앞쪽에 "0"을 추가할 수 있음
// "1".padEnd(2, "0") == 만약 문자의 길이가 2가 아니라면 "1"이라는 문자 뒤쪽에 "0"을 추가할 수 있음
const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  // String()으로 감싸서 숫자를 문자로 변환
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// 3. Recap
// Date object == 호출하는 당시의 현재 날짜랑 시간을 나타냄(현재 시점)
// String() == number 타입을 string 타입으로 변환
// padStart() == 내가 가지고 있는 string 보다 길게 만들어야 할 때 사용하는 함수
//               원하는 만큼의 길이가 아니라면 string 앞쪽에 내가 지정한 문자를 집어넣음
// setInterval() == 실시간으로 보이게 해주는 부분으로 일정 시간(ms 단위) 간격을 두고 함수 실행
// setTimeout() == 일정 시간(ms 단위)이 지난 후에 함수를 실행
