import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '@components/typography';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const BottomTabBar = ({ state, descriptors, navigation }: any) => {
  const { bottom } = useSafeAreaInsets();
  const bottomInset = bottom === 0 ? 15 : bottom;
  return (
    <Container
      style={{
        paddingBottom: Platform.OS === 'ios' ? bottomInset : bottomInset,
      }}
    >
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel;
        const Icon = options.tabBarIcon;
        const color = isFocused
          ? options.tabBarActiveTintColor
          : options.tabBarInactiveTintColor;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <AnimatedItemContainer key={index} onPress={onPress}>
            <Icon color={color} focused={isFocused} />
            <Typography.Caption $color={color}>{label}</Typography.Caption>
          </AnimatedItemContainer>
        );
      })}
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray10};
  display: flex;
  flex-direction: row;
  padding: 8px 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-top-width: 1px;
  border-color: ${(props) => props.theme.colors.gray30};
`;

const ItemContainer = styled(
  Animated.createAnimatedComponent(styled.Pressable`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex: 1 0 0;
  `),
)``;

const AnimatedItemContainer = ({ children, onPress }: any) => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
      ],
      opacity: opacity.value,
    };
  });

  return (
    <ItemContainer
      style={animatedStyle}
      onPressIn={() => {
        'worklet';
        scale.value = withSpring(0.9);
        opacity.value = withSpring(0.8);
      }}
      onPressOut={() => {
        'worklet';
        scale.value = withSpring(1);
        opacity.value = withSpring(1);
      }}
      onPress={onPress}
    >
      {children}
    </ItemContainer>
  );
};

export default BottomTabBar;
