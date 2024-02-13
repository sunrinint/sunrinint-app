import React from 'react';
import { Row } from '@components/atomic';
import { View } from 'react-native';
import VfriendsLogo from '@assets/icons/club/vfriends.svg';
import Typography from '@components/typography';
import WebsiteIcon from '@assets/icons/website.svg';
import InstagramIcon from '@assets/icons/instagram.svg';
import FacebookIcon from '@assets/icons/facebook.svg';
import styled, { useTheme } from 'styled-components/native';
import Box from '../atomic/Box';

interface ClubCardProps {
  name: string;
  kind: string;
  description: string;
  room: string;
  website?: string;
  instagram?: string;
  facebook?: string;
}

const ClubCard = ({
  name,
  kind,
  description,
  room,
  website,
  instagram,
  facebook,
}: ClubCardProps) => {
  const { colors } = useTheme();
  return (
    <ClubCardLayout>
      <ClubCardTop>
        <Row $fill $justifyContent={'space-between'} $alignItems={'center'}>
          <Row $gap={8} $alignItems={'center'}>
            <Box size={32}>
              <VfriendsLogo />
            </Box>
            <View>
              <Typography.SemiLabel $color={colors.gray80}>
                {name}
              </Typography.SemiLabel>
              <Typography.Caption $color={colors.gray80}>
                {kind}
              </Typography.Caption>
            </View>
          </Row>
          <Typography.Body $color={colors.gray60}>{room}</Typography.Body>
        </Row>
        <Typography.Body $color={colors.gray70}>{description}</Typography.Body>
      </ClubCardTop>
      <ButtonGroup>
        <RoundedButton disabled={!website}>
          <WebsiteIcon fill={facebook ? colors.gray80 : colors.gray40} />
        </RoundedButton>
        <RoundedButton disabled={!instagram}>
          <InstagramIcon fill={facebook ? colors.gray80 : colors.gray40} />
        </RoundedButton>
        <RoundedButton disabled={!facebook}>
          <FacebookIcon fill={facebook ? colors.gray80 : colors.gray40} />
        </RoundedButton>
      </ButtonGroup>
    </ClubCardLayout>
  );
};

const ButtonGroup = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 12px;
`;

const RoundedButton = styled.TouchableOpacity`
  flex: 1;
  height: 44px;
  border-radius: 96px;
  background-color: ${(props) => props.theme.colors.gray30};
  justify-content: center;
  align-items: center;
`;

const ClubCardLayout = styled.View`
  padding: 8px;
  background-color: ${(props) => props.theme.colors.gray10};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.gray30};
  align-self: stretch;
`;

const ClubCardTop = styled.View`
  padding: 12px;
  gap: 16px;
  display: flex;
`;

export default ClubCard;
