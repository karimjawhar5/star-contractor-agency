// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, company, email, phone, serviceOfInterest, projectDescription } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'starcontractoragency@gmail.com',
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    try {
      // Send email
      let info = await transporter.sendMail({
        from: `"${fullName}" <${email}>`, // Sender name and address
        to: 'info@starcontractoragency.com', // Recipient email address
        subject: 'New Contact Form Submission', // Subject line
        text: `Full Name: ${fullName}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nService of Interest: ${serviceOfInterest}\nProject Description: ${projectDescription}`, // Plain text body
        html: `<p>Full Name: ${fullName}</p><p>Company: ${company}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Service of Interest: ${serviceOfInterest}</p><p>Project Description: ${projectDescription}</p>` // HTML body
      });

      console.log('Message sent: %s', info.messageId);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error occurred while sending email:', error);
      res.status(500).json({ success: false, error: 'An error occurred while sending email' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
