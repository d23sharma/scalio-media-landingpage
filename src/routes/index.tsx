import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/scalio/Navbar";
import { Hero } from "@/components/scalio/Hero";
import { Services } from "@/components/scalio/Services";
import { WhyUs } from "@/components/scalio/WhyUs";
import { Contact } from "@/components/scalio/Contact";
import { Footer } from "@/components/scalio/Footer";
import { WhatsAppFab } from "@/components/scalio/WhatsAppFab";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Scalio Media — Social Media Marketing, Web & Reels" },
      {
        name: "description",
        content:
          "Scalio Media: websites & SEO, high-converting Instagram & Facebook ads for local businesses, and cinematic event reels. Grow your brand today.",
      },
      { property: "og:title", content: "Scalio Media — Grow your brand online" },
      { property: "og:description", content: "Websites, SEO, Meta ads, and cinematic reels." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
