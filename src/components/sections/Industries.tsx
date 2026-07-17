import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { industries } from "@/lib/content";

export default function Industries() {
  return (
    <section id="industries" className="border-b border-line bg-gray-light py-24">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="We've done the homework on how your trade actually runs."
          description="Every industry has its own bottlenecks. We build systems around yours, not a one-size-fits-all template."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <AnimatedSection key={industry.name} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-3 rounded-xl border border-line bg-white p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-light text-blue">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue">
                    {industry.name}
                  </span>
                  <span className="text-base font-semibold text-charcoal">
                    {industry.headline}
                  </span>
                  <span className="text-sm leading-relaxed text-slate">
                    {industry.description}
                  </span>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
