import React from 'react';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import wateringImg from '../../assets/watering.png';

import { 
  Container,
  Wrapper,
  Title,
  LandingImage,
  SubTitle, 
  LandingButton,
} from './styles';

export function Welcome() {
  const navigation = useNavigation();

  function handleGetStart() {
    navigation.navigate('UserIdentification');
  }

  return(
    <Container>
      <Wrapper>
        <Title>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Title>

        <LandingImage style={{ height: Dimensions.get('window').width * 0.7, resizeMode: 'contain' }} source={wateringImg} />

        <SubTitle>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar sempre que precisar.
        </SubTitle>

        <LandingButton onPress={handleGetStart}>
          <Feather color='#fff' size={24} name='chevron-right' />
        </LandingButton>
      </Wrapper>
    </Container>
  );
}