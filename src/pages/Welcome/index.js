import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

export default function Welcome() {
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                source={require('../../../Logo')}
                style={{ width: '100%' }}
                resizeMode="contain"
                />
            </View>

        </View>
    )
}