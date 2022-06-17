import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import Texto from './componentes/Texto';
import React, { useEffect, useState } from "react";
import { Image, View, TextInput, ScrollView } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Cadastro from './Cadastro';
import { styles } from './estilosEditarColetor';
import Coletor from './coletor';
import axios from 'axios';
import { ParametrosTelas } from './ParametrosTelas';
import Post from './Post';
import PostComponent from './Postcomponent';

export default function EditarColetor(props: { nome: string, tipo: string, quantidade: number }) {
    const [coletor, setColetor] = useState<Coletor>(new Coletor(0, "", "", 1));

    const routes = useRoute<RouteProp<ParametrosTelas, "Editarcoletor">>();
    const [posts, setPosts] = useState<Post[]>([]);
    
    const [input, setInput] = useState('');
    const [hidePass, setHidePass] =  useState(true);

    
    async function GetPosts(uri: string) {
        const { data } = await axios.get<Post[]>(uri);
        setPosts(data);
        console.log(data);
    }
    const effect = useEffect(() => {
        GetPosts("http://localhost:3000/coletor");
    }, []);
    
    
    
    
     async function Deletarcoletor(){
        await axios.delete("http://localhost:3000/coletor/10" ).then(
            response => {
                alert("Coletor Deletado");
                (response.data)
            }
        )
    }

    async function Editarcoletor(){
        await axios.put("http://localhost:3000/coletor/alterar", coletor).then(
            response => {
                alert("Coletor Editado com sucesso");
                console.log(response.data)
            }
        )
    }


    const navigation = useNavigation();
    return (
        <View style={styles.container}> 
        <ScrollView style={styles.scrollView}> </ScrollView>
                <View style={styles.topo}>
                    <TouchableOpacity style={styles.container} onPress={()=>{ navigation.navigate("Login" as never)}}>
                        <Image style={styles.setaEsquerda} source={require("./assets/arrowLeft.png")}/>  
                    </TouchableOpacity>
                <View>
                    <Texto style={styles.userTexto}>Editar Coletor</Texto> 
                </View>
                <Image style={styles.options} source={require("./assets/options.png")}/>  

            </View>



            <View style={styles.conteudo}>

                <View style={styles.editarColetor}> 
                    <View style={styles.icons}>
                        <Texto style={styles.fonte3}>#1</Texto>
                        <Image style={styles.imgColetor} source={require("./assets/coletor.png")}/>
                        <Texto style={styles.fonte3}>Status:</Texto>
                        <Image source={require("./assets/green.png")}/>

                        <View style={styles.editarColetor}>
                            <Image style={styles.icon} source={require("./assets/edit.png")}/>
                            <Image style={styles.icon} source={require("./assets/trash.png")}/>
                        </View>
                    </View>

                    <View style={styles.inputColetor}>
                        <View style={styles.campo}>
                            <Texto style={styles.fonte3}>Sensor ID</Texto>
                            <Texto style={{color: 'red'}}> *</Texto>
                        </View>

                        <View style={styles.inputArea}>
                            <TextInput
                            
                            style={styles.input}
                            placeholder="Digite o ID do sensor"
                            onChangeText={(text) => { coletor.id = parseInt (text); }}
                            />
                        </View>

                        <View style={styles.campo}>
                            <Texto style={styles.fonte3}>Coletor 1</Texto>
                            <Texto style={{color: 'red'}}> *</Texto>
                        </View>
                        

                        <View style={styles.inputArea}>
                            <TextInput
                            
                            style={styles.input}
                            placeholder="Digite o Novo Nome do sensor"
                            onChangeText={(text) => { coletor.nome = text; }}
                            />
                        </View>

                        <View style={styles.campo}>
                            <Texto style={styles.fonte3}>Sensor Termoquímico</Texto>
                            <Texto style={{color: 'red'}}> *</Texto>
                        </View>

                        <View style={styles.inputArea}>
                            <TextInput
                            onChangeText={(text) => { coletor.tipo = text; }}
                            style={styles.input}
                            placeholder="Digite o Novo Tipo de sensor"
                            />
                        </View>

                        <View style={styles.campo}>
                            <Texto style={styles.fonte3}>Quantidade</Texto>
                            <Texto style={{color: 'red'}}> *</Texto>
                        </View>

                        <View style={styles.inputArea}>
                            <TextInput
                            onChangeText={(text) => { coletor.quantidade = parseInt (text); }}
                            style={styles.input}
                            placeholder="quantidade"
                            />
                        </View>
                    </View>
                </View>

                        
                <Image style={styles.line} source={require("./assets/line.png")}/>


                <View style={styles.editarColetor}> 
                    <View style={styles.icons}>
                        <Texto style={styles.fonte3}>#2</Texto>
                        <Image style={styles.imgColetor} source={require("./assets/coletor.png")}/>
                        <Texto style={styles.fonte3}>Status: </Texto>
                        <Image source={require("./assets/red.png")}/>

                        <View style={styles.editarColetor}>
                            <Image style={styles.icon} source={require("./assets/edit.png")}/>
                            <Image style={styles.icon} source={require("./assets/trash.png")}/>
                        </View>
                    </View>

                    <View style={styles.inputColetor}>
                        <View style={styles.campo}>
                            <Texto style={styles.fonte3}>Sensor ID</Texto>
                            <Texto style={{color: 'red'}}> *</Texto>
                        </View>

                        <View style={styles.inputArea}>
                            <TextInput
                            
                            style={styles.input}
                            placeholder="Digite o ID do sensor"
                            onChangeText={(text) => { coletor.id = parseInt (text); }}
                            />
                        </View>

                        
                        <View style={styles.campo}>
                            <Texto style={styles.fonte3}>Coletor 2</Texto>
                            <Texto style={{color: 'red'}}> *</Texto>
                        </View>

                        

                        <View style={styles.inputArea}>
                            <TextInput
                            onChangeText={(text) => { coletor.nome = text; }}
                            style={styles.input}
                            placeholder="Digite o Novo Nome do sensor"
                            />
                        </View>

                        <View style={styles.campo}>
                            <Texto style={styles.fonte3}>Sensor de matéria particulada</Texto>
                            <Texto style={{color: 'red'}}> *</Texto>
                        </View>

                        <View style={styles.inputArea}>
                            <TextInput
                            onChangeText={(text) => { coletor.tipo = text; }}
                            style={styles.input}
                            placeholder="Digite o Novo Tipo de sensor"
                            />
                        </View>
                        
                        <View style={styles.campo}>
                            <Texto style={styles.fonte3}>Quantidade</Texto>
                            <Texto style={{color: 'red'}}> *</Texto>
                        </View>

                        <View style={styles.inputArea}>
                            <TextInput
                            onChangeText={(text) => { coletor.quantidade = parseInt (text); }}
                            style={styles.input}
                            placeholder="Quantidade"
                            />
                        </View>

                    </View>
                </View>

                <Image style={styles.line} source={require("./assets/line.png")}/>

                <View style={styles.editarColetor}> 
                    <View style={styles.icons}>
                        <Texto style={styles.fonte3}>#3</Texto>
                        <Image style={styles.imgColetor} source={require("./assets/coletor.png")}/>
                        <Texto style={styles.fonte3}>Status:</Texto>
                        <Image source={require("./assets/green.png")}/>

                        <View style={styles.editarColetor}>
                            <Image style={styles.icon} source={require("./assets/edit.png")}/>
                            <Image style={styles.icon} source={require("./assets/trash.png")}/>
                        </View>
                    </View>

                    <View style={styles.inputColetor}>
                        <View style={styles.campo}>
                            <Texto style={styles.fonte3}>Sensor ID</Texto>
                            <Texto style={{color: 'red'}}> *</Texto>
                        </View>

                        <View style={styles.inputArea}>
                            <TextInput
                            
                            style={styles.input}
                            placeholder="Digite o ID do sensor"
                            onChangeText={(text) => { coletor.id = parseInt (text); }}
                            />
                        </View>

                        <View style={styles.campo}>
                            <Texto style={styles.fonte3}>Coletor 3</Texto>
                            <Texto style={{color: 'red'}}> *</Texto>
                        </View>

                        <View style={styles.inputArea}>
                            <TextInput
                            onChangeText={(text) => { coletor.nome = text; }}
                            style={styles.input}
                            placeholder="Digite o Novo Nome do sensor"
                            />
                        </View>

                        <View style={styles.campo}>
                            <Texto style={styles.fonte3}>Sensor Barométrico</Texto>
                            <Texto style={{color: 'red'}}> *</Texto>
                        </View>

                        <View style={styles.inputArea}>
                            <TextInput
                            onChangeText={(text) => { coletor.tipo = text; }}
                            style={styles.input}
                            placeholder="Digite o Novo Tipo de sensor"
                            />
                        </View>

                        <View style={styles.campo}>
                            <Texto style={styles.fonte3}>Quantidade</Texto>
                            <Texto style={{color: 'red'}}> *</Texto>
                        </View>

                        <View style={styles.inputArea}>
                            <TextInput
                            onChangeText={(text) => { coletor.quantidade = parseInt (text); }}
                            style={styles.input}
                            placeholder="Quantidade"
                            />
                        </View>
                        
                    </View>
                    
                </View>
                
            </View>
            <View style={styles.botaoCentro}>
                <TouchableOpacity style={styles.botaoArea} onPress={()=>{ navigation.navigate("Login" as never)}}
                onPressIn={Editarcoletor}
                >        
                    <Texto style={styles.botao}>Salvar alterações</Texto>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoArea}
                onPressIn={Deletarcoletor}
                >        
                    <Texto style={styles.botao}>Excluir</Texto>
                    
                </TouchableOpacity>
                
            </View>     
        </View>
        );
    }