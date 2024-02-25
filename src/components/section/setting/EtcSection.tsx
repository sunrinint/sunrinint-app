import React from 'react';
import PressibleCard from '@components/section/setting/PressibleCard';
import { InfoCard } from './styles';
import { Linking } from 'react-native';

const INSTAGRAM_LINK = 'instagram://user?username=sunrin_int';
const INSTAGRAM_WEB_LINK = 'https://www.instagram.com/sunrin_int/';

const EtcSection = () => {
  return (
    <InfoCard>
      <PressibleCard title={'만든 사람들'} />
      <PressibleCard title={'오픈소스 라이센스'} />
      <PressibleCard
        title={'SunrinINT 인스타그램'}
        onPress={() => {
          Linking.openURL(INSTAGRAM_LINK).catch(() => {
            Linking.openURL(INSTAGRAM_WEB_LINK).then();
          });
        }}
      />
    </InfoCard>
  );
};

export default EtcSection;
