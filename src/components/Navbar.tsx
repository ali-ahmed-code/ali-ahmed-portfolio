import { useEffect, useRef, useState } from "react";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { navigation, profile } from "../data/portfolio";
import { ExternalLink, publicAsset } from "./Shared";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -50% 0px", threshold: 0 },
    );
    ["home", ...navigation.map((item) => item.id)].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      )
        setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header ref={header} className="site-header">
      <nav className="page-container nav-inner" aria-label="Main navigation">
        <a
          className="wordmark"
          href="#home"
          aria-label="Ali Ahmed, home"
          onClick={() => setOpen(false)}
        >
          ali<span className="text-accent">.</span>
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${active === item.id ? "is-active" : ""}`}
              aria-current={active === item.id ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <ExternalLink
            href={profile.github}
            className="icon-link hidden sm:inline-flex"
            arrow={false}
            label="Ali Ahmed on GitHub (opens in a new tab)"
          >
            <FaGithub size={19} aria-hidden="true" />
          </ExternalLink>
          <ExternalLink
            href={profile.linkedin}
            className="icon-link hidden sm:inline-flex"
            arrow={false}
            label="Ali Ahmed on LinkedIn (opens in a new tab)"
          >
            <FaLinkedinIn size={18} aria-hidden="true" />
          </ExternalLink>
          <span
            className="mx-3 hidden h-5 w-px bg-line sm:block"
            aria-hidden="true"
          />
          <a
            href={publicAsset(profile.resumePath)}
            download="Ali-Ahmed-Resume.pdf"
            className="resume-button"
          >
            Resume <ArrowDownToLine size={15} aria-hidden="true" />
          </a>
          <button
            ref={toggle}
            type="button"
            className="icon-link ml-2 lg:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
        <div
          id="mobile-navigation"
          className={`mobile-navigation ${open ? "is-open" : ""}`}
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              onClick={() => {
                setOpen(false);
                document
                  .getElementById(item.id)
                  ?.focus({ preventScroll: true });
              }}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3 flex gap-5 border-t border-line pt-4">
            <ExternalLink href={profile.github} className="text-link">
              <FaGithub aria-hidden="true" /> GitHub
            </ExternalLink>
            <ExternalLink href={profile.linkedin} className="text-link">
              <FaLinkedinIn aria-hidden="true" /> LinkedIn
            </ExternalLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
