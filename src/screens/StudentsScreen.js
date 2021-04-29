import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Students from '../components/Students';
import ActionButton from 'react-native-action-button';
import Ionicons from 'react-native-vector-icons/Ionicons';


const StudentsScreen = ({ navigation }) => {


    const [ deleteVisible, setDeleteVisible ] = useState(false);

    return (
        <View style={ styles.container }>
            <Text style={ styles.heading }>Students</Text>
            <View>
                <Students 
                    navigation={ navigation }
                    deleteVisible = { deleteVisible }
                />
            </View>
            <ActionButton 
                buttonColor="#ffd900"
            >
                <ActionButton.Item
                    buttonColor="#00ff66"
                    title="Add Student"
                    onPress={() => navigation.navigate('SecondaryScreens', { screen: 'Add', params: { type: 'add_student' } })}
                >
                    <Ionicons
                        name="person-add-sharp"
                        style={ styles.actionButtonIcon }
                    />
                </ActionButton.Item>
                <ActionButton.Item
                    buttonColor="#ff5900"
                    title="Delete Student"
                    onPress={ () => setDeleteVisible(!deleteVisible) }
                >
                    <Ionicons
                        name="trash-sharp"
                        style={ styles.actionButtonIcon }
                    />
                </ActionButton.Item>
            </ActionButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#404793',
        paddingBottom: 100
    },
    heading: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 20
    },
    actionButtonIcon: {
        fontSize: 25,
        color: '#fff'
    }
});

export default StudentsScreen;