import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../context/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import { ReactComponent as IconX } from "../../assets/svgs/icon-x.svg";
import { ReactComponent as IconO } from "../../assets/svgs/icon-o.svg";
import { ReactComponent as IconOutlineX } from "../../assets/svgs/icon-x-outline.svg";
import { ReactComponent as IconOutlineO } from "../../assets/svgs/icon-o-outline.svg";
import { ModalContext } from "../../context/ModalContext";
import { SoundEffectsContext } from "../../context/SoundEffectsContext";
import RoundOverModal from "../Modal/RoundOverModal";

function GameCell({ cellItem, index, isWinningCell }) {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const { hoverSfx, clickSfx, winSfx } =
    useContext(SoundEffectsContext);
  const { handleModal } = useContext(ModalContext);

  const cellClickHandler = () => {
    clickSfx();
    updateBoard(index);
    const result = checkForWinner(game.board);
    if (result) {
      roundComplete(result);
      if (result !== "draw") {
        winSfx();
      }
      setTimeout(() => {
        handleModal(<RoundOverModal />);
      }, 2000)
    }
  };

  if (cellItem === "x") {
    return (
      <CellStyle isWinningCell={isWinningCell ?? false}>
        <IconX className="markedItem"/>
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle isWinningCell={isWinningCell ?? false}>
        <IconO className="markedItem"/>
      </CellStyle>
    );
  }

  return (
    <CellStyle onClick={cellClickHandler} onMouseEnter={() => hoverSfx()}>
      {game.turn === "x" ? (
        <IconOutlineX className="outlineIcon" />
      ) : (
        <IconOutlineO className="outlineIcon" />
      )}
    </CellStyle>
  );
}

export default GameCell;
