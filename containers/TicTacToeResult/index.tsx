import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Text } from "react-native";

export type ResultProps = {
  resultMessage:
    | "先手番の勝利です"
    | "後手番の勝利です"
    | "引き分けです"
    | "先手番です"
    | "後手番です";
};

function TicTacToeResult({ resultMessage }: ResultProps) {
  return <Text>{resultMessage}</Text>;
}

export default TicTacToeResult;
