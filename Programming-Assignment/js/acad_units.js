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
