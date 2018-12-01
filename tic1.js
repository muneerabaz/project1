var rocket = document.querySelector("#rocket");
console.log(rocket);

//so the rocket starts from the very beginning of the page
var position = 0 ;
function moveRight(){
  //the new position adds 2 to the current position
    var newposition = position +2;
    position = newposition;

    rocket.style.left = position + 'px';
}
var moverRcket = setInterval(moveRight ,10);
var rocketHeight = rocket.style.height ;
function trans(){
  degree+=20;
  rocket;
} 
