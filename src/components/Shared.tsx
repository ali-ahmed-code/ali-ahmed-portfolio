import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || motion.matches || !("IntersectionObserver" in window))
      return;
    // Only conceal content below the viewport; above-the-fold content is always readable.
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    element.dataset.reveal = "pending";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.reveal = "visible";
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px 30px 0px" },
    );
    observer.observe(element);
    const showOnMotionChange = () => {
      if (motion.matches) {
        element.dataset.reveal = "visible";
        observer.disconnect();
      }
    };
    motion.addEventListener("change", showOnMotionChange);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", showOnMotionChange);
      delete element.dataset.reveal;
    };
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  number,
  label,
  title,
  children,
  id,
}: {
  number: string;
  label: string;
  title: string;
  children?: ReactNode;
  id: string;
}) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">
        <span>{number}</span> {label}
      </p>
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <h2 id={id} className="section-title">
          {title}
        </h2>
        {children && (
          <p className="max-w-sm text-base leading-relaxed text-muted">
            {children}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Skills and technologies">
      {items.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ExternalLink({
  href,
  children,
  className = "",
  arrow = true,
  label,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  arrow?: boolean;
  label?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
    >
      {children}
      {arrow && <ArrowUpRight size={17} aria-hidden="true" />}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
