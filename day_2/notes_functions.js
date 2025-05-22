//objects

//if u declare like literal then no singleton is created
//if u create thru constructor then singleton

//object literals
const mysymbol = Symbol("k1");
console.log(mysymbol);

const Jsuser =  {
    name:"akansha",  
    age:20,
    "location":"muscat",
    [mysymbol]:"k2"
}

console.log(Jsuser["location"]);
console.log(Jsuser.age);
console.log(Jsuser[mysymbol]);
console.log(typeof Jsuser[mysymbol])


//symbol declaration

const mySym = Symbol("k1");

Jsuser.greeting = function(){
    console.log("hello world!");
}

console.log(Jsuser.greeting());

Jsuser.funct2 = function() {
    console.log(`hello Js user,${this.name}`);
}

//using constructor method

const student = new Object()


//object.assign basically assigns the rest if the source objects to the first argument object
const target = {a:1, b:2};
const source = {b:4, c:6};

const returntar = Object.assign(target, source);

console.log(returntar);

//we can also have array of objects


//function declaration and calling
function addTwoNumbers (number1, number2){
    console.log(number1+number2);
}

function addTwoNumbers2 (number1, number2,username){
    let result = number1+number2;
    return result + `${username}`;
}

//the below statement will show undefined cus the function doesnt return a value
const result = addTwoNumbers(3,4);
console.log("result:" + result);
//this will work instead
const result2 = addTwoNumbers2(3,4,"akansha");
console.log("result:" + result2);

//function with array as a parameter

function calculateCarPrice(...num1){
    return num1[0]+num1[1]+num1[2];
}

console.log(calculateCarPrice(200,400,500));

//A variable has global scope if it is declared outside any function or block. It is accessible anywhere in your JavaScript program.

//A variable has local scope if it's declared inside a function (or block, in the case of let and const). It is only accessible within that function or block.

//scope chaining - when var is not found in the provided scope then js looks outside the scope in search of the var towards the parent scope.

//Hoisting

//variable hoisting

console.log(a);
var a = 5;
// will return undefined but js is interpreting it as var a; then print statement
//doesnt work with let and const gives error


//function hoisting

greet(); 
//function declaration are fully hoisted and thus can be called before defining
function greet() {
    console.log("Hello");
}


//will give error and hence function expression are not fully hoisted
sayHi(); 

const sayHi = () => {
    console.log("Hi");
};


//object function

const employee = {
    username: "aka",
    emailid:"aka@gmail.com",
    

    welcomeMess: function() {
      console.log(`${this.username} welcome to the world`);  
    }
}

user.welcomeMess();


//arrow functions

const addTwo = (num1,num2) =>  num1 + num2;

const multiply = (a, b) => {
    const result = a * b;
    return result;
};


