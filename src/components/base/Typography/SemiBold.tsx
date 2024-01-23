import styled from 'styled-components/native';
import { Text } from '@components/base/Atomic';

const SemiBold = styled(Text)`
  font-weight: 600;
`;

export const Name = styled(SemiBold)`
  font-size: 32px;
  line-height: 40px;
`;

export const LargeTitle = styled(SemiBold)`
  font-size: 24px;
  line-height: 32px;
`;

export const Title = styled(SemiBold)`
  font-size: 20px;
  line-height: 28px;
`;

export const SemiLabel = styled(SemiBold)`
  font-size: 17px;
  line-height: 24px;
`;

export const SemiBody = styled(SemiBold)`
  font-size: 15px;
  line-height: 24px;
`;
