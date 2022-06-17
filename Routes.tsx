import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Login from './Login';
import PrimeiroAcesso from './PrimeiroAcesso';
import CadastroPatrocinador from './CadastroPatrocinador';
import CadastroIndustria from './CadastroIndustria';
import CadastroColetor from './CadastroColetor';
import BemVindo from './BemVindo';
import { ParametrosTelas } from './ParametrosTelas';
import EditarColetor from './Editarcoletor';

export default function Routes(){
    const Stack = createStackNavigator<ParametrosTelas>();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="PrimeiroAcesso" component={PrimeiroAcesso} options={{header: () => null}}></Stack.Screen>
                <Stack.Screen name="CadastroPatrocinador" component={CadastroPatrocinador} options={{header: () => null}}></Stack.Screen>
                <Stack.Screen name="CadastroIndustria" component={CadastroIndustria} options={{header: () => null}}></Stack.Screen>
                <Stack.Screen name="CadastroColetor" component={CadastroColetor} options={{header: () => null}}></Stack.Screen>
                <Stack.Screen name="BemVindo" component={BemVindo} options={{header: () => null}}></Stack.Screen>
                <Stack.Screen name="Login" component={Login} options={{header: () => null}}></Stack.Screen>
                <Stack.Screen name="Editarcoletor" component={EditarColetor} options={{header: () => null}}></Stack.Screen>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}