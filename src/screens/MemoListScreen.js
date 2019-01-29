import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

export default class MemoListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnCreate = this.handleOnCreate.bind(this);
  }

  handleOnCreate() {
    // eslint-disable-next-line
    const { navigation } = this.props;
    const db = firebase.firestore();
    const { currentUser } = navigation.state.params;

    db.collection(`/user/${currentUser.user.uid}/memos/`).add({
      body: 'memo body 22',
      createdOn: '2019/01/29',
      title: 'memoTitle',
    })
    .then((docRef) => {

    })
    .catch((error) => {

    });

    // navigation.navigate('MemoEdit');
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <MemoList navigation={navigation} />
        <CircleButton name="plus" onPress={this.handleOnCreate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
