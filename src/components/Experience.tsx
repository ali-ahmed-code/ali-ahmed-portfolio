import { ArrowUpRight } from "lucide-react";
import { experience } from "../data/portfolio";
import { Reveal, SectionHeading, Tags } from "./Shared";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section page-container"
      aria-labelledby="experience-heading"
      tabIndex={-1}
    >
      <SectionHeading
        id="experience-heading"
        number="03"
        label="THE JOURNEY SO FAR"
        title="Experience that adds up."
      >
        Different environments. The same drive to make things run better.
      </SectionHeading>
      <ol className="timeline">
        {experience.map((job, index) => (
          <li
            key={job.company}
            className={`timeline-item ${job.current ? "timeline-current" : ""}`}
          >
            <Reveal className="timeline-layout" delay={index * 40}>
              <div className="timeline-date">
                <p>{job.period}</p>
                <span>{job.location}</span>
                {job.current && (
                  <span className="current-label">CURRENT ROLE</span>
                )}
              </div>
              <div className="timeline-content">
                <p className="mb-2 text-sm font-medium text-accent">
                  {job.company}
                </p>
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                  {job.title}
                </h3>
                <ul className="experience-highlights">
                  {job.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Tags items={job.tags} />
                <p className="impact-line">
                  <ArrowUpRight size={16} aria-hidden="true" />
                  {job.impact}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
