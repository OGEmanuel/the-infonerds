// app/api/subscribe/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ message: 'Invalid email' }, { status: 400 });
    }

    const res = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email_address: email }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { message: 'Subscription failed' },
        { status: res.status },
      );
    }

    return NextResponse.json({ message: 'Successfully subscribed!' });
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
