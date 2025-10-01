import heroProducts from "@/assets/hero-products.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-purple overflow-hidden border-b-[6px] border-orange flex items-center">
      {/* Circular wave patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border-[20px] border-purple-light/40"
              style={{
                transform: `scale(${0.3 + i * 0.15})`,
                opacity: 0.6 - i * 0.05,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="text-center md:text-left space-y-6">
            <div className="space-y-2">
              <h2 className="text-white font-black text-3xl uppercase tracking-wider text-outline-black" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                WhimsyBites
              </h2>
              <h1 className="text-orange font-black text-7xl uppercase leading-none text-outline-black italic transform -skew-y-2" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                Sweet
                <br />
                Surprise
              </h1>
              <h2 className="text-white font-black text-4xl uppercase tracking-wide text-outline-black" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                Sweeps
              </h2>
            </div>

            <p className="text-white font-black text-2xl uppercase max-w-md mx-auto md:mx-0 text-outline-black">
              This month, enter for a chance to win amazing sweet prizes
            </p>

            <button className="bg-orange hover:bg-orange-dark text-white font-black text-xl uppercase px-12 py-4 rounded-lg thick-border transform hover:scale-105 transition-transform italic">
              Enter Now
            </button>
          </div>

          {/* Right content - Product images */}
          <div className="relative">
            <img
              src={heroProducts}
              alt="WhimsyBites Products"
              className="w-full h-auto rounded-2xl thick-border shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
