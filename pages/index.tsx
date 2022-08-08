import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import useSWR from "swr";
import { ChessBoardFrame } from "../components/ChessBoardFrame";
import { ChessPlayersFrame } from "../components/ChessPlayersFrame";
import { GameInfoPanel } from "../components/GameInfoPanel";
import { GamesList } from "../components/GamesList";
import { WatchList } from "../constants/WatchList";
import styles from "../styles/Home.module.css";

export type Profile = {
  url: string;
  username: string;
  player_id: number;
  title?: string;
  name?: string;
  avatar?: string;
  country: string;
  fide: number;
};
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const [currentPlayer, setPlayer] = useState<Profile | null>(null);
  let profiles: Profile[] = [];

  WatchList.forEach((item) => {
    const { data, error } = useSWR<Profile>(
      `https://api.chess.com/pub/player/${item}`,
      fetcher
    );
    if (data) profiles.push(data);
  });

  const setCurrentPlayer = (player: Profile) => {
    setPlayer(player);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Chess Database</title>
        <meta name="description" content="training project" />
      </Head>
      <div className={styles.leftFrame}>
        <ChessBoardFrame />
      </div>
      <div className={styles.centerFrame}>
        <GameInfoPanel />
        <GamesList player={currentPlayer} />
      </div>
      <div className={styles.rightFrame}>
        <ChessPlayersFrame profiles={profiles} onclick={setCurrentPlayer} />
      </div>
    </div>
  );
};

export default Home;
