"use strict"; //treat all js code as new version not req all the time 

const accountEmail = "akansha@gmail.com";
const accPassword =  "1234";


//better not to use var because then there would be a scope issue
//use let and const
const correctEmail = "akansha@gmail.com";
const correctPassword = "1234";


// Check email and password
if (accountEmail === correctEmail && accPassword === correctPassword) {
    console.log("Login successful!");
} else if (accountEmail !== correctEmail && accPassword !== correctPassword) {
    console.log("Both email and password are incorrect.");
} else if (accountEmail !== correctEmail) {
    console.log("Email is incorrect.");
} else if (accPassword !== correctPassword) {
    console.log("Password is incorrect.");
}

//diff data types
//number,bigint,string,boolean,object
//null - standalone value(represents empty value) , undefined => (no value assignedd)
//symbol -> unique

console.log(typeof correctPassword)


let score = "12ab"
console.log(score)
let value = Number(score)
console.log(value)

//NaN(not a number) another type when strings converted fron string to number
//"",0,false,-0,BigInt 0n,null,undefined,NaN -> falsy values

let str1  = "hello"
let str2 = "world!"

let str3 = str1 + str2;
console.log(str3);

//when it comes to adding number and string they get converted to string after all numbers are added which precede the string

let num1,num2,num3;
num1=num2=num3=3+3;

//prefix returns value after incrementing
//postfix returns value before incrementing

 //array declaration:
 const myarray =[1,4,5,5]
 console.log(myarray)
 //works for all dataypes

 //another way to declare
 const  myarr2 = new Array(1,2,3,4,5);

myarr2.push(7);
myarr2.push(9);
myarr2.pop();
myarr2.unshift(10); //appends value at start
//shift removes 1st element

//slice will not include the last range and dosent modify the og array
//splice will include last ele and modifies the og array by removing the portion mentioned

//for while and do while loops to iterate over elements

