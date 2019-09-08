import React from "react";
import { render, fireEvent } from "react-native-testing-library";

import Box from "../../src/components/Box";

describe("Box component", () => {
  let props;
  let onMockPlayerMove;

  beforeEach(() => {
    onMockPlayerMove = jest.fn();
    jest.clearAllMocks();
    props = {
      value: "",
      index: 0,
      curPlayer: "X",
      onPlayerMove: onMockPlayerMove
    };
  });

  test("should render without value", () => {
    expect.assertions(2);
    const { toJSON, getByTestId } = render(<Box {...props} />);
    fireEvent(getByTestId("box-button"), "press");

    expect(toJSON()).toMatchSnapshot();
    expect(onMockPlayerMove).toHaveBeenCalledWith(props.index, props.curPlayer);
  });

  test("should render with X value", () => {
    expect.assertions(2);
    props.value = "X";
    const { toJSON, getByTestId } = render(<Box {...props} />);
    fireEvent(getByTestId("box-button"), "press");

    expect(toJSON()).toMatchSnapshot();
    expect(onMockPlayerMove).not.toHaveBeenCalled();
  });

  test("should render with O value", () => {
    expect.assertions(2);
    props.value = "O";
    const { toJSON, getByTestId } = render(<Box {...props} />);
    fireEvent(getByTestId("box-button"), "press");

    expect(toJSON()).toMatchSnapshot();
    expect(onMockPlayerMove).not.toHaveBeenCalled();
  });
});
