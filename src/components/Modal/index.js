import React from 'react'
import ReactDOM from 'react-dom'

import './Modal.css'

function Modal ({ children, onClose }) {
    debugger;
  return <div className='modal'>
    <div className='modal-content'>
      <button className='btn' onClick={onClose}>🅧</button>
      {children}
    </div>
  </div>
}

export default function ModalPortal ({ children, onClose }) {
    debugger;
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>
      {children}
    </Modal>,
    document.getElementById('modal-root')
  )
}