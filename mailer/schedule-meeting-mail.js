const nodemailer = require("nodemailer");
const emailTemplateFactory = require("../factories/emailTemplateFactory");
const dayjs = require("dayjs");
const now = dayjs().format("dddd, MMMM D, YYYY h:mm A");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const scheduleMeetingMail = async (to, subject, text) => {
  const htmlTemplate = emailTemplateFactory({
    type: "schedule-meeting",
    data: {
      meetingID: "98324",
      meetingLink: "---joiin",
      meetingTitle: "support",
      organizerEmail: "admin@gmail.com",
      dateAndTime: now,
    },
  });

  const mailOptions = {
    from: `"Twine" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html: htmlTemplate,
  };
  console.log(typeof now);
  return await transporter.sendMail(mailOptions);
};

module.exports = scheduleMeetingMail;
