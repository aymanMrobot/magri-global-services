import { useState, useEffect } from 'react';
import { Menu, X, Sun } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Réalisations', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <span className={`text-2xl md:text-3xl font-black tracking-tighter uppercase ${scrolled ? 'text-primary' : 'text-white'}`}>
            Magri <span className={scrolled ? 'font-light text-slate-500' : 'font-light text-white/80'}>Global Services</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-secondary ${
                scrolled ? 'text-slate-800' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/212668515050"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-full bg-secondary text-primary font-bold hover:bg-secondary-light transition-colors"
          >
            Devis Gratuit
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={scrolled ? 'text-slate-900' : 'text-white'}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col px-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-800 font-medium text-lg"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/212668515050"
            className="text-center mt-2 px-6 py-3 rounded-xl bg-primary text-white font-bold"
          >
            Contactez-nous
          </a>
        </div>
      )}
    </nav>
  );
}
