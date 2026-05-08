import { ArrowRight, Play, Sparkles } from "lucide-react";
import { SocialIcons } from "./SocialIcons";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 md:pt-44">
      {/* Animated blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-3xl animate-blob" />
        <div
          className="absolute right-0 top-40 h-96 w-96 rounded-full bg-cyan-400/25 blur-3xl animate-blob"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-violet-500/30 blur-3xl animate-blob"
          style={{ animationDelay: "8s" }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium">
            <Sparkles size={14} className="text-primary" />
            Social Media Marketing Agency
          </span>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            Scale your brand <br />
            with <span className="text-gradient">Scalio Media</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Websites, SEO, high-converting Instagram & Facebook ads, and cinematic reels for your
            brand and life's biggest moments — all in one creative studio.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-7 py-4 font-semibold text-white shadow-glow transition-transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
            </a>
            <a
              href="#services"
              className="glass inline-flex items-center gap-2 rounded-2xl px-7 py-4 font-semibold transition-colors hover:bg-white/10"
            >
              <Play size={16} /> Explore Services
            </a>
          </div>
          <div className="mt-10">
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
              We grow you across
            </p>
            <SocialIcons />
          </div>
        </div>

        {/* Floating glass cards visual */}
        <div className="relative h-[460px] animate-fade-in">
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative h-80 w-80">
              <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
              <div className="glass-strong absolute inset-0 grid place-items-center rounded-full animate-spin-slow">
                <div className="glass grid h-56 w-56 place-items-center rounded-full">
                  <Sparkles size={64} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
          {[
            { top: "8%", left: "0%", text: "+340% Engagement", delay: "0s" },
            { top: "10%", right: "0%", text: "Page 1 on Google", delay: "1s" },
            { bottom: "20%", left: "4%", text: "10M+ Reels Views", delay: "2s" },
            { bottom: "8%", right: "6%", text: "5x ROAS on Ads", delay: "3s" },
          ].map((c, i) => (
            <div
              key={i}
              className="glass absolute rounded-2xl px-4 py-3 text-sm font-semibold animate-float"
              style={{ ...c, animationDelay: c.delay } as React.CSSProperties}
            >
              {c.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
