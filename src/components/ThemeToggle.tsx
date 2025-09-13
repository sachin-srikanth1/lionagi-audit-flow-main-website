import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-11 h-6 rounded-full bg-muted border border-border transition-all duration-200 hover:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1">
        <Sun className={`w-3 h-3 transition-all duration-200 ${
          theme === 'light' ? 'text-primary opacity-100' : 'text-muted-foreground opacity-40'
        }`} />
        <Moon className={`w-3 h-3 transition-all duration-200 ${
          theme === 'dark' ? 'text-primary opacity-100' : 'text-muted-foreground opacity-40'
        }`} />
      </div>
    </button>
  );
};

export default ThemeToggle;
