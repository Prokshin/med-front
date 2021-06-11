import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Field, Form, Formik,
} from 'formik';
import { actions } from '../slices/ecgSlice';
import Loader from '../../../common/components/Loader';
import { getEcgLoading } from '../selectors/ecgSelectors';
import { validateTitle } from '../../../common/validators';

const EcgArrhythmiaForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(getEcgLoading);
  const ref = useRef(null);
  const [file, setFile] = useState(null);

  const onChangeFile = useCallback((e) => {
    if (e.target?.files[0]?.type === 'application/vnd.ms-excel') {
      setFile((e.target.files[0]));
    }
  }, []);

  const onSubmit = ({ title }) => {
    dispatch(actions.sendEcgRequest({ file, title, history }));
  };

  return (

    <Formik
      initialValues={{
        title: '',
      }}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isValidating }) => (
        <Form>
          <Loader loading={loading}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Название исследования</label>
              {
            errors.title && touched.title
            && <div className="text-danger" role="alert">{errors.title}</div>
          }
              <Field
                className="form-control mb-3"
                type="text"
                id="title"
                name="title"
                validate={validateTitle}
              />
              <label htmlFor="formFile" className="form-label">Загрузите файл в формате .csv</label>
              <input className="form-control" type="file" id="formFile" lang="ru" onChange={onChangeFile} ref={ref} />
            </div>
            <button type="submit" className="btn btn-primary">Отправить</button>
          </Loader>
        </Form>
      )}
    </Formik>
  );
};

export default EcgArrhythmiaForm;
