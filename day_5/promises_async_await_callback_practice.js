

//1. casic promise that resolves

let greet = new Promise((resolve, reject) => {
  resolve("Hello!");
});

greet.then((msg) => console.log(msg)); 


//2. Convert Callback to Promise

function sayHi(callback) {
  console.log("Hi");
  callback();
}

sayHi(() => {
  console.log("Bye");
});

// Converted:
async function sayHiAsync() {
  console.log("Hi");
  console.log("Bye");
}

sayHiAsync();



//3. Simulate Async Task Using setTimeout

function delaytask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Finished waiting!");
    }, 1000);
  });
}

delaytask().then(console.log);



//4. Convert setTimeout Callback to Async/Await
function wait(callback) {
  setTimeout(() => {
    callback("Done waiting!");
  }, 1000);
}

// Async version:
async function waitAsync() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Done waiting!");
}

waitAsync();


//5. Add Two Numbers with a Promise

function add(a, b) {
  return new Promise((resolve) => {
    resolve(a + b);
  });
}

add(2, 3).then(result => console.log("Result:", result));



//6. rejects if Number is Odd

function checkEven(n) {
  return new Promise((resolve, reject) => {
    if (n % 2 === 0) resolve("Even number");
    else reject("Odd number");
  });
}

checkEven(5)
  .then(console.log)
  .catch(console.error);

//7.Multiplies after a delay

function multiplyAsync(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a * b);
    }, 1000);
  });
}

async function runMult() {
  let result = await multiplyAsync(3, 4);
  console.log("Result is:", result);
}

runMult();

//nested  callbacks 
function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 done");
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 done");
    callback();
  }, 1000);
}

// async version:
async function runTasks() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Task 1 done");
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Task 2 done");
}

runTasks();
