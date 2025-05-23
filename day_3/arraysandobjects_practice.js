//Q1 using map return square numbers

const num = [1,2,3,4,45,7]
let num2 = num.map(n => n*n);
console.log(num2);

//Q2 using filter ,remove even elements

const num3 = [1,2,3,4,45,6,6,7,7]
let num4 = num3.filter(n => n%2 == 0);
console.log(num4)


//Q3 use map with objects array
const people = [{ name: "Ak", age: 25 }, { name: "mru", age: 22 }];
const names = people.map(person => person.name);
console.log(names); 

//Q4 chained methods

const doubledevenprod = [1, 2, 3, 4, 5]
  .filter(n => n % 2 === 0)//filter even
  .map(n => n * 2)
console.log(doubledevenprod); 

//Q5 objects accesing and property

const book = {
  title: "lost symbol",
  author: {
    name: "dan brown",
    birthYear: 1956
  },
  publisher: {
  name: "Penguin",
    location: "NYC"
  }
};

console.log(book.publisher.name);
book.author.birthYear= 1478;
console.log(book.author);

//Q6
const students = [
  { name: "A", marks: [85, 100, 90] },
  { name: "B", marks: [60, 65, 70] }
];

const high = students.filter(student => {
  let sum = 0;
  for(let mark of student.marks ){
    sum+=mark;
  }
  let avg = sum/student.marks.length;
  return avg>90;
});

console.log(high); 


