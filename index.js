for (var i = 0; i <document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        // here we assign the value of the button which is clicked...this ks for click
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });
}
document.addEventListener("keydown",function(){
    // returns the key which is pressed where event is the value and wan to know the key...this is for key when pressed
    makesound(event.key);
    buttonAnimation(event.key);

});
// functin  is cmade called made sounsd and it will produce sound whether the key ispressed or clicked
function makesound(key){
    switch (key) {
        case "w":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "s":
            var snare =new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case "d":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "j":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "k":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
        case "l":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
    
        default:
            console.log(key);
        break;
    }
}
function buttonAnimation(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
