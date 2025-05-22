// 1. sum and square of two numbers
function sum(a, b) {
  return a + b;
}

const square = function(num) {
  return num * num;
};

console.log(sum(3,4));
console.log(square(5))


// 2. Check even or odd
function isEven(n) {
  return n % 2 === 0;
}

console.log(isEven(10));

// 3. Find Maximum of Three Numbers
function maxim(a, b, c) {
  let max = a;

  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }

  return max;
}
console.log(maxim(10, 25, 7));


//4. check palindrome

const stri = "madam"; // simpler string assignment

let checkPalindrome = (string) => {
    for (let i = 0, j = string.length - 1; i < j; i++, j--) {
        if (string.charAt(i) !== string.charAt(j)) {
            console.log("Not a palindrome");
            return;
        }
    }
    console.log("Is a palindrome");
};

checkPalindrome(stri); 

//5. reverse a string

let str = "hello"

let reverse = (string) => {
    let arr = string.split("");
    for(let i = 0, j = arr.length - 1;i != j; i++,j--){
        let temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr.join("");

}

console.log(reverse(str)); 

//6. Sum of natural numbers till n
function recSum(n) {
  if (n === 0) {
    return 0;
  }
  return n + recSum(n - 1);
}

//7. Recursive Fibonacci 
function recFib(n) {
  if (n === 0){
     return 0;
  }
  if (n === 1){
     return 1;
  }
  return recFib(n - 1) + recFib(n - 2);
}

//8. is it leapyear or not?

function isleapyear(year) {
   if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    return console.log("its leap year");
   }else{
    console.log("its not a leap year");
   }
}


isleapyear(1999);

//9. find max in array

const maximum = function(arr) {
  if (arr.length === 0){
    console.log("array is empty");
  } 

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(maximum([3, 5, 7, 2, 9])); 

//10. sum of odd ele in array

function sumodds(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 !== 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumodds([1, 2, 3, 4, 10]));
