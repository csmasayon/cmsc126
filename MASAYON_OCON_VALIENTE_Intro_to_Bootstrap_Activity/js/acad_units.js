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
