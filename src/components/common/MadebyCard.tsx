import styled, { useTheme } from 'styled-components/native';
import { Column } from '@components/atomic';
import { Linking } from 'react-native';
import Typography from '@components/typography';
import React from 'react';

interface MadebyProps {
  logo: { uri: string };
  name: string;
  role: string;
  link: string;
}

const MadebyCard = ({ logo, name, role, link }: MadebyProps) => {
  const { colors } = useTheme();
  return (
    <ClubCardLayout
      onPress={() => {
        Linking.openURL(link);
      }}
    >
      <Logo source={logo || { uri: '' }} />
      <Column $gap={2}>
        <Typography.Label $color={colors.gray80}>{name}</Typography.Label>
        <Typography.Body $color={colors.gray60}>{role}</Typography.Body>
      </Column>
    </ClubCardLayout>
  );
};

export default MadebyCard;

const Logo = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

const ClubCardLayout = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  padding: 12px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
`;
