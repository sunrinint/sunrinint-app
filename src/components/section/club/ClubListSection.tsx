import React, { Suspense, useState } from 'react';
import useClubList from '@hooks/useClubList';
import { ClubType } from '@lib/type/Club';
import { FlatList, RefreshControl } from 'react-native';
import ClubCard from '@components/common/ClubCard';
import { Spacer } from '@components/atomic';

interface Props {
  department: ClubType;
}

const ClubListSection = ({ department }: Props) => {
  const { clubList, refetchClubList } = useClubList(department);
  const [refreshing, setRefreshing] = useState(false);

  return (
    <>
      <FlatList
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              refetchClubList().then(() => setRefreshing(false));
            }}
          />
        }
        data={clubList}
        ItemSeparatorComponent={() => <Spacer $height={12} />}
        renderItem={({ item, index }) => (
          <>
            <Suspense fallback={<ClubCard.Skeleton />}>
              <ClubCard id={item.id} />
            </Suspense>
            {index === clubList.length - 1 && <Spacer $height={72} />}
          </>
        )}
      />
    </>
  );
};

const Skeleton = () => {
  return (
    <>
      <ClubCard.Skeleton />
      <Spacer $height={12} />
      <ClubCard.Skeleton />
      <Spacer $height={12} />
      <ClubCard.Skeleton />
      <Spacer $height={12} />
      <ClubCard.Skeleton />
    </>
  );
};

ClubListSection.Skeleton = Skeleton;

export default ClubListSection;
