// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Report Injury</Text>
          <Text style={styles.cardText}>Help injured animals by reporting their location.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>View Rescues</Text>
          <Text style={styles.cardText}>See recent animal rescues in your area.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Adopt a Pet</Text>
          <Text style={styles.cardText}>Find your new furry friend among adoptable pets.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Volunteer Actions</Text>
          <Text style={styles.cardText}>Sign up and participate in missions.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: '45%',
    backgroundColor: '#f8f9fa',
    padding: 15,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default HomeScreen;
