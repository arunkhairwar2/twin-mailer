const nodemailer = require("nodemailer");
// const templateMailTemplate = require("../templates/feedback-mail-template");
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

const feedbackMail = async (to, subject, text) => {
  const htmlTemplate = emailTemplateFactory({
    type: "feedback",
    data: {
      userName: "mohan",
      userEmail: to,
      time: now,
      feedbackText: text,
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

module.exports = feedbackMail;
