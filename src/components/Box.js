import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";

const DeviceWidth = Dimensions.get("window").width;

const Box = props => {
  const { value, index, onPlayerMove, curPlayer } = props;
  const disabled = value.trim() !== "";
  let valueStyle = value.trim() === "" ? {} : styles["box" + value];

  return (
    <View style={[styles.box, valueStyle]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (!disabled) {
            onPlayerMove(index, curPlayer);
          }
        }}
        disabled={disabled}
        testID="box-button"
      >
        <Text style={styles.boxText} testID="box-text">
          {value}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

Box.propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  curPlayer: PropTypes.string.isRequired,
  onPlayerMove: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  box: {
    width: DeviceWidth * 0.2,
    height: DeviceWidth * 0.2,
    marginBottom: 5,
    marginLeft: 6,
    backgroundColor: "#4A8305",
    justifyContent: "center"
  },
  boxX: {
    backgroundColor: "grey"
  },
  boxO: {
    backgroundColor: "red"
  },
  button: {
    alignItems: "center"
  },
  boxText: {
    fontSize: 40,
    fontWeight: "bold"
  }
});

export default Box;
