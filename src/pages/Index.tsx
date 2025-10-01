import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductCarousel from "@/components/ProductCarousel";
import WhereToBuySection from "@/components/WhereToBuySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductCarousel />
      <WhereToBuySection />
      <Footer />
    </div>
  );
};

export default Index;
