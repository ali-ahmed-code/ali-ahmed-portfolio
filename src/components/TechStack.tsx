import { Award } from "lucide-react";
import { FaJava } from "react-icons/fa6";
import {
  SiC,
  SiCplusplus,
  SiCss,
  SiGnubash,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiNodedotjs,
  SiPython,
  SiSupabase,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";
import { Reveal, SectionHeading } from "./Shared";

const groups: {
  title: string;
  subtitle: string;
  skills: { name: string; icon: IconType }[];
}[] = [
  {
    title: "Languages",
    subtitle: "The fundamentals behind the work.",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Bash", icon: SiGnubash },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
    ],
  },
  {
    title: "Tools & platforms",
    subtitle: "What helps me build and collaborate.",
    skills: [
      { name: "VS Code", icon: VscVscode },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "GitHub", icon: SiGithub },
      { name: "Jira", icon: SiJira },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="section page-container" aria-labelledby="stack-heading">
      <SectionHeading
        id="stack-heading"
        number="05"
        label="MY TOOLKIT"
        title="The tools behind the work."
      >
        A foundation in the fundamentals. Always adding to it.
      </SectionHeading>
      <div className="stack-grid">
        {groups.map((group, index) => (
          <Reveal key={group.title} delay={index * 60}>
            <div className="mb-6">
              <h3 className="text-xl font-bold">{group.title}</h3>
              <p className="mt-2 text-sm text-muted">{group.subtitle}</p>
            </div>
            <ul className="stack-items">
              {group.skills.map(({ name, icon: Icon }) => (
                <li key={name}>
                  <Icon size={24} aria-hidden="true" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
      <Reveal className="certification">
        <Award size={23} className="shrink-0 text-accent" aria-hidden="true" />
        <div>
          <h3 className="font-semibold">Programming for Everybody</h3>
          <p className="mt-1 text-sm text-muted">
            University of Michigan · Coursera
          </p>
        </div>
        <span className="font-mono text-xs text-muted sm:ml-auto">
          SEPT 2025
        </span>
      </Reveal>
    </section>
  );
}
