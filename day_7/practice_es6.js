
//Q.1 Replace var with let or const
// Old code
var name1 = "aka";
var age = 25;

// ES6 version
const name2 = "aka"; // use const when value doesn't change
let age2 = 25;          // use let if value may change later

//Q.2 Use Template Literals
const name = "mru";
const city1 = "Delhi";

// Without template literals
console.log("Hello, my name is " + name + " and I live in " + city1);

// With template literals
console.log(`Hello, my name is ${name} and I live in ${city1}`);


//Q.3 Array deconstruction
const colors = ["red", "green", "blue"];

// Old way
const color1 = colors[0];
const color2 = colors[1];

// ES6
const [color3, color4] = colors;
console.log(color1, color2); 



//Q.4 Object Destructuring
const person = {
  name: "Sarah",
  age: 30,
  city: "Mumbai"
};

const { name3, city } = person;
console.log(name, city); // Sarah Mumbai

//Q.5 Default Parameters

function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greet();         
greet("Rahul"); 


//Q.6 arrow functions


function add1(a, b) {
  return a + b;
}
console.log(add1(3, 5)); 
// Arrow function
const add = (a, b) => a + b;
console.log(add(3, 5)); 



//Q.7 Use for...of Loop
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}


//Q.8 Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const combined = [...arr1, ...arr2];
console.log(combined); 

//Q.9 maps and set
let myMap = new Map();

myMap.set("name", "aka");
myMap.set("age", 25);
console.log(myMap.get("name"));  
console.log(myMap.has("age"));   
console.log(myMap.size);       

myMap.delete("age");
console.log(myMap.has("age"));  

myMap.clear(); // clears all entries


//Q.10 using classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Create object
let p1 = new Person("aka", 22);
p1.greet(); 
