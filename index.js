// Your code here 
function greet() {
    // Prompt user for name
    var userName = prompt("What is your name?");
    // Greet the user with their name
    alert("Hello, " + userName);
  
    // Prompt user for age
    var userAge = prompt("How old are you?");
    // Convert user's answer to a number using parseInt
    userAge = parseInt(userAge);
  
    // Confirm if the user has had a birthday this year
    var hadBirthday = confirm("Have you had a birthday yet this year?");
  
    // Get the current year
    var currentYear = new Date().getFullYear();
  
    // Calculate the birth year based on whether the user had a birthday this year
    var birthYear = hadBirthday ? currentYear - userAge : currentYear - (userAge + 1);
  
    // Display the birth year to the user
    alert("You were born in the year " + birthYear);
  }
  