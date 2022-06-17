import { useNavigation } from '@react-navigation/native';
import Texto from './componentes/Texto';
import React, { useState } from "react";
import { Image, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Login from './Login';
import { styles } from './estilosBemVindo';
import { ParametrosTelas } from './ParametrosTelas';

export default function BemVindo() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.topo}>
                <TouchableOpacity style={styles.container} onPress={()=>{ navigation.navigate("Login" as never)}}>
                    <Image style={styles.setaEsquerda} source={require("./assets/arrowLeft.png")}/>  
                </TouchableOpacity>
                <View>
                    <Texto style={styles.userTexto}>Bem-Vindo!</Texto> 
                </View>
            </View>     
            <View style={styles.meioEspaco}>
                <View style={styles.meio}>
                    <Image style={styles.primeiroAcesso} source={require("./assets/bemvindo.png")}/>
                </View>

                <View style={styles.meio}>
                    <Texto style={styles.perfilTexto}>Selecione o tipo de login</Texto>
                </View>
            </View> 


            <View style={styles.botaoArea}>

                <TouchableOpacity style={styles.botao} onPress={()=>{ navigation.navigate("Login" as never)}}>
                    <Texto style={styles.botaoTexto}>PATROCINADOR</Texto>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={()=>{ navigation.navigate("Login" as never)}}>
                    <Texto style={styles.botaoTexto}>INDÚSTRIA</Texto>
                </TouchableOpacity>
                
                <View style={styles.cadastrar}>
                    <Texto style={styles.perfilTexto}>Ainda não tem Login?</Texto>
                    <Texto style={styles.cadastro}>CADASTRE-SE</Texto>
                </View>
            </View>






        </View>
    );
}