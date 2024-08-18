import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

// const windowWidth = Dimensions.get('window').width;
// const screenWidth = Dimensions.get('screen').width;
// const screenHeight = Dimensions.get('window').height;

const AsyncStorageComponent = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const storeUser = async () => {
        try {
            await AsyncStorage.setItem(username, password);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>AsyncStorage library</Text>

            <View style={styles.form}>
                <TextInput
                    placeholder='username'
                    value={username}
                    onChangeText={newText => setUsername(newText)}
                    style={styles.textInput}
                />

                <TextInput
                    placeholder='password'
                    value={password}
                    onChangeText={newText => setPassword(newText)}
                    style={styles.textInput}
                />

                <TouchableOpacity style={styles.btn} onPress={storeUser}>
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    text: {
        fontSize: 30,
        color: '#db2777'
    },
    btn: {
        backgroundColor: '#8b5cf6',
        width: 100,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 4,
        marginTop: 20
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    },
    form: {
        marginTop: 30,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 4,

        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.24,
                shadowRadius: 8,
            },
            android: {
                elevation: 2,
            }
        })
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 5,
        marginVertical: 10,
        borderRadius: 4,
    }
});

export default AsyncStorageComponent;

/*
Installation:
    - npm install @react-native-async-storage/async-storage
    - import AsyncStorage from '@react-native-async-storage/async-storage';
*/

/*
- "AsyncStorage" is a data storage system in React Native that is unencrypted,
 asynchronous, and allows users to persist data offline in React Native apps.

- AsyncStorage is also asynchronous, meaning that its methods run concurrently 
with the rest of your code, and it’s persistent, meaning that the stored data 
will always be available globally even if you log out or restart the application.

- This allows you to use and access the data from any React Native component .

- 
*/

/*
Ref:
- https://blog.logrocket.com/guide-react-natives-asyncstorage/
- 
*/

/*
- iOS Shadows: The shadow properties (shadowColor, shadowOffset, shadowOpacity, 
  shadowRadius) are specific to iOS.

- Android Shadows: The elevation property is specific to Android and is the 
  primary way to create shadows.

- https://stackoverflow.com/questions/45972506/creating-a-ui-with-box-shadow-in-react-native
- https://reactnative.dev/docs/shadow-props
*/