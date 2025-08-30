import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Heart } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Nosotros
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Historia del Grupo Kar & Ma
              </p>
            </Reveal>
          </div>
        </div>

        {/* Historia */}
        <div className="mb-16">
          <Reveal direction="left" width="100%">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">Nuestra Historia</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Durante más de tres décadas, Kar & Ma S.A.C. ha sido un pilar fundamental en la industria salinera peruana. 
                  Nacimos en el norte del país con la visión de proporcionar sal de la más alta calidad tanto para el consumo 
                  retail como para las grandes industrias nacionales.
                </p>
                <p className="text-lg leading-relaxed">
                  Nuestro compromiso con la excelencia nos ha permitido expandirnos y consolidarnos como un consorcio de 
                  confianza, respaldado por la tradición y el trabajo del pueblo del norte peruano.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        {/* Misión, Visión, Valores */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Reveal direction="up" delay={0.2} width="100%">
            <Card className="text-center">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-4">Misión</h3>
                <p className="text-muted-foreground">
                  Proveer sal de excelente calidad para el mercado retail e industrial, 
                  manteniendo los más altos estándares de producción y servicio al cliente.
                </p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal direction="up" delay={0.4} width="100%">
            <Card className="text-center">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-4">Visión</h3>
                <p className="text-muted-foreground">
                  Ser el consorcio salinero líder en el Perú, reconocido por nuestra 
                  calidad, innovación y compromiso con el desarrollo sostenible.
                </p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal direction="up" delay={0.6} width="100%">
            <Card className="text-center">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-4">Valores</h3>
                <div className="text-muted-foreground">
                  <p className="mb-2"><strong>Calidad:</strong> En cada proceso</p>
                  <p className="mb-2"><strong>Confianza:</strong> En cada relación</p>
                  <p><strong>Innovación:</strong> En cada solución</p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        {/* Línea del tiempo */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center text-primary mb-12">
            30 Años de Trayectoria
          </h3>
          <div className="space-y-8">
            <Reveal direction="left" delay={0.2} width="100%">
              <div className="flex items-center space-x-6">
                <div className="bg-primary text-white px-4 py-2 rounded-lg font-semibold min-w-[100px] text-center">
                  1990s
                </div>
                <p className="text-lg">Fundación del grupo en el norte del Perú</p>
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.4} width="100%">
              <div className="flex items-center space-x-6">
                <div className="bg-primary text-white px-4 py-2 rounded-lg font-semibold min-w-[100px] text-center">
                  2000s
                </div>
                <p className="text-lg">Expansión de operaciones y desarrollo de submarcas</p>
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.6} width="100%">
              <div className="flex items-center space-x-6">
                <div className="bg-primary text-white px-4 py-2 rounded-lg font-semibold min-w-[100px] text-center">
                  2010s
                </div>
                <p className="text-lg">Consolidación en el mercado industrial y retail</p>
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.8} width="100%">
              <div className="flex items-center space-x-6">
                <div className="bg-primary text-white px-4 py-2 rounded-lg font-semibold min-w-[100px] text-center">
                  2020s
                </div>
                <p className="text-lg">Liderazgo nacional y reconocimiento del mercado</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;