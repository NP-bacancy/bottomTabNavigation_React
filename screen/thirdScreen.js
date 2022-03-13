/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

import MyStyle from '../constant/MyStyle';

const ThirdScreen = props => {
    return (
        <View style={MyStyle.screen}>
            <Text style={MyStyle.title}>Third Screen</Text>
        </View>
    );
};

ThirdScreen.navigationOptions = {
    headerTitle: 'Third Screen',
  };

export default ThirdScreen;
