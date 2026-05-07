export default function ZonesSection() {
  const zones = [
    {
      id: "01",
      title: "Strength Forge",
      desc: "Free weights, power racks, and elite Olympic lifting platforms.",
      img: "https://velocityx.com/assets/img/classes/class01.jpg"
    },
    {
      id: "02",
      title: "Cardio Matrix",
      desc: "High-end treadmills, rowers, and assault bikes to build your engine.",
      img: "https://velocityx.com/assets/img/classes/class02-big.jpg"
    },
    {
      id: "03",
      title: "Functional Lab",
      desc: "Turf, sleds, battle ropes and rig space for unconventional training.",
      img: "https://velocityx.com/assets/img/classes/class05-big.jpg"
    },
    {
      id: "04",
      title: "Combat Zone",
      desc: "Heavy bags and open mat space for martial arts and striking.",
      img: "https://velocityx.com/assets/img/classes/class06-big.jpg"
    }
  ];

  return (
    <section className="bg-black text-white brutal-border-b">
      <div className="flex flex-col md:flex-row border-b brutal-border-b border-white/20">
        <div className="p-6 md:p-12 md:w-1/3 border-b md:border-b-0 md:border-r border-white/20 flex flex-col justify-center bg-ink">
          <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.9] skew-text">
            Training <br /> <span className="text-neon">Zones</span>
          </h2>
          <p className="mt-6 font-sans text-white/50 max-w-sm">
            Four specialized arenas built for performance. Pick your battleground.
          </p>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2">
          {zones.map((zone, idx) => (
            <div 
              key={zone.id} 
              className={`group relative aspect-square sm:aspect-auto sm:min-h-[400px] border-white/20 p-6 flex flex-col justify-between overflow-hidden
                ${idx === 0 || idx === 1 ? 'border-b md:border-b-0' : ''}
                ${idx === 0 || idx === 2 ? 'border-r' : ''}
                ${idx === 0 || idx === 1 ? 'md:border-b' : ''}
              `}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={zone.img} 
                  alt={zone.title} 
                  className="w-full h-full object-cover grayscale opacity-20 transform group-hover:scale-105 group-hover:opacity-40 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              
              <div className="relative z-10 font-display text-4xl text-white/20 group-hover:text-neon transition-colors duration-300">
                {zone.id}
              </div>
              
              <div className="relative z-10 skew-text">
                <h3 className="font-display text-3xl mb-2 group-hover:text-neon transition-colors duration-300 uppercase">{zone.title}</h3>
                <p className="font-sans text-sm text-white/60 font-medium group-hover:text-white transition-colors">
                  {zone.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
