import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import productMilkChocolate from "@/assets/product-milk-chocolate.jpg";
import productPeanutButter from "@/assets/product-peanut-butter.jpg";
import productAlmond from "@/assets/product-almond.jpg";

const ShopAll = () => {
  const products = [
    {
      id: 1,
      name: "HALLOWEEN JACK-O-LANTERN CUPS",
      subtitle: "30 PACKS | $39.99",
      image: productMilkChocolate,
    },
    {
      id: 2,
      name: "HALLOWEEN SNACK-SIZE VARIETY BAG",
      subtitle: "5 PACKS OF 30 BARS | $49.99",
      image: productPeanutButter,
    },
    {
      id: 3,
      name: "CHOCOLATE MILK",
      subtitle: "2 OPTIONS",
      image: productAlmond,
    },
  ];

  const categories = [
    "SHOP ALL",
    "HALLOWEEN",
    "FLASH DEALS",
    "CHOCOLATE",
    "CUPS",
    "GUMMIES",
    "MILK",
    "BUNDLES",
    "LIMITED"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Sunburst */}
      <section className="relative bg-cyan overflow-hidden">
        {/* Sunburst background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              background: `repeating-conic-gradient(
                from 0deg at 50% 50%,
                #22D3EE 0deg 4deg,
                #06B6D4 4deg 8deg
              )`
            }}
          />
        </div>

        {/* Title */}
        <div className="relative z-10 py-24 md:py-32">
          <h1 
            className="text-white font-black text-7xl md:text-9xl uppercase text-center leading-none text-outline-black"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            SHOP ALL
          </h1>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-[#F5E6D3] border-b-4 border-black">
        <div className="overflow-x-auto">
          <div className="flex min-w-max">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 md:px-8 py-4 font-black text-sm md:text-base uppercase whitespace-nowrap transition-colors italic ${
                  index === 0
                    ? 'bg-[#4A2C2A] text-white'
                    : 'bg-[#F5E6D3] text-black hover:bg-[#4A2C2A] hover:text-white'
                }`}
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-[#F5E6D3] py-12">
        <div className="container mx-auto px-6 md:px-12">
          {/* Product Count */}
          <div className="text-center mb-8">
            <p className="text-black font-black text-xl uppercase" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              {products.length} PRODUCTS
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-cyan rounded-3xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                style={{ border: '3px solid black' }}
              >
                {/* Product Image */}
                <div className="p-8 pb-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Wavy divider */}
                <div className="relative h-8 bg-cyan">
                  <svg 
                    className="absolute bottom-0 w-full" 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                    style={{ height: '30px' }}
                  >
                    <path 
                      d="M0,0 Q150,40 300,0 T600,0 T900,0 T1200,0 L1200,120 L0,120 Z" 
                      fill="#F5E6D3"
                    />
                  </svg>
                </div>

                {/* Product Info */}
                <div className="bg-[#F5E6D3] p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 
                      className="text-black font-black text-lg uppercase leading-tight"
                      style={{ fontFamily: "'Archivo Black', sans-serif" }}
                    >
                      {product.name}
                    </h3>
                    <p 
                      className="text-black font-black text-sm"
                      style={{ fontFamily: "'Archivo Black', sans-serif" }}
                    >
                      {product.subtitle}
                    </p>
                  </div>
                  
                  <button 
                    className="w-full bg-[#D4FF00] hover:bg-[#C4EF00] text-black font-black text-base uppercase py-3 rounded-lg transition-colors italic"
                    style={{ fontFamily: "'Archivo Black', sans-serif" }}
                  >
                    ADD TO BAG
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Want it ASAP Banner */}
          <div 
            className="bg-cyan rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ border: '3px solid black' }}
          >
            <h2 
              className="text-white font-black text-3xl md:text-4xl uppercase text-center md:text-left italic"
              style={{ 
                fontFamily: "'Archivo Black', sans-serif",
                WebkitTextStroke: '2px black',
                paintOrder: 'stroke fill'
              }}
            >
              WANT IT ASAP?
            </h2>
            <button 
              className="bg-[#FF1493] hover:bg-[#E6127D] text-black font-black text-lg uppercase px-12 py-4 rounded-xl whitespace-nowrap transition-colors italic"
              style={{ 
                fontFamily: "'Archivo Black', sans-serif",
                border: '3px solid black'
              }}
            >
              FIND A STORE
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShopAll;
