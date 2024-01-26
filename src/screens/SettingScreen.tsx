import React, { useState } from 'react';
import LayoutWithHeader from '@components/layout/LayoutWithHeader';
import { useNavigation } from '@react-navigation/native';
import { Column, Row } from '@components/atomic';
import styled from 'styled-components/native';
import Typography from '@components/typography';
import { useTheme } from 'styled-components';
import Logout from '@assets/icons/logout.svg';
import Edit from '@assets/icons/edit.svg';
import Switch from '@components/common/Switch';
import Next from '@assets/icons/next.svg';
import { Spacer } from '@components/atomic/Spacer';
import { ScrollView, View } from 'react-native';

const SettingScreen = () => {
  const navigation = useNavigation<any>();
  const theme = useTheme();
  const [enabled, setEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <LayoutWithHeader
        showBack={true}
        onBackPress={() => navigation.pop()}
        title={'설정'}
      >
        <ScrollView>
          <Column $padding={[19, 20]} $alignItems={'center'}>
            <ImageContainer />
            <Spacer $height={24} />
            <Column $alignItems={'center'} $gap={16}>
              <Column
                $justifyContent={'center'}
                $alignItems={'center'}
                $gap={4}
              >
                <Typography.LargeTitle $color={theme.colors.gray80}>
                  이정우
                </Typography.LargeTitle>
                <Typography.Body $color={theme.colors.gray60}>
                  23sunrin078@sunrint.hs.kr
                </Typography.Body>
              </Column>
              <Row $justifyContent={'center'} $gap={8}>
                <RoundButton
                  onPress={() => {
                    setModalVisible(true);
                  }}
                >
                  <Typography.Body $color={theme.colors.gray70}>
                    로그아웃
                  </Typography.Body>
                  <Logout />
                </RoundButton>
                <RoundButton>
                  <Typography.Body $color={theme.colors.gray70}>
                    사진 수정
                  </Typography.Body>
                  <Edit />
                </RoundButton>
              </Row>
            </Column>
            <Spacer $height={36} />
            <Column $gap={12} $alignItems={'center'}>
              <InfoContainer>
                <Row
                  $padding={[7, 12]}
                  $alignItems={'center'}
                  $justifyContent={'space-between'}
                  $fill={true}
                >
                  <Typography.SemiLabel $color={theme.colors.gray80}>
                    다크모드
                  </Typography.SemiLabel>
                  <Switch
                    value={enabled}
                    onChange={() => setEnabled(!enabled)}
                  />
                </Row>
              </InfoContainer>
              <InfoContainer>
                <Card>
                  <Typography.SemiLabel $color={theme.colors.gray80}>
                    내 정보
                  </Typography.SemiLabel>
                </Card>
                <TouchableCard onPress={() => navigation.navigate('Birth')}>
                  <Typography.Body $color={theme.colors.gray80}>
                    생년월일
                  </Typography.Body>
                  <Row $gap={8} $alignItems={'center'}>
                    <Typography.Body $color={theme.colors.gray60}>
                      2007년 10월 30일
                    </Typography.Body>
                    <Next />
                  </Row>
                </TouchableCard>
                <TouchableCard onPress={() => navigation.navigate('Class')}>
                  <Typography.Body $color={theme.colors.gray80}>
                    학년 · 반 · 번호
                  </Typography.Body>
                  <Row $gap={8} $alignItems={'center'}>
                    <Typography.Body $color={theme.colors.gray60}>
                      1학년 04반 18번
                    </Typography.Body>
                    <Next />
                  </Row>
                </TouchableCard>
              </InfoContainer>
              <InfoContainer>
                <Card>
                  <Typography.SemiLabel $color={theme.colors.gray80}>
                    서비스 정보
                  </Typography.SemiLabel>
                </Card>
                <Card>
                  <Typography.Body $color={theme.colors.gray80}>
                    빌드 날짜
                  </Typography.Body>
                  <Typography.Body $color={theme.colors.gray60}>
                    2023년 9월 4일
                  </Typography.Body>
                </Card>
                <Card>
                  <Typography.Body $color={theme.colors.gray80}>
                    Int 버전
                  </Typography.Body>
                  <Typography.Body $color={theme.colors.gray60}>
                    v1
                  </Typography.Body>
                </Card>
              </InfoContainer>
            </Column>
          </Column>
          <Spacer $height={154} />
        </ScrollView>
      </LayoutWithHeader>
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
              <Column $gap={12} $padding={[4, 4]} $alignItems={'flex-start'}>
                <Typography.Title $color={theme.colors.gray80}>
                  로그아웃 하시겠어요?
                </Typography.Title>
                <Typography.Body $color={theme.colors.gray60}>
                  로그아웃 하시면 다시 로그인 할 때 까지 IntPass를 사용하지
                  못하게 됩니다.
                </Typography.Body>
              </Column>
              <Row $gap={8}>
                <GrayButton onPress={() => setModalVisible(false)}>
                  <Typography.SemiLabel $color={theme.colors.gray80}>
                    취소
                  </Typography.SemiLabel>
                </GrayButton>
                <RedButton onPress={() => setModalVisible(false)}>
                  <Typography.SemiLabel $color={theme.colors.gray10}>
                    로그아웃
                  </Typography.SemiLabel>
                </RedButton>
              </Row>
            </View>
          </View>
        </ModalOverlay>
      )}
    </>
  );
};

const RedButton = styled.TouchableOpacity`
  display: flex;
  height: 56px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 4px;
  background: #f83e3e;
`;

const GrayButton = styled.TouchableOpacity`
  display: flex;
  height: 56px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 4px;
  background: #f0f2f5;
`;

const ModalOverlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  flex: 1;
  z-index: 9;
  background: rgba(0, 0, 0, 0.4);
`;

const TouchableCard = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const Card = styled.View`
  display: flex;
  flex-direction: row;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding: 8px;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 8px;
  background: #fff;
`;

const RoundButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  height: 44px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 96px;
  background: #fff;
`;

const ImageContainer = styled.View`
  width: 128px;
  height: 160px;
  border-radius: 4px;
  background-color: lightgray;
`;

export default SettingScreen;
