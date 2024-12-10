import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: boolean;
}

export function Container({ 
  children, 
  className = '',
  maxWidth = 'xl',
  padding = true
}: ContainerProps) {
  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full'
  };

  return (
    <div 
      className={`
        mx-auto
        w-full
        ${padding ? 'px-4 sm:px-6 lg:px-8' : ''}
        ${maxWidthClasses[maxWidth]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}