import { Feather } from '@expo/vector-icons';
import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';
import { SvgFromUri } from 'react-native-svg';

import {
  TrashButtonContainer,
  RemoveButton,
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
  };
  handleRemovePlant: () => void;
}

export function SecondaryPlantCard({ data, handleRemovePlant, ...rest }: PlantProps) {
  return(
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <TrashButtonContainer>
            <RemoveButton onPress={handleRemovePlant}>
              <Feather name="trash" size={32} color="#fff" />
            </RemoveButton>
          </TrashButtonContainer>
        </Animated.View>
      )}
    >
      <Container {...rest}>
        <SvgFromUri uri={data.photo} width={50} height={50} />
        <Title>{data.name}</Title>
        <Details>
          <TimeLabel>Regar às</TimeLabel>
          <TimeToWater>{data.hour}</TimeToWater>
        </Details>
      </Container>
    </Swipeable>
  );
}