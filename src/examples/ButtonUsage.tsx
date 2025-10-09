import React, { useState } from 'react';
import { ChevronRight, Plus, Download, Settings, Trash2, Check, } from 'lucide-react';

// Types
type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
type ButtonSize = 'small' | 'medium' | 'large';
type IconPosition = 'left' | 'right' | 'none';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  isLoading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

interface LoadingStates {
  [key: string]: boolean;
}

interface ClickCounts {
  [key: string]: number;
}

// Button variants helper
const buttonVariants = (
  variant: ButtonVariant,
  size: ButtonSize,
  iconPosition: IconPosition,
  fullWidth: boolean
): string => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-900 focus-visible:ring-neutral-900',
    secondary: 'bg-brand-orange text-white hover:bg-ui_orange-800 active:bg-ui_orange-900 focus-visible:ring-brand-orange',
    tertiary: 'border border-neutral-900 bg-transparent text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100 focus-visible:ring-neutral-900',
    quaternary: 'bg-transparent text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100 focus-visible:ring-neutral-900'
  };
  
  const sizes: Record<ButtonSize, string> = {
    small: 'h-8 px-4 text-xs font-semibold rounded-full',
    medium: 'h-10 px-6 text-sm font-semibold rounded-full',
    large: 'h-12 px-8 text-base font-semibold rounded-full'
  };
  
  const iconPositions: Record<IconPosition, string> = {
    left: '',
    right: 'flex-row-reverse',
    none: ''
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return `${baseStyles} ${variants[variant]} ${sizes[size]} ${iconPositions[iconPosition]} ${widthClass}`;
};

// Button Component
const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  icon = null, 
  iconPosition = 'none',
  isLoading = false,
  fullWidth = false,
  disabled = false,
  onClick,
  ...props 
}) => {
  const actualIconPosition: IconPosition = icon && iconPosition === 'none' ? 'left' : iconPosition;
  
  return (
    <button
      className={buttonVariants(variant, size, actualIconPosition, fullWidth)}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
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
          {icon && actualIconPosition === 'left' && (
            <span className="flex-shrink-0">{icon}</span>
          )}
          <span>{children}</span>
          {icon && actualIconPosition === 'right' && (
            <span className="flex-shrink-0">{icon}</span>
          )}
        </>
      )}
    </button>
  );
};

// Section Component
interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold text-neutral-900 mb-6 pb-2 border-b-2 border-neutral-200">
      {title}
    </h2>
    {children}
  </div>
);

// ButtonGrid Component
interface ButtonGridProps {
  children: React.ReactNode;
}

