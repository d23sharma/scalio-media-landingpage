import {
  Globe,
  Megaphone,
  Clapperboard,
  ArrowRight,
  Search,
  TrendingUp,
  Target,
  Heart,
  Cake,
  Building2,
  Plane,
  Dumbbell,
  Home as HomeIcon,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    accent: "from-cyan-400 to-blue-600",
    title: "Websites & SEO",
    desc: "Fast, beautiful, conversion-ready websites paired with on-page and technical SEO that gets you found, ranked, and chosen.",
    points: [
      { icon: Search, text: "Keyword & competitor research" },
      { icon: TrendingUp, text: "On-page & technical SEO" },
      { icon: Target, text: "Lead-gen funnels & analytics" },
    ],
  },
  {
    icon: Megaphone,
    accent: "from-fuchsia-500 to-pink-600",
    title: "Instagram & Facebook Ads",
    desc: "High-conversion business reels and laser-targeted Meta ad campaigns built for local businesses to flood your inbox with leads.",
    points: [
      { icon: Plane, text: "Travel agencies" },
      { icon: Dumbbell, text: "Gyms & fitness studios" },
      { icon: HomeIcon, text: "Real estate businesses" },
    ],
  },
  {
    icon: Clapperboard,
    accent: "from-amber-400 to-rose-500",
    title: "Event & Memory Reels",
    desc: "Cinematic reels that turn your special moments into shareable stories — built to be remembered and re-watched.",
    points: [
      { icon: Cake, text: "Birthdays & anniversaries" },
      { icon: Building2, text: "Showroom vehicle delivery" },
      { icon: Heart, text: "Kitty parties & celebrations" },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="glass inline-flex rounded-full px-4 py-1.5 text-xs font-medium">
            What we do
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Three services. <span className="text-gradient">One growth engine.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether you need traffic, leads, or unforgettable content — Scalio Media delivers
            end-to-end creative & marketing power.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="glass group relative overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
              style={{ animation: `fade-up 0.7s ease-out ${i * 0.15}s both` }}
            >
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${s.accent} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
              />
              <div
                className={`mb-5 inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${s.accent} shadow-glow`}
              >
                <s.icon className="text-white" size={26} />
              </div>
              <h3 className="text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-6 space-y-3">
                {s.points.map((p) => (
                  <li key={p.text} className="flex items-center gap-3 text-sm">
                    <span className="glass grid h-8 w-8 place-items-center rounded-lg">
                      <p.icon size={14} className="text-primary" />
                    </span>
                    {p.text}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Get started <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
