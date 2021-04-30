import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context } from '../context/StudentContext';
import ModalSelector from 'react-native-modal-selector'

const StudentPicker = ({ onChoice }) => {
    const { state } = useContext(Context);
    return (
        <View style={ styles.container }>
            <ModalSelector
                    data={ state } 
                    keyExtractor={ item => item.id }
                    labelExtractor={ item => item.name }
                    initValue="Select a student"
                    onChange={value => {
                        onChoice(value)
                    } }
                    style={ styles.picker }
                />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default StudentPicker;