$(document).ready(function() {

  //declare var arr for gif changing
  // var arr = ['img/gif1.gif','img/gif2.gif', 'img/gif3.gif' , 'img/gif4.gif'];
  // var counter = 0;

  var scroll = $('html, body');

  setInterval(function(){
    var pos = scroll.scrollTop();
    scroll.scrollTop(pos + 6.5);
  }, 200)


  //hover container to fade nav
  $(function() {
    $('.parentContainer').hover(function() {
      $('.nav').fadeTo(600, 0);
    }, function() {
      $('.nav').fadeTo(600, 1);
    });
  });

  $(function() {
    $('video').hover(function() {
      $('.nav').fadeTo(600, 0);
    }, function() {
      $('.nav').fadeTo(600, 1);
    });
  });

  // change logo gif

  // $('#imageContainer').click(function(){
  //   if(counter <=arr.length-2){
  //     counter +=1;
  //   }else{
  //     counter =0;
  //   }
  //
  //   if(counter==3){
  //     $('#imageContainer').css('width','180%');
  //     $('#imageContainer').css('margin-left','-25%');
  //     $('#imageContainer').css('margin-top','-15%');
  //     $('#imageContainer').css('z-index','0');
  //   }else{
  //     $('#imageContainer').css('width','120%');
  //     $('#imageContainer').css('margin-left','-7%');
  //     $('#imageContainer').css('margin-top','5%');
  //     $('#imageContainer').css('z-index','0');
  //   }
  //
  //   console.log(counter);
  //   $('#switch').attr('src', arr[counter]);
  //
  // });

  // click to play/pause
  $('video').click(function(){
    this[this.paused ? 'play' : 'pause']();
  });


  // press spacebar to Play/Pause.
  var body = $( 'body' );

  body.keypress( function ( e ) {
    if ( e.which == 32 ) {
      // Stop the jerk.
      e.preventDefault();

      // If video is paused.
      if ($('video').get(0).paused == true ) {
        $('video').get(0).play();
      } else {
        $('video').get(0).pause();
      }
    }
  }); // End keypress().
});
