require("dotenv").config();
const express = require("express");
const server = express();
const PORT = 3000;
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const feedbackMail = require("./mailer/feedbackMail");

server.post("/meeting-schedule", async (req, res) => {
  const { to, subject, text } = req.body;
  try {
    const info = await feedbackMail(to, subject, text);
    res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

server.post("/feedback-mail", async (req, res) => {
  const { to, subject, text } = req.body;
  console.log(to, subject, text);
  try {
    const info = await feedbackMail(to, subject, text);
    res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

server.listen(PORT, () => {
  console.log(`server is listening on port: ${PORT}`);
});
