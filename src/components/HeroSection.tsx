import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Kar & Ma S.A.C.
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-medium">
          Excelencia en sal retail e industrial
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Consorcio con más de 30 años de experiencia produciendo sal para empresas e industria local
        </p>
        
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3 font-semibold"
        >
          Contáctanos
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;