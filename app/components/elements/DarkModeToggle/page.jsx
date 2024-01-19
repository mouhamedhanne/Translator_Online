"use client";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="mode fixed bottom-4 right-4">
      <label className="toggle" htmlFor="dark-mode-btn">
        <div className="toggle-track">
          <input
            type="checkbox"
            className="toggle-checkbox"
            id="dark-mode-btn"
            checked={darkMode}
            onChange={handleToggle}
          />
          <span className="toggle-thumb"></span>
          <img src="images/sun.png" alt="" className="mr-2" />
          <img src="images/moon.png" alt="" />
        </div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
