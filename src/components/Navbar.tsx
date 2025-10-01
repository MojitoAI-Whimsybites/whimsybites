import { ShoppingCart, MapPin, User, HelpCircle, Menu, X, Flag, Smile } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-white font-black text-2xl uppercase tracking-tight" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              WhimsyBites
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/shop-all" className="text-white font-bold uppercase text-sm hover:text-orange transition-colors italic">
              Shop
            </a>
            <a href="#story" className="text-white font-bold uppercase text-sm hover:text-orange transition-colors italic">
              Our Story
            </a>
            <a href="#sourcing" className="text-white font-bold uppercase text-sm hover:text-orange transition-colors italic">
              Ethical Sourcing
            </a>
            <a href="#worldwide" className="text-white font-bold uppercase text-sm hover:text-orange transition-colors italic">
              Available Worldwide
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-3">
            <button className="hidden md:flex w-10 h-10 text-white hover:text-orange transition-colors items-center justify-center">
              <HelpCircle size={24} />
            </button>
            <button className="hidden md:flex w-10 h-10 text-white hover:text-orange transition-colors items-center justify-center">
              <Flag size={24} />
            </button>
            <button className="hidden md:flex w-10 h-10 text-white hover:text-orange transition-colors items-center justify-center">
              <Smile size={24} />
            </button>
            <button className="hidden md:flex w-10 h-10 text-white hover:text-orange transition-colors items-center justify-center">
              <MapPin size={24} />
            </button>
            <button className="text-white hover:text-orange transition-colors relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-orange text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white hover:text-orange transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t-2 border-orange">
            <div className="flex flex-col space-y-3">
              <a href="/shop-all" className="text-white font-bold uppercase text-sm hover:text-orange transition-colors italic" onClick={() => setMobileMenuOpen(false)}>
                Shop
              </a>
              <a href="#story" className="text-white font-bold uppercase text-sm hover:text-orange transition-colors italic" onClick={() => setMobileMenuOpen(false)}>
                Our Story
              </a>
              <a href="#sourcing" className="text-white font-bold uppercase text-sm hover:text-orange transition-colors italic" onClick={() => setMobileMenuOpen(false)}>
                Ethical Sourcing
              </a>
              <a href="#worldwide" className="text-white font-bold uppercase text-sm hover:text-orange transition-colors italic" onClick={() => setMobileMenuOpen(false)}>
                Available Worldwide
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
