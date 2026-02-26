import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { socialLinks } from './HeroData'; 
import type { SocialLink } from './HeroData';
import ButtonSocial from './ButtonSocial';
import HeroDescription from './HeroDescription';
import foto from '../../../../assets/hero/foto.png';

function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tituloRef = useRef<HTMLHeadingElement | null>(null);
  const subtituloRef = useRef<HTMLHeadingElement | null>(null);
  const descripcionRef = useRef<HTMLDivElement | null>(null);
  const rightColumnRef = useRef<HTMLDivElement | null>(null); // <-- nuevo ref
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!tituloRef.current || !subtituloRef.current) return;
      if (!imageLoaded) return;

      const q = gsap.utils.selector(containerRef); 
      const r = gsap.utils.selector(rightColumnRef);

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Animación columna izquierda
      tl.from(tituloRef.current, { y: -50, opacity: 0, duration: 0.8 })
        .from(subtituloRef.current, { y: 30, opacity: 0, duration: 0.7 })
        .from(descripcionRef.current, { y: 20, opacity: 0, duration: 0.6 })
        .from(q('.social-btn'), { y: 8, opacity: 0, scale: 0.98, stagger: 0.5, duration: 1 });

      // Después de la columna izquierda, aparece la columna derecha
      tl.from(rightColumnRef.current, { x: 60, opacity: 0, duration: 0.8, ease: 'power3.out' });

      // 3. LA FOTO: Animamos de 0 a 1 explícitamente para evitar el salto
      tl.fromTo(r('img'), 
        { opacity: 0, scale: 0.92 }, 
        { opacity: 1, scale: 1, duration: 1.2, ease: "power2.inOut" }, 
        "-=0.5"
      )
      .from(r('h3'), { y: 10, opacity: 0, duration: 0.5 }, "-=0.7");
    }, containerRef);

    return () => ctx.revert();
  }, [imageLoaded]);

  return (
    <section id="hero"  className="min-h-screen flex items-center px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid gap-12 items-center lg:grid-cols-2">
          {/* Columna izquierda: Título, subtítulo, descripción y redes */}
          <div ref={containerRef} className="order-1 text-center lg:text-left">
            <h1 ref={tituloRef} className="text-5xl sm:text-6xl lg:text-7xl font-titulo font-extrabold mb-4">
              <span>{"{p}"}</span>
            </h1>

            <div className="mb-6 hola">
              <h2 ref={subtituloRef} className="text-xl sm:text-2xl lg:text-3xl font-titulo font-semibold">
                Estudiante Licenciatura en Sistemas | .NET & SQL Server
              </h2>
            </div>

            <div ref={descripcionRef} className="mb-6 efecto-aparicion">
              <HeroDescription />
            </div>

            <div className="flex justify-center lg:justify-start gap-6 mb-2 efecto-aparicion">
              {socialLinks.map((link: SocialLink, index: number) => (
                <div key={index} className="social-btn">
                  <ButtonSocial link={link} />
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha: Imagen + info personal */}
          <div ref={rightColumnRef} className="order-2 flex flex-col items-center lg:items-end">
            <div className="efecto-aparicion flex flex-col items-center">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gray-400 dark:bg-gray-900 rounded-full blur opacity-20"></div>
                <img
                  src={foto}
                  alt="Pablo Igei Nakagawa"
                  className="relative rounded-full w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-gray-200 dark:border-gray-700"
                  onLoad={() => setImageLoaded(true)}
                />
              </div>

              <div className="space-y-2 text-center">
                <h3 className="text-2xl font-bold font-titulo">Pablo Igei Nakagawa</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;