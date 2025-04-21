// Changes text content dynamically.

document.getElementById("changeTextButton").addEventListener("click", function() {
    document.getElementById("textToChange").innerText = "Text has been changed!";
});



// Modifies CSS styles via JavaScript.
document.getElementById("changeStyleButton").addEventListener("click", function() {
    document.getElementById("styleMe").style.color = "red";
    document.getElementById("styleMe").style.fontSize = "20px";
});

// Adds or removes an element when a button is clicked.
document.getElementById("addElementButton").addEventListener("click", function() {
    let newElement = document.createElement("p");
    newElement.innerText = "This is a new paragraph!";
    newElement.id = "newParagraph";
    document.getElementById("addElementHere").appendChild(newElement);
});

document.getElementById("removeElementButton").addEventListener("click", function() {
    let elementToRemove = document.getElementById("newParagraph");
    if (elementToRemove) {
        elementToRemove.remove();
    }
});