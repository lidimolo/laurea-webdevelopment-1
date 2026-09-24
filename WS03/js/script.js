const clickButton = document.querySelector("#clickButton");

clickButton.onclick = function() {
    alert("You clicked me!");
};

const tableButton = document.querySelector("#tableButton");
tableButton.onclick = showTable;

function showTable() {

const animal = "Tiger";
const habitat = "Forest";
const diet = "Carnivore";
 const tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Animal</th>
                    <th>Habitat</th>
                    <th>Diet</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>${animal}</td>
                    <td>${habitat}</td>
                    <td>${diet}</td>
                </tr>
            </tbody>
        </table>
    `;

const tableContainer = document.querySelector("#tableContainer");
 tableContainer.innerHTML = tableHTML;
}


//Exercise 2//

const title = document.querySelector ("#title");
title.addEventListener("mouseover", function (){

    console.log ("Stepped over me with a mouse!")
})


const exerciseOne = document.querySelector("#exerciseOne");

exerciseOne.addEventListener("click", function () {
     exerciseOne.textContent = "Bye bye mouse!";
    exerciseOne.style.color = "red";
})

//Exercise 3//

const feedback = document.querySelector ("#feedback");
const status = document.querySelector ("#status");

feedback.addEventListener("focus", function () {
    status.textContent = "Write your feedback ";
    feedback.style.backgroundColor = "pink";
})

feedback.addEventListener("blur", function (){
    status.textContent = "";
    feedback.style.backgroundColor ="";
})

const charcount = document.querySelector ("#charcount");

feedback.addEventListener("input", function () {
    charcount.textContent = feedback.value.length + "/200";
})

const preview = document.querySelector ("#preview");

feedback.addEventListener("input", function (){
    preview.textContent = feedback.value;

})

//Exercise 4//

const feedbackForm = document.querySelector ("#feedbackForm");

feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (feedback.value.length < 10) {
        status.textContent = "Error";
    }
    else {
        status.textContent = "Thank you for your feedback!";
        feedback.value = "";
    }

})

//Exercise 5//
const keyinfo = document.querySelector("#keyinfo");
const keybox = document.querySelector("#keybox");

document.addEventListener("keydown", function (event){

    console.log("Key pressed: " + event.key);
    console.log("Key code: " + event.code);
    console.log(event);
    keyinfo.textContent = event.key;
    keybox.textContent = event.key;
    if (event.key === "Enter") {
        keybox.style.backgroundColor = "pink";
    }
    else if (event.key === " ") {
    keybox.style.backgroundColor = "lightblue";
    } else if (event.key === "Shift") {
    keybox.style.backgroundColor = "lightgreen";
    } else if (event.key === "Control") {
    keybox.style.backgroundColor = "yellow";
    } else if (event.key === "Alt") {
    keybox.style.backgroundColor = "orange";
    } else {
    keybox.style.backgroundColor = "lightgray";
}
})



