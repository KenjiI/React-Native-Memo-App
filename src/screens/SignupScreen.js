import React from 'react';
import {
  StyleSheet, TextInput, Text, View, TouchableHighlight,
} from 'react-native';

export default class SignupScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loginTitle}>メンバー登録</Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="Password" />
        <TouchableHighlight style={styles.loginButton} onPress={() => {}} underlayColor="#C70F66">
          <Text style={styles.buttonTitle}>登録する</Text>
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
    width: '50%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 18,
  },
});
