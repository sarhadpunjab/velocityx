import HeroSection from "@/components/hero";
import Marquee from "@/components/marquee";
import AboutSection from "@/components/about";
import ZonesSection from "@/components/zones";
import TrainersSection from "@/components/trainers";
import PricingSection from "@/components/pricing";
import MapSection from "@/components/map";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Fixed Navigation (Minimal) */}
      <nav className="fixed top-0 inset-x-0 h-20 md:h-24 px-6 md:px-12 flex items-center justify-between z-50 bg-black/50 backdrop-blur-md border-b border-white/10 text-white">
        <div className="font-display text-3xl uppercase tracking-tighter skew-text">
          Velocity<span className="text-neon">X</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-widest uppercase font-semibold">
          <a href="#" className="hover:text-neon transition-colors">Mission</a>
          <a href="#" className="hover:text-neon transition-colors">Zones</a>
          <a href="#" className="hover:text-neon transition-colors">Team</a>
          <a href="#" className="hover:text-neon transition-colors">Pricing</a>
        </div>
        <button className="md:hidden font-sans text-sm tracking-widest uppercase font-semibold">Menu</button>
      </nav>

      <HeroSection />
      <Marquee />
      <AboutSection />
      <ZonesSection />
      <TrainersSection />
      <PricingSection />
      <MapSection />
      <FooterSection />
    </main>
  );
}
