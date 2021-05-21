import React, { useContext, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { SvgFromUri } from "react-native-svg";
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { Alert, Platform } from 'react-native';
import { format, isBefore } from 'date-fns';
import { Button } from "../../components/Button";
import { Plant } from '../../types/types';
import { PlantsContext } from '../../contexts/PlantsContext';

import waterdropImg from '../../assets/waterdrop.png';

import { 
  Container,
  PlantInfo,
  PlantName,
  PlantDescription,
  Controller,
  TipContainer,
  PlantImage,
  TipText,
  Reminder,
  AndroidDateTimePicker,
  AndroidDateTimePickerText
} from "./styles";

interface Params {
  plant: Plant;
}

export function PlantDetails() {
  const { storagePlant } = useContext(PlantsContext);
  const navigation = useNavigation();
  const route = useRoute();
  const { plant } = route.params as Params;

  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDateTimePicker, setShowDateTimePicker] = useState(Platform.OS === 'ios');

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if(Platform.OS === 'android') {
      setShowDateTimePicker(oldState => !oldState);
    }

    if(dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert('Ops! Já passamos deste horário.');
    }

    if(dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  function handleOpenAndroidDateTimePicker() {
    setShowDateTimePicker(oldState => !oldState);
  }

  async function handleStoragePlant() {
    try {
      await storagePlant({
        ...plant,
        dateTimePickerNotification: selectedDateTime
      })

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle: 'Fique tranquilo, sempre vamos lembrar você de cuidar das suas plantinhas com muito cuidado',
        buttonTitle: 'Muito obrigado',
        icon: 'hug',
        nextScreen: 'MyPlants'
      });
    } catch (err) {
      Alert.alert('Ops! Já passamos deste horário.');
    }
  }

  return(
    <Container>
    <PlantInfo>
      <SvgFromUri uri={plant.photo} height={150} width={150} />
      <PlantName>{plant.name}</PlantName>
      <PlantDescription>{plant.about}</PlantDescription>
    </PlantInfo>

    <Controller>
      <TipContainer>
        <PlantImage source={waterdropImg} />
        <TipText>{plant.water_tips}</TipText>
      </TipContainer>

      <Reminder>
        Escolha o melhor horário para ser lembrado:
      </Reminder>

      { showDateTimePicker && (
        <DateTimePicker 
          value={selectedDateTime}
          mode="time"
          display="default"
          onChange={handleChangeTime}
        />
      )}

      { Platform.OS === 'android' && (
        <AndroidDateTimePicker onPress={handleOpenAndroidDateTimePicker}>
          <AndroidDateTimePickerText>{`⏰ ${format(selectedDateTime, 'HH:mm')}`}</AndroidDateTimePickerText>
        </AndroidDateTimePicker>
      )}

      <Button onPress={handleStoragePlant} title="Cadastrar planta" />
    </Controller>
    </Container>
  );
}

function PlantContext(PlantContext: any): {} {
  throw new Error('Function not implemented.');
}
