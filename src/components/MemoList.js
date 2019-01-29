import React from 'react';
import {
  StyleSheet, Text, View, TouchableHighlight,
} from 'react-native';

export default class MemoList extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.menuList}>
        <TouchableHighlight onPress={() => navigation.navigate('MemoDetail')} underlayColor="transparent">
          <View style={styles.menuListItem}>
            <Text style={styles.menuItemTitle}>リストのサンプル</Text>
            <Text style={styles.menuItemDate}>2019/01/20</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.menuListItem}>
          <Text style={styles.menuItemTitle}>リストのサンプル</Text>
          <Text style={styles.menuItemDate}>2019/01/20</Text>
        </View>
        <View style={styles.menuListItem}>
          <Text style={styles.menuItemTitle}>リストのサンプル</Text>
          <Text style={styles.menuItemDate}>2019/01/20</Text>
        </View>
        <View style={styles.menuListItem}>
          <Text style={styles.menuItemTitle}>リストのサンプル</Text>
          <Text style={styles.menuItemDate}>2019/01/20</Text>
        </View>
        <View style={styles.menuListItem}>
          <Text style={styles.menuItemTitle}>リストのサンプル</Text>
          <Text style={styles.menuItemDate}>2019/01/20</Text>
        </View>
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
