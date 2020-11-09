  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //



//Declare variables for each body part
var head = document.getElementById("head");
var body = document.getElementById("body");
var shoes = document.getElementById("shoes");

//Write variable to set which image each body part is on
var headIndex = 0;
var bodyIndex = 0;
var shoesIndex = 0;
var bodyArray = 0;

//Write function which asserts keystroke of the arrows and assigns it to a change of clothes function

document.onkeydown = checkKey;


function checkKey(e) {

  e = e;
    if (e.keyCode == '39') {
      changeClothesOnTheRight()
    }
    else if (e.keyCode == '37') {
      changeClothesOnTheLeft()
    }
    else if (e.keyCode == '38') {
      moveToUpperBody()
    }
    else if (e.keyCode == '40') {
      moveToLowerBody()
    }
  }

  //write function to change clothes with the RightArrow for each part of the body.

  function changeClothesOnTheRight() {

    if (bodyArray == 0) {
      
      if (headIndex > 0) {
        headIndex--;
        head.src = "./images/head" + headIndex + ".png"
      } 
      
    } else if (bodyArray == 1) {

      if (bodyIndex > 0) {
        bodyIndex--;
        body.src = "./images/body" + bodyIndex + ".png"
      }
    
    } else (bodyArray == 2) 

      if (shoesIndex > 0) {
        shoesIndex--;
        shoes.src = "./images/shoes" + shoesIndex + ".png"
      }
    }  


  //write function to change clothes with the LeftArrow for each part of the body.
  
  function changeClothesOnTheLeft() {
  
    if (bodyArray == 0) {
      
        if (headIndex < 5){
        headIndex++;
        head.src = "./images/head" + headIndex + ".png"
      } 
    
    } else if (bodyArray == 1) {
    
        if (bodyIndex < 5) {
        bodyIndex++;
        body.src = "./images/body" + bodyIndex + ".png"
      }
  
    } else (bodyArray == 2) 

        if (shoesIndex < 5) {
        shoesIndex++;
        shoes.src = "./images/shoes" + shoesIndex + ".png"
      }
    }  
    

//write function moveToUpperBody() to be able to shift from one body part to the other using the UpArrow
function moveToUpperBody() {
  if (bodyArray > 0)
    bodyArray--
}

//write function moveToLowerBody() to be able to shift from one body part to the other using the DownArrow
function moveToLowerBody() {
  if (bodyArray < 2)
    bodyArray++
}

