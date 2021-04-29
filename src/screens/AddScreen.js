import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/StudentContext';
import AddStudentForm from '../components/AddStudentForm';
import AddNoteForm from '../components/AddNoteForm';
import AddClassForm from '../components/AddClassForm';

const AddScreen = ({ route, navigation }) => {
    const { type, id, name } = route.params;
    const { addStudent, addNote, addClass } = useContext(Context);
    switch (type) {
        
        case 'add_student':
            return (
                <View style={ styles.container }>
                    <AddStudentForm 
                        onSubmit={(name, nationality, level) => {
                            addStudent(name, nationality, level, () => navigation.navigate("Main"), { params: { screen: "Students" } });
                          }}
                    />
                </View>
            )
        case 'add_notes':
            return (
                <View style={ styles.container }>
                    <AddNoteForm
                        id={ id }
                        onSubmit={(id, title, content) => {
                            addNote(id, title, content, () => navigation.navigate("Main"), { params: { screen: "Students" } })
                        }}
                    />
                </View>
            )
        case 'add_class':
            return (
                <View style={ styles.container }>
                    <AddClassForm 
                        onSubmit={(date, length) => {
                            addClass(date, name, length, () => navigation.navigate("Main"), { params: { screen: "Students" } })
                            console.log('SENT!')
                        }}
                    />
                </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#404793'
    }
});

export default AddScreen;