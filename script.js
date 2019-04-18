'use strict';

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'/ 0);

let persone = {
  name: "John",
  age: 25,
  isMarried: false
};

console.log(persone["name"]);

let arr = ['plum.png','orenge.jpg','apple.bmp'];
console.log (arr[2]);

// alert("Hello World!");

// let answer = confirm("Are you here?");

// console.log(answer)

// let answer = prompt("Есть ли вам 18", "Da");

// console.log(typeof(null));

let incr = 10,
    decr = 10;

 
console.log(++incr);
console.log(--decr);

console.log(5%2);
console.log("2"=== 2);

let isChecked = true,
    isClose = false;

console.log(isChecked || !isClose)