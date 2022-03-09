import { FC } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalTitle } from "react-bootstrap";

interface DialogProps {
  title:string;
  show:boolean;
  
  confirmButtonText?:string;
  cancelButtonText?:string;
  confirmClick: () => void;
  cancelClick: () => void;
}

const Dialog: FC<DialogProps> = (props) => {
  const {} = props

  return (<Modal>
    <ModalTitle>{props.title}</ModalTitle>
    <ModalBody>
      {props.children}
    </ModalBody>
    <ModalFooter>
      <Button variant="primary" onClick={props.confirmClick}>{props.confirmButtonText || "Confirm"}</Button>
      <Button variant="secondary" onClick={props.cancelClick} >{props.cancelButtonText || "Cancel"}</Button>
    </ModalFooter>
  </Modal>)
}

export default Dialog;