const { google } = require("googleapis");
require("dotenv").config();
const readline = require("readline");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:3000/generate-meeting-link";

console.log("sercrete:\n", CLIENT_SECRET, "id:\n", CLIENT_ID);

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

const SCOPE = ["https://www.googleapis.com/auth/calendar.events"];
const authUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  prompt: "consent",
  scope: SCOPE,
});

console.log("authorize this app by visitin this url:\n", authUrl);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Paste the code here: ", async (code) => {
  rl.close();
  const { tokens } = await oAuth2Client.getToken(code);
  console.log("Tokens:", tokens);
});
