import React from 'react';
import LayoutWithHeader from '@/components/layout/LayoutWithHeader';
import styled, { useTheme } from 'styled-components/native';
import MadebyCard from '@components/common/MadebyCard';
import Typography from '@components/typography';
import { ScrollView } from 'react-native';

const developers = [
  {
    name: '김성빈',
    role: '1기 PO, Backend Developer',
    link: 'https://github.com/plebea',
    logo: require('@assets/images/ksb.png'),
  },
  {
    name: '주현명',
    role: '1기 PM, Frontend Developer',
    link: 'https://github.com/jureuk7',
    logo: require('@assets/images/jureuk.png'),
  },
  {
    name: '유도윤',
    role: 'Frontend Developer',
    link: 'https://github.com/doyun0109',
    logo: require('@assets/images/doyun.png'),
  },
  {
    name: '이정우',
    role: 'Frontend Developer',
    link: 'https://github.com/paul3083',
    logo: require('@assets/images/jwoo.png'),
  },
  {
    name: '홍예훈',
    role: 'Frontend Developer',
    link: 'https://github.com/hoonih',
    logo: require('@assets/images/yehoon.png'),
  },
  {
    name: '박금혁',
    role: 'Backend Developer',
    link: 'https://github.com/rmagur1203',
    logo: require('@assets/images/gold.png'),
  },
];

const Designers = [
  // 백시현 박시원 조현우 이주영 표한빈 김대현
  {
    name: '백시현',
    role: 'UI/UX Designer',
    link: 'https://behance.net/sihyunlights',
    logo: require('@assets/images/sihyunlights.png'),
  },
  {
    name: '박시원',
    role: 'UI/UX Designer',
    link: 'https://behance.net/whoisapple',
    logo: require('@assets/images/siwon.png'),
  },
  {
    name: '조현우',
    role: 'UI/UX Designer',
    link: 'https://behance.net/hyunwoocho',
    logo: require('@assets/images/hyunwoocho.png'),
  },
  {
    name: '이주영',
    role: 'UI/UX Designer',
    link: 'https://behance.net/juyounglee',
    logo: require('@assets/images/jooyong.png'),
  },
  {
    name: '표한빈',
    role: 'UI/UX Designer',
    link: 'https://behance.net/hanbin81j30d32',
    logo: require('@assets/images/sharpbin.png'),
  },
  {
    name: '김대현',
    role: 'UI/UX Designer',
    link: 'https://behance.net/daehyunkim',
    logo: require('@assets/images/dhyun.png'),
  },
];

const Directors = [
  //오유성 남영재
  {
    name: '오유성',
    role: 'Director',
    link: 'https://github.com/oyshallo562',
    logo: require('@assets/images/oyshallo.png'),
  },
  {
    name: '남영재',
    role: 'Director',
    link: 'https://github.com/ye0ngjae',
    logo: require('@assets/images/yj.png'),
  },
];

const SpecialThanks = [
  // 조성주 권지원
  {
    name: '조성주',
    role: '급식 API 제공',
    link: 'https://github.com/iamfiro',
    logo: require('@assets/images/firo.png'),
  },
  {
    name: '권지원',
    role: '급식 API 제공',
    link: 'https://github.com/jwkwon0817',
    logo: require('@assets/images/jiwon.png'),
  },
];

const MadebyScreen = () => {
  const { colors } = useTheme();
  return (
    <LayoutWithHeader title="만든 사람들" showBack>
      <Container>
        <ScrollView
          contentContainerStyle={{
            gap: 12,
            paddingBottom: 50,
            marginTop: 12,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Card>
            <CardTop>
              <Typography.SemiLabel $color={colors.gray80}>
                개발자
              </Typography.SemiLabel>
            </CardTop>
            {developers.map((developer, index) => (
              <MadebyCard
                key={index}
                logo={developer.logo}
                name={developer.name}
                role={developer.role}
                link={developer.link}
              />
            ))}
          </Card>
          <Card>
            <CardTop>
              <Typography.SemiLabel $color={colors.gray80}>
                디자이너
              </Typography.SemiLabel>
            </CardTop>
            {Designers.map((developer, index) => (
              <MadebyCard
                key={index}
                logo={developer.logo}
                name={developer.name}
                role={developer.role}
                link={developer.link}
              />
            ))}
          </Card>
          <Card>
            <CardTop>
              <Typography.SemiLabel $color={colors.gray80}>
                기획자
              </Typography.SemiLabel>
            </CardTop>
            {Directors.map((developer, index) => (
              <MadebyCard
                key={index}
                logo={developer.logo}
                name={developer.name}
                role={developer.role}
                link={developer.link}
              />
            ))}
          </Card>
          <Card>
            <CardTop>
              <Typography.SemiLabel $color={colors.gray80}>
                Special
              </Typography.SemiLabel>
            </CardTop>
            {SpecialThanks.map((developer, index) => (
              <MadebyCard
                key={index}
                logo={developer.logo}
                name={developer.name}
                role={developer.role}
                link={developer.link}
              />
            ))}
          </Card>
        </ScrollView>
      </Container>
    </LayoutWithHeader>
  );
};

export default MadebyScreen;

const CardTop = styled.View`
  display: flex;
  padding: 12px;
  gap: 12px;
  align-self: stretch;
`;

const Card = styled.View`
  background-color: ${(props) => props.theme.colors.gray10};
  border: 1px solid ${(props) => props.theme.colors.gray30};
  display: flex;
  padding: 8px;
  border-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
`;

const Container = styled.View`
  flex: 1;
  padding: 0 12px 0 12px;
  gap: 12px;
`;
