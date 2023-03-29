import React from "react";
import "../styles/modalsuccess.scss"

export const ModalSuccess = () => {
  return (
    <form className="form-success">
      <div className="form-success__icon"></div>
      <div className="form-success__title">congratulations !</div>
      <div className="form-success__desc">
        The movie has been added to database successfully
      </div>
    </form>
  );
};
