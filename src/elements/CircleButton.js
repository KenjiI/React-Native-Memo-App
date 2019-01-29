import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Font } from 'expo';
import { createIconSet } from '@expo/vector-icons';
import FontAwesome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067',
  check: '\uf00c',
}, 'FontAwesome');

export default class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentWillMount() {
    await Font.loadAsync({ FontAwesome });
    this.setState({ fontLoaded: true });
  }

  render() {
    const {
      name,
      style = {},
      reverse = false,
      onPress,
    } = this.props;
    const { fontLoaded } = this.state;

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (reverse) {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.memoAddButton, { backgroundColor: bgColor }]}>
          {
            fontLoaded ? (
              <CustomIcon name={name} style={[styles.memoAddButtonTitle, { color: textColor }]} />
            ) : null
          }
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    borderRadius: 24,
    width: 48,
    height: 48,
  },
  memoAddButton: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  memoAddButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 32,
  },
});
