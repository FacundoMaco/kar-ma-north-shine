import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para cambiar el estado del navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`
        fixed z-50 left-0 right-0
        ${isScrolled ? 'top-4' : 'top-0'}
      `}
    >
      {/* Dynamic Island Navbar con Liquid Glass Effect */}
      <div 
        style={{
          transition: "all 800ms cubic-bezier(0.4, 0, 0.2, 1)",
          width: isScrolled ? '700px' : '100%',
          margin: '0 auto',
          transformOrigin: 'center top'
        }}
        className={`
          relative overflow-hidden will-change-[width,border-radius]
          motion-reduce:transition-none motion-safe:transition-all
          ${isScrolled 
            ? 'bg-background/85 backdrop-blur-2xl border border-white/25 shadow-2xl shadow-black/25 rounded-[28px]' 
            : 'bg-background/95 backdrop-blur-2xl border border-white/30 shadow-2xl shadow-black/30 rounded-none'
          }
          ${isMenuOpen ? 'rounded-3xl' : ''}
        `}
      >
        {/* Liquid Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/8 via-white/15 to-white/8 opacity-70"></div>
        
        {/* Animated Background Blur */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 animate-pulse"></div>
        
        {/* Textura adicional para efecto liquid glass */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-white/5 opacity-50"></div>
        
        {/* Main Content */}
        <div className="relative z-10">
          <div 
            style={{
              transition: "all 800ms cubic-bezier(0.4, 0, 0.2, 1)"
            }}
            className={`
              flex items-center justify-between
              motion-reduce:transition-none motion-safe:transition-all
              ${isScrolled ? 'px-6 py-3' : 'px-8 py-4'}
            `}>
            {/* Logo con animación - visible siempre pero con diferentes tamaños */}
            <div 
              style={{
                transition: "all 800ms cubic-bezier(0.4, 0, 0.2, 1)"
              }}
              className={`
                flex items-center
                motion-reduce:transition-none motion-safe:transition-all
              `}
            >
              <button 
                onClick={scrollToTop}
                className="flex items-center hover:scale-105 transition-all duration-500 ease-out"
              >
                <img 
                  src="/assets/logoverde.png" 
                  alt="Kar & Ma" 
                  style={{
                    transition: "all 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                  className={`
                    will-change-[height] motion-reduce:transition-none motion-safe:transition-all
                    ${isScrolled ? 'h-16' : 'h-20'} w-auto object-contain
                  `}
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className={`hidden md:flex items-center space-x-2 transition-all duration-700 ease-out ${isScrolled ? 'ml-0' : 'ml-0'}`}>
              <button 
                onClick={() => scrollToSection('home')}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/90 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/90 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('submarcas')}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/90 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                Submarcas
              </button>
              <button 
                onClick={() => scrollToSection('segmentos')}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/90 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                Segmentos
              </button>
              <button 
                onClick={() => scrollToSection('clientes')}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/90 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                Clientes
              </button>
              <button 
                onClick={() => {
                  const phoneNumber = '51999999999'; // Reemplaza con el número real
                  const message = 'Hola, quisiera información acerca de sus productos y precios para cotizar al por menor o mayor.';
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="px-4 py-2 rounded-full text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Cotización
              </button>
            </nav>

            {/* Mobile menu button con animación */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-110 ${isScrolled ? 'ml-0' : 'ml-0'}`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation - Dynamic Island Expansion con Liquid Glass */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-white/20 bg-background/90 backdrop-blur-2xl rounded-b-3xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-60"></div>
              <nav className="relative z-10 flex flex-col p-4 space-y-2">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                >
                  Inicio
                </button>
                <button 
                  onClick={() => scrollToSection('nosotros')}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                >
                  Nosotros
                </button>
                <button 
                  onClick={() => scrollToSection('submarcas')}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                >
                  Submarcas
                </button>
                <button 
                  onClick={() => scrollToSection('segmentos')}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                >
                  Segmentos
                </button>
                <button 
                  onClick={() => scrollToSection('clientes')}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                >
                  Clientes
                </button>
                <button 
                  onClick={() => {
                    const phoneNumber = '51999999999'; // Reemplaza con el número real
                    const message = 'Hola, quisiera información acerca de sus productos y precios para cotizar al por menor o mayor.';
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Cotización
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;