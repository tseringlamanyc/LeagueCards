import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./Modal.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "black",
  color: "white",
  border: "1px solid #FFFFFF",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ allytips, enemytips }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Tips
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div className="modaltips">
            <div className="ally">
              <span>Ally-Tips</span>
              {allytips.map((tip) => {
                return <li>{tip}</li>;
              })}
            </div>

            <div className="enemy">
              <span>Enemy-Tips</span>
              {enemytips.map((tip) => {
                return <li>{tip}</li>;
              })}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
