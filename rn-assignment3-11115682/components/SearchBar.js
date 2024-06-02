import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#666" />
      <TextInput placeholder="Search" style={styles.input} />
      <Icon name="sliders-h" size={20} color="#e17e01" style={styles.filterIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
  filterIcon: {
    marginLeft: 10,
  },
});

export default SearchBar;
