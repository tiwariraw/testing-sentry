import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home page</Text>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AsyncStorage')}>
                <Text style={styles.btnText}>AsyncStotage</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    text: {
        fontSize: 30,
    },
    btn: {
        backgroundColor: '#8b5cf6',
        width: 200,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 4,
        marginTop: 20
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    }
});

export default Home;
