import { Text, View, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from './estilo/estilo.js';
import Menu from './components/menu.js';
import { useState } from 'react';

function TelaInicial({ navigation }) {
  const [soma, setSoma] = useState('');
  const abril = () => {
    let x = 0;
    for (var i = 1; i <= 10; i++) {
      x += (9 * i);
    }
    setSoma(x);
  }
  return (
    <><View style={styles.container}>
      <Text>Clique abaixo para Tela desejada</Text>
      {/* <Button title="Avançar Tela2" onPress={() => navigation.navigate('Tela2')} />
      <Button title="Avançar Tela3" onPress={() => navigation.navigate('Tela3')} /> */}
      {/* <Text>{aa()}</Text>
      <Text>{bb()}</Text> */}
      <Button title="Teste1" onPress={abril} />
      <Text>frase: {soma}</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Tela2')}>
        <Image style={styles.icones} source={require('./assets/img/icon.png')} />
      </TouchableOpacity>
    </View><Menu /></>

  )
}

export default TelaInicial;