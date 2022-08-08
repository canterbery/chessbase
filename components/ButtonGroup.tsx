import React from "react";
import styles from "../styles/ButtonGroup.module.css";
type Props = {
  onclick: React.MouseEventHandler;
};
export const ButtonGroup: React.FC<Props> = ({ onclick }) => {
  return (
    <div className={styles.container}>
      <button className={styles.base} onClick={onclick}>
        <svg
          version="1.2"
          baseProfile="tiny"
          id="ResetIcon"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          height="60%"
          viewBox="0 0 187.862 164"
          className="CBIcons_defaultIcon"
          style={{ display: "block", margin: "auto" }}
        >
          <path
            d="M82,135.848c-29.738,0-53.848-24.109-53.848-53.848S52.262,28.152,82,28.152c9.961,0,19.283,2.715,27.286,7.431
 l14.266-24.269C111.364,4.135,97.168,0,82,0C36.713,0,0,36.713,0,82s36.713,82,82,82s82-36.713,82-82h-28.152
 C135.848,111.738,111.738,135.848,82,135.848z"
          ></path>
          <polygon points="111.124,82.652 149.493,16.195 187.862,82.652 "></polygon>
        </svg>
        <div className={styles.border + " " + styles.borderRight}></div>
      </button>

      <button className={styles.base}>
        <svg
          version="1.2"
          baseProfile="tiny"
          id="Ebene_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 274.446 170"
          height="38%"
          className="CBIcons_defaultIcon"
          style={{ display: "block", margin: "auto" }}
        >
          <path d="M274.446,150c0,11-7.794,15.5-17.32,10L144.543,95c-9.526-5.5-9.526-14.5,0-20l112.582-65c9.526-5.5,17.32-1,17.32,10V150z"></path>
          <path d="M147.223,150c0,11-7.794,15.5-17.32,10L17.32,95c-9.526-5.5-9.526-14.5,0-20l112.583-65c9.526-5.5,17.32-1,17.32,10V150z"></path>
          <path d="M28,10c0-5.5-4.5-10-10-10h-8C4.5,0,0,4.5,0,10v150c0,5.5,4.5,10,10,10h8c5.5,0,10-4.5,10-10V10z"></path>
        </svg>
        <div className={styles.border + " " + styles.borderRight}></div>
      </button>
      <button className={styles.base} style={{ flexGrow: "1.5" }}>
        <svg
          version="1.2"
          baseProfile="tiny"
          id="Ebene_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 137.047 154.695"
          height="40%"
          className="CBIcons_defaultIcon"
          style={{ display: "block", margin: "auto" }}
        >
          <path
            d="M137.047,142.347c0,11-7.794,15.5-17.32,10l-112.583-65c-9.526-5.5-9.526-14.5,0-20l112.583-65c9.526-5.5,17.32-1,17.32,10
 V142.347z"
          ></path>
        </svg>
        <div className={styles.border + " " + styles.borderRight}></div>
      </button>
      <button className={styles.base} style={{ flexGrow: "1.5" }}>
        <svg
          version="1.2"
          baseProfile="tiny"
          id="Ebene_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 137.047 154.695"
          height="40%"
          className="CBIcons_defaultIcon"
          style={{ display: "block", margin: "auto" }}
        >
          <path
            d="M0,12.347c0-11,7.794-15.5,17.32-10l112.583,65c9.526,5.5,9.526,14.5,0,20l-112.583,65c-9.526,5.5-17.32,1-17.32-10V12.347z
 "
          ></path>
        </svg>
        <div className={styles.border + " " + styles.borderRight}></div>
      </button>
      <button className={styles.base}>
        <svg
          version="1.2"
          baseProfile="tiny"
          id="Ebene_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 274.446 170"
          height="38%"
          className="CBIcons_defaultIcon"
          style={{ display: "block", margin: "auto" }}
        >
          <path d="M0,20C0,9,7.794,4.5,17.32,10l112.583,65c9.526,5.5,9.526,14.5,0,20L17.32,160C7.794,165.5,0,161,0,150V20z"></path>
          <path d="M127.223,20c0-11,7.794-15.5,17.32-10l112.582,65c9.526,5.5,9.526,14.5,0,20l-112.582,65c-9.526,5.5-17.32,1-17.32-10V20z"></path>
          <path d="M246.446,160c0,5.5,4.5,10,10,10h8c5.5,0,10-4.5,10-10V10c0-5.5-4.5-10-10-10h-8c-5.5,0-10,4.5-10,10V160z"></path>
        </svg>
        <div className={styles.border + " " + styles.borderRight}></div>
      </button>
      <button className={styles.base}>
        <svg
          version="1.2"
          baseProfile="tiny"
          id="TurnBoardIcon"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 303.866 170"
          height="60%"
          className="CBIcons_defaultIcon"
          style={{ display: "block", margin: "auto" }}
        >
          <path
            d="M274.076,77.414c0-25.335-20.364-45.872-45.485-45.872V0c41.568,1.208,74.902,35.367,74.902,77.362
 c0,41.993-33.334,76.154-74.902,77.362v-31.438C253.711,123.285,274.076,102.748,274.076,77.414z"
          ></path>
          <polygon
            id="Pointer02"
            points="176.938,139.509 229.621,109.018 229.621,170 "
          ></polygon>
          <path
            id="Board"
            d="M169.956,0v170H0.374V0H169.956z M22.818,147.5h62.346V85h62.346V22.5H85.165V85H22.818V147.5z"
          ></path>
        </svg>
      </button>
    </div>
  );
};
