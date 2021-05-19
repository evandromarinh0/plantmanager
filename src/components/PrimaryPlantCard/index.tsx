import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import { Container, Title } from "./styles";

interface PlantProps extends RectButtonProperties {
  data: {
    name: string;
    photo: string;
  }
}

export function PrimaryPlantCard({ data, ...rest }: PlantProps) {
  return(
    <Container {...rest}>
      <SvgFromUri uri={data.photo} width={85} height={85} />
      <Title>{data.name}</Title>
    </Container>   
  );
}