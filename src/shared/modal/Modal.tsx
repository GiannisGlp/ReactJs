import React from 'react';
import classes from './Modal.module.css';
import MainButton from '../buttons/MainButton';

interface IModal {
  firstButtonTitle: string;
  secondButtonTitle?: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  content: React.ReactNode;
  okButton?: () => void;
  secondButton?: boolean;
}

const Modal = ({
  firstButtonTitle,
  secondButtonTitle,
  showModal,
  setShowModal,
  content,
  okButton = () => {},
  secondButton = false,
}: IModal) => {
  const showHideClassName = showModal
    ? [classes.modal, classes.displayBlock].join(' ')
    : [classes.modal, classes.displayNone].join(' ');
  return (
    <div className={showHideClassName} onClick={() => setShowModal(false)}>
      <section
        className={classes.modalMain}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <div className={classes.modalTop}></div> */}
        {content}
        <div className={classes.modalFooter}>
          <MainButton
            title={firstButtonTitle}
            onClick={() => setShowModal(false)}
          />
          {secondButton && (
            <MainButton title={secondButtonTitle} onClick={okButton} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Modal;
