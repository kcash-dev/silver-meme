import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';

import BottomTabNavigator from './src/navigators/tabNavigator/TabNavigator';
import SecondaryNavigator from './src/navigators/stackNavigator/SecondaryNavigator';

import { Provider } from './src/context/StudentContext';
import { createStackNavigator } from "@react-navigation/stack";



const MainStack = createStackNavigator();

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs()
  }, [])

  return (
    <Provider>
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen name="Main" component={ BottomTabNavigator } />
          <MainStack.Screen name="SecondaryScreens" component={ SecondaryNavigator } />
        </MainStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;