"use client";
import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHostDropdownOpen, setIsHostDropdownOpen] = useState(false);

  return (
    <header className="bg-white">
      {/* 1. TOP UTILITY BAR (Hidden on Mobile) */}
      <div className="hidden lg:block bg-[#15151f] text-white text-sm px-6 py-1.5 border-b border-gray-800">
        <ul className="flex items-center justify-end space-x-5 max-w-7xl mx-auto">
          <li>
            <form
              action="https://www.zoom.com/en/search/"
              className="flex items-center space-x-1 group"
            >
              <Search className="w-3.5 h-3.5 group-hover:text-white transition-colors" />
              <button
                type="submit"
                className="hover:text-white transition-colors cursor-pointer"
              >
                Search
              </button>
            </form>
          </li>
          <li>
            <a
              href="https://support.zoom.com/hc/en"
              className="hover:text-white transition-colors"
            >
              Support
            </a>
          </li>
          <li>
            <a
              href="tel:1.888.799.9666"
              className="hover:text-white transition-colors"
            >
              1.888.799.9666
            </a>
          </li>
          <li>
            <a
              href="https://www.zoom.com/en/contact/live-demo/"
              className="hover:text-white transition-colors"
            >
              Request a Demo
            </a>
          </li>
          <span className="text-gray-700">|</span>
          <li>
            <a
              href="https://zoom.us/join"
              className="hover:text-white font-medium transition-colors"
            >
              Join
            </a>
          </li>

          {/* Host Dropdown Hook */}
          <li
            className="relative"
            onMouseEnter={() => setIsHostDropdownOpen(true)}
            onMouseLeave={() => setIsHostDropdownOpen(false)}
          >
            <button className="flex items-center gap-0.5 hover:text-white transition-colors py-1">
              Host
              <ChevronDown className="w-3 h-3" />
            </button>

            {isHostDropdownOpen && (
              <div className="absolute right-0 top-full w-44 bg-white rounded-lg shadow-xl py-2 border border-gray-100 z-50">
                <a
                  href="https://zoom.us/start/webmeeting"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#004be5] text-sm"
                >
                  With Video Off
                </a>
                <a
                  href="https://zoom.us/start/videomeeting"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#004be5] text-sm"
                >
                  With Video On
                </a>
                <a
                  href="https://zoom.us/start/sharemeeting"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#004be5] text-sm"
                >
                  Share Screen Only
                </a>
              </div>
            )}
          </li>

          <li>
            <a
              href="https://zoom.us/signin"
              className="hover:text-white font-medium transition-colors"
            >
              Sign In
            </a>
          </li>
        </ul>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="px-4 sm:px-8 lg:px-12 xl:px-24 py-4 border-b border-gray-100 bg-white flex items-center justify-between">
        {/* Logo Section */}
        <div className="shrink-0">
          <a href="https://www.zoom.com/en/">
            <img src="/logo.png" alt="Zoom Logo" className="w-24 sm:w-28" />
          </a>
        </div>

        {/* Desktop Links (Hidden on Tablet/Mobile) */}
        <nav className="hidden lg:flex items-center justify-between flex-1 ml-10">
          <ul className="flex items-center space-x-1">
            {/* Nav link structures */}
            {[
              { label: "Products", url: "https://www.zoom.com/en/products/" },
              { label: "Solutions", url: "https://www.zoom.com/en/solutions/" },
              { label: "Resources", url: "https://www.zoom.com/en/resources/" },
              {
                label: "Plans & Pricing",
                url: "https://www.zoom.com/pricing/",
              },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  className="hover:text-[#004be5] text-[#666484] px-4 py-2 text-sm xl:text-[16px] font-semibold transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Call to Actions */}
          <div className="flex items-center space-x-3">
            <a
              href="https://www.zoom.com/en/contact/contact-sales/"
              className="text-[#004be5] px-5 py-2.5 rounded-full border-2 border-[#004be5] hover:bg-blue-50/50 text-sm font-semibold transition-all"
            >
              Contact Sales
            </a>
            <a
              href="https://zoom.us/signup"
              className="bg-[#004be5] text-white hover:bg-[#003ea0] px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm"
            >
              Sign Up Free
            </a>
          </div>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* 3. MOBILE MENU DRAWER PANEL */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 bottom-0 top-16.25 bg-white z-40 border-t border-gray-100 overflow-y-auto p-6 flex flex-col justify-between shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-6">
            <nav className="flex flex-col space-y-4">
              <a
                href="https://www.zoom.com/en/products/"
                className="text-lg font-semibold text-[#666484] py-2 border-b border-gray-50 hover:text-[#004be5]"
              >
                Products
              </a>
              <a
                href="https://www.zoom.com/en/solutions/"
                className="text-lg font-semibold text-[#666484] py-2 border-b border-gray-50 hover:text-[#004be5]"
              >
                Solutions
              </a>
              <a
                href="https://www.zoom.com/en/resources/"
                className="text-lg font-semibold text-[#666484] py-2 border-b border-gray-50 hover:text-[#004be5]"
              >
                Resources
              </a>
              <a
                href="https://www.zoom.com/pricing/"
                className="text-lg font-semibold text-[#666484] py-2 border-b border-gray-50 hover:text-[#004be5]"
              >
                Plans & Pricing
              </a>
            </nav>

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a
                href="https://zoom.us/signin"
                className="text-center font-semibold text-gray-700 py-3 rounded-xl bg-gray-50 hover:bg-gray-100"
              >
                Sign In
              </a>
              <a
                href="https://zoom.us/join"
                className="text-center font-semibold text-gray-700 py-3 rounded-xl bg-gray-50 hover:bg-gray-100"
              >
                Join Meeting
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 pt-6 border-t border-gray-100">
            <a
              href="https://www.zoom.com/en/contact/contact-sales/"
              className="text-center text-[#004be5] py-3 rounded-xl border-2 border-[#004be5] font-bold"
            >
              Contact Sales
            </a>
            <a
              href="https://zoom.us/signup"
              className="text-center bg-[#004be5] text-white py-3 rounded-xl font-bold"
            >
              Sign Up Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
