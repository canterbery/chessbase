import styles from "../styles/GameInfoPanel.module.css";
import player from "../styles/PlayerInfo.module.css";
export const GameInfoPanel = () => {
  return (
    <div className={styles.gameInfoModule}>
      <div className={styles.gameInfoPadding}>
        <div id="gameInfo" className={styles.base}>
          <div className={player.playerInfo + " " + player.left}>
            <div>
              <a
                href="https://www.chess.com/member/erik"
                target="_blank"
                rel="noopener norefferer"
              >
                <img
                  className={player.image}
                  alt="Eric Hansen"
                  src="https://images.chesscomfiles.com/uploads/v1/user/41.5434c4ff.200x200o.5b102889d835.jpeg"
                ></img>
              </a>
            </div>
            <div className={player.textContainer}>
              <div className={player.name}>
                <a
                  className={player.link}
                  href="https://www.chess.com/member/erik"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Eric Hansen
                </a>
              </div>
              <div className={player.playerData}>
                <span>GM</span>
                <br />
                <span>2773</span>
                <br />
                <span>USA</span>
              </div>
            </div>
          </div>
          <div className={styles.centerInfo}>
            <div className={styles.result}>1-0</div>
            <div className={styles.tournament}>Chess.com Rapid Wk20 KO</div>
          </div>
          <div className={player.playerInfo + " " + player.right}>
            <div className={player.textContainer}>
              <div className={player.name}>
                <a
                  className={player.link}
                  href="https://www.chess.com/member/erik"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Eric Hansen
                </a>
              </div>
              <div className={player.playerData}>
                <span>GM</span>
                <br />
                <span>2773</span>
                <br />
                <span>USA</span>
              </div>
            </div>
            <div>
              <a
                href="https://www.chess.com/member/erik"
                target="_blank"
                rel="noopener norefferer"
              >
                <img
                  className={player.image}
                  alt="Eric Hansen"
                  src="https://images.chesscomfiles.com/uploads/v1/user/41.5434c4ff.200x200o.5b102889d835.jpeg"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
