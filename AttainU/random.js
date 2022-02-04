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

// sum = addTwoNum(3,5);

// console.log(sum);

// sum = addTwoNum(16,22);

// console.log(sum);

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
  
// function logData(data){
//     console.log(data);
// }
  
// createQuote("eat your vegetables!", logData); 
// addTwoNum(22, 44, logData)

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then()


// let a1 = function (test) {
//     console.log(test)
// }

// a1("This is a1!") 


// function func1(temp) {

//     return temp * temp
// }

// function func2 (testFuncName) {
//     console.log(testFuncName)
//     let x  = testFuncName(2)
// }

// func2(func1)


function func1(arg1) {
    console.log("Function 1 excecuted.", arg1)
}

// var arr1 = ["apple", "orange", "kiwi", func1]

// console.log("Before changing ",arr1)

// console.log(arr1.length);

// for(let i=0; i<arr1.length; i++) {
//     console.log(arr1[i])
// }

// arr1[1] = "test"

// console.log("After changing ",arr1)

// arr1[3]("argument 1 value here.")

// let arr = [700, 900, 500]

// console.log("Before ", arr);

// arr.push(300, 400, 100, "test", func1, ["a", "b", 1, 4], true)

// console.log("After", arr);


// const arr = [1, 2];

// arr = [3, 4];


// let arr = [700, 900, 500]

// console.log("Before ", arr);

// arr.pop()

// console.log("After", arr);

// let arr = [700, 900, 500]

// console.log("Before ", arr);

// arr.shift();
// arr.unshift(200, 400);

// console.log("After", arr);

// let arr1 = [700, 900, 500]

// console.log(arr1)

// console.log(arr.toString())

// console.log(arr.join("*"))

// console.log(arr.reverse())

// let arr2 = ["test1", "test2"]
// console.log(arr2)

// console.log(arr1.concat(200, 400))
// console.log(arr1.concat(arr2)) 
// console.log([200, 400].concat(arr1))

// let arr1 = [700, 900, 500, 400, 1000, 100]

// console.log("Actual array before splice", arr1)

// arr1.slice(0, 3)

// console.log(arr1.slice(0, 3))

// console.log("Return of splice ", arr1.splice(2, 2))
// console.log("Actual array after splice ", arr1)

// arr1.splice(2, 0, 800);

// console.log(arr1);

// let arr1 = [700, 900, 500, 400, 1000, 100];

// console.log(arr1);

// arr1.forEach(function(val, idx) {
//     console.log("Item at that index is:", val)
// });

// let arr2 = [[1,2,3], [4,5,6]]

// arr2.forEach(function(value1) {
//     // console.log(value1)
//     value1.forEach(function(value2) {
//         console.log(value2);
//     })
// })

// let arr1 = [700, 900, 500, 400, 1000, 100]; // add 5 to all elements

// console.log(arr1);

// let arr2 = arr1.map(function(val){
//     return val + 5
// })

// console.log(arr2);

// map runs the function to each Element

// it return a value from the function

// the returned value is pushed to a new array


// let arr1 = [700, 900, 500, 400, 1000, 100]; // based on value greater than 400

// console.log(arr1);

// let arr2 = arr1.filter(function(val){
//     return val > 400
// });

// console.log(arr2);

// let arr1 = [700, 900, 500, 400, 1000, 100];
// console.log(arr1);
// console.log(arr1.sort(function(a,b) {return b-a}));

// let arr1 = [700, 900, 400, 500, 400, 1000, 100, 400];

// console.log(arr1);
// console.log(arr1.indexOf(400));
// console.log(arr1.lastIndexOf(400));

// var student = { name: "Nick", rollNumber: 123, address: "3/123 streeet.", availablePhNo: [12, 34, 56]};

// console.log(student);
// console.log(student.name);
// student.name = "Halden";
// console.log(student);
// console.log(student.name);

// student.availablePhNo.forEach(function(val) {
//     console.log(val);
// });
// console.log(student.rollNumber);

// var student = { name: "Nick", rollNumber: 123, address: { doorNo: 12, street: "west street"}};


// console.log(student);

// console.log(student.name);
// console.log(student["address"]["street"]);
// console.log(student.address.street);

// for (let val in student) {
//     console.log("key: ", val, "value: ", student[val]);
// }

// delete student.name;

// console.log(student);

// console.log(JSON.stringify(student));

// let temp = JSON.stringify(student);

// console.log(temp);

// console.log(JSON.parse(temp));

// let body = document.getElementsByTagName("body")
// let div = document.createElement('div')

