const feedbackMailTemplate = require("../templates/feedback-mail-template");
const scheduleMeetingTemplate = require("../templates/schedule-meeting-template");
module.exports = function emailTemplateFactory({ type, data }) {
  switch (type) {
    case "feedback":
      return feedbackMailTemplate({
        userName: data.userName,
        userEmail: data.userEmail,
        time: data.time,
        feedbackText: data.feedbackText,
      });
    case "schedule-meeting":
      return scheduleMeetingTemplate({
        meetingID: data.meetingID,
        meetingLink: data.meetingLink,
        meetingTitle: data.meetingTitle,
        organizerEmail: data.organizerEmail,
        dateAndTime: data.dateAndTime,
      });
    default:
      throw new Error("Unsupported email type");
  }
};
