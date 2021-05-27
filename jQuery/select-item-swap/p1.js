$(document).ready(function(){

  $("#lista1").click(function(){
      $("#lista1 option:selected").remove()
      .appendTo("#lista2");
      $("#lista2").val([]);
  });

  $("#lista2").click(function(){
    $("#lista2 option:selected").remove()
    .appendTo("#lista1");
    $("#lista1").val([]);
  });

});