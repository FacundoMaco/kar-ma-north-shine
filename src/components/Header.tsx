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
    <header className={`fixed z-50 transition-all duration-700 ease-out ${isScrolled ? 'top-4 left-1/2 transform -translate-x-1/2' : 'top-0 left-0 right-0'}`}>
      {/* Dynamic Island Navbar con Liquid Glass Effect */}
      <div 
        className={`
          relative overflow-hidden transition-all duration-700 ease-out transform
          ${isScrolled 
            ? 'bg-background/85 backdrop-blur-2xl border border-white/25 shadow-2xl shadow-black/25 rounded-2xl scale-105' 
            : 'bg-background/95 backdrop-blur-2xl border border-white/30 shadow-2xl shadow-black/30 rounded-none scale-100 w-full'
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
          <div className={`
            flex items-center justify-between transition-all duration-700 ease-out
            ${isScrolled ? 'px-6 py-3 min-w-[700px] max-w-[900px]' : 'px-8 py-4 w-full max-w-none'}
          `}>
            {/* Logo con animación - visible siempre pero con diferentes tamaños */}
            <div className={`flex items-center transition-all duration-700 ease-out ${isScrolled ? 'opacity-100 scale-100' : 'opacity-100 scale-100'}`}>
              <button 
                onClick={scrollToTop}
                className="flex items-center hover:scale-105 transition-all duration-300"
              >
                <img 
                  src="/assets/logoverde.png" 
                  alt="Kar & Ma" 
                  className={`transition-all duration-700 ease-out ${isScrolled ? 'h-16' : 'h-20'} w-auto object-contain`}
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
                onClick={() => scrollToSection('contacto')}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/90 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                Contacto
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
                  onClick={() => scrollToSection('contacto')}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                >
                  Contacto
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