import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actions } from '../slices/eegSlice';
import Loader from '../../../common/components/Loader';
import { getEegLoading } from '../selectors/eegSelectors';

const EegForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(getEegLoading);
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
    dispatch(actions.sendEegRequest({ file, title, history }));
  };

  return (

    <form onSubmit={onSubmit}>
      <Loader loading={loading}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Название исследования</label>
          <input className="form-control mb-3" type="text" id="title" onChange={onChangTitle} />
          <label htmlFor="formFile" className="form-label">Загрузите файл в формате .csv</label>
          <input className="form-control" type="file" id="formFile" onChange={onChangeFile} ref={ref} />
        </div>
        <button type="submit" className="btn btn-primary">Отправить</button>
      </Loader>
    </form>
  );
};

export default React.memo(EegForm);
