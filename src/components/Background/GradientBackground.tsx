import React from 'react';

export function GradientBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient" />
      <div 
        className="absolute inset-0" 
        style={{
          background: `
            radial-gradient(circle at 50% 0%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)
          `
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}