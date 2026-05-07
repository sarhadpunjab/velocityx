import { ArrowRight } from "lucide-react";

export default function TrainersSection() {
  const trainers = [
    { name: "Duane", spec: "Personal Trainer", img: "https://velocityx.fitness/assets/trainers/photos/1571401047duane.jpg" },
    { name: "Saad", spec: "Personal Trainer", img: "https://velocityx.fitness/assets/trainers/photos/1573039514Saad.jpg" },
    { name: "Muhammad Wasif", spec: "Personal Trainer", img: "https://velocityx.fitness/assets/trainers/photos/1573119178Muhammad-Wasif.jpg" },
    { name: "Muavia", spec: "Personal Trainer", img: "https://velocityx.fitness/assets/trainers/photos/1571636270Muavia.jpg" },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white brutal-border-b relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 pt-12">
          <div>
            <h2 className="font-display uppercase text-5xl md:text-8xl leading-[0.8] skew-text">
              Elite <br />
              <span className="text-white/20" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>Squad</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 font-sans font-bold uppercase tracking-wider text-xs border-b border-neon pb-1 text-neon hover:text-white hover:border-white transition-colors">
            Meet the entire team <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {trainers.map((trainer, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-ink brutal-border">
                <img 
                  src={trainer.img} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black to-transparent opacity-80" />
                
                {/* Number overlay */}
                <div className="absolute top-4 right-4 font-display text-4xl text-neon opacity-0 group-hover:opacity-100 transition-opacity skew-text">
                  0{i + 1}
                </div>
              </div>
              
              <div className="skew-text">
                <h3 className="font-display text-3xl uppercase group-hover:text-neon transition-colors duration-300">{trainer.name}</h3>
                <p className="font-sans text-sm text-white/50 uppercase tracking-widest font-semibold mt-1">
                  {trainer.spec}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
