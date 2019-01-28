import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CircleButton extends React.Component {
  render() {
    const {
      children = '+',
      style = {},
      reverse = false,
    } = this.props;

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (reverse) {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
      <View style={[styles.memoAddButton, style, { backgroundColor: bgColor }]}>
        <Text style={[styles.memoAddButtonTitle, { color: textColor }]}>
          { children }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoAddButton: {
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
  },
});
