import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignInScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Access Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Your email address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={() => alert('Password reset link sent!')}>
        <Text style={styles.forgotText}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>Need an account? <Text style={styles.link} onPress={() => navigation.navigate('Welcome')}>Sign Up</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#000', marginBottom: 20 },
  input: { width: '80%', padding: 12, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, marginBottom: 15 },
  forgotText: { color: '#007bff', marginBottom: 15 },
  button: { backgroundColor: '#007bff', padding: 15, borderRadius: 8, width: '80%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  registerText: { marginTop: 20 },
  link: { color: '#007bff', fontWeight: 'bold' },
});
