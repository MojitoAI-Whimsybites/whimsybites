import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import productMilkChocolate from "@/assets/product-milk-chocolate.jpg";
import productPeanutButter from "@/assets/product-peanut-butter.jpg";
import productAlmond from "@/assets/product-almond.jpg";

const ShopAll = () => {
  const products = [
    {
      id: 1,
      name: "Milk Chocolate",
      image: productMilkChocolate,
    },
    {
      id: 2,
      name: "Peanut Butter",
      image: productPeanutButter,
    },
    {
      id: 3,
      name: "Almond",
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
                className={`px-6 md:px-8 py-4 font-black text-sm md:text-base uppercase whitespace-nowrap border-r-4 border-black last:border-r-0 transition-colors ${
                  index === 0
                    ? 'bg-orange text-white'
                    : 'bg-[#F5E6D3] text-black hover:bg-orange hover:text-white'
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
                className="bg-cyan thick-border rounded-3xl p-8 hover:scale-105 transition-transform cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

          {/* Want it ASAP Banner */}
          <div className="bg-cyan thick-border rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 
              className="text-white font-black text-3xl md:text-4xl uppercase text-center md:text-left text-outline-black"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              WANT IT ASAP?
            </h2>
            <button className="bg-orange hover:bg-orange/90 text-white font-black text-lg uppercase px-12 py-4 rounded-xl thick-border whitespace-nowrap transition-colors">
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
