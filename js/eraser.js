$( document ).ready(function(){

  $( "#erase" ).click(function() {
    $( "#userAnswer" ).fadeOut( "slow", function() {
      $( "#userAnswer" ).remove();
    });
    $( this ).fadeOut( "slow", function() {
      $( this ).remove();
    });
  });
});
