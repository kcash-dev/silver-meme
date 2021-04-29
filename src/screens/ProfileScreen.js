import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={ styles.container }>
            <View style={ styles.nameContainer }>
                <Text style={ styles.name }>Hello, Kyle!</Text>
            </View>
            
            <TouchableOpacity style={ styles.profilePhotoContainer }>
                <Image 
                    source={{ uri: "https://i.imgur.com/MfVj0pW.png" }}
                    style={ styles.profileImage }
                />
            </TouchableOpacity>
            <View style={ styles.settingsContainer }>
                <TouchableOpacity 
                    style={ styles.settings }
                    onPress={() => navigation.navigate("SecondaryScreens", { screen: 'Payment' })}
                >
                    <Text style={ styles.settingsText }>Payment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.settings }>
                    <Text style={ styles.settingsText }>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.settings }>
                    <Text style={ styles.settingsText }>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#404793'
    },
    name: {
        color: 'white',
        fontSize: 40,
        position: 'absolute',
        fontWeight: 'bold'
    },
    nameContainer: {
        backgroundColor: '#FF9900',
        borderRadius: 5,
        height: 70,
        width: '65%',
        justifyContent: 'center',
        alignItems: 'center',
        top: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    profilePhotoContainer: {
        borderRadius: 60,
        backgroundColor: '#fff',
        height: 100,
        width: 100,
        position: 'absolute',
        top: 30,
        right: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    profileImage: {
        height: "100%",
        width: "100%"
    },
    settingsContainer: {
        width: '90%',
        height: 150,
        backgroundColor: '#FF9900',
        borderRadius: 5,
        top: 150,
        alignSelf: 'center',
        borderColor: '#000',
        borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    settings: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    settingsText: {
        color: '#fff',
        fontSize: 18
    }

});

export default ProfileScreen;