import { useContext } from 'react';
import { OverlayDispatchContext } from '@lib/overlay/OverlayContext';

const useOverlay = () => {
  const overlayDispatch = useContext(OverlayDispatchContext);

  const open = (overlayElement: React.ReactNode) => {
    if (!overlayDispatch) {
      throw new Error('useOverlay must be used within an OverlayProvider.');
    }
    overlayDispatch.open(overlayElement);
  };

  const close = () => {
    if (!overlayDispatch) {
      throw new Error('useOverlay must be used within an OverlayProvider.');
    }
    overlayDispatch.close();
  };

  return {
    open,
    close,
  };
};

export default useOverlay;
