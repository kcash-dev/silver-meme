import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Context } from '../context/StudentContext';
import ActionButton from 'react-native-action-button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const ShowStudentScreen = ({ navigation, route }) => {
    const { state } = useContext(Context);

    const { id } = route.params;


    let student;

    for (var key in state) {
        if (state[key].id === id) {
            student = state[key]
        }
    }

    const studentName = student.name;
    const studentImage = student.image;
    const studentNationality = student.nationality;
    const studentLevel = student.level;

    return (
        <View style={ styles.container }>
            <View style={ styles.studentInfoContainer }>
                <View>
                    <Image 
                        source={{ uri: studentImage }}
                        style={ styles.studentImage }
                    />
                </View>
                <Text style={ styles.name }>{ studentName }</Text>
                <Text style={ styles.nationality }>{ studentNationality }</Text>
                <Text style={ styles.level }>{ studentLevel }</Text>
            </View>
            <View style={ styles.classesContainer }>
                <Text style={ styles.header }>Upcoming Classes</Text>
            </View>
            <View style={ styles.notesContainer }>
                <Text style={ styles.header }>Notes</Text>
            </View>
            <ActionButton 
                buttonColor="#ffd900"
            >
                <ActionButton.Item
                    buttonColor="#ff5900"
                    title="Add Class"
                    onPress={() => navigation.navigate('SecondaryScreens', { screen: 'Add', params: { type: 'add_class', name: studentName } })}
                >
                    <MaterialCommunityIcons 
                        name="google-classroom" 
                        style={ styles.actionButtonIcon } 
                    />
                </ActionButton.Item>
                <ActionButton.Item
                    buttonColor="#0099ff"
                    title="Edit Student Information"
                    onPress={() => navigation.navigate('SecondaryScreens', { screen: 'Add', params: { type: 'add_notes' } })}
                >
                    <MaterialCommunityIcons
                        name="account-edit"
                        style={ styles.actionButtonIcon }
                    />
                </ActionButton.Item>
                <ActionButton.Item
                    buttonColor="#00ff66"
                    title="Add Note"
                    onPress={() => navigation.navigate('SecondaryScreens', { screen: 'Add', params: { type: 'add_notes', id: id } })}
                >
                    <MaterialCommunityIcons
                        name="notebook-outline" 
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
        backgroundColor: '#404793'
    },
    studentInfoContainer: {
        backgroundColor: 'rgba(255, 143, 0, 0.75)',
        width: 320,
        borderRadius: 5,
        alignSelf: 'center',
        marginVertical: 20
    },
    notesContainer: {
        backgroundColor: 'rgba(255, 143, 0, 0.75)',
        width: 320,
        borderRadius: 5,
        alignSelf: 'center',
        marginVertical: 20
    },
    classesContainer: {
        backgroundColor: 'rgba(255, 143, 0, 0.75)',
        width: 320,
        borderRadius: 5,
        alignSelf: 'center',
        marginVertical: 20
    },
    studentImage: {
        height: 170,
        width: 170,
        borderRadius: 5,
        marginVertical: 20,
        marginHorizontal: 20,
        alignSelf: 'center'
    },
    name: {
        color: '#fff',
        fontSize: 30,
        marginVertical: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    nationality: {
        color: '#fff',
        fontSize: 25,
        marginVertical: 5,
        textAlign: 'center'
    },
    level: {
        color: '#fff',
        fontSize: 25,
        marginVertical: 5,
        marginBottom: 20,
        textAlign: 'center'
    },
    header: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    actionButtonIcon: {
        fontSize: 25,
        color: '#fff'
    }

});

export default ShowStudentScreen;