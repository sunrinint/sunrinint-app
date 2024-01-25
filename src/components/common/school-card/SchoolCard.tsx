import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { BackCard, FrontCard } from '@components/common/school-card';

interface SchoolCardProps {
  isBack?: boolean;
}

const SchoolCard = ({ isBack }: SchoolCardProps) => {
  const mounted = useRef(false);
  const frontAnimation = useRef(new Animated.Value(0)).current;
  const backAnimation = useRef(new Animated.Value(0)).current;
  const [isBackState, setIsBackState] = useState(isBack);
  useEffect(() => {
    frontAnimation.addListener(({ value }) => {
      if (value === 1) {
        setIsBackState(true);
      }
    });
    backAnimation.addListener(({ value }) => {
      if (value === 0) {
        setIsBackState(false);
      }
    });
    return () => {
      frontAnimation.removeAllListeners();
      backAnimation.removeAllListeners();
    };
  }, [backAnimation, frontAnimation, isBackState]);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (isBack) {
      Animated.sequence([
        Animated.timing(frontAnimation, {
          toValue: 1,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(backAnimation, {
          toValue: 1,
          duration: 100,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      Animated.sequence([
        Animated.timing(backAnimation, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(frontAnimation, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [backAnimation, frontAnimation, isBack, isBackState]);
  return (
    <Wrapper>
      {!isBackState ? (
        <FrontCard
          style={[
            {
              transform: [
                {
                  rotateY: frontAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '90deg'],
                  }),
                },
              ],
            },
          ]}
        />
      ) : (
        <BackCard
          style={{
            transform: [
              {
                rotateY: backAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['90deg', '0deg'],
                }),
              },
            ],
          }}
        />
      )}
    </Wrapper>
  );
};
const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 24px;
`;

export default SchoolCard;
