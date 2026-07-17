import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import FlowDiagram from "@/components/sections/FlowDiagram";

export default function Hero() {
  return (
    <section className="border-b border-line bg-white pb-20 pt-16 sm:pt-24">
      <Container className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex max-w-xl flex-col items-start gap-6">
          <Badge>Automation systems for service businesses</Badge>
          <h1 className="text-4xl font-bold leading-[1.1] text-charcoal sm:text-5xl">
            Less admin. More customers. Better operations.
          </h1>
          <p className="text-lg leading-relaxed text-slate">
            Sterling Local builds AI-powered systems that eliminate repetitive work,
            keep every customer message answered, and give your team hours back
            every week.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact">Book a Free Automation Audit</Button>
            <Button href="/#process" variant="secondary" showArrow={false}>
              See How It Works
            </Button>
          </div>
        </div>

        <div className="w-full max-w-md lg:max-w-none lg:flex-1">
          <FlowDiagram />
        </div>
      </Container>
    </section>
  );
}
