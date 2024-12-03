import React, { Suspense } from 'react';
import { ScrollView } from 'react-native';
import LayoutWithHeader from '@components/layout/LayoutWithHeader';
import { Column, Wrapper } from '@components/atomic';
import { Spacer } from '@components/atomic/Spacer';
import {
  EtcSection,
  ProfileSection,
  ServiceInfoSection,
  ThemeSection,
  UserInfoSection,
} from '@components/section/setting';

const SettingScreen = () => {
  return (
    <>
      <LayoutWithHeader title={'설정'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Wrapper $padding={[8, 12]}>
            <Suspense fallback={<ProfileSection.Skeleton />}>
              <ProfileSection />
            </Suspense>
            <Spacer $height={24} />
            <Column $gap={12}>
              <ThemeSection />
              <Suspense fallback={<UserInfoSection.Skeleton />}>
                <UserInfoSection />
              </Suspense>
              <ServiceInfoSection />
              <EtcSection />
            </Column>
          </Wrapper>
          <Spacer $height={20} />
        </ScrollView>
      </LayoutWithHeader>
    </>
  );
};

export default SettingScreen;
