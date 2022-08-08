import styles from "../styles/GamesList.module.css";
import { Game } from "./GamesList";
type Props = {
  game: Game;
  index: number;
  click: React.MouseEventHandler;
};
export const GameRow: React.FC<Props> = ({ game, index, click }) => {
  return (
    <div
      className={styles.bodyRow + " " + (index % 2 === 0 ? styles.striped : "")}
      onClick={click}
    >
      <div className={styles.cellOuter} style={{ flexGrow: "1.2" }}>
        <div className={styles.cellInner}>2022</div>
      </div>
      <div className={styles.cellOuter} style={{ flexGrow: "3.3" }}>
        <div className={styles.cellInner}>{game.white.username}</div>
      </div>
      <div className={styles.cellOuter} style={{ flexGrow: "1.2" }}>
        <div className={styles.cellInner}>{game.white.rating}</div>
      </div>
      <div className={styles.cellOuter} style={{ flexGrow: "3.3" }}>
        <div className={styles.cellInner}>{game.black.username}</div>
      </div>
      <div className={styles.cellOuter} style={{ flexGrow: "1.2" }}>
        <div className={styles.cellInner}>{game.black.rating}</div>
      </div>
      <div className={styles.cellOuter} style={{ flexGrow: "1.3" }}>
        <div className={styles.cellInner}>
          {game.white.result + "-" + game.black.result}
        </div>
      </div>
      <div className={styles.cellOuter} style={{ flexGrow: "1.3" }}>
        <div className={styles.cellInner}>{game.eco}</div>
      </div>
    </div>
  );
};