// div.innerHTML = student;

// document.body.append(div)

// function User(name, age) {
//     this.name = name;
//     this.age  = age;
//     this.consoleName = function() {
//         console.log(this.name);
//     }
// }

// let user1 = new User("test user", 20);

// console.log(user1);

// user1.consoleName();

// let arr1 = [1,2,3,4,5];

// console.log("every --> ", arr1.every(function(x){ return x < 4}));

// console.log("some --> ", arr1.some(function(x) { return x < 4}));

// console.log("reduce --> ", arr1.reduce(function(x,y) { return x + y}));

// console.log("reduceRight --> ", arr1.reduceRight(function(x,y) { return x + y}));

// console.log("find --> ", arr1.find(function(x) { return x > 2}));

// let p1 = document.getElementById("ptagId1");
// let p2 = document.getElementById("ptagId2");

// let p1 = document.getElementsByClassName("pTagClassName1");
// let p2 = document.getElementsByClassName("pTagClassName2");

// let div = document.getElementsByTagName("div");
// let p = document.getElementsByTagName("p");

// let p1 = document.getElementsByName("pTagName");
// let p2 = document.getElementsByName("pTagClassName2");

// console.log(p1);


// let button1 = document.getElementsByClassName("button1");

// button1[0].addEventListener("click", onClicked);

// function onClicked() {
//     console.log("Click Me button was clicked !");
// }

// function test() {
//     console.log("Div is onmouseover!");
// }

// let div1 = document.getElementById("div1");

// function onClickDiv1() {
//     console.log("Div 1 Clicked.");
// }

// div1.addEventListener("click", onClickDiv1);

// let div2 = document.getElementById("div2");

// function onClickDiv2() {
//     console.log("Div 2 Clicked.");
// }

// div2.addEventListener("click", onClickDiv2);

// let div3 = document.getElementById("div3");

// function onClickDiv3() {
//     console.log("Div 3 Clicked.");
//     event.stopPropagation();
// }

// div3.addEventListener("click", onClickDiv3);

// let button1 = document.getElementsByClassName("button1");

// button1[0].addEventListener("click", onClicked1);

// function onClicked1() {
//     console.log("Click Me button was clicked from onClicked1 function!");
//     event.stopImmediatePropagation();
// }

// function onClicked2() {
//     console.log("Click Me button was clicked from onClicked2 function!");
// }

// button1[0].addEventListener("click", onClicked2);

// let button1 = document.querySelector("a");
// let button2 = document.getElementsByClassName("a1");

// console.log(button1, button2)

// <div class="div1">Hey guys! How are you all?</div>

// let divVar1 = document.createElement('div');

// divVar1.className = "div1";

// divVar1.innerHTML = "Hey guys! How are you all?";

// let divVar2 = document.createElement('div');

// divVar2.className = "div2";

// divVar2.innerHTML = "I hope you all are fine!";

// let divVar3 = document.createElement('div');

// divVar3.className = "div3";

// divVar3.innerHTML = "Thanks!";

// divVar3.style = "background: brown;"


// document.body.append(divVar3);
// document.body.append(divVar1);
// document.body.append(divVar2);

var inputField = document.getElementById("input-field");

inputField.style = "background-color: yellow; margin: 30px"
var addTodoButton = document.getElementById("add-todo");
var todoList = document.getElementById("todo-list");

addTodoButton.addEventListener("click", addItemToList);

function addItemToList() {
    var newTodoItem = inputField.value;
    var removeButton = document.createElement("button");
    removeButton.innerHTML = "Completed";
    removeButton.addEventListener("click", function() {
        // Remove the created li element
        newLiItem.remove();
    });

    var newLiItem = document.createElement("li");
    newLiItem.innerHTML = newTodoItem;
    newLiItem.append(removeButton);

    todoList.append(newLiItem);
}

// var getLcnBtn = document.getElementById("getLocationBtn");

// getLcnBtn.addEventListener("click", getUserLocation);

// function getUserLocation() {
//     console.log("Trying to get location...");
//     navigator.geolocation.getCurrentPosition(onPositionReceived, onPositionDenied);
// }

// function onPositionReceived(position) {
//     console.log("Position received !")
//     console.log(position);
// }

// function onPositionDenied() {
//     console.log("Position request denied !")
// }

// function Test(fname, lname="temp") {

//     this.firstName = fname;
//     this.lastName = lname;

// }

// let x = new Test("Prag", "x");
// let y = new Test("Roopam", "y");
// let z = new Test("Shazia");

// console.log(x, y, z);