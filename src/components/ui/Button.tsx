import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  showArrow?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  showArrow = true,
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-blue text-white hover:bg-blue-dark"
      : "bg-white text-charcoal border border-line hover:border-slate";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
      )}
    </Link>
  );
}
