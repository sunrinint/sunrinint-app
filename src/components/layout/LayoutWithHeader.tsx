import React from 'react';
import styled, { useTheme } from 'styled-components/native';
// import Logo from '@assets/icons/logo.svg';
import Back from '@assets/icons/leftarrow.svg';
import { View } from 'react-native';
import { Row } from '@components/atomic';
import { SafeAreaView } from 'react-native-safe-area-context';
import Typography from '@components/typography';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import IconBox from '../atomic/IconBox';

interface HeaderProps {
  title?: string;
  logo?: boolean;
  showBack?: boolean;
  onBackPress?: () => void;
  FirstChild?: any;
  onFirstChildPress?: () => void;
  children?: React.ReactNode;
}

const LayoutWithHeader = ({
  title,
  logo,
  showBack,
  FirstChild,
  onFirstChildPress,
  children,
}: HeaderProps) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <SafeAreaView
      edges={['top']}
      style={{
        flex: 1,
        backgroundColor: colors.gray20,
      }}
    >
      <Container>
        <Row $alignItems={'center'}>
          {logo && (
            <SvgXml
              xml={`
              <svg width="54" height="20" viewBox="0 0 54 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3031_8406)">
              <path d="M6.66667 0H0V7.03333H6.66667V0Z" fill="${colors.logo1}"/>
              <path d="M6.66667 12.9331H0V19.9998H6.66667V12.9331Z" fill="${colors.logo3}"/>
              <path d="M6.66667 6.6665H0V13.3332H6.66667V6.6665Z" fill="${colors.logo2}"/>
              <path d="M16.6667 0H10V7.03333H16.6667V0Z" fill="${colors.logo1}"/>
              <path d="M10 13.3333V12.8833H16.6667V13.3333V20" fill="${colors.logo3}"/>
              <path d="M23.3334 13.3332H16.6667H16.3V6.6665H16.6667" fill="${colors.logo3}"/>
              <path d="M16.6667 6.6665H10V13.3332H16.6667V6.6665Z" fill="${colors.logo2}"/>
              <path d="M29.9999 6.66667V7.01667H23.3333V6.66667V0" fill="${colors.logo3}"/>
              <path d="M29.9999 12.9331H23.3333V19.9998H29.9999V12.9331Z" fill="${colors.logo1}"/>
              <path d="M29.9999 6.6665H23.3333V13.3332H29.9999V6.6665Z" fill="${colors.logo2}"/>
              <path d="M53.3333 0H33.3333V6.66667H39.9999V7.16667H46.6666V6.66667H53.3333V0Z" fill="${colors.logo1}"/>
              <path d="M46.6667 12.8999H40V19.9999H46.6667V12.8999Z" fill="${colors.logo3}"/>
              <path d="M46.6667 6.6665H40V13.3332H46.6667V6.6665Z" fill="${colors.logo2}"/>
              </g>
              </svg>
              `}
            />
          )}
          {title && (
            <Row $alignItems={'center'} $gap={12}>
              {showBack && (
                <IconBox
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Back fill={colors.gray70} />
                </IconBox>
              )}
              <Typography.Title $color={colors.gray80}>
                {title}
              </Typography.Title>
            </Row>
          )}
        </Row>
        <Row $alignItems={'center'} $justifyContent={'center'}>
          {FirstChild && (
            <IconBox onPress={onFirstChildPress}>
              <FirstChild />
            </IconBox>
          )}
        </Row>
      </Container>
      <View
        style={{
          flex: 1,
          width: '100%',
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  height: 56px;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export default LayoutWithHeader;
