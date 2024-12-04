import React, { ReactNode, useContext, useEffect } from 'react';
import { Pressable, View } from 'react-native';
import { Spacer, Wrapper } from '@components/atomic';
import styled, { useTheme } from 'styled-components/native';
import Typography from '@components/typography';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useBottomSheet from '@hooks/useBottomSheet';
import useOverlay from '@hooks/useOverlay';
import Animated, {
  runOnJS,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { GestureDetector, PanGesture } from 'react-native-gesture-handler';

interface Props {
  title?: string;
  value?: string;
  onChange?: (value: string) => void;
  onConfirm?: () => void;
}

interface BottomSheetContextProps extends Props {
  gesture: PanGesture;
  animationValues: {
    opacity: SharedValue<number>;
    translateY: SharedValue<number>;
  };
  onConfirm?: () => void;
}

interface BottomSheetProps extends Props {
  children: ReactNode;
}

const BottomSheetContext = React.createContext<BottomSheetContextProps>({
  title: '',
  value: '',
  onChange: () => {},
  gesture: {} as PanGesture,
  animationValues: {
    opacity: { value: 0 } as SharedValue<number>,
    translateY: { value: 0 } as SharedValue<number>,
  },
});

const BottomSheet = ({
  title,
  value,
  onChange,
  onConfirm,
  children,
}: BottomSheetProps) => {
  const { bottom } = useSafeAreaInsets();
  const { open, close, animationValues, gesture } = useBottomSheet();
  const overlay = useOverlay();
  useEffect(() => {
    open();
  }, []);
  return (
    <BottomSheetContext.Provider
      value={{
        title,
        value,
        onChange,
        animationValues,
        gesture,
        onConfirm: () => {
          onConfirm?.();
          close();
          overlay.close();
        },
      }}
    >
      <Overlay
        style={{
          opacity: animationValues.opacity,
        }}
      >
        <Pressable
          onPress={() => {
            close();
            runOnJS(overlay.close)();
          }}
          style={{
            flex: 1,
          }}
        />
        <Container
          style={useAnimatedStyle(() => ({
            transform: [
              {
                translateY: animationValues.translateY.value,
              },
            ],
          }))}
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
  const { gesture } = useContext(BottomSheetContext);

  return (
    <>
      <GestureDetector gesture={gesture}>
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
      </GestureDetector>
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
  label?: string;
  value: string;
  as?: (_: { label?: string; value: string; selected: boolean }) => ReactNode;
  children?: ReactNode;
}

const Item = ({ label, value, as, children }: ItemProps) => {
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
      {as ? as({ label, value, selected: contextValue === value }) : children}
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
