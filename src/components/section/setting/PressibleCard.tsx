import React from 'react';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components';
import Typography from '@components/typography';
import { Row } from '@components/atomic';
import Next from '@assets/icons/next.svg';
import { TouchableOpacityProps } from 'react-native/types';

interface PressibleCardProps extends TouchableOpacityProps {
  title: string;
  context?: string;
}

const PressibleCard = ({ title, context, onPress }: PressibleCardProps) => {
  const { colors } = useTheme();
  return (
    <Container onPress={onPress}>
      <Typography.Body $color={colors.gray80}>{title}</Typography.Body>
      <Row $gap={8} $alignItems={'center'}>
        <Typography.Body $color={colors.gray70}>{context}</Typography.Body>
        <Next />
      </Row>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export default PressibleCard;
