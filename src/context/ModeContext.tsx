import React from 'react';

type IModeContext = {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
};

const ModeContext = React.createContext<IModeContext | null>(null);

export const useMode = () => {
  const mode = React.useContext(ModeContext);
  if(!mode) throw new Error("useMode precisa estar em ModeContextProvider");
  return mode;
}

export const ModeContextProvider = ({ children }: React.PropsWithChildren) => {
  const [mode, setMode] = React.useState('light');

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};
