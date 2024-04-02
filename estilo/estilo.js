import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icones: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
    },  
    menu: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        marginBottom: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        gap: 40,
    },
    imagem: {
        width: 40,
        height: 40,
     },

     textAreaContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        padding: 5,
     },
     textArea: {
        height: 150,
        width: 200,
        justifyContent: "flex-start",
     }
});