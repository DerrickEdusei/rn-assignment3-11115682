import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Category from './Category';

const CategoryList = ({ categories }) => {
  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <View style={styles.categoryContainer}>
        {categories.map((category, index) => (
          <Category key={index} name={category.name} tasks={category.tasks} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default CategoryList;
