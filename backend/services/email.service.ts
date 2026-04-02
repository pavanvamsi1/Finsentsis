import sendEmail = require("../utils/email");

export const sendOTPEmail = async (email: string, otp: string) => {
    const html = `<p>Your OTP is ${otp}</p>`;
    await sendEmail(email, "OTP Verification", html);
};

export const sendContactConfirmation = async (
    email: string,
    name: string
) => {
    const html = `
  <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,sans-serif;">
    <tr>
      <td>
        <p style="margin:0;">Hi ${name},</p>
        <br/>
        <p style="margin:0;">Thank you for contacting us.</p>
        <p style="margin:0;">Our team will get back to you shortly.</p>
        <br/>
        <p style="margin:0;">Regards,</p>
        <p style="margin:0;">Finsensis Team</p>
      </td>
    </tr>
  </table>
  `;

    await sendEmail(
        email,
        `Contact Confirmation - ${Date.now()}`,
        html
    );
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