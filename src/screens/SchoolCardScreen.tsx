import React, { useState } from 'react';
import LayoutWithHeader from '@components/layout/LayoutWithHeader';
import { Column } from '@components/atomic';
import SchoolCard from '@components/common/school-card';
import Typography from '@components/typography';
import styled, { useTheme } from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import Setting from '@assets/icons/setting.svg';
import { useNavigation } from '@react-navigation/native';
import { Spacer } from '@components/atomic/Spacer';

const SchoolCardScreen = () => {
  const navigation = useNavigation<any>();
  const { colors } = useTheme();
  const [isBack, setIsBack] = useState(false);
  return (
    <LayoutWithHeader
      logo
      FirstChild={Setting}
      onFirstChildPress={() => navigation.navigate('Setting')}
    >
      <Column
        $alignItems={'center'}
        $justifyContent={'center'}
        $gap={8}
        style={{
          flex: 1,
        }}
      >
        <SchoolCard isBack={isBack} />
        <Button onPress={() => setIsBack(!isBack)}>
          <Typography.Body $color={colors.gray80}>
            학생증 {isBack ? '앞면' : '뒷면'} 보기
          </Typography.Body>
          <SvgXml
            xml={`
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_1488_1958" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                  <rect width="16" height="16" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_1488_1958)">
                  <path d="M5.84615 12.9102L5.1436 12.2077L6.43849 10.8923C5.08036 10.7119 3.94554 10.3562 3.034 9.82497C2.12246 9.29378 1.66669 8.68545 1.66669 7.99998C1.66669 7.18033 2.27844 6.47542 3.50194 5.88525C4.72544 5.29508 6.22479 5 8 5C9.77521 5 11.2746 5.29508 12.4981 5.88525C13.7216 6.47542 14.3333 7.18033 14.3333 7.99998C14.3333 8.58631 13.997 9.12391 13.3244 9.61278C12.6517 10.1017 11.7658 10.4709 10.6667 10.7205V9.69998C11.5222 9.47776 12.1806 9.20276 12.6417 8.87498C13.1028 8.54721 13.3333 8.25554 13.3333 7.99998C13.3333 7.63161 12.8583 7.20618 11.9083 6.7237C10.9583 6.24122 9.65556 5.99998 8 5.99998C6.34445 5.99998 5.04167 6.24122 4.09167 6.7237C3.14167 7.20618 2.66667 7.63161 2.66667 7.99998C2.66667 8.29229 2.99274 8.6299 3.64489 9.0128C4.29703 9.39571 5.16669 9.6752 6.25387 9.85127L5.1436 8.741L5.84615 8.03845L8.28202 10.4743L5.84615 12.9102Z" fill="${colors.gray80}"/>
                </g>
              </svg>
            `}
          />
        </Button>
      </Column>
      <Spacer $height={80} />
    </LayoutWithHeader>
  );
};

const Button = styled.Pressable`
  background-color: ${(props) => props.theme.colors.gray10};
  padding: 8px 16px;
  border-radius: 96px;
  width: 160px;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export default SchoolCardScreen;
