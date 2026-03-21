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
  const lineRef = useRef<HTMLDivElement | null>(null);
  const decorLineRef = useRef<HTMLDivElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, { opacity: 0, y: 30 });
      gsap.set(lineRef.current, { scaleX: 0, opacity: 0 });
      gsap.set(decorLineRef.current, { scaleX: 0, opacity: 0 });
      if (paragraphRef.current) {
        gsap.set(paragraphRef.current, { opacity: 0, y: 20 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true,
        }
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
      .to(lineRef.current, {
        scaleX: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.3')
      .to(decorLineRef.current, {
        scaleX: 1,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      }, '-=0.1');

      if (paragraphRef.current) {
        tl.to(paragraphRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        }, '-=0.2');
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`text-center mb-16 ${className}`}>
      <h2 
        ref={titleRef} 
        className="text-3xl sm:text-4xl lg:text-5xl font-titulo font-semibold tracking-tight text-gray-900 dark:text-white mb-6"
      >
        {title}
      </h2>

      <div className="relative">
        <div 
          ref={lineRef} 
          className="w-20 h-[4px] bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full origin-center"
        ></div>
        <div 
          ref={decorLineRef}
          className="w-36 h-[1px] bg-gradient-to-r from-transparent via-gray-400/40 to-transparent mx-auto mt-1 rounded-full origin-center"
        ></div>
      </div>

      {paragraph && (
        <p 
          ref={paragraphRef} 
          className="text-base sm:text-lg text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto font-titulo mt-8"
        >
          {paragraph}
        </p>
      )}
    </div>
  );
}
