import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import CircleButton from '../elements/CircleButton';

export default class MemoEditScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TextInput style={styles.memoEditInput} multiline value="aaa" />
        <CircleButton name="check" style={styles.editButton} onPress={() => navigation.goBack()} />
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
