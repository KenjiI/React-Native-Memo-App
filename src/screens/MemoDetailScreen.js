import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from '../elements/CircleButton';
import { timestampToDate } from '../utils';

export default class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
  }

  componentWillMount() {
    const { navigation } = this.props;
    const { item } = navigation.state.params;
    this.setState({ memo: item });
  }

  render() {
    const { navigation } = this.props;
    const { memo } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>{memo.body.substring(0, 12)}</Text>
            <Text style={styles.memoHeaderDate}>{timestampToDate(memo.createdOn)}</Text>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text style={styles.memoBody}>
            {memo.body}
          </Text>
        </View>

        <CircleButton
          name="pencil"
          reverse="true"
          style={styles.editButton}
          onPress={() => navigation.navigate('MemoEdit')}
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
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: 'white',
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    flex: 1,
  },
  editButton: {
    top: 75,
    backgroundColor: 'white',
  },
  memoBody: {
    fontSize: 15,
    lineHeight: 22,
  },
});
