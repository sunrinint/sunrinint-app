import React, { Suspense, useEffect, useState } from 'react';
import LayoutWithHeader from '@components/layout/LayoutWithHeader';
import styled from 'styled-components/native';
import Setting from '@assets/icons/setting.svg';
import { useNavigation } from '@react-navigation/native';
import { ClubType } from '@lib/type/Club';
import ClubListSection from '@components/section/club/ClubListSection';
import SelectSection from '@components/section/club/SelectSection';
import { getUser } from '@lib/api/user';

const ClubScreen = () => {
  const navigation = useNavigation<any>();
  const [department, setDepartment] = useState<ClubType>('security');
  useEffect(() => {
    getUser().then((user) => {
      if (user) {
        setDepartment(user.department as ClubType);
      }
    });
  }, []);
  return (
    <LayoutWithHeader
      logo
      FirstChild={Setting}
      onFirstChildPress={() => navigation.navigate('Setting')}
    >
      <Container>
        <SelectSection department={department} setDepartment={setDepartment} />
        <Suspense fallback={<ClubListSection.Skeleton />}>
          <ClubListSection department={department} />
        </Suspense>
      </Container>
    </LayoutWithHeader>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 12px 12px 0 12px;
  gap: 12px;
`;

export default ClubScreen;
