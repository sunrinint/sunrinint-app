import React from 'react';
import styled, { useTheme } from 'styled-components/native';
// import Logo from '@assets/icons/logo.svg';
import Back from '@assets/icons/leftarrow.svg';
import { TouchableOpacity, View } from 'react-native';
import { Row } from '@components/atomic';
import { SafeAreaView } from 'react-native-safe-area-context';
import Typography from '@components/typography';
import { SvgXml } from 'react-native-svg';

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
  onBackPress,
  FirstChild,
  onFirstChildPress,
  children,
}: HeaderProps) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.gray20,
      }}
      edges={['top']}
    >
      <Container>
        <Row $alignItems={'center'}>
          {logo && (
            <SvgXml
              xml={`
                <svg width="53" height="20" viewBox="0 0 53 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.625 0H0V6.66664H6.625V0Z" fill="${colors.logo1}"/>
                  <path d="M6.625 6.6665H0V13.3331H6.625V6.6665Z" fill="${colors.logo2}"/>
                  <path d="M6.625 13.3335H0V20.0001H6.625V13.3335Z" fill="${colors.logo3}"/>
                  <path d="M16.5625 0H9.9375V6.66664H16.5625V0Z" fill="${colors.logo1}"/>
                  <path d="M16.5625 6.6665H9.9375V13.3331H16.5625V6.6665Z" fill="${colors.logo2}"/>
                  <path d="M9.9375 13.3335H16.5625V20.0001" fill="${colors.logo3}"/>
                  <path d="M23.1875 13.3331H16.5625V6.6665" fill="${colors.logo3}"/>
                  <path d="M29.8125 6.66664H23.1875V0" fill="${colors.logo3}"/>
                  <path d="M29.8125 6.6665H23.1875V13.3331H29.8125V6.6665Z" fill="${colors.logo2}"/>
                  <path d="M29.8125 13.3335H23.1875V20.0001H29.8125V13.3335Z" fill="${colors.logo1}"/>
                  <path d="M53 0H33.125V6.66664H53V0Z" fill="${colors.logo1}"/>
                  <path d="M46.3751 6.6665H39.7501V13.3331H46.3751V6.6665Z" fill="${colors.logo2}"/>
                  <path d="M46.3751 13.3335H39.7501V20.0001H46.3751V13.3335Z" fill="${colors.logo3}"/>
                </svg>
              `}
            />
          )}
          {showBack && (
            <Row $alignItems={'center'} $gap={12}>
              <TouchableOpacity onPress={onBackPress}>
                <Back fill={colors.gray70} />
              </TouchableOpacity>
              <Typography.Title $color={colors.gray80}>
                {title}
              </Typography.Title>
            </Row>
          )}
        </Row>
        <Row $alignItems={'center'} $justifyContent={'center'}>
          {FirstChild && (
            <TouchableOpacity onPress={onFirstChildPress}>
              <FirstChild />
            </TouchableOpacity>
          )}
        </Row>
      </Container>
      <View
        style={{
          flex: 1,
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
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export default LayoutWithHeader;
