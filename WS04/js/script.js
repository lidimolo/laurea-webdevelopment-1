const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
  taskOneHeading.textContent = "Muokattu otsikko!";
});
const changeStyleButton = document.querySelector ("#changeStyleButton");

changeStyleButton.addEventListener ("click", function () {
    taskOneHeading.classList.toggle ("highlight");
});

const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector ("#animalText");

changeTextButton.addEventListener ("click", function (){
    animalText.textContent = "Many frogs can jump 20 times their own body length."
})

//bouns




//Tehtävä 2

const animalContent = document.querySelector ("#animalContent");
const animalHeading = document.createElement("h3");
animalHeading.textContent = "Päivän eläin";

const dayAnimalText = document.createElement("p");
dayAnimalText.textContent = "Sammakot ovat yleensä 7,5–8 senttimetriä pitkiä ja painavat keskimäärin 23 grammaa.";

const dayAnimalImage = document.createElement("img");
dayAnimalImage.src = "images/sammakko.jpg";
dayAnimalImage.alt = "Sammakko istuu";

animalHeading.classList.add ("animal-heading");

animalContent.append (animalHeading, dayAnimalText, dayAnimalImage);

const hideAnimalButton = document.querySelector ("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

hideAnimalButton.addEventListener ("click", function (){
    animalContent.style.display = "none";
});

showAnimalButton.addEventListener ("click", function () {
    animalContent.style.display = "block"
});


//Tehtävä3

const animalSelect = document.querySelector ("#animalSelect");
const animalName = document.querySelector ("#animalName");
const animalImage = document.querySelector ("#animalImage");
const animalDescription = document.querySelector ("#animalDescription");



animalSelect.addEventListener ("change", function () {
    const selectedAnimal = animalSelect.value;
})
