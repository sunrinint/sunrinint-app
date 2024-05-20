import React from 'react';
import LayoutWithHeader from '@/components/layout/LayoutWithHeader';
import styled, { useTheme } from 'styled-components/native';
import Typography from '@components/typography';
import { ScrollView } from 'react-native';
import { OpenSourceLicense } from '@/constants/OpenSourceLicense';
import { useNavigation } from '@react-navigation/native';

const OpenSourceLicenseScreen = () => {
  const navigation = useNavigation<any>();
  const { colors } = useTheme();
  return (
    <LayoutWithHeader title="오픈소스 라이선스" showBack>
      <Container>
        <ScrollView
          contentContainerStyle={{
            gap: 12,
            marginTop: 12,
            paddingBottom: 50,
          }}
          showsVerticalScrollIndicator={false}
        >
          {OpenSourceLicense.map((license, index) => (
            <LicenseCard
              onPress={() => {
                navigation.navigate('OpenSourceLicenseDetail', {
                  id: index,
                });
              }}
              key={index}
            >
              <Typography.SemiLabel $color={colors.gray80}>
                {license.libraryName}
              </Typography.SemiLabel>
            </LicenseCard>
          ))}
        </ScrollView>
      </Container>
    </LayoutWithHeader>
  );
};

export default OpenSourceLicenseScreen;

const LicenseCard = styled.TouchableOpacity`
  padding: 16px 20px;
  background-color: ${(props) => props.theme.colors.gray10};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.gray30};
  align-self: stretch;
`;

const Container = styled.View`
  flex: 1;
  padding: 0 12px 0 12px;
  gap: 12px;
`;
