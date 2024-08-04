import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ModeCtrl = () => {
  let [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('color-scheme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('color-scheme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-2 py-2 dark:bg-neutral-300 dark:text-neutral-950 rounded-md bg-neutral-950 text-neutral-300 mobile:ml-2 sm:ml-0"
    >
      {/* {darkMode ? 'Light' : 'Dark'} Mode */}
      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
};

export default ModeCtrl;
