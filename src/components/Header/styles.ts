import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  margin-top: ${getStatusBarHeight()}px;
`;

export const Profile = styled.View``;

export const Hello = styled.Text`
  font-size: 32px;
  color: #52665A;
  font-family: 'Jost_400Regular';
`;

export const Username = styled.Text`
  font-size: 32px;
  color: #52665A;
  font-family: 'Jost_600SemiBold';
  line-height: 40px;
`;

export const UserImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;