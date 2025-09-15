import { Resend } from 'resend';
import Email from '../../emails/Email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, email } = await request.json();

    await resend.emails.send({
      from: 'Pilar <onboarding@resend.dev>',
      to: [email], // Envoyer à l'email du client
      subject: 'Confirmation de votre réservation - Pilar',
      react: await Email({
        firstName,
      }),
    });

    return new Response('Email sent', { status: 200 });
  } catch (error) {
    return new Response('Error sending email', { status: 500 });
  }
}
