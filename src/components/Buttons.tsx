interface ButtonProps {
  href: string;
}

function ButtonCode({ href }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 font-texto text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900"
    >
      <svg aria-hidden="true" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-9-2 10" />
      </svg>
      Ver repositorio
    </a>
  );
}

function ButtonDemo({ href }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-4 font-texto text-sm font-semibold text-neutral-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-400 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900"
    >
      <svg aria-hidden="true" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14 4h6m0 0v6m0-6L10 14m9 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
      </svg>
      Ver en vivo
    </a>
  );
}

export { ButtonCode, ButtonDemo };
