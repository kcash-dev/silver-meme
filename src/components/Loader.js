import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context } from '../context/StudentContext';
import AnimatedLoader from "react-native-animated-loader";

const Loader = () => {
    const { state } = useContext(Context);
    const [ visible, setVisible ] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setVisible({
            visible: !visible
            });
        }, 2000);
    }, []);

    return (
        <AnimatedLoader
            visible={ visible }
            overlayColor="rgba(255,255,255,0.75)"
            source={ require("./loader.json") }
            animationStyle={ styles.lottie }
            speed={1}
      >
        <Text>Gathering students into classroom...</Text>
      </AnimatedLoader>
    )
}

const styles = StyleSheet.create({
    lottie: {
        width: 100,
        height: 100
    }
})

export default Loader;