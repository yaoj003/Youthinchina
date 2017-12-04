 $(function(){
  var text = $('#message').text();
  responsiveVoice.cancel();
  responsiveVoice.speak(text, "Chinese Taiwan Female");
});
