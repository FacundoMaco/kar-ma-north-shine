import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/assets/company-logo.png" 
              alt="Kar & Ma S.A.C." 
              className="h-10 w-10 object-contain"
            />
            <div className="text-xl font-semibold text-primary">
              Kar & Ma S.A.C.
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('submarcas')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Submarcas
            </button>
            <button 
              onClick={() => scrollToSection('segmentos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Segmentos
            </button>
            <button 
              onClick={() => scrollToSection('clientes')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Clientes
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('submarcas')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Submarcas
              </button>
              <button 
                onClick={() => scrollToSection('segmentos')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Segmentos
              </button>
              <button 
                onClick={() => scrollToSection('clientes')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Clientes
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contacto
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;