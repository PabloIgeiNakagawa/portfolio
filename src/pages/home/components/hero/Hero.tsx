import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { socialLinks } from './HeroData'; 
import type { SocialLink } from './HeroData';
import ButtonSocial from './ButtonSocial';
import HeroDescription from './HeroDescription';
import foto from '../../../../assets/hero/foto.webp';
import usePrefersReducedMotion from '../../../../hooks/usePrefersReducedMotion';

function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tituloRef = useRef<HTMLDivElement | null>(null);
  const subtituloRef = useRef<HTMLDivElement | null>(null);
  const descripcionRef = useRef<HTMLDivElement | null>(null);
  const rightColumnRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;
    const ctx = gsap.context(() => {
      if (!tituloRef.current || !subtituloRef.current) return;

      const q = gsap.utils.selector(containerRef); 
      const r = gsap.utils.selector(rightColumnRef);

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(tituloRef.current, { y: -50, opacity: 0, duration: 0.5 })
        .from(subtituloRef.current, { y: 30, opacity: 0, duration: 0.4 })
        .from(descripcionRef.current, { y: 20, opacity: 0, duration: 0.4 })
        .from(q('.social-btn'), { y: 8, opacity: 0, scale: 0.98, stagger: 0.1, duration: 0.5 });

      tl.from(rightColumnRef.current, { x: 60, opacity: 0, duration: 0.5, ease: 'power3.out' })
        .fromTo(r('img'), 
          { opacity: 0, scale: 0.92 }, 
          { opacity: 1, scale: 1, duration: 0.7, ease: "power2.inOut" }, 
          "-=0.5"
        )
        .from(r('.profile-name'), { y: 10, opacity: 0, duration: 0.35 }, "-=0.7");
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="hero" className="min-h-screen flex items-center px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid gap-12 items-center lg:grid-cols-2">
          <div ref={containerRef} className="order-1 text-center lg:text-left">
            <div ref={tituloRef} aria-hidden="true" className="text-6xl sm:text-7xl lg:text-8xl font-titulo font-black mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-neutral-200 dark:to-white">
                {"{p}"}
              </span>
            </div>

            <div ref={subtituloRef}>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-titulo font-semibold text-gray-700 dark:text-neutral-300">
                Desarrollador .NET
              </h1>
              <p className="text-base sm:text-lg font-texto text-gray-600 dark:text-neutral-400 mt-1">
                Estudiante avanzado de Licenciatura en Sistemas en la UNGS
              </p>
            </div>

            <div ref={descripcionRef} className="mt-6">
              <HeroDescription />
            </div>

            <div className="flex justify-center lg:justify-start gap-4 mt-8">
              {socialLinks.map((link: SocialLink, index: number) => (
                <div key={index} className="social-btn">
                  <ButtonSocial link={link} />
                </div>
              ))}
            </div>
          </div>

          <div ref={rightColumnRef} className="order-2 flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
              <div className="relative">
                <img
                  src={foto}
                  alt="Pablo Igei Nakagawa"
                  className="rounded-3xl w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover shadow-2xl border-2 border-gray-100 dark:border-neutral-800"
                />
              </div>
            </div>

            <div className="profile-name mt-6 text-center">
              <h3 className="text-2xl font-bold font-titulo text-gray-900 dark:text-white">
                Pablo Igei Nakagawa
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-500 mt-1">
                Buenos Aires, Argentina
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
