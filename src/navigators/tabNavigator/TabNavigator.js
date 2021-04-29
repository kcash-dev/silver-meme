import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../../screens/HomeScreen';
import StudentsScreen from '../../screens/StudentsScreen';
import ScheduleScreen from '../../screens/ScheduleScreen';
import ProfileScreen from '../../screens/ProfileScreen';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                    iconName = focused
                    ? 'home-sharp'
                    : 'home-outline';
                } else if (route.name === 'Students') {
                    iconName = focused
                    ? 'school-sharp'
                    : 'school-outline';
                } else if (route.name === 'Schedule') {
                    iconName = focused
                    ? 'calendar-sharp'
                    : 'calendar-outline';
                } else if (route.name === 'Profile') {
                    iconName = focused
                    ? 'person-circle-sharp'
                    : 'person-circle-outline';
                }
    
                return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#FF9900',
                inactiveTintColor: '#404793',
            }}
        >
            <Tab.Screen name="Home" component={ HomeScreen } />
            <Tab.Screen name="Students" component={ StudentsScreen } />
            <Tab.Screen name="Schedule" component={ ScheduleScreen } />
            <Tab.Screen name="Profile" component={ ProfileScreen } />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;