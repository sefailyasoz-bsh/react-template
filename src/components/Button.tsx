import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Button variants using CVA for type-safe variant management
const buttonVariants = cva(
  // Base styles - common to all buttons
  [
    'inline-flex items-center justify-center gap-2',
    'font-semibold transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      // Variant types (Primary, Secondary, Tertiary, Quaternary)
      variant: {
        primary: [
          'bg-neutral-900 text-brand-white',
          'hover:bg-neutral-800',
          'active:bg-neutral-900',
          'focus-visible:ring-neutral-900',
        ],
        secondary: [
          'bg-brand-orange text-brand-white',
          'hover:bg-ui_orange-800',
          'active:bg-ui_orange-900',
          'focus-visible:ring-brand-orange',
        ],
        tertiary: [
          'border border-neutral-900 bg-transparent text-neutral-900',
          'hover:bg-neutral-50',
          'active:bg-neutral-100',
          'focus-visible:ring-neutral-900',
        ],
        quaternary: [
          'bg-transparent text-neutral-900',
          'hover:bg-neutral-50',
          'active:bg-neutral-100',
          'focus-visible:ring-neutral-900',
        ],
      },
      // Size variants (Small, Medium, Large)
      size: {
        small: [
          'h-8 px-4',
          'text-body-s-bold',
          'rounded-large', // 50% border radius
        ],
        medium: [
          'h-10 px-6',
          'text-body-m-bold',
          'rounded-large', // 50% border radius
        ],
        large: [
          'h-12 px-8',
          'text-body-l-bold',
          'rounded-large', // 50% border radius
        ],
      },
      // Icon position
      iconPosition: {
        left: '',
        right: 'flex-row-reverse',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
      iconPosition: 'none',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Button content */
  children: React.ReactNode;
  /** Optional icon (left or right) */
  icon?: React.ReactNode;
  /** Icon position - automatically detected if icon is provided */
  iconPosition?: 'left' | 'right' | 'none';
  /** Loading state */
  isLoading?: boolean;
  /** Full width button */
  fullWidth?: boolean;
  /** As child (for composition with other components) */
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      icon,
      iconPosition = icon ? 'left' : 'none',
      isLoading = false,
      fullWidth = false,
      disabled,
      children,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? 'span' : 'button';

    return (
      <Comp
        className={`${buttonVariants({ variant, size, iconPosition })} ${
          fullWidth ? 'w-full' : ''
        } ${className || ''}`}
        ref={asChild ? undefined : ref}
        disabled={disabled || isLoading}
        {...(asChild ? {} : props)}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>{children}</span>
          </>
        ) : (
          <>
            {icon && iconPosition === 'left' && (
              <span className="flex-shrink-0">{icon}</span>
            )}
            <span>{children}</span>
            {icon && iconPosition === 'right' && (
              <span className="flex-shrink-0">{icon}</span>
            )}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;