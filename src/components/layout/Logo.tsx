import Image from "next/image";

const ASPECT = 591 / 728;

export default function Logo({ dark = false }: { dark?: boolean }) {
  const height = 28;
  const width = Math.round(height * ASPECT);

  return (
    <span className="flex items-center gap-2">
      <Image
        src={dark ? "/logo-mark-light.png" : "/logo-mark.png"}
        alt="Sterling Local"
        width={width}
        height={height}
        priority
      />
      <span
        className={`font-heading text-lg font-bold leading-none ${
          dark ? "text-white" : "text-charcoal"
        }`}
      >
        STERLING
        <span className="block text-[10px] font-semibold tracking-[0.2em] text-blue">
          LOCAL
        </span>
      </span>
    </span>
  );
}
