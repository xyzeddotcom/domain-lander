import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = ['features', 'description', 'contact'];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <nav className="relative w-64 max-w-sm bg-white dark:bg-gray-900 h-full shadow-xl flex flex-col">
        <div className="p-4 border-b dark:border-gray-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Menu</h2>
        </div>
        <ul className="flex-1 px-4 py-6 space-y-4">
          {menuItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white capitalize"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}