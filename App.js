import React from "expo-status-bar";
import { StatusBar} from 'react-native'

import { NavigationContainer } from '@react-navigation/native-stack'
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#38A69D" barStyle="light-content" />
      <Routes/>
    </NavigationContainer>
  );
}

