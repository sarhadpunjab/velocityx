import { Facebook, Instagram, Twitter } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
        <div className="md:w-1/2">
          <h2 className="font-display text-5xl md:text-8xl uppercase skew-text mb-6 leading-none">
            Join The <br />
            <span className="text-neon">Movement</span>
          </h2>
          <p className="font-sans text-white/50 max-w-sm mb-8">
            Don't just stand there. Step inside, grab the bar, and change your life.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-none border border-white/20 flex items-center justify-center hover:border-neon hover:text-neon transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-none border border-white/20 flex items-center justify-center hover:border-neon hover:text-neon transition-colors duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-none border border-white/20 flex items-center justify-center hover:border-neon hover:text-neon transition-colors duration-300">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 grid grid-cols-2 gap-8 font-sans">
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-white/50 border-b border-white/10 pb-2 mb-4">Location</h4>
            <address className="not-italic text-sm text-white/80 space-y-1">
              <p>D91, KDA Scheme No. 1</p>
              <p>Tipu Sultan Rd. Karachi</p>
            </address>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-white/50 border-b border-white/10 pb-2 mb-4">Hours</h4>
            <div className="text-sm text-white/80 space-y-1">
              <p className="uppercase">Mon - Sat: 7:00 AM - 11:00 PM</p>
              <p className="text-neon mt-2 uppercase tracking-wide text-[10px]">Sundays & Public Holidays Closed</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-white/50 border-b border-white/10 pb-2 mb-4">Contact</h4>
            <ul className="text-sm text-white/80 space-y-2 flex flex-col items-start">
              <li><a href="tel:02134550068" className="hover:text-neon transition-colors">0213-4550068</a></li>
              <li><a href="mailto:info@velocityx.com" className="hover:text-neon transition-colors">info@velocityx.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-white/50 border-b border-white/10 pb-2 mb-4">Legal</h4>
            <ul className="text-sm text-white/80 space-y-2 flex flex-col items-start">
              <li><a href="#" className="hover:text-neon transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-neon transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-sans text-white/40 uppercase tracking-widest">
        <span>&copy; {new Date().getFullYear()} VelocityX Gym. All rights reserved.</span>
        <span className="mt-4 md:mt-0">Design inspired by ReShape.pl</span>
      </div>
    </footer>
  );
}
