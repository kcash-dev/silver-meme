import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import moment from 'moment';

const HomeScreen = ({ navigation }) => {

    const date = moment().format("dddd, MMMM Do YYYY");
    const [ time, setTime ] = useState(moment().format("h:mm:ss a"));
    

    useEffect(() => {
        let secTimer = setInterval( () => {
        setTime(moment().format("h:mm:ss a"))
        },1000)

        return () => clearInterval(secTimer);
    }, []);
    
    return (
        <View style={ styles.container }>
            <Text style={ styles.h1 }>Hello, Kyle!</Text>
            <ScrollView 
                style={ styles.bg } 
                showsVerticalScrollIndicator={ false }
            >
                <View style={ styles.boxes }>
                    <Text style={ styles.date }>{ date }</Text>
                    <Text style={ styles.time }>{ time }</Text>
                </View>
                <View style={ styles.boxes }>
                    <Text style={ styles.heading }>Upcoming Classes</Text>
                </View>
                <View style={ styles.boxes }>
                    <Text style={ styles.heading }>Notes</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#404793',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    h1: {
        fontSize: 40,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginVertical: 20
    },
    boxes: {
        width: 320,
        height: 170,
        backgroundColor: 'rgba(255, 143, 0, 0.75)',
        borderRadius: 5,
        marginBottom: 30,
        justifyContent: 'space-evenly',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    heading: {
        color: '#fff',
        fontSize: 30,
        alignSelf: 'center',
        top: 5,
        fontWeight: 'bold',
        position: 'absolute'
    },
    date: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    time: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    actionButtonIcon: {
        fontSize: 25,
        color: '#fff'
    }
});

export default HomeScreen;