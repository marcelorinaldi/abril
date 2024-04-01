import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './estilo/estilo.js';
//import Navigation from './Navigation';

function Tela3({navigation}) {
  return ( 
  <View style={styles.container}>
    <Text>Voltar pra Tela Inicial</Text>
    <Button title="Voltar" onPress={() => navigation.navigate('TelaInicial')} />
  </View>
  )
}

export default Tela3;