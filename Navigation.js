import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './TelaInicial.js';
import Tela2 from './Tela2.js';
import Tela3 from './Tela3.js';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TelaInicial">
                <Stack.Screen name="TelaInicial" component={TelaInicial} />
                <Stack.Screen name="Tela2" component={Tela2} />
                <Stack.Screen name="Tela3" component={Tela3} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;

//screenOptions={{headerShown: false}}