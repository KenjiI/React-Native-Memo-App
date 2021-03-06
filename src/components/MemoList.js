import React from 'react';
import {
  StyleSheet, Text, View, TouchableHighlight, FlatList,
} from 'react-native';

import { timestampToDate } from '../utils';

export default class MemoList extends React.Component {
  constructor(props) {
    super(props);
    this.renderMemo = this.renderMemo.bind(this);
  }

  renderMemo({ item }) {
    const { navigation } = this.props;

    return (
      <TouchableHighlight
        onPress={() => navigation.navigate('MemoDetail', { item })}
        underlayColor="transparent"
      >
        <View style={styles.menuListItem}>
          <Text style={styles.menuItemTitle}>{item.body.substring(0, 12)}</Text>
          <Text style={styles.menuItemDate}>{timestampToDate(item.createdOn)}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    const { memoList } = this.props;
    return (
      <View style={styles.menuList}>
        <FlatList data={memoList} renderItem={this.renderMemo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuList: {
    width: '100%',
    flex: 1,
  },
  menuListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  menuItemTitle: {
    fontSize: 18,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  menuItemDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});
