import { ShoppingCart, MapPin, User, HelpCircle } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black border-b-[6px] border-orange">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-white font-black text-2xl uppercase tracking-tight">
              WhimsyBites
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#shop"
              className="text-white font-bold uppercase text-sm hover:text-orange transition-colors italic"
            >
              Shop
            </a>
            <a
              href="#story"
              className="text-white font-bold uppercase text-sm hover:text-orange transition-colors italic"
            >
              Our Story
            </a>
            <a
              href="#sourcing"
              className="text-white font-bold uppercase text-sm hover:text-orange transition-colors italic"
            >
              Ethical Sourcing
            </a>
            <a
              href="#worldwide"
              className="text-white font-bold uppercase text-sm hover:text-orange transition-colors italic"
            >
              Available Worldwide
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-orange transition-colors">
              <HelpCircle size={24} />
            </button>
            <button className="text-white hover:text-orange transition-colors">
              <User size={24} />
            </button>
            <button className="text-white hover:text-orange transition-colors">
              <MapPin size={24} />
            </button>
            <button className="text-white hover:text-orange transition-colors relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-orange text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
