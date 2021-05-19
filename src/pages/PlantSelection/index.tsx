import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { EnvironmentButton } from '../../components/EnvironmentButton';
import { Header } from '../../components/Header';
import { Load } from '../../components/Load';
import { PrimaryPlantCard } from '../../components/PrimaryPlantCard';
import api from '../../services/api';

import { 
  Container,
  Title,
  Subtitle,
  HeaderWrapper,
  EnvironmentSection,
  EnvironmentList,
  PlantCards,
  PlantList,
} from "./styles";

export interface Environment {
  key: string;
  title: string;
}

export interface Plant {
  id: number;
  name: string;
  photo: string;
  about: string;
  water_tips: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  }
}

export function PlantSelection() {
  const [environments, setEnvironments] = useState<Environment[]>([]);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);
  const [selectedEnvironment, setSelectedEnvironment] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [renderMore, setRenderMore] = useState(true);
  const [renderedAll, setRenderedAll] = useState(false);

  async function getPlants() {
    const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

    if(!data)
      return setIsLoading(true);
    if(page > 1) {
      setPlants(oldState => [...oldState, ...data]);
      setFilteredPlants(oldState => [...oldState, ...data])
    } else {
      setPlants(data);
      setFilteredPlants(data)
    }
    setIsLoading(false);
    setRenderMore(false);
  }

  function handleSelectedEnvironment(environment: string) {
    setSelectedEnvironment(environment);

    if(environment === 'all') {
      return setFilteredPlants(plants);
    } else {
      const filtered = plants.filter(plant => plant.environments.includes(environment));

      setFilteredPlants(filtered);
    }

  }

  function handleRenderMore(range: number) {
    if(range < 1)
      return;
    setRenderMore(true);
    setPage(oldState => oldState + 1);

    getPlants();
  }

  useEffect(() => {
    async function getEnvironment() {
      const { data } = await api.get('plants_environments?_sort=title&_order=asc');

      setEnvironments([
        {
          key: 'all',
          title: 'Todos'
        }, ...data
      ]);
    }
    getEnvironment();
  }, []);

  useEffect(() => {
    getPlants();
  }, []);

  if(isLoading)
    return <Load />
  return(
    <Container>
      <HeaderWrapper>
        <Header />

        <Title>Em qual ambiente</Title>
        <Subtitle>você quer colocar sua planta?</Subtitle>
      </HeaderWrapper>

      <EnvironmentSection>
        <EnvironmentList
          data={environments}
          keyExtractor={(environment) => environment.key}
          renderItem={({ item: environment }) => (
            <EnvironmentButton 
              onPress={() => handleSelectedEnvironment(environment.key)}
              isActive={environment.key === selectedEnvironment}
              title={environment.title} 
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ 
            height: 40, justifyContent: 'center', paddingBottom: 5,
            marginVertical: 32, paddingRight: 48, marginLeft: 32
          }}
        />
      </EnvironmentSection>

      <PlantCards>
        <PlantList
          data={filteredPlants}
          keyExtractor={(plant) => plant.id}
          renderItem={({ item: plant }) => (
            <PrimaryPlantCard data={plant} />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleRenderMore(distanceFromEnd)}
          ListFooterComponent={ renderMore ? <ActivityIndicator color="#32B768" /> : <></> }
        />
      </PlantCards>
    </Container>
  );
}