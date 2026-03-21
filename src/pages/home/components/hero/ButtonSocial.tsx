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
        className="relative bg-white dark:bg-neutral-900 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary rounded-full p-4 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-primary/10"
        aria-label={link.name}
        {...(link.download ? { download: true } : {})}
      >
        <div className="text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
          {link.icon}
        </div>
      </a>

      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 bg-neutral-800/95 dark:bg-gray-100/95 backdrop-blur-sm text-white dark:text-gray-800 text-[11px] px-3 py-1.5 rounded-lg shadow-xl border border-white/10 dark:border-gray-300/20 z-20 whitespace-nowrap pointer-events-none min-w-max font-medium tracking-wide">
        {link.name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-[6px] border-transparent border-t-neutral-800/95 dark:border-t-gray-100/95"></div>
      </div>
    </div>
  );
}
