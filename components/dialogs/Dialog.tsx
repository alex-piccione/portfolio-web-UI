import { FC } from "react";
import { Button, Modal } from "react-bootstrap";

export interface DialogProps {
  title:string;
  show:boolean;
  
  confirmButtonText?:string;
  cancelButtonText?:string;
  confirmClick: () => void;
  cancelClick: () => void;
}

const Dialog: FC<DialogProps> = (props) => {
  const {} = props

  return props.show ? <Modal.Dialog>
    <Modal.Header closeButton>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {props.children}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.cancelClick} >{props.cancelButtonText || "Cancel"}</Button>
      <Button variant="primary" onClick={props.confirmClick}>{props.confirmButtonText || "Confirm"}</Button>      
    </Modal.Footer>
  </Modal.Dialog> : null
}

export default Dialog;