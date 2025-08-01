interface ButtonProps {
  href: string;
}

function ButtonCode({ href }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 
      dark:text-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-gray-300 dark:border-gray-600 
      hover:border-gray-400 dark:hover:border-gray-500"
    >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        Ver Código
    </a>
  );
}

function ButtonDemo({ href }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 
      dark:hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 9.75L15.75 12L9.75 14.25V9.75Z" />
        <rect x="2" y="4" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
        <path d="M8 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      Ver en vivo
    </a>
  );
}

function ButtonInfo() {
  return (
    <a
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
    >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        Ver detalles
    </a>
  );
}


export { ButtonCode, ButtonDemo, ButtonInfo };
