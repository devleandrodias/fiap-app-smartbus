import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MapScreen} from './screens/map.screen';
import {LinesScreen} from './screens/line.screen';
import {RouteScreen} from './screens/route.screen';

import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Mapa"
          component={MapScreen}
          options={{
            tabBarIcon() {
              return <Icon name="map-marker" size={20} color="#999" />;
            },
          }}
        />
        <Tab.Screen
          name="Rota"
          component={RouteScreen}
          options={{
            tabBarIcon() {
              return <Icon name="map-signs" size={20} color="#999" />;
            },
          }}
        />
        <Tab.Screen
          name="Linhas"
          component={LinesScreen}
          options={{
            tabBarIcon() {
              return <Icon name="bus" size={20} color="#999" />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
