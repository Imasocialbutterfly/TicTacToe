import React, { useContext } from "react";
import { Title, Subtitle } from "../../../styles/General.styled";
import { ModalBody, ModalFooter, ModalHeader } from "../Modal.styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../context/GameContext";
import { ModalContext } from "../../../context/ModalContext";
import { useNavigate } from "react-router-dom";
import { SoundEffectsContext } from "../../../context/SoundEffectsContext";

function RoundOverModal() {
  const { resetBoard, game, restartGame } = useContext(GameContext);
  const { hoverSfx, clickSfx, completedSfx } = useContext(SoundEffectsContext);
  const { handleModal } = useContext(ModalContext);

  const navigate = useNavigate();

  return (
    <>
      <ModalHeader>
        <Title primary>
          {game.roundWinner
            ? `${game.roundWinner.name} Wins Round`
            : "Round drawn"}
        </Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle primary>Choices will be switched now.</Subtitle>
        <Subtitle primary>
          {game.player1.name}: {game.player1.score}
        </Subtitle>
        <Subtitle primary>
          {game.player2.name}: {game.player2.score}
        </Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button
          color="#f9c811"
          onClick={() => {
            clickSfx();
            handleModal();
            resetBoard();
          }}
          onMouseEnter={() => hoverSfx()}
        >
          Continue
        </Button>
        <Button
          color="#8437f9"
          onClick={() => {
            clickSfx();
            restartGame();
            handleModal();
            completedSfx();
          }}
          onMouseEnter={() => hoverSfx()}
        >
          Restart
        </Button>
      </ModalFooter>
    </>
  );
}

export default RoundOverModal;
