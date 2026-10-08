import React from 'react';
import { ExternalLink } from 'lucide-react';

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href,
  onClick,
  className = '',
  label = 'Live Project',
}) => {
  const content = (
    <>
      <span>{label}</span>
      <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );

  const buttonClasses = `group inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-300 hover:bg-[#D7E2EA]/10 hover:border-white px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base cursor-pointer ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button" className={buttonClasses}>
      {content}
    </button>
  );
};

export default LiveProjectButton;
