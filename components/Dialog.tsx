import React, { FC, useState } from "react"
//import 'bootstrap/dist/js/bootstrap.min.js'
import { Button, Modal } from 'react-bootstrap'
import { IconType } from "react-icons"
import { FiPlus, FiPlusCircle } from "react-icons/fi"

// https://getbootstrap.com/docs/5.0/components/modal/
type OpenIcons = "Edit" | "Delete"

interface Props {
  // open by:
  //icon?: IconType, 
  clickableElement?: JSX.Element,
  button?: string,
  link?: string,

  title: string,
  //isOpen?: boolean
}

export const Dialog:FC<Props> = (props) => {
  let {clickableElement, button, link, title, children} = props

  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return <>     
    {clickableElement && <span onClick={open}>{clickableElement}</span> }
    {button && <button className="btn btn-sm" onClick={() => open()}>button</button> }
    {link && <a className="" onClick={open}>{link}</a> }
    
    <Modal show={isOpen} onHide={close}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
        <Button variant="primary" onClick={close}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  
    {isOpen && <div className="modal fade">
      <div className="modal-dialog modal-dialog-centered">  
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
          </div>
          <div className="modal-body">
            <div>{children}</div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => close()}>Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    }
  </>
}
