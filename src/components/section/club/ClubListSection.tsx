import React, { Suspense, useState, useCallback, useEffect } from 'react';
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

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetchClubList();
    setRefreshing(false);
  }, [refetchClubList]);

  useEffect(() => {
    let mounted = true;
    const loadInitialData = async () => {
      if (mounted) {
        await refetchClubList();
      }
    };
    loadInitialData();
    return () => {
      mounted = false;
    };
  }, [refetchClubList]);

  const renderItem = useCallback(
    ({ item, index }) => (
      <>
        <Suspense fallback={<ClubCard.Skeleton />}>
          <ClubCard id={item.id} />
        </Suspense>
        {index === clubList.length - 1 && <Spacer $height={72} />}
      </>
    ),
    [clubList.length],
  );

  return (
    <>
      <FlatList
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        data={clubList}
        ItemSeparatorComponent={() => <Spacer $height={12} />}
        renderItem={renderItem}
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
