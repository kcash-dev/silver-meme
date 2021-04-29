import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { Context } from '../context/StudentContext'

const paymentTable = () => {
    const { state, getClasses } = useContext(Context);
    const [ table, setTable ] = useState({
        tableHead: ['Date', 'Student', 'Length'],
        tableData: [
          ['1', '2', '3'],
          ['a', 'b', 'c'],
          ['1', '2', '3'],
          ['a', 'b', 'c']
        ]
    });

    const [ tableData, setTableData ] = useState();

    let tableArray = [];

    for(let i = 0; i < state.length; i++) {
        let array = Object.values(state[i]);

        tableArray.push(array)
        
    }

    useEffect(() => {
        getClasses();
        setTableData(tableArray);
    }, []);

    console.log(tableData);
    
    return (
        <View style={ styles.container }>
            <ScrollView
                showsVerticalScrollIndicator={ false }
            >
                <Table style={ styles.table } borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff', borderRadius: 5 }}>
                    <Row data={ table.tableHead } style={ styles.head } textStyle={ styles.text }/>
                    <Rows data={ tableData } textStyle={ styles.text }/>
                </Table>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        width: "100%", 
        flex: 1, 
        padding: 16, 
        paddingTop: 30, 
        backgroundColor: 'transparent' 
    },
    head: { 
        height: 40, 
        backgroundColor: '#808B97' 
    },
    text: { 
        margin: 6 
    },
    row: { 
        flexDirection: 'row', 
        backgroundColor: '#FFF1C1' 
    },
    table: {
        backgroundColor: '#fff',
        borderRadius: 5
    }
  });

export default paymentTable;