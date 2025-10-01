import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-orange rounded-3xl thick-border p-8 md:p-12">
          <div className="grid md:grid-cols-[1fr_1fr_1fr_1.5fr] gap-8 mb-12">
            {/* Shop Column */}
            <div>
              <h3 className="text-cyan font-black text-xl uppercase mb-4" style={{ fontFamily: "'Archivo Black', sans-serif" }}>Shop</h3>
              <ul className="space-y-2">
                {["SHOP ALL", "CHOCOLATE", "CUPS", "GUMMIES", "MILK", "BUNDLES", "LIMITED TIME", "FIND A STORE"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-cyan font-bold italic hover:text-cyan-dark transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info Column */}
            <div>
              <h3 className="text-cyan font-black text-xl uppercase mb-4" style={{ fontFamily: "'Archivo Black', sans-serif" }}>Info</h3>
              <ul className="space-y-2">
                {["FAQ", "CONTACT US", "MY ACCOUNT", "ORDER TRACKING", "CAREERS"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-cyan font-bold italic hover:text-cyan-dark transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get to Know Us Column */}
            <div>
              <h3 className="text-cyan font-black text-xl uppercase mb-4" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                Get to Know Us
              </h3>
              <ul className="space-y-2">
                {["OUR STORY", "ETHICAL SOURCING", "BETTER INGREDIENTS"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-cyan font-bold italic hover:text-cyan-dark transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <div className="space-y-6">
                {/* Social Icons */}
                <div className="flex gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-12 h-12 bg-white rounded-full thick-border flex items-center justify-center hover:bg-cyan transition-colors"
                    >
                      <Instagram size={24} className="text-black" />
                    </a>
                  ))}
                </div>

                <div>
                  <h4 className="text-black font-black text-lg uppercase mb-2" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                    Text Sweet to 70616
                  </h4>
                  <p className="text-black font-bold text-xs mb-4 uppercase">
                    Snacks, sweeps, surprises straight to your inbox.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="ENTER EMAIL"
                      className="flex-1 px-4 py-3 rounded-lg thick-border font-bold text-sm min-w-0 uppercase placeholder:text-gray-500"
                    />
                    <button className="bg-cyan hover:bg-cyan-dark text-white font-black text-sm uppercase px-8 py-3 rounded-lg thick-border whitespace-nowrap">
                      Sign Up
                    </button>
                  </div>
                  
                  <p className="text-black text-xs mt-2">
                    By signing up, you agree to our <a href="#" className="underline">Privacy Policy</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo and Bottom */}
          <div className="border-t-4 border-black pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-white font-black text-5xl uppercase" style={{ 
                fontFamily: "'Archivo Black', sans-serif",
                WebkitTextStroke: '2px black'
              }}>
                WhimsyBites
              </div>
              
              <div className="text-center">
                <p className="text-black font-bold text-sm">2025 WhimsyBites</p>
                <p className="text-cyan text-xs mt-1">
                  <a href="#" className="underline">Powered by Shopify</a>
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center text-xs">
                {["Privacy Policy", "Terms of Service", "Privacy Preferences", "Privacy Requests", "Do Not Sell My Info"].map((item) => (
                  <a key={item} href="#" className="text-black font-bold hover:text-cyan transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
