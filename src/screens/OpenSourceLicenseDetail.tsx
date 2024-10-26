import React from 'react';
import LayoutWithHeader from '@/components/layout/LayoutWithHeader';
import styled, { useTheme } from 'styled-components/native';
import Typography from '@components/typography';
import { ScrollView } from 'react-native';
import { OpenSourceLicense } from '@/constants/OpenSourceLicense';
import { Column, Row } from '@/components/atomic';

const OpenSourceLicenseDetailScreen = ({ route }) => {
  const { colors } = useTheme();
  const license = OpenSourceLicense[route.params.id];
  return (
    <LayoutWithHeader title="라이선스 정보" showBack>
      <Container>
        <ScrollView
          contentContainerStyle={{
            gap: 24,
            paddingBottom: 50,
            marginTop: 20,
            paddingHorizontal: 12,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Typography.Title $color={colors.gray80}>
            {license.libraryName}
          </Typography.Title>
          <Column $gap={12}>
            <Typography.Label $color={colors.gray80}>
              Description
            </Typography.Label>
            <Typography.Caption $color={colors.gray80}>
              {license._description}
            </Typography.Caption>
          </Column>
          <Row>
            <Column
              style={{
                flex: 1,
              }}
              $fill
              $gap={12}
            >
              <Typography.Label $color={colors.gray80}>
                License
              </Typography.Label>
              <Typography.Caption $color={colors.gray60}>
                {license._license}
              </Typography.Caption>
            </Column>
            <Column
              style={{
                flex: 1,
              }}
              $gap={12}
            >
              <Typography.Label $color={colors.gray80}>
                Version
              </Typography.Label>
              <Typography.Caption $color={colors.gray60}>
                {license.version}
              </Typography.Caption>
            </Column>
          </Row>
          <Typography.Caption $color={colors.gray80}>
            {license._licenseContent}
          </Typography.Caption>
        </ScrollView>
      </Container>
    </LayoutWithHeader>
  );
};

export default OpenSourceLicenseDetailScreen;

const Container = styled.View`
  flex: 1;
  padding: 0 12px 0 12px;
  gap: 12px;
`;
