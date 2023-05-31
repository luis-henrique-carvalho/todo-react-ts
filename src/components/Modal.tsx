import React, { useState } from "react";
import { ModalStyled } from "../styles/styles";
import { ITask } from "../interfaces/Task";

interface Props {
  children: React.ReactNode;
  hide: boolean;
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ setHide, hide, children }: Props) => {
  const closeModal = (): void => {
    setHide(true);
  };

  return (
    <ModalStyled modal={hide} >
      <div className="fade" onClick={closeModal}></div>
      <div className="modal">
        <h2>texto modal</h2>
        {children}
      </div>
    </ModalStyled>
  );
};

export default Modal;
