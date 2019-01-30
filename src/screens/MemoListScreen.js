import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

export default class MemoListScreen extends React.Component {
  state = {
    memoList: [],
  }

  constructor(props) {
    super(props);
    this.handleOnCreate = this.handleOnCreate.bind(this);
  }

  componentWillMount() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();

    db.collection(`/user/${currentUser.uid}/memos/`)
      .onSnapshot((querySnapshot) => {
        const memoList = [];
        querySnapshot.forEach((doc) => {
          memoList.push({ ...doc.data(), key: doc.id });
        });
        console.log(memoList);
        this.setState({ memoList });
      });
  }

  handleOnCreate() {
    const { navigation } = this.props;
    navigation.navigate('MemoCreate');
  }

  render() {
    const { navigation } = this.props;
    const { memoList } = this.state;
    return (
      <View style={styles.container}>
        <MemoList navigation={navigation} memoList={memoList} />
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
