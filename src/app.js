import * as React from 'react';
import { View, Text,SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


import DetailView from './views/detail'
import SearchView from './views/search'
import FavoriteView from './views/favorite'
import HistoryView from './views/history'
import TabBar from './components/tab-bar';
import Box from './components/box';

import theme from './utils/theme'

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Ara" component={SearchView} />
      <HomeStack.Screen name="Detay" component={DetailView} />
    </HomeStack.Navigator>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} as={SafeAreaView}>
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Ara" tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="Geçmiş" component={HistoryView} />
            <Tab.Screen name="Ara" component={SearchStack} />
            <Tab.Screen name="Favori" component={FavoriteView} />
          </Tab.Navigator>
        </NavigationContainer>
      </Box>
    </ThemeProvider>
  )
}

export default App
