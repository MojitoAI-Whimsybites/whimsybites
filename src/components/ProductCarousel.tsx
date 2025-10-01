import { useState, useRef } from "react";
import milkChocolate from "@/assets/product-milk-chocolate.jpg";
import hazelnut from "@/assets/product-hazelnut.jpg";
import peanutButter from "@/assets/product-peanut-butter.jpg";
import halloween from "@/assets/product-halloween.jpg";

const products = [
  {
    id: 1,
    name: "Milk Chocolate",
    price: "$29.99",
    image: milkChocolate,
    buttonColor: "bg-pink hover:bg-pink-dark",
    buttonText: "ADD TO BAG",
  },
  {
    id: 2,
    name: "Hazelnut Cups",
    price: "$29.99",
    image: hazelnut,
    buttonColor: "bg-orange-light hover:bg-orange text-black",
    buttonText: "FIND A STORE",
  },
  {
    id: 3,
    name: "Peanut Butter Cups",
    price: "$39.99",
    image: peanutButter,
    buttonColor: "bg-orange hover:bg-orange-dark",
    buttonText: "ADD TO BAG",
  },
  {
    id: 4,
    name: "Halloween Jack Lantern Cups",
    price: "$39.99",
    image: halloween,
    buttonColor: "bg-orange hover:bg-orange-dark",
    buttonText: "ADD TO BAG",
  },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToProduct = (index: number) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 288 + 24; // w-72 (288px) + gap-6 (24px)
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-cyan py-16 border-b-[6px] border-orange">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-[300px_1fr] gap-8 items-center">
          {/* Left side text */}
          <div className="space-y-4">
            <h2 className="text-black font-black text-4xl uppercase leading-tight">
              Shop Our
              <br />
              World's Best
              <br />
              Chocolate
            </h2>
            <p className="text-black font-bold text-lg">
              Show you care how your chocolate is sourced
            </p>
            <button className="bg-cyan-dark hover:bg-cyan text-white font-black text-lg uppercase px-8 py-3 rounded-lg thick-border transform hover:scale-105 transition-transform italic">
              Shop All
            </button>
          </div>

          {/* Product carousel */}
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-72 bg-white rounded-2xl thick-border p-6 snap-start"
                >
                  <div className="space-y-4">
                    <div className="relative h-80 flex items-center justify-center bg-gradient-to-b from-cyan/10 to-transparent rounded-xl">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    
                    <div className="text-center space-y-2">
                      <h3 className="text-black font-black text-xl uppercase">
                        {product.name}
                      </h3>
                      <p className="text-black font-bold text-lg">
                        {product.price}
                      </p>
                    </div>

                    <button
                      className={`w-full ${product.buttonColor} text-white font-black text-sm uppercase px-6 py-3 rounded-lg thick-border transform hover:scale-105 transition-transform`}
                    >
                      {product.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel dots */}
            <div className="flex justify-center gap-2 mt-6">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToProduct(index)}
                  className={`w-3 h-3 rounded-full thick-border transition-all ${
                    index === currentIndex
                      ? "bg-black scale-125"
                      : "bg-white hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
