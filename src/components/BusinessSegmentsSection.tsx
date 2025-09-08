import { Card, CardContent } from "@/components/ui/card";
import { Home, Factory } from "lucide-react";

const BusinessSegmentsSection = () => {
  return (
    <section id="segmentos" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Segmentos de Negocio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dos líneas de negocio especializadas para atender diferentes mercados
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Sal Retail */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-primary/10 flex items-center justify-center">
              <div className="text-primary font-semibold">Productos Retail</div>
            </div>
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Home className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold text-primary">Sal Retail</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dirigido al consumo doméstico y comercial pequeño. Ofrecemos productos 
                de sal refinada, sal marina y especialidades gastronómicas en presentaciones 
                adaptadas para el hogar, restaurantes y pequeños negocios.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Productos incluidos:</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Sal de mesa refinada</li>
                  <li>• Sal marina natural</li>
                  <li>• Sal yodada</li>
                  <li>• Especialidades gastronómicas</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Sal Industrial */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-primary/10 flex items-center justify-center">
              <div className="text-primary font-semibold">Productos Industriales</div>
            </div>
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Factory className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold text-primary">Sal Industrial</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Soluciones especializadas para grandes empresas y sectores industriales. 
                Suministramos sal técnica, sal para procesamiento de alimentos, conservación 
                y aplicaciones industriales específicas.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Sectores atendidos:</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Industria alimentaria</li>
                  <li>• Sector pesquero</li>
                  <li>• Industria agrícola</li>
                  <li>• Procesos industriales</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada segmento cuenta con procesos de producción especializados y control de calidad 
            adaptado a las necesidades específicas del mercado objetivo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessSegmentsSection;