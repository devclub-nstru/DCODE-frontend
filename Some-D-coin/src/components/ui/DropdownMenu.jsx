import { useState, useRef, useEffect } from "react";

const DropdownMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {children({ isOpen, setIsOpen })}
    </div>
  );
};

const DropdownMenuTrigger = ({ children, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen((prev) => !prev)}
      className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
    >
      {children}
    </button>
  );
};

const DropdownMenuContent = ({ children, isOpen }) => {
  return (
    isOpen && (
      <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
        {children}
      </div>
    )
  );
};

const DropdownMenuItem = ({ onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
    >
      {children}
    </div>
  );
};

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem };