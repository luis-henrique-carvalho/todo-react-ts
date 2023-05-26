import React from "react";
import { ModalStyled } from "../styles";

interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
    const closeModal = (e: React.MouseEvent): void => {
        const modal = document.getElementById("#modal")
        modal!.classList.add("hide")
    }
  return (
    <ModalStyled id="modal">
      <div className="fade" onClick={closeModal}></div>
      <div className="modal">
        <h2>texto modal</h2>
        {children}
      </div>
    </ModalStyled>
  );
};

export default Modal;
