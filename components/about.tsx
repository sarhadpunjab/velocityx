export default function AboutSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-black text-white brutal-border-b relative overflow-hidden">
      {/* Abstract large number in background */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 font-display text-[40vw] leading-none text-white/[0.03] select-none pointer-events-none">
        01
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        <div className="flex-1 flex flex-col justify-center">
          <div className="font-sans text-neon text-sm font-bold uppercase tracking-widest mb-6 border-l-2 border-neon pl-4">
            Our Mission
          </div>
          <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.9] skew-text mb-8">
            The Journey <br />
            <span className="text-white/40">Makes You</span> <br />
            Stronger
          </h2>
          <div className="space-y-6 font-sans text-lg text-white/70 max-w-xl">
            <p>
              At VelocityX, we are committed to helping you reach your fitness goals. Our experience runs deep and our trainers know just how to get your adrenaline rushing.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/10 w-fit">
            <div>
              <div className="font-display text-5xl text-neon mb-2">2500+</div>
              <div className="font-sans text-sm text-white/50 uppercase tracking-wider font-semibold">Sq Meters</div>
            </div>
            <div>
              <div className="font-display text-5xl text-neon mb-2">24/7</div>
              <div className="font-sans text-sm text-white/50 uppercase tracking-wider font-semibold">Access</div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative min-h-[400px]">
          <div className="absolute inset-0 bg-neon/10 translate-x-4 translate-y-4" />
          <img 
            src="https://velocityx.com/assets/img/about/high01.jpg" 
            alt="Gym training" 
            className="relative z-10 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}
