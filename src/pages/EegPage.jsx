import React from 'react';
import EegForm from '../modules/eeg/components/EegForm';

const EegPage = () => (
  <div>
    <h2>Исселдование ЭЭГ</h2>
    <EegForm />
  </div>

);

export default React.memo(EegPage);
