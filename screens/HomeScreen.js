import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Home</Text>

        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.gridContainer}>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardTitle}>Report Injury</Text>
              <Text style={styles.cardText}>Help injured animals by reporting their location.</Text>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Report</Text>
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardTitle}>View Rescues</Text>
              <Text style={styles.cardText}>See recent animal rescues in your area.</Text>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Explore</Text>
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardTitle}>Adopt a Pet</Text>
              <Text style={styles.cardText}>Find your new furry friend among adoptable pets.</Text>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Adopt Now</Text>
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardTitle}>Volunteer Actions</Text>
              <Text style={styles.cardText}>Join missions and help animals in need.</Text>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          {/* AI Detection Tool Section */}
          <View style={styles.aiSection}>
            <Text style={styles.aiTitle}>AI Detection Tool</Text>
            <Text style={styles.aiDescription}>Report any injuries detected by the AI tool:</Text>
            <TouchableOpacity 
              style={styles.aiButton} 
              onPress={() => navigation.navigate('Detection')}>
              <Ionicons name="camera" size={20} color="#fff" />
              <Text style={styles.aiButtonText}> Identify Injury</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="paw" size={20} color="#007bff" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Detection')}>
          <Ionicons name="search" size={20} color="#007bff" />
          <Text style={styles.navText}>AI Detection</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Account')}>
          <Ionicons name="person" size={20} color="#007bff" />
          <Text style={styles.navText}>Your Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, paddingHorizontal: 15, paddingTop: 40 },
  scrollContent: { paddingBottom: 80 },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },

  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { width: '48%', backgroundColor: '#f9f9f9', padding: 15, borderRadius: 10, marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 2 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  cardText: { fontSize: 13, color: '#555', marginBottom: 10 },
  cardButton: { backgroundColor: '#007bff', padding: 8, borderRadius: 5, alignItems: 'center' },
  cardButtonText: { color: '#fff', fontWeight: 'bold' },

  aiSection: { marginTop: 20, paddingHorizontal: 10 },
  aiTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  aiDescription: { fontSize: 14, color: '#555', marginBottom: 10 },
  aiButton: { flexDirection: 'row', backgroundColor: '#007bff', padding: 12, borderRadius: 5, alignItems: 'center', justifyContent: 'center' },
  aiButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 5 },

  bottomNav: { position: 'absolute', bottom: 0, width: '100%', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#f8f8f8', paddingVertical: 12, borderTopWidth: 1, borderColor: '#ddd' },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 12, color: '#007bff', marginTop: 4 },
});
