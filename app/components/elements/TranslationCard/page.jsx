"use client";
import { useState } from "react";
import Dropdown from "@/app/components/elements/DropDown/page";
import FileUploader from "@/app/components/elements/FileUploader/page";
import SwapButton from "@/app/components/elements/SwapButton/page";
import TranslationTextArea from "@/app/components/elements/TranslationTextArea/page";
import DarkModeToggle from "@/app/components/elements/DarkModeToggle/page";

function TranslationCard({ darkMode, setDarkMode }) {
  const [inputLanguage, setInputLanguage] = useState("auto");
  const [outputLanguage, setOutputLanguage] = useState("en");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleLanguageChange = (type, language) => {
    if (type === "input") {
      setInputLanguage(language);
    } else {
      setOutputLanguage(language);
    }
  };

  const handleTextChange = (text) => {
    setInputText(text);
  };

  const handleSwap = () => {
    // Swap input and output languages and texts
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
    setInputText(outputText);
    setOutputText("");
  };

  const handleTranslate = () => {
    // Implement translation logic here
    // You can use an API or any other translation method
    // Update the outputText state with the translated text
  };

  return (
    <div className="container mx-auto p-10 bg-light-bg-color dark:bg-dark-bg-color rounded-lg shadow-md">
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-1">
          <Dropdown
            label="From :"
            language={inputLanguage}
            onLanguageChange={(language) =>
              handleLanguageChange("input", language)
            }
          />
          <TranslationTextArea
            placeholder="Enter your text here"
            value={inputText}
            onTextChange={handleTextChange}
          />
          <FileUploader onFileUpload={handleTextChange} />
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <SwapButton onSwap={handleSwap} />
        </div>
        <div className="col-span-1">
          <Dropdown
            label="To :"
            language={outputLanguage}
            onLanguageChange={(language) =>
              handleLanguageChange("output", language)
            }
          />
          <TranslationTextArea
            placeholder="Translated text will appear here"
            value={outputText}
            disabled
          />
          <button
            className="mt-4 bg-primary-color text-white rounded-full px-6 py-3 hover:bg-primary-color-dark"
            onClick={handleTranslate}
          >
            Translate
          </button>
        </div>
      </div>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default TranslationCard;
