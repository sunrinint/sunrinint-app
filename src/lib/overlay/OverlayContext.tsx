import React, { createContext, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

interface OverlayContextProps {
  open: (overlayElement: React.ReactNode) => void;
  close: () => void;
}

export const OverlayDispatchContext = createContext<OverlayContextProps | null>(
  null,
);

interface OverlayProviderProps {
  children: React.ReactNode;
}

const OverlayContext = ({ children }: OverlayProviderProps) => {
  const [overlayElement, setOverlayElement] = useState<React.ReactNode | null>(
    null,
  );

  const close = () => setOverlayElement(null);

  const open = (element: React.ReactNode) => setOverlayElement(element);

  const dispatch = {
    open,
    close,
  };

  return (
    <SafeAreaProvider>
      <OverlayDispatchContext.Provider value={dispatch}>
        {children}
        {overlayElement}
      </OverlayDispatchContext.Provider>
    </SafeAreaProvider>
  );
};

export default OverlayContext;
