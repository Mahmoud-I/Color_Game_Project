var numSquares = 6;
var colors = randomColorsPick(numSquares)
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor()
var colorDisplay = document.querySelector(".color");
colorDisplay.textContent = pickedColor;
var tryAgain = document.querySelector(".tryAgain");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector(".reset")
var hardButton = document.querySelector(".hardBtn");
var easyButton = document.querySelector(".easyBtn");


hardButton.addEventListener("click", function(){
 hardButton.classList.add("selected");
 easyButton.classList.remove("selected");
 numSquares = 6;
 colors = randomColorsPick(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block"
    }
})

easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    colors = randomColorsPick(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none"
        }
        
    }
})

resetButton.addEventListener("click", function(){
    colors = randomColorsPick(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue"
    tryAgain.textContent = ""
    this.textContent = "New Colors"
})
for(var i = 0; i <squares.length; i++) {
    //color pick
    squares[i].style.backgroundColor = colors[i];
    // click detection
    squares[i].addEventListener("click", function(){
        var clickedcolor = this.style.backgroundColor;
        console.log(clickedcolor, pickedColor)
        if(clickedcolor === pickedColor){
            correctColor(clickedcolor)
            tryAgain.textContent = "Correct!!!"
            h1.style.backgroundColor = clickedcolor;
            resetButton.textContent = "Play Again?"
        } else {
            this.style.backgroundColor = "#232323"
            tryAgain.textContent = "Try Again!!"
        }
    })
}

function correctColor(color) {
    for(var i = 0; i<squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
   var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function randomColorsPick(num) {
    var randomColors = [];
    for(var i = 0; i <num; i++){
       randomColors.push(colorsRandom())
    }
    return randomColors
}

function colorsRandom(){
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return  "rgb(" + r + ", " + g + ", " + b + ")"
}
