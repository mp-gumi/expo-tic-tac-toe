import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ValuesProps } from "../Top";

export type ResultProps = {
  values: ValuesProps;
  setFinishedToggle: Dispatch<SetStateAction<boolean>>;
};

function Result({ values, setFinishedToggle }: ResultProps) {
  const judge = () => {
    if (values.four === "o") {
      if (values.four === values.zero && values.four === values.eight) {
        useEffect(() => setFinishedToggle(false), []);
        return "先手番の勝利です";
      }
      if (values.four === values.two && values.four === values.six) {
        useEffect(() => setFinishedToggle(false), []);
        return "先手番の勝利です";
      }
      if (values.four === values.one && values.four === values.seven) {
        useEffect(() => setFinishedToggle(false), []);
        return "先手番の勝利です";
      }
      if (values.four === values.three && values.four === values.five) {
        useEffect(() => setFinishedToggle(false), []);
        return "先手番の勝利です";
      }
    }
    if (values.zero === "o") {
      if (values.zero === values.one && values.zero === values.two) {
        useEffect(() => setFinishedToggle(false), []);
        return "先手番の勝利です";
      }
      if (values.zero === values.three && values.zero === values.six) {
        useEffect(() => setFinishedToggle(false), []);
        return "先手番の勝利です";
      }
    }
    if (values.eight === "o") {
      if (values.eight === values.two && values.eight === values.five) {
        useEffect(() => setFinishedToggle(false), []);
        return "先手番の勝利です";
      }
      if (values.eight === values.six && values.eight === values.seven) {
        useEffect(() => setFinishedToggle(false), []);
        return "先手番の勝利です";
      }
    }
    if (values.four === "x") {
      if (values.four === values.zero && values.four === values.eight) {
        useEffect(() => setFinishedToggle(false), []);
        return "後手番の勝利です";
      }
      if (values.four === values.two && values.four === values.six) {
        useEffect(() => setFinishedToggle(false), []);
        return "後手番の勝利です";
      }
      if (values.four === values.one && values.four === values.seven) {
        useEffect(() => setFinishedToggle(false), []);
        return "後手番の勝利です";
      }
      if (values.four === values.three && values.four === values.five) {
        useEffect(() => setFinishedToggle(false), []);
        return "後手番の勝利です";
      }
    }
    if (values.zero === "x") {
      if (values.zero === values.one && values.zero === values.two) {
        useEffect(() => setFinishedToggle(false), []);
        return "後手番の勝利です";
      }
      if (values.zero === values.three && values.zero === values.six) {
        useEffect(() => setFinishedToggle(false), []);
        return "後手番の勝利です";
      }
    }
    if (values.eight === "x") {
      if (values.eight === values.two && values.eight === values.five) {
        useEffect(() => setFinishedToggle(false), []);
        return "後手番の勝利です";
      }
      if (values.eight === values.six && values.eight === values.seven) {
        useEffect(() => setFinishedToggle(false), []);
        return "後手番の勝利です";
      }
    }
    return null;
  };

  return <Text style={styles.text}>{judge()}</Text>;
}

const styles = StyleSheet.create({
  text: { textAlign: "center", margin: 10, fontSize: 20 },
});

export default Result;
