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
//Fuctions that redirects to another link
function gotoBio(){
  window.location='acad_prog.html';
}

function gotoFT(){
    window.location='acad_prog.html';
}

function gotoDMPCS(){
    window.location='acad_prog.html';
}

function gotoBSABE(){
    window.location='acad_prog.html';
}

function gotoDA(){
    window.location='acad_prog.html';
}

function gotoDH(){
    window.location='acad_prog.html';
}

function gotoDHK(){
    window.location='acad_prog.html';
}

function gotoBSAnth(){
    window.location='acad_prog.html';
}
