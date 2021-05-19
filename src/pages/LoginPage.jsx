import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { httpService } from '../data/DataProviderBase';
import { actions } from '../modules/core/coreSlice';
import LoginForm from '../modules/core/components/LoginForm';

const LoginPage = () => <LoginForm />;

export default React.memo(LoginPage);
