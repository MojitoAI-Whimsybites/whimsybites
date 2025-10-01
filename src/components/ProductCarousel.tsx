import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import strawberry from "@/assets/product-strawberry.jpg";
import caramel from "@/assets/product-caramel.jpg";
import almond from "@/assets/product-almond.jpg";
import holiday from "@/assets/product-holiday.jpg";

const products = [
  {
    id: 1,
    name: "Strawberry Chocolate",
    price: "$29.99",
    image: strawberry,
    buttonColor: "bg-pink hover:bg-pink-dark",
    buttonText: "ADD TO BAG",
  },
  {
    id: 2,
    name: "Caramel Cups",
    price: "$29.99",
    image: caramel,
    buttonColor: "bg-orange-light hover:bg-orange",
    buttonText: "FIND A STORE",
  },
  {
    id: 3,
    name: "Almond Butter Cups",
    price: "$39.99",
    image: almond,
    buttonColor: "bg-orange hover:bg-orange-dark",
    buttonText: "ADD TO BAG",
  },
  {
    id: 4,
    name: "Holiday Special Cups",
    price: "$39.99",
    image: holiday,
    buttonColor: "bg-orange hover:bg-orange-dark",
    buttonText: "ADD TO BAG",
  },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToProduct = (index: number) => {
    setCurrentIndex(index);
    const el = itemRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
  };

  return (
    <section className="bg-cyan border-b-4 border-black">
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[350px_1fr] gap-8 items-start">
            {/* Left side text */}
            <div className="space-y-6">
              <h2 className="text-black font-black text-4xl md:text-5xl uppercase leading-tight" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                Shop Our
                <br />
                World's Best
                <br />
                Chocolate
              </h2>
              <p className="text-black font-bold text-lg">
                Show you care how your chocolate is sourced
              </p>
              <Link to="/shop-all" className="bg-cyan-dark hover:bg-cyan text-white font-black text-xl uppercase px-10 py-4 rounded-xl thin-border transform hover:scale-105 transition-transform italic inline-block text-center">
                Shop All
              </Link>
            </div>
                    
            {/* Product carousel */}
            <div className="relative min-w-0 overflow-hidden">
              <div 
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto w-full max-w-full min-w-0 pb-4 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    ref={(el) => (itemRefs.current[index] = el)}
                    className="flex-shrink-0 w-80 bg-white rounded-2xl thin-border p-6 snap-start"
                  >
                    <div className="flex flex-col h-full space-y-4">
                      <div className="relative h-96 flex items-center justify-center bg-gradient-to-b from-cyan/10 to-transparent rounded-xl overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      
                      <div className="text-center space-y-2 flex-grow flex flex-col justify-center min-h-[100px]">
                        <h3 className="text-black font-black text-2xl uppercase" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                          {product.name}
                        </h3>
                        <p className="text-black font-bold text-xl">
                          {product.price}
                        </p>
                      </div>

                      <button
                        className={`w-full ${product.buttonColor} text-white font-black text-sm uppercase px-6 py-4 rounded-xl thin-border transform hover:scale-105 transition-transform`}
                      >
                        {product.buttonText}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel dots */}
              <div className="flex justify-center gap-3 mt-6 pb-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToProduct(index)}
                    className={`w-3 h-3 rounded-full thin-border transition-all ${
                      index === currentIndex
                        ? "bg-black scale-125"
                        : "bg-white hover:bg-gray-300"
                    }`}
                    aria-label={`Go to product ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProductCarousel;
