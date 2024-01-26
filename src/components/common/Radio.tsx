import React, { Dispatch, SetStateAction, useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import Typography from '@components/typography';
import { useTheme } from 'styled-components';
import Check from '@assets/icons/check.svg';

interface RadioProps {
  data: string[];
  onChange: Dispatch<SetStateAction<string>>;
  onConfirm: () => void;
}

const Radio = ({ data, onChange, onConfirm }: RadioProps) => {
  const [selectIndex, setSelectIndex] = useState(0);
  const { colors } = useTheme();
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <Container
          onPress={() => {
            setSelectIndex(index);
            onChange(item);
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
