"use strict";

/*1
Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зарезолвится (то есть выполнится успешно).*/

let promise = new Promise((resolve, reject) => {
  setTimeout(resolve("ok"), 3000);
});

promise.then((value) => {
  console.log(value);
});

/*2
Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зареджектится (то есть выполнится с ошибкой).*/

let promise1 = new Promise((resolve, reject) => {
  setTimeout(reject("ok"), 3000);
});

promise.then((value) => {
  console.log(value);
});

/*3
Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.*/

Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(5), 5000)),
]).then((value) => {
  let sum = 0;
  value.forEach((item) => {
    sum += item;
  });
  alert(sum);
});

4;
/*Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, Отфильтровать массив пользователей, чтобы остались только пользователи с четными id.*/

function filterId(arr) {
  arr.filter((item) => item.id % 2 === 0);
  return arr;
}

let inquiry = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((result) => filterId(result));

/*5
Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, вывести список карточек пользователей, отобразить имя, телефон и остальную информацию каждого пользователя. Вывести в html внутри div */

async function getUsersData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await res.json();
  result.forEach((i) => displayUsersCard(i));
}

function displayUsersCard(object) {
  let card = `
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">${object.name}</div>
        <div class="card-body">
          <h5 class="card-title">Email: ${object.email}</h5>
          <p class="card-text">Phone: ${object.phone}</p>
        </div>
      </div>    `;
  let cardDiv = document.createElement("div");
  cardDiv.innerHTML = card;
  document.body.append(cardDiv);
}

getUsersData();

/*6
Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/${userId}/todos, userId получить при помощи prompt. Вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет (чекбокс). Вывести в html внутри div с id = 2*/

async function getUsersData() {
  let userId = +prompt("введите id пользователя");
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/todos`
  );
  const result = await res.json();
  result.forEach((i) => createToodoo(i));
  console.log(result);
}

function createToodoo(object) {
  let card = "";
  if (object.completed === true) {
    card = `
    <div class="card w-75">
  <div class="card-body">
    <h5 class="card-title">${object.userId}</h5>
    <p class="card-text">${object.title}</p>
    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    Completed
  </label>
  </div>
</div>`;
  } else {
    card = `
    <div class="card w-75">
  <div class="card-body">
    <h5 class="card-title">${object.userId}</h5>
    <p class="card-text">${object.title}.</p>
    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
  <label class="form-check-label" for="flexCheckChecked">
    Completed
  </label>
  </div>
</div>`;
  }
  let cardDiv = document.createElement("div");
  cardDiv.innerHTML = card;
  document.body.append(cardDiv);
}

getUsersData();

/*7
Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums/1/photos, вывести фотографии, используя тег img. В качестве src для img использовать поле url в объекте фото

{
  "albumId": 1,
  "id": 4,
  "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
  "url": "https://via.placeholder.com/600/d32776",
  "thumbnailUrl": "https://via.placeholder.com/150/d32776"
},
Дополнительно сделать, чтобы по нажатию на картинку картинка увеличивалась в размерах, повторное нажатие вернет картинку к исходному размеру. Вывести в html внутри div с id = 3*/

async function getUserPhotos() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos"
  );
  const result = await res.json();
  result.forEach((i) => createAlbom(i));
}

function createAlbom(object) {
  let card = `
    <img src="${object.url}" class="img-fluid w-25 p-3" alt="...">
    `;
  let cardDiv = document.createElement("div");
  cardDiv.innerHTML = card;
  document.body.append(cardDiv);
  cardDiv.addEventListener("click", function (event, element) {
    if (event.target.className === "img-fluid w-25 p-3") {
      event.target.className = "rounded mx-auto d-block w-90 p-3";
    } else if ("rounded mx-auto d-block w-90 p-3") {
      event.target.className = "img-fluid w-25 p-3";
    }
  });
}

getUserPhotos();
