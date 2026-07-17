import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ContactCta() {
  return (
    <section className="bg-charcoal py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-xl text-3xl font-bold text-white sm:text-4xl">
          Ready to get time back?
        </h2>
        <p className="max-w-lg text-base leading-relaxed text-white/70">
          Book a free automation audit and we&apos;ll show you exactly where your
          business is losing hours to manual work — no obligation.
        </p>
        <Button href="/contact">Book a Free Automation Audit</Button>
      </Container>
    </section>
  );
}
