// #2 WELCOME TO JAVASCRIPT

// 1.const and let // const(constant) == 항상 사용, 변하지 않는 값
// // let == 가끔 사용, 변하는 값
// // var == 절대 사용 x, 과거에 사용

// const a = 5;
// const b = 2;
// let myName = "nico";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName);

// myName = "nicolas";

// console.log("your new name is " + myName);

// 2.Booleans // null == 값이 없다는 것을 의도적으로 표현, 존재하나 그 안에 값이 비어있음
// // undefined == variable이 메모리에 만들어졌고 그 것을 컴퓨터가 인지하지만 값이 없는 것
// const amIFat = null;
// let something; // undefined
// console.log(something, amIFat);

// 3. Arrays
// const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// // Get Item from Array
// console.log(dayOfWeek);

// // Add one more day to the array
// dayOfWeek.push("sun");

// console.log(dayOfWeek);

// 4. Objects
// // {} == 요거 자체가 object인데 변수인 player가 받아오니까 player도 object임
// // object의 값이 변하는 것이 아니니 const를 사용해도 무방
// name, points, fat == object의 property
// const player = {
//   name: "nico",
//   points: 10,
//   fat: true,
// };
// console.log(player.name);
// // console.log(player["name"]); 위와 같은 의미

// console.log(player);
// player.fat = false;
// player.lastName = "potato";
// player.points = player.points + 15;
// console.log(player);

// 5. Functions part One
// function sayHello() {
//   console.log("Hello my name is C");
// }

// sayHello("nico");
// sayHello("dal");
// sayHello("lynn");

// 6. Functions part Two
// // NaN == Not a Number(숫자가 아님)
// function sayHello(nameOfPerson, age) {
//   console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);

// function plus(firstNumber, secondNumber) {
//   console.log(firstNumber + secondNumber);
// }
// function divide(a, b) {
//   console.log(a / b);
// }
// plus(60, 8);
// divide(98, 20);

// // function이 object 안에 있을 때만 가능
// const player = {
//   name: "nico",
//   sayHello: function (otherPersonName) {
//     console.log("hello " + otherPersonName + " nice to meet you!");
//   },
// };

// player.sayHello("lynn");
// player.sayHello("nico");

// 7. Recap
// variable을 만드는 두 가지 option == const(불변), let(가변)
// var == let과 비슷, 사용시 let, const처럼 구분 불가능
// null == 변수에 할당되는 값, variable에 아무것도 없음을 확실히 할 때 사용
// undefined == 변수에 값을 부여하지 않은 상태(존재하지만 값은 x)

// 과제
// a+b, a-b, a/b, a**b 를 calculator라는 object 안의 function 사용
// 맨 마지막 코드는 calculator.add(1,2)
// calculator.minus(1,2)
// calculator.divide(1,2)
// calculator.powerof(1,2)
// const calculator = {
//   plus: function (a, b) {
//     console.log(a + b);
//   },
//   minus: function (a, b) {
//     console.log(a - b);
//   },
//   times: function (a, b) {
//     console.log(a * b);
//   },
//   divide: function (a, b) {
//     console.log(a / b);
//   },
//   power: function (a, b) {
//     console.log(a ** b);
//   },
// };

// calculator.plus(2, 3);
// calculator.minus(2, 3);
// calculator.times(2, 3);
// calculator.divide(2, 3);
// calculator.power(2, 3);

// 8.Returns
// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//   return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);

// const calculator = {
//   plus: function (a, b) {
//     return a + b;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   times: function (a, b) {
//     return a * b;
//   },
//   divide: function (a, b) {
//     return a / b;
//   },
//   power: function (a, b) {
//     return a ** b;
//   },
// };

// const plusResult = calculator.plus(2, 3);
// const minusResult = calculator.plus(plusResult, 10);
// const timesResult = calculator.times(10, minusResult);
// const divideResult = calculator.divide(timesResult, plusResult);
// const powerResult = calculator.power(divideResult, minusResult);

// 9.Recap
// return은 function에서 한 번만
// return 시 function은 작동을 멈추고 결과 값을 return하고 끝!!!!(return 사용 후 그 밑에 코드를 더 작성해도 실행 x)

