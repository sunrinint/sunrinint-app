import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Column } from '@components/atomic';
import GoogleLogo from '@assets/icons/google.svg';
import Typography from '@components/typography';
import styled, { useTheme } from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

const LoginScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Column $alignItems={'center'} $gap={24}>
            <SvgXml
              xml={`
                <svg width="171" height="64" viewBox="0 0 171 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5001 0H0.166748V21.3333H21.5001V0Z" fill="${colors.logo1}"/>
                  <path d="M21.5001 21.3333H0.166809V42.6666H21.5001V21.3333Z" fill="${colors.logo2}"/>
                  <path d="M21.5001 42.6666H0.166809V64H21.5001V42.6666Z" fill="${colors.logo3}"/>
                  <path d="M53.5001 0H32.1668V21.3333H53.5001V0Z" fill="${colors.logo1}"/>
                  <path d="M53.5001 21.3333H32.1668V42.6666H53.5001V21.3333Z" fill="${colors.logo2}"/>
                  <path d="M32.1668 42.6666H53.5001V64" fill="${colors.logo3}"/>
                  <path d="M74.8321 42.6666H53.5001V21.3333" fill="${colors.logo3}"/>
                  <path d="M96.1666 21.3333H74.8333V0" fill="${colors.logo3}"/>
                  <path d="M96.1666 21.3333H74.8333V42.6666H96.1666V21.3333Z" fill="${colors.logo2}"/>
                  <path d="M96.1666 42.6666H74.8333V64H96.1666V42.6666Z" fill="${colors.logo1}"/>
                  <path d="M170.833 0H106.833V21.3333H170.833V0Z" fill="${colors.logo1}"/>
                  <path d="M149.5 21.3333H128.167V42.6666H149.5V21.3333Z" fill="${colors.logo2}"/>
                  <path d="M149.5 42.6666H128.167V64H149.5V42.6666Z" fill="${colors.logo3}"/>
                </svg>
              `}
            />
            <Typography.SemiLabel $color={colors.gray60}>
              선린인트와 함께 선린생활하기
            </Typography.SemiLabel>
          </Column>
        </View>
        <View
          style={{
            position: 'absolute',
            flex: 1,
            width: '100%',
            bottom: 16 + insets.bottom,
          }}
        >
          <View
            style={{
              flex: 1,
              display: 'flex',
              paddingHorizontal: 20,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <SecondButton
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Typography.Body>로그인에 문제가 있나요?</Typography.Body>
            </SecondButton>
            <SignInButton onPress={() => navigation.navigate('Tab')}>
              <GoogleLogo />
              <Typography.SemiLabel $color={'white'}>
                학교 구글 계정으로 로그인
              </Typography.SemiLabel>
            </SignInButton>
          </View>
        </View>
      </SafeAreaView>
      {modalVisible && (
        <ModalOverlay>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
                borderRadius: 8,
                padding: 16,
                gap: 20,
              }}
            >
              <Column $gap={12} $padding={[4]}>
                <Typography.Title $color={colors.gray80}>
                  다음 방법을 시도해보세요
                </Typography.Title>
                <Column $gap={4}>
                  <Typography.Body $color={colors.gray60}>
                    학교에서 지급한 계정인지 확인해보세요.
                  </Typography.Body>
                  <Typography.Body $color={colors.gray60}>
                    인터넷 환경이 원활한지 확인해보세요.
                  </Typography.Body>
                  <Typography.Body $color={colors.gray60}>
                    학교 또는 학생회에 문의해보세요.
                  </Typography.Body>
                </Column>
              </Column>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
                style={{
                  height: 56,
                  width: '100%',
                  borderRadius: 4,
                  backgroundColor: colors.gray80,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography.SemiLabel $color={'white'}>
                  시도해볼게요!
                </Typography.SemiLabel>
              </TouchableOpacity>
            </View>
          </View>
        </ModalOverlay>
      )}
    </>
  );
};

const ModalOverlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  flex: 1;
  z-index: 9;
  background: rgba(0, 0, 0, 0.4);
`;

const SignInButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex: 1;
  width: 100%;
  padding: 0 20px;
  border-radius: 11px;
  background: #1c232e;
`;

const SecondButton = styled.TouchableOpacity`
  display: flex;
  height: 44px;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 96px;
  background: #f0f2f5;
`;

export default LoginScreen;
