//var AlarmClock = require('./../js/alarmclock.js').alarmClockModule;


$(document).ready(function(){
  $('#time').text();

  function update() {
    $("#time").html(moment().format('MMMM D YYYY H:mm:ss'));
  }

  setInterval(update, 1000);
});
