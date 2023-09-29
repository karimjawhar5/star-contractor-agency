// pages/api/submit-form.js
import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { fullName, email, phoneNumber } = req.body;

    // Validate and sanitize user input here if needed

    try {
      // Create a Nodemailer transporter with your email service credentials
      const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: 'starcontractoragency@gmail.com',
              pass: process.env.GMAIL_PASSWORD,
            },
      });

      // Email content
      const mailOptions = {
        from: 'website@starcontractoragency.com',
        to: 'starcontractoragency@gmail.com',
        subject: 'New Form Submission',
        text: `
          Full Name: ${fullName}
          Email: ${email}
          Phone Number: ${phoneNumber}
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Form submission failed' });
    }
  } else {
    res.status(405).end();
  }
};
