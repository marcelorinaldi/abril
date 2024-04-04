import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import styles from './estilo/estilo.js';
import Menu from './components/menu.js';
import { useState } from 'react';

function TelaValor({ navigation }) {
  const [valor, setValor] = useState();
  var x = valor;

  return (
    <><View style={styles.container}>
      <TextInput placeholder='Valor' value={valor} onChangeText={setValor}></TextInput>
      <Button title="Enviar" onPress={() => navigation.navigate('TelaValor2', {x})} />
    </View><Menu /></>
  )
}

export default TelaValor;