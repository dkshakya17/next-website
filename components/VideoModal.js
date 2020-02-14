import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";

function VideoModal(props) {
    return (
      <>
    <Modal 
     {...props}
     animation={false}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
     >
        <Modal.Body>
          <div className="video">
          <iframe id="cashgram-video" width="100%" height="600px" src={props.src} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <div className="close_btn" onClick={props.onHide}>x</div>
        </Modal.Body>
      </Modal>
      </>
    );
  }
  export default VideoModal;
