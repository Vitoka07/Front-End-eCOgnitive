import React from "react";
import { View } from 'react-native';

import Routes from "./Routes";
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

export default function App() {
  const[fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fonteCarregada){
    return <View/>
  }

  return (
    <Routes></Routes>
  );
}