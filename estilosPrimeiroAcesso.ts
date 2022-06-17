import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topo: {
        flexDirection: 'row',
    },

    meio: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    perfilTexto: {
        color:`#2e8b57`,
        fontWeight: 'bold',
        marginTop: 50,
    },

    userTexto: {
        fontSize: 20,
        marginLeft: 60,
        marginTop: 10,
    },

    setaEsquerda: {
        width: 25,
        height: 25,
        marginLeft: 30,
        marginTop: 10,
        },

    userIcon: {
        width: 30,
        height: 30,
        marginLeft: 180,
        marginTop: 50,
    },

    primeiroAcesso:{
        width: 246,
        height: 159,
        alignContent: 'center',
        marginTop: 50,


    },

    meioEspaco: {
        marginTop: 20,
    },

    botao: {
        width: "70%",
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 30,
        height: 50,
        backgroundColor:`#2A9F85`,
        borderRadius: 5,  
        elevation: 2,
    },

    botaoTexto: {
        fontWeight: "bold",
        color: '#f5fffa',
    },

    botaoArea: {
        marginLeft: 90,

    },
});