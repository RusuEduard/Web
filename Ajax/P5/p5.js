function go(id_parent){
  var request = new XMLHttpRequest();

  request.onreadystatechange = function (){
      if (request.readyState ==4 && request.status==200){
          var dirs = request.responseText.split(",");
          if(dirs[0]!="File") {
              var lisr2 = document.createElement("ul");
              for (var i = 0; i < dirs.length - 1; i++) {
                  var item = document.createElement("li");
                  item.id = id_parent + '\\' + dirs[i];
                  item.onclick = function () {
                      go(this.id);
                  }
                  item.innerHTML = dirs[i];
                  lisr2.appendChild(item);
              }
              document.getElementById(id_parent).appendChild(lisr2);
              document.getElementById(id_parent).onclick = function () {
                  return false;
              }
          }else{
                  var lisr2 = document.createElement("ul");
                  var item = document.createElement("li");
                  item.innerHTML = dirs[1];
                  lisr2.appendChild(item);
                  document.getElementById(id_parent).appendChild(lisr2);
                  document.getElementById(id_parent).onclick = function () {
                  return false;
                  }
              }
          }
      }


  request.open("GET",'p5.php?dir='+id_parent,true);
  request.send('');
}