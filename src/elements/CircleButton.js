import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Font } from 'expo';
import { createIconSet } from '@expo/vector-icons';
import FontAwesome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067',
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
    } = this.props;
    const { fontLoaded } = this.state;

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (reverse) {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
      <View style={[styles.memoAddButton, style, { backgroundColor: bgColor }]}>
        {
          fontLoaded ? (
            <CustomIcon name={name} style={[styles.memoAddButtonTitle, { color: textColor }]} />
          ) : null
        }
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
    fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 32,
  },
});
