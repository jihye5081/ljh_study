// #7 TO DO LIST

// 0. Setup
// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// function handleToDoSubmit(event) {
//   event.preventDefault();
//   // input의 현재 value를 새로운 변수에 복사
//   const newTodo = toDoInput.value;
//   // 위의 코드 밑에 사용되는 코드는 newToDo 변수와는 아무 상관 x
//   toDoInput.value = "";
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// 1. Adding ToDos
// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// function paintTodo(newTodo) {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   // li는 span이라는 자식을 갖게 됨
//   li.appendChild(span);
//   // span의 텍스트는 handleToDoSubmit에서 온 newTodo 텍스트가 됨
//   span.innerText = newTodo;
//   // list를 li에 두는 것(li를 toDoList에 추가)
//   toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//   event.preventDefault();
//   // 29번째 줄에서 value를 비우기 전의 값을 나타내는 string == newTodo
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   // 그 다음 그 입력값을 paintTodo에 넣어서 호출
//   paintTodo(newTodo);
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// 2. Deleting To Dos
// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// function deleteToDo(event) {
//   // target == 클릭된 html element
//   // 모든 html element에는 하나 이상의 property 존재
//   // parentElement == 클릭된 element의 부모
//   const li = event.target.parentElement;
//   li.remove();
// }

// function paintTodo(newTodo) {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   span.innerText = newTodo;
//   const button = document.createElement("button");
//   button.innerText = "❌";
//   button.addEventListener("click", deleteToDo);
//   li.appendChild(span);
//   // span 추가 후 button 추가
//   li.appendChild(button);
//   toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   paintTodo(newTodo);
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// 3. Saving To Dos
// localStorage == 오직 텍스트만 저장 가능
// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// const toDos = [];

// function saveToDos() {
//   // js object나 array나 어떤 것이든 string으로 바꿔주는 기능 == JSON.stringify()
//   localStorage.setItem("todos", JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//   const li = event.target.parentElement;
//   li.remove();
// }

// function paintTodo(newTodo) {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   span.innerText = newTodo;
//   const button = document.createElement("button");
//   button.innerText = "❌";
//   button.addEventListener("click", deleteToDo);
//   li.appendChild(span);
//   li.appendChild(button);
//   toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   toDos.push(newTodo);
//   paintTodo(newTodo);
//   saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// 4. Loading To Dos part One
// // JSON.parse() == 실제로 무언가 할 수 있는 배열을 얻게됨
// // () =>localStroage에 있던 텍스트
// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// const TODOS_KEY = "todos";

// const toDos = [];

// function saveToDos() {
//   // js object나 array나 어떤 것이든 string으로 바꿔주는 기능 == JSON.stringify()
//   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//   const li = event.target.parentElement;
//   li.remove();
// }

// function paintTodo(newTodo) {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   span.innerText = newTodo;
//   const button = document.createElement("button");
//   button.innerText = "❌";
//   button.addEventListener("click", deleteToDo);
//   li.appendChild(span);
//   li.appendChild(button);
//   toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   toDos.push(newTodo);
//   paintTodo(newTodo);
//   saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//   console.log("this is the turn of", item);
// }

// const saveToDos = localStorage.getItem(TODOS_KEY);
// console.log(saveToDos);
// if (saveToDos !== null) {
//   const parsedToDos = JSON.parse(saveToDos);
//   // parsedToDos == array이므로 forEach를 가지고 있음
//   // forEach == 함수를 실행하게 해주는데 그 array에 있는 각각의 item에 대해서 실행
//   // 위의 sayHello 함수를 사용한 것과 같은 효과
//   parsedToDos.forEach((item) => console.log("this is the turn of ", item));
// }

// 5. Loading To Dos part Two
// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// const TODOS_KEY = "todos";

// // array가 항상 비어있으므로 새로고침 시 array 안의 값이 바뀜(새 toDos만 저장됨)
// let toDos = [];

// function saveToDos() {
//   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//   const li = event.target.parentElement;
//   li.remove();
// }

// function paintTodo(newTodo) {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   span.innerText = newTodo;
//   const button = document.createElement("button");
//   button.innerText = "❌";
//   button.addEventListener("click", deleteToDo);
//   li.appendChild(span);
//   li.appendChild(button);
//   toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   toDos.push(newTodo);
//   paintTodo(newTodo);
//   saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//   console.log("this is the turn of", item);
// }

// const saveToDos = localStorage.getItem(TODOS_KEY);
// console.log(saveToDos);
// if (saveToDos != null) {
//   const parsedToDos = JSON.parse(saveToDos);
//   toDos = parsedToDos;
//   parsedToDos.forEach(paintTodo);
// }

// 6. Deleting To Dos part One
// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// const TODOS_KEY = "todos";

// let toDos = [];

// function saveToDos() {
//   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//   const li = event.target.parentElement;
//   console.log(li.id);
//   li.remove();
// }

// function paintTodo(newTodo) {
//   const li = document.createElement("li");
//   li.id = newTodo.id;
//   const span = document.createElement("span");
//   span.innerText = newTodo.text;
//   const button = document.createElement("button");
//   button.innerText = "❌";
//   button.addEventListener("click", deleteToDo);
//   li.appendChild(span);
//   li.appendChild(button);
//   toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   const newTodoObj = {
//     text: newTodo,
//     id: Date.now(),
//   };
//   toDos.push(newTodoObj);
//   paintTodo(newTodoObj);
//   saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//   console.log("this is the turn of", item);
// }

// const saveToDos = localStorage.getItem(TODOS_KEY);
// console.log(saveToDos);
// if (saveToDos != null) {
//   const parsedToDos = JSON.parse(saveToDos);
//   toDos = parsedToDos;
//   parsedToDos.forEach(paintTodo);
// }

// 7. Deleting To Dos part Two
// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// const TODOS_KEY = "todos";

// let toDos = [];

// function saveToDos() {
//   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//   const li = event.target.parentElement;
//   console.log(li.id);
//   li.remove();
// }

// function paintTodo(newTodo) {
//   const li = document.createElement("li");
//   li.id = newTodo.id;
//   const span = document.createElement("span");
//   span.innerText = newTodo.text;
//   const button = document.createElement("button");
//   button.innerText = "❌";
//   button.addEventListener("click", deleteToDo);
//   li.appendChild(span);
//   li.appendChild(button);
//   toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   const newTodoObj = {
//     text: newTodo,
//     id: Date.now(),
//   };
//   toDos.push(newTodoObj);
//   paintTodo(newTodoObj);
//   saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//   console.log("this is the turn of", item);
// }

// const saveToDos = localStorage.getItem(TODOS_KEY);
// console.log(saveToDos);
// if (saveToDos != null) {
//   const parsedToDos = JSON.parse(saveToDos);
//   toDos = parsedToDos;
//   parsedToDos.forEach(paintTodo);
// }

// // filter 함수 == 지우고 싶은 item을 제외하고 새 array를 만들어줌
// // filter()는 이전에 만들었던 array를 변경하지 x
// // sexyFilter()는 만약 새 array에서 이 ojbect를 유지하고 싶다면 반드시 true를 리턴해야함
// // function sexyFilter() {}

// // [1, 2, 3, 4].filter(sexyFilter);

// // sexyFilter(4);

// 8. Deleting To Dos part Three
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // toDos DB에서 todo를 지운 뒤에 saveToDos() 다시 호출
  saveToDos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  console.log("this is the turn of", item);
  console.log("test");
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(saveToDos);
if (savedToDos != null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
