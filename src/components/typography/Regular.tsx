import styled from 'styled-components/native';
import { Text } from '@components/atomic';

const Regular = styled(Text)`
  font-weight: 500;
`;

export const Label = styled(Regular)`
  font-size: 17px;
  line-height: 24px;
`;

export const Body = styled(Regular)`
  font-size: 15px;
  line-height: 24px;
`;

export const Caption = styled(Regular)`
  font-size: 13px;
  line-height: 20px;
`;
