module.exports = function scheduleMeetingTemplate({
  meetingLink,
  meetingTitle,
  organizerName,
  meetingID,
  organizerEmail,
  dateAndTime,
}) {
  return `
<body
    style="
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
      font-family: 'Google Sans', 'Roboto', Arial, sans-serif;
      line-height: 1.6;
    "
  >
    <!-- Main Container -->
    <div
      style="
        max-width: 600px;
        margin: 20px auto;
        background-color: #ffffff;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        overflow: hidden;
      "
    >
      <!-- Header -->
      <div
        style="
          background: #34a853;
          padding: 32px 40px;
          text-align: center;
          position: relative;
        "
      >
        <div
          style="
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          <div style="font-size: 36px">📹</div>
        </div>
        <h1
          style="
            margin: 0;
            color: #ffffff;
            font-size: 28px;
            font-weight: 500;
            letter-spacing: -0.5px;
          "
        >
          Meeting Scheduled
        </h1>
        <p
          style="
            margin: 8px 0 0 0;
            color: rgba(255, 255, 255, 0.9);
            font-size: 16px;
          "
        >
          Calendar invitation sent to all attendees
        </p>
      </div>

      <!-- Content -->
      <div style="padding: 40px">
        <!-- Meeting Details -->
        <div
          style="
            background-color: #f8f9fa;
            border-radius: 12px;
            padding: 28px;
            margin-bottom: 32px;
            border: 1px solid #e8eaed;
          "
        >
          <h2
            style="
              margin: 0 0 24px 0;
              color: #202124;
              font-size: 22px;
              font-weight: 500;
              display: flex;
              align-items: center;
            "
          >
            <span
              style="
                background-color: #4285f4;
                border-radius: 8px;
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 12px;
              "
            >
              <span style="color: white; font-size: 16px">📅</span>
            </span>
            Meeting Details
          </h2>

          <div style="display: grid; gap: 16px">
            <div style="display: flex; align-items: flex-start">
              <div
                style="
                  min-width: 120px;
                  color: #5f6368;
                  font-size: 14px;
                  font-weight: 500;
                  margin-top: 2px;
                "
              >
                Meeting Title:
              </div>
              <div
                style="
                  color: #202124;
                  font-size: 16px;
                  font-weight: 500;
                  flex: 1;
                "
              >
                ${meetingTitle}
              </div>
            </div>

            <div style="display: flex; align-items: flex-start">
              <div
                style="
                  min-width: 120px;
                  color: #5f6368;
                  font-size: 14px;
                  font-weight: 500;
                  margin-top: 2px;
                "
              >
                Date & Time:
              </div>
              <div style="flex: 1">
                <div style="color: #202124; font-size: 16px; font-weight: 500">
                  Wednesday, January 24, 2024
                </div>
                <div style="color: #5f6368; font-size: 14px; margin-top: 2px">
                  2:00 PM - 3:30 PM (EST) • 1.5 hours
                </div>
              </div>
            </div>

            <div style="display: flex; align-items: flex-start">
              <div
                style="
                  min-width: 120px;
                  color: #5f6368;
                  font-size: 14px;
                  font-weight: 500;
                  margin-top: 2px;
                "
              >
                Organizer:
              </div>
              <div style="flex: 1">
                <div style="color: #202124; font-size: 14px; font-weight: 500">
                  ${organizerName}
                </div>
                <div style="color: #5f6368; font-size: 13px">
                  ${organizerEmail}
                </div>
              </div>
            </div>

            <div style="display: flex; align-items: flex-start">
              <div
                style="
                  min-width: 120px;
                  color: #5f6368;
                  font-size: 14px;
                  font-weight: 500;
                  margin-top: 2px;
                "
              >
                Meeting ID:
              </div>
              <div
                style="
                  background-color: #e8eaed;
                  padding: 6px 12px;
                  border-radius: 6px;
                  font-family: 'Courier New', monospace;
                  font-size: 13px;
                  color: #202124;
                  font-weight: 500;
                "
              >
                ${meetingID}
              </div>
            </div>
          </div>
        </div>

        <!-- Join Meeting Section -->
        <div
          style="
            background: linear-gradient(135deg, #4285f4 0%, #1a73e8 100%);
            border-radius: 12px;
            padding: 28px;
            margin-bottom: 32px;
            text-align: center;
          "
        >
          <h3
            style="
              margin: 0 0 16px 0;
              color: #ffffff;
              font-size: 20px;
              font-weight: 500;
            "
          >
            🚀 Ready to Join?
          </h3>
          <p
            style="
              margin: 0 0 24px 0;
              color: rgba(255, 255, 255, 0.9);
              font-size: 14px;
            "
          >
            Click the button below to join the meeting directly
          </p>

          <div style="margin-bottom: 20px">
            <a
              href="${meetingLink}"
              style="
                background-color: #ffffff;
                color: #1a73e8;
                text-decoration: none;
                padding: 14px 32px;
                border-radius: 24px;
                font-weight: 600;
                font-size: 16px;
                display: inline-block;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
                transition: all 0.2s;
              "
            >
              📹 Join Google Meet
            </a>
          </div>
        </div>

        <!-- Meeting Agenda -->

        <!-- Quick Actions -->
        <div
          style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-bottom: 32px;
          "
        >
          <a
            href="#"
            style="
              background-color: #4285f4;
              color: #ffffff;
              text-decoration: none;
              padding: 16px 20px;
              border-radius: 8px;
              text-align: center;
              font-weight: 500;
              font-size: 14px;
              display: block;
            "
          >
            📅 Add to Calendar
          </a>
          <a
            href="#"
            style="
              background-color: #34a853;
              color: #ffffff;
              text-decoration: none;
              padding: 16px 20px;
              border-radius: 8px;
              text-align: center;
              font-weight: 500;
              font-size: 14px;
              display: block;
            "
          >
            ✅ Accept Invitation
          </a>
        </div>

        <!-- Preparation Tips -->
        <div
          style="background-color: #f1f3f4; border-radius: 8px; padding: 20px"
        >
          <h4
            style="
              margin: 0 0 12px 0;
              color: #202124;
              font-size: 16px;
              font-weight: 500;
            "
          >
            💡 Meeting Preparation Tips
          </h4>
          <div style="color: #5f6368; font-size: 13px; line-height: 1.5">
            • Test your camera and microphone before the meeting<br />
            • Review the shared documents in advance<br />
            • Prepare any questions or discussion points<br />
            • Join 2-3 minutes early to avoid delays
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div
        style="
          background-color: #202124;
          padding: 28px 40px;
          text-align: center;
        "
      >
        <div style="margin-bottom: 16px">
          <div
            style="
              display: inline-flex;
              align-items: center;

              padding: 8px 16px;
              border-radius: 20px;
              word-spacing: 20;
              background-color: #34a853;
              color: #ffffff;
            "
          >
            <span>Twine Support</span>
          </div>
        </div>

        <p style="margin: 0 0 8px 0; color: #e8eaed; font-size: 14px">
          This meeting invitation was sent via Google Calendar
        </p>
        <p style="margin: 0; color: #9aa0a6; font-size: 12px">
          Need help? Visit the
          <a
            href="https://support.google.com/meet/?hl=en#topic=14074839"
            style="color: #8ab4f8; text-decoration: none"
            >Google Meet Help Center</a
          >
        </p>

        <div
          style="
            margin-top: 20px;
            padding-top: 16px;
            border-top: 1px solid #303134;
          "
        >
          <p style="margin: 0; color: #9aa0a6; font-size: 11px">
            © 2025 Twine. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </body>
  `;
};
