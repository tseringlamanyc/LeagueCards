import { Button } from "@mui/material";
import React from "react";
import "./Modal.scss";

function Modal({ closeModal, allytips, enemytips }) {
  return (
    <div className="modal">
      <div className="modal_container">
        <div className="modal_title">
          <h1>Tips</h1>
        </div>

        <div className="modal_tips">
          <div className="ally">
            <span>Ally-Tips</span>
            {allytips.map((tip) => {
              return <li>{tip}</li>;
            })}
          </div>

          <div className="line"></div>

          <div className="enemy">
            <span>Enemy-Tips</span>
            {enemytips.map((tip) => {
              return <li>{tip}</li>;
            })}
          </div>
        </div>

        <div className="modal_footer">
          <Button variant="contained" color="error" onClick={() => closeModal(false)}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
