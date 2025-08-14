import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface SectionTitleProps {
  title: string;
  paragraph?: string;
  className?: string;
}

export default function SectionTitle({ title, paragraph, className = '' }: SectionTitleProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const q = gsap.utils.selector(containerRef);

    // --- Animación letra por letra del título ---
    if (titleRef.current) {
      const letters = titleRef.current.querySelectorAll('span');
      gsap.set(letters, { opacity: 0, y: 20 });

      ScrollTrigger.batch(letters, {
        start: 'top 85%',
        onEnter: batch => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.03,
            ease: 'power3.out',
          });
        },
        once: true,
      });
    }

    // --- Animación del párrafo y línea divisoria ---
    gsap.set(q('.efecto-aparicion'), { opacity: 0, y: 30 });
    ScrollTrigger.batch(q('.efecto-aparicion'), {
      start: 'top 85%',
      onEnter: batch => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.15,
        });
      },
      once: true,
    });

  }, []);

  // Función para dividir el título en letras
  const splitTitle = (text: string) =>
    text.split('').map((char, i) => (
      <span
        key={i}
        className="inline-block"
        style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
      >
        {char}
      </span>
    ));

  return (
    <div ref={containerRef} className={`text-center mb-16 ${className}`}>
      <h2 ref={titleRef} className="text-4xl sm:text-5xl font-bold pb-4">
        {splitTitle(title)}
      </h2>

      {paragraph && (
        <p ref={paragraphRef} className="text-lg max-w-2xl mx-auto efecto-aparicion">
          {paragraph}
        </p>
      )}

      <div className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto rounded-full mt-4 efecto-aparicion"></div>
    </div>
  );
}
