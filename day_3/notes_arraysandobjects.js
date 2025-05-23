//array
//used to store like typed objects in single variable

let fruits = ["apple","banana","orange"];

console.log(fruits.pop());
console.log(fruits.push("pomegranate"));
console.log(fruits.shift());
console.log(fruits.unshift("mango"));


let citrus = fruits.slice(1, 3);

console.log(citrus); 
console.log(fruits);

//slice() when you want to take a piece of an array without changing the og.

// splice() when you want to mutate the og array: add, remove, or replace elements.

let removed = fruits.splice(1, 2, "mango", "kiwi");

console.log(removed); // ["banana", "cherry"]
console.log(fruits);

fruits.forEach(f => console.log(f))

//	Check if array contains a value
	fruits.includes("apple");
 //check indexof element
 fruits.indexOf("banana");
 
//map transforms the array
 const upper = fruits.map(f => f.toUpperCase());
 console.log(upper);


 //objects
//stores data in key-value pairs (basically like structs but different)

 let person = {
  name: "john doe",
  age: 25,
  city:"amsterdam"
};

person.age = 20;
console.log(person);
person.city="nyc";
console.log(person);
delete person.city;//removes key
console.log(person);

for (let key in person) {
  console.log(`${key}: ${person[key]}`);//accesing has to be done`${} for key in objects
}

let user = {
  id: 102, //if 002 then js considers it as octal number and heance throws and error hence dont write 0 before any number
  profile: {
    username: "john_doe",
    email: "john@example.com"
  }
};

console.log(user.profile.email); 


//arrya of objects

let students = [
  { name: "Ak", marks: 85 },
  { name: "pra", marks: 98 }
];



students.forEach(student => {
  console.log(`${student.name} scores ${student.marks}`);
});

let classRoom = {
  teacher: "Mrs. Smith",
  students: ["Ak", "pranju", "billi"]
};

console.log(classRoom.students[1]); 
