import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Column } from '@components/atomic';
import GoogleLogo from '@assets/icons/google.svg';
import Typography from '@components/typography';
import styled, { useTheme } from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import Button from '@/components/common/Button';
import useOverlay from '@/hooks/useOverlay';
import { login } from '@lib/api/auth';
import { getUser } from '@lib/api/user';

const LoginScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  const overlay = useOverlay();

  useEffect(() => {
    getUser().then((user) => {
      if (user) {
        navigation.navigate('Tab');
      }
    });
  }, []);

  const openModal = () => {
    overlay.open(
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
              backgroundColor: colors.gray10,
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
            <Button
              level={80}
              radius={4}
              onPress={() => {
                overlay.close();
              }}
              height={56}
            >
              <Typography.SemiLabel $color={colors.gray10}>
                시도해볼게요!
              </Typography.SemiLabel>
            </Button>
          </View>
        </View>
      </ModalOverlay>,
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.gray20,
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
          <Button
            level={30}
            width={186}
            height={44}
            radius={96}
            onPress={openModal}
          >
            <Typography.Body $color={colors.gray80}>
              로그인에 문제가 있나요?
            </Typography.Body>
          </Button>
          <Button
            fullWidth
            height={56}
            radius={12}
            level={80}
            onPress={() =>
              login()
                .then(() => navigation.navigate('Tab'))
                .catch((e) => console.log(e))
            }
          >
            <GoogleLogo />
            <Typography.SemiLabel $color={colors.gray10}>
              학교 구글 계정으로 로그인
            </Typography.SemiLabel>
          </Button>
        </View>
      </View>
    </SafeAreaView>
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
export default LoginScreen;
