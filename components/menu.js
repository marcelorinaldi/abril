import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from '../estilo/estilo.js';
import { useNavigation } from '@react-navigation/native';

function Menu (){
    const navigation = useNavigation();
    return(
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')}>
            <Image style={styles.imagem}
              source={require("../assets/img/home.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TelaDetalhes')}>
            <Image style={styles.imagem}
              source={require("../assets/img/tool.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Copia')}>
            <Image style={styles.imagem}
              source={require("../assets/img/exit.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TelaScroll')}>
            <Image style={styles.imagem}
              source={require("../assets/img/scroll.png")}
            />
          </TouchableOpacity>
        </View>
    )
}

export default Menu;