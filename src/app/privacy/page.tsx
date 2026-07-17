import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { buildMetadata, siteConfig } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="bg-white py-20">
      <Container className="mx-auto flex max-w-2xl flex-col gap-6">
        <h1 className="text-3xl font-bold text-charcoal">Privacy Policy</h1>
        <p className="text-sm text-slate">Last updated: July 2026</p>

        <p className="text-base leading-relaxed text-slate">
          Sterling Local (&quot;we,&quot; &quot;us&quot;) respects your privacy.
          This policy explains what information we collect through this website
          and how we use it.
        </p>

        <h2 className="text-xl font-semibold text-charcoal">Information We Collect</h2>
        <p className="text-base leading-relaxed text-slate">
          When you submit our contact form, we collect the information you
          provide directly — your name, business name, email, phone number, and
          message. We do not use tracking cookies or third-party analytics
          beyond standard, privacy-respecting website hosting logs.
        </p>

        <h2 className="text-xl font-semibold text-charcoal">How We Use It</h2>
        <p className="text-base leading-relaxed text-slate">
          We use the information you submit solely to respond to your inquiry
          and, if you become a client, to deliver our services. We do not sell
          or share your information with third parties.
        </p>

        <h2 className="text-xl font-semibold text-charcoal">Contact</h2>
        <p className="text-base leading-relaxed text-slate">
          Questions about this policy can be sent to{" "}
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
