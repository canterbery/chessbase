import { Profile } from "../pages";
import styles from "../styles/PlayerCard.module.css";

type Props = {
  profile: Profile;
  onclick: React.MouseEventHandler;
};

export const PlayerCard: React.FC<Props> = ({ profile, onclick }) => {
  return (
    <div className={styles.card} onClick={onclick}>
      <h3>{profile.name}</h3>
      <p>{profile.username}</p>
      <p>{profile.fide}</p>
    </div>
  );
};
