import { Card, CardContent } from "@/components/ui/card";
import { Home, Factory } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

export const BusinessSegmentsSection: React.FC = () => {
  return (
    <motion.section id="segmentos" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Segmentos de Negocio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Dos líneas de negocio especializadas para atender diferentes mercados
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Sal Retail */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="h-64 bg-primary/10 flex items-center justify-center"
              >
                <div className="text-primary font-semibold">Productos Retail</div>
              </motion.div>
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <Home className="w-8 h-8 text-primary" />
                  </motion.div>
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
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      viewport={{ once: true }}
                    >• Sal de mesa refinada</motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                    >• Sal marina natural</motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      viewport={{ once: true }}
                    >• Sal yodada</motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      viewport={{ once: true }}
                    >• Especialidades gastronómicas</motion.li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sal Industrial */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="h-64 bg-primary/10 flex items-center justify-center"
              >
                <div className="text-primary font-semibold">Productos Industriales</div>
              </motion.div>
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <Factory className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-primary">Sal Industrial</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Soluciones especializadas para industrias que requieren sal en sus procesos. 
                  Proveemos sal industrial de alta calidad para diversos sectores como 
                  manufactura, tratamiento de agua y procesos químicos.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Aplicaciones principales:</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      viewport={{ once: true }}
                    >• Tratamiento de agua</motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                    >• Procesos químicos</motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      viewport={{ once: true }}
                    >• Industria alimentaria</motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      viewport={{ once: true }}
                    >• Manufactura general</motion.li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default BusinessSegmentsSection;
