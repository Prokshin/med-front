import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginPage from './pages/LoginPage';
import Menu from './common/components/Menu';
import DashboardPage from './pages/DashboardPage';
import { actions } from './modules/user/slices/userSlice';
import ProfilePage from './pages/ProfilePage';
import ServicesList from './modules/services/components/ServicesList';
import ServicesPage from './pages/ServicesPage';
import HistoryPage from './pages/HistoryPage';

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

            <Route path="/profile">
              <ProfilePage />
            </Route>

            <Route path="/services">
              <ServicesPage />
            </Route>

            <Route path="/history">
              <HistoryPage />
            </Route>

          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
