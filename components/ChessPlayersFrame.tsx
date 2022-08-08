import styles from "../styles/ChessPlayersFrame.module.css";
import card from "../styles/PlayerCard.module.css";
import { PlayerCard } from "./PlayerCard";
import { Profile } from "../pages";

type Props = {
  profiles: Profile[];
  onclick(player: Profile): void;
};
export const ChessPlayersFrame: React.FC<Props> = ({ profiles, onclick }) => {
  return (
    <div className={styles.playersFrame}>
      <div className={card.row}>
        {profiles.map((item) => (
          <PlayerCard profile={item} onclick={() => onclick(item)} />
        ))}
      </div>
    </div>
  );
};
