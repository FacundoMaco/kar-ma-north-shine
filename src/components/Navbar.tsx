import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50); // Cambia el estado cuando el scroll pasa 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      layout // Esto permite que Framer Motion anime automáticamente los cambios de layout
      className={cn(
        'fixed top-6 left-6 z-50 flex items-center justify-center transition-all duration-700 ease-in-out',
        isScrolled ? 'w-20 h-20' : 'w-full h-[120px] px-6'
      )}
      initial={false} // Deshabilita la animación inicial
      style={{
        backgroundColor: 'rgb(var(--primary))',
        clipPath: isScrolled
          ? 'circle(50% at 50% 50%)'
          : 'inset(0 0 0 0)',
      }}
    >
      <motion.div
        layout
        className="flex items-center justify-between w-full h-full"
      >
        {/* Logo */}
        <motion.img
          src="/assets/kar-ma-logo.png"
          alt="Kar & Ma"
          className={cn(
            'transition-all duration-700',
            isScrolled ? 'w-12 h-12' : 'w-24 h-24'
          )}
        />
        
        {/* Links de navegación - solo visibles cuando no está scrolleado */}
        <motion.div
          layout
          className={cn(
            'flex gap-8 items-center transition-opacity duration-300',
            isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
          )}
        >
          <NavLink href="#home">Inicio</NavLink>
          <NavLink href="#segmentos">Segmentos</NavLink>
          <NavLink href="#nosotros">Nosotros</NavLink>
          <NavLink href="#clientes">Clientes</NavLink>
          <NavLink href="#contacto">Contacto</NavLink>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <motion.a
    href={href}
    className="text-white hover:text-white/80 font-medium text-lg transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

export default Navbar;
