import React, { useContext, useEffect, useRef, useState } from "react";
import {
  MusicPlayerWrapper,
  PlayIcon,
  PauseIcon,
  NextIcon,
} from "./MusicPlayer.styled";
import { randomizeIndex } from "../../utils/MusicUtils";
import { playList } from "../../utils/MusicUtils/playlist";
import { SoundEffectsContext } from "../../context/SoundEffectsContext";

function MusicPlayer() {
  const { hoverSfx, clickSfx } = useContext(SoundEffectsContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizeIndex(playList));
  const [playPromise, setPlayPromise] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const promise = playerRef.current?.play();
      setPlayPromise(promise);
      if (playerRef.current?.volume) playerRef.current.volume = 0.1;

      return;
    }
    playerRef.current.pause();
  }, [isPlaying, currentSong]);

  const shuffleHandler = async () => {
    clickSfx();
    await playPromise?.then(() => {
      playerRef.current?.pause();
      setIsPlaying(false);
    });

    setCurrentSong(randomizeIndex(playList));
    setIsPlaying(true);
  };

  const displaySong = playList[currentSong].split("/")[6];

  return (
    <MusicPlayerWrapper>
      {isPlaying ? (
        <PauseIcon
          onClick={() => {
            clickSfx();
            setIsPlaying(false);
          }}
          onMouseEnter={() => hoverSfx()}
        />
      ) : (
        <PlayIcon
          onClick={() => {
            setIsPlaying(true);
            clickSfx();
          }}
          onMouseEnter={() => hoverSfx()}
        />
      )}
      <NextIcon onClick={shuffleHandler} onMouseEnter={() => hoverSfx()} />

      <audio
        ref={playerRef}
        src={playList[currentSong]}
        onEnded={shuffleHandler}
      ></audio>
      <p>{displaySong}</p>
    </MusicPlayerWrapper>
  );
}

export default MusicPlayer;
