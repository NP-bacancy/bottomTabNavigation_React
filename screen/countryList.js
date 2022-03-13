/* eslint-disable prettier/prettier */
import React, {useState, useCallback} from 'react';
import {StyleSheet, View, FlatList, Dimensions, RefreshControl} from 'react-native';
import { LogBox } from 'react-native';

import CountryGrid from '../component/countryGrid';
// import Color from '../constants/color';

import {COUNTRY} from '../constant/countryData';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const CountryList = props => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

  const renderGridItem = (itemData) => {
      return <CountryGrid
              item={itemData.item}
            />;
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={COUNTRY}
        renderItem={renderGridItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}
      />
    </View>
  );
};

CountryList.navigationOptions = {
  headerTitle: 'Countries',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CountryList;
