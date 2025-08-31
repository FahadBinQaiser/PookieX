import React from "react";
const HeroSection = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-6">
        {/* Logo */}
        <div className="text-3xl font-black tracking-tight text-[#D52941]">
          Fahad
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-10 font-medium text-gray-700">
          <a
            href="#product"
            className="hover:text-[#990D35] transition-colors duration-300"
          >
            Product
          </a>
          <a
            href="#pricing"
            className="hover:text-[#990D35] transition-colors duration-300"
          >
            Pricing
          </a>
          <a
            href="#about"
            className="hover:text-[#990D35] transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#help"
            className="hover:text-[#990D35] transition-colors duration-300"
          >
            Help
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block text-[#990D35] font-semibold hover:text-[#D52941] transition-colors duration-300">
            Log In
          </button>
          <button className="bg-[#D52941] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#990D35] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between flex-1 px-6 md:px-16 py-16 lg:py-24 gap-16">
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <span className="inline-block bg-[#FFF8E8] text-[#990D35] px-5 py-2 rounded-full text-sm font-bold mb-8 shadow-sm border border-[#FCD581]/20">
            Helping SaaS founders build MVPs 🚀
          </span>

          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-8 text-balance">
            Lightning-fast MVP websites that{" "}
            <span className="text-[#FCD581] relative">
              transfers
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FCD581]/30 rounded-full"></div>
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 leading-relaxed text-pretty">
            Early-stage SaaS founders don't need clutter. I design and code
            landing pages that focus on clarity, speed, and conversions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-16">
            <button className="bg-[#D52941] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#990D35] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Preview Design
            </button>
            <button className="border-2 border-[#990D35] text-[#990D35] px-8 py-4 rounded-xl font-bold hover:bg-[#990D35] hover:text-white transition-all duration-300">
              See My Process
            </button>
          </div>
        </div>

        {/* Right Side Enhanced Mockup */}
        <div className="w-full lg:w-full flex justify-center relative">
          <div className="relative">
            {/* Main dashboard card */}
            <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 relative border border-gray-100 transform hover:scale-105 transition-transform duration-500">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#FCD581] to-[#D52941] flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-xl">A</span>
                  </div>
                  <div>
                    <h3 className="font-black text-gray-800 text-lg">
                      Alivia Jackson
                    </h3>
                    <p className="text-gray-500 text-sm font-medium">
                      Product Designer
                    </p>
                  </div>
                </div>
                <button className="text-xs bg-[#FFF8E8] px-4 py-2 rounded-full text-[#990D35] font-black border border-[#FCD581]/30">
                  PRO
                </button>
              </div>

              {/* Progress sections with better styling */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-bold">
                      Design System
                    </span>
                    <span className="text-[#D52941] font-black text-lg">
                      87%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-[#FFF8E8] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#D52941] to-[#990D35] w-[87%] rounded-full shadow-sm"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-bold">
                      MVP Development
                    </span>
                    <span className="text-[#D52941] font-black text-lg">
                      64%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-[#FFF8E8] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#FCD581] to-[#D52941] w-[64%] rounded-full shadow-sm"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-bold">
                      User Testing
                    </span>
                    <span className="text-[#990D35] font-black text-lg">
                      32%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-[#FFF8E8] rounded-full overflow-hidden">
                    <div className="h-full bg-[#990D35] w-[32%] rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification card */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 animate-bounce">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-gray-800">
                  Live Updates
                </span>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-gray-100 p-4">
              <div className="text-center">
                <div className="text-2xl font-black text-[#D52941]">2.4x</div>
                <div className="text-xs text-gray-600 font-semibold">
                  Faster Launch
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8E8] py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-[#990D35]">
                150+
              </div>
              <div className="text-gray-700 font-semibold">MVPs Launched</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-[#990D35]">
                2.4x
              </div>
              <div className="text-gray-700 font-semibold">Faster Delivery</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-[#990D35]">
                98%
              </div>
              <div className="text-gray-700 font-semibold">
                Client Satisfaction
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-[#990D35]">
                $2M+
              </div>
              <div className="text-gray-700 font-semibold">
                Revenue Generated
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
