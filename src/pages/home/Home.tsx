import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { socialLinks } from './HomeData'; 
import type { SocialLink } from './HomeData';
import ButtonSocial from './ButtonSocial';
import HomeDescription from './HomeDescription';

export default function Home() {
  const containerRef = useRef<HTMLElement | null>(null);
  const tituloRef = useRef<HTMLHeadingElement | null>(null);
  const subtituloRef = useRef<HTMLHeadingElement | null>(null);
  const descripcionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!tituloRef.current || !subtituloRef.current) return;

      const q = gsap.utils.selector(containerRef); // selector scoped

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(tituloRef.current, { y: -50, opacity: 0, duration: 0.8 })
        .from(subtituloRef.current, { y: 30, opacity: 0, duration: 0.7 })
        .from(descripcionRef.current, { y: 20, opacity: 0, duration: 0.6 })
        .from(q('.social-btn'), { y: 8, opacity: 0, scale: 0.98, stagger: 0.5, duration: 1 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={containerRef} className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <h1 ref={tituloRef} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
        <span>{"{p}"}</span>
      </h1>

      <div className="mb-8 hola">
        <h2 ref={subtituloRef} className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          Estudiante de Sistemas | Aprendiendo React & .NET
        </h2>
      </div>

      <div ref={descripcionRef}>
        <HomeDescription />
      </div>

      <div className="flex justify-center gap-6 mb-10">
        {socialLinks.map((link: SocialLink, index: number) => (
          <div key={index} className="social-btn">
            <ButtonSocial link={link} />
          </div>
        ))}
      </div>
    </section>
  );
}
