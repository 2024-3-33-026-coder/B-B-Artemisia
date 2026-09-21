import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (preselectedRoomId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'STAY', href: '#introduction' },
    { label: 'THE HOUSE', href: '#the-house' },
    { label: 'ROOMS', href: '#rooms' },
    { label: 'BREAKFAST', href: '#breakfast' },
    { label: 'ALGHERO', href: '#alghero' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'GALLERY', href: '#gallery' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F4F0E8]/95 backdrop-blur-md shadow-xs border-b border-[#D8CDBB]/60 py-3.5'
            : 'bg-gradient-to-b from-black/50 via-black/20 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Logo / Left */}
          <a
            href="#"
            className="group flex flex-col items-start focus:outline-hidden"
            aria-label="B&B Artemisia Home"
          >
            <span
              className={`font-serif text-xl md:text-2xl tracking-[0.2em] font-medium transition-colors ${
                isScrolled ? 'text-[#20201D]' : 'text-white'
              }`}
            >
              B&amp;B ARTEMISIA
            </span>
            <span
              className={`text-[9px] uppercase tracking-[0.28em] transition-colors ${
                isScrolled ? 'text-[#7C8068]' : 'text-white/80'
              }`}
            >
              Alghero · Sardegna
            </span>
          </a>

          {/* Center Navigation (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 text-[11px] font-medium tracking-[0.2em] uppercase"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 transition-colors duration-300 hover:text-[#A7664D] ${
                  isScrolled ? 'text-[#20201D]/80' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Book Your Stay */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              id="nav-book-button"
              type="button"
              onClick={() => onOpenBooking()}
              className={`text-[11px] tracking-[0.22em] uppercase font-semibold px-5 py-2.5 transition-all duration-300 rounded-xs border flex items-center gap-2 cursor-pointer ${
                isScrolled
                  ? 'border-[#30372E] text-[#30372E] hover:bg-[#30372E] hover:text-[#F4F0E8]'
                  : 'border-white text-white hover:bg-white hover:text-[#20201D]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK YOUR STAY</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 sm:hidden">
            <button
              id="mobile-book-icon-btn"
              type="button"
              onClick={() => onOpenBooking()}
              className={`text-[10px] tracking-[0.16em] uppercase font-medium px-3 py-1.5 rounded-xs border transition-colors ${
                isScrolled
                  ? 'border-[#30372E] text-[#30372E]'
                  : 'border-white/80 text-white'
              }`}
            >
              BOOK
            </button>
            <button
              id="mobile-nav-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 focus:outline-hidden transition-colors ${
                isScrolled ? 'text-[#20201D]' : 'text-white'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#F4F0E8] flex flex-col justify-between px-8 py-10 sm:hidden">
          <div className="flex items-center justify-between border-b border-[#D8CDBB] pb-6">
            <div>
              <span className="font-serif text-2xl tracking-[0.18em] text-[#20201D] font-medium block">
                B&amp;B ARTEMISIA
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#7C8068]">
                Alghero · Sardegna
              </span>
            </div>
            <button
              id="mobile-drawer-close"
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#20201D]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 py-8 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-serif text-2xl tracking-widest text-[#20201D] hover:text-[#A7664D] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 border-t border-[#D8CDBB] pt-6">
            <button
              id="mobile-drawer-book-cta"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-[#30372E] text-[#F4F0E8] uppercase tracking-[0.2em] text-xs font-semibold"
            >
              BOOK YOUR STAY
            </button>
            <p className="text-[11px] text-center text-[#7C8068] tracking-widest uppercase">
              Via Alcide De Gasperi 36 C · Alghero
            </p>
          </div>
        </div>
      )}
    </>
  );
};
