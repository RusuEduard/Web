$(document).ready(function () {
  $(".table2 .th").click(function(){
    if(!running){
      game( $(this).find("p") );
    }
  });
  $(".table1 .th").click(function(){
    if(!running){
      game( $(this).find("p") );
    }
  });
});

var contor = 0;
var value;
var running = false;

function game(element){
  running = true;
  element.fadeIn();
  if(contor == 0){
    value = element;
    contor += 1;
    running = false;
  }
  else{
    if(element.html() == value.html()){
      contor = 0;
      running = false;
    }
    else{
      $(element).fadeOut(1000);
      value.fadeOut(1500, function(){
        running = false;
      });
      contor = 0;
    }
  }
}