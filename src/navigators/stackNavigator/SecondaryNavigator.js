import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import ShowStudentScreen from '../../screens/ShowStudentScreen';
import AddScreen from '../../screens/AddScreen';
import PaymentScreen from '../../screens/PaymentScreen';

const StudentStack = createStackNavigator();

const SecondaryNavigator = () => {
    return (
        <StudentStack.Navigator>
            <StudentStack.Screen 
                name="ShowStudent" 
                component={ ShowStudentScreen } 
                options={{ headerShown: false }}
            />
            <StudentStack.Screen 
                name="Add" 
                component={ AddScreen } 
                options={{ headerShown: false }}
            />
            <StudentStack.Screen 
                name="Payment" 
                component={ PaymentScreen } 
                options={{ headerShown: false }}
            />

        </StudentStack.Navigator>
    )
}

export default SecondaryNavigator;