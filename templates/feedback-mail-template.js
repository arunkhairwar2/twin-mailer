module.exports = function feedbackMailTemplate({
  userName,
  userEmail,
  time,
  feedbackText,
}) {
  return `<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 40px; text-align: center;">
      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">📧 New Feedback Received</h1>
      <p style="margin: 8px 0 0 0; color: #e8e8ff; font-size: 16px; opacity: 0.9;">Feedback Management System</p>
    </div>

    <!-- Alert Banner -->
    <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px 40px;">
      <p style="margin: 0; color: #856404; font-size: 14px; font-weight: 500;">
        ⚠️ <strong>Action Required:</strong> A new feedback submission requires your attention.
      </p>
    </div>

    <!-- Main Content -->
    <div style="padding: 40px;">
      
      <!-- Submission Details -->
      <div style="background-color: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 30px; border-left: 4px solid #667eea;">
        <h2 style="margin: 0 0 20px 0; color: #2c3e50; font-size: 20px; font-weight: 600;">📋 Submission Details</h2>
        <div style="display: flex; padding: 8px 0;">
          <div style="width: 120px; font-size: 14px; color: #495057;"><strong>Submitted:</strong></div>
          <div style="font-size: 14px; color: #6c757d;">${time} EST</div>
        </div>
      </div>

      <!-- Customer Info -->
      <div style="background-color: #ffffff; border: 1px solid #e9ecef; border-radius: 8px; padding: 25px; margin-bottom: 30px;">
        <h2 style="margin: 0 0 20px 0; color: #2c3e50; font-size: 20px; font-weight: 600;">👤 Customer Information</h2>
        <div style="display: flex; padding: 10px 0;">
          <div style="width: 120px; font-size: 14px; color: #495057;"><strong>Full Name:</strong></div>
          <div style="font-size: 16px; font-weight: 500; color: #2c3e50;">${userName}</div>
        </div>
        <div style="display: flex; padding: 10px 0;">
          <div style="width: 120px; font-size: 14px; color: #495057;"><strong>Email:</strong></div>
          <div><a href="mailto:${userEmail}" style="color: #667eea; text-decoration: none; font-size: 14px;">${userEmail}</a></div>
        </div>
      </div>

      <!-- Feedback -->
      <div style="background-color: #fff8e1; border: 1px solid #ffcc02; border-radius: 8px; padding: 25px; margin-bottom: 30px;">
        <h2 style="margin: 0 0 20px 0; color: #2c3e50; font-size: 20px; font-weight: 600;">💬 Feedback Message</h2>
        <div style="background-color: #ffffff; border-radius: 6px; padding: 20px; border-left: 4px solid #ffcc02;">
          <p style="margin: 0; color: #2c3e50; font-size: 15px; line-height: 1.6;">${feedbackText}</p>
        </div>
        <div style="margin-top: 15px;">
          <strong style="color: #495057; font-size: 14px;">Category:</strong>
          <span style="background-color: #dc3545; color: #ffffff; padding: 3px 8px; border-radius: 10px; font-size: 11px; font-weight: 600; margin-left: 8px;">COMPLAINT</span>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #2c3e50; padding: 25px 40px; text-align: center;">
      <p style="margin: 0 0 10px 0; color: #ecf0f1; font-size: 14px;">This email was sent from the <strong>Feedback Management System</strong></p>
      <p style="margin: 0; color: #95a5a6; font-size: 12px;">Please do not reply to this email. For support, contact: support@twine.com</p>
      <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #34495e;">
        <p style="margin: 0; color: #95a5a6; font-size: 11px;">© 2025 Twine. All rights reserved.</p>
      </div>
    </div>
  </div>
</body>`;
};
