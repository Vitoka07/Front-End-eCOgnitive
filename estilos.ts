import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topo:{
        flexDirection: "row",
        paddingVertical: 3,
    },

    loginTitulo: {
        fontSize: 16,
        marginTop: 80,
        marginLeft: 130,
        fontWeight: "bold",
        color:`#2e8b57`,
    },

    setaEsquerda: {
        width: 25,
        height: 25,
        marginLeft: 30,
        marginTop: 80,
        },

    logo:{
        width: 250,
        height: 55,
        marginLeft: 70,
        marginTop: 60,
    },

    loginSenha: {
        flexDirection: "column",
        alignItems: 'center',
    },

    emailSenha: {
        fontSize: 10,
        marginLeft: 30,
        marginTop: 20,
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
        height: 40,
        padding: 8,       
    },

    boxLogin: {
        marginTop: 40,
    },

    icon: {
        position: 'absolute',
        marginLeft: 290,
        width: "15%",
    },

    esqueciSenha:{
        color:`#2e8b57`,
        textDecorationLine: 'underline',
        marginLeft: 230,
        marginTop: 8,
    },

    ou: {
        textAlign: 'center',
        marginTop: 20,
    },
    
    botaoArea: {
        display: 'flex',
        width: "90%",
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30,
        height: 50,
        backgroundColor:`#2A9F85`,
        borderRadius: 5,  
        marginLeft: 20,
        elevation: 2,
    },

    botao: {
        fontWeight: "bold",
        color: '#f5fffa',
    },

    botaoAreaFacebookGoogle:{
        flexDirection: 'row',
        display: 'flex',
        width: "90%",
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 15,
        height: 50,
        backgroundColor:`#F7F7F7`,
        borderRadius: 5,  
        marginLeft: 20,
        elevation: 1,
    },

    botaoFG: {
        color: '#2A9F85',
        width: "60%",
    },

    iconFG: {
        width: 35,
        height: 35,
        },
});