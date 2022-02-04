// "use strict";
console.log("Lecture 1.");

// console.log(test1(num));

// function test1(numb) {
//     return numb + 1;
// }

// console.log(testHositing);

// console.log(testVar);

// function testHositing() {
//     return "Hello !";
// }

// var testVar = function x() {
//     return "X says hello !"
// }


// console.log(num);
// var num = 10;

// var a1var = 10;
// let a2let = 20;

// console.log("a1var", a1var);
// console.log("a2let", a2let);

// function x() {
//     let a = 10;
//     function y() {
//         let b = a + 1;
        
//     }
//     a = 100;
//     y();
// }

// x();


// let obj1 = {
//     f_name: "Tom",
//     l_name: "Sawyer",
// }

// let obj2 = {
//     f_name: "Nick",
//     l_name: "Halden",
// }

// var printName = function(phoneNo, address) {
//     console.log(this.f_name, this.l_name, phoneNo, address);
// }

// printName.call(obj1, "90909090909", "dkjhfasdkj");
// printName.call(obj2, "90909090909", "dfkjhadsf");

// printName.apply(obj1, ["90909090909", "dkjhfasdkj"]);
// printName.apply(obj2, ["90909090909", "dkjhfasdkj"]);

// let newFunc1 = printName.bind(obj1, "9889800", "west street");

// console.log(newFunc1);
// newFunc1();

// let newFunc2 = printName.bind(obj2, "9889800", "west street");

// newFunc2();

// let x = function() {
//     var a = 10;
// }
// x();
// let temp = 30;

// (function(){
//     b = 20;
//     console.log("Hello guys ! I am IIFE !");
// })();

// function x() {
//     var temp1 = 10;
// }

// x();

// console.log(temp1)

// let dateTime = new Date();
// console.log(dateTime);
// console.log(dateTime.getDate());
// console.log(dateTime.getDay()); 
// console.log(dateTime.getFullYear());

// let timer = setTimeout(function() {
//     console.log("This is setTimeout !");
// }, 5000);

// clearTimeout(timer);

// console.log("This is outside of setTimeout !");

// let timer = setInterval(function() {
//     console.log("This is setInterval !")
// }, 2000);

// setTimeout(function() {
//     clearInterval(timer);
// }, 10000);

// const y = { name: "Nick", role: "Hero"};

// console.log("x before changing --> ", y);

// y.role = "Villan"; // allowed
 
// console.log("x before changing --> ", y);

// y = { name: "Fury", role: "Hero"}; // not allowed

// console.log("x before changing --> ", y);


// let x = "test";

// console.log(x);

// x = [1,2,3];

// console.log(x);

// x = { name: "Tony Stark" };

// console.log(x);

// let text = "Hey everyone!";
// let text = 1;

// let newText = "Good Evening! " + text;

// let text2 = 2;
// let newText = `${text2}${text}`;

// console.log(newText);

// let morning = "Good Morning!\n";
// let afternoon = "Good Afternoon!";

// console.log(morning);
// console.log(morning.charAt(4));
// console.log(morning.startsWith('ood', 1));

// let text = "Mo";
// console.log(text.startsWith("a", text.length - 3)); // searchtext, start location ==> 0

// console.log(morning.endsWith(' ', 5)); // searchtext, length of the string ==> 

// console.log(morning.includes(text));
// console.log(afternoon.includes(text));

// console.log(morning.repeat(5));

// console.log(String.raw`C:\nbc`);

// let x = [1,2,3,1,2,3];

// console.log(x);

// let y = new Set([1,2,3,1,2,3]);

// console.log(y)
// console.log([...y]);

// let map = new Map([[1, [1,"xzy"]], [2, "two"]]);


// console.log(map.get(1));

// function normalFunction() {
//     console.log("Hello everyone ! We are going to clear all the interviews !");
// }

// var normalFunction = function() {
//     console.log("Hello everyone ! We are going to clear all the interviews !");
// }

// var normalFunction = (str, num) => {
//     console.log("Hello everyone ! We are going to clear all the interviews !");
//     console.log("Hey", str, num);
// } 

// normalFunction("text", 3);

// let a = () => console.log("hey");

// normalFunction();

