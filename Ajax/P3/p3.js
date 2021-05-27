var old_value = ''
var old_id = ''

$(document).ready(function () {
  var $nume =  $('form #nume')
  var $submit = $('form .btn')

  init_ids()

  $nume.attr('disabled', 'true')
  $submit.attr('disabled', 'true')

  $('#select').change(function(){
    if(!$submit.prop('disabled')){
      if(confirm("Ai modificat datele! Doresti sa le salvezi?")){
        save($nume.val(), old_id)
      }
    }
    $submit.attr('disabled', 'true')
    var $id = $(this).find('option:selected')
    if($id.val() != 'default'){
      get_nume($id.text())
      old_id = $id.text()
      console.log(old_value)
      $nume.removeAttr('disabled')
    }
    else{
      $submit.attr('disabled', 'true')
      $nume.val('')
      $nume.attr('disabled', 'true')
    }
  })

  $nume.keyup(function (e) { 
    e.preventDefault()
    if($nume.val() != old_value){
      $submit.removeAttr('disabled')
    }
    else{
      $submit.attr('disabled', 'true')
    }
  });

  $submit.click(function (e) { 
    e.preventDefault()
    save($nume.val(), old_id)
    $submit.attr('disabled', 'true')
  });

});

function save(name, id){
  old_value = name
  $.ajax({
    data:{
      nume: name,
      id: id,
      action: 'save'
    },
    type: 'post',
    url: 'p3.php',
    success:function (param) {
      alert('Numele a fost salvat!')
    }
  })
}

function get_nume(id){
  $.ajax({
    data:{
      id: id,
      action: 'get_nume'
    },
    type: 'post',
    url: 'p3.php',
    success: function(result){
      var $input = $('form #nume')
      old_value = result
      $input.val(result)
    }
  })
}

function init_ids(){
  $.ajax({
    data:{ 
      action: 'get_ids'
    },
    type: 'post',
    url: 'p3.php',
    success: function(result){
      var $select = $('#select')
      var list = result.split(',')
      $.each(list, function(index, value){
        if(value != '' && value != '\r\n'){
          var $option = $('<option></option>').text(value)
          $select.append($option)
        }
      })
    }
  })
}