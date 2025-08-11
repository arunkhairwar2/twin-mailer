const { DateTime } = require("luxon");

module.exports = generateAddToCalenderLink = (data) => {
  const { startTime, endTime, details, ctz, text } = data;

  const startTimeInUTC = DateTime.fromISO(startTime, {
    zone: "Asia/Kolkata",
  })
    .toUTC()
    .toFormat("yyyyLLdd'T'HHmmss'Z'");

  const endTimeInUTC = DateTime.fromISO(endTime, {
    zone: "Asia/Kolkata",
  })
    .toUTC()
    .toFormat("yyyyLLdd'T'HHmmss'Z'");

  const customURL = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Twine+Meeting&details=Join+the+call&location=Google+Meet&dates=${startTimeInUTC}/${endTimeInUTC}&ctz=Asia/Kolkata`;
  // console.log("calenderURL: ", customURL);
  return customURL;
};