// 10~11 Conditionals(조건문) == true/ false 사용
// // age의 기본 type == string
// const age = parseInt(prompt("How old are you?"));

// // 기본 type인 string을 정수 형태로 변환해주는 것
// // string type은 처리하지 못함(오직 number만)
// // parseInt("15");

// // isNaN()이라는 함수를 사용해 boolean 형태로 표현
// // 하나의 인자(argument)를 주면 number 인지 아닌지 표현
// // false == number가 아닌 것(NaN)이 아니라는 뜻(숫자를 의미)
// // console.log(isNaN(age));

// if (isNaN(age)) {
//   console.log("Please write a number");
// } else {
//   console.log("Thank you for writing your age.");
// }

// 12. Conditionals part Three
// // else는 선택사항(꼭 if문 마지막에 else로 끝나지 않아도 상관 x)
// const age = parseInt(prompt("How old are you?"));

// if (isNaN(age) || age < 0) {
//   console.log("Please write a real positive number");
// } else if (age < 18) {
//   console.log("You are too young.");
// } else if (age >= 18 && age <= 50) {
//   console.log("You can drink");
// } else if (age > 50 && age <= 80) {
//   console.log("You should exercise.");
// } else if (age > 80) {
//   console.log("You can do whatever you want.");
// }

// 13. Recap
// isNaN == boolean 반환

// #3 JAVASCRIPT ON THE BROWSER

// 1. HTML in JavaScript
// document가 HTML이 app.js를 load하기 때문에 존재하는 것(html 코드 안에 body 태그)
// 그 후 browser가 우리의 document에 접근할 수 있게 해줌

// // getElementById 함수 == HTML에서 id를 통해 element를 찾아줌
// // console.dir() ===> console.log()보다 element를 더 자세히 보여주는 것
// const title = document.getElementById("title");

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);

// 2. Searching For Elements
// // getElementsByName 또한 array 반환
// // js에서 우리가 class name을 넘겨준다는 것을 알기 때문에 "hello"만 사용
// // array를 가져옴(반환)
// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);

// // array를 가져옴(반환)
// // const title = document.getElementsByTagName("h1");
// // console.log(title);

// // querySelector == element를 CSS 방식으로 검색 가능
// // .hello == 클래스 이름, 그 안의 h1이라는 것을 명시해줘야 하므로 밑의 코드처럼 작성
// // 만약 querySelector 사용시 h1을 많이 사용했더라도 첫 번째로 검색된 element만 가져옴
// // 사용한 모든 element를 불러오기 위해서는 querySelectorAll 사용
// // querySelectorAll 사용 시 모든 h1이 들어있는 array를 가져옴(이 selector 안의 조건에 부합하는 모든 element를 가져옴)
// // querySelector("#hello"); == getElementbyId("hello");
// // 밑의 코드에서의 .은 class를 명시
// const title = document.querySelector(".hello h1");

// console.log(title);

// const title = document.querySelector("div.hello:first-child h1");
// console.dir(title);
// title.style.color = "blue";

// 3. Events
// const title = document.querySelector("div.hello:first-child h1");

// function handleTitleCLick() {
//   console.log("title was clicked");
// }

// // 말 그대로 event를 listen 하는 것
// // 무슨 event를 listen할 것인지 작성
// // function을 두 번째 인수로 전달
// // addEventLister를 호출, listen하고 싶은 event 이름을 알려줌
// // 그 옆(handleTitleClick이 작성되어 있는 부분)에 event가 발생하면 호출할 함수(함수가 실행되지 않도록 ()는 사용하지 x) 전달
// title.addEventListener("click", handleTitleCLick);

// 4. Events part Two
// // listen하고 싶은 event를 찾는 방법
// // 구글에 찾고 싶은 element의 이름 ex.) h1 html element mdn(Mozilla Developer Network)
// // 링크에 Web APIs | MDN 이라는 문장이 포함된 페이지 찾기(js 관점의 HTML Heading Element란 의미)
// // 또는 코드에 console.dir(title);를 이용해 element를 console에서 출력시키기
// // 수많은 property들 중에서 on이 붙어있는 property가 event listner
// // event 사용시 앞에 on은 제외하고 작성
// const title = document.querySelector("div.hello:first-child h1");

