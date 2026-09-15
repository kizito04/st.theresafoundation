import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, message } = request.body;

    const data = await resend.emails.send({
      // Resend allows you to use onboarding@resend.dev for testing. 
      // Once you add a custom domain in Resend, you can change this (e.g., to info@st-theresa.edu)
      from: 'St. Theresa Website <onboarding@resend.dev>', 
      // Update the 'to' email to where you want to receive the messages
      to: 'kizitoahaisibwe04@gmail.com',
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return response.status(200).json(data);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Failed to send email' });
  }
}
