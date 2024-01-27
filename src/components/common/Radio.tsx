import React, { Dispatch, SetStateAction } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import Typography from '@components/typography';
import { useTheme } from 'styled-components';
import Check from '@assets/icons/check.svg';

interface RadioProps {
  data: string[];
  setSelectDepartment: Dispatch<SetStateAction<string>>;
  selectIndex: number;
  setSelectIndex: Dispatch<SetStateAction<number>>;
  onConfirm: () => void;
}

const Radio = ({
  data,
  setSelectDepartment,
  selectIndex,
  setSelectIndex,
  onConfirm,
}: RadioProps) => {
  const { colors } = useTheme();

  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <Container
          onPress={() => {
            setSelectDepartment(item);
            setSelectIndex(index);
            onConfirm();
          }}
        >
          <Typography.Body $color={colors.gray80}>{item}</Typography.Body>
          <Check fill={index === selectIndex ? colors.highlight : 'none'} />
        </Container>
      )}
    />
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 12px 0;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`;

export default Radio;
