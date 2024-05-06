import { useEffect } from "react";
import "./DarkModeStyle.css";

export const DarkModeToggle = () => {
  const handleToggled = () => {
    const mainContent = document.querySelector(".main-content"); // Selects the element with the class 'main-content'
    if (mainContent) {
      mainContent.classList.toggle("dark"); // Toggles the 'dark' class on the .main-content element
      localStorage.setItem("dark", mainContent.className); // Stores the class name in localStorage
    }
  };

  useEffect(() => {
    const mainContent = document.querySelector(".main-content"); // Selects the element with the class 'main-content'
    if (localStorage.getItem("dark") && mainContent) {
      mainContent.classList.add("dark"); // Adds 'dark' class if it was previously set and saved in localStorage
    }
  }, []);

  return (
    <label>
      <input
        className="darkmode-checkbox"
        type="checkbox"
        onClick={handleToggled}
      />
      <span className="switch">
        <span className="handle" />
      </span>
    </label>
  );
};
