import React, { useState } from 'react';
import {
  Animated,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LayoutWithHeader from '@components/layout/LayoutWithHeader';
import { Row } from '@components/atomic';
import Typography from '@components/typography';
import styled, { useTheme } from 'styled-components/native';
import ArrowDown from '@assets/icons/arrow_down.svg';
import ClubCard from '@components/ClubCard';
import { Spacer } from '@components/atomic/Spacer';
import Radio from '@components/common/Radio';
import useBottomSheet from '@hooks/useBottomSheet';
import Club from '@assets/icons/club_icon.svg';
import Setting from '@assets/icons/setting.svg';
import { useNavigation } from '@react-navigation/native';

const ClubScreen = () => {
  const navigation = useNavigation<any>();
  const {
    isVisible,
    showBottomSheet,
    hideBottomSheet,
    panResponders,
    translateY,
  } = useBottomSheet();
  const { colors } = useTheme();
  const [selectDepartment, setSelectDepartment] = useState('콘텐츠디자인과');
  const [selectIndex, setSelectIndex] = useState(3);

  const club = [
    {
      name: 'v.friends',
      kind: '디자인 교육 봉사 동아리',
      description:
        '브이프렌즈는 선린인터넷고등학교의 유일한 디자인 교육봉사 동아리로, 그래픽 디자인, UI/UX, 모션 그래픽, 영상 기획 등 다양한 분야를 배우고 여러 프로젝트를 수행하며 실력과 아이디어를 발휘할 수 있는 동아리입니다.',
      room: '432실',
      website: 'https://vfriends.kr/',
      instagram: 'https://www.instagram.com/v.friends/',
      facebook: 'https://www.facebook.com/v.friends.kr',
    },
  ];

  return (
    <LayoutWithHeader
      logo
      FirstChild={Setting}
      onFirstChildPress={() => navigation.navigate('Setting')}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 12,
          paddingTop: 24,
        }}
      >
        <PressableBox onPress={() => showBottomSheet()}>
          <Row $alignItems={'center'} $fill={true} $gap={8} $padding={[0, 4]}>
            <Typography.Title $color={colors.gray80}>
              {selectDepartment}
            </Typography.Title>
            <ArrowDown fill={colors.gray60} />
          </Row>
        </PressableBox>
        <ScrollView
          style={{
            flex: 1,
            alignSelf: 'stretch',
            borderRadius: 8,
          }}
          contentContainerStyle={{
            gap: 12,
            alignSelf: 'stretch',
          }}
          showsVerticalScrollIndicator={false}
        >
          {club.map((club) => (
            <ClubCard
              key={club.name}
              name={club.name}
              kind={club.kind}
              description={club.description}
              room={club.room}
              website={club.website}
              instagram={club.instagram}
              facebook={club.facebook}
            />
          ))}
        </ScrollView>
      </View>
      <Modal
        visible={isVisible}
        animationType="fade"
        transparent={true}
        statusBarTranslucent={true}
      >
        <Overlay>
          <TouchableWithoutFeedback onPress={hideBottomSheet}>
            <View style={{ flex: 1 }} />
          </TouchableWithoutFeedback>
          <BottomSheet
            style={{ transform: [{ translateY }] }}
            {...panResponders.panHandlers}
          >
            <Bar />
            <Row
              $padding={[8, 0]}
              $alignItems={'center'}
              $justifyContent={'space-between'}
              $fill={true}
            >
              <Typography.SemiLabel $color={colors.gray80}>
                학과 선택
              </Typography.SemiLabel>
              <Club fill={colors.gray50} />
            </Row>
            <Radio
              data={[
                '정보보호과',
                '소프트웨어과',
                'IT경영과',
                '콘텐츠디자인과',
              ]}
              setSelectDepartment={setSelectDepartment}
              selectIndex={selectIndex}
              setSelectIndex={setSelectIndex}
              onConfirm={hideBottomSheet}
            />
            <Spacer $height={37} />
          </BottomSheet>
        </Overlay>
      </Modal>
    </LayoutWithHeader>
  );
};

const PressableBox = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Bar = styled.View`
  width: 64px;
  height: 4px;
  border-radius: 10px;
  background: #e7eaef;
`;

const BottomSheet = styled(Animated.View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 20px;
  border-radius: 8px 8px 0 0;
  background: #fff;
`;

const Overlay = styled.View`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default ClubScreen;
