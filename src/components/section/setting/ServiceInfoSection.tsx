import React from 'react';
import Typography from '@components/typography';
import { useTheme } from 'styled-components/native';
import { Box, InfoCard } from '@components/section/setting/styles';
import Card from '@components/section/setting/Card';

const ServiceInfoSection = () => {
  const { colors } = useTheme();
  return (
    <InfoCard>
      <Box>
        <Typography.SemiLabel $color={colors.gray80}>
          서비스 정보
        </Typography.SemiLabel>
      </Box>
      <Card title={'빌드 날짜'} context={'24년 12월 5일'} />
      <Card title={'Int 버전'} context={'v1.05'} />
    </InfoCard>
  );
};

export default ServiceInfoSection;
