import React, { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actions } from '../slices/ecgSlice';

const EcgArrhythmiaForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const ref = useRef(null);
  const [file, setFile] = useState(null);

  const [title, setTitle] = useState('');

  const onChangeFile = useCallback((e) => {
    if (e.target?.files[0]?.type === 'application/vnd.ms-excel') {
      setFile((e.target.files[0]));
    }
  }, []);

  const onChangTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.sendEcgRequest({ file, title, history }));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Название исследования</label>
        <input className="form-control mb-3" type="text" id="title" onChange={onChangTitle} />
        <label htmlFor="formFile" className="form-label">Загрузите файл в формате .csv</label>
        <input className="form-control" type="file" id="formFile" onChange={onChangeFile} ref={ref} />
      </div>
      <button type="submit" className="btn btn-primary">Отправить</button>
    </form>
  );
};

export default EcgArrhythmiaForm;
