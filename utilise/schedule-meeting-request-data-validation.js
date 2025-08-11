const dayjs = require("dayjs");

module.exports = scheduleMeetingRequestDataValidation = (data) => {
  const setError = [];

  if (!data.title) {
    setError.push("title is required");
  }
  if (!data.description) {
    setError.push("description is required");
  }
  if (!data.startTime) {
    setError.push("startTime is required");
  }
  if (!data.organizerName) {
    setError.push("organizerName is required");
  }
  if (!data.organizerEmail) {
    setError.push("organizerEmail is required");
  }
  if (!data.send_to) {
    setError.push("who to send mail? (send_to) is required");
  }
  if (!data.sendTo_cc) {
    setError.push("sendTo_cc is required");
  } else if (data.sendTo_cc.length < 1) {
    setError.push("sendTo_cc is Empty");
  }

  if (dayjs(start).isBefore(dayjs(end))) {
  }
  //   console.log("data Validation data:", data);
  return setError;
};
