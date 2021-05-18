import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import SRoutes from './src/routes/stack.routes';

import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <SRoutes />
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}
