import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store.type";
import styles from "../styles/Notation.module.css";
import uploadButton from "../styles/UploadButton.module.css";
import pgnParser, { ParsedPGN } from "pgn-parser";
import { setPGN } from "../redux/gameSlice";
export const Notation = () => {
  const dispatch = useDispatch();
  const game = useSelector((state: RootState) => state.game);
  let parsedGame: ParsedPGN[] | null = null;
  if (game.currentGame?.pgn) {
    parsedGame = pgnParser.parse(game.currentGame.pgn);
    dispatch(setPGN(parsedGame));
  }
  return (
    <div className={styles.paddingSection}>
      <div id="notation" className={styles.base}>
        <div className={styles.line}>
          {parsedGame && (
            <div>
              {parsedGame[0].moves.map((item, index) => (
                <div
                  className={
                    styles.movePart +
                    " " +
                    (index % 2 === 0 ? styles.movePartOne : styles.movePartTwo)
                  }
                >
                  {(index % 2 === 0 ? item.move_number + "." : "") +
                    " " +
                    item.move +
                    " "}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.result}>0-0</div>
      </div>
      <div>
        <div className={styles.spacer}></div>
        <div className={styles.bottomContainer}>
          <div className={styles.bottomFileNameContainer}></div>
          <div className={styles.bottomButtonContainer}>
            <div className={styles.buttonObject}>
              <button className={uploadButton.base}>
                <div className={uploadButton.text}>
                  Upload | PGN
                  <svg
                    version="1.2"
                    baseProfile="tiny"
                    id="Download"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="-0.04 -0.04 170.079 170.079"
                    height="65%"
                    className={uploadButton.download}
                    style={{ display: "block", margin: "auto" }}
                  >
                    <rect
                      id="Bar"
                      x="-0.037"
                      y="147.362"
                      width="170.079"
                      height="22.677"
                    ></rect>
                    <rect
                      id="Arrow1"
                      x="67.907"
                      y="-0.04"
                      width="39.686"
                      height="85.04"
                    ></rect>
                    <polygon
                      id="Arrow2"
                      points="134.736,56.362 87.75,137.744 40.764,56.362 "
                    ></polygon>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
