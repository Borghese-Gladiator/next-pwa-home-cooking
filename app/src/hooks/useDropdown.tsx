/*
Manage multiple dropdown state via keys
*/

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
interface DropdownContextType {
  openDropdownObj: { [key: string]: boolean };
  openDropdown: (key: string) => void;
  closeDropdown: (key: string) => void;
  toggleDropdown: (key: string) => void;
}

// Create the context
const DropdownContext = createContext<DropdownContextType | undefined>(undefined);

// Define the provider component
export const DropdownProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [openDropdownObj, setOpenDropdownObj] = useState<{ [key: string]: boolean }>({});

  const openDropdown = (key: string) => {
    setOpenDropdownObj((prev) => ({ ...prev, [key]: true }));
  };

  const closeDropdown = (key: string) => {
    setOpenDropdownObj((prev) => ({ ...prev, [key]: false }));
  };

  const toggleDropdown = (key: string) => {
    setOpenDropdownObj((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <DropdownContext.Provider value={{ openDropdownObj, openDropdown, closeDropdown, toggleDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
};

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (context === undefined) {
    throw new Error('useDropdown must be used within a DropdownProvider');
  }
  return context;
};
export default useDropdown;