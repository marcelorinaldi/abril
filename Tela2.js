import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import styles from './estilo/estilo.js';
//import Navigation from './Navigation';
import Menu from './components/menu.js';

function Tela2({ navigation }) {
  return (
    <><View style={styles.container}>
      <Text>Voltar pra Tela Inicial</Text>
      <Button title="Voltar" onPress={() => navigation.navigate('TelaInicial')} />
      <View style={styles.textAreaContainer} >
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Comentários aqui..."
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
          />
        </View>
    </View><Menu /></>
  )
}

export default Tela2;