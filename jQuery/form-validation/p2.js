$(document).ready(function () {

  $("#submit").click(function () {
    validateForm();
  });
});

function validateForm() {

  var date_format = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/;

  var mail_format = /.+@.+/;

  var nume = $("#nume").val();
  var data = $("#data_nasterii").val();
  var varsta = $("#varsta").val();
  var mail = $("#mail").val();

  var error = 0;

  $(".error").hide();
  $("input").css({
    "borderColor": "black"
  });

  if (nume == "") {
    $("#nume").css({
      "borderColor": "red"
    });
    $("#nume").after("<span class='error'>Nume invalid!</span>");
    error += 1;
  }

  if (!data.match(date_format)) {
    $("#data_nasterii").css({
      "borderColor": "red"
    });
    $("#data_nasterii").after("<span class='error'>Data invalida!</span>");
    error += 1;
  }

  if (varsta < 0 || varsta == "") {
    $("#varsta").css({
      "borderColor": "red"
    });
    $("#varsta").after("<span class='error'>Varsta invalida!</span>");
    error += 1;
  }

  if (!mail.match(mail_format)) {
    $("#mail").css({
      "borderColor": "red"
    });
    $("#mail").after("<span class='error'>Mail invalid!</span>");
    error += 1;
  }

  $(".error").css({
    "color": "red",
    "margin-left": "10px"
  });

  if (error == 0) {
    alert("Form submitted!");
  } else {
    alert("Form not submitted!");
  }
}