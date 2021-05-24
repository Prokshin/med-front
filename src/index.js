import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Provider } from 'react-redux';
import {
  ToastContainer, Slide,
} from 'react-toastify';
import App from './App';
import configureAppStore from './core/store';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './common/components/Modal';

const store = configureAppStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ToastContainer
      position="top-center"
      transition={Slide}
      hideProgressBar
      pauseOnHover
    />
    <Modal />
  </Provider>,
  document.getElementById('root'),
);
