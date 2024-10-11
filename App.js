const correctPassword = "denzhabon123";

let userPassword;


do 
    userPassword = prompt("Please enter your password:");
 while (userPassword !== correctPassword);

console.log("Access granted! Correct password entered.");