// console.dir(title);

// function handleTitleCLick() {
//   title.style.color = "blue";
// }

// function handleMouseEnter() {
//   title.innerText = "Mouse is here!";
// }

// function handleMouseLeave() {
//   title.innerText = "Mouse is gone!";
// }

// title.addEventListener("click", handleTitleCLick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

// 5. More Events
// const h1 = document.querySelector("div.hello:first-child h1");

// console.dir(h1);

// function handleTitleCLick() {
//   h1.style.color = "blue";
// }

// function handleMouseEnter() {
//   h1.innerText = "Mouse is here!";
// }

// function handleMouseLeave() {
//   h1.innerText = "Mouse is gone!";
// }

// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }

// function handlerWindowCopy() {
//   alert("copier");
// }

// function handleWindowOffline() {
//   alert("SOS no WIFI");
// }

// function handleWindowOnline() {
//   alert("ALL GOOD");
// }

// // 밑의 코드로도 코딩 가능
// h1.onclick = handleTitleCLick;
// h1.onmouseenter = handleMouseEnter;
// h1.onmouseleave = handleMouseLeave;

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handlerWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

// 6. CSS in Javasciprt
// const h1 = document.querySelector("div.hello:first-child h1");

// console.dir(h1);

// function handleTitleCLick() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   // 밑의 코드를 작성하지 않으면 newColor의 값이 변경되지 않으므로 작성해줘야함
//   h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleCLick);

