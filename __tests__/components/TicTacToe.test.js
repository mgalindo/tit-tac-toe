import React from "react";
import { View } from "react-native";
import { render, fireEvent } from "react-native-testing-library";
import TicTacToe from "../../src/components/TicTacToe";

describe("TicTacToe component", () => {
  // let props;
  // let onMockPlayerMove;

  // beforeEach(() => {
  //   onMockPlayerMove = jest.fn();
  //   jest.clearAllMocks();
  //   props = {
  //     values: new Array(9).fill(" "),
  //     curPlayer: "X",
  //     onPlayerMove: onMockPlayerMove
  //   };
  // });

  test("should render empty TicTacToe", () => {
    //expect.assertions(1);
    const { toJSON } = render(<TicTacToe />);
    expect(toJSON()).toMatchSnapshot();
  });

  // test("should render empty TicTacToe", () => {
  //   //expect.assertions(1);
  //   const { getByTestId } = render(<View><TicTacToe testID="game-id"/></View>);

  //   const game = getByTestId("game-id");
  //   const winner game.getWinner();
  // });

});