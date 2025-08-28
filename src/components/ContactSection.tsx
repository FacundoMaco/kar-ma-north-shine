import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    mensaje: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos contactaremos contigo pronto.",
    });
    setFormData({ nombre: "", empresa: "", email: "", mensaje: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contacto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conecta con nosotros para soluciones empresariales en sal
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulario */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Formulario Empresarial
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nombre">Nombre *</Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="empresa">Empresa *</Label>
                  <Input
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="mensaje">Mensaje *</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    className="mt-2 min-h-[120px]"
                    placeholder="Describe tus necesidades de sal retail o industrial..."
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Enviar Consulta
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Información de contacto */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Ubicación</h4>
                    <p className="text-muted-foreground">
                      Planta Industrial<br />
                      Región Norte del Perú<br />
                      Zona Industrial Salinera
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <p className="text-muted-foreground">
                      contacto@karma.com.pe
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Teléfono</h4>
                    <p className="text-muted-foreground">
                      +51 999 999 999
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Business */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-green-800 mb-4">WhatsApp Business</h4>
                <p className="text-green-700 mb-4">
                  Para consultas rápidas de precios y disponibilidad
                </p>
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white w-full"
                  onClick={() => window.open('https://wa.me/51999999999?text=Hola, necesito información sobre sus productos de sal para mi empresa.')}
                >
                  Consulta por WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Mapa */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Nuestra Ubicación</h4>
                <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Mapa de ubicación - Norte del Perú</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;