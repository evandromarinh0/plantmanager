import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  max-width: 100%;
  padding: 25px 10px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background: #f0f0f0;
  margin: 5px 0;
`;

export const Title = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-size: 17px;
  font-family: 'Jost_600SemiBold';
  color: #52665A;
`;

export const Details = styled.View`
  align-items: flex-end;
`;

export const TimeLabel = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: 'Jost_400Regular';
  color: #AAB2AD;
`;

export const TimeToWater = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: 'Jost_600SemiBold';
  color: #738078;
`;
