import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './TelaInicial.js';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TelaInicial">
                <Stack.Screen name="TelaInicial" component={TelaInicial} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;

//screenOptions={{headerShown: false}}