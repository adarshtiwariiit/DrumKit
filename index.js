const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(){
    playsound(this.innerHTML);
    pressed(this.innerHTML);

  });
}
document.addEventListener("keypress",function(event){
  
  playsound(event.key);
  pressed(event.key);
})

function playsound(c){
  switch (c){
    case "w" :
      var a  =new Audio('sounds/tom1.mp3');
      a.play();
      
      break;
      case 'a' :
      var a  =new Audio('sounds/tom2.mp3');
      a.play();
      break;
      case 's' :
      var a  =new Audio('sounds/tom3.mp3');
      a.play();
      break;
      case 'd' :
      var a  =new Audio('sounds/tom4.mp3');
      a.play();
      break;
      case 'j' :
      var a  =new Audio('sounds/snare.mp3');
      a.play();
      break;
      case 'k' :
      var a  =new Audio('sounds/crash.mp3');
      a.play();
      break;
      case 'l' :
      var a  =new Audio('sounds/kick.mp3');
      a.play();
      break;
     

  }

}
function pressed(c){
 document.querySelector("."+c).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+c).classList.remove("pressed");;
  },200);
  
  
}


