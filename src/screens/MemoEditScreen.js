import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

export default class MemoEditScreen extends React.Component {
  state = {
    memo: {},
  }

  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentWillMount() {
    const { navigation } = this.props;
    const { memo } = navigation.state.params;
    this.setState({ memo });
  }

  handleOnSubmit() {
    const { navigation } = this.props;
    const { refreshMemo } = navigation.state.params;
    const { memo } = this.state;

    const newDate = firebase.firestore.Timestamp.now();
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();

    db.collection(`/user/${currentUser.uid}/memos/`).doc(memo.key)
      .update({
        body: memo.body,
        createdOn: newDate,
      })
      .then(() => {
        console.log('success');
        refreshMemo({ ...memo, createdOn: newDate });
        navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { memo } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          value={memo.body}
          onChangeText={text => this.setState({ memo: { ...memo, body: text } })}
          underlineColorAndroid="transparent"
          textAlignVertical="top"
        />
        <CircleButton
          name="check"
          style={styles.editButton}
          onPress={this.handleOnSubmit}
        />
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
