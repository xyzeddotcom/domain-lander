import React from 'react';

interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: number;
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  justifyItems?: 'start' | 'center' | 'end' | 'stretch';
}

export function Grid({ 
  children, 
  className = '',
  cols = { xs: 1, sm: 2, lg: 4 },
  gap = 6,
  alignItems = 'stretch',
  justifyItems = 'stretch'
}: GridProps) {
  const getGridCols = () => {
    const gridCols = [];
    if (cols.xs) gridCols.push(`grid-cols-${cols.xs}`);
    if (cols.sm) gridCols.push(`sm:grid-cols-${cols.sm}`);
    if (cols.md) gridCols.push(`md:grid-cols-${cols.md}`);
    if (cols.lg) gridCols.push(`lg:grid-cols-${cols.lg}`);
    if (cols.xl) gridCols.push(`xl:grid-cols-${cols.xl}`);
    return gridCols.join(' ');
  };

  return (
    <div 
      className={`
        grid
        ${getGridCols()}
        gap-${gap}
        items-${alignItems}
        justify-items-${justifyItems}
        ${className}
      `}
    >
      {children}
    </div>
  );
}