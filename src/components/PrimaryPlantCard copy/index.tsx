import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import { 
  Container,
  Title,
  Details,
  TimeLabel,
  TimeToWater,
} from "./styles";

interface PlantProps extends RectButtonProperties {
  data: {
    name: string;
    photo: string;
    hour: string;
  }
}

export function SecondaryPlantCard({ data, ...rest }: PlantProps) {
  return(
    <Container {...rest}>
      <SvgFromUri uri={data.photo} width={50} height={50} />
      <Title>{data.name}</Title>
      <Details>
        <TimeLabel>Regar às</TimeLabel>
        <TimeToWater>{data.hour}</TimeToWater>
      </Details>
    </Container>   
  );
}