type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-widest text-blue">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold text-charcoal sm:text-4xl">{title}</h2>
      {description && (
        <p className="text-base leading-relaxed text-slate">{description}</p>
      )}
    </div>
  );
}
