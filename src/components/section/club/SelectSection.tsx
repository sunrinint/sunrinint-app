import React from 'react';
import { Row } from '@components/atomic';
import Typography from '@components/typography';
import ArrowDown from '@assets/icons/arrow_down.svg';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import SelectBottomSheet from '../../common/bottom-sheets/select/SelectBottomSheet';
import { ClubType } from '@lib/type/Club';
import useOverlay from '@hooks/useOverlay';
import { useTheme } from 'styled-components/native';

interface Props {
  department: ClubType;
  setDepartment: (value: ClubType) => void;
}

const SelectSection = ({ department, setDepartment }: Props) => {
  const overlay = useOverlay();
  const { colors } = useTheme();
  const convertClubType = (clubType: string) => {
    switch (clubType) {
      case 'security':
        return '정보보호과';
      case 'software':
        return '소프트웨어과';
      case 'business':
        return 'IT경영과';
      case 'design':
        return '콘텐츠디자인과';
      case 'general':
        return '일반동아리';
      case 'autonomous':
        return '자율동아리';
      default:
        return '정보보호과';
    }
  };

  const openBottomSheet = () => {
    overlay.open(
      <SelectBottomSheet
        title={'분류'}
        value={department}
        onChange={(value) => setDepartment(value as ClubType)}
        onConfirm={() => {
          console.log('confirm');
        }}
        data={[
          { label: '정보보호과', value: 'security' },
          { label: '소프트웨어과', value: 'software' },
          { label: 'IT경영과', value: 'business' },
          { label: '콘텐츠디자인과', value: 'design' },
          { label: '일반동아리', value: 'general' },
          { label: '자율동아리', value: 'autonomous' },
        ]}
      />,
    );
  };
  return (
    <TouchableOpacity onPress={() => openBottomSheet()}>
      <Row $alignItems={'center'} $fill={true} $gap={8} $padding={[4]}>
        <Typography.Title $color={colors.gray80}>
          {convertClubType(department)}
        </Typography.Title>
        <ArrowDown fill={colors.gray60} />
      </Row>
    </TouchableOpacity>
  );
};
const Skeleton = () => {
  return <ActivityIndicator />;
};

SelectSection.Skeleton = Skeleton;

export default SelectSection;
