import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CircleButton extends React.Component {
  render() {
    const { children = '+' } = this.props;
    return (
      <View style={styles.memoAddButton}>
        <Text style={styles.memoAddButtonTitle}>
          { children }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
