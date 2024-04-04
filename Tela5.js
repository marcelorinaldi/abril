import { Text, View, Button, TouchableOpacity, StyleSheet, Image, TextInput, document, getElementById } from 'react-native';
import styles from './estilo/estilo.js';
import Menu from './components/menu.js';
import { useState } from 'react';
import {Alert} from 'react-native';
import { initializeApp } from 'firebase/app';

function Tela5({ navigation }) {

  // const [valorum, setValorum] = useState();
  // const [valordois, setValordois] = useState();

  // const enviar = () => {
  //   setValordois(valorum)
  // };

  const [nome, setNome] = useState();
  const [id, setId] = useState();
  const [end, setEnd] = useState();
  const [resultado, setResultado] = useState();
  const salvar = () => {
    setResultado(nome + '\n' + id + '\n' + end)
  }

  const handlePress = () => {
    Alert.alert(
      'Cadastrado com sucesso!',
      'Nome: ' + nome + '\n' + id + '\n' + end
    );
  }
  return (
    <><View style={styles.container}>
      {/* <Text>teste de variável</Text>
      <TextInput placeholder='Valor um:' value={valorum} onChangeText={setValorum}></TextInput>
      <TextInput placeholder='Valor dois:' value={valordois}></TextInput> */}
      <Text>Cadastro</Text>
      <TextInput placeholder='Nome:' value={nome} onChangeText={setNome}></TextInput>
      <TextInput placeholder='Idade:' value={id} onChangeText={setId}></TextInput>
      <TextInput placeholder='Endereço:' value={end} onChangeText={setEnd}></TextInput>
      <Button title="Salvar" onPress={handlePress} />
      <TextInput
        value={resultado}
        underlineColorAndroid="transparent"
        placeholder="Comentários aqui..."
        placeholderTextColor="grey"
        numberOfLines={10}
        multiline={true}
      />
    </View><Menu /></>

  )
}

export default Tela5;