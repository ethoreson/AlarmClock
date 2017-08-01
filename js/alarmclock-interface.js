var AlarmClock = require('./../js/alarmclock.js').alarmClockModule;

AlarmClock.prototype.displayAlarm = function(month, day, year, hour, minute, second) {
  $('.showAlarm').text("Your alarm is set for " + month + " " + day + ", " + year + " " + hour + ":" + minute + ":" + second);
}

$('#time').text();
function update() {
  $("#time").html(moment().format('M D YYYY H:mm:ss'));
}
setInterval(update, 1000);

$(document).ready(function(){
  var testClock = new AlarmClock(month, day, year, hour, minute, second);
  $('#set-alarm').click(function() {
    var month = parseInt($('#month').val());
    var day = parseInt($('#day').val());
    var year = parseInt($('#year').val());
    var hour = parseInt($('#hour').val());
    var minute = parseInt($('#minute').val());
    var second = parseInt($('#second').val());
    testClock.displayAlarm(month, day, year, hour, minute, second);
    testClock.alarmClock(month, day, year, hour, minute, second);
  setInterval(AlarmClock, 1000);
  });
});
