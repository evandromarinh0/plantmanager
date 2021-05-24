import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';

import SRoutes from './src/routes/stack.routes';

import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import { PlantsProvider } from './src/contexts/PlantsContext';
import { Plant } from './src/types/types';

export default function App() {

  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // useEffect(() => {
  //   const subscription = Notifications.addNotificationReceivedListener(
  //     async notification => {
  //       const data = notification.request.content.data.plant as Plant;
  //       console.log(data);
  //     }
  //   );
  //     return () => subscription.remove();
  // }, []);

  return (
    <PlantsProvider>
      <NavigationContainer>
        <SRoutes />
        <StatusBar style="dark" />
      </NavigationContainer>
    </PlantsProvider>
  );
}
