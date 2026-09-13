import { HeartHandshake, Users } from "lucide-react";
import { leadership } from "../data/portfolio";
import { Reveal, SectionHeading } from "./Shared";

export default function Leadership() {
  return (
    <section
      className="section section-tinted"
      aria-labelledby="leadership-heading"
    >
      <div className="page-container">
        <SectionHeading
          id="leadership-heading"
          number="04"
          label="BEYOND THE CODE"
          title="Showing up for people."
        >
          Building a good team matters as much to me as building a good product.
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2">
          {leadership.map((item, index) => {
            const Icon = index === 0 ? Users : HeartHandshake;
            return (
              <Reveal
                className="leadership-card"
                key={item.organization}
                delay={index * 70}
              >
                <div className="mb-7 flex items-start justify-between gap-4">
                  <Icon
                    size={24}
                    className="text-accent"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs text-muted">
                    {item.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{item.role}</h3>
                <p className="mt-2 text-sm text-accent">{item.organization}</p>
                <ul className="experience-highlights">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="leadership-metric">
                  <strong>{item.metric}</strong>
                  <span>{item.metricLabel}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
