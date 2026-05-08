import { Sparkles } from "lucide-react";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 md:items-center">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand shadow-glow">
            <Sparkles size={18} className="text-white" />
          </span>
          <span className="text-lg font-bold">
            Scalio <span className="text-gradient">Media</span>
          </span>
        </div>
        <div className="md:justify-self-center">
          <SocialIcons size={18} />
        </div>
        <p className="text-sm text-muted-foreground md:justify-self-end">
          © {new Date().getFullYear()} Scalio Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
