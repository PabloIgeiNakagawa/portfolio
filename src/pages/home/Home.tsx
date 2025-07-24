import { useState, useEffect } from 'react';
import { socialLinks } from './HomeData'; 
import type { SocialLink } from './HomeData';
import ButtonScroll from '../../components/ButtonScroll';
import ButtonSocial from './ButtonSocial';
import HomeDescription from './HomeDescription';

export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => { 
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
    >

      {/* Contenido principal */}
      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Nombre principal */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-2xl u-text-h1">
          <span>
            {"{P}"}
          </span>
        </h1>

        {/* Título profesional fijo */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold u-text-h2">
            Estudiante de Sistemas | Aprendiendo React & .NET
          </h2>
        </div>

        <HomeDescription />

        {/* Enlaces sociales */}
        <div className="flex justify-center gap-6 mb-10">
          {socialLinks.map((link: SocialLink, index: number) => (
            <ButtonSocial key={index} link={link} />
          ))}
        </div>

        <div className="flex justify-center">
          <ButtonScroll idDestino="about" texto="Conoce más sobre mí" />
        </div>

      </div>
    </section>
  );
}
