import React, {useEffect, useRef} from 'react';

import css from './Modal.module.scss'

const Modal = ({children, onClose}) => {

  const backdropRef = useRef();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    }
  })

  const handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    onClose();
  };

  const handleBackdropClick = e => {
    const {current} = backdropRef;
    if (current && e.target !== current) {
      return;
    }
    onClose();
  };

  return (
      <div
          className={css.backdrop}
          ref={backdropRef}
          onClick={handleBackdropClick}
      >
        <div className={css.modal}>{children}</div>
      </div>
  )
}

export default Modal
