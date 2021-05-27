$(document).ready(function () {
  get_plecari();

  $('#plecare').change(function(){
    var $plecare = $(this).find('option:selected')
    $('#sosire').empty()
    if($plecare.val() != 'initial')
      get_sosiri($plecare.text());
  });
});

function get_plecari(){
  var $select_pelcari = $('#plecare')
  $.ajax({
    data:{
      action: 'get_plecari'
    },
    type: 'post',
    url: 'p1.php',
    success:function(res){
      var list = res.split(',');
      $.each(list, function(index, value){
        if(value != ''){
          var option = $('<option></option>').text(value)
          $select_pelcari.append(option)
        } 
      });
    }
  });
}

function get_sosiri(oras){
  var $select_sosiri = $('#sosire')
  $.ajax({
    data: {
      action: 'get_sosiri',
      oras: oras
    },
    type: 'post',
    url: 'p1.php',
    success:function(res){
      var list = res.split(',');
      $.each(list, function(index, value){
        if(value != ''){
          var option = $('<option></option>').text(value)
          $select_sosiri.append(option)
        }
      })
    }
  })
}