import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { process } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="border-b border-line bg-white py-24">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Our Process"
          title="A simple, proven process."
          description="No black boxes. Here's exactly how we take you from first call to a live system."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-3 rounded-xl border border-line bg-white p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-sm font-semibold text-blue">
                  {step.number}
                </span>
                <span className="text-base font-semibold text-charcoal">
                  {step.title}
                </span>
                <span className="text-sm leading-relaxed text-slate">
                  {step.description}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
