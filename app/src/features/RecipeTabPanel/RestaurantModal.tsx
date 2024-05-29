import { Backdrop, Button, Fade, Modal } from "@mui/material";
import React from "react";

const RestaurantModal = ({ isOpen, closeModal }: { isOpen: boolean, closeModal: () => void }): JSX.Element => {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'black',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
          }}>
            <h2>Modal Content</h2>
            <p>This is the content of the modal.</p>
            <Button onClick={closeModal}>Close Modal</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}


export default RestaurantModal;