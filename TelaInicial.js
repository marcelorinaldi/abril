import { Text, View, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from './estilo/estilo.js';
import Menu from './components/menu.js';

function TelaInicial({ navigation }) {
  return (
    <><View style={styles.container}>
      <Text>Clique abaixo para Tela desejada</Text>
      <Button title="Avançar Tela2" onPress={() => navigation.navigate('Tela2')} />
      <Button title="Avançar Tela3" onPress={() => navigation.navigate('Tela3')} />

      <TouchableOpacity onPress={() => navigation.navigate('Tela2')}>
        <Image style={styles.icones} source={require('./assets/img/icon.png')} />
      </TouchableOpacity>
    </View><Menu /></>

  )
}

export default TelaInicial;