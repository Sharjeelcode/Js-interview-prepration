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

const date = new Date();
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

const a = 100;
const b = 220;
const c = 300;

console.log(Array.of(a, b, c)); //converts many item in one array creates new array
