import styled from 'styled-components/native';
import { Text } from '@components/atomic';
import { getFontSize } from '@lib/fonts';

const Regular = styled(Text)<{ $bold?: boolean }>`
  font-weight: ${({ $bold }) => ($bold ? 600 : 500)};
`;

export const Label = styled(Regular)`
  font-size: ${getFontSize(17)}px;
  line-height: ${getFontSize(24)}px;
`;

export const Body = styled(Regular)`
  font-size: ${getFontSize(15)}px;
  line-height: ${getFontSize(24)}px;
`;

export const Caption = styled(Regular)`
  font-size: ${getFontSize(13)}px;
  line-height: ${getFontSize(20)}px;
`;
