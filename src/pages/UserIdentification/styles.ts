import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const KAvoidingView = styled(KeyboardAvoidingView)`
  flex: 1;
  width: 100%;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 54px;
  align-items: center;
`;

export const TextWrapper = styled.View`
  align-items: center;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #52665A;
  font-family: 'Jost_600SemiBold';
`;

export const UsernameInput = styled.TextInput<InputProps>`
  border-bottom-width: 1px;
  border-color: ${(props) => (props.isFocused || props.isFilled) ? '#32B768' : '#CFCFCF'};
  color: #52665A;
  height: 56px;
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
  margin-top: 20px;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  margin-top: 40px;
  padding: 0 20px;
`;