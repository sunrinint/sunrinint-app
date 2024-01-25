import styled, { useTheme } from 'styled-components/native';
import { Column, Row } from '@components/atomic';
import Typography from '@components/typography';
import { SvgXml } from 'react-native-svg';
import React from 'react';
import { Animated, View } from 'react-native';

const BackCard = ({ style }: { style?: any }) => {
  const { colors } = useTheme();
  return (
    <Container style={style}>
      <Typography.Body $color={colors.gray60}>
        선린인터넷고등학교 모바일 학생증
      </Typography.Body>
      <ImageContainer />
      <Column $alignItems={'center'} $gap={8}>
        <Typography.Name $color={colors.gray80}>{'유도윤'}</Typography.Name>
        <Row $gap={6}>
          <Typography.SemiLabel $color={colors.gray60}>
            생년월일
          </Typography.SemiLabel>
          <Typography.Label $color={colors.gray60}>
            {'2007.01.09'}
          </Typography.Label>
        </Row>
      </Column>
      <Line />
      <Column $alignItems={'center'} $gap={4}>
        <Typography.SemiBody $color={colors.gray60}>
          위 사람은 본교 학생임을 증명함.
        </Typography.SemiBody>
        <Typography.Body $color={colors.gray60}>
          {'2023.03.02'} ~ {'2026.02.28'}
        </Typography.Body>
      </Column>
      <Svg />
    </Container>
  );
};

const Svg = () => {
  return (
    <>
      <SvgXml
        xml={`
          <svg width="77" height="376" viewBox="0 0 77 376" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1">
              <path d="M-124.092 144.058C-124.092 144.058 -67.7636 118.568 -8.52219 118.568C50.7192 118.568 72.5788 144.955 75.6353 170.64C78.6917 196.328 62.942 235.792 16.1602 278.292C-30.6216 320.792 -134.682 378.717 -221.974 375.901C-221.974 375.901 -152.965 351.649 -108.249 318.022C-63.5325 284.398 -1.26578 237.903 -7.95201 179.789C-19.8009 121.446 -114.022 140.291 -124.089 144.058H-124.092Z" fill="#408DC1"/>
              <path d="M24.6045 79.7983C44.1761 70.0755 53.0326 48.2711 44.3861 31.0968C35.7396 13.9225 12.8643 7.88193 -6.70726 17.6048C-26.2789 27.3276 -35.1354 49.132 -26.4889 66.3063C-17.8424 83.4805 5.03287 89.5212 24.6045 79.7983Z" fill="#F5825A"/>
            </g>
          </svg>
        `}
        style={{
          position: 'absolute',
          zIndex: -1,
          top: 0,
          left: 0,
        }}
      />
      <SvgXml
        xml={`
          <svg width="76" height="376" viewBox="0 0 76 376" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1" clip-path="url(#clip0_1463_441)">
              <path d="M106.908 144.058C106.908 144.058 163.236 118.568 222.478 118.568C281.719 118.568 303.579 144.955 306.635 170.64C309.692 196.328 293.942 235.792 247.16 278.292C200.378 320.792 96.318 378.717 9.02612 375.901C9.02612 375.901 78.0352 351.649 122.751 318.022C167.467 284.398 229.734 237.903 223.048 179.789C211.199 121.446 116.978 140.291 106.911 144.058H106.908Z" fill="#408DC1"/>
              <path d="M159.233 185.224C159.233 185.224 120.978 206.594 69.4606 206.594C17.9429 206.594 -0.000219645 171.519 -0.000219645 154.844C-0.000219645 138.168 -0.579733 113.445 52.0938 63.9973C114.713 11.8008 188.701 2.2312 188.701 2.2312C188.701 2.2312 76.2372 33.515 58.1507 119.58C42.7718 196.198 138.445 186.276 159.233 185.224Z" fill="#40B885"/>
            </g>
            <defs>
              <clipPath id="clip0_1463_441">
                <rect width="308" height="376" fill="white" transform="translate(-0.000488281)"/>
              </clipPath>
            </defs>
          </svg>
        `}
        style={{
          position: 'absolute',
          zIndex: -1,
          top: 36,
          right: 0,
        }}
      />
    </>
  );
};

const Container = styled(Animated.View)`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.gray10};
  width: 100%;
  max-width: 380px;
  border-radius: 8px;
  padding: 20px;
  height: 424px;
  align-items: center;
  justify-content: space-between;
`;

const ImageContainer = styled.View`
  width: 128px;
  height: 160px;
  border-radius: 4px;
  background-color: lightgray;
`;

const Line = styled.View`
  width: 186px;
  height: 1px;
  background-color: ${(props) => props.theme.colors.gray20};
`;

export default BackCard;
