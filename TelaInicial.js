import { Text, View, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from './estilo/estilo.js';
import Menu from './components/menu.js';

function TelaInicial({ navigation }) {
  // var b = 10;
  // var b = 'teste';
  // const a = 2;
  // let c = 4;
  // soma = a+b+c
  // console.log(soma);

  var a = 10;
  var b = 5;
  var c = '';
  c = a + b;

  if(c > 10) {
    console.log('maior');
    c = c +' maior';
  } else {
    console.log('menor');
    c = c + ' menor';
  }
  return (
    <><View style={styles.container}>
      <Text>Clique abaixo para Tela desejada - {c}</Text>
      <Button title="Avançar Tela2" onPress={() => navigation.navigate('Tela2')} />
      <Button title="Avançar Tela3" onPress={() => navigation.navigate('Tela3')} />

      <TouchableOpacity onPress={() => navigation.navigate('Tela2')}>
        <Image style={styles.icones} source={require('./assets/img/icon.png')} />
      </TouchableOpacity>
    </View><Menu /></>

  )
}

export default TelaInicial;