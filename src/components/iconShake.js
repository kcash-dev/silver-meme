// Shake Animation
import React, { useRef } from 'react';
import { Animated, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const IconShake = (props) => {
    const shakeAnim = useRef(new Animated.Value(0)).current

    React.useEffect(() => {
        Animated.sequence([
            Animated.timing(
                shakeAnim,
                {
                    toValue: .2,
                    duration: 200,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                shakeAnim,
                {
                    toValue: -.2,
                    duration: 200,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                shakeAnim,
                {
                    toValue: .2,
                    duration: 200,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                shakeAnim,
                {
                    toValue: -.2,
                    duration: 200,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                shakeAnim,
                {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true
                }
            ),
        ]).start();
    }, [shakeAnim])

    return (
        <Animated.View
          style={{
              ...props.style,
              transform: [{ rotate: shakeAnim }],
          }}
        >
            {props.children}
          </Animated.View>
    )
}

export default () => {
    return (
        <IconShake style={ styles.deleteButton }>
            <TouchableOpacity
                onPress={() => deleteStudent(item.id, () => navigation.navigate("Main"), { params: { screen: "Students" } })}
            >
                <MaterialCommunityIcons name="close-box-outline" size={24} color="#fff" />
            </TouchableOpacity>
        </IconShake>
    )
}

const styles = StyleSheet.create({
    deleteButton: {
        position: 'absolute',
        top: 10,
        right: 10
    }
})