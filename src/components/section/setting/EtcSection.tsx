import React from 'react';
import PressibleCard from '@components/section/setting/PressibleCard';
import { InfoCard } from './styles';

const EtcSection = () => {
  return (
    <InfoCard>
      <PressibleCard title={'만든 사람들'} />
      <PressibleCard title={'오픈소스 라이센스'} />
      <PressibleCard title={'SunrinINT 인스타그램'} />
    </InfoCard>
  );
};

export default EtcSection;
