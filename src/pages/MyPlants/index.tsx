import React, { useContext, useEffect, useState } from 'react';
import { Header } from "../../components/Header";
import { Plant } from '../../types/types';
import { PlantsContext } from '../../contexts/PlantsContext';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { SecondaryPlantCard } from '../../components/SecondaryPlantCard';


import waterdropImg from '../../assets/waterdrop.png';

import { 
  Container,
  Spotlight,
  SpotlightImage,
  SpotlightText,
  Plants,
  PlantTitle,
  PlantList,
  PlantName
} from "./styles";

export function MyPlants() {
  const { loadPlant } = useContext(PlantsContext);
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
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </Plants>
    </Container>
  );
}