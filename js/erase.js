$(document).ready(function(){

  $("#erase").click(function() {
    $("#userAnswer").fadeOut( "slow", function() {
      $("#userAnswer").hide();
    });
    $(this).fadeOut("slow", function() {
      $(this).hide();
    });
  });
});
