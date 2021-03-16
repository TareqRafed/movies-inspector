/*
  declaring or editing routes should only be here.
*/

import React, { FC } from 'react';

// Stack to Handle navigation Library
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// Pages
import HomeScreen from '../../Home/ts/home';
import DetailsScreen from '../../details/ts/details';






const App: React.FC = () => {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{ title: 'Movies' }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ title: 'Details' }} name="Movies" component={DetailsScreen} />
      </Stack.Navigator>
    );
  }


export default App;