// 7 primitive data types
// string , Symbol , Number ,null,BigInt , Boolean , undefined
// non premitive data types
// Array , object ,function

// ********string methods
// const string = "Sharjeel herry chery";
// console.log(string.toLocaleLowerCase());
// console.log(string.toLocaleUpperCase());
// console.log(string.trimEnd());
// console.log(string.charAt(1));
// console.log(string.length);
// console.log(string.indexOf("h"));
// console.log(string[0]);
// console.log(string.slice(1, 5));
// console.log(string.replace("h", ""));
// console.log(string.includes("h"));
// console.log(string.split(" "));
// console.log(Array(string));

// ****number methods
// const num = new Number(22.0);
// console.log(num.toFixed());
// const num2 = 2121.92;
// console.log(num2.toPrecision(4));
// const hundreds = 10000000;
// console.log(hundreds.toLocaleString("en-PK"));

// ********Maths
// const a = [1, 2, 3, 4, 5];
// const nums = 12345.4654;
// console.log(Math.round(nums));
// console.log(Math.max(1, 2, 3, 4));
// console.log(Math.min(1, 2, 3, 4));
// console.log(Math.round(Math.random() * a.length) + 1);

// *****Date

// const date = new Date();
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.toDateString());
// console.log(date.toISOString());

// const dateobj = new Date("01-15-2024");
// console.log(dateobj.toLocaleString());

// console.log(date.getTime());

// const newDate = new Date();
// const dateobj = newDate.toLocaleString("default", {
//   hour: "2-digit",
//   day: "2-digit",
// });
// console.log(dateobj);

// *******Array
// const arr = [1, 2, 3, 4, 5, 6];

// const arr2 = [...arr];

// arr2.push(22);
// arr2.unshift(5);
// console.log(arr2);

// console.log(arr2.slice(1, 3));
// console.log(arr2.splice(1, 3)); //changes orignal array

// console.log(arr);
// console.log(arr2);
// console.log(arr2.join()); //converts it to string
// const a = arr.forEach((arr) => {
//   if (arr > 2) {
//     console.log(arr);
//   }
// });

// const city = ["karachi", "lahore", "rawalpindi"];
// const provision = ["sindh", "punjab", "balochistan,"];

// const merge = [...city, ...provision];
// const concat = city.concat(provision);

// console.log(concat);

// const arrays = [1, 2, [1, 2], [1, 4, 5], 34, 45];
// console.log(arrays.flat(Infinity));

// console.log(Array.from("herry")); //converts from string singel value

// const a = 100;
// const b = 220;
// const c = 300;
// console.log(Array.of(a, b, c)); //converts many item in one array creates new array

// ********object methods
// const mySymbol = Symbol("hery");
// const obj = {
//   name: "sharjeel",
//   [Symbol]: "herry",
//   greeting: function () {
//     console.log(`${this.name}`);
//   },
// };

// obj.name = "herry";
// console.log(obj.greeting());

// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "c", 4: "d" };

// const obj3 = Object.assign({}, obj1, obj2);

// console.log(obj3);

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));
// console.log(obj1.hasOwnProperty(8)); // check if key exits in object

// *******functions

// function name() {
//   console.log("hello");
//   console.log("hello");
//   console.log("hello");
//   console.log("hello");
//   console.log("hello");
//   console.log("hello");
//   console.log("hello");
//   console.log("hello");
//   console.log("hello");
// }
// name();

// function addNums(num1, num2) {
//   return num1 + num2;
// }
// const result = addNums(1, 4);
// // console.log(addNums(1, 3));
// console.log(result);

// function user(username = "Sharjeel") {
//   return username + " logged in";
// }
// console.log(user("Ajaz"));

// function restOperator(...num) {
//   return num;
// }

// console.log(restOperator(1, 3, 485, 746, 54, 34, 3));

// *****hositing

// addone(5);
// function addone(num) {
//   console.log(num + 1);
// }

// if function is decleared in variable it can not be accesd before intilization
// const num2 = (num) => console.log(num + 2);

// num2(5);

// (() => console.log("hello world"))();

// ****this keyword
// const thisKeyword = {
//   name: "sharjeel",
//   thisUse: function () {
//     console.log(this.name);
//     console.log(this);
//   },
// };
// console.log(thisKeyword.thisUse());
// thisKeyword.name = "Ajaz";
// console.log(thisKeyword.name);

// const namess = function () {
//   console.log(this);
// };

// namess();

// const t = () => {
//   console.log(this);
// };
// t();

// IIFE

// (() => console.log("hello"))();
// (function herry() {
//   console.log("herry");
// })();

//js exicution
// 1.global exicution phase
// 2.functional exicution phase
// 3.memory creation phase
// global exicution phase ma sary veriable define hongy or unke values honge undefined but functions ke refinations tore hoge
// function ka ek new exicution context banyga or us ma function ke values jyge or wo return jynge wapis exicution context ma

// jo golbal or functional exeution uper defined ha whe memory creation phase ma hota ha

// example of exicution phase

