function AlarmClock() {
  AlarmClock.prototype.alarmClock = function(month, day, year, hour, minute, second) {
    var currentMonth = parseInt(moment().format("M"));
    var currentDay = parseInt(moment().format("D"));
    var currentYear = parseInt(moment().format("YYYY"));
    var currentHour = parseInt(moment().format("H"));
    var currentMinute = parseInt(moment().format("mm"));
    var currentSecond = parseInt(moment().format("ss"));
    console.log("Month:");
    console.log(currentMonth);
    console.log(month);
    console.log("Day:");
    console.log(currentDay);
    console.log(day);
    console.log("Year:");
    console.log(currentYear);
    console.log(year);
    console.log("HOUR:");
    console.log(currentHour);
    console.log(hour);
    console.log("MINUTE:");
    console.log(currentMinute);
    console.log(minute);
    console.log("SECOND:");
    console.log(currentSecond);
    console.log(second);
    if (currentMonth === month) {
      console.log("passes this point!");
    }
    if ((currentMonth === month) && (currentDay === day) && (currentYear === year) && (currentHour === hour) && (currentMinute === minute) && (currentSecond === second)) {
      console.log("WAKE UP!!! BUZZ BUZZ BUZZ");
    }
    setInterval(AlarmClock, 1000);
  }
}
exports.alarmClockModule = AlarmClock;
