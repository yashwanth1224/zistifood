import type { ReactNode } from "react";

export function PhoneMockup({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative aspect-[9/19] rounded-[2.5rem] border-[10px] border-neutral-900 bg-white shadow-2xl ${className}`}
    >
      <div aria-hidden="true" className="absolute left-1/2 top-2 z-10 h-5 w-1/3 -translate-x-1/2 rounded-full bg-neutral-900" />
      <div className="size-full overflow-hidden rounded-[1.9rem]">{children}</div>
    </div>
  );
}
