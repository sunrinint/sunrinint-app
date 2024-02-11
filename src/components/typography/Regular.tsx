import styled from 'styled-components/native';
import { Text } from '@components/atomic';
import { getFontSize } from '@lib/fonts';

const Regular = styled(Text)`
  font-weight: 500;
`;

export const Label = styled(Regular)`
  font-size: ${getFontSize(17)}px;
  line-height: 24px;
`;

export const Body = styled(Regular)`
  font-size: ${getFontSize(15)}px;
  line-height: 24px;
`;

export const Caption = styled(Regular)`
  font-size: ${getFontSize(13)}px;
  line-height: 20px;
`;
