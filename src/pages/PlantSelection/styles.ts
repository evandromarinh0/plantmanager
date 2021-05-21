import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
`;

export const HeaderWrapper = styled.View`
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: #52665A;
  font-family: 'Jost_600SemiBold';
  line-height: 20px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-size: 17px;
  font-family: 'Jost_400Regular';
  line-height: 20px;
  color: #52665A;
`;

export const EnvironmentSection = styled.View``;

export const EnvironmentList = styled(FlatList)``;

export const PlantCards = styled.View`
  padding: 0 24px;
`;

export const PlantList = styled(FlatList)``;
