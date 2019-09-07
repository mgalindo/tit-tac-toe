import React from "react";

import { render } from "react-native-testing-library";

import Box from "../../src/components/Box";
import { italic } from "ansi-colors";

describe("Box component", () => {
  let props;
  let onPlayerMove;

  beforeEach(() => {
    const onPlayerMove = jest.fn();
    props = { value: "", index: 0, curPlayer: "X", onPlayerMove: onPlayerMove };
  });

  test("should render without value", () => {
    expect.assertions(1);
    const { toJSON } = render(<Box {...props} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test("should render with X value", () => {
    expect.assertions(1);
    props.value = 'X';
    const { toJSON } = render(<Box {...props} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test("should render with O value", () => {
    expect.assertions(1);
    props.value = 'O';
    const { toJSON } = render(<Box {...props} />);
    expect(toJSON()).toMatchSnapshot();
  });  
  
});
