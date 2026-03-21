import { useState, useEffect } from 'react';

export default function HeroDescription() {
  const fullText: string = "Me gusta resolver, no solo programar.";
  const [typedText, setTypedText] = useState<string>('');
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isTyping) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [isTyping]);

  return (
    <div className="relative">
      <p className="text-base sm:text-lg text-gray-700 dark:text-neutral-300 leading-relaxed font-texto">
        {typedText}
        <span className={`inline-block w-[10px] h-4 ml-1 bg-gray-900 dark:bg-white align-middle ${isTyping ? 'opacity-100' : (showCursor ? 'opacity-100' : 'opacity-0')}`}></span>
      </p>
    </div>
  );
}
