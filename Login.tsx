import { useNavigation } from '@react-navigation/native';
import Texto from './componentes/Texto';
import React, { useState } from "react";
import { Image, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Cadastro from "./Cadastro";
import { styles } from './estilos';
import { ParametrosTelas } from './ParametrosTelas';

export default function Login() {

    const navigation = useNavigation();
    const [input, setInput] = useState('');
    const [hidePass, setHidePass] =  useState(true);

    return (
        <View style={styles.container}>
           <View style={styles.topo}>
                <TouchableOpacity style={styles.container} onPress={()=>{ navigation.navigate("BemVindo" as never)}}>
                    <Image style={styles.setaEsquerda} source={require("./assets/arrowLeft.png")}/>  
                </TouchableOpacity>
                <Texto style={styles.loginTitulo}>Login</Texto>    
            </View>
            <Image style={styles.logo} source={require("./assets/icon.png")}/>    

            <View style={styles.boxLogin}>
                <Texto style={styles.emailSenha}>E-MAIL</Texto>
                <View style={styles.inputArea}>
                <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                />
                </View>  

                 <Texto style={styles.emailSenha} >SENHA</Texto>

                <View style={styles.inputArea}>
                    <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    value={input}
                    onChangeText={(texto) => setInput(texto)}
                    secureTextEntry={hidePass}
                    />

                    <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}/>

                </View>
                <TouchableOpacity>
                    <Texto style={styles.esqueciSenha}>Esqueci a senha</Texto>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoArea} onPress={()=>{ navigation.navigate("Editarcoletor" as never)}}>

                    <Texto style={styles.botao}>ENTRAR</Texto>
                </TouchableOpacity>
                <Texto style={styles.ou}>Ou</Texto>
                <TouchableOpacity style={styles.botaoAreaFacebookGoogle}>
                    <Image style={styles.iconFG} source={require("./assets/fb-icon.png")}/>    
                    <Texto style={styles.botaoFG}>Entrar com o Facebook</Texto>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoAreaFacebookGoogle}>
                    <Image style={styles.iconFG} source={require("./assets/google-icon.png")}/>    
                    <Texto style={styles.botaoFG}>Entrar com o Google</Texto>
                </TouchableOpacity>
            </View>
        </View>
    );
}