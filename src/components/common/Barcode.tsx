import React, { useState } from 'react';

import barcodes from 'jsbarcode/src/barcodes';

import { Surface, Shape } from '@react-native-community/art';
import { useEffect } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

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
    setBars(drawSvgBarCode(encoded));
    setWidth(encoded.data.length * 2);
    // console.log(encoded);
  }, [format, value]);
  return (
    <View
      style={{
        alignItems: 'center',
        // backgroundColor: 'red',
      }}
    >
      <Surface height={48} width={width}>
        <Shape d={bars} fill={colors.gray80} />
      </Surface>
    </View>
  );
};

const drawSvgBarCode = (encoding: any) => {
  const rects = [];
  // binary data of barcode
  const binary = encoding.data;

  let barWidth = 0;
  let x = 0;
  for (let i = 0; i < binary.length; i++) {
    x = i * 2;
    if (binary[i] === '1') {
      barWidth++;
    } else if (barWidth > 0) {
      rects.push(
        `M${x - 2 * barWidth},${0}h${2 * barWidth}v${100}h-${2 * barWidth}z`,
      );
      barWidth = 0;
    }
  }
  if (barWidth > 0) {
    rects.push(
      `M${x - 2 * barWidth},${0}h${2 * barWidth}v${100}h-${2 * barWidth}z`,
    );
  }
  return rects;
};

export default Barcode;
