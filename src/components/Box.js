import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const DeviceWidth = Dimensions.get('window').width;

const Box = props => {
  const { value, index, onPlayerMove, curPlayer } = props;
  const disabled = value.trim() !== '';
  let valueStyle = value.trim() === '' ? {} : styles['box' + value];

  return (
    <View style={[styles.box, valueStyle]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPlayerMove(index, curPlayer)}
        disabled={disabled}>
        <Text style={styles.boxText}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: DeviceWidth * 0.2,
    height: DeviceWidth * 0.2,
    marginBottom: 5,
    marginLeft: 6,
    backgroundColor: '#4A8305',
    justifyContent: 'center',
  },
  boxX: {
    backgroundColor: 'grey',
  },
  boxO: {
    backgroundColor: 'red',
  },
  button: {
    alignItems: 'center',
  },
  boxText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default Box;
