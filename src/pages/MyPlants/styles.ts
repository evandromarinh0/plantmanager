import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 50px 30px 0;
  background: #FFFFFF;
`;


export const Spotlight = styled.View`
  background: #EBF6FF;
  padding: 0 20px;
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SpotlightImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const SpotlightText = styled.Text`
  flex: 1;
  color: #3D7199;
  padding: 0 20px;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantTitle = styled.Text`
  font-size: 24px;
  font-family: 'Jost_600SemiBold';
  color: #52665A;
  margin: 20px 0;
`;

export const PlantList = styled(FlatList)``;

export const PlantName = styled.Text``;