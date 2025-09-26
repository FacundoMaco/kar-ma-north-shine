import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { WHATSAPP_DEFAULT_MESSAGE, WHATSAPP_PHONE } from "@/config";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

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
    const currentPath = window.location.pathname;
    if (currentPath === '/productos') {
      navigate('/');
      // Esperamos a que la navegación se complete antes de hacer scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`
        fixed z-50 left-0 right-0
        ${isScrolled ? 'top-2 md:top-4' : 'top-0'}
      `}
    >
      {/* Dynamic Island Navbar con Liquid Glass Effect */}
      <div 
        style={{
          transition: "all 800ms cubic-bezier(0.4, 0, 0.2, 1)",
          width: isScrolled ? 'calc(100% - 1rem)' : '100%',
          margin: '0 auto',
          transformOrigin: 'center top',
          maxWidth: isScrolled ? '700px' : 'none'
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
              ${isScrolled ? 'px-4 md:px-6 py-2 md:py-3' : 'px-4 md:px-8 py-3 md:py-4'}
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
                type="button"
                onClick={() => {
                  navigate('/');
                  setIsMenuOpen(false);
                }}
                className="flex items-center hover:scale-105 transition-all duration-500 ease-out"
              >
                <div className="relative">
                  <img 
                    src="/assets/logoverde.png" 
                    alt="Kar & Ma" 
                    style={{
                      transition: "all 800ms cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: "translateX(-50%)",
                      left: "50%",
                      position: "relative"
                    }}
                    className={`
                      will-change-[height] motion-reduce:transition-none motion-safe:transition-all
                      ${isScrolled ? 'h-12 md:h-16' : 'h-16 md:h-20'} w-auto object-contain
                    `}
                  />
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center space-x-1 md:space-x-2 transition-all duration-700 ease-out ${isScrolled ? 'ml-0' : 'ml-0'}`}>
              <button 
                type="button"
                onClick={() => scrollToSection('nosotros')}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/90 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                Nosotros
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('submarcas')}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/90 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                Submarcas
              </button>
              <button 
                type="button"
                onClick={() => {
                  navigate('/productos');
                  setIsMenuOpen(false);
                }}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/90 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                Productos
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('segmentos')}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/90 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                Segmentos
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('clientes')}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/90 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                Clientes
              </button>
              <button 
                type="button"
                onClick={() => {
                  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="px-4 py-2 rounded-full text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Cotización
              </button>
            </nav>

            {/* Mobile menu button con animación */}
              <button
              type="button"
              aria-label="Abrir menú"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-110 ${isScrolled ? 'ml-0' : 'ml-0'}`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation - Dynamic Island Expansion con Liquid Glass */}
          {isMenuOpen && (
            <div id="mobile-menu" className="lg:hidden border-t border-white/20 bg-background/90 backdrop-blur-2xl rounded-b-3xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-60"></div>
              <nav className="relative z-10 flex flex-col p-4 space-y-2">
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
                  onClick={() => {
                    navigate('/productos');
                    setIsMenuOpen(false);
                  }}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                >
                  Productos
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
                    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;
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
