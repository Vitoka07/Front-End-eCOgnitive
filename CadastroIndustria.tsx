import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import Texto from './componentes/Texto';
import React, { useEffect, useState } from "react";
import { Image, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Cadastro from "./Cadastro";
import { styles } from './estilosCadastroInd';
import { ParametrosTelas } from './ParametrosTelas';
import User from "./User"
import Industria from './Industria';
import axios from 'axios';
import api from './services/api';
import Post from './Post';


export default function CadastroIndustria(props: { nome: string, razaosocial: string, CNPJ: string, CEP: string, email:string, senha: string }) {
    const [industria, setIndustria] = useState<Industria>(new Industria(0, "", "", "", "", "", ""));
    const [input, setInput] = useState('');
    const [hidePass, setHidePass] =  useState(true);


    const routes = useRoute<RouteProp<ParametrosTelas, "CadastroIndustria">>();
    const [posts, setPosts] = useState<Post[]>([]);

    async function GetPosts(uri: string) {
        const { data } = await axios.get<Post[]>(uri);
        setPosts(data);
        console.log(data);
    }
    const effect = useEffect(() => {
        GetPosts("http://localhost:3000/industria");
    }, []);
    

    async function Criarind(){
        await axios.post("http://localhost:3000/industria/criar", industria)
    }


    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                <TouchableOpacity style={styles.container} onPress={()=>{ navigation.navigate("PrimeiroAcesso" as never)}}>
                    <Image style={styles.setaEsquerda} source={require("./assets/arrowLeft.png")}/>  
                </TouchableOpacity>
                <View>
                    <Texto style={styles.userTexto}>Cadastro da Indústria</Texto> 
                </View>
            </View>



            <View style={styles.conteudo}>

                <View style={styles.campo}>
                    <Texto style={styles.fonte}>Nome da Indústria</Texto>
                    <Texto style={{color: 'red'}}> *</Texto>
                </View>
                <View style={styles.inputArea}>
                        <TextInput
                        onChangeText={(text) => { industria.nome = text; }}
                        style={styles.input} 
                        placeholder="Digite o nome da insústria"
                        />
                </View>  

                <View style={styles.campo}>
                    <Texto style={styles.fonte}>Razão Social</Texto>
                    <Texto style={{color: 'red'}}> *</Texto>
                </View>
                <View style={styles.inputArea}>
                        <TextInput
                        onChangeText={(text) => { industria.razaosocial = text; }}
                        style={styles.input}
                        placeholder="Digite a razão social"
                        />
                </View>  

                <View style={styles.campo}>
                    <Texto style={styles.fonte} >CNPJ</Texto>
                    <Texto style={{color: 'red'}}> *</Texto>
                </View>
                <View style={styles.inputArea}>
                        <TextInput
                        onChangeText={(text) => { industria.CNPJ = text; }}
                        style={styles.input}
                        placeholder="Digite o CNPJ"
                        />
                </View>  

                <View style={styles.campo}>
                    <Texto style={styles.fonte}>E-mail</Texto>
                    <Texto style={{color: 'red'}}> *</Texto>
                </View>
                <View style={styles.inputArea}>
                        <TextInput
                        onChangeText={(text) => { industria.email = text; }}
                        style={styles.input}
                        placeholder="Digite o e-mail"
                        />
                </View>  

                <View style={styles.campo}>
                    <Texto style={styles.fonte}>CEP</Texto>
                    <Texto style={{color: 'red'}}> *</Texto>
                </View>
                <View style={styles.inputArea}>
                        <TextInput
                        onChangeText={(text) => { industria.CEP = text; }}
                        style={styles.input}
                        placeholder="Digite o CEP da indústria"
                        />
                </View>  

                <View style={styles.campo}>
                    <Texto style={styles.fonte}>Senha</Texto>
                    <Texto style={{color: 'red'}}> *</Texto>
                </View>

                    <View style={styles.inputArea}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => { industria.senha = text; }}
                        placeholder="Digite sua senha"
                       
                        />

                        <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}/>

                    </View> 
                    
                    <Texto style={{fontSize:11, marginLeft: 40, color: 'red'}}>Mínimo 8 caracteres</Texto>

            </View>



            <View style={styles.botaoCentro}>

                <TouchableOpacity style={styles.botaoArea}
                onPress={()=>{ navigation.navigate("CadastroColetor" as never)}}
                onPressIn={Criarind}
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