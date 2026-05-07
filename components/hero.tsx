'use client';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden pt-32 pb-12 px-6 md:px-12 brutal-border-b">
      {/* Background Graphic or Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://picsum.photos/seed/gymhero/1920/1080" 
          alt="Gym interior" 
          className="object-cover w-full h-full grayscale opacity-50 block" 
        />
        {/* Top gradient to fade into header */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent z-10 block" />
      </div>

      <div className="relative z-20 flex flex-col items-start gap-8">
        {/* Micro-label */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-neon font-sans font-bold uppercase tracking-[0.2em] text-xs skew-text"
        >
          [ The Ultimate Fitness Destination ]
        </motion.div>

        {/* Huge Display Text */}
        <div className="flex flex-col uppercase font-display skew-text leading-[0.85] tracking-tight">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[12vw] md:text-[8rem] lg:text-[12rem] m-0"
          >
            Velocity<span className="text-neon">X</span>
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[10vw] md:text-[6rem] lg:text-[9rem] text-transparent m-0"
            style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}
          >
            Redefined
          </motion.h1>
        </div>

        {/* Call to Action Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8 w-full max-w-2xl justify-between"
        >
          <p className="font-sans text-white/70 max-w-sm text-sm sm:text-base leading-relaxed">
            Every lifted kilogram, every ran kilometer makes you stronger. Join the new shape of fitness.
          </p>
          <button className="group flex items-center gap-3 bg-neon text-black font-bold uppercase tracking-wider px-8 py-4 skew-text hover:bg-white transition-colors duration-300">
            <span className="skew-x-[5deg]">Join Now</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 skew-x-[5deg]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
