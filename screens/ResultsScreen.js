import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ResultsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔍 AI Analysis</Text>
      <Text>🚑 Injury Detected: Minor</Text>
      <Text>🩺 Recommended Action: Apply first aid and monitor</Text>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});

export default ResultsScreen;
