import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MapScreen} from './screens/map.screen';
import {RouteScreen} from './screens/route.screen';
import {LinesScreen} from './screens/line.screen';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Mapa" component={MapScreen} />
        <Tab.Screen name="Rota" component={RouteScreen} />
        <Tab.Screen name="Linhas" component={LinesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
