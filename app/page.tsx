import { Toast } from "@/components/ui/toast";
import Albums from "./(albums)/albums";
import { ContactForm } from "./form";
import Header from "./header";
import Highlights from "./highlights";
import Nav from "./nav";

export default function Home() {
  return (
    <main className="ml-40 border-b border-l !border-[#F3F4F6] bg-[url('/images/background.png')] bg-cover bg-fixed bg-center bg-no-repeat pb-16">
      <Nav />
      <Header />
      <Highlights />
      <Albums />
      <ContactForm />
    </main>
  );
}
