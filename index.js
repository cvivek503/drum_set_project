

var drumButtonsLength = document.querySelectorAll(".drum").length;
for (let i = 0; i < drumButtonsLength; ++i) {

    document.querySelectorAll("button")[i].addEventListener("click", action);
}

function action() {
    var currentButton = this.innerHTML;
    makeSound(currentButton);
    buttonAnimation(currentButton);






}
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);






});
function buttonAnimation(key) {
    var btn = document.querySelector("." + key);
    var letter = btn.innerHTML;
    btn.classList.add("pressed");
    btn.innerHTML = "";
    setTimeout(function () {
        btn.classList.remove("pressed");
        btn.innerHTML = letter;
    }, 400);


}
function makeSound(key) {


    switch (key) {
        case "w":
            var aud = new Audio('sounds/crash.mp3');
            aud.play();
            break;
        case "a":
            var aud = new Audio('sounds/kick-bass.mp3');
            aud.play();
            break;
        case "s":
            var aud = new Audio('sounds/snare.mp3');
            aud.play();
            break;
        case "d":
            var aud = new Audio('sounds/tom-1.mp3');
            aud.play();
            break;
        case "j":
            var aud = new Audio('sounds/tom-2.mp3');
            aud.play();
            break;
        case "k":
            var aud = new Audio('sounds/tom-3.mp3');
            aud.play();
            break;
        case "l":
            var aud = new Audio('sounds/tom-4.mp3');
            aud.play();
            break;
        default: console.log("wrong");
            break;
    }




}