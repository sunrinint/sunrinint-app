import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import Typography from '@components/typography';
import { Column } from '@components/atomic';
import { SvgXml } from 'react-native-svg';
import Barcode from '@components/common/Barcode';
import { Animated } from 'react-native';
import useAppTheme from '@/hooks/useAppTheme';
import useUser from '@hooks/useUser';
import usePass from '@hooks/usePass';

const FrontCard = ({ style }: { style?: any }) => {
  const { colors } = useTheme();
  const { theme } = useAppTheme();
  const { pass } = usePass();
  const { user } = useUser();

  const newColors = {
    gray40: theme === 'light' ? colors.gray40 : colors.gray60,
    gray20: theme === 'light' ? colors.gray20 : colors.gray90,
    gray80: theme === 'light' ? colors.gray80 : colors.gray10,
  };

  return (
    <Container style={style}>
      <InfoContainer
        style={{
          backgroundColor: theme === 'light' ? colors.gray90 : colors.gray30,
        }}
      >
        <Typography.Body $color={newColors.gray40}>
          선린인터넷고등학교 모바일 학생증
        </Typography.Body>
        <Column $gap={8}>
          <Typography.Name $color={newColors.gray20}>
            {user.username}
          </Typography.Name>
          <Typography.SemiLabel $color={newColors.gray40}>
            {user.grade}학년 {user.class}반 {user.number}번
          </Typography.SemiLabel>
          <Typography.Body $color={newColors.gray40}>
            {user.email}
          </Typography.Body>
        </Column>
        <Typography.Body $color={newColors.gray40}>{pass.date}</Typography.Body>
        <SvgXml
          xml={`
                <svg width="160" height="243" viewBox="0 0 160 243" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1436_250)">
                        <path d="M69.647 92.1232C69.647 92.1232 106.343 75.5662 144.937 75.5662C183.531 75.5662 197.771 92.7062 199.763 109.39C201.754 126.076 191.493 151.709 161.017 179.315C130.54 206.921 62.7479 244.546 5.88019 242.717C5.88019 242.717 50.8373 226.964 79.9683 205.121C109.099 183.281 149.664 153.08 145.308 115.332C137.589 77.4358 76.2072 89.6766 69.6491 92.1232H69.647Z"
                              fill="${newColors.gray80}"/>
                        <path d="M103.735 118.862C103.735 118.862 78.8133 132.744 45.2513 132.744C11.6893 132.744 -6.91333e-05 109.961 -6.91333e-05 99.129C-6.91333e-05 88.2974 -0.377602 72.239 33.9375 40.12C74.7315 6.21592 122.932 0 122.932 0C122.932 0 49.666 20.3204 37.8833 76.2234C27.8644 125.991 90.1921 119.546 103.735 118.862Z"
                              fill="${newColors.gray80}"/>
                        <path d="M166.518 50.3835C179.268 44.068 185.038 29.905 179.405 18.7495C173.772 7.594 158.869 3.67034 146.119 9.98578C133.369 16.3012 127.599 30.4642 133.232 41.6198C138.865 52.7753 153.767 56.6989 166.518 50.3835Z"
                              fill="${newColors.gray80}"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1436_250">
                            <rect width="200" height="242.781" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            `}
          style={{
            position: 'absolute',
            zIndex: -1,
            top: 31,
            right: 0,
          }}
        />
      </InfoContainer>
      <BarcodeContainer>
        <Barcode value={'S2230072'} format={'CODE128'} />
        <Typography.Body $color={colors.gray90}>{pass.barcode}</Typography.Body>
      </BarcodeContainer>
    </Container>
  );
};

const Container = styled(Animated.View)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.gray10};
  height: 424px;
`;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  border-radius: 8px 8px 0 0;
  width: 100%;
  padding: 20px;
  gap: 56px;
`;

const BarcodeContainer = styled.View`
  display: flex;
  flex-direction: column;
  border-radius: 0 0 8px 8px;
  width: 100%;
  padding: 20px 0;
  align-items: center;
  gap: 8px;
  background-color: ${(props) => props.theme.colors.gray10};
`;

export default FrontCard;
