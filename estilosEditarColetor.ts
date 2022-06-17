import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    topo: {
        flexDirection: 'row',
        width: "90%",
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50,
    },

    setaEsquerda: {
        width: 30,
        height: 30,
        marginLeft: 30,

    },

    options: {
        width: 30,
        height: 30,
        marginLeft: 50,
    },

    fonte3: {
        fontSize: 15,
        marginLeft: 5,
        marginTop: 5,
    },

    userTexto: {
        fontSize: 20,
        marginLeft: 80,
        fontWeight: "bold",
        color:`#2e8b57`,
    },

    campo: {
        flexDirection: 'row',
        marginLeft: 30,
        marginTop: 1,
    },

    inputArea: {
        flexDirection: 'row',
        width: '98%',
        alignItems: 'center',
        marginLeft: 35, 
    },

    inputArea2: {
        flexDirection: 'row',
        width: '30%',
        alignItems: 'center',
        marginLeft: 35,   
    },

    scrollView: {
        marginHorizontal: 0,
      },

    input: {
        borderWidth: 0.2,
        borderRadius:2,
        opacity: 2,
        width: "80%",
        height: 15,
        padding: 8,       
    },
    icon: {
        width: 30,
        height: 30,
    },
    conteudo: {
        marginTop: 30,
    },

    botaoArea: {
        marginTop: 30,
        height: 50,
        width: "100%",
        backgroundColor:`#2A9F85`,
        borderRadius: 5,  
        elevation: 2,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },

    botao: {
        textAlign: 'center',
        padding: 12,
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

    editarColetor: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    imgColetor: {
        width: 60,
        height: 70,
    },
    inputColetor: {
        width: "80%",
        height: 70,
    },
    icons: {
        margin: 8,
        alignItems: 'center',
    },
    line: {
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 15,
    },
});