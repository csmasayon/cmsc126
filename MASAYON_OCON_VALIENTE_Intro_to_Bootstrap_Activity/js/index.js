//Menu Widget Function
$(function() {
    $( "#menu-1" ).menu();
 });

 //Select Menu Widget
$(function() {
    $( "#speed" ).selectmenu({
      change: function() {
          if($(this).val() != "") {
              window.location = $(this).val();
          }
      }
  });
} );

//tabs function
$(function() {
    $( "#tabs" ).tabs({
        heightStyle: "fill"
})
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
