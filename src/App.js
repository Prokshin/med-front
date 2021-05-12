import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginPage from './pages/LoginPage';
import Menu from './common/components/Menu';
import DashboardPage from './pages/DashboardPage';
import { actions } from './modules/user/slices/userSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchUserRequest(''));
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route>
          <Menu />
          <div className="container">

            <Route exact path="/">
              <DashboardPage />
            </Route>

          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
