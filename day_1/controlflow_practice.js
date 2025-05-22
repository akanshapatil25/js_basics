//Q1 print array element

let arr = new Array(1,2,3,4,5,5)

for(let i=0;i<arr.length;i++) {
    console.log(arr[i]);
}

console.log("----------------------------------------------------");
//Q2 printing even number btw 1 and 100

max=0;
console.log("printing even number:")
while(max != 100) {
    if(max%2==0) {
        console.log(max );
    }
    max++;
}

console.log("----------------------------------------------------");
//Q3 finding factorial of number

let num = 5;
let factorial = 1;
for(let i = 1; i <= num; i++ ){
    factorial = factorial * i;
}

console.log(factorial)

console.log("----------------------------------------------------");
//Q4 printing vowels in  a string

let str = new String("alphabet");

console.log("printing vowels:");
for(let i=0;i<=str.length;i++){
    if(str.charAt(i) =="a" || str.charAt(i) =="e" || str.charAt(i) =="i" ||str.charAt(i) =="o" ||str.charAt(i) =="u"  ){
        console.log(str.charAt(i));
    }
}

console.log("----------------------------------------------------");

//Q5 printing sum of first n natural numbers

let n = 10;
let sum = 0;
for(let i = 0; i <= n; i++){
    sum+= i;
}
console.log("printing sum of all natural numbers from 1 to 10:  " + sum);

console.log("----------------------------------------------------");
//Q6 pattern print
/* 
*
**
***
****
*/
console.log("printing the pattern: ")
for(let i= 1; i <= 4 ; i++){
    for(let j=1;j <= i; j++){
       process.stdout.write("* ");
       //if printing in same row use the above command
    }
    console.log();
}

console.log("----------------------------------------------------");
//Q7 check the grade of the student based on marks

let stdmarks = 100;

if(stdmarks >= 90){
    console.log("student grade is A for " + stdmarks)
} else if(stdmarks >= 80){
    console.log("student grade is B for " + stdmarks)
} else if(stdmarks >= 70){
    console.log("student grade is C for " + stdmarks)
}  else if(stdmarks >= 60){
    console.log("student grade is D for " + stdmarks)
} else {
    console.log("student has failed");
}
console.log("----------------------------------------------------");
//Q8 simple calculator

let num1 = 30;
let num2 = 4;
let opr = '+';

if (opr === '+') {
    console.log("addition of the numbers");
    console.log(num1 + num2);
} else if (opr === '-') {
     console.log("subtraction of the numbers");
    console.log(num1 - num2);
} else if (opr === '*') {
     console.log("multiplication of the numbers");
    console.log(num1 * num2);
} else if (opr === '/') {
     console.log("division of the numbers");
    console.log(num1 / num2);
} else {
    console.log("Invalid operator");
}
console.log("----------------------------------------------------");

//Q9 menu-driver program for login and signup



let choice = 2;  

console.log("choose between login , signup and exit");
console.log("1. Login");
console.log("2. Signup");
console.log("3. Exit");

switch (choice) {
    case 1:
        console.log("You selected: Login");
        
        break;

    case 2:
        console.log("You selected: Signup");
        
        break;

    case 3:
        console.log("Exiting program. Goodbye!");
        break;

    default:
        console.log("Invalid choice. Please select 1, 2, or 3.");
}
console.log("----------------------------------------------------");
//Q10 ispalindrome checking

let st = new String("hello");
let isPalindrome = true;

for (let i = 0, j = n - 1; i < j; i++, j--) {
    if (st[i] !== st[j]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log(st + " is a palindrome")
} else {
    console.log(st + " is not a palindrome");
}

console.log("----------------------------------------------------");