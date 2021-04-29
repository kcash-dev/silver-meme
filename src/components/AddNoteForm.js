import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AddNoteForm = ({ onSubmit, initialValues, id }) => {
    const [ title, setTitle ] = useState(initialValues.title);
    const [ content, setContent ] = useState(initialValues.content);
    const studentId = id;

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput
                style={ styles.input }
                value={ title }
                onChangeText={ text => setTitle(text) }
            />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput
                style={ styles.contentInput }
                value={ content }
                onChangeText={ text => setContent(text) }
            />
            <TouchableOpacity 
              style={ styles.button }
              onPress={ () => {
                onSubmit(studentId, title, content) 
                console.log('button pressed', title, content)
              } 
            } 
            >
              <Text style={ styles.buttonText }>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

AddNoteForm.defaultProps = {
    initialValues: {
      title: '',
      content: ''
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
      contentInput: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 150
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

export default AddNoteForm;