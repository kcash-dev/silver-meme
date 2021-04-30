import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DatePicker from '../components/DatePicker';
import ClassLengthPicker from '../components/ClassLengthPicker';

const AddClassForm = ({ onSubmit, initialValues }) => {
    const [ date, setDate ] = useState(initialValues.date);
    const [ length, setLength ] = useState(initialValues.length);

    const [ classLength, setClassLength ] = useState();

    const handleDatePicker = (val) => {
        var formattedDate = ('0' + val.getDate()).slice(-2);
        var formattedMonth = ('0' + (val.getMonth() + 1)).slice(-2);
        var formattedYear = val.getFullYear().toString().substr(2,2);

    // Combine and format date string
        var dateString = formattedMonth + '/' + formattedDate + '/' + formattedYear;
        setDate(dateString);
    }

    console.log(length);

    return (
        <View>
            <Text style={styles.label}>Enter Date:</Text>
            <DatePicker handleInput = { handleDatePicker }/>
            <Text style={styles.label}>Enter Class Length:</Text>
            <ClassLengthPicker 
              onChoice={(val) => setLength(val) }
            />
            <TouchableOpacity 
              style={ styles.button }
              onPress={ () => onSubmit(date, length) } 
            >
              <Text style={ styles.buttonText }>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

AddClassForm.defaultProps = {
    initialValues: {
      date: '',
      studentName: '',
      length: ''
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
      },
      pickerButton: {
        backgroundColor: '#fff',
        height: 35,
        borderRadius: 5,
        width: 100,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
      },
      pickerButtonText: {
        fontSize: 18
      }
})

export default AddClassForm;