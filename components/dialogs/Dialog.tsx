import { FC } from "react";
import { Button, Modal } from "react-bootstrap";

export interface DialogProps {
  title:string;
  confirmButtonText?:string;
  cancelButtonText?:string;
  confirmDisabled?:boolean;
  confirmClick: () => void;
  cancelClick: () => void;
}

const Dialog: FC<DialogProps> = (props) => {  

  return <Modal show onHide={props.cancelClick}>
    <Modal.Header closeButton>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {props.children}
    </Modal.Body>
    <Modal.Footer>
      { props.cancelButtonText && <Button variant="secondary" onClick={props.cancelClick} >{props.cancelButtonText}</Button>}
      <Button variant="primary" disabled={props.confirmDisabled} onClick={props.confirmClick}>{props.confirmButtonText || "Confirm"}</Button>      
    </Modal.Footer>
  </Modal>
}

export default Dialog;
