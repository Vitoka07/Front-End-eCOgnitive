import { useNavigation } from '@react-navigation/native';
import Texto from './componentes/Texto';
import React, { useState } from "react";
import { Image, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Cadastro from "./Cadastro";
import { styles } from './estilosCadastroInd';
import { ParametrosTelas } from './ParametrosTelas';
import axios from 'axios';
import Coletor from './coletor';

export default function CadastroColetor(props: { nome: string, tipo: string, quantidade: number }) {
    const [coletor, setColetor] = useState<Coletor>(new Coletor(0, "", "", 0));
    const [input, setInput] = useState('');
    const [hidePass, setHidePass] =  useState(true);



    function Buscarcoletor(){
        axios.get('http://localhost:3000/coletor').then(
            response => {
                console.log(response.data)
            }
        )
    }
    
    async function Criarcoletor(){
        await axios.post("http://localhost:3000/coletor/criar", coletor)
    }




    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                <TouchableOpacity style={styles.container} onPress={()=>{ navigation.navigate("PrimeiroAcesso" as never)}}>
                    <Image style={styles.setaEsquerda} source={require("./assets/arrowLeft.png")}/>  
                </TouchableOpacity>
                <View>
                    <Texto style={styles.userTexto}>Cadastro de Coletores</Texto> 
                </View>
            </View>



            <View style={styles.conteudo}>

                <View style={styles.campo}>
                    <Texto style={styles.fonte1}>Nome do Coletor</Texto>
                    <Texto style={{color: 'red'}}> *</Texto>
                </View>
                <View style={styles.inputArea}>
                        <TextInput
                        onChangeText={(text) => { coletor.nome = text; }}
                        style={styles.input}
                        placeholder="Digite o nome do coletor"
                        />
                </View>  

                <View style={styles.campo}>
                    <Texto style={styles.fonte1}>Tipo do Coletor</Texto>
                    <Texto style={{color: 'red'}}> *</Texto>
                </View>
                <View style={styles.inputArea}>
                        <TextInput
                        onChangeText={(text) => { coletor.tipo = text; }}
                        style={styles.input}
                        placeholder="Digite o tipo do coletor"
                        />
                </View>  

                <View style={styles.campo}>
                    <Texto style={styles.fonte1}>Quantidade de Coletores</Texto>
                    <Texto style={{color: 'red'}}> *</Texto>
                </View>
                <View style={styles.inputArea}>
                        <TextInput
                        onChangeText={(text) => { coletor.quantidade = parseInt(text); }}
                        style={styles.input}
                        placeholder="Digite a quantidade do coletor"
                        />
                </View>               



            </View>



            <View style={styles.botaoCentro}>

                <TouchableOpacity style={styles.botaoArea}onPress={()=>{ navigation.navigate("BemVindo" as never)}}
                 onPressIn={Criarcoletor}
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