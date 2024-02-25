import React, { useEffect, useRef, useState } from 'react';
import { Animated, View } from 'react-native';
import { useTheme } from 'styled-components/native';

interface Props {
  data: number[];
  initValue?: number;
  onChange: (value: number) => void;
}

const WheelPicker = ({ data, initValue, onChange }: Props) => {
  const { colors } = useTheme();
  const itemHeight = 32;
  const selectedItemHeight = 40;
  const scrollY = useRef(new Animated.Value(0)).current;
  const [selectedIndex, setSelectedIndex] = useState(
    initValue ? data.indexOf(initValue) : 0,
  );

  const trySetSelectedIndex = (index: number) => {
    if (index >= 0 && index < data.length) {
      setSelectedIndex(index);
    }
  };

  useEffect(() => {
    if (selectedIndex >= 0 && selectedIndex < data.length) {
      onChange(data[selectedIndex]);
    }
  }, [data, selectedIndex, onChange]);

  return (
    <View style={[{ height: itemHeight * 2 + selectedItemHeight, flex: 1 }]}>
      <Animated.FlatList
        initialScrollIndex={selectedIndex}
        data={['', ...data, '']}
        snapToInterval={itemHeight}
        onScroll={(e) => {
          const scrollIndex = Math.round(
            e.nativeEvent.contentOffset.y / itemHeight,
          );
          const y = e.nativeEvent.contentOffset.y;
          const index = Math.round(y / itemHeight);
          trySetSelectedIndex(index);
          scrollY.setValue(scrollIndex);
        }}
        onMomentumScrollEnd={(e) => {
          const y = e.nativeEvent.contentOffset.y;
          const index = Math.round(y / itemHeight);
          trySetSelectedIndex(index);
        }}
        getItemLayout={(_, index) => ({
          length: itemHeight,
          offset: itemHeight * index,
          index,
        })}
        renderItem={({ item, index }) => {
          return (
            <View
              style={[
                {
                  height:
                    selectedIndex + 1 === index
                      ? selectedItemHeight
                      : itemHeight,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}
            >
              <Animated.Text
                style={{
                  fontFamily: 'SUIT Variable',
                  color: scrollY.interpolate({
                    inputRange: [index - 2, index - 1, index],
                    outputRange: [colors.gray40, colors.gray80, colors.gray40],
                    extrapolate: 'clamp',
                  }),
                  fontSize: scrollY.interpolate({
                    inputRange: [index - 2, index - 1, index],
                    outputRange: [15, 17, 15],
                    extrapolate: 'clamp',
                  }),
                  lineHeight: 24,
                  fontWeight: scrollY.interpolate({
                    inputRange: [index - 2, index - 1, index],
                    outputRange: ['500', '600', '500'],
                    extrapolate: 'clamp',
                    easing: (value) => {
                      const thousandRounded = value * 1000;
                      if (thousandRounded < 500) {
                        return 0;
                      }
                      if (thousandRounded < 600) {
                        return 0.5;
                      }
                      return 1;
                    },
                  }),
                }}
              >
                {item}
              </Animated.Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default WheelPicker;
