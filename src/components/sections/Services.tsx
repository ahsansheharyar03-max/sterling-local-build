import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="border-b border-line bg-white py-24">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="What We Do"
          title="Automation built for outcomes, not features."
          description="Every system we build is designed around one question: what does this give your team back?"
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.slug} delay={i * 0.08}>
                <Link
                  href={`/services#${service.slug}`}
                  className="flex h-full flex-col gap-4 rounded-xl border border-line bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-light text-blue">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-base font-semibold text-charcoal">
                    {service.outcome}
                  </span>
                  <span className="text-sm leading-relaxed text-slate">
                    {service.description}
                  </span>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        <Link
          href="/services"
          className="text-sm font-medium text-blue hover:text-blue-dark"
        >
          View All Services →
        </Link>
      </Container>
    </section>
  );
}
