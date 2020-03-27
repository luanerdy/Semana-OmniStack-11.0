import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.cont}>
      <Text style={styles.nun}>Hello World</Text>
      <Text style={styles.nun}>This is my first text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
	cont: {
		flex: 1,
		backgroundColor: '#202030',
		alignItems: 'center',
		justifyContent: 'center'
	},
	nun: {
		color: '#DDEFFA',
	}
})
