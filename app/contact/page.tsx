import { Metadata } from 'next';
import { ContactForm } from './form';

export const metadata: Metadata = {
  title: 'TheInfoNerds | Booking',
  description: 'Information and Entertainment Personified.',
};

const Contact = () => {
  return (
    <section className="flex justify-center p-4 sm:p-16">
      <ContactForm />
    </section>
  );
};

export default Contact;
