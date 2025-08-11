const dayjs = require("dayjs");
const advancedFormat = require("dayjs/plugin/advancedFormat");
dayjs.extend(advancedFormat);

module.exports = convertISOToRawTime = (data) => {
  const { startTime, endTime } = data;
  const start = dayjs(startTime);
  const end = dayjs(endTime);

  const rawStartDate = start.format("dddd, D MMMM YYYY");
  const rawStartTime = start.format("h:mm A");

  const rawEndDate = end.format("dddd, D MMMM YYYY");
  const rawEndTime = end.format("h:mm A");

  const durationInMinute = end.diff(start, "minute");

  //   const duration = Math.abs(endDateAndTime - startDateAndTime);
  //   const durationInMinute = duration / 1000 / 60;
  console.log("duration in min", durationInMinute);
  console.log("End time:", rawEndTime, "startTime: ", rawStartTime);

  return {
    rawEndDate,
    rawEndTime,
    rawStartDate,
    rawStartTime,
    durationInMinute,
  };
};
