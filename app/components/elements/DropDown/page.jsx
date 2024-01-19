"use client";
import { useState } from "react";

const Dropdown = ({ label, language, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (selectedLanguage) => {
    setIsOpen(false);
    onLanguageChange(selectedLanguage);
  };

  return (
    <div className="mb-6">
      <span className="block text-sm font-semibold text-light-text-color mb-1">
        {label}
      </span>
      <div className="relative inline-block w-full">
        <div
          className={`w-full bg-bg-color p-3 rounded-md flex items-center
           cursor-pointer ${
             isOpen ? "border-primary-color" : "border-light-bg-color"
           } border focus:outline-none focus:border-primary-color
           transition-all duration-300`}
          onClick={handleToggle}
        >
          {/* Icon */}
          <ion-icon
            name="globe-outline"
            class="text-light-text-color mr-2"
          ></ion-icon>
          {/* Selected Language */}
          <span className="flex-1">{language}</span>
          {/* Chevron Icon */}
          <ion-icon
            name={`chevron-${isOpen ? "up" : "down"}-outline`}
            class="text-light-text-color"
          ></ion-icon>
        </div>
        {isOpen && (
          <ul
            className="absolute z-10 w-full mt-2 bg-light-bg-color 
          dark:bg-dark-bg-color rounded-md shadow-md"
          >
            {/* Iterate over languages and create options */}
            {/* Use onLanguageSelect to handle selection */}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
