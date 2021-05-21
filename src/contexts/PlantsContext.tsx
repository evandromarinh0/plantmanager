import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns/esm";
import { createContext, ReactNode } from "react";
import { Plant, StoragedPlants } from "../types/types";

interface PlantsContextData {
  storagePlant: (plant: Plant) => Promise<void>;
  loadPlant: () => Promise<Plant[]>;
}

interface PlantsProviderProps {
  children: ReactNode;
}

export const PlantsContext = createContext({} as PlantsContextData);

export function PlantsProvider({ children }: PlantsProviderProps) {

  async function storagePlant(plant: Plant): Promise<void> {
    try {
      const data = await AsyncStorage.getItem('@PlantManager:plants');
      const oldPlants = data ? (JSON.parse(data) as StoragedPlants) : {};
  
      const newPlant = {
        [plant.id]: {
          data: plant
        }
      }
  
      await AsyncStorage.setItem('@PlantManager:plants', JSON.stringify({
        ...newPlant,
        ...oldPlants
      }));
    } catch (err) {
      throw new Error(err);
    }
  }

  async function loadPlant(): Promise<Plant[]> {
    try {
      const data = await AsyncStorage.getItem('@PlantManager:plants');
      const plants = data ? (JSON.parse(data) as StoragedPlants) : {};

      const plantSorted = Object.keys(plants).map(plant => {
        return {
          ...plants[plant].data, 
          hour: format(new Date(plants[plant].data.dateTimePickerNotification), 'HH:mm')
        }
      }).sort((a, b) => 
        Math.floor(new Date(a.dateTimePickerNotification).getTime() / 1000) -
        Math.floor(new Date(b.dateTimePickerNotification).getTime() / 1000)
      )
      
      return plantSorted;
    } catch (err) {
      throw new Error(err);
    }
  }

  return(
    <PlantsContext.Provider value={{ storagePlant, loadPlant }}>
      {children}
    </PlantsContext.Provider>
  );
}