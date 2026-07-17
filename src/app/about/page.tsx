import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactCta from "@/components/sections/ContactCta";
import { principles } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Why Sterling Local exists: local service businesses shouldn't have to run on manual admin. Our philosophy and principles.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-white py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="About Sterling Local"
            title="We believe growth shouldn't depend on manual work."
          />
        </Container>
      </section>

      <section className="border-b border-line bg-white py-20">
        <Container className="mx-auto flex max-w-2xl flex-col gap-6">
          <p className="text-lg leading-relaxed text-slate">
            Most local service businesses aren&apos;t held back by a lack of demand.
            They&apos;re held back by how much of the day gets swallowed by admin —
            manually scheduling jobs, chasing invoices, remembering to ask for a
            review, re-typing the same customer details into three different tools.
          </p>
          <p className="text-lg leading-relaxed text-slate">
            Sterling Local exists to remove that layer of manual work entirely. We
            build automation systems that run in the background — connected to the
            tools a business already uses — so owners and their teams can spend
            their time on customers and jobs, not paperwork.
          </p>
          <p className="text-lg leading-relaxed text-slate">
            We&apos;re not a software product you have to learn, and we&apos;re not
            a generic marketing agency. We&apos;re a small, hands-on team that
            designs a system around how your business actually operates, builds
            it, and keeps it running.
          </p>
        </Container>
      </section>

      <section className="border-b border-line bg-gray-light py-20">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading title="What we believe." align="center" />
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

      <section className="border-b border-line bg-white py-20">
        <Container className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue">
            Who&apos;s Behind It
          </span>
          <p className="text-base leading-relaxed text-slate">
            Sterling Local is led by Sheharyar Ahsan, Founder &amp; Automation
            Consultant, working directly with every client to design and build
            their system — no account handoffs, no outsourced delivery team.
          </p>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
