import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns/esm";
import { createContext, ReactNode } from "react";
import { Plant, StoragedPlants } from "../types/types";
import * as Notifications from 'expo-notifications';

interface PlantsContextData {
  storagePlant: (plant: Plant) => Promise<void>;
  loadPlant: () => Promise<Plant[]>;
  removePlant: (id: number) => void;
}

interface PlantsProviderProps {
  children: ReactNode;
}

export const PlantsContext = createContext({} as PlantsContextData);

export function PlantsProvider({ children }: PlantsProviderProps) {

  async function storagePlant(plant: Plant): Promise<void> {
    try {
      const nextTime = new Date(plant.dateTimePickerNotification);
      const currentTime = new Date();

      const { repeat_every, times } = plant.frequency;

      if(repeat_every === 'week') {
        const interval = Math.trunc(7 / times);
        nextTime.setDate(currentTime.getDate() + interval);
      } else {
        nextTime.setDate(nextTime.getDate() + 1);
      }

      const seconds = Math.abs(Math.ceil((currentTime.getTime() - nextTime.getTime()) / 1000));

      const notificationId = await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Heeey 🌱',
          body: `Está na hora de cuidar da sua ${plant.name}`,
          sound: true,
          priority: Notifications.AndroidNotificationPriority.HIGH,
          data: {
            plant
          },
        },
        trigger: {
          seconds: seconds < 60 ? 60 : seconds,
          repeats: true,
        },
      });

      const data = await AsyncStorage.getItem('@PlantManager:plants');
      const oldPlants = data ? (JSON.parse(data) as StoragedPlants) : {};
  
      const newPlant = {
        [plant.id]: {
          data: plant,
          notificationId
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

  async function removePlant(id: number): Promise<void> {
    const data = await AsyncStorage.getItem('@PlantManager:plants');
    const plants = data ? (JSON.parse(data) as StoragedPlants) : {};

    await Notifications.cancelScheduledNotificationAsync(plants[id].notificationId);
    delete plants[id];

    await AsyncStorage.setItem('@PlantManager:plants', JSON.stringify(plants));
  }

  return(
    <PlantsContext.Provider value={{ storagePlant, loadPlant, removePlant }}>
      {children}
    </PlantsContext.Provider>
  );
}