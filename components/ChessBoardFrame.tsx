import styles from "../styles/ChessBoardFrame.module.css";
import { ButtonGroup } from "./ButtonGroup";
import { ChessBoard } from "./ChessBoard";
import { Board } from "../models/Board";
import { useEffect, useReducer, useState } from "react";
import { Notation } from "./Notation";
export const ChessBoardFrame = () => {
  const [board, setBoard] = useState(new Board());
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  function restart() {
    const newBoard = new Board();
    newBoard.addFigures();
    setBoard(newBoard);
  }
  useEffect(() => restart(), []);

  const click = () => {
    board.moveFigure(board.figures[0], 0, -150);
    forceUpdate();
    //alert(board.figures[0].deltaY);
  };
  return (
    <div className={styles.boardFrame}>
      <ChessBoard board={board} />
      <ButtonGroup onclick={click} />
      <Notation />
    </div>
  );
};
