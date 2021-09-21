import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {LinesScreen} from './screens/line.screen';
import {StopScreen} from './screens/stops.screen';

import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Linhas"
          component={LinesScreen}
          options={{
            tabBarIcon() {
              return <Icon name="bus" size={20} color="#999" />;
            },
          }}
        />
        <Tab.Screen
          name="Paradas"
          component={StopScreen}
          options={{
            tabBarIcon() {
              return <Icon name="ban" size={20} color="#999" />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
