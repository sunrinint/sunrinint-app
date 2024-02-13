import React from 'react';
import BottomSheet from '@components/common/bottom-sheets/BottomSheet';
import Item from './Item';
import { FlatList } from 'react-native';

interface Props {
  title: string;
  data: string[];
  value: string;
  onChange: (value: string) => void;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const SelectBottomSheet = ({
  title,
  value,
  data,
  onChange,
  onConfirm,
}: Props) => {
  return (
    <BottomSheet
      title={title}
      value={value}
      onChange={onChange}
      onConfirm={onConfirm}
    >
      <BottomSheet.Handler />
      <BottomSheet.Title />
      <BottomSheet.Menu>
        <FlatList
          scrollEnabled={false}
          data={data}
          renderItem={({ item }) => (
            <BottomSheet.Item
              value={item}
              as={(props) => <Item {...props} />}
            />
          )}
        />
      </BottomSheet.Menu>
    </BottomSheet>
  );
};

export default SelectBottomSheet;
