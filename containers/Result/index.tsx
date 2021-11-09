import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Text } from "react-native";
import { ValuesProps } from "../Top";

export type ResultProps = {
  values: ValuesProps;
  setFinishedToggle: Dispatch<SetStateAction<boolean>>;
  turnToggle: boolean;
};

function Result({ values, setFinishedToggle, turnToggle }: ResultProps) {
  const { zero, one, two, three, four, five, six, seven, eight } = values;
  const judge = () => {
    if (four === "o") {
      if (
        (four === zero && four === eight) ||
        (four === two && four === six) ||
        (four === one && four === seven) ||
        (four === three && four === five)
      ) {
        useEffect(() => setFinishedToggle(false), []);
        return "先手番の勝利です";
      }
    }
    if (zero === "o") {
      if ((zero === one && zero === two) || (zero === three && zero === six)) {
        useEffect(() => setFinishedToggle(false), []);
        return "先手番の勝利です";
      }
    }
    if (eight === "o") {
      if (
        (eight === two && eight === five) ||
        (eight === six && eight === seven)
      ) {
        useEffect(() => setFinishedToggle(false), []);
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
        useEffect(() => setFinishedToggle(false), []);
        return "後手番の勝利です";
      }
    }
    if (zero === "x") {
      if ((zero === one && zero === two) || (zero === three && zero === six)) {
        useEffect(() => setFinishedToggle(false), []);
        return "後手番の勝利です";
      }
    }
    if (eight === "x") {
      if (
        (eight === two && eight === five) ||
        (eight === six && eight === seven)
      ) {
        useEffect(() => setFinishedToggle(false), []);
        return "後手番の勝利です";
      }
    }
    if (zero && one && two && three && four && five && six && seven && eight) {
      return "引き分けです";
    }
    if (turnToggle) {
      return "先手番です";
    }
    return "後手番です";
  };

  return <Text>{judge()}</Text>;
}

export default Result;
