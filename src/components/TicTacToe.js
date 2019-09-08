import * as React from "react";
import { Alert, Button, View, StyleSheet } from "react-native";
import Board from "./Board";

/*
Assumes the board tiles are numbered like this
0 1 2
3 4 5
6 7 8
*/
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export default class TicTacToe extends React.Component {
  getPlayer = moveIndex => {
    const players = ["X", "O"];
    return players[moveIndex % 2];
  };

  getEmptyState = () => {
    return {
      values: new Array(9).fill(" "),
      curMove: 0,
      curPlayer: this.getPlayer(0)
    };
  };

  state = this.getEmptyState();

  moveHandler = (index, value) => {
    const newValues = [...this.state.values];
    newValues[index - 1] = value;
    const curMove = this.state.curMove + 1;
    const curPlayer = this.getPlayer(curMove);
    this.setState(
      { values: newValues, curMove, curPlayer },
      this.processNewState
    );
  };

  getWinner = values => {
    for (let winComb of winCombinations) {
      const [index1, index2, index3] = winComb;
      if (
        values[index1].trim() !== "" &&
        values[index1] === values[index2] &&
        values[index1] === values[index3]
      ) {
        return values[index1];
      }
    }
    return null;
  };

  processNewState = () => {
    const { curMove, values } = this.state;
    const winner = this.getWinner(values);
    if (winner) {
      Alert.alert("The winner is: " + winner, "", [
        { text: "OK", onPress: this.restartGame }
      ]);
    }

    if (!winner && curMove === 9) {
      Alert.alert("Game is a draw", "", [
        { text: "OK", onPress: this.restartGame }
      ]);
    }
  };

  restartGame = () => {
    this.setState(this.getEmptyState());
  };

  render() {
    const { curPlayer, values } = this.state;
    return (
      <View style={styles.container}>
        <Board
          curPlayer={curPlayer}
          values={values}
          onPlayerMove={this.moveHandler}
        />
        <View style={styles.footer}>
          <Button
            style={styles.button}
            color="grey"
            title="Restart Game"
            onPress={this.restartGame}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  footer: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "black"
  }
});