// let name = "Cliton";
// let obj = {
//     name: "Neil",
//     printName: function() {
//         console.log(this.name, this);
//     },
//     printNameWithArrowFunction: () => console.log(this.name, this)
// };

// obj.printName();
// obj.printNameWithArrowFunction();

// var x1 = () => console.log("Hello !");

// var x2 = function() {
//     console.log("Hey !");
// }

// var x1Func = new x1();
// var x2Func = new x2();

// x2Func();
// console.log(x2Func);

// let arr = [1,2,3,4,5,6,7];

// let evenNumbers = arr.filter(item => item%2 == 0);

// let evenNumbers = arr.filter((item) => {
//     return item%2 == 0;
// })

// console.log(evenNumbers);

// arr.forEach(function(item) {
//     console.log(item);
// });

// arr.forEach((item, idx) => {
//     console.log("Item: ", item, " Index: ", idx);
// });

// setTimeout(()=> {
//     console.log("hey !");
// }, 3000);


// let add = (a,b=8) => a + b;

// let sum = add(10,6);

// console.log(sum);


// function add(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// console.log(add(10)(5));

// let a = [1,2,3];

// console.log(a);

// let [a1, a2, a3] = a;

// console.log(a1, a3);

// let a = { name: "Bill", age: 24 };

// console.log(a);

// let { name: nameVar, age } = a;

// console.log(nameVar, age);

// let user = function(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let user1 = new user("Harry Potter", 23);
// let user2 = new user("Ron Weasly", 24);

// user.prototype.phoneNumber = "9087654321";

// user1.__proto__.__proto__.address = "Winter Street."
// console.log(user1);
// console.log(user2);

// var a = { val: 10 };

// console.log(a);

// a --> prototype

// var b = Object.create(a);

// b ---> prototype --> a --> prototype --->

// let counter = {
//     val: 0,
//     counterInc: function() {
//         return this.val + 1;
//     }
// }

// console.log(counter.counterInc());

// let counter2 = Object.create(counter);

// counter2.val = 2;

// console.log(counter2.counterInc());

// counter ---> counter2


// function SuperHero(superHeroName, realName, power) {
//     this.superHeroName = superHeroName
//     this.realName =  realName
//     this.power = power
// }

// const ironMan = new SuperHero("Tony Stark", "RDJ", "Iron Man suit");

// SuperHero.prototype.lastMovie = "End Game";
// console.log(ironMan.hasOwnProperty('lastMovie'));
// console.log(ironMan.__proto__.hasOwnProperty('lastMovie'));

// class Rect {
//     constructor(length, width) {
//         this.length = length;
//         this.width = width;
//     }

//     getPerimeter() {
//         return 2 * (this.length + this.width);
//     }
// }


// class Square extends Rect {
//     constructor(length) {
//         super(length)
//     }
// }

// class Rombus extends Square {
//     constructor(length) {
//         super (length)
//     }
// }

// class Trep extends Rect {
//     constructor(length, width) {
//         super(length, width)
//     }
// }


// let rectObj = new Rect(3,4);

// console.log(rectObj.getPerimeter());

// let sqrObj = new Square(2);

// console.log(sqrObj.getPerimeter());

// const obj = {
//     arr: [1, 2, 3],
//     get latest() {
//         console.log(arr);
//     },
//     set latest1() {

//     }
// }

// console.log(obj.arr);

// class Student {
//     constructor(name) {
//         this._name = name; 
//     }
//     get name() {
//         return this._name.toUpperCase();
//     }

//     set name(newName) {
//         alert("The name is been changed!");
//         this._name = newName;
//     }

//     studentName() {
//         console.log(this._name + " is the student name!");
//     }
// }

// let robert = new Student("robert");
// console.log(robert.name);
// robert.name = "xyz"
// console.log(robert.name);
// console.log(robert);
// console.log("name", robert.name);
// console.log("_name", robert._name);

// let request = new XMLHttpRequest();

// request.open('GET', 'https://www.google.com');

// request.send();

// request.onload = function() {
//     console.log(request.status);
// }

// request.onerror = function() {
//     console.log("error with the request!");
// }

// console.log("Line 1");
// setTimeout(() => {
//     console.log("Line 2");
// }, 1000)
// console.log("Line 3");


