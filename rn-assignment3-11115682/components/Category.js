import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Category = ({ name, tasks }) => {
  return (
    <View style={styles.category}>
      {/* Placeholder for the image */}
      <View style={styles.categoryImagePlaceholder}></View>
      <Text style={styles.categoryName}>{name}</Text>
      <Text style={styles.categoryTasks}>{tasks} Tasks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  categoryImagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    borderRadius: 40,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryTasks: {
    fontSize: 14,
    color: '#666',
  },
});

export default Category;
