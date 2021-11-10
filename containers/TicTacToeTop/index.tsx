import React, { useCallback, useMemo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Table, Rows } from "react-native-table-component";
import TicTacToeBox from "../TicTacToeBox";
import TicTacToeResult from "../TicTacToeResult";

export type ValuesProps = {
  zero: string | null;
  one: string | null;
  two: string | null;
  three: string | null;
  four: string | null;
  five: string | null;
  six: string | null;
  seven: string | null;
  eight: string | null;
};

function TicTacToeTop() {
  const [turnToggle, setTurnToggle] = useState(true);
  const [finishedToggle, setFinishedToggle] = useState(true);
  const [values, setValues] = useState<ValuesProps>({
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
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ].map((array) =>
        array.map((value) => (
          <TicTacToeBox
            turnToggle={turnToggle}
            setTurnToggle={setTurnToggle}
            values={values}
            setValues={setValues}
            position={value}
            finishedToggle={finishedToggle}
          />
        ))
      ),
    [turnToggle, values, finishedToggle]
  );

  const deleteResult = useCallback(() => {
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
    setTurnToggle(true);
    setFinishedToggle(true);
  }, []);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.titleText}>
        <TicTacToeResult
          values={values}
          setFinishedToggle={setFinishedToggle}
          turnToggle={turnToggle}
        />
      </Text>
      <View style={styles.container}>
        <Table borderStyle={styles.tableStyle}>
          <Rows data={boxArray} />
        </Table>
      </View>
      <TouchableOpacity
        onPress={deleteResult}
        style={styles.clearButtonWrapper}
      >
        <Text style={styles.clearButton}>やりなおす</Text>
      </TouchableOpacity>
    </View>
  );
}

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
