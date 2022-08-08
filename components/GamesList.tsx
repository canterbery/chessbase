import { useDispatch } from "react-redux";
import useSWR from "swr";
import { Profile } from "../pages";
import { setGame } from "../redux/gameSlice";
import styles from "../styles/GamesList.module.css";
import { GameRow } from "./GameRow";

type Props = {
  player: Profile | null;
};

export type Game = {
  white: {
    // details of the white-piece player:
    username: "string"; // the username
    rating: number; // the player's rating after the game finished
    result: "string"; // see "Game results codes" section
    "@id": "string"; // URL of this player's profile
  };
  black: {
    // details of the black-piece player:
    username: "string"; // the username
    rating: number; // the player's rating after the game finished
    result: "string"; // see "Game results codes" section
    "@id": "string"; // URL of this player's profile
  };
  accuracies?: {
    // player's accuracies, if they were previously calculated
    white: number;
    black: number;
  };
  url: "string"; // URL of this game
  fen: "string"; // final FEN
  pgn: "string"; // final PGN
  start_time?: number; // timestamp of the game start (Daily Chess only)
  end_time: number; // timestamp of the game end
  time_control: "string"; // PGN-compliant time control
  rules: "string"; // game variant information (e.g., "chess960")
  eco?: "string"; //URL pointing to ECO opening (if available),
  tournament?: "string"; //URL pointing to tournament (if available),
  match?: "string"; //URL pointing to team match (if available)
};

type Games = {
  games: Game[];
};
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const GamesList: React.FC<Props> = ({ player }) => {
  const dispatch = useDispatch();
  let gameList: Games = {
    games: [],
  };
  if (player) {
    const { data, error } = useSWR<Games>(
      `https://api.chess.com/pub/player/${player.username}/games/2022/07`,
      fetcher
    );
    if (data) {
      gameList.games = data.games;
    }
  }
  const handleClick = (game: Game) => {
    dispatch(setGame(game));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div
          className={styles.cellOuter + " " + styles.headerCellSortable}
          style={{ flexGrow: "1.2" }}
        >
          <div className={styles.resizer}>
            <div className={styles.visibleResizer}></div>
          </div>
          <div className={styles.cellInner}>Year</div>
        </div>
        <div
          className={styles.cellOuter + " " + styles.headerCellSortable}
          style={{ flexGrow: "3.3" }}
        >
          <div className={styles.resizer}>
            <div className={styles.visibleResizer}></div>
          </div>
          <div className={styles.cellInner}>White</div>
        </div>
        <div
          className={styles.cellOuter + " " + styles.headerCellSortable}
          style={{ flexGrow: "1.2" }}
        >
          <div className={styles.resizer}>
            <div className={styles.visibleResizer}></div>
          </div>
          <div className={styles.cellInner}>Elo</div>
        </div>
        <div
          className={styles.cellOuter + " " + styles.headerCellSortable}
          style={{ flexGrow: "3.3" }}
        >
          <div className={styles.resizer}>
            <div className={styles.visibleResizer}></div>
          </div>
          <div className={styles.cellInner}>Black</div>
        </div>
        <div
          className={styles.cellOuter + " " + styles.headerCellSortable}
          style={{ flexGrow: "1.2" }}
        >
          <div className={styles.resizer}>
            <div className={styles.visibleResizer}></div>
          </div>
          <div className={styles.cellInner}>Elo</div>
        </div>
        <div
          className={styles.cellOuter + " " + styles.headerCellSortable}
          style={{ flexGrow: "1.3" }}
        >
          <div className={styles.resizer}>
            <div className={styles.visibleResizer}></div>
          </div>
          <div className={styles.cellInner}>Result</div>
        </div>
        <div
          className={styles.cellOuter + " " + styles.headerCellSortable}
          style={{ flexGrow: "1.2" }}
        >
          <div className={styles.resizer}>
            <div className={styles.visibleResizer}></div>
          </div>
          <div className={styles.cellInner}>ECO</div>
        </div>
      </div>
      <div className={styles.body}>
        {gameList.games.map((item, index) => (
          <GameRow game={item} index={index} click={() => handleClick(item)} />
        ))}
      </div>
    </div>
  );
};
