import React from "react";
import { PlayerWrapper } from "./Player.styled";

function Player({ player, side, isPlayerActive }) {
  return (
    <PlayerWrapper isPlayerActive={isPlayerActive ?? false} side={side}>
      <div>
        {player.name}
        {player.choice}
      </div>
      <div>{player.score}</div>
    </PlayerWrapper>
  );
}

export default Player;
