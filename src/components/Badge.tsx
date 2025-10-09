import React from 'react';

type BadgeColor =
  | 'violet'
  | 'denim'
  | 'sea'
  | 'sunset'
  | 'sunglow'
  | 'neutral'
  | 'orange';

type BadgeVariant = 'default' | 'outline' | 'indicator' | 'indicator-large';

interface BadgeProps {
  text: string;
  count?: number;
  color?: BadgeColor;
  variant?: BadgeVariant;
  className?: string;
  leftComponent?: React.ReactNode;
}

const colorClasses: Record<BadgeColor, { bg: string; text: string; border: string }> = {
  violet: {
    bg: 'bg-secondary-violet/20',
    text: 'text-secondary-violet',
    border: 'border-secondary-violet',
  },
  denim: {
    bg: 'bg-secondary-denim/20',
    text: 'text-secondary-denim',
    border: 'border-secondary-denim',
  },
  sea: {
    bg: 'bg-secondary-sea/20',
    text: 'text-secondary-sea',
    border: 'border-secondary-sea',
  },
  sunset: {
    bg: 'bg-secondary-sunset/20',
    text: 'text-secondary-sunset',
    border: 'border-secondary-sunset',
  },
  sunglow: {
    bg: 'bg-secondary-sunglow/20',
    text: 'text-secondary-sunglow',
    border: 'border-secondary-sunglow',
  },
  neutral: {
    bg: 'bg-neutral-100/20',
    text: 'text-neutral-900',
    border: 'border-neutral-200',
  },
  orange: {
    bg: 'bg-brand-orange/20',
    text: 'text-brand-orange',
    border: 'border-brand-orange',
  },
};

const Badge: React.FC<BadgeProps> = ({
  text,
  count,
  color = 'neutral',
  variant = 'default',
  className = '',
  leftComponent,
}) => {
  const { bg, text: textColor, border } = colorClasses[color];

  const baseClasses = `inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-200 ease-in-out`;
  const textClasses = 'text-body-s-bold'; // UPDATED: Added 'text-' prefix here

  switch (variant) {
    case 'default':
      return (
        <span
          className={`${baseClasses} ${bg} ${textColor} px-inline-padding py-atom-padding ${textClasses} ${className}`}
        >
          {leftComponent && <span className="mr-space-4">{leftComponent}</span>}
          {text}
        </span>
      );
    case 'outline':
      return (
        <span
          className={`${baseClasses} bg-transparent border ${border} ${textColor} px-inline-padding py-atom-padding ${textClasses} ${className}`}
        >
          {leftComponent && <span className="mr-space-4">{leftComponent}</span>}
          {text}
        </span>
      );
    case 'indicator':
      return (
        <span
          className={`${baseClasses} ${bg} ${textColor} h-space-16 w-space-16 ${textClasses} ${className}`}
        >
          {count}
        </span>
      );
    case 'indicator-large':
      return (
        <span
          className={`${baseClasses} ${bg} ${textColor} h-space-24 w-space-24 text-body-m-bold ${className}`} // UPDATED: Added 'text-' prefix here
        >
          {count}
        </span>
      );
    default:
      return null;
  }
};

export default Badge;