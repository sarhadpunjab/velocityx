export default function Marquee() {
  const words = ["LIMITLESS", "POWER", "ENDURANCE", "STRENGTH", "VELOCITY", "COMMUNITY", "FOCUS"];
  const set = [...words, "•", ...words, "•", ...words, "•"];

  return (
    <div className="w-full overflow-hidden bg-neon text-black py-4 brutal-border-b flex items-center border-[var(--color-neon)]">
      <div className="marquee-track flex whitespace-nowrap">
        {set.map((word, i) => (
          <span 
            key={i} 
            className="font-display text-4xl lg:text-6xl uppercase px-4 skew-text"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
