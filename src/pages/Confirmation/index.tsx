import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Button } from '../../components/Button';

import { 
  Container,
  Content,
  Emoji,
  Title,
  Subtitle,
  ButtonContainer,
 } from "./styles";

export function Confirmation() {
  const navigation = useNavigation();

  function handleNavigateToPlantSelection() {
    navigation.navigate('PlantSelection');
  }

  return(
    <Container>
      <Content>
        <Emoji>😄</Emoji>

        <Title>Prontinho</Title>

        <Subtitle>
          Agora vamos começar a cuidar das suas plantinhas com muita cuidado.
        </Subtitle>

        <ButtonContainer>
          <Button onPress={handleNavigateToPlantSelection} title="Começar" />
        </ButtonContainer>
      </Content>

    </Container>
  );
}