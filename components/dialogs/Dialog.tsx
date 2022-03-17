import { FC } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalTitle } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

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

  return <Modal show={props.show}>
    <ModalHeader>
      <ModalTitle>{props.title}</ModalTitle>
    </ModalHeader>
    <ModalBody>
      {props.children}
    </ModalBody>
    <ModalFooter>
      <Button variant="secondary" onClick={props.cancelClick} >{props.cancelButtonText || "Cancel"}</Button>
      <Button variant="primary" onClick={props.confirmClick}>{props.confirmButtonText || "Confirm"}</Button>      
    </ModalFooter>
  </Modal>
}

export default Dialog;