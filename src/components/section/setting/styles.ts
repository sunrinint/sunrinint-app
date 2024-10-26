import styled from 'styled-components/native';

export const Box = styled.View`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
`;

export const RedButton = styled.TouchableOpacity`
  display: flex;
  height: 56px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.red};
`;

export const GrayButton = styled.TouchableOpacity`
  display: flex;
  height: 56px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.gray30};
`;

export const ModalOverlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  flex: 1;
  z-index: 9;
  background: rgba(0, 0, 0, 0.4);
`;

export const InfoCard = styled.View`
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.gray30};
  background: ${(props) => props.theme.colors.gray10};
`;

export const ImageContainer = styled.Image`
  width: 128px;
  height: 160px;
  border-radius: 4px;
  background-color: lightgray;
`;
