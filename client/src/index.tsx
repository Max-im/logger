import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { setupStore } from './store/store';

import './styles/reset.scss'
import './styles/common.scss'

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement);
const store = setupStore();

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
