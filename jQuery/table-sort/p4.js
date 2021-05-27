$(document).ready(function () {
  $(".table2 .th").click(function () {
    var table = $(this).parents('table').eq(0);
    var rows = table.find('tr:gt(0)').toArray().sort(comparer2($(this).index()));
    this.asc = !this.asc;
    if (!this.asc) {
      rows = rows.reverse()
    }
    for (var i = 0; i < rows.length; i++) {
      table.append(rows[i])
    }
  });

  $(".table1 .th").click(function () {
    var table = $(this).parents("table").eq(0);
    var rows = table.find("tr");
    var index = $(this).parent().index();
    var cloneRow = $(this).parent().clone();

    this.asc = !this.asc;
    sortRows(rows, cloneRow, this.asc);
  });

});


function sortRows(rows, clone, asc) {
  for (var i = 0; i < rows.length; i++) {
    var cols = $(rows[i]).find("td").toArray().sort(comparer1(clone));
    if (!asc)
      cols = cols.reverse();
    for (var j = 0; j < cols.length; j++) {
      $(rows[i]).append(cols[j]);
    }
  }
}

function comparer1(clone) {
  return function (a, b) {
    // var sortRow = $(table).find("tr").eq(index);
    var indexA = $(a).index()
    var indexB = $(b).index();
    var valA = $(clone).find("td").eq(indexA - 1).text();
    var valB = $(clone).find("td").eq(indexB - 1).text();

    return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB);
  }
}


function comparer2(index) {
  return function (a, b) {
    var valA = getCellValue(a, index),
      valB = getCellValue(b, index);
    return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB);
  }
}

function getCellValue(row, index) {
  return $(row).children('td').eq(index).text();
}