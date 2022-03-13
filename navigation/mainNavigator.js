/* eslint-disable prettier/prettier */
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-vector-icons';

import Country from '../screen/country';
import CountryList from '../screen/countryList';
import SecondScreen from '../screen/secondScreen';
import ThirdScreen from '../screen/thirdScreen';

const MainNavigator = createStackNavigator({
    Country: {
        screen: Country,
    },
    CountryList: {
        screen: CountryList,
    },
},
{
    mode: 'modal',
    defaultNavigationOptions: {
        headerTitleAlign: 'center',
    },
});

const SecondNavigator = createStackNavigator({
    Second: {
        screen: SecondScreen,
    },
},
{
    mode: 'modal',
    defaultNavigationOptions: {
        headerTitleAlign: 'center',
    },
});

const ThirdNavigator = createStackNavigator({
    Third: {
        screen: ThirdScreen,
    },
},
{
    mode: 'modal',
    defaultNavigationOptions: {
        headerTitleAlign: 'center',
    },
});

const MainTabNavigator = createMaterialBottomTabNavigator(
    {
      First: {
          screen: MainNavigator,
        //   navigationOptions: {
        //     tabBarLabel: 'Home',
        //     tabBarOptions: {
        //       activeTintColor: '#006600',
        //     },
        //     tabBarIcon: (tabInfo) => {
        //       return (
        //         <Icon
        //           name="md-home"
        //           size={24}
        //           color={tabInfo.focused ? '#006600' : '#8e8e93'}
        //         />
        //       );
        //     },
        //   },
    },
      Second: { screen: SecondNavigator },
      Third: { screen: ThirdNavigator },
    },
    {
      initialRouteName: 'First',
      activeColor: '#000000',
      inactiveColor: '#ffffff',
      barStyle: { backgroundColor: '#777777' },
    }
  );

export default createAppContainer(MainTabNavigator);
