import React from 'react';
import {Column, Row} from '@components/atomic';
import { ActivityIndicator, View } from 'react-native';
import VfriendsLogo from '@assets/icons/club/vfriends.svg';
import Typography from '@components/typography';
import WebsiteIcon from '@assets/icons/website.svg';
import InstagramIcon from '@assets/icons/instagram.svg';
import FacebookIcon from '@assets/icons/facebook.svg';
import styled, { useTheme } from 'styled-components/native';
import Box from '../atomic/Box';
import useClub from '@hooks/useClub';
import {SkeletonContent} from '@components/skeleton/SkeletonContent';

interface ClubCardProps {
  id: string;
}

const ClubCard = ({ id }: ClubCardProps) => {
  const { colors } = useTheme();
  const { club } = useClub(id);
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
                {club.displayName}
              </Typography.SemiLabel>
              <Typography.Caption $color={colors.gray80}>
                {club.name}
              </Typography.Caption>
            </View>
          </Row>
          <Typography.Body $color={colors.gray60}>{club.room}</Typography.Body>
        </Row>
        <Typography.Body $color={colors.gray70}>
          {club.description}
        </Typography.Body>
      </ClubCardTop>
      <ButtonGroup>
        <RoundedButton disabled={!club.homepage}>
          <WebsiteIcon fill={club.facebook ? colors.gray80 : colors.gray40} />
        </RoundedButton>
        <RoundedButton disabled={!club.instagram}>
          <InstagramIcon fill={club.facebook ? colors.gray80 : colors.gray40} />
        </RoundedButton>
        <RoundedButton disabled={!club.facebook}>
          <FacebookIcon fill={club.facebook ? colors.gray80 : colors.gray40} />
        </RoundedButton>
      </ButtonGroup>
    </ClubCardLayout>
  );
};

const Skeleton = () => {
  return (
      <SkeletonContainer>
        <Row $justifyContent={'space-between'} $alignItems={'center'}>
          <Row $gap={8} $alignItems={'center'} $justifyContent={'flex-start'}>
            <SkeletonContent $width={32} $height={32}/>
            <Column $gap={8} $alignItems={'flex-start'}>
              <SkeletonContent $width={80} $height={16}/>
              <SkeletonContent $width={128} $height={12}/>
            </Column>
          </Row>
          <SkeletonContent $width={48} $height={12}/>
        </Row>
        <Column>
          <Row $padding={[6,0]} $justifyContent={'flex-start'}>
            <SkeletonContent $height={12}/>
          </Row>
          <Row $padding={[6,0]} $justifyContent={'flex-start'}>
            <SkeletonContent $height={12}/>
          </Row>
          <Row $padding={[6,0]} $justifyContent={'flex-start'}>
            <SkeletonContent $height={12}/>
          </Row>
          <Row $padding={[6,0]} $justifyContent={'flex-start'}>
            <SkeletonContent $width={128} $height={12}/>
          </Row>
        </Column>
      </SkeletonContainer>
  );
};

ClubCard.Skeleton = Skeleton;

const SkeletonContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray10};
  padding: 20px 20px;
  border-radius: 8px;
  gap: 16px;
`;

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
