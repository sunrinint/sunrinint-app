import React from 'react';
import styled from 'styled-components/native';
import Logo from '@assets/icons/logo.svg';
import Back from '@assets/icons/leftarrow.svg';
import { TouchableOpacity } from 'react-native';
import { Row } from '@components/base/Atomic/Container';
import Typography from '@components/base/Typography';
import { useTheme } from 'styled-components';

interface HeaderProps {
  title?: string;
  logo?: boolean;
  showBack?: boolean;
  onBackPress?: () => void;
  FirstChild?: any;
  onFirstChildPress?: () => void;
}

const Header = ({
  title,
  logo,
  showBack,
  onBackPress,
  FirstChild,
  onFirstChildPress,
}: HeaderProps) => {
  const theme = useTheme();
  return (
    <Container>
      <Row alignItems={'center'}>
        {logo && <Logo />}
        {showBack && (
          <Row alignItems={'center'} gap={12}>
            <TouchableOpacity onPress={onBackPress}>
              <Back />
            </TouchableOpacity>
            <Typography.Title color={theme.colors.gray80}>
              {title}
            </Typography.Title>
          </Row>
        )}
      </Row>
      <Row alignItems={'center'} justifyContent={'center'}>
        {FirstChild && (
          <TouchableOpacity onPress={onFirstChildPress}>
            <FirstChild />
          </TouchableOpacity>
        )}
      </Row>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  height: 56px;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export default Header;
