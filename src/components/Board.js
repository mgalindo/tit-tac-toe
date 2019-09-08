import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text } from "react-native";
import Box from "./Box";

const Board = props => {
  const renderRow = rowNum => {
    const columns = [1, 2, 3];
    const { curPlayer, values, onPlayerMove } = props;
    return columns.map(colNum => {
      const index = colNum + 3 * rowNum;
      return (
        <Box
          key={index}
          index={index}
          value={values[index - 1]}
          curPlayer={curPlayer}
          onPlayerMove={onPlayerMove}
        />
      );
    });
  };

  const rows = [0, 1, 2];
  const { curPlayer } = props;
  return (
    <View style={styles.boardContainer}>
      {rows.map(rowNum => {
        return (
          <View key={rowNum.toString()} style={styles.row}>
            {renderRow(rowNum)}
          </View>
        );
      })}
      <Text style={styles.playerText} testID="player-text">
        Next Player: {curPlayer}
      </Text>
    </View>
  );
};

Board.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  curPlayer: PropTypes.string.isRequired,
  onPlayerMove: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  boardContainer: {
    flex: 0.8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  playerText: {
    marginTop: 25,
    fontSize: 30,
    color: "#4A8305"
  },
  row: {
    flexDirection: "row"
  }
});

export default Board;
