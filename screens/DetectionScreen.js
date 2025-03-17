import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetectionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Detection Chat</Text>
      <Text style={styles.text}>Chat with the AI to analyze injuries.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, color: '#555' },
});
