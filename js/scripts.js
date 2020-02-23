



$(document).ready(function(){
   $(".image1") .click(function(){
       $("#first").toggle();
       $("#second").toggle();
       $("#third").toggle();

   });
});





// $("#develop") .click(function(){
//     $("image2") .toggle();
// });
// $("#image") .click(function(){
//     $("second") .toggle();
// });
// });

// $(document).ready(function(){
// $("form").submit(function(event){
//     var name =$("#name").value();
//     alert("Hey" + name + ",Thanks for reaching to us.We have recieved your message .");
// });


// });

$(document).ready(function(){
    $("image").hover(function(){
      $(this).css("background-color", "black");
      }, function(){
      $(this).css("background-color", "pink");
    });
  });