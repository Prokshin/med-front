import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { getModalContent, getShowModal } from '../../modules/core/coreSelector';
import { actions } from '../../modules/core/coreSlice';

const ModalWrap = () => {
  const dispatch = useDispatch();
  const show = useSelector(getShowModal);
  const data = useSelector(getModalContent);
  const closeModal = useCallback(() => {
    dispatch(actions.hideModal(''));
  }, []);
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <div className="d-flex justify-content-between w-100 align-items-center">
          <h2>{data.title}</h2>
          <button type="button" className="btn-close" onClick={closeModal} aria-label="Close" />
        </div>
      </Modal.Header>
      <Modal.Body>
        <p>{data.content}</p>
      </Modal.Body>
    </Modal>
  );
};

export default React.memo(ModalWrap);
