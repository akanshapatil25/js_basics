//Q.1 undeclared var
try {
    console.log(myVar); // myVar is not declared
} catch (error) {
    console.error("Reference error caught:", error.message);
}

//Q.2 Type error
try {
    let x;
    x.toUpperCase(); // Cannot call toUpperCase on undefined
} catch (error) {
    console.error("Type error caught:", error.message);
}

//Q.3 Syntax error
try {
    eval("let a = "); 
} catch (error) {
    console.error("Syntax error caught:", error.message);
}

//Q.4 Range error
try {
    let arr = new Array(-1); // Invalid length
} catch (error) {
    console.error("Range Error caught:", error.message);
}

 //Q.5 custom error
function checkage(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or older.");
    }
    return "Access granted";
}

try {
    console.log(checkage(16));
} catch (error) {
    console.error("Custom Error caught:", error.message);
}

//Q.6 logical error

try {
    let result = 10 / 0;
    if (!isFinite(result)) {
        throw new Error("divide by zero is not possible");
    }
    console.log(result);
} catch (error) {
    console.error("Logical Error caught:", error.message);
}

//Q.7 null error

try {
    let person = null;
    console.log(person.name); 
} catch (error) {
    console.error("Null access error caught:", error.message);
}

//Q.8 use of finally
try {
    throw new Error("Something went wrong!");
} catch (error) {
    console.error("Caught error:", error.message);
} finally {
    console.log("This will always run");
}



//Q.9 async await and error handling


function divideNumbers(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Cannot divide by zero!");
    } else {
      resolve(a / b);
    }
  });
}


async function handleDivision() {
  try {
    const result = await divideNumbers(10, 0); // will cause an error
    console.log("Result:", result);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

handleDivision();
