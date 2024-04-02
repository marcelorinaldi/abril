import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './estilo/estilo.js';
import Menu from './components/menu.js';
import {Alert} from 'react-native';

function Tela3({navigation}) {
  const handlePress = () => {
    Alert.alert(
      'Obrigado!',
      'Enviado com sucesso!',
    [
      {text: 'Nova Avaliação', onPress: () => navigation.navigate("TelaInicial")},
    ]
    );
  }
  return ( 
    <><Button title='ENVIAR' color={'#111'} onPress={handlePress}></Button><Menu /></>
  )
}
export default Tela3;