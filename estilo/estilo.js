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
});