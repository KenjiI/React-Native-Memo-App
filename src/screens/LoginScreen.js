import React from 'react';
import { StyleSheet, TextInput, Text, View, TouchableHighlight } from 'react-native';
import CircleButton from '../elements/CircleButton';

export default class MemoEditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loginTitle}>ログイン</Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="Password" />
        <TouchableHighlight style={styles.loginButton} onPress={() => {}} >
          <Text style={styles.buttonTitle}>送信</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
  },
  loginTitle: {
    fontSize: 32,
    marginBottom: 24,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    padding: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  loginButton: {
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 18,
  }
});
