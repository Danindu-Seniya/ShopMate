import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ARNavigationScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <SimpleLineIcons name="location-pin" size={150} color="#727272" />
            <Text style={styles.title}>Navigate Easily</Text>
            <Text style={styles.sentence}>Find your destination easy and fast with Augmented Reality</Text>

            <View style={styles.buttonWrapper}>
                <Text style={styles.buttonWrapperText}>Click Next to start your Navigation </Text>
    
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        paddingTop: 10,
    },
    sentence:{
        fontSize: 14,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 100,
        borderRadius: 8,
        elevation: 3,
        backgroundColor: 'black',
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    buttonWrapper: {
        paddingTop: 20,
    },
    buttonWrapperText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },

})
