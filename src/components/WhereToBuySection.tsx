import walmartLogo from "@/assets/logos/walmart.png";
import sevenElevenLogo from "@/assets/logos/7eleven.png";
import targetLogo from "@/assets/logos/target.png";
import krogerLogo from "@/assets/logos/kroger.png";
import bestbuyLogo from "@/assets/logos/bestbuy.png";
import cvsLogo from "@/assets/logos/cvs.png";
import costcoLogo from "@/assets/logos/costco.png";

const WhereToBuySection = () => {
  const retailers = [
    { name: "Walmart", logo: walmartLogo },
    { name: "7-ELEVEN", logo: sevenElevenLogo },
    { name: "TARGET", logo: targetLogo },
    { name: "Kroger", logo: krogerLogo },
    { name: "Best Buy", logo: bestbuyLogo },
    { name: "CVS", logo: cvsLogo },
  ];

  return (
    <section className="relative bg-purple py-16 border-b-[6px] border-orange overflow-hidden">
      {/* Orange wavy top border */}
      <div className="absolute top-0 w-full h-12 bg-orange overflow-hidden">
        <svg className="absolute top-0 w-full h-16" preserveAspectRatio="none" viewBox="0 0 1440 60">
          <path d="M0,30 Q360,50 720,30 T1440,30 L1440,0 L0,0 Z" fill="hsl(var(--purple-primary))" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 mt-8">
        <div className="thick-border bg-orange-light rounded-3xl p-8 md:p-16 relative overflow-hidden">
          {/* Background "STAY SWEET" text pattern */}
          <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
            <div className="text-[120px] md:text-[200px] font-black uppercase leading-tight text-orange whitespace-nowrap" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              STAY SWEET STAY SWEET
            </div>
          </div>

          {/* Bat decorations */}
          <div className="absolute top-8 left-12 text-5xl opacity-60">
            🦇
          </div>
          <div className="absolute bottom-12 right-16 text-5xl opacity-60">
            🦇
          </div>

          <div className="text-center space-y-12 relative z-10">
            <h2 className="text-white font-black text-6xl md:text-8xl uppercase text-outline-black" style={{ 
              fontFamily: "'Archivo Black', sans-serif",
              WebkitTextStroke: '3px black',
              paintOrder: 'stroke fill'
            }}>
              Where to Buy
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {retailers.map((retailer, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl thick-border p-8 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer min-h-[120px]"
                >
                  <img 
                    src={retailer.logo} 
                    alt={retailer.name}
                    className="max-w-full h-auto max-h-16 object-contain"
                  />
                </div>
              ))}
              
              {/* Costco spanning full width */}
              <div className="md:col-span-3 bg-white rounded-2xl thick-border p-8 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer min-h-[120px]">
                <img 
                  src={costcoLogo} 
                  alt="Costco"
                  className="max-w-full h-auto max-h-16 object-contain"
                />
              </div>
            </div>

            <div className="text-center space-y-6">
              <p className="text-white font-black text-3xl uppercase tracking-wider" style={{ 
                fontFamily: "'Archivo Black', sans-serif",
                WebkitTextStroke: '2px black'
              }}>
                & MORE
              </p>
              <button className="bg-purple hover:bg-purple-dark text-white font-black text-xl md:text-2xl uppercase px-16 py-5 rounded-xl thick-border transform hover:scale-105 transition-transform italic">
                Find a Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereToBuySection;
