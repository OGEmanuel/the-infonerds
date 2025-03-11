import Notice from '@/app/emails/notice';
import ThankYou from '@/app/emails/thank-you';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      message,
      smHandle,
      events,
      production,
      month,
      day,
      timestamp,
    } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          error: 'Name, email, and message are required fields.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const ownerEmail = 'contact@nerdnotnoob.com'; // Replace with the form owner's email

    // Function to send emails
    const sendEmail = async ({
      to,
      subject,
      reactTemplate,
    }: {
      to: string;
      subject: string;
      reactTemplate: JSX.Element;
    }) => {
      await resend.emails.send({
        from: ownerEmail,
        to,
        subject,
        react: reactTemplate,
      });
    };

    // Send ThankYou email to form filler
    await sendEmail({
      to: email,
      subject: "We've received your message! - nerdnotnoob",
      reactTemplate: ThankYou({
        name,
        message,
        email,
        smHandle,
        events,
        production,
        month,
        day,
      }),
    });

    // Send Notice email to the owner
    await sendEmail({
      to: ownerEmail,
      subject: `New Form Submission from ${name}`,
      reactTemplate: Notice({
        name,
        email,
        smHandle,
        events,
        production,
        month,
        day,
        message,
        timestamp,
      }),
    });

    return new Response(
      JSON.stringify({ success: 'Emails sent successfully.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (error: any) {
    console.error('Error occurred:', error);

    return new Response(
      JSON.stringify({
        error: 'An unexpected error occurred. Please try again later.',
        details: error.message || 'Unknown error',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
}
