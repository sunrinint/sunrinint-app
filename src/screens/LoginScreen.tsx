import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Column } from '@components/base/Atomic/Container';
import IntLogo from '@assets/icons/logo.svg';
import GoogleLogo from '@assets/icons/google.svg';
import Typography from '@components/base/Typography';
import { light } from '@/theme';
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LoginScreen = ({ navigation }) => {
  const colors = light;
  const insets = useSafeAreaInsets();
  return (
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
        <Column alignItems={'center'} gap={24}>
          <IntLogo width={170} height={64} />
          <Typography.SemiLabel color={colors.gray60}>
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
          <SecondButton>
            <Typography.Body>로그인에 문제가 있나요?</Typography.Body>
          </SecondButton>
          <SignInButton onPress={() => navigation.navigate('Tab')}>
            <GoogleLogo />
            <Typography.SemiLabel color={'white'}>
              학교 구글 계정으로 로그인
            </Typography.SemiLabel>
          </SignInButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
