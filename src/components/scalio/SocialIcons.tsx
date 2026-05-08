import { Facebook, Instagram, Youtube, Twitter, AtSign } from "lucide-react";

const items = [
  { Icon: Instagram, label: "Instagram", color: "from-pink-500 via-fuchsia-500 to-amber-400" },
  { Icon: Facebook, label: "Facebook", color: "from-blue-500 to-blue-700" },
  { Icon: Youtube, label: "YouTube", color: "from-red-500 to-red-700" },
  { Icon: Twitter, label: "X / Twitter", color: "from-zinc-200 to-zinc-500" },
  { Icon: AtSign, label: "Threads", color: "from-zinc-300 to-zinc-600" },
];

export function SocialIcons({ size = 22 }: { size?: number }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {items.map(({ Icon, label, color }, i) => (
        <a
          key={label}
          href="#"
          aria-label={label}
          className="group glass relative grid h-12 w-12 place-items-center rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-glow"
          style={{ animation: `float ${5 + i * 0.4}s ease-in-out ${i * 0.2}s infinite` }}
        >
          <span
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 transition-opacity duration-300 group-hover:opacity-90`}
          />
          <Icon
            size={size}
            className="relative z-10 text-foreground transition-colors group-hover:text-white"
          />
        </a>
      ))}
    </div>
  );
}
