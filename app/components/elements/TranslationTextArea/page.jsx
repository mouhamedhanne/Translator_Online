"use client";

const TranslationTextArea = ({
  placeholder,
  value,
  onTextChange,
  disabled,
}) => {
  const handleChange = (e) => {
    onTextChange(e.target.value);
  };

  return (
    <div className="text-area">
      <textarea
        className="w-full p-3 mt-4 bg-transparent border 
        border-light-bg-color rounded-md text-light-text-color"
        cols="30"
        rows="10"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      ></textarea>
    </div>
  );
};

export default TranslationTextArea;
