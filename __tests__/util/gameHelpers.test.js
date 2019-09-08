import { getWinner } from "../../src/util/gameHelpers";

describe("Game Helpers", () => {
  describe("getWinner", () => {
    const testArray = [
      { values: ["", "", "", "", "", "", "", "", ""], winner: null },
      { values: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], winner: null },
      { values: ["X", "X", "O", "O", "O", "X", "X", "O", "X"], winner: null },
      { values: ["X", "X", "X", "O", "O", "X", "O", "X", "O"], winner: "X" }, //0, 1, 2
      { values: ["X", "X", "O", "O", "O", "O", "X", "O", "X"], winner: "O" }, // 3, 4,5
      { values: ["O", "O", "X", "O", "O", "X", "X", "X", "X"], winner: "X" }, //6, 7, 8
      { values: ["X", "O", "", "X", "O", "", "X", "", ""], winner: "X" }, //0, 3, 6
      { values: ["X", "O", "O", "", "O", "X", "X", "O", "X"], winner: "O" }, //1, 4, 7
      { values: ["X", "O", "X", "", "O", "X", "O", "", "X"], winner: "X" }, //2, 5, 8
      { values: ["X", "O", "X", "", "X", "", "O", "O", "X"], winner: "X" }, //0, 4, 8
      { values: ["O", "", "X", "O", "X", "O", "X", "X", ""], winner: "X" }
    ];

    testArray.forEach((testCase, index) => {
      test("Calc winner test " + (index + 1), () => {
        expect.assertions(1);
        const winner = getWinner(testCase.values);
        expect(winner).toBe(testCase.winner);
      });
    });
  });
});
