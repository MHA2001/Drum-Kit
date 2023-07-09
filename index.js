var drum_list = document.querySelectorAll(".drum");

function makeSound(key){
    switch(key){
        case "w":
            audio = new Audio("sounds\\tom-1.mp3");
            audio.play();

        break;
        case "a":
            audio = new Audio("sounds\\tom-2.mp3");
            audio.play();

        break;
        case "s":
            audio = new Audio("sounds\\tom-3.mp3");
            audio.play();

        break;
        case "d":
            audio = new Audio("sounds\\tom-4.mp3");
            audio.play();

        break;
        case "j":
            audio = new Audio("sounds\\snare.mp3");
            audio.play();

        break;
        case "k":
            audio = new Audio("sounds\\crash.mp3");
            audio.play();

        break;
        case "l":
            audio = new Audio("sounds\\kick-bass.mp3");
            audio.play();

        break;

        default:console.log(key);
    }
}


for (var i=0; i<drum_list.length; i++){
    drum_list[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


document,addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentKye){
   var activeButton = document.querySelector("."+currentKye);
   activeButton.classList.add("pressed");
   setTimeout( ()=>{activeButton.classList.remove("pressed")}, 100);
   
}