import type { SocialLink } from './HeroData';

interface ButtonSocialProps {
  link: SocialLink;
}

export default function ButtonSocial({ link }: ButtonSocialProps) {
  return (
    <div className="relative group flex flex-col items-center">
      <a
        href={link.url}
        target={link.name !== 'Email' ? '_blank' : undefined}
        rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
        className="relative bg-white dark:bg-neutral-950 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-neutral-800 border border-gray-300 dark:border-gray-500 hover:border-gray-400 dark:hover:border-gray-500 rounded-full p-4 transition-all duration-300 transform hover:scale-110"
        aria-label={link.name}
        {...(link.download ? { download: true } : {})}
      >
        <div className="text-gray-900 dark:text-white transition-colors duration-300">
          {link.icon}
        </div>
      </a>

      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs px-4 py-1 rounded shadow-lg z-20 whitespace-nowrap pointer-events-none min-w-max font-texto">
        {link.name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-4 border-transparent border-t-gray-900 dark:border-t-white"></div>
      </div>
    </div>
  );
}
