import React from 'react';

interface ButtonScrollProps {
  idDestino: string;
  texto: string;
}

export default function ButtonScroll({ idDestino, texto }: ButtonScrollProps) {
  const manejarClick = () => {
    const elemento = document.getElementById(idDestino);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={manejarClick}
      className="group relative bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3 cursor-pointer"
    >
      <span className="relative z-10">{texto}</span>
      <svg
        className="w-5 h-5 text-white dark:text-gray-900 animate-bounce relative z-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </button>
  );
}
