import React from 'react';

interface ColumnProps {
  children: React.ReactNode;
  className?: string;
  span?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  offset?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

export function Column({ 
  children, 
  className = '',
  span = { xs: 1 },
  offset
}: ColumnProps) {
  const getColumnClasses = () => {
    const classes = [];
    
    // Span classes
    if (span.xs) classes.push(`col-span-${span.xs}`);
    if (span.sm) classes.push(`sm:col-span-${span.sm}`);
    if (span.md) classes.push(`md:col-span-${span.md}`);
    if (span.lg) classes.push(`lg:col-span-${span.lg}`);
    if (span.xl) classes.push(`xl:col-span-${span.xl}`);
    
    // Offset classes
    if (offset?.xs) classes.push(`col-start-${offset.xs + 1}`);
    if (offset?.sm) classes.push(`sm:col-start-${offset.sm + 1}`);
    if (offset?.md) classes.push(`md:col-start-${offset.md + 1}`);
    if (offset?.lg) classes.push(`lg:col-start-${offset.lg + 1}`);
    if (offset?.xl) classes.push(`xl:col-start-${offset.xl + 1}`);
    
    return classes.join(' ');
  };

  return (
    <div className={`${getColumnClasses()} ${className}`}>
      {children}
    </div>
  );
}