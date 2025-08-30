import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark">
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col items-center">
        <Reveal delay={0.5}>
          <div className="w-full flex justify-center mb-8">
            <div className="max-w-3xl w-full">
              <img 
                src="/assets/kar-ma-logo.png" 
                alt="Kar & Ma" 
                className="h-64 md:h-96 lg:h-[448px] w-auto mx-auto object-contain"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={1.0}>
          <p className="text-xl md:text-2xl mb-4 font-medium max-w-3xl">
            Excelencia en sal retail e industrial
          </p>
        </Reveal>
        <Reveal delay={1.5}>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Consorcio con más de 30 años de experiencia produciendo sal para empresas e industria local
          </p>
        </Reveal>
        <Reveal delay={2.0}>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3 font-semibold"
          >
            Contáctanos
          </Button>
        </Reveal>
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