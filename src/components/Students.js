import React, { useContext, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Context } from '../context/StudentContext';
import Shake from './iconShake';

const Students = ({ navigation, deleteVisible }) => {
    const { state, getStudents } = useContext(Context);

    useEffect(() => {
        getStudents();
    
        const listener = navigation.addListener('focus', () => {
          getStudents();
        });
    
        return () => {
          listener.remove();
        };
      }, []);
    
    return (
        <View>
            <FlatList
                showsVerticalScrollIndicator={ false }
                data = { state }
                keyExtractor={ (student) => student.name  }
                renderItem={({ item }) => {
                    let image;

                    if (item.image === undefined) {
                        image = "https://i.imgur.com/MfVj0pW.png"
                    } else {
                        image = item.image;
                    }

                    

                    console.log(item.image);

                    return (
                        <View>
                            <TouchableOpacity
                                style={ styles.container }
                                onPress={() => navigation.navigate('SecondaryScreens', { screen: 'ShowStudent', params: { id: item.id } })}
                            >
                                { !deleteVisible ? 
                                    null
                                    :
                                    <Shake />
                                    }
                                <View>
                                    <Image 
                                        source={{ uri: image }} 
                                        style={ styles.image }
                                    />
                                </View>
                                <View style={ styles.info }>
                                    <Text style={ styles.name }>{ item.name }</Text>
                                    <Text style={ styles.nationality }>{ item.nationality }</Text>
                                    <Text style={ styles.level }>{ item.level }</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 143, 0, 0.75)',
        marginVertical: 20,
        width: 320,
        height: 170,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 5
    },
    info: {
        height: 100,
        width: 170
    },
    name: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
    },
    nationality: {
        fontSize: 25,
        color: '#fff'
    },
    level: {
        color: '#fff',
        fontSize: 20
    },
    deleteButton: {
        position: 'absolute',
        top: 10,
        right: 10
    }
})

export default Students;