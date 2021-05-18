import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  background: #32B768;
  height: 56px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'Jost_600SemiBold'
`;