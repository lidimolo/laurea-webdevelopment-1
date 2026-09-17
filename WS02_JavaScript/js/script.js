console.log ("Hello, World!");
const userName = "Lidiia";
const favoriteAnimal = "owl";
const userAge = "23";
console.log("My name is " + userName + " I'm " + userAge + " and my favorite animal is " + favoriteAnimal)
console.log("my favorite animal is " + favoriteAnimal)
//Display a pop-up message
alert("Tervetuloa hienoulle nettisivylleni")

//Ask user for their name
const visitorName = prompt("What is your name?")
console.log(visitorName);
console.log("Terve " + visitorName + "! Tervetuloa JavaScriptiin paariin!");

function greetUser(visitorName) { console.log("Hello " + visitorName+ "!"); }

greetUser(visitorName);

const visitorFavoriteAnimal = prompt("What is your favorite animal?");
console.log("Your favorite animal is " + visitorFavoriteAnimal);

const visitorAge = prompt ("What is your age?");
console.log(visitorAge);

if (visitorAge >= 18) { 
    console.log ("You are an adult");
} else {
    console.log("You are under 18.")
}

const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    alert("JavaScript works!");
});