// 7. CSS in Javascript part Two
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleCLick() {
//   // === => className이 active와 같은지 확인하는 것
//   // = => 해당 값으로 바꾸어주는 것
//   // h1.className == getter이면서 setter이다.
//   // clicked == raw value(개발자가 정한 이름)
//   // clickedClass == raw value를 없애기 위해 사용(오류 발셍 확률을 줄이기 위해)
//   const clickedClass = "clicked";
//   // 만약 html 코드에 h1에 className이 정해져있다면
//   // 작성한 다른 효과들은 제대로 동작하지만 className 자체가 바뀌어 버림
//   if (h1.className === clickedClass) {
//     h1.className = "";
//   } else {
//     h1.className = clickedClass;
//   }
// }

// h1.addEventListener("click", handleTitleCLick);

// 8. CSS in Javascript part Three
// // className == 이전 class들은 상관하지 않고 모든걸 교체
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleCLick() {
//   const clickedClass = "clicked";
//   // classList == class들의 목록으로 작업할 수 있게끔 허용
//   // classList를 사용해 원래 html 코드에서 가지고 있는 className은 두고
//   // clickedClass인 clicked만 추가되고 없어짐
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

// h1.addEventListener("click", handleTitleCLick);

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleCLick() {
//   // toggle == classList에 clicked class가 이미 있는지를 확인해서
//   // 만약 token이 존재한다면 toggle이 clicked를 제거해줌(token을 toggle한다)
//   // token이 존재하지 않는다면 token 추가
//   // 위의 코드와 같음
//   h1.classList.toggle("clicked");
// }
// h1.addEventListener("click", handleTitleCLick);

// #4. LOGIN

// 0. Input Values
// // querySelector()를 사용할 때는 대상이 id인지 명확히 명시
// // loginForm == HTML Element, HTML element 안을 바로 검색 가능
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// // 위의 코드와 동일
// // const loginInput = document.querySelector("#login-form input");
// const loginButton = loginForm.querySelector("button");

// // input의 내용을 가져오기 위해 value라는 property 사용
// function onLoginBtnClick() {
//   console.dir(loginInput.value);
// }

// loginButton.addEventListener("click", onLoginBtnClick);

// 1. Form Submission
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//   const username = loginInput.value;
//   console.log(username);
// }

// loginButton.addEventListener("click", onLoginBtnClick);

// 2. Events
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// function onLoginSubmit(tomato) {
//   // preventDefault() == 어떤 event의 기본 행동 등이 발생되지 않도록 막는 것/ 브라우저의 기본 동작을 막아줌
//   // 밑의 코드의 예는 새로고침(기본 행동)이 되지 않도록 막아줌
//   tomato.preventDefault();
//   // const username = loginInput.value;
//   console.log(tomato);
// }

// // submit event는 감지되고 있으나 새로고침되는 것은 막지 못함
// // 새로고침 되는 것은 form submit의 기본 동작(브라우저가 그러도록 프로그래밍 되어 있음)
// // onLoginSubmit()에서 ()는 즉시 실행을 의미
// loginForm.addEventListener("submit", onLoginSubmit);

// 3. Events part Two
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// const link = document.querySelector("a");

// function onLoginSubmit(event) {
//   event.preventDefault();
//   console.log(loginInput.value);
// }

// function handleLinkClick(event) {
//   event.preventDefault();
//   console.log(event);
//   // 브라우저의 기본동작인 링크로 넘어가는 것을 막아줌
//   // ok 버튼 클릭 시 기본 동작을 수행하게 해줌
//   alert("clicked!");
// }

// // addeventListener 안에 있는 함수는 직접 실행하지 않는다
// loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);

// // js는 함수를 실행시키는 동시에 그 함수에(eventlistener) 첫 번째 인자로 object를 넣어줌
// // () -> 방금 일어난 event에 대한 정보를 담은 object는
// // handleLinkClick을 위한 EventListener 함수의 첫 번째 인자로 주어짐
// // handleLinkClick({information about the event that just happened});

// 4. Getting Username
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// // 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용
// // 다른 코드들 처럼 중요한 정보를 담은 것이 아니기 때문에 대문자로 작성
// const HIDDEN_CLASSNAME = "hidden";

// function onLoginSubmit(event) {
//   event.preventDefault();
//   // login form tag에 hidden이라는 class 추가
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   const username = loginInput.value;
//   greeting.innerText = "Hello " + username;
//   // 위의 코드와 똑같은 동작 수행
//   // 규칙 1. 백틱(``)을 사용해야함
//   // 문자와 ${변수명}의 틀을 사용해야함
//   // 사용 시 변수 값이 string으로 입력됨
//   greeting.innerText = `Hello ${username}`;
//   // id의 이름이 greeting 이라는 h1 tag에 hidden이라는 class 삭제
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// loginForm.addEventListener("submit", onLoginSubmit);

// 5. Saving Username
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";

// function onLoginSubmit(event) {
//   event.preventDefault();
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   const username = loginInput.value;
//   localStorage.setItem("username", username);
//   greeting.innerText = `Hello ${username}`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// loginForm.addEventListener("submit", onLoginSubmit);

// 6. Loading Username
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";

// function onLoginSubmit(event) {
//   event.preventDefault();
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   const username = loginInput.value;
//   localStorage.setItem(USERNAME_KEY, username);
//   // 문제 == 밑에 있는 코드와 if문 안의 코드 반복됨
//   // 이를 해결하기 위해 함수로 만들어줌(paintGrettings() 함수)
//   // greeting.innerText = `Hello ${username}`;
//   // greeting.classList.remove(HIDDEN_CLASSNAME);
//   paintGreetings(username);
// }

// function paintGreetings(username) {
//   greeting.innerText = `Hello ${username}`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);

// if (savedUsername === null) {
//   // show the form
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   loginForm.addEventListener("submit", onLoginSubmit);
// } else {
//   // show the greetings
//   // 밑의 코드 작성으로 greeting에 hidden이라는 class명은 삭제됨
//   // 그러나 greeting에 텍스트도 존재 x
//   // greeting.classList.remove(HIDDEN_CLASSNAME);
//   // 존재하지 않는 텍스트를 작성하기 위해 밑의 코드 추가
//   // 코드를 추가하기 때문에 유저정보를 기억하고 있음(내가 작성한 savedUsername + 밑의 코드 내용)
//   // greeting.innerText = `Hello ${savedUsername}`;
//   paintGreetings(savedUsername);
// }

// 7. Super Recap
// preventDefault() == 브라우저의 기본 동작을 막아줌
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings();
}

function paintGreetings() {
  // local stroage 안에 있는 username을 찾아주는 코드
  // 밑의 코드를 작성하기 때문에 아무것도 보내지 않아도 됨
  // 그러나 밑의 변수 savedUsername를 보면 local stroage를 두 번 열어봄
  // 6번 처럼 작성해도 상관 x(개발자 선택)
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}
