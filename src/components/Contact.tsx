import { useEffect, useRef, useState } from "react";
import { ArrowUp, ArrowUpRight, Check, Copy, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { profile } from "../data/portfolio";
import { ExternalLink, Reveal } from "./Shared";

export default function Contact() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  const copyEmail = async () => {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
    timer.current = setTimeout(() => setCopyState("idle"), 4000);
  };

  return (
    <footer
      id="contact"
      className="contact"
      aria-labelledby="contact-heading"
      tabIndex={-1}
    >
      <div className="page-container">
        <Reveal className="contact-main">
          <div>
            <p className="eyebrow mb-7">HAVE SOMETHING IN MIND?</p>
            <h2 id="contact-heading">
              Let's build
              <br />
              <span className="text-accent">something useful.</span>
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted">
              Open to software engineering internships, graduate opportunities
              for May 2027, and collaborations that turn good ideas into real
              things.
            </p>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="contact-arrow"
            aria-label={`Email Ali Ahmed at ${profile.email}`}
          >
            <ArrowUpRight strokeWidth={1} aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal className="contact-links">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <a href={`mailto:${profile.email}`} className="email-link">
                <Mail size={19} aria-hidden="true" />
                <span>{profile.email}</span>
              </a>
              <button
                type="button"
                className="icon-link"
                onClick={copyEmail}
                aria-label={
                  copyState === "copied" ? "Email copied" : "Copy email address"
                }
              >
                {copyState === "copied" ? (
                  <Check size={17} className="text-accent" aria-hidden="true" />
                ) : (
                  <Copy size={16} aria-hidden="true" />
                )}
              </button>
            </div>
            <p className="copy-feedback" role="status" aria-live="polite">
              {copyState === "copied"
                ? "Email copied to clipboard."
                : copyState === "error"
                  ? "Please select and copy the email address above."
                  : ""}
            </p>
            <a href={profile.phoneHref} className="text-link text-muted">
              <Phone size={15} aria-hidden="true" />
              {profile.phone}
            </a>
          </div>
          <div className="flex flex-wrap items-start gap-x-7 gap-y-4">
            <ExternalLink href={profile.github} className="text-link">
              <FaGithub size={18} aria-hidden="true" />
              GitHub
            </ExternalLink>
            <ExternalLink href={profile.linkedin} className="text-link">
              <FaLinkedinIn size={17} aria-hidden="true" />
              LinkedIn
            </ExternalLink>
          </div>
        </Reveal>
        <div className="footer-bottom">
          <a
            href="#home"
            className="wordmark"
            aria-label="Ali Ahmed, back to top"
          >
            ali<span className="text-accent">.</span>
          </a>
          <p>© {new Date().getFullYear()} Ali Ahmed. Built with intention.</p>
          <a href="#home" className="text-link text-muted">
            Back to top <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
