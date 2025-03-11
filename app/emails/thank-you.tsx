type Props = {
  name: string;
  message: string;
  email: string;
  smHandle: string;
  events: string[];
  production: { date: string; location: string }[];
  month?: string;
  day?: string;
};

import { formatDate } from '@/lib/utils';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import * as React from 'react';

export const ThankYou = ({
  name,
  message,
  email,
  smHandle,
  events,
  production,
  month,
  day,
}: Props) => {
  return (
    <Html>
      <Head />
      <Preview>nerdnotnoob! - Thank You!</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: {
                  dark: '#1e1e1e',
                  white: '#ffffff',
                },
              },
            },
          },
        }}
      >
        <Head>
          <style>
            {`
            @media (min-width: 640px) {
              .sm\\:px-6 { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
              .sm\\:my-10 { margin-top: 2.5rem !important; margin-bottom: 2.5rem !important; }
              .sm\\:p-8 { padding: 2rem !important; }
              .sm\\:text-2xl { font-size: 1.5rem !important; line-height: 2rem !important; }
              .sm\\:mb-6 { margin-bottom: 1.5rem !important; }
            }
          `}
          </style>
        </Head>
        <Body className="font-sans bg-[#1e1e1e] text-base text-white">
          <Container className="max-w-full px-4 sm:px-6">
            <Img
              src="https://i.ibb.co/yc0W5V58/logo-white.png"
              width="50"
              height="50"
              alt="nerd not noob"
              className="mx-auto my-6 h-auto max-w-full sm:my-10"
            />

            <Container className="rounded-lg bg-white p-4 sm:p-8">
              <Heading className="mb-4 text-center text-xl font-bold leading-tight text-[#1e1e1e] sm:mb-6 sm:text-2xl">
                Thank you for reaching out!
              </Heading>

              <Section className="mb-4">
                <Text className="text-base text-[#1e1e1e]">
                  Dear <strong>{name}</strong>,
                </Text>

                <Text className="text-base text-[#1e1e1e]">
                  We have successfully received your message and will get back
                  to you shortly.
                </Text>

                <Text className="mt-4 text-base font-bold text-[#1e1e1e]">
                  Your Submitted Details:
                </Text>
              </Section>

              <Section className="mb-4 rounded-md bg-white p-4">
                <ul className="m-0 list-none space-y-2 p-0">
                  <li className="text-sm text-[#1e1e1e]">
                    <strong>Name:</strong> {name}
                  </li>
                  <li className="text-sm text-[#1e1e1e]">
                    <strong>Email:</strong> {email}
                  </li>
                  <li className="text-sm text-[#1e1e1e]">
                    <strong>Instagram Handle:</strong> {smHandle}
                  </li>
                  <li className="text-sm text-[#1e1e1e]">
                    <strong>Events:</strong> {events.join(', ')}
                  </li>
                  {day && month && (
                    <li className="text-sm text-[#1e1e1e]">
                      <strong>Birthday:</strong> {day} {month}
                    </li>
                  )}
                  <li className="text-sm text-[#1e1e1e]">
                    <strong>Message:</strong> {message}
                  </li>
                </ul>
                <Text
                  style={{
                    fontSize: '15px',
                    fontWeight: 'bold',
                    margin: '0',
                    color: '#333333',
                  }}
                >
                  Production Details:
                </Text>
                {production.map(item => (
                  <div
                    key={item.date}
                    style={{
                      marginTop: '8px',
                      marginLeft: '8px',
                      paddingLeft: '8px',
                      borderLeft: '2px solid #e1e1e1',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: '14px',
                        margin: '0',
                        color: '#1e1e1e',
                      }}
                    >
                      <strong
                        style={{ display: 'inline-block', minWidth: '120px' }}
                      >
                        {formatDate(item.date)}:
                      </strong>{' '}
                      {item.location}
                    </Text>
                  </div>
                ))}
              </Section>

              <Section className="mt-6 text-center">
                <Text className="text-base text-[#1e1e1e]">Best Regards,</Text>
                <Text className="text-xl font-bold text-[#1e1e1e]">
                  nerd not noob Team
                </Text>
              </Section>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ThankYou;
