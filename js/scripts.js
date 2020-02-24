



$(document).ready(function(){
   $(".image1") .click(function(){
       $("#first").toggle();
      //  $("#second").toggle();
      //  $("#third").toggle();

   });
   $(".image2") .click(function(){
    $("#second").toggle();
   });
   $(".image3") .click(function(){
    $("#third").toggle();
   });
   

$("#w4") .hover(function(){
$("#port4") .toggle();

});
$("#w3") .hover(function(){
  $("#port3") .toggle();
  
  });
  $("#w2") .hover(function(){
    $("#port2") .toggle();
    
    });
    $("#w1") .hover(function(){
      $("#port1") .toggle();
      
      });

    $("#w5") .hover(function(){
        $("#port5") .toggle();
        
        });
     $("#w6") .hover(function(){
      $("#port6") .toggle();
          
          });
      $("#w7") .hover(function(){
      $("#port7") .toggle();
            
            });
      $("#w8") .hover(function(){
      $("#port8") .toggle();
              
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

// $(document).ready(function(){
//     $("image").hover(function(){
//       $(this).css("background-color", "black");
//       }, function(){
//       $(this).css("background-color", "pink");
//     });
//   });