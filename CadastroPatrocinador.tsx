import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import Texto from './componentes/Texto';
import React, { useEffect, useState } from "react";
import { Image, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Cadastro from "./Cadastro";
import { styles } from './estilosCadastro';
import { ParametrosTelas } from './ParametrosTelas';
import api from './services/api';
import Routes from './Routes';
import { round } from 'react-native-reanimated';
import axios from 'axios';
import User from './User';
import Post from './Post';

export default function CadastroPatrocinador(props: { nome: string, razaosocial: string, CNPJ: string, email:string, senha: string }) {
    const [user, setUser] = useState<User>(new User(0, "", "", "", "", ""));
    const [input, setInput] = useState('');
    const [hidePass, setHidePass] =  useState(true);

    const routes = useRoute<RouteProp<ParametrosTelas, "CadastroPatrocinador">>();
    const [posts, setPosts] = useState<Post[]>([]);

    async function GetPosts(uri: string) {
        const { data } = await axios.get<Post[]>(uri);
        setPosts(data);
        console.log(data);
    }
    const effect = useEffect(() => {
        GetPosts("http://localhost:3000/usuario");
    }, []);


    
    async function Criar(){
        await axios.post("http://localhost:3000/usuario/criar", user)
    }


    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                <TouchableOpacity style={styles.container} onPress={()=>{ navigation.navigate("PrimeiroAcesso" as never)}}>
                    <Image style={styles.setaEsquerda} source={require("./assets/arrowLeft.png")}/>  
                </TouchableOpacity>
                <View>
                    <Texto style={styles.userTexto}>Cadastro do Patrocinador</Texto> 
                </View>
            </View>



            <View style={styles.conteudo}>

                <View style={styles.campo}>
                    <Texto style={styles.fonte2}>Nome do Patrocinador</Texto>
                    <Texto style={{color: 'red'}}> *</Texto>
                </View>
                <View style={styles.inputArea}>
                        <TextInput
                        onChangeText={(text) => { user.nome = text; }}
                        style={styles.input}
                        placeholder="Digite o nome do patrocinador"                        
                        
                        />
                </View>  

                <View style={styles.campo}>
                    <Texto style={styles.fonte2}>Razão Social</Texto>
                    <Texto style={{color: 'red'}}> *</Texto>
                </View>
                <View style={styles.inputArea}>
                        <TextInput
                        onChangeText={(text) => { user.razaosocial = text; }}
                        style={styles.input}
                        placeholder="Digite a razão social"
                        />
                </View>  

                <View style={styles.campo}>
                    <Texto style={styles.fonte2}>CNPJ</Texto>
                    <Texto style={{color: 'red'}}> *</Texto>
                </View>
                <View style={styles.inputArea} >
                        <TextInput
                        onChangeText={(text) => { user.CNPJ = text; }}
                        style={styles.input}
                        placeholder="Digite o CNPJ"
                        />
                </View>  

                <View style={styles.campo}>
                    <Texto style={styles.fonte2}>E-mail</Texto>
                    <Texto style={{color: 'red'}}> *</Texto>
                </View>
                <View style={styles.inputArea}>
                        <TextInput
                        onChangeText={(text) => { user.email = text; }}
                        style={styles.input}
                        placeholder="Digite o e-mail"
                        />
                </View>  

                <View style={styles.campo}>
                    <Texto style={styles.fonte2} >Senha</Texto>
                    <Texto style={{color: 'red'}}> *</Texto>
                </View>

                    <View style={styles.inputArea}>
                    <TextInput
                        onChangeText={(text) => { user.senha = text; }}
                        style={styles.input}
                        placeholder="Digite sua senha"
                        />
                        

                        <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}/>

                    </View> 
                    
                    <Texto style={{fontSize:11, marginLeft: 40, color: 'red'}}>Mínimo 8 caracteres</Texto>

            </View>



            <View style={styles.botaoCentro}>

                <TouchableOpacity style={styles.botaoArea}
                onPress={()=>{ navigation.navigate("BemVindo" as never)}}
                onPressIn={Criar}
                
                >        
                    <Texto style={styles.botao}>PRONTO</Texto>
                    
                </TouchableOpacity>


                <Texto style={{marginTop: 15, fontSize:11}}>Por registro, eu concordo com os</Texto>
                <View style={{flexDirection: 'row'}}>
                    <Texto style={styles.textoUnderline}>Termos e Condições</Texto>
                    <Texto style={{fontSize:11, color:`black`}}> e </Texto>
                    <Texto style={styles.textoUnderline}>Política de Privacidade</Texto>
                </View>

            </View>     



        </View>
        );
    }