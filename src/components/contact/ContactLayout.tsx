import { ContactForm } from "@/components/contact/ContactForm";
import { ContactLinks } from "@/components/contact/ContactLinks";

export function ContactLayout() {
  return (
    <section className="py-12 pb-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left — form (60%) */}
          <div className="w-full md:flex-[3]">
            <ContactForm />
          </div>

          {/* Right — direct links (40%) */}
          <div className="w-full md:flex-[2]">
            <ContactLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
