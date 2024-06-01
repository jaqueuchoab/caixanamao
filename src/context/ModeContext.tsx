import React from 'react';

type IModeContext = {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
  localMode: string | null;
};

const ModeContext = React.createContext<IModeContext | null>(null);

export const useMode = () => {
  const mode = React.useContext(ModeContext);
  if (!mode) throw new Error('useMode precisa estar em ModeContextProvider');
  return mode;
};

export const ModeContextProvider = ({ children }: React.PropsWithChildren) => {
  const localMode = localStorage.getItem('mode');

  if (!localMode) {
    localStorage.setItem('mode', 'light');
  }

  const [mode, setMode] = React.useState(localMode ? localMode : 'light');
  localStorage.setItem('mode', mode);

  return (
    <ModeContext.Provider value={{ mode, setMode, localMode}}>
      {children}
    </ModeContext.Provider>
  );
};
