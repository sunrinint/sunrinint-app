import { useTheme } from 'styled-components/native';
import { Row } from '@components/atomic';
import Typography from '@components/typography';
import { SvgXml } from 'react-native-svg';
import React from 'react';

interface Props {
  label?: string;
  value: string;
  selected: boolean;
}

const Item = ({ label, value, selected }: Props) => {
  const { colors } = useTheme();
  return (
    <Row $justifyContent={'space-between'} $alignItems={'center'} $fill>
      <Typography.Body $color={colors.gray90}>{label ?? value}</Typography.Body>
      {selected && (
        <SvgXml
          xml={`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_1665_1123" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_1665_1123)">
                <path d="M9.55005 17.6538L4.21545 12.3192L5.28468 11.25L9.55005 15.5154L18.7154 6.35003L19.7847 7.41923L9.55005 17.6538Z" fill="${colors.highlight}"/>
              </g>
            </svg>
          `}
        />
      )}
    </Row>
  );
};

export default Item;
