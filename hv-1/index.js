"use-strict";

/*№1
Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат. Например: [1,2,3] -> [1,4,9].*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = arr.map((i) => i ** 2);

/*№2
Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.*/

let array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let sum = 0;
array.forEach((item) => {
  sum += item;
});

/*№3
Напишите код, который добавит символ двоеточие(':') между нечетными числами. Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5*/

let num = 655;
function addSymbols(num) {
  let str = num.toString();
  let result = [str[0]];
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 !== 0 && str[i] % 2 !== 0) {
      result.push(":", str[i]);
    } else {
      result.push(str[i]);
    }
  }
  return result.join("");
}

/*№4
Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой разность соответствующих элементов заданных массивов.*/

let arrA = [1, 2, 3, 4, 5];
let arrB = [6, 7, 8, 9];
function subtractionArr(arrA, arrB) {
  return arrB.map(function (el, i) {
    return Math.abs(el - arrA[i]);
  });
}

/*№5
Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.*/

let arrA = [1, 2, 3, 4, 5];
let arrB = [6, 7, 8, 9];
function subtractionArr(arrA, arrB) {
  return arrB.map(function (el, i) {
    return Math.abs(el + arrA[i]);
  });
}

/*№6
Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную. Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]*/

let arrA = [1, 2, 3, 4, 5];
let arrB = arrA.reverse();

/*№7
Фильтр юзеров Создать массив объектов для юзеров. Пример:

[{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {...}, ...]
Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.*/

let arrUsers = [
  { name: "Ivan", age: 18 },
  { name: "Petr", age: 12 },
  { name: "Sidor", age: 25 },
];

function sortByAge(arr) {
  let usersAdult = [];
  let usersMinor = [];
  arr.forEach(function (el, usersAdult, usersMinor) {
    if (el.age >= 18) {
      usersAdult.push(el);
    } else {
      usersMinor.push(el);
    }
  });
  return usersAdult, usersMinor;
}

sortByAge(arrUsers);

console.log(usersAdult, usersMinor);

/*№8
Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения. Напишите код, который уберет эти дубликаты из созданного массива.*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 3, 9, 2, 7, 10, 3];
arr.filter((item, index) => {
  return arr.indexOf(item) === index;
});

/*№9
Напишите код, который проверит является строка полиндромом (слово, которое с обеих сторон читается одинаково, например РЕПЕР, ШАЛАШ)*/

function reverseStr(str) {
  if (str.split("").reverse().join("") === str) {
    true;
  }
}

/*№10
Написать функцию, которая принимает первым аргументом массив, а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет. (indexOf, findIndex не использовать!)*/

function lookForMatches(arr, x) {
  arr.forEach(function (item) {
    if (i === x) {
      return item.index;
    } else {
      return -1;
    }
  });
}

/*№11
Написать функцию search, которая принимает первым аргументом массив имен:

[ ‘Ivan’, ‘Petr’, ‘Sidor’, ...]
и любую произвольную строку. Функция должна отфильтровать массив в зависимости от строки (в независимости от регистра). Например:

search([‘Ivan’, ‘Petr’, ‘Sidor’], 'si') -> ['Sidor']
search([‘Ivan’, ‘Petr’, ‘Sidor’], 'i') -> [‘Ivan’,'Sidor']
search([‘Ivan’, ‘Petr’, ‘Sidor’, 'Petric'], 'eTr') -> [‘Petr’,'Petric']
search([‘Ivan’, ‘Petr’, ‘Sidor’, 'Petric'], 'eTrooo') -> []*/

function search(arr, str) {
  return arr.filter((item) => item.toLowerCase().includes(str.toLowerCase()));
}

/*№12
Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того, одинаковые у них элементы или нет. Пример:

checkIsEqaul([1,2,3], [1,2,3]) -> true
checkIsEqaul([1,2,3], [1,2,3,4]) -> false
checkIsEqaul([1,2,3], [1,'2',3]) -> false*/

function checkEqaulityOfArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
