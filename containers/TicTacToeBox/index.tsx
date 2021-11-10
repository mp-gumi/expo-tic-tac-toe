import React, { Dispatch, SetStateAction, useCallback, useMemo } from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";
import o from "../../assets/o.png";
import x from "../../assets/x.png";
import { ValuesProps } from "../TicTacToeTop";

export type BoxProps = {
  turnToggle: boolean;
  setTurnToggle: Dispatch<SetStateAction<boolean>>;
  values: ValuesProps;
  setValues: Dispatch<SetStateAction<ValuesProps>>;
  position: number;
  finishedToggle: boolean;
};

function TicTacToeBox({
  turnToggle,
  setTurnToggle,
  values,
  setValues,
  position,
  finishedToggle,
}: BoxProps) {
  const valuesArray = useMemo(
    () => [
      values.zero,
      values.one,
      values.two,
      values.three,
      values.four,
      values.five,
      values.six,
      values.seven,
      values.eight,
    ],
    [values]
  );

  const handlePress = useCallback(() => {
    if (finishedToggle) {
      if (!valuesArray[position]) {
        if (turnToggle) {
          switch (position) {
            case 0:
              setValues({ ...values, zero: "o" });
              break;
            case 1:
              setValues({ ...values, one: "o" });
              break;
            case 2:
              setValues({ ...values, two: "o" });
              break;
            case 3:
              setValues({ ...values, three: "o" });
              break;
            case 4:
              setValues({ ...values, four: "o" });
              break;
            case 5:
              setValues({ ...values, five: "o" });
              break;
            case 6:
              setValues({ ...values, six: "o" });
              break;
            case 7:
              setValues({ ...values, seven: "o" });
              break;
            case 8:
              setValues({ ...values, eight: "o" });
              break;
            default:
              break;
          }
        } else {
          switch (position) {
            case 0:
              setValues({ ...values, zero: "x" });
              break;
            case 1:
              setValues({ ...values, one: "x" });
              break;
            case 2:
              setValues({ ...values, two: "x" });
              break;
            case 3:
              setValues({ ...values, three: "x" });
              break;
            case 4:
              setValues({ ...values, four: "x" });
              break;
            case 5:
              setValues({ ...values, five: "x" });
              break;
            case 6:
              setValues({ ...values, six: "x" });
              break;
            case 7:
              setValues({ ...values, seven: "x" });
              break;
            case 8:
              setValues({ ...values, eight: "x" });
              break;
            default:
              break;
          }
        }
        setTurnToggle(!turnToggle);
      }
    }
  }, [finishedToggle, values, turnToggle, position]);

  const showValueImage = useCallback(() => {
    switch (valuesArray[position]) {
      case "o":
        return <Image source={o} style={styles.valueImage} />;
      case "x":
        return <Image source={x} style={styles.valueImage} />;
      default:
        return null;
    }
  }, [valuesArray, position]);

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
