import React from 'react';

type IModeContext = {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
  localMode: string | null;
  setLocalMode: React.Dispatch<React.SetStateAction<string>>;
};

const ModeContext = React.createContext<IModeContext | null>(null);

export const useMode = () => {
  const mode = React.useContext(ModeContext);
  if (!mode) throw new Error('useMode precisa estar em ModeContextProvider');
  return mode;
};

export const ModeContextProvider = ({ children }: React.PropsWithChildren) => {
  let localModeActive = localStorage.getItem('mode');
  const [localMode, setLocalMode] = React.useState(localModeActive ? localModeActive : 'light' );

  if (!localModeActive) {
    localStorage.setItem('mode', 'light');
    localModeActive = localStorage.getItem('mode');
    if(localModeActive) setLocalMode(localModeActive);
  }

  const [mode, setMode] = React.useState(localMode);

  return (
    <ModeContext.Provider value={{ mode, setMode, localMode, setLocalMode }}>
      {children}
    </ModeContext.Provider>
  );
};
