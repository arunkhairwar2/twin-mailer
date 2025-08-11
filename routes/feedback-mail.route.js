const feedbackMail = require("../mailer/feedbackMail");

module.exports = handleFeedbackMail = async (req, res) => {
  const { to, subject, text, userName } = req.body;
  console.log("payload recived", userName, to, subject, text);
  try {
    const info = await feedbackMail(userName, to, subject, text);
    res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
