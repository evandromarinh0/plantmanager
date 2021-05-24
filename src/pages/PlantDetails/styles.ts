import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #f0f0f0;
`;

export const PlantInfo = styled.View`
  flex: 1;
  padding: 50px 24px;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
`;

export const PlantName = styled.Text`
  font-family: 'Jost_600SemiBold';
  font-size: 24px;
  color: #52665A;
  margin-top: 16px;
`;

export const PlantDescription = styled.Text`
  text-align: center;
  font-family: 'Jost_400Regular';
  color: #52665A;
  font-size: 17px;
  margin-top: 10px;
`;

export const Controller = styled.View`
  background: #fff;
  padding: 0 20px;
  padding-top: 20px;
  padding-bottom: ${getBottomSpace() || 20}px;
`;

export const TipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #EBF6FF;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`;

export const PlantImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: 'Jost_400Regular';
  color: #3D7199;
  font-size: 17px;
  text-align: justify;
`;

export const Reminder = styled.Text`
  text-align: center;
  font-family: 'Jost_600SemiBold';
  color: #52665A;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const AndroidDateTimePicker = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 40px 0;
`;

export const AndroidDateTimePickerText = styled.Text`
  color: #52665A;
  font-size: 24px;
  font-family: 'Jost_600SemiBold';
`;
