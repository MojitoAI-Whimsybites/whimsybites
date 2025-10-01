import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const Sweepstakes = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="min-h-screen bg-purple border-b-4 border-black">
        <div className="container mx-auto px-6 py-16">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-white font-bold uppercase text-sm hover:text-orange transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Header */}
            <div className="text-center space-y-6">
              <h1 className="text-orange font-black text-6xl md:text-8xl uppercase leading-none text-outline-black italic" style={{ 
                fontFamily: "'Archivo Black', sans-serif",
                transform: 'skewY(-3deg)',
                letterSpacing: '-0.02em'
              }}>
                HOLIDAY SWEEPS
              </h1>
              <p className="text-white font-black text-2xl uppercase text-outline-black">
                Enter for a chance to win amazing sweet prizes
              </p>
            </div>

            {/* Entry Form */}
            <div className="bg-white rounded-3xl thin-border p-8 md:p-12">
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-black font-bold text-sm uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg thin-border font-bold text-sm"
                      placeholder="ENTER YOUR NAME"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-black font-bold text-sm uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg thin-border font-bold text-sm"
                      placeholder="ENTER YOUR EMAIL"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-black font-bold text-sm uppercase mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg thin-border font-bold text-sm"
                      placeholder="ENTER YOUR PHONE"
                    />
                  </div>

                  <div>
                    <label htmlFor="zipcode" className="block text-black font-bold text-sm uppercase mb-2">
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      id="zipcode"
                      required
                      className="w-full px-4 py-3 rounded-lg thin-border font-bold text-sm"
                      placeholder="ENTER YOUR ZIP CODE"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 w-5 h-5 rounded border-2 border-black"
                    />
                    <span className="text-black font-bold text-sm">
                      I agree to the Official Rules and Privacy Policy *
                    </span>
                  </label>

                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1 w-5 h-5 rounded border-2 border-black"
                    />
                    <span className="text-black font-bold text-sm">
                      Sign me up for WhimsyBites news and special offers
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange hover:bg-orange-dark text-black font-black text-xl uppercase px-8 py-5 rounded-xl thin-border transform hover:scale-105 transition-transform italic"
                >
                  Submit Entry
                </button>

                <p className="text-center text-black text-xs">
                  * Required fields
                </p>
              </form>
            </div>

            {/* Rules Section */}
            <div className="bg-cyan rounded-3xl thin-border p-8 md:p-12">
              <h2 className="text-black font-black text-3xl uppercase mb-6" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                Sweepstakes Rules
              </h2>
              <div className="space-y-4 text-black font-bold">
                <p>• No purchase necessary to enter or win</p>
                <p>• Open to legal residents of the 50 United States and D.C., 18 years or older</p>
                <p>• Sweepstakes ends December 31, 2025</p>
                <p>• One entry per person</p>
                <p>• Winner will be selected via random drawing</p>
                <p>• Prize value: Up to $1,000 in WhimsyBites products</p>
                <p>• Void where prohibited</p>
              </div>
              <div className="mt-6">
                <a href="#" className="text-black font-black uppercase text-sm underline hover:text-orange transition-colors">
                  Read Full Official Rules
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sweepstakes;
