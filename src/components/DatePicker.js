import React, {useState} from 'react';
import {View, Button, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({ handleInput }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    handleInput(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <DateTimePicker
      testID="dateTimePicker"
      value={date}
      mode={mode}
      is24Hour={true}
      display="default"
      onChange={onChange}
      style={ styles.datePicker }

    />
  );
};

const styles = StyleSheet.create({
  datePicker: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: 122

  }
})

export default DatePicker;