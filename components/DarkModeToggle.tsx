import React, { useState, useEffect } from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for user preference
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      setIsDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to the body when dark mode is active
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    // Store user preference in local storage
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      name="LigtDarkToggle"
      className="p-2 rounded-md text-gray-800 dark:text-gray-200 bg-gray-800 dark:bg-white"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <BsFillSunFill className="text-yellow-500" />
      ) : (
        <BsFillMoonStarsFill className="text-gray-200" />
      )}
    </button>
  );
}

export default DarkModeToggle;
