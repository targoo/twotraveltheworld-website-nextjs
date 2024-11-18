import { createContext, useContext, useState } from 'react';

const ThemeSwitcher = createContext<ThemeSwitcherProviderType | undefined>(
  undefined,
);

export function ThemeSwitcherProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<theme>('dark');

  return (
    <ThemeSwitcher.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeSwitcher.Provider>
  );
}

export function useThemeSwitcherContext() {
  const data = useContext(ThemeSwitcher);

  if (!data) {
    throw new Error(
      'useThemeSwitcherContext must be used within a ThemeSwitcherProvider',
    );
  }

  return data;
}

type theme = 'dark' | 'light';
interface ThemeSwitcherProviderType {
  theme: theme;
  setTheme: (theme: theme) => void;
}
