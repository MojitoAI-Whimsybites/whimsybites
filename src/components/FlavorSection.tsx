import flavorSwirl from "@/assets/flavor-swirl.jpg";

const FlavorSection = () => {
  return (
    <section className="border-b-[6px] border-orange">
      {/* Top swirl image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={flavorSwirl}
          alt="Flavor Swirl"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white font-black text-6xl uppercase text-center leading-tight text-outline-black">
            <span className="block">WhimsyBites</span>
            <span className="block text-7xl italic">A Flavor For</span>
            <span className="block text-7xl italic">Every Craving</span>
          </h2>
        </div>
        
        {/* Decorative bats */}
        <div className="absolute top-8 left-[15%] text-4xl">🦇</div>
        <div className="absolute top-16 right-[20%] text-3xl">🦇</div>
        <div className="absolute bottom-12 left-[25%] text-3xl">☁️</div>
        <div className="absolute bottom-8 right-[15%] text-4xl">☁️</div>
      </div>

      {/* Video thumbnails section */}
      <div className="bg-purple py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="relative aspect-video bg-gradient-to-br from-purple-light to-purple-dark rounded-lg thick-border overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-orange transition-colors">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-black border-b-8 border-b-transparent ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2">
                  <p className="text-white text-xs font-bold text-center">
                    Flavor Story #{i + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlavorSection;
