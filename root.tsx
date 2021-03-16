/*
 This is the Root file,
 all providers (Such as React navigation) will be wrapping the App Componenet
*/

import React from 'react';

// React material
import { Provider as PaperProvider } from 'react-native-paper';

// React navigation
import { NavigationContainer } from '@react-navigation/native';

// Componenets
import App from './componenets/App/ts/App';

const Root = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
          <App />
      </PaperProvider>
    </NavigationContainer>
  );
}



export default Root;