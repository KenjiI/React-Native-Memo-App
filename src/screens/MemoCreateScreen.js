import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

export default class MemoCreateScreen extends React.Component {
  state = {
    body: '',
  }

  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit() {
    const { navigation } = this.props;
    const { body } = this.state;
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();

    db.collection(`/user/${currentUser.uid}/memos/`).add({
      body,
      createdOn: new Date(),
    })
      .then((docRef) => {
        console.log(docRef);
        navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { body } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          value={body}
          placeholder="Please enter your new memo..."
          onChangeText={text => this.setState({ body: text })}
        />
        <CircleButton name="check" style={styles.editButton} onPress={this.handleOnSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    paddingTop: 32,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 16,
  },
});
