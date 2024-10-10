import React, { useContext } from "react";
import { Title, Subtitle } from "../../../styles/General.styled";
import { ModalBody, ModalFooter, ModalHeader } from "../Modal.styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../context/GameContext";
import { ModalContext } from "../../../context/ModalContext";

function RoundOverModal() {
  const { resetBoard } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  return (
    <>
      <ModalHeader>
        <Title primary>Fred Wins Round</Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle primary>Choices will be switched now.</Subtitle>
        <Subtitle primary>Fred: 1</Subtitle>
        <Subtitle primary>Akhil: 0</Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button
          color="#f9c811"
          onClick={() => {
            handleModal();
            resetBoard();
          }}
        >
          Continue
        </Button>
        <Button color="#8437f9">Restart</Button>
      </ModalFooter>
    </>
  );
}

export default RoundOverModal;
