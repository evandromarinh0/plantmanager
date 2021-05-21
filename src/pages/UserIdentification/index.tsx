import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Alert, Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { Button } from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
  Container,
  KAvoidingView,
  Content,
  Form,
  TextWrapper,
  Emoji,
  Title,
  UsernameInput,
  ButtonWrapper
} from "./styles";

export function UserIdentification() {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState('');

  function handleInputFocus() {
    setIsFocused(true);
  }
  
  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  async function handleSubmit() {
    if(!name)
      return Alert.alert('Digite o seu nome 😃');

    try {
      await AsyncStorage.setItem('@PlantManager:user', name);

      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelection'
      });
    } catch (err) {
      Alert.alert('Não foi possível salvar seu nome')
    }
  }

  return(
    <Container>
      <KAvoidingView
        behavior={Platform.OS === 'ios' ? 'height' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <TextWrapper>
                <Emoji>
                  {isFilled ? '😎' : '😄'}
                </Emoji>

                <Title>
                  Como podemos {'\n'}
                  chamar você?
                </Title>
              </TextWrapper>

              <UsernameInput 
                isFocused={isFocused}
                isFilled={isFilled}
                placeholder="Digite seu nome"
                
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />

              <ButtonWrapper>
                <Button onPress={handleSubmit} title="Confirmar" />
              </ButtonWrapper>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KAvoidingView>
    </Container>
  );
}