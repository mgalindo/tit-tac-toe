import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import TicTacToe from './src/components/TicTacToe';

const App = () => (
  <View style={styles.container}>
    <TicTacToe />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
