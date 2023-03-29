import React, { useEffect } from "react";
import { IModal } from "../types/modalwindow";
import "../styles/modal.scss"

export const ModalWindow = ({active, setActive, children, onClose}: IModal) => {
    const onKeydown = ({key}: KeyboardEvent) => {
        switch (key) {
            case 'Escape':
                onClose()
                break
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })
  return (
    <div className={active ? "modal active" : "modal"} onClick={()=> setActive(false)}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
      <div className="modal__icon" onClick={onClose}></div>
      {children}
      </div>
    </div>
  );
};
