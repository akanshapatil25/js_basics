function scopeTest() {
  if (true) {
    var varVariable = "I am var";  //this is function scopred  
    let letVariable = "I am let";  //this will be block scoped   
    console.log(letVariable);
  }

  console.log(varVariable); 
 
}

scopeTest();


let fruit = "Apple"; // global variable

function Fruit() {
  let fruit = "Banana"; // local variable
  console.log("Inside function:", fruit); //prints local
}

Fruit();
console.log("Outside function:", fruit); //prints global

//nrested function and scoping
function outer() {
  let outerVar = "I am from outer function";

  function inner() {
    console.log(outerVar); // accessing outerVar
  }

  inner(); //calling  inner func inside outer func
}

outer();
