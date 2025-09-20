import { CONTACT_EMAIL, CONTACT_PHONE } from "@/config";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const message = "Hola, soy una empresa interesada en sus productos de sal. Me gustaría recibir información sobre precios y disponibilidad.";
    const phoneNumber = "51999999999";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleQuoteClick = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
<footer className="bg-gradient-to-br from-primary via-primary to-primary-dark text-primary-foreground relative overflow-hidden">
  {/* Textura de fondo */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_3px_3px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:40px_40px]" />
  </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* CTA Section */}
        <div className="py-12 border-b border-primary-foreground/20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para trabajar con nosotros?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Únete a las empresas que confían en la calidad y tradición de Kar & Ma
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleQuoteClick}
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-medium"
              >
                <span className="flex items-center gap-2">
                  Solicitar cotización
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-medium"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Logo y descripción */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="/assets/kar-ma-logo.png" 
                  alt="Kar & Ma" 
                  className="h-16 w-auto object-contain filter brightness-0 invert"
                />
              </div>
              <p className="text-primary-foreground/80 mb-6 max-w-lg text-lg leading-relaxed">
                Consorcio peruano con más de 30 años de experiencia en la producción 
                de sal retail e industrial, respaldado por la confianza del pueblo del norte.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <MapPin className="w-5 h-5" />
                  <span>Planta Industrial - Región Norte del Perú</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Phone className="w-5 h-5" />
                  <span>+51 999 999 999</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Mail className="w-5 h-5" />
                  <span>contacto@karma.com.pe</span>
                </div>
              </div>
            </div>

            {/* Productos */}
            <div>
              <h3 className="text-xl font-bold mb-6">Nuestros Productos</h3>
              <ul className="space-y-3 text-primary-foreground/80">
                <li className="hover:text-white transition-colors cursor-pointer">Sal Retail Premium</li>
                <li className="hover:text-white transition-colors cursor-pointer">Sal Industrial Grado A</li>
                <li className="hover:text-white transition-colors cursor-pointer">Marca Salina</li>
                <li className="hover:text-white transition-colors cursor-pointer">Marca Norteñita</li>
                <li className="hover:text-white transition-colors cursor-pointer">Sal Marina Natural</li>
              </ul>
            </div>

            {/* Enlaces */}
            <div>
              <h3 className="text-xl font-bold mb-6">Empresa</h3>
              <ul className="space-y-3 text-primary-foreground/80">
                <li>
                  <button 
                    onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors text-left"
                  >
                    Nosotros
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('submarcas')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors text-left"
                  >
                    Submarcas
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('segmentos')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors text-left"
                  >
                    Segmentos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors text-left"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-center md:text-left">
              © {currentYear} Kar & Ma. Todos los derechos reservados. 
              Tradición salinera del norte peruano.
            </p>
            <div className="flex gap-6 text-primary-foreground/60">
              <span className="hover:text-white transition-colors cursor-pointer">Política de Privacidad</span>
              <span className="hover:text-white transition-colors cursor-pointer">Términos de Servicio</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
