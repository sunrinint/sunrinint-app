import React from 'react';
import styled from 'styled-components/native';
import { Animated, Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Spacer } from '@components/atomic/Spacer';
import Typography from '@components/typography';

const BottomTabBar = ({ state, descriptors, navigation }: any) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <Wrapper>
      <Container style={style.shadow}>
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
            <ItemContainer key={index} onPress={onPress} $active={isFocused}>
              <Icon color={color} />
              {isFocused && (
                <Typography.SemiBody $color={color}>
                  {label}
                </Typography.SemiBody>
              )}
            </ItemContainer>
          );
        })}
      </Container>
      <Spacer $height={bottom} />
    </Wrapper>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#02066A',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 12 },
    elevation: 8,
  },
});

const Wrapper = styled.View`
  position: absolute;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  background-color: transparent;
  bottom: 0;
`;

const Container = styled.View`
  width: 212px;
  height: 64px;
  background-color: white;
  border-radius: 60px;
  display: flex;
  padding: 8px;
  flex-direction: row;
  border: 1px solid ${(props) => props.theme.colors.gray20};
`;

const AnimateTab = Animated.createAnimatedComponent(Pressable);

const ItemContainer = styled(AnimateTab)<{ $active: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: center;
  align-items: center;
  flex: ${(props) => (props.$active ? 1 : 'none')};
  padding: 12px;
  background-color: ${(props) =>
    props.$active ? props.theme.colors.gray80 : 'transparent'};
  border-radius: 50px;
`;

export default BottomTabBar;