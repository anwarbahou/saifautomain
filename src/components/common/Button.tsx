import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'white' | 'icon' | 'filter';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

interface ButtonAsButton extends BaseButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  as?: 'button';
}

interface ButtonAsAnchor extends BaseButtonProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
  as: 'a';
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const Button = ({
  as = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  icon: Icon,
  iconPosition = 'right',
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-blue-950 text-white hover:bg-blue-900 focus:ring-blue-800',
    secondary: 'bg-white text-blue-950 border border-blue-950 hover:bg-gray-50 focus:ring-blue-800',
    white: 'bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20',
    icon: 'w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors',
    filter: 'bg-white text-gray-700 hover:bg-gray-100'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const loadingSpinner = (
    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

  const commonProps = {
    className: `
      ${baseStyles}
      ${variants[variant]}
      ${variant !== 'icon' ? sizes[size] : ''}
      ${fullWidth ? 'w-full' : ''}
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      ${className}
    `,
    disabled: as === 'button' ? disabled || isLoading : undefined,
    ...props
  };

  const content = (
    <>
      {isLoading && loadingSpinner}
      {Icon && iconPosition === 'left' && !isLoading && <Icon size={size === 'lg' ? 20 : 16} className="mr-2" />}
      {children}
      {Icon && iconPosition === 'right' && !isLoading && <Icon size={size === 'lg' ? 20 : 16} className="ml-2" />}
    </>
  );

  if (as === 'a') {
    return <a {...commonProps as React.AnchorHTMLAttributes<HTMLAnchorElement>}>{content}</a>;
  }

  return <button {...commonProps as React.ButtonHTMLAttributes<HTMLButtonElement>}>{content}</button>;
};

export default Button; 