import styled from 'styled-components/native';
import { Text } from '@components/atomic';
import { getFontSize } from '@lib/fonts';

const SemiBold = styled(Text)`
  font-weight: 600;
`;

export const Name = styled(SemiBold)`
  font-size: ${getFontSize(32)}px;
  line-height: ${getFontSize(40)}px;
`;

export const LargeTitle = styled(SemiBold)`
  font-size: ${getFontSize(24)}px;
  line-height: ${getFontSize(32)}px;
`;

export const Title = styled(SemiBold)`
  font-size: ${getFontSize(20)}px;
  line-height: ${getFontSize(28)}px;
`;

export const SemiLabel = styled(SemiBold)`
  font-size: ${getFontSize(17)}px;
  line-height: ${getFontSize(24)}px;
`;

export const SemiBody = styled(SemiBold)`
  font-size: ${getFontSize(15)}px;
  line-height: ${getFontSize(24)}px;
`;