const ButtonGrid: React.FC<ButtonGridProps> = ({ children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
    {children}
  </div>
);

// ButtonCard Component
interface ButtonCardProps {
  label: string;
  children: React.ReactNode;
}

const ButtonCard: React.FC<ButtonCardProps> = ({ label, children }) => (
  <div className="flex flex-col gap-2 p-4 border border-neutral-200 rounded-lg bg-white">
    <span className="text-xs font-medium text-neutral-600 mb-2">{label}</span>
    {children}
  </div>
);

// Main Showcase Component
const ButtonUsageShowcase: React.FC = () => {
  const [loadingStates, setLoadingStates] = useState<LoadingStates>({});
  const [clickCounts, setClickCounts] = useState<ClickCounts>({});

  const handleClick = (id: string): void => {
    setClickCounts(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleLoadingClick = (id: string): void => {
    setLoadingStates(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const handleResetCounts = (): void => {
    setClickCounts({});
  };

  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Button Component Showcase
          </h1>
          <p className="text-lg text-neutral-600">
            Comprehensive examples of all button variants, sizes, and states
          </p>
        </div>

        {/* Basic Variants */}
        <Section title="1. Button Variants">
          <ButtonGrid>
            <ButtonCard label="Primary">
              <Button variant="primary" onClick={() => handleClick('primary')}>
                Primary Button
              </Button>
            </ButtonCard>
            <ButtonCard label="Secondary">
              <Button variant="secondary" onClick={() => handleClick('secondary')}>
                Secondary Button
              </Button>
            </ButtonCard>
            <ButtonCard label="Tertiary">
              <Button variant="tertiary" onClick={() => handleClick('tertiary')}>
                Tertiary Button
              </Button>
            </ButtonCard>
            <ButtonCard label="Quaternary">
              <Button variant="quaternary" onClick={() => handleClick('quaternary')}>
                Quaternary Button
              </Button>
            </ButtonCard>
          </ButtonGrid>
        </Section>

        {/* Size Variants */}
        <Section title="2. Button Sizes">
          <ButtonGrid>
            <ButtonCard label="Small">
              <Button variant="primary" size="small">
                Small Button
              </Button>
            </ButtonCard>
            <ButtonCard label="Medium (Default)">
              <Button variant="primary" size="medium">
                Medium Button
              </Button>
            </ButtonCard>
            <ButtonCard label="Large">
              <Button variant="primary" size="large">
                Large Button
              </Button>
            </ButtonCard>
            <ButtonCard label="All Sizes">
              <div className="flex flex-col gap-2 items-start">
                <Button variant="secondary" size="small">Small</Button>
                <Button variant="secondary" size="medium">Medium</Button>
                <Button variant="secondary" size="large">Large</Button>
              </div>
            </ButtonCard>
          </ButtonGrid>
        </Section>

        {/* Icons - Left */}
        <Section title="3. Buttons with Left Icons">
          <ButtonGrid>
            <ButtonCard label="Primary + Icon">
              <Button variant="primary" icon={<Plus size={16} />}>
                Add Item
              </Button>
            </ButtonCard>
            <ButtonCard label="Secondary + Icon">
              <Button variant="secondary" icon={<Download size={16} />}>
                Download
              </Button>
            </ButtonCard>
            <ButtonCard label="Tertiary + Icon">
              <Button variant="tertiary" icon={<Settings size={16} />}>
                Settings
              </Button>
            </ButtonCard>
            <ButtonCard label="Quaternary + Icon">
              <Button variant="quaternary" icon={<Check size={16} />}>
                Confirm
              </Button>
            </ButtonCard>
          </ButtonGrid>
        </Section>

        {/* Icons - Right */}
        <Section title="4. Buttons with Right Icons">
          <ButtonGrid>
            <ButtonCard label="Primary + Right Icon">
              <Button variant="primary" icon={<ChevronRight size={16} />} iconPosition="right">
                Continue
              </Button>
            </ButtonCard>
            <ButtonCard label="Secondary + Right Icon">
              <Button variant="secondary" icon={<ChevronRight size={16} />} iconPosition="right">
                Next Step
              </Button>
            </ButtonCard>
            <ButtonCard label="Tertiary + Right Icon">
              <Button variant="tertiary" icon={<ChevronRight size={16} />} iconPosition="right">
                Learn More
              </Button>
            </ButtonCard>
            <ButtonCard label="Quaternary + Right Icon">
              <Button variant="quaternary" icon={<ChevronRight size={16} />} iconPosition="right">
                View All
              </Button>
            </ButtonCard>
          </ButtonGrid>
        </Section>

        {/* Disabled States */}
        <Section title="5. Disabled States">
          <ButtonGrid>
            <ButtonCard label="Primary Disabled">
              <Button variant="primary" disabled>
                Disabled
              </Button>
            </ButtonCard>
            <ButtonCard label="Secondary Disabled">
              <Button variant="secondary" disabled>
                Disabled
              </Button>
            </ButtonCard>
            <ButtonCard label="Tertiary Disabled">
              <Button variant="tertiary" disabled>
                Disabled
              </Button>
            </ButtonCard>
            <ButtonCard label="With Icon Disabled">
              <Button variant="primary" icon={<Plus size={16} />} disabled>
                Add Item
              </Button>
            </ButtonCard>
          </ButtonGrid>
        </Section>

        {/* Loading States */}
        <Section title="6. Loading States">
          <ButtonGrid>
            <ButtonCard label="Primary Loading">
              <Button 
                variant="primary" 
                isLoading={loadingStates.load1}
                onClick={() => handleLoadingClick('load1')}
              >
                {loadingStates.load1 ? 'Loading...' : 'Click to Load'}
              </Button>
            </ButtonCard>
            <ButtonCard label="Secondary Loading">
              <Button 
                variant="secondary" 
                isLoading={loadingStates.load2}
                onClick={() => handleLoadingClick('load2')}
              >
                {loadingStates.load2 ? 'Processing...' : 'Process'}
              </Button>
            </ButtonCard>
            <ButtonCard label="Tertiary Loading">
              <Button 
                variant="tertiary" 
                isLoading={loadingStates.load3}
                onClick={() => handleLoadingClick('load3')}
              >
                {loadingStates.load3 ? 'Saving...' : 'Save'}
              </Button>
            </ButtonCard>
            <ButtonCard label="With Icon Loading">
              <Button 
                variant="secondary"
                icon={<Download size={16} />}
                isLoading={loadingStates.load4}
                onClick={() => handleLoadingClick('load4')}
              >
                {loadingStates.load4 ? 'Downloading...' : 'Download'}
              </Button>
            </ButtonCard>
          </ButtonGrid>
        </Section>

        {/* Full Width */}
        <Section title="7. Full Width Buttons">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <ButtonCard label="Primary Full Width">
              <Button variant="primary" fullWidth>
                Full Width Primary
              </Button>
            </ButtonCard>
            <ButtonCard label="Secondary Full Width">
              <Button variant="secondary" fullWidth icon={<Plus size={16} />}>
                Create New Account
              </Button>
            </ButtonCard>
          </div>
        </Section>

        {/* Size Variations with Icons */}
        <Section title="8. Size Variations with Icons">
          <ButtonGrid>
            <ButtonCard label="Small + Icon">
              <Button variant="secondary" size="small" icon={<Plus size={14} />}>
                Add
              </Button>
            </ButtonCard>
            <ButtonCard label="Medium + Icon">
              <Button variant="secondary" size="medium" icon={<Plus size={16} />}>
                Add Item
              </Button>
            </ButtonCard>
            <ButtonCard label="Large + Icon">
              <Button variant="secondary" size="large" icon={<Plus size={18} />}>
                Add New Item
              </Button>
            </ButtonCard>
            <ButtonCard label="All Sizes Stacked">
              <div className="flex flex-col gap-2 items-start">
                <Button variant="primary" size="small" icon={<Settings size={14} />}>
                  Small
                </Button>
                <Button variant="primary" size="medium" icon={<Settings size={16} />}>
                  Medium
                </Button>
                <Button variant="primary" size="large" icon={<Settings size={18} />}>
                  Large
                </Button>
              </div>
            </ButtonCard>
          </ButtonGrid>
        </Section>

        {/* Real-world Examples */}
        <Section title="9. Real-world Usage Examples">
          <div className="grid grid-cols-1 gap-6">
            {/* Form Actions */}
            <ButtonCard label="Form Actions">
              <div className="flex gap-3 justify-end">
                <Button variant="quaternary">
                  Cancel
                </Button>
                <Button variant="primary" icon={<Check size={16} />}>
                  Save Changes
                </Button>
              </div>
            </ButtonCard>

            {/* Card Actions */}
            <ButtonCard label="Card Actions">
              <div className="flex gap-2">
                <Button variant="tertiary" size="small" icon={<Settings size={14} />}>
                  Edit
                </Button>
                <Button variant="quaternary" size="small" icon={<Trash2 size={14} />}>
                  Delete
                </Button>
                <Button variant="secondary" size="small" icon={<ChevronRight size={14} />} iconPosition="right">
                  View Details
                </Button>
              </div>
            </ButtonCard>

            {/* Navigation */}
            <ButtonCard label="Navigation">
              <div className="flex gap-3 justify-between">
                <Button variant="tertiary" icon={<ChevronRight size={16} className="rotate-180" />}>
                  Previous
                </Button>
                <Button variant="primary" icon={<ChevronRight size={16} />} iconPosition="right">
                  Next
                </Button>
              </div>
            </ButtonCard>

            {/* CTA Section */}
            <ButtonCard label="Call-to-Action Section">
              <div className="flex flex-col gap-3">
                <Button variant="secondary" size="large" fullWidth icon={<Plus size={18} />}>
                  Get Started Free
                </Button>
                <Button variant="quaternary" size="medium" fullWidth>
                  Learn More
                </Button>
              </div>
            </ButtonCard>
          </div>
        </Section>

        {/* Interactive Counter Example */}
        <Section title="10. Interactive Example">
          <div className="bg-white border border-neutral-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Click Counter</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              <Button 
                variant="primary" 
                onClick={() => handleClick('counter')}
              >
                Click Me!
              </Button>
              <Button 
                variant="secondary" 
                icon={<Plus size={16} />}
                onClick={() => handleClick('counter')}
              >
                Add Count
              </Button>
              <Button 
                variant="tertiary" 
                onClick={handleResetCounts}
              >
                Reset
              </Button>
            </div>
            <p className="text-sm text-neutral-600">
              Total clicks: <span className="font-bold text-neutral-900">{clickCounts.counter || 0}</span>
            </p>
          </div>
        </Section>

        {/* Color Showcase */}
        <Section title="11. All Variants × All Sizes">
          <div className="space-y-6">
            {(['primary', 'secondary', 'tertiary', 'quaternary'] as ButtonVariant[]).map(variant => (
              <div key={variant} className="bg-white border border-neutral-200 rounded-lg p-6">
                <h3 className="text-sm font-semibold text-neutral-600 uppercase mb-4">
                  {variant}
                </h3>
                <div className="flex flex-wrap gap-3 items-center">
                  <Button variant={variant} size="small">
                    Small
                  </Button>
                  <Button variant={variant} size="medium">
                    Medium
                  </Button>
                  <Button variant={variant} size="large">
                    Large
                  </Button>
                  <Button variant={variant} size="medium" icon={<Plus size={16} />}>
                    With Icon
                  </Button>
                  <Button variant={variant} size="medium" disabled>
                    Disabled
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};

export default ButtonUsageShowcase;