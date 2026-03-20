import sendEmail = require("../utils/email");

export const sendOTPEmail = async (email: string, otp: string) => {
    const html = `<p>Your OTP is ${otp}</p>`;
    await sendEmail(email, "OTP Verification", html);
};

export const sendContactConfirmation = async (
    email: string,
    name: string
) => {
    const html = `<div style="font-family:Arial,sans-serif;font-size:14px;color:#000;">
Hi ${name},<br><br>
Thank you for contacting us.<br>
Our team will get back to you shortly.<br><br>
Regards,<br>
Finsensis Team
</div>`;

    await sendEmail(email, "Contact Confirmation", html);
};

export const sendDemoNotification = async (data: any) => {
    const html = `
    <h2>New Demo Request</h2>
    <p>Name: ${data.name}</p>
    <p>Email: ${data.email}</p>
    <p>Message: ${data.message}</p>
  `;

    await sendEmail(process.env.ADMIN_EMAIL as string, "Demo Request", html);
};