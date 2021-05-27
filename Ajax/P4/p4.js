var matrix = [['-1','-1','-1'],['-1','-1','-1'],['-1','-1','-1']]

$(document).ready(function () {

  $('td').click(function (e) { 
    e.preventDefault();
    if($(this).text() == ''){
      var row = $(this).parent().index()
      var col = $(this).index()
      matrix[row][col] = 'x'
      console.log('Row: ' + row + ' col: ' + col)
      $(this).text('x')
      play(matrix)
  }
  });

});

function play(mat){
  $.ajax({
    data:{
      mat: mat
    },
    type: 'post',
    url: 'p4.php',
    success:function(data){
      console.log(data)
      if(data == 'VICTORY'){
        alert(data)
        $('td').each(function(index){
          $(this).text('')
        })
        matrix = [['-1','-1','-1'],['-1','-1','-1'],['-1','-1','-1']]
      }else{
        var list = data.split(',')
        var row = parseInt(list[0])
        var col = parseInt(list[1])
        var $tr = $('table').find('tr').eq(row)
        var $td = $tr.find('td').eq(col)
        $td.text('0');
        matrix[row][col] = '0'
        setTimeout(() =>{verify(list[2])}, 1000)
      }
    }
  })
}

function verify(value){
  if(value == 'DEFEAT'){
    alert('DEFEAT')
    $('td').each(function(index){
      $(this).text('')
    })
    matrix = [['-1','-1','-1'],['-1','-1','-1'],['-1','-1','-1']]
  }
}