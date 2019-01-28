import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BodyText from './src/elements/BodyText';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appbar}>
          <View>
            <Text style={styles.appbarTitle}>MEMOT</Text>
          </View>
        </View>

        <View style={styles.menuList}>
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
          <View style={styles.menuListItem}>
            <Text style={styles.menuItemTitle}>リストのサンプル</Text>
            <Text style={styles.menuItemDate}>2019/01/20</Text>
          </View>
        </View>

        <View style={styles.memoAddButton}>
          <Text style={styles.memoAddButtonTitle}>+</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appbar: {
    backgroundColor: '#265366',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 10,
  },
  appbarTitle: {
    color: 'white',
    fontSize: 18,
  },
  menuList: {
    width: '100%',
    flex: 1,
    marginTop: 78,
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
  memoAddButton: {
    backgroundColor: '#E31676',
    width: 48,
    height: 48,
    position: 'absolute',
    bottom: 32,
    right: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  memoAddButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: 'white',
  },
});
