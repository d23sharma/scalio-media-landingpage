import { Rocket, Award, Clock, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "120+", label: "Happy clients" },
  { icon: Rocket, value: "350%", label: "Avg. growth" },
  { icon: Award, value: "8+", label: "Industries" },
  { icon: Clock, value: "24/7", label: "Support" },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass-strong relative overflow-hidden rounded-3xl px-6 py-12 md:px-12">
          <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl" />
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                Why brands pick <span className="text-gradient">Scalio Media</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                We're a tight-knit creative team obsessed with measurable outcomes. From
                pixel-perfect websites to scroll-stopping reels and ROI-driven ad campaigns — we
                build everything under one roof.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="glass rounded-2xl p-5 transition-transform hover:-translate-y-1"
                  style={{ animation: `fade-up 0.6s ease-out ${i * 0.1}s both` }}
                >
                  <s.icon className="text-primary" size={22} />
                  <div className="mt-3 text-3xl font-extrabold text-gradient">{s.value}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
