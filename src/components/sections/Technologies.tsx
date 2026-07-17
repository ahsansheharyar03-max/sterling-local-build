import Container from "@/components/ui/Container";
import { technologies } from "@/lib/content";

export default function Technologies() {
  return (
    <section className="border-b border-line bg-gray-light py-16">
      <Container className="flex flex-col items-center gap-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-slate">
          Trusted Technologies
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-lg font-semibold text-slate/80 grayscale transition-all hover:text-charcoal hover:grayscale-0"
            >
              {tech}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
