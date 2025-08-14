import { useState, useEffect } from 'react';

export default function HeroDescription() {
  const fullText: string = "Me gusta resolver, no sólo codificar.";
  const [typedText, setTypedText] = useState<string>('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p className="max-w-2xl mb-8 text-lg sm:text-xl leading-relaxed">
        {typedText}
        <span className="border-r-2 border-current animate-blink ml-1">&nbsp;</span>
      </p>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </>
  );
}
