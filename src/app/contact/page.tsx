import type { Metadata } from "next";
import { Mail, Phone, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import { buildMetadata, siteConfig } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Book a free automation audit with Sterling Local and find out where your business is losing time to manual work.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="bg-white py-20">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <SectionHeading
            align="left"
            eyebrow="Get Started"
            title="Book a Free Automation Audit."
            description="Tell us a bit about your business. We'll get back to you within 1 business day with a plain-language look at where automation would save you the most time — no obligation."
          />

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-sm text-slate">
              <Mail className="h-4 w-4 text-blue" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-charcoal">
                {siteConfig.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate">
              <Phone className="h-4 w-4 text-blue" />
              <span>+1 (469) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate">
              <Clock className="h-4 w-4 text-blue" />
              <span>We respond within 1 business day</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-line bg-gray-light p-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
