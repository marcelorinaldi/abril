import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './TelaInicial.js';
import Tela2 from './Tela2.js';
import Tela3 from './Tela3.js';
import Tela4 from './Tela4.js';
import Tela5 from './Tela5.js';
import TelaValor from './TelaValor';
import TelaValor2 from './TelaValor2';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TelaInicial">
                <Stack.Screen name="TelaInicial" component={TelaInicial} />
                <Stack.Screen name="Tela2" component={Tela2} />
                <Stack.Screen name="Tela3" component={Tela3} />
                <Stack.Screen name="Tela4" component={Tela4} />
                <Stack.Screen name="Tela5" component={Tela5} />
                <Stack.Screen name="TelaValor" component={TelaValor} />
                <Stack.Screen name="TelaValor2" component={TelaValor2} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;

//screenOptions={{headerShown: false}}