
$(document).ready(function () {
  $(".image1").click(function () {
    $("#first").slideToggle();
  });

    $(".image2").click(function () {
      $("#second").slideToggle();
  
    });
      $(".image3").click(function () {
        $("#third").slideToggle();
  
      });


  $("#w4").hover(function () {
    $("#port4").toggle()

  });
  $("#w3").hover(function () {
    $("#port3").toggle();
  });
  $("#w2").hover(function () {
    $("#port2").toggle();

  });
  $("#w1").hover(function () {
    $("#port1").toggle();

  });

  $("#w5").hover(function () {
    $("#port5").toggle();

  });
  $("#w6").hover(function () {
    $("#port6").toggle();

  });
  $("#w7").hover(function () {
    $("#port7").toggle();

  });
  $("#w8").hover(function () {
    $("#port8").toggle();

  });
});











 function nameOfUser(submit){
  
    var name = $("input#name").val();
    var email =$("input#email").val();

    alert("Hey " + name + ",Thanks for reaching to us.We have recieved your message .");
    event.preventDefault();
  };
