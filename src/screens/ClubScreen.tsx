import React, { useRef, useState } from 'react';
import {
  Animated,
  Modal,
  PanResponder,
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
import useBottomSheet from '@components/common/BottomSheet';
import Club from '@assets/icons/club_icon.svg';
import { Spacer } from '@components/atomic/Spacer';
import Radio from '@components/common/Radio';

const ClubScreen = () => {
  const {
    isVisible,
    showBottomSheet,
    hideBottomSheet,
    translateY,
    resetBottomSheet,
    panY,
  } = useBottomSheet();
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
    // {
    //   name: 'v.friends',
    //   kind: '디자인 교육 봉사 동아리',
    //   description:
    //     '브이프렌즈는 선린인터넷고등학교의 유일한 디자인 교육봉사 동아리로, 그래픽 디자인, UI/UX, 모션 그래픽, 영상 기획 등 다양한 분야를 배우고 여러 프로젝트를 수행하며 실력과 아이디어를 발휘할 수 있는 동아리입니다.',
    //   room: '432실',
    //   website: 'https://vfriends.kr/',
    //   instagram: 'https://www.instagram.com/v.friends/',
    //   facebook: 'https://www.facebook.com/v.friends.kr',
    // },
    // {
    //   name: 'v.friends',
    //   kind: '디자인 교육 봉사 동아리',
    //   description:
    //     '브이프렌즈는 선린인터넷고등학교의 유일한 디자인 교육봉사 동아리로, 그래픽 디자인, UI/UX, 모션 그래픽, 영상 기획 등 다양한 분야를 배우고 여러 프로젝트를 수행하며 실력과 아이디어를 발휘할 수 있는 동아리입니다.',
    //   room: '432실',
    //   website: 'https://vfriends.kr/',
    //   instagram: 'https://www.instagram.com/v.friends/',
    //   facebook: 'https://www.facebook.com/v.friends.kr',
    // },
  ];
  const { colors } = useTheme();
  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: (event, gestureState) => {
        panY.setValue(gestureState.dy);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > 0 && gestureState.vy > 1) {
          hideBottomSheet();
        } else {
          resetBottomSheet.start();
        }
      },
    }),
  ).current;

  return (
    <LayoutWithHeader logo>
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
            <ArrowDown />
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
            <Container>
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
            </Container>
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
  width: 88px;
  height: 4px;
  border-radius: 10px;
  background: #fff;
`;

const Container = styled(Animated.View)`
  display: flex;
  padding: 16px 20px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 8px 8px 0 0;
  background: #fff;
`;

const BottomSheet = styled(Animated.View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 12px;
`;

const Overlay = styled.View`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default ClubScreen;
