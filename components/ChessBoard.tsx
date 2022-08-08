import { cells } from "../constants/Cells";
import styles from "../styles/ChessBoard.module.css";
import images from "../styles/Pieces.module.css";
import pieces from "../styles/ChessPieces.module.css";
import { BottomMargin } from "./margins/BottomMargin";
import { LeftMargin } from "./margins/LeftMargin";
import { Board } from "../models/Board";

type Props = {
  board: Board;
};
export const ChessBoard: React.FC<Props> = ({ board }) => {
  return (
    <div className={styles.chessBoardGrid}>
      {cells.map((item, index) =>
        item.map((item, cell) => (
          <div
            className={
              styles.cellContainer +
              " " +
              ((index + cell) % 2 === 0 ? styles.blackField : styles.whiteField)
            }
            style={{ gridArea: item }}
          ></div>
        ))
      )}
      <LeftMargin />
      <BottomMargin />
      {board.figures.map((item) => (
        <div
          className={pieces.piece + " " + images[item.image]}
          style={{
            transition: "transform 0.25s ease 0s",
            transform: `translate(${item.deltaX}px, ${item.deltaY}px) scale(1)`,
          }}
        ></div>
      ))}
    </div>
  );
};
