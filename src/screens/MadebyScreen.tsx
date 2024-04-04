import React, { Suspense } from 'react';
import LayoutWithHeader from '@/components/layout/LayoutWithHeader';
import styled, { useTheme } from 'styled-components/native';
import MadebyCard from '@components/common/MadebyCard';
import Typography from '@components/typography';
import { ScrollView } from 'react-native';
import { Spacer } from '@components/atomic';


const MadebyScreen = () => {
  const { colors } = useTheme();
  return (
    <LayoutWithHeader title="만든 사람들" showBack>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TitleCardLayout>
            <Typography.Label $color={colors.gray80}>SunrinINT 개발진</Typography.Label>
            <Typography.Body $color={colors.gray60}>SunrinINT를 만든 사람들입니다.</Typography.Body>
          </TitleCardLayout>
          <Spacer $height={12} />
          <MadebyCard logo={'@/assets/icons/logo.svg'} name={'김성빈'} role={'PO, Backend Developer'} website={'test'} facebook={'test'} instagram={'test'}/>
          <Spacer $height={12} />
          <MadebyCard logo={'@/assets/icons/logo.svg'} name={'김성빈'} role={'PO, Backend Developer'} website={'test'} facebook={'test'} instagram={'test'}/>
          <Spacer $height={12} />
          <MadebyCard logo={'@/assets/icons/logo.svg'} name={'김성빈'} role={'PO, Backend Developer'} website={'test'} facebook={'test'} instagram={'test'}/>
          <Spacer $height={12} />
          <MadebyCard logo={'@/assets/icons/logo.svg'} name={'김성빈'} role={'PO, Backend Developer'} website={'test'} facebook={'test'} instagram={'test'}/>
          <Spacer $height={12} />
          <MadebyCard logo={'@/assets/icons/logo.svg'} name={'김성빈'} role={'PO, Backend Developer'} website={'test'} facebook={'test'} instagram={'test'}/>
          <Spacer $height={12} />
          <MadebyCard logo={'@/assets/icons/logo.svg'} name={'김성빈'} role={'PO, Backend Developer'} website={'test'} facebook={'test'} instagram={'test'}/>
          <Spacer $height={12} />
          <MadebyCard logo={'@/assets/icons/logo.svg'} name={'김성빈'} role={'PO, Backend Developer'} website={'test'} facebook={'test'} instagram={'test'}/>
        </ScrollView>
      </Container>
    </LayoutWithHeader>
  );
};

export default MadebyScreen;

const TitleCardLayout = styled.View`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.gray10};
  border-radius: 8px;
    gap: 4px;
  border: 1px solid ${(props) => props.theme.colors.gray30};
  align-self: stretch;
`;

const Container = styled.View`
  flex: 1;
  padding: 12px 12px 0 12px;
  gap: 12px;
`;