// const f1 = () => console.log("f1");
// const f2 = () => console.log("f2");
// const f3 = () => console.log("f3");
// f1();
// f2();
// f2();
// function name(params) {}

// switch case

// const month = 25;

// switch (month) {
//   case 1:
//     console.log("1");
//     break;
//   case 2:
//     console.log("2");
//     break;
//   default:
//     console.log("not");
//     break;
// }

// while loop

// let d = 0;
// while (d < 5) {
//   d = d + 1;
//   console.log(d);
// }
// console.log(d);

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// while (array.length) {
//   array.pop();
//   console.log(array);
// }

// let star = "****************************************";
// let starArray = Array.from(star);

// while (starArray.length) {
//   console.log(starArray.join(""));
//   starArray.pop();
// }

// do {
//   console.log(starArray.join(""));
//   starArray.pop();
// } while (starArray.length);

// const starLenght = 10;
// let star = "*";
// for (let i = 0; i < starLenght; i++) {
//   console.log(star);
//   star = star + "*";
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const num of array) {
//   console.log(num);
// }

// const greeting = "hello world";

// for (const greet of greeting) {
//   if (greet === " ") {
//     break;
//   } else {
//     console.log(greet);
//   }
// }

// const obj = {
//   name: "ali",
// };

// const b = Object.assign({}, obj);
// const c = { ...obj };
// b.name = "baby";
// console.log(b);
// console.log(obj);
// console.log(c);

// const original = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// const shallowCopy = Object.assign({}, original);
// shallowCopy.address.city = "Los Angeles";
// shallowCopy.name = "herry";
// console.log(original);
// console.log(shallowCopy);

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Example usage:
// const original = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// const deepCopyObj = deepCopy(original);
// deepCopyObj.address.city = "Los Angeles";

// console.log(original); // Output: New York
// console.log(deepCopyObj.address.city); // Output: Los Angeles

// const obj = {
//   name: "hello",
//   obj2: {
//     name2: "herry",
//   },
// };

// function deepCopy(object) {
//   return JSON.parse(JSON.stringify(object));
// }

// const deep = deepCopy(obj);
// deep.obj2.name2 = "baby";
// console.log(obj);
// console.log(deep);
// console.log(a);

// var a = 5;

// function f() {
//   console.log(this.name);
// }
// f.call({ name: "heyy" });
// let i = "a";
// console.log(NaN === i);

// const original = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// Object.defineProperties(original, {
//   name: {
//     value: original.name,
//     writable: false,
//     configurable: false,
//   },
// });

// original.name = "baby";

// console.log(original);

// const arr = [1, 2, 3, 4, 5, 6];

// const map = arr.map((arr) => {
//   return arr;
// });
// console.log(map);
// const z = arr.filter((a) => a > 5);
// console.log(z);

// const obj = {
//   name: "hery",
// };

// for (const key in obj) {
//   console.log(key + obj[key]);
// }

const prices = [100, 200, 300];

// const reducer = prices.reduce((acc, curVal) => acc + curVal, 0);
const index = 100;
// // console.log(reducer);
// const remove = prices.indexOf(index);

// const slice = prices.slice(remove, 2);
// const splice = prices.splice(remove, 1);
// console.log(p);
// console.log(splice);
// console.log(prices);

// const reduce = prices.reduce((acc, curVal) => acc + curVal, 0);
// console.log(reduce);

const course = [
  {
    course: "js",
    price: 1000,
  },
  {
    course: "py",
    price: 1000,
  },
  {
    course: "c++",
    price: 1000,
  },
  {
    course: "java",
    price: 1000,
  },
];

const total = course.reduce((acc, currVal) => acc + currVal.price, 0);
// console.log(total);

const object = {
  id: 112,
  name: "herry",
  nested: {
    fname: "aziz",
  },
};

// const shallowcopy = { ...object };
// shallowcopy.name = "baby";
// shallowcopy.nested.fname = "hi";

// console.log(shallowcopy);
// console.log(object);

// const deepcopy = (obj) => {
//   return JSON.parse(JSON.stringify(obj));
// };

// const deep = deepCopy(object);
// deep.nested.fname = "fuck";

// console.log(deep);
// console.log(object);

// const arr = [100, 200, 300, 400, 500, 600];

// const totalAmout = arr.reduce((acc, currVal) => acc + currVal, 0);
// console.log(totalAmout);

const arr = [1, 2, 3, 4, 5];

// const slice = arr.slice(1, 3);
// console.log(slice);
// // console.log(arr);

// const splice = arr.splice(1, 3);
// console.log(splice);
// console.log(arr);

const map = arr.map((arr) => {
  if (arr > 2) {
    return "hello";
  }
});
const filter = arr.filter((arr) => arr > 2);
// console.log(map);
// console.log(filter);

const h1 = (document.getElementById("h1").innerHTML = "baby");

const p = document.querySelectorAll("p");
const pArray = Array.from(p);

const i = pArray.map((p) => {
  p.style.backgroundColor = "red";
});
console.log(i);