// console.log("Line 1");
// let myPromise = new Promise(function(resolve, reject){
//     resolve("Line 2");
//     reject("Promise failed.");
// });

// console.log("Line 3");

// myPromise.then((val) => {
//     console.log(val);
// });

// myPromise.catch((val) => {
//     console.log(val);
// });

// let arr = [
//     {
//         name: "Thor",
//         score: 10
//     },
//     {
//         name: "Tony Stark",
//         score: 20
//     },
//     {
//         name: "Stephen",
//         score: 30
//     }
// ];

// let myPromise = new Promise((resolve, reject) => {
//     arr.forEach((val, idx) => {
//         if(val.score > 20) {
//             reject();
//         }
//         val.score = val.score - 5;
//         arr[idx] = val;
//     });
//     resolve(arr);
// });

// myPromise.then((arr) => {
//     console.log(arr);
// });

// let request = new XMLHttpRequest();

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

// request.send();

// request.onload = function() {
//     console.log(request.status);
// }

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((response) => response.json())
// .then((data) => console.log(data));

// fetch('https://jsonplaceholder.typicode.com/todos/1', {
//     method: 'GET'
// })
// .then((response) => response.json())
// .then((data) => console.log(data));

// async function fun1() {
//     return fetch('https://jsonplaceholder.typicode.com/todos/1', {
//     method: 'GET'
//     })
//     .then((response) => response.json())
//     .then((data) => {
//         return data;
//     });
// }

// console.log(fun1().then(alert));

// console.log("Line 1");

// async function func1() {
   
//     return 1;
// }
// console.log(func1());
// console.log("Line 3");

// async function func1() {
//     console.log("Line 1");
//     let promise = new Promise((res, rej) => {
//         setTimeout(() => {
//             fetch('https://jsonplaceholder.typicode.com/todos/1')
//             .then((response) => response.json())
//             .then((data) => res(data));
//         }, 1000);
//     });
//     let result = await promise;
//     console.log(result);
//     // promise.then((val) => console.log(val));
//     console.log("Line 3");
// }

// func1();

// async function func1() {

// }

// let func2 = () => {

// }


// let myPromise = new Promise((resolve, reject) => {
//     // resolve("This promise is resolved.");
//     reject("This promise is not resolved.");
// });

// myPromise
// .then((val) => console.log(val))
// .then(() => "Second then.")
// .catch((val) => console.log(val))
// .finally(()=> console.log("Finally."))

// let myPromise2 = Promise.resolve("This promise is resolved.");
// let myPromise3 = Promise.reject("This promise is not resolved.");

// const promise1 = Promise.resolve("First Promise.");

// const promise2 = Promise.resolve(23);

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Third Promise.')
// });

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(reject, 1000, 'Fourth Promise.')
// });


// Promise.all([promise1, promise2, promise3])
// .then((val) => {
//     console.log(val);
// })
// .catch((val) => console.log(val))

// Promise.any([promise1, promise2, promise3])
// .then((val) => console.log(val))
// .catch((val) => console.log(val));

// Promise.race([promise3, promise4]).then((val) => console.log(val));

// let arr = [1, 2, 3, 4];

// console.log(arr);

// for(let i = 0; i < arr.length; i++ ){
//     console.log(arr[i]);
// }

// let iteratorObj = arr[Symbol.iterator]();

// console.log(iteratorObj.next());
// console.log(iteratorObj.next());
// console.log(iteratorObj.next());
// console.log(iteratorObj.next());
// console.log(iteratorObj.next());


// localStorage
// - can we shared between tabs of same origin
// - survives browser restrat and tab refresh

// sessionStorage
// - can we found in one tabs
// - survives only page/tag refresh

localStorage.setItem('str', "Hey guys");
localStorage.setItem('num', 2);
localStorage.setItem('obj', JSON.stringify({ name: 'Tony', age: 25}));


let obj = localStorage.getItem('obj');

console.log(obj);
console.log(JSON.parse(obj));

// localStorage.removeItem('num');

// localStorage.clear();

sessionStorage.setItem("name", "Tony");
sessionStorage.setItem('str', "Hey guys");
sessionStorage.setItem('num', 2);
sessionStorage.setItem('obj', JSON.stringify({ name: 'Tony', age: 25}));

let name = sessionStorage.getItem('name');

console.log(name);
