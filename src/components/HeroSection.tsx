import heroDisplay from "@/assets/hero-display.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-purple overflow-hidden flex items-center border-b-4 border-black">
      {/* Circular wave patterns - darker purple waves */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full"
              style={{
                border: '25px solid rgba(75, 40, 109, 0.5)',
                transform: `scale(${0.3 + i * 0.15})`,
                opacity: 0.7 - i * 0.06,
              }}
            />
          ))}
        </div>
      </div>


      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid xl:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center md:text-left space-y-8">
            <div className="space-y-3">
              <h2 className="text-white font-black text-3xl md:text-4xl uppercase tracking-wider text-outline-black" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                WhimsyBites
              </h2>
              <h1 className="text-orange font-black text-6xl md:text-8xl uppercase leading-none text-outline-black italic" style={{ 
                fontFamily: "'Archivo Black', sans-serif",
                transform: 'skewY(-3deg)',
                letterSpacing: '-0.02em'
              }}>
                HOLIDAY
              </h1>
              <h2 className="text-white font-black text-4xl md:text-5xl uppercase tracking-wide text-outline-black" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                SWEEPS
              </h2>
            </div>

            <p className="text-white font-black text-xl md:text-2xl uppercase max-w-md mx-auto md:mx-0 text-outline-black leading-tight">
              This Holiday, enter for a chance to win amazing sweet prizes
            </p>

            <button className="bg-orange hover:bg-orange-dark text-black font-black text-xl md:text-2xl uppercase px-14 py-5 rounded-xl thick-border transform hover:scale-105 transition-transform italic">
              Enter If You Dare
            </button>
          </div>

          {/* Right content - Product display */}
          <div className="relative">
            <img
              src={heroDisplay}
              alt="WhimsyBites Holiday Products"
              className="w-full h-auto rounded-3xl thick-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
