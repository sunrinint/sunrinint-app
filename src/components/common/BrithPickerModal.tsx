import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components/native';
import { Column, Row, Spacer, Wrapper } from '@components/atomic';
import Typography from '@components/typography';
import WheelPicker from '@components/common/WheelPicker';
import { Pressable, StyleSheet, View } from 'react-native';

interface Props {
  onConfirm: (_: { year: number; month: number; day: number }) => void;
  onCancel: () => void;
}

const BrithPickerModal = ({ onConfirm, onCancel }: Props) => {
  const { colors } = useTheme();
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const maxDdy = new Date(year, month, 0).getDate();

  return (
    <ModalOverlay>
      <Pressable onPress={onCancel} style={style.pressable} />
      <Wrapper $padding={[0, 20]} $fill>
        <Container>
          <Wrapper $padding={[4]}>
            <Typography.Title $color={colors.gray90}>
              생년월일을 선택해주세요
            </Typography.Title>
          </Wrapper>
          <Column $padding={[0, 4]}>
            <Row $padding={[0, 24]} $gap={4} $fill>
              <Typography.Caption $color={colors.gray70} style={style.text}>
                년
              </Typography.Caption>
              <Typography.Caption $color={colors.gray70} style={style.text}>
                월
              </Typography.Caption>
              <Typography.Caption $color={colors.gray70} style={style.text}>
                일
              </Typography.Caption>
            </Row>
            <Row $padding={[0, 24]} $gap={4} $fill>
              <WheelPicker
                data={Array.from({ length: 100 }, (_, i) => {
                  const _year = new Date().getFullYear();
                  return _year - 99 + i;
                })}
                onChange={setYear}
              />
              <WheelPicker
                data={Array.from({ length: 12 }, (_, i) => i + 1)}
                onChange={setMonth}
              />
              <WheelPicker
                data={Array.from({ length: maxDdy }, (_, i) => i + 1)}
                onChange={setDay}
              />
            </Row>
            <View
              style={{
                position: 'absolute',
                top: 52,
                left: 4,
                height: 40,
                width: '100%',
                zIndex: -1,
                backgroundColor: colors.gray20,
                borderRadius: 4,
              }}
            />
            <Spacer $height={16} />
          </Column>
          <Button onPress={() => onConfirm({ year, month, day })}>
            <Typography.SemiLabel $color={colors.gray10}>
              설정 완료
            </Typography.SemiLabel>
          </Button>
        </Container>
      </Wrapper>
      <Pressable onPress={onCancel} style={style.pressable} />
    </ModalOverlay>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 12px;
  gap: 12px;
  width: 100%;
  background: ${(props) => props.theme.colors.gray10};
`;

const Button = styled.Pressable`
  display: flex;
  width: 100%;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.gray80};
`;

const style = StyleSheet.create({
  text: {
    flex: 1,
    textAlign: 'center',
  },
  pressable: {
    flex: 1,
    width: '100%',
  },
});

const ModalOverlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
`;

export default BrithPickerModal;
