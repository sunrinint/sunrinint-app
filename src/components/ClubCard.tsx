import React from 'react';
import { Column, Row } from '@components/atomic';
import { TouchableOpacity, View } from 'react-native';
import VfriendsLogo from '@assets/icons/club/vfriends.svg';
import Typography from '@components/typography';
import WebsiteIcon from '@assets/icons/website.svg';
import InstagramIcon from '@assets/icons/instagram.svg';
import FacebookIcon from '@assets/icons/facebook.svg';
import styled, { useTheme } from 'styled-components/native';

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
            <View
              style={{
                width: 32,
                height: 32,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <VfriendsLogo />
            </View>
            <Column>
              <Typography.SemiLabel $color={colors.gray70}>
                {name}
              </Typography.SemiLabel>
              <Typography.Caption $color={colors.gray70}>
                {kind}
              </Typography.Caption>
            </Column>
          </Row>
          <Typography.Body $color={colors.gray50}>{room}</Typography.Body>
        </Row>
        <Typography.Body $color={colors.gray60}>{description}</Typography.Body>
      </ClubCardTop>
      <View
        style={{
          padding: 12,
          gap: 8,
          flex: 1,
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity
          disabled={!website}
          style={{
            flex: 1,
            height: 44,
            borderRadius: 96,
            backgroundColor: colors.gray20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <WebsiteIcon fill={facebook ? colors.gray70 : colors.gray30} />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!instagram}
          style={{
            flex: 1,
            height: 44,
            borderRadius: 96,
            backgroundColor: colors.gray20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <InstagramIcon fill={facebook ? colors.gray70 : colors.gray30} />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!facebook}
          style={{
            flex: 1,
            height: 44,
            borderRadius: 96,
            backgroundColor: colors.gray20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FacebookIcon fill={facebook ? colors.gray70 : colors.gray30} />
        </TouchableOpacity>
      </View>
    </ClubCardLayout>
  );
};

const ClubCardLayout = styled.View`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  align-self: stretch;
`;

const ClubCardTop = styled.View`
  padding: 12px;
  gap: 16px;
  display: flex;
`;

export default ClubCard;
