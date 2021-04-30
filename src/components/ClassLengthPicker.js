import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context } from '../context/StudentContext';
import ModalSelector from 'react-native-modal-selector';

const ClassLengthPicker = ({ onChoice }) => {
    const times = [
        { id: 1, label: "30 minutes" },
        { id: 2, label: "45 minutes" },
        { id: 3, label: "1 hour" }
    ]
    return (
        <View style={ styles.container }>
            <ModalSelector
                    data={ times }
                    initValue="Select"
                    keyExtractor={ item => item.id }
                    labelExtractor={ item => item.label }
                    onModalClose={value => {
                        onChoice(value.label)
                    } }
                    style={ styles.picker }
                />
        </View>
    )
}

const styles = StyleSheet.create({
    picker: {
        backgroundColor: '#fff',
        width: '50%',
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: 20,
    }
})

export default ClassLengthPicker;