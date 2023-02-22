import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ForeignSplash from './components/ForeignSplash';

export default function App() {
  return (
    <SafeAreaProvider>
      <ForeignSplash>
      </ForeignSplash>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
