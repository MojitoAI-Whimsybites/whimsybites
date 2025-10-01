import walmartLogo from "@/assets/logos/walmart.png";
import sevenElevenLogo from "@/assets/logos/7eleven.png";
import targetLogo from "@/assets/logos/target.png";
import krogerLogo from "@/assets/logos/kroger.png";
import samsClubLogo from "@/assets/logos/samsclub.png";
import albertsonsLogo from "@/assets/logos/albertsons.png";
import costcoLogo from "@/assets/logos/costco.png";

const WhereToBuySection = () => {
  const retailers = [
    { name: "Walmart", logo: walmartLogo },
    { name: "7-ELEVEN", logo: sevenElevenLogo },
    { name: "TARGET", logo: targetLogo },
    { name: "Kroger", logo: krogerLogo },
    { name: "sam's club", logo: samsClubLogo },
    { name: "Albertsons", logo: albertsonsLogo },
  ];

  return (
    <section className="relative bg-orange-light py-16 border-b-[6px] border-orange overflow-hidden">
      {/* Background text pattern - "STAY SWEET" repeated */}
      <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
        <div className="text-[180px] font-black uppercase leading-none text-orange whitespace-nowrap">
          STAY SWEET STAY SWEET STAY SWEET
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="thick-border bg-orange-light rounded-3xl p-8 md:p-12">
          <div className="text-center space-y-12">
            <h2 className="text-white font-black text-6xl md:text-7xl uppercase text-outline-black" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              Where to Buy
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {retailers.map((retailer, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl thick-border p-6 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer min-h-[100px]"
                >
                  <img 
                    src={retailer.logo} 
                    alt={retailer.name}
                    className="max-w-full h-auto max-h-16 object-contain"
                  />
                </div>
              ))}
              
              {/* Costco spanning full width */}
              <div className="md:col-span-3 bg-white rounded-xl thick-border p-6 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer min-h-[100px]">
                <img 
                  src={costcoLogo} 
                  alt="Costco"
                  className="max-w-full h-auto max-h-16 object-contain"
                />
              </div>
            </div>

            <div className="text-center">
              <p className="text-white font-black text-2xl uppercase mb-6" style={{ fontFamily: "'Archivo Black', sans-serif" }}>& MORE</p>
              <button className="bg-purple hover:bg-purple-dark text-white font-black text-xl uppercase px-12 py-4 rounded-lg thick-border transform hover:scale-105 transition-transform italic">
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
