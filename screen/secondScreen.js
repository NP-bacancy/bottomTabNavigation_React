/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

import MyStyle from '../constant/MyStyle';

const SecondScreen = props => {
    return (
        <View style={MyStyle.screen}>
            <Text style={MyStyle.title}>Second Screen</Text>
        </View>
    );
};

SecondScreen.navigationOptions = {
    headerTitle: 'Second Screen',
  };

export default SecondScreen;
