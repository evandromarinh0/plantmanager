import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  background: #f0f0f0;
  border-radius: 20px;
  padding: 10px 0;
  align-items: center;
  margin: 10px;
`;

export const Title = styled.Text`
  color: #2B7A4B;
  font-family: 'Jost_600SemiBold';
  margin: 16px 0;
`;