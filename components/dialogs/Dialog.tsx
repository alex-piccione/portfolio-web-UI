import { FC, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import SpinnerContainer from "../../containers/SpinnerContainer";

export interface DialogProps {
  title:string;
  confirmButtonText?:string;
  cancelButtonText?:string;
  confirmDisabled?:boolean;
  confirmClick: () => void;
  cancelClick: () => void;
  isBusy?:boolean;
}

const Dialog: FC<DialogProps> = (props) => {  
  const isBusy = props.isBusy || false
  const [show, setShow] = useState(true);

  const handleClose = () => {setShow(false); setTimeout(() => props.cancelClick(), 500) }

  return <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <SpinnerContainer isLoading={isBusy}>
      {props.children}
      </SpinnerContainer>
    </Modal.Body>
    <Modal.Footer>
      { props.cancelButtonText && <Button variant="secondary" onClick={props.cancelClick} >{props.cancelButtonText}</Button>}
      <Button variant="primary" disabled={props.confirmDisabled || isBusy} onClick={props.confirmClick}>{props.confirmButtonText || "Confirm"}</Button>      
    </Modal.Footer>
  </Modal>
}

export default Dialog;
