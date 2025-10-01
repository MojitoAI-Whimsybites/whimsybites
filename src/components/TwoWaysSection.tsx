import chocolateMilk from "@/assets/chocolate-milk.jpg";
import sourCandy from "@/assets/sour-candy.jpg";

const TwoWaysSection = () => {
  return (
    <section className="border-b-[6px] border-orange">
      {/* Header */}
      <div className="bg-pink py-8 border-b-[6px] border-cyan">
        <h2 className="text-white font-black text-5xl md:text-6xl uppercase text-center text-outline-black">
          Two New Ways to Feast
        </h2>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 bg-cyan">
        {/* Chocolate Milk */}
        <div className="relative p-12 flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-gradient-radial from-cyan/50 to-cyan" />
          
          {/* Decorative wavy divider - hidden on mobile, shown on desktop */}
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-8">
            <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 32 800">
              <path d="M0,0 Q16,100 0,200 T0,400 T0,600 T0,800 L32,800 L32,0 Z" fill="hsl(var(--cyan-primary))" opacity="0.3"/>
            </svg>
          </div>
          
          <div className="relative z-10 text-center space-y-6 max-w-md">
            <h3 className="text-white font-black text-4xl uppercase leading-tight text-outline-black">
              The Chocolate
              <br />
              Taste You Love,
              <br />
              Now in a Bottle
            </h3>

            <div className="relative">
              <img
                src={chocolateMilk}
                alt="Chocolate Milk"
                className="w-64 h-auto mx-auto transform hover:scale-105 transition-transform"
              />
              <div className="absolute -bottom-4 -left-4 text-4xl animate-bounce">
                🍫
              </div>
              <div className="absolute -top-4 -right-4 text-3xl animate-bounce" style={{ animationDelay: '0.3s' }}>
                🍫
              </div>
            </div>

            <button className="bg-pink hover:bg-pink-dark text-white font-black text-xl uppercase px-10 py-4 rounded-lg thick-border transform hover:scale-105 transition-transform">
              Try Chocolate Milk
            </button>

            <p className="text-white font-bold text-sm uppercase">
              Chocolate Milk Exclusively At
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="text-white font-bold text-xs">Walmart</span>
              <span className="text-white font-bold text-xs">7-Eleven</span>
              <span className="text-white font-bold text-xs">Speedway</span>
            </div>
          </div>
        </div>

        {/* Sour Candy */}
        <div className="relative p-12 flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-gradient-radial from-cyan/50 to-cyan" />
          
          <div className="relative z-10 text-center space-y-6 max-w-md">
            <h3 className="text-white font-black text-4xl uppercase leading-tight text-outline-black">
              Your Favorite
              <br />
              Sour Candy,
              <br />
              Recharged
            </h3>

            <div className="relative">
              <img
                src={sourCandy}
                alt="Sour Candy"
                className="w-64 h-auto mx-auto transform hover:scale-105 transition-transform"
              />
              <div className="absolute -bottom-4 -left-4 text-4xl animate-bounce">
                ⚡
              </div>
              <div className="absolute -top-4 -right-4 text-4xl animate-bounce" style={{ animationDelay: '0.3s' }}>
                ⚡
              </div>
            </div>

            <button className="bg-purple hover:bg-purple-dark text-white font-black text-xl uppercase px-10 py-4 rounded-lg thick-border transform hover:scale-105 transition-transform">
              Try Sour Strikes
            </button>

            <p className="text-white font-bold text-sm uppercase">
              Sour Strikes Exclusively At
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="text-white font-bold text-xs">Target</span>
              <span className="text-white font-bold text-xs">7-Eleven</span>
              <span className="text-white font-bold text-xs">Speedway</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoWaysSection;
