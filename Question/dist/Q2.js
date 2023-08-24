"use strict";
function getClockAngle(hh_mm) {
    const hour = parseInt(hh_mm.substring(0, 2), 10);
    const minute = parseInt(hh_mm.substring(3, 5), 10);
    const hourAngle = (hour % 12) * 30 + (minute / 2);
    const minuteAngle = minute * 6;
    const angle = Math.abs(hourAngle - minuteAngle);
    return Math.min(angle, 360 - angle);
}
const angle = getClockAngle("09:00");
const angle2 = getClockAngle("17:30");
console.log(angle);
console.log(angle2);
