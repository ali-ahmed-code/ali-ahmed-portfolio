import { ArrowUpRight, CloudSun, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { profile, projects } from "../data/portfolio";
import type { Project } from "../data/portfolio";
import {
  ExternalLink,
  publicAsset,
  Reveal,
  SectionHeading,
  Tags,
} from "./Shared";

function ProjectVisual({ project }: { project: Project }) {
  if (project.image)
    return (
      <div className="project-visual">
        <img
          src={publicAsset(project.image.src)}
          alt={project.image.alt}
          loading="lazy"
          decoding="async"
          width="900"
          height="680"
          className="h-full w-full object-cover"
        />
      </div>
    );
  if (project.id !== "weather-app")
    return (
      <div className="project-visual project-visual-generic" aria-hidden="true">
        <Code2 size={64} strokeWidth={1} />
        <span>{project.title}</span>
      </div>
    );
  return (
    <div className="project-visual weather-visual" aria-hidden="true">
      <span className="weather-overline">WEATHER APP / PROJECT OVERVIEW</span>
      <div className="weather-mark">
        <CloudSun strokeWidth={0.9} />
        <div>
          <span>Every forecast.</span>
          <span>A clearer view.</span>
        </div>
      </div>
      <div className="weather-footer">
        <span>OPENWEATHERMAP API</span>
        <span>
          °C <i>/</i> °F
        </span>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal
      className={project.featured ? "md:col-span-2" : ""}
      delay={index * 70}
    >
      <article
        className={`project-card ${project.featured ? "project-featured" : ""}`}
      >
        <ProjectVisual project={project} />
        <div className="project-content">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="eyebrow">{project.category}</p>
            {project.period && (
              <span className="font-mono text-xs text-muted">
                {project.period}
              </span>
            )}
            <span className="project-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
          <p className="mt-4 leading-relaxed text-muted">
            {project.description}
          </p>
          <ul className="project-highlights">
            {project.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <Tags items={project.tags} />
          <div className="mt-7 flex flex-wrap gap-6 border-t border-line pt-6">
            <ExternalLink
              href={project.githubUrl || profile.github}
              className="text-link"
            >
              <FaGithub size={18} aria-hidden="true" />
              {project.githubUrl ? "View source" : "GitHub profile"}
            </ExternalLink>
            {project.liveUrl && (
              <ExternalLink href={project.liveUrl} className="text-link">
                Live project
              </ExternalLink>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section section-tinted"
      aria-labelledby="projects-heading"
      tabIndex={-1}
    >
      <div className="page-container">
        <SectionHeading
          id="projects-heading"
          number="02"
          label="SELECTED WORK"
          title="From learning to building."
        >
          A personal project putting front-end fundamentals and real-time data
          to work.
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <Reveal className="mt-7 flex justify-end">
          <ExternalLink
            href={profile.github}
            className="text-link text-muted"
            arrow={false}
          >
            More on GitHub <ArrowUpRight size={17} aria-hidden="true" />
          </ExternalLink>
        </Reveal>
      </div>
    </section>
  );
}
