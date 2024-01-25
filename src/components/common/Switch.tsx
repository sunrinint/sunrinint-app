import React from 'react';
import styled from 'styled-components/native';

interface SwitchProps {
  enabled: boolean;
  onClick?: () => void;
}

const Switch = ({ enabled, onClick }: SwitchProps) => {
  return (
    <Container onPress={onClick} enabled={enabled}>
      <SwitchOne enabled={enabled} />
    </Container>
  );
};

const SwitchOne = styled.View<{
  enabled: boolean;
}>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.enabled ? '#FFFFFF' : '#FFFFFF')};
  border-radius: 100px;
`;

const Container = styled.Pressable<{
  enabled: boolean;
}>`
  display: flex;
  width: 48px;
  height: 28px;
  padding: 4px;
  transition: all 0.3s ease-in-out;
  justify-content: center;
  align-items: ${(props) => (!props.enabled ? 'flex-start' : 'flex-end')};
  border-radius: 100px;
  border: none;
  background: ${(props) => (props.enabled ? '#3671C2' : '#8C94A5')};
`;

export default Switch;
