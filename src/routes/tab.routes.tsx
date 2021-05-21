import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PlantSelection } from '../pages/PlantSelection';
import { MaterialIcons } from '@expo/vector-icons';
import { MyPlants } from '../pages/MyPlants';

const AppTabs = createBottomTabNavigator();

const TabRoutes = () => {
  return(
    <AppTabs.Navigator
      tabBarOptions={{ activeTintColor: '#32B768', inactiveTintColor: '#52665A', labelPosition: 'beside-icon',
      style: {
        paddingVertical: 20, paddingBottom: 15, height: 88
      }}}
    >
      <AppTabs.Screen 
        name="Nova planta" 
        component={PlantSelection} 
        options={{ tabBarIcon: (({ size, color }) => (
          <MaterialIcons name='add-circle-outline' size={size} color={color} />
        ))}} 
      />
      
      <AppTabs.Screen 
        name="Minhas plantas" 
        component={MyPlants} 
        options={{ tabBarIcon: (({ size, color }) => (
          <MaterialIcons name='format-list-bulleted' size={size} color={color} />
        ))}} 
      />
    </AppTabs.Navigator>
  );
}

export default TabRoutes;