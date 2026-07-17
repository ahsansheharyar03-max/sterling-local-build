import type { Metadata } from "next";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactCta from "@/components/sections/ContactCta";
import { services, industries } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Workflow automation, customer communication, review management, and CRM integrations built for local service businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line bg-white py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Services"
            title="Automation solutions built for service businesses."
            description="Every engagement starts with a free audit. From there, we build one or all four of these systems depending on where your business is losing the most time."
          />
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="flex flex-col gap-16">
          {services.map((service, i) => {
            const Icon = service.icon;
            const relevantIndustries = industries.map((ind) => ind.name);
            return (
              <AnimatedSection key={service.slug} delay={i * 0.05}>
                <div
                  id={service.slug}
                  className="grid scroll-mt-24 grid-cols-1 gap-8 border-b border-line pb-16 last:border-b-0 last:pb-0 lg:grid-cols-3"
                >
                  <div className="flex flex-col gap-4 lg:col-span-1">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-light text-blue">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-blue">
                      {service.name}
                    </span>
                    <h2 className="text-2xl font-bold text-charcoal">
                      {service.outcome}
                    </h2>
                  </div>

                  <div className="flex flex-col gap-6 lg:col-span-2">
                    <p className="text-base leading-relaxed text-slate">
                      {service.description}
                    </p>
                    <div className="flex flex-col gap-3">
                      <span className="text-sm font-semibold text-charcoal">
                        What&apos;s included
                      </span>
                      <ul className="flex flex-col gap-2.5">
                        {service.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-slate"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-xs uppercase tracking-wide text-slate/70">
                      Commonly used by: {relevantIndustries.join(", ")}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
