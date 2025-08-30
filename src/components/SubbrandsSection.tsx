import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

const SubbrandsSection = () => {
  return (
    <section id="submarcas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center justify-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Nuestras Submarcas
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Marcas consolidadas dentro del consorcio Kar & Ma
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Salina */}
          <Reveal direction="left" delay={0.4} width="100%">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">S</span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Salina</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestra marca premium enfocada en productos de sal de alta calidad para 
                  el mercado retail y gastronómico. Reconocida por su pureza y presentación 
                  excepcional que satisface los estándares más exigentes.
                </p>
              </CardContent>
            </Card>
          </Reveal>

          {/* Norteñita */}
          <Reveal direction="right" delay={0.6} width="100%">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">N</span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Norteñita</h3>
                <p className="text-muted-foreground leading-relaxed">
                  La marca que representa nuestras raíces norteñas, especializada en 
                  sal tradicional para el hogar peruano. Conecta con la cultura local 
                  y mantiene la esencia de nuestros orígenes en cada producto.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center">
            <Reveal delay={0.5}>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Ambas submarcas mantienen los altos estándares de calidad que caracterizan 
                al consorcio Kar & Ma, adaptándose a las necesidades específicas de cada segmento del mercado.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubbrandsSection;