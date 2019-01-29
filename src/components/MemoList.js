import React from 'react';
import {
  StyleSheet, Text, View, TouchableHighlight, FlatList,
} from 'react-native';

export default class MemoList extends React.Component {
  constructor(props) {
    super(props);
    this.renderMemo = this.renderMemo.bind(this);
  }

  renderMemo({ item }) {
    const { navigation } = this.props;

    return (
      <TouchableHighlight
        onPress={() => navigation.navigate('MemoDetail')}
        underlayColor="transparent"
      >
        <View style={styles.menuListItem}>
          <Text style={styles.menuItemTitle}>{item.body}</Text>
          <Text style={styles.menuItemDate}>{item.body}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    const { memoList } = this.props;
    // const outputList = [];
    // console.log(memoList);
    // memoList.forEach((memo) => {
    //   outputList.push(this.renderMemo(memo));
    // });
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
