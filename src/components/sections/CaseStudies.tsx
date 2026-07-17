import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import { caseStudies } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export default function CaseStudies() {
  return (
    <section className="border-b border-line bg-white py-24">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Example Scenarios"
          title="What automation actually looks like."
          description="These are illustrative scenarios based on real bottlenecks we build for — not reported results from a named client."
        />

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <AnimatedSection key={study.title} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-5 rounded-xl border border-line bg-white p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-base font-semibold text-charcoal">
                    {study.title}
                  </span>
                  <Badge className="shrink-0">Illustrative</Badge>
                </div>
                <span className="text-xs font-medium uppercase tracking-wide text-blue">
                  {study.industry}
                </span>

                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate">
                    Before
                  </span>
                  <p className="text-sm leading-relaxed text-slate">{study.before}</p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate">
                    Automation
                  </span>
                  <ul className="flex flex-col gap-1.5">
                    {study.automation.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-slate"
                      >
                        <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-blue" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex flex-col gap-1.5 rounded-lg bg-gray-light p-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate">
                    Result
                  </span>
                  <p className="text-sm font-medium text-charcoal">{study.result}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
