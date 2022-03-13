/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const CountryGrid = props => {
    return (
        <View style={styles.gridItem}>
            <Text style={styles.gridTitle}>{props.item.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
gridItem: {
    margin: 10,
    padding:20,
    height: 100,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.45,
    backgroundColor: '#777777',
    alignItems: 'center',
    justifyContent: 'center',
},
gridTitle: {
    // fontFamily: 'Hubballi-Regular',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
},
});

export default CountryGrid;
