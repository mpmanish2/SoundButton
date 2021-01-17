var num=document.querySelectorAll(".drum").length;

 for (var i=0; i<num; i++) {
 document.querySelectorAll(".drum")[i].addEventListener("click",function () {
  var ch=this.innerHTML;
  makeSound(ch);
  but(ch);
 });
}

document.addEventListener("keypress", function(event){
  makeSound(event.key);
  but(event.key);
});

function makeSound(key){

switch (key) {

  case "s":
    var s1= new Audio("sound/Libaas.mp3");
    s1.play();
    break;
   case "g":
      var s2= new Audio("sound/Nit Khair Manga.mp3");
      s2.play();
      break;
   case "a":
        var s3= new Audio("sound/Temporary Pyar.mp3");
        s3.play();
        break;
   case "d":
          var s4= new Audio("sound/Oscar.mp3");
          s4.play();
          break;
    case "f":
            var s5= new Audio("sound/Laung Laachi.mp3");
            s5.play();
            break;
    case "h":
              var s6= new Audio("sound/Fashion.mp3");
              s6.play();
              break;
    case "j":
                var s7= new Audio("sound/Gani.mp3");
                s7.play();
                break;
                case "k":
                  var s8= new Audio("sound/Kale Je Libaas Di.mp3");
                  s8.play();
                  break;

  default:console.log();

}
}
function but(currentkey){
  var activeButton=document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },200);
}
