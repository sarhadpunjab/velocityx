import { Check, User, Users } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "1 Month",
      singlePrice: "Rs 16,000",
      couplePrice: "Rs 30,000",
      period: "/ month",
      features: ["Floor Trainer", "Basic workout plan", "Cardio Matrix", "Strength Forge"],
      highlight: false
    },
    {
      name: "3 Months",
      singlePrice: "Rs 42,000",
      couplePrice: "Rs 78,000",
      period: "/ 3 months",
      features: ["Floor Trainer", "Basic workout plan", "Cardio Matrix", "Strength Forge"],
      highlight: true
    },
    {
      name: "6 Months",
      singlePrice: "Rs 66,000",
      couplePrice: "Rs 120,000",
      period: "/ 6 months",
      features: ["Floor Trainer", "Basic workout plan", "Cardio Matrix", "Strength Forge"],
      highlight: false
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-black text-white brutal-border-b">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display uppercase text-5xl md:text-7xl skew-text mb-4">
            Select Your <span className="text-neon">Subscription</span>
          </h2>
          <p className="font-sans text-white/50 max-w-sm mx-auto uppercase tracking-widest text-sm font-semibold">
            Registration Fees: Single Rs 10,000/-  |  Couple Rs 18,000/-
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center lg:px-12">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`p-8 flex flex-col h-full bg-ink brutal-border transform transition-transform hover:-translate-y-2 relative
                ${plan.highlight ? 'border-neon ring-1 ring-neon bg-black md:scale-105 z-10 py-12 shadow-[0_0_30px_rgba(204,255,0,0.1)]' : ''}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neon text-black font-display uppercase px-4 py-1 skew-text text-sm z-20">
                  Most Popular
                </div>
              )}
              
              <div className="skew-text mb-8">
                <h3 className="font-display text-3xl uppercase mb-6 text-center">{plan.name}</h3>
                
                <div className="space-y-4">
                  <div className="flex flex-col border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2 mb-1 text-white/50">
                      <User size={16} /> 
                      <span className="font-sans text-xs uppercase tracking-wider font-bold">Single</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className={`font-display text-4xl ${plan.highlight ? 'text-neon' : ''}`}>{plan.singlePrice}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1 text-white/50">
                      <Users size={16} /> 
                      <span className="font-sans text-xs uppercase tracking-wider font-bold">Couple</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className={`font-display text-4xl ${plan.highlight ? 'text-neon' : ''}`}>{plan.couplePrice}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-neon' : 'text-white/40'}`} />
                    <span className="font-sans text-sm text-white/80 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 font-bold uppercase tracking-widest text-sm skew-text transition-colors
                ${plan.highlight ? 'bg-neon text-black hover:bg-white' : 'bg-white/10 text-white hover:bg-neon hover:text-black'}`}>
                <span className="skew-x-[5deg] block">Choose {plan.name}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
