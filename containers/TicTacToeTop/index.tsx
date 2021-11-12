import React, { useCallback, useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Table, Rows } from "react-native-table-component";
import TicTacToeBox from "../TicTacToeBox";
import TicTacToeResult from "../TicTacToeResult";

type Symbol = "o" | "x";
type JudgeResultMessage =
  | "先手番の勝利です"
  | "後手番の勝利です"
  | "引き分けです"
  | "先手番です"
  | "後手番です";

export type Board = {
  zero: Symbol | null;
  one: Symbol | null;
  two: Symbol | null;
  three: Symbol | null;
  four: Symbol | null;
  five: Symbol | null;
  six: Symbol | null;
  seven: Symbol | null;
  eight: Symbol | null;
};

function TicTacToeTop() {
  const [isFirstMove, setIsFirstMove] = useState(true);
  const [finishedToggle, setFinishedToggle] = useState(false);
  const [values, setValues] = useState<Board>({
    zero: null,
    one: null,
    two: null,
    three: null,
    four: null,
    five: null,
    six: null,
    seven: null,
    eight: null,
  });

  const boxArray = useMemo(
    () =>
      [
        ["zero", "one", "two"] as const,
        ["three", "four", "five"] as const,
        ["six", "seven", "eight"] as const,
      ].map((array) =>
        array.map((value) => (
          <TicTacToeBox
            isFirstMove={isFirstMove}
            setIsFirstMove={setIsFirstMove}
            values={values}
            setValues={setValues}
            position={value}
            isGameSet={isGameSet(resultMessage)}
          />
        ))
      ),
    [isFirstMove, values, isGameSet]
  );

  const initializeBoard = useCallback(() => {
    setValues({
      zero: null,
      one: null,
      two: null,
      three: null,
      four: null,
      five: null,
      six: null,
      seven: null,
      eight: null,
    });
    setIsFirstMove(true);
    setFinishedToggle(true);
  }, []);

  const resultMessage = judgeResult({ values, isFirstMove });
  console.log({ isFirstMove, values, isGameSet });

  return (
    <View style={styles.wrapper}>
      <Text style={styles.titleText}>
        <TicTacToeResult resultMessage={resultMessage} />
      </Text>
      <View style={styles.container}>
        <Table borderStyle={styles.tableStyle}>
          <Rows data={boxArray} />
        </Table>
      </View>
      <TouchableOpacity
        onPress={initializeBoard}
        style={styles.clearButtonWrapper}
      >
        <Text style={styles.clearButton}>やりなおす</Text>
      </TouchableOpacity>
    </View>
  );
}

const judgeResult = ({
  values,
  isFirstMove,
}: {
  values: Board;
  isFirstMove: boolean;
}): JudgeResultMessage => {
  const { zero, one, two, three, four, five, six, seven, eight } = values;
  if (four === "o") {
    if (
      (four === zero && four === eight) ||
      (four === two && four === six) ||
      (four === one && four === seven) ||
      (four === three && four === five)
    ) {
      return "先手番の勝利です";
    }
  }
  if (zero === "o") {
    if ((zero === one && zero === two) || (zero === three && zero === six)) {
      return "先手番の勝利です";
    }
  }
  if (eight === "o") {
    if (
      (eight === two && eight === five) ||
      (eight === six && eight === seven)
    ) {
      return "先手番の勝利です";
    }
  }
  if (four === "x") {
    if (
      (four === zero && four === eight) ||
      (four === two && four === six) ||
      (four === one && four === seven) ||
      (four === three && four === five)
    ) {
      return "後手番の勝利です";
    }
  }
  if (zero === "x") {
    if ((zero === one && zero === two) || (zero === three && zero === six)) {
      return "後手番の勝利です";
    }
  }
  if (eight === "x") {
    if (
      (eight === two && eight === five) ||
      (eight === six && eight === seven)
    ) {
      return "後手番の勝利です";
    }
  }
  if (zero && one && two && three && four && five && six && seven && eight) {
    return "引き分けです";
  }
  if (isFirstMove) {
    return "先手番です";
  }
  return "後手番です";
};

const isGameSet = (resultMessage: JudgeResultMessage): boolean => {
  if (
    resultMessage === "先手番の勝利です" ||
    resultMessage === "後手番の勝利です" ||
    resultMessage === "引き分けです"
  ) {
    return true;
  }
  return false;
};

const styles = StyleSheet.create({
  wrapper: {
    alignContent: "center",
    justifyContent: "center",
  },
  titleText: {
    textAlign: "center",
    margin: 10,
    fontSize: 20,
  },
  clearButton: {
    borderColor: "#000",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    textAlign: "center",
    width: 100,
  },
  clearButtonWrapper: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  tableStyle: {
    borderWidth: 1,
    borderColor: "#000",
    width: 100,
    height: 100,
  },
  container: {
    width: 300,
  },
});

export default TicTacToeTop;
