import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TwoWaysSection from "@/components/TwoWaysSection";
import ProductCarousel from "@/components/ProductCarousel";
import WhereToBuySection from "@/components/WhereToBuySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TwoWaysSection />
      <ProductCarousel />
      <WhereToBuySection />
      <Footer />
    </div>
  );
};

export default Index;
