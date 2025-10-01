import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroDisplay from "@/assets/hero-display.jpg";

const Sweepstakes = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="min-h-screen bg-black border-b-4 border-black">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left side - Beige content area */}
          <div className="bg-[#F5E6D3] p-8 md:p-16 flex flex-col justify-center relative">
            {/* Decorative bats */}
            <div className="absolute top-8 right-12 text-4xl opacity-70">🦇</div>
            <div className="absolute top-32 left-8 text-3xl opacity-60">🦇</div>
            
            {/* Header Box */}
            <div className="bg-orange thick-border rounded-2xl p-8 mb-12 relative">
              <h1 className="text-white font-black text-4xl md:text-5xl uppercase leading-tight text-center text-outline-black" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                HOW TO ENTER
                <br />
                FOR A CHANCE
                <br />
                <span className="text-6xl md:text-7xl">TO WIN</span>
              </h1>
            </div>

            {/* Content sections */}
            <div className="space-y-10 max-w-lg">
              {/* Section 1 */}
              <div className="text-center">
                <h2 className="text-black font-black text-3xl md:text-4xl uppercase mb-4" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                  BUY WHIMSYBITES
                </h2>
                <p className="text-black font-bold text-lg mb-2">
                  Buy WhimsyBites in-store or at select online retailers.
                </p>
                <p className="text-black font-bold text-sm">
                  Free entry also available. See <a href="#" className="underline hover:text-orange transition-colors">Full Rules</a> for details.
                </p>
              </div>

              {/* Section 2 */}
              <div className="text-center">
                <h2 className="text-black font-black text-3xl md:text-4xl uppercase mb-4" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                  UPLOAD A PHOTO
                  <br />
                  OF YOUR RECEIPT
                </h2>
                <p className="text-black font-bold text-lg">
                  Each WhimsyBites item on your receipt will equal 1 entry
                  <br />
                  up to a maximum of 2 entries per day.
                </p>
              </div>

              {/* Section 3 */}
              <div className="text-center">
                <h2 className="text-black font-black text-3xl md:text-4xl uppercase mb-4" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                  SUMMON YOUR LUCK
                </h2>
                <p className="text-black font-bold text-lg">
                  Submit up to 2 entries every day for a chance to win.
                </p>
              </div>
            </div>

            {/* Decorative clouds */}
            <div className="absolute bottom-32 right-16 text-3xl opacity-40">☁️</div>
            <div className="absolute top-1/2 left-12 text-2xl opacity-30">☁️</div>
          </div>

          {/* Right side - Purple with waves and product */}
          <div className="bg-purple relative overflow-hidden min-h-[600px] lg:min-h-screen flex items-center justify-center">
            {/* Circular wave patterns - darker purple waves */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%]">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: '30px solid rgba(75, 40, 109, 0.5)',
                      transform: `scale(${0.3 + i * 0.15})`,
                      opacity: 0.7 - i * 0.06,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Product display */}
            <div className="relative z-10 p-8">
              <img
                src={heroDisplay}
                alt="WhimsyBites Holiday Products"
                className="w-full max-w-2xl h-auto rounded-3xl thin-border"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sweepstakes;
