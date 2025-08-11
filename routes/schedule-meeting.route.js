const generateMeetingLinkService = require("../utilise/generate-meeting-link.utils");
const sendMeetingScheduleMail = require("../mailer/send-meeting-schedule-mail");
const generateAddToCalenderLink = require("../utilise/generate-add-to-calender-link.utils");
const convertIsoToRawTime = require("../utilise/convert-iso-to-raw-time");
const scheduleMeetingRequestDataValidation = require("../utilise/schedule-meeting-request-data-validation");

module.exports = handleScheduleMeeting = async (req, res) => {
  try {
    const {
      title,
      description,
      startTime,
      endTime,
      send_to,
      organizerName,
      organizerEmail,
      sendTo_cc,
    } = req.body;
    // console.log("req-Body:\n", req.body);

    const dataValidationError = scheduleMeetingRequestDataValidation({
      title,
      description,
      startTime,
      endTime,
      send_to,
      organizerName,
      organizerEmail,
      sendTo_cc,
    });

    if (dataValidationError.length !== 0)
      throw res
        .status(500)
        .json({ success: false, Error: dataValidationError });

    const addToCalenderURL = generateAddToCalenderLink({
      details: title,
      text: description,
      startTime,
      endTime,
    });

    const meetLink = await generateMeetingLinkService({
      title,
      description,
      startTime,
      endTime,
    });

    // const meetingID = meetLink.split("/").pop();

    const {
      rawEndDate,
      rawEndTime,
      rawStartDate,
      rawStartTime,
      durationInMinute,
    } = convertIsoToRawTime({ startTime, endTime });

    const info = await sendMeetingScheduleMail({
      send_to,
      meetingLink: meetLink,
      meetingTitle: title,
      organizerName,
      organizerEmail,
      sendTo_cc,
      subject: title,
      addToCalenderURL,
      rawEndDate,
      rawEndTime,
      rawStartDate,
      rawStartTime,
      durationInMinute,
    });

    res.json({
      success: true,
      data: {
        link: meetLink,
        info,
      },
    });
  } catch (err) {
    console.log(
      "errror: ==========================================================================================\n",
      err
    );
    res.status(500).json({
      success: false,
      data: { message: "Failed to create meeting", error: err },
    });
  }
};
