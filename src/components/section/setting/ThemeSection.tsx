import React from 'react';
import { Row } from '@components/atomic';
import Typography from '@components/typography';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Next from '@assets/icons/next.svg';
import ThemeMode from '@lib/type/ThemeMode';
import { SelectBottomSheet } from '@components/common/bottom-sheets/select';
import useOverlay from '@hooks/useOverlay';
import useAppTheme from '@hooks/useAppTheme';
import styled, { useTheme } from 'styled-components/native';
import { InfoCard } from '@components/section/setting/styles';
import CustomPressable from '@/components/common/CustomPressable';

const Container = styled.View``;
const ThemeSection = () => {
  const { colors } = useTheme();
  const overlay = useOverlay();
  const { themeMode, setTheme } = useAppTheme();
  const convertThemeName = (theme: ThemeMode) => {
    switch (theme) {
      case 'system':
        return '시스템과 동일';
      case 'light':
        return '라이트';
      case 'dark':
        return '다크';
    }
  };
  const openBottomSheet = () => {
    overlay.open(
      <SelectBottomSheet
        title={'테마 선택'}
        data={[
          { label: '시스템과 동일', value: 'system' },
          { label: '라이트', value: 'light' },
          { label: '다크', value: 'dark' },
        ]}
        value={themeMode}
        onChange={(value: ThemeMode) => {
          setTheme(value);
        }}
      />,
    );
  };

  return (
    <CustomPressable activeScale={0.98} onPress={openBottomSheet}>
      <InfoCard>
        <Container>
          <Row
            $padding={[7, 12]}
            $alignItems={'center'}
            $justifyContent={'space-between'}
            $fill
          >
            <Typography.SemiLabel $color={colors.gray90}>
              테마 설정
            </Typography.SemiLabel>
            <Row $gap={8} $alignItems={'center'}>
              <Typography.Body $color={colors.gray70}>
                {convertThemeName(themeMode)}
              </Typography.Body>
              <Next />
            </Row>
          </Row>
        </Container>
      </InfoCard>
    </CustomPressable>
  );
};

export default ThemeSection;
