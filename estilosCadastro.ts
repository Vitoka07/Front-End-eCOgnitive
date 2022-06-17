import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: "100%",
    },

    topo: {
        flexDirection: 'row',
        width: "90%",
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 50,
    },

    setaEsquerda: {
        width: 30,
        height: 30,
        marginLeft: 30,

    },

    fonte2: {
        fontSize: 15,
        marginLeft: 5,
        marginTop: 5,
    },

    userTexto: {
        fontSize: 20,
        marginLeft: 20,
        fontWeight: "bold",
        color:`#2e8b57`,
    },

    campo: {
        flexDirection: 'row',
        marginLeft: 30,
        marginTop: 15,
    },

    inputArea: {
        flexDirection: 'row',
        width: '98%',
        alignItems: 'center',
        marginLeft: 35,   
    },

    input: {
        borderWidth: 0.2,
        borderRadius:2,
        opacity: 2,
        width: "85%",
        height: 45,
        padding: 8,       
    },
    icon: {
        position: 'absolute',
        marginLeft: 290,
        width: "15%",
    },
    conteudo: {
        marginTop: 25,
    },

    botaoArea: {
        marginTop: 30,
        height: 50,
        width: 100,
        backgroundColor:`#2A9F85`,
        borderRadius: 5,  
        elevation: 2,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },

    botao: {
        fontWeight: "bold",
        color: '#f5fffa',
    },
    botaoCentro: {
        alignItems: 'center',
        width: "100%",
    },

    textoUnderline: {
        textDecorationLine: 'underline',
        fontSize:11,
        color:`#2e8b57`
    },
});