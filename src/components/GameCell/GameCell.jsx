import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../context/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import { ReactComponent as IconX } from "../../assets/svgs/icon-x.svg";
import { ReactComponent as IconO } from "../../assets/svgs/icon-o.svg";
import { ReactComponent as IconOutlineX } from "../../assets/svgs/icon-x-outline.svg";
import { ReactComponent as IconOutlineO } from "../../assets/svgs/icon-o-outline.svg";
import { ModalContext } from "../../context/ModalContext";
import  RoundOverModal  from '../Modal/RoundOverModal/RoundOverModal';

function GameCell({ cellItem, index }) {
  const { updateBoard, game } = useContext(GameContext);
  const {handleModal} = useContext(ModalContext)

  const cellClickHandler = () => {
    updateBoard(index);
    if (checkForWinner(game.board)) {
      handleModal(<RoundOverModal/>)
    };
  };

  if (cellItem === "x") {
    return (
      <CellStyle>
        <IconX/>
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        <IconO/>
      </CellStyle>
    );
  }

  return (
    <CellStyle onClick={cellClickHandler}>
      {game.trun === "x" ? (
        <IconOutlineX className="outlineIcon" />
      ) : (
        <IconOutlineO className="outlineIcon" />
      )}
    </CellStyle>
  );
}

export default GameCell;
