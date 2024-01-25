import React from 'react';
import LayoutWithHeader from '@components/layout/LayoutWithHeader';
import { useNavigation } from '@react-navigation/native';
import { Column, Row } from '@components/atomic';
import Typography from '@components/typography';
import { useTheme } from 'styled-components';
import styled from 'styled-components/native';
import Down from '@assets/icons/down.svg';

const BirthScreen = () => {
  const navigation = useNavigation<any>();
  const theme = useTheme();
  return (
    <LayoutWithHeader
      showBack={true}
      onBackPress={() => navigation.pop()}
      title={'생년월일'}
    >
      <Column $gap={24} $padding={[8, 20]}>
        <Row $gap={8}>
          <Button>
            <Typography.Body $color={theme.colors.gray40}>
              년
            </Typography.Body>
            <Down />
          </Button>
          <Button>
            <Typography.Body $color={theme.colors.gray40}>
              월
            </Typography.Body>
            <Down />
          </Button>
          <Button>
            <Typography.Body $color={theme.colors.gray40}>
              일
            </Typography.Body>
            <Down />
          </Button>
        </Row>
        <Typography.Caption $color={theme.colors.gray50}>
          위 정보는 학생증 뒷면 표시를 위해 입력할 수 있으며, 다른 용도 로
          사용되지 않습니다.
        </Typography.Caption>
      </Column>
    </LayoutWithHeader>
  );
};

const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  height: 44px;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  border-radius: 8px;
  background: #fff;
`;

export default BirthScreen;
