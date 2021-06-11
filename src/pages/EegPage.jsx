import React from 'react';
import EegForm from '../modules/eeg/components/EegForm';

const EegPage = () => (
  <div>
    <h2>Исселдование ЭЭГ</h2>
    <p>С помощью этого сервиса можно получить информацию о возможном приступе эпилепсии у пацинта по ЭЭГ.</p>
    <EegForm />
  </div>

);

export default React.memo(EegPage);
