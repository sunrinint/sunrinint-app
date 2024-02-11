import styled from 'styled-components/native';
import { Text } from '@components/atomic';
import { getFontSize } from '@lib/fonts';


const SemiBold = styled(Text)`
  font-weight: 600;
`;

export const Name = styled(SemiBold)`
  font-size: ${getFontSize(32)}px;
  line-height: 40px;
`;

export const LargeTitle = styled(SemiBold)`
  font-size: ${getFontSize(24)}px;
  line-height: 32px;
`;

export const Title = styled(SemiBold)`
  font-size: ${getFontSize(20)}px;
  line-height: 28px;
`;

export const SemiLabel = styled(SemiBold)`
  font-size: ${getFontSize(17)}px;
  line-height: 24px;
`;

export const SemiBody = styled(SemiBold)`
  font-size: ${getFontSize(15)}px;
  line-height: 24px;
`;
