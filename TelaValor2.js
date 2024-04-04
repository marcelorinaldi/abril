import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import styles from './estilo/estilo.js';
//import Navigation from './Navigation';
import Menu from './components/menu.js';

function TelaValor2({ route }) {
  //const {valor, setValor} = route.params;
  const x = route.params;
  return (
    <><View style={styles.container}>
      <Button title="Voltar" onPress={() => navigation.navigate('TelaValor')} />
      <View style={styles.textAreaContainer} >
      <TextInput value={x}></TextInput>
        </View>
    </View><Menu /></>
  )
}

export default TelaValor2;