import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AddStudentForm = ({ onSubmit, initialValues }) => {
    const [ name, setName ] = useState(initialValues.name);
    const [ nationality, setNationality ] = useState(initialValues.nationality);
    const [ level, setLevel ] = useState(initialValues.level)

    return (
        <View>
            <Text style={styles.label}>Enter Student Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={text => setName(text)}
            />
            <Text style={styles.label}>Enter Student Nationality:</Text>
            <TextInput
                style={styles.input}
                value={nationality}
                onChangeText={text => setNationality(text)}
            />
            <Text style={styles.label}>Enter Student Level:</Text>
            <TextInput
                style={styles.input}
                value={level}
                onChangeText={text => setLevel(text)}
            />
            <TouchableOpacity 
              style={ styles.button }
              onPress={ () => onSubmit(name, nationality, level) } 
            >
              <Text style={ styles.buttonText }>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

AddStudentForm.defaultProps = {
    initialValues: {
      name: '',
      nationality: '',
      level: ''
    }
  };

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 5
      },
      label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
        color: '#fff',
        textAlign: 'center',
        marginVertical: 10
      },
      button: {
        width: 100,
        height: 40,
        backgroundColor: 'orange',
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
      }
})

export default AddStudentForm;