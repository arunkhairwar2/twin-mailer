require("dotenv").config();
const express = require("express");
const server = express();
const PORT = 3000;
const defaultMiddlware = require("./middlewares/defaultMiddlware");
server.use(defaultMiddlware());

const handleFeedbackMail = require("./routes/feedback-mail.route");
const handleScheduleMeeting = require("./routes/schedule-meeting.route");

server.post("/schedule-meeting", handleScheduleMeeting);

server.post("/feedback-mail", handleFeedbackMail);

server.listen(PORT, () => {
  console.log(`server is listening on port: ${PORT}`);
});
