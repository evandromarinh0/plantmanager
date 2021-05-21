import { useNavigation, useRoute } from '@react-navigation/core';
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

interface RouteParams {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  smile: '😀',
  hug: '🤗'
}

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const { buttonTitle, icon, title, subtitle, nextScreen } = routes.params as RouteParams;

  function handleNavigateToPlantSelection() {
    navigation.navigate(nextScreen);
  }

  return(
    <Container>
      <Content>
        <Emoji>{emojis[icon]}</Emoji>

        <Title>{title}</Title>

        <Subtitle>
          {subtitle}
        </Subtitle>

        <ButtonContainer>
          <Button onPress={handleNavigateToPlantSelection} title={buttonTitle} />
        </ButtonContainer>
      </Content>

    </Container>
  );
}