import React from "react";
import { Modal } from "react-bootstrap";

const ConfirmModal = (props) => {
  return (
    <Modal show={props.show} onHide={() => props.handleRes(false)}>
      <Modal.Body>
        Are you sure, you want to remove this friend from your list?
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-success"
          onClick={() => props.handleRes(false)}
        >
          No
        </button>
        <button
          className="btn btn-danger"
          onClick={() => props.handleRes(true)}
        >
          I'm sure
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
