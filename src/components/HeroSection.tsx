import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const element = document.querySelector('.segment-cards');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with enhanced gradient and texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_4px_4px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:50px_50px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full flex justify-center mb-8"
        >
          <div className="max-w-4xl w-full">
            <img 
              src="/assets/kar-ma-logo.png" 
              alt="Kar & Ma" 
              className="h-64 md:h-96 lg:h-[500px] w-auto mx-auto object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Excelencia en sal retail e industrial
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-2xl mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed"
        >
          Consorcio con más de 30 años de experiencia produciendo sal para empresas e industria local
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Contáctanos
          </Button>
          <Button 
            onClick={scrollToNext}
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
          >
            Conoce nuestros productos
          </Button>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToNext}
        >
          <span className="text-sm font-medium">Descubre más</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;