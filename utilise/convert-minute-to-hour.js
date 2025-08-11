const dayjs = require("dayjs");
const duration = require("dayjs/plugin/duration");
dayjs.extend(duration);

module.exports = function minuteToHour(durationInMinute) {
  time = dayjs.duration(durationInMinute, "minute");
  return `${time.hours()} hour ${time.minutes()} minutes`;
};
