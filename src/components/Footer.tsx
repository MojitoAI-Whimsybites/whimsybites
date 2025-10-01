import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-orange py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Shop Column */}
          <div>
            <h3 className="text-cyan font-black text-xl uppercase mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-purple font-bold italic hover:text-purple-dark transition-colors">
                  SHOP ALL
                </a>
              </li>
              <li>
                <a href="#" className="text-purple font-bold italic hover:text-purple-dark transition-colors">
                  CHOCOLATE
                </a>
              </li>
              <li>
                <a href="#" className="text-purple font-bold italic hover:text-purple-dark transition-colors">
                  CUPS
                </a>
              </li>
              <li>
                <a href="#" className="text-purple font-bold italic hover:text-purple-dark transition-colors">
                  GUMMIES
                </a>
              </li>
              <li>
                <a href="#" className="text-purple font-bold italic hover:text-purple-dark transition-colors">
                  MILK
                </a>
              </li>
              <li>
                <a href="#" className="text-purple font-bold italic hover:text-purple-dark transition-colors">
                  BUNDLES
                </a>
              </li>
              <li>
                <a href="#" className="text-purple font-bold italic hover:text-purple-dark transition-colors">
                  LIMITED TIME
                </a>
              </li>
              <li>
                <a href="#" className="text-purple font-bold italic hover:text-purple-dark transition-colors">
                  FIND A STORE
                </a>
              </li>
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h3 className="text-cyan font-black text-xl uppercase mb-4">Info</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-purple font-bold italic hover:text-purple-dark transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-purple font-bold italic hover:text-purple-dark transition-colors">
                  CONTACT US
                </a>
              </li>
              <li>
                <a href="#" className="text-purple font-bold italic hover:text-purple-dark transition-colors">
                  MY ACCOUNT
                </a>
              </li>
              <li>
                <a href="#" className="text-purple font-bold italic hover:text-purple-dark transition-colors">
                  ORDER TRACKING
                </a>
              </li>
              <li>
                <a href="#" className="text-purple font-bold italic hover:text-purple-dark transition-colors">
                  CAREERS
                </a>
              </li>
            </ul>
          </div>

          {/* Get to Know Us Column */}
          <div>
            <h3 className="text-cyan font-black text-xl uppercase mb-4">
              Get to Know Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-purple font-bold italic hover:text-purple-dark transition-colors">
                  OUR STORY
                </a>
              </li>
              <li>
                <a href="#" className="text-purple font-bold italic hover:text-purple-dark transition-colors">
                  ETHICAL SOURCING
                </a>
              </li>
              <li>
                <a href="#" className="text-purple font-bold italic hover:text-purple-dark transition-colors">
                  BETTER INGREDIENTS
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <div className="space-y-4">
              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-full thick-border flex items-center justify-center hover:bg-cyan transition-colors"
                >
                  <Instagram size={24} className="text-black" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-full thick-border flex items-center justify-center hover:bg-cyan transition-colors"
                >
                  <Facebook size={24} className="text-black" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-full thick-border flex items-center justify-center hover:bg-cyan transition-colors"
                >
                  <Twitter size={24} className="text-black" />
                </a>
              </div>

              <div>
                <h4 className="text-black font-black text-lg uppercase mb-2">
                  Text Sweet to 70616
                </h4>
                <p className="text-black text-xs mb-4">
                  Snacks, sweeps, surprises straight to your inbox.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="ENTER EMAIL"
                    className="flex-1 px-4 py-3 rounded-lg thick-border font-bold text-sm min-w-0"
                  />
                  <button className="bg-cyan hover:bg-cyan-dark text-white font-black text-sm uppercase px-6 py-3 rounded-lg thick-border whitespace-nowrap">
                    Sign Up
                  </button>
                </div>
                
                <p className="text-black text-xs mt-2">
                  By signing up, you agree to our Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Logo and Bottom */}
        <div className="border-t-4 border-black pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white font-black text-4xl uppercase">
              WhimsyBites
            </div>
            
            <div className="text-center">
              <p className="text-black font-bold text-sm">2025 WhimsyBites</p>
            </div>

            <div className="flex gap-4 text-xs">
              <a href="#" className="text-black font-bold hover:text-purple transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-black font-bold hover:text-purple transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-black font-bold hover:text-purple transition-colors">
                Privacy Preferences
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
