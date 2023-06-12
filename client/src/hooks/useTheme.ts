import { useMemo, useState } from "react";

export const useMode = () => {
  const [mode, setMode] = useState('dark');

  const colorSchema = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  const theme = ''//useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorSchema];
};