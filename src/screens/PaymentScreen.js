import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Context } from '../context/StudentContext';
import Table from '../components/Table';

const PaymentScreen = () => {
    const { state, getClasses } = useContext(Context);
    const [ classes, setClasses ] = useState(0);
    const [ payRate, setPayRate ]= useState(26);
    const [ total, setTotal ]= useState(0);

    let classEntries = Object.values(state);

    useEffect(() => {
        let lengths = 0;

        for(let i = 0; i < classEntries.length; i++) {
            if (classEntries[i].classLength === '45 minutes') {
                lengths += .75
            } else if (classEntries[i].classLength === '1 hour') {
                lengths += 1
            }
        }

        setClasses(lengths);
    })

    return (
        <ScrollView style={ styles.container }>
            <Text style={ styles.header }>Payment</Text>
            <TouchableOpacity
                style={ styles.paymentContainer }
                onPress={ () => {
                    setTotal(classes * payRate)
                    } 
                }
            >
                <Text style={ styles.monthHeader }>Month Total</Text>
                <Text style={ styles.moneyTotal }>${ total }</Text>
            </TouchableOpacity>
            <View
                style={ styles.classHistoryContainer }
            >
                <Text style={ styles.header }>Class History</Text>
                <Table />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#404793',
    },
    header: {
        color: '#fff',
        fontSize: 34,
        textAlign: 'center',
        top: 10,
        fontWeight: 'bold'
    },
    paymentContainer: {
        height: 200,
        width: '90%',
        backgroundColor: '#ff0000',
        borderRadius: 5,
        alignSelf: 'center',
        top: 50,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 30
    },
    monthHeader: {
        fontSize: 36,
        color: '#fff',
        fontWeight: 'bold',
        top: -15
    },
    totalHeader: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        top: -30
    },
    moneyTotal: {
        fontSize: 36,
        color: '#AEF359',
        fontWeight: 'bold',
        top: -20
    },
    classHistoryContainer: {
        height: 200,
        width: '90%',
        backgroundColor: '#FF9900',
        borderRadius: 5,
        alignSelf: 'center',
        top: 50,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
});

export default PaymentScreen;