import { ReactNode } from "react";

export default function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-gray-light px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate ${className}`}
    >
      {children}
    </span>
  );
}
