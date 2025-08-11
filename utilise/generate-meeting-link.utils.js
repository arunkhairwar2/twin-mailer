const { google } = require("googleapis");
require("dotenv").config();

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const calender = google.calendar({ version: "v3", auth: oAuth2Client });

module.exports = generateMeetingLink = async ({
  title,
  description,
  startTime,
  endTime,
}) => {
  const event = {
    title,
    description,
    start: {
      dateTime: startTime,
      timeZone: "Asia/Kolkata",
    },
    end: {
      dateTime: endTime,
      timeZone: "Asia/Kolkata",
    },
    conferenceData: {
      createRequest: {
        requestId: String(new Date().getTime()), // must be unique
        conferenceSolutionKey: {
          type: "hangoutsMeet",
        },
      },
    },
  };

  const response = await calender.events.insert({
    calendarId: "primary",
    resource: event,
    conferenceDataVersion: 1,
  });
  // console.log(response);
  return response.data.hangoutLink;
};
