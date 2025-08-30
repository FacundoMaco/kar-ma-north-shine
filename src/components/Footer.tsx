import { Reveal } from "@/components/ui/reveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <Reveal direction="up" delay={0.2}>
              <div className="flex items-center mb-4">
                <img 
                  src="/assets/kar-ma-logo.png" 
                  alt="Kar & Ma" 
                  className="h-12 w-auto object-contain filter brightness-0 invert"
                />
              </div>
              <p className="text-primary-foreground/80 mb-4 max-w-md">
                Consorcio peruano con más de 30 años de experiencia en la producción 
                de sal retail e industrial, respaldado por la confianza del pueblo del norte.
              </p>
              <div className="text-sm text-primary-foreground/60">
                <p>Planta Industrial - Región Norte del Perú</p>
                <p>contacto@karma.com.pe | +51 999 999 999</p>
              </div>
            </Reveal>
          </div>

          {/* Productos */}
          <div>
            <Reveal direction="up" delay={0.4}>
              <h3 className="font-semibold mb-4">Nuestros Productos</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Sal Retail</li>
                <li>Sal Industrial</li>
                <li>Marca Salina</li>
                <li>Marca Norteñita</li>
              </ul>
            </Reveal>
          </div>

          {/* Enlaces */}
          <div>
            <Reveal direction="up" delay={0.6}>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <button 
                    onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    Nosotros
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('submarcas')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    Submarcas
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('segmentos')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    Segmentos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <Reveal direction="up" delay={0.8}>
            <p className="text-primary-foreground/60">
              © {currentYear} Kar & Ma. Todos los derechos reservados. 
              Tradición salinera del norte peruano.
            </p>
          </Reveal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;