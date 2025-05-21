const accountEmail = "akansha@gmail.com";
const accPassword =  "1234";



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
