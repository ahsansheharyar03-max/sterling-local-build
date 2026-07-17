import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { principles } from "@/lib/content";

export default function WhyChooseUs() {
  return (
    <section className="border-b border-line bg-gray-light py-24">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Why Businesses Choose Sterling Local"
          title="Our principles."
          description="We're early in our client roster, so we lean on how we work — not a highlight reel. This is what guides every system we build."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          {principles.map((principle, i) => {
            const Icon = principle.icon;
            return (
              <AnimatedSection key={principle.title} delay={i * 0.08}>
                <div className="flex h-full items-start gap-4 rounded-xl border border-line bg-white p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-light text-blue">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-base font-semibold text-charcoal">
                      {principle.title}
                    </span>
                    <span className="text-sm leading-relaxed text-slate">
                      {principle.description}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
