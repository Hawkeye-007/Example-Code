console.log("Hello World from external file !")

// var i;

// i = 1;

// if (i == 1) {
//     var j = 20;
//     console.log("yes" + i)
// }
// else {
//     console.log("no")
// }

// var i
// console.log(i,j)


// let i;

// i = 1;

// if (i == 1) {
//     let j = 20;
//     console.log("yes" + i)
// }
// else {
//     console.log("no")
// }

// i = 20
// console.log(i)

// var i;

// var i = 10, j=20;
// ans = i + j
// var ans = i + j;
// console.log(i++)

// var i = 10
// console.log(i, typeof i)
// i = "Hello Guys !!"
// console.log(i, typeof i)

// let i = 10; j = "10";
// console.log(i == j)
// console.log(i === j)

// let a = true;

// console.log(typeof a)
// console.log(typeof(a))

// let a = 10;

// let ans = a === 11 ? true : 'no'

// console.log(ans)
// console.log(a === 11 ? true : 'no')


// var num1 = 20, num2 = 40, num3 = "20", num4 = "40";

// if(num1 == num3) {
//     console.log("Both the numbers are equal !");
// } else {
//     console.log("Both the numbers are not equal !");
// }

// if((num1 == num2) && (num3 == num4)) {
//     console.log("All sub conditions are good.");
// } else {
//     console.log("All sub conditions are bad.");
// }

// if (num1 != num2) {
//     console.log("Contion 1.");
//     if(num1 == num3) {
//         console.log("Both the numbers are equal !");
//     } else {
//         console.log("Both the numbers are not equal !");
//     }
// }
// else if (num1 != num2) {
//     console.log("Condition 2.");
// }
// else {
//     console.log("Else.");
// }


// let num1 = 3;

// switch(num1) {
//     case  1:
//         console.log("Contion 1.")
//         break;
//     case 2:
//         console.log("Condition 2.")
//         break;
//     case 3:
//         console.log("Condition 3.")
//         break;
//     default:
//         console.log("Default.")
// }

// Entry control loop --> for, while

// Exit control loop  --> do/while

// let lastnum = 10;

// for(var i = 1; i <= lastnum; i++) {
//     console.log(i);
// }
// console.log("outside for ", i)

// let i = 1;

// while(i <= 10) {
//     console.log(i);
//     i++;
// }

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while(i <= 10);


// for(i = 20; i >= 0; i--) {

//     if (i == 15) {
//         break;
//     }
//     console.log(i);
// }

// for(let i = 1; i <= 20; i++) {
//     if(i%2 == 0) {
//         continue;
//     }
//     console.log(i);
// } 


// for( let i = 1; i <= 30; i++) {
//     if (i == 29) {
//         break;
//     }
//     if (i % 2 != 0) {
//         continue;
//     }
//     console.log(i);
// }

// function [FuntionName] (argument1, argument2, ...) {

// }

// let ans = testEquality(2, 3);
// console.log(ans);

// function testEquality(num1, num2) {
//     if (num1 === num2) {
//         console.log("Both numbers are equal !");
//         return true;
//     } else {
//         console.log("Both numbers are not equal !");
//         return false;
//     }
// }


// let sum = addTwoNum(10,2);

// console.log(sum)

// function addTwoNum(x, y) {
//     let c = x + y;
//     return c
// }

// console.log("---------")

// var a1 = 20;

// let a2 = 30;
// const a3 = 40;

// for (let i =0; i<=1; i++) {
//     let temp1 =10;
//     var temp2 = 20;
// }
// console.log(temp1, temp2)


// function factorial(num1) {
//     let fact = 1;
//     for(let i=1; i<=num1; i++){
//         fact = fact * i;
//     }
//     return fact;
// }

// function factorial(n) {
//     if (n > 1) {
//         return n * factorial(n - 1);
//     }
//     return 1;
// }



// function addTwoNum(num1, num2, callback) {
//     var res = num1 + num2;
//     callback(res);
// }

// function displayResult(num) {
//     console.log(num)
// }

// addTwoNum(1,2, displayResult);



// function createQuote(quote, callback){ 
//     var myQuote = "Like I always say, " + quote;
//     callback(myQuote);
// }
  
// function logQuote(quote){
//     console.log(quote);
// }
  
// createQuote("eat your vegetables!", logQuote); 

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then()


let a1 = function (test) {
    console.log(test)
}

a1("This is a1!") 