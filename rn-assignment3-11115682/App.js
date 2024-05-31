import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryList from './components/CategoryList';
import TaskList from './components/TaskList';

const App = () => {
  const categories = [
    { name: 'Exercise', tasks: 12 },
    { name: 'Study', tasks: 12 },
    // Add other categories here
  ];
  const tasks = [
    { id: '1', title: 'Mobile App Development' },
    { id: '2', title: 'Web Development' },
    { id: '3', title: 'Push Ups' },
    // Add other tasks here
  ];

  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchBar />
      <CategoryList categories={categories} />
      <TaskList tasks={tasks} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f5ee',
  },
});

export default App;
 