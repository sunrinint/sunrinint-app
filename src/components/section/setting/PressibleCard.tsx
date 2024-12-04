import React from 'react';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components';
import Typography from '@components/typography';
import { Row } from '@components/atomic';
import Next from '@assets/icons/next.svg';
import { TouchableOpacityProps } from 'react-native/types';
import CustomPressable from '@/components/common/CustomPressable';

interface PressibleCardProps extends TouchableOpacityProps {
  title: string;
  context?: string;
  onPress?: () => void;
}

const PressibleCard = ({ title, context, onPress }: PressibleCardProps) => {
  const { colors } = useTheme();
  return (
    <CustomPressable activeScale={0.98} onPress={onPress}>
      <Container>
        <Typography.Body $color={colors.gray80}>{title}</Typography.Body>
        <Row $gap={8} $alignItems={'center'}>
          <Typography.Body $color={colors.gray70}>{context}</Typography.Body>
          <Next />
        </Row>
      </Container>
    </CustomPressable>
  );
};

const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export default PressibleCard;
