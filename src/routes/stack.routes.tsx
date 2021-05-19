import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelection } from '../pages/PlantSelection';

const Stack = createStackNavigator();

const SRoutes: React.FC = () => {
  return(
    <Stack.Navigator
      headerMode='none'
      screenOptions={{ cardStyle: {
        backgroundColor: '#fff'
      }}}
    >
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='UserIdentification' component={UserIdentification} />
      <Stack.Screen name='Confirmation' component={Confirmation} />
      <Stack.Screen name='PlantSelection' component={PlantSelection} />
    </Stack.Navigator>
  );
}

export default SRoutes;