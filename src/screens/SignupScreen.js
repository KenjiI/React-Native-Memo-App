import React from 'react';
import {
  StyleSheet, TextInput, Text, View, TouchableHighlight,
} from 'react-native';
import firebase from 'firebase';
import { StackActions, NavigationActions } from 'react-navigation';

export default class SignupScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit() {
    const { navigation } = this.props;
    const { email, password } = this.state;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      // eslint-disable-next-line
      .then((user) => {
        const resetActions = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
          ],
        });
        navigation.dispatch(resetActions);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { email, password } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.loginTitle}>メンバー登録</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => this.setState({ email: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address"
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => this.setState({ password: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
          underlineColorAndroid="transparent"
        />
        <TouchableHighlight
          style={styles.loginButton}
          onPress={this.handleOnSubmit}
          underlayColor="#C70F66"
        >
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
