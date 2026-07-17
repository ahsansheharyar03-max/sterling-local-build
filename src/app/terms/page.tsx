import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { buildMetadata, siteConfig } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="bg-white py-20">
      <Container className="mx-auto flex max-w-2xl flex-col gap-6">
        <h1 className="text-3xl font-bold text-charcoal">Terms of Service</h1>
        <p className="text-sm text-slate">Last updated: July 2026</p>

        <p className="text-base leading-relaxed text-slate">
          By using this website or engaging Sterling Local for services, you
          agree to the following terms.
        </p>

        <h2 className="text-xl font-semibold text-charcoal">Services</h2>
        <p className="text-base leading-relaxed text-slate">
          Sterling Local provides automation consulting and implementation
          services. The specific scope, deliverables, and pricing for any
          engagement are agreed upon separately in a written proposal before
          work begins.
        </p>

        <h2 className="text-xl font-semibold text-charcoal">Website Use</h2>
        <p className="text-base leading-relaxed text-slate">
          This website is provided for informational purposes. We make
          reasonable efforts to keep it accurate but make no guarantees about
          completeness or fitness for a particular purpose.
        </p>

        <h2 className="text-xl font-semibold text-charcoal">Limitation of Liability</h2>
        <p className="text-base leading-relaxed text-slate">
          Sterling Local is not liable for indirect or consequential damages
          arising from use of this website. Liability for delivered services is
          governed by the terms of the applicable client agreement.
        </p>

        <h2 className="text-xl font-semibold text-charcoal">Contact</h2>
        <p className="text-base leading-relaxed text-slate">
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-blue hover:text-blue-dark">
            {siteConfig.email}
          </a>
          .
        </p>

        <p className="text-sm text-slate/70">
          This page is a general-purpose placeholder and not a substitute for
          legal advice tailored to your jurisdiction and business.
        </p>
      </Container>
    </section>
  );
}
