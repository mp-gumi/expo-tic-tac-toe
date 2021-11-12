import React, { Dispatch, SetStateAction, useCallback, useMemo } from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";
import o from "../../assets/o.png";
import x from "../../assets/x.png";
import { Board } from "../TicTacToeTop";

export type BoxProps = {
  isFirstMove: boolean;
  setIsFirstMove: Dispatch<SetStateAction<boolean>>;
  values: Board;
  setValues: Dispatch<SetStateAction<Board>>;
  position: keyof Board;
  isGameSet: boolean;
};

function TicTacToeBox({
  isFirstMove,
  setIsFirstMove,
  values,
  setValues,
  position,
  isGameSet,
}: BoxProps) {
  const handlePress = useCallback(() => {
    if (isGameSet) {
      return;
    }
    if (values[position]) {
      return;
    }
    if (isFirstMove) {
      switch (position) {
        case "zero":
          setValues({ ...values, zero: "o" });
          break;
        case "one":
          setValues({ ...values, one: "o" });
          break;
        case "two":
          setValues({ ...values, two: "o" });
          break;
        case "three":
          setValues({ ...values, three: "o" });
          break;
        case "four":
          setValues({ ...values, four: "o" });
          break;
        case "five":
          setValues({ ...values, five: "o" });
          break;
        case "six":
          setValues({ ...values, six: "o" });
          break;
        case "seven":
          setValues({ ...values, seven: "o" });
          break;
        case "eight":
          setValues({ ...values, eight: "o" });
          break;
        default:
          break;
      }
    } else {
      switch (position) {
        case "zero":
          setValues({ ...values, zero: "x" });
          break;
        case "one":
          setValues({ ...values, one: "x" });
          break;
        case "two":
          setValues({ ...values, two: "x" });
          break;
        case "three":
          setValues({ ...values, three: "x" });
          break;
        case "four":
          setValues({ ...values, four: "x" });
          break;
        case "five":
          setValues({ ...values, five: "x" });
          break;
        case "six":
          setValues({ ...values, six: "x" });
          break;
        case "seven":
          setValues({ ...values, seven: "x" });
          break;
        case "eight":
          setValues({ ...values, eight: "x" });
          break;
        default:
          break;
      }
    }
    setIsFirstMove((prev) => !prev);
  }, [isGameSet, values, isFirstMove, position]);

  const showValueImage = useCallback(() => {
    switch (values[position]) {
      case "o":
        return <Image source={o} style={styles.valueImage} />;
      case "x":
        return <Image source={x} style={styles.valueImage} />;
      default:
        return null;
    }
  }, [values, position]);

  return (
    <Pressable style={styles.inner} onPress={handlePress}>
      {showValueImage()}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  inner: {
    width: 100,
    height: 100,
    borderColor: "#000",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  valueImage: {
    width: 75,
    height: 75,
  },
});

export default TicTacToeBox;
