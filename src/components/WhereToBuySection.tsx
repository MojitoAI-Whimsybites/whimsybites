const WhereToBuySection = () => {
  const retailers = [
    { name: "Walmart", color: "text-blue-600" },
    { name: "7-ELEVEN", color: "text-green-600" },
    { name: "TARGET", color: "text-red-600" },
    { name: "Kroger", color: "text-blue-700" },
    { name: "sam's club", color: "text-blue-600" },
    { name: "Albertsons", color: "text-blue-600" },
    { name: "COSTCO", color: "text-red-600" },
  ];

  return (
    <section className="relative bg-orange-light py-16 border-b-[6px] border-orange overflow-hidden">
      {/* Background text pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="text-[200px] font-black uppercase leading-none text-orange-light">
          STAY SWEET STAY SWEET
        </div>
      </div>

      {/* Decorative bats */}
      <div className="absolute top-8 left-[10%] text-4xl animate-bounce">
        🦇
      </div>
      <div className="absolute bottom-12 right-[15%] text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>
        🦇
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="thick-border bg-orange-light rounded-3xl p-8 md:p-12">
          <div className="text-center space-y-12">
            <h2 className="text-white font-black text-6xl uppercase text-outline-black">
              Where to Buy
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {retailers.map((retailer, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl thick-border p-6 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer ${
                    index === retailers.length - 1 ? "md:col-span-3" : ""
                  }`}
                >
                  <span className={`${retailer.color} font-black text-2xl uppercase`}>
                    {retailer.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-white font-bold text-sm uppercase mb-4">& MORE</p>
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
