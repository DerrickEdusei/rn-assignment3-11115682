import React from 'react';
import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  const tasks = [
    { id: '1', title: 'Mobile App Development' },
    { id: '2', title: 'Web Development' },
    { id: '4', title: 'Push Ups' },
    { id: '5', title: 'Watching a Documentary' },
    { id: '6', title: 'Online Shopping' },
    { id: '7', title: 'Pilates Session' },
    { id: '8', title: 'Journal Writing' },
    { id: '9', title: 'Bake Cookies' },
    { id: '10', title: 'Learn Spanish' },
    { id: '11', title: 'Cycling' },
    { id: '12', title: 'Ironing Clothes' },
    { id: '13', title: 'Organize Closet' },
    { id: '14', title: 'Deep Breathing Exercises' },
    { id: '15', title: 'Team Brainstorming Session' },
    { id: '16', title: 'Power Nap' }
  ];

  const categories = [
    { id: '1', title: 'Exercise', tasks: 12, image: require('./assets/exercise.png/') },
    { id: '2', title: 'Study', tasks: 8, image: require('./assets/study.png') },
    // { id: '3', title: 'Work', tasks: 10, image: require('./assets/work.png') },
    // { id: '4', title: 'Health', tasks: 7, image: require('./assets/health.png') },
    // { id: '5', title: 'Household', tasks: 5, image: require('./assets/household.png') },
    // { id: '6', title: 'Leisure', tasks: 4, image: require('./assets/leisure.png') },
    // { id: '7', title: 'Personal', tasks: 6, image: require('./assets/personal.png') },
    // { id: '8', title: 'Other', tasks: 3, image: require('./assets/other.png') },
  ];

  const renderTask = ({ item }) => (
    <View style={styles.taskCard}>
      <Text style={styles.taskText}>{item.title}</Text>
    </View>
  );

  const renderCategory = ({ item }) => (
    <View style={styles.categoryCard}>
      <Text style={styles.categoryText}>{item.title}</Text>
      <Text style={styles.taskCount}>{item.tasks} Tasks</Text>
      <Image source={item.image} style={styles.categoryImage} />
    </View>
  );

  const renderHeader = () => (
    <>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.subtitle}>14 tasks today</Text>
        </View>
        <Image
          source={require('./assets/profile.png')}
          style={styles.userImage}
        />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
          />
        </View>
        <Icons name="sliders-h" size={24} color="#fff" style={styles.filterIcon} />
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategory}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categories}
      />

      {/* Ongoing Tasks */}
      <Text style={styles.sectionTitle}>Ongoing Tasks</Text>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={
          <View style={styles.buttonContainer}>
            <Button
              title="Add New Task"
              onPress={() => alert('Button Pressed')}
              color="#ff5733"
            />
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingBottom: 25,
    paddingTop: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    padding: 8,
    marginBottom: 16,
  },
  searchBox: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 8,
    height: 49,
  },
  searchIcon: {
    padding: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  filterIcon: {
    marginLeft: 20,
    backgroundColor: '#F0522F',
    padding: 8,
    borderRadius: 14,
    height: 48,
    width: 50,
    paddingTop: 12,
    paddingLeft: 13,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 16,
  },
  categories: {
    paddingLeft: 16,
  },
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 6,
    width: 186,
    height: 192,
    marginRight: 24,
  },
  categoryImage: {
    width: 145,
    height: 138,
    alignSelf: 'center',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  taskCount: {
    fontSize: 14,
    paddingLeft: 10,
  },
  taskCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 45,
    paddingHorizontal: 15,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E8D1BA',
    marginHorizontal: 16,
  },
  taskText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 16,
    marginHorizontal: 16,
  },
});

export default App;