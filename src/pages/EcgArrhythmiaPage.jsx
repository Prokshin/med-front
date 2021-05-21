import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Route, Switch, useLocation, useRouteMatch,
} from 'react-router-dom';
import EcgArrhythmiaForm from '../modules/ecg/components/ecgArrhythmiaForm';
import { getEcgLastResult, getEcgLoading } from '../modules/ecg/selectors/ecgSelectors';
import EcgArrhythmiaLastResult from '../modules/ecg/components/ecgArrhytmiaLastResult';

const EcgArrhythmiaPage = () => {
  const location = useLocation();
  const { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Исселдование Экг</h2>
      <Switch>
        <Route exact path={path}>
          <EcgArrhythmiaForm />
        </Route>
        <Route path={`${path}/result`}>
          <EcgArrhythmiaLastResult />
        </Route>
      </Switch>
    </div>

  );
};

export default React.memo(EcgArrhythmiaPage);
