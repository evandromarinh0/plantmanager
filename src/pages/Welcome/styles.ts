import { SafeAreaView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-top: 38px;
  line-height: 34px;
  color: #52665A;
  font-family: 'Jost_600SemiBold';
`;

export const LandingImage = styled.Image`
  width: 292px;
  height: 284px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  color: #52665A;
  font-family: 'Jost_400Regular';
`;

export const LandingButton = styled(RectButton)`
  background: #32B768;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;