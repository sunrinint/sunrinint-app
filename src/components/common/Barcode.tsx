import React, { useState } from 'react';
import barcodes from 'jsbarcode/src/barcodes';
import { useEffect } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Path, Svg } from 'react-native-svg';
import { binaryToSvg } from '@/utils/binaryToSvg';

interface BarcodeProps {
  value: string;
  format?: barcodes;
}

const Barcode = ({ value, format = 'CODE128' }: BarcodeProps) => {
  const { colors } = useTheme();
  const [bars, setBars] = useState<any>();
  const [width, setWidth] = useState<number>();
  useEffect(() => {
    const encoded = new barcodes[format](value, {}).encode();
    setBars(binaryToSvg(encoded));
    setWidth(encoded.data.length * 2);
  }, [format, value]);
  return (
    <View
      style={{
        alignItems: 'center',
      }}
    >
      <Svg height={48} width={width}>
        {bars?.map((bar: string, index: number) => (
          <Path key={index} d={bar} fill={colors.gray80} />
        ))}
      </Svg>
    </View>
  );
};

export default Barcode;
