import styled, { useTheme } from 'styled-components/native';
import { Row } from '@components/atomic';
import { View } from 'react-native';
import Typography from '@components/typography';
import WebsiteIcon from '@assets/icons/website.svg';
import InstagramIcon from '@assets/icons/instagram.svg';
import FacebookIcon from '@assets/icons/facebook.svg';
import React from 'react';
import { Body } from '@components/typography/Regular';

interface MadebyProps{
  logo: string;
  name: string;
  role: string;
  website: string;
  facebook: string;
  instagram: string;
}

const MadebyCard = ({logo, name, role, website, facebook, instagram}: MadebyProps) => {
  const { colors } = useTheme();
  return (
    <ClubCardLayout>
      <ClubCardTop>
        <Row $fill $justifyContent={'space-between'} $alignItems={'center'}>
          <Row $gap={8} $alignItems={'center'}>
            <Logo source={{ uri: logo }} />
            <View>
              <Typography.Label $color={colors.gray80}>
                {name}
              </Typography.Label>
              <Typography.Body $color={colors.gray80}>
                {role}
              </Typography.Body>
            </View>
          </Row>
        </Row>
      </ClubCardTop>
      <ButtonGroup>
        <RoundedButton disabled={!website}>
          <WebsiteIcon fill={website ? colors.gray80 : colors.gray40} />
        </RoundedButton>
        <RoundedButton disabled={!facebook}>
          <FacebookIcon fill={facebook ? colors.gray80 : colors.gray40} />
        </RoundedButton>
        <RoundedButton disabled={!instagram}>
          <InstagramIcon fill={instagram ? colors.gray80 : colors.gray40} />
        </RoundedButton>
      </ButtonGroup>
    </ClubCardLayout>
  );
};

export default MadebyCard;

const Logo = styled.Image`
  width: 48px;
  height: 48px;
  //border-radius: 8px;
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




const MadebyCardLayout = styled.View`
  padding: 8px;
  background-color: ${(props) => props.theme.colors.gray10};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.gray30};
  align-self: stretch;
`;


