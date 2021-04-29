import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendario';

const Schedule = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.heading }>Schedule</Text>
            <Calendar
                onChange={(range) => console.log(range)}
                minDate={new Date(2018, 3, 20)}
                startDate={new Date(2018, 3, 30)}
                endDate={new Date(2018, 4, 5)}
                theme={{
                    activeDayColor: {},
                    monthTitleTextStyle: {
                        color: '#FF9900',
                        fontWeight: '600',
                        fontSize: 25,
                    },
                    emptyMonthContainerStyle: {},
                    emptyMonthTextStyle: {
                        fontWeight: '200',
                    },
                    weekColumnsContainerStyle: {},
                    weekColumnStyle: {
                        paddingVertical: 10,
                    },
                    weekColumnTextStyle: {
                        color: '#FF9900',
                        fontSize: 13,
                    },
                    nonTouchableDayContainerStyle: {},
                    nonTouchableDayTextStyle: {},
                    startDateContainerStyle: {},
                    endDateContainerStyle: {},
                    dayContainerStyle: {},
                    dayTextStyle: {
                        color: '#000',
                        fontWeight: '200',
                        fontSize: 15,
                    },
                    dayOutOfRangeContainerStyle: {},
                    dayOutOfRangeTextStyle: {},
                    todayContainerStyle: {},
                    todayTextStyle: {
                        color: '#6d95da',
                    },
                    activeDayContainerStyle: {
                        backgroundColor: '#6d95da',
                    },
                    activeDayTextStyle: {
                        color: 'white',
                    },
                    nonTouchableLastMonthDayTextStyle: {},
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#404793'
    },
    heading: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 20
    }
});


export default Schedule;