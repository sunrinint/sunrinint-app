import React, { ReactNode, useContext, useEffect } from 'react';
import { Animated, PanResponderInstance, Pressable, View } from 'react-native';
import { Spacer, Wrapper } from '@components/atomic';
import styled, { useTheme } from 'styled-components/native';
import Typography from '@components/typography';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useBottomSheet from '@hooks/useBottomSheet';
import useOverlay from '@hooks/useOverlay';

interface Props {
  title?: string;
  value?: string;
  onChange?: (value: string) => void;
  onConfirm?: () => void;
}

interface BottomSheetContextProps extends Props {
  handler: PanResponderInstance;
}

interface BottomSheetProps extends Props {
  children: ReactNode;
}

const BottomSheetContext = React.createContext<BottomSheetContextProps>({
  title: '',
  value: '',
  onChange: () => {},
  handler: {} as PanResponderInstance,
});

const BottomSheet = ({
  title,
  value,
  onChange,
  onConfirm,
  children,
}: BottomSheetProps) => {
  const { bottom } = useSafeAreaInsets();
  const { open, close, animationVale, handler } = useBottomSheet();
  const overlay = useOverlay();
  useEffect(() => {
    open.start();
  }, []);
  return (
    <BottomSheetContext.Provider
      value={{
        title,
        value,
        onChange,
        handler,
        onConfirm: () => {
          close.start(onConfirm);
        },
      }}
    >
      <Overlay
        style={{
          opacity: animationVale.opacity,
        }}
      >
        <Pressable
          onPress={() => {
            close.start(overlay.close);
          }}
          style={{
            flex: 1,
          }}
        />
        <Container
          style={{
            transform: [
              {
                translateY: animationVale.translateY,
              },
            ],
          }}
        >
          {children}
          <Spacer $height={bottom} />
        </Container>
      </Overlay>
    </BottomSheetContext.Provider>
  );
};
const Container = styled(Animated.View)`
  display: flex;
  padding: 16px 0;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray10};
  border-radius: 12px 12px 0 0;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
const Overlay = styled(Animated.View)`
  flex: 1;
  position: absolute;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);
  bottom: 0;
  height: 100%;
  width: 100%;
`;

const Title = () => {
  const { title } = useContext(BottomSheetContext);
  const { colors } = useTheme();
  return (
    <Wrapper $fill $padding={[8, 20]}>
      <Typography.Title $color={colors.gray90}>{title}</Typography.Title>
    </Wrapper>
  );
};

const Handler = () => {
  const { colors } = useTheme();
  const { handler } = useContext(BottomSheetContext);
  return (
    <>
      <View
        style={{
          display: 'flex',
          alignSelf: 'center',
          paddingHorizontal: 12,
          paddingVertical: 12,
          position: 'absolute',
          top: 4,
          zIndex: 100,
        }}
        {...handler.panHandlers}
      >
        <View
          style={{
            width: 64,
            height: 4,
            alignSelf: 'center',
            borderRadius: 10,
            backgroundColor: colors.gray30,
          }}
        />
      </View>
      <Spacer $height={4} />
    </>
  );
};

const Menu = ({ children }: { children: ReactNode }) => {
  return <MenuContainer>{children}</MenuContainer>;
};

const MenuContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

interface ItemProps {
  value: string;
  as?: (_: { value: string; selected: boolean }) => ReactNode;
  children?: ReactNode;
}

const Item = ({ value, as, children }: ItemProps) => {
  const {
    value: contextValue,
    onChange,
    onConfirm,
  } = useContext(BottomSheetContext);
  const { colors } = useTheme();
  return (
    <Pressable
      onPress={() => {
        onChange?.(value);
        onConfirm?.();
      }}
      style={(state) => ({
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: state.pressed ? colors.gray20 : colors.gray10,
      })}
    >
      {as ? as({ value, selected: contextValue === value }) : children}
    </Pressable>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

BottomSheet.Handler = Handler;
BottomSheet.Title = Title;
BottomSheet.Menu = Menu;
BottomSheet.Item = Item;
BottomSheet.Body = Body;

export default BottomSheet;
