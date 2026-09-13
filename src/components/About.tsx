import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  Layers3,
  Users,
} from "lucide-react";
import { coursework } from "../data/portfolio";
import { Reveal, SectionHeading } from "./Shared";

const focuses = [
  {
    icon: Code2,
    title: "Full-stack development",
    text: "Connecting thoughtful interfaces with the data and logic that make them useful.",
  },
  {
    icon: Layers3,
    title: "Practical problem-solving",
    text: "Finding friction in a workflow, fixing the details, and measuring what improves.",
  },
  {
    icon: Users,
    title: "People-first teamwork",
    text: "Bringing clear communication and ownership from busy facilities to development teams.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section page-container"
      aria-labelledby="about-heading"
      tabIndex={-1}
    >
      <SectionHeading
        id="about-heading"
        number="01"
        label="ABOUT ME"
        title="A builder. A problem solver."
      >
        I like making things work better—for the people who actually use them.
      </SectionHeading>
      <div className="about-grid">
        <Reveal className="about-narrative">
          <p>
            I'm Ali, a Computer Science student at Arizona State University. My
            experience started with the everyday details that make a business
            work: cleaning up an e-commerce catalog, fixing broken appointment
            bookings, and making a 13-minute booking process take just six.
            Those projects showed me how a small technical improvement can make
            a real difference.
          </p>
          <p>
            Today, I bring that same mindset to personal projects and my role at
            ASU's Sun Devil Fitness Complex, where I coordinate with an
            80-person staff team and support thousands of daily users. I'm
            growing my full-stack skills while learning to build software that's
            reliable, straightforward, and useful.
          </p>
          <a className="text-link mt-6" href="#experience">
            See where I've put this to work{" "}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal className="education-card" delay={80}>
          <div className="mb-6 flex items-center justify-between">
            <span className="eyebrow">EDUCATION</span>
            <GraduationCap
              size={25}
              className="text-accent"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-xl font-bold tracking-tight">
            B.S. Computer Science
          </h3>
          <p className="mt-2 text-sm text-muted">
            Arizona State University · Tempe, AZ
          </p>
          <div className="education-metrics">
            <div>
              <span>EXPECTED GRADUATION</span>
              <strong>May 2027</strong>
            </div>
            <div>
              <span>GPA</span>
              <strong>
                3.5
                <span className="text-base font-normal text-muted"> / 4.0</span>
              </strong>
            </div>
          </div>
          <div className="space-y-4 border-t border-line pt-5">
            <div>
              <p className="text-sm font-semibold">
                New American Merit Scholarship
              </p>
              <p className="mt-1 text-sm text-accent">$14,500 USD</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Dean's List</p>
              <p className="mt-1 text-sm text-muted">Fall 2023 & Spring 2025</p>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {focuses.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} className="focus-card" delay={i * 60}>
            <Icon
              size={22}
              className="mb-5 text-accent"
              strokeWidth={1.6}
              aria-hidden="true"
            />
            <h3 className="mb-3 font-semibold">{title}</h3>
            <p className="text-sm leading-relaxed text-muted">{text}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="coursework-row">
        <h3 className="eyebrow">FOUNDATIONS I'M BUILDING ON</h3>
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {coursework.map((course) => (
            <li key={course} className="text-sm text-muted">
              {course}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
