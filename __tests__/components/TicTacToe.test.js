import React from "react";
import { Alert } from "react-native";
import { render } from "react-native-testing-library";
import { create } from "react-test-renderer";

import TicTacToe from "../../src/components/TicTacToe";

jest.mock("Alert", () => {
  return {
    alert: jest.fn()
  };
});

describe("TicTacToe component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should render empty TicTacToe", () => {
    expect.assertions(1);
    const { toJSON } = render(<TicTacToe />);
    expect(toJSON()).toMatchSnapshot();
  });

  test("should have a Restart button", () => {
    expect.assertions(1);
    const { getByTestId } = render(<TicTacToe />);
    const restartButton = getByTestId("restart-button");

    expect(restartButton.props.title).toEqual("Restart Game");
  });

  test("should declare a winner", () => {
    expect.assertions(1);
    const gameInstance = create(<TicTacToe />).getInstance();
    gameInstance.state = {
      values: ["X", "X", "X", "O", "O", "X", "O", "X", "O"],
      curMove: 9,
      curPlayer: "X"
    };
    gameInstance.processNewState();

    expect(Alert.alert).toHaveBeenCalledWith(
      "The winner is: X",
      expect.anything(),
      expect.anything()
    );
  });

  test("should declare a draw", () => {
    expect.assertions(1);
    const gameInstance = create(<TicTacToe />).getInstance();
    gameInstance.state = {
      values: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
      curMove: 9,
      curPlayer: "X"
    };
    gameInstance.processNewState();

    expect(Alert.alert).toHaveBeenCalledWith(
      "Game is a draw",
      expect.anything(),
      expect.anything()
    );
  });
});
