import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BodyText = function BodyText(props) {
  const { children } = props;
  return (
    <View style={styles.container}>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
  },
});

export default BodyText;
