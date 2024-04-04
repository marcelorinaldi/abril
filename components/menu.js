import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from '../estilo/estilo.js';
import { useNavigation } from '@react-navigation/native';
import estilo from '../estilo/estilo.js';

function Menu() {
  const navigation = useNavigation();
  return (
    <View style={estilo.menu}>
      <TouchableOpacity onPress={() => navigation.navigate('TelaValor')}>
        <Image style={styles.imagem}
          source={require("../assets/img/home.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TelaValor2')}>
        <Image style={styles.imagem}
          source={require("../assets/img/tool.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Tela3')}>
        <Image style={styles.imagem}
          source={require("../assets/img/exit.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Tela4')}>
        <Image style={styles.imagem}
          source={require("../assets/img/scroll.png")}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Menu;