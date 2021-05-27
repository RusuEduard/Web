var maxpages
var current = 0

$(document).ready(function () {
  get_max_pages()

  $('#prev').attr('disabled','true')

  get_page(current)

  $('#next').click(function(){
    $('tbody').empty()
    $('#prev').removeAttr('disabled')
    current = current + 1
    if(current == maxpages - 1)
      $('#next').attr('disabled','true')
    get_page(current)
  })

  $('#prev').click(function(){
    $('tbody').empty()
    $('#next').removeAttr('disabled','false')
    current = current - 1
    if(current == 0)
      $('#prev').attr('disabled','true')
    get_page(current)
  })
});

function get_max_pages(){
  var maxpages = 0
  $.ajax({
    data:{
      action: 'max_pages'
    },
    type: 'post',
    url: 'p2.php',
    success:function(data){
      maxpages = parseInt(data)
      process(maxpages)
    }
  })
}

function process(data){
  if(data % 3 == 0)
    maxpages = parseInt(data/3)
  else
    maxpages=parseInt(data/3) + 1
}

function get_page(page_nr){
  var $tbody = $('tbody')
  $.ajax({
    data:{
      action: 'get_page',
      page: page_nr
    },
    type: 'post',
    url: 'p2.php',
    success: function (res) {
      // console.log(res)
      var list = res.split(';')
      $.each(list, function(index, value){
        if(value != '' && value != '\r\n'){
          var $row = $('<tr></tr>')
          var elems = value.split(',')
          $.each(elems, function(index, value){
            var $td = $('<td></td>').text(value)
            $row.append($td)
          })
          $tbody.append($row)
        }
      })
    }
  })
}