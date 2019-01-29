import React from 'react';
import {
  StyleSheet, TextInput, Text, View, TouchableHighlight,
} from 'react-native';


export default class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.loginTitle}>ログイン</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => this.setState({ email: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => this.setState({ password: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableHighlight
          style={styles.loginButton}
          onPress={() => navigation.navigate('Home')}
          underlayColor="#C70F66"
        >
          <Text style={styles.buttonTitle}>ログインする</Text>
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
