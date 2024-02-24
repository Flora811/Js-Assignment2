// constants for query selector
var id = document.querySelector("#myStudentId");
var customNumberInput = document.querySelector("#customNumber");
var custColorButton = document.querySelector(".custColor");
var randColorButton = document.querySelector(".randColor");
var imageSelect = document.querySelector("#imageSelect");
var images = document.querySelector("#images");

// function to change bg color from user input and add student id
function changeCustomColor() {
    var inputValue = parseInt(customNumberInput.value);
    if (inputValue < 0 || inputValue > 100) {
        document.body.style.backgroundColor = "red";
    } else if (inputValue >= 0 && inputValue <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (inputValue > 20 && inputValue <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (inputValue > 40 && inputValue <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (inputValue > 60 && inputValue <= 80) {
        document.body.style.backgroundColor = "purple";
    } else if (inputValue > 80 && inputValue <= 100) {
        document.body.style.backgroundColor = "yellow";
    }
    id.textContent = "Student ID: 200534094" ;
}

// function to change bg color from random no.
function changeRandomColor() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
            customNumberInput.value = randomNumber;
            changeCustomColor();
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array
    var imageNames = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]; // replace with actual image names
            for (var i = 0; i < imageNames.length; i++) {
                var option = document.createElement("option");
                option.value = imageNames[i];
                option.textContent = imageNames[i];
                imageSelect.appendChild(option);
            } 
}

// function to change image
function changeImage() {
    var selectedImage = imageSelect.value;
            images.src = "./img/" + selectedImage;
}

// event listeners for on click event of buttons and select
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);
addList();

// event listeners for on change event of select
imageSelect.addEventListener("change", changeImage);