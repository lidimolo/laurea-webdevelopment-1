const animalButton = document.querySelector("#animalButton");

animalButton.addEventListener("click", function() {
    alert (" Many frogs can jump 20 times their own body length.")
});

const animalTitle = document.querySelector("#animalTitle");

animalTitle.addEventListener("click", function() {
    animalTitle.textContent = "My favorite animal is the Frog"
    animalTitle.style.color = "pink"
});

const animalImage = document.querySelector("img");

animalImage.addEventListener("mouseover", function () {
    animalImage.style.border = "5px solid pink";
    console.log ("Mouse is over the image!");
})

const animalInput = document.querySelector("#animalInput");
const animalOutput = document.querySelector("#animalOutput");

animalInput.addEventListener ("input", function (){
    animalOutput.textContent = "You typed: " + animalInput.value;
})

animalInput.addEventListener("focus", function (){
    console.log("Input focused");
})

animalInput.addEventListener("blur", function (){
    console.log ("Input lost focus");
})

const animalForm = document.querySelector("#animalForm");

animalForm.addEventListener ("submit", function (event){
    event.preventDefault();
    animalOutput.textContent = "Your favorite animal is: " + animalInput.value;
    console.log("Form submitted with animal: " + animalInput.value); 
})

document.addEventListener("keydown", function (event){
    console.log("Key pressed: " + event.key);
    console.log("Key code: " + event.code);
})