import { useState } from "react";
import { ArrowDown, ArrowDownRight, ArrowUpRight, MapPin, Play } from "lucide-react";
import { FaJava } from "react-icons/fa6";
import { SiJavascript, SiPython } from "react-icons/si";
import { ali, introduceAli, stats } from "../data/portfolio";
import { Reveal } from "./Shared";

function DeveloperCard() {
  const [execution, setExecution] = useState({ id: 0, output: "" });

  function runIntroduction() {
    const output = introduceAli();
    setExecution((previous) => ({ id: previous.id + 1, output }));
  }

  return (
    <div
      className="developer-card"
      role="group"
      aria-label="Run Ali Ahmed's introduction"
    >
      <div className="code-toolbar">
        <span className="flex gap-1.5" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>ali.ts</span>
        <span className="text-accent">TS</span>
      </div>
      <div className="code-body">
        <p className="code-comment">// a little about me</p>
        <p>
          <span className="code-keyword">const</span> ali = {"{"}
        </p>
        <div className="code-indent">
          <p>
            name: <span className="code-string">'{ali.name}'</span>,
          </p>
          <p>
            studying: <span className="code-string">'{ali.studying}'</span>,
          </p>
          <p>
            university: <span className="code-string">'{ali.university}'</span>,
          </p>
          <p>
            graduation: <span className="code-number">{ali.graduation}</span>,
          </p>
          <p>focus: [</p>
          <div className="code-indent">
            <p className="code-string">'{ali.focus[0]}',</p>
            <p className="code-string">'{ali.focus[1]}'</p>
          </div>
          <p>],</p>
          <p>
            alwaysLearning: <span className="code-keyword">{String(ali.alwaysLearning)}</span>
          </p>
        </div>
        <p>{"};"}</p>
        <p className="mt-5">console.<span className="code-keyword">log</span>(</p>
        <div className="code-indent">
          <p><span className="code-string">{'`${ali.name} is a `'}</span> +</p>
          <p><span className="code-string">{'`${ali.studying} student at `'}</span> +</p>
          <p><span className="code-string">{'`${ali.university}.`'}</span></p>
        </div>
        <p>);</p>
      </div>
      <div className="code-status">
        <span>COMPUTER SCIENCE @ ASU</span>
        <button
          type="button"
          className="code-run-button"
          onClick={runIntroduction}
          aria-label="Run introduction code"
          aria-controls="ali-code-output"
        >
          <Play size={14} fill="currentColor" aria-hidden="true" />
          Run
        </button>
      </div>
      <div
        id="ali-code-output"
        className={execution.id > 0 ? "code-output" : "sr-only"}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {execution.id > 0 && (
          <div key={execution.id} className="code-output-result">
            <p className="code-output-label">OUTPUT</p>
            <p className="code-output-text">{execution.output}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="hero page-container"
        aria-labelledby="hero-heading"
        tabIndex={-1}
      >
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow mb-7">
              <span className="hello-line" aria-hidden="true" /> HELLO, I'M ALI
              AHMED
            </p>
            <h1 id="hero-heading">
              Code that
              <br />
              makes a<br />
              <span className="text-accent">difference.</span>
            </h1>
            <p className="hero-description">
              ASU Computer Science student building full-stack apps and making
              everyday web systems work better.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button button-primary" href="#projects">
                View My Work <ArrowDownRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="#about">
                About Me <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-technologies">
              <span>TECH I WORK WITH</span>
              <div className="flex flex-wrap items-center gap-5">
                <span>
                  <FaJava size={23} aria-hidden="true" /> Java
                </span>
                <span>
                  <SiJavascript size={18} aria-hidden="true" /> JavaScript
                </span>
                <span>
                  <SiPython size={19} aria-hidden="true" /> Python
                </span>
              </div>
            </div>
          </div>
          <div className="hero-aside">
            <div className="mb-5 flex items-center justify-between text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} aria-hidden="true" /> Tempe, Arizona
              </span>
              <span className="font-mono text-xs">ARIZONA, USA</span>
            </div>
            <DeveloperCard />
            <p className="mt-5 text-right font-mono text-xs text-muted">
              CURIOUS BY DEFAULT. BUILDING WITH PURPOSE.
            </p>
          </div>
        </div>
        <div className="hero-bottom">
          <span>SOFTWARE · SYSTEMS · PEOPLE</span>
          <a href="#about">
            A little more about me <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
      </section>
      <div className="stats-wrap">
        <Reveal className="page-container">
          <dl className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
                <dd className="stat-detail">{stat.detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </>
  );
}
