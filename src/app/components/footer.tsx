// components/Footer.tsx
'use client';
import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaPhone,
  FaArrowUp,
} from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-white px-4 py-4 lg:px-16 lg:py-6 relative bg-black">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          
          {/* Left Side - Logo and Company Info */}
          <div className="lg:order-1 flex flex-col items-start w-full lg:w-auto">
            {/* Logo */}
            <div className="w-10 h-10 lg:w-12 lg:h-[50px] mb-4 lg:mb-6 relative">
              <Image 
                src="/images/logo.png" 
                alt="Estimating Buddies Logo" 
                fill
                className="object-contain"
              />
            </div>
            
            {/* Company Text */}
            <div className="w-full lg:w-[310px]">
              <h2 
                className="text-white text-[25px] font-bold leading-[34px] tracking-[-1.2px] uppercase mb-4 lg:mb-6" 
                style={{ fontFamily: 'SF Compact, -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 790 }}
              >
                TRANSFORMING COMPLEXITY INTO CLEAR, ACTIONABLE ESTIMATES.
              </h2>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-2.5 lg:gap-3.5">
                <a href="https://www.facebook.com/people/Estimating-Buddies/61556785539225/?_rdr" target="_blank" rel="noopener noreferrer" 
                   className="w-8 h-8 rounded-md bg-[#1E73D8] hover:bg-[#155DB2] text-white transition-colors flex items-center justify-center">
                  <FaFacebookF className="text-[13px]" />
                </a>
                <a href="https://x.com/estimatingbudd/status/1789996766273610112" target="_blank" rel="noopener noreferrer" 
                   className="w-8 h-8 rounded-md bg-[#1E73D8] hover:bg-[#155DB2] text-white transition-colors flex items-center justify-center">
                  <FaXTwitter className="text-[13px]" />
                </a>
                <a href="https://www.instagram.com/estimatingbuddies/" target="_blank" rel="noopener noreferrer" 
                   className="w-8 h-8 rounded-md bg-[#1E73D8] hover:bg-[#155DB2] text-white transition-colors flex items-center justify-center">
                  <FaInstagram className="text-[13px]" />
                </a>
                <a href="https://www.linkedin.com/company/estimating-buddies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" 
                   className="w-8 h-8 rounded-md bg-[#1E73D8] hover:bg-[#155DB2] text-white transition-colors flex items-center justify-center">
                  <FaLinkedinIn className="text-[13px]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Sections - Pages, Service, Contact */}
          <div className="grid grid-cols-2 gap-8 w-full lg:contents">
            {/* Center - Navigation Pages */}
            <div 
              className="lg:order-2 w-full lg:w-auto lg:flex lg:flex-col lg:items-center"
              style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}
            >
              <h4 className="text-white font-semibold mb-4 lg:mb-7 text-sm lg:text-base ml-0 lg:ml-8">Pages</h4>
              <div className="space-y-3 lg:space-y-4 ml-0 lg:ml-15">
                <Link href="/" className="block text-white hover:text-blue-500 transition-colors text-xs lg:text-sm">
                  Home
                </Link>
                <a href="/about" className="block text-white hover:text-blue-500 transition-colors text-xs lg:text-sm">
                  About Us
                </a>
                <a href="/services" className="block text-white hover:text-blue-500 transition-colors text-xs lg:text-sm">
                  Services
                </a>
                <a href="/contact" className="block text-white hover:text-blue-500 transition-colors text-xs lg:text-sm">
                  Contact Us
                </a>
              </div>
            </div>

            {/* Middle - Service */}
            <div
              className="lg:order-3 w-full lg:w-auto lg:flex lg:flex-col lg:items-start"
              style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}
            >
              <h4 className="text-white font-semibold mb-4 lg:mb-7 text-sm lg:text-base">Services</h4>
              <div className="space-y-3 lg:space-y-4">
                <a href="/services" className="block text-white hover:text-blue-500 transition-colors text-xs lg:text-sm">
                  Plumbing Estimating
                </a>
                <a href="/services" className="block text-white hover:text-blue-500 transition-colors text-xs lg:text-sm">
                  Construction Estimating
                </a>
                <a href="/services" className="block text-white hover:text-blue-500 transition-colors text-xs lg:text-sm">
                  Mechanical Estimating
                </a>
                <a href="/services" className="block text-white hover:text-blue-500 transition-colors text-xs lg:text-sm">
                  Architectural Cost Estimating
                </a>
                <a href="/services" className="block text-white hover:text-blue-500 transition-colors text-xs lg:text-sm">
                  Quantity Takeoff
                </a>
                <a href="/services" className="block text-white hover:text-blue-500 transition-colors text-xs lg:text-sm">
                  Electrical Estimating
                </a>
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div 
              className="col-span-2 lg:order-4 w-full lg:w-[418px]"
              style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}
            >
              <h4 className="text-white font-semibold mb-4 lg:mb-6 text-sm lg:text-base ml-0 lg:ml-[100px]">Contact us</h4>
              <div className="space-y-4 lg:space-y-6 ml-0 lg:ml-[100px]">
                {/* Email */}
                <div className="flex items-start gap-2 lg:gap-3">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 flex items-center justify-center">
                    <span className="text-white text-xs lg:text-sm">✉</span>
                  </div>
                  <a
                    href="mailto:contact@estimatingbuddies.com"
                    className="text-white text-xs lg:text-sm hover:text-blue-500 transition-colors break-all sm:break-normal"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    info@estimatingbuddies.com
                  </a>
                </div>
                
                {/* Phone */}
                <div className="flex items-center gap-2 lg:gap-3">
                  <FaPhone className="text-white text-xs lg:text-sm" />
                  <span className="text-white text-xs lg:text-sm">+1 512-828-1066</span>
                </div>
                
                {/* Address */}
                <div className="flex items-start gap-2 lg:gap-3">
                  <FaLocationDot className="text-white mt-1 flex-shrink-0 text-xs lg:text-sm" />
                  <div>
                    <p className="text-white text-xs lg:text-sm">13555 South East 36th Street, Suite 100,</p>
                    <p className="text-white text-xs lg:text-sm">Bellevue, WA 98006, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="max-w-7xl mx-auto mt-8 lg:mt-12">
        <div className="w-full h-px bg-[#D9DBE9] opacity-100"></div>
      </div>

      {/* Bottom Content */}
      <div 
        className="max-w-7xl mx-auto mt-4 lg:mt-6"
        style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-xs lg:text-sm gap-3">
          <p className="text-white text-center md:text-left">Copyright © 2026 &nbsp;| &nbsp; Estimating Buddies LLC</p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 lg:gap-4 mt-1 lg:mt-0">
            <span className="text-white">All Rights Reserved |</span>
            <Link href="/termsandcondition">
              <span className="text-white hover:text-blue-500 transition-colors underline">
                  Terms and Conditions
             </span>
            </Link>
            <span className="text-white">|</span>
            <Link href="/privacy-policy">
              <span className="text-white hover:text-blue-500 transition-colors underline">
                  Privacy Policy
             </span>
        </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 w-10 h-10 lg:w-9 lg:h-9 bg-transparent border-2 border-blue-500 text-blue-500 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 z-50"
          style={{
            bottom: '16px',
            right: '16px'
          }}
        >
          <FaArrowUp className="text-sm lg:text-sm" />
        </button>
      )}
    </footer>
  );
};

export default Footer;