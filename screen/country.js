/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import MyStyle from '../constant/MyStyle';

const Country = props => {
    return (
        <TouchableOpacity onPress={() => {props.navigation.navigate('CountryList');}} style={MyStyle.screen}>
            <View>
                <Text style={MyStyle.title}>Click to See Countries of World</Text>
            </View>
        </TouchableOpacity>
    );
};

Country.navigationOptions = {
    headerTitle: 'Home',
  };

// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     title: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         color: '#ff4400',
//         textAlign: 'center',
//     }
// });

export default Country;
