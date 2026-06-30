'use client';
import { useState } from 'react';
import { FiChevronDown, FiMenu, FiPhone, FiX } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

type DropdownItem = {
  name: string;
  href: string;
};

type MenuItem = {
  name: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const callNumber = '+1 512-828-1066';
  const callHref = 'tel:+15128281066';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems: MenuItem[] = [
    { name: 'Home', href: '/', hasDropdown: false },
    { name: 'About Us', href: '/about', hasDropdown: false },
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Plumbing Estimating', href: '/services/plumbing-estimating-services' },
        { name: 'Construction Estimating', href: '/services/construction-estimating-services' },
        { name: 'Mechanical Estimating', href: '/services/mechanical-estimating-services' },
        { name: 'Architectural Cost Estimating', href: '/services/' },
        { name: 'Quantity Takeoff', href: '/services/' },
        { name: 'Electrical Estimating', href: '/services/' },
      ],
    },
    //{ name: 'Trade', href: '/Trade', hasDropdown: false },
    { name: 'Blogs', href: '/blogs', hasDropdown: false },
    { name: 'Contact Us', href: '/contact', hasDropdown: false },
  ];

  return (
    <>
      {/* Spacer div to push content below fixed navbar */}
      <div className="h-[66px] sm:h-[72px]"></div>
      
      <header className="fixed top-0 w-full z-50 shadow-md">
        <div className="h-8 bg-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <div className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-end px-4 sm:px-6 lg:px-10">
            <div className="flex items-center gap-5 text-[12px] sm:text-[13px] font-normal tracking-wide">
              <a href="mailto:info@estimatingbuddies.com" className="hover:text-gray-200 transition-colors">
                ✉ info@estimatingbuddies.com
              </a>
              <a href="tel:+15128281066" className="flex items-center gap-1 hover:text-gray-200 transition-colors">
                <FiPhone className="text-white" />
                {callNumber}
              </a>
            </div>
          </div>
        </div>

        <nav className="mx-auto flex h-[60px] sm:h-[70px] w-full max-w-[1280px] items-center justify-between rounded-2xl bg-white px-4 sm:px-6 lg:px-10 text-black shadow-[0_8px_24px_rgba(0,0,0,0.12)]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          
          {/* Logo - Left Side */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/logo.png"
                alt="Estimating Buddies"
                width={56}
                height={56}
                className="h-[38px] w-[38px] cursor-pointer sm:h-[46px] sm:w-[46px]"
              />
              <div className="leading-tight">
                <p className="text-[16px] sm:text-[18px] tracking-[0.08em] uppercase text-[#1f2937]">
                  Estimating Buddies
                </p>
                <p className="text-[8px] sm:text-[9px] font-medium tracking-[0.22em] uppercase text-[#6b7280]">
                  Your Trusted Estimater
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden lg:flex items-center space-x-9">
            {menuItems.map((item) => (
              item.hasDropdown ? (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-[16px] text-black transition duration-200 hover:text-[#0b1538] group-hover:text-[#0b1538]"
                  >
                    {item.name}
                    <FiChevronDown className="text-base" aria-hidden />
                  </Link>
                  <div className="absolute left-0 top-full z-50 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="w-64 rounded-md border border-gray-200 bg-white shadow-lg py-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-800 transition duration-150 hover:bg-sky-400 hover:text-white"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[16px] text-black transition duration-200 hover:text-[#1e73be]"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden lg:flex">
            <a
              href={callHref}
              className="flex h-[42px] min-w-[126px] items-center justify-center rounded-lg border border-black px-6 text-[16px] text-black transition duration-200 hover:bg-black hover:text-white"
            >
              Call Us
            </a>
          </div>

          {/* Mobile Actions - Right Side */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={callHref}
              className="h-[38px] rounded-md border border-black px-3 text-[13px] text-black transition duration-200 hover:bg-black hover:text-white flex items-center"
            >
              Call Us
            </a>
            <button
              onClick={toggleMenu}
              className="text-black hover:text-[#1e73be] transition duration-200 p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div 
            className="lg:hidden absolute top-full right-4 bg-white border border-gray-200 shadow-lg w-52 rounded-md"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <div className="px-3 py-2 space-y-1">
              {menuItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="block py-2 px-2 text-black hover:text-[#1e73be] hover:bg-gray-50 rounded transition duration-200 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}