import React from "react";
import { render, fireEvent } from "react-native-testing-library";

import Board from "../../src/components/Board";

describe("Board component", () => {
  let props;
  let onMockPlayerMove;

  beforeEach(() => {
    onMockPlayerMove = jest.fn();
    jest.clearAllMocks();
    props = {
      values: new Array(9).fill(" "),
      curPlayer: "X",
      onPlayerMove: onMockPlayerMove
    };
  });

  test("should render empty board", () => {
    expect.assertions(2);
    const { toJSON, getAllByTestId } = render(<Board {...props} />);
    const boxes = getAllByTestId("box-button");

    expect(toJSON()).toMatchSnapshot();
    expect(boxes.length).toBe(9);
  });

  test("should be able to click all boxes on empty board", () => {
    expect.assertions(1);
    const { getAllByTestId } = render(<Board {...props} />);
    const boxes = getAllByTestId("box-button");

    fireEvent(boxes[0], "press");
    fireEvent(boxes[1], "press");
    fireEvent(boxes[2], "press");
    fireEvent(boxes[3], "press");
    fireEvent(boxes[4], "press");
    fireEvent(boxes[5], "press");
    fireEvent(boxes[6], "press");
    fireEvent(boxes[7], "press");
    fireEvent(boxes[8], "press");

    expect(onMockPlayerMove).toHaveBeenCalledTimes(9);
  });

  test("should display the next player", () => {
    expect.assertions(1);
    const { getByTestId } = render(<Board {...props} />);
    const nextPlayerText = getByTestId("player-text");
    expect(nextPlayerText.props.children).toEqual([
      "Next Player: ",
      props.curPlayer
    ]);
  });

  test("should render full board", () => {
    expect.assertions(2);
    props.values = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
    const { toJSON, getAllByTestId } = render(<Board {...props} />);
    const boxes = getAllByTestId("box-button");

    expect(toJSON()).toMatchSnapshot();
    expect(boxes.length).toBe(9);
  });
});
