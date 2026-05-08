export default function GymMap() {
  return (
    <div className="w-full h-[400px] md:h-[500px] border-t border-b border-white/20 relative z-10 filter grayscale-[0.8] hover:grayscale-0 transition-all duration-700 bg-ink">
      <iframe 
        src="https://maps.google.com/maps?q=Velocity%20X,%20D91,%20KDA%20Scheme%201,%20Tipu%20Sultan%20Rd,%20Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="VelocityX Location Map"
      />
    </div>
  );
}

