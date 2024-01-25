import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { Column } from '@components/atomic';
import IntLogo from '@assets/icons/logo.svg';
import GoogleLogo from '@assets/icons/google.svg';
import Typography from '@components/typography';
import { light } from '@/theme';
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LoginScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const colors = light;
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
            <IntLogo width={170} height={64} />
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
