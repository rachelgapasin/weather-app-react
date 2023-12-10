import React, { useEffect } from "react";

import useLocalStorage from "../hooks/UseLocalStorage";

function ThemeSwitcher() {
  const defaultLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultLight ? "light" : "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
  }, [theme]);

  return (
    <div className="Settings">
      <div>
        <button
          className="transition ease-out hover:scale-125"
          aria-label={`Change theme to ${
            theme === "light" ? "dark" : "light"
          } mode`}
          // role="switch"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "dark" ? (
            <i className="fa-regular fa-sun" title="Light mode"></i>
          ) : (
            <i className="fa-regular fa-moon" title="Dark mode"></i>
          )}
        </button>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
