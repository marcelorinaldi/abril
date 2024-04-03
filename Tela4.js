import { Text, View, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from './estilo/estilo.js';
import Menu from './components/menu.js';
import { Alert } from 'react-native';
import { useState } from 'react';

function Tela4({ navigation }) {
    // const ola = 'amigo';
    // function exec() {
    //     const ola = 'sim';
    //     return ola;
    // }

    // const aluno = {
    //     nome: 'chico',
    //     idade: 33,
    //     end: {
    //         rua: 'av do centro',
    //         num: 20
    //     }
    // }

    // console.log(ola);
    // console.log(exec());
    // console.log(aluno);
    // console.log(aluno.nome);

    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numbersc = [];
    let i = 1;
    // for (let i = 11; i <=20; i++) {
    //     numbersa.push(i);
    // }

    do {
        numbersc.push(i);
        i++;
    } while (i <= 10);

    return (
        <View style={styles.container}>

            <View>
                <Text>Exemplo de repetição com for em Native:</Text>
                {numbersc.map((numberc) => (
                    //Renderiza um Text para cada número no array
                    <>
                    <Text key={numberc}>ola = {numberc}</Text>
                    <Image style={{width: 200, height: 200 }} source={require('./assets/img/tool.png')}/></>
                ))}
            </View>
        </View>
    );
}


// // aluno.nome = 'maria';
// // console.log(aluno);

// // const { nome } = aluno;
// // //console.log(m);
// // console.log(nome);
// return (
//     <><View style={styles.container}>
//         <Text>Clique abaixo para Tela desejada</Text>
//         {/* <Button title="Avançar Tela2" onPress={() => navigation.navigate('Tela2')} />
//         <Button title="Avançar Tela3" onPress={() => navigation.navigate('Tela3')} /> */}
//         {/* <Text>{aa()}</Text>
//         <Text>{bb()}</Text> */}
//         {/* <Button title="Teste1" onPress={abril} />
//             <Text>frase: {soma}</Text> */}

//         <TouchableOpacity onPress={() => navigation.navigate('Tela2')}>
//             <Image style={styles.icones} source={require('./assets/img/icon.png')} />
//         </TouchableOpacity>
//     </View><Menu /></>
// );


export default Tela4;