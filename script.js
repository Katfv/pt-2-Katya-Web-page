function howMany(){
  var name = prompt("What is your name?");
  var number = prompt ("Please enter a number between 1-10");
  var celeb = prompt ("What is your favorite celebrity?");
  var place = prompt ("What is yor favorite location in the world?");

  var result = "Congratulations " + name + ", in " + number + " years you will meet " + celeb + " in " + place;

 var image = new Image();
  image.src = "snake.png";
  image.width = "100";
  image.height = "200";

  document.getElementById("resultImage").appendChild(image)

  document.getElementById ("resultText").innerHTML = result;

}



function display(){
var text = "This is the text that I want to display when the button is clicked";

document.getElementById("displayText").innerHTML = text;


}

function displayAlert(){
  alert("This is the text I want to display....");
}