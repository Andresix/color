var h1 = document.querySelector("h1")
var colors = variableColors(6)
var square = document.querySelectorAll(".square")
var Roygbiv = document.getElementById("Roygbiv")
var selectedColor = selectColor();
var statusDisplay = document.getElementById("status")
var newButton = document.querySelector("#New")
newButton.addEventListener("click", function() {
    colors = variableColors(6);
    selectedColor = selectColor();
    Roygbiv.textContent = selectedColor;
    for(var i = 0; i < square.length; i++) {
        square[i].style.background = colors[i];
    }
    h1.style.background = "indianred";
})

Roygbiv.textContent = selectedColor;
for(var i = 0; i < square.length; i++) {
    square[i].style.background = colors[i];
    square[i].addEventListener("click", function() {
        var clicked = this.style.background;
        console.log(clicked, selectedColor);
         if(clicked === selectedColor){
            statusDisplay.textContent = "correct";
            squareColor(clicked);
            h1.style.background = clicked;
            newButton.textContent = "play again";
        }
        else {
            this.style.background = "#232323";
            statusDisplay.textContent = "Try again";
        }
    })
}
function squareColor(color) {
    for(var i = 0; i < square.length; i++) {
        square[i].style.background = color;
    }
}
function selectColor() {
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}
function variableColors(num) {
    var arr = []
    for(var i = 0; i < num; i++) {
       arr.push(randomColors())
    }
    return arr;
}
function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
   return "rgb(" + r + ", "  +  g + ", " + b + ")";
}