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
  return(
    <Container>
      <Content>
        <Emoji>😄</Emoji>

        <Title>Prontinho</Title>

        <Subtitle>
          Agora vamos começar a cuidar das suas plantinhas com muita cuidado.
        </Subtitle>

        <ButtonContainer>
          <Button title="Começar" />
        </ButtonContainer>
      </Content>

    </Container>
  );
}