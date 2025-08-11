const nodemailer = require("nodemailer");
const emailTemplateFactory = require("../factories/emailTemplateFactory");
const dayjs = require("dayjs");
// const now = dayjs().format("dddd, MMMM D, YYYY h:mm A");
const now = dayjs().add(48, "hour").format("dddd, MMMM D, YYYY");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendMeetingScheduleMail = async (data) => {
  const { send_to, subject, sendTo_cc } = data;
  const htmlTemplate = emailTemplateFactory({
    type: "schedule-meeting",
    data: { ...data, date: now },
  });

  const mailOptions = {
    from: `Twine <${process.env.EMAIL_USER}>`,
    to: send_to,
    subject,
    cc: sendTo_cc,
    html: htmlTemplate,
  };
  return await transporter.sendMail(mailOptions);
};

module.exports = sendMeetingScheduleMail;
