import { useEffect, useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`glass flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${scrolled ? "shadow-glow" : ""}`}
        >
          <a href="#" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand shadow-glow">
              <Sparkles size={18} className="text-white" />
            </span>
            <span className="text-lg font-bold tracking-tight">
              Scalio <span className="text-gradient">Media</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex">
            <span className="inline-flex h-10 items-center rounded-xl bg-gradient-brand px-5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105">
              Get a Quote
            </span>
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="md:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="glass mt-2 flex flex-col gap-2 rounded-2xl p-4 md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-gradient-brand px-3 py-2 text-center font-semibold text-white"
            >
              Get a Quote
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
