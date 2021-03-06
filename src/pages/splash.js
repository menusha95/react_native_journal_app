import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';



const SplashScreen = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const navigation = useNavigation();

    //funciton to check if the uid of the user is available
    const getValueFunction = () => {
        // function to get the value from AsyncStorage
        AsyncStorage.getItem('uid').then(
            (value) => {
                setTimeout(() => {
                    if (value == null) {
                        navigation.navigate("Login");
                    } else {
                        navigation.navigate("Home");
                    }
                }, 3000);

            }

        );
    }

    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {
            getValueFunction();
        });

        return unsubscribe;

    }, [navigation]);

    return (

        <View style={{
            height: windowHeight, width: windowWidth, justifyContent: 'center',
            alignSelf: "center"
        }}>
            <Text style={styles.textHeader}>My {"\n"}Journal</Text>

        </View>

    );

}



const styles = StyleSheet.create({

    textHeader: {
        fontSize: 50,
        fontWeight: "bold",
        color: '#17202A',
        justifyContent: 'center',
        alignSelf: "center"
    },
    cellText: {
        fontSize: 28,
        color: "#17202A",
        fontWeight: "bold",
    },
});

export default SplashScreen;