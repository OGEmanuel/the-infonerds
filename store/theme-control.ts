import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Define the type for the theme store
type ThemeStore = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
};

// Create the theme store with persistence
const useThemeStore = create<ThemeStore>()(
  persist(
    set => ({
      // Default to light theme, but can be overridden by persisted value
      theme: 'light',

      // Toggle between light and dark themes
      toggleTheme: () =>
        set(state => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),

      // Set theme to a specific mode
      setTheme: theme => set({ theme }),
    }),
    {
      name: 'app-theme', // unique name for localStorage key
      storage: createJSONStorage(() => localStorage),

      // Optional: specify which parts of the store to persist
      partialize: state => ({ theme: state.theme }),
    },
  ),
);

export default useThemeStore;
