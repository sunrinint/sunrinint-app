import React from 'react';
import Typography from '@components/typography';
import PressibleCard from '@components/section/setting/PressibleCard';
import useUser from '@hooks/useUser';
import { useTheme } from 'styled-components/native';
import useOverlay from '@hooks/useOverlay';
import BrithPickerModal from '@components/common/BrithPickerModal';
import Card from '@components/section/setting/Card';
import { Box, InfoCard } from '@components/section/setting/styles';
import useUpdateUser from '@hooks/useUpdateUser';

const UserInfoSection = () => {
  const { user } = useUser();
  const birthday = user.birthday?.split('-').map((v) => Number(v));
  const { updateUser } = useUpdateUser();

  const { colors } = useTheme();
  const overlay = useOverlay();
  const openModal = () => {
    overlay.open(
      <BrithPickerModal
        initValue={
          birthday && {
            year: birthday[0],
            month: birthday[1],
            day: birthday[2],
          }
        }
        onConfirm={({ year, month, day }) => {
          updateUser({
            birthday: `${year}-${month}-${day}`,
          });
          overlay.close();
        }}
        onCancel={() => {
          overlay.close();
        }}
      />,
    );
  };
  return (
    <InfoCard>
      <Box>
        <Typography.SemiLabel $color={colors.gray80}>
          내 정보
        </Typography.SemiLabel>
      </Box>
      <PressibleCard
        onPress={openModal}
        title={'생년월일'}
        context={user.birthday || '설정되지않음'}
      />
      <Card title={'학년 · 반 · 번호'} context={'1학년 04반 18번'} />
    </InfoCard>
  );
};

const Skeleton = () => {
  return <></>;
};

UserInfoSection.Skeleton = Skeleton;

export default UserInfoSection;
