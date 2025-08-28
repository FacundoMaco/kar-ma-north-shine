import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import northPeruImage from "@/assets/north-peru.jpg";

const ClientsSection = () => {
  return (
    <section id="clientes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Clientes & Partners
          </h2>
          <p className="text-xl text-primary-light font-medium mb-8">
            "La confianza del pueblo del norte nos respalda"
          </p>
        </div>

        {/* Imagen representativa del norte */}
        <div className="mb-16">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <img 
              src={northPeruImage} 
              alt="Norte del Perú" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Orgullosamente Norteños
                </h3>
                <p className="text-lg opacity-90">
                  Tradición y calidad desde el corazón del norte peruano
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Logos de empresas (siluetas) */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-primary mb-12">
            Empresas que Confían en Nosotros
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="flex items-center justify-center p-6 bg-secondary rounded-lg">
                <div className="w-20 h-12 bg-muted rounded flex items-center justify-center">
                  <span className="text-muted-foreground text-sm font-medium">
                    Cliente {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonios */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-muted-foreground italic mb-6">
                "Kar & Ma ha sido nuestro proveedor de sal industrial por más de 15 años. 
                Su consistencia en calidad y tiempos de entrega nos permite mantener 
                nuestros procesos sin interrupciones."
              </p>
              <div className="text-sm">
                <p className="font-semibold text-foreground">Empresa Pesquera del Norte</p>
                <p className="text-muted-foreground">Sector Pesquero</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-muted-foreground italic mb-6">
                "La calidad de sus productos retail bajo la marca Norteñita es excepcional. 
                Nuestros clientes valoran la autenticidad y pureza que caracterizan 
                a esta empresa norteña."
              </p>
              <div className="text-sm">
                <p className="font-semibold text-foreground">Distribuidora Regional</p>
                <p className="text-muted-foreground">Comercio Retail</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Más de 300 empresas del norte del Perú confían en nuestros productos y servicios, 
            desde pequeños negocios familiares hasta grandes corporaciones industriales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;