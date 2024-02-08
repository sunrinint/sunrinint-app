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
import { Spacer } from '@components/atomic/Spacer';
import { ScrollView, View } from 'react-native';
import Button from '@/components/common/Button';
import PressibleCard from '@components/common/setting-card/PressibleCard';
import Card from '@components/common/setting-card/Card';
import BrithPickerModal from '@components/common/BrithPickerModal';

const SettingScreen = () => {
  const navigation = useNavigation<any>();
  const { colors } = useTheme();
  const [enabled, setEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [brithModalVisible, setBrithModalVisible] = useState(false);
  const [brith, setBrith] = useState<{
    year: number;
    month: number;
    day: number;
  } | null>(null);
  return (
    <>
      <LayoutWithHeader
        showBack={true}
        onBackPress={() => navigation.pop()}
        title={'설정'}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Column $padding={[20, 12]} $alignItems={'center'}>
            <ImageContainer />
            <Spacer $height={24} />
            <Column $alignItems={'center'} $gap={16}>
              <Column
                $justifyContent={'center'}
                $alignItems={'center'}
                $gap={4}
              >
                <Typography.LargeTitle $color={colors.gray80}>
                  이정우
                </Typography.LargeTitle>
                <Typography.Body $color={colors.gray60}>
                  23sunrin078@sunrint.hs.kr
                </Typography.Body>
              </Column>
              <Row $justifyContent={'center'} $gap={8}>
                <Button
                  fullWidth
                  height={44}
                  radius={999}
                  level={10}
                  onPress={() => {
                    setModalVisible(true);
                  }}
                >
                  <Typography.Body $color={colors.gray70}>
                    로그아웃
                  </Typography.Body>
                  <Logout fill={colors.gray80} />
                </Button>
                <Button fullWidth height={44} radius={999} level={10}>
                  <Typography.Body $color={colors.gray70}>
                    사진 수정
                  </Typography.Body>
                  <Edit fill={colors.gray80} />
                </Button>
              </Row>
            </Column>
            <Spacer $height={36} />
            <Column $gap={12} $alignItems={'center'}>
              <InfoCard>
                <Row
                  $padding={[7, 12]}
                  $alignItems={'center'}
                  $justifyContent={'space-between'}
                  $fill={true}
                >
                  <Typography.SemiLabel $color={colors.gray80}>
                    다크모드
                  </Typography.SemiLabel>
                  <Switch
                    value={enabled}
                    onChange={() => setEnabled(!enabled)}
                  />
                </Row>
              </InfoCard>
              <InfoCard>
                <Box>
                  <Typography.SemiLabel $color={colors.gray80}>
                    내 정보
                  </Typography.SemiLabel>
                </Box>
                <PressibleCard title={'생년월일'} context={'2007년 10월 30일'} />
                <PressibleCard title={'학년 · 반 · 번호'} context={'1학년 04반 18번'} />
              </InfoCard>
              <InfoCard>
                <Box>
                  <Typography.SemiLabel $color={colors.gray80}>
                  서비스 정보
                  </Typography.SemiLabel>
                </Box>
                <Card title={'빌드 날짜'} context={'23년 9월 4일'} />
                <Card title={'Int 버전'} context={'v1'} />
              </InfoCard>
                </Card>
              </InfoContainer>
           
            </Column>
          </Column>
        </ScrollView>
      </LayoutWithHeader>
      {brithModalVisible && (
        <BrithPickerModal
          initValue={brith}
          onConfirm={({ year, month, day }) => {
            setBrith({ year, month, day });
            setBrithModalVisible(false);
          }}
          onCancel={() => {
            setBrithModalVisible(false);
          }}
        />
      )}
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
                <Typography.Title $color={colors.gray80}>
                  로그아웃 하시겠어요?
                </Typography.Title>
                <Typography.Body $color={colors.gray60}>
                  로그아웃 하시면 다시 로그인 할 때 까지IntPass를 사용하지
                  못하게 됩니다.
                </Typography.Body>
              </Column>
              <Row $gap={8}>
                <GrayButton onPress={() => setModalVisible(false)}>
                  <Typography.SemiLabel $color={colors.gray80}>
                    취소
                  </Typography.SemiLabel>
                </GrayButton>
                <RedButton onPress={() => setModalVisible(false)}>
                  <Typography.SemiLabel $color={colors.gray10}>
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

const Box = styled.View`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
`;

const RedButton = styled.TouchableOpacity`
  display: flex;
  height: 56px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.red};
`;

const GrayButton = styled.TouchableOpacity`
  display: flex;
  height: 56px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 4px;
  background: #e7eaef;
`;

const ModalOverlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  flex: 1;
  z-index: 9;
  background: rgba(0, 0, 0, 0.4);
`;

const InfoCard = styled.View`
  display: flex;
  flex-direction: column;
  padding: 8px;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.gray30};
  background: ${(props) => props.theme.colors.gray10};
`;

const ImageContainer = styled.View`
  width: 128px;
  height: 160px;
  border-radius: 4px;
  background-color: lightgray;
`;

export default SettingScreen;
