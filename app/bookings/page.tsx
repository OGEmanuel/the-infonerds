import { Metadata } from 'next';
import { ContactForm } from './form';

export const metadata: Metadata = {
  title: 'Nerd Not Noob | Booking',
  description: 'Booking',
};

const Contact = () => {
  return (
    <section className="flex justify-center p-4 sm:p-16">
      <ContactForm />
    </section>
  );
};

export default Contact;
