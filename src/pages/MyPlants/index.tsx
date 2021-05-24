import React, { useContext, useEffect, useState } from 'react';
import { Header } from "../../components/Header";
import { Plant } from '../../types/types';
import { PlantsContext } from '../../contexts/PlantsContext';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Load } from '../../components/Load';
import { SecondaryPlantCard } from '../../components/SecondaryPlantCard';
import { Alert } from 'react-native';

import waterdropImg from '../../assets/waterdrop.png';

import { 
  Container,
  Spotlight,
  SpotlightImage,
  SpotlightText,
  Plants,
  PlantTitle,
  PlantList,
} from "./styles";

export function MyPlants() {
  const { loadPlant, removePlant } = useContext(PlantsContext);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState('');

  useEffect(() => {
    async function loadStoragedData() {
      const storagedPlants = await loadPlant();

      const nextTimeToWater = formatDistance(
        new Date(storagedPlants[0].dateTimePickerNotification).getTime(),
        new Date().getTime(), { locale: ptBR }
      );
      setNextWatered(`Não esqueça de regar a ${storagedPlants[0].name} às ${nextTimeToWater}`);

      setPlants(storagedPlants);
      setIsLoading(false);
    }
    loadStoragedData();
  }, []);

  function handleRemovePlant(plant: Plant) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      {
        text: "Não 👀",
        style: "cancel"
      },
        {
          text: "Sim 👍",
          onPress: async () => {
            try {
              removePlant(plant.id);

              setPlants(oldState => (
                oldState.filter((item) => item.id !== plant.id)
              ));
            } catch (err) {
              Alert.alert('Não foi possível remover a plantinha.')
            }
          }
        }
    ])
  }

  if(isLoading)
    return <Load />
  return(
    <Container>
      <Header />

      <Spotlight>
        <SpotlightImage source={waterdropImg} />
        <SpotlightText>{nextWatered}</SpotlightText>
      </Spotlight>

      <Plants>
        <PlantTitle>Próximas a regar</PlantTitle>

        <PlantList 
          data={plants}
          keyExtractor={(plant: Plant) => String(plant.id)}
          renderItem={({ item: plant }) => (
            <SecondaryPlantCard
              data={plant}
              handleRemovePlant={() => {handleRemovePlant(plant)}}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </Plants>
    </Container>
  );
}