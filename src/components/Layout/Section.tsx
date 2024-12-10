import React from 'react';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  noPadding?: boolean;
}

export function Section({
  children,
  className = '',
  containerClassName = '',
  maxWidth = 'xl',
  noPadding = false
}: SectionProps) {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${className}`}>
      <Container 
        maxWidth={maxWidth} 
        padding={!noPadding}
        className={containerClassName}
      >
        {children}
      </Container>
    </section>
  );
}