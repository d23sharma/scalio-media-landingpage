import { useState } from "react";
import { Send, MessageCircle, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const WHATSAPP_NUMBER = "918408811234";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  service: z.string().min(1, "Pick a service"),
  budget: z.string().optional(),
  message: z.string().trim().min(5, "Tell us a bit more").max(1000),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = { name: "", email: "", phone: "", service: "", budget: "", message: "" };

export function Contact() {
  const [data, setData] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const update =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setData((d) => ({ ...d, [k]: e.target.value }));
      setErrors((x) => ({ ...x, [k]: undefined }));
    };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Partial<Record<keyof FormState, string>> = {};
      for (const issue of result.error.issues)
        errs[issue.path[0] as keyof FormState] = issue.message;
      setErrors(errs);
      return;
    }
    const v = result.data;
    const text =
      `*New Enquiry — Scalio Media*%0A%0A` +
      `*Name:* ${encodeURIComponent(v.name)}%0A` +
      `*Email:* ${encodeURIComponent(v.email)}%0A` +
      `*Phone:* ${encodeURIComponent(v.phone)}%0A` +
      `*Service:* ${encodeURIComponent(v.service)}%0A` +
      (v.budget ? `*Budget:* ${encodeURIComponent(v.budget)}%0A` : "") +
      `*Message:* ${encodeURIComponent(v.message)}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    setData(initial);
  };

  const fieldCls =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-white/10 focus:ring-2 focus:ring-primary/40";

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="glass inline-flex rounded-full px-4 py-1.5 text-xs font-medium">
              Let's talk
            </span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Tell us about your <span className="text-gradient">project</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Fill the form and we'll receive your enquiry directly on WhatsApp. We typically
              respond within a few hours.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-4 rounded-2xl p-4 transition-transform hover:-translate-y-1"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600">
                  <MessageCircle className="text-white" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    WhatsApp
                  </div>
                  <div className="font-semibold">+91 84088 11234</div>
                </div>
              </a>
              <div className="glass flex items-center gap-4 rounded-2xl p-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand">
                  <Phone className="text-white" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Call
                  </div>
                  <div className="font-semibold">+91 84088 11234</div>
                </div>
              </div>
              <div className="glass flex items-center gap-4 rounded-2xl p-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600">
                  <Mail className="text-white" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </div>
                  <div className="font-semibold">hello@scaliomedia.com</div>
                </div>
              </div>
              <div className="glass flex items-center gap-4 rounded-2xl p-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-rose-500">
                  <MapPin className="text-white" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Studio
                  </div>
                  <div className="font-semibold">Available across India</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="glass-strong relative overflow-hidden rounded-3xl p-6 md:p-8 lg:col-span-3"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-fuchsia-500/30 blur-3xl" />
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Full name
                </label>
                <input
                  className={fieldCls}
                  placeholder="Jane Doe"
                  value={data.name}
                  onChange={update("name")}
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Email
                </label>
                <input
                  className={fieldCls}
                  placeholder="jane@brand.com"
                  value={data.email}
                  onChange={update("email")}
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Phone
                </label>
                <input
                  className={fieldCls}
                  placeholder="+91 98xxxxxxxx"
                  value={data.phone}
                  onChange={update("phone")}
                />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Service
                </label>
                <select className={fieldCls} value={data.service} onChange={update("service")}>
                  <option value="" className="bg-background">
                    Choose a service
                  </option>
                  <option value="Website & SEO" className="bg-background">
                    Website & SEO
                  </option>
                  <option value="Instagram & Facebook Ads" className="bg-background">
                    Instagram & Facebook Ads
                  </option>
                  <option value="Event / Memory Reels" className="bg-background">
                    Event / Memory Reels
                  </option>
                  <option value="Not sure yet" className="bg-background">
                    Not sure yet
                  </option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-xs text-destructive">{errors.service}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Budget (optional)
                </label>
                <input
                  className={fieldCls}
                  placeholder="e.g. ₹25,000 / month"
                  value={data.budget}
                  onChange={update("budget")}
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  rows={5}
                  className={fieldCls}
                  placeholder="Tell us about your business and goals…"
                  value={data.message}
                  onChange={update("message")}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-brand px-6 py-4 font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
            >
              Send via WhatsApp
              <Send size={18} className="transition-transform group-hover:translate-x-1" />
            </button>

            {sent && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-500/15 px-4 py-3 text-sm text-emerald-300">
                <CheckCircle2 size={18} />
                Opening WhatsApp… your enquiry is on its way to our team.
              </div>
            )}
            <p className="mt-3 text-xs text-muted-foreground">
              By submitting, your details are sent directly to our WhatsApp at +91 84088 11234.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
