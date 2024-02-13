import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LayoutWithHeader from '@components/layout/LayoutWithHeader';
import { Row } from '@components/atomic';
import Typography from '@components/typography';
import styled, { useTheme } from 'styled-components/native';
import ArrowDown from '@assets/icons/arrow_down.svg';
import ClubCard from '@/components/common/ClubCard';
import Setting from '@assets/icons/setting.svg';
import useOverlay from '@/hooks/useOverlay';
import SelectBottomSheet from '@components/common/bottom-sheets/select/SelectBottomSheet';

const ClubScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [category, setCategory] = useState('정보보호과');
  const overlay = useOverlay();

  const openBottomSheet = () => {
    overlay.open(
      <SelectBottomSheet
        title={'분류'}
        value={category}
        onChange={setCategory}
        onConfirm={() => {
          console.log('confirm');
        }}
        data={[
          '정보보호과',
          '소프트웨어과',
          'IT경영과',
          '콘텐츠디자인과',
          '일반동아리',
          '자율동아리',
        ]}
      />,
    );
  };

  const clubList = [
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
          paddingHorizontal: 12,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 12,
          paddingTop: 12,
        }}
      >
        <PressableBox onPress={() => openBottomSheet()}>
          <Row $alignItems={'center'} $fill={true} $gap={8} $padding={[4, 4]}>
            <Typography.Title $color={colors.gray80}>
              {category}
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
          {clubList.map((club) => (
            <ClubCard key={club.name} {...club} />
          ))}
        </ScrollView>
      </View>
    </LayoutWithHeader>
  );
};

const PressableBox = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export default ClubScreen;
