import { useNavigation } from '@react-navigation/native';
import Texto from './componentes/Texto';
import React, { useState } from "react";
import { Image, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Login from './Login';
import { styles } from './estilosPrimeiroAcesso';
import { ParametrosTelas } from './ParametrosTelas';

export default function PrimeiroAcesso() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View>
                <Image style={styles.userIcon} source={require("./assets/User.png")}/>
            </View>
            <View style={styles.topo}>
                <TouchableOpacity style={styles.container} onPress={()=>{ navigation.navigate("Login" as never)}}>
                    <Image style={styles.setaEsquerda} source={require("./assets/arrowLeft.png")}/>  
                </TouchableOpacity>
                <View>
                    <Texto style={styles.userTexto}>Primeiro Acesso</Texto> 
                </View>
            </View>     
            <View style={styles.meioEspaco}>
                <View style={styles.meio}>
                    <Image style={styles.primeiroAcesso} source={require("./assets/primeiroAcesso1.png")}/>
                </View>

                <View style={styles.meio}>
                    <Texto style={styles.perfilTexto}>Selecione o tipo de perfil</Texto>
                </View>
            </View> 


            <View style={styles.botaoArea}>

                <TouchableOpacity style={styles.botao} onPress={()=>{ navigation.navigate("CadastroPatrocinador" as never)}}>
                    <Texto style={styles.botaoTexto}>PATROCINADOR</Texto>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={()=>{ navigation.navigate("CadastroIndustria" as never)}}>
                    <Texto style={styles.botaoTexto}>INDÚSTRIA</Texto>
                </TouchableOpacity>
            </View>



        </View>
    );
}