import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
`;

export const Emoji = styled.Text`
  font-size: 78px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: 'Jost_600SemiBold';
  text-align: center;
  color: #52665A;
  line-height: 38px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-family: 'Jost_400Regular';
  text-align: center;
  font-size: 17px;
  padding: 0 10px;
  color: #52665A;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  padding: 0 50px;
  margin-top: 32px;
`;
